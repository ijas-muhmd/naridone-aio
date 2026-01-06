import { IndexTable, Text, Icon, Badge, InlineStack } from "@shopify/polaris";
import {
  ExternalIcon,
  ChevronUpIcon,
  ChevronDownIcon,
} from "@shopify/polaris-icons";
import React from "react";
import { ExpandedModalTable } from "../ExpandedModalTable";
import { DomainIcon } from "./DomainIcon";
import { CategoryBadge } from "./CategoryBadge";
import { MentionedStatus } from "./MentionedStatus";

interface CitationModalsProps {
  isRankModalOpen: boolean;
  toggleRankModal: () => void;
  topCitationDomains: any[];
  expandedDomains: Set<string>;
  toggleDomain: (domain: string) => void;
  isPagesModalOpen: boolean;
  togglePagesModal: () => void;
  topCitationPages: any[];
  selectedDomainForDetails: string | null;
  closeDomainDetails: () => void;
  selectedDomainData: any;
}

export const CitationModals = ({
  isRankModalOpen,
  toggleRankModal,
  topCitationDomains,
  expandedDomains,
  toggleDomain,
  isPagesModalOpen,
  togglePagesModal,
  topCitationPages,
  selectedDomainForDetails,
  closeDomainDetails,
  selectedDomainData,
}: CitationModalsProps) => {
  return (
    <>
      {/* Expanded Modal for Citation Rank */}
      <ExpandedModalTable
        open={isRankModalOpen}
        onClose={toggleRankModal}
        title="Citation Rank"
        data={topCitationDomains}
        resourceName={{ singular: "domain", plural: "domains" }}
        columns={[
          { title: "Domain" },
          { title: "Share", alignment: "end" },
          { title: "", alignment: "end" },
        ]}
        renderRow={(item: any, index: number) => {
          const isExpanded = expandedDomains.has(item.domain);
          return (
            <>
              <IndexTable.Row
                id={item.domain}
                key={item.domain}
                position={index}
                onClick={() => toggleDomain(item.domain)}
              >
                <IndexTable.Cell>
                  <InlineStack gap="200" blockAlign="center">
                    <Text
                      as="span"
                      variant="bodySm"
                      fontWeight="medium"
                      tone="subdued"
                    >
                      {item.rank}.
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
                    {item.subdomains > 0 && (
                      <div style={{ display: "flex", alignItems: "center" }}>
                        <InlineStack gap="050" blockAlign="center">
                          <Text as="span" variant="bodySm" tone="subdued">
                            {item.subdomains}{" "}
                            {item.subdomains === 1 ? "page" : "pages"}
                          </Text>
                          <Icon
                            source={isExpanded ? ChevronUpIcon : ChevronDownIcon}
                            tone="subdued"
                          />
                        </InlineStack>
                      </div>
                    )}
                    {item.category === "Owned" && (
                      <Badge tone="success">Owned</Badge>
                    )}
                  </InlineStack>
                </IndexTable.Cell>
                <IndexTable.Cell>
                  <div style={{ textAlign: "right" }}>
                    <Text as="span" variant="bodyMd" fontWeight="medium">
                      {item.share}%
                    </Text>
                  </div>
                </IndexTable.Cell>
                <IndexTable.Cell>
                  <div style={{ textAlign: "right" }}>
                    <Text as="span" variant="bodyMd" tone="subdued">
                      -
                    </Text>
                  </div>
                </IndexTable.Cell>
              </IndexTable.Row>
              {isExpanded &&
                item.pages &&
                item.pages.map((page: any, pIndex: number) => {
                  const fullUrl = page.url.startsWith("http")
                    ? page.url
                    : `https://${page.url}`;
                  return (
                    <IndexTable.Row
                      id={`${item.domain}-page-${pIndex}`}
                      key={`${item.domain}-page-${pIndex}`}
                      position={index}
                      tone="subdued"
                    >
                      <IndexTable.Cell>
                        <div
                          style={{
                            paddingLeft: "48px",
                            display: "flex",
                            alignItems: "center",
                            gap: "8px",
                          }}
                        >
                          <div
                            style={{
                              width: "20px",
                              height: "20px",
                              borderRadius: "4px",
                              backgroundColor: "#f1f2f4",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              color: "#6d7175",
                              fontSize: "11px",
                              fontWeight: 600,
                            }}
                          >
                            #{pIndex + 1}
                          </div>
                          <Text
                            as="span"
                            variant="bodySm"
                            tone="subdued"
                            truncate
                          >
                            {page.url}
                          </Text>
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              window.open(fullUrl, "_blank");
                            }}
                            style={{
                              background: "none",
                              border: "none",
                              cursor: "pointer",
                              padding: "2px",
                              display: "flex",
                              alignItems: "center",
                            }}
                            title="Visit page"
                          >
                            <Icon source={ExternalIcon} tone="subdued" />
                          </button>
                        </div>
                      </IndexTable.Cell>
                      <IndexTable.Cell>
                        <div style={{ textAlign: "right" }}>
                          <Text as="span" variant="bodySm" tone="subdued">
                            {page.share}%
                          </Text>
                        </div>
                      </IndexTable.Cell>
                      <IndexTable.Cell>
                        {/* Empty cell for alignment */}
                      </IndexTable.Cell>
                    </IndexTable.Row>
                  );
                })}
            </>
          );
        }}
      />

      {/* Expanded Modal for Top Citation Pages */}
      <ExpandedModalTable
        open={isPagesModalOpen}
        onClose={togglePagesModal}
        title="Top Citation Pages"
        data={topCitationPages}
        resourceName={{ singular: "page", plural: "pages" }}
        columns={[
          { title: "Rank" },
          { title: "Page" },
          { title: "Category" },
          { title: "Mentioned" },
          { title: "Share", alignment: "end" },
        ]}
        renderRow={(item: any, index: number) => {
          const fullUrl = item.page.startsWith("http")
            ? item.page
            : `https://${item.page}`;
          return (
            <IndexTable.Row id={item.page} key={item.page} position={index}>
              <IndexTable.Cell>
                <Text as="span" variant="bodyMd" fontWeight="medium">
                  {item.rank}
                </Text>
              </IndexTable.Cell>
              <IndexTable.Cell>
                <div
                  style={{ display: "flex", alignItems: "center", gap: "8px" }}
                >
                  <DomainIcon
                    iconType={item.iconType}
                    domain={item.domain}
                    iconText={item.iconText}
                    iconColor={item.iconColor}
                  />
                  <div style={{ maxWidth: "300px" }}>
                    <Text as="span" variant="bodyMd" truncate>
                      {item.page}
                    </Text>
                  </div>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      window.open(fullUrl, "_blank");
                    }}
                    style={{
                      background: "none",
                      border: "none",
                      cursor: "pointer",
                      padding: "0",
                      display: "flex",
                      alignItems: "center",
                    }}
                    title="Visit page"
                  >
                    <Icon source={ExternalIcon} tone="subdued" />
                  </button>
                </div>
              </IndexTable.Cell>
              <IndexTable.Cell>
                <CategoryBadge category={item.category} />
              </IndexTable.Cell>
              <IndexTable.Cell>
                <MentionedStatus
                  status={item.mentioned}
                  competitors={item.competitors}
                />
              </IndexTable.Cell>
              <IndexTable.Cell>
                <div
                  style={{
                    textAlign: "right",
                    display: "flex",
                    justifyContent: "flex-end",
                    gap: "4px",
                  }}
                >
                  <Text as="span" variant="bodyMd" fontWeight="medium">
                    {item.share}%
                  </Text>
                  <Text as="span" variant="bodySm" tone="success">
                    +{item.change}%
                  </Text>
                </div>
              </IndexTable.Cell>
            </IndexTable.Row>
          );
        }}
      />

      {/* Domain Details Modal */}
      <ExpandedModalTable
        open={!!selectedDomainForDetails}
        onClose={closeDomainDetails}
        title={`Pages from ${selectedDomainForDetails || ""}`}
        data={selectedDomainData?.pages || []}
        resourceName={{ singular: "page", plural: "pages" }}
        columns={[
          { title: "Rank" },
          { title: "Page" },
          { title: "Mentioned" },
          { title: "Share", alignment: "end" },
        ]}
        renderRow={(item: any, index: number) => {
          const fullUrl = item.url.startsWith("http")
            ? item.url
            : `https://${item.url}`;
          return (
            <IndexTable.Row id={item.url} key={index} position={index}>
              <IndexTable.Cell>
                <div
                  style={{
                    width: "24px",
                    height: "24px",
                    borderRadius: "4px",
                    backgroundColor: "#f1f2f4",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#6d7175",
                    fontSize: "12px",
                    fontWeight: 600,
                  }}
                >
                  #{index + 1}
                </div>
              </IndexTable.Cell>
              <IndexTable.Cell>
                <div
                  style={{ display: "flex", alignItems: "center", gap: "8px" }}
                >
                  <div style={{ maxWidth: "350px" }}>
                    <Text as="span" variant="bodyMd" truncate>
                      {item.url}
                    </Text>
                  </div>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      window.open(fullUrl, "_blank");
                    }}
                    style={{
                      background: "none",
                      border: "none",
                      cursor: "pointer",
                      padding: "2px",
                      display: "flex",
                      alignItems: "center",
                    }}
                    title="Visit page"
                  >
                    <Icon source={ExternalIcon} tone="subdued" />
                  </button>
                </div>
              </IndexTable.Cell>
              <IndexTable.Cell>
                <MentionedStatus
                  status={item.mentioned}
                  competitors={item.competitors}
                />
              </IndexTable.Cell>
              <IndexTable.Cell>
                <div style={{ textAlign: "right" }}>
                  <Text as="span" variant="bodyMd" fontWeight="medium">
                    {item.share}%
                  </Text>
                </div>
              </IndexTable.Cell>
            </IndexTable.Row>
          );
        }}
      />
    </>
  );
};
