import { Card, Text, InlineStack, Icon, Tooltip } from "@shopify/polaris";
import { InfoIcon, DuplicateIcon, ExternalIcon, NoteIcon, FolderIcon, ChatIcon, MinusIcon } from "@shopify/polaris-icons";
import { useState } from "react";
import { getPlatformInfo } from "../../../utils/platforms";

// Category Badge Component (matching MonitorCitation.tsx)
const CategoryBadge = ({ category }: { category: 'Earned' | 'Owned' | 'Social' }) => {
    const categoryConfig = {
        Earned: {
            backgroundColor: '#E3F2FD',
            borderColor: '#BBDEFB',
            iconColor: '#1976D2',
            textColor: '#1976D2',
            icon: NoteIcon,
        },
        Owned: {
            backgroundColor: '#E8F5E9',
            borderColor: '#C8E6C9',
            iconColor: '#388E3C',
            textColor: '#388E3C',
            icon: FolderIcon,
        },
        Social: {
            backgroundColor: '#F3E5F5',
            borderColor: '#E1BEE7',
            iconColor: '#7B1FA2',
            textColor: '#7B1FA2',
            icon: ChatIcon,
        },
    };

    const config = categoryConfig[category];
    const IconComponent = config.icon;

    return (
        <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '2px',
            padding: '4px 8px',
            backgroundColor: config.backgroundColor,
            border: `1px solid ${config.borderColor}`,
            borderRadius: '20px',
            whiteSpace: 'nowrap',
            flexShrink: 0
        }}>
            <div style={{ display: 'flex', alignItems: 'center', flexShrink: 0 }}>
                <Icon source={IconComponent} tone="base" />
            </div>
            <span style={{
                color: config.textColor,
                fontSize: '12px',
                fontWeight: 500,
                lineHeight: '16px'
            }}>
                {category}
            </span>
        </div>
    );
};

// Mentioned Status Component (matching MonitorCitation.tsx)
const MentionedStatus = ({ status }: { status: 'mentioned' | 'not-mentioned' | 'not-checked' }) => {
    if (status === 'mentioned') {
        return (
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '4px', whiteSpace: 'nowrap', flexShrink: 0 }}>
                <span style={{ color: '#219653', fontSize: '16px', lineHeight: '1', display: 'inline-block', verticalAlign: 'middle', flexShrink: 0 }}>✔</span>
                <span style={{ flexShrink: 0 }}>
                    <Text as="span" variant="bodySm" tone="success" fontWeight="medium">Mentioned</Text>
                </span>
            </div>
        );
    }

    if (status === 'not-mentioned') {
        return (
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '4px', whiteSpace: 'nowrap', flexShrink: 0 }}>
                <Icon source={MinusIcon} tone="critical" />
                <span style={{ flexShrink: 0 }}>
                    <Text as="span" variant="bodySm" tone="critical" fontWeight="medium">Not Mentioned</Text>
                </span>
            </div>
        );
    }

    // not-checked
    return (
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '4px', whiteSpace: 'nowrap', flexShrink: 0 }}>
            <span style={{ fontSize: '14px', color: '#6d7175', fontWeight: 'bold', display: 'inline-block', verticalAlign: 'middle', flexShrink: 0 }}>?</span>
            <span style={{ flexShrink: 0 }}>
                <Text as="span" variant="bodySm" tone="subdued" fontWeight="medium">Not Checked</Text>
            </span>
        </div>
    );
};

interface CitationRow {
    id: string | number;
    rank: number;
    url: string;
    title?: string;
    domain: string;
    sourceType: string;
    isCompetitor: boolean | undefined;
    platform: string;
    share: number;
}

interface MonitorCitationsTableProps {
    citations: CitationRow[];
    totalCount: number;
}

