import { Card, Box, BlockStack, InlineStack, Text, Button, EmptyState } from "@shopify/polaris";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip as RechartsTooltip,
  ResponsiveContainer,
} from "recharts";
import { ClientOnly } from "../ClientOnly";
import { ChartTooltip } from "./shared/ChartTooltip";

interface VisibilityChartProps {
  chartData: Array<Record<string, any>>;
  brandName: string;
}

const brandColors: Record<string, string> = {};
const otherColors = ["#ff9800", "#2196f3", "#9c27b0", "#00bcd4", "#ff5252"];

export function VisibilityChart({
  chartData,
  brandName,
}: VisibilityChartProps) {
  const brandColorsMap: Record<string, string> = {
    [brandName || ""]: "#008060",
  };

  return (
    <Card padding="0">
      <div
        style={{
          background: "#f9fafb",
          borderBottom: "1px solid #e1e3e5",
          borderTopLeftRadius: "var(--p-border-radius-300, 8px)",
          borderTopRightRadius: "var(--p-border-radius-300, 8px)",
        }}
      >
        <Box padding="300">
          <InlineStack align="space-between" blockAlign="center">
            <BlockStack gap="050">
              <Text variant="headingMd" as="h3">
                Visibility
              </Text>
              <Text variant="bodySm" as="p" tone="subdued">
                Share of daily runs where your brand appears.
              </Text>
            </BlockStack>
            <Button variant="plain" size="slim" onClick={() => {}}>
              Refresh
            </Button>
          </InlineStack>
        </Box>
      </div>
      <div
        style={{
          height: "352.5px",
          width: "100%",
          padding: "16px",
          boxSizing: "border-box",
          overflow: "hidden",
        }}
      >
        {!chartData || chartData.length === 0 ? (
          <div
            style={{
              height: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <EmptyState
              heading="No visibility data yet"
              image="https://cdn.shopify.com/s/files/1/0262/4071/2726/files/emptystate-files.png"
            >
              <p>Run a prompt to start populating daily visibility trends.</p>
            </EmptyState>
          </div>
        ) : (
          <ClientOnly
            fallback={<div style={{ width: "100%", height: "100%" }}></div>}
          >
            {() => {
              const chartBrands = Object.keys(chartData[0] || {}).filter(
                (key) =>
                  key !== "date" &&
                  key !== "label" &&
                  key !== "visibility" &&
                  key !== "total" &&
                  key !== "fullDate"
              );

              return (
                <div style={{ width: "100%", height: "100%" }}>
                  <ResponsiveContainer
                    width="100%"
                    height="100%"
                    minHeight={320}
                    minWidth={0}
                  >
                    <LineChart
                      data={chartData}
                      margin={{
                        top: 10,
                        right: 10,
                        left: -20,
                        bottom: 5,
                      }}
                    >
                      <CartesianGrid
                        strokeDasharray="3 3"
                        vertical={false}
                        stroke="#e4e5e7"
                      />
                      <XAxis
                        dataKey="label"
                        axisLine={false}
                        tickLine={false}
                        tick={{ fill: "#8c9196", fontSize: 12 }}
                        dy={10}
                      />
                      <YAxis
                        axisLine={false}
                        tickLine={false}
                        tick={{ fill: "#8c9196", fontSize: 12 }}
                        domain={[0, 100]}
                        tickFormatter={(value) => `${value}%`}
                      />
                      <RechartsTooltip content={<ChartTooltip />} />
                      {chartBrands.map((brand, index) => {
                        const color =
                          brandColorsMap[brand] ||
                          otherColors[index % otherColors.length];
                        const isYou = brand === brandName;
                        return (
                          <Line
                            key={brand}
                            type="monotone"
                            dataKey={brand}
                            stroke={color}
                            strokeWidth={isYou ? 3 : 2}
                            dot={false}
                            name={brand}
                            strokeOpacity={isYou ? 1 : 0.7}
                          />
                        );
                      })}
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              );
            }}
          </ClientOnly>
        )}
      </div>
    </Card>
  );
}

