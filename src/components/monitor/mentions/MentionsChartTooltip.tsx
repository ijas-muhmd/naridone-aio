import { Text } from "@shopify/polaris";
import React from "react";
import { getPlatformIcon } from "./PlatformIcons";

interface MentionsChartTooltipProps {
  active?: boolean;
  payload?: any[];
  label?: string;
}

export const MentionsChartTooltip = ({
  active,
  payload,
  label,
}: MentionsChartTooltipProps) => {
  if (active && payload && payload.length) {
    return (
      <div
        style={{
          background: "#fff",
          padding: "12px",
          border: "1px solid #e1e3e5",
          borderRadius: "8px",
          boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
          minWidth: "150px",
        }}
      >
        <Text as="p" fontWeight="bold" variant="bodySm">
          {label}
        </Text>
        <div style={{ height: "8px" }} />
        {payload.map((entry: any) => {
          // Skip entries with 0 value to clean up tooltip
          if (entry.value === 0) return null;

          const platform = entry.name; // This comes from dataKey
          const PlatformIcon = getPlatformIcon(platform);

          return (
            <div
              key={platform}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
                marginBottom: "4px",
              }}
            >
              <div
                style={{
                  width: 16,
                  height: 16,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <PlatformIcon />
              </div>
              <span
                style={{
                  fontSize: "12px",
                  color: "#202223",
                  fontWeight: 500,
                }}
              >
                {platform}: {entry.value}
              </span>
            </div>
          );
        })}
      </div>
    );
  }
  return null;
};
