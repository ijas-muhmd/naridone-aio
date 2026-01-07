import {
  Page,
  Layout,
  BlockStack,
  Text,
  Grid,
  Box,
  InlineStack,
  Badge,
  InlineGrid,
  Icon,
  Button,
} from "@shopify/polaris";
import {
  MagicIcon,
  GlobeIcon,
  ChatIcon,
  CheckIcon,
} from "@shopify/polaris-icons";
import React, { useState } from "react";
import { TitleBar } from "../MockTitleBar";
import { PricingPlanCard } from "./PricingPlanCard";
import { ROICalculator } from "./ROICalculator";
import { FAQSection } from "./FAQSection";

interface PricingProps {
  activePlan: string;
  onSelectPlan: (plan: string, isAnnual: boolean) => void;
}

export function Pricing({ activePlan, onSelectPlan }: PricingProps) {
  const [isAnnual, setIsAnnual] = useState(true);

  // Calculator State
  const [searchVolume, setSearchVolume] = useState("5000");
  const [aov, setAov] = useState("75");
  const [conversionRate, setConversionRate] = useState("2.5");
  const [targetSoV, setTargetSoV] = useState("20");

  const estimatedVisits = Math.round(
    parseInt(searchVolume) * (parseInt(targetSoV) / 100),
  );
  const monthlyRevenue = Math.round(
    estimatedVisits * (parseFloat(conversionRate) / 100) * parseFloat(aov),
  );

  const freePlan = {
    name: "Free Plan",
    price: "Free",
    period: "Starter",
    description: "Free for stores earning under $3,000/mo.",
    features: [
      { text: "Track up to 5 AI Prompts" },
      { text: "Runs Weekly (Every 7 Days)" },
      { text: "3 Competitors Tracked" },
      {
        text: "Real Trioâ„¢ (Google AI Overview + ChatGPT + Perplexity)",
        icons: [],
      },
      { text: "20 Auto-Fix Suggestions/mo" },
      { text: "Basic Insights Dashboard" },
      { text: "5 Products Analyzed" },
      { text: "No credit card needed" },
    ],
    buttonText: activePlan === "FREE" ? "Current Plan" : "Downgrade to Free",
    primary: false,
    badge: "Starter",
    badgeTone: "info" as const,
  };

  const paidPlans = [
    {
      name: "Starter",
      price: isAnnual ? "39" : "49",
      period: "per month",
      description:
        "For growing startups that are starting to track and grow their AI search visibility.",
      features: [
        { text: "Track up to 25 Prompts" },
        { text: "Runs Daily (Every 24 Hours)" },
        { text: "10 Competitors Tracked" },
        {
          text: "Real Trioâ„¢ (Google AI Overview + ChatGPT + Perplexity)",
          icons: [MagicIcon],
        },
        { text: "100 Auto-Fix Suggestions/mo" },
        { text: "25 Social Mentions" },
        { text: "Email Support" },
      ],
      buttonText: activePlan === "STARTER" ? "Current Plan" : "Select Starter",
      primary: false,
      badge: activePlan === "STARTER" ? "Active" : undefined,
      badgeTone: (activePlan === "STARTER" ? "info" : "success") as
        | "info"
        | "success",
    },
    {
      name: "Growth",
      price: isAnnual ? "199" : "249",
      period: "per month",
      description:
        "For agile SMEs wanting deeper insights into their AI search efforts and faster growth.",
      features: [
        { text: "Track up to 100 Prompts" },
        { text: "Runs Daily (Every 24 Hours)" },
        { text: "25 Competitors Tracked" },
        {
          text: "Real Trioâ„¢ (Google AI Overview + ChatGPT + Perplexity)",
          icons: [MagicIcon],
        },
        { text: "500 Auto-Fix Suggestions/mo" },
        { text: "200 Social Mentions" },
        { text: "Priority Support + Reports" },
      ],
      buttonText: activePlan === "GROWTH" ? "Current Plan" : "Select Growth",
      primary: true,
      badge: "Most Popular",
      badgeTone: "success" as const,
    },
    {
      name: "Enterprise",
      price: isAnnual ? "749" : "899",
      period: "per month",
      description:
        "For enterprises needing advanced tracking and custom reporting.",
      features: [
        { text: "Track 500+ Prompts (Custom)" },
        { text: "Runs Daily (Every 24 Hours)" },
        { text: "100+ Competitors Tracked" },
        { text: "All Models Unlocked", icons: [GlobeIcon, ChatIcon] },
        { text: "2,000+ Auto-Fix Suggestions/mo" },
        { text: "1,000 Social Mentions" },
        { text: "Dedicated Account Manager" },
      ],
      buttonText:
        activePlan === "ENTERPRISE"
          ? "Current Plan"
          : "Request Personalized Demo",
      primary: false,
      isExternal: true,
      url: "mailto:sales@naridon.com",
    },
  ];

  return (
    <Page fullWidth={false}>
      <TitleBar title="Pricing" />
      <BlockStack gap="800">
        {/* Header */}
        <Box paddingBlockStart="800" paddingBlockEnd="400">
          <BlockStack gap="400" align="center">
            <Text variant="heading2xl" as="h1" alignment="center">
              Plans & Pricing
            </Text>
            <Text variant="bodyLg" as="p" alignment="center" tone="subdued">
              Choose the plan that fits your growth stage. Scale your AI
              visibility as you grow.
            </Text>

            <div
              style={{
                marginTop: "24px",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "12px",
                  background: "#fff",
                  padding: "8px 16px",
                  borderRadius: "24px",
                  boxShadow: "0 1px 3px rgba(0,0,0,0.05)",
                  border: "1px solid #e1e3e5",
                }}
              >
                <Text
                  as="span"
                  fontWeight={!isAnnual ? "bold" : "regular"}
                  tone={!isAnnual ? "base" : "subdued"}
                >
                  Monthly
                </Text>
                <div
                  onClick={() => setIsAnnual(!isAnnual)}
                  style={{
                    position: "relative",
                    width: "48px",
                    height: "24px",
                    backgroundColor: isAnnual ? "#e5e7eb" : "#d1d5db",
                    borderRadius: "12px",
                    cursor: "pointer",
                    transition: "background-color 0.2s",
                  }}
                >
                  <div
                    style={{
                      position: "absolute",
                      top: "2px",
                      left: isAnnual ? "26px" : "2px",
                      width: "20px",
                      height: "20px",
                      backgroundColor: "white",
                      borderRadius: "50%",
                      transition: "left 0.2s",
                      boxShadow: "0 1px 2px rgba(0,0,0,0.2)",
                    }}
                  />
                </div>
                <div
                  style={{ display: "flex", alignItems: "center", gap: "8px" }}
                >
                  <Text
                    as="span"
                    fontWeight={isAnnual ? "bold" : "regular"}
                    tone={isAnnual ? "base" : "subdued"}
                  >
                    Yearly
                  </Text>
                  <Badge tone="success">Save 20%</Badge>
                </div>
              </div>
            </div>
            <Button variant="plain" url="#">
              Have an Enterprise Code?
            </Button>
          </BlockStack>
        </Box>

        <Layout>
          {/* FREE PLAN - Top Box */}
          <Layout.Section>
            <Box
              background="bg-surface-secondary"
              padding="400"
              borderRadius="300"
              borderWidth="025"
              borderColor="border"
            >
              <BlockStack gap="400">
                <InlineStack align="space-between" blockAlign="center">
                  <BlockStack gap="100">
                    <InlineStack gap="200" align="center">
                      <Text variant="headingMd" as="h2">
                        {freePlan.name}
                      </Text>
                      <Badge tone="info">{freePlan.period}</Badge>
                    </InlineStack>
                    <Text variant="bodySm" as="p" tone="subdued">
                      {freePlan.description}
                    </Text>
                  </BlockStack>
                  <Button
                    onClick={() => onSelectPlan("FREE", isAnnual)}
                    disabled={activePlan === "FREE"}
                    size="slim"
                    variant="plain"
                    textAlign="end"
                  >
                    {freePlan.buttonText}
                  </Button>
                </InlineStack>

                {/* Feature list */}
                <InlineGrid columns={{ xs: 1, sm: 2, md: 3 }} gap="400">
                  {freePlan.features.map((feature, i) => (
                    <InlineStack key={i} align="start" gap="200" wrap={false}>
                      <div style={{ marginTop: "2px", opacity: 0.6 }}>
                        <Icon source={CheckIcon} />
                      </div>
                      <Text variant="bodySm" as="span" tone="subdued">
                        {feature.text}
                      </Text>
                    </InlineStack>
                  ))}
                </InlineGrid>
              </BlockStack>
            </Box>
          </Layout.Section>

          {/* PAID PLANS */}
          <Layout.Section>
            <Grid>
              {/* Paid Plans */}
              {paidPlans.map((plan) => (
                <Grid.Cell
                  key={plan.name}
                  columnSpan={{ xs: 6, sm: 6, md: 4, lg: 4, xl: 4 }}
                >
                  <PricingPlanCard
                    {...plan}
                    onSelect={() =>
                      onSelectPlan(plan.name.toUpperCase(), isAnnual)
                    }
                    disabled={activePlan === plan.name.toUpperCase()}
                  />
                </Grid.Cell>
              ))}
            </Grid>
          </Layout.Section>

          {/* ROI Calculator */}
          <Layout.Section>
            <Box paddingBlockStart="800">
              <ROICalculator
                searchVolume={searchVolume}
                setSearchVolume={setSearchVolume}
                targetSoV={targetSoV}
                setTargetSoV={setTargetSoV}
                conversionRate={conversionRate}
                setConversionRate={setConversionRate}
                aov={aov}
                setAov={setAov}
                estimatedVisits={estimatedVisits}
                monthlyRevenue={monthlyRevenue}
              />
            </Box>
          </Layout.Section>

          {/* FAQ */}
          <Layout.Section>
            <FAQSection />
          </Layout.Section>
        </Layout>
      </BlockStack>
    </Page>
  );
}
