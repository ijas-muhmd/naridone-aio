import {
  Card,
  Layout,
  Text,
  BlockStack,
  InlineStack,
  Icon,
  Tooltip,
} from "@shopify/polaris";
import { InfoIcon } from "@shopify/polaris-icons";
import { ShareOfVoiceCard } from "../ShareOfVoiceCard";
import React from "react";

interface ShareOfVoiceDetailedCardProps {
  finalSovStats: any[];
}

export const ShareOfVoiceDetailedCard = ({
  finalSovStats,
}: ShareOfVoiceDetailedCardProps) => {
  return (
    <div style={{ marginTop: "20px" }}>
      <div style={{ marginBottom: "12px" }}>
        <Text variant="headingLg" as="h2">
          Market Share
        </Text>
      </div>
      <Layout>
        <Layout.Section>
          <ShareOfVoiceCard data={finalSovStats || []} />
        </Layout.Section>
      </Layout>
    </div>
  );
};
