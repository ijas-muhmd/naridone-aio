import {
  Card,
  BlockStack,
  Box,
  Layout,
  EmptyState,
  Toast,
  useIndexResourceState,
} from "@shopify/polaris";
import {
  PlayIcon,
  GlobeIcon,
  NoteIcon,
  PlusIcon,
  ViewIcon,
} from "@shopify/polaris-icons";
import { useState, useMemo, useCallback, useEffect, useRef } from "react";
import { ViewConfigButton } from "./ViewConfigButton";
import { TrackingSummaryCards } from "./tracking/TrackingSummaryCards";
import { PromptIndexTable } from "./tracking/PromptIndexTable";
import { PromptGroup } from "./tracking/PromptGroup";
import { TrackingModals } from "./tracking/TrackingModals";

export function MonitorTracking({
  prompts,
  onAddPrompt,
  onAcceptSuggestion,
  onDismissSuggestion,
  navigate,
  stats,
  watchlistSummary,
  onDeletePrompts,
  onGenerateSuggestions,
  isGeneratingSuggestions,
  onSubmit,
  onGroupByTopic,
  onEditPrompt,
  onToggleStatus,
  planLimits,
  sentimentTrend,
  locationStats,
  switchToTab,
  hasSuggestedPrompts,
}: {
  planLimits?: { prompts: number };
  prompts: any[];
  onAddPrompt: () => void;
  onAcceptSuggestion?: (id: string) => void;
  onDismissSuggestion?: (id: string) => void;
  navigate: any;
  stats?: { totalPrompts: number; avgSentiment: number };
  watchlistSummary?: { total: number; high: number };
  onDeletePrompts?: (promptIds: string[]) => void;
  onGenerateSuggestions?: () => void;
  isGeneratingSuggestions?: boolean;
  onSubmit?: (formData: FormData) => void;
  onGroupByTopic?: (promptIds: string[]) => void;
  onEditPrompt?: (prompt: any) => void;
  onToggleStatus?: (id: string, currentStatus: string) => void;
  sentimentTrend?: { date: string; value: number }[];
  locationStats?: { location: string; count: number }[];
  switchToTab?: number | null;
  hasSuggestedPrompts?: boolean;
}) {
  const [viewMode, setViewMode] = useState<"list" | "grouped">("list");
  const [selectedTab, setSelectedTab] = useState(0);
  const prevSwitchToTabRef = useRef<number | null | undefined>(switchToTab);

  // Auto-switch tab when switchToTab prop changes (e.g., after generating suggestions)
  useEffect(() => {
    if (
      switchToTab !== null &&
      switchToTab !== undefined &&
      switchToTab !== prevSwitchToTabRef.current
    ) {
      setSelectedTab(switchToTab);
      prevSwitchToTabRef.current = switchToTab;
    }
  }, [switchToTab]);

  const tabs = [
    {
      id: "active-prompts",
      content: "Active Prompts",
      panelID: "active-prompts-content",
    },
    {
      id: "suggested-prompts",
      content: "Suggested",
      panelID: "suggested-prompts-content",
    },
    {
      id: "inactive-prompts",
      content: "Inactive",
      panelID: "inactive-prompts-content",
    },
  ];

  const filteredPrompts = useMemo(() => {
    return prompts.filter((prompt) => {
      // Tab semantics:
      // - Active Prompts: ACTIVE only
      // - Suggested: suggestions only
      // - Inactive: inactive only
      if (selectedTab === 0) return prompt.status === "ACTIVE";
      if (selectedTab === 1) return prompt.status === "SUGGESTED";
      if (selectedTab === 2) return prompt.status === "INACTIVE";
      return true;
    });
  }, [prompts, selectedTab]);

  // Use prop value from parent (computed from fresh tabData) - always provided
  const hasSuggestedPromptsValue = hasSuggestedPrompts ?? false;

  const {
    selectedResources,
    allResourcesSelected,
    handleSelectionChange,
    clearSelection,
  } = useIndexResourceState(filteredPrompts);
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [deletePromptIds, setDeletePromptIds] = useState<string[]>([]);
  const [isDeleting, setIsDeleting] = useState(false);
  const [dismissModalOpen, setDismissModalOpen] = useState(false);
  const [dismissPromptId, setDismissPromptId] = useState<string | null>(null);
  const [isDismissing, setIsDismissing] = useState(false);
  const [acceptingPromptId, setAcceptingPromptId] = useState<string | null>(
    null,
  );
  const [toastContent, setToastContent] = useState<string | null>(null);
  const [toggleStatusModalOpen, setToggleStatusModalOpen] = useState(false);
  const [toggleStatusPromptId, setToggleStatusPromptId] = useState<
    string | null
  >(null);
  const [toggleStatusCurrentStatus, setToggleStatusCurrentStatus] = useState<
    string | null
  >(null);
  const [isTogglingStatus, setIsTogglingStatus] = useState(false);

  // Group prompts for Grouped View
  const groupedPrompts = useMemo(() => {
    const groups: Record<string, any[]> = {};
    filteredPrompts.forEach((p) => {
      const topic =
        p.topic ||
        (typeof p.tags === "string"
          ? p.tags.split(",")[0]
          : Array.isArray(p.tags)
            ? p.tags[0]
            : null) ||
        "General";
      if (!groups[topic]) groups[topic] = [];
      groups[topic].push(p);
    });
    return groups;
  }, [filteredPrompts]);

  const resourceName = { singular: "prompt", plural: "prompts" };

  // Open delete modal
  const openDeleteModal = useCallback((promptIds: string[]) => {
    setDeletePromptIds(promptIds);
    setDeleteModalOpen(true);
  }, []);

  // Close delete modal
  const closeDeleteModal = useCallback(() => {
    if (!isDeleting) {
      setDeleteModalOpen(false);
      setDeletePromptIds([]);
    }
  }, [isDeleting]);

  // Handle modal close - prevent closing while deleting
  const handleModalClose = useCallback(() => {
    if (!isDeleting) {
      closeDeleteModal();
    }
  }, [isDeleting, closeDeleteModal]);

  // Handle delete confirmation
  const handleDeleteConfirm = useCallback(async () => {
    if (!onDeletePrompts || deletePromptIds.length === 0 || isDeleting) return;

    setIsDeleting(true);
    try {
      // Call the delete function - it might be sync (Remix submit) or async
      const result = onDeletePrompts(deletePromptIds) as any;

      // If it returns a promise, wait for it
      if (result != null && typeof result === "object" && "then" in result) {
        await result;
      } else {
        // For sync operations (like Remix submit), wait for revalidation
        // Wait longer to ensure the action completes and data updates
        await new Promise((resolve) => setTimeout(resolve, 2000));
      }

      // Don't close modal here - let useEffect handle it when prompts are actually removed
      // This ensures we wait for the actual data update
    } catch (error) {
      console.error("Error deleting prompts:", error);
      setIsDeleting(false);
      // Keep modal open on error so user can retry or cancel
    }
    // Note: Modal closing is handled by useEffect below when prompts are removed
  }, [onDeletePrompts, deletePromptIds, isDeleting]);

  // Watch for prompts to be removed and close modal when they're gone
  useEffect(() => {
    if (isDeleting && deletePromptIds.length > 0) {
      // Check if all the prompts to be deleted are no longer in the list
      // Use 'prompts' instead of 'filteredPrompts' since deleted prompts might move to a different tab
      const allDeleted = deletePromptIds.every(
        (id: string) => !prompts.some((p: any) => p.id === id),
      );
      if (allDeleted) {
        // All prompts have been deleted, close the modal
        clearSelection();
        setDeleteModalOpen(false);
        setDeletePromptIds([]);
        setIsDeleting(false);
      }
    }
  }, [prompts, isDeleting, deletePromptIds, clearSelection]);

  // Close dismiss modal
  const closeDismissModal = useCallback(() => {
    if (!isDismissing) {
      setDismissModalOpen(false);
      setDismissPromptId(null);
    }
  }, [isDismissing]);

  // Handle dismiss modal close - prevent closing while dismissing
  const handleDismissModalClose = useCallback(() => {
    if (!isDismissing) {
      closeDismissModal();
    }
  }, [isDismissing, closeDismissModal]);

  // Handle dismiss confirmation
  const handleDismissConfirm = useCallback(async () => {
    if (!onDismissSuggestion || !dismissPromptId || isDismissing) return;

    setIsDismissing(true);
    try {
      // Call the dismiss function - it might be sync (Remix submit) or async
      const result = onDismissSuggestion(dismissPromptId) as any;

      // If it returns a promise, wait for it
      if (result != null && typeof result === "object" && "then" in result) {
        await result;
      } else {
        // For sync operations (like Remix submit), wait for revalidation
        // Wait longer to ensure the action completes and data updates
        await new Promise((resolve) => setTimeout(resolve, 2000));
      }

      // Don't close modal here - let useEffect handle it when prompt is actually removed
      // This ensures we wait for the actual data update
    } catch (error) {
      console.error("Error dismissing suggestion:", error);
      setIsDismissing(false);
      // Keep modal open on error so user can retry or cancel
    }
    // Note: Modal closing is handled by useEffect below when prompt is removed
  }, [onDismissSuggestion, dismissPromptId, isDismissing]);

  // Watch for prompt to be removed and close modal when it's gone
  useEffect(() => {
    if (isDismissing && dismissPromptId) {
      // Check if the prompt is no longer in the list (was dismissed)
      // Use 'prompts' instead of 'filteredPrompts' since dismissed prompts are removed
      const promptStillExists = prompts.some(
        (p: any) => p.id === dismissPromptId && p.status === "SUGGESTED",
      );
      if (!promptStillExists) {
        // Prompt has been dismissed, close the modal
        setDismissModalOpen(false);
        setDismissPromptId(null);
        setIsDismissing(false);
      }
    }
  }, [prompts, isDismissing, dismissPromptId]);

  // Open toggle status modal
  const openToggleStatusModal = useCallback(
    (promptId: string, currentStatus: string) => {
      setToggleStatusPromptId(promptId);
      setToggleStatusCurrentStatus(currentStatus);
      setToggleStatusModalOpen(true);
    },
    [],
  );

  // Close toggle status modal
  const closeToggleStatusModal = useCallback(() => {
    if (!isTogglingStatus) {
      setToggleStatusModalOpen(false);
      setToggleStatusPromptId(null);
      setToggleStatusCurrentStatus(null);
    }
  }, [isTogglingStatus]);

  // Handle modal close - prevent closing while toggling
  const handleToggleStatusModalClose = useCallback(() => {
    if (!isTogglingStatus) {
      closeToggleStatusModal();
    }
  }, [isTogglingStatus, closeToggleStatusModal]);

  // Handle toggle status confirmation
  const handleToggleStatusConfirm = useCallback(async () => {
    if (
      !onToggleStatus ||
      !toggleStatusPromptId ||
      !toggleStatusCurrentStatus ||
      isTogglingStatus
    )
      return;

    setIsTogglingStatus(true);
    try {
      // Call the toggle function - it might be sync (Remix submit) or async
      const result = onToggleStatus(
        toggleStatusPromptId,
        toggleStatusCurrentStatus,
      ) as any;

      // If it returns a promise, wait for it
      if (result != null && typeof result === "object" && "then" in result) {
        await result;
      } else {
        // For sync operations (like Remix submit), wait for revalidation
        // Wait longer to ensure the action completes and data updates
        await new Promise((resolve) => setTimeout(resolve, 2000));
      }

      // Don't close modal here - let useEffect handle it when status actually changes
      // This ensures we wait for the actual data update
    } catch (error) {
      console.error("Error toggling prompt status:", error);
      setIsTogglingStatus(false);
      // Keep modal open on error so user can retry or cancel
    }
    // Note: Modal closing is handled by useEffect below when status changes
  }, [
    onToggleStatus,
    toggleStatusPromptId,
    toggleStatusCurrentStatus,
    isTogglingStatus,
  ]);

  // Watch for status change and close modal when it happens
  useEffect(() => {
    if (isTogglingStatus && toggleStatusPromptId && toggleStatusCurrentStatus) {
      const expectedNewStatus =
        toggleStatusCurrentStatus === "ACTIVE" ? "INACTIVE" : "ACTIVE";
      // Check if the prompt status has changed
      const prompt = prompts.find((p: any) => p.id === toggleStatusPromptId);
      if (prompt && prompt.status === expectedNewStatus) {
        // Status has changed, close the modal
        setToggleStatusModalOpen(false);
        setToggleStatusPromptId(null);
        setToggleStatusCurrentStatus(null);
        setIsTogglingStatus(false);
      }
    }
  }, [
    prompts,
    isTogglingStatus,
    toggleStatusPromptId,
    toggleStatusCurrentStatus,
  ]);

  // Reset acceptingPromptId when prompts list changes (action completed)
  useEffect(() => {
    if (acceptingPromptId) {
      // Check if the prompt is no longer in the list (was accepted) or still there
      const promptStillExists = filteredPrompts.some(
        (p: any) => p.id === acceptingPromptId && p.status === "SUGGESTED",
      );
      if (!promptStillExists) {
        // Prompt was accepted or removed, reset loading state
        setAcceptingPromptId(null);
      }
    }
  }, [filteredPrompts, acceptingPromptId]);

  // Bulk action handlers
  const handleDeletePrompts = useCallback(() => {
    if (onDeletePrompts && selectedResources.length > 0) {
      openDeleteModal(selectedResources);
    }
  }, [onDeletePrompts, selectedResources, openDeleteModal]);

  const promotedBulkActions =
    selectedResources.length > 0 && onDeletePrompts
      ? [
          {
            content: "Delete prompts",
            onAction: handleDeletePrompts,
            destructive: true,
          },
        ]
      : undefined;

  return (
    <BlockStack gap="600">
      {/* Summary Cards */}
      {prompts.length > 0 && (
        <TrackingSummaryCards
          prompts={prompts}
          stats={stats}
          planLimits={planLimits}
          sentimentTrend={sentimentTrend || []}
          locationStats={locationStats || []}
        />
      )}

      <Box padding="0">
        <Layout>
          <Layout.Section>
            {/* View Mode Toggle and Tabs */}
            <div
              style={{
                marginBottom: "16px",
                display: "flex",
                alignItems: "center",
              }}
            >
              <ViewConfigButton
                label={viewMode === "list" ? "Table view" : "Grouped view"}
                icon={ViewIcon}
                options={[
                  { value: "list", label: "List", icon: NoteIcon },
                  { value: "grouped", label: "Grouped", icon: GlobeIcon },
                ]}
                selectedValue={viewMode}
                onSelect={(value: string) =>
                  setViewMode(value as "list" | "grouped")
                }
              />
              <div
                style={{
                  marginLeft: "auto",
                  display: "flex",
                  backgroundColor: "#ffffff",
                  borderRadius: "8px",
                  padding: "4px",
                  boxShadow: "0 1px 3px rgba(0, 0, 0, 0.1)",
                  gap: "0",
                }}
              >
                {tabs.map((tab, index) => {
                  const isActive = selectedTab === index;
                  const isFirst = index === 0;
                  const isLast = index === tabs.length - 1;

                  return (
                    <button
                      key={tab.id}
                      onClick={() => setSelectedTab(index)}
                      style={{
                        padding: "8px 16px",
                        border: "none",
                        borderLeft: index > 0 ? "none" : "none",
                        borderRight: "none",
                        borderTop: "none",
                        borderBottom: "none",
                        borderRadius: isFirst
                          ? "6px 0 0 6px"
                          : isLast
                            ? "0 6px 6px 0"
                            : "0",
                        backgroundColor: isActive ? "#f3f4f6" : "transparent",
                        color: isActive ? "#1f2937" : "#6b7280",
                        fontSize: "14px",
                        fontWeight: isActive ? 500 : 400,
                        cursor: "pointer",
                        transition: "all 0.2s ease",
                        fontFamily:
                          '-apple-system, BlinkMacSystemFont, "San Francisco", "Segoe UI", Roboto, "Helvetica Neue", sans-serif',
                        outline: "none",
                        whiteSpace: "nowrap",
                        boxShadow: "none",
                      }}
                      onMouseEnter={(e) => {
                        if (!isActive) {
                          e.currentTarget.style.backgroundColor = "#f9fafb";
                        }
                      }}
                      onMouseLeave={(e) => {
                        if (!isActive) {
                          e.currentTarget.style.backgroundColor = "transparent";
                        }
                      }}
                    >
                      {tab.content}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Table */}
            {filteredPrompts.length > 0 ? (
              viewMode === "list" ? (
                <Card padding="0">
                  <PromptIndexTable
                    prompts={filteredPrompts}
                    resourceName={resourceName}
                    navigate={navigate}
                    onDeletePrompts={openDeleteModal}
                    onAcceptSuggestion={(id) => {
                      if (onAcceptSuggestion) {
                        setAcceptingPromptId(id);
                        onAcceptSuggestion(id);
                      }
                    }}
                    onDismissSuggestion={(id) => {
                      setDismissPromptId(id);
                      setDismissModalOpen(true);
                    }}
                    onEditPrompt={onEditPrompt}
                    onToggleStatus={openToggleStatusModal}
                    // Pass selection state
                    selectedResources={selectedResources}
                    allResourcesSelected={allResourcesSelected}
                    handleSelectionChange={handleSelectionChange}
                    promotedBulkActions={promotedBulkActions}
                  />
                </Card>
              ) : (
                <BlockStack gap="400">
                  {Object.keys(groupedPrompts).map((topic) => (
                    <PromptGroup
                      key={topic}
                      title={topic}
                      prompts={groupedPrompts[topic]}
                      resourceName={resourceName}
                      navigate={navigate}
                      onDeletePrompts={openDeleteModal}
                      onAcceptSuggestion={(id) => {
                        if (onAcceptSuggestion) {
                          setAcceptingPromptId(id);
                          onAcceptSuggestion(id);
                        }
                      }}
                      onDismissSuggestion={(id) => {
                        setDismissPromptId(id);
                        setDismissModalOpen(true);
                      }}
                      onEditPrompt={onEditPrompt}
                      onToggleStatus={openToggleStatusModal}
                    />
                  ))}
                </BlockStack>
              )
            ) : (
              <Card>
                {selectedTab === 2 ? (
                  <EmptyState
                    heading="No inactive prompts"
                    image="https://cdn.shopify.com/s/files/1/0262/4071/2726/files/emptystate-files.png"
                  >
                    <p>
                      All your prompts are currently active and being tracked.
                    </p>
                  </EmptyState>
                ) : (
                  <EmptyState
                    heading={
                      selectedTab === 1
                        ? "Generate AI-Powered Prompts"
                        : "Start tracking your brand"
                    }
                    action={
                      selectedTab === 1
                        ? {
                            content: "Generate Prompts from Products",
                            icon: PlayIcon,
                            onAction: onGenerateSuggestions,
                            loading: isGeneratingSuggestions,
                          }
                        : {
                            content: "Create prompt",
                            icon: PlusIcon,
                            onAction: onAddPrompt,
                          }
                    }
                    secondaryAction={
                      selectedTab === 0
                        ? hasSuggestedPromptsValue
                          ? {
                              content: `View ${prompts.filter((p: any) => p.status === "SUGGESTED").length} Suggestion${prompts.filter((p: any) => p.status === "SUGGESTED").length !== 1 ? "s" : ""}`,
                              icon: ViewIcon,
                              onAction: () => setSelectedTab(1),
                            }
                          : {
                              content: "Generate Prompts from Products",
                              icon: PlayIcon,
                              onAction: onGenerateSuggestions,
                              loading: isGeneratingSuggestions,
                            }
                        : undefined
                    }
                    image="https://cdn.shopify.com/s/files/1/0262/4071/2726/files/emptystate-files.png"
                  >
                    <p>
                      {selectedTab === 1
                        ? "Let Copilot analyze your shop's products and brand details to automatically generate high-value search prompts for tracking."
                        : hasSuggestedPromptsValue
                          ? `You have ${prompts.filter((p: any) => p.status === "SUGGESTED").length} suggestion${prompts.filter((p: any) => p.status === "SUGGESTED").length !== 1 ? "s" : ""} waiting for review. Check the Suggested tab to accept or dismiss them.`
                          : "Create prompts to track how AI models perceive your brand vs competitors."}
                    </p>
                  </EmptyState>
                )}
              </Card>
            )}
          </Layout.Section>
        </Layout>
      </Box>

      <TrackingModals
        deleteModalOpen={deleteModalOpen}
        closeDeleteModal={handleModalClose}
        handleDeleteConfirm={handleDeleteConfirm}
        isDeleting={isDeleting}
        deletePromptIds={deletePromptIds}
        dismissModalOpen={dismissModalOpen}
        closeDismissModal={handleDismissModalClose}
        handleDismissConfirm={handleDismissConfirm}
        isDismissing={isDismissing}
        toggleStatusModalOpen={toggleStatusModalOpen}
        closeToggleStatusModal={handleToggleStatusModalClose}
        handleToggleStatusConfirm={handleToggleStatusConfirm}
        isTogglingStatus={isTogglingStatus}
        toggleStatusCurrentStatus={toggleStatusCurrentStatus}
      />

      {toastContent && (
        <Toast content={toastContent} onDismiss={() => setToastContent(null)} />
      )}
    </BlockStack>
  );
}
