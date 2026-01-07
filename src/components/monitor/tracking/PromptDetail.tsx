import {
  Page,
  Layout,
  BlockStack,
  Grid,
  Card,
  Text,
  InlineStack,
  Icon,
  Badge,
  Button,
  Box,
  SkeletonPage,
  SkeletonBodyText,
  SkeletonDisplayText,
  Divider,
} from "@shopify/polaris";
import { ArrowUpIcon, ArrowDownIcon, DeleteIcon } from "@shopify/polaris-icons";
import React, { useState, useMemo } from "react";
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip as RechartsTooltip,
} from "recharts";
import {
  MultiSelectFilters,
  MultiSelectFilterOptions,
} from "../../MultiSelectFilters";
import { MonitorExecutionsTable } from "./MonitorExecutionsTable";
import { MonitorCitationsTable } from "./MonitorCitationsTable";
import { VisibilityTab } from "./VisibilityTab";
import { AveragePositionTab } from "./AveragePositionTab";
import { CitationShareTab } from "./CitationShareTab";

// Constants from reference
const DEFAULT_PLATFORMS = [
  "chatgpt-search",
  "google-official",
  "bing-serp",
  "perplexity-sonar",
  "google-search-gemini",
  "gemini-1.5-flash",
  "claude-3-5-sonnet",
  "deepseek-chat",
  "grok-beta",
];

const LOCATION_MAP: Record<string, { label: string; flag: string }> = {
  US: { label: "United States", flag: "🇺🇸" },
  UK: { label: "United Kingdom", flag: "🇬🇧" },
  CA: { label: "Canada", flag: "🇨🇦" },
  AU: { label: "Australia", flag: "🇦🇺" },
  DE: { label: "Germany", flag: "🇩🇪" },
  FR: { label: "France", flag: "🇫🇷" },
  ES: { label: "Spain", flag: "🇪🇸" },
  IT: { label: "Italy", flag: "🇮🇹" },
  JP: { label: "Japan", flag: "🇯🇵" },
};

function getLocationInfo(code?: string) {
  if (!code) return { label: "Unknown", flag: "🌍" };
  return LOCATION_MAP[code] || { label: code, flag: "🌍" };
}

function matchesPlatformFilter(model: string, filter: string) {
  if (filter === "all") return true;
  const modelLower = model.toLowerCase();
  const filterLower = filter.toLowerCase();

  // Helper for exact matches first
  if (modelLower === filterLower) return true;

  // Platform mapping logic
  if (filterLower === "chatgpt-search" && modelLower.includes("gpt"))
    return true;
  if (
    filterLower === "google-official" &&
    (modelLower.includes("google") || modelLower.includes("sge"))
  )
    return true;
  if (filterLower === "bing-serp" && modelLower.includes("bing")) return true;
  if (filterLower === "perplexity-sonar" && modelLower.includes("perplexity"))
    return true;
  if (
    filterLower === "google-search-gemini" &&
    modelLower.includes("gemini") &&
    modelLower.includes("search")
  )
    return true;

  return modelLower.includes(filterLower);
}

const LOCATION_OPTIONS = [
  { label: "United States", value: "US" },
  { label: "United Kingdom", value: "UK" },
  { label: "Canada", value: "CA" },
  { label: "Australia", value: "AU" },
  { label: "Germany", value: "DE" },
  { label: "France", value: "FR" },
  { label: "Spain", value: "ES" },
  { label: "Italy", value: "IT" },
  { label: "Japan", value: "JP" },
];

interface PromptDetailProps {
  prompt: any;
  loading?: boolean;
  onBack: () => void;
  onDelete: () => void;
}

