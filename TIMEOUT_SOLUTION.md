i # Solving the DNS Timeout Issue

## ❌ Why Adding Delay Won't Help

The timeout happens **before** your server receives the request:
1. Shopware tries to resolve DNS (convert domain name to IP address)
2. This takes longer than 1 second
3. Shopware gives up and shows timeout error
4. **Your server never receives the request** - so adding delay does nothing!

## ✅ Solution: Use `host.docker.internal` (Bypass DNS)

Instead of using ngrok (which requires DNS), use `host.docker.internal` which Docker provides to access the host machine **without DNS lookup**:

### Step 1: Update manifest.xml

Change your manifest to use `host.docker.internal`:

```xml
<setup>
    <registrationUrl>http://host.docker.internal:3001/api/register</registrationUrl>
    <secret>naridon_secret_123</secret>
</setup>
<admin>
    <module name="NaridonAIO" source="http://host.docker.internal:3001/app" parent="sw-marketing">
         <label>Naridon AIO</label>
    </module>
</admin>
```

### Step 2: Make sure proxy is running

```bash
npm run dev:proxy
```

### Step 3: Test locally first

Visit in browser: `http://localhost:3001/api/register?shop-id=test&shop-url=http://localhost`

Should return JSON response ✅

### Step 4: Install in Shopware

1. Create zip with updated manifest.xml
2. Upload and install
3. Should work without timeout! ✅

## Why This Works

- `host.docker.internal` is a special Docker hostname
- It resolves to your host machine's IP **instantly** (no DNS lookup)
- No network delay, no DNS timeout
- Direct connection from Docker container to your localhost:3001

## Alternative: If `host.docker.internal` Doesn't Work

### Option A: Use Your Machine's IP Address

1. Find your IP address:
   ```powershell
   ipconfig
   ```
   Look for "IPv4 Address" (e.g., `192.168.1.100`)

2. Update manifest.xml:
   ```xml
   <registrationUrl>http://192.168.1.100:3001/api/register</registrationUrl>
   ```

### Option B: Configure Docker Desktop DNS (Permanent Fix)

If you want to use ngrok URL, you MUST fix Docker DNS first:

1. Open Docker Desktop → Settings → Docker Engine
2. Add to JSON:
   ```json
   "dns": ["1.1.1.1", "1.0.0.1", "8.8.8.8"]
   ```
3. Click "Apply & Restart"
4. Wait for restart
5. Try ngrok URL again

## Summary

**Best Solution:** Use `host.docker.internal:3001` - no DNS, no timeout!

**If that doesn't work:** Use your machine's IP address

**For production:** Use Vercel URL directly (after fixing Docker DNS)

