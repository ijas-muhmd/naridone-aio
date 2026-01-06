import {
  Card,
  BlockStack,
  InlineStack,
  Text,
  Popover,
  Button,
  Box,
  Select,
  DatePicker,
  Icon,
} from "@shopify/polaris";
import { CalendarIcon, ChatIcon } from "@shopify/polaris-icons";
import {
  ResponsiveContainer,
  BarChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip as RechartsTooltip,
  Bar,
} from "recharts";
import { MentionsChartTooltip } from "./MentionsChartTooltip";

interface MentionsChartProps {
  chartData: any[];
  timeRange: string;
  datePickerOpen: boolean;
  setDatePickerOpen: (open: boolean) => void;
  selectedDates: { start: Date; end: Date };
  setSelectedDates: (dates: { start: Date; end: Date }) => void;
  dateState: { month: number; year: number };
  setDateState: (date: { month: number; year: number }) => void;
  handleTimeRangeChange: (value: string) => void;
  handleDateRangeApply: () => void;
}

export const MentionsChart = ({
  chartData,
  timeRange,
  datePickerOpen,
  setDatePickerOpen,
  selectedDates,
  setSelectedDates,
  dateState,
  setDateState,
  handleTimeRangeChange,
  handleDateRangeApply,
}: MentionsChartProps) => {
  const platforms = ["Reddit", "Twitter", "Quora", "YouTube", "Other"];
  const colors = [
    "#008060", // Green (Reddit)
    "#5c5cff", // Blue (Twitter)
    "#f49342", // Orange (Quora)
    "#ffcc00", // Yellow (YouTube)
    "#637381", // Grey (Other)
  ];

  return (
    <Card>
      <BlockStack gap="400">
        <InlineStack align="space-between" blockAlign="center">
          <Text as="h3" variant="headingSm">
            Social Activity
          </Text>
          <Popover
            active={datePickerOpen}
            activator={
              <div onClick={() => setDatePickerOpen(!datePickerOpen)}>
                <Button icon={CalendarIcon} disclosure>
                  {timeRange === "custom"
                    ? `${selectedDates.start.toLocaleDateString()} - ${selectedDates.end.toLocaleDateString()}`
                    : `Last ${timeRange} Days`}
                </Button>
              </div>
            }
            onClose={() => setDatePickerOpen(false)}
            ariaHaspopup={false}
            sectioned
          >
            <Box padding="400" minWidth="300px">
              <BlockStack gap="400">
                <Select
                  label="Quick Ranges"
                  options={[
                    { label: "Last 7 days", value: "7" },
                    { label: "Last 30 days", value: "30" },
                    { label: "Last 90 days", value: "90" },
                    { label: "Custom", value: "custom" },
                  ]}
                  value={timeRange === "custom" ? "custom" : timeRange}
                  onChange={(val) => {
                    handleTimeRangeChange(val);
                    if (val !== "custom") {
                      setDatePickerOpen(false);
                    }
                  }}
                />
                <DatePicker
                  month={dateState.month}
                  year={dateState.year}
                  onChange={({ start, end }) => {
                    setSelectedDates({ start, end });
                  }}
                  onMonthChange={(month, year) => setDateState({ month, year })}
                  selected={selectedDates}
                  allowRange
                />
                <InlineStack align="end" gap="200">
                  <Button onClick={() => setDatePickerOpen(false)}>
                    Cancel
                  </Button>
                  <Button variant="primary" onClick={handleDateRangeApply}>
                    Apply Range
                  </Button>
                </InlineStack>
              </BlockStack>
            </Box>
          </Popover>
        </InlineStack>
        <div style={{ height: "300px", width: "100%" }}>
          {chartData.length > 0 ? (
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={chartData}
                margin={{ top: 20, right: 30, left: 0, bottom: 0 }}
              >
                <CartesianGrid
                  strokeDasharray="3 3"
                  vertical={false}
                  stroke="#e1e3e5"
                />
                <XAxis
                  dataKey="date"
                  axisLine={false}
                  tickLine={false}
                  tick={{ fill: "#6d7175", fontSize: 12 }}
                  dy={10}
                />
                <YAxis
                  axisLine={false}
                  tickLine={false}
                  tick={{ fill: "#6d7175", fontSize: 12 }}
                />
                <RechartsTooltip
                  cursor={{ fill: "rgba(0,0,0,0.05)" }}
                  content={<MentionsChartTooltip />}
                />
                {platforms.map((platform, index) => (
                  <Bar
                    key={platform}
                    dataKey={platform}
                    stackId="a"
                    fill={colors[index]}
                    // "Separated blocks" effect:
                    // 1. White border creates the gap
                    // 2. Small radius on all corners makes them look like blocks
                    stroke="#ffffff"
                    strokeWidth={2}
                    radius={[2, 2, 2, 2]}
                    barSize={12} // Thinner bars as requested
                  />
                ))}
              </BarChart>
            </ResponsiveContainer>
          ) : (
            <div
              style={{
                height: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "column",
                gap: "12px",
                color: "#6d7175",
              }}
            >
              <Icon source={ChatIcon} tone="subdued" />
              <Text as="p" variant="bodyMd" tone="subdued">
                No social activity data available for this period
              </Text>
            </div>
          )}
        </div>
      </BlockStack>
    </Card>
  );
};
