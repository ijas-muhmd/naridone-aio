import express from 'express';
import https from 'https';
import http from 'http';
import zlib from 'zlib';

const app = express();
const PORT = process.env.PORT || 3001;

// Vercel URL to proxy
const VERCEL_URL = 'naridone-aio-git-test-shopware-ijas-muhammeds-projects.vercel.app';

// CORS middleware
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  if (req.method === 'OPTIONS') {
    return res.sendStatus(200);
  }
  next();
});

// Proxy function to forward requests to Vercel
function proxyToVercel(basePath) {
  return (req, res) => {
    // When using app.use('/api', ...), Express strips the '/api' prefix from req.url
    // We need to add it back when forwarding to Vercel
    let targetPath = req.url;
    
    // Add the base path back (e.g., /api or /app)
    if (basePath && !targetPath.startsWith(basePath)) {
      targetPath = basePath + (targetPath.startsWith('/') ? targetPath : '/' + targetPath);
    }

    console.log(`Proxying ${req.method} ${req.originalUrl || req.url} → https://${VERCEL_URL}${targetPath}`);
    console.log(`Query params:`, req.query);

    const options = {
      hostname: VERCEL_URL,
      port: 443,
      path: targetPath,
      method: req.method,
      headers: {
        ...req.headers,
        host: VERCEL_URL,
      }
    };

    // Remove headers that shouldn't be forwarded
    delete options.headers['host'];
    delete options.headers['connection'];
    delete options.headers['content-length']; // Let Node.js calculate this
    
    // Force fresh request (no cache) to avoid 304 responses
    if (targetPath.includes('/api/register')) {
      options.headers['cache-control'] = 'no-cache';
      options.headers['pragma'] = 'no-cache';
      delete options.headers['if-none-match'];
      delete options.headers['if-modified-since'];
    }

    const proxyReq = https.request(options, (proxyRes) => {
      // Copy response headers (but remove content-encoding for JSON parsing)
      res.statusCode = proxyRes.statusCode;
      const contentType = proxyRes.headers['content-type'] || '';
      const contentEncoding = proxyRes.headers['content-encoding'];
      
      Object.keys(proxyRes.headers).forEach(key => {
        const lowerKey = key.toLowerCase();
        // Skip content-encoding header if we need to parse JSON
        // We'll handle decompression manually if needed
        if (lowerKey !== 'content-encoding' && lowerKey !== 'content-length') {
          res.setHeader(key, proxyRes.headers[key]);
        }
      });

      // For registration endpoint, we need to rewrite confirmation_url to use IP address
      console.log('Checking if registration endpoint:', targetPath, 'Status:', proxyRes.statusCode);
      // Handle any successful status code (2xx) including 200, 304, etc.
      const isSuccessStatus = proxyRes.statusCode >= 200 && proxyRes.statusCode < 300;
      const isRegisterEndpoint = targetPath.includes('/api/register');
      console.log('isRegisterEndpoint:', isRegisterEndpoint, 'isSuccessStatus:', isSuccessStatus);
      if (isRegisterEndpoint && isSuccessStatus) {
        console.log('Processing registration endpoint - will decompress if needed');
        const chunks = [];
        const contentEncoding = proxyRes.headers['content-encoding'];
        console.log('Content-Encoding:', contentEncoding);
        
        // Handle gzip/deflate compression
        let responseStream = proxyRes;
        if (contentEncoding === 'gzip') {
          console.log('Decompressing gzip response...');
          responseStream = proxyRes.pipe(zlib.createGunzip());
          responseStream.on('error', (err) => {
            console.error('Gunzip error:', err);
          });
        } else if (contentEncoding === 'deflate') {
          console.log('Decompressing deflate response...');
          responseStream = proxyRes.pipe(zlib.createInflate());
          responseStream.on('error', (err) => {
            console.error('Inflate error:', err);
          });
        } else {
          console.log('No compression detected, using raw stream');
        }
        
        responseStream.on('data', (chunk) => {
          chunks.push(chunk);
          console.log('Received chunk, total chunks:', chunks.length);
        });
        
        responseStream.on('end', () => {
          console.log('Stream ended, processing', chunks.length, 'chunks');
          try {
            const responseData = Buffer.concat(chunks).toString('utf8');
            
            // Log the raw response for debugging (first 500 chars)
            console.log('Decompressed response from Vercel (first 500 chars):', responseData.substring(0, 500));
            console.log('Response status:', proxyRes.statusCode);
            console.log('Content-Type:', proxyRes.headers['content-type']);
            console.log('Content-Encoding:', contentEncoding);
            
            if (!responseData || responseData.trim() === '') {
              console.error('Empty response from Vercel');
              res.status(500).json({ error: 'Empty response from Vercel' });
              return;
            }
            
            const json = JSON.parse(responseData);
            // Replace Vercel URL with host IP in confirmation_url
            // This ensures Shopware (in Docker) can reach the confirmation endpoint
            if (json.confirmation_url && json.confirmation_url.includes(VERCEL_URL)) {
              // Use main network IP (192.168.29.237) for confirmation since Shopware runs in Docker
              // This is the main network adapter IP on Windows
              json.confirmation_url = json.confirmation_url.replace(
                `https://${VERCEL_URL}`,
                `http://192.168.29.237:3001`
              );
              console.log(`Rewrote confirmation_url to: ${json.confirmation_url}`);
            }
            res.setHeader('Content-Type', 'application/json');
            res.end(JSON.stringify(json));
          } catch (error) {
            // If JSON parsing fails, log the error and response, then forward as-is
            const responseData = chunks.length > 0 ? Buffer.concat(chunks).toString('utf8') : '';
            console.error('Failed to parse/rewrite response:', error.message);
            console.error('Response status:', proxyRes.statusCode);
            console.error('Response headers:', proxyRes.headers);
            console.error('Response data (first 1000 chars):', responseData.substring(0, 1000));
            // Forward the original response even if we can't parse it
            res.end(responseData);
          }
        });
        
        responseStream.on('error', (error) => {
          console.error('Stream error:', error);
          if (!res.headersSent) {
            res.status(500).json({ error: 'Stream error', message: error.message });
          }
        });
      } else {
        // Forward response body as-is for non-registration endpoints
        console.log('Not a registration endpoint, piping response as-is');
        proxyRes.pipe(res);
      }
    });

    proxyReq.on('error', (error) => {
      console.error('Proxy error:', error);
      if (!res.headersSent) {
        res.status(500).json({ error: 'Proxy error', message: error.message });
      }
    });

    // Forward request body for POST/PUT requests
    if (req.method === 'POST' || req.method === 'PUT' || req.method === 'PATCH') {
      req.pipe(proxyReq);
    } else {
      proxyReq.end();
    }
  };
}

// Proxy all /api/* requests to Vercel
app.use('/api', proxyToVercel('/api'));

// Proxy /app requests to Vercel (for iframe)
app.use('/app', proxyToVercel('/app'));

// Health check
app.get('/health', (req, res) => {
  res.json({ status: 'ok', proxy: `https://${VERCEL_URL}` });
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`🚀 Vercel Proxy Server running on http://localhost:${PORT}`);
  console.log(`📝 Proxying to: https://${VERCEL_URL}`);
  console.log(`\n💡 Next step: Run ngrok in another terminal:`);
  console.log(`   ngrok http ${PORT}`);
  console.log(`\n📋 Then use the ngrok URL in your manifest.xml`);
});

