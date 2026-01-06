import {
  Card,
  Grid,
  BlockStack,
  Text,
  InlineStack,
  Badge,
} from "@shopify/polaris";
import React from "react";

interface OptimizationSummaryProps {
  displayFixStats?: any;
  displayStats?: any;
}

export const OptimizationSummary = ({
  displayFixStats,
  displayStats,
}: OptimizationSummaryProps) => {
  // Safety checks for undefined values
  const fixStats = displayFixStats || {
    total: 0,
    byStatus: { pending: 0, suggested: 0, applied: 0 },
    byCategory: {},
    appliedLast30Days: 0,
  };
  const stats = displayStats || { visibilityScore: 0 };

  return (
    <Card padding="400">
      <Grid>
        <Grid.Cell columnSpan={{ xs: 6, sm: 6, md: 3, lg: 3, xl: 3 }}>
          <BlockStack gap="200">
            <Text variant="bodySm" tone="subdued" as="span">
              Total Issues
            </Text>
            <Text variant="heading2xl" fontWeight="bold" as="p">
              {fixStats.total}
            </Text>
            <InlineStack gap="200" blockAlign="center">
              <Badge
                tone={
                  fixStats.byStatus?.pending > 0 ? "attention" : "success"
                }
              >
                {`${fixStats.byStatus?.pending || 0} Pending`}
              </Badge>
              <Badge tone="info">
                {`${fixStats.byStatus?.suggested || 0} Suggested`}
              </Badge>
            </InlineStack>
          </BlockStack>
        </Grid.Cell>
        <Grid.Cell columnSpan={{ xs: 6, sm: 6, md: 3, lg: 3, xl: 3 }}>
          <BlockStack gap="200">
            <Text variant="bodySm" tone="subdued" as="span">
              Fixes Applied
            </Text>
            <Text variant="heading2xl" fontWeight="bold" as="p">
              {fixStats.appliedLast30Days || 0}
            </Text>
            <Text variant="bodyXs" tone="subdued" as="span">
              {fixStats.byStatus?.applied || 0} total resolved
            </Text>
          </BlockStack>
        </Grid.Cell>
        <Grid.Cell columnSpan={{ xs: 6, sm: 6, md: 3, lg: 3, xl: 3 }}>
          <BlockStack gap="200">
            <Text variant="bodySm" tone="subdued" as="span">
              Current Visibility
            </Text>
            <Text
              variant="heading2xl"
              fontWeight="bold"
              as="p"
              tone={
                (stats as any).visibilityScore > 50
                  ? "success"
                  : "critical"
              }
            >
              {(stats as any).visibilityScore || 0}%
            </Text>
            <Text variant="bodyXs" tone="subdued" as="span">
              Share of voice in AI answers
            </Text>
          </BlockStack>
        </Grid.Cell>
        <Grid.Cell columnSpan={{ xs: 6, sm: 6, md: 3, lg: 3, xl: 3 }}>
          <BlockStack gap="200">
            <Text variant="bodySm" tone="subdued" as="span">
              Top Issue Category
            </Text>
            <Text variant="heading2xl" fontWeight="bold" as="p">
              {(() => {
                const categories = fixStats.byCategory || {};
                const entries = Object.entries(categories);
                if (entries.length === 0) return "None";
                const topCategory = entries.sort(([, a], [, b]) => (b as number) - (a as number))[0];
                return topCategory ? topCategory[0] : "None";
              })()}
            </Text>
            <Text variant="bodyXs" tone="subdued" as="span">
              {(() => {
                const categories = fixStats.byCategory || {};
                const entries = Object.entries(categories);
                if (entries.length === 0) return "No issues found";
                const topCategory = entries.sort(([, a], [, b]) => (b as number) - (a as number))[0];
                return topCategory
                  ? `${topCategory[1]} issues`
                  : "No issues found";
              })()}
            </Text>
          </BlockStack>
        </Grid.Cell>
      </Grid>
    </Card>
  );
};
