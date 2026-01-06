import { Card, BlockStack, Text, Box, Grid } from "@shopify/polaris";
import React from "react";

interface FAQItem {
  q: string;
  a: string;
}

const DEFAULT_FAQS: FAQItem[] = [
  {
    q: "How does the daily tracking work?",
    a: "We run your prompts through all active AI models every 24 hours to give you the most up-to-date visibility metrics.",
  },
  {
    q: "Can I cancel anytime?",
    a: "Yes, you can cancel or downgrade your plan at any time from the billing settings.",
  },
  {
    q: "What if I need more prompts?",
    a: "Our Enterprise plan supports custom limits. Contact us for a tailored solution.",
  },
  {
    q: "Do you support other languages?",
    a: "Yes, our AI models work with all major languages. You can specify the language in your prompt settings.",
  },
];

interface FAQSectionProps {
  faqs?: FAQItem[];
}

export function FAQSection({ faqs = DEFAULT_FAQS }: FAQSectionProps) {
  return (
    <Box paddingBlockStart="400" paddingBlockEnd="800">
      <BlockStack gap="600" align="center">
        <Text variant="headingXl" as="h2">
          Frequently Asked Questions
        </Text>
        <Grid>
          {faqs.map((item, i) => (
            <Grid.Cell
              key={i}
              columnSpan={{ xs: 6, sm: 6, md: 6, lg: 6, xl: 6 }}
            >
              <Card>
                <BlockStack gap="200">
                  <Text variant="headingMd" as="h3">
                    {item.q}
                  </Text>
                  <Text variant="bodyMd" as="p" tone="subdued">
                    {item.a}
                  </Text>
                </BlockStack>
              </Card>
            </Grid.Cell>
          ))}
        </Grid>
      </BlockStack>
    </Box>
  );
}
