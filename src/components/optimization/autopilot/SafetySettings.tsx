import {
  Card,
  BlockStack,
  Text,
  Grid,
  Banner,
  Button,
  InlineStack,
  Badge,
  RangeSlider,
  TextField,
  Checkbox,
} from "@shopify/polaris";
import React from "react";

interface SafetySettingsProps {
  settings: any;
  onSettingsChange: (key: string, value: any) => void;
}

export function SafetySettings({
  settings,
  onSettingsChange,
}: SafetySettingsProps) {
  return (
    <Grid>
      <Grid.Cell columnSpan={{ xs: 6, sm: 6, md: 6, lg: 8, xl: 8 }}>
        <Card>
          <BlockStack gap="500">
            <Text variant="headingMd" as="h2">
              Safety Thresholds
            </Text>

            <BlockStack gap="400">
              <RangeSlider
                label="Autonomy Level"
                value={settings.autonomyLevel || 50}
                onChange={(val) => onSettingsChange("autonomyLevel", val)}
                min={0}
                max={100}
                output
                helpText="Higher levels allow AI to make more significant changes without review."
              />

              <TextField
                label="Daily Fix Limit"
                type="number"
                value={String(settings.dailyFixLimit || 10)}
                onChange={(val) =>
                  onSettingsChange("dailyFixLimit", parseInt(val))
                }
                autoComplete="off"
                helpText="Maximum number of automated fixes to apply per day."
              />

              <Checkbox
                label="Require approval for Title changes"
                checked={settings.requireTitleApproval}
                onChange={(val) =>
                  onSettingsChange("requireTitleApproval", val)
                }
              />
              <Checkbox
                label="Require approval for Description changes"
                checked={settings.requireDescApproval}
                onChange={(val) =>
                  onSettingsChange("requireDescApproval", val)
                }
              />
            </BlockStack>
          </BlockStack>
        </Card>
      </Grid.Cell>

      <Grid.Cell columnSpan={{ xs: 6, sm: 6, md: 6, lg: 4, xl: 4 }}>
        <Card>
          <BlockStack gap="400">
            <Text variant="headingMd" as="h2">
              Human Oversight
            </Text>
            <Banner tone="info">
              <p>
                All automated changes are logged and can be reverted instantly
                from the <strong>History</strong> tab.
              </p>
            </Banner>
            <BlockStack gap="200">
              <InlineStack align="space-between">
                <Text as="span">Review Queue</Text>
                <Badge>12 Pending</Badge>
              </InlineStack>
              <Button fullWidth>Open Review Queue</Button>
            </BlockStack>
          </BlockStack>
        </Card>
      </Grid.Cell>
    </Grid>
  );
}
