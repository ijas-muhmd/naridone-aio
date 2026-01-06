import {
  Layout,
  Button,
  BlockStack,
  InlineStack,
  Box,
  Banner,
  Text,
  Select,
  DropZone,
  LegacyStack,
  Icon,
  Modal,
  TextField,
  SkeletonPage,
  SkeletonBodyText,
  SkeletonDisplayText,
  Grid,
  Card,
} from "@shopify/polaris";
import { UploadIcon, PlusIcon, NoteIcon } from "@shopify/polaris-icons";
import { useNavigate } from "react-router-dom";
import { useState, useCallback, useEffect, useMemo } from "react";
import { DataFilters, type FilterOptions } from "../DataFilters";
import { AVAILABLE_MODELS } from "../../utils/platforms";
import { OptimizationSummary } from "./dashboard/OptimizationSummary";
import { IssueAnalysis } from "./dashboard/IssueAnalysis";
import { FixPerformance } from "./dashboard/FixPerformance";
import { VisibilitySalesCorrelation } from "./dashboard/VisibilitySalesCorrelation";
import { ProductHealthScorecard } from "./dashboard/ProductHealthScorecard";
import { IssueTrendsAnalysis } from "./dashboard/IssueTrendsAnalysis";
import { ModelsModal } from "./dashboard/ModelsModal";

interface OptimizationDashboardProps {
  statsData: any;
  trendsData: any;
  fixesData: any;
  filters: FilterOptions;
  onFilterChange: (filters: FilterOptions) => void;
  isLoading: boolean;
}

