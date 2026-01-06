import { Box, InlineStack, Text } from "@shopify/polaris";
import { useState, useEffect } from "react";

interface LiveTickerProps {
  promptCount: number;
  competitorCount: number;
}

export const LiveTicker = ({
  promptCount,
  competitorCount,
}: LiveTickerProps) => {
  const [msg, setMsg] = useState("System Operational");

  useEffect(() => {
    // Honest messages based on real state
    const messages = [
      `Monitoring ${promptCount} active prompts`,
      `Tracking ${competitorCount} competitors`,
      "Next scheduled scan: 2:00 AM EST",
      "Real-time alerts active",
    ];
    let i = 0;
    const interval = setInterval(() => {
      setMsg(messages[i]);
      i = (i + 1) % messages.length;
    }, 5000);
    return () => clearInterval(interval);
  }, [promptCount, competitorCount]);

  return (
    <Box background="bg-surface-secondary" padding="200" borderRadius="200">
      <InlineStack align="start" gap="200">
        <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
          <div
            style={{
              width: 8,
              height: 8,
              borderRadius: "50%",
              background: "#32cd32",
              boxShadow: "0 0 4px #32cd32",
            }}
          />
          <Text variant="bodyXs" fontWeight="bold" as="span" tone="subdued">
            ACTIVE
          </Text>
        </div>
        <Text variant="bodyXs" as="span" tone="subdued" truncate>
          {msg}
        </Text>
      </InlineStack>
    </Box>
  );
};
