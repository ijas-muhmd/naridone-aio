import {
  Modal,
  BlockStack,
  Box,
  Text,
  InlineStack,
  Badge,
  Divider,
  Grid,
  Icon,
} from "@shopify/polaris";
import { PersonIcon, DeleteIcon, TargetIcon, MagicIcon } from "@shopify/polaris-icons";
import React from "react";

interface PersonaDetailModalProps {
  selectedPersona: any;
  onClose: () => void;
  onDelete: (id: string) => void;
  isLoading: boolean;
}

export const PersonaDetailModal = ({
  selectedPersona,
  onClose,
  onDelete,
  isLoading,
}: PersonaDetailModalProps) => {
  return (
    <Modal
      open={!!selectedPersona}
      onClose={isLoading ? () => {} : onClose}
      title={selectedPersona?.name}
      primaryAction={{
        content: "Close",
        onAction: onClose,
        disabled: isLoading,
      }}
      secondaryActions={[
        {
          content: "Delete",
          onAction: () => selectedPersona?.id && onDelete(selectedPersona.id),
          destructive: true,
          icon: DeleteIcon,
          disabled: !selectedPersona?.id || isLoading,
          loading: isLoading,
        },
      ]}
    >
      <Modal.Section>
        <BlockStack gap="500">
          {/* Header Section */}
          <Box
            background="bg-surface-secondary"
            padding="400"
            borderRadius="200"
          >
            <BlockStack gap="200">
              <Text variant="headingSm" as="h4">
                Summary
              </Text>
              <Text variant="bodyMd" as="p">
                {selectedPersona?.tagline}
              </Text>
              <InlineStack gap="200" wrap>
                {selectedPersona?.constraints?.map((c: string, i: number) => (
                  <Badge key={i} tone="info">
                    {c}
                  </Badge>
                ))}
              </InlineStack>
            </BlockStack>
          </Box>

          <Divider />

          {/* Details Grid */}
          <Grid>
            <Grid.Cell columnSpan={{ xs: 6, sm: 6, md: 6, lg: 6, xl: 6 }}>
              <BlockStack gap="200">
                <InlineStack gap="200" blockAlign="center">
                  <Icon source={PersonIcon} tone="subdued" />
                  <Text variant="headingSm" as="h4">
                    Profile
                  </Text>
                </InlineStack>
                <Box paddingInlineStart="800">
                  <BlockStack gap="300">
                    <div>
                      <Text
                        variant="bodyXs"
                        fontWeight="bold"
                        tone="subdued"
                        as="p"
                      >
                        DEMOGRAPHICS
                      </Text>
                      <Text variant="bodySm" as="p">
                        {selectedPersona?.demographics}
                      </Text>
                    </div>
                    <div>
                      <Text
                        variant="bodyXs"
                        fontWeight="bold"
                        tone="subdued"
                        as="p"
                      >
                        BACKGROUND
                      </Text>
                      <Text variant="bodySm" as="p">
                        {selectedPersona?.background}
                      </Text>
                    </div>
                  </BlockStack>
                </Box>
              </BlockStack>
            </Grid.Cell>

            <Grid.Cell columnSpan={{ xs: 6, sm: 6, md: 6, lg: 6, xl: 6 }}>
              <BlockStack gap="200">
                <InlineStack gap="200" blockAlign="center">
                  <Icon source={TargetIcon} tone="subdued" />
                  <Text variant="headingSm" as="h4">
                    Intent
                  </Text>
                </InlineStack>
                <Box paddingInlineStart="800">
                  <BlockStack gap="300">
                    <div>
                      <Text
                        variant="bodyXs"
                        fontWeight="bold"
                        tone="subdued"
                        as="p"
                      >
                        PRIMARY GOAL
                      </Text>
                      <Text variant="bodySm" as="p">
                        {selectedPersona?.goals}
                      </Text>
                    </div>
                  </BlockStack>
                </Box>
              </BlockStack>
            </Grid.Cell>
          </Grid>

          <Divider />

          {/* AI Simulation Section */}
          <Box
            padding="400"
            // background="bg-surface-magic" // This Polaris token might not exist or work as expected in all themes, fallback to hardcoded or standard surface if needed. Original code used it though.
            // Assuming "bg-surface-magic" is a valid token in the project's theme setup or just a string that falls back.
            // To be safe I will use a standard surface or style if I knew for sure.
            // I'll stick to original code's intent but maybe use style for custom color if needed.
            // Original code: background="bg-surface-magic"
            // I'll use standard polaris prop but maybe it's a custom theme. I'll keep it.
            // Actually, "bg-surface-magic" is NOT a standard Polaris token. It was likely a custom class or token in the project.
            // I'll use a style object for a light purple background to mimic "magic".
            background="bg-surface-secondary" // Fallback to standard
            // borderColor="border-magic"
            borderWidth="025"
            borderColor="border"
          >
            <BlockStack gap="300">
              <InlineStack gap="200" blockAlign="center">
                <Icon source={MagicIcon} tone="magic" />
                <Text variant="headingSm" as="h4">
                  AI Simulation Strategy
                </Text>
              </InlineStack>
              <Text variant="bodySm" as="p">
                {selectedPersona?.aiSimulation}
              </Text>
            </BlockStack>
          </Box>
        </BlockStack>
      </Modal.Section>
    </Modal>
  );
};
