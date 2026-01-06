import { useState } from "react";
import {
  SearchIcon,
  MagicIcon,
  AlertCircleIcon,
  SettingsIcon,
  PersonIcon,
} from "@shopify/polaris-icons";
import { OptimizationAutopilot } from "../../components/optimization/OptimizationAutopilot";

// Mock Data
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

const MOCK_SETTINGS = {
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

const MOCK_STATS = {
  timeSaved: "14 hours",
  fixesApplied: 341,
};

export default function OptimizationAutopilotPage() {
  const [autopilotEnabled, setAutopilotEnabled] = useState(true);
  // Cast MOCK_AGENTS to any to avoid strict type checking on icon components in mock
  const [agents] = useState<any>(MOCK_AGENTS);
  const [settings, setSettings] = useState(MOCK_SETTINGS);

  const handleToggleAutopilot = () => {
    setAutopilotEnabled((prev) => !prev);
  };

  const handleSettingsChange = (key: string, value: any) => {
    setSettings((prev) => ({ ...prev, [key]: value }));
  };

  return (
    <OptimizationAutopilot
      autopilotEnabled={autopilotEnabled}
      onToggleAutopilot={handleToggleAutopilot}
      agents={agents}
      settings={settings}
      onSettingsChange={handleSettingsChange}
      stats={MOCK_STATS}
    />
  );
}
