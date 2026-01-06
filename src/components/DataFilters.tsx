import { InlineStack, Button, Text, Icon, Combobox, Listbox } from "@shopify/polaris";
import { useState, useCallback, useMemo, useEffect } from "react";
import { SearchIcon, CalendarIcon, GlobeIcon, HashtagIcon, LinkIcon } from "@shopify/polaris-icons";
import { PLATFORMS, AVAILABLE_MODELS } from "../utils/platforms";
import { FilterPopover } from "./MultiSelectFilters";

export interface FilterOptions {
    timeRange: string;
    product: string;
    region: string[];
    source: string[];
    topic?: string[];
}

export interface ProductOption {
    label: string;
    value: string;
    image?: string | null;
    score?: number;
}

interface TopicOption {
    label: string;
    value: string;
}

interface DataFiltersProps {
    filters: FilterOptions;
    onChange: (filters: FilterOptions) => void;
    products?: ProductOption[];
    topics?: TopicOption[];
    showOnlyProduct?: boolean;
    hideRegion?: boolean;
}

// Default regions (same as before)
const REGION_OPTIONS = [
    { label: "United States", value: "US" },
    { label: "United Kingdom", value: "UK" },
    { label: "Canada", value: "CA" },
    { label: "Australia", value: "AU" },
    { label: "Germany", value: "DE" },
    { label: "France", value: "FR" },
];

const TIME_RANGE_OPTIONS = [
    { label: "Last 7 Days", value: "7" },
    { label: "Last 30 Days", value: "30" },
    { label: "Last 90 Days", value: "90" },
    { label: "All Time", value: "all" },
];

