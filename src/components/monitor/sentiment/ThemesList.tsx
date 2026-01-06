import {
  Card,
  BlockStack,
  InlineStack,
  Text,
  Button,
  Icon,
} from "@shopify/polaris";
import { ChevronUpIcon, ChevronDownIcon } from "@shopify/polaris-icons";
import React from "react";
import { ThemeDetailRow } from "./ThemeDetailRow";

interface ThemesListProps {
  filteredThemes: any[];
  expandedTheme: string | null;
  toggleTheme: (theme: string) => void;
  sentimentData: any;
  runIndexMap: Record<string, number>;
  handleRunNavigation: (theme: string, direction: "prev" | "next") => void;
  setSelectedThemeForModal: (theme: string) => void;
  brandName?: string;
}

export const ThemesList = ({
  filteredThemes,
  expandedTheme,
  toggleTheme,
  sentimentData,
  runIndexMap,
  handleRunNavigation,
  setSelectedThemeForModal,
  brandName,
}: ThemesListProps) => {
  return (
    <Card padding="0">
      <div style={{ width: "100%" }}>
        <table style={{ width: "100%", borderCollapse: "collapse" }}>
          <thead>
            <tr style={{ borderBottom: "1px solid #e1e3e5" }}>
              <th
                style={{
                  textAlign: "left",
                  padding: "12px 16px",
                  fontWeight: "500",
                  fontSize: "14px",
                  color: "#6d7175",
                }}
              >
                <Text as="span" variant="bodySm" fontWeight="medium">
                  Theme
                </Text>
              </th>
              <th
                style={{
                  textAlign: "left",
                  padding: "12px 16px",
                  fontWeight: "500",
                  fontSize: "14px",
                  color: "#6d7175",
                }}
              >
                <Text as="span" variant="bodySm" fontWeight="medium">
                  Sentiment
                </Text>
              </th>
              <th
                style={{
                  textAlign: "right",
                  padding: "12px 16px",
                  fontWeight: "500",
                  fontSize: "14px",
                  color: "#6d7175",
                }}
              >
                <Text as="span" variant="bodySm" fontWeight="medium">
                  Occurrences
                </Text>
              </th>
            </tr>
          </thead>
          <tbody>
            {filteredThemes.map((item: any, index: number) => (
              <React.Fragment key={index}>
                <tr
                  style={{
                    borderBottom:
                      expandedTheme === item.theme
                        ? "none"
                        : index < filteredThemes.length - 1
                          ? "1px solid #f1f2f4"
                          : "none",
                    cursor: "pointer",
                    backgroundColor:
                      expandedTheme === item.theme ? "#f9fafb" : "transparent",
                  }}
                  onClick={() => toggleTheme(item.theme)}
                >
                  <td
                    style={{ padding: "12px 16px", verticalAlign: "middle" }}
                  >
                    <InlineStack gap="200" blockAlign="center">
                      <div
                        style={{
                          width: "20px",
                          display: "flex",
                          alignItems: "center",
                        }}
                      >
                        <Icon
                          source={
                            expandedTheme === item.theme
                              ? ChevronUpIcon
                              : ChevronDownIcon
                          }
                          tone="subdued"
                        />
                      </div>
                      <Text as="span" variant="bodyMd" fontWeight="semibold">
                        {item.theme}
                      </Text>
                    </InlineStack>
                  </td>
                  <td
                    style={{ padding: "12px 16px", verticalAlign: "middle" }}
                  >
                    <Text
                      as="span"
                      variant="bodyMd"
                      tone={
                        item.sentiment === "positive" ? "success" : "critical"
                      }
                      fontWeight="medium"
                    >
                      {item.sentiment === "positive" ? "Positive" : "Negative"}
                    </Text>
                  </td>
                  <td
                    style={{
                      textAlign: "right",
                      padding: "12px 16px",
                      verticalAlign: "middle",
                    }}
                  >
                    <InlineStack gap="200" blockAlign="center" align="end">
                      <Text as="span" variant="bodyMd" fontWeight="bold">
                        {item.occurrences}
                      </Text>
                      <div
                        style={{
                          width: "8px",
                          height: "8px",
                          borderRadius: "50%",
                          backgroundColor: "#202223",
                          flexShrink: 0,
                        }}
                      />
                    </InlineStack>
                  </td>
                </tr>
                {expandedTheme === item.theme && (
                  <ThemeDetailRow
                    theme={item.theme}
                    sentimentData={sentimentData}
                    runIndexMap={runIndexMap}
                    handleRunNavigation={handleRunNavigation}
                    setSelectedThemeForModal={setSelectedThemeForModal}
                    brandName={brandName}
                  />
                )}
              </React.Fragment>
            ))}
          </tbody>
        </table>
      </div>

      {/* Footer with Expand Button and Item Count */}
      <div style={{ padding: "16px", borderTop: "1px solid #f1f2f4" }}>
        <InlineStack align="space-between" blockAlign="center">
          <Button variant="plain">Expand</Button>
          <Text as="span" variant="bodySm" tone="subdued">
            Showing 1-{Math.min(20, filteredThemes.length)} of{" "}
            {filteredThemes.length} items
          </Text>
        </InlineStack>
      </div>
    </Card>
  );
};
