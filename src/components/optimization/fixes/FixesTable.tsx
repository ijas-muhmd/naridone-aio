import {
  IndexTable,
  Thumbnail,
  Box,
  BlockStack,
  Tooltip,
  Text,
  Link,
  Badge,
  InlineStack,
  Icon,
  Button,
  useIndexResourceState,
} from "@shopify/polaris";
import {
  ImageIcon,
  InfoIcon,
  CheckIcon,
  RefreshIcon,
  MagicIcon,
  UndoIcon,
  EditIcon,
} from "@shopify/polaris-icons";
import React from "react";
import { getDisplayName } from "./utils";

interface FixesTableProps {
  fixes: any[];
  productMap: Record<
    string,
    { title: string; handle: string; image: string | null }
  >;
  selectedTab: number;
  resourceName: { singular: string; plural: string };
  isLoading: boolean;
  loadingId: string | null;
  handleViewDetails: (reason: string) => void;
  handleViewReport: (report: any) => void;
  handleGenerate: (id: string) => void;
  handleReviewApply: (id: string) => void;
  handleUndo: (id: string) => void;
  // Selection
  selectedResources: string[];
  allResourcesSelected: boolean;
  handleSelectionChange: any;
  promotedBulkActions?: any[];
}

export const FixesTable = ({
  fixes,
  productMap,
  selectedTab,
  resourceName,
  isLoading,
  loadingId,
  handleViewDetails,
  handleViewReport,
  handleGenerate,
  handleReviewApply,
  handleUndo,
  selectedResources,
  allResourcesSelected,
  handleSelectionChange,
  promotedBulkActions,
}: FixesTableProps) => {
  const rowMarkup = fixes.map(
    (
      {
        id,
        productId,
        type,
        reason,
        priority,
        status,
        suggestedValue,
        diff,
      }: {
        id: string;
        productId: string | null;
        type: string;
        reason: string | null;
        priority: string;
        status: string;
        suggestedValue: string | null;
        diff: any;
      },
      index: number,
    ) => {
      const product = productId ? productMap[productId] : null;
      // const fullFix = fixes.find((f: any) => f.id === id); // Already have it via destructuring? No, destructuring creates local vars.
      // Wait, I need fullFix for outcome status check.
      // Since 'fixes' is passed, I can find it, OR I can trust 'status' passed in row if it's updated.
      // But 'outcome' is a nested object.
      // Let's assume 'fixes' prop contains full objects.
      const fullFix = fixes[index]; // fixes map index matches.

      return (
        <IndexTable.Row
          id={id}
          key={id}
          position={index}
          selected={selectedResources.includes(id)}
        >
          <IndexTable.Cell>
            <InlineStack gap="300" blockAlign="center" wrap={false}>
              {product?.image ? (
                <Thumbnail
                  source={product.image}
                  alt={product.title}
                  size="small"
                />
              ) : (
                <Thumbnail source={ImageIcon} alt="No Image" size="small" />
              )}
              <Box maxWidth="300px">
                <BlockStack gap="050">
                  <Tooltip content={product?.title || "Unknown Product"}>
                    <Text variant="bodySm" fontWeight="bold" as="span" truncate>
                      {productId ? (
                        <Link
                          url={`shopify:admin/products/${productId.split("/").pop()}`}
                          target="_top"
                        >
                          {product?.title || "Unknown Product"}
                        </Link>
                      ) : (
                        "Global Issue"
                      )}
                    </Text>
                  </Tooltip>
                  {product?.handle && (
                    <Text variant="bodyXs" tone="subdued" as="span" truncate>
                      {product.handle}
                    </Text>
                  )}
                </BlockStack>
              </Box>
            </InlineStack>
          </IndexTable.Cell>
          <IndexTable.Cell>
            <div style={{ minWidth: "160px" }}>
              {selectedTab === 3 ? (
                <BlockStack gap="200" inlineAlign="start">
                  <Badge tone="info">Objective: Increase Visibility</Badge>
                  <Badge tone="warning">Status: Collecting Data</Badge>
                </BlockStack>
              ) : (
                <BlockStack gap="200">
                  <InlineStack align="start" gap="200" blockAlign="center">
                    <Badge
                      tone={type === "MISSING_GTIN" ? "critical" : "attention"}
                    >
                      {getDisplayName(type)}
                    </Badge>
                    <div
                      onClick={(e) => {
                        e.stopPropagation();
                        reason && handleViewDetails(reason);
                      }}
                      style={{ cursor: "pointer", display: "flex" }}
                    >
                      <Icon source={InfoIcon} tone="subdued" />
                    </div>
                  </InlineStack>
                  <div>
                    {priority === "HIGH" ? (
                      <Badge tone="critical">High Impact</Badge>
                    ) : priority === "MEDIUM" ? (
                      <Badge tone="warning">Medium Impact</Badge>
                    ) : (
                      <Badge tone="info">Low Impact</Badge>
                    )}
                  </div>
                </BlockStack>
              )}
            </div>
          </IndexTable.Cell>
          <IndexTable.Cell>
            {selectedTab === 3 ? (
              <div
                style={{
                  cursor: "default",
                  textAlign: "right",
                  width: "100%",
                  maxWidth: "300px",
                }}
              >
                <BlockStack gap="100" inlineAlign="end">
                  <InlineStack gap="200" align="end">
                    <Text variant="bodySm" as="span" fontWeight="bold">
                      Change Applied
                    </Text>
                    <Icon source={CheckIcon} tone="success" />
                  </InlineStack>
                  <Tooltip
                    content="Measuring traffic and conversion changes. Check back in 24-48h for full impact report."
                    preferredPosition="above"
                  >
                    <Text as="span" variant="bodyXs" tone="subdued" truncate>
                      Measuring traffic & conversion...
                    </Text>
                  </Tooltip>
                  {(diff as any)?.invisible_seo && (
                    <Text as="span" variant="bodyXs" tone="subdued">
                      + SEO Optimized
                    </Text>
                  )}
                </BlockStack>
              </div>
            ) : (
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-end",
                  width: "100%",
                  maxWidth: "300px",
                }}
              >
                <BlockStack gap="200" inlineAlign="end">
                  {(() => {
                    // 1. Resolved State
                    if (status === "RESOLVED") {
                      return (
                        <div
                          style={{
                            cursor: "default",
                            textAlign: "right",
                          }}
                        >
                          <BlockStack gap="050" inlineAlign="end">
                            {/* Verification Status Badge */}
                            {fullFix?.outcome?.status ===
                            "SCHEDULED_VERIFICATION" ? (
                              <Badge tone="attention" icon={RefreshIcon}>
                                Verifying (Pending Crawl)
                              </Badge>
                            ) : fullFix?.outcome?.status ===
                              "VERIFICATION_DISPATCHED" ? (
                              <Badge tone="info" icon={MagicIcon}>
                                Checking Results...
                              </Badge>
                            ) : (
                              <Badge tone="success" icon={CheckIcon}>
                                Resolved
                              </Badge>
                            )}

                            {(diff as any)?.invisible_seo && (
                              <Box paddingBlockStart="100">
                                <Text as="span" variant="bodyXs" tone="subdued">
                                  + SEO Optimized
                                </Text>
                              </Box>
                            )}
                            <Button
                              variant="plain"
                              icon={UndoIcon}
                              onClick={() => {
                                handleReviewApply(id);
                              }}
                              disabled={isLoading}
                            >
                              Undo
                            </Button>
                          </BlockStack>
                        </div>
                      );
                    }

                    // 2. Auto-Failed State (Retry)
                    if (status === "AUTO_FAILED") {
                      return (
                        <Button
                          size="micro"
                          variant="plain"
                          tone="critical"
                          onClick={() => handleGenerate(id)}
                          loading={isLoading && loadingId === id}
                        >
                          Retry
                        </Button>
                      );
                    }

                    // 3. AI Suggestion Available (View & Apply)
                    if (suggestedValue) {
                      return (
                        <InlineStack align="end">
                          <Button
                            size="micro"
                            variant="primary"
                            icon={CheckIcon}
                            onClick={() => handleReviewApply(id)}
                            loading={isLoading && loadingId === id}
                          >
                            View & Apply
                          </Button>
                        </InlineStack>
                      );
                    }

                    // 4. Auto-Fixable Types (View & Apply - triggers generation/modal)
                    const AUTO_FIXABLE_TYPES = [
                      "WEAK_DESCRIPTION",
                      "UNSTRUCTURED_SPECS",
                      "NO_FAQ",
                      "AMBIGUOUS_TITLE",
                      "WEAK_TITLE",
                      "MISSING_SEO_TITLE",
                      "MISSING_ALT_TEXT",
                      "ADD_ATTRIBUTES",
                      "RISK_DISCLAIMER",
                      "SEASONAL_UPDATE",
                      "MISSING_AI_FAQ",
                      "COMPETITOR_GAP",
                      "NEGATIVE_SENTIMENT",
                      "MISSED_TREND",
                      "TRUST_SIGNAL_WEAK",
                      "BRAND_IDENTITY_GENERIC",
                    ];
                    if (
                      AUTO_FIXABLE_TYPES.includes(type) &&
                      ["PENDING", "FAILED", "SUGGESTED"].includes(status)
                    ) {
                      return (
                        <InlineStack align="end">
                          <Button
                            size="micro"
                            variant="primary"
                            icon={MagicIcon}
                            onClick={() => handleReviewApply(id)}
                            loading={isLoading && loadingId === id}
                          >
                            View & Apply
                          </Button>
                        </InlineStack>
                      );
                    }

                    // 5. Manual Action Required (Missing Image/GTIN)
                    if (
                      type === "MISSING_IMAGE" ||
                      type === "MISSING_GTIN" ||
                      type === "MISSING_VENDOR"
                    ) {
                      if (!productId) {
                        return null;
                      }

                      return (
                        <InlineStack align="end">
                          <Button
                            size="micro"
                            variant="plain"
                            url={`shopify:admin/products/${productId.split("/").pop()}`}
                            target="_top"
                            icon={EditIcon}
                          >
                            Edit in Shopify
                          </Button>
                        </InlineStack>
                      );
                    }

                    // Default Pending State (Generate)
                    return (
                      <InlineStack align="end">
                        <Button
                          size="micro"
                          onClick={() => handleGenerate(id)}
                          loading={isLoading && loadingId === id}
                          disabled={isLoading}
                        >
                          Generate Fix
                        </Button>
                      </InlineStack>
                    );
                  })()}
                </BlockStack>
              </div>
            )}
          </IndexTable.Cell>
        </IndexTable.Row>
      );
    },
  );

  return (
    <IndexTable
      resourceName={resourceName}
      itemCount={fixes.length}
      selectedItemsCount={
        allResourcesSelected ? "All" : selectedResources.length
      }
      onSelectionChange={handleSelectionChange}
      headings={[
        { title: "Product" },
        { title: "Issue & Impact" },
        { title: "Suggestion & Action", alignment: "end" },
      ]}
      promotedBulkActions={promotedBulkActions}
    >
      {rowMarkup}
    </IndexTable>
  );
};
