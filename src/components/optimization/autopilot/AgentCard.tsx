import {
  Card,
  BlockStack,
  Text,
  Grid,
  InlineStack,
  Icon,
  Badge,
} from "@shopify/polaris";
import React from "react";

// Inline ToggleSwitch component (or import if shared)
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

export interface Agent {
  id: string;
  name: string;
  description: string;
  status: "active" | "inactive" | "learning";
  implemented: number;
  configKey: string;
  stats: { label: string; value: string }[];
  icon: any;
}

interface AgentCardProps {
  agent: Agent;
  autopilotEnabled: boolean;
  isEnabled: boolean;
  onToggle: (key: string, value: boolean) => void;
}

export function AgentCard({
  agent,
  autopilotEnabled,
  isEnabled,
  onToggle,
}: AgentCardProps) {
  return (
    <Grid.Cell key={agent.id} columnSpan={{ xs: 6, sm: 6, md: 4, lg: 4, xl: 4 }}>
      <div
        style={{
          height: "100%",
          opacity: autopilotEnabled ? 1 : 0.6,
          transition: "opacity 0.3s ease",
          filter: autopilotEnabled ? "none" : "grayscale(100%)",
        }}
      >
        <Card>
          <BlockStack gap="400">
            <InlineStack align="space-between" blockAlign="start">
              <div
                style={{
                  padding: "8px",
                  borderRadius: "8px",
                  background: "#f1f2f4",
                }}
              >
                <Icon source={agent.icon} tone="base" />
              </div>
              <ToggleSwitch
                checked={isEnabled}
                onChange={() => onToggle(agent.configKey, !isEnabled)}
              />
            </InlineStack>

            <BlockStack gap="200">
              <Text variant="headingSm" as="h3">
                {agent.name}
              </Text>
              <Text variant="bodySm" tone="subdued" as="p">
                {agent.description}
              </Text>
            </BlockStack>

            <div
              style={{
                padding: "12px",
                background: "#f9fafb",
                borderRadius: "8px",
                marginTop: "auto",
              }}
            >
              <InlineStack align="space-between">
                {agent.stats.map((stat, i) => (
                  <BlockStack gap="100" key={i}>
                    <Text variant="bodyXs" tone="subdued" as="span">
                      {stat.label}
                    </Text>
                    <Text variant="bodySm" fontWeight="bold" as="span">
                      {stat.value}
                    </Text>
                  </BlockStack>
                ))}
              </InlineStack>
            </div>

            <InlineStack gap="200" blockAlign="center">
              <Badge
                tone={
                  agent.status === "active"
                    ? "success"
                    : agent.status === "learning"
                      ? "info"
                      : undefined
                }
              >
                {agent.status.toUpperCase()}
              </Badge>
              {agent.status === "active" && (
                <Text variant="bodyXs" tone="subdued" as="span">
                  {agent.implemented} fixes applied
                </Text>
              )}
            </InlineStack>
          </BlockStack>
        </Card>
      </div>
    </Grid.Cell>
  );
}
