import {
  BlockStack,
  InlineStack,
  Text,
  Tooltip,
  Icon,
  Grid,
} from "@shopify/polaris";
import { InfoIcon, GlobeIcon, LinkIcon } from "@shopify/polaris-icons";
import { useState, useMemo, useCallback } from "react";
import { ViewConfigButton } from "./ViewConfigButton";
import { CitationGraph } from "./CitationGraph";
import { CitationShareCard } from "./citation/CitationShareCard";
import { CitationRankCard } from "./citation/CitationRankCard";
import { CitationTypesCard } from "./citation/CitationTypesCard";
import { CitationDomainsCard } from "./citation/CitationDomainsCard";
import { CitationPagesCard } from "./citation/CitationPagesCard";
import { CitationModals } from "./citation/CitationModals";

interface MonitorCitationProps {
  topics?: Array<{ label: string; value: string }>;
  data?: any;
  brandName?: string;
}

export function MonitorCitation({
  topics = [],
  data,
  brandName,
}: MonitorCitationProps) {
  const [view, setView] = useState<"bar" | "line">("bar");
  const [hiddenSeries, setHiddenSeries] = useState<string[]>([]);
  const [isRankModalOpen, setIsRankModalOpen] = useState(false);
  const [isPagesModalOpen, setIsPagesModalOpen] = useState(false);

  // Domain Details Modal State
  const [selectedDomainForDetails, setSelectedDomainForDetails] = useState<
    string | null
  >(null);
  const [expandedDomains, setExpandedDomains] = useState<Set<string>>(
    new Set(),
  );

  const selectedDomainData = useMemo(
    () =>
      data?.topCitationDomains?.find(
        (d: any) => d.domain === selectedDomainForDetails,
      ),
    [selectedDomainForDetails, data],
  );

  const toggleRankModal = useCallback(
    () => setIsRankModalOpen((active) => !active),
    [],
  );
  const togglePagesModal = useCallback(
    () => setIsPagesModalOpen((active) => !active),
    [],
  );

  const handleDomainClick = (domain: string) => {
    setSelectedDomainForDetails(domain);
  };

  const toggleDomain = (domain: string) => {
    const newExpanded = new Set(expandedDomains);
    if (newExpanded.has(domain)) {
      newExpanded.delete(domain);
    } else {
      newExpanded.add(domain);
    }
    setExpandedDomains(newExpanded);
  };

  const closeDomainDetails = () => setSelectedDomainForDetails(null);

  // Use real data from props or fallback to empty state
  const barChartData = data?.barChartData || [];
  const lineChartData = useMemo(() => data?.lineChartData || [], [data]);
  const citationTypesData = data?.citationTypesData || [
    {
      name: "Citation Types",
      Earned: 0,
      Social: 0,
      Owned: 0,
      Competition: 0,
    },
  ];
  const topCitationDomains = data?.topCitationDomains || [];
  const topCitationPages = data?.topCitationPages || [];
  const totalCitations = data?.totalCitations || 0;
  const citationGraph = data?.citationGraph || null;

  // Calculate real rank
  const myDomainRank = topCitationDomains.find(
    (d: any) => d.category === "Owned",
  );
  const rankDisplay = myDomainRank ? `#${myDomainRank.rank}` : "-";
  const rankShare = myDomainRank ? `${myDomainRank.share}%` : "-";

  // Extract domains from lineChartData
  const lineChartDomains = useMemo(() => {
    if (!lineChartData || lineChartData.length === 0) return [];
    // Get all keys from the first object that aren't 'date'
    const keys = Object.keys(lineChartData[0]).filter((key) => key !== "date");
    return keys;
  }, [lineChartData]);

  return (
    <BlockStack gap="600">
      <InlineStack align="space-between" blockAlign="center">
        <BlockStack gap="050">
          <InlineStack gap="200" blockAlign="center" align="start">
            <Text variant="headingMd" as="h2">
              Citation Share{" "}
            </Text>
            <Tooltip content="The percentage of all citations that come from your brand's website. This chart helps you track how often your content is being used as a source in AI-generated answers over time.">
              <Icon source={InfoIcon} tone="base" />
            </Tooltip>
          </InlineStack>
          <Text variant="bodySm" tone="subdued" as="span">
            How often {brandName || "your brand"} is cited by AI-generated
            answers
          </Text>
        </BlockStack>
        <ViewConfigButton
          label="Chart Config"
          options={[
            { value: "bar", label: "Bar Chart", icon: GlobeIcon },
            { value: "line", label: "Line Chart", icon: LinkIcon },
          ]}
          selectedValue={view}
          onSelect={(value: string) => setView(value as "bar" | "line")}
        />
      </InlineStack>

      <Grid>
        {/* Citation Share Chart Card - Left Side */}
        <Grid.Cell columnSpan={{ xs: 6, sm: 6, md: 6, lg: 6, xl: 6 }}>
          <CitationShareCard
            view={view}
            barChartData={barChartData}
            lineChartData={lineChartData}
            lineChartDomains={lineChartDomains}
            citationTypesData={citationTypesData}
            rankDisplay={rankDisplay}
          />
        </Grid.Cell>

        {/* Citation Rank Card - Right Side */}
        <Grid.Cell columnSpan={{ xs: 6, sm: 6, md: 6, lg: 6, xl: 6 }}>
          <CitationRankCard
            topCitationDomains={topCitationDomains}
            rankDisplay={rankDisplay}
            rankShare={rankShare}
            toggleRankModal={toggleRankModal}
            handleDomainClick={handleDomainClick}
          />
        </Grid.Cell>
      </Grid>

      <CitationModals
        isRankModalOpen={isRankModalOpen}
        toggleRankModal={toggleRankModal}
        topCitationDomains={topCitationDomains}
        expandedDomains={expandedDomains}
        toggleDomain={toggleDomain}
        isPagesModalOpen={isPagesModalOpen}
        togglePagesModal={togglePagesModal}
        topCitationPages={topCitationPages}
        selectedDomainForDetails={selectedDomainForDetails}
        closeDomainDetails={closeDomainDetails}
        selectedDomainData={selectedDomainData}
      />

      {/* Citation Types Card */}
      <CitationTypesCard
        citationTypesData={citationTypesData}
        totalCitations={totalCitations}
        hiddenSeries={hiddenSeries}
        setHiddenSeries={setHiddenSeries}
      />

      {citationGraph && (
        <div style={{ marginBottom: "20px" }}>
          <CitationGraph data={citationGraph} />
        </div>
      )}

      {/* <div style={{ marginBottom: '20px' }}>
                <RegionGraph />
            </div> */}

      <CitationDomainsCard
        topCitationDomains={topCitationDomains}
        handleDomainClick={handleDomainClick}
        onExpand={toggleRankModal}
      />

      {/* Top Citation Pages Card */}
      <CitationPagesCard
        topCitationPages={topCitationPages}
        togglePagesModal={togglePagesModal}
      />
    </BlockStack>
  );
}
