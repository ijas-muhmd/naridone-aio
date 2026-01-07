import {
  BlockStack,
  InlineStack,
  Text,
  Tooltip,
  Icon,
  Grid,
  Card,
} from "@shopify/polaris";
import { InfoIcon, LinkIcon, GlobeIcon } from "@shopify/polaris-icons";
import { useState, useMemo } from "react";
import { ViewConfigButton } from "./shared/ViewConfigButton";
import {
  MultiSelectFilters,
  type MultiSelectFilterOptions,
} from "../MultiSelectFilters";
import { ExecutionDetailsModal } from "./tracking/ExecutionDetailsModal";
import { getThemeDetails } from "./sentiment/utils";
import { SentimentFilters } from "./sentiment/SentimentFilters";
import { SentimentChartCard } from "./sentiment/SentimentChartCard";
import { SentimentBreakdownCard } from "./sentiment/SentimentBreakdownCard";
import { ThemesList } from "./sentiment/ThemesList";

interface MonitorSentimentProps {
  topics?: Array<{ label: string; value: string }>;
  data?: any;
  brandName?: string;
  filters: MultiSelectFilterOptions;
  onFilterChange: (filters: MultiSelectFilterOptions) => void;
}

export function MonitorSentiment({
  topics = [],
  data,
  brandName,
  filters,
  onFilterChange,
}: MonitorSentimentProps) {
  const sentimentData = useMemo(
    () =>
      data || {
        positiveSentiment: 0,
        negativeSentiment: 0,
        positiveReasons: [],
        negativeReasons: [],
        lineChartData: [],
        barChartData: [],
        themes: [],
        currentValue: 0,
        yAxisDomain: [0, 100],
      },
    [data],
  );

  const [expandedTheme, setExpandedTheme] = useState<string | null>(null);
  const [selectedThemeForModal, setSelectedThemeForModal] = useState<
    string | null
  >(null);
  const [runIndexMap, setRunIndexMap] = useState<Record<string, number>>({});

  const handleRunNavigation = (theme: string, direction: "prev" | "next") => {
    const themeData = sentimentData.themes.find((t: any) => t.theme === theme);
    if (!themeData || !themeData.runs) return;

    const total = themeData.runs.length;
    const current = runIndexMap[theme] || 0;
    let newIndex = current;

    if (direction === "next") {
      newIndex = Math.min(current + 1, total - 1);
    } else {
      newIndex = Math.max(current - 1, 0);
    }

    setRunIndexMap((prev) => ({
      ...prev,
      [theme]: newIndex,
    }));
  };
  const [view, setView] = useState<"bar" | "line">("line");
  const [themeFilter, setThemeFilter] = useState<
    "all" | "positive" | "negative" | "trending"
  >("all");
  const [themeSearch, setThemeSearch] = useState("");

  const themesData = useMemo(() => sentimentData.themes || [], [sentimentData]);

  // Filter themes based on filter and search
  const filteredThemes = useMemo(() => {
    let filtered = themesData;

    // Filter by sentiment
    if (themeFilter === "positive") {
      filtered = themesData.filter((t: any) => t.sentiment === "positive");
    } else if (themeFilter === "negative") {
      filtered = themesData.filter((t: any) => t.sentiment === "negative");
    } else if (themeFilter === "trending") {
      // For trending, show themes with higher occurrences
      filtered = themesData.filter((t: any) => t.occurrences >= 2); // Lower threshold for now
    }

    // Filter by search
    if (themeSearch) {
      const regex = new RegExp(
        themeSearch.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"),
        "i",
      );
      filtered = filtered.filter((t: any) => regex.test(t.theme));
    }

    return filtered;
  }, [themesData, themeFilter, themeSearch]);

  const toggleTheme = (theme: string) => {
    if (expandedTheme === theme) {
      setExpandedTheme(null);
    } else {
      setExpandedTheme(theme);
    }
  };

  return (
    <BlockStack gap="600">
      {/* Response Details Modal */}
      {selectedThemeForModal && (
        <ExecutionDetailsModal
          open={!!selectedThemeForModal}
          onClose={() => setSelectedThemeForModal(null)}
          details={
            selectedThemeForModal
              ? getThemeDetails(
                  selectedThemeForModal,
                  sentimentData,
                  runIndexMap,
                )
              : null
          }
          brandName={brandName || ""}
        />
      )}

      {/* Filters */}
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

      <InlineStack align="space-between" blockAlign="center">
        <BlockStack gap="050">
          <InlineStack gap="200" blockAlign="center" align="start">
            <Text variant="headingMd" as="h2">
              Sentiment Analysis
            </Text>
            <Tooltip content="Measures the tone of how your brand is being described - whether it's positive, negative, or neutral. It helps you understand overall perception and how your messaging or reputation is landing across different topics and themes.">
              <Icon source={InfoIcon} tone="subdued" />
            </Tooltip>
          </InlineStack>
          <Text variant="bodySm" tone="subdued" as="span">
            How positively AI responses reference {brandName || "your brand"}
          </Text>
        </BlockStack>
        <ViewConfigButton
          label="Chart Config"
          options={[
            { value: "line", label: "Line Chart", icon: LinkIcon },
            { value: "bar", label: "Bar Chart", icon: GlobeIcon },
          ]}
          selectedValue={view}
          onSelect={(value: string) => setView(value as "bar" | "line")}
        />
      </InlineStack>

      <Card padding="0">
        <Grid gap={{ xs: "0", sm: "0", md: "0", lg: "0", xl: "0" }}>
          {/* Left Column: Chart */}
          <Grid.Cell columnSpan={{ xs: 6, sm: 6, md: 6, lg: 6, xl: 6 }}>
            <SentimentChartCard view={view} sentimentData={sentimentData} />
          </Grid.Cell>

          {/* Right Column: Breakdown */}
          <Grid.Cell columnSpan={{ xs: 6, sm: 6, md: 6, lg: 6, xl: 6 }}>
            <SentimentBreakdownCard sentimentData={sentimentData} />
          </Grid.Cell>
        </Grid>
      </Card>

      {/* Themes Section */}
      <BlockStack gap="400">
        <SentimentFilters
          brandName={brandName}
          themeSearch={themeSearch}
          setThemeSearch={setThemeSearch}
          themeFilter={themeFilter}
          setThemeFilter={setThemeFilter}
        />

        {/* Themes Table */}
        <ThemesList
          filteredThemes={filteredThemes}
          expandedTheme={expandedTheme}
          toggleTheme={toggleTheme}
          sentimentData={sentimentData}
          runIndexMap={runIndexMap}
          handleRunNavigation={handleRunNavigation}
          setSelectedThemeForModal={setSelectedThemeForModal}
          brandName={brandName}
        />
      </BlockStack>
    </BlockStack>
  );
}
