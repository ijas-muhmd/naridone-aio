import {
  BlockStack,
  InlineStack,
  Text,
  Tooltip,
  Icon,
  Box,
  Grid,
} from "@shopify/polaris";
import { InfoIcon } from "@shopify/polaris-icons";
import React from "react";

interface ProductHealthScorecardProps {
  data?: {
    missingMeta?: number;
    thinContent?: number;
    noAltText?: number;
    stale?: number;
    schemaErrors?: number;
  };
  isLoading?: boolean;
}

export const ProductHealthScorecard = ({
  data,
  isLoading,
}: ProductHealthScorecardProps) => {
  // Safety checks with defaults
  const productHealth = data || {
    missingMeta: 0,
    thinContent: 0,
    noAltText: 0,
    stale: 0,
    schemaErrors: 0,
  };

  const missingMeta = productHealth.missingMeta || 0;
  const thinContent = productHealth.thinContent || 0;
  const noAltText = productHealth.noAltText || 0;
  const stale = productHealth.stale || 0;
  const schemaErrors = productHealth.schemaErrors || 0;

  return (
    <div
      style={{
        flex: 1,
        minWidth: 0,
        borderLeft: "1px solid #e1e3e5",
        paddingLeft: "24px",
      }}
    >
      <BlockStack gap="400">
        <BlockStack gap="050">
          <InlineStack gap="200" align="start" blockAlign="center">
            <Text variant="headingMd" as="h3">
              Product Health Scorecard
            </Text>
            <Tooltip content="Diagnostic panel showing percentage of products with common issues.">
              <Icon source={InfoIcon} tone="subdued" />
            </Tooltip>
          </InlineStack>
          <Text variant="bodySm" as="p" tone="subdued">
            Issues affecting product visibility.
          </Text>
        </BlockStack>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <BlockStack gap="400">
            <Grid>
              <Grid.Cell columnSpan={{ xs: 6, sm: 6, md: 6, lg: 6, xl: 6 }}>
                <Box
                  padding="300"
                  borderWidth="025"
                  borderColor="border"
                  borderRadius="200"
                  background={
                    missingMeta > 50
                      ? "bg-surface-critical"
                      : missingMeta > 25
                        ? "bg-surface-warning"
                        : "bg-surface-success"
                  }
                >
                  <BlockStack gap="200">
                    <Text variant="bodySm" tone="subdued" as="span">
                      Missing Metadata
                    </Text>
                    <Text variant="headingXl" fontWeight="bold" as="p">
                      {missingMeta}%
                    </Text>
                  </BlockStack>
                </Box>
              </Grid.Cell>
              <Grid.Cell columnSpan={{ xs: 6, sm: 6, md: 6, lg: 6, xl: 6 }}>
                <Box
                  padding="300"
                  borderWidth="025"
                  borderColor="border"
                  borderRadius="200"
                  background={
                    thinContent > 50
                      ? "bg-surface-critical"
                      : thinContent > 25
                        ? "bg-surface-warning"
                        : "bg-surface-success"
                  }
                >
                  <BlockStack gap="200">
                    <Text variant="bodySm" tone="subdued" as="span">
                      Thin Content
                    </Text>
                    <Text variant="headingXl" fontWeight="bold" as="p">
                      {thinContent}%
                    </Text>
                  </BlockStack>
                </Box>
              </Grid.Cell>
              <Grid.Cell columnSpan={{ xs: 6, sm: 6, md: 6, lg: 6, xl: 6 }}>
                <Box
                  padding="300"
                  borderWidth="025"
                  borderColor="border"
                  borderRadius="200"
                  background={
                    noAltText > 50
                      ? "bg-surface-critical"
                      : noAltText > 25
                        ? "bg-surface-warning"
                        : "bg-surface-success"
                  }
                >
                  <BlockStack gap="200">
                    <Text variant="bodySm" tone="subdued" as="span">
                      No Alt Text
                    </Text>
                    <Text variant="headingXl" fontWeight="bold" as="p">
                      {noAltText}%
                    </Text>
                  </BlockStack>
                </Box>
              </Grid.Cell>
              <Grid.Cell columnSpan={{ xs: 6, sm: 6, md: 6, lg: 6, xl: 6 }}>
                <Box
                  padding="300"
                  borderWidth="025"
                  borderColor="border"
                  borderRadius="200"
                  background={
                    stale > 50
                      ? "bg-surface-critical"
                      : stale > 25
                        ? "bg-surface-warning"
                        : "bg-surface-success"
                  }
                >
                  <BlockStack gap="200">
                    <Text variant="bodySm" tone="subdued" as="span">
                      Stale (&gt;6 months)
                    </Text>
                    <Text variant="headingXl" fontWeight="bold" as="p">
                      {stale}%
                    </Text>
                  </BlockStack>
                </Box>
              </Grid.Cell>
              <Grid.Cell columnSpan={{ xs: 6, sm: 6, md: 6, lg: 6, xl: 6 }}>
                <Box
                  padding="300"
                  borderWidth="025"
                  borderColor="border"
                  borderRadius="200"
                  background={
                    schemaErrors > 50
                      ? "bg-surface-critical"
                      : schemaErrors > 25
                        ? "bg-surface-warning"
                        : "bg-surface-success"
                  }
                >
                  <BlockStack gap="200">
                    <Text variant="bodySm" tone="subdued" as="span">
                      Schema Errors
                    </Text>
                    <Text variant="headingXl" fontWeight="bold" as="p">
                      {schemaErrors}%
                    </Text>
                  </BlockStack>
                </Box>
              </Grid.Cell>
            </Grid>
          </BlockStack>
        </div>
      </BlockStack>
    </div>
  );
};
