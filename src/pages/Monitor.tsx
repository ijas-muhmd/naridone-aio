import { useNavigate, useLocation } from "react-router-dom";
import {
  Page,
  Layout,
  Card,
  Box,
  Frame,
  BlockStack,
  SkeletonPage,
  SkeletonBodyText,
  SkeletonDisplayText,
  Icon,
} from "@shopify/polaris";
import { TitleBar } from "@shopify/app-bridge-react";
import {
  SearchIcon,
  PersonIcon,
  LinkIcon,
  ChatIcon,
  NoteIcon,
  GlobeIcon,
  HomeIcon,
  PlusIcon,
} from "@shopify/polaris-icons";
import { useState, useEffect, lazy, Suspense } from "react";
import { AddCompetitorModal } from "../components/monitor/competitors/AddCompetitorModal";
import { AddPromptModal } from "../components/monitor/tracking/AddPromptModal";

// Lazy load components
const MonitorDashboard = lazy(() =>
  import("../components/monitor/MonitorDashboard").then((m) => ({
    default: m.MonitorDashboard,
  })),
);
const MonitorTracking = lazy(() =>
  import("../components/monitor/MonitorTracking").then((m) => ({
    default: m.MonitorTracking,
  })),
);
const MonitorCompetitors = lazy(() =>
  import("../components/monitor/MonitorCompetitors").then((m) => ({
    default: m.MonitorCompetitors,
  })),
);
const MonitorMentions = lazy(() =>
  import("../components/monitor/MonitorMentions").then((m) => ({
    default: m.MonitorMentions,
  })),
);
const MonitorCitation = lazy(() =>
  import("../components/monitor/MonitorCitation").then((m) => ({
    default: m.MonitorCitation,
  })),
);
const MonitorSentiment = lazy(() =>
  import("../components/monitor/MonitorSentiment").then((m) => ({
    default: m.MonitorSentiment,
  })),
);
const MonitorPlatforms = lazy(() =>
  import("../components/monitor/MonitorPlatforms").then((m) => ({
    default: m.MonitorPlatforms,
  })),
);
const MonitorPersonas = lazy(() =>
  import("../components/monitor/MonitorPersonas").then((m) => ({
    default: m.MonitorPersonas,
  })),
);

