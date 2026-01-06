import { Icon } from "@shopify/polaris";
import {
  NoteIcon,
  ChatIcon,
  FolderIcon,
  AlertCircleIcon,
} from "@shopify/polaris-icons";
import React, { memo } from "react";
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip as RechartsTooltip,
  LabelList,
} from "recharts";

// Custom tooltip for citation types chart
const CitationTypesTooltip = ({ active, payload, total }: any) => {
  if (active && payload && payload.length && total) {
    return (
      <div
        style={{
          backgroundColor: "#2c2c2c",
          padding: "8px 12px",
          borderRadius: "6px",
          boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
          fontSize: "12px",
          fontFamily:
            '-apple-system, BlinkMacSystemFont, "San Francisco", "Segoe UI", Roboto, "Helvetica Neue", sans-serif',
        }}
      >
        {payload
          .filter((entry: any) => (entry.value || 0) > 0) // Only show non-zero values
          .map((entry: any, index: number) => {
            const percentage = entry.value || 0;
            // Calculate count more accurately
            const count =
              total > 0 ? Math.round((percentage / 100) * total) : 0;
            return (
              <div
                key={index}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  marginBottom:
                    index <
                    payload.filter((e: any) => (e.value || 0) > 0).length - 1
                      ? "4px"
                      : "0",
                }}
              >
                <div
                  style={{
                    width: "12px",
                    height: "12px",
                    backgroundColor: entry.color,
                    borderRadius: "2px",
                  }}
                ></div>
                <span style={{ color: "#ffffff", fontSize: "12px" }}>
                  {entry.name}:
                </span>
                <span
                  style={{
                    fontWeight: 500,
                    color: "#ffffff",
                    fontSize: "12px",
                  }}
                >
                  {count.toLocaleString()}
                </span>
                <span style={{ color: "#999999", fontSize: "11px" }}>
                  ({percentage.toFixed(1)}%)
                </span>
              </div>
            );
          })}
      </div>
    );
  }
  return null;
};

// Custom label component with icon and percentage
const CustomLabel = ({ x, y, width, height, value, dataKey }: any) => {
  if (!value || value === 0 || width < 30) return null;

  const icons: Record<string, React.ComponentType<any>> = {
    Earned: NoteIcon,
    Social: ChatIcon,
    Owned: FolderIcon,
    Competition: AlertCircleIcon,
  };

  const IconComponent = icons[dataKey];
  const iconSize = 16; // Increased size for better visibility
  const text = `${Number(value).toFixed(2)}%`;
  const textWidth = text.length * 6;
  const gap = 2; // Small gap between icon and text
  const totalWidth = IconComponent ? iconSize + gap + textWidth : textWidth;

  // Calculate position - center of the segment
  const centerX = x + width / 2;
  const centerY = y + height / 2;

  return (
    <g>
      {IconComponent && (
        <foreignObject
          x={centerX - totalWidth / 2}
          y={centerY - iconSize / 2}
          width={iconSize}
          height={iconSize}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "100%",
              height: "100%",
            }}
          >
            <style>{`
                            .citation-icon-white svg {
                                width: 16px !important;
                                height: 16px !important;
                                color: white !important;
                            }
                            .citation-icon-white svg path {
                                fill: white !important;
                                stroke: white !important;
                                stroke-width: 0 !important;
                            }
                            .citation-icon-white svg circle {
                                fill: white !important;
                                stroke: white !important;
                                stroke-width: 0 !important;
                            }
                            .citation-icon-white svg rect {
                                fill: white !important;
                                stroke: white !important;
                                stroke-width: 0 !important;
                            }
                            .citation-icon-white svg * {
                                fill: white !important;
                                stroke: white !important;
                            }
                        `}</style>
            <div
              className="citation-icon-white"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "100%",
                height: "100%",
              }}
            >
              <Icon source={IconComponent as any} tone="base" />
            </div>
          </div>
        </foreignObject>
      )}
      <text
        x={centerX + (IconComponent ? iconSize / 2 + gap : 0)}
        y={centerY + 4}
        fill="white"
        fontSize={12}
        fontWeight="500"
        textAnchor={IconComponent ? "start" : "middle"}
      >
        {text}
      </text>
    </g>
  );
};

interface CitationTypesChartProps {
  data: Array<{
    name: string;
    Earned: number;
    Social: number;
    Owned: number;
    Competition: number;
  }>;
  total: number;
  hiddenSeries: string[];
}

