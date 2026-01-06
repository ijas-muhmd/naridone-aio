import {
  Card,
  BlockStack,
  InlineStack,
  Icon,
  Text,
  Badge,
  Box,
} from "@shopify/polaris";
import { PersonIcon } from "@shopify/polaris-icons";
import React from "react";

interface PersonaCardProps {
  persona: any;
  onClick: () => void;
}

export const PersonaCard = ({ persona, onClick }: PersonaCardProps) => {
  return (
    <div style={{ height: "100%", cursor: "pointer" }} onClick={onClick}>
      <Card>
        <BlockStack gap="400" align="space-between">
          <BlockStack gap="400">
            <InlineStack align="space-between" blockAlign="start">
              <div
                style={{
                  padding: "12px",
                  background: "var(--p-color-bg-surface-secondary)",
                  borderRadius: "12px",
                  display: "inline-flex",
                }}
              >
                <Icon source={PersonIcon} tone="base" />
              </div>
            </InlineStack>

            <BlockStack gap="100">
              <Text variant="headingMd" as="h3">
                {persona.name}
              </Text>
              <Text variant="bodySm" tone="subdued" as="p" truncate>
                {persona.tagline}
              </Text>
            </BlockStack>

            {persona.constraints && persona.constraints.length > 0 && (
              <InlineStack gap="200" wrap={false}>
                {persona.constraints
                  .slice(0, 2)
                  .map((c: string, i: number) => (
                    <Badge key={i} tone="info">
                      {c}
                    </Badge>
                  ))}
                {persona.constraints.length > 2 && (
                  <Badge tone="subdued">
                    +{persona.constraints.length - 2}
                  </Badge>
                )}
              </InlineStack>
            )}
          </BlockStack>

          <Box
            borderBlockStartWidth="025"
            borderColor="border-subdued"
            paddingBlockStart="300"
            marginBlockStart="200"
          >
            <Text variant="bodyXs" tone="subdued" as="p" alignment="center">
              View Details
            </Text>
          </Box>
        </BlockStack>
      </Card>
    </div>
  );
};
