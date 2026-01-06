import { Icon } from "@shopify/polaris";
import { GlobeIcon } from "@shopify/polaris-icons";
import React from "react";

interface DomainIconProps {
  iconType: "favicon" | "custom" | "globe";
  domain?: string;
  iconText?: string;
  iconColor?: string;
  iconShape?: "diamond";
}

export const DomainIcon = ({
  iconType,
  domain,
  iconText,
  iconColor,
  iconShape,
}: DomainIconProps) => {
  if (iconType === "favicon" && domain) {
    return (
      <div
        style={{
          width: "20px",
          height: "20px",
          borderRadius: "4px",
          overflow: "hidden",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexShrink: 0,
        }}
      >
        <img
          src={`https://www.google.com/s2/favicons?domain=${domain}&sz=64`}
          alt={domain}
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      </div>
    );
  }

  if (iconType === "globe") {
    return (
      <div
        style={{
          width: "20px",
          height: "20px",
          borderRadius: "4px",
          overflow: "hidden",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexShrink: 0,
          backgroundColor: "#f1f2f4",
        }}
      >
        <Icon source={GlobeIcon} tone="subdued" />
      </div>
    );
  }

  if (iconType === "custom" && iconText && iconColor) {
    if (iconShape === "diamond") {
      return (
        <div
          style={{
            width: "20px",
            height: "20px",
            borderRadius: "4px",
            overflow: "hidden",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: iconColor,
            position: "relative",
            flexShrink: 0,
          }}
        >
          <div
            style={{
              width: "12px",
              height: "12px",
              backgroundColor: iconColor,
              border: "2px solid white",
              borderRadius: "2px",
              transform: "rotate(45deg)",
              position: "relative",
            }}
          >
            <div
              style={{
                width: "6px",
                height: "6px",
                backgroundColor: "white",
                borderRadius: "1px",
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
              }}
            ></div>
          </div>
        </div>
      );
    }

    return (
      <div
        style={{
          width: "20px",
          height: "20px",
          borderRadius: "4px",
          overflow: "hidden",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: iconColor,
          flexShrink: 0,
        }}
      >
        <span
          style={{
            color: "white",
            fontSize: iconText.length > 2 ? "10px" : "12px",
            fontWeight: "bold",
          }}
        >
          {iconText}
        </span>
      </div>
    );
  }

  return null;
};
