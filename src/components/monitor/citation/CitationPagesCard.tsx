import {
  Card,
  BlockStack,
  InlineStack,
  Text,
  Tooltip,
  Icon,
  Button,
} from "@shopify/polaris";
import { InfoIcon, DuplicateIcon, ExternalIcon } from "@shopify/polaris-icons";
import React, { useState } from "react";
import { DomainIcon } from "./DomainIcon";
import { CategoryBadge } from "./CategoryBadge";
import { MentionedStatus } from "./MentionedStatus";

interface CitationPagesCardProps {
  topCitationPages: any[];
  togglePagesModal: () => void;
}

export const CitationPagesCard = ({
  topCitationPages,
  togglePagesModal,
}: CitationPagesCardProps) => {
  const [hoveredRow, setHoveredRow] = useState<number | null>(null);

  return (
    <BlockStack gap="400">
      {/* Header */}
      <BlockStack gap="200">
        <InlineStack align="space-between" blockAlign="start">
          <BlockStack gap="050">
            <InlineStack gap="200" blockAlign="center" align="start">
              <Text variant="headingMd" as="h2">
                Top Citation Pages
              </Text>
              <Tooltip content="Explore the most referenced web pages in AI answers.">
                <Icon source={InfoIcon} tone="base" />
              </Tooltip>
            </InlineStack>
            <Text as="p" variant="bodySm" tone="subdued">
              Explore the most referenced web pages in AI answers.
            </Text>
          </BlockStack>
        </InlineStack>
      </BlockStack>

      <Card padding="0">
        {/* Table */}
        <div style={{ width: "100%", overflowX: "auto" }}>
          <table
            style={{
              width: "100%",
              borderCollapse: "collapse",
              tableLayout: "auto",
            }}
          >
            <thead>
              <tr
                style={{
                  borderBottom: "1px solid #e1e3e5",
                  backgroundColor: "#fafbfb",
                }}
              >
                <th
                  style={{
                    textAlign: "left",
                    padding: "12px 16px",
                    fontWeight: "500",
                    fontSize: "14px",
                    color: "#6d7175",
                    whiteSpace: "nowrap",
                  }}
                >
                  <Text as="span" variant="bodySm" fontWeight="medium">
                    Rank
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
                    Page
                  </Text>
                </th>
                <th
                  style={{
                    textAlign: "left",
                    padding: "12px 16px",
                    fontWeight: "500",
                    fontSize: "14px",
                    color: "#6d7175",
                    whiteSpace: "nowrap",
                  }}
                >
                  <Text as="span" variant="bodySm" fontWeight="medium">
                    Category
                  </Text>
                </th>
                <th
                  style={{
                    textAlign: "left",
                    padding: "12px 16px",
                    fontWeight: "500",
                    fontSize: "14px",
                    color: "#6d7175",
                    whiteSpace: "nowrap",
                  }}
                >
                  <Text as="span" variant="bodySm" fontWeight="medium">
                    Mentioned
                  </Text>
                </th>
                <th
                  style={{
                    textAlign: "right",
                    padding: "12px 16px",
                    fontWeight: "500",
                    fontSize: "14px",
                    color: "#6d7175",
                    whiteSpace: "nowrap",
                  }}
                >
                  <div
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "4px",
                      justifyContent: "flex-end",
                      width: "100%",
                    }}
                  >
                    <Text as="span" variant="bodySm" fontWeight="medium">
                      Share
                    </Text>
                    <Tooltip content="The percentage share of citations">
                      <Icon source={InfoIcon} tone="subdued" />
                    </Tooltip>
                  </div>
                </th>
              </tr>
            </thead>
            <tbody>
              {topCitationPages.map((item: any, index: number) => {
                const fullUrl = item.page.startsWith("http")
                  ? item.page
                  : `https://${item.page}`;
                return (
                  <tr
                    key={item.rank}
                    style={{
                      borderBottom:
                        index < topCitationPages.length - 1
                          ? "1px solid #f1f2f4"
                          : "none",
                    }}
                    onMouseEnter={() => setHoveredRow(item.rank)}
                    onMouseLeave={() => setHoveredRow(null)}
                  >
                    <td
                      style={{ padding: "12px 16px", verticalAlign: "middle" }}
                    >
                      <Text as="span" variant="bodyMd" fontWeight="medium">
                        {item.rank}
                      </Text>
                    </td>
                    <td
                      style={{
                        padding: "12px 16px",
                        verticalAlign: "middle",
                        position: "relative",
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "space-between",
                          width: "100%",
                        }}
                      >
                        <div
                          style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "8px",
                          }}
                        >
                          <DomainIcon
                            iconType={item.iconType}
                            domain={item.domain}
                            iconText={item.iconText}
                            iconColor={item.iconColor}
                          />
                          <span style={{ wordBreak: "break-word" }}>
                            <Text as="span" variant="bodyMd">
                              {item.page}
                            </Text>
                          </span>
                        </div>
                        <div
                          style={{
                            display: "inline-flex",
                            gap: "4px",
                            alignItems: "center",
                            opacity: hoveredRow === item.rank ? 1 : 0,
                            visibility:
                              hoveredRow === item.rank ? "visible" : "hidden",
                            transition: "opacity 0.1s ease",
                            flexShrink: 0,
                            minWidth: "120px",
                            justifyContent: "flex-end",
                          }}
                        >
                          <button
                            onClick={() => {
                              navigator.clipboard.writeText(fullUrl);
                            }}
                            style={{
                              display: "inline-flex",
                              alignItems: "center",
                              gap: "4px",
                              padding: "3px 8px",
                              borderRadius: "6px",
                              border: "1px solid #e1e3e5",
                              backgroundColor: "white",
                              color: "#202223",
                              fontSize: "12px",
                              fontWeight: "500",
                              cursor: "pointer",
                              whiteSpace: "nowrap",
                              transition: "all 0.1s ease",
                              boxShadow: "0 1px 2px rgba(0, 0, 0, 0.05)",
                              height: "24px",
                            }}
                            onMouseEnter={(e) => {
                              e.currentTarget.style.backgroundColor = "#f7f8f9";
                              e.currentTarget.style.borderColor = "#c9cccf";
                            }}
                            onMouseLeave={(e) => {
                              e.currentTarget.style.backgroundColor = "white";
                              e.currentTarget.style.borderColor = "#e1e3e5";
                            }}
                          >
                            <Icon source={DuplicateIcon} tone="subdued" />
                            <span>Copy</span>
                          </button>
                          <button
                            onClick={() => {
                              window.open(fullUrl, "_blank");
                            }}
                            style={{
                              display: "inline-flex",
                              alignItems: "center",
                              gap: "4px",
                              padding: "3px 8px",
                              borderRadius: "6px",
                              border: "1px solid #e1e3e5",
                              backgroundColor: "white",
                              color: "#202223",
                              fontSize: "12px",
                              fontWeight: "500",
                              cursor: "pointer",
                              whiteSpace: "nowrap",
                              transition: "all 0.1s ease",
                              boxShadow: "0 1px 2px rgba(0, 0, 0, 0.05)",
                              height: "24px",
                            }}
                            onMouseEnter={(e) => {
                              e.currentTarget.style.backgroundColor = "#f7f8f9";
                              e.currentTarget.style.borderColor = "#c9cccf";
                            }}
                            onMouseLeave={(e) => {
                              e.currentTarget.style.backgroundColor = "white";
                              e.currentTarget.style.borderColor = "#e1e3e5";
                            }}
                          >
                            <Icon source={ExternalIcon} tone="subdued" />
                            <span>Visit</span>
                          </button>
                        </div>
                      </div>
                    </td>
                    <td
                      style={{
                        padding: "12px 16px",
                        verticalAlign: "middle",
                        whiteSpace: "nowrap",
                        minWidth: "100px",
                      }}
                    >
                      <CategoryBadge category={item.category} />
                    </td>
                    <td
                      style={{
                        padding: "12px 16px",
                        verticalAlign: "middle",
                        whiteSpace: "nowrap",
                        minWidth: "120px",
                      }}
                    >
                      <MentionedStatus
                        status={item.mentioned}
                        competitors={item.competitors}
                      />
                    </td>
                    <td
                      style={{
                        textAlign: "right",
                        padding: "12px 16px",
                        verticalAlign: "middle",
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          alignItems: "flex-end",
                          gap: "2px",
                        }}
                      >
                        <Text as="span" variant="bodyMd" fontWeight="medium">
                          {item.share}%
                        </Text>
                        <span style={{ color: "#219653" }}>
                          <Text as="span" variant="bodySm" tone="success">
                            +{item.change}%
                          </Text>
                        </span>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        {/* Footer with Expand Button and Item Count */}
        <div style={{ padding: "16px", borderTop: "1px solid #f1f2f4" }}>
          <InlineStack align="space-between" blockAlign="center">
            <Button variant="plain" onClick={togglePagesModal}>
              Expand
            </Button>
            <Text as="span" variant="bodySm" tone="subdued">
              Showing 1-20 of {topCitationPages.length} items
            </Text>
          </InlineStack>
        </div>
      </Card>
    </BlockStack>
  );
};