export function DataFilters({ filters, onChange, products = [], topics = [], showOnlyProduct = false, hideRegion = false }: DataFiltersProps) {
    // Popover Active States
    const [sourcePopoverActive, setSourcePopoverActive] = useState(false);
    const [timeRangePopoverActive, setTimeRangePopoverActive] = useState(false);
    const [regionPopoverActive, setRegionPopoverActive] = useState(false);
    const [topicPopoverActive, setTopicPopoverActive] = useState(false);

    // Search States
    const [sourceSearch, setSourceSearch] = useState('');
    const [regionSearch, setRegionSearch] = useState('');
    const [topicSearch, setTopicSearch] = useState('');
    const [timeRangeSearch, setTimeRangeSearch] = useState('');

    // Product Combobox State
    const [productComboboxValue, setProductComboboxValue] = useState('');
    const [isProductListOpen, setIsProductListOpen] = useState(false);

    // Toggles
    const toggleSourcePopover = useCallback(() => {
        setSourcePopoverActive((active) => !active);
        if (sourcePopoverActive) setSourceSearch('');
    }, [sourcePopoverActive]);

    const toggleTimeRangePopover = useCallback(() => {
        setTimeRangePopoverActive((active) => !active);
        if (timeRangePopoverActive) setTimeRangeSearch('');
    }, [timeRangePopoverActive]);

    const toggleRegionPopover = useCallback(() => {
        setRegionPopoverActive((active) => !active);
        if (regionPopoverActive) setRegionSearch('');
    }, [regionPopoverActive]);

    const toggleTopicPopover = useCallback(() => {
        setTopicPopoverActive((active) => !active);
        if (topicPopoverActive) setTopicSearch('');
    }, [topicPopoverActive]);

    // Data Preparation
    const platformOptions = useMemo(() => {
        return AVAILABLE_MODELS.map(model => ({
            value: model.id,
            label: model.label,
            prefix: (
                <img
                    src={model.logo}
                    alt={model.label}
                    style={{ width: "16px", height: "16px", borderRadius: "3px", objectFit: "contain", marginRight: '8px' }}
                />
            ),
            showInfoIcon: model.id === "chatgpt-search",
            category: model.type || 'Other',
        }));
    }, []);

    const topicOptions = useMemo(() => {
        return topics.map(t => ({
            value: t.value,
            label: t.label
        }));
    }, [topics]);

    // Initialize defaults on mount if filters are undefined
    useEffect(() => {
        const updates: Partial<FilterOptions> = {};
        let hasUpdates = false;

        // Time Range: default to first option if not set
        if (!filters.timeRange && TIME_RANGE_OPTIONS.length > 0) {
            updates.timeRange = TIME_RANGE_OPTIONS[0].value;
            hasUpdates = true;
        }

        // Multi-select filters: if undefined, default to empty array (select all)
        if (filters.region === undefined) {
            updates.region = [];
            hasUpdates = true;
        }
        if (filters.source === undefined) {
            updates.source = [];
            hasUpdates = true;
        }
        if (filters.topic === undefined) {
            updates.topic = [];
            hasUpdates = true;
        }

        if (hasUpdates) {
            onChange({ ...filters, ...updates });
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []); // Only run on mount

    // Handlers
    const handleTimeRangeChange = useCallback((value: string) => {
        onChange({ ...filters, timeRange: value });
        setTimeRangePopoverActive(false);
    }, [filters, onChange]);

    const toggleSource = useCallback((value: string) => {
        const current = filters.source || [];
        const newSource = current.includes(value)
            ? current.filter(v => v !== value)
            : [...current, value];
        onChange({ ...filters, source: newSource });
    }, [filters, onChange]);

    const allSourcesSelected = !filters.source || filters.source.length === 0 || filters.source.length === platformOptions.length;

    const selectAllSources = useCallback(() => {
        if (allSourcesSelected) {
            onChange({ ...filters, source: [] });
        } else {
            onChange({ ...filters, source: platformOptions.map(p => p.value) });
        }
    }, [allSourcesSelected, filters, onChange, platformOptions]);


    const toggleRegion = useCallback((value: string) => {
        const current = filters.region || [];
        const newRegion = current.includes(value)
            ? current.filter(v => v !== value)
            : [...current, value];
        onChange({ ...filters, region: newRegion });
    }, [filters, onChange]);

    const allRegionsSelected = !filters.region || filters.region.length === 0 || filters.region.length === REGION_OPTIONS.length;

    const handleSelectAllRegions = useCallback(() => {
        if (allRegionsSelected) {
            onChange({ ...filters, region: [] });
        } else {
            onChange({ ...filters, region: REGION_OPTIONS.map(r => r.value) });
        }
    }, [allRegionsSelected, filters, onChange]);

    const toggleTopic = useCallback((value: string) => {
        const current = filters.topic || [];
        const newTopic = current.includes(value)
            ? current.filter(v => v !== value)
            : [...current, value];
        onChange({ ...filters, topic: newTopic });
    }, [filters, onChange]);

    const allTopicsSelected = !filters.topic || filters.topic.length === 0 || filters.topic.length === topicOptions.length;

    const handleSelectAllTopics = useCallback(() => {
        if (allTopicsSelected) {
            onChange({ ...filters, topic: [] });
        } else {
            onChange({ ...filters, topic: topicOptions.map(t => t.value) });
        }
    }, [allTopicsSelected, filters, onChange, topicOptions]);

    // "Only" handlers
    const handleSourceOnly = useCallback((value: string) => {
        onChange({ ...filters, source: [value] });
    }, [filters, onChange]);

    const handleRegionOnly = useCallback((value: string) => {
        onChange({ ...filters, region: [value] });
    }, [filters, onChange]);

    const handleTopicOnly = useCallback((value: string) => {
        onChange({ ...filters, topic: [value] });
    }, [filters, onChange]);


    // Labels
    const selectedTimeRangeLabel = TIME_RANGE_OPTIONS.find(o => o.value === filters.timeRange)?.label || "Last 30 Days";

    const selectedRegions = filters.region || [];
    const regionLabel = (selectedRegions.length === 0 || selectedRegions.length === REGION_OPTIONS.length)
        ? "All Regions"
        : `${selectedRegions.length} Regions`;

    const selectedSources = filters.source || [];
    const sourceLabel = (selectedSources.length === 0 || selectedSources.length === platformOptions.length)
        ? "All Platforms"
        : `${selectedSources.length} Platforms`;

    const selectedTopics = filters.topic || [];
    const topicLabel = (selectedTopics.length === 0 || selectedTopics.length === topicOptions.length)
        ? "All Topics"
        : `${selectedTopics.length} Topics`;


    // Product Combobox Logic (Same as before)
    const escapeRegex = (str: string) => str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const productOptions = useMemo(() => {
        let options = products;
        if (productComboboxValue) {
            const regex = new RegExp(escapeRegex(productComboboxValue), 'i');
            options = products.filter((product) => regex.test(product.label));
        }
        return [
            { label: "All Products", value: "all", image: null, score: undefined },
            ...options
        ];
    }, [products, productComboboxValue]);

    const updateProductSelection = useCallback(
        (selected: string) => {
            const value = selected === filters.product ? "all" : selected;
            onChange({ ...filters, product: value });
            setProductComboboxValue('');
            setIsProductListOpen(false);
        },
        [filters.product, onChange],
    );

    const selectedProduct = products.find(p => p.value === filters.product);
    const selectedProductLabel = filters.product === "all" ? "All Products" : (selectedProduct?.label || "Unknown Product");

    return (
        <div style={{
            backgroundColor: "var(--p-color-bg-surface)",
            borderRadius: "var(--p-border-radius-300, 8px)",
            padding: "12px",
            boxShadow: "var(--p-shadow-100)",
            border: "1px solid var(--p-color-border-subdued)",
        }}>
            <InlineStack align="space-between" blockAlign="center" gap="400">
                {/* Left Side: Search - Flexible Width */}
                <div style={{ flex: "1 1 300px", minWidth: "250px" }}>
                    <Combobox
                        activator={
                            <Combobox.TextField
                                prefix={<Icon source={SearchIcon} />}
                                onChange={setProductComboboxValue}
                                label="Product"
                                labelHidden
                                value={productComboboxValue}
                                placeholder={selectedProductLabel}
                                autoComplete="off"
                                onFocus={() => setIsProductListOpen(true)}
                            />
                        }
                        allowMultiple={false}
                    >
                        {isProductListOpen ? (
                            <div style={{
                                maxHeight: '400px',
                                overflowY: 'auto',
                                display: 'flex',
                                flexDirection: 'column',
                                paddingTop: 0,
                                marginTop: '-4px',
                            }}>
                                <Listbox onSelect={updateProductSelection}>
                                    {productOptions.map((option, index) => {
                                        const isSelected = filters.product === option.value;
                                        return (
                                            <div
                                                key={option.value}
                                                style={{ borderBottom: '1px solid #f1f2f4' }}
                                                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#f7f8fa'}
                                                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
                                            >
                                                <Listbox.Option
                                                    value={option.value}
                                                    selected={isSelected}
                                                    accessibilityLabel={option.label}
                                                >
                                                    <div style={{
                                                        display: 'grid',
                                                        gridTemplateColumns: '40px 1fr',
                                                        gap: '12px',
                                                        alignItems: 'center',
                                                        padding: '4px 8px'
                                                    }}>
                                                        <div style={{
                                                            width: '40px',
                                                            height: '40px',
                                                            display: 'flex',
                                                            alignItems: 'center',
                                                            justifyContent: 'center',
                                                            backgroundColor: '#f1f2f4',
                                                            borderRadius: '8px',
                                                            overflow: 'hidden',
                                                            border: '1px solid rgba(0,0,0,0.05)'
                                                        }}>
                                                            {option.value !== 'all' ? (
                                                                option.image ? (
                                                                    <img src={option.image} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                                                ) : (
                                                                    <Icon source={SearchIcon} tone="subdued" />
                                                                )
                                                            ) : (
                                                                <Icon source={SearchIcon} tone="subdued" />
                                                            )}
                                                        </div>
                                                        <div style={{ display: 'flex', flexDirection: 'column', minWidth: 0 }}>
                                                            <Text as="span" variant="bodyMd" fontWeight="medium" truncate>{option.label}</Text>
                                                            {option.value === 'all' ? (
                                                                <Text as="span" variant="bodyXs" tone="subdued">Show metrics for all products</Text>
                                                            ) : (
                                                                <Text as="span" variant="bodyXs" tone="subdued">
                                                                    {typeof option.score === 'number' ? `Visibility: ${option.score}%` : 'No data available'}
                                                                </Text>
                                                            )}
                                                        </div>
                                                    </div>
                                                </Listbox.Option>
                                            </div>
                                        );
                                    })}
                                </Listbox>
                            </div>
                        ) : null}
                    </Combobox>
                </div>

                {/* Right Side: Filter Group - Fixed Gap */}
                {!showOnlyProduct && (
                    <InlineStack gap="300">
                        <FilterPopover
                            active={topicPopoverActive}
                            onToggle={toggleTopicPopover}
                            activator={<Button onClick={toggleTopicPopover} icon={HashtagIcon} disclosure>{topicLabel}</Button>}
                            title="Topics"
                            searchValue={topicSearch}
                            onSearchChange={setTopicSearch}
                            options={topicOptions}
                            selectedValues={selectedTopics}
                            onToggleValue={toggleTopic}
                            onSelectAll={handleSelectAllTopics}
                            allSelected={allTopicsSelected}
                            showOnlyButton={true}
                            onOnlyClick={handleTopicOnly}
                        />

                        <FilterPopover
                            active={timeRangePopoverActive}
                            onToggle={toggleTimeRangePopover}
                            activator={<Button onClick={toggleTimeRangePopover} icon={CalendarIcon} disclosure>{selectedTimeRangeLabel}</Button>}
                            title="Time Range"
                            searchValue={timeRangeSearch}
                            onSearchChange={setTimeRangeSearch}
                            options={TIME_RANGE_OPTIONS}
                            selectedValues={[filters.timeRange]}
                            onToggleValue={handleTimeRangeChange}
                            onSelectAll={() => { }}
                            allSelected={false}
                            hideSelectAll={true}
                            singleSelect={true}
                            hideSearch={true}
                        />

                        {!hideRegion && (
                            <FilterPopover
                                active={regionPopoverActive}
                                onToggle={toggleRegionPopover}
                                activator={<Button onClick={toggleRegionPopover} icon={GlobeIcon} disclosure>{regionLabel}</Button>}
                                title="Regions"
                                searchValue={regionSearch}
                                onSearchChange={setRegionSearch}
                                options={REGION_OPTIONS}
                                selectedValues={selectedRegions}
                                onToggleValue={toggleRegion}
                                onSelectAll={handleSelectAllRegions}
                                allSelected={allRegionsSelected}
                                showOnlyButton={true}
                                onOnlyClick={handleRegionOnly}
                            />
                        )}

                        <FilterPopover
                            active={sourcePopoverActive}
                            onToggle={toggleSourcePopover}
                            activator={<Button onClick={toggleSourcePopover} icon={LinkIcon} disclosure>{sourceLabel}</Button>}
                            title="Platforms"
                            searchValue={sourceSearch}
                            onSearchChange={setSourceSearch}
                            options={platformOptions}
                            selectedValues={selectedSources}
                            onToggleValue={toggleSource}
                            onSelectAll={selectAllSources}
                            allSelected={allSourcesSelected}
                            showOnlyButton={true}
                            onOnlyClick={handleSourceOnly}
                            grouped={true}
                        />
                    </InlineStack>
                )}
            </InlineStack>
        </div>
    );
}