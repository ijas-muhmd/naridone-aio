# 📋 Multi-Platform Migration - Implementation Checklist

Use this checklist to track your progress through the migration.

## 🎯 Pre-Migration (30 minutes)

- [ ] Read `MIGRATION_COMPLETE.md` for overview
- [ ] Read `QUICK_START_MIGRATION.md` for quick start
- [ ] Review `ARCHITECTURE_DIAGRAM.md` to understand architecture
- [ ] Backup production database
  ```bash
  pg_dump shopeec_prod > backup_$(date +%Y%m%d_%H%M%S).sql
  ```
- [ ] Backup staging database
  ```bash
  pg_dump shopeec_staging > backup_staging_$(date +%Y%m%d_%H%M%S).sql
  ```
- [ ] Create feature branch
  ```bash
  git checkout -b feature/multi-platform-architecture
  ```

## 🗄️ Database Migration (30 minutes)

### Local Environment

- [ ] Run `npx prisma format`
- [ ] Run `npx prisma generate`
- [ ] Run `npx prisma migrate deploy`
- [ ] Open Prisma Studio: `npx prisma studio`
- [ ] Verify `Shop` table exists
- [ ] Verify `ShopConfig.shopId` field exists
- [ ] Verify data was migrated (Shop records created)
- [ ] Test app starts: `npm run dev`

### Staging Environment (After local success)

- [ ] Backup staging database
- [ ] Run migration on staging
- [ ] Verify tables and data
- [ ] Test staging app

### Production (After staging success)

- [ ] Schedule maintenance window
- [ ] Backup production database
- [ ] Run migration on production
- [ ] Verify tables and data
- [ ] Run Shopify ID migration: `npx tsx scripts/migrate-shopify-ids.ts`

## 💻 Code Updates - Priority 1: Core Routes (Day 1)

### ✅ Service Layer (Already Done)

- [x] Create `app/services/shop.server.ts`
- [x] Add `initializeShopAndConfig()`
- [x] Add `getShopByDomain()`
- [x] Add helper functions

### Settings Route

- [ ] Update `app/routes/app.settings.tsx`
  - [ ] Import `initializeShopAndConfig`
  - [ ] Replace shop initialization
  - [ ] Update all `where: { shop }` → `where: { shopId: shop.shopId }`
  - [ ] Update all `data: { shop }` → `data: { shopId: shop.shopId }`
  - [ ] Test route loads
  - [ ] Test updating settings
  - [ ] Commit: `git commit -m "feat: update app.settings for multi-platform"`

### Main Dashboard

- [ ] Update `app/routes/app._index.tsx`
  - [ ] Import `initializeShopAndConfig`
  - [ ] Replace shop initialization
  - [ ] Update `AnalyticsService.getGlobalStats()` call
  - [ ] Update all Prisma queries
  - [ ] Update action function
  - [ ] Test dashboard loads
  - [ ] Test all widgets display
  - [ ] Commit: `git commit -m "feat: update dashboard for multi-platform"`

### Onboarding

- [ ] Update `app/routes/app.onboarding.tsx`
  - [ ] Import `initializeShopAndConfig`
  - [ ] Update loader
  - [ ] Update action
  - [ ] Test onboarding flow
  - [ ] Commit: `git commit -m "feat: update onboarding for multi-platform"`

## 💻 Code Updates - Priority 2: Feature Routes (Day 2)

### Monitoring

- [ ] Update `app/routes/app.monitor.tsx`
  - [ ] Use `initializeShopAndConfig`
  - [ ] Update all queries
  - [ ] Test monitoring page
  - [ ] Commit changes

### Automation

- [ ] Update `app/routes/app.automate.tsx`
  - [ ] Use `initializeShopAndConfig`
  - [ ] Update all queries
  - [ ] Test automation page
  - [ ] Commit changes

### Optimization Routes

