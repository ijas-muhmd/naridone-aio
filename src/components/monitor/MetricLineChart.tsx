import { Card, BlockStack, InlineStack, Text, Icon, Tooltip } from "@shopify/polaris";
import { InfoIcon } from "@shopify/polaris-icons";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Tooltip as RechartsTooltip } from "recharts";

interface MetricLineChartProps {
    title: string;
    value: string | number;
    valueLabel?: string;
    tooltipContent?: string;
    data: Array<{ date: string;[key: string]: any }>;
    dataKey: string;
    yAxisDomain?: [number, number];
    yAxisFormatter?: (value: number) => string;
    lineColor?: string;
    showHiddenSpacer?: boolean;
}

export function MetricLineChart({
    title,
    value,
    valueLabel,
    tooltipContent,
    data,
    dataKey,
    yAxisDomain = [0, 110],
    yAxisFormatter = (value) => `${value}%`,
    lineColor = "#2196F3",
    showHiddenSpacer = false,
}: MetricLineChartProps) {
    return (
        <Card>
            <BlockStack gap="400">
                <InlineStack align="space-between" blockAlign="center">
                    <Text variant="headingMd" as="h3">{title}</Text>
                </InlineStack>
                <InlineStack gap="200" blockAlign="center">
                    <Text variant="headingLg" as="p" fontWeight="bold">
                        {value}
                    </Text>
                    {tooltipContent && (
                        <Tooltip content={tooltipContent}>
                            <Icon source={InfoIcon} tone="subdued" />
                        </Tooltip>
                    )}
                </InlineStack>
                {showHiddenSpacer && (
                    <div style={{ visibility: 'hidden', height: '28px' }}>
                        <InlineStack gap="200" blockAlign="center">
                            <Text variant="headingLg" as="p" fontWeight="bold">100%</Text>
                            <Icon source={InfoIcon} tone="subdued" />
                        </InlineStack>
                    </div>
                )}
                <div style={{ height: '260px', width: '100%' }}>
                    <ResponsiveContainer width="100%" height="100%">
                        <LineChart data={data}>
                            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e4e5e7" />
                            <XAxis
                                dataKey="date"
                                axisLine={false}
                                tickLine={false}
                                tick={{ fill: "#8c9196", fontSize: 12 }}
                                tickFormatter={(value) => {
                                    const match = value.match(/\d+$/);
                                    return match ? match[0] : value;
                                }}
                                interval="preserveStartEnd"
                            />
                            <YAxis
                                axisLine={false}
                                tickLine={false}
                                tick={{ fill: "#8c9196", fontSize: 12 }}
                                domain={yAxisDomain}
                                tickFormatter={yAxisFormatter}
                                width={40}
                            />
                            <RechartsTooltip
                                contentStyle={{
                                    backgroundColor: '#2c2c2c',
                                    border: 'none',
                                    borderRadius: '6px',
                                    padding: '8px 12px',
                                }}
                                labelStyle={{ color: '#ffffff', fontSize: '12px' }}
                                formatter={(value: any) => [yAxisFormatter(value), valueLabel || title]}
                            />
                            <Line
                                type="monotone"
                                dataKey={dataKey}
                                stroke={lineColor}
                                strokeWidth={2}
                                dot={false}
                            />
                        </LineChart>
                    </ResponsiveContainer>
                </div>
            </BlockStack>
        </Card>
    );
}

