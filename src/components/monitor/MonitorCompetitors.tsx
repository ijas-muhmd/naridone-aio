import {
  BlockStack,
  Box,
  InlineStack,
  Text,
  Tooltip,
  Icon,
  useIndexResourceState,
} from "@shopify/polaris";
import { ViewIcon, NoteIcon } from "@shopify/polaris-icons";
import { useState } from "react";
import { ViewConfigButton } from "./ViewConfigButton";
import { SuggestedBrandsBanner } from "./competitors/SuggestedBrandsBanner";
import { CompetitorsGrid } from "./competitors/CompetitorsGrid";
import { CompetitorsList } from "./competitors/CompetitorsList";

export function MonitorCompetitors({
  competitors,
  suggestedBrands,
  onTrackCompetitor,
  onSelectCompetitor,
}: {
  competitors: any[];
  suggestedBrands: any[];
  onTrackCompetitor: (name: string, domain: string) => void;
  onSelectCompetitor: (comp: any) => void;
}) {
  const [view, setView] = useState<"grid" | "list">("list");
  const [logoColors, setLogoColors] = useState<Record<string, string>>({});

  // Sorting State
  const [sortSelected, setSortSelected] = useState(["mentions"]);
  const [sortDirection, setSortDirection] = useState<
    "ascending" | "descending"
  >("descending");

  const handleColorExtracted = (id: string, color: string) => {
    setLogoColors((prev) => ({ ...prev, [id]: color }));
  };

  // Filter out null competitors
  const validCompetitors = competitors.filter(
    (c): c is NonNullable<typeof c> => c !== null,
  );

  const { selectedResources, allResourcesSelected, handleSelectionChange } =
    useIndexResourceState(validCompetitors);

  const sortedCompetitors = [...validCompetitors].sort((a, b) => {
    const key = sortSelected[0];
    const direction = sortDirection === "ascending" ? 1 : -1;

    let valA, valB;
    if (key === "brand") {
      valA = a.name;
      valB = b.name;
    } else if (key === "mentions") {
      valA = a.stats?.visibility || 0;
      valB = b.stats?.visibility || 0;
    } else if (key === "sentiment") {
      valA = a.stats?.sentiment || 0;
      valB = b.stats?.sentiment || 0;
    } else if (key === "position") {
      valA = a.stats?.position || 999;
      valB = b.stats?.position || 999;
    } else return 0;

    if (valA < valB) return -1 * direction;
    if (valA > valB) return 1 * direction;
    return 0;
  });

  const onSort = (index: number, direction: "ascending" | "descending") => {
    setSortDirection(direction);
    const keys = ["brand", "mentions", "sentiment", "position"];
    setSortSelected([keys[index]]);
  };

  return (
    <BlockStack gap="600">
      {/* Suggested Brands Banner */}
      <SuggestedBrandsBanner
        suggestedBrands={suggestedBrands}
        onTrackCompetitor={onTrackCompetitor}
      />

      {/* Main Content */}
      <BlockStack gap="400">
        <Box padding="0">
          <InlineStack align="space-between" blockAlign="center">
            <InlineStack gap="200">
              <Text variant="headingSm" as="h3">
                Competitor Watchlist
              </Text>
              <Tooltip content="Brands you are actively monitoring for visibility and sentiment changes.">
                <Icon source={NoteIcon} tone="subdued" />
              </Tooltip>
            </InlineStack>
            <ViewConfigButton
              label="Table Config"
              options={[
                { value: "grid", label: "Grid", icon: ViewIcon },
                { value: "list", label: "List", icon: NoteIcon },
              ]}
              selectedValue={view}
              onSelect={(value: string) => setView(value as "grid" | "list")}
            />
          </InlineStack>
        </Box>

        {validCompetitors.length === 0 ? (
          <Box padding="0">
            <Text tone="subdued" as="p">
              No competitors tracked yet.
            </Text>
          </Box>
        ) : view === "grid" ? (
          <CompetitorsGrid
            sortedCompetitors={sortedCompetitors}
            logoColors={logoColors}
            handleColorExtracted={handleColorExtracted}
            onSelectCompetitor={onSelectCompetitor}
          />
        ) : (
          <CompetitorsList
            validCompetitors={validCompetitors}
            allResourcesSelected={allResourcesSelected}
            selectedResources={selectedResources}
            handleSelectionChange={handleSelectionChange}
            sortDirection={sortDirection}
            sortSelected={sortSelected}
            onSort={onSort}
            sortedCompetitors={sortedCompetitors}
            onSelectCompetitor={onSelectCompetitor}
          />
        )}
      </BlockStack>
    </BlockStack>
  );
}
