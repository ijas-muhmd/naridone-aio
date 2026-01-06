import {
  Text,
  Grid,
  Card,
  BlockStack,
  InlineStack,
  Icon,
} from "@shopify/polaris";
import {
  CashDollarIcon,
  AlertCircleIcon,
  InfoIcon,
} from "@shopify/polaris-icons";
import React from "react";

interface PerformanceOverviewSectionProps {
  potentialRevenue: number;
  displayStats: {
    invisibleCount?: number;
  };
}

export const PerformanceOverviewSection = ({
  potentialRevenue,
  displayStats,
}: PerformanceOverviewSectionProps) => {
  return (
    <div style={{ marginTop: "20px" }}>
      <div style={{ marginBottom: "12px" }}>
        <Text variant="headingLg" as="h2">
          Performance Overview
        </Text>
      </div>
      <Grid>
        <Grid.Cell columnSpan={{ xs: 6, sm: 6, md: 6, lg: 6, xl: 6 }}>
          <Card padding="400">
            <BlockStack gap="400">
              <InlineStack align="space-between" blockAlign="start">
                <Text
                  variant="bodySm"
                  tone="subdued"
                  as="span"
                  fontWeight="semibold"
                >
                  Revenue at Risk
                </Text>
                <div
                  style={{
                    background: "var(--p-color-bg-surface-critical-subdued)",
                    padding: "6px",
                    borderRadius: "6px",
                  }}
                >
                  <Icon source={CashDollarIcon} tone="critical" />
                </div>
              </InlineStack>
              <BlockStack gap="200">
                <Text variant="heading2xl" as="p" tone="critical">{`$${potentialRevenue?.toLocaleString() || 0}`}</Text>
                <Text variant="bodySm" tone="subdued" as="p">
                  Estimated monthly loss due to low visibility on high-intent
                  keywords.
                </Text>
                <div
                  style={{
                    height: "6px",
                    width: "100%",
                    background: "#f1f2f4",
                    borderRadius: "3px",
                    overflow: "hidden",
                  }}
                >
                  <div
                    style={{
                      width: "65%",
                      height: "100%",
                      background: "#d82c0d",
                    }}
                  />
                </div>
              </BlockStack>
            </BlockStack>
          </Card>
        </Grid.Cell>
        <Grid.Cell columnSpan={{ xs: 6, sm: 6, md: 6, lg: 6, xl: 6 }}>
          <Card padding="400">
            <BlockStack gap="400">
              <InlineStack align="space-between" blockAlign="start">
                <Text
                  variant="bodySm"
                  tone="subdued"
                  as="span"
                  fontWeight="semibold"
                >
                  Visibility Gaps
                </Text>
                <div
                  style={{
                    background:
                      (displayStats as any)?.invisibleCount > 0
                        ? "var(--p-color-bg-surface-warning-subdued)"
                        : "var(--p-color-bg-surface-success-subdued)",
                    padding: "6px",
                    borderRadius: "6px",
                  }}
                >
                  <Icon
                    source={
                      (displayStats as any)?.invisibleCount > 0
                        ? AlertCircleIcon
                        : InfoIcon
                    }
                    tone={
                      (displayStats as any)?.invisibleCount > 0
                        ? "warning"
                        : "success"
                    }
                  />
                </div>
              </InlineStack>
              <BlockStack gap="200">
                <Text variant="heading2xl" as="p">
                  {(displayStats as any)?.invisibleCount || 0}
                </Text>
                {(displayStats as any)?.invisibleCount > 0 ? (
                  <BlockStack gap="100">
                    <Text
                      variant="bodySm"
                      tone="critical"
                      as="span"
                      fontWeight="semibold"
                    >
                      Invisible Prompts
                    </Text>
                    <Text variant="bodyXs" tone="subdued" as="p" truncate>
                      You are not ranking in the top 5 for{" "}
                      {(displayStats as any)?.invisibleCount} high-intent
                      searches.
                    </Text>
                  </BlockStack>
                ) : (
                  <Text variant="bodySm" tone="success" as="span">
                    Great! You are visible on all monitored prompts.
                  </Text>
                )}
              </BlockStack>
            </BlockStack>
          </Card>
        </Grid.Cell>
      </Grid>
    </div>
  );
};
