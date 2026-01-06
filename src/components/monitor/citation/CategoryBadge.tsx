import { Icon } from "@shopify/polaris";
import { NoteIcon, FolderIcon, ChatIcon } from "@shopify/polaris-icons";
import React from "react";

interface CategoryBadgeProps {
  category: "Earned" | "Owned" | "Social";
}

export const CategoryBadge = ({ category }: CategoryBadgeProps) => {
  const categoryConfig = {
    Earned: {
      backgroundColor: "#E3F2FD",
      borderColor: "#BBDEFB",
      iconColor: "#1976D2",
      textColor: "#1976D2",
      icon: NoteIcon,
    },
    Owned: {
      backgroundColor: "#E8F5E9",
      borderColor: "#C8E6C9",
      iconColor: "#388E3C",
      textColor: "#388E3C",
      icon: FolderIcon,
    },
    Social: {
      backgroundColor: "#F3E5F5",
      borderColor: "#E1BEE7",
      iconColor: "#7B1FA2",
      textColor: "#7B1FA2",
      icon: ChatIcon,
    },
  };

  const config = categoryConfig[category];
  const IconComponent = config.icon;

  return (
    <div
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: "2px",
        padding: "4px 8px",
        backgroundColor: config.backgroundColor,
        border: `1px solid ${config.borderColor}`,
        borderRadius: "20px",
        whiteSpace: "nowrap",
        flexShrink: 0,
      }}
    >
      <div style={{ display: "flex", alignItems: "center", flexShrink: 0 }}>
        <Icon source={IconComponent} tone="base" />
      </div>
      <span
        style={{
          color: config.textColor,
          fontSize: "12px",
          fontWeight: 500,
          lineHeight: "16px",
        }}
      >
        {category}
      </span>
    </div>
  );
};
