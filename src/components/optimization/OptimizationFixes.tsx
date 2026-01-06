import {
  Page,
  Card,
  BlockStack,
  Button,
  Box,
  EmptyState,
  Banner,
  Tabs,
  useIndexResourceState,
  Toast,
  Pagination,
  CalloutCard,
} from "@shopify/polaris";
import { useNavigate } from "react-router-dom";
import { RefreshIcon } from "@shopify/polaris-icons";
import React, { useState } from "react";
import { FixFilters } from "../FixFilters";
import { OptimizationNav } from "../SubNavs";
import { FixesTable } from "./fixes/FixesTable";
import { FixReviewModal } from "./fixes/FixReviewModal";
import { FixDetailsModal } from "./fixes/FixDetailsModal";

// Mock util since backend is gone
const parsePrismaError = (error: string) => {
  return { message: error, details: "Mock details" };
};

interface OptimizationFixesProps {
  fixes: any[];
  productMap: Record<
    string,
    { title: string; handle: string; image: string | null }
  >;
  selectedTab: number;
  pagination: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
  };
  isLoading: boolean;
  loadingId: string | null;
  actionData?: any;
  generationError: string | null;
  toastContent: string | null;
  onToastDismiss: () => void;
  // Handlers
  onFilterChange: (key: string, value: string) => void;
  onPageChange: (page: number) => void;
  onTabChange: (index: number) => void;
  onScan: () => void;
  onGenerate: (id: string) => void;
  onReviewApply: (fix: any) => void;
  onConfirmApply: (id: string, content: string) => void;
  onUndo: (id: string) => void;
  onBulkApply: (selectedFixes: any[]) => void;
  onBulkDelete: (selectedIds: string[]) => void;
  // Filter state
  filters: {
    status: string;
    type: string;
    priority: string;
    product: string;
  };
  statusFilter?: string;
  typeFilter?: string;
  priorityFilter?: string;
  productFilter?: string;
  productOptions: any[];
  activePlan: string;
  selectedFixId: string | null;
  setSelectedFixId: (id: string | null) => void;
}

