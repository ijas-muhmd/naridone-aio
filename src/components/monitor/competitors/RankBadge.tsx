import { Text } from "@shopify/polaris";
import React from "react";

interface RankBadgeProps {
  position: number | null | undefined;
}

export const RankBadge = ({ position }: RankBadgeProps) => {
  if (!position) {
    return (
      <Text as="span" tone="subdued">
        —
      </Text>
    );
  }

  let color = "#e1e3e5"; // Default Gray
  let textColor = "#202223";
  let icon = null;

  if (position === 1) {
    color = "#ffd700"; // Gold
    textColor = "#7a5c00"; // Dark Gold
    icon = "🏆";
  } else if (position === 2) {
    color = "#c0c0c0"; // Silver
    textColor = "#555";
    icon = "🥈";
  } else if (position === 3) {
    color = "#cd7f32"; // Bronze
    textColor = "#6d411e";
    icon = "🥉";
  } else if (position <= 10) {
    color = "#e3f1df"; // Light Green
    textColor = "#005e35"; // Dark Green
  }

  return (
    <div
      style={{
        display: "inline-flex",
        alignItems: "center",
        padding: "2px 8px",
        borderRadius: "12px",
        backgroundColor: color,
        color: textColor,
        fontWeight: 600,
        fontSize: "13px",
        gap: "4px",
      }}
    >
      {icon && <span>{icon}</span>}#{position}
    </div>
  );
};
