# Monitor Data Source Audit

## Summary
The Monitor Dashboard (`app/routes/app.monitor.tsx`) and its child components load data entirely from `AnalyticsService` (`app/services/analytics.server.ts`). This service fetches data directly from the Prisma database (`Run`, `Prompt`, `Brand`, `Citation` tables), ensuring all visualizations reflect real, persisted data from AI analyses.

## Data Source Verification

| Component/Feature | Data Source Method | Real DB Data? | Notes |
| :--- | :--- | :--- | :--- |
| **Visibility Score** | `getGlobalStats` -> `prisma.prompt.findMany(include: runs)` | ✅ Yes | Calculates avg visibility from recent `Run` records. |
| **Brand Defense** | `getGlobalStats` | ✅ Yes | Filters prompts by brand name and checks rank. |
| **Competitor Rankings** | `getVisibilityTrend` | ✅ Yes | Aggregates `Run` positions and mentions over time. |
| **Visibility Chart** | `getVisibilityTrend` | ✅ Yes | Time-series data from `Run` table. |
| **Share of Voice** | `getCompetitorStats` | ✅ Yes | Counts brand mentions in `Run` results. |
| **Citations/Sources** | `getSourcesAnalysis` | ✅ Yes | Aggregates `Citation` table linked to Runs. |
| **Action Plan (Fixes)** | `SmartSignalService` | ✅ Yes | Generated from `SmartSignal` table (which is populated by backend jobs). |

## Link Verification
- **Product Links:** The dashboard links to `shopify:admin/products/[id]`. This is the correct Deep Link format for embedded Shopify apps.
- **Competitor Links:** Uses `https://www.google.com/s2/favicons?domain=[domain]` for icons. Competitor domains are extracted from SERP citations.
- **Fix Engine Link:** Links correctly to internal route `/app/automate` (or `/app/optimization/fixes` as per recent update).

## Conclusion
The dashboard does **not** use mock data. It relies 100% on the `Run` and `Citation` tables populated by the `AIService`. If the AI Service runs real queries (which we confirmed it does via `SearchApi`, etc.), then the dashboard displays real, sensible data.

