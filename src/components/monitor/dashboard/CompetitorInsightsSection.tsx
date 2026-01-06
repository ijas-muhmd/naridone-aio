import {
  Layout,
  Text,
  Card,
  EmptyState,
  Grid,
  BlockStack,
  InlineStack,
  Box,
} from "@shopify/polaris";
import { getPlatformInfo } from "../../../utils/platforms";
import React from "react";

interface CompetitorInsightsSectionProps {
  competitorInsights: any[];
}

export const CompetitorInsightsSection = ({
  competitorInsights,
}: CompetitorInsightsSectionProps) => {
  return (
    <Layout>
      <Layout.Section>
        <div style={{ marginBottom: "12px" }}>
          <Text variant="headingLg" as="h2">
            Competitor Intelligence
          </Text>
          <Text variant="bodyMd" tone="subdued" as="p">
            Strategic insights from recent AI search results
          </Text>
        </div>

        {competitorInsights.length === 0 ? (
          <Card padding="400">
            <div style={{ padding: "30px" }}>
              <EmptyState
                heading="No competitor insights"
                image="https://cdn.shopify.com/s/files/1/0262/4071/2726/files/emptystate-files.png"
              >
                <p>Run more prompts to gather rival mentions.</p>
              </EmptyState>
            </div>
          </Card>
        ) : (
          <Grid>
            {competitorInsights.slice(0, 6).map((insight: any) => {
              const sentimentScore = insight.sentiment ?? 0;
              const isPositive = sentimentScore > 60;
              const isNegative = sentimentScore < 40;
              const sentimentTone = isPositive
                ? "success"
                : isNegative
                  ? "critical"
                  : "attention";
              const brandDomain =
                insight.brand.toLowerCase().replace(/[^a-z0-9]/g, "") + ".com";

              return (
                <Grid.Cell
                  key={insight.id}
                  columnSpan={{ xs: 6, sm: 6, md: 6, lg: 4, xl: 4 }}
                >
                  <div
                    style={{
                      padding: "16px",
                      background: "#fff",
                      borderRadius: "12px",
                      border: "1px solid #e1e3e5",
                      boxShadow:
                        "0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.03)",
                      height: "100%",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-between",
                      transition: "transform 0.2s, box-shadow 0.2s",
                    }}
                  >
                    <BlockStack gap="300">
                      <InlineStack align="space-between" blockAlign="center">
                        <div
                          style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "8px",
                          }}
                        >
                          <img
                            src={`https://www.google.com/s2/favicons?domain=${brandDomain}&sz=32`}
                            alt={insight.brand}
                            style={{
                              width: "24px",
                              height: "24px",
                              borderRadius: "6px",
                            }}
                            onError={(e) => {
                              (e.target as HTMLImageElement).style.display =
                                "none";
                            }}
                          />
                          <Text variant="headingSm" as="h4" fontWeight="bold">
                            {insight.brand}
                          </Text>
                        </div>
                        <div
                          style={{
                            backgroundColor:
                              sentimentTone === "success"
                                ? "#ecfdf5"
                                : sentimentTone === "critical"
                                  ? "#fef2f2"
                                  : "#fffbeb",
                            color:
                              sentimentTone === "success"
                                ? "#059669"
                                : sentimentTone === "critical"
                                  ? "#dc2626"
                                  : "#d97706",
                            padding: "4px 8px",
                            borderRadius: "999px",
                            fontSize: "11px",
                            fontWeight: 700,
                            textTransform: "uppercase",
                          }}
                        >
                          {isPositive
                            ? "Positive"
                            : isNegative
                              ? "Negative"
                              : "Neutral"}{" "}
                          {sentimentScore}%
                        </div>
                      </InlineStack>

                      <Box minHeight="3.5rem">
                        <BlockStack gap="100">
                          <span
                            style={{
                              textTransform: "uppercase",
                              letterSpacing: "0.08em",
                            }}
                          >
                            <Text
                              variant="bodyXs"
                              tone="subdued"
                              as="span"
                              fontWeight="bold"
                            >
                              WINNING FACTOR
                            </Text>
                          </span>
                          <Text
                            variant="bodyMd"
                            as="p"
                            fontWeight="medium"
                            truncate
                          >
                            "
                            {insight.snippet
                              ? insight.snippet.substring(0, 120) +
                                (insight.snippet.length > 120 ? "..." : "")
                              : "No context available."}
                            "
                          </Text>
                        </BlockStack>
                      </Box>

                      <div style={{ paddingTop: "12px", marginTop: "auto" }}>
                        <InlineStack align="space-between" blockAlign="center">
                          <div
                            style={{
                              display: "flex",
                              alignItems: "center",
                              gap: "6px",
                            }}
                          >
                            {insight.model &&
                              (() => {
                                const platform = getPlatformInfo(insight.model);
                                return (
                                  <>
                                    <img
                                      src={platform.logo}
                                      alt={platform.name}
                                      style={{
                                        width: "16px",
                                        height: "16px",
                                        borderRadius: "4px",
                                      }}
                                    />
                                    <Text
                                      variant="bodyXs"
                                      tone="subdued"
                                      as="span"
                                      fontWeight="medium"
                                    >
                                      {platform.name}
                                    </Text>
                                  </>
                                );
                              })()}
                          </div>
                          <InlineStack gap="200" blockAlign="center">
                            {insight.position && (
                              <div
                                style={{
                                  color: "#2563eb",
                                  fontWeight: 600,
                                  fontSize: "12px",
                                }}
                              >
                                Rank #{insight.position}
                              </div>
                            )}
                            <Text variant="bodyXs" tone="subdued" as="span">
                              {new Date(insight.createdAt).toLocaleDateString(
                                undefined,
                                { month: "short", day: "numeric" },
                              )}
                            </Text>
                          </InlineStack>
                        </InlineStack>
                        {insight.prompt && (
                          <div
                            style={{
                              marginTop: "8px",
                              borderTop: "1px solid #f1f5f9",
                              paddingTop: "8px",
                            }}
                          >
                            <Text
                              variant="bodyXs"
                              tone="subdued"
                              as="p"
                              truncate
                            >
                              Q: {insight.prompt}
                            </Text>
                          </div>
                        )}
                      </div>
                    </BlockStack>
                  </div>
                </Grid.Cell>
              );
            })}
          </Grid>
        )}
      </Layout.Section>
    </Layout>
  );
};
