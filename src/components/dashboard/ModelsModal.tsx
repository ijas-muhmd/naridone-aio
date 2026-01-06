import { useState, useCallback } from "react";
import {
  Modal,
  BlockStack,
  Text,
  TextField,
  Checkbox,
  Banner,
} from "@shopify/polaris";
import { AVAILABLE_MODELS } from "../../utils/platforms";
import { getPlatformInfo } from "../../utils/platforms";

interface ModelsModalProps {
  activeModels?: string[];
  brandName: string;
  onSave: (selectedModels: string[]) => void;
  open?: boolean;
  onClose?: () => void;
}

export function ModelsModal({
  activeModels = [],
  brandName,
  onSave,
  open: controlledOpen,
  onClose: controlledOnClose,
}: ModelsModalProps) {
  const [internalOpen, setInternalOpen] = useState(false);
  const [selectedModels, setSelectedModels] = useState<string[]>(
    activeModels || []
  );
  const [configBrandName, setConfigBrandName] = useState(brandName || "");

  const isControlled = controlledOpen !== undefined;
  const isOpen = isControlled ? controlledOpen : internalOpen;
  const setIsOpen = isControlled
    ? controlledOnClose || (() => {})
    : setInternalOpen;

  const handleModalChange = useCallback(() => {
    if (!isControlled) {
      setInternalOpen(!internalOpen);
    } else if (controlledOnClose) {
      controlledOnClose();
    }
    if (!isOpen) {
      setSelectedModels(activeModels || []);
      setConfigBrandName(brandName || "");
    }
  }, [isOpen, internalOpen, isControlled, controlledOnClose, activeModels, brandName]);

  const handleSave = useCallback(() => {
    onSave(selectedModels);
    setIsOpen(false);
  }, [selectedModels, onSave, setIsOpen]);

  const toggleModel = (id: string) => {
    setSelectedModels((prev) =>
      prev.includes(id) ? prev.filter((m) => m !== id) : [...prev, id]
    );
  };

  return (
    <Modal
      open={isOpen}
      onClose={handleModalChange}
      title="Configure Active Models"
      primaryAction={{
        content: "Save Configuration",
        onAction: handleSave,
      }}
      secondaryActions={[
        {
          content: "Cancel",
          onAction: handleModalChange,
        },
      ]}
    >
      <Modal.Section>
        <BlockStack gap="400">
          <Banner tone="info">
            <p>
              Select the AI models you want to track. Ensure you have added
              the necessary API keys in your environment configuration.
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
            {AVAILABLE_MODELS.filter((m) => m.type === "Hybrid").map(
              (model) => {
                const platformInfo = getPlatformInfo(model.id);
                return (
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
                            src={model.logo || platformInfo.logo}
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
                );
              }
            )}
          </BlockStack>
        </BlockStack>
      </Modal.Section>
    </Modal>
  );
}

