import { Tooltip } from "@shopify/polaris";
import React from "react";

interface VolumeBarsProps {
  level: string | number;
}

export const VolumeBars = ({ level }: VolumeBarsProps) => {
  let score = 3; // Default Medium
  let label = "Medium";

  if (typeof level === "number") {
    score = level;
    if (score >= 4.5) label = "Very High";
    else if (score >= 3.5) label = "High";
    else if (score >= 2.5) label = "Medium";
    else if (score >= 1.5) label = "Low";
    else label = "Very Low";
  } else if (typeof level === "string") {
    label = level;
    const l = level.toLowerCase();
    if (l.includes("very high")) score = 5;
    else if (l.includes("high")) score = 4;
    else if (l.includes("medium")) score = 3;
    else if (l.includes("very low")) score = 1;
    else if (l.includes("low")) score = 2;
  }

  // Color logic
  let color = "#e4e5e7"; // Empty
  let filledColor = "#ffc107"; // Default Yellow
  if (score >= 4) filledColor = "#4caf50"; // Green
  else if (score >= 3) filledColor = "#ffc107"; // Yellow
  else filledColor = "#f44336"; // Red

  return (
    <Tooltip content={`${label} Volume (${score}/5)`}>
      <div
        style={{ display: "flex", gap: "3px", alignItems: "center" }}
        role="img"
        aria-label={`${label} Volume`}
      >
        {[1, 2, 3, 4, 5].map((bar) => (
          <div
            key={bar}
            style={{
              width: "4px",
              height: "14px",
              backgroundColor: bar <= score ? filledColor : color,
              borderRadius: "2px",
            }}
          />
        ))}
      </div>
    </Tooltip>
  );
};