export const CitationTypesChart = memo(
  ({ data, total, hiddenSeries }: CitationTypesChartProps) => {
    // We only have one data point for the stacked bar
    const rawData = data[0];

    // Calculate total of VISIBLE series
    const visibleTotal = ["Earned", "Social", "Owned", "Competition"]
      .filter((key) => !hiddenSeries.includes(key))
      .reduce(
        (sum, key) =>
          sum + ((rawData?.[key as keyof typeof rawData] as number) || 0),
        0,
      );

    // Normalize values to 100% relative to VISIBLE series
    // This ensures the bar is always full width
    const chartData = [
      {
        name: "Citation Types",
        Earned: !hiddenSeries.includes("Earned")
          ? (((rawData?.Earned || 0) / visibleTotal) * 100)
          : 0,
        Social: !hiddenSeries.includes("Social")
          ? (((rawData?.Social || 0) / visibleTotal) * 100)
          : 0,
        Owned: !hiddenSeries.includes("Owned")
          ? (((rawData?.Owned || 0) / visibleTotal) * 100)
          : 0,
        Competition: !hiddenSeries.includes("Competition")
          ? (((rawData?.Competition || 0) / visibleTotal) * 100)
          : 0,
      },
    ];

    // Fixed order for all series
    const fixedOrder = ["Earned", "Social", "Owned", "Competition"];

    // Determine the first and last visible keys in the fixed order to apply rounded corners
    const visibleKeys = fixedOrder.filter(
      (key) =>
        !hiddenSeries.includes(key) &&
        ((rawData?.[key as keyof typeof rawData] as number) || 0) > 0,
    );
    const firstKey = visibleKeys[0];
    const lastKey = visibleKeys[visibleKeys.length - 1];

    return (
      <div style={{ width: "100%", height: "100%" }}>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={chartData}
            layout="vertical"
            margin={{ top: 0, right: 0, left: 0, bottom: 0 }}
            barSize={40}
          >
            <XAxis type="number" hide domain={[0, 100]} />
            <YAxis type="category" dataKey="name" hide />
            <RechartsTooltip content={<CitationTypesTooltip total={total} />} />
            {/* Always render all bars in fixed order to maintain stacking order */}
            <Bar
              dataKey="Earned"
              stackId="a"
              fill="#2F80ED"
              isAnimationActive={false}
              radius={
                visibleKeys.length === 1
                  ? [6, 6, 6, 6]
                  : firstKey === "Earned"
                    ? [6, 0, 0, 6]
                    : lastKey === "Earned"
                      ? [0, 6, 6, 0]
                      : [0, 0, 0, 0]
              }
            >
              <LabelList
                dataKey="Earned"
                content={<CustomLabel dataKey="Earned" />}
              />
            </Bar>
            <Bar
              dataKey="Social"
              stackId="a"
              fill="#9B51E0"
              isAnimationActive={false}
              radius={
                visibleKeys.length === 1
                  ? [6, 6, 6, 6]
                  : firstKey === "Social"
                    ? [6, 0, 0, 6]
                    : lastKey === "Social"
                      ? [0, 6, 6, 0]
                      : [0, 0, 0, 0]
              }
            >
              <LabelList
                dataKey="Social"
                content={<CustomLabel dataKey="Social" />}
              />
            </Bar>
            <Bar
              dataKey="Owned"
              stackId="a"
              fill="#219653"
              isAnimationActive={false}
              radius={
                visibleKeys.length === 1
                  ? [6, 6, 6, 6]
                  : firstKey === "Owned"
                    ? [6, 0, 0, 6]
                    : lastKey === "Owned"
                      ? [0, 6, 6, 0]
                      : [0, 0, 0, 0]
              }
            >
              <LabelList
                dataKey="Owned"
                content={<CustomLabel dataKey="Owned" />}
              />
            </Bar>
            <Bar
              dataKey="Competition"
              stackId="a"
              fill="#EB5757"
              isAnimationActive={false}
              radius={
                visibleKeys.length === 1
                  ? [6, 6, 6, 6]
                  : firstKey === "Competition"
                    ? [6, 0, 0, 6]
                    : lastKey === "Competition"
                      ? [0, 6, 6, 0]
                      : [0, 0, 0, 0]
              }
            >
              <LabelList
                dataKey="Competition"
                content={<CustomLabel dataKey="Competition" />}
              />
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    );
  },
);

CitationTypesChart.displayName = "CitationTypesChart";
