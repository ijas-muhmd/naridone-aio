# Backend Production Audit & Directory

## 1. System Overview
**Status:** ✅ Production Ready
**Architecture:** Remix + Shopify App (Node.js)
**Database:** PostgreSQL (Prisma ORM)
**Async Engine:** BullMQ + Redis

---

## 2. Core Services Inventory

### A. Analysis Engine (Scalable)
| Service | Function | Key Method | Status | Workerized? |
| :--- | :--- | :--- | :--- | :--- |
| `TopicAnalysisService` | Generates taxonomy/clusters from products using AI. | `discoverTopics` | ✅ Batched, Async | ✅ Yes |
| `ProductAnalysisService` | Scans catalog for quality, missing attributes. | `scanProducts` | ✅ Streaming | ✅ Yes |
| `CompetitorAnalysisService` | Identifies competitors & price/feature gaps. | `identifyCompetitors` | ✅ Optimized (Batch DB) | ✅ Yes |
| `AdvancedAnalysisService` | Generates "Canonical Questions" & Trust Signals. | `analyzeTrustSignals` | ✅ Streaming | ✅ Yes |
| `ImpactService` | Calculates "Revenue at Risk" from Order history. | `syncRevenueMetrics` | ✅ Pagination (Orders) | ✅ Yes |
| `RiskService` | Detects hallucination risks (e.g. "Lifetime Warranty"). | `scanHallucinationRisk` | ✅ Streaming | ✅ Yes |
| `SeasonalService` | Checks for out-of-season keywords. | `checkSeasonalIntent` | ✅ Streaming | ✅ Yes |

### B. Action Engine (Fixes)
| Service | Function | Key Method | Status | Workerized? |
| :--- | :--- | :--- | :--- | :--- |
| `FixService` | The "Brain" that generates & applies fixes. | `scan`, `applyFix` | ✅ Streaming, Deduplication | ✅ Yes |
| `AIService` | LLM Wrapper (OpenAI/Anthropic/Google). | `getPreferredCompletion` | ✅ Retries + Backoff | N/A (Util) |
| `DiscussionService` | Scrapes Reddit/Twitter for brand mentions. | `fetchAndAnalyze` | ✅ Resilient Scraping | ✅ Yes |

### C. Core Infrastructure
| Service | Function | Key Method | Status |
| :--- | :--- | :--- | :--- |
| `ProductService` | Shopify GraphQL wrapper. | `processAllProducts` | ✅ Memory Safe Streaming |
| `Queue.server.ts` | BullMQ definitions & connection. | `addXJob` | ✅ Multi-queue setup |
| `Worker.server.ts` | Background job processor. | `worker.on('failed')` | ✅ Error Listeners |

---

## 3. Workflow & Job Map

All heavy lifting is now offloaded to Redis Queues.

### Triggers -> Queues
1.  **"Deep Scan" (UI Action)** -> `addScanJob` -> `scan-queue` -> `ProductAnalysisService`
2.  **"Topic Discovery"** -> `addTopicAnalysisJob` -> `topic-queue` -> `TopicAnalysisService`
3.  **"Generate Fixes"** -> `addFixJob` -> `fix-queue` -> `FixService`
4.  **"Revenue Sync"** -> `addImpactJob` -> `impact-queue` -> `ImpactService`
5.  **"Risk Check"** -> `addRiskJob` -> `risk-queue` -> `RiskService`
6.  **"Seasonal Check"** -> `addSeasonalJob` -> `seasonal-queue` -> `SeasonalService`
7.  **"UGC Fetch"** -> `addDiscussionJob` -> `discussion-queue` -> `DiscussionService`

### Queue Configuration
-   **Concurrency:**
    -   `product-queue`: 3 (Parallel product analysis)
    -   `ai-queue`: 2 (Rate limit protection)
    -   All others: 1 (Sequential safety)
-   **Retries:** Manual handling via `AIService` backoff; Job retention on fail (100).

---

## 4. Database Schema Audit
**Status:** ✅ Indexed & Optimized

### Key Tables
-   `ShopConfig`: Central settings.
-   `Fix`: Stores actionable items. Indexed by `[shop, status]`, `[shop, productId]`.
-   `SmartSignal`: Stores raw insights.
-   `Prompt` / `Run` / `Mention`: AI Analysis history. Indexed by `[promptId, createdAt]`.
-   `Topic` / `Theme`: Taxonomy.

### Performance Notes
-   Added composite indexes for frequent lookups (e.g. dashboard filtering).
-   `Fix` table includes `diff` JSON for "Undo" functionality.

---

## 5. Testing & Quality Assurance

### Unit Test Coverage
| Suite | File | Status | Notes |
| :--- | :--- | :--- | :--- |
| **Topic Analysis** | `topic_analysis.server.test.ts` | ✅ PASS | Covers AI mocking, DB transactions. |
| **Fix Engine** | `fix.server.test.ts` | ✅ PASS | Covers heuristics, deduplication, job triggering. |

### Recommended Manual Test Plan
1.  **Load Test:** Import 5,000 dummy products and run "Generate Fixes". Monitor RAM usage.
2.  **Network Failure:** Disconnect Internet/Redis while a job is running. Verify it retries/fails gracefully.
3.  **Rate Limits:** Spam the "Generate Suggestion" button. Verify `AIService` backoff logic.

---

## 6. Next Steps (Post-Launch)
1.  **Monitoring:** Integrate Sentry or Datadog for real-time error tracking (currently using `console.error`).
2.  **Analytics:** Add `posthog-node` to track backend job completion rates.
3.  **Security:** Add request signing verification for Webhooks (currently standard Shopify auth).

