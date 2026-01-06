import { Icon, Tooltip } from "@shopify/polaris";
import { GlobeIcon } from "@shopify/polaris-icons";
import { useState } from "react";

// Helper to extract a snippet around a brand mention
const getSnippet = (text: string, brand: string) => {
  if (!text) return `Mentioned ${brand}`;
  const index = text.toLowerCase().indexOf(brand.toLowerCase());
  if (index === -1) return `Mentioned ${brand}`;
  const start = Math.max(0, index - 40);
  const end = Math.min(text.length, index + brand.length + 40);
  let snippet = text.substring(start, end);
  if (start > 0) snippet = "..." + snippet;
  if (end < text.length) snippet = snippet + "...";
  return snippet;
};

interface BrandIconProps {
  name: string;
  fullText?: string;
}

export const BrandIcon = ({ name, fullText }: BrandIconProps) => {
  const [error, setError] = useState(false);
  const domain = name.toLowerCase().replace(/[^a-z0-9]/g, "") + ".com";
  const faviconUrl = `https://www.google.com/s2/favicons?domain=${domain}&sz=32`;
  const snippet = fullText ? getSnippet(fullText, name) : name;

  const iconMarkup = error ? (
    <div
      style={{
        width: 20,
        height: 20,
        borderRadius: "4px",
        background: "#f1f2f4",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Icon source={GlobeIcon} tone="subdued" />
    </div>
  ) : (
    <img
      src={faviconUrl}
      alt={name}
      style={{
        width: 20,
        height: 20,
        borderRadius: "4px",
        objectFit: "contain",
      }}
      onError={() => setError(true)}
    />
  );

  return (
    <Tooltip content={snippet} preferredPosition="above">
      <div style={{ cursor: "help" }}>{iconMarkup}</div>
    </Tooltip>
  );
};
