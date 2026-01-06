import React from "react";
import { PLATFORMS, getPlatformInfo } from "../../../utils/platforms";

interface CustomLineChartTooltipProps {
  active?: boolean;
  payload?: any[];
  label?: string;
  displayNameToKey: Record<string, string>;
  platformColorMap: Map<string, string>;
  barColors: string[];
}

export const CustomLineChartTooltip = ({
  active,
  payload,
  label,
  displayNameToKey,
  platformColorMap,
  barColors,
}: CustomLineChartTooltipProps) => {
  if (active && payload && payload.length) {
    const sortedPayload = [...payload].sort(
      (a: any, b: any) => (b.value || 0) - (a.value || 0),
    );

    return (
      <div
        style={{
          backgroundColor: "#2c2c2c",
          padding: "12px",
          borderRadius: "6px",
          boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
          fontSize: "12px",
          fontFamily:
            '-apple-system, BlinkMacSystemFont, "San Francisco", "Segoe UI", Roboto, "Helvetica Neue", sans-serif',
        }}
      >
        <div
          style={{
            marginBottom: "12px",
            fontWeight: 500,
            color: "#ffffff",
            fontSize: "13px",
          }}
        >
          {label}
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          {sortedPayload.map((entry: any, index: number) => {
            const platformName = entry.dataKey || entry.name || "";
            const value = entry.value || 0;
            const color =
              entry.color ||
              platformColorMap.get(platformName) ||
              barColors[0];
            // Get platform key from display name, then get platform info directly from PLATFORMS
            const platformKey = displayNameToKey[platformName];
            const platformInfo = platformKey
              ? PLATFORMS[platformKey]
              : getPlatformInfo(platformName.toLowerCase());

            return (
              <div
                key={index}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  gap: "12px",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                    flex: 1,
                  }}
                >
                  <div
                    style={{
                      width: "3px",
                      height: "16px",
                      backgroundColor: color,
                      borderRadius: "2px",
                      flexShrink: 0,
                    }}
                  ></div>
                  <div
                    style={{
                      width: "16px",
                      height: "16px",
                      borderRadius: "4px",
                      overflow: "hidden",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    <img
                      src={platformInfo.logo}
                      alt={platformName}
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                      onError={(e) => {
                        (e.target as HTMLImageElement).style.display = "none";
                      }}
                    />
                  </div>
                  <span style={{ color: "#ffffff", fontSize: "12px" }}>
                    {platformName}
                  </span>
                </div>
                <span
                  style={{
                    fontWeight: 500,
                    color: "#ffffff",
                    fontSize: "12px",
                    flexShrink: 0,
                  }}
                >
                  {Number(value).toFixed(1)}%
                </span>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
  return null;
};
