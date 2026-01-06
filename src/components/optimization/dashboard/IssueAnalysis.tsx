import {
  BlockStack,
  InlineStack,
  Text,
  Button,
  Card,
  Box,
  Grid,
  Icon,
  Tooltip,
} from "@shopify/polaris";
import { InfoIcon } from "@shopify/polaris-icons";
import {
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Tooltip as RechartsTooltip,
  Treemap,
} from "recharts";
import React from "react";
import { ClientOnly } from "../../ClientOnly";

interface IssueAnalysisProps {
  displayFixStats?: {
    total?: number;
    byPriority?: {
      critical?: number;
      moderate?: number;
      minor?: number;
    };
    byCategory?: Record<string, number>;
  };
  navigate?: (path: string) => void;
}

export const IssueAnalysis = ({
  displayFixStats,
  navigate,
}: IssueAnalysisProps) => {
  // Safety checks with defaults
  const fixStats = displayFixStats || {
    total: 0,
    byPriority: {
      critical: 0,
      moderate: 0,
      minor: 0,
    },
    byCategory: {},
  };

  const total = fixStats.total || 0;
  const byPriority = fixStats.byPriority || {
    critical: 0,
    moderate: 0,
    minor: 0,
  };
  const byCategory = fixStats.byCategory || {};

  const handleNavigate = (path: string) => {
    if (navigate) {
      navigate(path);
    } else {
      console.log("Navigate to:", path);
    }
  };

  return (
    <BlockStack gap="400">
      <InlineStack align="space-between" blockAlign="start">
        <BlockStack gap="050">
          <Text variant="headingMd" as="h2">
            Issue Analysis
          </Text>
          <Text variant="bodySm" as="p" tone="subdued">
            Breakdown by severity and category
          </Text>
        </BlockStack>
        <Button
          variant="plain"
          size="slim"
          onClick={() => handleNavigate("/app/optimization/fixes")}
        >
          View All Fixes
        </Button>
      </InlineStack>
      <Card padding="0">
        <Box padding="400">
          <InlineStack gap="600" align="start" blockAlign="stretch">
            {/* Left Panel - Issue Severity */}
            <div style={{ flex: 1, minWidth: 0 }}>
              <BlockStack gap="400">
                <BlockStack gap="050">
                  <InlineStack gap="200" align="start" blockAlign="center">
                    <Text variant="headingMd" as="h3">
                      Issue Severity
                    </Text>
                    <Tooltip content="Distribution of issues by severity level. Fix critical issues first for the biggest AI visibility lift.">
                      <Icon source={InfoIcon} tone="subdued" />
                    </Tooltip>
                  </InlineStack>
                  <Text variant="bodySm" as="p" tone="subdued">
                    Breakdown by urgency level.
                  </Text>
                </BlockStack>

                <ClientOnly fallback={<div style={{ height: "300px" }} />}>
                  {() => {
                    const severityData = [
                      {
                        name: "Critical",
                        value: byPriority.critical || 0,
                        fill: "#d82c0d",
                      },
                      {
                        name: "Moderate",
                        value: byPriority.moderate || 0,
                        fill: "#ff9800",
                      },
                      {
                        name: "Minor",
                        value: byPriority.minor || 0,
                        fill: "#8c9196",
                      },
                    ].filter((item) => item.value > 0);
                    if (total === 0) {
                      return (
                        <div
                          style={{
                            textAlign: "center",
                            padding: "40px 0",
                          }}
                        >
                          <Text variant="bodyMd" tone="subdued" as="p">
                            No issues detected
                          </Text>
                        </div>
                      );
                    }

                    return (
                      <div
                        style={{
                          position: "relative",
                          height: "300px",
                        }}
                      >
                        <ResponsiveContainer width="100%" height="100%">
                          <PieChart>
                            <Pie
                              data={severityData}
                              cx="50%"
                              cy="50%"
                              innerRadius={60}
                              outerRadius={90}
                              paddingAngle={2}
                              dataKey="value"
                              stroke="none"
                            >
                              {severityData.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={entry.fill} />
                              ))}
                            </Pie>
                            <RechartsTooltip
                              content={({ active, payload }) => {
                                if (active && payload && payload.length) {
                                  const data = payload[0];
                                  const percentage =
                                    total > 0
                                      ? Math.round(
                                          (Number(data.value) / total) * 100,
                                        )
                                      : 0;
                                  return (
                                    <div
                                      style={{
                                        backgroundColor: "#fff",
                                        padding: "12px",
                                        border: "1px solid #e1e3e5",
                                        borderRadius: "8px",
                                        boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                                      }}
                                    >
                                      <div
                                        style={{
                                          fontWeight: 600,
                                          marginBottom: "4px",
                                        }}
                                      >
                                        {data.name}
                                      </div>
                                      <div>
                                        {data.value} issues ({percentage}%)
                                      </div>
                                    </div>
                                  );
                                }
                                return null;
                              }}
                            />
                          </PieChart>
                        </ResponsiveContainer>
                        <div
                          style={{
                            position: "absolute",
                            top: "50%",
                            left: "50%",
                            transform: "translate(-50%, -50%)",
                            textAlign: "center",
                          }}
                        >
                          <Text as="p" variant="heading2xl" fontWeight="bold">
                            {total}
                          </Text>
                          <Text as="span" variant="bodyXs" tone="subdued">
                            Total Issues
                          </Text>
                        </div>
                      </div>
                    );
                  }}
                </ClientOnly>
                <BlockStack gap="200">
                  {(byPriority.critical || 0) > 0 && (
                    <InlineStack align="space-between" blockAlign="center">
                      <InlineStack gap="200" blockAlign="center">
                        <div
                          style={{
                            width: "12px",
                            height: "12px",
                            borderRadius: "50%",
                            backgroundColor: "#d82c0d",
                          }}
                        />
                        <Text variant="bodySm" as="span">
                          Critical
                        </Text>
                      </InlineStack>
                      <Text variant="bodySm" fontWeight="semibold" as="span">
                        {byPriority.critical || 0} (
                        {total > 0
                          ? Math.round(
                              ((byPriority.critical || 0) / total) * 100,
                            )
                          : 0}
                        %)
                      </Text>
                    </InlineStack>
                  )}
                  {(byPriority.moderate || 0) > 0 && (
                    <InlineStack align="space-between" blockAlign="center">
                      <InlineStack gap="200" blockAlign="center">
                        <div
                          style={{
                            width: "12px",
                            height: "12px",
                            borderRadius: "50%",
                            backgroundColor: "#ff9800",
                          }}
                        />
                        <Text variant="bodySm" as="span">
                          Moderate
                        </Text>
                      </InlineStack>
                      <Text variant="bodySm" fontWeight="semibold" as="span">
                        {byPriority.moderate || 0} (
                        {total > 0
                          ? Math.round(
                              ((byPriority.moderate || 0) / total) * 100,
                            )
                          : 0}
                        %)
                      </Text>
                    </InlineStack>
                  )}
                  {(byPriority.minor || 0) > 0 && (
                    <InlineStack align="space-between" blockAlign="center">
                      <InlineStack gap="200" blockAlign="center">
                        <div
                          style={{
                            width: "12px",
                            height: "12px",
                            borderRadius: "50%",
                            backgroundColor: "#8c9196",
                          }}
                        />
                        <Text variant="bodySm" as="span">
                          Minor
                        </Text>
                      </InlineStack>
                      <Text variant="bodySm" fontWeight="semibold" as="span">
                        {byPriority.minor || 0} (
                        {total > 0
                          ? Math.round(
                              ((byPriority.minor || 0) / total) * 100,
                            )
                          : 0}
                        %)
                      </Text>
                    </InlineStack>
                  )}
                </BlockStack>
              </BlockStack>
            </div>

            {/* Right Panel - Issues by Category */}
            <div
              style={{
                flex: 1,
                minWidth: 0,
                borderLeft: "1px solid #e1e3e5",
                paddingLeft: "24px",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  flex: 1,
                  gap: "16px",
                }}
              >
                <BlockStack gap="050">
                  <InlineStack gap="200" align="start" blockAlign="center">
                    <Text variant="headingMd" as="h3">
                      Issues by Category
                    </Text>
                    <Tooltip content="Breakdown of issues by category. Shows where the biggest problems are across your store.">
                      <Icon source={InfoIcon} tone="subdued" />
                    </Tooltip>
                  </InlineStack>
                  <Text variant="bodySm" as="p" tone="subdued">
                    Where the biggest problems are.
                  </Text>
                </BlockStack>

                <ClientOnly fallback={<div style={{ height: "412px" }} />}>
                  {() => {
                    const categoryData = Object.entries(byCategory)
                      .map(([name, value]) => ({
                        name,
                        value: value as number,
                      }))
                      .sort((a, b) => b.value - a.value)
                      .slice(0, 6);

                    if (categoryData.length === 0) {
                      return (
                        <div
                          style={{
                            textAlign: "center",
                            padding: "40px 0",
                          }}
                        >
                          <Text variant="bodyMd" tone="subdued" as="p">
                            No issues by category
                          </Text>
                        </div>
                      );
                    }

                    const colors = [
                      "#5c6ac4",
                      "#2196f3",
                      "#008060",
                      "#ff9800",
                      "#d82c0d",
                      "#9c27b0",
                    ];

                    const CustomizedContent = (props: any) => {
                      const {
                        root,
                        depth,
                        x,
                        y,
                        width,
                        height,
                        index,
                        name,
                        value,
                      } = props;
                      const percent = root.value
                        ? Math.round((value / root.value) * 100)
                        : 0;

                      return (
                        <g>
                          <rect
                            x={x}
                            y={y}
                            rx={8}
                            ry={8}
                            width={width}
                            height={height}
                            style={{
                              fill: colors[index % colors.length],
                              stroke: "#fff",
                              strokeWidth: 2 / (depth + 1e-10),
                              strokeOpacity: 1 / (depth + 1e-10),
                            }}
                          />
                          {depth === 1 && width > 30 && height > 30 ? (
                            <>
                              <text
                                x={x + width / 2}
                                y={
                                  y +
                                  height / 2 -
                                  (width > 60 && height > 50 ? 6 : 0)
                                }
                                textAnchor="middle"
                                dominantBaseline="middle"
                                fill="#fff"
                                fontSize={Math.min(18, width / 3)}
                                fontWeight="bold"
                              >
                                {percent}%
                              </text>
                              {width > 60 && height > 50 && (
                                <text
                                  x={x + width / 2}
                                  y={y + height / 2 + 12}
                                  textAnchor="middle"
                                  fill="#fff"
                                  fontSize={10}
                                  opacity={0.9}
                                >
                                  {name.length > 10
                                    ? name.substring(0, 10) + "..."
                                    : name}
                                </text>
                              )}
                            </>
                          ) : null}
                        </g>
                      );
                    };

                    return (
                      <div
                        style={{
                          flex: 1,
                          minHeight: "300px",
                          width: "100%",
                        }}
                      >
                        <ResponsiveContainer width="100%" height="100%">
                          <Treemap
                            data={categoryData}
                            dataKey="value"
                            stroke="#fff"
                            fill="#8884d8"
                            content={<CustomizedContent />}
                          >
                            <RechartsTooltip
                              content={({ active, payload }) => {
                                if (active && payload && payload.length) {
                                  const data = payload[0];
                                  return (
                                    <div
                                      style={{
                                        backgroundColor: "#fff",
                                        padding: "12px",
                                        border: "1px solid #e1e3e5",
                                        borderRadius: "8px",
                                        boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                                      }}
                                    >
                                      <div
                                        style={{
                                          fontWeight: 600,
                                          marginBottom: "4px",
                                        }}
                                      >
                                        {data.payload.name}
                                      </div>
                                      <div>{data.value} issues</div>
                                    </div>
                                  );
                                }
                                return null;
                              }}
                            />
                          </Treemap>
                        </ResponsiveContainer>
                      </div>
                    );
                  }}
                </ClientOnly>
              </div>
            </div>
          </InlineStack>
        </Box>
      </Card>
    </BlockStack>
  );
};
