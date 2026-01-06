import { Card, Box, BlockStack, InlineStack, Text, Icon, Tooltip as PolarisTooltip } from "@shopify/polaris";
import { InfoIcon } from "@shopify/polaris-icons";

interface DashboardCardProps {
  title: string;
  subtitle?: string;
  tooltip?: string;
  children: React.ReactNode;
  action?: React.ReactNode;
  padding?: string;
}

export function DashboardCard({
  title,
  subtitle,
  tooltip,
  children,
  action,
  padding = "400",
}: DashboardCardProps) {
  return (
    <Card padding="0">
      <div
        style={{
          background: "#f9fafb",
          borderBottom: "1px solid #e1e3e5",
          borderTopLeftRadius: "var(--p-border-radius-300, 8px)",
          borderTopRightRadius: "var(--p-border-radius-300, 8px)",
          height: "100%",
        }}
      >
        <Box padding="400">
          <InlineStack align="space-between" blockAlign="start">
            <BlockStack gap="050">
              <InlineStack gap="200" align="start" blockAlign="center">
                <Text variant="headingMd" as="h3">
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
        </Box>
      </div>
      <Box padding={padding as any}>{children}</Box>
    </Card>
  );
}

