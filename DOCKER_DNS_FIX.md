# Quick Fix: Docker Desktop DNS Configuration

## ✅ Step-by-Step Instructions

### 1. Open Docker Desktop
- Launch Docker Desktop application

### 2. Open Settings
- Click the **Settings icon** (⚙️ gear icon) in the top right corner
- Or click the Docker icon in system tray → Settings

### 3. Navigate to Docker Engine
- In the left sidebar, click **"Docker Engine"**

### 4. Edit JSON Configuration
You'll see a JSON editor. It might look like:
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

### 5. Add DNS Configuration
Add the `"dns"` line to the JSON. Your final JSON should look like:
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

**Important:** 
- Make sure there's a comma (`,`) after the closing `}` of the builder section
- The JSON must be valid (no syntax errors)

### 6. Apply Changes
- Click **"Apply & Restart"** button at the bottom
- Docker Desktop will restart (takes 30-60 seconds)
- Wait for Docker to fully restart before using containers

### 7. Test
After restart, start your Shopware container:
```powershell
docker run --rm -p 80:80 dockware/play:latest
```

The DNS servers are now configured automatically for all containers!

## 🔍 Verify It Worked

After Docker restarts, you can verify DNS is working:
1. Start a container
2. Check if DNS is configured:
   ```powershell
   docker exec <container-id> cat /etc/resolv.conf
   ```
   You should see `8.8.8.8`, `8.8.4.4`, and `1.1.1.1` listed

## ⚠️ If It Still Doesn't Work

If you still get timeout after configuring DNS:

1. **Try alternative DNS servers** - Update the JSON to:
   ```json
   "dns": ["1.1.1.1", "1.0.0.1", "8.8.8.8"]
   ```
   (Cloudflare DNS is often faster)

2. **Use ngrok** (Most reliable workaround):
   - Install ngrok: https://ngrok.com/download
   - Run: `ngrok http https://naridone-aio-git-test-shopware-ijas-muhammeds-projects.vercel.app`
   - Use the ngrok URL in your manifest.xml

3. **Check Windows Network**:
   - Ensure you have internet connection
   - Check if corporate firewall is blocking DNS
   - Try disabling VPN if you're using one

## 📝 Notes

- This configuration applies to **all containers** automatically
- You don't need to add `--dns` flags anymore
- The configuration persists across Docker Desktop restarts
- If you change it, Docker will restart again

