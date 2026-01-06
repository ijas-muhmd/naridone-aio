import { Card, Text, BlockStack, Grid, Box, InlineStack, Badge } from '@shopify/polaris';
import { GlobeIcon } from '@shopify/polaris-icons';

interface RegionData {
    name: string;
    value: number;
    lat: number;
    lng: number;
    growth?: number;
}

// Mock data for regions tracking
const MOCK_REGIONS: RegionData[] = [
    { name: "North America", value: 85, lat: 40, lng: -100, growth: 12 },
    { name: "Europe", value: 65, lat: 50, lng: 10, growth: 5 },
    { name: "Asia Pacific", value: 45, lat: 20, lng: 100, growth: -2 },
    { name: "Latin America", value: 30, lat: -15, lng: -60, growth: 8 },
    { name: "Middle East", value: 25, lat: 25, lng: 45, growth: 15 },
];

export function RegionGraph({ data }: { data?: RegionData[] }) {
    const regions = data || MOCK_REGIONS;

    // Sort by value descending
    const sortedRegions = [...regions].sort((a, b) => b.value - a.value);

    return (
        <Card>
            <BlockStack gap="400">
                <BlockStack gap="200">
                    <InlineStack gap="200" blockAlign="center">
                        <div style={{ padding: '8px', background: '#f1f2f4', borderRadius: '50%' }}>
                            <GlobeIcon />
                        </div>
                        <Text variant="headingMd" as="h3">Global Tracking</Text>
                    </InlineStack>
                    <Text variant="bodySm" tone="subdued" as="p">
                        Citations tracked across key regions.
                    </Text>
                </BlockStack>

                <Grid>
                    {sortedRegions.map((region, index) => {
                        const isGrowing = region.growth && region.growth > 0;
                        const maxValue = sortedRegions[0].value;
                        const percentage = (region.value / maxValue) * 100;

                        return (
                            <Grid.Cell key={region.name} columnSpan={{ xs: 6, sm: 6, md: 4, lg: 4, xl: 4 }}>
                                <Box padding="400" background="bg-surface-secondary" borderRadius="200">
                                    <BlockStack gap="300">
                                        <InlineStack align="space-between" blockAlign="center">
                                            <Text variant="headingSm" as="h4">{region.name}</Text>
                                            {region.growth !== undefined && (
                                                <Badge tone={isGrowing ? "success" : "critical"}>
                                                    {`${isGrowing ? '+' : ''}${region?.growth?.toString() || '0'}%`}
                                                </Badge>
                                            )}
                                        </InlineStack>

                                        <BlockStack gap="100">
                                            <InlineStack align="space-between" blockAlign="center">
                                                <Text variant="bodySm" tone="subdued" as="span">Citations</Text>
                                                <Text variant="headingMd" as="p" fontWeight="bold">{region.value}</Text>
                                            </InlineStack>

                                            {/* Progress Bar */}
                                            <div style={{
                                                width: '100%',
                                                height: '8px',
                                                background: '#e1e3e5',
                                                borderRadius: '4px',
                                                overflow: 'hidden'
                                            }}>
                                                <div style={{
                                                    width: `${percentage}%`,
                                                    height: '100%',
                                                    background: isGrowing ? '#4caf50' : '#ff9800',
                                                    transition: 'width 0.3s ease'
                                                }}></div>
                                            </div>
                                        </BlockStack>
                                    </BlockStack>
                                </Box>
                            </Grid.Cell>
                        );
                    })}
                </Grid>
            </BlockStack>
        </Card>
    );
}