export function OptimizationDashboard({
  statsData,
  trendsData,
  fixesData,
  filters,
  onFilterChange,
  isLoading,
}: OptimizationDashboardProps) {
  const navigate = useNavigate();

  // Data Preparation
  const displayStats = statsData.stats ||
    fixesData.stats || { visibilityScore: 0 };
  const displayFixStats = fixesData.fixStats || {
    total: 0,
    byPriority: { critical: 0, moderate: 0, minor: 0 },
    byCategory: {},
    byStatus: { pending: 0, suggested: 0, applied: 0 },
    appliedLast30Days: 0,
  };
  const displayAutopilotActivity =
    trendsData.autopilotActivity || fixesData.autopilotActivity || [];
  const displayFixSuccessTrend =
    trendsData.fixSuccessTrend || fixesData.fixSuccessTrend || [];
  const displayVisibilityCorrelation =
    trendsData.visibilityCorrelation || fixesData.visibilityCorrelation || [];
  const displayProductHealth = fixesData.productHealth || {
    missingMeta: 0,
    thinContent: 0,
    noAltText: 0,
    stale: 0,
    schemaErrors: 0,
  };
  const displayIssueDistributionOverTime =
    trendsData.issueDistributionOverTime ||
    fixesData.issueDistributionOverTime ||
    [];
  const displayCategoryHeatmap =
    trendsData.categoryHeatmap || fixesData.categoryHeatmap || [];
  const displayProducts = fixesData.products || [];
  const displayExistingTopics = fixesData.existingTopics || [];

  const products = displayProducts;

  const fetchedNeedsScopeUpdate =
    statsData?.needsScopeUpdate || fixesData?.needsScopeUpdate || false;
  const fetchedMissingScopes =
    statsData?.missingScopes || fixesData?.missingScopes || [];

  // Modal State
  const [activeModal, setActiveModal] = useState(false);
  const [modalMode, setModalMode] = useState<"single" | "bulk">("single");
  const [newPromptText, setNewPromptText] = useState("");
  const [newPromptLocation, setNewPromptLocation] = useState("United States");
  const [bulkFiles, setBulkFiles] = useState<File[]>([]);
  const [parsedBulkPrompts, setParsedBulkPrompts] = useState<string[]>([]);

  const [modelsModalOpen, setModelsModalOpen] = useState(false);
  const fetchedActiveModels = useMemo(
    () =>
      statsData.activeModels ||
      fixesData.activeModels || [
        "chatgpt-search",
        "perplexity-sonar",
        "google-search-gemini",
      ],
    [statsData.activeModels, fixesData.activeModels],
  );
  const fetchedBrandName = useMemo(
    () => statsData.brandName || fixesData.brandName || "",
    [statsData.brandName, fixesData.brandName],
  );

  const [selectedModels, setSelectedModels] =
    useState<string[]>(fetchedActiveModels);
  const [configBrandName, setConfigBrandName] = useState(fetchedBrandName);

  useEffect(() => {
    if (statsData.activeModels || fixesData.activeModels) {
      setSelectedModels(statsData.activeModels || fixesData.activeModels);
    }
    if (statsData.brandName || fixesData.brandName) {
      setConfigBrandName(statsData.brandName || fixesData.brandName);
    }
  }, [statsData, fixesData]);

  const handleModalChange = useCallback(() => {
    setActiveModal(!activeModal);
    setNewPromptText("");
    setNewPromptLocation("United States");
    setModalMode("single");
    setBulkFiles([]);
    setParsedBulkPrompts([]);
  }, [activeModal]);

  const handleDropZoneDrop = useCallback(
    (_dropFiles: File[], acceptedFiles: File[], _rejectedFiles: File[]) => {
      setBulkFiles(acceptedFiles);
      if (acceptedFiles.length > 0) {
        const file = acceptedFiles[0];
        const reader = new FileReader();
        reader.onload = (e) => {
          const text = e.target?.result as string;
          const prompts = text
            .split(/\r?\n/)
            .map((p) => p.trim())
            .filter((p) => p.length > 0);
          setParsedBulkPrompts(prompts);
        };
        reader.readAsText(file);
      }
    },
    [],
  );

  const handleAddPrompt = () => {
    if (!newPromptText) return;
    console.log("Action: addPrompt", {
      text: newPromptText,
      location: newPromptLocation,
    });
    setNewPromptText("");
    handleModalChange();
  };

  const handleAddBulkPrompts = () => {
    if (parsedBulkPrompts.length === 0) return;
    console.log("Action: addBulkPrompts", {
      prompts: JSON.stringify(parsedBulkPrompts),
      location: newPromptLocation,
    });
    handleModalChange();
  };

  const handleModelsModalChange = useCallback(() => {
    setModelsModalOpen(!modelsModalOpen);
    if (!modelsModalOpen) {
      setSelectedModels(fetchedActiveModels);
      setConfigBrandName(fetchedBrandName);
    }
  }, [modelsModalOpen, fetchedActiveModels, fetchedBrandName]);

  const handleSaveModels = () => {
    console.log("Action: updateConfig", {
      activeModels: selectedModels,
      brandName: configBrandName,
    });
    setModelsModalOpen(false);
  };

  const toggleModel = (id: string) => {
    if (selectedModels.includes(id)) {
      setSelectedModels(selectedModels.filter((m) => m !== id));
    } else {
      setSelectedModels([...selectedModels, id]);
    }
  };

  const locationOptions = [
    { label: "United States", value: "United States" },
    { label: "United Kingdom", value: "United Kingdom" },
    { label: "Canada", value: "Canada" },
    { label: "Australia", value: "Australia" },
    { label: "Germany", value: "Germany" },
    { label: "France", value: "France" },
    { label: "Japan", value: "Japan" },
    { label: "Global", value: "Global" },
  ];

  if (isLoading) {
    return (
      <SkeletonPage primaryAction>
        <Layout>
          <Layout.Section>
            <Card>
              <SkeletonBodyText lines={2} />
            </Card>
          </Layout.Section>
          <Layout.Section>
            <Card>
              <SkeletonDisplayText size="small" />
              <div style={{ height: "200px" }} />
            </Card>
          </Layout.Section>
        </Layout>
      </SkeletonPage>
    );
  }

  return (
    <>
      {fetchedNeedsScopeUpdate && (
        <Layout.Section>
          <Banner
            title="Update Required"
            tone="warning"
            action={{
              content: "Update Permissions",
              url: `/auth/update-scopes?scopes=${fetchedMissingScopes.join(",")}`,
            }}
          >
            <p>
              New features require additional permissions:{" "}
              {fetchedMissingScopes.join(", ")}. Please update to continue.
            </p>
          </Banner>
        </Layout.Section>
      )}

      <BlockStack gap="500">
        <DataFilters
          filters={filters}
          onChange={onFilterChange}
          products={products}
          topics={displayExistingTopics.map((t: string) => ({
            label: t,
            value: t,
          }))}
          hideRegion
        />

        <Layout>
          {/* Top Row: Summary Stats */}
          <Layout.Section>
            <OptimizationSummary
              displayStats={displayStats}
              displayFixStats={displayFixStats}
            />
          </Layout.Section>

          {/* Row 2: Issue Analysis (Severity & Category) - FixesOverview component contains this logic */}
          <Layout.Section>
            <Grid>
              <Grid.Cell columnSpan={{ xs: 6, sm: 6, md: 6, lg: 12, xl: 12 }}>
                <IssueAnalysis
                  displayFixStats={displayFixStats}
                  navigate={navigate}
                />
              </Grid.Cell>
            </Grid>
          </Layout.Section>

          {/* Row 3: Fix Performance */}
          <Layout.Section>
            <Grid>
              <Grid.Cell columnSpan={{ xs: 6, sm: 6, md: 6, lg: 12, xl: 12 }}>
                <FixPerformance
                  displayAutopilotActivity={displayAutopilotActivity}
                  displayFixSuccessTrend={displayFixSuccessTrend}
                />
              </Grid.Cell>
            </Grid>
          </Layout.Section>

          {/* Row 4: Visibility Correlation & Health */}
          <Layout.Section>
            <Card padding="0">
              <Box padding="400">
                <InlineStack gap="600" align="start" blockAlign="stretch">
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <VisibilitySalesCorrelation
                      displayVisibilityCorrelation={
                        displayVisibilityCorrelation
                      }
                    />
                  </div>
                  <ProductHealthScorecard
                    data={displayProductHealth}
                    isLoading={isLoading}
                  />
                </InlineStack>
              </Box>
            </Card>
          </Layout.Section>

          {/* Row 5: Issue Trends & Analysis */}
          <Layout.Section>
            <IssueTrendsAnalysis
              displayIssueDistributionOverTime={
                displayIssueDistributionOverTime
              }
              displayCategoryHeatmap={displayCategoryHeatmap}
            />
          </Layout.Section>
        </Layout>
      </BlockStack>

      <ModelsModal
        open={modelsModalOpen}
        onClose={handleModelsModalChange}
        availableModels={AVAILABLE_MODELS}
        selectedModels={selectedModels}
        configBrandName={configBrandName}
        setConfigBrandName={setConfigBrandName}
        toggleModel={toggleModel}
        onSave={handleSaveModels}
      />

      <Modal
        open={activeModal}
        onClose={handleModalChange}
        title="Add Tracking Prompt"
        primaryAction={{
          content: modalMode === "single" ? "Add Prompt" : "Upload CSV",
          onAction:
            modalMode === "single" ? handleAddPrompt : handleAddBulkPrompts,
          disabled:
            modalMode === "single"
              ? !newPromptText
              : parsedBulkPrompts.length === 0,
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
            <Select
              label="Mode"
              options={[
                { label: "Single Prompt", value: "single" },
                { label: "Bulk Upload (CSV/Text)", value: "bulk" },
              ]}
              value={modalMode}
              onChange={(val) => setModalMode(val as "single" | "bulk")}
            />

            {modalMode === "single" ? (
              <>
                <TextField
                  label="Search Query"
                  value={newPromptText}
                  onChange={setNewPromptText}
                  placeholder="e.g., 'best running shoes for flat feet'"
                  autoComplete="off"
                  helpText="Enter a query your customers might use on AI search engines."
                />
                <Select
                  label="Target Location"
                  options={locationOptions}
                  value={newPromptLocation}
                  onChange={setNewPromptLocation}
                />
              </>
            ) : (
              <BlockStack gap="400">
                <DropZone onDrop={handleDropZoneDrop} allowMultiple={false}>
                  {bulkFiles.length > 0 ? (
                    <BlockStack>
                      <div style={{ padding: "2rem", textAlign: "center" }}>
                        <Text as="p" variant="bodyMd">
                          {bulkFiles[0].name}
                        </Text>
                        <Text as="p" variant="bodySm" tone="subdued">
                          {parsedBulkPrompts.length} prompts detected
                        </Text>
                      </div>
                    </BlockStack>
                  ) : (
                    <DropZone.FileUpload actionHint="Accepts .txt or .csv" />
                  )}
                </DropZone>
                <Select
                  label="Target Location (Applied to all)"
                  options={locationOptions}
                  value={newPromptLocation}
                  onChange={setNewPromptLocation}
                />
              </BlockStack>
            )}
          </BlockStack>
        </Modal.Section>
      </Modal>
    </>
  );
}
