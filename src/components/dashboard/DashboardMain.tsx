import { useState, useCallback } from "react";
import { Page, BlockStack, Box, Grid } from "@shopify/polaris";
import { TitleBar } from "../MockTitleBar";
import { DashboardHeader } from "./DashboardHeader";
import { AttentionRequiredCard } from "./AttentionRequiredCard";
import { MonitorSection } from "./MonitorSection";
import { ImproveSection } from "./ImproveSection";
import { ModelsModal } from "./ModelsModal";

interface MainDashboardProps {
  brandName: string;
  pendingFixes: number;
  stats: {
    visibilityScore: number;
    avgSentiment: number;
    totalPrompts: number;
  };
  chartData: any[];
  fixStats: {
    total: number;
    appliedLast30Days: number;
    byStatus: {
      pending: number;
      suggested: number;
      applied: number;
    };
    byPriority: {
      critical: number;
      moderate: number;
      minor: number;
    };
  };
  marketData: {
    marketAvgVisibility: number;
    marketAvgSentiment: number;
  };
  activeModels?: string[];
  showOnboardingHero?: boolean;
}

export default function DashboardMain({
  brandName,
  pendingFixes,
  stats,
  chartData,
  fixStats,
  marketData,
  activeModels = [],
  showOnboardingHero = false,
}: MainDashboardProps) {
  const [modelsModalOpen, setModelsModalOpen] = useState(false);

  const handleModelsModalChange = useCallback(() => {
    setModelsModalOpen(!modelsModalOpen);
  }, [modelsModalOpen]);

  const handleSaveModels = useCallback((selectedModels: string[]) => {
    console.log("Saving models:", selectedModels);
    setModelsModalOpen(false);
  }, []);

  return (
    <Page>
      <TitleBar title="Home" />

      <BlockStack gap="800">
        <DashboardHeader
          brandName={brandName}
          showOnboardingHero={showOnboardingHero}
          onConfigureModels={handleModelsModalChange}
        />

        <Box paddingInline="400">
          <Grid>
            <Grid.Cell columnSpan={{ xs: 6, sm: 6, lg: 12, xl: 12 }}>
              <AttentionRequiredCard pendingFixes={pendingFixes} />
            </Grid.Cell>
          </Grid>
        </Box>

        <Box paddingInline="400">
          <MonitorSection
            stats={stats}
            marketData={marketData}
            chartData={chartData}
            brandName={brandName}
          />
        </Box>

        <Box paddingInline="400">
          <ImproveSection fixStats={fixStats} />
        </Box>
      </BlockStack>

      <ModelsModal
        activeModels={activeModels}
        brandName={brandName}
        open={modelsModalOpen}
        onClose={handleModelsModalChange}
        onSave={handleSaveModels}
      />
    </Page>
  );
}
