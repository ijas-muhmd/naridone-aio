import { Icon, Text, Button } from "@shopify/polaris";
import { ChevronUpIcon, ChevronDownIcon } from "@shopify/polaris-icons";
import { useState, useEffect, useRef } from "react";
import type { IconSource } from "@shopify/polaris";

interface ViewOption {
    value: string;
    label: string;
    icon: IconSource;
}

interface ViewConfigButtonProps {
    label: string;
    icon?: IconSource;
    options: ViewOption[];
    selectedValue: string;
    onSelect: (value: string) => void;
}

export function ViewConfigButton({ label, icon, options, selectedValue, onSelect }: ViewConfigButtonProps) {
    const [showOptions, setShowOptions] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);

    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
                setShowOptions(false);
            }
        };

        if (showOptions) {
            document.addEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [showOptions]);

    const selectedOption = options.find(opt => opt.value === selectedValue);

    return (
        <div ref={containerRef} style={{ position: 'relative' }}>
            <Button
                // icon={showOptions ? ChevronUpIcon : ChevronDownIcon}
                onClick={() => setShowOptions(!showOptions)}
                disclosure>
                {label}
            </Button>

            {showOptions && (
                <div style={{
                    position: 'absolute',
                    top: '100%',
                    left: 0,
                    marginTop: '8px',
                    backgroundColor: '#ffffff',
                    border: '1px solid #e5e7eb',
                    borderRadius: '12px',
                    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
                    padding: '16px',
                    zIndex: 1000,
                    minWidth: '280px',
                }}>
                    <div style={{ display: 'flex', gap: '12px' }}>
                        {options.map((option) => {
                            const isSelected = selectedValue === option.value;
                            return (
                                <button
                                    key={option.value}
                                    onClick={() => {
                                        onSelect(option.value);
                                        setShowOptions(false);
                                    }}
                                    style={{
                                        display: 'flex',
                                        flexDirection: 'column',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        padding: '16px 24px',
                                        flex: 1,
                                        border: isSelected ? '2px solid #000000' : '1px solid #e5e7eb',
                                        borderRadius: '8px',
                                        backgroundColor: '#ffffff',
                                        cursor: 'pointer',
                                        transition: 'all 0.2s ease',
                                        gap: '8px',
                                    }}
                                    onMouseEnter={(e) => {
                                        if (!isSelected) {
                                            e.currentTarget.style.borderColor = '#d1d5db';
                                        }
                                    }}
                                    onMouseLeave={(e) => {
                                        if (!isSelected) {
                                            e.currentTarget.style.borderColor = '#e5e7eb';
                                        }
                                    }}
                                >
                                    <div style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        fontSize: '28px',
                                        color: isSelected ? '#000000' : '#6b7280'
                                    }}>
                                        <Icon source={option.icon} tone={isSelected ? 'base' : 'subdued'} />
                                    </div>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                                        <Text variant="bodyMd" fontWeight={isSelected ? 'semibold' : 'regular'} as="span">
                                            {option.label}
                                        </Text>
                                    </div>
                                </button>
                            );
                        })}
                    </div>
                </div>
            )}
        </div>
    );
}

