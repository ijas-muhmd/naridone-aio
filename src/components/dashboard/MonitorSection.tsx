import { Card, Box, BlockStack, InlineStack, Text, Button, Icon, Grid, ProgressBar, EmptyState, Tooltip as PolarisTooltip } from "@shopify/polaris";
import { InfoIcon } from "@shopify/polaris-icons";
import { useNavigate } from "react-router-dom";
import { ClientOnly } from "../ClientOnly";
import { ScoreGauge, SentimentScoreGauge } from "./ScoreGauge";
import { VisibilityChart } from "./VisibilityChart";

interface MonitorSectionProps {
  stats: {
    visibilityScore: number;
    avgSentiment: number;
    totalPrompts: number;
  };
  marketData: {
    marketAvgVisibility: number;
    marketAvgSentiment: number;
  };
  chartData: Array<Record<string, any>>;
  brandName: string;
}

export function MonitorSection({
  stats,
  marketData,
  chartData,
  brandName,
}: MonitorSectionProps) {
  const navigate = useNavigate();

  return (
    <Card padding="0">
      <div
        style={{
          background: "#fff",
          borderBottom: "1px solid #e1e3e5",
          borderTopLeftRadius: "var(--p-border-radius-300, 8px)",
          borderTopRightRadius: "var(--p-border-radius-300, 8px)",
        }}
      >
        <Box padding="400">
          <InlineStack align="space-between" blockAlign="center">
            <BlockStack gap="050">
              <InlineStack align="start" gap="200" blockAlign="center">
                <div style={{ margin: 0 }}>
                  <Icon source={InfoIcon} tone="subdued" />
                </div>
                <Text as="h3" variant="headingMd">
                  Monitor
                </Text>
              </InlineStack>
              <Text as="p" variant="bodySm" tone="subdued">
                See what AI models are saying about you vs. competitors.
              </Text>
            </BlockStack>
            <Button size="slim" onClick={() => navigate("/app/monitor")}>
              Open Monitor
            </Button>
          </InlineStack>
        </Box>
      </div>
      <Box padding="400">
        <Grid>
          <Grid.Cell columnSpan={{ xs: 6, sm: 6, md: 6, lg: 4, xl: 4 }}>
            <BlockStack gap="400">
              {/* Visibility Score */}
              <ScoreGaugeCard
                stats={stats}
                marketData={marketData}
                type="visibility"
              />

              {/* Sentiment Gauge */}
              <ScoreGaugeCard
                stats={stats}
                marketData={marketData}
                type="sentiment"
              />
            </BlockStack>
          </Grid.Cell>

          <Grid.Cell columnSpan={{ xs: 6, sm: 6, md: 6, lg: 8, xl: 8 }}>
            <VisibilityChart chartData={chartData} brandName={brandName} />
          </Grid.Cell>
        </Grid>
      </Box>
    </Card>
  );
}

interface GaugeCardProps {
  stats: {
    visibilityScore?: number;
    avgSentiment?: number;
    totalPrompts: number;
  };
  marketData: {
    marketAvgVisibility?: number;
    marketAvgSentiment?: number;
  };
  type: "visibility" | "sentiment";
}

function ScoreGaugeCard({ stats, marketData, type }: GaugeCardProps) {
  const isVisibility = type === "visibility";
  const score = isVisibility ? stats.visibilityScore : stats.avgSentiment;
  const benchmark = isVisibility
    ? marketData.marketAvgVisibility
    : marketData.marketAvgSentiment;
  const color = isVisibility ? "#108043" : "#9c6ade";
  const title = isVisibility ? "Visibility Score" : "Avg. Sentiment";
  const tooltip = isVisibility
    ? "The percentage of times your brand appears in the top 5 AI search results for your tracked prompts."
    : "The average sentiment score (0-100) of all AI mentions of your brand. Higher is better.";
  const subtitle = isVisibility
    ? "Share of Voice in AI answers."
    : "Overall quality of AI mentions.";

  return (
    <Card padding="400">
      <BlockStack gap="400">
        <InlineStack gap="100" align="center" blockAlign="center">
          <Text as="h3" variant="headingSm" tone="subdued" alignment="center">
            {title}
          </Text>
          <PolarisTooltip content={tooltip}>
            <Icon source={InfoIcon} tone="subdued" />
          </PolarisTooltip>
        </InlineStack>

        {!stats || !marketData ? (
          <div
            style={{
              height: 140,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <ProgressBar progress={50} size="small" />
          </div>
        ) : (
          <ClientOnly fallback={<div style={{ height: "100px" }} />}>
            {() =>
              stats.totalPrompts > 0 ? (
                isVisibility ? (
                  <ScoreGauge
                    score={score!}
                    color={color}
                    benchmark={benchmark!}
                  />
                ) : (
                  <SentimentScoreGauge
                    score={score!}
                    color={color}
                    benchmark={benchmark!}
                  />
                )
              ) : (
                <div style={{ opacity: 0.4 }}>
                  {isVisibility ? (
                    <ScoreGauge
                      score={0}
                      color="#e1e3e5"
                      label="-"
                      benchmark={benchmark!}
                    />
                  ) : (
                    <SentimentScoreGauge
                      score={0}
                      color="#e1e3e5"
                      label="-"
                      benchmark={benchmark!}
                    />
                  )}
                  <div
                    style={{
                      textAlign: "center",
                      marginTop: "-25px",
                    }}
                  >
                    <Text as="span" variant="bodyXs" tone="subdued">
                      No data
                    </Text>
                  </div>
                </div>
              )
            }
          </ClientOnly>
        )}

        <Text variant="bodySm" tone="subdued" as="p" alignment="center">
          {subtitle}
        </Text>
      </BlockStack>
    </Card>
  );
}


