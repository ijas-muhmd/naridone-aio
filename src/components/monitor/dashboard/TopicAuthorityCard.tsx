import { Layout, Text } from "@shopify/polaris";
import { VisibilityRankingsCard } from "./VisibilityRankingsCard";
import React from "react";

interface TopicAuthorityCardProps {
  brandName: string;
  topicsData: any[];
}

export const TopicAuthorityCard = ({
  brandName,
  topicsData,
}: TopicAuthorityCardProps) => {
  return (
    <div style={{ marginTop: "20px" }}>
      <div style={{ marginBottom: "12px" }}>
        <Text variant="headingLg" as="h2">
          Topic Authority
        </Text>
      </div>
      <Layout>
        <Layout.Section>
          <VisibilityRankingsCard
            brandName={brandName || "You"}
            topicsData={topicsData}
          />
        </Layout.Section>
      </Layout>
    </div>
  );
};
