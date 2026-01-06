
import React from 'react';
import { Modal, BlockStack, Text, InlineStack, Icon, Button } from "@shopify/polaris";
import { CalendarIcon, GlobeIcon, ExportIcon } from "@shopify/polaris-icons";
import { SimpleMarkdownRenderer } from "./SimpleMarkdownRenderer";

export interface Citation {
    source: string;
    title: string;
    snippet: string;
    url: string;
    date: string;
}

export interface TableRow {
    feature: string;
    approach: string;
    outcome: string;
}

export interface ExecutionDetails {
    title: string;
    source: string;
    date: string;
    region: string;
    promptText: string;
    tableData: TableRow[];
    fullResponse: string;
    citations: Citation[];
    mentions?: { name: string; logo?: string; domain?: string; rank?: number; sentiment?: number }[];
    runCount?: number;
    currentIndex?: number;
    logo?: string;
}

interface ExecutionDetailsModalProps {
    open: boolean;
    onClose: () => void;
    details: ExecutionDetails | null;
    brandName?: string;
}

export function ExecutionDetailsModal({ open, onClose, details, brandName }: ExecutionDetailsModalProps) {
    if (!details) return null;

    return (
        <Modal
            open={open}
            onClose={onClose}
            title="Response Details"
            size="large"
        >
            <Modal.Section>
                <BlockStack gap="500">
                    {/* Header Section */}
                    <div style={{ paddingBottom: '20px', borderBottom: '1px solid #e1e3e5' }}>
                        <BlockStack gap="400">
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                                <BlockStack gap="100">
                                    <Text variant="headingLg" as="h2">{details.title}</Text>
                                    <InlineStack gap="200" align="start">
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                                            <div style={{ width: '16px', height: '16px' }}>
                                                <img
                                                    src={details.logo || "https://www.google.com/s2/favicons?domain=google.com&sz=32"}
                                                    alt={details.source}
                                                    style={{ width: '100%', height: '100%' }}
                                                />
                                            </div>
                                            <Text variant="bodyMd" as="span">{details.source}</Text>
                                        </div>
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                                            <Icon source={CalendarIcon} tone="subdued" />
                                            <Text variant="bodyMd" as="span">{details.date}</Text>
                                        </div>
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                                            <Icon source={GlobeIcon} tone="subdued" />
                                            <Text variant="bodyMd" as="span">{details.region}</Text>
                                        </div>
                                    </InlineStack>
                                </BlockStack>
                                <Button icon={ExportIcon}>Export</Button>
                            </div>
                        </BlockStack>
                    </div>

                    {/* Prompt Section (NEW) */}
                    {details.promptText && (
                        <BlockStack gap="200">
                            <Text variant="headingSm" as="h3" tone="subdued">Prompt Executed</Text>
                            <div style={{
                                backgroundColor: '#f6f6f7',
                                padding: '16px',
                                borderRadius: '8px',
                                border: '1px solid #e1e3e5',
                                fontSize: '14px',
                                color: '#202223'
                            }}>
                                {details.promptText}
                            </div>
                        </BlockStack>
                    )}

                    {/* Response Section */}
                    <BlockStack gap="300">
                        <Text variant="headingSm" as="h3" tone="subdued">AI Response</Text>

                        <SimpleMarkdownRenderer text={details.fullResponse} />

                        {/* Table if exists */}
                        {details.tableData.length > 0 && (
                            <div style={{ border: '1px solid #e1e3e5', borderRadius: '4px', overflow: 'hidden', marginBottom: '16px' }}>
                                <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                                    <thead>
                                        <tr style={{ backgroundColor: '#f4f6f8', borderBottom: '1px solid #e1e3e5' }}>
                                            <th style={{ textAlign: 'left', padding: '12px', fontSize: '12px', fontWeight: 600, color: '#6d7175', width: '20%' }}>Feature</th>
                                            <th style={{ textAlign: 'left', padding: '12px', fontSize: '12px', fontWeight: 600, color: '#6d7175', width: '40%' }}>{brandName || 'your brand'} Approach</th>
                                            <th style={{ textAlign: 'left', padding: '12px', fontSize: '12px', fontWeight: 600, color: '#6d7175', width: '40%' }}>Expected Outcome</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {details.tableData.map((row, idx: number) => (
                                            <tr key={idx} style={{ borderBottom: idx < details.tableData.length - 1 ? '1px solid #e1e3e5' : 'none' }}>
                                                <td style={{ padding: '12px', fontSize: '13px', fontWeight: 600 }}>{row.feature}</td>
                                                <td style={{ padding: '12px', fontSize: '13px' }}>{row.approach}</td>
                                                <td style={{ padding: '12px', fontSize: '13px' }}>{row.outcome}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        )}

                        {/* Competitors & Gap Analysis */}
                        {details.mentions && details.mentions.length > 0 && (
                            <div style={{ paddingTop: '20px', borderTop: '1px solid #e1e3e5' }}>
                                <BlockStack gap="300">
                                    <Text variant="headingSm" as="h3" tone="subdued">Competitors Mentioned</Text>
                                    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                                        {details.mentions.map((mention, idx) => (
                                            <div key={idx} style={{
                                                display: 'flex',
                                                justifyContent: 'space-between',
                                                alignItems: 'center',
                                                padding: '8px 12px',
                                                backgroundColor: '#f9fafb',
                                                borderRadius: '6px',
                                                border: '1px solid #e1e3e5'
                                            }}>
                                                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                                                    {mention.logo ? (
                                                        <img src={mention.logo} alt={mention.name} style={{ width: '20px', height: '20px', borderRadius: '4px' }} />
                                                    ) : (
                                                        <div style={{ width: '20px', height: '20px', borderRadius: '4px', backgroundColor: '#e1e3e5', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '10px', fontWeight: 'bold' }}>
                                                            {mention.name.charAt(0)}
                                                        </div>
                                                    )}
                                                    <Text as="span" variant="bodyMd" fontWeight="medium">{mention.name}</Text>
                                                </div>
                                                <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                                                    {mention.sentiment && (
                                                        <div style={{
                                                            padding: '2px 8px',
                                                            borderRadius: '12px',
                                                            backgroundColor: mention.sentiment >= 70 ? '#e4f8f0' : mention.sentiment >= 40 ? '#fffbdb' : '#feeced',
                                                            color: mention.sentiment >= 70 ? '#007a5c' : mention.sentiment >= 40 ? '#5c4e00' : '#d72c0d',
                                                            fontSize: '12px',
                                                            fontWeight: '600'
                                                        }}>
                                                            {mention.sentiment}% Sentiment
                                                        </div>
                                                    )}
                                                    {mention.rank ? (
                                                        <Text as="span" variant="bodySm" tone="subdued">Rank #{mention.rank}</Text>
                                                    ) : (
                                                        <Text as="span" variant="bodySm" tone="subdued">Mentioned</Text>
                                                    )}
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </BlockStack>
                            </div>
                        )}

                        {/* Citations Section */}
                        <div style={{ paddingTop: '20px', borderTop: '1px solid #e1e3e5' }}>
                            <BlockStack gap="300">
                                <Text variant="headingSm" as="h3" tone="subdued">Citations</Text>
                                <div style={{ display: 'flex', gap: '16px', overflowX: 'auto', paddingBottom: '4px' }}>
                                    {details.citations?.map((citation, idx: number) => (
                                        <a
                                            key={idx}
                                            href={citation.url || citation.snippet}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            style={{ textDecoration: 'none', color: 'inherit' }}
                                        >
                                            <div style={{
                                                minWidth: '280px',
                                                maxWidth: '280px',
                                                border: '1px solid #e1e3e5',
                                                borderRadius: '8px',
                                                padding: '12px',
                                                background: 'white',
                                                height: '100%',
                                                cursor: 'pointer',
                                                transition: 'box-shadow 0.2sease',
                                            }}
                                                onMouseEnter={(e) => e.currentTarget.style.boxShadow = '0 2px 8px rgba(0,0,0,0.1)'}
                                                onMouseLeave={(e) => e.currentTarget.style.boxShadow = 'none'}
                                            >
                                                <BlockStack gap="200">
                                                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                                        <div style={{ width: '16px', height: '16px', flexShrink: 0 }}>
                                                            <img src={`https://www.google.com/s2/favicons?domain=${citation.source}&sz=32`} alt="" style={{ width: '100%', height: '100%' }} />
                                                        </div>
                                                        <Text variant="bodySm" tone="subdued" as="span">{citation.source}</Text>
                                                    </div>
                                                    <Text variant="bodySm" fontWeight="semibold" as="h4" truncate>{citation.title}</Text>
                                                    <Text variant="bodyXs" tone="subdued" as="p" breakWord>
                                                        {citation.snippet}
                                                    </Text>
                                                    {citation.date && (
                                                        <Text variant="bodyXs" tone="subdued" as="span">{citation.date}</Text>
                                                    )}
                                                </BlockStack>
                                            </div>
                                        </a>
                                    ))}
                                </div>
                            </BlockStack>
                        </div>
                    </BlockStack>
                    {/* Close outer modal stack */}
                </BlockStack>
            </Modal.Section>
        </Modal>
    );
}
