import {
    Button,
    Popover,
    Text,
    Icon,
    InlineStack,
    TextField,
    Checkbox
} from "@shopify/polaris";
import { useState, useCallback, useMemo, useEffect } from "react";
import {
    SearchIcon,
    LinkIcon,
    ChatIcon,
    HashtagIcon,
    GlobeIcon,
    InfoIcon,
    CalendarIcon,
    NoteIcon,
    FolderIcon,
    AlertCircleIcon,
    LocationIcon
} from "@shopify/polaris-icons";
import { PLATFORMS, AVAILABLE_MODELS } from "../utils/platforms";

// Citation icon components
const CitationIcon = ({ color, icon }: { color: string; icon: React.ComponentType<any> | string }) => {
    if (typeof icon === 'string') {
        // Fallback for string icons (shouldn't happen with Polaris icons)
        return (
            <div style={{
                width: '16px',
                height: '16px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: color,
                fontSize: '14px',
            }}>
                {icon}
            </div>
        );
    }
    const IconComponent = icon;
    return (
        <div style={{
            width: '16px',
            height: '16px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
        }}>
            <Icon source={IconComponent as any} tone="base" />
        </div>
    );
};

// Hardcoded citation types with icon definitions
const CITATION_TYPES = [
    {
        value: "earned",
        label: "Earned",
        icon: NoteIcon,
        color: "#2F80ED"
    },
    {
        value: "social",
        label: "Social",
        icon: ChatIcon,
        color: "#9B51E0"
    },
    {
        value: "owned",
        label: "Owned",
        icon: FolderIcon,
        color: "#219653"
    },
    {
        value: "competition",
        label: "Competition",
        icon: AlertCircleIcon,
        color: "#EB5757"
    },
];

// Hardcoded prompt types
const PROMPT_TYPES = [
    { value: "visibility", label: "Visibility" },
    { value: "sentiment", label: "Sentiment" },
];

// Hardcoded time range options
const TIME_RANGE_OPTIONS = [
    // { value: "all", label: "All Time" },
    { value: "7", label: "Last 7 Days" },
    { value: "30", label: "Last 30 Days" },
    { value: "90", label: "Last 90 Days" },
];

// Curated list of platforms
const DISPLAY_PLATFORMS = [
    // "google-official",
    // "bing-serp",
    "perplexity-sonar",
    "chatgpt",
    "gemini-1.5-flash",
    // "claude-3-5-sonnet",
    // "deepseek-chat",
    // "grok-beta"
];

// Default locations
const DISPLAY_LOCATIONS = [
    "United States",
    "United Kingdom",
    "Canada",
    "Australia",
    "Germany",
    "France",
    "Japan"
];

export interface MultiSelectFilterOptions {
    citations?: string[];
    prompts?: string[];
    topics?: string[];
    platforms?: string[];
    timeRange?: string;
    location?: string[];
}

interface TopicOption {
    label: string;
    value: string;
}

interface MultiSelectFiltersProps {
    filters: MultiSelectFilterOptions;
    onChange: (filters: MultiSelectFilterOptions) => void;
    topics?: TopicOption[];
    availableCitations?: Array<{ value: string; label: string; icon?: string; color?: string }>;
    availablePrompts?: Array<{ value: string; label: string }>;
    availablePlatforms?: string[];
    availableLocations?: Array<string | { value: string; label: string }>;
    visibleFilters?: {
        timeRange?: boolean;
        citations?: boolean;
        prompts?: boolean;
        topics?: boolean;
        platforms?: boolean;
        location?: boolean;
    };
}

export interface FilterPopoverProps {
    active: boolean;
    onToggle: () => void;
    activator: React.ReactElement;
    title: string;
    searchValue: string;
    onSearchChange: (value: string) => void;
    options: Array<{ value: string; label: string; icon?: React.ReactNode; prefix?: React.ReactNode; showInfoIcon?: boolean; category?: string }>;
    selectedValues: string[];
    onToggleValue: (value: string) => void;
    onSelectAll: () => void;
    allSelected: boolean;
    showOnlyButton?: boolean;
    onOnlyClick?: (value: string) => void;
    hideSelectAll?: boolean;
    singleSelect?: boolean;
    hideSearch?: boolean;
    grouped?: boolean;
}

