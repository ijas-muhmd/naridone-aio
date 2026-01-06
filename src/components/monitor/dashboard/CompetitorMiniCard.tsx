import {
  Box,
  BlockStack,
  InlineStack,
  Text,
  Badge,
  ProgressBar,
} from "@shopify/polaris";
import React from "react";

interface CompetitorStats {
  mentions?: number;
}

interface Competitor {
  name: string;
  domain: string;
  strength: number;
  stats?: CompetitorStats;
}

interface CompetitorMiniCardProps {
  comp: Competitor;
}

export const CompetitorMiniCard = ({ comp }: CompetitorMiniCardProps) => (
  <Box
    padding="300"
    background="bg-surface-secondary"
    borderRadius="200"
    borderWidth="025"
    borderColor="border"
  >
    <BlockStack gap="200">
      <InlineStack align="space-between" blockAlign="center">
        <InlineStack gap="200">
          <div
            style={{
              width: 20,
              height: 20,
              borderRadius: 4,
              overflow: "hidden",
            }}
          >
            <img
              src={`https://www.google.com/s2/favicons?domain=${comp.domain}&sz=64`}
              alt=""
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
              onError={(e) => {
                (e.target as HTMLImageElement).style.display = "none";
              }}
            />
          </div>
          <Text variant="bodySm" fontWeight="bold" as="span" truncate>
            {comp.name}
          </Text>
        </InlineStack>
        <Badge tone={comp.strength > 7 ? "critical" : "warning"}>{`${comp.strength}/10`}</Badge>
      </InlineStack>

      <BlockStack gap="100">
        <InlineStack align="space-between">
          <Text variant="bodyXs" tone="subdued" as="span">
            Visibility Share
          </Text>
          <Text variant="bodyXs" fontWeight="bold" as="span">
            {comp.stats?.mentions || 0}%
          </Text>
        </InlineStack>
        <ProgressBar
          progress={comp.stats?.mentions || 0}
          size="small"
          tone="primary"
        />
      </BlockStack>
    </BlockStack>
  </Box>
);