- [ ] Update `app/routes/app.optimization.overview.tsx`
- [ ] Update `app/routes/app.optimization.automate.tsx`
- [ ] Update `app/routes/app.optimization.competitors.tsx`
- [ ] Update `app/routes/app.optimization.dashboard.tsx`
- [ ] Update `app/routes/app.optimization.settings.tsx`
- [ ] Update `app/routes/app.optimization.sitemap.tsx`
- [ ] Test each route
- [ ] Commit: `git commit -m "feat: update optimization routes for multi-platform"`

### Other App Routes

- [ ] List all remaining `app/routes/app.*.tsx` files
  ```bash
  ls app/routes/app.*.tsx
  ```
- [ ] Update each file
- [ ] Test each file
- [ ] Commit after each logical group

## 🔌 Code Updates - Priority 3: API Routes (Day 2-3)

### Copilot APIs

- [ ] Update `app/routes/api.copilot.tsx`
  - [ ] Use `getShopByDomain`
  - [ ] Update all queries
  - [ ] Test API endpoint
  - [ ] Commit changes

- [ ] Update `app/routes/api.copilot.chat.tsx`
  - [ ] Use `getShopByDomain`
  - [ ] Update all queries
  - [ ] Test chat API
  - [ ] Commit changes

### Prompt APIs

- [ ] Update `app/routes/api.prompts.status.tsx`
- [ ] Update other `app/routes/api.prompts.*.tsx` files
- [ ] Test each endpoint
- [ ] Commit changes

### Other APIs

- [ ] List all remaining `app/routes/api.*.tsx` files
  ```bash
  ls app/routes/api.*.tsx
  ```
- [ ] Update each file
- [ ] Test each endpoint
- [ ] Commit: `git commit -m "feat: update API routes for multi-platform"`

## ⚙️ Code Updates - Priority 4: Services (Day 3)

### Analytics Service

- [ ] Update `app/services/analytics.server.ts`
  - [ ] Change parameter from `shop` string to `shopId` string
  - [ ] Update all internal queries
  - [ ] Test analytics calculations
  - [ ] Commit changes

### AI Service

- [ ] Update `app/services/ai.server.ts`
  - [ ] Update shop references
  - [ ] Update queries
  - [ ] Test AI operations
  - [ ] Commit changes

### Rossignol Service

- [ ] Update `app/services/rossignol.server.ts`
  - [ ] Update shop references
  - [ ] Update queries
  - [ ] Test detection
  - [ ] Commit changes

### Queue Worker

- [ ] Update `app/queue/worker.server.ts`
  - [ ] Update shop resolution logic
  - [ ] Update all queue job handlers
  - [ ] Test queue processing
  - [ ] Commit changes

### Other Services

- [ ] List all files in `app/services/`
  ```bash
  ls app/services/*.ts
  ```
- [ ] Update each service file
- [ ] Test each service
- [ ] Commit: `git commit -m "feat: update services for multi-platform"`

## 🌱 Code Updates - Priority 5: Seed Scripts (Day 4)

### Main Seed

- [ ] Update `prisma/seed.ts`
  - [ ] Add `Shop` deletion
  - [ ] Create `Shop` records before `ShopConfig`
  - [ ] Update all model creations to use `shopId`
  - [ ] Run seed: `npx prisma db seed`
  - [ ] Verify data created
  - [ ] Commit changes

### Copilot Seed

- [ ] Update `prisma/seed-copilot.ts`
  - [ ] Follow same pattern as main seed
  - [ ] Test seed script
  - [ ] Commit changes

### Rossignol Seed

- [ ] Update `prisma/seed_rossignol.ts`
  - [ ] Follow same pattern
  - [ ] Test seed script
  - [ ] Commit changes

## 🧪 Testing Phase (Day 4-5)

### Automated Tests

- [ ] Run TypeScript check: `npm run typecheck`
- [ ] Run tests: `npm test`
- [ ] Fix any failing tests
- [ ] Commit test fixes

### Manual Testing - New Shop

