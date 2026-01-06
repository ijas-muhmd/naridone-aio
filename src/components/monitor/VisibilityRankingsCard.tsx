import { Card, Box, Text, InlineStack, BlockStack, Badge, Icon, Tooltip, Button } from "@shopify/polaris";
import { InfoIcon, ChevronDownIcon, ChevronUpIcon } from "@shopify/polaris-icons";
import { useState, Fragment } from "react";

const TOPIC_COL_WIDTH = 260;

interface RankedBrand {
    name: string;
    domain: string;
    isYou: boolean;
}

interface PromptRanking {
    text: string;
    ranks: (RankedBrand | null)[];
    status: string;
}

interface TopicRanking {
    topic: string;
    status: 'Leader' | 'Competitive' | 'Visible' | 'Needs work' | 'Not Ranked' | 'Strong';
    ranks: (RankedBrand | null)[]; // Array of 10 items
    prompts: PromptRanking[];
}

export function VisibilityRankingsCard({ brandName, topicsData = [] }: { brandName: string, topicsData?: TopicRanking[] }) {
    // If no real data, use empty array or handle gracefully.
    // The previous mock data is removed in favor of real data.
    const data = topicsData;

    // State to track expanded topics
    const [expandedTopics, setExpandedTopics] = useState<Set<string>>(new Set());

    const toggleTopic = (topic: string) => {
        const newExpanded = new Set(expandedTopics);
        if (newExpanded.has(topic)) {
            newExpanded.delete(topic);
        } else {
            newExpanded.add(topic);
        }
        setExpandedTopics(newExpanded);
    };

    if (data.length === 0) {
        return (
            <Card padding="400">
                <Box padding="400">
                    <BlockStack gap="200" align="center">
                        <Text as="h3" variant="headingSm" tone="subdued" alignment="center">No ranking data available</Text>
                        <Text as="p" variant="bodySm" tone="subdued" alignment="center">
                            Start tracking prompts to see visibility rankings by topic.
                        </Text>
                    </BlockStack>
                </Box>
            </Card>
        );
    }

    return (
        <Card padding="0">
            <div style={{ background: "#f9fafb", borderBottom: "1px solid #e1e3e5", borderTopLeftRadius: "var(--p-border-radius-300, 8px)", borderTopRightRadius: "var(--p-border-radius-300, 8px)" }}>
                <Box padding="300">
                    <InlineStack align="space-between" blockAlign="center">
                        <BlockStack gap="050">
                            <InlineStack gap="100" blockAlign="center">
                                <Text as="h3" variant="headingSm">Visibility Rankings By Topic</Text>
                            </InlineStack>
                            <Text as="p" variant="bodySm" tone="subdued">
                                {brandName}'s visibility rankings compared to other brands by topic
                            </Text>
                        </BlockStack>
                    </InlineStack>
                </Box>
            </div>

            <Box padding="0">
                <div style={{ overflowX: 'auto' }}>
                    <table style={{ width: '100%', borderCollapse: 'separate', borderSpacing: 0 }}>
                        <thead>
                            <tr style={{ background: '#fff' }}>
                                <th style={{ textAlign: 'left', padding: '16px', borderBottom: '1px solid #e1e3e5', color: '#6d7175', fontWeight: 500, fontSize: '13px', width: `${TOPIC_COL_WIDTH}px`, minWidth: `${TOPIC_COL_WIDTH}px`, maxWidth: `${TOPIC_COL_WIDTH}px`, position: 'sticky', left: 0, background: '#fff', zIndex: 2 }}>Topics</th>
                                {[...Array(10)].map((_, i) => (
                                    <th key={i} style={{ textAlign: 'center', padding: '16px', borderBottom: '1px solid #e1e3e5', color: '#6d7175', fontWeight: 500, fontSize: '12px', minWidth: '48px' }}>
                                        #{i + 1}
                                    </th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            {data.map((row, index) => {
                                const isExpanded = expandedTopics.has(row.topic);
                                return (
                                    <Fragment key={row.topic}>
                                        <tr style={{ background: '#fff', cursor: 'pointer' }} onClick={() => toggleTopic(row.topic)}>
                                            <td style={{ padding: '16px', borderBottom: (!isExpanded && index === data.length - 1) ? 'none' : '1px solid #f1f2f4', position: 'sticky', left: 0, background: '#fff', zIndex: 1, boxShadow: '2px 0 5px -2px rgba(0,0,0,0.05)', width: `${TOPIC_COL_WIDTH}px`, minWidth: `${TOPIC_COL_WIDTH}px`, maxWidth: `${TOPIC_COL_WIDTH}px` }}>
                                                <div style={{ maxWidth: `${TOPIC_COL_WIDTH - 24}px` }}>
                                                    <InlineStack gap="200" align="start" blockAlign="center" wrap={false}>
                                                        <div style={{ color: '#8c9196', marginTop: '2px' }}>
                                                            <Icon source={isExpanded ? ChevronUpIcon : ChevronDownIcon} tone="subdued" />
                                                        </div>
                                                        <BlockStack gap="100">
                                                            <Tooltip content={row.topic} preferredPosition="above">
                                                                <div style={{ maxWidth: `${TOPIC_COL_WIDTH - 60}px` }}>
                                                                    <Text as="span" variant="bodyMd" fontWeight="medium" truncate>{row.topic}</Text>
                                                                </div>
                                                            </Tooltip>
                                                            {(() => {
                                                                let style = { bg: '#FEECEB', text: '#D72C0D', border: '#f9bdbc' }; // Default (Needs work)
                                                                if (row.status === 'Leader' || row.status === 'Strong') {
                                                                    style = { bg: '#E4F8F0', text: '#007A5C', border: '#b6e9d6' };
                                                                } else if (row.status === 'Competitive') {
                                                                    style = { bg: '#FFFBDB', text: '#5C4E00', border: '#feef72' };
                                                                } else if (row.status === 'Visible') {
                                                                    style = { bg: '#EBF5FA', text: '#005BD3', border: '#b4d7f5' };
                                                                } else if (row.status === 'Not Ranked') {
                                                                    style = { bg: '#F1F2F4', text: '#5C5F62', border: '#e1e3e5' };
                                                                }

                                                                return (
                                                                    <div style={{
                                                                        display: 'inline-flex',
                                                                        alignItems: 'center',
                                                                        padding: '4px 10px',
                                                                        borderRadius: '16px',
                                                                        backgroundColor: style.bg,
                                                                        color: style.text,
                                                                        border: `1px solid ${style.border}`,
                                                                        fontSize: '12px',
                                                                        fontWeight: 600,
                                                                        lineHeight: 1,
                                                                        width: 'fit-content',
                                                                        whiteSpace: 'nowrap'
                                                                    }}>
                                                                        {row.status}
                                                                    </div>
                                                                );
                                                            })()}
                                                        </BlockStack>
                                                    </InlineStack>
                                                </div>
                                            </td>
                                            {row.ranks.map((brand, i) => (
                                                <td key={i} style={{ textAlign: 'center', padding: '12px', borderBottom: (!isExpanded && index === data.length - 1) ? 'none' : '1px solid #f1f2f4' }}>
                                                    {brand ? (
                                                        <Tooltip content={`${brand.name} #${i + 1}`} preferredPosition="above">
                                                            <div style={{
                                                                display: 'inline-flex',
                                                                alignItems: 'center',
                                                                justifyContent: 'center',
                                                                width: brand.isYou ? '36px' : '32px',
                                                                height: brand.isYou ? '36px' : '32px',
                                                                borderRadius: '50%',
                                                                background: '#fff',
                                                                border: brand.isYou ? '3px solid #008060' : '1px solid #e1e3e5',
                                                                boxShadow: brand.isYou ? '0 0 0 1px #fff, 0 0 4px rgba(0, 128, 96, 0.4)' : '0 1px 2px rgba(0,0,0,0.05)',
                                                                position: 'relative'
                                                            }}>
                                                                {(() => {
                                                                    const logoName = brand.name.toLowerCase().replace(/[^a-z0-9]/g, "");
                                                                    return (
                                                                        <img
                                                                            src={`https://www.google.com/s2/favicons?domain=${logoName}.com&sz=32`}
                                                                            alt={brand.name}
                                                                            style={{ width: '20px', height: '20px', borderRadius: '4px', objectFit: 'contain' }}
                                                                            onError={(e) => (e.target as HTMLImageElement).style.display = 'none'}
                                                                        />
                                                                    );
                                                                })()}
                                                            </div>
                                                        </Tooltip>
                                                    ) : (
                                                        <span style={{ color: '#e1e3e5' }}>-</span>
                                                    )}
                                                </td>
                                            ))}
                                        </tr>
                                        {/* Expanded Prompts Rows */}
                                        {isExpanded && row.prompts.map((prompt, pIndex) => (
                                            <tr key={`${row.topic}-prompt-${pIndex}`} style={{ background: '#fafbfc' }}>
                                                <td style={{ padding: '12px 16px 12px 48px', borderBottom: '1px solid #f1f2f4', position: 'sticky', left: 0, background: '#fafbfc', zIndex: 1, boxShadow: '2px 0 5px -2px rgba(0,0,0,0.05)', width: `${TOPIC_COL_WIDTH}px`, minWidth: `${TOPIC_COL_WIDTH}px`, maxWidth: `${TOPIC_COL_WIDTH}px` }}>
                                                    <Tooltip content={prompt.text} preferredPosition="above">
                                                        <div style={{ maxWidth: `${TOPIC_COL_WIDTH - 48}px`, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                                                            <Text as="p" variant="bodySm" tone="subdued" truncate>{prompt.text}</Text>
                                                        </div>
                                                    </Tooltip>
                                                </td>
                                                {prompt.ranks.map((brand, i) => (
                                                    <td key={i} style={{ textAlign: 'center', padding: '8px', borderBottom: '1px solid #f1f2f4' }}>
                                                        {brand ? (
                                                            <Tooltip content={`${brand.name} #${i + 1}`} preferredPosition="above">
                                                                <div style={{
                                                                    display: 'inline-flex',
                                                                    alignItems: 'center',
                                                                    justifyContent: 'center',
                                                                    width: '24px',
                                                                    height: '24px',
                                                                    borderRadius: '50%',
                                                                    background: '#fff',
                                                                    border: brand.isYou ? '2px solid #008060' : '1px solid #e1e3e5',
                                                                    boxShadow: '0 1px 2px rgba(0,0,0,0.05)',
                                                                    opacity: 0.9
                                                                }}>
                                                                    {(() => {
                                                                        const logoName = brand.name.toLowerCase().replace(/[^a-z0-9]/g, "");
                                                                        return (
                                                                            <img
                                                                                src={`https://www.google.com/s2/favicons?domain=${logoName}.com&sz=16`}
                                                                                alt={brand.name}
                                                                                style={{ width: '14px', height: '14px', borderRadius: '2px', objectFit: 'contain' }}
                                                                                onError={(e) => (e.target as HTMLImageElement).style.display = 'none'}
                                                                            />
                                                                        );
                                                                    })()}
                                                                </div>
                                                            </Tooltip>
                                                        ) : (
                                                            <span style={{ color: '#e1e3e5', fontSize: '10px' }}>•</span>
                                                        )}
                                                    </td>
                                                ))}
                                            </tr>
                                        ))}
                                    </Fragment>
                                );
                            })}
                        </tbody>
                    </table>
                </div>
            </Box>
        </Card>
    );
}
