# Using Ngrok with Vercel URL

## ❌ Why `ngrok http https://...` Doesn't Work

Ngrok creates a tunnel **FROM your local server TO the internet**. It cannot tunnel directly to an external URL like Vercel.

## ✅ Correct Solution: Proxy Server + Ngrok

We'll create a local proxy server that forwards requests to Vercel, then expose it with ngrok.

## Step-by-Step Setup

### Step 1: Install Express (if not already installed)
```bash
npm install express
```

### Step 2: Start the Proxy Server
```bash
npm run dev:proxy
```

This starts a proxy server on `http://localhost:3001` that forwards all requests to your Vercel URL.

### Step 3: Start Ngrok (in a NEW terminal)
```bash
ngrok http 3001
```

You'll see output like:
```
Forwarding   https://abc123.ngrok-free.app -> http://localhost:3001
```

**Copy the HTTPS URL** (e.g., `https://abc123.ngrok-free.app`)

### Step 4: Update manifest.xml with Ngrok URL

Create a temporary manifest for local testing, or update your existing one:

```xml
<setup>
    <registrationUrl>https://abc123.ngrok-free.app/api/register</registrationUrl>
    <secret>naridon_secret_123</secret>
</setup>
<admin>
    <module name="NaridonAIO" source="https://abc123.ngrok-free.app/app" parent="sw-marketing">
         <label>Naridon AIO</label>
    </module>
</admin>
```

**Important:** Replace `abc123.ngrok-free.app` with your actual ngrok URL!

### Step 5: Create App Zip and Install

1. Create your zip file with the updated `manifest.xml`
2. Upload to Shopware admin
3. Click "Install"
4. It should work now! ✅

## How It Works

```
Shopware Docker → Ngrok URL → Local Proxy (port 3001) → Vercel URL
```

1. Shopware calls the ngrok URL (fast DNS resolution)
2. Ngrok forwards to your local proxy server
3. Local proxy forwards to Vercel
4. Response comes back through the same path

## Keep Both Running

**Important:** You need to keep BOTH running:
- ✅ Proxy server: `npm run dev:proxy` (Terminal 1)
- ✅ Ngrok: `ngrok http 3001` (Terminal 2)

If you close either one, the connection will break.

## Troubleshooting

### Ngrok URL changes every time?
- **Free ngrok:** URL changes on restart (use static domain if you have paid plan)
- **Solution:** Update manifest.xml each time you restart ngrok

### Still getting timeout?
- Make sure both proxy server AND ngrok are running
- Check ngrok dashboard: http://localhost:4040
- Verify proxy is working: Visit `http://localhost:3001/health` in browser

### Want to test the proxy?
Visit in browser:
- `http://localhost:3001/api/register?shop-id=test&shop-url=http://localhost`
- Should forward to Vercel and return a response

## Notes

- The proxy server forwards `/api/*` and `/app/*` to Vercel
- All other requests are also forwarded
- This is only for local development
- For production, use Vercel URL directly (after fixing Docker DNS)