- [ ] Install app on fresh test shop
- [ ] Complete onboarding
- [ ] Verify Shop record created with Shopify ID
- [ ] Verify ShopConfig created
- [ ] Create test prompt
- [ ] Run test prompt
- [ ] Check monitoring data
- [ ] Apply test fix

### Manual Testing - Existing Shop

- [ ] Log in to existing shop (from before migration)
- [ ] Verify dashboard loads with correct data
- [ ] Verify all historical data visible
- [ ] Create new prompt
- [ ] Run prompt
- [ ] Check that new data saves correctly
- [ ] Verify shop isolation (switch between shops)

### Manual Testing - Features

- [ ] Test monitoring features
  - [ ] View prompts
  - [ ] Create new prompt
  - [ ] Run prompts
  - [ ] View results
- [ ] Test automation features
  - [ ] View fixes
  - [ ] Apply fix manually
  - [ ] Test auto-fix
- [ ] Test copilot features
  - [ ] Configure copilot
  - [ ] Test chat
  - [ ] View sessions
- [ ] Test settings
  - [ ] Update shop settings
  - [ ] Update copilot config
  - [ ] Update LLM config

### Performance Testing

- [ ] Check query performance
- [ ] Verify indexes working
- [ ] Test with multiple shops
- [ ] Monitor database load

## 🚀 Deployment Phase

### Staging Deployment

- [ ] Push changes to staging branch
- [ ] Deploy to staging
- [ ] Run migration on staging database
- [ ] Run `migrate-shopify-ids.ts` on staging
- [ ] Test on staging environment
- [ ] Get team approval

### Production Deployment

- [ ] Create production backup
- [ ] Schedule maintenance window
- [ ] Deploy to production
- [ ] Run migration on production
- [ ] Run `migrate-shopify-ids.ts` on production
- [ ] Verify app works
- [ ] Monitor for errors
- [ ] Test critical flows

### Post-Deployment

- [ ] Monitor error logs for 24 hours
- [ ] Check database performance
- [ ] Verify all shops can access app
- [ ] Respond to any issues
- [ ] Update documentation
- [ ] Close migration ticket

## 📊 Verification Queries

Run these after migration to verify success:

```sql
-- Check Shop table
SELECT COUNT(*) FROM "Shop";
SELECT * FROM "Shop" LIMIT 5;

-- Check ShopConfig references
SELECT COUNT(*) FROM "ShopConfig";
SELECT * FROM "ShopConfig" LIMIT 5;

-- Verify foreign keys work
SELECT
  s.domain,
  s.shopId,
  sc.onboardingCompleted,
  COUNT(p.id) as prompt_count
FROM "Shop" s
LEFT JOIN "ShopConfig" sc ON s.shopId = sc.shopId
LEFT JOIN "Prompt" p ON sc.shopId = p.shopId
GROUP BY s.domain, s.shopId, sc.onboardingCompleted;

-- Check for orphaned records
SELECT COUNT(*) FROM "Prompt" WHERE shopId NOT IN (SELECT shopId FROM "ShopConfig");
SELECT COUNT(*) FROM "Fix" WHERE shopId NOT IN (SELECT shopId FROM "ShopConfig");
```

## 🎉 Completion

- [ ] All code updated
- [ ] All tests passing
- [ ] Deployed to production
- [ ] No critical errors
- [ ] Documentation updated
- [ ] Team notified
- [ ] Celebrate! 🎊

## 📝 Notes Section

Use this space to track issues, decisions, or important information:

```
Date: _____________
Issue: ____________________________________________________________
Resolution: _______________________________________________________

Date: _____________
Issue: ____________________________________________________________
Resolution: _______________________________________________________

Date: _____________
Issue: ____________________________________________________________
Resolution: _______________________________________________________
```

---

**Started**: **\*\*\*\***\_\_**\*\*\*\***
**Completed**: **\*\*\*\***\_\_**\*\*\*\***
**Total Time**: **\*\*\*\***\_\_**\*\*\*\***
**Deployed By**: **\*\*\*\***\_\_**\*\*\*\***
