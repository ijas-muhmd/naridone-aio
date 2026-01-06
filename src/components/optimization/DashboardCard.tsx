import {
  BlockStack,
  InlineStack,
  Text,
  Tooltip as PolarisTooltip,
  Icon,
  Card,
  Box,
} from "@shopify/polaris";
import { InfoIcon } from "@shopify/polaris-icons";

export const DashboardCard = ({
  title,
  subtitle,
  tooltip,
  children,
  action,
  padding = "400",
}: any) => (
  <BlockStack gap="400">
    <InlineStack align="space-between" blockAlign="start">
      <BlockStack gap="050">
        <InlineStack gap="200" align="start" blockAlign="center">
          <Text variant="headingMd" as="h2">
            {title}
          </Text>
          {tooltip && (
            <PolarisTooltip content={tooltip}>
              <Icon source={InfoIcon} tone="subdued" />
            </PolarisTooltip>
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

