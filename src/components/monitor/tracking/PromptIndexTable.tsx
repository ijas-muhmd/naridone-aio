import {
  IndexTable,
  Text,
  Badge,
  Button,
  InlineStack,
  BlockStack,
  Tooltip,
  Popover,
  ActionList,
  Link,
  useIndexResourceState,
} from "@shopify/polaris";
import { MenuHorizontalIcon, PlusIcon, XIcon } from "@shopify/polaris-icons";
import React, { useState, useCallback } from "react";
import { BrandIcon } from "./BrandIcon";
import { RankBadge } from "./RankBadge";
import { VolumeBars } from "./VolumeBars";
import {
  truncateText,
  getAverageVisibilityFromLatestDate,
  getAverageSentimentFromLatestDate,
  getAverageRankFromLatestDate,
  hasAnyPositionData,
  hasAnySentimentData,
  hasAnyVisibilityData,
} from "./utils";

interface PromptIndexTableProps {
  prompts: any[];
  resourceName: { singular: string; plural: string };
  navigate: any;
  onDeletePrompts?: (promptIds: string[]) => void;
  onAcceptSuggestion?: (id: string) => void;
  onDismissSuggestion?: (id: string) => void;
  onEditPrompt?: (prompt: any) => void;
  onToggleStatus?: (id: string, currentStatus: string) => void;
  // Selection props can be passed in, or managed internally if not provided
  selectedResources?: string[];
  allResourcesSelected?: boolean;
  handleSelectionChange?: any;
  promotedBulkActions?: any[];
}

