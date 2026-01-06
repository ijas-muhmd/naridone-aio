# 🔍 Check Which Database Your App Uses

## Current Situation

Your `.env` file points to: **AWS RDS (Cloud)** ☁️

```
DATABASE_URL="postgres://postgres:...@uniskool-db...rds.amazonaws.com:5432/shopeec_db"
```

Your `.env.local` file points to: **Local Database** 🐳

```
DATABASE_URL="postgresql://shahabas@localhost:5432/shopeec_dev"
```

---

## How Environment Files Work

Node.js and Shopify CLI load environment files in this order:

1. **`.env.local`** - Highest priority (local overrides)
2. **`.env`** - Default/production values

For **local development**, `.env.local` will override `.env`!

---

## ✅ To Use Local Database

### Method 1: Using .env.local (Recommended)

The `.env.local` file is already created for you with local settings!

Just run:

```bash
npm run dev
```

**Result:** App uses **local database** (because `.env.local` overrides `.env`)

### Method 2: Explicitly Set (Alternative)

If `.env.local` doesn't work automatically, explicitly set the URL:

```bash
DATABASE_URL="postgresql://shahabas@localhost:5432/shopeec_dev" npm run dev
```

**Result:** App uses **local database** (environment variable takes precedence)

---

## ☁️ To Use Cloud Database (AWS RDS)

To use production/cloud database:

```bash
# Temporarily rename .env.local
mv .env.local .env.local.backup

# Run dev - will use .env (AWS RDS)
npm run dev

# Restore when done
mv .env.local.backup .env.local
```

**Result:** App uses **cloud database**

---

## 🧪 How to Verify Which Database You're Connected To

### Quick Check Script

Run this to see which database your app will connect to:

```bash
cd /Users/shahabas/Projects/Shopeec && node -e "
require('dotenv').config({ path: '.env.local' });
require('dotenv').config({ path: '.env' });
console.log('\\n📊 Database Connection Check\\n');
console.log('DATABASE_URL:', process.env.DATABASE_URL);
console.log('');
if (process.env.DATABASE_URL.includes('localhost')) {
  console.log('✅ Using LOCAL database');
} else if (process.env.DATABASE_URL.includes('rds.amazonaws.com')) {
  console.log('☁️  Using CLOUD database (AWS RDS)');
} else {
  console.log('❓ Unknown database');
}
console.log('');
"
```

### Check While App is Running

After you run `npm run dev`, check the database by opening a new terminal:

```bash
# Connect to local database
psql -d shopeec_dev -c "SELECT COUNT(*) FROM \"Session\";"

# If you get results, your local DB is being used
# If you get "does not exist" error, check your connection
```

Or use Prisma Studio:

```bash
DATABASE_URL="postgresql://shahabas@localhost:5432/shopeec_dev" npx prisma studio
```

### Check Logs

When you run `npm run dev`, watch the startup logs for database connection info.

---

## 🎯 Recommended Setup

### For Local Development (Default)

Keep `.env.local` with local database settings:

```bash
DATABASE_URL="postgresql://shahabas@localhost:5432/shopeec_dev"
REDIS_URL="redis://localhost:6379"
```

This way:

- ✅ `npm run dev` uses **local database** automatically
- ✅ No risk of modifying production data
- ✅ Faster development (no network latency)
- ✅ Works offline

### Keep .env for Production

Keep `.env` with production settings (cloud):

```bash
DATABASE_URL="postgres://postgres:...@...rds.amazonaws.com:5432/shopeec_db"
```

This is useful when you need to:

- Test against production data
- Debug production issues
- Deploy to Vercel/production

---

## 🔐 Security Note

**Never commit either file!**

Both `.env` and `.env.local` are in `.gitignore`:

```
.env
.env.*
.env.local
```

✅ This is correct - your database credentials stay private!

---

## 📝 Summary

| Command                                       | Database Used | Why                           |
| --------------------------------------------- | ------------- | ----------------------------- |
| `npm run dev`                                 | **Local** 🐳  | `.env.local` overrides `.env` |
| `npm run dev` (after renaming .env.local)     | **Cloud** ☁️  | Falls back to `.env`          |
| `DATABASE_URL="postgresql://..." npm run dev` | **Explicit**  | Environment variable wins     |

---

## 🚀 Ready to Start!

Just run:

```bash
npm run dev
```

Your app will automatically use:

- ✅ Local PostgreSQL (`shopeec_dev`)
- ✅ Local Redis
- ☁️ Cloud AI services (OpenAI, Anthropic, etc.)

**Perfect for development!** 🎉
