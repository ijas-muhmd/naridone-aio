import {
  BlockStack,
  InlineStack,
  Text,
  Card,
  Box,
  Grid,
  Icon,
  Tooltip,
  EmptyState,
} from "@shopify/polaris";
import { InfoIcon } from "@shopify/polaris-icons";
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip as RechartsTooltip,
  LineChart,
  Line,
  Legend,
} from "recharts";
import React from "react";
import { ClientOnly } from "../../ClientOnly";
import { OptimizationDashboardCard } from "./OptimizationDashboardCard";

interface FixPerformanceProps {
  displayAutopilotActivity?: any[];
  displayFixSuccessTrend?: any[];
}

export const FixPerformance = ({
  displayAutopilotActivity,
  displayFixSuccessTrend,
}: FixPerformanceProps) => {
  // Safety checks - ensure arrays
  const autopilotData = Array.isArray(displayAutopilotActivity)
    ? displayAutopilotActivity
    : [];
  const successTrendData = Array.isArray(displayFixSuccessTrend)
    ? displayFixSuccessTrend
    : [];

  return (
    <BlockStack gap="400">
      <BlockStack gap="050">
        <Text variant="headingMd" as="h2">
          Fix Performance
        </Text>
        <Text variant="bodySm" as="p" tone="subdued">
          Automated activity and impact tracking
        </Text>
      </BlockStack>
      <Card padding="0">
        <Box padding="400">
          <InlineStack gap="600" align="start" blockAlign="stretch">
            {/* Left Panel - Autopilot Activity */}
            <div style={{ flex: 1, minWidth: 0 }}>
              <BlockStack gap="400">
                <BlockStack gap="050">
                  <InlineStack gap="200" align="start" blockAlign="center">
                    <Text variant="headingMd" as="h3">
                      Autopilot Activity
                    </Text>
                    <Tooltip content="Number of fixes Naridon applied automatically each day. Shows that the system is working for you.">
                      <Icon source={InfoIcon} tone="subdued" />
                    </Tooltip>
                  </InlineStack>
                  <Text variant="bodySm" as="p" tone="subdued">
                    Automatic fixes applied.
                  </Text>
                </BlockStack>

                <ClientOnly fallback={<div style={{ height: "300px" }} />}>
                  {() => {
                    const isEmpty =
                      autopilotData.length === 0 ||
                      !autopilotData.some((d: any) => d.count > 0);
                    if (isEmpty) {
                      return (
                        <div
                          style={{
                            height: "300px",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                          }}
                        >
                          <EmptyState
                            heading="No automated actions yet"
                            image="https://cdn.shopify.com/s/files/1/0262/4071/2726/files/emptystate-files.png"
                          >
                            <p>
                              Naridon hasn't applied any automatic fixes in the
                              last 30 days.
                            </p>
                          </EmptyState>
                        </div>
                      );
                    }
                    return (
                      <div style={{ height: "300px" }}>
                        <ResponsiveContainer width="100%" height="100%">
                          <BarChart
                            data={autopilotData}
                            margin={{ top: 5, right: 10, left: -20, bottom: 5 }}
                          >
                            <CartesianGrid
                              strokeDasharray="3 3"
                              vertical={false}
                              stroke="#e1e3e5"
                            />
                            <XAxis
                              dataKey="date"
                              tick={{ fontSize: 11, fill: "#6d7175" }}
                              tickFormatter={(value) =>
                                new Date(value).toLocaleDateString("en-US", {
                                  month: "short",
                                  day: "numeric",
                                })
                              }
                              axisLine={false}
                              tickLine={false}
                            />
                            <YAxis
                              tick={{ fontSize: 11, fill: "#6d7175" }}
                              axisLine={false}
                              tickLine={false}
                            />
                            <RechartsTooltip
                              content={({ active, payload }) => {
                                if (active && payload && payload.length) {
                                  const data = payload[0].payload;
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
                                        {new Date(data.date).toLocaleDateString(
                                          "en-US",
                                          {
                                            month: "long",
                                            day: "numeric",
                                          },
                                        )}
                                      </div>
                                      <div>{data.count} fixes applied</div>
                                    </div>
                                  );
                                }
                                return null;
                              }}
                            />
                            <Bar
                              dataKey="count"
                              fill="#108043"
                              radius={[4, 4, 0, 0]}
                            />
                          </BarChart>
                        </ResponsiveContainer>
                      </div>
                    );
                  }}
                </ClientOnly>
                <Text variant="bodySm" tone="subdued" as="p">
                  Automatic fixes applied in the last 30 days
                </Text>
              </BlockStack>
            </div>

            {/* Right Panel - Fix Success Trend */}
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
              <BlockStack gap="400">
                <BlockStack gap="050">
                  <InlineStack gap="200" align="start" blockAlign="center">
                    <Text variant="headingMd" as="h3">
                      Fix Success Trend
                    </Text>
                    <Tooltip content="Fixes applied vs fixes that resulted in ranking improvements. Shows real-world results.">
                      <Icon source={InfoIcon} tone="subdued" />
                    </Tooltip>
                  </InlineStack>
                  <Text variant="bodySm" as="p" tone="subdued">
                    Impact of fixes on ranking.
                  </Text>
                </BlockStack>

                <ClientOnly fallback={<div style={{ height: "300px" }} />}>
                  {() => {
                    const isEmpty =
                      successTrendData.length === 0 ||
                      !successTrendData.some(
                        (d: any) =>
                          d.fixesApplied > 0 || d.rankingImprovements > 0,
                      );
                    if (isEmpty) {
                      return (
                        <div
                          style={{
                            height: "300px",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                          }}
                        >
                          <EmptyState
                            heading="No trend data yet"
                            image="https://cdn.shopify.com/s/files/1/0262/4071/2726/files/emptystate-files.png"
                          >
                            <p>
                              Start applying fixes to see how they impact your
                              AI search rankings over time.
                            </p>
                          </EmptyState>
                        </div>
                      );
                    }
                    return (
                      <div style={{ height: "300px" }}>
                        <ResponsiveContainer width="100%" height="100%">
                          <LineChart
                            data={successTrendData}
                            margin={{
                              top: 5,
                              right: 10,
                              left: -20,
                              bottom: 5,
                            }}
                          >
                            <CartesianGrid
                              strokeDasharray="3 3"
                              vertical={false}
                              stroke="#e1e3e5"
                            />
                            <XAxis
                              dataKey="date"
                              tick={{ fontSize: 11, fill: "#6d7175" }}
                              tickFormatter={(value) =>
                                new Date(value).toLocaleDateString("en-US", {
                                  month: "short",
                                  day: "numeric",
                                })
                              }
                              axisLine={false}
                              tickLine={false}
                            />
                            <YAxis
                              tick={{ fontSize: 11, fill: "#6d7175" }}
                              axisLine={false}
                              tickLine={false}
                            />
                            <RechartsTooltip
                              content={({ active, payload }) => {
                                if (active && payload && payload.length) {
                                  const data = payload[0].payload;
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
                                          marginBottom: "8px",
                                        }}
                                      >
                                        {new Date(
                                          data.date,
                                        ).toLocaleDateString("en-US", {
                                          month: "long",
                                          day: "numeric",
                                        })}
                                      </div>
                                      <div
                                        style={{
                                          display: "flex",
                                          flexDirection: "column",
                                          gap: "4px",
                                        }}
                                      >
                                        <div
                                          style={{
                                            display: "flex",
                                            alignItems: "center",
                                            gap: "8px",
                                          }}
                                        >
                                          <div
                                            style={{
                                              width: "8px",
                                              height: "8px",
                                              borderRadius: "50%",
                                              backgroundColor: "#108043",
                                            }}
                                          />
                                          <span>
                                            Fixes Applied: {data.fixesApplied}
                                          </span>
                                        </div>
                                        <div
                                          style={{
                                            display: "flex",
                                            alignItems: "center",
                                            gap: "8px",
                                          }}
                                        >
                                          <div
                                            style={{
                                              width: "8px",
                                              height: "8px",
                                              borderRadius: "50%",
                                              backgroundColor: "#5c6ac4",
                                            }}
                                          />
                                          <span>
                                            Ranking Improvements:{" "}
                                            {data.rankingImprovements}
                                          </span>
                                        </div>
                                      </div>
                                    </div>
                                  );
                                }
                                return null;
                              }}
                            />
                            <Line
                              type="monotone"
                              dataKey="fixesApplied"
                              stroke="#108043"
                              strokeWidth={2}
                              dot={false}
                              name="Fixes Applied"
                            />
                            <Line
                              type="monotone"
                              dataKey="rankingImprovements"
                              stroke="#5c6ac4"
                              strokeWidth={2}
                              dot={false}
                              name="Ranking Improvements"
                            />
                            <Legend
                              wrapperStyle={{
                                fontSize: "12px",
                                paddingTop: "10px",
                              }}
                              iconType="line"
                            />
                          </LineChart>
                        </ResponsiveContainer>
                      </div>
                    );
                  }}
                </ClientOnly>
                <Text variant="bodySm" tone="subdued" as="p">
                  Last 30 days: fixes applied vs ranking improvements
                </Text>
              </BlockStack>
            </div>
          </InlineStack>
        </Box>
      </Card>
    </BlockStack>
  );
};