// Mock Data
const MOCK_MONITOR_DATA = {
  dashboard: {
    metrics: {
      visibility: 78,
      sentiment: 82,
      mentions: 145,
    },
  },
  stats: {
    brandName: "My Brand",
    totalMentions: 1250,
    sentimentScore: 85,
  },
  tracking: {
    prompts: [
      {
        id: "1",
        text: "Best running shoes 2024",
        frequency: "Daily",
        status: "ACTIVE",
        topic: "Running",
        volume: "High",
        runs: [
          {
            date: "2024-01-01",
            visibility: 75,
            sentiment: 80,
            position: 3,
            mentions: [
              { id: "m1", brand: { name: "Nike" } },
              { id: "m2", brand: { name: "Adidas" } },
            ],
            citations: [{}, {}, {}],
          },
        ],
      },
      {
        id: "2",
        text: "Top rated eco-friendly sneakers",
        frequency: "Weekly",
        status: "ACTIVE",
        topic: "Sustainability",
        volume: "Medium",
        runs: [
          {
            date: "2024-01-02",
            visibility: 60,
            sentiment: 90,
            position: 5,
            mentions: [{ id: "m3", brand: { name: "Allbirds" } }],
            citations: [{}, {}],
          },
        ],
      },
      {
        id: "3",
        text: "Comfortable walking shoes for travel",
        frequency: "Daily",
        status: "SUGGESTED",
        topic: "Comfort",
        volume: "High",
        runs: [], // Suggestions usually don't have run data yet
      },
      {
        id: "4",
        text: "Waterproof hiking boots",
        frequency: "Monthly",
        status: "INACTIVE",
        topic: "Outdoors",
        volume: "Low",
        runs: [
          {
            date: "2023-12-01",
            visibility: 40,
            sentiment: 60,
            position: 12,
            mentions: [],
            citations: [{}],
          },
        ],
      },
    ],
  },
  competitors: {
    list: [
      { id: 1, name: "Competitor A", overlap: "High" },
      { id: 2, name: "Competitor B", overlap: "Medium" },
    ],
    suggested: [],
  },
  citations: {
    sources: [],
    stats: {},
    citationGraph: {
      nodes: [
        // Topics
        {
          id: "T1",
          name: "Ski Apparel",
          group: "topic",
          val: 40,
          color: "#8b5cf6",
          sov: 65,
          citationCount: 120,
          topPrompts: ["Best ski jackets 2024", "Warmest ski pants"],
        },
        {
          id: "T2",
          name: "All-Mountain Skis",
          group: "topic",
          val: 35,
          color: "#8b5cf6",
          sov: 45,
          citationCount: 95,
          topPrompts: [
            "Top rated all-mountain skis",
            "Best skis for intermediate",
          ],
        },
        {
          id: "T3",
          name: "Backcountry Gear",
          group: "topic",
          val: 30,
          color: "#8b5cf6",
          sov: 25,
          citationCount: 80,
          topPrompts: [
            "Backcountry safety gear list",
            "Lightweight touring bindings",
          ],
        },

        // Owned
        {
          id: "D1",
          name: "you.com",
          group: "owned",
          val: 25,
          color: "#10b981",
          citationCount: 45,
          avgSentiment: 85,
          myMentions: 45,
          topBrands: ["You", "North Face"],
        },

        // Competitors
        {
          id: "C1",
          name: "rei.com",
          group: "competitor",
          val: 20,
          color: "#ef4444",
          citationCount: 65,
          avgSentiment: 70,
          myMentions: 5,
          topBrands: ["REI", "Patagonia", "Arc'teryx"],
        },
        {
          id: "C2",
          name: "backcountry.com",
          group: "competitor",
          val: 18,
          color: "#ef4444",
          citationCount: 55,
          avgSentiment: 65,
          myMentions: 2,
          topBrands: ["Backcountry", "Mammut"],
        },
        {
          id: "C3",
          name: "evo.com",
          group: "competitor",
          val: 15,
          color: "#ef4444",
          citationCount: 40,
          avgSentiment: 75,
          myMentions: 8,
          topBrands: ["Evo", "K2", "Salomon"],
        },

        // Editorial
        {
          id: "E1",
          name: "outdoorgearlab.com",
          group: "editorial",
          val: 12,
          color: "#f59e0b",
          citationCount: 35,
          avgSentiment: 80,
          myMentions: 12,
          topBrands: ["Arc'teryx", "Helly Hansen"],
        },
        {
          id: "E2",
          name: "switchbacktravel.com",
          group: "editorial",
          val: 10,
          color: "#f59e0b",
          citationCount: 25,
          avgSentiment: 85,
          myMentions: 15,
          topBrands: ["Patagonia", "You"],
        },
        {
          id: "E3",
          name: "powder.com",
          group: "editorial",
          val: 8,
          color: "#f59e0b",
          citationCount: 15,
          avgSentiment: 60,
          myMentions: 0,
          topBrands: ["Atomic", "Rossignol"],
        },

        // Social / Other
        {
          id: "S1",
          name: "reddit.com",
          group: "social",
          val: 15,
          color: "#9ca3af",
          citationCount: 50,
          avgSentiment: 45,
          myMentions: 20,
          topBrands: ["You", "CompetitorA"],
        },
        {
          id: "S2",
          name: "skitalk.com",
          group: "social",
          val: 8,
          color: "#9ca3af",
          citationCount: 12,
          avgSentiment: 55,
          myMentions: 3,
          topBrands: ["Volkl", "Blizzard"],
        },
        {
          id: "O1",
          name: "nytimes.com",
          group: "other",
          val: 5,
          color: "#9ca3af",
          citationCount: 5,
          avgSentiment: 50,
          myMentions: 0,
          topBrands: [],
        },
      ],
      links: [
        // Topic 1 connections
        { source: "T1", target: "D1" },
        { source: "T1", target: "C1" },
        { source: "T1", target: "C2" },
        { source: "T1", target: "E1" },
        { source: "T1", target: "E2" },
        { source: "T1", target: "S1" },

        // Topic 2 connections
        { source: "T2", target: "D1" },
        { source: "T2", target: "C1" },
        { source: "T2", target: "C3" },
        { source: "T2", target: "E1" },
        { source: "T2", target: "S2" },

        // Topic 3 connections
        { source: "T3", target: "D1" },
        { source: "T3", target: "C2" },
        { source: "T3", target: "E2" },
        { source: "T3", target: "E3" },
        { source: "T3", target: "O1" },

        // Inter-domain connections (optional but adds density)
        { source: "E1", target: "C1" },
        { source: "E2", target: "C2" },
        { source: "S1", target: "D1" },
      ],
    },
    topCitationDomains: [
      {
        rank: 1,
        domain: "wikipedia.org",
        category: "Earned",
        share: 12.5,
        change: 2.1,
        iconType: "text",
        iconText: "W",
        iconColor: "#000000",
        subdomains: 15,
      },
      {
        rank: 2,
        domain: "you.com",
        category: "Owned",
        share: 8.4,
        change: 0.5,
        iconType: "text",
        iconText: "Y",
        iconColor: "#219653",
        subdomains: 42,
      },
    ],
    topCitationPages: [
      {
        rank: 1,
        page: "https://wikipedia.org/wiki/Running_shoes",
        domain: "wikipedia.org",
        category: "Earned",
        share: 5.2,
        change: 1.1,
        mentioned: "Yes",
        competitors: ["Competitor A"],
        iconType: "text",
        iconText: "W",
        iconColor: "#000000",
      },
    ],
    barChartData: [
      { name: "wikipedia.org", value: 45 },
      { name: "you.com", value: 30 },
    ],
    citationTypesData: [
      {
        name: "Citation Types",
        Earned: 0,
        Social: 0.3,
        Owned: 7.7,
        Competition: 92,
      },
    ],
    totalCitations: 6278,
    lineChartData: [
      { date: "Dec 1", "wikipedia.org": 10, "you.com": 5 },
      { date: "Dec 2", "wikipedia.org": 12, "you.com": 7 },
      { date: "Dec 3", "wikipedia.org": 15, "you.com": 9 },
      { date: "Dec 4", "wikipedia.org": 14, "you.com": 12 },
      { date: "Dec 5", "wikipedia.org": 18, "you.com": 15 },
      { date: "Dec 6", "wikipedia.org": 22, "you.com": 18 },
      { date: "Dec 7", "wikipedia.org": 25, "you.com": 22 },
    ],
  },
  externalMentions: [],
  sentiment: {
    currentValue: 78,
    positiveSentiment: 75,
    negativeSentiment: 15,
    positiveReasons: ["Quality", "Customer Service", "Durability"],
    negativeReasons: ["Shipping Cost", "Color Options"],
    lineChartData: [
      { date: "Mon", value: 70 },
      { date: "Tue", value: 72 },
      { date: "Wed", value: 78 },
    ],
    barChartData: [
      { date: "Mon", value: 70 },
      { date: "Tue", value: 72 },
      { date: "Wed", value: 78 },
    ],
    themes: [
      {
        theme: "Durability",
        sentiment: "positive",
        occurrences: 45,
        runs: [],
      },
      {
        theme: "Price",
        sentiment: "negative",
        occurrences: 12,
        runs: [],
      },
    ],
    yAxisDomain: [0, 100],
  },
  platforms: {
    metrics: {},
    matrix: [],
  },
  personas: [],
  existingTopics: ["Running", "Sustainability", "Comfort"],
  chartData: [],
  dashboardCharts: [],
  deepDiveStats: {},
  competitorInsights: [],
  topicRankings: [],
  sentimentTrendData: [],
  locationStats: [],
  watchlistSummary: [],
  mentionsTrend: [],
  mentionsPagination: { page: 1, total: 1 },
};

