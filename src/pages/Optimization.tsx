import { useNavigate } from "react-router-dom";
import {
  Page,
  Layout,
  Card,
  Box,
  BlockStack,
  SkeletonPage,
  SkeletonBodyText,
  SkeletonDisplayText,
  Icon,
  Text,
  TextField,
  Checkbox,
  Banner,
} from "@shopify/polaris";
import { TitleBar } from "../components/MockTitleBar";
import {
  ViewIcon,
  WandIcon,
  MagicIcon,
  PlayIcon,
  SettingsIcon,
} from "@shopify/polaris-icons";
import { useState, useEffect, lazy, Suspense } from "react";

// Lazy load components
const OptimizationDashboardContent = lazy(() =>
  import("../components/optimization/OptimizationDashboard").then((m) => ({
    default: m.OptimizationDashboard,
  }))
);
const OptimizationAutopilotContent = lazy(() =>
  import("../components/optimization/OptimizationAutopilot").then((m) => ({
    default: m.OptimizationAutopilot,
  }))
);
const OptimizationFixesContent = lazy(() =>
  import("../components/optimization/OptimizationFixes").then((m) => ({
    default: m.OptimizationFixes,
  }))
);
const OptimizationRedirectsContent = lazy(() =>
  import("../components/optimization/OptimizationRedirects").then((m) => ({
    default: m.OptimizationRedirects,
  }))
);

// ============ MOCK DATA ============

// Dashboard Mock Data
const MOCK_STATS_DATA = {
  needsOnboarding: false,
  stats: {
    visibilityScore: 78,
    sentimentScore: 82,
    trustScore: 75,
  },
};

const MOCK_TRENDS_DATA = {
  dates: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
  visibility: [65, 68, 70, 72, 75, 74, 78],
  sentiment: [80, 81, 79, 82, 85, 84, 82],
};

const MOCK_FIXES_SUMMARY = {
  needsOnboarding: false,
  fixStats: {
    total: 24,
    appliedLast30Days: 156,
    byStatus: { pending: 12, suggested: 12, applied: 156 },
    byCategory: {
      "Missing Metadata": 8,
      "Thin Content": 6,
      "No Alt Text": 4,
      "Schema Errors": 6,
    },
    byPriority: { critical: 5, moderate: 10, minor: 9 },
  },
  fixes: [],
  prompts: [],
  products: [],
  existingTopics: [],
};

// Autopilot Mock Data
import {
  SearchIcon,
  AlertCircleIcon,
  PersonIcon,
} from "@shopify/polaris-icons";

const MOCK_AGENTS = {
  traffic: [
    {
      id: "meta-fixer",
      name: "Meta Description Optimizer",
      description:
        "Generates SEO-optimized descriptions for products with low click-through rates.",
      status: "active",
      implemented: 142,
      configKey: "autoFixDescriptions",
      stats: [
        { label: "CTR Lift", value: "+12%" },
        { label: "Impressions", value: "+4.5k" },
      ],
      icon: SearchIcon,
    },
    {
      id: "title-fixer",
      name: "Title Tag Enhancer",
      description:
        "Rewrites product titles to include high-intent keywords missing from current copy.",
      status: "active",
      implemented: 89,
      configKey: "autoFixTitles",
      stats: [
        { label: "Rank Change", value: "+5.2" },
        { label: "Clicks", value: "+280" },
      ],
      icon: MagicIcon,
    },
    {
      id: "alt-text",
      name: "Alt Text Generator",
      description:
        "Adds descriptive alt text to images for accessibility and image search visibility.",
      status: "learning",
      implemented: 34,
      configKey: "autoFixAltText",
      stats: [
        { label: "Coverage", value: "98%" },
        { label: "Traffic", value: "+2%" },
      ],
      icon: SearchIcon,
    },
  ],
  conversion: [
    {
      id: "faq-generator",
      name: "FAQ Generator",
      description:
        "Creates FAQ sections based on common customer questions and product details.",
      status: "inactive",
      implemented: 0,
      configKey: "autoFixFaqs",
      stats: [
        { label: "Conv. Rate", value: "--" },
        { label: "Time on Page", value: "--" },
      ],
      icon: PersonIcon,
    },
    {
      id: "schema-fixer",
      name: "Schema Markup Fixer",
      description:
        "Repairs broken structured data to ensure rich snippets appear in search results.",
      status: "active",
      implemented: 56,
      configKey: "autoFixSchema",
      stats: [
        { label: "Rich Results", value: "24" },
        { label: "Errors", value: "0" },
      ],
      icon: SettingsIcon,
    },
  ],
  intelligence: [
    {
      id: "competitor-monitor",
      name: "Competitor Watchdog",
      description:
        "Alerts you when competitors change pricing or messaging for similar products.",
      status: "active",
      implemented: 12,
      configKey: "autoFixCompetitors",
      stats: [
        { label: "Alerts", value: "5/wk" },
        { label: "Response", value: "Auto" },
      ],
      icon: AlertCircleIcon,
    },
    {
      id: "trend-spotter",
      name: "Trend Spotter",
      description:
        "Identifies rising search trends and suggests content updates to capture demand.",
      status: "learning",
      implemented: 8,
      configKey: "autoFixTrends",
      stats: [
        { label: "Trends", value: "3" },
        { label: "Traffic", value: "+150" },
      ],
      icon: MagicIcon,
    },
  ],
};

