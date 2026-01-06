import { useEffect } from "react";
import {
  Modal,
  BlockStack,
  TextField,
  Select,
  Text,
  Combobox,
  Listbox,
  Checkbox,
  Thumbnail,
  Button,
  Box,
  InlineStack,
  DropZone,
  LegacyStack,
  Icon,
  SkeletonBodyText,
} from "@shopify/polaris";
import { NoteIcon, UploadIcon } from "@shopify/polaris-icons";
import React, { useState, useCallback } from "react";

interface Product {
  id: string;
  title: string;
  image?: string;
  handle?: string;
  value?: string; // for combobox
  label?: string; // for combobox
}

interface Persona {
  id: string;
  name: string;
}

interface AddPromptModalProps {
  open: boolean;
  onClose: () => void;
  onAdd: (prompt: any) => void;
  loading?: boolean;
  existingTopics?: string[];
  personas?: Persona[];
  products?: Product[];
  promptToEdit?: any;
}

export function AddPromptModal({
  open,
  onClose,
  onAdd,
  loading = false,
  existingTopics = ["Brand Awareness", "Product Features", "Sustainability"], // Mock defaults
  personas = [], // Empty by default
  products = [], // Empty by default
  promptToEdit,
}: AddPromptModalProps) {
  const [modalMode, setModalMode] = useState<"single" | "bulk" | "edit">(
    "single",
  );

  // Single Prompt State
  const [promptText, setPromptText] = useState("");
  const [selectedPersona, setSelectedPersona] = useState("");
  const [productSearchValue, setProductSearchValue] = useState("");
  const [selectedProducts, setSelectedProducts] = useState<Product[]>([]);

  const [selectedPromptTopic, setSelectedPromptTopic] = useState("");
  const [promptTopic, setPromptTopic] = useState("");

  const [promptTags, setPromptTags] = useState("");
  const [promptLocations, setPromptLocations] = useState<string[]>(["US"]);

  // Bulk State
  const [bulkFiles, setBulkFiles] = useState<File[]>([]);
  const [parsedBulkPrompts, setParsedBulkPrompts] = useState<string[]>([]);

  useEffect(() => {
    if (promptToEdit && open) {
      setModalMode("edit");
      setPromptText(promptToEdit.text || "");
      // Mock mapping existing fields if available
      setPromptTopic(promptToEdit.topic || "");
      setSelectedPromptTopic(
        existingTopics.includes(promptToEdit.topic) ? promptToEdit.topic : "",
      );
      setPromptTags(
        Array.isArray(promptToEdit.tags) ? promptToEdit.tags.join(", ") : "",
      );
      setPromptLocations(promptToEdit.locations || ["US"]);
      // ... handle other fields if promptToEdit has them
    } else if (open && !promptToEdit) {
      setModalMode("single");
      resetForm();
    }
  }, [promptToEdit, open, existingTopics]);

  const handleAdd = useCallback(() => {
    if (modalMode === "single" || modalMode === "edit") {
      if (promptText.trim()) {
        onAdd({
          mode: modalMode,
          id: promptToEdit?.id,
          text: promptText,
          personaId: selectedPersona,
          products: selectedProducts,
          topic: selectedPromptTopic || promptTopic,
          tags: promptTags,
          locations: promptLocations,
        });
        resetForm();
      }
    } else {
      // Bulk logic
      onAdd({
        mode: "bulk",
        prompts: parsedBulkPrompts,
      });
      resetForm();
    }
  }, [
    modalMode,
    promptText,
    selectedPersona,
    selectedProducts,
    selectedPromptTopic,
    promptTopic,
    promptTags,
    promptLocations,
    parsedBulkPrompts,
    onAdd,
    promptToEdit,
  ]);

  const resetForm = () => {
    setPromptText("");
    setSelectedPersona("");
    setSelectedProducts([]);
    setProductSearchValue("");
    setSelectedPromptTopic("");
    setPromptTopic("");
    setPromptTags("");
    setPromptLocations(["US"]);
    setBulkFiles([]);
    setParsedBulkPrompts([]);
    setModalMode("single");
  };

  const handleClose = useCallback(() => {
    resetForm();
    onClose();
  }, [onClose]);

  const handleBulkDrop = useCallback(
    (_dropFiles: File[], acceptedFiles: File[], _rejectedFiles: File[]) => {
      setBulkFiles(acceptedFiles);
      // Mock parsing
      if (acceptedFiles.length > 0) {
        setParsedBulkPrompts([
          "Mock prompt 1",
          "Mock prompt 2",
          "Mock prompt 3",
        ]);
      }
    },
    [],
  );

  return (
    <Modal
      open={open}
      onClose={handleClose}
      title={
        modalMode === "edit"
          ? "Edit Prompt"
          : modalMode === "single"
            ? "Create new prompt"
            : "Bulk Upload Prompts"
      }
      primaryAction={{
        content:
          modalMode === "edit"
            ? "Save Changes"
            : modalMode === "single"
              ? "Add Prompt"
              : `Upload ${parsedBulkPrompts.length > 0 ? parsedBulkPrompts.length : ""} Prompts`,
        onAction: handleAdd,
        disabled:
          modalMode === "single" || modalMode === "edit"
            ? !promptText.trim()
            : parsedBulkPrompts.length === 0,
        loading: loading,
      }}
      secondaryActions={[
        {
          content: "Cancel",
          onAction: handleClose,
          disabled: loading,
        },
      ]}
    >
      <Modal.Section>
        <BlockStack gap="400">
          {/* Mode Switcher - Hide in Edit Mode */}
          {modalMode !== "edit" && (
            <div style={{ marginBottom: "1rem" }}>
              <div
                style={{
                  background: "#f1f2f4",
                  padding: "4px",
                  borderRadius: "8px",
                  display: "flex",
                  width: "100%",
                }}
              >
                <button
                  style={{
                    flex: 1,
                    background: modalMode === "single" ? "#fff" : "transparent",
                    border: "none",
                    padding: "8px 16px",
                    borderRadius: "6px",
                    boxShadow:
                      modalMode === "single"
                        ? "0 1px 2px rgba(0,0,0,0.1)"
                        : "none",
                    cursor: "pointer",
                    fontSize: "13px",
                    fontWeight: modalMode === "single" ? 600 : 500,
                    color: modalMode === "single" ? "#202223" : "#6d7175",
                    transition: "all 0.2s ease",
                  }}
                  onClick={() => setModalMode("single")}
                >
                  Add Prompt
                </button>
                <button
                  style={{
                    flex: 1,
                    background: modalMode === "bulk" ? "#fff" : "transparent",
                    border: "none",
                    padding: "8px 16px",
                    borderRadius: "6px",
                    boxShadow:
                      modalMode === "bulk"
                        ? "0 1px 2px rgba(0,0,0,0.1)"
                        : "none",
                    cursor: "pointer",
                    fontSize: "13px",
                    fontWeight: modalMode === "bulk" ? 600 : 500,
                    color: modalMode === "bulk" ? "#202223" : "#6d7175",
                    transition: "all 0.2s ease",
                  }}
                  onClick={() => setModalMode("bulk")}
                >
                  Bulk Upload
                </button>
              </div>
            </div>
          )}

          {modalMode !== "bulk" && (
            <BlockStack gap="400">
              <TextField
                label="Prompt Text"
                value={promptText}
                onChange={setPromptText}
                autoComplete="off"
                placeholder="e.g. Best running shoes"
                helpText="Enter the search query you want to track."
              />

              {/* Persona Section */}
              {personas.length > 0 ? (
                <Select
                  label="Persona (Optional)"
                  options={[
                    { label: "None / All shoppers", value: "" },
                    ...personas.map((p) => ({ label: p.name, value: p.id })),
                  ]}
                  value={selectedPersona}
                  onChange={setSelectedPersona}
                  helpText="Link this prompt to a specific customer persona for targeted analysis."
                />
              ) : (
                <BlockStack gap="200">
                  <Text variant="bodyMd" as="p" tone="subdued">
                    Persona (Optional)
                  </Text>
                  <div
                    style={{
                      padding: "8px 12px",
                      background: "#f1f2f4",
                      borderRadius: "4px",
                      border: "1px solid #e1e3e5",
                    }}
                  >
                    <Text variant="bodySm" tone="subdued" as="p">
                      No personas available. Create personas in the{" "}
                      <strong>Personas</strong> tab to target specific customer
                      segments.
                    </Text>
                  </div>
                </BlockStack>
              )}

              {/* Products Combobox */}
              <Combobox
                activator={
                  <Combobox.TextField
                    onChange={setProductSearchValue}
                    label="Link to Product(s) (Optional)"
                    labelHidden
                    value={productSearchValue}
                    placeholder={
                      selectedProducts.length > 0
                        ? `${selectedProducts.length} product${selectedProducts.length !== 1 ? "s" : ""} selected`
                        : "Search for a product..."
                    }
                    autoComplete="off"
                  />
                }
                allowMultiple={true}
              >
                {(() => {
                  const filteredProducts = products.filter((product) => {
                    if (!productSearchValue.trim()) return true;
                    const searchLower = productSearchValue.toLowerCase();
                    return (product.title || "")
                      .toLowerCase()
                      .includes(searchLower);
                  });

                  return filteredProducts.length > 0 ? (
                    <Listbox
                      onSelect={(value) => {
                        const product = products.find((p) => p.id === value);
                        if (product) {
                          const isSelected = selectedProducts.some(
                            (p) => p.id === product.id,
                          );
                          if (isSelected) {
                            setSelectedProducts(
                              selectedProducts.filter(
                                (p) => p.id !== product.id,
                              ),
                            );
                          } else {
                            setSelectedProducts([...selectedProducts, product]);
                          }
                          setProductSearchValue("");
                        }
                      }}
                    >
                      {filteredProducts.map((product) => {
                        const isSelected = selectedProducts.some(
                          (p) => p.id === product.id,
                        );
                        return (
                          <Listbox.Option
                            key={product.id}
                            value={product.id}
                            selected={isSelected}
                          >
                            <div
                              style={{
                                display: "flex",
                                alignItems: "center",
                                gap: "12px",
                                padding: "8px 12px",
                              }}
                            >
                              <Checkbox
                                label=""
                                checked={isSelected}
                                onChange={() => {}}
                              />
                              {product.image && (
                                <Thumbnail
                                  source={product.image}
                                  alt={product.title}
                                  size="small"
                                />
                              )}
                              <Text as="span" variant="bodyMd">
                                {product.title}
                              </Text>
                            </div>
                          </Listbox.Option>
                        );
                      })}
                    </Listbox>
                  ) : productSearchValue.trim() ? (
                    <div style={{ padding: "16px", textAlign: "center" }}>
                      <Text as="p" variant="bodyMd" tone="subdued">
                        No products found
                      </Text>
                    </div>
                  ) : null;
                })()}
              </Combobox>

              {selectedProducts.length > 0 && (
                <BlockStack gap="200">
                  {selectedProducts.map((product, index) => (
                    <Box
                      key={product.id}
                      padding="300"
                      background="bg-surface-secondary"
                      borderRadius="200"
                    >
                      <InlineStack align="space-between" blockAlign="center">
                        <InlineStack gap="200" blockAlign="center">
                          {product.image && (
                            <Thumbnail
                              source={product.image}
                              alt={product.title}
                              size="small"
                            />
                          )}
                          <Text as="span" variant="bodySm">
                            {product.title}
                          </Text>
                        </InlineStack>
                        <Button
                          variant="plain"
                          onClick={() => {
                            setSelectedProducts(
                              selectedProducts.filter((_, i) => i !== index),
                            );
                          }}
                        >
                          Remove
                        </Button>
                      </InlineStack>
                    </Box>
                  ))}
                </BlockStack>
              )}

              {/* Topic Selection */}
              {existingTopics.length > 0 && (
                <Select
                  label="Select Existing Topic"
                  options={[
                    { label: "Select a topic or type a new one", value: "" },
                    ...existingTopics.map((topic) => ({
                      label: topic,
                      value: topic,
                    })),
                  ]}
                  value={selectedPromptTopic}
                  onChange={(value) => {
                    setSelectedPromptTopic(value);
                    if (value) {
                      setPromptTopic(value);
                    }
                  }}
                  helpText="Choose from existing topics or type a new one below"
                />
              )}
              <TextField
                label={
                  existingTopics.length > 0
                    ? "Or Enter New Topic Name"
                    : "Topic"
                }
                value={promptTopic}
                onChange={(value) => {
                  setPromptTopic(value);
                  if (value && selectedPromptTopic) {
                    setSelectedPromptTopic("");
                  }
                }}
                autoComplete="off"
                placeholder="e.g. Brand Awareness, Product Features"
                helpText={
                  existingTopics.length > 0
                    ? "Type a new topic name or select from above"
                    : "Enter a topic name for this prompt"
                }
              />

              <TextField
                label="Tags (Optional)"
                value={promptTags}
                onChange={setPromptTags}
                autoComplete="off"
                placeholder="e.g. seasonal, christmas, promo"
                helpText="Comma separated tags to categorize this prompt."
              />

              {/* Locations */}
              <Combobox
                allowMultiple
                activator={
                  <Combobox.TextField
                    autoComplete="off"
                    label="Locations"
                    labelHidden
                    value={
                      promptLocations.length > 0
                        ? promptLocations.join(", ")
                        : ""
                    }
                    placeholder="Select locations"
                    onChange={() => {}}
                  />
                }
              >
                <Listbox
                  onSelect={(value) => {
                    const location = value;
                    if (promptLocations.includes(location)) {
                      setPromptLocations(
                        promptLocations.filter((l) => l !== location),
                      );
                    } else {
                      setPromptLocations([...promptLocations, location]);
                    }
                  }}
                >
                  {[
                    { label: "United States", value: "US" },
                    { label: "United Kingdom", value: "UK" },
                    { label: "Canada", value: "CA" },
                    { label: "Australia", value: "AU" },
                    { label: "Germany", value: "DE" },
                    { label: "France", value: "FR" },
                    { label: "Spain", value: "ES" },
                    { label: "Italy", value: "IT" },
                    { label: "Japan", value: "JP" },
                  ].map((option) => (
                    <Listbox.Option
                      key={option.value}
                      value={option.value}
                      selected={promptLocations.includes(option.value)}
                    >
                      {option.label}
                    </Listbox.Option>
                  ))}
                </Listbox>
              </Combobox>
              {promptLocations.length > 1 && (
                <div
                  style={{
                    marginTop: "8px",
                    padding: "8px 12px",
                    background: "#fff4e5",
                    borderRadius: "4px",
                    border: "1px solid #fed399",
                  }}
                >
                  <Text as="p" variant="bodySm" tone="caution">
                    Note: Adding multiple locations multiplies your prompt
                    usage. ({promptLocations.length} locations ={" "}
                    {promptLocations.length} prompts deducted from your plan)
                  </Text>
                </div>
              )}
            </BlockStack>
          )}

          {modalMode === "bulk" && (
            <BlockStack gap="400">
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: "16px",
                }}
              >
                <div style={{ width: "100px", height: "100px", opacity: 0.8 }}>
                  <img
                    src="https://cdn.shopify.com/s/files/1/0262/4071/2726/files/emptystate-files.png"
                    alt="Bulk upload"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "contain",
                    }}
                  />
                </div>
                <Text variant="bodySm" as="p" tone="subdued" alignment="center">
                  Make sure your CSV follows the required format or{" "}
                  <a href="#" style={{ color: "var(--p-action-primary)" }}>
                    download example
                  </a>
                  .
                </Text>
              </div>

              <div style={{ height: "120px" }}>
                <DropZone
                  onDrop={handleBulkDrop}
                  allowMultiple={false}
                  accept=".csv,.txt"
                >
                  {bulkFiles.length > 0 ? (
                    <LegacyStack vertical>
                      {bulkFiles.map((file, index) => (
                        <LegacyStack alignment="center" key={index}>
                          <Icon source={NoteIcon} />
                          <Text variant="bodyMd" as="span">
                            {file.name}{" "}
                            <Text variant="bodySm" as="span" tone="subdued">
                              ({file.size} bytes)
                            </Text>
                          </Text>
                        </LegacyStack>
                      ))}
                    </LegacyStack>
                  ) : (
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                        height: "100%",
                        gap: "8px",
                      }}
                    >
                      <div
                        style={{
                          padding: "8px",
                          borderRadius: "50%",
                          background: "#f1f2f4",
                        }}
                      >
                        <Icon source={UploadIcon} tone="base" />
                      </div>
                      <Text variant="bodyMd" as="p" fontWeight="medium">
                        Drag and drop your file here, or{" "}
                        <span style={{ color: "var(--p-action-primary)" }}>
                          click to browse
                        </span>
                      </Text>
                    </div>
                  )}
                </DropZone>
              </div>

              {parsedBulkPrompts.length > 0 && (
                <div
                  style={{
                    maxHeight: "100px",
                    overflowY: "auto",
                    padding: "10px",
                    background: "#f1f2f4",
                    borderRadius: "4px",
                  }}
                >
                  <Text variant="bodySm" as="p">
                    Preview ({parsedBulkPrompts.length} prompts):
                  </Text>
                  <ul style={{ margin: "5px 0 0 20px", fontSize: "12px" }}>
                    {parsedBulkPrompts.slice(0, 5).map((p, i) => (
                      <li key={i}>{p}</li>
                    ))}
                    {parsedBulkPrompts.length > 5 && (
                      <li>...and {parsedBulkPrompts.length - 5} more</li>
                    )}
                  </ul>
                </div>
              )}
            </BlockStack>
          )}
        </BlockStack>
      </Modal.Section>
    </Modal>
  );
}
