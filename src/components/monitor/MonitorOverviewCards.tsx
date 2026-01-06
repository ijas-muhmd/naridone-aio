import { Card, BlockStack, InlineStack, Text, Badge, Button, Box, ProgressBar } from "@shopify/polaris";
import { MagicIcon, GlobeIcon, TargetIcon } from "@shopify/polaris-icons";

// Card 1: AI View of Your Brand
export function AIBrandViewCard({
    topAdjectives,
    whyChosen,
    whyExcluded,
    personaMatch,
    clarityScore,
    onImprove
}: {
    topAdjectives: string[];
    whyChosen: string;
    whyExcluded: string;
    personaMatch: number;
    clarityScore: number;
    onImprove: () => void;
}) {
    return (
        <Card>
            <BlockStack gap="400">
                <InlineStack align="space-between" blockAlign="center">
                    <InlineStack gap="200">
                        <MagicIcon />
                        <Text variant="headingMd" as="h3">AI View of Your Brand</Text>
                    </InlineStack>
                    <Badge tone={clarityScore >= 70 ? 'success' : clarityScore >= 50 ? 'attention' : 'critical'}>
                        {`${clarityScore}% Clarity`}
                    </Badge>
                </InlineStack>

                <BlockStack gap="300">
                    {/* Top Adjectives */}
                    <Box>
                        <Text variant="bodySm" tone="subdued" fontWeight="semibold" as="span">Top Adjectives</Text>
                        {topAdjectives.length > 0 ? (
                            <InlineStack gap="100" wrap>
                                {topAdjectives.slice(0, 5).map((adj, i) => (
                                    <Badge key={i} tone="info" size="small">{adj}</Badge>
                                ))}
                            </InlineStack>
                        ) : (
                            <Text variant="bodySm" tone="subdued" as="span">No adjectives detected yet</Text>
                        )}
                    </Box>

                    {/* Why Chosen */}
                    <Box>
                        <Text variant="bodySm" tone="subdued" fontWeight="semibold" as="span">Why You're Chosen</Text>
                        <Text variant="bodySm" as="p">{whyChosen || "No data yet"}</Text>
                    </Box>

                    {/* Why Excluded */}
                    <Box>
                        <Text variant="bodySm" tone="subdued" fontWeight="semibold" as="span">Why You're Excluded</Text>
                        <Text variant="bodySm" as="p">{whyExcluded || "No data yet"}</Text>
                    </Box>

                    {/* Persona Match */}
                    <Box>
                        <InlineStack align="space-between" blockAlign="center">
                            <Text variant="bodySm" tone="subdued" fontWeight="semibold" as="span">Persona Match</Text>
                            <Text variant="bodySm" fontWeight="bold" as="span">{`${personaMatch}%`}</Text>
                        </InlineStack>
                        <ProgressBar progress={personaMatch} size="small" />
                    </Box>
                </BlockStack>

                <Button onClick={onImprove} fullWidth>Improve Clarity → Fixes</Button>
            </BlockStack>
        </Card>
    );
}

