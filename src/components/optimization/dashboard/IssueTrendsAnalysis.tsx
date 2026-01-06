import {
  Card,
  Box,
  BlockStack,
  InlineStack,
  Text,
  Tooltip,
  Icon,
  EmptyState,
  Badge,
} from "@shopify/polaris";
import { InfoIcon } from "@shopify/polaris-icons";
import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip as RechartsTooltip,
} from "recharts";
import React from "react";
import { ClientOnly } from "../../ClientOnly";

interface IssueTrendsAnalysisProps {
  displayIssueDistributionOverTime?: any[];
  displayCategoryHeatmap?: Record<string, Record<string, number>>;
}

export const IssueTrendsAnalysis = ({
  displayIssueDistributionOverTime,
  displayCategoryHeatmap,
}: IssueTrendsAnalysisProps) => {
  // Safety checks - ensure arrays and objects
  const distributionData = Array.isArray(displayIssueDistributionOverTime)
    ? displayIssueDistributionOverTime
    : [];
  const heatmapData = displayCategoryHeatmap || {};

  return (
    <BlockStack gap="400">
      <BlockStack gap="050">
        <Text variant="headingMd" as="h2">
          Issue Trends & Analysis
        </Text>
        <Text variant="bodySm" as="p" tone="subdued">
          Historical trends and category breakdown
        </Text>
      </BlockStack>
      <Card padding="0">
        <Box padding="400">
          <InlineStack gap="600" align="start" blockAlign="stretch">
            {/* Left Panel - Issue Distribution Over Time */}
            <div style={{ flex: 1, minWidth: 0 }}>
              <BlockStack gap="400">
                <BlockStack gap="050">
                  <InlineStack gap="200" align="start" blockAlign="center">
                    <Text variant="headingMd" as="h3">
                      Issue Distribution Over Time
                    </Text>
                    <Tooltip content="Track how issues are changing over time. Are they going down or are new ones appearing?">
                      <Icon source={InfoIcon} tone="subdued" />
                    </Tooltip>
                  </InlineStack>
                  <Text variant="bodySm" as="p" tone="subdued">
                    Trend of issues by type.
                  </Text>
                </BlockStack>

                <ClientOnly fallback={<div style={{ height: "300px" }} />}>
                  {() => {
                    const isEmpty =
                      distributionData.length === 0 ||
                      !distributionData.some(
                        (d: { week: string; [key: string]: string | number }) => {
                          const keys = Object.keys(d);
                          return keys.length > 1; // week key always exists
                        },
                      );
                    if (isEmpty) {
                      return (
                        <div
                          style={{
                            height: "300px",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                          }}
                        >
                          <EmptyState
                            heading="No issue history"
                            image="https://cdn.shopify.com/s/files/1/0262/4071/2726/files/emptystate-files.png"
                          >
                            <p>Run a scan to start tracking issues over time.</p>
                          </EmptyState>
                        </div>
                      );
                    }
                    const categories = [
                      "Missing Metadata",
                      "Thin Descriptions",
                      "Semantic Issues",
                      "Image/Alt Text",
                      "Structured Data",
                      "Stale Content",
                    ];
                    const colors = [
                      "#d82c0d",
                      "#ff9800",
                      "#5c6ac4",
                      "#2196f3",
                      "#9c27b0",
                      "#8c9196",
                    ];

                    return (
                      <div style={{ height: "300px" }}>
                        <ResponsiveContainer width="100%" height="100%">
                          <AreaChart
                            data={distributionData}
                            margin={{ top: 10, right: 30, left: 0, bottom: 5 }}
                          >
                            <defs>
                              {categories.map((cat, i) => (
                                <linearGradient
                                  key={cat}
                                  id={`color${i}`}
                                  x1="0"
                                  y1="0"
                                  x2="0"
                                  y2="1"
                                >
                                  <stop
                                    offset="5%"
                                    stopColor={colors[i]}
                                    stopOpacity={0.3}
                                  />
                                  <stop
                                    offset="95%"
                                    stopColor={colors[i]}
                                    stopOpacity={0}
                                  />
                                </linearGradient>
                              ))}
                            </defs>
                            <CartesianGrid
                              strokeDasharray="3 3"
                              vertical={false}
                              stroke="#e1e3e5"
                            />
                            <XAxis
                              dataKey="week"
                              tick={{ fontSize: 11, fill: "#6d7175" }}
                              tickFormatter={(value) => {
                                // Parse YYYY-MM-DD string as UTC date to avoid timezone shifts
                                const [year, month, day] = value
                                  .split("-")
                                  .map(Number);
                                const date = new Date(
                                  Date.UTC(year, month - 1, day),
                                );
                                return date.toLocaleDateString("en-US", {
                                  month: "short",
                                  day: "numeric",
                                });
                              }}
                              axisLine={false}
                              tickLine={false}
                            />
                            <YAxis
                              tick={{ fontSize: 11, fill: "#6d7175" }}
                              axisLine={false}
                              tickLine={false}
                            />
                            <RechartsTooltip
                              content={({ active, payload }) => {
                                if (active && payload && payload.length) {
                                  const data = payload[0].payload;
                                  // Calculate cumulative values for stacked display
                                  let cumulative = 0;
                                  return (
                                    <div
                                      style={{
                                        backgroundColor: "#fff",
                                        padding: "12px",
                                        border: "1px solid #e1e3e5",
                                        borderRadius: "8px",
                                        boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                                      }}
                                    >
                                      <div
                                        style={{
                                          fontWeight: 600,
                                          marginBottom: "8px",
                                        }}
                                      >
                                        {(() => {
                                          // Parse YYYY-MM-DD string as UTC date to avoid timezone shifts
                                          const [year, month, day] = data.week
                                            .split("-")
                                            .map(Number);
                                          const date = new Date(
                                            Date.UTC(year, month - 1, day),
                                          );
                                          return date.toLocaleDateString(
                                            "en-US",
                                            {
                                              month: "long",
                                              day: "numeric",
                                            },
                                          );
                                        })()}
                                      </div>
                                      {categories.map((cat, i) => {
                                        const value = data[cat] || 0;
                                        cumulative += value;
                                        return (
                                          <div
                                            key={cat}
                                            style={{
                                              display: "flex",
                                              alignItems: "center",
                                              gap: "8px",
                                              marginBottom: "4px",
                                            }}
                                          >
                                            <div
                                              style={{
                                                width: "8px",
                                                height: "8px",
                                                borderRadius: "50%",
                                                backgroundColor: colors[i],
                                              }}
                                            />
                                            <span>
                                              {cat}: {value}
                                            </span>
                                          </div>
                                        );
                                      })}
                                    </div>
                                  );
                                }
                                return null;
                              }}
                            />
                            {categories.map((cat, i) => (
                              <Area
                                key={cat}
                                type="monotone"
                                dataKey={cat}
                                stroke={colors[i]}
                                fill={`url(#color${i})`}
                                strokeWidth={2}
                                connectNulls={false}
                              />
                            ))}
                          </AreaChart>
                        </ResponsiveContainer>
                      </div>
                    );
                  }}
                </ClientOnly>
              </BlockStack>
            </div>

            {/* Right Panel - Category Impact Heatmap */}
            <div
              style={{
                flex: 1,
                minWidth: 0,
                borderLeft: "1px solid #e1e3e5",
                paddingLeft: "24px",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <BlockStack gap="400">
                <BlockStack gap="050">
                  <InlineStack gap="200" align="start" blockAlign="center">
                    <Text variant="headingMd" as="h3">
                      Category Impact Heatmap
                    </Text>
                    <Tooltip content="Identify which product categories have the most issues. Helps prioritize where to fix first.">
                      <Icon source={InfoIcon} tone="subdued" />
                    </Tooltip>
                  </InlineStack>
                  <Text variant="bodySm" as="p" tone="subdued">
                    Issues by product category.
                  </Text>
                </BlockStack>

                <ClientOnly fallback={<div style={{ height: "300px" }} />}>
                  {() => {
                    const issueCategories = [
                      "Missing Metadata",
                      "Thin Descriptions",
                      "Semantic Issues",
                      "Image/Alt Text",
                      "Structured Data",
                      "Stale Content",
                    ];
                    const productCats = Object.keys(heatmapData).slice(0, 8);

                    const getSeverityColor = (count: number) => {
                      if (count === 0) return "#e1e3e5";
                      if (count >= 10) return "#d82c0d"; // Critical
                      if (count >= 5) return "#ff9800"; // Moderate
                      if (count >= 1) return "#ffc658"; // Minor
                      return "#e1e3e5";
                    };

                    return (
                      <div
                        style={{
                          overflowX: "auto",
                          height: "300px",
                          overflowY: "auto",
                        }}
                      >
                        <table
                          style={{
                            width: "100%",
                            borderCollapse: "collapse",
                            fontSize: "12px",
                          }}
                        >
                          <thead>
                            <tr>
                              <th
                                style={{
                                  textAlign: "left",
                                  padding: "8px",
                                  fontWeight: 600,
                                  color: "#6d7175",
                                  position: "sticky",
                                  left: 0,
                                  background: "#fff",
                                  zIndex: 1,
                                }}
                              >
                                Category
                              </th>
                              {issueCategories.map((cat) => (
                                <th
                                  key={cat}
                                  style={{
                                    textAlign: "center",
                                    padding: "8px",
                                    fontWeight: 600,
                                    color: "#6d7175",
                                    minWidth: "100px",
                                  }}
                                >
                                  {cat.split(" ")[0]}
                                </th>
                              ))}
                            </tr>
                          </thead>
                          <tbody>
                            {productCats.map((productCat, idx) => (
                              <tr
                                key={productCat}
                                style={{ borderBottom: "1px solid #e1e3e5" }}
                              >
                                <td
                                  style={{
                                    padding: "8px",
                                    fontWeight: 500,
                                    position: "sticky",
                                    left: 0,
                                    background: "#fff",
                                    zIndex: 1,
                                  }}
                                >
                                  {productCat}
                                </td>
                                {issueCategories.map((issueCat) => {
                                  const count =
                                    heatmapData[productCat]?.[issueCat] || 0;
                                  const bgColor = getSeverityColor(count);
                                  return (
                                    <td
                                      key={issueCat}
                                      style={{
                                        padding: "8px",
                                        textAlign: "center",
                                        backgroundColor: bgColor,
                                        borderRadius: "4px",
                                      }}
                                    >
                                      {count > 0 ? (
                                        <Badge
                                          tone={
                                            count >= 10
                                              ? "critical"
                                              : count >= 5
                                                ? "warning"
                                                : "info"
                                          }
                                          size="small"
                                        >
                                          {String(count)}
                                        </Badge>
                                      ) : (
                                        <Text
                                          variant="bodyXs"
                                          tone="subdued"
                                          as="span"
                                        >
                                          —
                                        </Text>
                                      )}
                                    </td>
                                  );
                                })}
                              </tr>
                            ))}
                          </tbody>
                        </table>
                        {productCats.length === 0 && (
                          <div
                            style={{ textAlign: "center", padding: "40px 0" }}
                          >
                            <Text variant="bodyMd" tone="subdued" as="p">
                              No category data available
                            </Text>
                          </div>
                        )}
                      </div>
                    );
                  }}
                </ClientOnly>
                <Text variant="bodySm" tone="subdued" as="p">
                  Issue counts by product category and issue type
                </Text>
              </BlockStack>
            </div>
          </InlineStack>
        </Box>
      </Card>
    </BlockStack>
  );
};
