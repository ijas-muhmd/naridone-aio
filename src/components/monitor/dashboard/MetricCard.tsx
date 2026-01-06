import { Card, BlockStack, InlineStack, Text, Icon } from "@shopify/polaris";
import React from "react";

interface MetricCardProps {
  title: string;
  value: string | number;
  subtext: string;
  tone?: string;
  icon: any;
}

export const MetricCard = ({
  title,
  value,
  subtext,
  tone = "info",
  icon,
}: MetricCardProps) => (
  <Card>
    <BlockStack gap="400">
      <InlineStack align="space-between" blockAlign="start">
        <Text variant="bodySm" tone="subdued" as="span" fontWeight="semibold">
          {title}
        </Text>
        <div
          style={{
            background: "var(--p-color-bg-surface-secondary)",
            padding: "6px",
            borderRadius: "6px",
          }}
        >
          <Icon source={icon} tone="base" />
        </div>
      </InlineStack>
      <BlockStack gap="100">
        <Text variant="heading2xl" as="p">
          {value}
        </Text>
        <Text variant="bodyXs" tone={tone as any} as="span">
          {subtext}
        </Text>
      </BlockStack>
    </BlockStack>
  </Card>
);
