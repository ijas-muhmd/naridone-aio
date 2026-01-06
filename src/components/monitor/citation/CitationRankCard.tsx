import {
  Card,
  BlockStack,
  InlineStack,
  Text,
  Tooltip,
  Icon,
  Button,
  Badge,
} from "@shopify/polaris";
import { InfoIcon, DuplicateIcon, ExternalIcon } from "@shopify/polaris-icons";
import React, { useState } from "react";
import { DomainIcon } from "./DomainIcon";
import { CategoryBadge } from "./CategoryBadge";

interface CitationRankCardProps {
  topCitationDomains: any[];
  rankDisplay: string;
  rankShare: string;
  toggleRankModal: () => void;
  handleDomainClick: (domain: string) => void;
}

export const CitationRankCard = ({
  topCitationDomains,
  rankDisplay,
  rankShare,
  toggleRankModal,
  handleDomainClick,
}: CitationRankCardProps) => {
  const [hoveredRow, setHoveredRow] = useState<number | null>(null);

  return (
    <Card>
      <BlockStack gap="400">
        {/* Header */}
        <BlockStack gap="200">
          <InlineStack gap="200" blockAlign="center" align="start">
            <Text variant="headingMd" as="h3">
              Citation Rank
            </Text>
            <Tooltip content="Your brand's position compared to others based on how often your website is cited in Al-generated answers.">
              <Icon source={InfoIcon} tone="subdued" />
            </Tooltip>
          </InlineStack>
          <Text variant="headingLg" as="p" fontWeight="bold">
            {rankDisplay}{" "}
            <span style={{ fontSize: "0.8em", color: "#6d7175" }}>
              ({rankShare})
            </span>
          </Text>
        </BlockStack>

        {/* Table */}
        <div style={{ width: "100%" }}>
          <table style={{ width: "100%", borderCollapse: "collapse" }}>
            <thead>
              <tr style={{ borderBottom: "1px solid #e1e3e5" }}>
                <th
                  style={{
                    textAlign: "left",
                    padding: "8px 0",
                    fontWeight: "500",
                    fontSize: "14px",
                    color: "#6d7175",
                  }}
                >
                  Domain
                </th>
                <th
                  style={{
                    textAlign: "right",
                    padding: "8px 0",
                    fontWeight: "500",
                    fontSize: "14px",
                    color: "#6d7175",
                  }}
                >
                  Share
                </th>
                <th
                  style={{
                    textAlign: "right",
                    padding: "8px 0",
                    fontWeight: "500",
                    fontSize: "14px",
                    color: "#6d7175",
                    width: "40px",
                  }}
                ></th>
              </tr>
            </thead>
            <tbody>
              {topCitationDomains.slice(0, 5).map((item: any, index: number) => {
                return (
                  <tr
                    key={item.rank}
                    style={{
                      borderBottom:
                        index < topCitationDomains.length - 1
                          ? "1px solid #f1f2f4"
                          : "none",
                      cursor: "pointer",
                    }}
                    onMouseEnter={() => setHoveredRow(item.rank)}
                    onMouseLeave={() => setHoveredRow(null)}
                    onClick={() => handleDomainClick(item.domain)}
                  >
                    <td style={{ padding: "12px 0" }}>
                      <InlineStack gap="200" blockAlign="center">
                        <Text
                          as="span"
                          variant="bodySm"
                          fontWeight="medium"
                          tone="subdued"
                        >
                          {index + 1}.
                        </Text>
                        <DomainIcon
                          iconType={item.iconType}
                          domain={item.domain}
                          iconText={item.iconText}
                          iconColor={item.iconColor}
                          iconShape={item.iconShape}
                        />
                        <Text as="span" variant="bodyMd">
                          {item.domain}
                        </Text>
                        {item.category === "Owned" && (
                          <Badge tone="success">Owned</Badge>
                        )}
                      </InlineStack>
                    </td>
                    <td style={{ textAlign: "right", padding: "12px 0" }}>
                      <Text as="span" variant="bodyMd" fontWeight="medium">
                        {item.share}%
                      </Text>
                    </td>
                    <td style={{ textAlign: "right", padding: "12px 0" }}>
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
                        onClick={(e) => e.stopPropagation()} // Prevent row toggle when clicking actions
                      >
                        <button
                          onClick={() => {
                            navigator.clipboard.writeText(item.domain);
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
                            window.open(`https://${item.domain}`, "_blank");
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
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        {/* Expand Button */}
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            marginTop: "8px",
          }}
        >
          <Button variant="plain" onClick={toggleRankModal}>
            Expand
          </Button>
        </div>
      </BlockStack>
    </Card>
  );
};