export function FilterPopover({
    active,
    onToggle,
    activator,
    title,
    searchValue,
    onSearchChange,
    options,
    selectedValues,
    onToggleValue,
    onSelectAll,
    allSelected,
    showOnlyButton = false,
    onOnlyClick,
    hideSelectAll = false,
    singleSelect = false,
    hideSearch = false,
    grouped = false,
}: FilterPopoverProps) {
    const [hoveredOption, setHoveredOption] = useState<string | null>(null);

    const filteredOptions = useMemo(() => {
        if (!searchValue) return options;
        const regex = new RegExp(searchValue.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'i');
        return options.filter(opt => regex.test(opt.label));
    }, [options, searchValue]);

    // Group options by category if grouped is true
    const groupedOptions = useMemo(() => {
        if (!grouped) return null;
        const groups: Record<string, typeof filteredOptions> = {};
        filteredOptions.forEach(opt => {
            const category = opt.category || 'Other';
            if (!groups[category]) {
                groups[category] = [];
            }
            groups[category].push(opt);
        });
        return groups;
    }, [filteredOptions, grouped]);

    // Category display names
    const categoryLabels: Record<string, string> = {
        // 'Search': 'Search',
        'Hybrid': 'Hybrid (Search + AI)',
        // 'Knowledge': 'Knowledge Models (Training Data)',
    };

    return (
        <Popover
            active={active}
            activator={activator}
            onClose={onToggle}
            preferredAlignment="left"
        >
            <div style={{
                minWidth: '280px',
                maxWidth: '320px',
                backgroundColor: '#ffffff',
                borderRadius: '8px',
                boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
            }}>
                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    maxHeight: '400px',
                    overflowY: 'auto',
                }}>
                    {/* Search Bar */}
                    {!hideSearch && (
                        <div style={{ padding: '8px 12px' }}>
                            <TextField
                                label=""
                                labelHidden
                                value={searchValue}
                                onChange={onSearchChange}
                                placeholder="Search"
                                prefix={<Icon source={SearchIcon} />}
                                autoComplete="off"
                            />
                        </div>
                    )}

                    {/* Select All */}
                    {!hideSelectAll && (
                        <div
                            style={{
                                padding: '8px 12px',
                                borderBottom: '1px solid #e1e3e5',
                                cursor: 'pointer',
                                display: 'flex',
                                alignItems: 'center',
                            }}
                            onClick={onSelectAll}
                            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#f7f8fa'}
                            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
                        >
                            <Checkbox
                                label="Select all"
                                checked={allSelected}
                                onChange={() => { }} // Handled by onClick on parent div
                            />
                        </div>
                    )}

                    {/* Options List */}
                    {grouped && groupedOptions ? (
                        // Render grouped options with category headers
                        Object.entries(groupedOptions).map(([category, categoryOptions], categoryIndex) => {
                            const isLastCategory = categoryIndex === Object.keys(groupedOptions).length - 1;
                            return (
                                <div key={category}>
                                    {/* Category Header */}
                                    <div style={{
                                        padding: '8px 12px',
                                        backgroundColor: '#f7f8fa',
                                        borderTop: categoryIndex > 0 ? '1px solid #e1e3e5' : 'none',
                                        borderBottom: '1px solid #e1e3e5',
                                    }}>
                                        <Text as="span" variant="bodySm" fontWeight="semibold" tone="subdued">
                                            {categoryLabels[category] || category}
                                        </Text>
                                    </div>
                                    {/* Category Options */}
                                    {categoryOptions.map((option, index) => {
                                        const isSelected = singleSelect
                                            ? selectedValues[0] === option.value
                                            : allSelected || selectedValues.includes(option.value);
                                        const isLast = index === categoryOptions.length - 1 && isLastCategory;
                                        const isHovered = hoveredOption === option.value;
                                        const shouldShowOnlyButton = showOnlyButton && onOnlyClick && isHovered && !singleSelect;
                                        return (
                                            <div
                                                key={option.value}
                                                style={{
                                                    padding: '8px 12px',
                                                    cursor: 'pointer',
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    borderBottom: isLast ? 'none' : '1px solid transparent',
                                                    backgroundColor: isSelected && singleSelect ? '#f0f9ff' : 'transparent',
                                                }}
                                                onClick={(e) => {
                                                    if (singleSelect) {
                                                        e.preventDefault();
                                                        e.stopPropagation();
                                                        onToggleValue(option.value);
                                                        setTimeout(() => {
                                                            onToggle();
                                                        }, 0);
                                                    } else {
                                                        onToggleValue(option.value);
                                                    }
                                                }}
                                                onMouseEnter={(e) => {
                                                    if (!isSelected || !singleSelect) {
                                                        e.currentTarget.style.backgroundColor = '#f7f8fa';
                                                    }
                                                    setHoveredOption(option.value);
                                                }}
                                                onMouseLeave={(e) => {
                                                    if (isSelected && singleSelect) {
                                                        e.currentTarget.style.backgroundColor = '#f0f9ff';
                                                    } else {
                                                        e.currentTarget.style.backgroundColor = 'transparent';
                                                    }
                                                    setHoveredOption(null);
                                                }}
                                            >
                                                {!singleSelect && (
                                                    <div
                                                        onClick={(e) => {
                                                            e.stopPropagation();
                                                            onToggleValue(option.value);
                                                        }}
                                                        style={{
                                                            display: 'flex',
                                                            alignItems: 'center',
                                                            flexShrink: 0,
                                                        }}
                                                    >
                                                        <Checkbox
                                                            label=""
                                                            checked={isSelected}
                                                            onChange={() => { }}
                                                        />
                                                    </div>
                                                )}
                                                {option.icon && (
                                                    <div
                                                        style={{
                                                            width: '16px',
                                                            height: '16px',
                                                            display: 'flex',
                                                            alignItems: 'center',
                                                            justifyContent: 'center',
                                                            marginRight: '8px',
                                                            flexShrink: 0,
                                                        }}
                                                    >
                                                        {option.icon}
                                                    </div>
                                                )}
                                                {option.prefix && (
                                                    <div
                                                        style={{
                                                            display: 'flex',
                                                            alignItems: 'center',
                                                            flexShrink: 0,
                                                        }}
                                                    >
                                                        {option.prefix}
                                                    </div>
                                                )}
                                                <span
                                                    style={{
                                                        flex: 1,
                                                        cursor: 'pointer',
                                                        minWidth: 0,
                                                    }}
                                                >
                                                    <Text as="span" variant="bodyMd">
                                                        {option.label}
                                                    </Text>
                                                </span>
                                                {option.showInfoIcon && (
                                                    <div style={{
                                                        marginLeft: '4px',
                                                        display: 'flex',
                                                        alignItems: 'center',
                                                        flexShrink: 0,
                                                    }}>
                                                        <Icon source={InfoIcon} tone="subdued" />
                                                    </div>
                                                )}
                                                {shouldShowOnlyButton && (
                                                    <button
                                                        onClick={(e) => {
                                                            e.stopPropagation();
                                                            onOnlyClick(option.value);
                                                        }}
                                                        style={{
                                                            padding: '2px 8px',
                                                            fontSize: '12px',
                                                            fontWeight: '400',
                                                            color: '#202223',
                                                            backgroundColor: 'transparent',
                                                            border: '1px solid #e1e3e5',
                                                            borderRadius: '4px',
                                                            cursor: 'pointer',
                                                            flexShrink: 0,
                                                            marginLeft: 'auto',
                                                            whiteSpace: 'nowrap',
                                                        }}
                                                        onMouseEnter={(e) => {
                                                            e.currentTarget.style.backgroundColor = '#f1f2f4';
                                                        }}
                                                        onMouseLeave={(e) => {
                                                            e.currentTarget.style.backgroundColor = 'transparent';
                                                        }}
                                                    >
                                                        only
                                                    </button>
                                                )}
                                            </div>
                                        );
                                    })}
                                </div>
                            );
                        })
                    ) : (
                        // Render flat list (original behavior)
                        filteredOptions.map((option, index) => {
                            const isSelected = singleSelect
                                ? selectedValues[0] === option.value
                                : allSelected || selectedValues.includes(option.value);
                            const isLast = index === filteredOptions.length - 1;
                            const isHovered = hoveredOption === option.value;
                            const shouldShowOnlyButton = showOnlyButton && onOnlyClick && isHovered && !singleSelect;
                            return (
                                <div
                                    key={option.value}
                                    style={{
                                        padding: '8px 12px',
                                        cursor: 'pointer',
                                        display: 'flex',
                                        alignItems: 'center',
                                        borderBottom: isLast ? 'none' : '1px solid transparent',
                                        backgroundColor: isSelected && singleSelect ? '#f0f9ff' : 'transparent',
                                    }}
                                    onClick={(e) => {
                                        if (singleSelect) {
                                            e.preventDefault();
                                            e.stopPropagation();
                                            onToggleValue(option.value);
                                            setTimeout(() => {
                                                onToggle();
                                            }, 0);
                                        } else {
                                            onToggleValue(option.value);
                                        }
                                    }}
                                    onMouseEnter={(e) => {
                                        if (!isSelected || !singleSelect) {
                                            e.currentTarget.style.backgroundColor = '#f7f8fa';
                                        }
                                        setHoveredOption(option.value);
                                    }}
                                    onMouseLeave={(e) => {
                                        if (isSelected && singleSelect) {
                                            e.currentTarget.style.backgroundColor = '#f0f9ff';
                                        } else {
                                            e.currentTarget.style.backgroundColor = 'transparent';
                                        }
                                        setHoveredOption(null);
                                    }}
                                >
                                    {!singleSelect && (
                                        <div
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                onToggleValue(option.value);
                                            }}
                                            style={{
                                                display: 'flex',
                                                alignItems: 'center',
                                                flexShrink: 0,
                                            }}
                                        >
                                            <Checkbox
                                                label=""
                                                checked={isSelected}
                                                onChange={() => { }}
                                            />
                                        </div>
                                    )}
                                    {option.icon && (
                                        <div
                                            style={{
                                                width: '16px',
                                                height: '16px',
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                marginRight: '8px',
                                                flexShrink: 0,
                                            }}
                                        >
                                            {option.icon}
                                        </div>
                                    )}
                                    {option.prefix && (
                                        <div
                                            style={{
                                                display: 'flex',
                                                alignItems: 'center',
                                                flexShrink: 0,
                                            }}
                                        >
                                            {option.prefix}
                                        </div>
                                    )}
                                    <span
                                        style={{
                                            flex: 1,
                                            cursor: 'pointer',
                                            minWidth: 0,
                                        }}
                                    >
                                        <Text as="span" variant="bodyMd">
                                            {option.label}
                                        </Text>
                                    </span>
                                    {option.showInfoIcon && (
                                        <div style={{
                                            marginLeft: '4px',
                                            display: 'flex',
                                            alignItems: 'center',
                                            flexShrink: 0,
                                        }}>
                                            <Icon source={InfoIcon} tone="subdued" />
                                        </div>
                                    )}
                                    {shouldShowOnlyButton && (
                                        <button
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                onOnlyClick(option.value);
                                            }}
                                            style={{
                                                padding: '2px 8px',
                                                fontSize: '12px',
                                                fontWeight: '400',
                                                color: '#202223',
                                                backgroundColor: 'transparent',
                                                border: '1px solid #e1e3e5',
                                                borderRadius: '4px',
                                                cursor: 'pointer',
                                                flexShrink: 0,
                                                marginLeft: 'auto',
                                                whiteSpace: 'nowrap',
                                            }}
                                            onMouseEnter={(e) => {
                                                e.currentTarget.style.backgroundColor = '#f1f2f4';
                                            }}
                                            onMouseLeave={(e) => {
                                                e.currentTarget.style.backgroundColor = 'transparent';
                                            }}
                                        >
                                            only
                                        </button>
                                    )}
                                </div>
                            );
                        })
                    )}
                </div>
            </div>
        </Popover>
    );
}

