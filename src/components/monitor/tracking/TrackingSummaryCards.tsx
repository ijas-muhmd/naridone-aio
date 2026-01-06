import {
  Box,
  Grid,
  Card,
  BlockStack,
  Text,
  InlineStack,
  ProgressBar,
  Badge,
} from "@shopify/polaris";
import {
  ResponsiveContainer,
  AreaChart,
  Area,
  Tooltip as RechartsTooltip,
  BarChart,
  Bar,
  Cell,
} from "recharts";
import React from "react";

interface TrackingSummaryCardsProps {
  prompts: any[];
  stats: any;
  planLimits: any;
  sentimentTrend: any[];
  locationStats: any[];
}

export const TrackingSummaryCards = ({
  prompts,
  stats,
  planLimits,
  sentimentTrend,
  locationStats,
}: TrackingSummaryCardsProps) => {
  return (
    <Box padding="0">
      <Grid>
        <Grid.Cell columnSpan={{ xs: 6, sm: 6, md: 4, lg: 4, xl: 4 }}>
          <div style={{ height: "100%" }}>
            <Card>
              <BlockStack gap="200">
                <Text as="h3" variant="headingSm" tone="subdued">
                  Total Prompts
                </Text>
                <Text as="p" variant="headingXl" fontWeight="bold">
                  {String(stats?.totalPrompts || prompts.length)}
                </Text>
                {planLimits && planLimits.prompts > 0 && (
                  <Box paddingBlockStart="200">
                    <BlockStack gap="100">
                      <InlineStack align="space-between">
                        <Text as="span" variant="bodyXs" tone="subdued">
                          Plan Usage
                        </Text>
                        <Text
                          as="span"
                          variant="bodyXs"
                          tone={
                            (stats?.totalPrompts || prompts.length) >
                            planLimits.prompts
                              ? "critical"
                              : "subdued"
                          }
                        >
                          {stats?.totalPrompts || prompts.length} /{" "}
                          {planLimits.prompts}
                        </Text>
                      </InlineStack>
                      <ProgressBar
                        progress={Math.min(
                          100,
                          ((stats?.totalPrompts || prompts.length) /
                            planLimits.prompts) *
                            100,
                        )}
                        tone={
                          (stats?.totalPrompts || prompts.length) >
                          planLimits.prompts
                            ? "critical"
                            : undefined
                        }
                        size="small"
                      />
                    </BlockStack>
                  </Box>
                )}
              </BlockStack>
            </Card>
          </div>
        </Grid.Cell>
        <Grid.Cell columnSpan={{ xs: 6, sm: 6, md: 4, lg: 4, xl: 4 }}>
          <div style={{ height: "100%" }}>
            <Card>
              <BlockStack gap="200">
                <Text as="h3" variant="headingSm" tone="subdued">
                  Avg. Sentiment
                </Text>
                <InlineStack gap="200" blockAlign="center">
                  <Text as="p" variant="headingXl" fontWeight="bold">
                    {String(stats?.avgSentiment || 0)}%
                  </Text>
                  <Badge
                    tone={
                      (stats?.avgSentiment || 0) > 75 ? "success" : "attention"
                    }
                  >
                    {(stats?.avgSentiment || 0) > 75
                      ? "Healthy"
                      : "Needs Attention"}
                  </Badge>
                </InlineStack>
                <div style={{ height: "60px", marginTop: "8px" }}>
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={sentimentTrend || []}>
                      <defs>
                        <linearGradient
                          id="colorSentiment"
                          x1="0"
                          y1="0"
                          x2="0"
                          y2="1"
                        >
                          <stop
                            offset="5%"
                            stopColor="#30c85e"
                            stopOpacity={0.3}
                          />
                          <stop
                            offset="95%"
                            stopColor="#30c85e"
                            stopOpacity={0}
                          />
                        </linearGradient>
                      </defs>
                      <RechartsTooltip
                        contentStyle={{
                          borderRadius: "8px",
                          border: "none",
                          boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
                          fontSize: "12px",
                        }}
                        formatter={(value: number) => [`${value}%`, "Sentiment"]}
                        labelStyle={{ color: "#6d7175", marginBottom: "4px" }}
                      />
                      <Area
                        type="monotone"
                        dataKey="value"
                        stroke="#30c85e"
                        strokeWidth={2}
                        fillOpacity={1}
                        fill="url(#colorSentiment)"
                        isAnimationActive={false}
                      />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
              </BlockStack>
            </Card>
          </div>
        </Grid.Cell>
        <Grid.Cell columnSpan={{ xs: 6, sm: 6, md: 4, lg: 4, xl: 4 }}>
          <div style={{ height: "100%" }}>
            <Card>
              <BlockStack gap="200">
                <Text as="h3" variant="headingSm" tone="subdued">
                  Top Locations
                </Text>
                <InlineStack gap="200" blockAlign="center">
                  <Text as="p" variant="headingXl" fontWeight="bold">
                    {String(locationStats?.length || 0)}
                  </Text>
                  <Text as="span" variant="bodySm" tone="subdued">
                    Active Markets
                  </Text>
                </InlineStack>
                <div style={{ height: "60px", marginTop: "8px" }}>
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                      data={locationStats ? locationStats.slice(0, 5) : []}
                    >
                      <RechartsTooltip
                        cursor={{ fill: "transparent" }}
                        contentStyle={{
                          borderRadius: "8px",
                          border: "none",
                          boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
                          fontSize: "12px",
                        }}
                        formatter={(value: number) => [value, "Prompts"]}
                        labelFormatter={(label) => label}
                      />
                      <Bar dataKey="count" radius={[4, 4, 0, 0]} barSize={20}>
                        {(locationStats ? locationStats.slice(0, 5) : []).map(
                          (entry, index) => (
                            <Cell
                              key={`cell-${index}`}
                              fill={index === 0 ? "#008060" : "#aee9d1"}
                            />
                          ),
                        )}
                      </Bar>
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </BlockStack>
            </Card>
          </div>
        </Grid.Cell>
      </Grid>
    </Box>
  );
};
