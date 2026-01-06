import {
  BlockStack,
  InlineStack,
  Text,
  Tooltip,
  Icon,
  TextField,
  Button,
} from "@shopify/polaris";
import { SearchIcon, InfoIcon } from "@shopify/polaris-icons";
import React from "react";

interface SentimentFiltersProps {
  brandName?: string;
  themeSearch: string;
  setThemeSearch: (value: string) => void;
  themeFilter: "all" | "positive" | "negative" | "trending";
  setThemeFilter: (value: "all" | "positive" | "negative" | "trending") => void;
}

export const SentimentFilters = ({
  brandName,
  themeSearch,
  setThemeSearch,
  themeFilter,
  setThemeFilter,
}: SentimentFiltersProps) => {
  return (
    <BlockStack gap="400">
      {/* Header */}
      <BlockStack gap="200">
        <InlineStack align="space-between" blockAlign="start">
          <BlockStack gap="050">
            <InlineStack gap="200" blockAlign="center" align="start">
              <Text variant="headingMd" as="h2">
                Themes
              </Text>
              <Tooltip
                content={`Key themes and patterns surfaced by AI when referencing ${brandName || "your brand"}`}
              >
                <Icon source={InfoIcon} tone="base" />
              </Tooltip>
            </InlineStack>
            <Text as="p" variant="bodySm" tone="subdued">
              Key themes and patterns surfaced by AI when referencing{" "}
              {brandName || "your brand"}
            </Text>
          </BlockStack>
          <div style={{ minWidth: "250px" }}>
            <TextField
              label=""
              labelHidden
              value={themeSearch}
              onChange={setThemeSearch}
              placeholder="Filter themes"
              prefix={<Icon source={SearchIcon} />}
              autoComplete="off"
            />
          </div>
        </InlineStack>
      </BlockStack>

      {/* Filter Buttons */}
      <InlineStack gap="200">
        <Button
          variant={themeFilter === "all" ? "primary" : "secondary"}
          onClick={() => setThemeFilter("all")}
        >
          All
        </Button>
        <Button
          variant={themeFilter === "positive" ? "primary" : "secondary"}
          onClick={() => setThemeFilter("positive")}
        >
          Positive
        </Button>
        <Button
          variant={themeFilter === "negative" ? "primary" : "secondary"}
          onClick={() => setThemeFilter("negative")}
        >
          Negative
        </Button>
        <Button
          variant={themeFilter === "trending" ? "primary" : "secondary"}
          onClick={() => setThemeFilter("trending")}
        >
          Trending
        </Button>
      </InlineStack>
    </BlockStack>
  );
};
