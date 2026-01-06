# Code Migration Guide: Multi-Platform Architecture

## Overview

This guide explains how to update application code to use the new `Shop` model and `shopId` references instead of the old `shop` string field.

## Key Changes

### 1. Database Schema Changes

- **Before:** `shop: String` (domain like "example.myshopify.com")
- **After:** `shopId: String` (Shopify ID like "123456")

### 2. New Models

```prisma
model Shop {
  id          String       @id @default(uuid())
  platform    String       // "shopify" | "woocommerce" | "bigcommerce"
  shopId      String       @unique // Platform-specific shop identifier (Shopify GID)
  domain      String       @unique
  brandName   String?
  industry    String?
  // ...
  config      ShopConfig?
}

model ShopConfig {
  id      String  @id @default(uuid())
  shopId  String  @unique
  shop    Shop    @relation(fields: [shopId], references: [shopId])
  // ...
}
```

## Migration Patterns

### Pattern 1: Route Loaders (BEFORE)

```typescript
export const loader = async ({ request }: LoaderFunctionArgs) => {
  const { session } = await authenticate.admin(request);
  const shop = session.shop; // "example.myshopify.com"

  let config = await prisma.shopConfig.findUnique({
    where: { shop },
  });

  if (!config) {
    config = await prisma.shopConfig.create({
      data: { shop },
    });
  }

  return json({ config });
};
```

### Pattern 1: Route Loaders (AFTER)

```typescript
import { initializeShopAndConfig } from "../services/shop.server";

export const loader = async ({ request }: LoaderFunctionArgs) => {
  const { session, admin } = await authenticate.admin(request);

  // Initialize shop and config
  const { shop, config } = await initializeShopAndConfig(admin, session.shop);

  return json({ shop, config });
};
```

### Pattern 2: Querying Related Data (BEFORE)

```typescript
const prompts = await prisma.prompt.findMany({
  where: { shop: session.shop },
  include: { fixes: true },
});
```

### Pattern 2: Querying Related Data (AFTER)

```typescript
import { getShopByDomain } from "../services/shop.server";

const shop = await getShopByDomain(session.shop);
if (!shop) throw new Error("Shop not found");

const prompts = await prisma.prompt.findMany({
  where: { shopId: shop.shopId },
  include: { fixes: true },
});
```

### Pattern 3: Creating Records (BEFORE)

```typescript
const newPrompt = await prisma.prompt.create({
  data: {
    text: "Best running shoes",
    shop: session.shop,
    status: "ACTIVE",
  },
});
```

### Pattern 3: Creating Records (AFTER)

```typescript
const shop = await getShopByDomain(session.shop);
if (!shop) throw new Error("Shop not found");

const newPrompt = await prisma.prompt.create({
  data: {
    text: "Best running shoes",
    shopId: shop.shopId,
    status: "ACTIVE",
  },
});
```

### Pattern 4: Updating ShopConfig (BEFORE)

```typescript
await prisma.shopConfig.update({
  where: { shop: session.shop },
  data: {
    brandName: "My Store",
    industry: "Fashion",
    autoOptimize: true,
  },
});
```

### Pattern 4: Updating ShopConfig (AFTER)

```typescript
import { getShopByDomain, updateShop } from "../services/shop.server";

const shop = await getShopByDomain(session.shop);
if (!shop) throw new Error("Shop not found");

// Update Shop details (brandName, industry)
await updateShop(shop.shopId, {
  brandName: "My Store",
  industry: "Fashion",
});

// Update ShopConfig settings
await prisma.shopConfig.update({
  where: { shopId: shop.shopId },
  data: {
    autoOptimize: true,
  },
});
```

## Files That Need Updates

### Critical Route Files

These files need immediate updates as they handle shop initialization:

1. **app/routes/app.\_index.tsx** - Main dashboard
2. **app/routes/app.settings.tsx** - Settings page
3. **app/routes/app.onboarding.tsx** - Onboarding flow
4. **app/routes/app.monitor.tsx** - Monitoring
5. **app/routes/app.automate.tsx** - Automation
6. **app/routes/app.optimization.\*.tsx** - All optimization routes

### API Routes

API routes that work with shop data:

1. **app/routes/api.copilot.tsx**
2. **app/routes/api.copilot.chat.tsx**
3. **app/routes/api.prompts.\*.tsx**

### Service Files

Service files that query shop data:

1. **app/services/analytics.server.ts**
2. **app/services/ai.server.ts**
3. **app/services/rossignol.server.ts**
4. **app/queue/worker.server.ts**

## Update Checklist

- [ ] Update all route loaders to use `initializeShopAndConfig()`
- [ ] Update all route actions to use `shopId` instead of `shop`
- [ ] Update all API endpoints
- [ ] Update all service functions
- [ ] Update all queue workers
- [ ] Update seed scripts
- [ ] Test onboarding flow
- [ ] Test existing shops
- [ ] Update documentation

## Helper Functions Available

```typescript
import {
  initializeShopAndConfig, // Main function for loaders
  getShopByDomain, // Get Shop by domain
  getShopConfig, // Get ShopConfig by shopId
  updateShop, // Update Shop details
  extractShopifyId, // Extract ID from Shopify GID
  fetchShopifyShopData, // Fetch from Shopify API
} from "../services/shop.server";
```

## Testing Strategy

1. **Existing Shops:** Run migration, verify all data transferred correctly
2. **New Shop Installation:** Test onboarding flow with new shop
3. **Multi-Shop:** Verify shop isolation still works
4. **API Calls:** Test all API endpoints with updated code

## Rollback Plan

If issues occur:

1. Revert migration using: `npx prisma migrate resolve --rolled-back 20251212160945_multi_platform_architecture`
2. Revert code changes
3. Restore from backup if needed

## Notes

- The migration preserves all existing data
- During migration, domains are used as temporary `shopId` values
- Real Shopify IDs are fetched on first access after migration
- The `Shop.domain` field remains for backward compatibility with sessions
