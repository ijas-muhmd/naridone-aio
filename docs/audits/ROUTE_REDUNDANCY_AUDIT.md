# Redundancy Audit: Optimization vs. Monitor Routes

This document analyzes overlapping functionality between `app/routes/app.optimization.*` and `app/routes/app.monitor*`.

## Identified Overlaps

### 1. Dashboard Redundancy
- **Files:**
    - `app/routes/app.optimization.dashboard.tsx` (144KB)
    - `app/routes/app.monitor.tsx` (100KB)
    - `app/routes/app.optimization.overview.tsx` (82KB)
- **Finding:**
    - `optimization.dashboard` and `monitor` both load heavily overlapping data: Global Stats, Share of Voice, Competitors, Prompts, Citations.
    - `monitor` seems to be the "New" implementation using modular components (`MonitorDashboard`, `MonitorTracking`, etc.).
    - `optimization.dashboard` appears to be a legacy or alternative view.
    - **Action:** `app.monitor.tsx` should be the source of truth for "Monitoring". `optimization` routes should focus on *acting* (fixes, automation), not just viewing.

### 2. Prompt Management Redundancy
- **Files:**
    - `app/routes/app.optimization.prompts.tsx` (70KB) vs `app/routes/app.monitor.tsx` (Tracking Tab)
    - `app/routes/app.optimization.prompts.$id.tsx` (45KB) vs `app/routes/app.monitor.prompts.$id.tsx` (111KB)
- **Finding:**
    - `app.monitor.prompts.$id.tsx` is significantly larger and likely more feature-rich (charts, experiments).
    - `app.optimization.prompts.$id.tsx` is smaller, possibly older.
    - **Action:** Consolidate prompt details into `app.monitor.prompts.$id.tsx`.

### 3. Competitor Analysis Redundancy
- **Files:**
    - `app/routes/app.optimization.competitors.tsx` (25KB)
    - `app/routes/app.monitor.tsx` (Competitors Tab)
- **Finding:**
    - Monitor page has a dedicated `MonitorCompetitors` component.
    - `optimization.competitors` might be a standalone view that is now redundant.

## Recommendation
- **Keep:** `app/routes/app.monitor*` as the primary "Insight/Data" center.
- **Keep:** `app/routes/app.optimization.fixes.tsx`, `automate.tsx` as the "Action" center.
- **Deprecate/Merge:** `app.optimization.dashboard`, `app.optimization.prompts`, `app.optimization.overview` (if covered by Monitor).

## Next Steps
1. Confirm if `app.monitor.tsx` completely covers the features of `app.optimization.dashboard.tsx`.
2. Confirm if `app.monitor.prompts.$id.tsx` is the intended replacement for `app.optimization.prompts.$id.tsx`.

