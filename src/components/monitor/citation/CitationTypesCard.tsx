import { Card, BlockStack, InlineStack, Text, Tooltip, Icon } from "@shopify/polaris";
import { InfoIcon, NoteIcon, ChatIcon, FolderIcon, AlertCircleIcon } from "@shopify/polaris-icons";
import React from "react";
import { ClientOnly } from "../../ClientOnly";
import { CitationTypesChart } from "./CitationTypesChart";

interface CitationTypesCardProps {
  citationTypesData: any[];
  totalCitations: number;
  hiddenSeries: string[];
  setHiddenSeries: React.Dispatch<React.SetStateAction<string[]>>;
}

export const CitationTypesCard = ({
  citationTypesData,
  totalCitations,
  hiddenSeries,
  setHiddenSeries,
}: CitationTypesCardProps) => {
  return (
    <Card>
      <BlockStack gap="400">
        {/* Header */}
        <BlockStack gap="200">
          <InlineStack gap="200" blockAlign="center" align="start">
            <Text variant="headingMd" as="h3">
              Citation Types
            </Text>
            <Tooltip content="Categorize where citations in AI-generated answers are coming from.">
              <Icon source={InfoIcon} tone="subdued" />
            </Tooltip>
          </InlineStack>
          <Text as="p" variant="bodySm" tone="subdued">
            Citation breakdown over total citations in the selected period by type
          </Text>
        </BlockStack>

        {/* Chart */}
        <div style={{ height: "60px" }}>
          <ClientOnly fallback={<div style={{ width: "100%", height: "100%" }}></div>}>
            {() => (
              <CitationTypesChart
                data={citationTypesData}
                total={totalCitations}
                hiddenSeries={hiddenSeries}
              />
            )}
          </ClientOnly>
        </div>

        {/* Legend */}
        <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
          {[
            {
              name: "Earned",
              value: citationTypesData[0]?.Earned || 0,
              color: "#2F80ED",
              icon: NoteIcon,
            },
            {
              name: "Social",
              value: citationTypesData[0]?.Social || 0,
              color: "#9B51E0",
              icon: ChatIcon,
            },
            {
              name: "Owned",
              value: citationTypesData[0]?.Owned || 0,
              color: "#219653",
              icon: FolderIcon,
            },
            {
              name: "Competition",
              value: citationTypesData[0]?.Competition || 0,
              color: "#EB5757",
              icon: AlertCircleIcon,
            },
          ].map((item, index) => {
            const isHidden = hiddenSeries.includes(item.name);
            return (
              <div
                key={index}
                style={{
                  display: "flex",
                  alignItems: "center",
                  cursor: "pointer",
                  opacity: isHidden ? 0.6 : 1,
                }}
                onClick={() => {
                  setHiddenSeries((prev) =>
                    prev.includes(item.name)
                      ? prev.filter((s) => s !== item.name)
                      : [...prev, item.name]
                  );
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                    background: isHidden ? "#f4f6f8" : "#fff",
                    padding: "4px 8px",
                    borderRadius: "6px",
                    border: isHidden
                      ? "1px solid #dfe3e8"
                      : `1px solid ${item.color}30`,
                  }}
                >
                  <div
                    style={{
                      width: "14px",
                      height: "14px",
                      borderRadius: "3px",
                      backgroundColor: item.color,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      border: "1px solid rgba(0,0,0,0.1)",
                    }}
                  >
                    {!isHidden && (
                      <div
                        style={{
                          width: "8px",
                          height: "8px",
                          backgroundImage:
                            'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 20 20\' fill=\'white\'%3E%3Cpath fill-rule=\'evenodd\' d=\'M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z\' clip-rule=\'evenodd\'/%3E%3C/svg%3E")',
                        }}
                      ></div>
                    )}
                  </div>
                  <Text
                    as="span"
                    variant="bodySm"
                    tone={isHidden ? "subdued" : "base"}
                    fontWeight="medium"
                  >
                    {item.name}
                  </Text>
                </div>
              </div>
            );
          })}
        </div>
      </BlockStack>
    </Card>
  );
};
