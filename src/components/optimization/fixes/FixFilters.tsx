import {
  InlineStack,
  Popover,
  ActionList,
  Button,
  Text,
  Icon,
  Combobox,
  Listbox,
} from "@shopify/polaris";
import { useState, useCallback, useMemo } from "react";
import {
  SearchIcon,
  FilterIcon,
  SortIcon,
  AlertCircleIcon,
} from "@shopify/polaris-icons";

export interface FixFilterOptions {
  product: string;
  status: string;
  type: string;
  priority: string;
}

interface ProductOption {
  label: string;
  value: string;
  image?: string | null;
}

interface FixFiltersProps {
  filters: FixFilterOptions;
  onChange: (filters: FixFilterOptions) => void;
  products?: ProductOption[];
}

export function FixFilters({
  filters,
  onChange,
  products = [],
}: FixFiltersProps) {
  const [statusPopoverActive, setStatusPopoverActive] = useState(false);
  const [typePopoverActive, setTypePopoverActive] = useState(false);
  const [priorityPopoverActive, setPriorityPopoverActive] = useState(false);

  const [productComboboxValue, setProductComboboxValue] = useState("");
  const [isProductListOpen, setIsProductListOpen] = useState(false);

  const toggleStatusPopover = useCallback(
    () => setStatusPopoverActive((active) => !active),
    [],
  );
  const toggleTypePopover = useCallback(
    () => setTypePopoverActive((active) => !active),
    [],
  );
  const togglePriorityPopover = useCallback(
    () => setPriorityPopoverActive((active) => !active),
    [],
  );

  const handleStatusChange = useCallback(
    (value: string) => {
      onChange({ ...filters, status: value });
      setStatusPopoverActive(false);
    },
    [filters, onChange],
  );

  const handleTypeChange = useCallback(
    (value: string) => {
      onChange({ ...filters, type: value });
      setTypePopoverActive(false);
    },
    [filters, onChange],
  );

  const handlePriorityChange = useCallback(
    (value: string) => {
      onChange({ ...filters, priority: value });
      setPriorityPopoverActive(false);
    },
    [filters, onChange],
  );

  const statusOptions = [
    { label: "All Statuses", value: "all" },
    { label: "Pending", value: "PENDING" },
    { label: "Suggested", value: "SUGGESTED" },
    { label: "In Review", value: "IN_REVIEW" },
    { label: "Resolved", value: "RESOLVED" },
    { label: "Failed", value: "FAILED" },
  ];

  const typeOptions = [
    { label: "All Types", value: "all" },
    { label: "Missing GTIN", value: "MISSING_GTIN" },
    { label: "Weak Description", value: "WEAK_DESCRIPTION" },
    { label: "Missing Image", value: "MISSING_IMAGE" },
    { label: "No FAQ", value: "NO_FAQ" },
    { label: "Ambiguous Title", value: "AMBIGUOUS_TITLE" },
    { label: "Missing Brand", value: "GLOBAL_MISSING_BRAND" },
    { label: "Competitor Gap", value: "COMPETITOR_GAP" },
    { label: "Negative Sentiment", value: "NEGATIVE_SENTIMENT" },
    { label: "Missed Trend", value: "MISSED_TREND" },
  ];

  const priorityOptions = [
    { label: "All Priorities", value: "all" },
    { label: "High", value: "HIGH" },
    { label: "Medium", value: "MEDIUM" },
    { label: "Low", value: "LOW" },
  ];

  // Product Combobox Logic
  const escapeRegex = (str: string) =>
    str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

  const productOptions = useMemo(() => {
    let options = products;
    if (productComboboxValue) {
      const regex = new RegExp(escapeRegex(productComboboxValue), "i");
      options = products.filter((product) => regex.test(product.label));
    }
    return [{ label: "All Products", value: "all", image: null }, ...options];
  }, [products, productComboboxValue]);

  const updateProductSelection = useCallback(
    (selected: string) => {
      const value = selected === filters.product ? "all" : selected;
      onChange({ ...filters, product: value });
      setProductComboboxValue("");
      setIsProductListOpen(false);
    },
    [filters, onChange],
  );

  const selectedProduct = products.find((p) => p.value === filters.product);
  const selectedProductLabel =
    filters.product === "all"
      ? "All Products"
      : selectedProduct?.label || "Unknown Product";

  const selectedStatusLabel =
    statusOptions.find((o) => o.value === filters.status)?.label ||
    "All Statuses";
  const statusActivator = (
    <Button onClick={toggleStatusPopover} icon={FilterIcon} disclosure>
      {selectedStatusLabel}
    </Button>
  );

  const selectedTypeLabel =
    typeOptions.find((o) => o.value === filters.type)?.label || "All Types";
  const typeActivator = (
    <Button onClick={toggleTypePopover} icon={AlertCircleIcon} disclosure>
      {selectedTypeLabel}
    </Button>
  );

  const selectedPriorityLabel =
    priorityOptions.find((o) => o.value === filters.priority)?.label ||
    "All Priorities";
  const priorityActivator = (
    <Button onClick={togglePriorityPopover} icon={SortIcon} disclosure>
      {selectedPriorityLabel}
    </Button>
  );

  return (
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
            <div
              style={{
                maxHeight: "400px",
                overflowY: "auto",
                display: "flex",
                flexDirection: "column",
                paddingTop: 0,
                marginTop: "-4px",
              }}
            >
              <Listbox onSelect={updateProductSelection}>
                {productOptions.map((option) => {
                  const isSelected = filters.product === option.value;
                  return (
                    <div
                      key={option.value}
                      style={{ borderBottom: "1px solid #f1f2f4" }}
                      onMouseEnter={(e) =>
                        (e.currentTarget.style.backgroundColor = "#f7f8fa")
                      }
                      onMouseLeave={(e) =>
                        (e.currentTarget.style.backgroundColor = "transparent")
                      }
                    >
                      <Listbox.Option
                        value={option.value}
                        selected={isSelected}
                        accessibilityLabel={option.label}
                      >
                        <div
                          style={{
                            display: "grid",
                            gridTemplateColumns: "40px 1fr",
                            gap: "12px",
                            alignItems: "center",
                            padding: "4px 8px",
                          }}
                        >
                          <div
                            style={{
                              width: "40px",
                              height: "40px",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              backgroundColor: "#f1f2f4",
                              borderRadius: "8px",
                              overflow: "hidden",
                              border: "1px solid rgba(0,0,0,0.05)",
                            }}
                          >
                            {option.value !== "all" ? (
                              option.image ? (
                                <img
                                  src={option.image}
                                  alt=""
                                  style={{
                                    width: "100%",
                                    height: "100%",
                                    objectFit: "cover",
                                  }}
                                />
                              ) : (
                                <Icon source={SearchIcon} tone="subdued" />
                              )
                            ) : (
                              <Icon source={SearchIcon} tone="subdued" />
                            )}
                          </div>
                          <Text
                            as="span"
                            variant="bodyMd"
                            fontWeight="medium"
                            truncate
                          >
                            {option.label}
                          </Text>
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

      {/* Right Side: Filter Group */}
      <InlineStack gap="300">
        <Popover
          active={statusPopoverActive}
          activator={statusActivator}
          onClose={toggleStatusPopover}
        >
          <ActionList
            items={statusOptions.map((opt) => ({
              content: opt.label,
              onAction: () => handleStatusChange(opt.value),
              active: filters.status === opt.value,
            }))}
          />
        </Popover>

        <Popover
          active={priorityPopoverActive}
          activator={priorityActivator}
          onClose={togglePriorityPopover}
        >
          <ActionList
            items={priorityOptions.map((opt) => ({
              content: opt.label,
              onAction: () => handlePriorityChange(opt.value),
              active: filters.priority === opt.value,
            }))}
          />
        </Popover>

        <Popover
          active={typePopoverActive}
          activator={typeActivator}
          onClose={toggleTypePopover}
        >
          <ActionList
            items={typeOptions.map((opt) => ({
              content: opt.label,
              onAction: () => handleTypeChange(opt.value),
              active: filters.type === opt.value,
            }))}
          />
        </Popover>
      </InlineStack>
    </InlineStack>
  );
}
