import { IndexTable, Box, Badge, Text } from "@shopify/polaris";
import React from "react";
import { RankBadge } from "./RankBadge";

interface CompetitorsListProps {
  validCompetitors: any[];
  allResourcesSelected: boolean;
  selectedResources: string[];
  handleSelectionChange: any;
  sortDirection: "ascending" | "descending";
  sortSelected: string[];
  onSort: (index: number, direction: "ascending" | "descending") => void;
  sortedCompetitors: any[];
  onSelectCompetitor: (comp: any) => void;
}

export const CompetitorsList = ({
  validCompetitors,
  allResourcesSelected,
  selectedResources,
  handleSelectionChange,
  sortDirection,
  sortSelected,
  onSort,
  sortedCompetitors,
  onSelectCompetitor,
}: CompetitorsListProps) => {
  return (
    <Box padding="0">
      <IndexTable
        resourceName={{ singular: "competitor", plural: "competitors" }}
        itemCount={validCompetitors.length}
        selectedItemsCount={
          allResourcesSelected ? "All" : selectedResources.length
        }
        onSelectionChange={handleSelectionChange}
        headings={[
          { title: "Brand" },
          { title: "Visibility" },
          { title: "Sentiment" },
          { title: "Position" },
        ]}
        sortable={[true, true, true, true]}
        sortDirection={sortDirection}
        sortColumnIndex={["brand", "mentions", "sentiment", "position"].indexOf(
          sortSelected[0],
        )}
        onSort={onSort}
        selectable={false}
      >
        {sortedCompetitors.map((competitor, index) => {
          const isYou = competitor.type === "YOU";
          // Use actual domain from database, but if domain equals name (auto-discovered), construct domain
          let brandDomain = competitor.domain;
          // If domain is missing or equals name, construct it from name
          if (
            !brandDomain ||
            brandDomain === competitor.name ||
            brandDomain.trim() === ""
          ) {
            brandDomain =
              competitor.name.toLowerCase().replace(/[^a-z0-9]/g, "") + ".com";
          }
          // Use competitor name for logo loading (more reliable than constructed domain)
          const logoName = competitor.name
            .toLowerCase()
            .replace(/[^a-z0-9]/g, "");

          return (
            <IndexTable.Row
              id={competitor.id}
              key={competitor.id}
              position={index}
              selected={selectedResources.includes(competitor.id)}
              onClick={() => onSelectCompetitor(competitor)}
            >
              <IndexTable.Cell>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                  }}
                >
                  <div
                    style={{
                      width: "28px",
                      height: "28px",
                      borderRadius: "6px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                      overflow: "hidden",
                    }}
                  >
                    <img
                      src={`https://www.google.com/s2/favicons?domain=${logoName}.com&sz=32`}
                      alt={competitor.name}
                      style={{
                        width: "20px",
                        height: "20px",
                        borderRadius: "4px",
                      }}
                    />
                  </div>
                  <div style={{ display: "flex", flexDirection: "column" }}>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "6px",
                      }}
                    >
                      <span style={{ fontSize: "13px", fontWeight: 600 }}>
                        {competitor.name}
                      </span>
                      {isYou && <Badge tone="info">You</Badge>}
                    </div>
                    <span style={{ fontSize: "12px", color: "#6d7175" }}>
                      {brandDomain}
                    </span>
                  </div>
                </div>
              </IndexTable.Cell>
              <IndexTable.Cell>
                <Text as="span" fontWeight="bold">
                  {competitor.stats?.visibility || 0}%
                </Text>
              </IndexTable.Cell>
              <IndexTable.Cell>
                <div
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "4px",
                    padding: "2px 6px",
                    borderRadius: "12px",
                    backgroundColor:
                      (competitor.stats?.sentiment || 0) >= 50
                        ? "#E4F8F0"
                        : "#FFF4F4",
                    color:
                      (competitor.stats?.sentiment || 0) >= 50
                        ? "#008060"
                        : "#D82C0D",
                    fontSize: "11px",
                    fontWeight: 600,
                    whiteSpace: "nowrap",
                  }}
                >
                  <span>{competitor.stats?.sentiment || 0}%</span>
                </div>
              </IndexTable.Cell>
              <IndexTable.Cell>
                <RankBadge position={competitor.stats?.position} />
              </IndexTable.Cell>
            </IndexTable.Row>
          );
        })}
      </IndexTable>
    </Box>
  );
};
