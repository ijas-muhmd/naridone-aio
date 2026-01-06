import {
  Box,
  BlockStack,
  InlineStack,
  Text,
  Badge,
  Avatar,
  Button,
} from "@shopify/polaris";
import React from "react";

interface SuggestedBrandsBannerProps {
  suggestedBrands: any[];
  onTrackCompetitor: (name: string, domain: string) => void;
}

export const SuggestedBrandsBanner = ({
  suggestedBrands,
  onTrackCompetitor,
}: SuggestedBrandsBannerProps) => {
  if (suggestedBrands.length === 0) return null;

  return (
    <Box background="bg-surface-secondary" padding="400" borderRadius="200">
      <BlockStack gap="300">
        <InlineStack align="space-between">
          <BlockStack gap="050">
            <Text variant="headingSm" as="h3">
              New Brands Detected
            </Text>
            <Text as="p" variant="bodyXs" tone="subdued">
              Brands appearing in your prompt runs that you aren't tracking yet.
            </Text>
          </BlockStack>
          <Badge>AI Detection</Badge>
        </InlineStack>
        <div
          style={{
            display: "flex",
            gap: "12px",
            overflowX: "auto",
            paddingBottom: "4px",
          }}
        >
          {suggestedBrands.map((brand: any) => (
            <Box
              key={brand.id}
              background="bg-surface"
              padding="300"
              borderRadius="200"
              minWidth="240px"
              borderWidth="025"
              borderColor="border"
            >
              <BlockStack gap="200">
                <InlineStack gap="200">
                  <Avatar name={brand.name} size="sm" />
                  <BlockStack gap="050">
                    <Text variant="headingSm" as="h4">
                      {brand.name}
                    </Text>
                    <Text variant="bodyXs" tone="subdued" as="span">
                      {brand.mentions} Mentions found
                    </Text>
                  </BlockStack>
                </InlineStack>
                <Button
                  fullWidth
                  size="slim"
                  onClick={() => onTrackCompetitor(brand.name, brand.domain)}
                >
                  Add to Watchlist
                </Button>
              </BlockStack>
            </Box>
          ))}
        </div>
      </BlockStack>
    </Box>
  );
};
