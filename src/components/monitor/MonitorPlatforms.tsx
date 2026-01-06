import { BlockStack } from "@shopify/polaris";
import { useMemo, useState, useCallback } from "react";
import {
  type MultiSelectFilterOptions,
  MultiSelectFilters,
} from "../MultiSelectFilters";
import { PLATFORMS } from "../../utils/platforms";
import { MatrixView } from "./platforms/MatrixView";
import { PlatformMetricCard } from "./platforms/PlatformMetricCard";
import { CustomBarChartTooltip } from "./platforms/CustomBarChartTooltip";
import { CustomLineChartTooltip } from "./platforms/CustomLineChartTooltip";

interface MonitorPlatformsProps {
  topics?: Array<{ label: string; value: string }>;
  data?: any;
  matrixData?: any;
  brandName?: string;
  brandDomain?: string;
  filters: MultiSelectFilterOptions;
  onFilterChange: (filters: MultiSelectFilterOptions) => void;
}

// Extended color palette with distinct contrast - matching MetricBarChart
const barColors = [
  "#000000", // Solid black (very dark)
  "#14b8a6", // Teal (medium-bright, cool)
  "#fbbf24", // Golden yellow (bright, warm)
  "#3b82f6", // Blue (medium-bright, cool)
  "#9333ea", // Deep purple (medium, cool) - distinct from blue
  "#ea580c", // Deep orange (bright, warm) - distinct from yellow
  "#dc2626", // Red (bright, warm)
  "#16a34a", // Forest green (medium, cool) - distinct from teal
  "#ec4899", // Pink/magenta (bright, warm) - distinct from all
  "#b45309", // Amber/brown (medium, warm) - distinct from orange
];

