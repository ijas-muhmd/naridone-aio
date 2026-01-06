import { BlockStack, Layout } from "@shopify/polaris";
import { useMemo } from "react";
import { DataFilters, type FilterOptions } from "../DataFilters";
import { LiveTicker } from "./dashboard/LiveTicker";
import { MonitorMetricsSection } from "./dashboard/MonitorMetricsSection";
import { VisibilityTrendsSection } from "./dashboard/VisibilityTrendsSection";
import { DeepDiveStatsSection } from "./dashboard/DeepDiveStatsSection";
import { CompetitorInsightsSection } from "./dashboard/CompetitorInsightsSection";
import { PerformanceOverviewSection } from "./dashboard/PerformanceOverviewSection";
import { ShareOfVoiceDetailedCard } from "./dashboard/ShareOfVoiceDetailedCard";
import { TopicAuthorityCard } from "./dashboard/TopicAuthorityCard";

interface MonitorDashboardProps {
  data: any;
  navigate: any;
  products: any;
  stats: any;
  chartData?: any[];
  dashboardCharts?: any[];
  brandName?: string;
  deepDiveStats?: any;
  competitorInsights?: any[];
  sourcesChartData?: any[];
  topics?: Array<{ label: string; value: string }>;
  topicRankings?: any[];
  citationsData?: any;
  onNavigateToCompetitors?: () => void;
  filters: FilterOptions;
  onFilterChange: (filters: FilterOptions) => void;
}

export function MonitorDashboard({
  data,
  navigate,
  products,
  stats,
  chartData = [],
  dashboardCharts = [],
  brandName = "",
  deepDiveStats = {
    recommendationRate: 0,
    citationCount: 0,
    competitorGap: 0,
  },
  competitorInsights = [],
  topics = [],
  topicRankings = [],
  onNavigateToCompetitors,
  filters,
  onFilterChange,
}: MonitorDashboardProps) {
  // Use passed data directly (fetching logic moved to parent)
  const displayData = data;
  const displayStats = stats;
  const displayChartData = Array.isArray(chartData) ? chartData : [];
  const displayDashboardCharts = Array.isArray(dashboardCharts) ? dashboardCharts : [];
  const displayCompetitorInsights = competitorInsights;
  const displayDeepDiveStats = deepDiveStats;
  const displayTopicRankings = topicRankings;

  const {
    competitors: finalCompetitors,
    potentialRevenue,
    shareOfVoiceStats: finalSovStats,
  } = displayData || {};

  // Filter out "YOU" brands to only show competitors
  const competitorsOnly = useMemo(() => {
    return finalCompetitors?.filter((c: any) => c?.type !== "YOU") || [];
  }, [finalCompetitors]);

  // Sort competitors by visibility (descending) for display in brands table
  const competitorsSortedByVisibility = useMemo(() => {
    return [...competitorsOnly].sort((a: any, b: any) => {
      const aVis = a.stats?.visibility || 0;
      const bVis = b.stats?.visibility || 0;
      return bVis - aVis; // Descending order (higher visibility = first)
    });
  }, [competitorsOnly]);

  // Calculate market averages from competitors (excluding "YOU")
  const competitorBrands = competitorsOnly;
  const marketAvgVisibility =
    competitorBrands.length > 0
      ? Math.round(
          competitorBrands.reduce(
            (sum: number, c: any) => sum + (c.stats?.visibility || 0),
            0,
          ) / competitorBrands.length,
        )
      : 45; // Fallback to 45 if no competitors
  const marketAvgSentiment =
    competitorBrands.length > 0
      ? Math.round(
          competitorBrands.reduce(
            (sum: number, c: any) => sum + (c.stats?.sentiment || 0),
            0,
          ) / competitorBrands.length,
        )
      : 60; // Fallback to 60 if no competitors

  // Chart brands and colors
  const chartBrands = useMemo(() => {
    if (!Array.isArray(displayChartData) || displayChartData.length === 0) return [];
    const keys = Object.keys(displayChartData[0]);
    return keys.filter(
      (key) =>
        key !== "date" &&
        key !== "label" &&
        key !== "visibility" &&
        key !== "total" &&
        key !== "fullDate",
    );
  }, [displayChartData]);

  const brandColors: Record<string, string> = {
    [brandName || "You"]: "#4caf50",
  };
  const otherColors = ["#ff9800", "#2196f3", "#9c27b0", "#00bcd4", "#ff5252"];

  return (
    <BlockStack gap="600">
      <LiveTicker promptCount={5} competitorCount={competitorsOnly.length} />

      {/* Filters */}
      <DataFilters
        filters={filters}
        onChange={onFilterChange}
        products={products}
        topics={topics}
      />

      <Layout>
        <Layout.Section>
          <MonitorMetricsSection
            displayStats={displayStats}
            marketAvgVisibility={marketAvgVisibility}
            marketAvgSentiment={marketAvgSentiment}
            displayDashboardCharts={displayDashboardCharts}
          />
        </Layout.Section>
      </Layout>

      {/* Visibility Chart + Brands Table */}
      <VisibilityTrendsSection
        displayChartData={displayChartData}
        chartBrands={chartBrands}
        brandColors={brandColors}
        otherColors={otherColors}
        brandName={brandName}
        onRefresh={() => navigate(".", { replace: true })}
        onNavigateToCompetitors={onNavigateToCompetitors}
        competitorsOnly={competitorsOnly}
        competitorsSortedByVisibility={competitorsSortedByVisibility}
      />

      {/* Deep Dive Stats Row */}
      <DeepDiveStatsSection
        displayDeepDiveStats={displayDeepDiveStats}
        displayStats={displayStats}
      />

      {/* Competitor Insights Section */}
      <CompetitorInsightsSection
        competitorInsights={displayCompetitorInsights}
      />

      {/* Performance Overview */}
      <PerformanceOverviewSection
        potentialRevenue={potentialRevenue}
        displayStats={displayStats}
      />

      {/* Share of Voice Detailed Card */}
      <ShareOfVoiceDetailedCard finalSovStats={finalSovStats} />

      {/* Visibility Rankings By Topic */}
      <TopicAuthorityCard
        brandName={brandName || "You"}
        topicsData={displayTopicRankings}
      />
    </BlockStack>
  );
}
