import { useLocation, useNavigate } from "react-router-dom";
import { Tabs, Icon as PolarisIcon } from "@shopify/polaris";
import { useState, useEffect } from "react";
import type { IconSource } from "@shopify/polaris";
import {
  ViewIcon,
  WandIcon,
  ChatIcon,
  SearchIcon,
  SettingsIcon,
  PlayIcon,
  TargetIcon,
  MagicIcon,
} from "@shopify/polaris-icons";

export function OptimizationNav() {
  const location = useLocation();
  const navigate = useNavigate();
  const currentPath = location.pathname;

  const tabs = [
    {
      content: "Dashboard",
      id: "/app/optimization",
      icon: ViewIcon as IconSource,
    },
    {
      content: "Fix Engine",
      id: "/app/optimization/fixes",
      icon: WandIcon as IconSource,
    },
    {
      content: "Autopilot",
      id: "/app/optimization/automate",
      icon: MagicIcon as IconSource,
    },
    {
      content: "Redirects",
      id: "/app/optimization/redirects",
      icon: PlayIcon as IconSource,
    },
    {
      content: "AI Sitemap",
      id: "/app/optimization/sitemap",
      icon: SettingsIcon as IconSource,
    },
  ];

  // Handle the tricky root path match for Dashboard
  const isDashboard =
    currentPath === "/app/optimization" || currentPath === "/app/optimization/";

  // Find active tab - check longer paths first to avoid matching dashboard for sub-routes
  const activeTab = isDashboard
    ? tabs[0].id
    : tabs
        .slice()
        .reverse()
        .find(
          (tab) =>
            currentPath === tab.id || currentPath.startsWith(tab.id + "/"),
        )?.id || tabs[0].id;

  const [selected, setSelected] = useState(activeTab);

  // Sync state with location changes
  useEffect(() => {
    if (activeTab !== selected) {
      setSelected(activeTab);
    }
  }, [activeTab, selected]);

  const handleTabChange = (index: number) => {
    const value = tabs[index].id;
    setSelected(value);
    navigate(value);
  };

  return (
    <div
      style={{
        display: "inline-flex",
        backgroundColor: "white",
        borderRadius: "12px",
        padding: "4px",
        boxShadow: "0 1px 3px rgba(0, 0, 0, 0.1)",
        gap: "4px",
        marginBottom: "24px",
      }}
    >
      {tabs.map((tab, index) => {
        const isActive = selected === tab.id;
        const Icon = tab.icon;
        return (
          <button
            key={tab.id}
            onClick={() => handleTabChange(index)}
            // style={{
            //   display: 'flex',
            //   alignItems: 'center',
            //   gap: '8px',
            //   padding: '8px 16px',
            //   border: 'none',
            //   borderRadius: '6px',
            //   backgroundColor: isActive ? 'white' : 'transparent',
            //   color: isActive ? '#202223' : '#6d7175',
            //   fontSize: '14px',
            //   fontWeight: isActive ? 600 : 400,
            //   cursor: 'pointer',
            //   transition: 'all 0.2s ease',
            //   boxShadow: isActive ? '0 1px 3px rgba(0,0,0,0.1)' : 'none',
            // }}
            style={{
              padding: "8px 16px",
              borderRadius: "8px",
              border: "none",
              backgroundColor: isActive ? "#f3f4f6" : "transparent",
              color: isActive ? "#1f2937" : "#6b7280",
              fontSize: "14px",
              fontWeight: isActive ? 500 : 400,
              cursor: "pointer",
              transition: "all 0.2s ease",
              fontFamily:
                '-apple-system, BlinkMacSystemFont, "San Francisco", "Segoe UI", Roboto, "Helvetica Neue", sans-serif',
              outline: "none",
            }}
            onMouseEnter={(e) => {
              if (!isActive) {
                e.currentTarget.style.backgroundColor = "#ebebeb";
              }
            }}
            onMouseLeave={(e) => {
              if (!isActive) {
                e.currentTarget.style.backgroundColor = "transparent";
              }
            }}
          >
            {/* <Icon />
            <span>{tab.label}</span> */}
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
                  <PolarisIcon source={tab.icon} />
                </span>
              )}
              <span>{tab.content}</span>
            </div>
          </button>
        );
      })}
    </div>
  );
}
