import { Modal, BlockStack, Banner, TextField, Checkbox, Text } from "@shopify/polaris";
import React from "react";

interface ModelsModalProps {
  open: boolean;
  onClose: () => void;
  onSave: () => void;
  configBrandName: string;
  setConfigBrandName: (value: string) => void;
  availableModels: Array<{ id: string; label: string; type: string; logo: string; disabled?: boolean }>;
  selectedModels: string[];
  toggleModel: (id: string) => void;
}

export function ModelsModal({
  open,
  onClose,
  onSave,
  configBrandName,
  setConfigBrandName,
  availableModels,
  selectedModels,
  toggleModel,
}: ModelsModalProps) {
  return (
    <Modal
      open={open}
      onClose={onClose}
      title="Configure Active Models"
      primaryAction={{
        content: "Save Configuration",
        onAction: onSave,
      }}
      secondaryActions={[{ content: "Cancel", onAction: onClose }]}
    >
      <Modal.Section>
        <BlockStack gap="400">
          <Banner tone="info">
            <p>
              Select the AI models you want to track. Ensure you have added the
              necessary API keys in your environment configuration.
            </p>
          </Banner>

          <TextField
            label="Brand Name"
            value={configBrandName}
            onChange={setConfigBrandName}
            autoComplete="off"
            helpText="The brand name to track in sentiment analysis (e.g. 'Nike', 'Apple')"
          />

          <BlockStack gap="200">
            <Text variant="headingSm" as="h3">
              Hybrid (Search + AI)
            </Text>
            {availableModels
              .filter((m) => m.type === "Hybrid")
              .map((model) => (
                <div
                  key={model.id}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "12px",
                    padding: "4px 0",
                  }}
                >
                  <Checkbox
                    label={
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "8px",
                        }}
                      >
                        <img
                          src={model.logo}
                          alt={model.label}
                          style={{
                            width: "20px",
                            height: "20px",
                            objectFit: "contain",
                            borderRadius: "4px",
                          }}
                        />
                        <Text as="span" variant="bodyMd">
                          {model.label}
                        </Text>
                      </div>
                    }
                    checked={selectedModels.includes(model.id)}
                    onChange={() => toggleModel(model.id)}
                    disabled={model.disabled}
                  />
                </div>
              ))}
          </BlockStack>
        </BlockStack>
      </Modal.Section>
    </Modal>
  );
}
