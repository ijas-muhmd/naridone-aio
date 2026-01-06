import {
  Card,
  BlockStack,
  InlineStack,
  Text,
  Tooltip,
  Icon,
} from "@shopify/polaris";
import { InfoIcon } from "@shopify/polaris-icons";
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  Cell,
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip as RechartsTooltip,
} from "recharts";
import { ClientOnly } from "../../ClientOnly";
import React, { useMemo } from "react";

interface SentimentChartCardProps {
  view: "bar" | "line";
  sentimentData: any;
}

export const SentimentChartCard = ({
  view,
  sentimentData,
}: SentimentChartCardProps) => {
  const filteredLineChartData = useMemo(() => {
    return sentimentData.lineChartData?.filter((d: any) => d.value > 0);
  }, [sentimentData.lineChartData]);

  return (
    <div
      style={{
        padding: "24px 12px",
        borderRight: "1px solid #e1e3e5",
        height: "100%",
      }}
    >
      <BlockStack gap="400">
        {/* Header */}
        <div style={{ padding: "0 12px" }}>
          <BlockStack gap="200">
            <InlineStack gap="200" blockAlign="center" align="start">
              <Text variant="headingMd" as="h3">
                Sentiment
              </Text>
              <Tooltip content="This chart breaks down positive vs. negative sentiment, tracks changes over time, and highlights key themes shaping brand perception.">
                <Icon source={InfoIcon} tone="subdued" />
              </Tooltip>
            </InlineStack>
            <InlineStack gap="200" blockAlign="center">
              <Text variant="headingLg" as="p" fontWeight="bold">
                {(sentimentData.currentValue || 0).toFixed(1)}%
              </Text>
              <Tooltip content="This score is an average of all historical data">
                <Icon source={InfoIcon} tone="subdued" />
              </Tooltip>
            </InlineStack>
          </BlockStack>
        </div>

        {/* Chart */}
        <div style={{ height: "300px", width: "100%", position: "relative" }}>
          <ClientOnly
            fallback={<div style={{ width: "100%", height: "300px" }}></div>}
          >
            {() => (
              <ResponsiveContainer width="100%" height="100%">
                {view === "bar" ? (
                  <BarChart
                    data={sentimentData.barChartData}
                    margin={{ top: 20, right: 10, left: 0, bottom: 5 }}
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
                      dy={10}
                    />
                    <YAxis
                      axisLine={false}
                      tickLine={false}
                      tick={{ fill: "#8c9196", fontSize: 12 }}
                      domain={sentimentData.yAxisDomain}
                      tickFormatter={(value) => `${value}%`}
                      width={35}
                    />
                    <RechartsTooltip
                      contentStyle={{
                        borderRadius: "8px",
                        border: "none",
                        boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                      }}
                      formatter={(value: any) => [
                        `${value}%`,
                        "Positive Sentiment",
                      ]}
                    />
                    <Bar dataKey="value" radius={[4, 4, 0, 0]}>
                      {sentimentData.barChartData.map(
                        (entry: any, index: number) => (
                          <Cell key={index} fill="#219653" />
                        ),
                      )}
                    </Bar>
                  </BarChart>
                ) : (
                  <LineChart
                    data={filteredLineChartData}
                    margin={{ top: 20, right: 10, left: 0, bottom: 5 }}
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
                      dy={10}
                    />
                    <YAxis
                      axisLine={false}
                      tickLine={false}
                      tick={{ fill: "#8c9196", fontSize: 12 }}
                      domain={sentimentData.yAxisDomain}
                      tickFormatter={(value) => `${value}%`}
                      width={35}
                    />
                    <RechartsTooltip
                      contentStyle={{
                        borderRadius: "8px",
                        border: "none",
                        boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                      }}
                      formatter={(value: any) => [
                        `${Number(value).toFixed(1)}%`,
                        "Positive Sentiment",
                      ]}
                    />
                    <Line
                      type="monotone"
                      dataKey="value"
                      stroke="#219653"
                      strokeWidth={3}
                      dot={false}
                      name="Positive Sentiment"
                    />
                  </LineChart>
                )}
              </ResponsiveContainer>
            )}
          </ClientOnly>
        </div>
      </BlockStack>
    </div>
  );
};
