import { Card, BlockStack, Text, Box, Icon } from "@shopify/polaris";
import { ChatIcon } from "@shopify/polaris-icons";
import { useState, useMemo, useCallback } from "react";
import { useSearchParams } from "react-router-dom";
import type { ExternalMention } from "./mentions/types";
import { RedditIcon } from "./mentions/PlatformIcons";
import { MentionsChart } from "./mentions/MentionsChart";
import { MentionsList } from "./mentions/MentionsList";

interface MonitorMentionsProps {
  mentions: ExternalMention[];
  trendData: any[];
  topics?: { label: string; value: string }[];
  products?: { label: string; value: string }[];
  productGroups?: { id: string; name: string; productIds: string }[];
  pagination?: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
  };
}

export function MonitorMentions({
  mentions,
  trendData,
  topics = [],
  products = [],
  productGroups = [],
  pagination,
}: MonitorMentionsProps) {
  const [searchParams, setSearchParams] = useSearchParams();
  const [selectedTab, setSelectedTab] = useState(0);
  const [timeRange, setTimeRange] = useState(
    searchParams.get("timeRange") || "30",
  );
  const [datePickerOpen, setDatePickerOpen] = useState(false);
  const [selectedDates, setSelectedDates] = useState<{
    start: Date;
    end: Date;
  }>({
    start: new Date(new Date().setDate(new Date().getDate() - 30)),
    end: new Date(),
  });
  const [dateState, setDateState] = useState({
    month: new Date().getMonth(),
    year: new Date().getFullYear(),
  });

  // Additional Filters
  const [sentimentFilter, setSentimentFilter] = useState("all");
  const [typeFilter, setTypeFilter] = useState("all");
  const [productFilter, setProductFilter] = useState("all");
  const [productGroupFilter, setProductGroupFilter] = useState("all");

  // Define tabs with icon content
  const tabs = [
    {
      id: "all",
      content: (
        <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
          <span>All Platforms</span>
        </div>
      ),
    },
    {
      id: "reddit",
      content: (
        <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
          <div style={{ width: 16, height: 16 }}>
            <RedditIcon />
          </div>
          <span>Reddit</span>
        </div>
      ),
    },
  ];

  const platformFilter = tabs[selectedTab].id;

  // Handle URL updates for filters that need data refetch
  const handleTimeRangeChange = (value: string) => {
    setTimeRange(value);
    if (value === "custom") {
      setDatePickerOpen(true);
    } else {
      const params = new URLSearchParams(searchParams);
      params.set("timeRange", value);
      params.delete("startDate");
      params.delete("endDate");
      setSearchParams(params, { preventScrollReset: true });
    }
  };

  const handleDateRangeApply = () => {
    const params = new URLSearchParams(searchParams);
    params.set("startDate", selectedDates.start.toISOString());
    params.set("endDate", selectedDates.end.toISOString());
    params.delete("timeRange");
    setSearchParams(params, { preventScrollReset: true });
    setDatePickerOpen(false);
    setTimeRange("custom");
  };

  const handleTabChange = useCallback(
    (selectedTabIndex: number) => setSelectedTab(selectedTabIndex),
    [],
  );

  // Client-side filtering for mentions list
  const filteredMentions = useMemo(() => {
    let result = mentions;

    // Platform Filter
    if (platformFilter !== "all") {
      result = result.filter((m) =>
        m.platform.toLowerCase().includes(platformFilter.toLowerCase()),
      );
    }

    // Sentiment Filter
    if (sentimentFilter !== "all") {
      result = result.filter((m) => {
        const s = m.sentiment ?? 50;
        if (sentimentFilter === "positive") return s > 70;
        if (sentimentFilter === "negative") return s < 40;
        return s >= 40 && s <= 70; // Neutral
      });
    }

    // Type Filter (Brand Specific vs General Market)
    if (typeFilter !== "all") {
      result = result.filter((m) => {
        const hasMention = (m.mentionCount || 0) > 0;
        if (typeFilter === "brand") return hasMention;
        if (typeFilter === "market") return !hasMention;
        return true;
      });
    }

    // Product Filter (Simple Keyword Match)
    if (productFilter !== "all") {
      const product = products.find((p) => p.value === productFilter);
      if (product) {
        const keyword = product.label.toLowerCase();
        result = result.filter(
          (m) =>
            (m.title && m.title.toLowerCase().includes(keyword)) ||
            (m.summary && m.summary.toLowerCase().includes(keyword)),
        );
      }
    }

    // Product Group Filter
    if (productGroupFilter !== "all") {
      const group = productGroups.find((g) => g.id === productGroupFilter);
      if (group) {
        try {
          // productIds is stored as a string (JSON array) or possibly direct array depending on how prisma returns it?
          // In the schema it is `String`.
          const groupProductIds =
            typeof group.productIds === "string"
              ? JSON.parse(group.productIds)
              : group.productIds;

          if (Array.isArray(groupProductIds)) {
            const groupProductNames = products
              .filter((p) => groupProductIds.includes(p.value))
              .map((p) => p.label.toLowerCase());

            if (groupProductNames.length > 0) {
              result = result.filter((m) => {
                const title = m.title?.toLowerCase() || "";
                const summary = m.summary?.toLowerCase() || "";
                return groupProductNames.some(
                  (name) => title.includes(name) || summary.includes(name),
                );
              });
            }
          }
        } catch (e) {
          // console.error("Failed to parse product group", e);
        }
      }
    }

    return result;
  }, [
    mentions,
    platformFilter,
    sentimentFilter,
    typeFilter,
    productFilter,
    productGroupFilter,
    products,
    productGroups,
  ]);

  // Chart Data Preparation
  // Ensure data is sorted by date
  const chartData = useMemo(() => {
    // Check if we have any real data (non-zero values)
    const hasRealData =
      trendData &&
      trendData.some(
        (day) =>
          (day.Reddit || 0) +
            (day.Twitter || 0) +
            (day.Quora || 0) +
            (day.YouTube || 0) +
            (day.Other || 0) >
          0,
      );

    if (hasRealData) {
      return [...(trendData || [])]
        .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())
        .map((item) => ({
          ...item,
          date: new Date(item.date).toLocaleDateString(undefined, {
            month: "short",
            day: "numeric",
          }),
        }));
    }

    // Return empty array to trigger empty state instead of dummy data
    return [];
  }, [trendData]);

  // Helper for Pagination
  const handlePageChange = (newPage: number) => {
    const params = new URLSearchParams(searchParams);
    params.set("page", newPage.toString());
    setSearchParams(params, { preventScrollReset: true });
  };

  if (!mentions || mentions.length === 0) {
    return (
      <Card>
        <Box padding="800">
          <BlockStack gap="500" align="center" inlineAlign="center">
            <div
              style={{
                background: "var(--p-color-bg-surface-secondary)",
                padding: "24px",
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <div
                style={{
                  width: "32px",
                  height: "32px",
                  color: "var(--p-color-icon-secondary)",
                }}
              >
                <Icon source={ChatIcon} />
              </div>
            </div>
            <BlockStack gap="200" align="center" inlineAlign="center">
              <Text as="h2" variant="headingMd">
                No social mentions detected yet
              </Text>
              <div style={{ maxWidth: "400px", textAlign: "center" }}>
                <Text as="p" tone="subdued">
                  We are monitoring Reddit, Quora, and forums for your brand.
                  New discussions will appear here automatically.
                </Text>
              </div>
            </BlockStack>
          </BlockStack>
        </Box>
      </Card>
    );
  }

  return (
    <BlockStack gap="600">
      {/* Chart Section */}
      <MentionsChart
        chartData={chartData}
        timeRange={timeRange}
        datePickerOpen={datePickerOpen}
        setDatePickerOpen={setDatePickerOpen}
        selectedDates={selectedDates}
        setSelectedDates={setSelectedDates}
        dateState={dateState}
        setDateState={setDateState}
        handleTimeRangeChange={handleTimeRangeChange}
        handleDateRangeApply={handleDateRangeApply}
      />

      {/* List Section with Tabs */}
      <MentionsList
        filteredMentions={filteredMentions}
        pagination={pagination}
        handlePageChange={handlePageChange}
        tabs={tabs}
        selectedTab={selectedTab}
        handleTabChange={handleTabChange}
        sentimentFilter={sentimentFilter}
        setSentimentFilter={setSentimentFilter}
        typeFilter={typeFilter}
        setTypeFilter={setTypeFilter}
        productFilter={productFilter}
        setProductFilter={setProductFilter}
        productGroupFilter={productGroupFilter}
        setProductGroupFilter={setProductGroupFilter}
        products={products}
        productGroups={productGroups}
      />
    </BlockStack>
  );
}