const MOCK_AUTOPILOT_SETTINGS = {
  autoFixDescriptions: true,
  autoFixTitles: true,
  autoFixAltText: true,
  autoFixFaqs: false,
  autoFixSchema: true,
  autoFixCompetitors: true,
  autoFixTrends: true,
  autonomyLevel: 75,
  dailyFixLimit: 20,
  requireTitleApproval: true,
  requireDescApproval: false,
};

const MOCK_AUTOPILOT_STATS = {
  timeSaved: "14 hours",
  fixesApplied: 341,
};

// Fixes Mock Data
const MOCK_FIXES = [
  {
    id: "fix_1",
    productId: "prod_1",
    type: "seo_title",
    priority: "high",
    status: "SUGGESTED",
    originalContent: "Blue Shirt",
    suggestedValue: "Men's Blue Oxford Shirt | 100% Cotton",
    reason: "Title is too short and generic.",
    createdAt: new Date().toISOString(),
  },
  {
    id: "fix_2",
    productId: "prod_2",
    type: "MISSING_ALT_TEXT",
    priority: "MEDIUM",
    status: "PENDING",
    originalContent: null,
    suggestedValue: "Red running shoes side view",
    reason: "Missing alt text for accessibility.",
    createdAt: new Date().toISOString(),
  },
  {
    id: "fix_3",
    productId: "prod_1",
    type: "WEAK_DESCRIPTION",
    priority: "LOW",
    status: "RESOLVED",
    originalContent: "",
    suggestedValue:
      "Shop our premium Blue Oxford Shirt. Comfortable, breathable, and perfect for any occasion.",
    reason: "Missing meta description.",
    createdAt: new Date().toISOString(),
    diff: { invisible_seo: true, visibility_lift: 0.05, ctr_lift: 0.02 },
    outcome: { status: "VERIFICATION_DISPATCHED" },
  },
  {
    id: "fix_4",
    productId: "prod_3",
    type: "COMPETITOR_GAP",
    priority: "MEDIUM",
    status: "RESOLVED",
    originalContent: "",
    suggestedValue: "Eco-friendly materials and sustainable production...",
    reason: "Trending Opportunity",
    createdAt: new Date().toISOString(),
    diff: { invisible_seo: true, visibility_lift: 0.15, ctr_lift: 0.08 },
    outcome: { status: "SCHEDULED_VERIFICATION" },
  },
  {
    id: "fix_5",
    productId: "prod_4",
    type: "MISSING_AI_FAQ",
    priority: "MEDIUM",
    status: "RESOLVED",
    originalContent: "",
    suggestedValue: "Q: Is this durable? A: Yes...",
    reason: "Missing AI FAQ",
    createdAt: new Date().toISOString(),
    diff: { invisible_seo: true, visibility_lift: 0.22, ctr_lift: 0.12 },
    outcome: { status: "SCHEDULED_VERIFICATION" },
  },
  {
    id: "fix_6",
    productId: "prod_3",
    type: "MISSING_SEO_TITLE",
    priority: "HIGH",
    status: "PENDING",
    originalContent: null,
    suggestedValue: "Eco-friendly Alltrack Pro 100 - Sustainable Ski Boots",
    reason: "Missing SEO Title",
    createdAt: new Date().toISOString(),
  },
  {
    id: "fix_7",
    productId: "prod_4",
    type: "WEAK_TITLE",
    priority: "MEDIUM",
    status: "SUGGESTED",
    originalContent: "Force 5 Ski Poles",
    suggestedValue: "Force 5 Lightweight Aluminum Ski Poles",
    reason: "Title is generic",
    createdAt: new Date().toISOString(),
  },
];

