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
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip as RechartsTooltip,
  Cell,
  LineChart,
  Line,
} from "recharts";
import { ClientOnly } from "../../ClientOnly";
import { getDomainColor } from "./utils";

// Custom tooltip for bar chart
const CustomBarChartTooltip = ({ active, payload }: any) => {
  if (active && payload && payload.length) {
    const entry = payload[0];
    const domainName = entry.payload?.name || "";
    const value = entry.value || 0;

    // Get icon for domain
    const getDomainIcon = (domain: string) => {
      return (
        <img
          src={`https://www.google.com/s2/favicons?domain=${domain}&sz=16`}
          alt={domain}
          style={{ width: "16px", height: "16px", borderRadius: "4px" }}
          onError={(e) => {
            (e.target as HTMLImageElement).style.display = "none";
          }}
        />
      );
    };

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
          border: "none",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          {getDomainIcon(domainName)}
          <span
            style={{ color: "#ffffff", fontSize: "12px", lineHeight: "16px" }}
          >
            {domainName}
          </span>
          <span
            style={{
              fontWeight: 500,
              color: "#ffffff",
              fontSize: "12px",
              lineHeight: "16px",
            }}
          >
            {Number(value).toFixed(1)}%
          </span>
        </div>
      </div>
    );
  }
  return null;
};

// Custom tooltip for line chart
const CustomLineChartTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    // Sort payload by value descending
    const sortedPayload = [...payload].sort(
      (a, b) => (b.value || 0) - (a.value || 0),
    );

    // Format date: "Dec 3" -> "Dec 3, 2025"
    const formattedDate = label ? `${label}, 2025` : "";

    return (
      <div
        style={{
          backgroundColor: "#2c2c2c",
          padding: "12px 16px",
          borderRadius: "8px",
          boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
          minWidth: "220px",
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
          {formattedDate}
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          {sortedPayload.map((entry: any, index: number) => {
            const domainName = entry.dataKey || entry.name || "";
            const value = entry.value || 0;
            const color = entry.color || getDomainColor(domainName);

            // Get icon for domain
            const getDomainIcon = (domain: string) => {
              return (
                <img
                  src={`https://www.google.com/s2/favicons?domain=${domain}&sz=16`}
                  alt={domain}
                  style={{
                    width: "16px",
                    height: "16px",
                    borderRadius: "4px",
                  }}
                  onError={(e) => {
                    (e.target as HTMLImageElement).style.display = "none";
                  }}
                />
              );
            };

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
                  {getDomainIcon(domainName)}
                  <span style={{ color: "#ffffff", fontSize: "12px" }}>
                    {domainName}
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

interface CitationShareCardProps {
  view: "bar" | "line";
  barChartData: any[];
  lineChartData: any[];
  lineChartDomains: string[];
  citationTypesData: any[];
  rankDisplay: string;
}

export const CitationShareCard = ({
  view,
  barChartData,
  lineChartData,
  lineChartDomains,
  citationTypesData,
  rankDisplay,
}: CitationShareCardProps) => {
  return (
    <Card>
      <BlockStack gap="400">
        {/* Header */}
        <BlockStack gap="200">
          <InlineStack gap="200" blockAlign="center" align="start">
            <Text variant="headingMd" as="h3">
              Citation Share
            </Text>
          </InlineStack>
          <InlineStack gap="200" blockAlign="center">
            <Text variant="headingLg" as="p" fontWeight="bold">
              {citationTypesData.find((d: any) => d.name === "Citation Types")
                ?.Owned || 0}
              %
              {rankDisplay !== "-"
                ? ` (#${rankDisplay.replace("#", "")})`
                : " -"}
            </Text>
            <Tooltip content="This score is an average of all historical data">
              <Icon source={InfoIcon} tone="subdued" />
            </Tooltip>
          </InlineStack>
        </BlockStack>

        {/* Chart */}
        <div style={{ height: "300px", width: "100%", position: "relative" }}>
          <ClientOnly
            fallback={<div style={{ width: "100%", height: "100%" }}></div>}
          >
            {() => (
              <ResponsiveContainer width="100%" height="100%">
                {view === "bar" ? (
                  <BarChart
                    data={barChartData}
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
                      domain={(() => {
                        // Calculate max value from all data points
                        const allValues = lineChartData.flatMap((d: any) =>
                          lineChartDomains.map(
                            (domain: string) => d[domain] || 0,
                          ),
                        );
                        const maxValue = Math.max(...allValues, 0);
                        // Add 10% padding and round up to nearest integer
                        const maxDomain = Math.ceil(maxValue * 1.1);
                        return [0, Math.max(maxDomain, 11)];
                      })()}
                      tickFormatter={(value) => `${value}%`}
                      width={30}
                    />
                    <RechartsTooltip content={<CustomBarChartTooltip />} />
                    <Bar dataKey="value" radius={[4, 4, 0, 0]} barSize={25}>
                      {barChartData.map((entry: any, index: number) => (
                        <Cell key={index} fill={getDomainColor(entry.name)} />
                      ))}
                    </Bar>
                  </BarChart>
                ) : (
                  <LineChart
                    data={lineChartData}
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
                        // Extract day number from "Month Day" format
                        const match = value.match(/\d+$/);
                        return match ? match[0] : value;
                      }}
                    />
                    <YAxis
                      axisLine={false}
                      tickLine={false}
                      tick={{ fill: "#8c9196", fontSize: 12 }}
                      domain={(() => {
                        // Calculate max value from all data points
                        const allValues = lineChartData.flatMap((d: any) =>
                          lineChartDomains.map(
                            (domain: string) => d[domain] || 0,
                          ),
                        );
                        const maxValue = Math.max(...allValues, 0);
                        // Add 10% padding and round up to nearest integer
                        const maxDomain = Math.ceil(maxValue * 1.1);
                        return [0, Math.max(maxDomain, 11)];
                      })()}
                      tickFormatter={(value) => `${value}%`}
                      width={30}
                    />
                    <RechartsTooltip content={<CustomLineChartTooltip />} />
                    {/* Legend removed in favor of top filters */}
                    {lineChartDomains.map((domain: string) => (
                      <Line
                        key={domain}
                        type="monotone"
                        dataKey={domain}
                        stroke={getDomainColor(domain)}
                        strokeWidth={2}
                        dot={false}
                      />
                    ))}
                  </LineChart>
                )}
              </ResponsiveContainer>
            )}
          </ClientOnly>
          {/* Custom X-axis labels with icons for bar chart */}
          {view === "bar" && (
            <div
              style={{
                position: "absolute",
                bottom: "10px",
                left: "0",
                right: "0",
                display: "flex",
                justifyContent: "space-around",
                paddingLeft: "30px",
                paddingRight: "30px",
              }}
            >
              {barChartData.map((entry: any, index: number) => (
                <div
                  key={index}
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: "4px",
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
                    }}
                  >
                    <img
                      src={`https://www.google.com/s2/favicons?domain=${entry.name}&sz=64`}
                      alt={entry.name}
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </BlockStack>
    </Card>
  );
};
