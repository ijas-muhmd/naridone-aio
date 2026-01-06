# Monitor Dashboard Audit - Below the Fold

## Additional Sections Audit

### 1. Competitor Intelligence
- **Description:** A grid of "Insight Cards" highlighting key competitor moves.
- **Data Source:** `AnalyticsService.getCompetitorInsights`.
- **Implementation:**
    - Scans recent runs for mentions of competitors with high sentiment.
    - Extracts "Winning Factors" (snippets of text where the competitor is praised).
    - **Real Data?** ✅ Yes. It parses the actual text response from AI runs stored in `Run.response` and `Run.mentions`.

### 2. Deep Dive Stats (3 Cards)
- **Recommendation Rate:**
    - **Metric:** % of AI answers where you are explicitly recommended with high sentiment (>60).
    - **Data Source:** `AnalyticsService.getDeepDiveStats`.
    - **Real Data?** ✅ Yes. Aggregates `Run` data.
- **Active Sources:**
    - **Metric:** Count of unique domains citing your brand.
    - **Data Source:** `AnalyticsService.getDeepDiveStats` -> `Citation` table.
    - **Real Data?** ✅ Yes. Uses the `Citation` table populated by runs.
- **Competitor Gap:**
    - **Metric:** Visibility difference vs. top competitor.
    - **Data Source:** `AnalyticsService.getDeepDiveStats`.
    - **Real Data?** ✅ Yes. Compares your calculated visibility against the top competitor's.

### 3. Action Plan (Fix Opportunities)
- **Description:** A prioritized list of tasks (e.g., "Fix descriptions for X products").
- **Data Source:** `SmartSignalService` -> `SmartSignal` table.
- **Implementation:**
    - `SmartSignalService` runs background checks (e.g., keyword gaps, low visibility).
    - Generates "Signals" stored in the DB.
    - Dashboard aggregates these into a clean "Action Plan".
    - **Real Data?** ✅ Yes. Signals are generated based on real prompt performance and product data.

### 4. Market Share & Topic Authority
- **Market Share:** Uses `ShareOfVoiceCard`. Data comes from `AnalyticsService.getCompetitorStats` (Share of Voice).
- **Topic Authority:** Uses `VisibilityRankingsCard`. Data comes from `AnalyticsService.getTopicRankings`.
- **Real Data?** ✅ Yes. Both aggregate `Run` data grouped by Brand and Topic respectively.

## Conclusion
The entire dashboard, including the sections "below the fold," is powered by live, persisted data from the AI analysis engine. Every card represents a real metric derived from actual AI interactions.