// Card 2: Competitor Pressure
export function CompetitorPressureCard({
    topThreat,
    keywordGaps,
    overlapMatrix,
    pricingAdvantage,
    onTrackCompetitor
}: {
    topThreat: { name: string; strength: number } | null;
    keywordGaps: number;
    overlapMatrix: number;
    pricingAdvantage: string | null;
    onTrackCompetitor: () => void;
}) {
    return (
        <Card>
            <BlockStack gap="400">
                <InlineStack align="space-between" blockAlign="center">
                    <InlineStack gap="200">
                        <TargetIcon />
                        <Text variant="headingMd" as="h3">Competitor Pressure</Text>
                    </InlineStack>
                    {topThreat && (
                        <Badge tone={topThreat.strength > 7 ? 'critical' : 'warning'}>
                            {`${topThreat.strength}/10 Threat`}
                        </Badge>
                    )}
                </InlineStack>

                <BlockStack gap="300">
                    {/* Top Threat */}
                    {topThreat ? (
                        <Box>
                            <Text variant="bodySm" tone="subdued" fontWeight="semibold" as="span">Top Threat</Text>
                            <Text variant="bodySm" fontWeight="bold" as="p">{topThreat.name}</Text>
                        </Box>
                    ) : (
                        <Box>
                            <Text variant="bodySm" tone="subdued" as="p">No competitors tracked yet</Text>
                        </Box>
                    )}

                    {/* Keyword Gaps */}
                    <Box>
                        <InlineStack align="space-between" blockAlign="center">
                            <Text variant="bodySm" tone="subdued" fontWeight="semibold" as="span">Keyword Gaps</Text>
                            <Text variant="bodySm" fontWeight="bold" as="span">{keywordGaps.toString()}</Text>
                        </InlineStack>
                    </Box>

                    {/* Overlap Matrix */}
                    <Box>
                        <InlineStack align="space-between" blockAlign="center">
                            <Text variant="bodySm" tone="subdued" fontWeight="semibold" as="span">Overlap</Text>
                            <Text variant="bodySm" fontWeight="bold" as="span">{`${overlapMatrix}%`}</Text>
                        </InlineStack>
                        <ProgressBar progress={overlapMatrix} size="small" />
                    </Box>

                    {/* Pricing Advantage */}
                    {pricingAdvantage && (
                        <Box padding="200" background="bg-surface-secondary" borderRadius="200">
                            <Text variant="bodyXs" as="p">{pricingAdvantage}</Text>
                        </Box>
                    )}
                </BlockStack>

                <Button onClick={onTrackCompetitor} fullWidth>Track Competitor → Add Prompt</Button>
            </BlockStack>
        </Card>
    );
}

// Card 3: Landscape
export function LandscapeCard({
    modelBias,
    topSources,
    citationGrowth,
    missingSources,
    onRequestBacklink
}: {
    modelBias: { model: string; bias: number }[];
    topSources: { domain: string; count: number }[];
    citationGrowth: number;
    missingSources: number;
    onRequestBacklink: () => void;
}) {
    return (
        <Card>
            <BlockStack gap="400">
                <InlineStack align="space-between" blockAlign="center">
                    <InlineStack gap="200">
                        <GlobeIcon />
                        <Text variant="headingMd" as="h3">Landscape</Text>
                    </InlineStack>
                    <Badge tone={citationGrowth > 0 ? 'success' : undefined}>
                        {`${citationGrowth > 0 ? '+' : ''}${citationGrowth} Citations`}
                    </Badge>
                </InlineStack>

                <BlockStack gap="300">
                    {/* Model Bias */}
                    <Box>
                        <Text variant="bodySm" tone="subdued" fontWeight="semibold" as="span">Model Bias</Text>
                        {modelBias.length > 0 ? (
                            <BlockStack gap="100">
                                {modelBias.slice(0, 3).map((mb, i) => (
                                    <InlineStack key={i} align="space-between" blockAlign="center">
                                        <Text variant="bodySm" as="span">{mb.model}</Text>
                                        <Badge tone={mb.bias > 50 ? 'success' : 'attention'} size="small">
                                            {`${mb.bias}%`}
                                        </Badge>
                                    </InlineStack>
                                ))}
                            </BlockStack>
                        ) : (
                            <Text variant="bodySm" tone="subdued" as="span">No model data yet</Text>
                        )}
                    </Box>

                    {/* Top Sources */}
                    <Box>
                        <Text variant="bodySm" tone="subdued" fontWeight="semibold" as="span">Top Sources</Text>
                        {topSources.length > 0 ? (
                            <BlockStack gap="100">
                                {topSources.slice(0, 3).map((source, i) => (
                                    <InlineStack key={i} align="space-between" blockAlign="center">
                                        <Text variant="bodySm" as="span" truncate>{source.domain}</Text>
                                        <Text variant="bodySm" tone="subdued" as="span">{source.count.toString()}</Text>
                                    </InlineStack>
                                ))}
                            </BlockStack>
                        ) : (
                            <Text variant="bodySm" tone="subdued" as="span">No sources tracked yet</Text>
                        )}
                    </Box>

                    {/* Missing Sources */}
                    {missingSources > 0 && (
                        <Box padding="200" background="bg-surface-secondary" borderRadius="200">
                            <Text variant="bodyXs" as="p">
                                {missingSources} missing source{missingSources !== 1 ? 's' : ''} identified
                            </Text>
                        </Box>
                    )}
                </BlockStack>

                <Button onClick={onRequestBacklink} fullWidth>Request Backlink Plan → Autopilot</Button>
            </BlockStack>
        </Card>
    );
}
