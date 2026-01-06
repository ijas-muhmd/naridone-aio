import {
  Card,
  BlockStack,
  Text,
  Grid,
  Box,
  InlineStack,
  RangeSlider,
  Icon,
  InlineGrid,
} from "@shopify/polaris";
import { ArrowUpIcon } from "@shopify/polaris-icons";
import React from "react";

interface ROICalculatorProps {
  searchVolume: string;
  setSearchVolume: (value: string) => void;
  targetSoV: string;
  setTargetSoV: (value: string) => void;
  conversionRate: string;
  setConversionRate: (value: string) => void;
  aov: string;
  setAov: (value: string) => void;
  estimatedVisits: number;
  monthlyRevenue: number;
}

export function ROICalculator({
  searchVolume,
  setSearchVolume,
  targetSoV,
  setTargetSoV,
  conversionRate,
  setConversionRate,
  aov,
  setAov,
  estimatedVisits,
  monthlyRevenue,
}: ROICalculatorProps) {
  return (
    <BlockStack gap="600">
      <BlockStack gap="200">
        <Text variant="headingXl" as="h2">
          ROI Calculator
        </Text>
        <Text variant="bodyMd" as="p" tone="subdued">
          Estimate the value of optimizing your brand for AI Search.
        </Text>
      </BlockStack>

      <Card padding="0">
        <Grid gap="0">
          <Grid.Cell columnSpan={{ xs: 6, sm: 6, md: 6, lg: 6, xl: 7 }}>
            <Box padding="600">
              <BlockStack gap="500">
                <Text variant="headingMd" as="h3">
                  Configuration
                </Text>

                <BlockStack gap="400">
                  <InlineStack align="space-between">
                    <Text variant="bodyLg" as="p" fontWeight="medium">
                      Monthly Search Volume
                    </Text>
                    <Text variant="bodyLg" as="span" fontWeight="bold">
                      {parseInt(searchVolume).toLocaleString()}
                    </Text>
                  </InlineStack>
                  <RangeSlider
                    label="Search Volume"
                    labelHidden
                    output
                    min={1000}
                    max={100000}
                    step={1000}
                    value={parseInt(searchVolume)}
                    onChange={(val) => setSearchVolume(String(val))}
                  />
                  <Text variant="bodySm" as="p" tone="subdued">
                    Estimated monthly searches for your high-intent keywords
                  </Text>
                </BlockStack>

                <BlockStack gap="400">
                  <InlineStack align="space-between">
                    <Text variant="bodyLg" as="p" fontWeight="medium">
                      Target Share of Voice (SoV)
                    </Text>
                    <Text variant="bodyLg" as="span" fontWeight="bold">
                      {targetSoV}%
                    </Text>
                  </InlineStack>
                  <RangeSlider
                    label="Target SoV"
                    labelHidden
                    output
                    min={1}
                    max={100}
                    step={1}
                    value={parseInt(targetSoV)}
                    onChange={(val) => setTargetSoV(String(val))}
                  />
                  <Text variant="bodySm" as="p" tone="subdued">
                    Target percentage of AI recommendations (Industry Avg:
                    10-20%)
                  </Text>
                </BlockStack>

                <BlockStack gap="400">
                  <InlineStack align="space-between">
                    <Text variant="bodyLg" as="p" fontWeight="medium">
                      Average Order Value
                    </Text>
                    <Text variant="bodyLg" as="span" fontWeight="bold">
                      ${aov}
                    </Text>
                  </InlineStack>
                  <RangeSlider
                    label="AOV"
                    labelHidden
                    output
                    min={10}
                    max={500}
                    step={5}
                    value={parseInt(aov)}
                    onChange={(val) => setAov(String(val))}
                  />
                  <Text variant="bodySm" as="p" tone="subdued">
                    Average value of a single purchase
                  </Text>
                </BlockStack>

                <BlockStack gap="400">
                  <InlineStack align="space-between">
                    <Text variant="bodyLg" as="p" fontWeight="medium">
                      Conversion Rate
                    </Text>
                    <Text variant="bodyLg" as="span" fontWeight="bold">
                      {conversionRate}%
                    </Text>
                  </InlineStack>
                  <RangeSlider
                    label="Conversion Rate"
                    labelHidden
                    output
                    min={0.1}
                    max={10}
                    step={0.1}
                    value={parseFloat(conversionRate)}
                    onChange={(val) => setConversionRate(String(val))}
                  />
                  <Text variant="bodySm" as="p" tone="subdued">
                    Percentage of visitors who make a purchase
                  </Text>
                </BlockStack>
              </BlockStack>
            </Box>
          </Grid.Cell>

          <Grid.Cell columnSpan={{ xs: 6, sm: 6, md: 6, lg: 6, xl: 5 }}>
            <div
              style={{
                height: "100%",
                background: "linear-gradient(135deg, #f0fdf4 0%, #dcfce7 100%)",
                borderLeft: "1px solid #bbf7d0",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <Box padding="600">
                <BlockStack gap="600" align="center">
                  <div style={{ textAlign: "center", width: "100%" }}>
                    <Text
                      variant="headingSm"
                      as="h3"
                      fontWeight="bold"
                      alignment="center"
                      tone="success"
                    >
                      POTENTIAL MONTHLY REVENUE
                    </Text>
                    <div
                      style={{
                        marginTop: "16px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: "4px",
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          marginTop: "6px",
                        }}
                      >
                        <Icon source={ArrowUpIcon} tone="success" />
                      </div>
                      <Text
                        variant="heading2xl"
                        as="p"
                        fontWeight="bold"
                        tone="success"
                      >
                        ${monthlyRevenue.toLocaleString()}
                      </Text>
                    </div>
                  </div>

                  <div
                    style={{
                      width: "100%",
                      padding: "24px 0",
                      borderTop: "1px solid rgba(22, 163, 74, 0.1)",
                      borderBottom: "1px solid rgba(22, 163, 74, 0.1)",
                    }}
                  >
                    <InlineGrid columns={2} gap="400">
                      <div style={{ textAlign: "center" }}>
                        <Text
                          variant="headingLg"
                          as="p"
                          fontWeight="bold"
                          tone="success"
                        >
                          {estimatedVisits.toLocaleString()}
                        </Text>
                        <Text as="p" variant="bodySm" tone="subdued">
                          Est. Visits
                        </Text>
                      </div>
                      <div style={{ textAlign: "center" }}>
                        <Text
                          variant="headingLg"
                          as="p"
                          fontWeight="bold"
                          tone="success"
                        >
                          {Math.floor(
                            estimatedVisits *
                              (parseFloat(conversionRate) / 100),
                          ).toLocaleString()}
                        </Text>
                        <Text as="p" variant="bodySm" tone="subdued">
                          Est. Orders
                        </Text>
                      </div>
                    </InlineGrid>
                  </div>

                  <div style={{ textAlign: "center" }}>
                    <Text variant="bodyXs" as="p" tone="subdued">
                      *Based on {targetSoV}% target Share of Voice (SoV) from
                      optimized AI recommendations.
                    </Text>
                  </div>
                </BlockStack>
              </Box>
            </div>
          </Grid.Cell>
        </Grid>
      </Card>
    </BlockStack>
  );
}
