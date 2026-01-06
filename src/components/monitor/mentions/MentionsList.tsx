import { Card, Box, BlockStack, InlineStack, Pagination, Text } from "@shopify/polaris";
import React from "react";
import { MentionsFilterBar } from "./MentionsFilterBar";
import { MentionCard } from "./MentionCard";
import { ExternalMention } from "./types";

interface MentionsListProps {
  filteredMentions: ExternalMention[];
  pagination?: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
  };
  handlePageChange: (newPage: number) => void;
  // Filter Bar Props
  tabs: any[];
  selectedTab: number;
  handleTabChange: (selectedTabIndex: number) => void;
  sentimentFilter: string;
  setSentimentFilter: (value: string) => void;
  typeFilter: string;
  setTypeFilter: (value: string) => void;
  productFilter: string;
  setProductFilter: (value: string) => void;
  productGroupFilter: string;
  setProductGroupFilter: (value: string) => void;
  products: { label: string; value: string }[];
  productGroups: { id: string; name: string }[];
}

export const MentionsList = ({
  filteredMentions,
  pagination,
  handlePageChange,
  tabs,
  selectedTab,
  handleTabChange,
  sentimentFilter,
  setSentimentFilter,
  typeFilter,
  setTypeFilter,
  productFilter,
  setProductFilter,
  productGroupFilter,
  setProductGroupFilter,
  products,
  productGroups,
}: MentionsListProps) => {
  return (
    <Card padding="0">
      <MentionsFilterBar
        tabs={tabs}
        selectedTab={selectedTab}
        handleTabChange={handleTabChange}
        sentimentFilter={sentimentFilter}
        setSentimentFilter={setSentimentFilter}
        typeFilter={typeFilter}
        setTypeFilter={setTypeFilter}
        productFilter={productFilter}
        setProductFilter={setProductFilter}
        productGroupFilter={productGroupFilter}
        setProductGroupFilter={setProductGroupFilter}
        products={products}
        productGroups={productGroups}
      />

      <Box padding="400">
        <BlockStack gap="400">
          {filteredMentions.map((mention) => (
            <MentionCard key={mention.id} mention={mention} />
          ))}
          {filteredMentions.length === 0 && (
            <Box padding="800">
              <BlockStack align="center" inlineAlign="center">
                <Text as="p" tone="subdued">
                  No mentions found for this filter.
                </Text>
              </BlockStack>
            </Box>
          )}

          {/* Pagination Control */}
          {pagination && pagination.totalPages > 1 && (
            <Box paddingBlockStart="400">
              <InlineStack align="center">
                <Pagination
                  hasPrevious={pagination.page > 1}
                  onPrevious={() => handlePageChange(pagination.page - 1)}
                  hasNext={pagination.page < pagination.totalPages}
                  onNext={() => handlePageChange(pagination.page + 1)}
                  label={`${pagination.page} of ${pagination.totalPages}`}
                />
              </InlineStack>
            </Box>
          )}
        </BlockStack>
      </Box>
    </Card>
  );
};
