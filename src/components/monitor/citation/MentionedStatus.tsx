import { Icon, Text, Tooltip } from "@shopify/polaris";
import { AlertCircleIcon, MinusIcon } from "@shopify/polaris-icons";
import React from "react";

interface MentionedStatusProps {
  status: string;
  competitors?: string[];
}

export const MentionedStatus = ({
  status,
  competitors,
}: MentionedStatusProps) => {
  if (status === "mentioned") {
    return (
      <div
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: "4px",
          whiteSpace: "nowrap",
          flexShrink: 0,
        }}
      >
        <span
          style={{
            color: "#219653",
            fontSize: "16px",
            lineHeight: "1",
            display: "inline-block",
            verticalAlign: "middle",
            flexShrink: 0,
          }}
        >
          ✔
        </span>
        <span style={{ flexShrink: 0 }}>
          <Text as="span" variant="bodySm" tone="success" fontWeight="medium">
            Mentioned
          </Text>
        </span>
      </div>
    );
  }

  if (status === "competitor-mentioned") {
    const competitorText =
      competitors && competitors.length > 0
        ? `Competitor: ${competitors[0]}${competitors.length > 1 ? ` +${competitors.length - 1}` : ""}`
        : "Competitor Mentioned";

    return (
      <Tooltip
        content={
          competitors && competitors.length > 0
            ? `Competitors mentioned: ${competitors.join(", ")}`
            : "Competitors mentioned on this page"
        }
      >
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "4px",
            whiteSpace: "nowrap",
            flexShrink: 0,
            cursor: "help",
          }}
        >
          <Icon source={AlertCircleIcon} tone="caution" />
          <span style={{ flexShrink: 0 }}>
            <Text as="span" variant="bodySm" tone="caution" fontWeight="medium">
              {competitorText}
            </Text>
          </span>
        </div>
      </Tooltip>
    );
  }

  if (status === "not-mentioned") {
    return (
      <div
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: "4px",
          whiteSpace: "nowrap",
          flexShrink: 0,
        }}
      >
        <Icon source={MinusIcon} tone="critical" />
        <span style={{ flexShrink: 0 }}>
          <Text as="span" variant="bodySm" tone="critical" fontWeight="medium">
            Not Mentioned
          </Text>
        </span>
      </div>
    );
  }

  // not-checked
  return (
    <div
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: "4px",
        whiteSpace: "nowrap",
        flexShrink: 0,
      }}
    >
      <span
        style={{
          fontSize: "14px",
          color: "#6d7175",
          fontWeight: "bold",
          display: "inline-block",
          verticalAlign: "middle",
          flexShrink: 0,
        }}
      >
        ?
      </span>
      <span style={{ flexShrink: 0 }}>
        <Text as="span" variant="bodySm" tone="subdued" fontWeight="medium">
          Not Checked
        </Text>
      </span>
    </div>
  );
};