export function MonitorCitationsTable({ citations, totalCount }: MonitorCitationsTableProps) {
    const [hoveredCitationRow, setHoveredCitationRow] = useState<string | number | null>(null);

    // Map sourceType to category for badge
    const getCategory = (sourceType: string): 'Earned' | 'Owned' | 'Social' => {
        const categoryMap: Record<string, 'Earned' | 'Owned' | 'Social'> = {
            'EDITORIAL': 'Earned',
            'CORPORATE': 'Owned',
            'SOCIAL': 'Social',
            'UGC': 'Social',
            'FORUM': 'Social',
        };
        return categoryMap[sourceType] || 'Earned';
    };

    // Determine mentioned status
    const getMentionedStatus = (isCompetitor: boolean | undefined): 'mentioned' | 'not-mentioned' | 'not-checked' => {
        if (isCompetitor === false || isCompetitor === undefined) {
            return 'mentioned';
        }
        return 'not-mentioned';
    };

    return (
        <Card padding="0">
            {/* Table */}
            <div style={{ width: '100%', overflowX: 'auto' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse', tableLayout: 'auto' }}>
                    <thead>
                        <tr style={{ borderBottom: '1px solid #e1e3e5', backgroundColor: '#fafbfb' }}>
                            <th style={{ textAlign: 'left', padding: '12px 16px', fontWeight: '500', fontSize: '14px', color: '#6d7175', whiteSpace: 'nowrap' }}>
                                <Text as="span" variant="bodySm" fontWeight="medium">Rank</Text>
                            </th>
                            <th style={{ textAlign: 'left', padding: '12px 16px', fontWeight: '500', fontSize: '14px', color: '#6d7175', minWidth: '400px' }}>
                                <Text as="span" variant="bodySm" fontWeight="medium">Page</Text>
                            </th>
                            <th style={{ textAlign: 'left', padding: '12px 16px', fontWeight: '500', fontSize: '14px', color: '#6d7175', whiteSpace: 'nowrap' }}>
                                <Text as="span" variant="bodySm" fontWeight="medium">Category</Text>
                            </th>
                            <th style={{ textAlign: 'left', padding: '12px 16px', fontWeight: '500', fontSize: '14px', color: '#6d7175', whiteSpace: 'nowrap' }}>
                                <Text as="span" variant="bodySm" fontWeight="medium">Mentioned</Text>
                            </th>
                            <th style={{ textAlign: 'right', padding: '12px 16px', fontWeight: '500', fontSize: '14px', color: '#6d7175', whiteSpace: 'nowrap' }}>
                                <div style={{ display: 'inline-flex', alignItems: 'center', gap: '4px', justifyContent: 'flex-end', width: '100%' }}>
                                    <Text as="span" variant="bodySm" fontWeight="medium">Share</Text>
                                    <Tooltip content="The percentage share of citations">
                                        <Icon source={InfoIcon} tone="subdued" />
                                    </Tooltip>
                                </div>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {citations.length === 0 ? (
                            <tr>
                                <td colSpan={5} style={{ padding: '24px', textAlign: 'center', color: '#6d7175' }}>
                                    No citations found for the selected filters
                                </td>
                            </tr>
                        ) : (
                            citations.map((citation, index) => {
                                const platformInfo = getPlatformInfo(citation.platform || '');
                                const category = getCategory(citation.sourceType);
                                const mentionedStatus = getMentionedStatus(citation.isCompetitor);
                                const fullUrl = citation.url || '';

                                return (
                                    <tr
                                        key={citation.id}
                                        style={{ borderBottom: index < citations.length - 1 ? '1px solid #f1f2f4' : 'none' }}
                                        onMouseEnter={() => setHoveredCitationRow(citation.id)}
                                        onMouseLeave={() => setHoveredCitationRow(null)}
                                    >
                                        <td style={{ padding: '12px 16px', verticalAlign: 'middle' }}>
                                            <Text as="span" variant="bodyMd" fontWeight="medium">{citation.rank}</Text>
                                        </td>
                                        <td style={{ padding: '12px 16px', verticalAlign: 'middle', position: 'relative' }}>
                                            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
                                                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                                    <div style={{ width: '20px', height: '20px', borderRadius: '4px', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                                                        {citation.domain ? (
                                                            <img
                                                                src={`https://www.google.com/s2/favicons?domain=${citation.domain}&sz=64`}
                                                                alt={citation.domain}
                                                                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                                            />
                                                        ) : (
                                                            <Icon source={InfoIcon} tone="subdued" />
                                                        )}
                                                    </div>
                                                    <div style={{ display: 'flex', flexDirection: 'column', minWidth: 0, overflow: 'hidden' }}>
                                                        <Text as="span" variant="bodyMd" truncate>
                                                            {citation.title || citation.url || citation.domain || '—'}
                                                        </Text>
                                                        {citation.title && (
                                                            <Text as="span" variant="bodyXs" tone="subdued" truncate>
                                                                {citation.domain}
                                                            </Text>
                                                        )}
                                                    </div>
                                                </div>
                                                <div style={{
                                                    display: 'inline-flex',
                                                    gap: '4px',
                                                    alignItems: 'center',
                                                    opacity: hoveredCitationRow === citation.id ? 1 : 0,
                                                    visibility: hoveredCitationRow === citation.id ? 'visible' : 'hidden',
                                                    transition: 'opacity 0.1s ease',
                                                    flexShrink: 0,
                                                    minWidth: '120px',
                                                    justifyContent: 'flex-end',
                                                }}>
                                                    {fullUrl && (
                                                        <>
                                                            <button
                                                                onClick={() => {
                                                                    navigator.clipboard.writeText(fullUrl);
                                                                }}
                                                                style={{
                                                                    display: 'inline-flex',
                                                                    alignItems: 'center',
                                                                    gap: '4px',
                                                                    padding: '3px 8px',
                                                                    borderRadius: '6px',
                                                                    border: '1px solid #e1e3e5',
                                                                    backgroundColor: 'white',
                                                                    color: '#202223',
                                                                    fontSize: '12px',
                                                                    fontWeight: '500',
                                                                    cursor: 'pointer',
                                                                    whiteSpace: 'nowrap',
                                                                    transition: 'all 0.1s ease',
                                                                    boxShadow: '0 1px 2px rgba(0, 0, 0, 0.05)',
                                                                    height: '24px',
                                                                }}
                                                                onMouseEnter={(e) => {
                                                                    e.currentTarget.style.backgroundColor = '#f7f8f9';
                                                                    e.currentTarget.style.borderColor = '#c9cccf';
                                                                }}
                                                                onMouseLeave={(e) => {
                                                                    e.currentTarget.style.backgroundColor = 'white';
                                                                    e.currentTarget.style.borderColor = '#e1e3e5';
                                                                }}
                                                            >
                                                                <Icon source={DuplicateIcon} tone="subdued" />
                                                                <span>Copy</span>
                                                            </button>
                                                            <button
                                                                onClick={() => {
                                                                    window.open(fullUrl, '_blank');
                                                                }}
                                                                style={{
                                                                    display: 'inline-flex',
                                                                    alignItems: 'center',
                                                                    gap: '4px',
                                                                    padding: '3px 8px',
                                                                    borderRadius: '6px',
                                                                    border: '1px solid #e1e3e5',
                                                                    backgroundColor: 'white',
                                                                    color: '#202223',
                                                                    fontSize: '12px',
                                                                    fontWeight: '500',
                                                                    cursor: 'pointer',
                                                                    whiteSpace: 'nowrap',
                                                                    transition: 'all 0.1s ease',
                                                                    boxShadow: '0 1px 2px rgba(0, 0, 0, 0.05)',
                                                                    height: '24px',
                                                                }}
                                                                onMouseEnter={(e) => {
                                                                    e.currentTarget.style.backgroundColor = '#f7f8f9';
                                                                    e.currentTarget.style.borderColor = '#c9cccf';
                                                                }}
                                                                onMouseLeave={(e) => {
                                                                    e.currentTarget.style.backgroundColor = 'white';
                                                                    e.currentTarget.style.borderColor = '#e1e3e5';
                                                                }}
                                                            >
                                                                <Icon source={ExternalIcon} tone="subdued" />
                                                                <span>Visit</span>
                                                            </button>
                                                        </>
                                                    )}
                                                </div>
                                            </div>
                                        </td>
                                        <td style={{ padding: '12px 16px', verticalAlign: 'middle', whiteSpace: 'nowrap', minWidth: '100px' }}>
                                            <CategoryBadge category={category} />
                                        </td>
                                        <td style={{ padding: '12px 16px', verticalAlign: 'middle', whiteSpace: 'nowrap', minWidth: '120px' }}>
                                            <MentionedStatus status={mentionedStatus} />
                                        </td>
                                        <td style={{ textAlign: 'right', padding: '12px 16px', verticalAlign: 'middle' }}>
                                            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', gap: '8px' }}>
                                                <Text as="span" variant="bodyMd" fontWeight="medium">{citation.share}%</Text>
                                                <span style={{ color: '#219653' }}>
                                                    <Text as="span" variant="bodySm" tone="success">+0%</Text>
                                                </span>
                                            </div>
                                        </td>
                                    </tr>
                                );
                            })
                        )}
                    </tbody>
                </table>
            </div>

            {/* Footer with Item Count */}
            <div style={{ padding: '16px', borderTop: '1px solid #f1f2f4' }}>
                <InlineStack align="space-between" blockAlign="center">
                    <div></div>
                    <Text as="span" variant="bodySm" tone="subdued">
                        Showing {citations.length > 0 ? 1 : 0}-{citations.length} of {totalCount} item{totalCount !== 1 ? 's' : ''}
                    </Text>
                </InlineStack>
            </div>
        </Card>
    );
}

