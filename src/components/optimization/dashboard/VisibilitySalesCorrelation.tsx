import {
  Card,
  BlockStack,
  InlineStack,
  Text,
  Box,
  Grid,
  Icon,
  Tooltip,
  EmptyState,
} from "@shopify/polaris";
import { InfoIcon } from "@shopify/polaris-icons";
import {
  ResponsiveContainer,
  ScatterChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip as RechartsTooltip,
  Scatter,
  Cell,
} from "recharts";
import React from "react";
import { ClientOnly } from "../../ClientOnly";

interface VisibilitySalesCorrelationProps {
  displayVisibilityCorrelation?: any[];
}

export const VisibilitySalesCorrelation = ({
  displayVisibilityCorrelation,
}: VisibilitySalesCorrelationProps) => {
  // Safety check - ensure it's always an array
  const correlationData = Array.isArray(displayVisibilityCorrelation)
    ? displayVisibilityCorrelation
    : [];

  return (
    <BlockStack gap="400">
      <BlockStack gap="050">
        <InlineStack gap="200" align="start" blockAlign="center">
          <Text variant="headingMd" as="h3">
            Visibility vs Sales
          </Text>
          <Tooltip content="Relationship between product visibility and sales performance. High traffic, low visibility = easy wins.">
            <Icon source={InfoIcon} tone="subdued" />
          </Tooltip>
        </InlineStack>
        <Text variant="bodySm" as="p" tone="subdued">
          Impact of visibility on sales.
        </Text>
      </BlockStack>

      <ClientOnly fallback={<div style={{ height: "300px" }} />}>
        {() => {
          const isEmpty = correlationData.length === 0;
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
                  heading="No sales data correlation"
                  image="https://cdn.shopify.com/s/files/1/0262/4071/2726/files/emptystate-files.png"
                >
                  <p>
                    We need more visibility data to correlate it with sales
                    performance.
                  </p>
                </EmptyState>
              </div>
            );
          }

          // Helper function to determine color based on visibility and sales
          const getPointColor = (
            visibility: number,
            salesPerformance: number,
          ): string => {
            if (visibility >= 50 && salesPerformance < 50) {
              return "#108043"; // High visibility, low sales = easy win (green)
            } else if (visibility < 50 && salesPerformance < 50) {
              return "#ff9800"; // Low visibility, low sales = long-term (orange)
            } else if (visibility >= 50 && salesPerformance >= 50) {
              return "#d82c0d"; // High visibility, high sales = protect (red)
            } else {
              // Low visibility, high sales = default blue
              return "#5c6ac4";
            }
          };

          return (
            <div style={{ height: "300px" }}>
              <ResponsiveContainer width="100%" height="100%">
                <ScatterChart
                  margin={{
                    top: 20,
                    right: 20,
                    bottom: 20,
                    left: 0,
                  }}
                >
                  <CartesianGrid strokeDasharray="3 3" stroke="#e1e3e5" />
                  <XAxis
                    type="number"
                    dataKey="visibility"
                    name="Visibility"
                    unit="%"
                    domain={[0, 100]}
                    tick={{ fontSize: 11, fill: "#6d7175" }}
                    axisLine={false}
                    tickLine={false}
                  />
                  <YAxis
                    type="number"
                    dataKey="salesPerformance"
                    name="Sales Performance"
                    unit="%"
                    domain={[0, 100]}
                    tick={{ fontSize: 11, fill: "#6d7175" }}
                    axisLine={false}
                    tickLine={false}
                  />
                  <RechartsTooltip
                    cursor={{ strokeDasharray: "3 3" }}
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
                              {data.productTitle}
                            </div>
                            <div>Visibility: {data.visibility}%</div>
                            <div>
                              Sales: {Math.round(data.salesPerformance)}%
                            </div>
                          </div>
                        );
                      }
                      return null;
                    }}
                  />
                  <Scatter
                    name="Products"
                    data={correlationData}
                    fill="#5c6ac4"
                    fillOpacity={0.6}
                  >
                    {correlationData.map((entry: any, index: number) => (
                      <Cell
                        key={`cell-${index}`}
                        fill={getPointColor(
                          entry.visibility || 0,
                          entry.salesPerformance || 0,
                        )}
                      />
                    ))}
                  </Scatter>
                </ScatterChart>
              </ResponsiveContainer>
            </div>
          );
        }}
      </ClientOnly>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "16px",
          marginTop: "16px",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "6px",
          }}
        >
          <div
            style={{
              width: "10px",
              height: "10px",
              borderRadius: "50%",
              backgroundColor: "#108043",
            }}
          />
          <Text variant="bodyXs" as="span" tone="subdued">
            High vis, low sales (Easy Wins)
          </Text>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "6px",
          }}
        >
          <div
            style={{
              width: "10px",
              height: "10px",
              borderRadius: "50%",
              backgroundColor: "#d82c0d",
            }}
          />
          <Text variant="bodyXs" as="span" tone="subdued">
            High vis, high sales (Protect)
          </Text>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "6px",
          }}
        >
          <div
            style={{
              width: "10px",
              height: "10px",
              borderRadius: "50%",
              backgroundColor: "#ff9800",
            }}
          />
          <Text variant="bodyXs" as="span" tone="subdued">
            Low vis, low sales (Long-term)
          </Text>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "6px",
          }}
        >
          <div
            style={{
              width: "10px",
              height: "10px",
              borderRadius: "50%",
              backgroundColor: "#5c6ac4",
            }}
          />
          <Text variant="bodyXs" as="span" tone="subdued">
            Low vis, high sales (Investigate)
          </Text>
        </div>
      </div>
    </BlockStack>
  );
};