export function MonitorPlatforms({
  topics = [],
  data,
  matrixData,
  brandName,
  brandDomain,
  filters,
  onFilterChange,
}: MonitorPlatformsProps) {
  const [visibilityView, setVisibilityView] = useState<"bar" | "line">("line");
  const [shareOfVoiceView, setShareOfVoiceView] = useState<"bar" | "line">(
    "line",
  );
  const [averagePositionView, setAveragePositionView] = useState<
    "bar" | "line"
  >("line");
  const [citationShareView, setCitationShareView] = useState<"bar" | "line">(
    "line",
  );
  const [sentimentView, setSentimentView] = useState<"bar" | "line">("line");

  // Merge fetched data with initial props
  // The parent component handles fetching, so we use 'data' and 'matrixData' directly
  const platformsData = data || null;
  const platformsMatrixData = matrixData || null;

  // Map frontend/filter keys to backend data keys
  const BACKEND_KEY_MAP: Record<string, string> = {
    chatgpt: "chatgpt-search",
    "searchapi-google": "google-official",
    "bing-serp": "searchapi-bing",
    "deepseek-web": "deepseek-chat",
    "claude-web": "claude-3-5-sonnet",
    "grok-web": "grok-beta",
  };

  // Get selected platforms and map to display names
  // Map filter keys to backend keys to ensure data matching
  const selectedPlatformKeys = (filters.platforms || []).map(
    (k) => BACKEND_KEY_MAP[k] || k,
  );

  // Default platforms to show (Backend Keys)
  const allPlatformKeys = [
    // 'google-official',
    // 'searchapi-bing',
    "perplexity-sonar",
    "chatgpt-search",
    "google-search-gemini",
    // 'deepseek-chat',
    // 'claude-3-5-sonnet',
    // 'grok-beta',
    // 'gemini-1.5-flash',
  ];

  // If no platforms selected, show all platforms
  const platformsToShow =
    selectedPlatformKeys.length === 0 ? allPlatformKeys : selectedPlatformKeys;

  // Map platform keys to display names
  const platformDisplayMap = useMemo(() => {
    const map: Record<string, string> = {};
    platformsToShow.forEach((key) => {
      const platform = PLATFORMS[key];
      if (platform) {
        map[key] = platform.name;
      }
    });
    return map;
  }, [platformsToShow]);

  // Create a unique color map for platforms - assign colors in order
  const platformColorMap = useMemo(() => {
    const map = new Map<string, string>();
    platformsToShow.forEach((key, index) => {
      const platform = PLATFORMS[key];
      if (platform && !map.has(platform.name)) {
        map.set(platform.name, barColors[index % barColors.length]);
      }
    });
    return map;
  }, [platformsToShow]);

  // Reverse mapping from display name to platform key for tooltips
  const displayNameToKey = useMemo(() => {
    const map: Record<string, string> = {};
    platformsToShow.forEach((key) => {
      const platform = PLATFORMS[key];
      if (platform) {
        map[platform.name] = key;
      }
    });
    return map;
  }, [platformsToShow]);

  // Helper to process line chart data for a specific metric
  const getMetricLineData = useCallback(
    (metricPrefix: string) => {
      if (!platformsData?.lineChartData) return [];

      return (
        platformsData.lineChartData
          .map((point: any) => {
            const newPoint: any = { date: point.date };
            // For each platform in the map, find the corresponding prefixed key in data
            // and map it to the Display Name (which the Chart expects)
            Object.entries(platformDisplayMap).forEach(([key, displayName]) => {
              // Backend key: e.g. "visibility_chatgpt"
              const dataKey = `${metricPrefix}_${key}`;
              if (point[dataKey] !== undefined) {
                newPoint[displayName] = point[dataKey];
              }
            });
            return newPoint;
          })
          // Filter out data points where all platforms have zero or no values
          .filter((point: any) => {
            return Object.values(platformDisplayMap).some(
              (displayName) => (point[displayName] || 0) > 0,
            );
          })
      );
    },
    [platformsData, platformDisplayMap],
  );

  // Metric-specific Line Data
  const visibilityLineData = useMemo(
    () => getMetricLineData("visibility"),
    [getMetricLineData],
  );
  const shareOfVoiceLineData = useMemo(
    () => getMetricLineData("sov"),
    [getMetricLineData],
  );
  const averagePositionLineData = useMemo(
    () => getMetricLineData("position"),
    [getMetricLineData],
  );
  const citationShareLineData = useMemo(
    () => getMetricLineData("citation"),
    [getMetricLineData],
  );
  const sentimentLineData = useMemo(
    () => getMetricLineData("sentiment"),
    [getMetricLineData],
  );

  // Fallback Mock Data Logic (only if real data is missing)
  const lineChartData = useMemo(() => {
    if (visibilityLineData.length > 0) return visibilityLineData;
    return [];
  }, [visibilityLineData]);

  const platformRankings = useMemo(() => {
    if (platformsData?.platformRankings) {
      // Map keys to display names if needed, backend sends { platform: 'chatgpt', score: ... }
      return platformsData.platformRankings
        .map((item: any) => ({
          platform: platformDisplayMap[item.platform] || item.platform,
          score: item.score,
        }))
        .filter((item: any) => {
          return Object.values(platformDisplayMap).includes(item.platform);
        })
        .sort((a: any, b: any) => b.score - a.score);
    }
    // Calculate average from line chart data if available
    if (lineChartData.length > 0) {
      const platformAverages: Record<string, number> = {};

      Object.entries(platformDisplayMap).forEach(([key, displayName]) => {
        const values = lineChartData
          .map((d: any) => d[displayName] || 0)
          .filter((v: number) => v > 0);
        platformAverages[displayName] =
          values.length > 0
            ? Number(
                (
                  values.reduce((a: number, b: number) => a + b, 0) /
                  values.length
                ).toFixed(1),
              )
            : 0;
      });

      return Object.entries(platformAverages)
        .map(([platform, score]) => ({ platform, score }))
        .sort((a, b) => b.score - a.score);
    }
    return [];
  }, [platformsData, lineChartData, platformDisplayMap]);

  // Bar chart data from platform rankings
  const barChartData = useMemo(() => {
    return platformRankings.map((item: any) => ({
      name: item.platform,
      value: item.score,
    }));
  }, [platformRankings]);

  // Generate mock data for Share of Voice
  const shareOfVoiceRankings = useMemo(() => {
    if (platformsData?.shareOfVoiceRankings) {
      return platformsData.shareOfVoiceRankings
        .map((item: any) => ({
          platform: platformDisplayMap[item.platform] || item.platform,
          score: item.score,
        }))
        .filter((item: any) =>
          Object.values(platformDisplayMap).includes(item.platform),
        )
        .sort((a: any, b: any) => b.score - a.score);
    }
    return [];
  }, [platformsData, platformDisplayMap]);

  const shareOfVoiceBarData = useMemo(() => {
    return shareOfVoiceRankings.map((item: any) => ({
      name: item.platform,
      value: item.score,
    }));
  }, [shareOfVoiceRankings]);

  // Use computed SoV line data if available, else mock
  const finalShareOfVoiceLineData = useMemo(() => {
    if (shareOfVoiceLineData.length > 0) return shareOfVoiceLineData;
    return [];
  }, [shareOfVoiceLineData]);

  // Generate mock data for Average Position
  const averagePositionRankings = useMemo(() => {
    if (platformsData?.averagePositionRankings) {
      return platformsData.averagePositionRankings
        .map((item: any) => ({
          platform: platformDisplayMap[item.platform] || item.platform,
          score: item.score,
        }))
        .filter((item: any) =>
          Object.values(platformDisplayMap).includes(item.platform),
        )
        .sort(
          (a: any, b: any) =>
            (a.score === 0 ? 999 : a.score) - (b.score === 0 ? 999 : b.score),
        );
    }
    return [];
  }, [platformsData, platformDisplayMap]);

  const averagePositionBarData = useMemo(() => {
    return averagePositionRankings.map((item: any) => ({
      name: item.platform,
      value: item.score,
    }));
  }, [averagePositionRankings]);

  const finalAveragePositionLineData = useMemo(() => {
    if (averagePositionLineData.length > 0) return averagePositionLineData;
    return [];
  }, [averagePositionLineData]);

  // Generate mock data for Citation Share
  const citationShareRankings = useMemo(() => {
    if (platformsData?.citationShareRankings) {
      return platformsData.citationShareRankings
        .map((item: any) => ({
          platform: platformDisplayMap[item.platform] || item.platform,
          score: item.score,
        }))
        .filter((item: any) =>
          Object.values(platformDisplayMap).includes(item.platform),
        )
        .sort((a: any, b: any) => b.score - a.score);
    }
    return [];
  }, [platformsData, platformDisplayMap]);

  const citationShareBarData = useMemo(() => {
    return citationShareRankings.map((item: any) => ({
      name: item.platform,
      value: item.score,
    }));
  }, [citationShareRankings]);

  const finalCitationShareLineData = useMemo(() => {
    if (citationShareLineData.length > 0) return citationShareLineData;
    return [];
  }, [citationShareLineData]);

  // Generate mock data for Sentiment
  const sentimentRankings = useMemo(() => {
    if (platformsData?.sentimentRankings) {
      return platformsData.sentimentRankings
        .map((item: any) => ({
          platform: platformDisplayMap[item.platform] || item.platform,
          score: item.score,
        }))
        .filter((item: any) =>
          Object.values(platformDisplayMap).includes(item.platform),
        )
        .sort((a: any, b: any) => b.score - a.score);
    }
    return [];
  }, [platformsData, platformDisplayMap]);

  const sentimentBarData = useMemo(() => {
    return sentimentRankings.map((item: any) => ({
      name: item.platform,
      value: item.score,
    }));
  }, [sentimentRankings]);

  const finalSentimentLineData = useMemo(() => {
    if (sentimentLineData.length > 0) return sentimentLineData;
    return [];
  }, [sentimentLineData]);

  return (
    <BlockStack gap="600">
      <MultiSelectFilters
        filters={filters}
        onChange={onFilterChange}
        topics={topics}
        visibleFilters={{
          timeRange: true,
          topics: true,
          platforms: true,
          citations: false,
          prompts: false,
        }}
      />

      <MatrixView
        platformDisplayMap={platformDisplayMap}
        platformsToShow={platformsToShow} // Use keys
        displayNameToKey={displayNameToKey}
        matrixData={platformsMatrixData}
      />

      {/* Visibility Score by Platform */}
      <PlatformMetricCard
        title="Visibility Score by Platform"
        subtitle={`How often ${brandName || "your brand"} appears across each AI platform`}
        chartTitle="Visibility Score"
        rankTitle="Visibility Score Rank"
        barChartData={barChartData}
        lineChartData={lineChartData}
        rankings={platformRankings}
        platformDisplayMap={platformDisplayMap}
        displayNameToKey={displayNameToKey}
        platformColorMap={platformColorMap}
        barColors={barColors}
        view={visibilityView}
        onViewChange={setVisibilityView}
        CustomBarChartTooltip={CustomBarChartTooltip}
        CustomLineChartTooltip={CustomLineChartTooltip}
      />

      {/* Share of Voice by Platform */}
      <PlatformMetricCard
        title="Share of Voice by Platform"
        subtitle={`Mentions of ${brandName || "your brand"} across each AI platform in relation to competitors`}
        chartTitle="Share of Voice"
        rankTitle="Share of Voice Rank"
        barChartData={shareOfVoiceBarData}
        lineChartData={finalShareOfVoiceLineData}
        rankings={shareOfVoiceRankings}
        platformDisplayMap={platformDisplayMap}
        displayNameToKey={displayNameToKey}
        platformColorMap={platformColorMap}
        barColors={barColors}
        view={shareOfVoiceView}
        onViewChange={setShareOfVoiceView}
        CustomBarChartTooltip={CustomBarChartTooltip}
        CustomLineChartTooltip={CustomLineChartTooltip}
      />

      {/* Average Position by Platform */}
      <PlatformMetricCard
        title="Average Position by Platform"
        subtitle={`How often ${brandName || "your brand"} appears across each AI platform`}
        chartTitle="Average Position"
        rankTitle="Average Position Rank"
        barChartData={averagePositionBarData}
        lineChartData={finalAveragePositionLineData}
        rankings={averagePositionRankings}
        platformDisplayMap={platformDisplayMap}
        displayNameToKey={displayNameToKey}
        platformColorMap={platformColorMap}
        barColors={barColors}
        view={averagePositionView}
        onViewChange={setAveragePositionView}
        yAxisFormatter={(value) => value.toFixed(1)}
        valueFormatter={(value) => value.toFixed(1)}
        reversedYAxis={true} // Rank 1 is top
        CustomBarChartTooltip={CustomBarChartTooltip}
        CustomLineChartTooltip={CustomLineChartTooltip}
      />

      {/* Citation Share by Platform */}
      <PlatformMetricCard
        title="Citation Share by Platform"
        subtitle={`How often ${brandDomain || "your brand"} is cited across each AI platform`}
        chartTitle="Citation Share"
        rankTitle="Citation Share Rank"
        barChartData={citationShareBarData}
        lineChartData={finalCitationShareLineData}
        rankings={citationShareRankings}
        platformDisplayMap={platformDisplayMap}
        displayNameToKey={displayNameToKey}
        platformColorMap={platformColorMap}
        barColors={barColors}
        view={citationShareView}
        onViewChange={setCitationShareView}
        CustomBarChartTooltip={CustomBarChartTooltip}
        CustomLineChartTooltip={CustomLineChartTooltip}
      />

      {/* Sentiment by Platform */}
      <PlatformMetricCard
        title="Sentiment by Platform"
        subtitle={`How positively each AI platform talks about ${brandName || "your brand"}`}
        chartTitle="Sentiment"
        rankTitle="Sentiment Rank"
        barChartData={sentimentBarData}
        lineChartData={finalSentimentLineData}
        rankings={sentimentRankings}
        platformDisplayMap={platformDisplayMap}
        displayNameToKey={displayNameToKey}
        platformColorMap={platformColorMap}
        barColors={barColors}
        view={sentimentView}
        onViewChange={setSentimentView}
        yAxisDomain={[0, 100]}
        CustomBarChartTooltip={CustomBarChartTooltip}
        CustomLineChartTooltip={CustomLineChartTooltip}
      />
    </BlockStack>
  );
}
