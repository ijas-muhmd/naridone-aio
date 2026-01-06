import { Card, Text, InlineStack, Icon, Popover, BlockStack } from "@shopify/polaris";
import { CheckIcon } from "@shopify/polaris-icons";
import { getPlatformInfo } from "../../utils/platforms";
import { useState, Fragment } from "react";
import { ExecutionDetailsModal, ExecutionDetails } from "./ExecutionDetailsModal";

interface ExecutionRow {
    id: string;
    date: Date;
    mentioned: boolean;
    position: number | null;
    mentions: Array<{ brand: { name: string, logo?: string, domain?: string } }>;
    citations: Array<{ domain?: string; url?: string }>;
    response: string;
    platform: string;
    region?: string;
    searchQueries?: string[];
    sentiment?: number | null;
    visibility?: number | null;
}

interface MonitorExecutionsTableProps {
    executions: ExecutionRow[];
    brandName?: string;
}

interface StackedIconItem {
    id: string;
    name: string;
    imageUrl?: string;
    fallbackInitials?: string;
    url?: string;
}

interface StackedIconsProps {
    items: StackedIconItem[];
    allItems: StackedIconItem[];
    remainingCount: number;
    rowIndex: number;
}

function StackedIcons({ items, allItems, remainingCount, rowIndex }: StackedIconsProps) {
    const [popoverActive, setPopoverActive] = useState(false);

    // Calculate the width needed for the expanded state to prevent layout shift
    const minWidth = Math.max(0, items.length * 28 - 4);
    const itemNames = allItems.map(i => i.name);

    if (allItems.length === 0) {
        return <Text as="span" variant="bodySm" tone="subdued">—</Text>;
    }

    return (
        <Popover
            active={popoverActive}
            activator={
                <div
                    style={{ display: 'flex', alignItems: 'center', gap: '4px', cursor: 'pointer', height: '28px' }}
                    onMouseEnter={() => setPopoverActive(true)}
                    onMouseLeave={() => setPopoverActive(false)}
                >
                    <div style={{ display: 'flex', alignItems: 'center', transition: 'all 0.2s ease-in-out' }}>
                        {items.map((item, idx) => (
                            <div
                                key={item.id + idx}
                                style={{
                                    width: '20px',
                                    height: '20px',
                                    borderRadius: '50%',
                                    overflow: 'hidden',
                                    marginLeft: idx > 0 ? (popoverActive ? '4px' : '-8px') : '0',
                                    border: '2px solid white',
                                    backgroundColor: '#f1f2f4',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    flexShrink: 0,
                                    zIndex: items.length - idx,
                                    position: 'relative',
                                    transition: 'all 0.2s ease-in-out'
                                }}
                            >
                                {item.url ? (
                                    <a
                                        href={item.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        onClick={(e) => e.stopPropagation()}
                                        style={{ display: 'block', width: '100%', height: '100%' }}
                                    >
                                        {item.imageUrl ? (
                                            <img
                                                src={item.imageUrl}
                                                alt={item.name}
                                                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                                onError={(e) => {
                                                    (e.target as HTMLImageElement).style.display = 'none';
                                                    (e.target as HTMLImageElement).parentElement!.parentElement!.innerText = item.fallbackInitials || item.name.substring(0, 1) || "?";
                                                    (e.target as HTMLImageElement).parentElement!.parentElement!.style.fontSize = '10px';
                                                    (e.target as HTMLImageElement).parentElement!.parentElement!.style.fontWeight = 'bold';
                                                    (e.target as HTMLImageElement).parentElement!.parentElement!.style.display = 'flex';
                                                    (e.target as HTMLImageElement).parentElement!.parentElement!.style.alignItems = 'center';
                                                    (e.target as HTMLImageElement).parentElement!.parentElement!.style.justifyContent = 'center';
                                                }}
                                            />
                                        ) : (
                                            <span style={{ fontSize: '10px', fontWeight: 'bold', width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                                {item.fallbackInitials || item.name.substring(0, 1) || "?"}
                                            </span>
                                        )}
                                    </a>
                                ) : (
                                    <>
                                        {item.imageUrl ? (
                                            <img
                                                src={item.imageUrl}
                                                alt={item.name}
                                                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                                onError={(e) => {
                                                    (e.target as HTMLImageElement).style.display = 'none';
                                                    (e.target as HTMLImageElement).parentElement!.innerText = item.fallbackInitials || item.name.substring(0, 1) || "?";
                                                    (e.target as HTMLImageElement).parentElement!.style.fontSize = '10px';
                                                    (e.target as HTMLImageElement).parentElement!.style.fontWeight = 'bold';
                                                }}
                                            />
                                        ) : (
                                            <span style={{ fontSize: '10px', fontWeight: 'bold' }}>{item.fallbackInitials || item.name.substring(0, 1) || "?"}</span>
                                        )}
                                    </>
                                )}
                            </div>
                        ))}
                    </div>
                    {remainingCount > 0 && (
                        <Text as="span" variant="bodySm" tone="subdued" fontWeight="medium">
                            +{remainingCount}
                        </Text>
                    )}
                </ div>
            }
            onClose={() => setPopoverActive(false)}
        >
            <div style={{ padding: '12px', maxWidth: '300px' }}>
                <BlockStack gap="200">
                    <Text as="p" variant="bodySm" fontWeight="medium" tone="subdued">
                        {itemNames.slice(0, 6).join(', ')}{itemNames.length > 6 ? ` and ${itemNames.length - 6} more` : ''}
                    </Text>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
                        {allItems.map((item, idx) => (
                            <div
                                key={item.id + idx}
                                style={{
                                    width: '20px',
                                    height: '20px',
                                    borderRadius: '50%',
                                    overflow: 'hidden',
                                    border: '2px solid white',
                                    backgroundColor: '#f1f2f4',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    flexShrink: 0
                                }}
                            >
                                {item.url ? (
                                    <a
                                        href={item.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        style={{ display: 'block', width: '100%', height: '100%' }}
                                    >
                                        {item.imageUrl ? (
                                            <img
                                                src={item.imageUrl}
                                                alt={item.name}
                                                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                                onError={(e) => {
                                                    (e.target as HTMLImageElement).style.display = 'none';
                                                    (e.target as HTMLImageElement).parentElement!.parentElement!.innerText = item.fallbackInitials || item.name.substring(0, 1) || "?";
                                                    (e.target as HTMLImageElement).parentElement!.parentElement!.style.fontSize = '8px';
                                                    (e.target as HTMLImageElement).parentElement!.parentElement!.style.fontWeight = 'bold';
                                                    (e.target as HTMLImageElement).parentElement!.parentElement!.style.display = 'flex';
                                                    (e.target as HTMLImageElement).parentElement!.parentElement!.style.alignItems = 'center';
                                                    (e.target as HTMLImageElement).parentElement!.parentElement!.style.justifyContent = 'center';
                                                }}
                                            />
                                        ) : (
                                            <span style={{ fontSize: '8px', fontWeight: 'bold', width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                                {item.fallbackInitials || item.name.substring(0, 1) || "?"}
                                            </span>
                                        )}
                                    </a>
                                ) : (
                                    <>
                                        {item.imageUrl ? (
                                            <img
                                                src={item.imageUrl}
                                                alt={item.name}
                                                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                                onError={(e) => {
                                                    (e.target as HTMLImageElement).style.display = 'none';
                                                    (e.target as HTMLImageElement).parentElement!.innerText = item.fallbackInitials || item.name.substring(0, 1) || "?";
                                                    (e.target as HTMLImageElement).parentElement!.style.fontSize = '8px';
                                                    (e.target as HTMLImageElement).parentElement!.style.fontWeight = 'bold';
                                                }}
                                            />
                                        ) : (
                                            <span style={{ fontSize: '8px', fontWeight: 'bold' }}>{item.fallbackInitials || item.name.substring(0, 1) || "?"}</span>
                                        )}
                                    </>
                                )}
                            </div>
                        ))}
                        {allItems.length > 6 && (
                            <Text as="span" variant="bodySm" tone="subdued" fontWeight="medium">
                                +{allItems.length - 6}
                            </Text>
                        )}
                    </div>
                </BlockStack>
            </div>
        </Popover>
    );
}

export function MonitorExecutionsTable({ executions, brandName = '' }: MonitorExecutionsTableProps) {
    const [selectedExecution, setSelectedExecution] = useState<ExecutionDetails | null>(null);

    // Filter out Google Search (searchapi-google) and others, keep Real Trio
    const filteredExecutions = executions.filter(e => {
        const hiddenPlatforms = ['searchapi-google', 'google-official', 'bing-serp', 'searchapi-bing'];
        return !hiddenPlatforms.includes(e.platform);
    });

    // Group executions by region
    const groupedExecutions = filteredExecutions.reduce((groups, execution) => {
        const region = execution.region || 'United States';
        if (!groups[region]) {
            groups[region] = [];
        }
        groups[region].push(execution);
        return groups;
    }, {} as Record<string, ExecutionRow[]>);

    // Sort regions alphabetically (optional, but good for consistency)
    const sortedRegions = Object.keys(groupedExecutions).sort();

    // Format date as "DD MMM, YYYY"
    const formatDate = (date: Date) => {
        return date.toLocaleDateString('en-US', {
            day: '2-digit',
            month: 'short',
            year: 'numeric'
        });
    };

    // ... existing helper functions ...

    // Truncate response text
    const truncateText = (text: string, maxLength: number = 60) => {
        if (!text) return '—';
        if (text.length <= maxLength) return text;
        return text.substring(0, maxLength) + '...';
    };

    // Get domain favicon for citations
    const getCitationIcons = (citations: Array<{ domain?: string; url?: string }>) => {
        const domainMap = new Map<string, string>();

        citations.forEach(citation => {
            let domain = citation.domain;
            if (!domain && citation.url) {
                try {
                    const urlObj = new URL(citation.url);
                    domain = urlObj.hostname;
                } catch (e) {
                    // Invalid URL, skip
                }
            }

            if (domain && !domainMap.has(domain)) {
                domainMap.set(domain, citation.url || `https://${domain}`);
            }
        });

        const allDomains = Array.from(domainMap.keys());
        const domains = allDomains.slice(0, 6);
        const remainingCount = allDomains.length - domains.length;

        return { domains, allDomains, domainMap, remainingCount };
    };

    // Get brand icons for mentions
    const getMentionIcons = (mentions: Array<{ brand: { name: string, logo?: string, domain?: string } }>) => {
        const uniqueBrands = new Map<string, { name: string, logo?: string, domain?: string }>();
        mentions.forEach(m => {
            if (m.brand && m.brand.name) {
                uniqueBrands.set(m.brand.name, m.brand);
            }
        });

        const allBrands = Array.from(uniqueBrands.values());
        const displayBrands = allBrands.slice(0, 6);
        const remainingCount = allBrands.length - displayBrands.length;

        return { displayBrands, allBrands, remainingCount };
    };

    return (
        <Card padding="0">
            <ExecutionDetailsModal
                open={!!selectedExecution}
                onClose={() => setSelectedExecution(null)}
                details={selectedExecution}
                brandName={brandName || ''}
            />
            <div style={{ width: '100%', overflowX: 'auto' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse', tableLayout: 'auto', minWidth: '1200px' }}>
                    <thead>
                        <tr style={{ borderBottom: '1px solid #e1e3e5', backgroundColor: '#fafbfb' }}>
                            <th style={{ textAlign: 'left', padding: '12px 16px', fontWeight: '500', fontSize: '13px', color: '#6d7175', whiteSpace: 'nowrap' }}>
                                Date
                            </th>
                            <th style={{ textAlign: 'left', padding: '12px 16px', fontWeight: '500', fontSize: '13px', color: '#6d7175', whiteSpace: 'nowrap' }}>
                                Mentioned?
                            </th>
                            <th style={{ textAlign: 'left', padding: '12px 16px', fontWeight: '500', fontSize: '13px', color: '#6d7175', whiteSpace: 'nowrap' }}>
                                Visibility
                            </th>
                            <th style={{ textAlign: 'left', padding: '12px 16px', fontWeight: '500', fontSize: '13px', color: '#6d7175', whiteSpace: 'nowrap' }}>
                                Position
                            </th>
                            <th style={{ textAlign: 'left', padding: '12px 16px', fontWeight: '500', fontSize: '13px', color: '#6d7175', whiteSpace: 'nowrap' }}>
                                Sentiment
                            </th>
                            <th style={{ textAlign: 'left', padding: '12px 16px', fontWeight: '500', fontSize: '13px', color: '#6d7175', whiteSpace: 'nowrap', minWidth: '200px' }}>
                                All Mentions
                            </th>
                            <th style={{ textAlign: 'left', padding: '12px 16px', fontWeight: '500', fontSize: '13px', color: '#6d7175', minWidth: '200px' }}>
                                Response
                            </th>
                            <th style={{ textAlign: 'left', padding: '12px 16px', fontWeight: '500', fontSize: '13px', color: '#6d7175', whiteSpace: 'nowrap' }}>
                                Platforms
                            </th>
                            <th style={{ textAlign: 'left', padding: '12px 16px', fontWeight: '500', fontSize: '13px', color: '#6d7175', whiteSpace: 'nowrap', minWidth: '200px' }}>
                                Citations
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {executions.length === 0 ? (
                            <tr>
                                <td colSpan={9} style={{ padding: '24px', textAlign: 'center', color: '#6d7175' }}>
                                    No executions found
                                </td>
                            </tr>
                        ) : (
                            sortedRegions.map((region) => (
                                <Fragment key={region}>
                                    {/* Region Header Row */}
                                    <tr key={`header-${region}`} style={{ backgroundColor: '#f4f6f8', borderBottom: '1px solid #e1e3e5' }}>
                                        <td colSpan={9} style={{ padding: '8px 16px', fontWeight: '600', color: '#202223', fontSize: '13px' }}>
                                            {region}
                                        </td>
                                    </tr>
                                    {/* Execution Rows for this Region */}
                                    {groupedExecutions[region].map((execution, index) => {
                                        const platformInfo = getPlatformInfo(execution.platform || '');
                                        const citationsData = getCitationIcons(execution.citations || []);
                                        const mentionsData = getMentionIcons(execution.mentions || []);

                                        // Helper for Visibility Status
                                        const getVisibilityStatus = (position: number | null, mentioned: boolean) => {
                                            if (!mentioned || position === null) return 'Not Ranked';
                                            if (position === 1) return 'Leader';
                                            if (position <= 3) return 'Strong';
                                            if (position <= 5) return 'Competitive';
                                            if (position <= 10) return 'Visible';
                                            return 'Needs work';
                                        };

                                        const visibilityStatus = getVisibilityStatus(execution.position, execution.mentioned);
                                        let badgeStyle = { bg: '#F1F2F4', text: '#5C5F62', border: '#e1e3e5' }; // Not Ranked
                                        if (visibilityStatus === 'Leader' || visibilityStatus === 'Strong') {
                                            badgeStyle = { bg: '#E4F8F0', text: '#007A5C', border: '#b6e9d6' };
                                        } else if (visibilityStatus === 'Competitive') {
                                            badgeStyle = { bg: '#FFFBDB', text: '#5C4E00', border: '#feef72' };
                                        } else if (visibilityStatus === 'Visible') {
                                            badgeStyle = { bg: '#EBF5FA', text: '#005BD3', border: '#b4d7f5' };
                                        } else if (visibilityStatus === 'Needs work') {
                                            badgeStyle = { bg: '#FEECEB', text: '#D72C0D', border: '#f9bdbc' };
                                        }

                                        // Prepare StackedIcons data for Mentions
                                        const mentionItems = mentionsData.displayBrands.map((b) => ({
                                            id: b.name,
                                            name: b.name,
                                            imageUrl: b.logo,
                                            fallbackInitials: b.name.substring(0, 1).toUpperCase(),
                                            url: b.domain ? `https://${b.domain}` : undefined
                                        }));
                                        const allMentionItems = mentionsData.allBrands.map((b) => ({
                                            id: b.name,
                                            name: b.name,
                                            imageUrl: b.logo,
                                            fallbackInitials: b.name.substring(0, 1).toUpperCase(),
                                            url: b.domain ? `https://${b.domain}` : undefined
                                        }));

                                        // Prepare StackedIcons data for Citations
                                        const citationItems = citationsData.domains.map((d) => ({
                                            id: d,
                                            name: d,
                                            imageUrl: `https://www.google.com/s2/favicons?domain=${d}&sz=64`,
                                            fallbackInitials: d.substring(0, 1).toUpperCase(),
                                            url: citationsData.domainMap.get(d) || `https://${d}`
                                        }));
                                        const allCitationItems = citationsData.allDomains.map((d) => ({
                                            id: d,
                                            name: d,
                                            imageUrl: `https://www.google.com/s2/favicons?domain=${d}&sz=64`,
                                            fallbackInitials: d.substring(0, 1).toUpperCase(),
                                            url: citationsData.domainMap.get(d) || `https://${d}`
                                        }));

                                        return (
                                            <tr
                                                key={execution.id || index}
                                                style={{
                                                    borderBottom: '1px solid #f1f2f4',
                                                    cursor: 'pointer',
                                                    backgroundColor: 'inherit'
                                                }}
                                                onClick={() => {
                                                    // Map execution to details format
                                                    const details: ExecutionDetails = {
                                                        title: execution.searchQueries && execution.searchQueries.length > 0
                                                            ? `Response for "${execution.searchQueries[0]}"`
                                                            : 'Execution Details',
                                                        source: platformInfo.name,
                                                        date: formatDate(execution.date),
                                                        region: execution.region || 'United States',
                                                        promptText: execution.searchQueries && execution.searchQueries.length > 0
                                                            ? execution.searchQueries[0]
                                                            : '',
                                                        tableData: [], // We don't have table data in the raw execution logic yet, or it needs parsing
                                                        fullResponse: execution.response,
                                                        citations: execution.citations.map(c => ({
                                                            source: c.domain || (c.url ? new URL(c.url).hostname : 'Unknown'),
                                                            title: c.domain || 'Citation', // Title might be missing
                                                            snippet: c.url || '',
                                                            url: c.url || '',
                                                            date: ''
                                                        })),
                                                        mentions: (() => {
                                                            const unique = new Map();
                                                            execution.mentions.forEach(m => {
                                                                const key = m.brand.name.toLowerCase().trim();
                                                                const existing = unique.get(key);
                                                                const newRank = (m as any).position || 999;
                                                                if (!existing) {
                                                                    unique.set(key, m);
                                                                } else {
                                                                    const existingRank = (existing as any).position || 999;
                                                                    if (newRank < existingRank) {
                                                                        unique.set(key, m);
                                                                    }
                                                                }
                                                            });
                                                            return Array.from(unique.values());
                                                        })().map(m => ({
                                                            name: (m as any).brand.name,
                                                            logo: (m as any).brand.logo,
                                                            domain: (m as any).brand.domain,
                                                            rank: (m as any).position || undefined,
                                                            sentiment: (m as any).sentiment || undefined
                                                        })),
                                                        logo: platformInfo.logo
                                                    };
                                                    setSelectedExecution(details);
                                                }}
                                                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#f9fafb')}
                                                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'inherit')}
                                            >
                                                <td style={{ padding: '12px 16px', verticalAlign: 'middle', whiteSpace: 'nowrap' }}>
                                                    <Text as="span" variant="bodyMd" fontWeight="medium">
                                                        {formatDate(execution.date)}
                                                    </Text>
                                                </td>
                                                <td style={{ padding: '12px 16px', verticalAlign: 'middle' }}>
                                                    {execution.mentioned ? (
                                                        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
                                                            <span style={{ color: '#219653', fontSize: '16px', display: 'flex', alignItems: 'center' }}>
                                                                <Icon source={CheckIcon} tone="success" />
                                                            </span>
                                                            <Text as="span" variant="bodySm" tone="success" fontWeight="medium">Yes</Text>
                                                        </div>
                                                    ) : (
                                                        <Text as="span" variant="bodySm" tone="subdued">No</Text>
                                                    )}
                                                </td>
                                                <td style={{ padding: '12px 16px', verticalAlign: 'middle' }}>
                                                    <Text as="span" variant="bodyMd" fontWeight="bold">
                                                        {execution.visibility ? execution.visibility : 0}%
                                                    </Text>
                                                </td>
                                                <td style={{ padding: '12px 16px', verticalAlign: 'middle' }}>
                                                    {execution.position ? (
                                                        <div style={{ display: 'flex', flexDirection: 'column' }}>
                                                            <Text as="span" variant="bodyMd" fontWeight="bold">
                                                                #{execution.position}
                                                            </Text>
                                                            {execution.mentions && execution.mentions.length > 0 && (
                                                                <Text as="span" variant="bodyXs" tone="subdued">
                                                                    of {execution.mentions.length}
                                                                </Text>
                                                            )}
                                                        </div>
                                                    ) : (
                                                        <Text as="span" variant="bodySm" tone="subdued">—</Text>
                                                    )}
                                                </td>
                                                <td style={{ padding: '12px 16px', verticalAlign: 'middle' }}>
                                                    {execution.sentiment !== undefined && execution.sentiment !== null ? (
                                                        <div style={{
                                                            display: 'inline-flex',
                                                            alignItems: 'center',
                                                            justifyContent: 'center',
                                                            padding: '6px 16px',
                                                            borderRadius: '20px',
                                                            backgroundColor: execution.sentiment >= 70 ? '#b5fdce' : execution.sentiment >= 40 ? '#fdf082' : '#ffc4c4',
                                                            color: '#202124',
                                                            fontSize: '13px',
                                                            fontWeight: '500',
                                                            minWidth: '60px'
                                                        }}>
                                                            {execution.sentiment}%
                                                        </div>
                                                    ) : (
                                                        <Text as="span" variant="bodySm" tone="subdued">—</Text>
                                                    )}
                                                </td>
                                                <td style={{ padding: '12px 16px', verticalAlign: 'middle' }}>
                                                    <StackedIcons
                                                        items={mentionItems}
                                                        allItems={allMentionItems}
                                                        remainingCount={mentionsData.remainingCount}
                                                        rowIndex={index}
                                                    />
                                                </td>
                                                <td style={{ padding: '12px 16px', verticalAlign: 'middle', maxWidth: '300px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                                                    <Text as="span" variant="bodySm" tone="subdued">
                                                        {truncateText(execution.response)}
                                                    </Text>
                                                </td>
                                                <td style={{ padding: '12px 16px', verticalAlign: 'middle', whiteSpace: 'nowrap' }}>
                                                    <InlineStack gap="200" blockAlign="center" wrap={false}>
                                                        <img
                                                            src={platformInfo.logo}
                                                            alt={platformInfo.name}
                                                            style={{ width: '20px', height: '20px', borderRadius: '4px', flexShrink: 0 }}
                                                        />
                                                        <span style={{ whiteSpace: 'nowrap' }}>
                                                            <Text variant="bodySm" as="span">{platformInfo.name}</Text>
                                                        </span>
                                                    </InlineStack>
                                                </td>
                                                <td style={{ padding: '12px 16px', verticalAlign: 'middle' }}>
                                                    <StackedIcons
                                                        items={citationItems}
                                                        allItems={allCitationItems}
                                                        remainingCount={citationsData.remainingCount}
                                                        rowIndex={index}
                                                    />
                                                </td>
                                            </tr>
                                        );
                                    })
                                    }
                                </Fragment>
                            ))
                        )}
                    </tbody>
                </table>
            </div>
        </Card>
    );
}