export const OptimizationFixes = ({
  fixes,
  productMap,
  selectedTab,
  pagination,
  isLoading,
  loadingId,
  generationError,
  toastContent,
  onToastDismiss,
  onFilterChange,
  onPageChange,
  onTabChange,
  onScan,
  onGenerate,
  onReviewApply,
  onConfirmApply,
  onUndo,
  onBulkApply,
  onBulkDelete,
  filters,
  productOptions,
  activePlan,
  selectedFixId,
  setSelectedFixId,
}: OptimizationFixesProps) => {
  const navigate = useNavigate();
  const [activeModal, setActiveModal] = useState(false);
  const [selectedReason, setSelectedReason] = useState<string | null>(null);
  const [parsedError, setParsedError] = useState<any>(null);
  const [reviewModalActive, setReviewModalActive] = useState(false);

  const rawSelectedFix = fixes.find((f: any) => f.id === selectedFixId);
  const selectedFix = rawSelectedFix
    ? {
        ...rawSelectedFix,
        productTitle:
          rawSelectedFix.productId && productMap[rawSelectedFix.productId]
            ? productMap[rawSelectedFix.productId].title
            : undefined,
        productHandle:
          rawSelectedFix.productId && productMap[rawSelectedFix.productId]
            ? productMap[rawSelectedFix.productId].handle
            : undefined,
      }
    : null;

  const fixLimit = 10;
  const isFreePlan = activePlan === "FREE";
  const visibleFixes = isFreePlan ? fixes.slice(0, fixLimit) : fixes;
  const hiddenCount = fixes.length - visibleFixes.length;

  // Selection state
  const {
    selectedResources,
    allResourcesSelected,
    handleSelectionChange,
    clearSelection,
  } = useIndexResourceState(visibleFixes);

  const tabs = [
    {
      id: "aio-authority",
      content: "AIO & Authority",
      panelID: "aio-authority-content",
    },
    {
      id: "content-seo",
      content: "Content & SEO",
      panelID: "content-seo-content",
    },
    {
      id: "data-quality",
      content: "Data Quality",
      panelID: "data-quality-content",
    },
    { id: "in-review", content: "In Review", panelID: "in-review-content" },
    { id: "all-issues", content: "All Issues", panelID: "all-issues-content" },
    {
      id: "resolved-history",
      content: "Resolved History",
      panelID: "resolved-history-content",
    },
  ];

  const resourceName = {
    singular: "issue",
    plural: "issues",
  };

  const handleViewDetails = (reason: string) => {
    setSelectedReason(reason);
    setParsedError(parsePrismaError(reason));
    setActiveModal(true);
  };

  const handleReviewClick = (id: string) => {
    const fix = fixes.find((f) => f.id === id);
    if (fix) {
      setSelectedFixId(id);
      onReviewApply(fix);
      setReviewModalActive(true);
    }
  };

  const handleConfirmClick = () => {
    if (selectedFix) {
      onConfirmApply(
        selectedFix.id,
        selectedFix.suggestedValue || selectedFix.suggestedContent || "",
      );
    }
    setReviewModalActive(false);
    setSelectedFixId(null);
  };

  const handleUndoClick = (id: string) => {
    onUndo(id);
    setReviewModalActive(false);
  };

  const promotedBulkActions = [
    {
      content: "Apply Fixes",
      onAction: () => {
        const selectedFixesList = fixes.filter((f) =>
          selectedResources.includes(f.id),
        );
        onBulkApply(selectedFixesList);
        clearSelection();
      },
    },
    {
      content: "Delete",
      onAction: () => {
        onBulkDelete(selectedResources);
        clearSelection();
      },
      destructive: true,
    },
  ];

  const onFiltersChangeWrapper = (newFilters: any) => {
    Object.keys(newFilters).forEach((key) => {
      onFilterChange(key, newFilters[key]);
    });
  };

  return (
    <Page
      fullWidth={false}
      title="Improve"
      subtitle="Fix Queue"
      primaryAction={{
        content: "Scan Store",
        onAction: onScan,
        loading: isLoading && !loadingId,
      }}
    >
      <Box padding="0">
        <OptimizationNav />
      </Box>

      <Box paddingBlockStart="400">
        <BlockStack gap="400">
          <FixFilters
            filters={filters}
            onChange={onFiltersChangeWrapper}
            products={productOptions}
          />

          {generationError && (
            <Banner
              tone="critical"
              title="Error generating fix"
              onDismiss={() => {}}
            >
              <p>{generationError}</p>
            </Banner>
          )}

          <Card padding="0">
            <Tabs tabs={tabs} selected={selectedTab} onSelect={onTabChange} />
            {fixes.length > 0 ? (
              <>
                <FixesTable
                  fixes={visibleFixes}
                  productMap={productMap}
                  selectedTab={selectedTab}
                  resourceName={resourceName}
                  isLoading={isLoading}
                  loadingId={loadingId}
                  handleViewDetails={handleViewDetails}
                  handleViewReport={() => {}}
                  handleGenerate={onGenerate}
                  handleReviewApply={handleReviewClick}
                  handleUndo={onUndo}
                  selectedResources={selectedResources}
                  allResourcesSelected={allResourcesSelected}
                  handleSelectionChange={handleSelectionChange}
                  promotedBulkActions={promotedBulkActions}
                />
                {isFreePlan && hiddenCount > 0 && (
                  <Box padding="400" background="bg-surface-secondary">
                    <CalloutCard
                      title={`Unlock ${hiddenCount} more fixes`}
                      illustration=""
                      primaryAction={{
                        content: "Upgrade Plan",
                        onAction: () => navigate("/app/pricing"),
                      }}
                    >
                      <p>
                        You have hit the limit of fixes visible on the Free
                        plan. Upgrade to unlock the full queue.
                      </p>
                    </CalloutCard>
                  </Box>
                )}
              </>
            ) : (
              <EmptyState
                heading="No issues found"
                image="https://cdn.shopify.com/s/files/1/0262/4071/2726/files/emptystate-files.png"
              >
                <p>
                  Great job! No issues found matching your current filters. Try
                  running a new scan or changing filters.
                </p>
                <Button
                  icon={RefreshIcon}
                  onClick={onScan}
                  loading={isLoading && !loadingId}
                >
                  Run New Scan
                </Button>
              </EmptyState>
            )}

            {pagination.totalPages > 1 && (
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  padding: "16px",
                  borderTop: "1px solid #e1e3e5",
                }}
              >
                <Pagination
                  hasPrevious={pagination.page > 1}
                  onPrevious={() => onPageChange(pagination.page - 1)}
                  hasNext={pagination.page < pagination.totalPages}
                  onNext={() => onPageChange(pagination.page + 1)}
                />
              </div>
            )}
          </Card>
        </BlockStack>
      </Box>

      <FixReviewModal
        open={reviewModalActive}
        onClose={() => setReviewModalActive(false)}
        selectedFix={selectedFix}
        isLoading={isLoading}
        onConfirm={handleConfirmClick}
        onUndo={handleUndoClick}
      />

      <FixDetailsModal
        open={activeModal}
        onClose={() => setActiveModal(false)}
        selectedReason={selectedReason}
        parsedError={parsedError}
        selectedReport={null}
      />

      {toastContent && (
        <Toast content={toastContent} onDismiss={onToastDismiss} />
      )}
    </Page>
  );
};
