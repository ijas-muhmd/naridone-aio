# 🚀 Shopeec Production Launch Checklist

## 1. Shopify App Store Requirements (Mandatory)
- [x] **GDPR Webhooks**: `app/routes/webhooks.tsx` logic is handled via individual files:
  - `webhooks.customers.data_request.tsx` ✅
  - `webhooks.customers.redact.tsx` ✅
  - `webhooks.shop.redact.tsx` ✅
- [ ] **App Listing Assets**:
  - App Icon (1200x1200px)
  - Feature Screenshots (Desktop & Mobile)
  - Privacy Policy URL (Hosted & Public)
  - Terms of Service URL
- [x] **Billing API**: `app/shopify.server.ts` matches `plan_constants.ts` with correct pricing tiers ($49, $99, $249, $349, $899). ✅

## 2. Infrastructure & Backend
- [ ] **Database Migration**: 
  - Ensure production database (Postgres) is provisioned.
  - Run `npx prisma migrate deploy` in production pipeline.
- [ ] **Redis (Background Jobs)**: 
  - **CRITICAL**: The `DiscussionService` (Social Mentions) and `FixService` rely on queues. 
  - Ensure a Redis instance is provisioned and `REDIS_URL` is set in production env.
- [ ] **Environment Variables**:
  - `SHOPIFY_API_KEY` & `SHOPIFY_API_SECRET`
  - `DATABASE_URL`
  - `REDIS_URL`
  - **AI Keys**: `ANTHROPIC_API_KEY`, `GOOGLE_SEARCH_API_KEY`, `GOOGLE_SEARCH_CX`, `OPENAI_API_KEY`, `PERPLEXITY_API_KEY`.
- [ ] **Error Tracking**: Install Sentry or similar to catch "Application Error" in the wild.

## 3. Feature Completeness (Shopeec Specific)
- [x] **Personas Backend**: 
  - *Status*: ✅ **Complete**. DB Model created, UI connected, persistence working.
- [ ] **Social Mentions**:
  - *Status*: Fallback logic added for dev, but Production needs real Redis.
  - *Action*: Verify Reddit/YouTube scraping works without timeouts on production server.
- [x] **AI Model Access**:
  - "Plus" plan logic correctly gates advanced models in `ai.server.ts`. ✅
  - "Real Trio" internet access logic (RAG) restored. ✅
- [ ] **Fix Engine**:
  - Verify "In Review" status transitions correctly to "Applied".
  - Test "Revert" functionality for a fix.

## 4. UI/UX Polish
- [ ] **Empty States**: Check Dashboard/Monitor pages when account is brand new (0 prompts, 0 mentions).
- [x] **Crisp Chat**: Chat widget script added to `app/root.tsx`. ✅
- [ ] **Mobile Responsiveness**: Quick check of "Fix Queue" table on smaller screens.

## 5. Legal & Trust
- [ ] **AI Disclaimer**: Ensure you disclose that AI is generating content (Shopify requirement for AI apps).
- [ ] **Support Email**: Ensure `support@shopeec.com` (or similar) is active.

