import { Card, BlockStack, Text, Box, Link, InlineStack, Button, Checkbox } from "@shopify/polaris";
import { CheckIcon, UndoIcon } from "@shopify/polaris-icons";

interface DiffCardProps {
    shop?: string;
    fix: {
        id: string;
        productTitle?: string | null;
        productHandle?: string | null;
        diff?: {
            field?: string;
            before?: string;
            after?: string;
        } | null | any;
        originalValue?: string | null;
        suggestedValue?: string | null;
        type?: string;
        status?: string;
    };
    selected?: boolean;
    onSelect?: (fixId: string, selected: boolean) => void;
    onApply?: (fixId: string) => void;
    onUndo?: (fixId: string) => void;
    isApplying?: boolean;
    isUndoing?: boolean;
}

export function DiffCard({ shop, fix, selected = false, onSelect, onApply, onUndo, isApplying = false, isUndoing = false }: DiffCardProps) {
    const getFieldFromType = (type: string) => {
        const htmlTypes = [
            'WEAK_DESCRIPTION', 'MISSING_AI_FAQ', 'NO_FAQ', 'UNSTRUCTURED_SPECS',
            'RISK_DISCLAIMER', 'SEASONAL_UPDATE', 'TRUST_SIGNAL_WEAK', 'ADD_ATTRIBUTES',
            'COMPETITOR_GAP', 'NEGATIVE_SENTIMENT', 'MISSED_TREND', 'BRAND_IDENTITY_GENERIC'
        ];
        if (htmlTypes.includes(type)) return 'descriptionHtml';

        if (type === 'WEAK_TITLE' || type === 'MISSING_SEO_TITLE') return 'seoTitle';
        if (type === 'AMBIGUOUS_TITLE') return 'title';
        if (type === 'MISSING_ALT_TEXT') return 'imageAltText';
        if (type === 'MISSING_VENDOR') return 'vendor';

        return 'content';
    };

    const fieldName = fix.diff?.field || getFieldFromType(fix.type || '');
    const isHtml = fieldName === 'descriptionHtml' || fieldName === 'description';

    const before = fix.originalValue || fix.diff?.before || '';
    const after = fix.suggestedValue || fix.diff?.after || '';
    const canApply = fix.status === 'SUGGESTED' || fix.status === 'AUTO_APPLIED';
    const canUndo = (fix.status === 'APPLIED' || fix.status === 'AUTO_APPLIED' || fix.status === 'RESOLVED') && !!fix.diff?.before;

    // Get field label
    const getFieldLabel = (field: string) => {
        const labels: Record<string, string> = {
            'descriptionHtml': 'Product Description',
            'seoTitle': 'SEO Title',
            'imageAltText': 'Image Alt Text',
            'altText': 'Image Alt Text',
            'title': 'Product Title',
            'vendor': 'Vendor',
            'content': 'Content'
        };
        return labels[field] || field;
    };

    return (
        <Card>
            <BlockStack gap="300">
                <InlineStack align="space-between" blockAlign="start">
                    <BlockStack gap="100">
                        {fix.productTitle && (
                            <Text variant="headingSm" as="h3">{fix.productTitle}</Text>
                        )}
                        <Text variant="bodySm" tone="subdued" as="p">Updated: {getFieldLabel(fieldName)}</Text>
                    </BlockStack>
                    {onSelect && (
                        <Checkbox
                            label=""
                            checked={selected}
                            onChange={(value) => onSelect(fix.id, value)}
                            labelHidden
                        />
                    )}
                </InlineStack>

                <Box>
                    <BlockStack gap="200">
                        <Box padding="300" background="bg-surface-secondary" borderRadius="200">
                            <BlockStack gap="100">
                                <Text variant="bodySm" fontWeight="bold" as="p" tone="subdued">BEFORE</Text>
                                <div style={{ overflowY: 'auto', maxHeight: 'auto' }}>
                                    <Text variant="bodySm" as="p" tone="subdued">
                                        {before ? (
                                            isHtml ? (
                                                <div dangerouslySetInnerHTML={{ __html: before.slice(0, 2000) }} />
                                            ) : (
                                                <div style={{ whiteSpace: 'pre-wrap' }}>{before.slice(0, 500)}</div>
                                            )
                                        ) : (
                                            <em>(Empty)</em>
                                        )}
                                    </Text>
                                </div>
                            </BlockStack>
                        </Box>
                        <Box padding="300" background="bg-surface-success" borderRadius="200" borderWidth="025" borderColor="border-success">
                            <BlockStack gap="100">
                                <Text variant="bodySm" fontWeight="bold" as="p" tone="success">AFTER (AI Generated)</Text>
                                <div style={{ overflowY: 'auto', maxHeight: 'auto' }}>
                                    <Text variant="bodySm" as="p">
                                        {after ? (
                                            isHtml ? (
                                                <div dangerouslySetInnerHTML={{ __html: after.slice(0, 2000) }} />
                                            ) : (
                                                <div style={{ whiteSpace: 'pre-wrap' }}>{after.slice(0, 500)}</div>
                                            )
                                        ) : (
                                            <em>No content</em>
                                        )}
                                    </Text>
                                </div>
                            </BlockStack>
                        </Box>
                    </BlockStack>
                </Box>

                <InlineStack align="space-between" blockAlign="center">
                    {fix.productHandle && shop && (
                        <Link url={`https://${shop}/products/${fix.productHandle}`} target="_blank">
                            View Product on Store →
                        </Link>
                    )}
                    <InlineStack gap="200">
                        {canApply && onApply && (
                            <Button
                                size="slim"
                                variant="primary"
                                icon={CheckIcon}
                                onClick={() => onApply(fix.id)}
                                loading={isApplying}
                            >
                                Apply Fix
                            </Button>
                        )}
                        {canUndo && onUndo && (
                            <Button
                                size="slim"
                                variant="plain"
                                icon={UndoIcon}
                                onClick={() => onUndo(fix.id)}
                                loading={isUndoing}
                            >
                                Undo
                            </Button>
                        )}
                    </InlineStack>
                </InlineStack>
            </BlockStack>
        </Card>
    );
}

