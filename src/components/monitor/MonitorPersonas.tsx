import {
  BlockStack,
  Text,
  Grid,
  InlineStack,
  Banner,
  Button,
  Card,
  EmptyState,
} from "@shopify/polaris";
import { PlusIcon } from "@shopify/polaris-icons";
import { useState, useEffect, useRef } from "react";
// import { useSubmit } from "@remix-run/react";
const useSubmit = () => (target: any, options?: any) =>
  console.log("Mock submit:", target, options);
import { PersonaCreationWizard } from "./personas/PersonaCreationWizard";
import { PersonaDetailModal } from "./personas/PersonaDetailModal";
import { PersonaCard } from "./personas/PersonaCard";

interface MonitorPersonasProps {
  data: any;
  topics: { label: string; value: string }[];
  personas?: any[];
  navigation?: any;
  isWaitingForDataUpdate?: boolean;
  personaCreating?: boolean;
  setPersonaCreating?: (value: boolean) => void;
  personaDetailOpen?: boolean;
  setPersonaDetailOpen?: (value: boolean) => void;
  onPersonaAction?: (actionType: string) => void;
}

export function MonitorPersonas({
  data,
  topics,
  personas = [],
  navigation,
  isWaitingForDataUpdate = false,
  personaCreating = false,
  setPersonaCreating,
  personaDetailOpen = false,
  setPersonaDetailOpen,
  onPersonaAction,
}: MonitorPersonasProps) {
  const submit = useSubmit();
  const [selectedPersona, setSelectedPersona] = useState<any | null>(null);
  const [isCreating, setIsCreating] = useState(false);
  const [step, setStep] = useState(1);

  // New Persona State
  const [newPersona, setNewPersona] = useState({
    name: "",
    tagline: "",
    demographics: "",
    background: "",
    goals: "",
    constraints: [] as string[],
    aiSimulation: "",
  });
  const [constraintInput, setConstraintInput] = useState("");

  const handleAddConstraint = () => {
    if (constraintInput.trim()) {
      setNewPersona({
        ...newPersona,
        constraints: [...newPersona.constraints, constraintInput.trim()],
      });
      setConstraintInput("");
    }
  };

  const handleSave = () => {
    const formData = new FormData();
    formData.append("action", "create_persona");
    formData.append("name", newPersona.name);
    formData.append("tagline", newPersona.tagline);
    formData.append("demographics", newPersona.demographics);
    formData.append("background", newPersona.background);
    formData.append("goals", newPersona.goals);
    formData.append("aiSimulation", newPersona.aiSimulation);
    formData.append("constraints", JSON.stringify(newPersona.constraints));

    // Notify parent to track action (for DRY loading/toast/refresh pattern)
    if (onPersonaAction) {
      onPersonaAction("create_persona");
    }

    submit(formData, { method: "post" });

    // DON'T close wizard or reset form here - will be handled by parent after data updates
    // The parent will call setPersonaCreating(false) via pendingModalCloseRef pattern
    // This ensures continuous loading until UI updates
  };

  const handleDelete = (id: string) => {
    const formData = new FormData();
    formData.append("action", "delete_persona");
    formData.append("personaId", id);

    // Notify parent to track action (for DRY loading/toast/refresh pattern)
    if (onPersonaAction) {
      onPersonaAction("delete_persona");
    }

    submit(formData, { method: "post" });

    // DON'T close detail modal here - will be handled by parent after data updates
    // The parent will call setPersonaDetailOpen(false) via pendingModalCloseRef pattern
    // This ensures continuous loading until UI updates
  };

  // Use parent-controlled state if available, fallback to local state
  const effectiveIsCreating = setPersonaCreating ? personaCreating : isCreating;
  const effectiveSetIsCreating = setPersonaCreating || setIsCreating;

  // Track previous values to detect state changes
  const prevPersonaDetailOpenRef = useRef(personaDetailOpen);

  // Sync with parent-controlled states for modal closing after data updates
  useEffect(() => {
    // When parent closes the creation wizard, also reset form state
    if (setPersonaCreating && !personaCreating && step !== 1) {
      setStep(1);
      setNewPersona({
        name: "",
        tagline: "",
        demographics: "",
        background: "",
        goals: "",
        constraints: [],
        aiSimulation: "",
      });
    }
  }, [personaCreating, setPersonaCreating, step]);

  useEffect(() => {
    // Only clear selectedPersona when parent CHANGES personaDetailOpen from true to false
    // (not when it's already false - that would close the modal immediately on open!)
    const prevValue = prevPersonaDetailOpenRef.current;
    if (
      setPersonaDetailOpen &&
      prevValue === true &&
      personaDetailOpen === false &&
      selectedPersona
    ) {
      setSelectedPersona(null);
    }
    prevPersonaDetailOpenRef.current = personaDetailOpen;
  }, [personaDetailOpen, setPersonaDetailOpen, selectedPersona]);

  useEffect(() => {
    // Sync personaDetailOpen state with selectedPersona (when user opens modal)
    if (setPersonaDetailOpen && selectedPersona && !personaDetailOpen) {
      setPersonaDetailOpen(true);
    } else if (setPersonaDetailOpen && !selectedPersona && personaDetailOpen) {
      setPersonaDetailOpen(false);
    }
  }, [selectedPersona, personaDetailOpen, setPersonaDetailOpen]);

  const isLoading =
    navigation?.state === "submitting" || isWaitingForDataUpdate;

  // --- Creation Wizard View ---
  if (effectiveIsCreating) {
    return (
      <PersonaCreationWizard
        isOpen={effectiveIsCreating}
        onClose={() => effectiveSetIsCreating(false)}
        isLoading={isLoading}
        step={step}
        setStep={setStep}
        newPersona={newPersona}
        setNewPersona={setNewPersona}
        constraintInput={constraintInput}
        setConstraintInput={setConstraintInput}
        handleAddConstraint={handleAddConstraint}
        handleSave={handleSave}
      />
    );
  }

  // --- Main Dashboard View ---
  return (
    <BlockStack gap="600">
      {/* Intro Banner */}
      <Banner tone="info" onDismiss={() => {}}>
        <BlockStack gap="200">
          <Text variant="headingSm" as="h2">
            Persona Simulation
          </Text>
          <p>
            These profiles represent different customer segments. Our AI
            simulates these personas during prompt runs to ensure your brand
            resonates with diverse audiences.
          </p>
        </BlockStack>
      </Banner>

      {/* Header & Actions */}
      <InlineStack align="space-between" blockAlign="center">
        <Text variant="headingLg" as="h2">
          My Personas ({personas.length})
        </Text>
        <Button
          variant="primary"
          icon={PlusIcon}
          onClick={() => effectiveSetIsCreating(true)}
        >
          Create Persona
        </Button>
      </InlineStack>

      {/* Content Area */}
      {personas.length === 0 ? (
        <Card>
          <EmptyState
            heading="Create your first persona"
            image="https://cdn.shopify.com/s/files/1/0262/4071/2726/files/emptystate-files.png"
            action={{
              content: "Create Persona",
              onAction: () => effectiveSetIsCreating(true),
              icon: PlusIcon,
            }}
          >
            <p>
              Define customer personas to simulate how different audiences
              search for your products.
            </p>
          </EmptyState>
        </Card>
      ) : (
        <Grid>
          {personas.map((persona, index) => (
            <Grid.Cell
              key={index}
              columnSpan={{ xs: 6, sm: 6, md: 4, lg: 4, xl: 3 }}
            >
              <PersonaCard
                persona={persona}
                onClick={() => setSelectedPersona(persona)}
              />
            </Grid.Cell>
          ))}
        </Grid>
      )}

      {/* Details Modal */}
      <PersonaDetailModal
        selectedPersona={selectedPersona}
        onClose={() => setSelectedPersona(null)}
        onDelete={handleDelete}
        isLoading={isLoading}
      />
    </BlockStack>
  );
}
