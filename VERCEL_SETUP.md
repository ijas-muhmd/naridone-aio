# Using Vercel URL with Local Shopware Docker

## Problem
Your Vercel app is already hosted and working, but when Shopware (in Docker) tries to register the app, it gets a DNS timeout:
```
cURL error 28: Resolving timed out after 1000 milliseconds
```

## Solution: Configure Docker DNS

The issue is that Docker's default DNS resolution is too slow. Here's how to fix it:

### Option 1: Run Docker with Better DNS (Recommended)

When starting your Shopware Docker container, use multiple DNS servers:

```powershell
docker run --rm -p 80:80 --dns 8.8.8.8 --dns 8.8.4.4 --dns 1.1.1.1 dockware/play:latest
```

This uses:
- Google DNS (8.8.8.8, 8.8.4.4)
- Cloudflare DNS (1.1.1.1)

Multiple DNS servers provide redundancy and faster resolution.

### Option 2: Configure Docker Desktop DNS (Permanent Fix) ⭐ RECOMMENDED

This is the **best solution** - it will fix DNS for all containers permanently:

1. **Open Docker Desktop**
2. **Click the Settings icon** (gear icon) in the top right
3. **Go to "Docker Engine"** (in the left sidebar)
4. **Find the JSON configuration** - it might look like:
   ```json
   {
     "builder": {
       "gc": {
         "defaultKeepStorage": "20GB",
         "enabled": true
       }
     }
   }
   ```
5. **Add DNS configuration** - modify it to:
   ```json
   {
     "builder": {
       "gc": {
         "defaultKeepStorage": "20GB",
         "enabled": true
       }
     },
     "dns": ["8.8.8.8", "8.8.4.4", "1.1.1.1"]
   }
   ```
6. **Click "Apply & Restart"** - Docker will restart
7. **Wait for Docker to restart** (may take 30-60 seconds)

**After restart, all containers will use these fast DNS servers automatically!**

### Option 2B: Alternative DNS Servers (If Option 2 doesn't work)

If Google/Cloudflare DNS still times out, try these:

```json
{
  "dns": ["1.1.1.1", "1.0.0.1", "8.8.8.8", "208.67.222.222"]
}
```

This uses:
- Cloudflare DNS (1.1.1.1, 1.0.0.1) - Usually fastest
- Google DNS (8.8.8.8)
- OpenDNS (208.67.222.222)

### Option 3: Use Docker Compose (If you have docker-compose.yml)

If you're using docker-compose, add DNS configuration:

```yaml
version: '3.8'
services:
  shopware:
    image: dockware/play:latest
    ports:
      - "80:80"
    dns:
      - 8.8.8.8
      - 8.8.4.4
      - 1.1.1.1
```

## Verify Your Setup

1. **Your `manifest.xml` is correct** - it already has the Vercel URL:
   ```xml
   <registrationUrl>https://naridone-aio-git-test-shopware-ijas-muhammeds-projects.vercel.app/api/register</registrationUrl>
   ```

2. **Vercel URL is accessible** - We tested it and it's working ✅

3. **The iframe source is correct**:
   ```xml
   <module name="NaridonAIO" source="https://naridone-aio-git-test-shopware-ijas-muhammeds-projects.vercel.app/app" parent="sw-marketing">
   ```

## Steps to Install

1. **Start Docker with proper DNS**:
   ```powershell
   docker run --rm -p 80:80 --dns 8.8.8.8 --dns 8.8.4.4 --dns 1.1.1.1 dockware/play:latest
   ```

2. **Create your app zip** with `manifest.xml` (which has the Vercel URL)

3. **Upload and install** in Shopware admin panel

4. **The app should load in iframe** from your Vercel URL

## Troubleshooting

### If DNS timeout still occurs:

1. **Check your internet connection** - Docker needs internet to resolve DNS

2. **Try flushing Docker DNS cache**:
   ```powershell
   docker system prune -f
   ```

3. **Test DNS from inside container** (when it's running):
   ```powershell
   docker exec <container-id> ping -c 1 8.8.8.8
   ```

4. **Check if Vercel URL is accessible from container**:
   ```powershell
   docker exec <container-id> curl -I https://naridone-aio-git-test-shopware-ijas-muhammeds-projects.vercel.app
   ```

### If Shopware still can't reach Vercel (After Docker DNS fix):

The 1-second timeout is very short. If DNS configuration doesn't work, try these workarounds:

#### Workaround 1: Use ngrok (Like your other developer did)

Since your other developer used ngrok successfully, this might be the most reliable solution:

1. **Install ngrok**: https://ngrok.com/download
2. **Start ngrok tunnel** to your Vercel URL:
   ```bash
   ngrok http https://naridone-aio-git-test-shopware-ijas-muhammeds-projects.vercel.app
   ```
   Or if you have a local server running:
   ```bash
   ngrok http 3001
   ```
3. **Copy the ngrok HTTPS URL** (e.g., `https://abc123.ngrok-free.app`)
4. **Update manifest.xml** temporarily with the ngrok URL:
   ```xml
   <registrationUrl>https://abc123.ngrok-free.app/api/register</registrationUrl>
   ```
5. **Create zip and install** - ngrok URLs usually resolve faster

#### Workaround 2: Use IP Address (If Vercel provides one)

Some CDNs provide direct IP access. However, Vercel uses dynamic IPs, so this won't work reliably.

#### Workaround 3: Check Windows Firewall/Antivirus

Sometimes Windows Firewall or antivirus can slow down DNS resolution:
- Temporarily disable Windows Firewall
- Check if antivirus is blocking Docker network access
- Add Docker to firewall exceptions

#### Workaround 4: Use WSL2 DNS (If using WSL2 backend)

If Docker Desktop uses WSL2 backend:
1. Edit `/etc/resolv.conf` in WSL2
2. Add: `nameserver 8.8.8.8`
3. Restart Docker Desktop

## Notes

- Your `manifest.xml` is already configured correctly with Vercel URL ✅
- The Vercel app is accessible and working ✅
- The issue is only DNS resolution speed in Docker
- Using multiple DNS servers should resolve this issue

