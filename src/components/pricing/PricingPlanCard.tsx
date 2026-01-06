import {
  Card,
  BlockStack,
  Text,
  Box,
  InlineStack,
  Icon,
  Button,
  Badge,
  Divider,
} from "@shopify/polaris";
import { CheckIcon } from "@shopify/polaris-icons";
import React from "react";

interface Feature {
  text: string;
  icons?: any[];
}

interface PricingPlanCardProps {
  name: string;
  price: string;
  period: string;
  description: string;
  features: Feature[];
  buttonText: string;
  primary?: boolean;
  badge?: string;
  badgeTone?: "info" | "success";
  isExternal?: boolean;
  url?: string;
  disabled?: boolean;
  onSelect?: () => void;
}

export function PricingPlanCard({
  name,
  price,
  period,
  description,
  features,
  buttonText,
  primary = false,
  badge,
  badgeTone,
  isExternal = false,
  url,
  disabled = false,
  onSelect,
}: PricingPlanCardProps) {
  return (
    <div
      style={{
        height: "100%",
        transform: primary ? "scale(1.02)" : "none",
        position: "relative",
        zIndex: primary ? 10 : 1,
        opacity: disabled ? 0.8 : 1,
      }}
    >
      <Card>
        <BlockStack gap="500">
          {badge && (
            <Box
              background={
                badgeTone === "success"
                  ? "bg-surface-success"
                  : "bg-surface-secondary"
              }
              padding="100"
              borderRadius="200"
            >
              <InlineStack align="center">
                <Text
                  as="span"
                  tone={badgeTone === "success" ? "success" : "info"}
                  fontWeight="bold"
                >
                  {badge}
                </Text>
              </InlineStack>
            </Box>
          )}

          <BlockStack gap="200">
            <InlineStack align="space-between">
              <Text variant="headingLg" as="h3">
                {name}
              </Text>
            </InlineStack>
            <InlineStack align="start" blockAlign="baseline" gap="100">
              <Text variant="heading2xl" as="p">
                {price.startsWith("$") || price === "Custom" || price === "0"
                  ? price
                  : `$${price}`}
              </Text>
              <Text variant="bodyMd" tone="subdued" as="span">
                {period}
              </Text>
            </InlineStack>
            <div style={{ minHeight: "48px" }}>
              <Text variant="bodyMd" as="p" tone="subdued">
                {description}
              </Text>
            </div>
          </BlockStack>

          <Button
            variant={primary ? "primary" : undefined}
            fullWidth
            size="large"
            disabled={disabled}
            onClick={() => {
              if (isExternal && url) {
                window.open(url, "_blank");
              } else if (onSelect) {
                onSelect();
              }
            }}
          >
            {buttonText}
          </Button>

          <Divider />

          <Box minHeight="200px">
            <BlockStack gap="300">
              {features.map((feature, i) => (
                <InlineStack key={i} align="start" gap="300" wrap={false}>
                  <div style={{ marginTop: "2px" }}>
                    <Icon source={CheckIcon} tone="success" />
                  </div>
                  <BlockStack gap="100">
                    <Text variant="bodyMd" as="span">
                      {feature.text}
                    </Text>
                    {feature.icons && (
                      <InlineStack gap="100">
                        {feature.icons.map((IconSource, j) => (
                          <div key={j} style={{ width: 16 }}>
                            <Icon source={IconSource} tone="base" />
                          </div>
                        ))}
                      </InlineStack>
                    )}
                  </BlockStack>
                </InlineStack>
              ))}
            </BlockStack>
          </Box>
        </BlockStack>
      </Card>
    </div>
  );
}
