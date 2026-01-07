# Monitor Components Analysis & Refactoring

## ✅ Used Components (Need Organization)

### Tracking-related (used in tracking/PromptDetail.tsx):
1. **AveragePositionTab.tsx** → Should move to `tracking/` folder
2. **CitationShareTab.tsx** → Should move to `tracking/` folder  
3. **VisibilityTab.tsx** → Should move to `tracking/` folder
4. **MonitorExecutionsTable.tsx** → Should move to `tracking/` folder
5. **MonitorCitationsTable.tsx** → Should move to `tracking/` folder

### Chart Components (shared by tabs):
6. **MetricBarChart.tsx** → Should move to `tracking/charts/` or `shared/charts/`
7. **MetricLineChart.tsx** → Should move to `tracking/charts/` or `shared/charts/`

### Citation-related:
8. **ExpandedModalTable.tsx** → Should move to `citation/` folder (used by CitationModals)

### Dashboard-related:
9. **VisibilityRankingsCard.tsx** → Should move to `dashboard/` folder (used by TopicAuthorityCard)
10. **ShareOfVoiceCard.tsx** → Should move to `dashboard/` folder (used by ShareOfVoiceDetailedCard)

### Modal Components:
11. **ExecutionDetailsModal.tsx** → Should move to `modals/` or stay in tracking since used by MonitorExecutionsTable

### Shared/Utility Components:
12. **SimpleMarkdownRenderer.tsx** → Should move to `shared/` folder (used in multiple places)
13. **ViewConfigButton.tsx** → Should move to `shared/` folder (used in multiple monitor components)

### Citation-related (used only in MonitorCitation):
13. **CitationGraph.tsx** → Should move to `citation/` folder (only used by MonitorCitation)

### Main Components (Already properly organized):
- MonitorDashboard.tsx ✅
- MonitorTracking.tsx ✅
- MonitorCompetitors.tsx ✅
- MonitorMentions.tsx ✅
- MonitorCitation.tsx ✅
- MonitorSentiment.tsx ✅
- MonitorPlatforms.tsx ✅
- MonitorPersonas.tsx ✅

## 🗑️ Unused Components (Can Be Deleted)
1. **MonitorOverviewCards.tsx** - Not imported anywhere
2. **MonitorKPIBar.tsx** - Not imported anywhere
3. **MonitorAlertsStrip.tsx** - Not imported anywhere
4. **RegionGraph.tsx** - Not imported anywhere

## Proposed Folder Structure:
```
src/components/monitor/
├── dashboard/              ✅ Already organized
│   ├── VisibilityRankingsCard.tsx  ← Move here
│   └── ShareOfVoiceCard.tsx        ← Move here
├── tracking/
│   ├── AveragePositionTab.tsx      ← Move here
│   ├── CitationShareTab.tsx        ← Move here
│   ├── VisibilityTab.tsx           ← Move here
│   ├── MonitorExecutionsTable.tsx  ← Move here
│   ├── MonitorCitationsTable.tsx   ← Move here
│   ├── ExecutionDetailsModal.tsx   ← Move here
│   └── charts/                     ← New folder
│       ├── MetricBarChart.tsx      ← Move here
│       └── MetricLineChart.tsx     ← Move here
├── citation/
│   ├── CitationGraph.tsx            ← Move here (only used by MonitorCitation)
│   ├── ExpandedModalTable.tsx       ← Move here (used by CitationModals)
│   └── ... (already organized)
├── shared/                         ← New folder
│   ├── SimpleMarkdownRenderer.tsx  ← Move here
│   └── ViewConfigButton.tsx        ← Move here
└── ... (main components)
```