export function MultiSelectFilters({
    filters,
    onChange,
    topics = [],
    availableCitations,
    availablePrompts,
    availablePlatforms,
    availableLocations,
    visibleFilters = {
        timeRange: true,
        citations: true,
        prompts: true,
        topics: true,
        platforms: true,
        location: true,
    },
}: MultiSelectFiltersProps) {
    // State for popover visibility
    const [citationsPopoverActive, setCitationsPopoverActive] = useState(false);
    const [promptsPopoverActive, setPromptsPopoverActive] = useState(false);
    const [topicsPopoverActive, setTopicsPopoverActive] = useState(false);
    const [platformsPopoverActive, setPlatformsPopoverActive] = useState(false);
    const [locationPopoverActive, setLocationPopoverActive] = useState(false);
    const [timeRangePopoverActive, setTimeRangePopoverActive] = useState(false);

    // State for search values
    const [citationsSearch, setCitationsSearch] = useState('');
    const [promptsSearch, setPromptsSearch] = useState('');
    const [topicsSearch, setTopicsSearch] = useState('');
    const [platformsSearch, setPlatformsSearch] = useState('');
    const [locationSearch, setLocationSearch] = useState('');
    const [timeRangeSearch, setTimeRangeSearch] = useState('');

    // Use available data or fallback to hardcoded
    const citationOptions = useMemo(() => {
        if (availableCitations && availableCitations.length > 0) {
            return availableCitations.map(c => {
                const defaultType = CITATION_TYPES.find(ct => ct.value === c.value);
                return {
                    value: c.value,
                    label: c.label,
                    icon: c.icon ? (
                        <CitationIcon color={c.color || defaultType?.color || "#000"} icon={c.icon} />
                    ) : defaultType ? (
                        <CitationIcon color={defaultType.color} icon={defaultType.icon} />
                    ) : undefined,
                    color: c.color || defaultType?.color,
                };
            });
        }
        return CITATION_TYPES.map(c => ({
            value: c.value,
            label: c.label,
            icon: <CitationIcon color={c.color} icon={c.icon} />,
            color: c.color,
        }));
    }, [availableCitations]);

    const promptOptions = useMemo(() => {
        if (availablePrompts && availablePrompts.length > 0) {
            return availablePrompts;
        }
        return PROMPT_TYPES;
    }, [availablePrompts]);

    const topicOptions = useMemo(() => {
        return topics.length > 0 ? topics : [];
    }, [topics]);

    const platformOptions = useMemo(() => {
        // If specific platforms are requested, map them
        if (availablePlatforms && availablePlatforms.length > 0) {
            return availablePlatforms.map(key => {
                // Try to find in AVAILABLE_MODELS first for rich info including category/type
                const model = AVAILABLE_MODELS.find(m => m.id === key);
                if (model) {
                    return {
                        value: model.id,
                        label: model.label,
                        prefix: (
                            <img
                                src={model.logo}
                                alt={model.label}
                                style={{ width: "16px", height: "16px", borderRadius: "3px", objectFit: "contain", marginRight: '8px' }}
                            />
                        ),
                        showInfoIcon: model.id === "chatgpt-search" || model.id === "chatgpt",
                        category: model.type || 'Other',
                    };
                }

                // Fallback to PLATFORMS lookup
                const platform = PLATFORMS[key];
                if (platform) {
                    return {
                        value: key,
                        label: platform.name,
                        prefix: (
                            <img
                                src={platform.logo}
                                alt={platform.name}
                                style={{ width: "16px", height: "16px", borderRadius: "3px", objectFit: "contain", marginRight: '8px' }}
                            />
                        ),
                        showInfoIcon: key === "chatgpt",
                        category: 'Other',
                    };
                }
                return null;
            }).filter(Boolean) as Array<{ value: string; label: string; prefix: React.ReactNode; showInfoIcon?: boolean; category?: string }>;
        }

        // Default: Use ALL available models from platforms.ts
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
    }, [availablePlatforms]);

    const locationOptions = useMemo(() => {
        if (!availableLocations || availableLocations.length === 0) {
            return DISPLAY_LOCATIONS.map(loc => ({
                value: loc,
                label: loc
            }));
        }

        return availableLocations.map(loc => {
            if (typeof loc === 'string') {
                return { value: loc, label: loc };
            }
            return loc;
        });
    }, [availableLocations]);

    // Initialize defaults if filters are empty/undefined (only on mount)
    useEffect(() => {
        const updates: Partial<MultiSelectFilterOptions> = {};
        let hasUpdates = false;

        // Time Range: if not set, default to first option
        if (!filters.timeRange && TIME_RANGE_OPTIONS.length > 0) {
            updates.timeRange = TIME_RANGE_OPTIONS[0].value;
            hasUpdates = true;
        }

        // Multi-select filters: if undefined (not empty array), default to "select all" (empty array = all selected)
        // Empty array already means "select all", so we only initialize if undefined
        if (filters.citations === undefined && visibleFilters.citations) {
            updates.citations = [];
            hasUpdates = true;
        }
        if (filters.prompts === undefined && visibleFilters.prompts) {
            updates.prompts = [];
            hasUpdates = true;
        }
        if (filters.topics === undefined && visibleFilters.topics) {
            updates.topics = [];
            hasUpdates = true;
        }
        if (filters.platforms === undefined && visibleFilters.platforms) {
            updates.platforms = [];
            hasUpdates = true;
        }
        if (filters.location === undefined && visibleFilters.location) {
            updates.location = [];
            hasUpdates = true;
        }

        // Apply updates if any (only on initial mount)
        if (hasUpdates) {
            onChange({ ...filters, ...updates });
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []); // Only run on mount

    // Get selected values
    const selectedCitations = filters.citations || [];
    const selectedPrompts = filters.prompts || [];
    const selectedTopics = filters.topics || [];
    const selectedPlatforms = filters.platforms || [];
    const selectedLocations = filters.location || [];
    const selectedTimeRange = filters.timeRange ? [filters.timeRange] : [];

    // Check if all selected (empty array means all selected for multi-select)
    const allCitationsSelected = citationOptions.length > 0 &&
        (selectedCitations.length === 0 || selectedCitations.length === citationOptions.length);
    const allPromptsSelected = promptOptions.length > 0 &&
        (selectedPrompts.length === 0 || selectedPrompts.length === promptOptions.length);
    const allTopicsSelected = topicOptions.length > 0 &&
        (selectedTopics.length === 0 || selectedTopics.length === topicOptions.length);
    const allPlatformsSelected = platformOptions.length > 0 &&
        (selectedPlatforms.length === 0 || selectedPlatforms.length === platformOptions.length);
    const allLocationsSelected = locationOptions.length > 0 &&
        (selectedLocations.length === 0 || selectedLocations.length === locationOptions.length);

    // Toggle handlers
    const toggleCitationsPopover = useCallback(() => {
        setCitationsPopoverActive(prev => !prev);
        if (citationsPopoverActive) setCitationsSearch('');
    }, [citationsPopoverActive]);

    const togglePromptsPopover = useCallback(() => {
        setPromptsPopoverActive(prev => !prev);
        if (promptsPopoverActive) setPromptsSearch('');
    }, [promptsPopoverActive]);

    const toggleTopicsPopover = useCallback(() => {
        setTopicsPopoverActive(prev => !prev);
        if (topicsPopoverActive) setTopicsSearch('');
    }, [topicsPopoverActive]);

    const togglePlatformsPopover = useCallback(() => {
        setPlatformsPopoverActive(prev => !prev);
        if (platformsPopoverActive) setPlatformsSearch('');
    }, [platformsPopoverActive]);

    const toggleLocationPopover = useCallback(() => {
        setLocationPopoverActive(prev => !prev);
        if (locationPopoverActive) setLocationSearch('');
    }, [locationPopoverActive]);

    const toggleTimeRangePopover = useCallback(() => {
        setTimeRangePopoverActive(prev => !prev);
        if (timeRangePopoverActive) setTimeRangeSearch('');
    }, [timeRangePopoverActive]);

    // Value toggle handlers
    const toggleCitation = useCallback((value: string) => {
        const current = selectedCitations;
        const newCitations = current.includes(value)
            ? current.filter(v => v !== value)
            : [...current, value];
        onChange({ ...filters, citations: newCitations });
    }, [filters, onChange, selectedCitations]);

    const togglePrompt = useCallback((value: string) => {
        const current = selectedPrompts;
        const newPrompts = current.includes(value)
            ? current.filter(v => v !== value)
            : [...current, value];
        onChange({ ...filters, prompts: newPrompts });
    }, [filters, onChange, selectedPrompts]);

    const toggleTopic = useCallback((value: string) => {
        const current = selectedTopics;
        const newTopics = current.includes(value)
            ? current.filter(v => v !== value)
            : [...current, value];
        onChange({ ...filters, topics: newTopics });
    }, [filters, onChange, selectedTopics]);

    const togglePlatform = useCallback((value: string) => {
        const current = selectedPlatforms;
        const newPlatforms = current.includes(value)
            ? current.filter(v => v !== value)
            : [...current, value];
        onChange({ ...filters, platforms: newPlatforms });
    }, [filters, onChange, selectedPlatforms]);

    const toggleLocation = useCallback((value: string) => {
        const current = selectedLocations;
        const newLocations = current.includes(value)
            ? current.filter(v => v !== value)
            : [...current, value];
        onChange({ ...filters, location: newLocations });
    }, [filters, onChange, selectedLocations]);

    const toggleTimeRange = useCallback((value: string) => {
        // Single select: always set the value (allow re-selecting the same option)
        onChange({ ...filters, timeRange: value });
    }, [filters, onChange]);

    // Only button handlers - select only this option
    const handleCitationOnly = useCallback((value: string) => {
        onChange({ ...filters, citations: [value] });
    }, [filters, onChange]);

    const handlePromptOnly = useCallback((value: string) => {
        onChange({ ...filters, prompts: [value] });
    }, [filters, onChange]);

    const handleTopicOnly = useCallback((value: string) => {
        onChange({ ...filters, topics: [value] });
    }, [filters, onChange]);

    const handlePlatformOnly = useCallback((value: string) => {
        onChange({ ...filters, platforms: [value] });
    }, [filters, onChange]);

    const handleLocationOnly = useCallback((value: string) => {
        onChange({ ...filters, location: [value] });
    }, [filters, onChange]);


    // Select all handlers
    // Note: Empty array means "select all" by default
    // When user explicitly unchecks "select all", we keep it as empty array (which still means all selected)
    // This maintains the default behavior where empty = all selected
    const selectAllCitations = useCallback(() => {
        if (allCitationsSelected) {
            // If all selected, clicking "select all" keeps it as empty array (default "all selected" state)
            onChange({ ...filters, citations: [] });
        } else {
            // If not all selected, set to all values explicitly
            onChange({ ...filters, citations: citationOptions.map(c => c.value) });
        }
    }, [filters, onChange, allCitationsSelected, citationOptions]);

    const selectAllPrompts = useCallback(() => {
        if (allPromptsSelected) {
            onChange({ ...filters, prompts: [] });
        } else {
            onChange({ ...filters, prompts: promptOptions.map(p => p.value) });
        }
    }, [filters, onChange, allPromptsSelected, promptOptions]);

    const selectAllTopics = useCallback(() => {
        if (allTopicsSelected) {
            onChange({ ...filters, topics: [] });
        } else {
            onChange({ ...filters, topics: topicOptions.map(t => t.value) });
        }
    }, [filters, onChange, allTopicsSelected, topicOptions]);

    const selectAllPlatforms = useCallback(() => {
        if (allPlatformsSelected) {
            onChange({ ...filters, platforms: [] });
        } else {
            onChange({ ...filters, platforms: platformOptions.map(p => p.value) });
        }
    }, [filters, onChange, allPlatformsSelected, platformOptions]);

    const selectAllLocations = useCallback(() => {
        if (allLocationsSelected) {
            onChange({ ...filters, location: [] });
        } else {
            onChange({ ...filters, location: locationOptions.map(l => l.value) });
        }
    }, [filters, onChange, allLocationsSelected, locationOptions]);


    // Button labels
    // Empty array means "select all" for multi-select filters
    const citationsLabel = (selectedCitations.length === 0 || selectedCitations.length === citationOptions.length)
        ? "All Citations"
        : `${selectedCitations.length} Citations`;

    const promptsLabel = (selectedPrompts.length === 0 || selectedPrompts.length === promptOptions.length)
        ? "All Prompts"
        : `${selectedPrompts.length} Prompts`;

    const topicsLabel = (selectedTopics.length === 0 || selectedTopics.length === topicOptions.length)
        ? "All Topics"
        : `${selectedTopics.length} Topics`;

    const platformsLabel = (selectedPlatforms.length === 0 || selectedPlatforms.length === platformOptions.length)
        ? "All Platforms"
        : `${selectedPlatforms.length} Platforms`;

    const locationsLabel = (selectedLocations.length === 0 || selectedLocations.length === locationOptions.length)
        ? "All Locations"
        : `${selectedLocations.length} Locations`;

    const timeRangeLabel = filters.timeRange
        ? TIME_RANGE_OPTIONS.find(t => t.value === filters.timeRange)?.label || "Time Range"
        : "Time Range";

    // Activators
    const citationsActivator = (
        <Button onClick={toggleCitationsPopover} icon={LinkIcon} disclosure>
            {citationsLabel}
        </Button>
    );

    const promptsActivator = (
        <Button onClick={togglePromptsPopover} icon={ChatIcon} disclosure>
            {promptsLabel}
        </Button>
    );

    const topicsActivator = (
        <Button onClick={toggleTopicsPopover} icon={HashtagIcon} disclosure>
            {topicsLabel}
        </Button>
    );

    const platformsActivator = (
        <Button onClick={togglePlatformsPopover} icon={GlobeIcon} disclosure>
            {platformsLabel}
        </Button>
    );

    const locationsActivator = (
        <Button onClick={toggleLocationPopover} icon={LocationIcon} disclosure>
            {locationsLabel}
        </Button>
    );

    const timeRangeActivator = (
        <Button onClick={toggleTimeRangePopover} icon={CalendarIcon} disclosure>
            {timeRangeLabel}
        </Button>
    );

    return (
        <div style={{
            backgroundColor: "var(--p-color-bg-surface)",
            borderRadius: "var(--p-border-radius-300, 8px)",
            padding: "12px",
            boxShadow: "var(--p-shadow-100)",
            border: "1px solid var(--p-color-border-subdued)",
        }}>
            <InlineStack align="space-between" blockAlign="center">
                {/* Left Side: Time Range */}
                {visibleFilters.timeRange && (
                    <InlineStack gap="300">
                        <FilterPopover
                            active={timeRangePopoverActive}
                            onToggle={toggleTimeRangePopover}
                            activator={timeRangeActivator}
                            title="Time Range"
                            searchValue={timeRangeSearch}
                            onSearchChange={setTimeRangeSearch}
                            options={TIME_RANGE_OPTIONS}
                            selectedValues={selectedTimeRange}
                            onToggleValue={toggleTimeRange}
                            onSelectAll={() => { }}
                            allSelected={false}
                            hideSelectAll={true}
                            singleSelect={true}
                            hideSearch={true}
                        />
                    </InlineStack>
                )}
                {/* Right Side: Other Filters */}
                <InlineStack gap="300">
                    {visibleFilters.topics && topicOptions.length > 0 && (
                        <FilterPopover
                            active={topicsPopoverActive}
                            onToggle={toggleTopicsPopover}
                            activator={topicsActivator}
                            title="Topics"
                            searchValue={topicsSearch}
                            onSearchChange={setTopicsSearch}
                            options={topicOptions}
                            selectedValues={selectedTopics}
                            onToggleValue={toggleTopic}
                            onSelectAll={selectAllTopics}
                            allSelected={allTopicsSelected}
                            showOnlyButton={true}
                            onOnlyClick={handleTopicOnly}
                        />
                    )}
                    {visibleFilters.platforms && (
                        <FilterPopover
                            active={platformsPopoverActive}
                            onToggle={togglePlatformsPopover}
                            activator={platformsActivator}
                            title="Platforms"
                            searchValue={platformsSearch}
                            onSearchChange={setPlatformsSearch}
                            options={platformOptions}
                            selectedValues={selectedPlatforms}
                            onToggleValue={togglePlatform}
                            onSelectAll={selectAllPlatforms}
                            allSelected={allPlatformsSelected}
                            showOnlyButton={true}
                            onOnlyClick={handlePlatformOnly}
                            grouped={true}
                        />
                    )}
                    {visibleFilters.location && (
                        <FilterPopover
                            active={locationPopoverActive}
                            onToggle={toggleLocationPopover}
                            activator={locationsActivator}
                            title="Locations"
                            searchValue={locationSearch}
                            onSearchChange={setLocationSearch}
                            options={locationOptions}
                            selectedValues={selectedLocations}
                            onToggleValue={toggleLocation}
                            onSelectAll={selectAllLocations}
                            allSelected={allLocationsSelected}
                            showOnlyButton={true}
                            onOnlyClick={handleLocationOnly}
                        />
                    )}
                    {visibleFilters.citations && (
                        <FilterPopover
                            active={citationsPopoverActive}
                            onToggle={toggleCitationsPopover}
                            activator={citationsActivator}
                            title="Citations"
                            searchValue={citationsSearch}
                            onSearchChange={setCitationsSearch}
                            options={citationOptions.map(c => ({
                                value: c.value,
                                label: c.label,
                                icon: c.icon,
                            }))}
                            selectedValues={selectedCitations}
                            onToggleValue={toggleCitation}
                            onSelectAll={selectAllCitations}
                            allSelected={allCitationsSelected}
                            showOnlyButton={true}
                            onOnlyClick={handleCitationOnly}
                        />
                    )}
                    {visibleFilters.prompts && (
                        <FilterPopover
                            active={promptsPopoverActive}
                            onToggle={togglePromptsPopover}
                            activator={promptsActivator}
                            title="Prompts"
                            searchValue={promptsSearch}
                            onSearchChange={setPromptsSearch}
                            options={promptOptions}
                            selectedValues={selectedPrompts}
                            onToggleValue={togglePrompt}
                            onSelectAll={selectAllPrompts}
                            allSelected={allPromptsSelected}
                            showOnlyButton={true}
                            onOnlyClick={handlePromptOnly}
                        />
                    )}
                </InlineStack>
            </InlineStack>
        </div>
    );
}
