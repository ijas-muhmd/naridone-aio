import { Box, BlockStack, InlineStack, Text, Button } from "@shopify/polaris";
import { ArrowRightIcon } from "@shopify/polaris-icons";
import { useNavigate } from "react-router-dom";

export function OnboardingHero({ brandName }: { brandName: string }) {
  const navigate = useNavigate();

  return (
    <Box paddingBlockStart="400" paddingInline="400">
      <div
        style={{
          background: "linear-gradient(135deg, #008060 0%, #0b5c4b 100%)",
          borderRadius: "12px",
          padding: "32px",
          color: "white",
          boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
        }}
      >
        <BlockStack gap="400">
          <BlockStack gap="200">
            <Text as="h1" variant="headingXl" tone="textInverse">
              Welcome to the future of search, {brandName}.
            </Text>
            <Text as="p" variant="bodyLg" tone="textInverse">
              Your dashboard is now tracking real-time AI visibility across
              Google, ChatGPT, and Perplexity.
            </Text>
          </BlockStack>
          <InlineStack gap="300">
            <Button
              size="large"
              onClick={() => navigate("/app/monitor")}
              variant="primary" // In Polaris context this might look weird on dark bg, but keeping for now
            >
              View First Results
            </Button>
            <div style={{ color: "white" }}>
              <Button
                size="large"
                variant="plain"
                icon={ArrowRightIcon}
                onClick={() => navigate("/app/optimization")}
              >
                <span style={{ color: "white" }}>Start Optimization</span>
              </Button>
            </div>
          </InlineStack>
        </BlockStack>
      </div>
    </Box>
  );
}