export function PromptDetail({
  prompt,
  loading = false,
  onBack,
  onDelete,
}: PromptDetailProps) {
  const [filters, setFilters] = useState<MultiSelectFilterOptions>({
    timeRange: "7",
    platforms: DEFAULT_PLATFORMS,
    location: [],
  });
  const [selectedDataTab, setSelectedDataTab] = useState<
    "executions" | "citations"
  >("executions");
  const [selectedMetricTab, setSelectedMetricTab] = useState<
    "visibility" | "position" | "citation"
  >("visibility");

  const runHistory = prompt?.runs || [];

  // Filter runs based on selected filters
  const filteredRuns = useMemo(() => {
    let filtered = runHistory;

    // Filter by Time Range
    if (filters.timeRange && filters.timeRange !== "all") {
      const days = parseInt(filters.timeRange);
      if (!isNaN(days)) {
        const cutoff = new Date();
        cutoff.setDate(cutoff.getDate() - days);
        cutoff.setHours(0, 0, 0, 0);
        filtered = filtered.filter(
          (r: any) => new Date(r.createdAt || r.date) >= cutoff,
        );
      }
    }

    // Filter by Location
    if (filters.location && filters.location.length > 0) {
      filtered = filtered.filter((r: any) =>
        filters.location!.some((l: string) => l === r.location),
      );
    }

    return filtered;
  }, [runHistory, filters]);

  // Aggregate data for daily charts
  const aggregatedChartData = useMemo(() => {
    const dailyMap = new Map();
    const today = new Date();
    const daysToCheck = parseInt(filters.timeRange || "30") || 30;
    const isAll = filters.timeRange === "all";

    let startDate = new Date();
    if (!isAll) {
      startDate.setDate(today.getDate() - (daysToCheck - 1));
    } else {
      if (filteredRuns.length > 0) {
        const earliest = new Date(
          Math.min(
            ...filteredRuns.map((r: any) =>
              new Date(r.createdAt || r.date).getTime(),
            ),
          ),
        );
        startDate = earliest;
      } else {
        startDate.setDate(today.getDate() - 29);
      }
    }
    startDate.setHours(0, 0, 0, 0);

    const currentDate = new Date(startDate);
    const loopEnd = new Date();
    loopEnd.setHours(23, 59, 59, 999);

    while (currentDate <= loopEnd) {
      const dateStr = currentDate.toLocaleDateString();
      dailyMap.set(dateStr, {
        sumSentiment: 0,
        countSentiment: 0,
        sumVisibility: 0,
        countVisibility: 0,
        date: dateStr,
        timestamp: currentDate.getTime(),
      });
      currentDate.setDate(currentDate.getDate() + 1);
    }

    filteredRuns.forEach((run: any) => {
      const dateObj = new Date(run.createdAt || run.date);
      const dateStr = dateObj.toLocaleDateString();

      if (dailyMap.has(dateStr)) {
        const data = dailyMap.get(dateStr);
        if (typeof run.sentiment === "number") {
          data.sumSentiment += run.sentiment;
          data.countSentiment++;
        }
        if (run.position && run.position > 0) {
          data.sumVisibility += 100 / run.position;
          data.countVisibility++;
        }
      }
    });

    const result = Array.from(dailyMap.values()).map((d: any) => ({
      date: d.date,
      sentiment:
        d.countSentiment > 0
          ? Math.round(d.sumSentiment / d.countSentiment)
          : 0,
      visibility:
        d.countVisibility > 0
          ? Math.round(d.sumVisibility / d.countVisibility)
          : 0,
      timestamp: d.timestamp,
    }));

    return result.sort((a, b) => a.timestamp - b.timestamp);
  }, [filteredRuns, filters.timeRange]);

  // Prepare data for tables
  const executionRows = useMemo(() => {
    return filteredRuns.map((run: any) => {
      const isMentioned =
        (run.mentions && run.mentions.length > 0) ||
        (run.position !== null && run.position !== undefined) ||
        (run.citations && run.citations.length > 0);

      return {
        id: run.id || "",
        date: new Date(run.createdAt || run.date),
        mentioned: isMentioned,
        position: run.position || null,
        mentions: (run.mentions || []).map((m: any) => ({
          ...m,
          brand: {
            ...m.brand,
            domain:
              m.brand.domain ||
              `${m.brand.name.toLowerCase().replace(/[^a-z0-9]/g, "")}.com`,
            logo:
              m.brand.logo ||
              `https://www.google.com/s2/favicons?domain=${m.brand.name
                .toLowerCase()
                .replace(/[^a-z0-9]/g, "")}.com&sz=64`,
          },
        })),
        citations: run.citations || [],
        response:
          run.response || run.answer || run.text || "No response available",
        platform: run.model || run.platform || "",
        region: run.location
          ? getLocationInfo(run.location).label
          : getLocationInfo(prompt?.location).label,
        searchQueries: [prompt?.text || ""],
        sentiment: run.sentiment,
        visibility: run.visibility,
      };
    });
  }, [filteredRuns, prompt]);

  const citationData = useMemo(() => {
    // Collect all citations from filtered runs
    const allCitations: Array<{ citation: any; run: any }> = [];
    filteredRuns.forEach((run: any) => {
      if (run.citations && run.citations.length > 0) {
        run.citations.forEach((citation: any) => {
          allCitations.push({ citation, run });
        });
      }
    });

    // Sort by date (newest first)
    allCitations.sort((a, b) => {
      const dateA = new Date(a.run.createdAt || a.run.date).getTime();
      const dateB = new Date(b.run.createdAt || b.run.date).getTime();
      return dateB - dateA;
    });

    // Show only first 10 rows initially (pagination mock)
    const displayedCitations = allCitations.slice(0, 10);

    const citationRows = displayedCitations.map((item, index) => {
      const { citation, run } = item;
      const share =
        allCitations.length > 0
          ? Number((100 / allCitations.length).toFixed(1))
          : 0;

      return {
        id: citation.id || index,
        rank: index + 1,
        url: citation.url || "",
        title: citation.title || "",
        domain: citation.domain || "",
        sourceType: citation.sourceType || "OTHER",
        isCompetitor: citation.isCompetitor,
        platform: run.model || run.platform || "",
        share: share,
      };
    });

    return { rows: citationRows, total: allCitations.length };
  }, [filteredRuns]);

  if (loading || !prompt) {
    return (
      <SkeletonPage primaryAction>
        <Layout>
          <Layout.Section>
            <Card>
              <SkeletonDisplayText size="medium" />
              <Box paddingBlockStart="400">
                <SkeletonBodyText lines={5} />
              </Box>
            </Card>
          </Layout.Section>
        </Layout>
      </SkeletonPage>
    );
  }

  // --- Helper Renderers ---

  const renderTrend = (type: "visibility" | "sentiment") => {
    if (!filteredRuns || filteredRuns.length === 0) return null;

    const toLocalDateString = (date: Date) => {
      return date.toLocaleDateString();
    };

    const latestRun = filteredRuns[0]; // Assuming sorted? If not, need sort. But filteredRuns is usually order of API (desc)
    // Wait, filteredRuns from map/filter preserves order.
    // If runHistory is DESC (newest first), then filteredRuns[0] is newest.
    // Let's assume input is DESC.

    const latestDate = new Date(latestRun?.createdAt || latestRun?.date);
    const previousDate = new Date(latestDate);
    previousDate.setDate(previousDate.getDate() - 1);

    const getDailyAvg = (targetDate: Date) => {
      const targetDateStr = toLocalDateString(targetDate);
      const runs = filteredRuns.filter((r: any) => {
        const runDate = new Date(r.createdAt || r.date);
        return toLocalDateString(runDate) === targetDateStr;
      });
      if (runs.length === 0) return 0;

      if (type === "visibility") {
        const sum = runs.reduce((acc: number, r: any) => {
          let vis = 0;
          if (r.visibility !== undefined) vis = r.visibility;
          else if (r.position > 0) vis = 100 / r.position;
          return acc + vis;
        }, 0);
        return Math.round(sum / runs.length);
      } else {
        const validRuns = runs.filter(
          (r: any) => typeof r.sentiment === "number",
        );
        if (validRuns.length === 0) return 0;
        const sum = validRuns.reduce(
          (acc: number, r: any) => acc + r.sentiment,
          0,
        );
        return Math.round(sum / validRuns.length);
      }
    };

    const latestAvg = getDailyAvg(latestDate);
    const previousAvg = getDailyAvg(previousDate);
    const diff = latestAvg - previousAvg;

    return (
      <InlineStack gap="050" blockAlign="center">
        <Icon
          source={diff >= 0 ? ArrowUpIcon : ArrowDownIcon}
          tone={diff >= 0 ? "success" : "critical"}
        />
        <Text
          tone={diff >= 0 ? "success" : "critical"}
          variant="bodySm"
          as="span"
        >
          {Math.abs(diff)}%
        </Text>
      </InlineStack>
    );
  };

  const currentAvgVisibility = (() => {
    if (!filteredRuns.length) return "0%";
    const latest = filteredRuns[0]; // Assuming DESC
    // Simplified logic: Just take avg of ALL filtered runs for the card?
    // Or latest day? Reference does latest day.
    // Let's rely on aggregatedChartData's last point?
    if (aggregatedChartData.length > 0) {
      const last = aggregatedChartData[aggregatedChartData.length - 1];
      return `${last.visibility}%`;
    }
    return "0%";
  })();

  const currentAvgSentiment = (() => {
    if (aggregatedChartData.length > 0) {
      const last = aggregatedChartData[aggregatedChartData.length - 1];
      return `${last.sentiment}%`;
    }
    return "0%";
  })();

  return (
    <Page
      title={prompt.text}
      fullWidth
      backAction={{
        content: "Prompts",
        onAction: onBack,
      }}
      secondaryActions={[
        {
          content: "Delete Prompt",
          destructive: true,
          onAction: onDelete,
          icon: DeleteIcon,
        },
      ]}
    >
      <BlockStack gap="600">
        {/* Filters */}
        <MultiSelectFilters
          filters={filters}
          onChange={setFilters}
          availablePlatforms={DEFAULT_PLATFORMS}
          availableLocations={LOCATION_OPTIONS}
          visibleFilters={{
            timeRange: true,
            citations: false,
            prompts: false,
            topics: false,
            platforms: true,
            location: true,
          }}
        />

        {/* Header Stats Grid */}
        <Grid>
          <Grid.Cell columnSpan={{ xs: 6, sm: 6, md: 3, lg: 3, xl: 3 }}>
            <Card>
              <BlockStack gap="200">
                <Text tone="subdued" as="span" variant="bodySm">
                  Avg Visibility
                </Text>
                <InlineStack align="space-between" blockAlign="center">
                  <InlineStack align="start" blockAlign="center" gap="200">
                    <Text variant="headingLg" as="span">
                      {currentAvgVisibility}
                    </Text>
                    {renderTrend("visibility")}
                  </InlineStack>
                  <div style={{ height: 40, width: 100 }}>
                    <ResponsiveContainer width="100%" height="100%">
                      <LineChart data={aggregatedChartData}>
                        <Line
                          type="monotone"
                          dataKey="visibility"
                          stroke="#008060"
                          strokeWidth={2}
                          dot={false}
                        />
                      </LineChart>
                    </ResponsiveContainer>
                  </div>
                </InlineStack>
              </BlockStack>
            </Card>
          </Grid.Cell>
          <Grid.Cell columnSpan={{ xs: 6, sm: 6, md: 3, lg: 3, xl: 3 }}>
            <Card>
              <BlockStack gap="200">
                <Text tone="subdued" as="span" variant="bodySm">
                  Avg Sentiment
                </Text>
                <InlineStack align="space-between" blockAlign="center">
                  <InlineStack gap="200" blockAlign="center">
                    <Text variant="headingLg" as="span">
                      {currentAvgSentiment}
                    </Text>
                    {renderTrend("sentiment")}
                  </InlineStack>
                  <div style={{ height: 40, width: 100 }}>
                    <ResponsiveContainer width="100%" height="100%">
                      <LineChart data={aggregatedChartData}>
                        <Line
                          type="monotone"
                          dataKey="sentiment"
                          stroke="#008060"
                          strokeWidth={2}
                          dot={false}
                        />
                      </LineChart>
                    </ResponsiveContainer>
                  </div>
                </InlineStack>
              </BlockStack>
            </Card>
          </Grid.Cell>
          <Grid.Cell columnSpan={{ xs: 6, sm: 6, md: 3, lg: 3, xl: 3 }}>
            <Card>
              <BlockStack gap="200">
                <Text tone="subdued" as="span" variant="bodySm">
                  Total Runs
                </Text>
                <InlineStack align="space-between" blockAlign="center">
                  <Text variant="headingLg" as="span">
                    {filteredRuns.length}
                  </Text>
                </InlineStack>
              </BlockStack>
            </Card>
          </Grid.Cell>
          <Grid.Cell columnSpan={{ xs: 6, sm: 6, md: 3, lg: 3, xl: 3 }}>
            <Card>
              <BlockStack gap="200">
                <Text tone="subdued" as="span" variant="bodySm">
                  Avg Latest Rank
                </Text>
                <InlineStack align="space-between" blockAlign="center">
                  <Text variant="headingLg" as="span">
                    {filteredRuns.length > 0 && filteredRuns[0].position
                      ? `#${filteredRuns[0].position}`
                      : "—"}
                  </Text>
                </InlineStack>
              </BlockStack>
            </Card>
          </Grid.Cell>
        </Grid>

        {/* Main Chart Section */}
        <BlockStack gap="400">
          <InlineStack gap="200">
            <div
              style={{
                display: "inline-flex",
                backgroundColor: "#f1f2f4",
                borderRadius: "8px",
                padding: "4px",
                gap: "4px",
              }}
            >
              {[
                { id: "visibility", label: "Visibility" },
                { id: "position", label: "Average Position" },
                { id: "citation", label: "Citation Share" },
              ].map((tab) => {
                const isActive = selectedMetricTab === tab.id;
                return (
                  <button
                    key={tab.id}
                    onClick={() =>
                      setSelectedMetricTab(
                        tab.id as "visibility" | "position" | "citation",
                      )
                    }
                    style={{
                      padding: "8px 16px",
                      borderRadius: "6px",
                      border: "none",
                      backgroundColor: isActive ? "#1f2937" : "#ffffff",
                      color: isActive ? "#ffffff" : "#1f2937",
                      fontSize: "14px",
                      fontWeight: isActive ? 500 : 400,
                      cursor: "pointer",
                      transition: "all 0.2s ease",
                      fontFamily:
                        '-apple-system, BlinkMacSystemFont, "San Francisco", "Segoe UI", Roboto, "Helvetica Neue", sans-serif',
                      outline: "none",
                      whiteSpace: "nowrap",
                      boxShadow: "0 1px 2px rgba(0, 0, 0, 0.1)",
                    }}
                  >
                    {tab.label}
                  </button>
                );
              })}
            </div>
          </InlineStack>

          {selectedMetricTab === "visibility" && (
            <VisibilityTab
              filteredRuns={filteredRuns}
              filters={filters}
              DEFAULT_PLATFORMS={DEFAULT_PLATFORMS}
              matchesPlatformFilter={matchesPlatformFilter}
            />
          )}

          {selectedMetricTab === "position" && (
            <AveragePositionTab
              filteredRuns={filteredRuns}
              filters={filters}
              DEFAULT_PLATFORMS={DEFAULT_PLATFORMS}
              matchesPlatformFilter={matchesPlatformFilter}
            />
          )}

          {selectedMetricTab === "citation" && (
            <CitationShareTab
              filteredRuns={filteredRuns}
              filters={filters}
              DEFAULT_PLATFORMS={DEFAULT_PLATFORMS}
              matchesPlatformFilter={matchesPlatformFilter}
              brandDomain="you.com"
              brandName="You"
            />
          )}
        </BlockStack>

        {/* Tabs for Data */}
        <BlockStack gap="400">
          <InlineStack align="start" blockAlign="center">
            <div
              style={{
                display: "inline-flex",
                backgroundColor: "#f1f2f4",
                borderRadius: "8px",
                padding: "4px",
                gap: "4px",
              }}
            >
              {[
                { id: "executions", label: "Execution History" },
                { id: "citations", label: "Citations" },
              ].map((tab) => {
                const isActive = selectedDataTab === tab.id;
                return (
                  <button
                    key={tab.id}
                    onClick={() =>
                      setSelectedDataTab(tab.id as "executions" | "citations")
                    }
                    style={{
                      padding: "8px 16px",
                      borderRadius: "6px",
                      border: "none",
                      backgroundColor: isActive ? "#1f2937" : "#ffffff",
                      color: isActive ? "#ffffff" : "#1f2937",
                      fontSize: "14px",
                      fontWeight: isActive ? 500 : 400,
                      cursor: "pointer",
                      transition: "all 0.2s ease",
                      fontFamily:
                        '-apple-system, BlinkMacSystemFont, "San Francisco", "Segoe UI", Roboto, "Helvetica Neue", sans-serif',
                      outline: "none",
                      whiteSpace: "nowrap",
                      boxShadow: "0 1px 2px rgba(0, 0, 0, 0.1)",
                    }}
                  >
                    {tab.label}
                  </button>
                );
              })}
            </div>
          </InlineStack>

          <div style={{ paddingBottom: "16px" }}>
            {selectedDataTab === "executions" ? (
              <MonitorExecutionsTable
                executions={executionRows}
                brandName="You"
              />
            ) : (
              <MonitorCitationsTable
                citations={citationData.rows}
                totalCount={citationData.total}
              />
            )}
          </div>
        </BlockStack>

        {/* Bottom Section: Linked Products & Configuration */}
        <Grid>
          {/* Linked Products */}
          <Grid.Cell columnSpan={{ xs: 6, sm: 6, md: 6, lg: 6, xl: 6 }}>
            <Card>
              <BlockStack gap="400">
                <Text variant="headingMd" as="h2">
                  Linked Products
                </Text>
                <BlockStack gap="200">
                  <Text tone="subdued" as="p">
                    Link one or more products to apply AI-generated improvements
                    directly to your store.
                  </Text>
                  <InlineStack gap="200">
                    <Button>Select Products</Button>
                    <Button>Auto-Detect</Button>
                  </InlineStack>
                </BlockStack>
              </BlockStack>
            </Card>
          </Grid.Cell>

          {/* Configuration */}
          <Grid.Cell columnSpan={{ xs: 6, sm: 6, md: 6, lg: 6, xl: 6 }}>
            <Card>
              <BlockStack gap="400">
                <Text variant="headingMd" as="h2">
                  Configuration
                </Text>
                <BlockStack gap="200">
                  <InlineStack align="space-between">
                    <Text variant="bodyMd" fontWeight="semibold" as="span">
                      Locations
                    </Text>
                    <Button variant="plain">Edit</Button>
                  </InlineStack>
                  <InlineStack gap="200" blockAlign="center" wrap>
                    {(prompt?.location ? [prompt.location] : ["US"]).map(
                      (locCode: string) => {
                        const locInfo = getLocationInfo(locCode);
                        return (
                          <div
                            key={locCode}
                            style={{
                              display: "flex",
                              alignItems: "center",
                              gap: "4px",
                            }}
                          >
                            <Text as="span">{locInfo.flag}</Text>
                            <Text as="span">{locInfo.label}</Text>
                          </div>
                        );
                      },
                    )}
                  </InlineStack>
                </BlockStack>
                <Divider />
                <BlockStack gap="200">
                  <InlineStack align="space-between">
                    <Text variant="bodyMd" fontWeight="semibold" as="span">
                      Tags
                    </Text>
                    <Button variant="plain">Edit</Button>
                  </InlineStack>
                  <Text tone="subdued" as="p">
                    {prompt?.tags && prompt.tags.length > 0
                      ? Array.isArray(prompt.tags)
                        ? prompt.tags.join(", ")
                        : prompt.tags
                      : "No tags set"}
                  </Text>
                </BlockStack>
                <Divider />
                <BlockStack gap="200">
                  <InlineStack align="space-between">
                    <Text variant="bodyMd" fontWeight="semibold" as="span">
                      Persona
                    </Text>
                    <Button variant="plain">Edit</Button>
                  </InlineStack>
                  <Text tone="subdued" as="p">
                    No persona assigned
                  </Text>
                </BlockStack>
              </BlockStack>
            </Card>
          </Grid.Cell>
        </Grid>
      </BlockStack>
    </Page>
  );
}
