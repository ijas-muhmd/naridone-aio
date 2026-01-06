import {
  Page,
  Layout,
  Card,
  BlockStack,
  Text,
  Grid,
  Box,
  InlineStack,
  Icon,
  Badge,
  Banner,
  Button,
  Tabs,
  TextField,
  RangeSlider,
  Checkbox,
} from "@shopify/polaris";
import {
  MagicIcon,
  CheckIcon,
  AlertCircleIcon,
  SettingsIcon,
  ClockIcon,
} from "@shopify/polaris-icons";
import React, { useState, useCallback } from "react";
import { TitleBar } from "../MockTitleBar";
import { OptimizationNav } from "../SubNavs";

// --- Styled Components (Converted to React Components) ---

const MetallicPowerButton = ({
  active,
  onClick,
}: {
  active: boolean;
  onClick: () => void;
}) => {
  return (
    <div
      onClick={onClick}
      style={{
        position: "relative",
        display: "inline-flex",
        padding: "4px",
        borderRadius: "50%",
        background: "linear-gradient(145deg, #e6e6e6, #ffffff)",
        boxShadow: "5px 5px 10px #d1d1d1, -5px -5px 10px #ffffff",
        cursor: "pointer",
        transition: "all 0.3s ease",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "60px",
          height: "60px",
          borderRadius: "50%",
          background: active
            ? "linear-gradient(145deg, #10b981, #059669)"
            : "linear-gradient(145deg, #f0f0f0, #e6e6e6)",
          boxShadow: active
            ? "inset 2px 2px 5px #047857, inset -2px -2px 5px #34d399"
            : "inset 2px 2px 5px #d1d1d1, inset -2px -2px 5px #ffffff",
          color: active ? "#ffffff" : "#9ca3af",
          transition: "all 0.3s ease",
        }}
      >
        <Icon source={MagicIcon} />
      </div>
    </div>
  );
};

const ToggleSwitch = ({
  checked,
  onChange,
}: {
  checked: boolean;
  onChange: () => void;
}) => {
  return (
    <div
      onClick={onChange}
      style={{
        position: "relative",
        width: "44px",
        height: "24px",
        borderRadius: "12px",
        backgroundColor: checked ? "#10b981" : "#e5e7eb",
        cursor: "pointer",
        transition: "background-color 0.2s ease",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: "2px",
          left: checked ? "22px" : "2px",
          width: "20px",
          height: "20px",
          borderRadius: "50%",
          backgroundColor: "#ffffff",
          boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
          transition: "left 0.2s ease",
        }}
      />
    </div>
  );
};

// --- Main Component ---

import { AgentCard, Agent } from "./autopilot/AgentCard";
import { SafetySettings } from "./autopilot/SafetySettings";

interface OptimizationAutopilotProps {
  autopilotEnabled: boolean;
  onToggleAutopilot: () => void;
  agents: {
    traffic: Agent[];
    conversion: Agent[];
    intelligence: Agent[];
  };
  settings: any;
  onSettingsChange: (key: string, value: any) => void;
  stats: {
    timeSaved: string;
    fixesApplied: number;
  };
}

export function OptimizationAutopilot({
  autopilotEnabled,
  onToggleAutopilot,
  agents,
  settings,
  onSettingsChange,
  stats,
}: OptimizationAutopilotProps) {
  const [selectedTab, setSelectedTab] = useState(0);

  const tabs = [
    { id: "agents", content: "Active Agents" },
    { id: "safety", content: "Safety & Limits" },
    { id: "logs", content: "Activity Log" },
  ];

  return (
    <Page title="Improve" fullWidth={false} subtitle="Fix Engine">
      {/* <TitleBar title="Optimize" /> */}
      <Box padding="0">
        <OptimizationNav />
      </Box>

      <Box paddingBlockStart="400">
        <BlockStack gap="600">
          {/* Master Switch Section */}
          <Card>
            <BlockStack gap="500">
              <InlineStack align="space-between" blockAlign="center">
                <BlockStack gap="200">
                  <InlineStack gap="300" blockAlign="center">
                    <Text variant="headingLg" as="h2">
                      Autopilot Mode
                    </Text>
                    <Badge tone={autopilotEnabled ? "success" : undefined}>
                      {autopilotEnabled ? "ACTIVE" : "PAUSED"}
                    </Badge>
                  </InlineStack>
                  <Text variant="bodyMd" tone="subdued" as="p">
                    Allow AI to automatically detect and fix SEO issues 24/7.
                    You retain full control over safety limits.
                  </Text>
                </BlockStack>
                <MetallicPowerButton
                  active={autopilotEnabled}
                  onClick={onToggleAutopilot}
                />
              </InlineStack>

              {autopilotEnabled && (
                <Banner tone="success" icon={CheckIcon}>
                  <p>
                    <strong>Autopilot is running.</strong> Saved{" "}
                    {stats.timeSaved} of manual work this week.{" "}
                    {stats.fixesApplied} fixes applied automatically.
                  </p>
                </Banner>
              )}
            </BlockStack>
          </Card>

          <Tabs tabs={tabs} selected={selectedTab} onSelect={setSelectedTab}>
            <Box paddingBlockStart="400">
              {selectedTab === 0 && (
                <BlockStack gap="800">
                  {/* Traffic Agents */}
                  <BlockStack gap="400">
                    <Text variant="headingMd" as="h2">
                      Traffic & Visibility Agents
                    </Text>
                    <Grid>
                      {agents.traffic.map((agent) => (
                        <AgentCard
                          key={agent.id}
                          agent={agent}
                          autopilotEnabled={autopilotEnabled}
                          isEnabled={settings[agent.configKey]}
                          onToggle={(key, val) => onSettingsChange(key, val)}
                        />
                      ))}
                    </Grid>
                  </BlockStack>

                  {/* Conversion Agents */}
                  <BlockStack gap="400">
                    <Text variant="headingMd" as="h2">
                      Conversion Agents
                    </Text>
                    <Grid>
                      {agents.conversion.map((agent) => (
                        <AgentCard
                          key={agent.id}
                          agent={agent}
                          autopilotEnabled={autopilotEnabled}
                          isEnabled={settings[agent.configKey]}
                          onToggle={(key, val) => onSettingsChange(key, val)}
                        />
                      ))}
                    </Grid>
                  </BlockStack>

                  {/* Intelligence Agents */}
                  <BlockStack gap="400">
                    <Text variant="headingMd" as="h2">
                      Intelligence Agents
                    </Text>
                    <Grid>
                      {agents.intelligence.map((agent) => (
                        <AgentCard
                          key={agent.id}
                          agent={agent}
                          autopilotEnabled={autopilotEnabled}
                          isEnabled={settings[agent.configKey]}
                          onToggle={(key, val) => onSettingsChange(key, val)}
                        />
                      ))}
                    </Grid>
                  </BlockStack>
                </BlockStack>
              )}

              {selectedTab === 1 && (
                <SafetySettings
                  settings={settings}
                  onSettingsChange={onSettingsChange}
                />
              )}

              {selectedTab === 2 && (
                <Card>
                  <Box padding="400">
                    <BlockStack gap="400" align="center">
                      <div
                        style={{
                          padding: "20px",
                          background: "#f1f2f4",
                          borderRadius: "50%",
                        }}
                      >
                        <Icon source={ClockIcon} tone="subdued" />
                      </div>
                      <Text tone="subdued" as="p">
                        No activity logs available yet.
                      </Text>
                    </BlockStack>
                  </Box>
                </Card>
              )}
            </Box>
          </Tabs>
        </BlockStack>
      </Box>
    </Page>
  );
}
