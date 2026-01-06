import { BlockStack, Text } from "@shopify/polaris";
import React from "react";

interface SentimentBreakdownCardProps {
  sentimentData?: {
    positiveSentiment?: number;
    negativeSentiment?: number;
    positiveReasons?: string[];
    negativeReasons?: string[];
  };
}

export const SentimentBreakdownCard = ({
  sentimentData,
}: SentimentBreakdownCardProps) => {
  // Safety checks for undefined values
  const positiveReasons = sentimentData?.positiveReasons || [];
  const negativeReasons = sentimentData?.negativeReasons || [];
  const positiveSentiment = sentimentData?.positiveSentiment || 0;
  const negativeSentiment = sentimentData?.negativeSentiment || 0;

  return (
    <div style={{ height: "100%", display: "flex", flexDirection: "column" }}>
      {/* Positive Section */}
      <div
        style={{
          flex: 1,
          padding: "24px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <BlockStack gap="200">
          <Text variant="headingMd" as="h3" tone="success" fontWeight="bold">
            {positiveSentiment}% Positive
          </Text>
          <Text variant="bodyLg" as="p" fontWeight="semibold">
            {positiveReasons.length > 0 ? (
              positiveReasons.join(", ")
            ) : (
              <span style={{ color: "#8c9196" }}>
                No positive themes detected
              </span>
            )}
          </Text>
        </BlockStack>
      </div>

      {/* Divider */}
      <div
        style={{ width: "100%", height: "1px", backgroundColor: "#e1e3e5" }}
      />

      {/* Negative Section */}
      <div
        style={{
          flex: 1,
          padding: "24px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <BlockStack gap="200">
          <Text variant="headingMd" as="h3" tone="critical" fontWeight="bold">
            {negativeSentiment}% Negative
          </Text>
          <Text variant="bodyLg" as="p" fontWeight="semibold">
            {negativeReasons.length > 0 ? (
              negativeReasons.join(", ")
            ) : (
              <span style={{ color: "#8c9196" }}>
                No negative themes detected
              </span>
            )}
          </Text>
        </BlockStack>
      </div>

      {/* Divider */}
      <div
        style={{ width: "100%", height: "1px", backgroundColor: "#e1e3e5" }}
      />

      {/* Horizontal Bar Chart (Bottom Aligned) */}
      <div style={{ padding: "24px" }}>
        <BlockStack gap="200">
          <div
            style={{
              display: "flex",
              width: "100%",
              height: "24px",
              borderRadius: "4px",
              overflow: "hidden",
            }}
          >
            <div
              style={{
                width: `${positiveSentiment}%`,
                backgroundColor: "#219653",
              }}
            />
            <div
              style={{
                width: "2px", // Separator
                backgroundColor: "white",
              }}
            />
            <div
              style={{
                width: `${negativeSentiment}%`,
                backgroundColor: "#eb5757",
              }}
            />
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              fontSize: "12px",
              color: "#6d7175",
              marginTop: "4px",
            }}
          >
            <span style={{ fontWeight: 600, color: "#219653" }}>
              {positiveSentiment}%
            </span>
            <span style={{ fontWeight: 600, color: "#eb5757" }}>
              {negativeSentiment}%
            </span>
          </div>
        </BlockStack>
      </div>
    </div>
  );
};
