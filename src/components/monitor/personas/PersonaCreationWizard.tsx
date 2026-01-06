import {
  Box,
  BlockStack,
  InlineStack,
  Button,
  Text,
  ProgressBar,
  Card,
  TextField,
  Tag,
} from "@shopify/polaris";
import { ArrowLeftIcon, PlusIcon } from "@shopify/polaris-icons";
import React from "react";

interface PersonaCreationWizardProps {
  isOpen: boolean;
  onClose: () => void;
  isLoading: boolean;
  step: number;
  setStep: (step: number) => void;
  newPersona: {
    name: string;
    tagline: string;
    demographics: string;
    background: string;
    goals: string;
    constraints: string[];
    aiSimulation: string;
  };
  setNewPersona: (persona: any) => void;
  constraintInput: string;
  setConstraintInput: (val: string) => void;
  handleAddConstraint: () => void;
  handleSave: () => void;
}

export const PersonaCreationWizard = ({
  isOpen,
  onClose,
  isLoading,
  step,
  setStep,
  newPersona,
  setNewPersona,
  constraintInput,
  setConstraintInput,
  handleAddConstraint,
  handleSave,
}: PersonaCreationWizardProps) => {
  if (!isOpen) return null;

  const handleNext = () => setStep(step + 1);
  const handleBack = () => setStep(step - 1);

  return (
    <Box paddingBlock="400">
      <BlockStack gap="600">
        {/* Header */}
        <InlineStack align="space-between" blockAlign="center">
          <Button
            icon={ArrowLeftIcon}
            variant="plain"
            onClick={onClose}
            disabled={isLoading}
          >
            Back to Personas
          </Button>
          <Box minWidth="200px">
            <BlockStack gap="200">
              <InlineStack align="space-between">
                <Text variant="bodyXs" tone="subdued" as="span">
                  Step {step} of 4
                </Text>
                <Text variant="bodyXs" tone="subdued" as="span">
                  {Math.round((step / 4) * 100)}%
                </Text>
              </InlineStack>
              <ProgressBar
                progress={(step / 4) * 100}
                size="small"
                tone="primary"
              />
            </BlockStack>
          </Box>
        </InlineStack>

        {/* Wizard Card */}
        <div style={{ maxWidth: "700px", margin: "0 auto", width: "100%" }}>
          <Card>
            <BlockStack gap="500">
              {step === 1 && (
                <BlockStack gap="400">
                  <Box paddingBlockEnd="200">
                    <BlockStack gap="200">
                      <Text variant="headingLg" as="h3">
                        Identity
                      </Text>
                      <Text variant="bodyMd" tone="subdued" as="p">
                        Give your persona a name and a quick summary to identify
                        them.
                      </Text>
                    </BlockStack>
                  </Box>
                  <TextField
                    label="Persona Name"
                    value={newPersona.name}
                    onChange={(val) =>
                      setNewPersona({ ...newPersona, name: val })
                    }
                    placeholder="e.g. The Budget Backpacker"
                    autoComplete="off"
                    autoFocus
                  />
                  <TextField
                    label="Tagline / Summary"
                    value={newPersona.tagline}
                    onChange={(val) =>
                      setNewPersona({ ...newPersona, tagline: val })
                    }
                    placeholder="e.g. Loves travel but counts every penny."
                    autoComplete="off"
                    multiline={2}
                  />
                </BlockStack>
              )}

              {step === 2 && (
                <BlockStack gap="400">
                  <Box paddingBlockEnd="200">
                    <BlockStack gap="200">
                      <Text variant="headingLg" as="h3">
                        Demographics & Background
                      </Text>
                      <Text variant="bodyMd" tone="subdued" as="p">
                        Who are they? Where do they live? What is their life
                        story?
                      </Text>
                    </BlockStack>
                  </Box>
                  <TextField
                    label="Demographics"
                    value={newPersona.demographics}
                    onChange={(val) =>
                      setNewPersona({ ...newPersona, demographics: val })
                    }
                    placeholder="e.g. 18-25, Student, Urban, Low Income"
                    autoComplete="off"
                    autoFocus
                  />
                  <TextField
                    label="Background Story"
                    value={newPersona.background}
                    onChange={(val) =>
                      setNewPersona({ ...newPersona, background: val })
                    }
                    placeholder="e.g. Gap year student travelling South East Asia..."
                    autoComplete="off"
                    multiline={4}
                  />
                </BlockStack>
              )}

              {step === 3 && (
                <BlockStack gap="400">
                  <Box paddingBlockEnd="200">
                    <BlockStack gap="200">
                      <Text variant="headingLg" as="h3">
                        Goals & Constraints
                      </Text>
                      <Text variant="bodyMd" tone="subdued" as="p">
                        What drives their decisions? What holds them back?
                      </Text>
                    </BlockStack>
                  </Box>
                  <TextField
                    label="Primary Goal"
                    value={newPersona.goals}
                    onChange={(val) =>
                      setNewPersona({ ...newPersona, goals: val })
                    }
                    placeholder="e.g. Find durable gear that survives months of travel."
                    autoComplete="off"
                    multiline={2}
                    autoFocus
                  />
                  <BlockStack gap="200">
                    <TextField
                      label="Priorities / Constraints"
                      value={constraintInput}
                      onChange={setConstraintInput}
                      onSubmit={handleAddConstraint}
                      placeholder="e.g. Lightweight, Cheap, Durable (Press Enter)"
                      autoComplete="off"
                      connectedRight={
                        <Button onClick={handleAddConstraint}>Add</Button>
                      }
                    />
                    {newPersona.constraints.length > 0 && (
                      <InlineStack gap="200" wrap>
                        {newPersona.constraints.map((c, i) => (
                          <Tag
                            key={i}
                            onRemove={() =>
                              setNewPersona({
                                ...newPersona,
                                constraints: newPersona.constraints.filter(
                                  (_, idx) => idx !== i,
                                ),
                              })
                            }
                          >
                            {c}
                          </Tag>
                        ))}
                      </InlineStack>
                    )}
                  </BlockStack>
                </BlockStack>
              )}

              {step === 4 && (
                <BlockStack gap="400">
                  <Box paddingBlockEnd="200">
                    <BlockStack gap="200">
                      <Text variant="headingLg" as="h3">
                        AI Simulation Settings
                      </Text>
                      <Text variant="bodyMd" tone="subdued" as="p">
                        How should the AI behave when mimicking this user?
                      </Text>
                    </BlockStack>
                  </Box>
                  <TextField
                    label="Simulation Instructions / Sample Queries"
                    value={newPersona.aiSimulation}
                    onChange={(val) =>
                      setNewPersona({ ...newPersona, aiSimulation: val })
                    }
                    placeholder="e.g. Simulates queries like 'cheapest hiking boots reddit', 'best budget hostels'. Avoids luxury items."
                    autoComplete="off"
                    multiline={6}
                    helpText="This context is passed to the LLM during analysis runs."
                    autoFocus
                  />
                </BlockStack>
              )}

              <Box
                paddingBlockStart="400"
                borderBlockStartWidth="025"
                borderColor="border-subdued"
              >
                <InlineStack align="end" gap="300">
                  {step > 1 && (
                    <Button onClick={handleBack} disabled={isLoading}>
                      Back
                    </Button>
                  )}
                  {step < 4 ? (
                    <Button
                      variant="primary"
                      onClick={handleNext}
                      disabled={
                        isLoading ||
                        (step === 1 && !newPersona.name) ||
                        (step === 2 && !newPersona.demographics)
                      }
                    >
                      Next Step
                    </Button>
                  ) : (
                    <Button
                      variant="primary"
                      icon={PlusIcon}
                      onClick={handleSave}
                      disabled={isLoading}
                      loading={isLoading}
                    >
                      Create Persona
                    </Button>
                  )}
                </InlineStack>
              </Box>
            </BlockStack>
          </Card>
        </div>
      </BlockStack>
    </Box>
  );
};
