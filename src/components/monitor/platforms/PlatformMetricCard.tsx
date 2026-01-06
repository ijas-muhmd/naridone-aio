import { BlockStack, InlineStack, Text, Card } from "@shopify/polaris";
import { GlobeIcon, LinkIcon } from "@shopify/polaris-icons";
import {
  BarChart,
  Bar,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip as RechartsTooltip,
  Cell,
} from "recharts";
import { ClientOnly } from "../../ClientOnly";
import { getPlatformInfo, PLATFORMS } from "../../../utils/platforms";
import { ViewConfigButton } from "../ViewConfigButton";
import { useMemo, useState } from "react";

interface PlatformMetricCardProps {
  title: string;
  subtitle: string;
  chartTitle: string;
  rankTitle: string;
  barChartData: Array<{ name: string; value: number }>;
  lineChartData: Array<Record<string, any>>;
  rankings: Array<{ platform: string; score: number }>;
  platformDisplayMap: Record<string, string>;
  displayNameToKey: Record<string, string>;
  platformColorMap: Map<string, string>;
  barColors: string[];
  view: "bar" | "line";
  onViewChange: (view: "bar" | "line") => void;
  yAxisFormatter?: (value: number) => string;
  valueFormatter?: (value: number) => string;
  yAxisDomain?: [number, number];
  CustomBarChartTooltip: any;
  CustomLineChartTooltip: any;
  reversedYAxis?: boolean;
}