const MOCK_PRODUCT_MAP: Record<
  string,
  { title: string; handle: string; image: string | null }
> = {
  prod_1: {
    title: "Blue Oxford Shirt",
    handle: "blue-oxford-shirt",
    image:
      "https://cdn.shopify.com/s/files/1/0533/2089/files/placeholder-images-image_large.png",
  },
  prod_2: {
    title: "Red Running Shoes",
    handle: "red-running-shoes",
    image:
      "https://cdn.shopify.com/s/files/1/0533/2089/files/placeholder-images-product-1_large.png",
  },
  prod_3: {
    title: "Eco-friendly Alltrack Pro 100 Ski Boots",
    handle: "alltrack-pro-100-ski-boots",
    image:
      "https://cdn.shopify.com/s/files/1/0533/2089/files/placeholder-images-product-2_large.png",
  },
  prod_4: {
    title: "Force 5 Ski Poles",
    handle: "force-5-ski-poles",
    image:
      "https://cdn.shopify.com/s/files/1/0533/2089/files/placeholder-images-product-3_large.png",
  },
};

// Redirects Mock Data
const MOCK_REDIRECTS = {
  redirects: [
    {
      id: "1",
      path: "/products/old-summer-collection",
      target: "/collections/summer-sale",
    },
    { id: "2", path: "/pages/contact-old", target: "/pages/contact-us" },
    { id: "3", path: "/broken-link-1", target: "/" },
  ],
  pageInfo: { hasNextPage: false, endCursor: "cursor_123" },
};

// ============ COMPONENT ============