export default function MonitorPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const [selectedTab, setSelectedTab] = useState(0);
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<any>(null);
  const [competitorModalOpen, setCompetitorModalOpen] = useState(false);
  const [promptModalOpen, setPromptModalOpen] = useState(false);
  const [editingPrompt, setEditingPrompt] = useState<any>(null);

  useEffect(() => {
    // Simulate fetch
    setLoading(true);
    const timer = setTimeout(() => {
      setData(MOCK_MONITOR_DATA);
      setLoading(false);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  const handleTabClick = (index: number) => {
    setSelectedTab(index);
  };

  const tabs = [
    { id: "dashboard", content: "Dashboard", icon: HomeIcon },
    { id: "tracking", content: "Prompts", icon: SearchIcon },
    { id: "competitors", content: "Competitor", icon: PersonIcon },
    { id: "citations", content: "Citations", icon: LinkIcon },
    { id: "mentions", content: "Social", icon: ChatIcon },
    { id: "sentiment", content: "Sentiment", icon: NoteIcon },
    { id: "platforms", content: "Platforms", icon: GlobeIcon },
    { id: "personas", content: "Personas", icon: PersonIcon },
  ];

  const currentFilters = {
    timeRange: "30",
    source: ["all"],
    product: "all",
    region: ["all"],
    topic: ["all"],
  };

  const handleFilterChange = (newFilters: any) => {
    console.log("Filters changed:", newFilters);
  };

  const TabSkeleton = () => (
    <Card>
      <BlockStack gap="400">
        <SkeletonDisplayText size="small" />
        <SkeletonBodyText lines={5} />
      </BlockStack>
    </Card>
  );

  const DashboardSkeleton = () => (
    <SkeletonPage primaryAction>
      <Layout>
        <Layout.Section>
          <Card>
            <div style={{ height: 300 }} />
          </Card>
        </Layout.Section>
      </Layout>
    </SkeletonPage>
  );

  return (
    <Frame>
      <Page
        fullWidth={false}
        title="Monitor"
        subtitle="Market Intelligence Hub"
        primaryAction={
          selectedTab === 1
            ? {
                content: "Add Prompt",
                icon: PlusIcon,
                onAction: () => {
                  setEditingPrompt(null);
                  setPromptModalOpen(true);
                },
              }
            : selectedTab === 2
              ? {
                  content: "Add Competitor",
                  onAction: () => setCompetitorModalOpen(true),
                }
              : undefined
        }
      >
        <TitleBar title="Monitor" />

        <Layout>
          <Layout.Section>
            <Box padding="0">
              <div
                style={{
                  display: "flex",
                  width: "100%",
                  backgroundColor: "white",
                  borderRadius: "12px",
                  padding: "4px",
                  boxShadow: "0 1px 3px rgba(0, 0, 0, 0.1)",
                  gap: "4px",
                  marginBottom: "24px",
                  overflowX: "auto",
                }}
              >
                {tabs.map((tab, index) => (
                  <button
                    key={tab.id}
                    onClick={() => handleTabClick(index)}
                    style={{
                      flex: tab.id === "dashboard" ? "0 0 auto" : 1,
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      padding: "8px 16px",
                      borderRadius: "8px",
                      border: "none",
                      backgroundColor:
                        selectedTab === index ? "#f3f4f6" : "transparent",
                      color: selectedTab === index ? "#1f2937" : "#6b7280",
                      fontSize: "14px",
                      fontWeight: selectedTab === index ? 500 : 400,
                      cursor: "pointer",
                      transition: "all 0.2s ease",
                      fontFamily:
                        '-apple-system, BlinkMacSystemFont, "San Francisco", "Segoe UI", Roboto, "Helvetica Neue", sans-serif',
                      outline: "none",
                      whiteSpace: "nowrap",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "6px",
                      }}
                    >
                      {tab.icon && (
                        <span
                          style={{
                            display: "flex",
                            alignItems: "center",
                            fontSize: "16px",
                            lineHeight: 1,
                          }}
                        >
                          <Icon source={tab.icon} />
                        </span>
                      )}
                      {tab.id !== "dashboard" && <span>{tab.content}</span>}
                    </div>
                  </button>
                ))}
              </div>
            </Box>

            <Box padding="0" paddingBlockEnd="400">
              {loading || !data ? (
                selectedTab === 0 ? (
                  <DashboardSkeleton />
                ) : (
                  <TabSkeleton />
                )
              ) : (
                <>
                  {selectedTab === 0 && (
                    <Suspense fallback={<DashboardSkeleton />}>
                      <MonitorDashboard
                        data={data.dashboard}
                        stats={data.stats}
                        navigate={navigate}
                        products={[]}
                        chartData={data.chartData}
                        dashboardCharts={data.dashboardCharts}
                        brandName={data.stats.brandName || "You"}
                        deepDiveStats={data.deepDiveStats}
                        competitorInsights={data.competitorInsights}
                        sourcesChartData={[]}
                        topics={data.existingTopics.map((t: string) => ({
                          label: t,
                          value: t,
                        }))}
                        topicRankings={data.topicRankings}
                        citationsData={data.citations}
                        onNavigateToCompetitors={() => handleTabClick(2)}
                        filters={currentFilters}
                        onFilterChange={handleFilterChange}
                      />
                    </Suspense>
                  )}
                  {selectedTab === 1 && (
                    <Suspense fallback={<TabSkeleton />}>
                      <MonitorTracking
                        prompts={data.tracking.prompts}
                        navigate={navigate}
                        planLimits={{ prompts: 100 }}
                        sentimentTrend={data.sentimentTrendData}
                        locationStats={data.locationStats}
                        watchlistSummary={data.watchlistSummary}
                        onAddPrompt={() => {}}
                        onEditPrompt={(prompt) => {
                          setEditingPrompt(prompt);
                          setPromptModalOpen(true);
                        }}
                      />
                    </Suspense>
                  )}
                  {selectedTab === 2 && (
                    <Suspense fallback={<TabSkeleton />}>
                      <MonitorCompetitors
                        competitors={data.competitors.list}
                        suggestedBrands={data.competitors.suggested}
                        onTrackCompetitor={() => {}}
                        onSelectCompetitor={() => {}}
                      />
                    </Suspense>
                  )}
                  {selectedTab === 3 && (
                    <Suspense fallback={<TabSkeleton />}>
                      <MonitorCitation
                        topics={data.existingTopics.map((t: string) => ({
                          label: t,
                          value: t,
                        }))}
                        data={data.citations}
                        brandName="You"
                      />
                    </Suspense>
                  )}
                  {selectedTab === 4 && (
                    <Suspense fallback={<TabSkeleton />}>
                      <MonitorMentions
                        mentions={data.externalMentions}
                        trendData={data.mentionsTrend}
                        topics={data.existingTopics.map((t: string) => ({
                          label: t,
                          value: t,
                        }))}
                        pagination={data.mentionsPagination}
                      />
                    </Suspense>
                  )}
                  {selectedTab === 5 && (
                    <Suspense fallback={<TabSkeleton />}>
                      <MonitorSentiment
                        topics={data.existingTopics.map((t: string) => ({
                          label: t,
                          value: t,
                        }))}
                        data={data.sentiment}
                        brandName="You"
                        filters={{
                          timeRange: currentFilters.timeRange,
                          topics: [],
                          platforms: [],
                          citations: [],
                          prompts: [],
                          location: [],
                        }}
                        onFilterChange={handleFilterChange}
                      />
                    </Suspense>
                  )}
                  {selectedTab === 6 && (
                    <Suspense fallback={<TabSkeleton />}>
                      <MonitorPlatforms
                        topics={data.existingTopics.map((t: string) => ({
                          label: t,
                          value: t,
                        }))}
                        data={data.platforms.metrics}
                        matrixData={data.platforms.matrix}
                        brandName="You"
                        brandDomain="you.com"
                        filters={{
                          timeRange: currentFilters.timeRange,
                          topics: [],
                          platforms: [],
                          citations: [],
                          prompts: [],
                          location: [],
                        }}
                        onFilterChange={handleFilterChange}
                      />
                    </Suspense>
                  )}
                  {selectedTab === 7 && (
                    <Suspense fallback={<TabSkeleton />}>
                      <MonitorPersonas
                        personas={data.personas}
                        data={{}}
                        topics={data.existingTopics.map((t: string) => ({
                          label: t,
                          value: t,
                        }))}
                      />
                    </Suspense>
                  )}
                </>
              )}
            </Box>
          </Layout.Section>
        </Layout>
        <AddCompetitorModal
          open={competitorModalOpen}
          onClose={() => setCompetitorModalOpen(false)}
          onAdd={(name) => {
            console.log("Adding competitor:", name);
            setData((prev: any) => ({
              ...prev,
              competitors: {
                ...prev.competitors,
                list: [
                  ...prev.competitors.list,
                  { id: Date.now(), name, overlap: "Unknown" },
                ],
              },
            }));
            setCompetitorModalOpen(false);
          }}
        />
        <AddPromptModal
          open={promptModalOpen}
          onClose={() => {
            setPromptModalOpen(false);
            setEditingPrompt(null);
          }}
          promptToEdit={editingPrompt}
          existingTopics={[
            "Brand Awareness",
            "Product Features",
            "Sustainability",
            "Performance",
            "Durability",
            "Comfort",
            "Style",
            "Price",
            "Innovation",
            "Customer Service",
          ]}
          personas={[
            { id: "p1", name: "Budget Shopper" },
            { id: "p2", name: "Eco-Conscious" },
            { id: "p3", name: "Performance Athlete" },
            { id: "p4", name: "Fashion Forward" },
            { id: "p5", name: "Casual Walker" },
          ]}
          products={[
            {
              id: "prod1",
              title: "Eco-Friendly Sneakers",
              image:
                "https://cdn.shopify.com/s/files/1/0262/4071/2726/products/sneaker.png",
            },
            { id: "prod2", title: "Performance Running Shoes" },
            { id: "prod3", title: "Trail Blaza Hiking Boots" },
            { id: "prod4", title: "Urban Glide Loafers" },
            { id: "prod5", title: "Marathon Elite Racers" },
            { id: "prod6", title: "Kids Velcro Sneakers" },
            { id: "prod7", title: "Winter Insulated Boots" },
            { id: "prod8", title: "Summer Canvas Slip-ons" },
            { id: "prod9", title: "Orthopedic Walking Shoes" },
            { id: "prod10", title: "Limited Edition High-Tops" },
          ]}
          onAdd={(prompt) => {
            console.log("Adding/Editing prompt:", prompt);
            if (prompt.mode === "edit") {
              setData((prev: any) => ({
                ...prev,
                tracking: {
                  ...prev.tracking,
                  prompts: prev.tracking.prompts.map((p: any) =>
                    p.id === prompt.id
                      ? {
                          ...p,
                          text: prompt.text,
                          topic: prompt.topic,
                        }
                      : p,
                  ),
                },
              }));
            } else {
              setData((prev: any) => ({
                ...prev,
                tracking: {
                  ...prev.tracking,
                  prompts: [
                    ...prev.tracking.prompts,
                    {
                      id: Date.now().toString(),
                      text:
                        prompt.text || (prompt.prompts && prompt.prompts[0]),
                      frequency: "Daily",
                      status: "ACTIVE",
                      topic: prompt.topic || "General",
                      runs: [],
                    },
                  ],
                },
              }));
            }
            setPromptModalOpen(false);
            setEditingPrompt(null);
          }}
        />
      </Page>
    </Frame>
  );
}
