import {
  BlockStack,
  InlineStack,
  Text,
  Tooltip,
  Icon,
  Card,
  Button,
  Badge,
} from "@shopify/polaris";
import { InfoIcon, DuplicateIcon, ExternalIcon } from "@shopify/polaris-icons";
import { useState } from "react";
import { DomainIcon } from "./DomainIcon";
import { CategoryBadge } from "./CategoryBadge";

interface CitationDomainsCardProps {
  topCitationDomains: any[];
  handleDomainClick: (domain: string) => void;
  onExpand?: () => void;
}

export function CitationDomainsCard({
  topCitationDomains,
  handleDomainClick,
  onExpand,
}: CitationDomainsCardProps) {
  const [hoveredDomainRow, setHoveredDomainRow] = useState<number | null>(null);

  return (
    <BlockStack gap="400">
      {/* Header */}
      <BlockStack gap="200">
        <InlineStack gap="200" blockAlign="center" align="start">
          <Text variant="headingMd" as="h2">
            Top Citation Domains
          </Text>
          <Tooltip content="The websites that are most frequently cited in AI-generated answers.">
            <Icon source={InfoIcon} tone="base" />
          </Tooltip>
        </InlineStack>
        <Text variant="bodySm" tone="subdued" as="p">
          Discover which websites are most frequently cited in AI-generated
          responses
        </Text>
      </BlockStack>

      <Card padding="0">
        {/* Table */}
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
                    Domain
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
                    Category
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
              {topCitationDomains.map((item: any, index: number) => {
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
                    onMouseEnter={() => setHoveredDomainRow(item.rank)}
                    onMouseLeave={() => setHoveredDomainRow(null)}
                    onClick={() => handleDomainClick(item.domain)}
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
                        <InlineStack gap="200" blockAlign="center">
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
                          {item.subdomains > 0 && (
                            <div
                              style={{ display: "flex", alignItems: "center" }}
                              title={`Click to view ${item.subdomains} pages`}
                            >
                              <Badge tone="info">{`${item.subdomains} ${
                                item.subdomains === 1 ? "page" : "pages"
                              }`}</Badge>
                            </div>
                          )}
                        </InlineStack>
                        <div
                          style={{
                            display: "inline-flex",
                            gap: "4px",
                            alignItems: "center",
                            opacity: hoveredDomainRow === item.rank ? 1 : 0,
                            visibility:
                              hoveredDomainRow === item.rank
                                ? "visible"
                                : "hidden",
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
                        textAlign: "right",
                        padding: "12px 16px",
                        verticalAlign: "middle",
                        whiteSpace: "nowrap",
                      }}
                    >
                      <InlineStack gap="100" blockAlign="center" align="end">
                        <Text as="span" variant="bodyMd" fontWeight="medium">
                          {item.share}%
                        </Text>
                        <Text as="span" variant="bodySm" tone="success">
                          +{item.change}%
                        </Text>
                      </InlineStack>
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
            <Button variant="plain" onClick={onExpand}>
              Expand
            </Button>
            <Text as="span" variant="bodySm" tone="subdued">
              Showing 1-{Math.min(topCitationDomains.length, 20)} of{" "}
              {topCitationDomains.length}{" "}
              {topCitationDomains.length === 1 ? "domain" : "domains"}
            </Text>
          </InlineStack>
        </div>
      </Card>
    </BlockStack>
  );
}
