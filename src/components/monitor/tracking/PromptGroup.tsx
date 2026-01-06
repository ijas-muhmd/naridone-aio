import {
  Card,
  InlineStack,
  Icon,
  Text,
  Badge,
  Collapsible,
  useIndexResourceState,
} from "@shopify/polaris";
import { ChevronUpIcon, ChevronDownIcon } from "@shopify/polaris-icons";
import React, { useState } from "react";
import { PromptIndexTable } from "./PromptIndexTable";

interface PromptGroupProps {
  title: string;
  prompts: any[];
  resourceName: { singular: string; plural: string };
  navigate: any;
  onDeletePrompts?: (promptIds: string[]) => void;
  onAcceptSuggestion?: (id: string) => void;
  onDismissSuggestion?: (id: string) => void;
  onEditPrompt?: (prompt: any) => void;
  onToggleStatus?: (id: string, currentStatus: string) => void;
}

export const PromptGroup = ({
  title,
  prompts,
  resourceName,
  navigate,
  onDeletePrompts,
  onAcceptSuggestion,
  onDismissSuggestion,
  onEditPrompt,
  onToggleStatus,
}: PromptGroupProps) => {
  const [open, setOpen] = useState(true);
  const {
    selectedResources,
    allResourcesSelected,
    handleSelectionChange,
    clearSelection,
  } = useIndexResourceState(prompts);

  return (
    <Card padding="0">
      <div
        style={{
          padding: "12px 16px",
          cursor: "pointer",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          background: "#f9fafb",
          borderBottom: "1px solid #e1e3e5",
        }}
        onClick={() => setOpen(!open)}
      >
        <InlineStack gap="200" align="center">
          <Icon source={open ? ChevronUpIcon : ChevronDownIcon} tone="subdued" />
          <Text variant="headingSm" as="h3">
            {title}
          </Text>
          <Badge>{String(prompts.length)}</Badge>
        </InlineStack>
      </div>
      <Collapsible open={open} id={`group-${title}`}>
        <PromptIndexTable
          prompts={prompts}
          resourceName={resourceName}
          navigate={navigate}
          onDeletePrompts={onDeletePrompts}
          onAcceptSuggestion={onAcceptSuggestion}
          onDismissSuggestion={onDismissSuggestion}
          onEditPrompt={onEditPrompt}
          onToggleStatus={onToggleStatus}
          // Pass managed selection state
          selectedResources={selectedResources}
          allResourcesSelected={allResourcesSelected}
          handleSelectionChange={handleSelectionChange}
        />
      </Collapsible>
    </Card>
  );
};
