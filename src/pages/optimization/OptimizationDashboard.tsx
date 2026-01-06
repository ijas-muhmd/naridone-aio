import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { type FilterOptions } from "../../components/DataFilters";
import { OptimizationDashboard } from "../../components/optimization/OptimizationDashboard";

// Mock Data
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

const MOCK_FIXES_DATA = {
  needsOnboarding: false,
  fixStats: {
    total: 24,
    appliedLast30Days: 156,
    byStatus: {
      pending: 12,
      suggested: 12,
      applied: 156,
    },
    byCategory: {
      "Missing Metadata": 8,
      "Thin Content": 6,
      "No Alt Text": 4,
      "Schema Errors": 6,
    },
    byPriority: {
      critical: 5,
      moderate: 10,
      minor: 9,
    },
  },
  fixes: [
    {
      id: "1",
      type: "content_gap",
      priority: "high",
      status: "open",
      title: "Missing keyword in product description",
      description: "Add 'sustainable' to description.",
      createdAt: new Date().toISOString(),
    },
    {
      id: "2",
      type: "sentiment",
      priority: "medium",
      status: "in_progress",
      title: "Negative sentiment in recent reviews",
      description: "Address customer complaints regarding shipping.",
      createdAt: new Date().toISOString(),
    },
    {
      id: "3",
      type: "technical",
      priority: "low",
      status: "resolved",
      title: "Slow page load time",
      description: "Optimize images on landing page.",
      createdAt: new Date().toISOString(),
    },
  ],
  prompts: [
    { id: "p1", text: "Best running shoes", status: "Active" },
    { id: "p2", text: "Top rated sneakers", status: "Active" },
  ],
  products: [],
  existingTopics: [],
};

export default function OptimizationDashboardPage() {
  const navigate = useNavigate();
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(true);

  // Use local state for filters
  const [filters, setFilters] = useState<FilterOptions>({
    timeRange: "7",
    product: "all",
    region: [],
    source: [],
    topic: [],
  });

  const [statsData, setStatsData] = useState<any>(null);
  const [trendsData, setTrendsData] = useState<any>(null);
  const [fixesData, setFixesData] = useState<any>(null);

  useEffect(() => {
    // Simulate fetch
    setIsLoading(true);
    const timer = setTimeout(() => {
      setStatsData(MOCK_STATS_DATA);
      setTrendsData(MOCK_TRENDS_DATA);
      setFixesData(MOCK_FIXES_DATA);
      setIsLoading(false);
    }, 600);
    return () => clearTimeout(timer);
  }, [filters]);

  // Handle filter changes (just update local state)
  const handleFilterChange = (newFilters: FilterOptions) => {
    setFilters(newFilters);
  };

  // Handle onboarding redirect
  useEffect(() => {
    if (statsData?.needsOnboarding || fixesData?.needsOnboarding) {
      navigate("/app/onboarding");
    }
  }, [statsData, fixesData, navigate]);

  return (
    <OptimizationDashboard
      statsData={statsData || {}}
      trendsData={trendsData || {}}
      fixesData={fixesData || {}}
      filters={filters}
      onFilterChange={handleFilterChange}
      isLoading={isLoading}
    />
  );
}
