# Monitor Data Integrity Check

This document tracks the verification of key metrics (Sentiment, Position, Visibility) generated during onboarding and their readiness for the Monitor page.

## Checklist

### 1. Metric Calculation in AI Service (`runAnalysis`)
- [x] **Sentiment:** Calculated via `analyzeTextSentiment` and stored in `Run.sentiment`.
- [x] **Position:** Extracted from SERP data and stored in `Run.position`.
- [x] **Visibility:** Calculated via `judges.calculateVisibility` (Score 0-100 based on Rank + Citations) and stored in `Run.visibility`.

### 2. Data Persistence
- [x] **Runs Table:** `sentiment`, `position`, `visibility` columns exist and are populated.
- [x] **Prompt Metrics:** Snapshots created with these metrics.

### 3. Monitor Page Readiness (Inconsistency Check)
- [x] **Global Stats (`AnalyticsService`):**
    - **Fixed:** Updated `getGlobalStats` to prioritize stored `Run.visibility`.
- [x] **Dashboard Charts (`AnalyticsService`):**
    - **Fixed:** Updated `getDashboardCharts` to average the stored `Run.visibility`.
- [x] **Prompt Detail Chart (`app/routes/app.monitor.prompts.$id.tsx`):**
    - **Fixed:** Updated loader to use stored `Run.visibility`, falling back to `100/position` only for legacy data.

## Verification
All identified inconsistencies in "Visibility" calculation have been resolved. The system now prioritizes the sophisticated `Run.visibility` score (Rank + Citations) calculated by the AI Service, ensuring that the rich data generated during Onboarding is correctly displayed in the Monitor dashboards.
