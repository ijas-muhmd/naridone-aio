export const MOCK_DASHBOARD_DATA = {
  // Loader Data
  brandName: "Acme Corp",
  pendingFixes: 12,
  activePlan: "GROWTH",
  activeModels: ["chatgpt-search", "perplexity-sonar", "google-search-gemini"],

  // Stats for Gauges
  stats: {
    visibilityScore: 65,
    avgSentiment: 78,
    totalPrompts: 150,
  },

  // Market Benchmarks
  marketData: {
    marketAvgVisibility: 42,
    marketAvgSentiment: 60,
  },

  // Visibility Trend Chart
  chartData: [
    {
      label: "Mon",
      date: "2023-10-01",
      "Acme Corp": 45,
      "Competitor X": 30,
      "Competitor Y": 55,
    },
    {
      label: "Tue",
      date: "2023-10-02",
      "Acme Corp": 48,
      "Competitor X": 32,
      "Competitor Y": 52,
    },
    {
      label: "Wed",
      date: "2023-10-03",
      "Acme Corp": 52,
      "Competitor X": 35,
      "Competitor Y": 50,
    },
    {
      label: "Thu",
      date: "2023-10-04",
      "Acme Corp": 50,
      "Competitor X": 38,
      "Competitor Y": 48,
    },
    {
      label: "Fri",
      date: "2023-10-05",
      "Acme Corp": 58,
      "Competitor X": 36,
      "Competitor Y": 45,
    },
    {
      label: "Sat",
      date: "2023-10-06",
      "Acme Corp": 62,
      "Competitor X": 35,
      "Competitor Y": 42,
    },
    {
      label: "Sun",
      date: "2023-10-07",
      "Acme Corp": 65,
      "Competitor X": 34,
      "Competitor Y": 40,
    },
  ],

  // Improvement Stats
  fixStats: {
    total: 24,
    appliedLast30Days: 156,
    byStatus: {
      pending: 12,
      suggested: 12,
      applied: 156,
    },
    byCategory: {
      "Missing Metadata": 8,
      "Thin Content": 6,
      "No Alt Text": 4,
      "Schema Errors": 6,
    },
    byPriority: {
      critical: 5,
      moderate: 10,
      minor: 9,
    },
  },

  impactForecast: [], // Optional forecast data
};
