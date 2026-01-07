import {
  BlockStack,
  InlineStack,
  Text,
  Button,
  Tooltip,
} from "@shopify/polaris";
import { ArrowLeftIcon, ArrowRightIcon } from "@shopify/polaris-icons";
import React from "react";
import { SimpleMarkdownRenderer } from "../shared/SimpleMarkdownRenderer";
import { getThemeDetails, getPlatformIconUrl } from "./utils";

interface ThemeDetailRowProps {
  theme: string;
  sentimentData: any;
  runIndexMap: Record<string, number>;
  handleRunNavigation: (theme: string, direction: "prev" | "next") => void;
  setSelectedThemeForModal: (theme: string) => void;
  brandName?: string;
}

export const ThemeDetailRow = ({
  theme,
  sentimentData,
  runIndexMap,
  handleRunNavigation,
  setSelectedThemeForModal,
  brandName,
}: ThemeDetailRowProps) => {
  const details = getThemeDetails(theme, sentimentData, runIndexMap);
  return (
    <tr style={{ backgroundColor: "#f9fafb" }}>
      <td colSpan={3} style={{ padding: "20px" }}>
        <div
          style={{
            background: "white",
            border: "1px solid #e1e3e5",
            borderRadius: "8px",
            padding: "20px",
          }}
        >
          <BlockStack gap="400">
            <BlockStack gap="200">
              <Text variant="headingMd" as="h3">
                {details?.title}
              </Text>
              <InlineStack gap="200">
                <div
                  style={{ display: "flex", alignItems: "center", gap: "4px" }}
                >
                  <div style={{ width: "16px", height: "16px" }}>
                    <img
                      src={getPlatformIconUrl(details?.source || "")}
                      alt={details?.source || ""}
                      style={{
                        width: "100%",
                        height: "100%",
                        borderRadius: "2px",
                      }}
                    />
                  </div>
                  <Text variant="bodySm" tone="subdued" as="span">
                    {details?.source}
                  </Text>
                </div>
                <Text variant="bodySm" tone="subdued" as="span">
                  •
                </Text>
                <Text variant="bodySm" tone="subdued" as="span">
                  {details?.date}
                </Text>
                <Text variant="bodySm" tone="subdued" as="span">
                  •
                </Text>
                <Text variant="bodySm" tone="subdued" as="span">
                  {details?.region}
                </Text>
              </InlineStack>
            </BlockStack>

            <SimpleMarkdownRenderer text={details?.fullResponse || ""} />

            {details?.tableData?.length && details?.tableData?.length > 0 && (
              <div
                style={{
                  border: "1px solid #e1e3e5",
                  borderRadius: "4px",
                  overflow: "hidden",
                }}
              >
                <table style={{ width: "100%", borderCollapse: "collapse" }}>
                  <thead>
                    <tr
                      style={{
                        backgroundColor: "#f4f6f8",
                        borderBottom: "1px solid #e1e3e5",
                      }}
                    >
                      <th
                        style={{
                          textAlign: "left",
                          padding: "12px",
                          fontSize: "12px",
                          fontWeight: 600,
                          color: "#6d7175",
                          width: "20%",
                        }}
                      >
                        Feature
                      </th>
                      <th
                        style={{
                          textAlign: "left",
                          padding: "12px",
                          fontSize: "12px",
                          fontWeight: 600,
                          color: "#6d7175",
                          width: "40%",
                        }}
                      >
                        {brandName || "your brand"} Approach
                      </th>
                      <th
                        style={{
                          textAlign: "left",
                          padding: "12px",
                          fontSize: "12px",
                          fontWeight: 600,
                          color: "#6d7175",
                          width: "40%",
                        }}
                      >
                        Expected Outcome
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {details?.tableData?.map((row: any, idx: number) => (
                      <tr
                        key={idx}
                        style={{
                          borderBottom:
                            idx < details.tableData.length - 1
                              ? "1px solid #e1e3e5"
                              : "none",
                        }}
                      >
                        <td
                          style={{
                            padding: "12px",
                            fontSize: "13px",
                            fontWeight: 600,
                          }}
                        >
                          {row.feature}
                        </td>
                        <td style={{ padding: "12px", fontSize: "13px" }}>
                          {row.approach}
                        </td>
                        <td style={{ padding: "12px", fontSize: "13px" }}>
                          {row.outcome}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}

            {/* Footer Action Row */}
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginTop: "8px",
              }}
            >
              <InlineStack gap="200" blockAlign="center">
                <Button
                  variant="plain"
                  onClick={() => setSelectedThemeForModal(theme)}
                >
                  View Full Response
                </Button>
                {/* Source Icons Preview */}
                {details?.citations && details?.citations?.length > 0 && (
                  <div
                    style={{
                      display: "flex",
                      gap: "4px",
                      marginLeft: "8px",
                    }}
                  >
                    {details.citations.slice(0, 5).map((citation: any, i: number) => (
                      <a
                        key={i}
                        href={citation.url || citation.snippet}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          display: "block",
                          width: "16px",
                          height: "16px",
                        }}
                      >
                        <img
                          src={`https://www.google.com/s2/favicons?domain=${citation.source}&sz=32`}
                          alt={citation.source}
                          title={citation.title}
                          style={{
                            width: "100%",
                            height: "100%",
                            borderRadius: "2px",
                          }}
                        />
                      </a>
                    ))}
                  </div>
                )}
              </InlineStack>

              {/* Pagination */}
              {details?.runCount && details?.runCount > 1 && (
                <InlineStack gap="200" blockAlign="center">
                  <Tooltip content="Browse different AI runs for this theme">
                    <Button
                      variant="plain"
                      icon={ArrowLeftIcon}
                      disabled={details.currentIndex === 1}
                      onClick={() => handleRunNavigation(theme, "prev")}
                    />
                  </Tooltip>
                  <Text variant="bodySm" tone="subdued" as="span">
                    Run {details.currentIndex} / {details.runCount}
                  </Text>
                  <Tooltip content="Browse different AI runs for this theme">
                    <Button
                      variant="plain"
                      icon={ArrowRightIcon}
                      disabled={details.currentIndex === details.runCount}
                      onClick={() => handleRunNavigation(theme, "next")}
                    />
                  </Tooltip>
                </InlineStack>
              )}
            </div>
          </BlockStack>
        </div>
      </td>
    </tr>
  );
};
