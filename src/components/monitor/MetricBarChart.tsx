import { Card, BlockStack, InlineStack, Text, Icon, Tooltip } from "@shopify/polaris";
import { InfoIcon } from "@shopify/polaris-icons";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Tooltip as RechartsTooltip, Cell } from "recharts";
import { getPlatformInfo } from "../../utils/platforms";

interface BarChartDataItem {
    platform: string;
    platformKey: string;
    [key: string]: any; // For dynamic data keys like visibility, position, citationShare
}

interface MetricBarChartProps {
    title: string;
    data: BarChartDataItem[];
    dataKey: string;
    yAxisDomain?: [number, number];
    yAxisFormatter?: (value: number) => string;
    yAxisReversed?: boolean;
    showHiddenSpacer?: boolean;
    spacerValue?: string;
}

export function MetricBarChart({
    title,
    data,
    dataKey,
    yAxisDomain = [0, 110],
    yAxisFormatter = (value) => `${value}%`,
    yAxisReversed = false,
    showHiddenSpacer = false,
    spacerValue = "100%",
}: MetricBarChartProps) {
    // Extended color palette with distinct contrast - no similar colors
    const barColors = [
        '#000000', // Solid black (very dark)
        '#14b8a6', // Teal (medium-bright, cool)
        '#fbbf24', // Golden yellow (bright, warm)
        '#3b82f6', // Blue (medium-bright, cool)
        '#9333ea', // Deep purple (medium, cool) - distinct from blue
        '#ea580c', // Deep orange (bright, warm) - distinct from yellow
        '#dc2626', // Red (bright, warm)
        '#16a34a', // Forest green (medium, cool) - distinct from teal
        '#ec4899', // Pink/magenta (bright, warm) - distinct from all
        '#b45309', // Amber/brown (medium, warm) - distinct from orange
    ];

    // Create a unique color map for platforms - assign colors in order
    const platformColorMap = new Map<string, string>();
    data.forEach((item, index) => {
        if (!platformColorMap.has(item.platformKey)) {
            // Assign colors in order from the palette
            platformColorMap.set(item.platformKey, barColors[index % barColors.length]);
        }
    });

    // Custom Tick for X Axis to show platform icons
    const CustomXAxisTick = (props: any) => {
        const { x, y, payload } = props;
        const item = data.find((d: any) => d.platform === payload.value);

        if (!item) return null;

        const platformInfo = getPlatformInfo(item.platformKey);

        return (
            <g transform={`translate(${x},${y})`}>
                <image
                    x={-10}
                    y={0}
                    width={20}
                    height={20}
                    href={platformInfo.logo}
                    preserveAspectRatio="xMidYMid meet"
                />
            </g>
        );
    };

    // Custom Tooltip to match the image design
    const CustomTooltip = (props: any) => {
        const { active, payload } = props;

        if (!active || !payload || !payload[0]) {
            return null;
        }

        const dataItem = payload[0].payload;
        const value = payload[0].value;
        const platformInfo = getPlatformInfo(dataItem.platformKey);
        const barColor = platformColorMap.get(dataItem.platformKey) || barColors[0];

        return (
            <div
                style={{
                    backgroundColor: '#2c2c2c',
                    borderRadius: '8px',
                    padding: '8px 12px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px',
                    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.15)',
                    position: 'relative',
                    overflow: 'hidden',
                }}
            >
                {/* Vertical colored bar on left - inset from rounded corner */}
                <div
                    style={{
                        position: 'absolute',
                        left: '8px',
                        top: '8px',
                        bottom: '8px',
                        width: '3px',
                        backgroundColor: barColor,
                        borderRadius: '2px',
                    }}
                />
                {/* Platform icon */}
                <div
                    style={{
                        width: '20px',
                        height: '20px',
                        borderRadius: '4px',
                        backgroundColor: '#ffffff',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0,
                        marginLeft: '16px',
                    }}
                >
                    <img
                        src={platformInfo.logo}
                        alt={platformInfo.name}
                        style={{
                            width: '16px',
                            height: '16px',
                            borderRadius: '2px',
                        }}
                    />
                </div>
                {/* Platform name */}
                <span
                    style={{
                        color: '#ffffff',
                        fontSize: '14px',
                        fontWeight: 400,
                        whiteSpace: 'nowrap',
                    }}
                >
                    {platformInfo.name}
                </span>
                {/* Value */}
                <span
                    style={{
                        color: '#ffffff',
                        fontSize: '14px',
                        fontWeight: 600,
                        marginLeft: 'auto',
                    }}
                >
                    {yAxisFormatter(value)}
                </span>
            </div>
        );
    };

    return (
        <Card>
            <BlockStack gap="400">
                <InlineStack align="space-between" blockAlign="center">
                    <Text variant="headingMd" as="h3">{title}</Text>
                </InlineStack>
                {showHiddenSpacer && (
                    <div style={{ visibility: 'hidden', height: '28px' }}>
                        <InlineStack gap="200" blockAlign="center">
                            <Text variant="headingLg" as="p" fontWeight="bold">{spacerValue}</Text>
                            <Icon source={InfoIcon} tone="subdued" />
                        </InlineStack>
                    </div>
                )}
                <div style={{ height: '260px', width: '100%' }}>
                    <ResponsiveContainer width="100%" height="100%">
                        <BarChart
                            data={data}
                            margin={{ left: 40, right: 20, top: 0, bottom: 20 }}
                            barCategoryGap="20%"
                        >
                            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e4e5e7" />
                            <XAxis
                                dataKey="platform"
                                axisLine={false}
                                tickLine={false}
                                tick={<CustomXAxisTick />}
                                interval={0}
                                height={40}
                            />
                            <YAxis
                                axisLine={false}
                                tickLine={false}
                                tick={{ fill: "#8c9196", fontSize: 12 }}
                                domain={yAxisDomain}
                                tickFormatter={yAxisFormatter}
                                width={40}
                                reversed={yAxisReversed}
                            />
                            <RechartsTooltip
                                content={<CustomTooltip />}
                                cursor={{ fill: 'transparent' }}
                            />
                            <Bar dataKey={dataKey} radius={[4, 4, 0, 0]} barSize={40}>
                                {data.map((item, index) => {
                                    const color = platformColorMap.get(item.platformKey) || barColors[index % barColors.length];
                                    return <Cell key={index} fill={color} />;
                                })}
                            </Bar>
                        </BarChart>
                    </ResponsiveContainer>
                </div>
            </BlockStack>
        </Card>
    );
}