export const PromptIndexTable = ({
  prompts,
  resourceName,
  navigate,
  onDeletePrompts,
  onAcceptSuggestion,
  onDismissSuggestion,
  onEditPrompt,
  onToggleStatus,
  selectedResources: externalSelectedResources,
  allResourcesSelected: externalAllResourcesSelected,
  handleSelectionChange: externalHandleSelectionChange,
  promotedBulkActions: externalPromotedBulkActions,
}: PromptIndexTableProps) => {
  // If selection props are not provided, manage state internally (for Grouped view)
  const internalSelection = useIndexResourceState(prompts);
  const selectedResources =
    externalSelectedResources || internalSelection.selectedResources;
  const allResourcesSelected =
    externalAllResourcesSelected || internalSelection.allResourcesSelected;
  const handleSelectionChange =
    externalHandleSelectionChange || internalSelection.handleSelectionChange;

  const [activeActionPopover, setActiveActionPopover] = useState<string | null>(
    null,
  );
  const togglePopover = useCallback(
    (id: string) => {
      setActiveActionPopover(activeActionPopover === id ? null : id);
    },
    [activeActionPopover],
  );

  // Helper to get sentiment badge
  const getSentimentBadge = useCallback(
    (sentiment: number | null | undefined) => {
      if (sentiment === null || sentiment === undefined) {
        return <Badge tone="critical">null%</Badge>;
      }
      if (sentiment >= 70)
        return <Badge tone="success">{`${sentiment}%`}</Badge>;
      if (sentiment >= 40)
        return <Badge tone="attention">{`${sentiment}%`}</Badge>;
      return <Badge tone="critical">{`${sentiment}%`}</Badge>;
    },
    [],
  );

  // Loading states for individual row actions
  // Note: Parent manages modals, but we might want row-level loading spinners.
  // For now, we rely on the parent's modal loading state, so buttons here trigger actions immediately.
  // The 'accepting' and 'dismissing' states were in the parent, but for row buttons we might need to pass loading state or just fire-and-forget (modals appear).
  // The original code had `acceptingPromptId` state. We'll assume the parent handles the async nature or we just trigger the modal/action.
  // Actually, for Add/Dismiss buttons, they trigger actions directly without modal sometimes?
  // Original code:
  // Add -> calls onAcceptSuggestion -> triggers modal/action
  // Dismiss -> calls setDismissPromptId -> triggers modal

  const rowMarkup = prompts.map((prompt: any, index: number) => {
    const lastRun = prompt.runs?.[0];
    const lastRunPosition = lastRun?.position;
    const avgPosition = getAverageRankFromLatestDate(prompt.runs || []);
    const lastRunSentiment = lastRun?.sentiment;
    const avgSentiment = getAverageSentimentFromLatestDate(prompt.runs || []);
    const mentions = lastRun?.mentions || [];
    const displayedMentions = mentions.slice(0, 3);
    const sourceCount = lastRun?.citations?.length || 0;
    const topic =
      prompt.topic ||
      (typeof prompt.tags === "string"
        ? prompt.tags.split(",")[0]
        : Array.isArray(prompt.tags)
          ? prompt.tags[0]
          : null) ||
      "General";
    let lastRunVisibility = lastRun?.visibility ?? 0;
    const avgVisibility = getAverageVisibilityFromLatestDate(prompt.runs || []);

    // Check if data exists in any run
    const hasPositionData = hasAnyPositionData(prompt.runs || []);
    const hasSentimentData = hasAnySentimentData(prompt.runs || []);
    const hasVisibilityData = hasAnyVisibilityData(prompt.runs || []);

    // Data Consistency Fix: If ranked but visibility is 0, treat visibility as unknown/missing rather than 0%
    if (lastRunVisibility === 0 && lastRunPosition && lastRunPosition > 0) {
      lastRunVisibility = null;
    }

    const volume = prompt.volume || "Medium";
    const isSuggested = prompt.status === "SUGGESTED";

    return (
      <IndexTable.Row
        id={prompt.id}
        key={prompt.id}
        selected={selectedResources.includes(prompt.id)}
        position={index}
        onClick={() =>
          !isSuggested && navigate(`/app/monitor/prompts/${prompt.id}`)
        }
      >
        <IndexTable.Cell>
          <BlockStack gap="050">
            {isSuggested ? (
              <Tooltip content={prompt.text} preferredPosition="above">
                <Text variant="bodyMd" fontWeight="bold" as="span" truncate>
                  {truncateText(prompt.text)}
                </Text>
              </Tooltip>
            ) : (
              <Tooltip content={prompt.text} preferredPosition="above">
                <Link
                  url={`/app/monitor/prompts/${prompt.id}`}
                  removeUnderline
                  monochrome
                >
                  <Text variant="bodyMd" fontWeight="bold" as="span" truncate>
                    {truncateText(prompt.text)}
                  </Text>
                </Link>
              </Tooltip>
            )}
            <InlineStack gap="200">
              <Badge tone={isSuggested ? "attention" : "info"}>
                {isSuggested ? "Suggestion" : topic}
              </Badge>
              {!isSuggested &&
                prompt.linkedProducts &&
                prompt.linkedProducts.length > 0 && (
                  <Badge tone="success">
                    {prompt.linkedProducts
                      .map((lp: any) => lp.productTitle || "Linked Product")
                      .join(", ")}
                  </Badge>
                )}
              {!isSuggested && (
                <Text variant="bodySm" tone="subdued" as="span">
                  {sourceCount} sources
                </Text>
              )}
            </InlineStack>
          </BlockStack>
        </IndexTable.Cell>
        {!isSuggested ? (
          <>
            <IndexTable.Cell>
              <Tooltip
                content="Latest Run (Daily Average)"
                preferredPosition="above"
              >
                <span style={{ whiteSpace: "nowrap", cursor: "help" }}>
                  <Text as="span" fontWeight="bold">
                    {prompt.runs &&
                    prompt.runs.length > 0 &&
                    (hasVisibilityData || avgVisibility > 0)
                      ? lastRunVisibility !== null &&
                        lastRunVisibility !== undefined
                        ? `${lastRunVisibility}% (${avgVisibility}%)`
                        : avgVisibility > 0
                          ? `— (${avgVisibility}%)`
                          : "—"
                      : "—"}
                  </Text>
                </span>
              </Tooltip>
            </IndexTable.Cell>
            <IndexTable.Cell>
              {(lastRun &&
                lastRunSentiment !== null &&
                lastRunSentiment !== undefined) ||
              (hasSentimentData && avgSentiment !== null) ? (
                <Tooltip
                  content="Latest Run (Daily Average)"
                  preferredPosition="above"
                >
                  <InlineStack
                    gap="100"
                    align="start"
                    blockAlign="center"
                    wrap={false}
                  >
                    {lastRunSentiment !== null &&
                    lastRunSentiment !== undefined ? (
                      <div style={{ cursor: "help" }}>
                        {getSentimentBadge(lastRunSentiment)}
                      </div>
                    ) : (
                      <Text as="span" tone="subdued">
                        —
                      </Text>
                    )}
                    {avgSentiment !== null && (
                      <span
                        style={{
                          whiteSpace: "nowrap",
                          cursor: "help",
                        }}
                      >
                        <Text as="span" tone="subdued" variant="bodySm">
                          ({avgSentiment}%)
                        </Text>
                      </span>
                    )}
                  </InlineStack>
                </Tooltip>
              ) : (
                <Text as="span" tone="subdued">
                  —
                </Text>
              )}
            </IndexTable.Cell>
            <IndexTable.Cell>
              <Tooltip
                content="Latest Run (Daily Average)"
                preferredPosition="above"
              >
                <InlineStack
                  gap="100"
                  align="start"
                  blockAlign="center"
                  wrap={false}
                >
                  {(lastRunPosition !== null &&
                    lastRunPosition !== undefined) ||
                  (hasPositionData && avgPosition !== null) ? (
                    <>
                      <div style={{ cursor: "help" }}>
                        <RankBadge
                          position={
                            lastRunPosition !== null &&
                            lastRunPosition !== undefined
                              ? lastRunPosition
                              : null
                          }
                        />
                      </div>
                      {avgPosition !== null && (
                        <span
                          style={{
                            whiteSpace: "nowrap",
                            cursor: "help",
                          }}
                        >
                          <Text as="span" tone="subdued" variant="bodySm">
                            (#{avgPosition})
                          </Text>
                        </span>
                      )}
                    </>
                  ) : (
                    <Text as="span" tone="subdued">
                      —
                    </Text>
                  )}
                </InlineStack>
              </Tooltip>
            </IndexTable.Cell>
            <IndexTable.Cell>
              <InlineStack gap="100" wrap={false}>
                {displayedMentions.length > 0 ? (
                  displayedMentions.map((m: any) => (
                    <BrandIcon
                      key={m.id}
                      name={m.brand?.name || "Unknown"}
                      fullText={lastRun?.response}
                    />
                  ))
                ) : (
                  <Text as="span" tone="subdued">
                    —
                  </Text>
                )}
              </InlineStack>
            </IndexTable.Cell>
            <IndexTable.Cell>
              <VolumeBars level={volume} />
            </IndexTable.Cell>
            <IndexTable.Cell>
              <div onClick={(e) => e.stopPropagation()}>
                <Popover
                  active={activeActionPopover === prompt.id}
                  activator={
                    <Button
                      variant="plain"
                      icon={MenuHorizontalIcon}
                      onClick={() => togglePopover(prompt.id)}
                      accessibilityLabel="Actions"
                    />
                  }
                  onClose={() => setActiveActionPopover(null)}
                >
                  <ActionList
                    items={[
                      {
                        content: "Edit",
                        onAction: () => {
                          if (onEditPrompt) onEditPrompt(prompt);
                          setActiveActionPopover(null);
                        },
                      },
                      {
                        content:
                          prompt.status === "ACTIVE" ? "Disable" : "Enable",
                        onAction: () => {
                          if (onToggleStatus)
                            onToggleStatus(prompt.id, prompt.status);
                          setActiveActionPopover(null);
                        },
                      },
                      {
                        content: "Delete",
                        destructive: true,
                        onAction: () => {
                          if (onDeletePrompts) {
                            onDeletePrompts([prompt.id]);
                          }
                          setActiveActionPopover(null);
                        },
                      },
                    ]}
                  />
                </Popover>
              </div>
            </IndexTable.Cell>
          </>
        ) : (
          <>
            <IndexTable.Cell>—</IndexTable.Cell>
            <IndexTable.Cell>—</IndexTable.Cell>
            <IndexTable.Cell>—</IndexTable.Cell>
            <IndexTable.Cell>—</IndexTable.Cell>
            <IndexTable.Cell>
              <Text as="span" tone="subdued">
                High
              </Text>
            </IndexTable.Cell>
            <IndexTable.Cell>
              <InlineStack gap="200">
                <div
                  onClick={(e) => {
                    e.stopPropagation();
                    if (onAcceptSuggestion) {
                      onAcceptSuggestion(prompt.id);
                    }
                  }}
                >
                  <Button
                    size="slim"
                    variant="primary"
                    tone="success"
                    icon={PlusIcon}
                  >
                    Add
                  </Button>
                </div>
                <div
                  onClick={(e) => {
                    e.stopPropagation();
                    if (onDismissSuggestion) {
                      onDismissSuggestion(prompt.id);
                    }
                  }}
                >
                  <Button
                    size="slim"
                    tone="critical"
                    variant="plain"
                    icon={XIcon}
                  />
                </div>
              </InlineStack>
            </IndexTable.Cell>
          </>
        )}
      </IndexTable.Row>
    );
  });

  // Internal bulk actions fallback if not provided
  const bulkActions = externalPromotedBulkActions
    ? externalPromotedBulkActions
    : selectedResources.length > 0 && onDeletePrompts
      ? [
          {
            content: "Delete prompts",
            onAction: () => onDeletePrompts(selectedResources as string[]),
            destructive: true,
          },
        ]
      : [];

  return (
    <IndexTable
      resourceName={resourceName}
      itemCount={prompts.length}
      selectedItemsCount={
        allResourcesSelected ? "All" : selectedResources.length
      }
      onSelectionChange={handleSelectionChange}
      promotedBulkActions={bulkActions}
      headings={[
        { title: "Prompt" },
        { title: "Visibility" },
        { title: "Sentiment" },
        { title: "Rank" },
        { title: "Mentions" },
        { title: "Volume" },
        { title: "Action" },
      ]}
      selectable={true}
    >
      {rowMarkup}
    </IndexTable>
  );
};
