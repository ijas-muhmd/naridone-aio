import { useNavigate } from "react-router-dom";
import { useState, useCallback, useEffect } from "react";
// import { PLAN_FREE } from "../../plan_constants"; // Assuming this might be needed or can be mocked
import { OptimizationFixes } from "../../components/optimization/OptimizationFixes";

const PLAN_FREE = "FREE";

// Mock Data
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
    diff: { invisible_seo: true, visibility_lift: 0.05, ctr_lift: 0.02 }, // Mock diff for resolved UI
    outcome: { status: "VERIFICATION_DISPATCHED" }, // Mock outcome for resolved UI
  },
  // Add item matching screenshot
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
  // Pending items for All Issues / Content & SEO tabs
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

const MOCK_PRODUCT_MAP = {
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

export default function FixesPage() {
  const navigate = useNavigate();

  // State management
  const [fixes, setFixes] = useState<any[]>([]);
  const [productMap, setProductMap] = useState<
    Record<string, { title: string; handle: string; image: string | null }>
  >({});
  const [productId, setProductId] = useState<string>("all");
  const [activePlan, setActivePlan] = useState<string>(PLAN_FREE);
  const [isLoading, setIsLoading] = useState(false);
  const [loadingId, setLoadingId] = useState<string | null>(null);
  const [actionData, setActionData] = useState<{
    status: string;
    message?: string;
  } | null>(null);
  const [selectedFixId, setSelectedFixId] = useState<string | null>(null);
  const [generationError, setGenerationError] = useState<string | null>(null);
  const [selectedTab, setSelectedTab] = useState(0);
  const [toastContent, setToastContent] = useState<string | null>(null);
  const [hasLoadedData, setHasLoadedData] = useState(false);

  // Pagination State
  const [currentPage, setCurrentPage] = useState(1);
  const [pagination, setPagination] = useState<{
    page: number;
    limit: number;
    total: number;
    totalPages: number;
  }>({
    page: 1,
    limit: 20,
    total: 0,
    totalPages: 0,
  });

  // Filter State
  const [statusFilter, setStatusFilter] = useState("all");
  const [typeFilter, setTypeFilter] = useState("all");
  const [priorityFilter, setPriorityFilter] = useState("all");
  const [productFilter, setProductFilter] = useState("all");

  // Initialize filters from URL on mount
  useEffect(() => {
    const url = new URL(window.location.href);
    const productIdParam = url.searchParams.get("productId") || "all";
    const statusParam = url.searchParams.get("status") || "all";
    const typeParam = url.searchParams.get("type") || "all";
    const priorityParam = url.searchParams.get("priority") || "all";
    const pageParam = parseInt(url.searchParams.get("page") || "1");

    setProductFilter(productIdParam);
    setStatusFilter(statusParam);
    setTypeFilter(typeParam);
    setPriorityFilter(priorityParam);
    setProductId(productIdParam);
    setCurrentPage(pageParam);
  }, []);

  // Fetch data on mount and when filters or page change
  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        // Mock API call
        await new Promise((resolve) => setTimeout(resolve, 600));

        let filteredFixes = [...MOCK_FIXES];

        // Apply mock filters based on tabs:
        // 0: AIO & Authority, 1: Content & SEO, 2: Data Quality, 3: In Review, 4: All Issues, 5: Resolved History
        if (selectedTab === 0) {
          // Mock filter for AIO & Authority
          filteredFixes = filteredFixes.filter(
            (f) =>
              f.status !== "RESOLVED" &&
              ["COMPETITOR_GAP", "MISSED_TREND"].includes(f.type),
          );
        } else if (selectedTab === 1) {
          // Content & SEO
          filteredFixes = filteredFixes.filter(
            (f) =>
              f.status !== "RESOLVED" &&
              ["WEAK_DESCRIPTION", "WEAK_TITLE", "MISSING_SEO_TITLE"].includes(
                f.type,
              ),
          );
        } else if (selectedTab === 2) {
          // Data Quality
          filteredFixes = filteredFixes.filter(
            (f) =>
              f.status !== "RESOLVED" &&
              ["MISSING_GTIN", "MISSING_IMAGE"].includes(f.type),
          );
        } else if (selectedTab === 3) {
          // In Review
          filteredFixes = filteredFixes.filter((f) => f.status === "IN_REVIEW");
        } else if (selectedTab === 4) {
          // All Issues (excluding resolved usually, or all?)
          filteredFixes = filteredFixes.filter((f) => f.status !== "RESOLVED");
        } else if (selectedTab === 5) {
          // Resolved History
          filteredFixes = filteredFixes.filter((f) => f.status === "RESOLVED");
        }

        if (statusFilter !== "all") {
          filteredFixes = filteredFixes.filter(
            (f) => f.status === statusFilter,
          );
        }
        if (typeFilter !== "all") {
          filteredFixes = filteredFixes.filter((f) => f.type === typeFilter);
        }
        if (priorityFilter !== "all") {
          filteredFixes = filteredFixes.filter(
            (f) => f.priority === priorityFilter,
          );
        }

        setFixes(filteredFixes);
        setProductMap(MOCK_PRODUCT_MAP);
        setPagination({
          page: currentPage,
          limit: 20,
          total: filteredFixes.length,
          totalPages: 1,
        });
        setHasLoadedData(true);
      } catch (error) {
        console.error("Failed to fetch fixes:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [
    productFilter,
    statusFilter,
    typeFilter,
    priorityFilter,
    selectedTab,
    currentPage,
  ]);

  const handleFilterChange = (key: string, value: string) => {
    if (key === "status") setStatusFilter(value);
    if (key === "type") setTypeFilter(value);
    if (key === "priority") setPriorityFilter(value);
    if (key === "product") {
      setProductFilter(value);
      setProductId(value);
    }
    setCurrentPage(1); // Reset page on filter change
  };

  const handleScan = async () => {
    setIsLoading(true);
    setToastContent("Scanning store for issues...");
    setTimeout(() => {
      setIsLoading(false);
      setToastContent("Scan complete. 3 new issues found.");
    }, 2000);
  };

  const handleGenerate = async (fixId: string) => {
    setLoadingId(fixId);
    setTimeout(() => {
      setFixes((prev) =>
        prev.map((f) =>
          f.id === fixId
            ? { ...f, suggestedValue: "Generated Content via AI" }
            : f,
        ),
      );
      setLoadingId(null);
      setToastContent("Content generated successfully.");
    }, 1500);
  };

  const handleReviewApply = (fix: any) => {
    setSelectedFixId(fix.id);
  };

  const handleUndo = async (fixId: string) => {
    setLoadingId(fixId);
    setTimeout(() => {
      setFixes((prev) =>
        prev.map((f) => (f.id === fixId ? { ...f, status: "pending" } : f)),
      );
      setLoadingId(null);
      setToastContent("Change undone.");
    }, 1000);
  };

  const handleConfirmApply = async (fixId: string, content: string) => {
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
            : f,
        ),
      );
      setLoadingId(null);
      setSelectedFixId(null);
      setToastContent("Fix applied successfully.");
    }, 1000);
  };

  const handleTabChange = (selectedTabIndex: number) => {
    setSelectedTab(selectedTabIndex);
    setCurrentPage(1);
  };

  const handleBulkApply = async (selectedFixes: any[]) => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setToastContent(`Applied ${selectedFixes.length} fixes.`);
      // In real app, we'd refetch or update state here
    }, 2000);
  };

  const handleBulkDelete = async (selectedFixIds: string[]) => {
    setIsLoading(true);
    setTimeout(() => {
      setFixes((prev) => prev.filter((f) => !selectedFixIds.includes(f.id)));
      setIsLoading(false);
      setToastContent(`Deleted ${selectedFixIds.length} fixes.`);
    }, 1000);
  };

  // Mock product options for filter
  const productOptions = Object.keys(productMap).map((id) => ({
    label: productMap[id].title,
    value: id,
    image: productMap[id].image,
  }));

  return (
    <OptimizationFixes
      fixes={fixes}
      productMap={productMap}
      isLoading={isLoading}
      loadingId={loadingId}
      actionData={actionData}
      selectedTab={selectedTab}
      onTabChange={handleTabChange}
      onScan={handleScan}
      onGenerate={handleGenerate}
      onReviewApply={handleReviewApply}
      onUndo={handleUndo}
      onConfirmApply={handleConfirmApply}
      pagination={pagination}
      onPageChange={setCurrentPage}
      statusFilter={statusFilter}
      typeFilter={typeFilter}
      priorityFilter={priorityFilter}
      productFilter={productFilter}
      onFilterChange={handleFilterChange}
      productOptions={productOptions}
      toastContent={toastContent}
      onToastDismiss={() => setToastContent(null)}
      selectedFixId={selectedFixId}
      setSelectedFixId={setSelectedFixId}
      generationError={generationError}
      onBulkApply={handleBulkApply}
      onBulkDelete={handleBulkDelete}
      activePlan={activePlan}
      filters={{
        status: statusFilter,
        type: typeFilter,
        priority: priorityFilter,
        product: productFilter,
      }}
    />
  );
}
