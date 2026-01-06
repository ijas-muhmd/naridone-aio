import { Tabs, Select } from "@shopify/polaris";
import React from "react";

interface MentionsFilterBarProps {
  tabs: any[];
  selectedTab: number;
  handleTabChange: (selectedTabIndex: number) => void;
  sentimentFilter: string;
  setSentimentFilter: (value: string) => void;
  typeFilter: string;
  setTypeFilter: (value: string) => void;
  productFilter: string;
  setProductFilter: (value: string) => void;
  productGroupFilter: string;
  setProductGroupFilter: (value: string) => void;
  products: { label: string; value: string }[];
  productGroups: { id: string; name: string }[];
}

export const MentionsFilterBar = ({
  tabs,
  selectedTab,
  handleTabChange,
  sentimentFilter,
  setSentimentFilter,
  typeFilter,
  setTypeFilter,
  productFilter,
  setProductFilter,
  productGroupFilter,
  setProductGroupFilter,
  products,
  productGroups,
}: MentionsFilterBarProps) => {
  return (
    <div
      style={{
        position: "relative",
        borderBottom: "1px solid #e1e3e5",
      }}
    >
      <div style={{ paddingRight: "450px" }}>
        {" "}
        {/* Reserve space for filters */}
        <Tabs
          tabs={tabs}
          selected={selectedTab}
          onSelect={handleTabChange}
          fitted={false}
        />
      </div>

      {/* Filters positioned in the top right */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          right: "16px",
          transform: "translateY(-50%)",
          display: "flex",
          gap: "8px",
          zIndex: 1,
        }}
      >
        <div style={{ width: "140px" }}>
          <Select
            label="Sentiment"
            labelHidden
            options={[
              { label: "All Sentiments", value: "all" },
              { label: "Positive", value: "positive" },
              { label: "Negative", value: "negative" },
              { label: "Neutral", value: "neutral" },
            ]}
            value={sentimentFilter}
            onChange={setSentimentFilter}
          />
        </div>

        <div style={{ width: "130px" }}>
          <Select
            label="Type"
            labelHidden
            options={[
              { label: "All Types", value: "all" },
              { label: "Brand Specific", value: "brand" },
              { label: "General Market", value: "market" },
            ]}
            value={typeFilter}
            onChange={setTypeFilter}
          />
        </div>

        {products.length > 0 && (
          <div style={{ width: "140px" }}>
            <Select
              label="Product Context"
              labelHidden
              options={[
                { label: "All Products", value: "all" },
                ...products.map((p) => ({
                  label: p.label,
                  value: p.value,
                })),
              ]}
              value={productFilter}
              onChange={(val) => {
                setProductFilter(val);
                if (val !== "all") setProductGroupFilter("all"); // Reset group if product selected
              }}
            />
          </div>
        )}

        {productGroups.length > 0 && (
          <div style={{ width: "150px" }}>
            <Select
              label="Product Group"
              labelHidden
              options={[
                { label: "All Product Groups", value: "all" },
                ...productGroups.map((g) => ({
                  label: g.name,
                  value: g.id,
                })),
              ]}
              value={productGroupFilter}
              onChange={(val) => {
                setProductGroupFilter(val);
                if (val !== "all") setProductFilter("all"); // Reset product if group selected
              }}
            />
          </div>
        )}
      </div>
    </div>
  );
};
