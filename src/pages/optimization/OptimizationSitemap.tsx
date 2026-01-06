import { useState, useCallback } from "react";
import {
  Page,
  Layout,
  Card,
  BlockStack,
  Text,
  TextField,
  Box,
  Banner,
  Checkbox,
  Button,
} from "@shopify/polaris";
import { TitleBar } from "../../components/MockTitleBar";
import { OptimizationNav } from "../../components/SubNavs";

// Mock Data
const MOCK_CONFIG = {
  active: true,
  includeProducts: true,
  includeCollections: true,
  includeArticles: true,
  customInstructions: "",
};

export default function OptimizationSitemapPage() {
  const [active, setActive] = useState(MOCK_CONFIG.active);
  const [includeProducts, setIncludeProducts] = useState(
    MOCK_CONFIG.includeProducts,
  );
  const [includeCollections, setIncludeCollections] = useState(
    MOCK_CONFIG.includeCollections,
  );
  const [includeArticles, setIncludeArticles] = useState(
    MOCK_CONFIG.includeArticles,
  );
  const [customInstructions, setCustomInstructions] = useState(
    MOCK_CONFIG.customInstructions || "",
  );
  const [isSaving, setIsSaving] = useState(false);

  const handleSave = useCallback(() => {
    setIsSaving(true);
    // Simulate API call
    setTimeout(() => {
      setIsSaving(false);
      // In a real app, you would call an API here
      console.log("Saving config:", {
        active,
        includeProducts,
        includeCollections,
        includeArticles,
        customInstructions,
      });
    }, 500);
  }, [
    active,
    includeProducts,
    includeCollections,
    includeArticles,
    customInstructions,
  ]);

  // Mock shop domain - in real app this would come from props/context
  const shop = "your-shop.myshopify.com";
  const proxyUrl = `https://${shop}/apps/shopeec/llms.txt`;

  return (
    <Page
      fullWidth={false}
      title="Improve"
      subtitle="AI Sitemap"
      primaryAction={{
        content: "Save Configuration",
        onAction: handleSave,
        loading: isSaving,
      }}
    >
      <TitleBar title="Optimization" />
      <Box padding="0">
        <OptimizationNav />
      </Box>
      <BlockStack gap="600">
        <Box paddingBlockStart="400" paddingBlockEnd="400" paddingInline="400">
          <BlockStack gap="500">
            <Banner tone="info" title="Your AI Sitemap is Live">
              <p>
                View it here:{" "}
                <a
                  href={proxyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "#2563eb", textDecoration: "underline" }}
                >
                  {proxyUrl}
                </a>
              </p>
            </Banner>
          </BlockStack>
        </Box>

        <Box paddingInline="400">
          <Layout>
            <Layout.Section>
              <Card>
                <BlockStack gap="500">
                  <BlockStack gap="200">
                    <Text variant="headingMd" as="h2">
                      General Settings
                    </Text>
                    <Text variant="bodyMd" as="p" tone="subdued">
                      Enable or disable the sitemap and control its visibility.
                    </Text>
                  </BlockStack>

                  <BlockStack gap="400">
                    <Checkbox
                      label="Enable AI Sitemap (llms.txt)"
                      checked={active}
                      onChange={setActive}
                      helpText="If disabled, the file will return a 404 error, preventing AI bots from reading your structured data."
                    />

                    <Box paddingInlineStart="400">
                      <BlockStack gap="300">
                        <Text variant="headingSm" as="h3">
                          Content to Include
                        </Text>
                        <Checkbox
                          label="Products (Active & In-Stock)"
                          checked={includeProducts}
                          onChange={setIncludeProducts}
                          disabled={!active}
                        />
                        <Checkbox
                          label="Collections (Site Structure)"
                          checked={includeCollections}
                          onChange={setIncludeCollections}
                          disabled={!active}
                        />
                        <Checkbox
                          label="Blog Posts (Articles)"
                          checked={includeArticles}
                          onChange={setIncludeArticles}
                          disabled={!active}
                        />
                      </BlockStack>
                    </Box>

                    <TextField
                      label="Custom Brand Guidelines"
                      value={customInstructions}
                      onChange={setCustomInstructions}
                      multiline={4}
                      autoComplete="off"
                      helpText="Add specific instructions for AI agents (e.g., 'We are a sustainable brand, emphasize eco-friendly materials')."
                      disabled={!active}
                    />
                  </BlockStack>
                </BlockStack>
              </Card>
            </Layout.Section>
          </Layout>
        </Box>
      </BlockStack>
    </Page>
  );
}
