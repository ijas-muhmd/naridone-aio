import {
  Card,
  BlockStack,
  InlineStack,
  Text,
  Tooltip,
  Icon,
  Box,
} from "@shopify/polaris";
import { InfoIcon } from "@shopify/polaris-icons";
import React from "react";

interface OptimizationDashboardCardProps {
  title: string;
  subtitle?: string;
  tooltip?: string;
  children: React.ReactNode;
  action?: React.ReactNode;
  padding?: string;
}

export const OptimizationDashboardCard = ({
  title,
  subtitle,
  tooltip,
  children,
  action,
  padding = "400",
}: OptimizationDashboardCardProps) => (
  <BlockStack gap="400">
    <InlineStack align="space-between" blockAlign="start">
      <BlockStack gap="050">
        <InlineStack gap="200" align="start" blockAlign="center">
          <Text variant="headingMd" as="h2">
            {title}
          </Text>
          {tooltip && (
            <Tooltip content={tooltip}>
              <Icon source={InfoIcon} tone="subdued" />
            </Tooltip>
          )}
        </InlineStack>
        {subtitle && (
          <Text variant="bodySm" as="p" tone="subdued">
            {subtitle}
          </Text>
        )}
      </BlockStack>
      {action}
    </InlineStack>
    <Card padding="0">
      <Box padding={padding as any}>{children}</Box>
    </Card>
  </BlockStack>
);
