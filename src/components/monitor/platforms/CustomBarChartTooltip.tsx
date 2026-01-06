import React from "react";
import { PLATFORMS, getPlatformInfo } from "../../../utils/platforms";

interface CustomBarChartTooltipProps {
  active?: boolean;
  payload?: any[];
  displayNameToKey: Record<string, string>;
  platformColorMap: Map<string, string>;
  barColors: string[];
}

export const CustomBarChartTooltip = ({
  active,
  payload,
  displayNameToKey,
  platformColorMap,
  barColors,
}: CustomBarChartTooltipProps) => {
  if (active && payload && payload.length) {
    const entry = payload[0];
    const platformName = entry.payload?.name || "";
    const value = entry.value || 0;
    // Get platform key from display name, then get platform info directly from PLATFORMS
    const platformKey = displayNameToKey[platformName];
    const platformInfo = platformKey
      ? PLATFORMS[platformKey]
      : getPlatformInfo(platformName.toLowerCase());
    const barColor = platformColorMap.get(platformName) || barColors[0];

    return (
      <div
        style={{
          backgroundColor: "#2c2c2c",
          borderRadius: "8px",
          padding: "8px 12px",
          display: "flex",
          alignItems: "center",
          gap: "12px",
          boxShadow: "0 2px 8px rgba(0, 0, 0, 0.15)",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Vertical colored bar on left - inset from rounded corner */}
        <div
          style={{
            position: "absolute",
            left: "8px",
            top: "8px",
            bottom: "8px",
            width: "3px",
            backgroundColor: barColor,
            borderRadius: "2px",
          }}
        />
        {/* Platform icon */}
        <div
          style={{
            width: "20px",
            height: "20px",
            borderRadius: "4px",
            backgroundColor: "#ffffff",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexShrink: 0,
            marginLeft: "16px",
          }}
        >
          <img
            src={platformInfo.logo}
            alt={platformInfo.name}
            style={{
              width: "16px",
              height: "16px",
              borderRadius: "2px",
            }}
          />
        </div>
        {/* Platform name */}
        <span
          style={{
            color: "#ffffff",
            fontSize: "14px",
            fontWeight: 400,
            whiteSpace: "nowrap",
          }}
        >
          {platformInfo.name}
        </span>
        {/* Value */}
        <span
          style={{
            color: "#ffffff",
            fontSize: "14px",
            fontWeight: 600,
            marginLeft: "auto",
          }}
        >
          {Number(value).toFixed(1)}%
        </span>
      </div>
    );
  }
  return null;
};
