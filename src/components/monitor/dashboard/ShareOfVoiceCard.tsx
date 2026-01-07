import { Card, Box, InlineStack, BlockStack, Text, Icon, Badge, Grid, Tooltip as PolarisTooltip } from "@shopify/polaris";
import { InfoIcon } from "@shopify/polaris-icons";
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";
import { ClientOnly } from "../../ClientOnly";
import { useState } from "react";

const COLORS = [
    "#008060", // Shopify Green (YOU)
    "#3b5998", // Blue
    "#ff9800", // Orange
    "#e91e63", // Pink
    "#9c27b0", // Purple
    "#00bcd4", // Cyan
    "#607d8b", // Blue Grey
    "#ff5252", // Red
];

export function ShareOfVoiceCard({ data }: { data: Array<{ name: string; value: number; isOwned: boolean; color?: string; rank?: number }> }) {
    const [excludedBrands, setExcludedBrands] = useState<Set<string>>(new Set());

    // 1. Filter out 0% values
    const nonZeroData = data.filter(d => d.value > 0);

    // 2. Assign colors to all brands
    const allColoredData = nonZeroData.map((d, i) => ({
        ...d,
        color: d.isOwned ? "#008060" : COLORS[(i + 1) % COLORS.length],
        actualRank: i + 1 // Store actual rank (1-indexed)
    }));

    // 3. Find user's brand and its actual rank
    const userBrandIndex = allColoredData.findIndex(d => d.isOwned);
    const userBrand = userBrandIndex >= 0 ? allColoredData[userBrandIndex] : null;
    const userBrandActualRank = userBrandIndex + 1; // 1-indexed

    // 4. Determine which brands to show
    // If owned brand is in top 5 (rank <= 5), show it at its exact position
    // If owned brand is rank > 5, place it at 5th position and move the 5th brand to "Others"
    let topBrands: Array<{ name: string; value: number; isOwned: boolean; color?: string; rank?: number; actualRank: number }>;
    let displacedFifthBrand: { name: string; value: number; isOwned: boolean; color?: string; rank?: number; actualRank: number } | null = null;

    if (userBrand && userBrandActualRank <= 5) {
        // User's brand is in top 5, show top 5 normally (owned will be in its natural position)
        topBrands = allColoredData.slice(0, 5);
    } else if (userBrand && userBrandActualRank > 5) {
        // User's brand is ranked 6 or higher, show top 4 competitors + user's brand at position 5
        const top4Competitors = allColoredData.filter(d => !d.isOwned).slice(0, 4);
        // Get the 5th competitor (the one being displaced)
        const fifthCompetitor = allColoredData.filter(d => !d.isOwned)[4];
        if (fifthCompetitor) {
            displacedFifthBrand = fifthCompetitor;
        }
        topBrands = [...top4Competitors, userBrand];
    } else {
        // No user brand found, show top 5 normally
        topBrands = allColoredData.slice(0, 5);
    }

    // 5. Calculate total Share of Voice from all brands
    const totalShareOfVoice = allColoredData.reduce((sum, b) => sum + b.value, 0);

    // 6. Normalize all brand values to ensure they sum to 100%
    // If total is not 100%, scale all values proportionally
    const normalizedTopBrands = totalShareOfVoice > 0
        ? topBrands.map(b => ({
            ...b,
            value: Math.round((b.value / totalShareOfVoice) * 100 * 100) / 100 // Normalize and round to 2 decimals
        }))
        : topBrands;

    // 7. Calculate sum of displayed brands (after normalization)
    const displayedBrandsSum = normalizedTopBrands.reduce((sum, b) => sum + b.value, 0);

    // 8. Calculate "Others" as the difference to ensure total is exactly 100%
    // "Others" = 100% - Sum of displayed brands
    const othersValue = Math.max(0, 100 - displayedBrandsSum);

    // 9. Calculate normalized owned brand value for display
    const normalizedOwnedBrandValue = normalizedTopBrands.find(b => b.isOwned)?.value || 0;

    // Build final list data with "Others" if there are remaining brands
    let listData: Array<{ name: string; value: number; isOwned: boolean; color?: string; rank?: number; actualRank: number; isOthers?: boolean }>;

    if (othersValue > 0.01) { // Show "Others" if value is greater than 0.01% (to avoid rounding issues)
        listData = [
            ...normalizedTopBrands,
            {
                name: "Others",
                value: Math.round(othersValue * 100) / 100, // Round to 2 decimal places
                isOwned: false,
                color: "#95a5a6", // Gray color for Others
                actualRank: normalizedTopBrands.length + 1,
                isOthers: true
            }
        ];
    } else {
        listData = normalizedTopBrands;
    }

    // 6. Determine which brands to display in the CHART
    const chartData = listData.filter(d => !excludedBrands.has(d.name));

    const toggleBrand = (name: string) => {
        const newExcluded = new Set(excludedBrands);
        if (newExcluded.has(name)) {
            newExcluded.delete(name);
        } else {
            newExcluded.add(name);
        }
        setExcludedBrands(newExcluded);
    };

    const truncate = (str: string, n: number) => {
        return (str.length > n) ? str.slice(0, n - 1) + '...' : str;
    };

    return (
        <Card padding="0">
            <div style={{ background: "#f9fafb", borderBottom: "1px solid #e1e3e5", borderTopLeftRadius: "var(--p-border-radius-300, 8px)", borderTopRightRadius: "var(--p-border-radius-300, 8px)" }}>
                <Box padding="300">
                    <InlineStack align="space-between" blockAlign="start">
                        <BlockStack gap="050">
                            <InlineStack gap="100" align="start" blockAlign="start">
                                <Text as="h3" variant="headingSm">Share of Voice</Text>
                                <PolarisTooltip content="Mentions of your brand in AI-generated answers in relation to competitors">
                                    <Icon source={InfoIcon} tone="subdued" />
                                </PolarisTooltip>
                            </InlineStack>
                            <Text as="p" variant="bodySm" tone="subdued">
                                Mentions of your brand in AI-generated answers in relation to competitors
                            </Text>
                        </BlockStack>
                        <div style={{ display: 'flex', gap: '8px' }}>
                            <div style={{ padding: '4px 8px', background: '#fff', borderRadius: '4px', border: '1px solid #dfe3e8', fontSize: '12px', fontWeight: 500, color: '#637381', cursor: 'pointer' }}>
                                Chart Config ▾
                            </div>
                        </div>
                    </InlineStack>
                </Box>
            </div>

            <Box padding="400" paddingBlockStart="200">
                <Grid>
                    <Grid.Cell columnSpan={{ xs: 6, sm: 6, md: 6, lg: 6, xl: 6 }}>
                        <BlockStack gap="400">
                            <Box paddingBlockStart="0" paddingBlockEnd="0">
                                <BlockStack gap="200">
                                    <InlineStack gap="100" align="start" blockAlign="center">
                                        <Text as="span" variant="bodySm" tone="subdued">Share of Voice</Text>
                                        <PolarisTooltip content="">
                                            <Icon source={InfoIcon} tone="subdued" />
                                        </PolarisTooltip>
                                    </InlineStack>
                                    <Text as="h1" variant="heading2xl">{normalizedOwnedBrandValue}% <span style={{ fontSize: '16px', fontWeight: 400, color: '#6d7175' }}>-</span></Text>
                                </BlockStack>
                            </Box>
                            <div style={{ width: '100%', height: '220px', position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                <ClientOnly fallback={<div style={{ width: '100%', height: '100%' }} />}>
                                    {() => (
                                        <div style={{ width: '100%', height: '100%', position: 'relative' }}>
                                            <ResponsiveContainer width="100%" height="100%">
                                                <PieChart>
                                                    <Pie
                                                        data={chartData}
                                                        cx="50%"
                                                        cy="50%"
                                                        innerRadius={70}
                                                        outerRadius={100}
                                                        paddingAngle={0}
                                                        dataKey="value"
                                                        stroke="none"
                                                        cornerRadius={0}
                                                    >
                                                        {chartData.map((entry, index) => (
                                                            <Cell key={`cell-${index}`} fill={entry.color} />
                                                        ))}
                                                    </Pie>
                                                    <Tooltip
                                                        formatter={(value: number) => `${value}%`}
                                                        contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}
                                                    />
                                                </PieChart>
                                            </ResponsiveContainer>
                                            {/* Center Label */}
                                            <div style={{
                                                position: 'absolute',
                                                top: '50%',
                                                left: '50%',
                                                transform: 'translate(-50%, -50%)',
                                                textAlign: 'center',
                                                pointerEvents: 'none'
                                            }}>
                                                <Text as="p" variant="headingXl" tone="subdued">
                                                    {normalizedOwnedBrandValue}%
                                                </Text>
                                                <Text as="p" variant="bodyXs" tone="subdued">You</Text>
                                            </div>
                                        </div>
                                    )}
                                </ClientOnly>
                            </div>
                            <div style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
                                <InlineStack gap="300" wrap align="center">
                                    {listData.map(d => {
                                        const isExcluded = excludedBrands.has(d.name);
                                        return (
                                            <div
                                                key={d.name}
                                                style={{ display: 'flex', alignItems: 'center', cursor: 'pointer', opacity: isExcluded ? 0.6 : 1 }}
                                                onClick={() => toggleBrand(d.name)}
                                            >
                                                <div style={{
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    gap: '8px',
                                                    background: isExcluded ? '#f4f6f8' : '#fff',
                                                    padding: '4px 8px',
                                                    borderRadius: '6px',
                                                    border: isExcluded ? '1px solid #dfe3e8' : `1px solid ${d.color}30`
                                                }}>
                                                    <div style={{
                                                        width: '14px',
                                                        height: '14px',
                                                        borderRadius: '3px',
                                                        backgroundColor: d.color,
                                                        display: 'flex',
                                                        alignItems: 'center',
                                                        justifyContent: 'center',
                                                        border: '1px solid rgba(0,0,0,0.1)'
                                                    }}>
                                                        {!isExcluded && (
                                                            <div style={{ width: '8px', height: '8px', backgroundImage: 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 20 20\' fill=\'white\'%3E%3Cpath fill-rule=\'evenodd\' d=\'M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z\' clip-rule=\'evenodd\'/%3E%3C/svg%3E")' }}></div>
                                                        )}
                                                    </div>
                                                    <Text as="span" variant="bodySm" tone={isExcluded ? "subdued" : "base"} fontWeight="medium">{d.name}</Text>
                                                </div>
                                            </div>
                                        );
                                    })}
                                </InlineStack>
                            </div>
                        </BlockStack>
                    </Grid.Cell>

                    <Grid.Cell columnSpan={{ xs: 6, sm: 6, md: 6, lg: 6, xl: 6 }}>
                        <div style={{ borderLeft: '1px solid #e1e3e5', paddingLeft: '24px', height: '100%' }}>
                            <BlockStack gap="400">
                                <Box paddingBlockStart="0">
                                    <BlockStack gap="200">
                                        <InlineStack gap="100" align="start" blockAlign="center">
                                            <Text as="span" variant="bodySm" tone="subdued">Share of Voice Rank</Text>
                                            <PolarisTooltip content="">
                                                <Icon source={InfoIcon} tone="subdued" />
                                            </PolarisTooltip>
                                        </InlineStack>
                                        <Text as="h1" variant="heading2xl">#{userBrandActualRank || 0} <span style={{ fontSize: '16px', fontWeight: 400, color: '#6d7175' }}>-</span></Text>
                                    </BlockStack>
                                </Box>

                                <div style={{ marginTop: '16px' }}>
                                    <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                                        <thead>
                                            <tr>
                                                <th style={{ textAlign: 'left', paddingBottom: '12px', color: '#6d7175', fontSize: '12px', fontWeight: 500 }}>Asset</th>
                                                <th style={{ textAlign: 'right', paddingBottom: '12px', color: '#6d7175', fontSize: '12px', fontWeight: 500 }}>Share of Voice</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {listData.map((d, i) => {
                                                // If user's brand is moved to 5th position (rank > 5), show its actual rank
                                                // If user's brand is at its natural position (rank <= 5), show position number
                                                // For "Others", don't show a rank number
                                                const isOthers = (d as any).isOthers;
                                                const displayRank = isOthers
                                                    ? null
                                                    : d.isOwned && userBrandActualRank > 5 && i === 4
                                                        ? d.actualRank // Show actual rank when moved to 5th position
                                                        : i + 1; // Show position number otherwise

                                                return (
                                                    <tr key={d.name} style={{ borderBottom: i !== listData.length - 1 ? '1px solid #f1f2f4' : 'none' }}>
                                                        <td style={{ padding: '12px 0' }}>
                                                            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                                                                {displayRank !== null && (
                                                                    <Text as="span" variant="bodyMd" tone="subdued">{displayRank}.</Text>
                                                                )}
                                                                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                                                    {!isOthers && (
                                                                        <img
                                                                            src={`https://www.google.com/s2/favicons?domain=${d.name.toLowerCase().replace(/[^a-z0-9]/g, "") + ".com"}&sz=32`}
                                                                            alt=""
                                                                            style={{ width: '16px', height: '16px', borderRadius: '4px' }}
                                                                            onError={(e) => (e.target as HTMLImageElement).style.display = 'none'}
                                                                        />
                                                                    )}
                                                                    <Text as="span" variant="bodyMd" fontWeight="semibold" tone={isOthers ? "subdued" : "base"}>
                                                                        {truncate(d.name, 20)}
                                                                    </Text>
                                                                    {d.isOwned && (
                                                                        <Badge tone="info">Owned</Badge>
                                                                    )}
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td style={{ textAlign: 'right', padding: '12px 0' }}>
                                                            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', gap: '8px' }}>
                                                                <Text as="span" variant="bodyMd" fontWeight="semibold" tone={isOthers ? "subdued" : "base"}>{d.value}%</Text>
                                                                <span style={{ color: '#6d7175' }}>-</span>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                );
                                            })}
                                        </tbody>
                                    </table>
                                </div>
                            </BlockStack>
                        </div>
                    </Grid.Cell>
                </Grid>
            </Box>
        </Card>
    );
}
