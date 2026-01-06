import { InlineStack, Text, Badge, Box, Tooltip, Icon } from "@shopify/polaris";
import { InfoIcon, ArrowUpIcon, ArrowDownIcon } from "@shopify/polaris-icons";

interface KPIBarProps {
    visibilityScore: number;      // #1: Snapshot of AI ranking potential
    shareOfVoice: number;          // #2: How often you're chosen
    sentiment: number;             // #3: How you're described
    fixVelocity: number;           // #43: Momentum indicator (fixes applied in last 7 days)
}

export function MonitorKPIBar({ visibilityScore, shareOfVoice, sentiment, fixVelocity }: KPIBarProps) {
    const getTone = (value: number, thresholds: { good: number, warning: number }) => {
        if (value >= thresholds.good) return 'success';
        if (value >= thresholds.warning) return 'attention';
        return 'critical';
    };

    const visibilityTone = getTone(visibilityScore, { good: 40, warning: 20 });
    const soVTone = getTone(shareOfVoice, { good: 30, warning: 15 });
    const sentimentTone = getTone(sentiment, { good: 70, warning: 50 });
    const velocityTone = fixVelocity > 0 ? 'success' : 'subdued';

    return (
        <Box 
            background="bg-surface" 
            padding="400" 
            borderRadius="200"
            borderWidth="025"
            borderColor="border"
        >
            <InlineStack align="space-between" blockAlign="center" gap="600">
                {/* Visibility Score */}
                <Box minWidth="140px">
                    <InlineStack gap="100" blockAlign="center">
                        <Text variant="bodySm" tone="subdued" fontWeight="semibold" as="span">
                            Visibility
                        </Text>
                        <Tooltip content="Percentage of prompts where you appear in top 5 AI results">
                            <Icon source={InfoIcon} tone="subdued" />
                        </Tooltip>
                    </InlineStack>
                    <Text variant="headingLg" as="p" fontWeight="bold">
                        {visibilityScore}%
                    </Text>
                    <Badge tone={visibilityTone} size="small">
                        {visibilityScore >= 40 ? 'Strong' : visibilityScore >= 20 ? 'Moderate' : 'Low'}
                    </Badge>
                </Box>

                {/* Divider */}
                <Box borderWidth="025" borderColor="border" style={{ height: '40px' }} />

                {/* Share of Voice */}
                <Box minWidth="140px">
                    <InlineStack gap="100" blockAlign="center">
                        <Text variant="bodySm" tone="subdued" fontWeight="semibold" as="span">
                            Share of Voice
                        </Text>
                        <Tooltip content="How often your brand is mentioned vs competitors">
                            <Icon source={InfoIcon} tone="subdued" />
                        </Tooltip>
                    </InlineStack>
                    <Text variant="headingLg" as="p" fontWeight="bold">
                        {shareOfVoice.toFixed(1)}%
                    </Text>
                    <Badge tone={soVTone} size="small">
                        {shareOfVoice >= 30 ? 'Dominant' : shareOfVoice >= 15 ? 'Competitive' : 'Emerging'}
                    </Badge>
                </Box>

                {/* Divider */}
                <Box borderWidth="025" borderColor="border" style={{ height: '40px' }} />

                {/* Sentiment */}
                <Box minWidth="140px">
                    <InlineStack gap="100" blockAlign="center">
                        <Text variant="bodySm" tone="subdued" fontWeight="semibold" as="span">
                            Sentiment
                        </Text>
                        <Tooltip content="How AI models describe your brand (0-100 scale)">
                            <Icon source={InfoIcon} tone="subdued" />
                        </Tooltip>
                    </InlineStack>
                    <Text variant="headingLg" as="p" fontWeight="bold">
                        {sentiment}%
                    </Text>
                    <Badge tone={sentimentTone} size="small">
                        {sentiment >= 70 ? 'Positive' : sentiment >= 50 ? 'Neutral' : 'Negative'}
                    </Badge>
                </Box>

                {/* Divider */}
                <Box borderWidth="025" borderColor="border" style={{ height: '40px' }} />

                {/* Fix Velocity */}
                <Box minWidth="140px">
                    <InlineStack gap="100" blockAlign="center">
                        <Text variant="bodySm" tone="subdued" fontWeight="semibold" as="span">
                            Fix Velocity
                        </Text>
                        <Tooltip content="Number of fixes applied in the last 7 days">
                            <Icon source={InfoIcon} tone="subdued" />
                        </Tooltip>
                    </InlineStack>
                    <Text variant="headingLg" as="p" fontWeight="bold">
                        {fixVelocity}
                    </Text>
                    <Badge tone={velocityTone} size="small">
                        {fixVelocity > 5 ? 'Active' : fixVelocity > 0 ? 'Slow' : 'Idle'}
                    </Badge>
                </Box>
            </InlineStack>
        </Box>
    );
}