export function PlatformMetricCard({
  title,
  subtitle,
  chartTitle,
  rankTitle,
  barChartData,
  lineChartData,
  rankings,
  platformDisplayMap,
  displayNameToKey,
  platformColorMap,
  barColors,
  view,
  onViewChange,
  yAxisFormatter = (value) => `${value}%`,
  valueFormatter = (value) => `${value.toFixed(1)}%`,
  yAxisDomain,
  reversedYAxis = false,
  CustomBarChartTooltip,
  CustomLineChartTooltip,
}: PlatformMetricCardProps & { reversedYAxis?: boolean }) {
  const [excludedPlatforms, setExcludedPlatforms] = useState<Set<string>>(
    new Set(),
  );

  const togglePlatform = (platform: string) => {
    const newExcluded = new Set(excludedPlatforms);
    if (newExcluded.has(platform)) {
      newExcluded.delete(platform);
    } else {
      newExcluded.add(platform);
    }
    setExcludedPlatforms(newExcluded);
  };

  const filteredBarData = useMemo(() => {
    return barChartData.filter((d) => !excludedPlatforms.has(d.name));
  }, [barChartData, excludedPlatforms]);

  const getBarDomain = () => {
    if (yAxisDomain) return yAxisDomain;
    const allValues = filteredBarData.map((d: any) => d.value || 0);
    const maxValue = Math.max(...allValues, 0);
    const maxDomain = Math.ceil(maxValue * 1.1);
    return [0, Math.max(maxDomain, 20)];
  };

  const getLineDomain = () => {
    if (yAxisDomain) return yAxisDomain;
    const activePlatforms = Object.values(platformDisplayMap).filter(
      (p) => !excludedPlatforms.has(p),
    );

    // Filter out dates with no data first
    const validData = lineChartData.filter((d) =>
      activePlatforms.some((platform) => (d[platform] || 0) > 0),
    );

    const allValues = validData.flatMap((d: any) =>
      activePlatforms.map((displayName) => d[displayName] || 0),
    );
    const maxValue = Math.max(...allValues, 0);

    if (reversedYAxis) {
      // For rankings/position, 1 is top. Lower is better.
      // We want domain to be [min, max] or [1, max]
      // Usually for position we want 1 at top.
      // `reversed={true}` in Recharts flips the axis rendering (max at bottom, min at top).
      // Domain should still be numerical [min, max].
      // If we have positions 1, 5, 10. Max is 10.
      // We probably want domain [1, max+padding].
      const maxPos = maxValue || 10;
      return [1, Math.ceil(maxPos * 1.1)];
    }

    const maxDomain = Math.ceil(maxValue * 1.1);
    return [0, Math.max(maxDomain, 20)];
  };

  // Filter line chart data to remove empty start dates
  const filteredLineData = useMemo(() => {
    const activePlatforms = Object.values(platformDisplayMap).filter(
      (p) => !excludedPlatforms.has(p),
    );
    return lineChartData.filter((d) =>
      activePlatforms.some((platform) => (d[platform] || 0) > 0),
    );
  }, [lineChartData, platformDisplayMap, excludedPlatforms]);

  return (
    <BlockStack gap="400">
      <InlineStack align="space-between" blockAlign="center">
        <BlockStack gap="050">
          <InlineStack gap="200" blockAlign="center" align="start">
            <Text variant="headingMd" as="h2">
              {title}
            </Text>
          </InlineStack>
          <Text variant="bodySm" tone="subdued" as="span">
            {subtitle}
          </Text>
        </BlockStack>
        <ViewConfigButton
          label="Chart Config"
          options={[
            { value: "bar", label: "Bar Chart", icon: GlobeIcon },
            { value: "line", label: "Line Chart", icon: LinkIcon },
          ]}
          selectedValue={view}
          onSelect={(value: string) => onViewChange(value as "bar" | "line")}
        />
      </InlineStack>

      <Card>
        <InlineStack gap="600" align="start" blockAlign="stretch">
          {/* Left Panel - Chart */}
          <div style={{ flex: 1, minWidth: 0 }}>
            <BlockStack gap="400">
              {/* Header */}
              <Text variant="headingMd" as="h3">
                {chartTitle}
              </Text>

              {/* Chart */}
              <div
                style={{ height: "350px", width: "100%", position: "relative" }}
              >
                <ClientOnly
                  fallback={
                    <div style={{ width: "100%", height: "100%" }}></div>
                  }
                >
                  {() => (
                    <ResponsiveContainer width="100%" height="100%">
                      {view === "bar" ? (
                        <BarChart
                          data={filteredBarData}
                          margin={{ top: 20, right: 30, left: 0, bottom: 40 }}
                        >
                          <CartesianGrid
                            strokeDasharray="3 3"
                            vertical={false}
                            stroke="#e4e5e7"
                          />
                          <XAxis
                            dataKey="name"
                            axisLine={false}
                            tickLine={false}
                            tick={false}
                            height={0}
                            tickFormatter={() => ""}
                          />
                          <YAxis
                            axisLine={false}
                            tickLine={false}
                            tick={{ fill: "#8c9196", fontSize: 12 }}
                            domain={getBarDomain()}
                            tickFormatter={yAxisFormatter}
                            width={30}
                          />
                          <RechartsTooltip content={CustomBarChartTooltip} />
                          <Bar
                            dataKey="value"
                            radius={[4, 4, 0, 0]}
                            barSize={25}
                          >
                            {filteredBarData.map(
                              (entry: any, index: number) => {
                                const color =
                                  platformColorMap.get(entry.name) ||
                                  barColors[index % barColors.length];
                                return <Cell key={entry.name} fill={color} />;
                              },
                            )}
                          </Bar>
                        </BarChart>
                      ) : (
                        <LineChart
                          data={filteredLineData}
                          margin={{ top: 20, right: 30, left: 0, bottom: 5 }}
                        >
                          <CartesianGrid
                            strokeDasharray="3 3"
                            vertical={false}
                            stroke="#e4e5e7"
                          />
                          <XAxis
                            dataKey="date"
                            axisLine={false}
                            tickLine={false}
                            tick={{ fill: "#8c9196", fontSize: 12 }}
                            tickFormatter={(value) => {
                              const match = value.match(/\d+$/);
                              return match ? match[0] : value;
                            }}
                          />
                          <YAxis
                            reversed={reversedYAxis}
                            axisLine={false}
                            tickLine={false}
                            tick={{ fill: "#8c9196", fontSize: 12 }}
                            domain={getLineDomain()}
                            tickFormatter={yAxisFormatter}
                            width={30}
                          />
                          <RechartsTooltip content={CustomLineChartTooltip} />
                          {Object.values(platformDisplayMap).map(
                            (displayName) => {
                              const color =
                                platformColorMap.get(displayName) ||
                                barColors[0];
                              if (excludedPlatforms.has(displayName))
                                return null;
                              return (
                                <Line
                                  key={displayName}
                                  type="monotone"
                                  dataKey={displayName}
                                  stroke={color}
                                  strokeWidth={2}
                                  dot={false}
                                />
                              );
                            },
                          )}
                        </LineChart>
                      )}
                    </ResponsiveContainer>
                  )}
                </ClientOnly>
                {/* Custom X-axis labels with icons for bar chart - updated for exclusion */}
                {view === "bar" && (
                  <div
                    style={{
                      position: "absolute",
                      bottom: "10px",
                      left: "30px",
                      right: "30px",
                      display: "flex",
                      justifyContent: "space-around", // Changed to space-around to handle dynamic items better
                      alignItems: "center",
                    }}
                  >
                    {filteredBarData.map((entry: any, index: number) => {
                      const platformKey = displayNameToKey[entry.name];
                      const platformInfo = platformKey
                        ? PLATFORMS[platformKey]
                        : getPlatformInfo(entry.name.toLowerCase());
                      return (
                        <div
                          key={entry.name}
                          style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            flex: 1, // Distribute evenly
                          }}
                        >
                          <div
                            style={{
                              width: "20px",
                              height: "20px",
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
                              alt={entry.name}
                              style={{
                                width: "100%",
                                height: "100%",
                                objectFit: "contain",
                              }}
                              onError={(e) => {
                                (e.target as HTMLImageElement).style.display =
                                  "none";
                              }}
                            />
                          </div>
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
            </BlockStack>
          </div>

          {/* Right Panel - Ranking Table */}
          <div
            style={{
              flex: 1,
              minWidth: 0,
              borderLeft: "1px solid #e1e3e5",
              paddingLeft: "24px",
              display: "flex",
              flexDirection: "column",
              height: "400px",
            }}
          >
            <BlockStack gap="400">
              {/* Header */}
              <Text variant="headingMd" as="h3">
                {rankTitle}
              </Text>

              {/* Table */}
              <div style={{ width: "100%", flex: 1, overflowY: "auto" }}>
                <table style={{ width: "100%", borderCollapse: "collapse" }}>
                  <thead>
                    <tr style={{ borderBottom: "1px solid #e1e3e5" }}>
                      <th
                        style={{
                          textAlign: "left",
                          padding: "8px 0",
                          fontWeight: "500",
                          fontSize: "14px",
                          color: "#6d7175",
                        }}
                      >
                        Platform
                      </th>
                      <th
                        style={{
                          textAlign: "right",
                          padding: "8px 0",
                          fontWeight: "500",
                          fontSize: "14px",
                          color: "#6d7175",
                        }}
                      >
                        {chartTitle}
                      </th>
                      <th
                        style={{
                          textAlign: "right",
                          padding: "8px 0",
                          fontWeight: "500",
                          fontSize: "14px",
                          color: "#6d7175",
                          width: "40px",
                        }}
                      ></th>
                    </tr>
                  </thead>
                  <tbody>
                    {rankings
                      .filter((item) => !excludedPlatforms.has(item.platform))
                      .map((item: any, index: number) => {
                        const platformKey = displayNameToKey[item.platform];
                        const platformInfo = platformKey
                          ? PLATFORMS[platformKey]
                          : getPlatformInfo(item.platform.toLowerCase());
                        return (
                          <tr
                            key={index}
                            style={{ borderBottom: "1px solid #f1f2f4" }}
                          >
                            <td style={{ padding: "12px 0" }}>
                              <InlineStack gap="200" blockAlign="center">
                                <Text
                                  as="span"
                                  variant="bodySm"
                                  fontWeight="medium"
                                  tone="subdued"
                                >
                                  {index + 1}.
                                </Text>
                                <div
                                  style={{
                                    width: "20px",
                                    height: "20px",
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
                                    alt={item.platform}
                                    style={{
                                      width: "100%",
                                      height: "100%",
                                      objectFit: "cover",
                                    }}
                                    onError={(e) => {
                                      (
                                        e.target as HTMLImageElement
                                      ).style.display = "none";
                                    }}
                                  />
                                </div>
                                <Text as="span" variant="bodyMd">
                                  {item.platform}
                                </Text>
                              </InlineStack>
                            </td>
                            <td
                              style={{ textAlign: "right", padding: "12px 0" }}
                            >
                              <Text
                                as="span"
                                variant="bodyMd"
                                fontWeight="medium"
                              >
                                {valueFormatter(item.score)}
                              </Text>
                            </td>
                            <td
                              style={{
                                textAlign: "right",
                                padding: "12px 0",
                                width: "40px",
                              }}
                            >
                              <Text as="span" variant="bodySm" tone="subdued">
                                -
                              </Text>
                            </td>
                          </tr>
                        );
                      })}
                  </tbody>
                </table>
              </div>
            </BlockStack>
          </div>
        </InlineStack>

        {/* Footer / Legend */}
        <div
          style={{
            marginTop: "24px",
            paddingTop: "20px",
            borderTop: "1px solid #e1e3e5",
            width: "100%",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              width: "100%",
              flexWrap: "wrap",
              gap: "8px",
            }}
          >
            {rankings.map((item) => {
              const isExcluded = excludedPlatforms.has(item.platform);
              const color = platformColorMap.get(item.platform);

              return (
                <div
                  key={item.platform}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    cursor: "pointer",
                    opacity: isExcluded ? 0.6 : 1,
                  }}
                  onClick={() => togglePlatform(item.platform)}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "8px",
                      background: isExcluded ? "#f4f6f8" : "#fff",
                      padding: "4px 8px",
                      borderRadius: "6px",
                      border: isExcluded
                        ? "1px solid #dfe3e8"
                        : `1px solid ${color}30`,
                    }}
                  >
                    <div
                      style={{
                        width: "14px",
                        height: "14px",
                        borderRadius: "3px",
                        backgroundColor: color,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        border: "1px solid rgba(0,0,0,0.1)",
                      }}
                    >
                      {!isExcluded && (
                        <div
                          style={{
                            width: "8px",
                            height: "8px",
                            backgroundImage:
                              "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20' fill='white'%3E%3Cpath fill-rule='evenodd' d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z' clip-rule='evenodd'/%3E%3C/svg%3E\")",
                          }}
                        ></div>
                      )}
                    </div>
                    <Text
                      as="span"
                      variant="bodySm"
                      tone={isExcluded ? "subdued" : "base"}
                      fontWeight="medium"
                    >
                      {item.platform}
                    </Text>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </Card>
    </BlockStack>
  );
}
