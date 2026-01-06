# Frontend Refactoring Tracking

This document tracks the progress of refactoring the frontend codebase to separate UI components from page logic and decompose large files into modular components.

## Goals
- Separate "Dumb" UI Components from "Smart" Page Controllers.
- Decompose massive files (1000+ lines) into manageable sub-components.
- Ensure no functionality breaks during refactor.
- Prepare codebase for new Backend API integration.

## Progress

### 1. Main Dashboard (`app/routes/app._index.tsx`)
- [x] **Refactor Page Controller**: `app._index.tsx` is now a clean controller.
- [x] **Extract Components**:
    - [x] `DashboardCard.tsx` (Reusable card wrapper)
    - [x] `CriticalActionCard.tsx` (Top alert section)
    - [x] `MonitorZone.tsx` (Charts section)
    - [x] `ImproveZone.tsx` (Stats section)
    - [x] `ModelsModal.tsx` (Configuration modal)
    - [x] `VisibilityChart.tsx`, `CustomTooltip.tsx`
    - [x] `ImproveStats.tsx`, `IssueSeverityChart.tsx`, `IssueCategoryChart.tsx`

### 2. Monitor Page (`app/routes/app.monitor.tsx`)
- [x] **Refactor Page Controller**: Updated `MonitorDashboard` invocation to pass filters.
- [x] **Tab 0: Dashboard (`MonitorDashboard.tsx`)**
    - [x] Remove internal data fetching.
    - [x] Extract Components:
        - [x] `LiveTicker.tsx`
        - [x] `MonitorMetricsSection.tsx`
        - [x] `VisibilityTrendsSection.tsx`
        - [x] `DeepDiveStatsSection.tsx`
        - [x] `CompetitorInsightsSection.tsx`
        - [x] `PerformanceOverviewSection.tsx`
        - [x] `ShareOfVoiceDetailedCard.tsx`
        - [x] `TopicAuthorityCard.tsx`
- [x] **Tab 1: Tracking / Prompts (`MonitorTracking.tsx`)**
    - [x] Remove row markup logic and extract.
    - [x] Extract Components:
        - [x] `PromptIndexTable.tsx` (Main list view)
        - [x] `PromptGroup.tsx` (Grouped view)
        - [x] `TrackingSummaryCards.tsx` (Top stats)
        - [x] `TrackingModals.tsx` (Delete/Dismiss/Toggle modals)
        - [x] `AddPromptModal.tsx` (New modal)
        - [x] `BrandIcon.tsx`, `RankBadge.tsx`, `VolumeBars.tsx` (UI helpers)
        - [x] `utils.ts` (Calculation logic)
- [x] **Tab 2: Competitors (`MonitorCompetitors.tsx`)**
    - [x] Extract Table/List logic (`CompetitorsList.tsx`, `CompetitorsGrid.tsx`).
    - [x] Extract Sub-components (`SuggestedBrandsBanner.tsx`, `LogoWithColorExtraction.tsx`, `RankBadge.tsx`, `utils.ts`).
    - [x] Extract Modal (`AddCompetitorModal.tsx`).
    - [x] Refactor controller to manage state and rendering.
- [x] **Tab 3: Citations (`MonitorCitation.tsx`)**
    - [x] Extract Charts (`CitationShareCard.tsx`, `CitationTypesCard.tsx`, `CitationGraph.tsx`).
    - [x] Extract List view (`CitationRankCard.tsx`, `CitationPagesCard.tsx`, `CitationDomainsCard.tsx`).
    - [x] Extract Sub-components (`CitationModals.tsx`, `DomainIcon.tsx`, `CategoryBadge.tsx`, `MentionedStatus.tsx`, `utils.ts`).
    - [x] Refactor controller.
- [x] **Tab 4: Mentions (`MonitorMentions.tsx`)**
    - [x] Extract Charts (`MentionsChart.tsx`, `MentionsChartTooltip.tsx`).
    - [x] Extract List (`MentionsList.tsx`, `MentionCard.tsx`, `MentionsFilterBar.tsx`).
    - [x] Extract Helpers (`PlatformIcons.tsx`, `types.ts`).
    - [x] Refactor controller.
- [x] **Tab 5: Sentiment (`MonitorSentiment.tsx`)**
    - [x] Extract Charts (`SentimentChartCard.tsx`, `SentimentBreakdownCard.tsx`).
    - [x] Extract Sentiment Analysis blocks (`ThemesList.tsx`, `ThemeDetailRow.tsx`, `SentimentFilters.tsx`).
    - [x] Refactor controller.
- [x] **Tab 6: Platforms (`MonitorPlatforms.tsx`)**
    - [x] Extract Matrix View (`MatrixView.tsx`).
    - [x] Extract Platform Cards (`PlatformMetricCard.tsx`, `CustomBarChartTooltip.tsx`, `CustomLineChartTooltip.tsx`).
    - [x] Refactor controller.
- [x] **Tab 7: Personas (`MonitorPersonas.tsx`)**
    - [x] Extract Persona Cards (`PersonaCard.tsx`).
    - [x] Extract Persona Editor/Modal (`PersonaCreationWizard.tsx`, `PersonaDetailModal.tsx`).
    - [x] Refactor controller.

### 3. Optimization Page (`app/routes/app.optimization.tsx`)
- [x] **Dashboard Tab (`OptimizationDashboard.tsx`)**
    - [x] Extract Summary & Overview (`OptimizationSummary.tsx`, `FixesOverview.tsx`).
    - [x] Extract Charts (`FixPerformance.tsx`, `VisibilitySalesCorrelation.tsx`, `IssueTrendsAnalysis.tsx`).
    - [x] Extract Health Scorecard (`ProductHealthScorecard.tsx`).
    - [x] Refactor controller (`app.optimization.dashboard.tsx` -> `OptimizationDashboard.tsx`).
- [x] **Fixes Tab (`OptimizationFixes.tsx`)**
    - [x] Extract Table (`FixesTable.tsx`).
    - [x] Extract Modals (`FixReviewModal.tsx`, `FixDetailsModal.tsx`).
    - [x] Extract Helpers (`utils.ts`).
    - [x] Refactor controller (`app.optimization.fixes.tsx` -> `OptimizationFixes.tsx`).
- [x] **Redirects Tab (`OptimizationRedirects.tsx`)**
    - [x] Extract Table (`RedirectsTable.tsx`).
    - [x] Extract Modal (`CreateRedirectModal.tsx`).
    - [x] Refactor controller (`app.optimization.redirects.tsx` -> `OptimizationRedirects.tsx`).

### 4. Shared Components
- [ ] Review `app/components/` root for other large files that need breaking down.