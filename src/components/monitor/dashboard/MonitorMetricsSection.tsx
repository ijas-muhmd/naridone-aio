import {
  Grid,
  Card,
  BlockStack,
  InlineStack,
  Text,
  Tooltip,
  Icon,
  Badge,
} from "@shopify/polaris";
import { InfoIcon } from "@shopify/polaris-icons";
import { ClientOnly } from "../../ClientOnly";
import {
  AreaChart,
  Area,
  ResponsiveContainer,
} from "recharts";
import { ScoreGauge, SentimentScoreGauge } from "../../dashboard/ScoreGauge";
import React from "react";

interface MonitorMetricsSectionProps {
  displayStats: any;
  marketAvgVisibility: number;
  marketAvgSentiment: number;
  displayDashboardCharts: any[];
}

export const MonitorMetricsSection = ({
  displayStats,
  marketAvgVisibility,
  marketAvgSentiment,
  displayDashboardCharts,
}: MonitorMetricsSectionProps) => {
  return (
    <Grid>
      {/* VISIBILITY SCORE */}
      <Grid.Cell columnSpan={{ xs: 6, sm: 6, md: 4, lg: 4, xl: 4 }}>
        <Card padding="400">
          <BlockStack gap="400">
            <InlineStack gap="100" align="center" blockAlign="center">
              <Text
                as="h3"
                variant="headingSm"
                tone="subdued"
                alignment="center"
              >
                Visibility Score
              </Text>
              <Tooltip content="The percentage of times your brand appears in the top 5 AI search results for your tracked prompts.">
                <Icon source={InfoIcon} tone="subdued" />
              </Tooltip>
            </InlineStack>

            <ClientOnly fallback={<div style={{ height: "100px" }} />}>
              {() =>
                (displayStats as any).totalPrompts > 0 ? (
                  <ScoreGauge
                    score={(displayStats as any).visibilityScore}
                    color="#108043"
                    benchmark={marketAvgVisibility}
                  />
                ) : (
                  <div style={{ opacity: 0.4 }}>
                    <ScoreGauge
                      score={0}
                      color="#e1e3e5"
                      label="-"
                      benchmark={marketAvgVisibility}
                    />
                    <div style={{ textAlign: "center", marginTop: "-25px" }}>
                      <Text as="span" variant="bodyXs" tone="subdued">
                        No data
                      </Text>
                    </div>
                  </div>
                )
              }
            </ClientOnly>
            <Text variant="bodySm" tone="subdued" as="p" alignment="center">
              Share of Voice in AI answers.
            </Text>
          </BlockStack>
        </Card>
      </Grid.Cell>

      {/* BRAND DEFENSE */}
      <Grid.Cell columnSpan={{ xs: 6, sm: 6, md: 4, lg: 4, xl: 4 }}>
        <Card padding="400">
          <BlockStack gap="400">
            <BlockStack gap="200">
              <InlineStack gap="100" align="start" blockAlign="center">
                <Text as="h3" variant="headingSm" tone="subdued">
                  Brand Defense
                </Text>
                <Tooltip content="How often you rank in the top 3 for search queries that specifically include your brand name.">
                  <Icon source={InfoIcon} tone="subdued" />
                </Tooltip>
              </InlineStack>
              <InlineStack gap="200" blockAlign="center">
                <Text as="p" variant="headingXl" fontWeight="bold">
                  {(displayStats as any)?.brandDefenseScore || 0}%
                </Text>
                <Badge
                  tone={
                    ((displayStats as any)?.brandDefenseScore || 0) > 80
                      ? "success"
                      : "attention"
                  }
                >
                  {((displayStats as any)?.brandDefenseScore || 0) > 80
                    ? "Strong"
                    : "At Risk"}
                </Badge>
              </InlineStack>
            </BlockStack>
            <div style={{ height: "60px" }}>
              <ClientOnly fallback={<div />}>
                {() => {
                  const chartData = Array.isArray(displayDashboardCharts) 
                    ? displayDashboardCharts 
                    : [];
                  return (
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={chartData}>
                      <defs>
                        <linearGradient
                          id="colorDef"
                          x1="0"
                          y1="0"
                          x2="0"
                          y2="1"
                        >
                          <stop
                            offset="5%"
                            stopColor="#005bd3"
                            stopOpacity={0.2}
                          />
                          <stop
                            offset="95%"
                            stopColor="#005bd3"
                            stopOpacity={0}
                          />
                        </linearGradient>
                      </defs>
                      <Area
                        type="monotone"
                        dataKey="defense"
                        stroke="#005bd3"
                        strokeWidth={2}
                        fill="url(#colorDef)"
                      />
                    </AreaChart>
                  </ResponsiveContainer>
                  );
                }}
              </ClientOnly>
            </div>
            <Text variant="bodySm" tone="subdued" as="p">
              Dominance on your own brand keywords.
            </Text>
          </BlockStack>
        </Card>
      </Grid.Cell>

      {/* SENTIMENT GAUGE */}
      <Grid.Cell columnSpan={{ xs: 6, sm: 6, md: 4, lg: 4, xl: 4 }}>
        <Card padding="400">
          <BlockStack gap="400">
            <InlineStack gap="100" align="center" blockAlign="center">
              <Text
                as="h3"
                variant="headingSm"
                tone="subdued"
                alignment="center"
              >
                Avg. Sentiment
              </Text>
              <Tooltip content="The average sentiment score (0-100) of all AI mentions of your brand. Higher is better.">
                <Icon source={InfoIcon} tone="subdued" />
              </Tooltip>
            </InlineStack>

            <ClientOnly fallback={<div style={{ height: "100px" }} />}>
              {() =>
                (displayStats as any).totalPrompts > 0 ? (
                  <SentimentScoreGauge
                    score={(displayStats as any).avgSentiment}
                    color="#9c6ade"
                    benchmark={marketAvgSentiment}
                  />
                ) : (
                  <div style={{ opacity: 0.4 }}>
                    <SentimentScoreGauge
                      score={0}
                      color="#e1e3e5"
                      label="-"
                      benchmark={marketAvgSentiment}
                    />
                    <div style={{ textAlign: "center", marginTop: "-25px" }}>
                      <Text as="span" variant="bodyXs" tone="subdued">
                        No data
                      </Text>
                    </div>
                  </div>
                )
              }
            </ClientOnly>
            <Text variant="bodySm" tone="subdued" as="p" alignment="center">
              Overall quality of AI mentions.
            </Text>
          </BlockStack>
        </Card>
      </Grid.Cell>
    </Grid>
  );
};
