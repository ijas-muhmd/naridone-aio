import {
  Layout,
  Card,
  Box,
  InlineStack,
  BlockStack,
  Text,
  Button,
  EmptyState,
  Icon,
} from "@shopify/polaris";
import { ArrowUpIcon, ArrowDownIcon } from "@shopify/polaris-icons";
import {
  ResponsiveContainer,
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";
import { ClientOnly } from "../../ClientOnly";
import React from "react";

interface VisibilityTrendsSectionProps {
  displayChartData: any[];
  chartBrands: string[];
  brandColors: Record<string, string>;
  otherColors: string[];
  brandName: string;
  onRefresh: () => void;
  onNavigateToCompetitors?: () => void;
  competitorsOnly: any[];
  competitorsSortedByVisibility: any[];
}

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    const sortedPayload = [...payload].sort(
      (a: any, b: any) => b.value - a.value,
    );
    return (
      <div
        style={{
          backgroundColor: "#fff",
          padding: "12px",
          border: "1px solid #e1e3e5",
          borderRadius: "8px",
          boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
          minWidth: "280px",
          maxWidth: "400px",
          fontSize: "12px",
          fontFamily:
            '-apple-system, BlinkMacSystemFont, "San Francisco", "Segoe UI", Roboto, "Helvetica Neue", sans-serif',
        }}
      >
        <div style={{ marginBottom: "8px", fontWeight: 600, color: "#202223" }}>
          {label}
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
          {sortedPayload.map((entry: any, index: number) => {
            const brandDomain =
              entry.name.toLowerCase().replace(/[^a-z0-9]/g, "") + ".com";
            return (
              <div
                key={index}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  gap: "12px",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                    flex: 1,
                    minWidth: 0,
                  }}
                >
                  <div
                    style={{
                      width: "6px",
                      height: "6px",
                      borderRadius: "2px",
                      backgroundColor: entry.color,
                      flexShrink: 0,
                    }}
                  ></div>
                  <img
                    src={`https://www.google.com/s2/favicons?domain=${brandDomain}&sz=16`}
                    alt=""
                    style={{
                      width: "14px",
                      height: "14px",
                      borderRadius: "2px",
                      opacity: 0.8,
                      flexShrink: 0,
                    }}
                    onError={(e) => {
                      (e.target as HTMLImageElement).style.display = "none";
                    }}
                  />
                  <span
                    style={{
                      color: "#202223",
                      whiteSpace: "nowrap",
                      overflow: "visible",
                      textOverflow: "clip",
                      wordBreak: "break-word",
                      maxWidth: "100%",
                    }}
                  >
                    {entry.name}
                  </span>
                </div>
                <span
                  style={{ fontWeight: 600, color: "#202223", flexShrink: 0 }}
                >
                  {entry.value?.toFixed(1)}%
                </span>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
  return null;
};

export const VisibilityTrendsSection = ({
  displayChartData,
  chartBrands,
  brandColors,
  otherColors,
  brandName,
  onRefresh,
  onNavigateToCompetitors,
  competitorsOnly,
  competitorsSortedByVisibility,
}: VisibilityTrendsSectionProps) => {
  return (
    <Layout>
      <Layout.Section variant="oneHalf">
        <Card padding="0">
          <div
            style={{
              background: "#f9fafb",
              borderBottom: "1px solid #e1e3e5",
              borderTopLeftRadius: "var(--p-border-radius-300, 8px)",
              borderTopRightRadius: "var(--p-border-radius-300, 8px)",
            }}
          >
            <Box padding="300">
              <InlineStack align="space-between" blockAlign="center">
                <BlockStack gap="050">
                  <Text variant="headingMd" as="h3">
                    Visibility
                  </Text>
                  <Text variant="bodySm" as="p" tone="subdued">
                    Share of daily runs where your brand appears.
                  </Text>
                </BlockStack>
                <Button variant="plain" size="slim" onClick={onRefresh}>
                  Refresh
                </Button>
              </InlineStack>
            </Box>
          </div>
          <div
            style={{
              height: "352px",
              width: "100%",
              padding: "16px",
              boxSizing: "border-box",
            }}
          >
            {displayChartData.length === 0 ? (
              <div
                style={{
                  height: "100%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <EmptyState
                  heading="No visibility data yet"
                  image="https://cdn.shopify.com/s/files/1/0262/4071/2726/files/emptystate-files.png"
                >
                  <p>
                    Run a prompt to start populating daily visibility trends.
                  </p>
                </EmptyState>
              </div>
            ) : (
              <ClientOnly
                fallback={<div style={{ width: "100%", height: "100%" }}></div>}
              >
                {() => (
                  <div style={{ width: "100%", height: "100%" }}>
                    <ResponsiveContainer
                      width="100%"
                      height="100%"
                      minHeight={320}
                      minWidth={0}
                    >
                      <LineChart
                        data={displayChartData}
                        margin={{ top: 10, right: 10, left: -20, bottom: 5 }}
                      >
                        <CartesianGrid
                          strokeDasharray="3 3"
                          vertical={false}
                          stroke="#e4e5e7"
                        />
                        <XAxis
                          dataKey="label"
                          axisLine={false}
                          tickLine={false}
                          tick={{ fill: "#8c9196", fontSize: 12 }}
                          dy={10}
                        />
                        <YAxis
                          axisLine={false}
                          tickLine={false}
                          tick={{ fill: "#8c9196", fontSize: 12 }}
                          domain={[0, 100]}
                          tickFormatter={(value) => `${value}%`}
                        />
                        <Tooltip content={<CustomTooltip />} />
                        {chartBrands.map((brand, index) => {
                          const color =
                            brandColors[brand] ||
                            otherColors[index % otherColors.length];
                          const isYou = brand === brandName;
                          return (
                            <Line
                              key={brand}
                              type="monotone"
                              dataKey={brand}
                              stroke={color}
                              strokeWidth={isYou ? 3 : 2}
                              dot={false}
                              name={brand}
                              strokeOpacity={isYou ? 1 : 0.7}
                            />
                          );
                        })}
                      </LineChart>
                    </ResponsiveContainer>
                  </div>
                )}
              </ClientOnly>
            )}
          </div>
        </Card>
      </Layout.Section>

      <Layout.Section variant="oneHalf">
        <Card padding="0">
          <div
            style={{
              background: "#f9fafb",
              borderBottom: "1px solid #e1e3e5",
              borderTopLeftRadius: "var(--p-border-radius-300, 8px)",
              borderTopRightRadius: "var(--p-border-radius-300, 8px)",
            }}
          >
            <Box padding="300">
              <InlineStack align="space-between" blockAlign="center">
                <BlockStack gap="050">
                  <Text variant="headingMd" as="h3">
                    Brands
                  </Text>
                  <Text variant="bodySm" as="p" tone="subdued">
                    Brands with highest visibility
                  </Text>
                </BlockStack>
                <Button
                  variant="plain"
                  size="slim"
                  onClick={() => onNavigateToCompetitors?.()}
                >
                  Show All
                </Button>
              </InlineStack>
            </Box>
          </div>
          <div
            style={{
              height: "352px",
              overflowY: "auto",
              display: "flex",
              flexDirection: "column",
            }}
          >
            {(() => {
              if (competitorsOnly.length === 0) {
                return (
                  <div
                    style={{
                      height: "100%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <EmptyState
                      heading="No competitors tracked"
                      image="https://cdn.shopify.com/s/files/1/0262/4071/2726/files/emptystate-files.png"
                    >
                      <p>Run prompts to capture competitor mentions.</p>
                    </EmptyState>
                  </div>
                );
              }

              return (
                <div style={{ padding: "8px 12px" }}>
                  <table style={{ width: "100%", borderCollapse: "collapse" }}>
                    <thead>
                      <tr
                        style={{
                          borderBottom: "1px solid var(--p-color-border)",
                        }}
                      >
                        <th
                          style={{
                            textAlign: "left",
                            padding: "8px",
                            fontSize: "12px",
                            color: "var(--p-color-text-subdued)",
                            fontWeight: 500,
                          }}
                        >
                          #
                        </th>
                        <th
                          style={{
                            textAlign: "left",
                            padding: "8px",
                            fontSize: "12px",
                            color: "var(--p-color-text-subdued)",
                            fontWeight: 500,
                          }}
                        >
                          Brand
                        </th>
                        <th
                          style={{
                            textAlign: "left",
                            padding: "8px",
                            fontSize: "12px",
                            color: "var(--p-color-text-subdued)",
                            fontWeight: 500,
                          }}
                        >
                          Visibility
                        </th>
                        <th
                          style={{
                            textAlign: "left",
                            padding: "8px",
                            fontSize: "12px",
                            color: "var(--p-color-text-subdued)",
                            fontWeight: 500,
                          }}
                        >
                          Sentiment
                        </th>
                        <th
                          style={{
                            textAlign: "left",
                            padding: "8px",
                            fontSize: "12px",
                            color: "var(--p-color-text-subdued)",
                            fontWeight: 500,
                          }}
                        >
                          Position
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {competitorsSortedByVisibility
                        .slice(0, 10)
                        .map(
                          (
                            competitor: any,
                            index: number,
                            displayedCompetitors: any[],
                          ) => {
                            if (!competitor) return null;
                            const brandDomain =
                              competitor.name
                                .toLowerCase()
                                .replace(/[^a-z0-9]/g, "") + ".com";

                            // Real trends from backend
                            const sentimentTrend =
                              competitor.stats?.sentimentTrend || 0;
                            const positionTrend =
                              competitor.stats?.positionTrend || 0;

                            const sentimentChange = {
                              isPositive: sentimentTrend >= 0,
                              value: Math.abs(sentimentTrend),
                            };
                            const positionChange = {
                              isPositive: positionTrend >= 0,
                              value: Math.abs(positionTrend),
                            };

                            return (
                              <tr
                                key={competitor.id}
                                style={{
                                  backgroundColor: "transparent",
                                  borderBottom:
                                    index < displayedCompetitors.length - 1
                                      ? "1px solid var(--p-color-border-subdued)"
                                      : "none",
                                }}
                              >
                                <td
                                  style={{
                                    padding: "8px",
                                    fontSize: "13px",
                                    color: "var(--p-color-text-subdued)",
                                  }}
                                >
                                  {index + 1}
                                </td>
                                <td style={{ padding: "8px" }}>
                                  <div
                                    style={{
                                      display: "flex",
                                      alignItems: "center",
                                      gap: "8px",
                                    }}
                                  >
                                    <img
                                      src={`https://www.google.com/s2/favicons?domain=${brandDomain}&sz=32`}
                                      alt={competitor.name}
                                      style={{
                                        width: "20px",
                                        height: "20px",
                                        borderRadius: "4px",
                                      }}
                                    />
                                    <span
                                      style={{
                                        fontSize: "13px",
                                        fontWeight: 600,
                                      }}
                                    >
                                      {competitor.name}
                                    </span>
                                  </div>
                                </td>
                                <td
                                  style={{
                                    padding: "8px",
                                    fontSize: "13px",
                                    fontWeight: 600,
                                  }}
                                >
                                  {competitor.stats?.visibility || 0}%
                                </td>
                                <td style={{ padding: "8px" }}>
                                  <ClientOnly
                                    fallback={
                                      <div
                                        style={{
                                          display: "inline-flex",
                                          alignItems: "center",
                                          gap: "4px",
                                          padding: "2px 6px",
                                          borderRadius: "12px",
                                          backgroundColor: "transparent",
                                          color: "var(--p-color-text-subdued)",
                                          fontSize: "11px",
                                          fontWeight: 600,
                                          whiteSpace: "nowrap",
                                        }}
                                      >
                                        <span>
                                          {competitor.stats?.sentiment || 0}%
                                        </span>
                                      </div>
                                    }
                                  >
                                    {() => (
                                      <div
                                        style={{
                                          display: "inline-flex",
                                          alignItems: "center",
                                          gap: "4px",
                                          padding: "2px 6px",
                                          borderRadius: "12px",
                                          backgroundColor:
                                            sentimentChange.isPositive
                                              ? "var(--p-color-bg-surface-success-subdued)"
                                              : "var(--p-color-bg-surface-critical-subdued)",
                                          color: sentimentChange.isPositive
                                            ? "var(--p-color-text-success)"
                                            : "var(--p-color-text-critical)",
                                          fontSize: "11px",
                                          fontWeight: 600,
                                          whiteSpace: "nowrap",
                                        }}
                                      >
                                        {sentimentChange.value > 0 && (
                                          <Icon
                                            source={
                                              sentimentChange.isPositive
                                                ? ArrowUpIcon
                                                : ArrowDownIcon
                                            }
                                            tone={
                                              sentimentChange.isPositive
                                                ? "success"
                                                : "critical"
                                            }
                                          />
                                        )}
                                        {sentimentChange.value > 0 && (
                                          <span>{sentimentChange.value}%</span>
                                        )}
                                        {sentimentChange.value > 0 && (
                                          <span style={{ opacity: 0.3 }}>
                                            |
                                          </span>
                                        )}
                                        <span>
                                          {competitor.stats?.sentiment || 0}%
                                        </span>
                                      </div>
                                    )}
                                  </ClientOnly>
                                </td>
                                <td style={{ padding: "8px" }}>
                                  <ClientOnly
                                    fallback={
                                      <div
                                        style={{
                                          display: "inline-flex",
                                          alignItems: "center",
                                          gap: "4px",
                                          padding: "2px 6px",
                                          borderRadius: "12px",
                                          backgroundColor: "transparent",
                                          color: "var(--p-color-text-subdued)",
                                          fontSize: "11px",
                                          fontWeight: 600,
                                          whiteSpace: "nowrap",
                                        }}
                                      >
                                        <span>
                                          {competitor.stats?.position
                                            ? `#${competitor.stats.position}`
                                            : "—"}
                                        </span>
                                      </div>
                                    }
                                  >
                                    {() => (
                                      <div
                                        style={{
                                          display: "inline-flex",
                                          alignItems: "center",
                                          gap: "4px",
                                          padding: "2px 6px",
                                          borderRadius: "12px",
                                          backgroundColor:
                                            positionChange.isPositive
                                              ? "var(--p-color-bg-surface-success-subdued)"
                                              : "var(--p-color-bg-surface-critical-subdued)",
                                          color: positionChange.isPositive
                                            ? "var(--p-color-text-success)"
                                            : "var(--p-color-text-critical)",
                                          fontSize: "11px",
                                          fontWeight: 600,
                                          whiteSpace: "nowrap",
                                        }}
                                      >
                                        {positionChange.value > 0 && (
                                          <Icon
                                            source={
                                              positionChange.isPositive
                                                ? ArrowUpIcon
                                                : ArrowDownIcon
                                            }
                                            tone={
                                              positionChange.isPositive
                                                ? "success"
                                                : "critical"
                                            }
                                          />
                                        )}
                                        {positionChange.value > 0 && (
                                          <span>{positionChange.value}</span>
                                        )}
                                        {positionChange.value > 0 && (
                                          <span style={{ opacity: 0.3 }}>
                                            |
                                          </span>
                                        )}
                                        <span>
                                          {competitor.stats?.position
                                            ? `#${competitor.stats.position}`
                                            : "—"}
                                        </span>
                                      </div>
                                    )}
                                  </ClientOnly>
                                </td>
                              </tr>
                            );
                          },
                        )}
                    </tbody>
                  </table>
                </div>
              );
            })()}
          </div>
        </Card>
      </Layout.Section>
    </Layout>
  );
};
