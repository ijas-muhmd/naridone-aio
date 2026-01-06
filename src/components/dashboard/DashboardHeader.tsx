import { Box, BlockStack, InlineStack, Text, Button } from "@shopify/polaris";
import { OnboardingHero } from "./OnboardingHero";

interface DashboardHeaderProps {
  brandName: string;
  showOnboardingHero?: boolean;
  onConfigureModels?: () => void;
}

export function DashboardHeader({
  brandName,
  showOnboardingHero = false,
  onConfigureModels,
}: DashboardHeaderProps) {
  if (showOnboardingHero) {
    return <OnboardingHero brandName={brandName} />;
  }

  return (
    <Box paddingBlockStart="400" paddingInline="400">
      <BlockStack gap="400">
        <InlineStack align="space-between" blockAlign="center" gap="400">
          <Text as="h1" variant="headingLg">
            Welcome back, {brandName}.
          </Text>
          {onConfigureModels && (
            <Button onClick={onConfigureModels}>Configure Models</Button>
          )}
        </InlineStack>
        <Text as="p" variant="bodyMd" tone="subdued">
          Your daily briefing on AI Search Performance.
        </Text>
      </BlockStack>
    </Box>
  );
}


