# Fixing Connection Timeout Issue

## Problem
Shopware Docker container can't connect to your proxy server within 1 second, causing timeout errors.

## Solutions (Try in order)

### Solution 1: Use Main Network IP (Already Updated) ✅

I've updated your `manifest.xml` to use `192.168.29.237` instead of `172.18.32.1`.

**Next steps:**
1. Restart proxy server (if needed)
2. Create new zip with updated manifest.xml
3. Try installing again

### Solution 2: Allow Port 3001 in Windows Firewall

The connection might be blocked by Windows Firewall:

1. **Open Windows Defender Firewall:**
   - Press `Win + R`
   - Type: `wf.msc` and press Enter

2. **Create Inbound Rule:**
   - Click "Inbound Rules" → "New Rule"
   - Select "Port" → Next
   - Select "TCP" and enter port `3001` → Next
   - Select "Allow the connection" → Next
   - Check all profiles (Domain, Private, Public) → Next
   - Name it "Node Proxy Port 3001" → Finish

3. **Create Outbound Rule (same steps, but "Outbound Rules")**

4. **Try installing again**

### Solution 3: Use Docker Host Network Mode

Run Docker container with host network (bypasses Docker networking):

```powershell
docker run --rm -p 80:80 --network host dockware/play:latest
```

Then use `localhost` in manifest:
```xml
<registrationUrl>http://localhost:3001/api/register</registrationUrl>
```

**Note:** This only works on Linux. On Windows, use Solution 4.

### Solution 4: Use Docker's Gateway IP (Windows)

Find Docker's actual gateway IP:

1. **Get Docker container ID:**
   ```powershell
   docker ps
   ```

2. **Check container's network:**
   ```powershell
   docker inspect <container-id> | findstr Gateway
   ```

3. **Use that IP in manifest.xml**

### Solution 5: Increase Shopware Timeout (If Possible)

The 1-second timeout is hardcoded in Shopware. If you have access to Shopware configuration:

- Look for cURL timeout settings
- Increase `CURLOPT_TIMEOUT_MS` or similar
- This might require Shopware source code access

### Solution 6: Use ngrok (Most Reliable)

Since ngrok worked for your other developer, it's the most reliable solution:

1. **Keep proxy running:** `npm run dev:proxy`

2. **Start ngrok:**
   ```bash
   ngrok http 3001
   ```

3. **Copy the ngrok HTTPS URL** (e.g., `https://abc123.ngrok-free.app`)

4. **Update manifest.xml:**
   ```xml
   <registrationUrl>https://abc123.ngrok-free.app/api/register</registrationUrl>
   ```

5. **Update vercel-proxy.js confirmation_url rewrite:**
   ```javascript
   json.confirmation_url = json.confirmation_url.replace(
     `https://${VERCEL_URL}`,
     `https://abc123.ngrok-free.app`
   );
   ```

6. **Create zip and install**

## Quick Test

Test if Docker can reach your proxy:

1. **Get Docker container ID:**
   ```powershell
   docker ps
   ```

2.    **Test connection from inside container:**
   ```powershell
   docker exec <container-id> curl -v --max-time 5 http://192.168.29.237:3001/health
   ```

   ✅ **Test Results:**
   - `192.168.29.237:3001` - **WORKS** (connected successfully)
   - `172.18.32.1:3001` - **TIMEOUT** (doesn't work)
   - Registration endpoint works from Docker container ✅
   
   **Conclusion:** Use `192.168.29.237` in manifest.xml (already updated ✅)
   
   **Important:** Restart proxy server after updating vercel-proxy.js to use correct IP for confirmation_url!

## Recommended Approach

**For now:** Try Solution 1 (already done) + Solution 2 (firewall)

**If that doesn't work:** Use Solution 6 (ngrok) - it's the most reliable

## Notes

- The 1-second timeout is very short - this is a Shopware limitation
- Connection timeout means Docker can't reach your machine, not DNS issue
- Windows Firewall often blocks Docker containers from accessing host ports
- ngrok bypasses all these issues by providing a public URL

