import {
  Layout,
  Grid,
  Card,
  BlockStack,
  InlineStack,
  Text,
  Badge,
  Tooltip,
  Icon,
} from "@shopify/polaris";
import { InfoIcon } from "@shopify/polaris-icons";
import { ResponsiveContainer, PieChart, Pie, Cell } from "recharts";
import { ClientOnly } from "../../ClientOnly";
import React from "react";

interface DeepDiveStatsSectionProps {
  displayDeepDiveStats: {
    recommendationRate?: number;
    citationCount?: number;
    competitorGap?: number;
  };
  displayStats: {
    totalPrompts?: number;
  };
}

export const DeepDiveStatsSection = ({
  displayDeepDiveStats,
  displayStats,
}: DeepDiveStatsSectionProps) => {
  return (
    <Layout>
      <Layout.Section>
        <Grid>
          <Grid.Cell columnSpan={{ xs: 6, sm: 6, md: 4, lg: 4, xl: 4 }}>
            <Card>
              <BlockStack gap="200">
                <InlineStack gap="100" align="start" blockAlign="center">
                  <Text as="h3" variant="headingSm" tone="subdued">
                    Recommendation Rate
                  </Text>
                  <Tooltip content="The percentage of AI responses where your brand is explicitly recommended with high positive sentiment (>80).">
                    <Icon source={InfoIcon} tone="subdued" />
                  </Tooltip>
                </InlineStack>
                <InlineStack align="space-between" blockAlign="center">
                  <BlockStack gap="100">
                    <Text as="p" variant="headingXl" fontWeight="bold">
                      {displayDeepDiveStats.recommendationRate || 0}%
                    </Text>
                    <Badge
                      tone={
                        (displayDeepDiveStats.recommendationRate || 0) > 60
                          ? "success"
                          : "info"
                      }
                    >
                      {(displayDeepDiveStats.recommendationRate || 0) > 60
                        ? "High"
                        : "Neutral"}
                    </Badge>
                  </BlockStack>
                  <div style={{ width: "60px", height: "60px" }}>
                    <ClientOnly fallback={<div />}>
                      {() =>
                        (displayDeepDiveStats.recommendationRate || 0) > 0 ||
                        (displayStats as any)?.totalPrompts > 0 ? (
                          <ResponsiveContainer>
                            <PieChart>
                              <Pie
                                data={[
                                  {
                                    value:
                                      displayDeepDiveStats.recommendationRate ||
                                      0,
                                  },
                                  {
                                    value:
                                      100 -
                                      (displayDeepDiveStats.recommendationRate ||
                                        0),
                                  },
                                ]}
                                innerRadius={20}
                                outerRadius={28}
                                dataKey="value"
                                startAngle={90}
                                endAngle={-270}
                              >
                                <Cell fill="#108043" />
                                <Cell fill="#e1e3e5" />
                              </Pie>
                            </PieChart>
                          </ResponsiveContainer>
                        ) : (
                          <div
                            style={{
                              width: "100%",
                              height: "100%",
                              borderRadius: "50%",
                              border: "4px solid #f1f2f4",
                            }}
                          />
                        )
                      }
                    </ClientOnly>
                  </div>
                </InlineStack>
                <Text variant="bodySm" tone="subdued" as="p">
                  % of mentions where AI strongly recommends you.
                </Text>
              </BlockStack>
            </Card>
          </Grid.Cell>

          <Grid.Cell columnSpan={{ xs: 6, sm: 6, md: 4, lg: 4, xl: 4 }}>
            <Card>
              <BlockStack gap="200">
                <InlineStack gap="100" align="start" blockAlign="center">
                  <Text as="h3" variant="headingSm" tone="subdued">
                    Active Sources
                  </Text>
                  <Tooltip content="The number of unique websites (domains) that are cited as sources in AI answers about your brand.">
                    <Icon source={InfoIcon} tone="subdued" />
                  </Tooltip>
                </InlineStack>
                <InlineStack gap="200" blockAlign="center">
                  <Text as="p" variant="headingXl" fontWeight="bold">
                    {displayDeepDiveStats.citationCount || 0}
                  </Text>
                  <Badge tone="info">Unique Domains</Badge>
                </InlineStack>
                <div
                  style={{
                    height: "4px",
                    width: "100%",
                    background: "#f1f2f4",
                    borderRadius: "2px",
                    marginTop: "1rem",
                    overflow: "hidden",
                    display: "flex",
                  }}
                >
                  <div
                    style={{
                      width: `${Math.min(100, ((displayDeepDiveStats.citationCount || 0) / 50) * 100)}%`,
                      background: "#005bd3",
                      height: "100%",
                    }}
                  />
                </div>
                <Text variant="bodySm" tone="subdued" as="p">
                  Total unique websites citing your brand in AI answers.
                </Text>
              </BlockStack>
            </Card>
          </Grid.Cell>

          <Grid.Cell columnSpan={{ xs: 6, sm: 6, md: 4, lg: 4, xl: 4 }}>
            <Card>
              <BlockStack gap="200">
                <InlineStack gap="100" align="start" blockAlign="center">
                  <Text as="h3" variant="headingSm" tone="subdued">
                    Competitor Gap
                  </Text>
                  <Tooltip content="The difference in visibility between you and your top competitor. Positive means you are leading.">
                    <Icon source={InfoIcon} tone="subdued" />
                  </Tooltip>
                </InlineStack>
                <InlineStack gap="200" blockAlign="center">
                  <Text as="p" variant="headingXl" fontWeight="bold">
                    {(displayDeepDiveStats.competitorGap || 0) > 0 ? "+" : ""}
                    {displayDeepDiveStats.competitorGap || 0}%
                  </Text>
                  <Badge
                    tone={
                      (displayDeepDiveStats.competitorGap || 0) >= 0
                        ? "success"
                        : "critical"
                    }
                  >
                    {(displayDeepDiveStats.competitorGap || 0) >= 0
                      ? "Leading"
                      : "Trailing"}
                  </Badge>
                </InlineStack>
                <div
                  style={{
                    position: "relative",
                    height: "20px",
                    marginTop: "0.5rem",
                    background: "#f1f2f4",
                    borderRadius: "4px",
                  }}
                >
                  <div
                    style={{
                      position: "absolute",
                      left: "50%",
                      top: 0,
                      bottom: 0,
                      width: "2px",
                      background: "#8c9196",
                      zIndex: 1,
                    }}
                  />
                  <div
                    style={{
                      position: "absolute",
                      top: "4px",
                      bottom: "4px",
                      left:
                        (displayDeepDiveStats.competitorGap || 0) >= 0
                          ? "50%"
                          : `${Math.max(0, 50 + (displayDeepDiveStats.competitorGap || 0))}%`,
                      width: `${Math.min(50, Math.abs(displayDeepDiveStats.competitorGap || 0))}%`,
                      background:
                        (displayDeepDiveStats.competitorGap || 0) >= 0
                          ? "#108043"
                          : "#d82c0d",
                      borderRadius: "2px",
                    }}
                  />
                </div>
                <Text variant="bodySm" tone="subdued" as="p">
                  Visibility difference vs your top competitor.
                </Text>
              </BlockStack>
            </Card>
          </Grid.Cell>
        </Grid>
      </Layout.Section>
    </Layout>
  );
};
