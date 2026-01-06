import { Modal, TextField, IndexTable, Card, useIndexResourceState, Text, Pagination, BlockStack, InlineStack, Icon, EmptyState } from "@shopify/polaris";
import { SearchIcon } from "@shopify/polaris-icons";
import { useState, useMemo, useEffect } from "react";

interface Column {
    title: string;
    alignment?: 'start' | 'center' | 'end';
}

interface ExpandedModalTableProps {
    open: boolean;
    onClose: () => void;
    title: string;
    data: any[];
    resourceName: { singular: string; plural: string };
    columns: Column[];
    renderRow: (item: any, index: number) => React.ReactNode;
    searchPlaceholder?: string;
    filterFunction?: (item: any, searchText: string) => boolean;
    itemsPerPage?: number;
}

export function ExpandedModalTable({
    open,
    onClose,
    title,
    data,
    resourceName,
    columns,
    renderRow,
    searchPlaceholder = "Search...",
    filterFunction,
    itemsPerPage = 20
}: ExpandedModalTableProps) {
    const [searchText, setSearchText] = useState("");
    const [currentPage, setCurrentPage] = useState(1);

    // Reset page when search changes or modal opens
    useEffect(() => {
        if (open) {
            setSearchText("");
            setCurrentPage(1);
        }
    }, [open]);

    useEffect(() => {
        setCurrentPage(1);
    }, [searchText]);

    const filteredData = useMemo(() => {
        if (!searchText) return data;
        if (filterFunction) return data.filter(item => filterFunction(item, searchText));
        
        // Default simplistic filter if none provided
        const lowerSearch = searchText.toLowerCase();
        return data.filter(item => 
            Object.values(item).some(val => 
                String(val).toLowerCase().includes(lowerSearch)
            )
        );
    }, [data, searchText, filterFunction]);

    const totalItems = filteredData.length;
    const totalPages = Math.ceil(totalItems / itemsPerPage);
    
    const currentItems = useMemo(() => {
        const start = (currentPage - 1) * itemsPerPage;
        return filteredData.slice(start, start + itemsPerPage);
    }, [filteredData, currentPage, itemsPerPage]);

    const { selectedResources, allResourcesSelected, handleSelectionChange } = useIndexResourceState(currentItems);

    const handleNext = () => {
        if (currentPage < totalPages) setCurrentPage(p => p + 1);
    };

    const handlePrevious = () => {
        if (currentPage > 1) setCurrentPage(p => p - 1);
    };

    return (
        <Modal
            open={open}
            onClose={onClose}
            title={title}
            large
        >
            <Modal.Section>
                <BlockStack gap="400">
                    <TextField
                        label="Search"
                        labelHidden
                        value={searchText}
                        onChange={setSearchText}
                        placeholder={searchPlaceholder}
                        prefix={<Icon source={SearchIcon} />}
                        autoComplete="off"
                        clearButton
                        onClearButtonClick={() => setSearchText("")}
                    />

                    <Card padding="0">
                        {currentItems.length > 0 ? (
                            <IndexTable
                                resourceName={resourceName}
                                itemCount={totalItems}
                                selectedItemsCount={allResourcesSelected ? "All" : selectedResources.length}
                                onSelectionChange={handleSelectionChange}
                                headings={columns}
                                selectable={false}
                            >
                                {currentItems.map((item, index) => (
                                    <div key={item.id || index} style={{ display: 'contents' }}>
                                        {renderRow(item, index)}
                                    </div>
                                ))}
                            </IndexTable>
                        ) : (
                            <div style={{ padding: '32px', textAlign: 'center' }}>
                                <Text as="p" variant="bodyMd" tone="subdued">No results found</Text>
                            </div>
                        )}
                    </Card>

                    {totalPages > 1 && (
                        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '16px' }}>
                            <Pagination
                                hasPrevious={currentPage > 1}
                                onPrevious={handlePrevious}
                                hasNext={currentPage < totalPages}
                                onNext={handleNext}
                                label={`Page ${currentPage} of ${totalPages}`}
                            />
                        </div>
                    )}
                </BlockStack>
            </Modal.Section>
        </Modal>
    );
}