export default function OptimizationPage() {
  const navigate = useNavigate();
  const [selectedTab, setSelectedTab] = useState(0);
  const [loading, setLoading] = useState(true);

  // Dashboard state
  const [statsData, setStatsData] = useState<any>(null);
  const [trendsData, setTrendsData] = useState<any>(null);
  const [fixesSummary, setFixesSummary] = useState<any>(null);
  const [dashboardFilters, setDashboardFilters] = useState({
    timeRange: "7",
    product: "all",
    region: [],
    source: [],
    topic: [],
  });

  // Autopilot state
  const [autopilotEnabled, setAutopilotEnabled] = useState(true);
  const [agents, setAgents] = useState<any>(MOCK_AGENTS);
  const [autopilotSettings, setAutopilotSettings] = useState(
    MOCK_AUTOPILOT_SETTINGS
  );

  // Fixes state
  const [fixes, setFixes] = useState<any[]>([]);
  const [productMap, setProductMap] = useState(MOCK_PRODUCT_MAP);
  const [fixesLoading, setFixesLoading] = useState(false);
  const [loadingId, setLoadingId] = useState<string | null>(null);
  const [selectedFixId, setSelectedFixId] = useState<string | null>(null);
  const [fixesTab, setFixesTab] = useState(0);
  const [toastContent, setToastContent] = useState<string | null>(null);
  const [fixesPagination, setFixesPagination] = useState({
    page: 1,
    limit: 20,
    total: 0,
    totalPages: 0,
  });
  const [statusFilter, setStatusFilter] = useState("all");
  const [typeFilter, setTypeFilter] = useState("all");
  const [priorityFilter, setPriorityFilter] = useState("all");
  const [productFilter, setProductFilter] = useState("all");

  // Redirects state
  const [redirects, setRedirects] = useState<any[]>([]);
  const [redirectsLoading, setRedirectsLoading] = useState(false);
  const [redirectsPageInfo, setRedirectsPageInfo] = useState<any>(null);
  const [redirectsCursor, setRedirectsCursor] = useState<string | undefined>(
    undefined
  );
  const [redirectsToast, setRedirectsToast] = useState<string | null>(null);

  // Sitemap state
  const [sitemapActive, setSitemapActive] = useState(true);
  const [sitemapIncludeProducts, setSitemapIncludeProducts] = useState(true);
  const [sitemapIncludeCollections, setSitemapIncludeCollections] = useState(true);
  const [sitemapIncludeArticles, setSitemapIncludeArticles] = useState(true);
  const [sitemapCustomInstructions, setSitemapCustomInstructions] = useState("");
  const [sitemapSaving, setSitemapSaving] = useState(false);

  // Initial data load
  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      setStatsData(MOCK_STATS_DATA);
      setTrendsData(MOCK_TRENDS_DATA);
      setFixesSummary(MOCK_FIXES_SUMMARY);
      setFixes(MOCK_FIXES);
      setRedirects(MOCK_REDIRECTS.redirects);
      setRedirectsPageInfo(MOCK_REDIRECTS.pageInfo);
      setLoading(false);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  const handleTabClick = (index: number) => {
    setSelectedTab(index);
  };

  const tabs = [
    { id: "dashboard", content: "Dashboard", icon: ViewIcon },
    { id: "fixes", content: "Fix Engine", icon: WandIcon },
    { id: "automate", content: "Autopilot", icon: MagicIcon },
    { id: "redirects", content: "Redirects", icon: PlayIcon },
    { id: "sitemap", content: "AI Sitemap", icon: SettingsIcon },
  ];

  // ============ HANDLERS ============

  // Dashboard handlers
  const handleDashboardFilterChange = (newFilters: any) => {
    setDashboardFilters(newFilters);
  };

  // Autopilot handlers
  const handleToggleAutopilot = () => {
    setAutopilotEnabled((prev) => !prev);
  };

  const handleAutopilotSettingsChange = (key: string, value: any) => {
    setAutopilotSettings((prev) => ({ ...prev, [key]: value }));
  };

  // Fixes handlers
  const handleFixesFilterChange = (key: string, value: string) => {
    if (key === "status") setStatusFilter(value);
    if (key === "type") setTypeFilter(value);
    if (key === "priority") setPriorityFilter(value);
    if (key === "product") setProductFilter(value);
  };

  const handleFixesScan = async () => {
    setFixesLoading(true);
    setToastContent("Scanning store for issues...");
    setTimeout(() => {
      setFixesLoading(false);
      setToastContent("Scan complete. 3 new issues found.");
    }, 2000);
  };

  const handleFixesGenerate = async (fixId: string) => {
    setLoadingId(fixId);
    setTimeout(() => {
      setFixes((prev) =>
        prev.map((f) =>
          f.id === fixId
            ? { ...f, suggestedValue: "Generated Content via AI" }
            : f
        )
      );
      setLoadingId(null);
      setToastContent("Content generated successfully.");
    }, 1500);
  };

  const handleFixesReviewApply = (fix: any) => {
    setSelectedFixId(fix.id);
  };

  const handleFixesUndo = async (fixId: string) => {
    setLoadingId(fixId);
    setTimeout(() => {
      setFixes((prev) =>
        prev.map((f) => (f.id === fixId ? { ...f, status: "pending" } : f))
      );
      setLoadingId(null);
      setToastContent("Change undone.");
    }, 1000);
  };

  const handleFixesConfirmApply = async (fixId: string, content: string) => {
    setLoadingId(fixId);
    setTimeout(() => {
      setFixes((prev) =>
        prev.map((f) =>
          f.id === fixId
            ? {
                ...f,
                status: "RESOLVED",
                suggestedValue: content,
                diff: { invisible_seo: true },
                outcome: { status: "VERIFICATION_DISPATCHED" },
              }
            : f
        )
      );
      setLoadingId(null);
      setSelectedFixId(null);
      setToastContent("Fix applied successfully.");
    }, 1000);
  };

  const handleFixesTabChange = (tabIndex: number) => {
    setFixesTab(tabIndex);
  };

  const handleFixesBulkApply = async (selectedFixes: any[]) => {
    setFixesLoading(true);
    setTimeout(() => {
      setFixesLoading(false);
      setToastContent(`Applied ${selectedFixes.length} fixes.`);
    }, 2000);
  };

  const handleFixesBulkDelete = async (selectedFixIds: string[]) => {
    setFixesLoading(true);
    setTimeout(() => {
      setFixes((prev) => prev.filter((f) => !selectedFixIds.includes(f.id)));
      setFixesLoading(false);
      setToastContent(`Deleted ${selectedFixIds.length} fixes.`);
    }, 1000);
  };

  // Redirects handlers
  const loadRedirects = (nextCursor?: string) => {
    setRedirectsLoading(true);
    setTimeout(() => {
      setRedirects(MOCK_REDIRECTS.redirects);
      setRedirectsPageInfo(MOCK_REDIRECTS.pageInfo);
      if (nextCursor) setRedirectsCursor(nextCursor);
      setRedirectsLoading(false);
    }, 500);
  };

  const handleRedirectsCreate = async (path: string, target: string) => {
    setRedirectsLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setRedirects((prev) => [
      ...prev,
      { id: `new-${Date.now()}`, path, target },
    ]);
    setRedirectsLoading(false);
    setRedirectsToast("Redirect created");
  };

  const handleRedirectsDelete = (id: string) => {
    setRedirects((prev) => prev.filter((r) => r.id !== id));
    setRedirectsToast("Redirect deleted");
  };

  // ============ SKELETONS ============

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

  // Product options for fixes filter
  const productOptions = Object.keys(productMap).map((id) => ({
    label: productMap[id].title,
    value: id,
    image: productMap[id].image,
  }));

  return (
    <Page fullWidth={false} title="Improve" subtitle="Optimization Hub">
      <TitleBar title="Optimization" />

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
            {loading ? (
              selectedTab === 0 ? (
                <DashboardSkeleton />
              ) : (
                <TabSkeleton />
              )
            ) : (
              <>
                {selectedTab === 0 && (
                  <Suspense fallback={<DashboardSkeleton />}>
                    <OptimizationDashboardContent
                      statsData={statsData || {}}
                      trendsData={trendsData || {}}
                      fixesData={fixesSummary || {}}
                      filters={dashboardFilters}
                      onFilterChange={handleDashboardFilterChange}
                      isLoading={loading}
                    />
                  </Suspense>
                )}
                {selectedTab === 1 && (
                  <Suspense fallback={<TabSkeleton />}>
                    <OptimizationFixesContent
                      fixes={fixes}
                      productMap={productMap}
                      isLoading={fixesLoading}
                      loadingId={loadingId}
                      actionData={null}
                      selectedTab={fixesTab}
                      onTabChange={handleFixesTabChange}
                      onScan={handleFixesScan}
                      onGenerate={handleFixesGenerate}
                      onReviewApply={handleFixesReviewApply}
                      onUndo={handleFixesUndo}
                      onConfirmApply={handleFixesConfirmApply}
                      pagination={fixesPagination}
                      onPageChange={(page) =>
                        setFixesPagination((p) => ({ ...p, page }))
                      }
                      statusFilter={statusFilter}
                      typeFilter={typeFilter}
                      priorityFilter={priorityFilter}
                      productFilter={productFilter}
                      onFilterChange={handleFixesFilterChange}
                      productOptions={productOptions}
                      toastContent={toastContent}
                      onToastDismiss={() => setToastContent(null)}
                      selectedFixId={selectedFixId}
                      setSelectedFixId={setSelectedFixId}
                      generationError={null}
                      onBulkApply={handleFixesBulkApply}
                      onBulkDelete={handleFixesBulkDelete}
                      activePlan="FREE"
                      filters={{
                        status: statusFilter,
                        type: typeFilter,
                        priority: priorityFilter,
                        product: productFilter,
                      }}
                    />
                  </Suspense>
                )}
                {selectedTab === 2 && (
                  <Suspense fallback={<TabSkeleton />}>
                    <OptimizationAutopilotContent
                      autopilotEnabled={autopilotEnabled}
                      onToggleAutopilot={handleToggleAutopilot}
                      agents={agents}
                      settings={autopilotSettings}
                      onSettingsChange={handleAutopilotSettingsChange}
                      stats={MOCK_AUTOPILOT_STATS}
                    />
                  </Suspense>
                )}
                {selectedTab === 3 && (
                  <Suspense fallback={<TabSkeleton />}>
                    <OptimizationRedirectsContent
                      redirects={redirects}
                      loading={redirectsLoading}
                      pageInfo={redirectsPageInfo}
                      cursor={redirectsCursor}
                      loadRedirects={loadRedirects}
                      handleCreate={handleRedirectsCreate}
                      handleDelete={handleRedirectsDelete}
                      toastContent={redirectsToast}
                      setToastContent={setRedirectsToast}
                    />
                  </Suspense>
                )}
                {selectedTab === 4 && (
                  <Suspense fallback={<TabSkeleton />}>
                    <SitemapContent
                      active={sitemapActive}
                      includeProducts={sitemapIncludeProducts}
                      includeCollections={sitemapIncludeCollections}
                      includeArticles={sitemapIncludeArticles}
                      customInstructions={sitemapCustomInstructions}
                      isSaving={sitemapSaving}
                      onActiveChange={setSitemapActive}
                      onIncludeProductsChange={setSitemapIncludeProducts}
                      onIncludeCollectionsChange={setSitemapIncludeCollections}
                      onIncludeArticlesChange={setSitemapIncludeArticles}
                      onCustomInstructionsChange={setSitemapCustomInstructions}
                      onSave={() => {
                        setSitemapSaving(true);
                        setTimeout(() => {
                          setSitemapSaving(false);
                        }, 500);
                      }}
                    />
                  </Suspense>
                )}
              </>
            )}
          </Box>
        </Layout.Section>
      </Layout>
    </Page>
  );
}

