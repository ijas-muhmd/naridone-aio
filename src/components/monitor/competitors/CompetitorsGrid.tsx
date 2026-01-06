import { Grid, Box, InlineStack, BlockStack, Text, Badge, Button } from "@shopify/polaris";
import React from "react";
import { LogoWithColorExtraction } from "./LogoWithColorExtraction";
import { RankBadge } from "./RankBadge";
import { lightenColor } from "./utils";

interface CompetitorsGridProps {
  sortedCompetitors: any[];
  logoColors: Record<string, string>;
  handleColorExtracted: (id: string, color: string) => void;
  onSelectCompetitor: (comp: any) => void;
}

export const CompetitorsGrid = ({
  sortedCompetitors,
  logoColors,
  handleColorExtracted,
  onSelectCompetitor,
}: CompetitorsGridProps) => {
  return (
    <Box padding="0">
      <Grid>
        {sortedCompetitors.map((competitor) => {
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
          const logoUrl = `https://logo.clearbit.com/${logoName}.com?size=64`;
          const brandColor = logoColors[competitor.id] || "#6366f1"; // Default color until extracted
          const logoBackgroundColor = lightenColor(brandColor, 0.8); // Light background for logo

          return (
            <Grid.Cell
              key={competitor.id}
              columnSpan={{ xs: 6, sm: 6, md: 2, lg: 4, xl: 4 }}
            >
              <Box
                background="bg-surface"
                borderRadius="200"
                borderWidth="025"
                borderColor="border"
                shadow="100"
                minHeight="100%"
              >
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    height: "100%",
                    cursor: "pointer",
                    overflow: "visible",
                    position: "relative",
                  }}
                  onClick={() => onSelectCompetitor(competitor)}
                >
                  {/* Top Section with Brand Color */}
                  <div
                    style={{
                      backgroundColor: logoBackgroundColor,
                      padding: "28px 16px",
                      paddingBottom: "16px",
                      display: "flex",
                      justifyContent: "flex-end",
                      alignItems: "flex-start",
                      position: "relative",
                      borderTopLeftRadius: "8px",
                      borderTopRightRadius: "8px",
                    }}
                  >
                    {/* Logo positioned to overlap */}
                    <div
                      style={{
                        position: "absolute",
                        left: "16px",
                        bottom: "-16px",
                        width: "36px",
                        height: "36px",
                        borderRadius: "16px",
                        backgroundColor: "white",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        padding: "0px",
                        boxSizing: "border-box",
                        boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
                        zIndex: 10,
                      }}
                    >
                      <LogoWithColorExtraction
                        imageUrl={logoUrl}
                        alt={competitor.name}
                        competitorId={competitor.id}
                        onColorExtracted={handleColorExtracted}
                        brandDomain={logoName + ".com"}
                      />
                    </div>
                    <RankBadge position={competitor.stats?.position} />
                  </div>

                  {/* Content Section */}
                  <div
                    style={{
                      padding: "16px",
                      paddingTop: "32px",
                      display: "flex",
                      flexDirection: "column",
                      gap: "16px",
                      flex: 1,
                    }}
                  >
                    <InlineStack align="space-between" blockAlign="start">
                      <InlineStack gap="300">
                        <BlockStack gap="050">
                          <div
                            style={{
                              display: "flex",
                              alignItems: "center",
                              gap: "6px",
                            }}
                          >
                            <Text variant="headingSm" as="h3">
                              {competitor.name}
                            </Text>
                            {isYou && <Badge tone="info">You</Badge>}
                          </div>
                          <Text variant="bodyXs" tone="subdued" as="span">
                            {brandDomain}
                          </Text>
                        </BlockStack>
                      </InlineStack>
                    </InlineStack>
                    <BlockStack gap="200">
                      <InlineStack align="space-between">
                        <Text variant="bodyXs" tone="subdued" as="span">
                          Visibility
                        </Text>
                        <Text variant="bodySm" fontWeight="bold" as="span">
                          {competitor.stats?.visibility || 0}%
                        </Text>
                      </InlineStack>
                      <InlineStack align="space-between">
                        <Text variant="bodyXs" tone="subdued" as="span">
                          Sentiment
                        </Text>
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
                      </InlineStack>
                    </BlockStack>

                    <div onClick={(e) => e.stopPropagation()}>
                      <Button
                        fullWidth
                        size="slim"
                        onClick={() => onSelectCompetitor(competitor)}
                      >
                        View Details
                      </Button>
                    </div>
                  </div>
                </div>
              </Box>
            </Grid.Cell>
          );
        })}
      </Grid>
    </Box>
  );
};
