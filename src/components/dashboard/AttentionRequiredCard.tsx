import { Card, Box, BlockStack, InlineStack, Text, Button, Icon } from "@shopify/polaris";
import { ArrowRightIcon, CheckIcon, AlertCircleIcon } from "@shopify/polaris-icons";
import { useNavigate } from "react-router-dom";

interface AttentionRequiredCardProps {
  pendingFixes: number;
}

export function AttentionRequiredCard({ pendingFixes }: AttentionRequiredCardProps) {
  const navigate = useNavigate();

  return (
    <Card padding="0">
      <div
        style={{
          background: "#fff",
          borderBottom: "1px solid #e1e3e5",
          borderTopLeftRadius: "var(--p-border-radius-300, 8px)",
          borderTopRightRadius: "var(--p-border-radius-300, 8px)",
        }}
      >
        <Box padding="400">
          <BlockStack gap="150">
            <Text as="h2" variant="headingMd">
              {pendingFixes > 0 ? "Attention Required" : "All Systems Go"}
            </Text>
            <Text as="p" variant="bodyMd" tone="subdued">
              {pendingFixes > 0
                ? `You have ${pendingFixes} unaddressed issues affecting your AI visibility. Fixing these is the fastest way to improve your score.`
                : "Great job! You've resolved all critical issues. Enable Autopilot to maintain this state."}
            </Text>
          </BlockStack>
        </Box>
      </div>

      <Box padding="400" background="bg-surface">
        <InlineStack align="space-between" blockAlign="center">
          <InlineStack gap="400" blockAlign="center">
            <div
              style={{
                padding: "12px",
                borderRadius: "50%",
                background:
                  pendingFixes > 0
                    ? "var(--p-color-bg-fill-critical-secondary)"
                    : "var(--p-color-bg-fill-success-secondary)",
              }}
            >
              <Icon
                source={pendingFixes > 0 ? AlertCircleIcon : CheckIcon}
                tone={pendingFixes > 0 ? "critical" : "success"}
              />
            </div>
            <BlockStack gap="050">
              <Text as="h3" variant="headingSm">
                {pendingFixes > 0 ? "Critical Fixes Waiting" : "Optimized"}
              </Text>
              <Text as="span" variant="bodySm" tone="subdued">
                {pendingFixes > 0
                  ? "Meta tags & Descriptions"
                  : "Monitoring active"}
              </Text>
            </BlockStack>
          </InlineStack>

          <Button
            size="large"
            variant="primary"
            icon={ArrowRightIcon}
            onClick={() =>
              navigate(
                pendingFixes > 0
                  ? "/app/optimization/fixes"
                  : "/app/autopilot"
              )
            }
          >
            {pendingFixes > 0
              ? `Fix ${pendingFixes} Issues`
              : "Configure Autopilot"}
          </Button>
        </InlineStack>
      </Box>
    </Card>
  );
}