// Sitemap Content Component
function SitemapContent({
  active,
  includeProducts,
  includeCollections,
  includeArticles,
  customInstructions,
  isSaving,
  onActiveChange,
  onIncludeProductsChange,
  onIncludeCollectionsChange,
  onIncludeArticlesChange,
  onCustomInstructionsChange,
  onSave,
}: {
  active: boolean;
  includeProducts: boolean;
  includeCollections: boolean;
  includeArticles: boolean;
  customInstructions: string;
  isSaving: boolean;
  onActiveChange: (value: boolean) => void;
  onIncludeProductsChange: (value: boolean) => void;
  onIncludeCollectionsChange: (value: boolean) => void;
  onIncludeArticlesChange: (value: boolean) => void;
  onCustomInstructionsChange: (value: string) => void;
  onSave: () => void;
}) {
  const shop = "your-shop.myshopify.com";
  const proxyUrl = `https://${shop}/apps/shopeec/llms.txt`;

  return (
    <Box paddingBlockStart="400">
      <BlockStack gap="600">
        <Banner tone="info" title="Your AI Sitemap is Live">
          <p>
            View it here:{" "}
            <a
              href={proxyUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#2563eb", textDecoration: "underline" }}
            >
              {proxyUrl}
            </a>
          </p>
        </Banner>

        <Card>
              <BlockStack gap="500">
                <BlockStack gap="200">
                  <Text variant="headingMd" as="h2">
                    General Settings
                  </Text>
                  <Text variant="bodyMd" as="p" tone="subdued">
                    Enable or disable the sitemap and control its visibility.
                  </Text>
                </BlockStack>

                <BlockStack gap="400">
                  <Checkbox
                    label="Enable AI Sitemap (llms.txt)"
                    checked={active}
                    onChange={onActiveChange}
                    helpText="If disabled, the file will return a 404 error, preventing AI bots from reading your structured data."
                  />

                  <Box paddingInlineStart="400">
                    <BlockStack gap="300">
                      <Text variant="headingSm" as="h3">
                        Content to Include
                      </Text>
                      <Checkbox
                        label="Products (Active & In-Stock)"
                        checked={includeProducts}
                        onChange={onIncludeProductsChange}
                        disabled={!active}
                      />
                      <Checkbox
                        label="Collections (Site Structure)"
                        checked={includeCollections}
                        onChange={onIncludeCollectionsChange}
                        disabled={!active}
                      />
                      <Checkbox
                        label="Blog Posts (Articles)"
                        checked={includeArticles}
                        onChange={onIncludeArticlesChange}
                        disabled={!active}
                      />
                    </BlockStack>
                  </Box>

                  <TextField
                    label="Custom Brand Guidelines"
                    value={customInstructions}
                    onChange={onCustomInstructionsChange}
                    multiline={4}
                    autoComplete="off"
                    helpText="Add specific instructions for AI agents (e.g., 'We are a sustainable brand, emphasize eco-friendly materials')."
                    disabled={!active}
                  />
                </BlockStack>
              </BlockStack>
            </Card>
      </BlockStack>
    </Box>
  );
}
