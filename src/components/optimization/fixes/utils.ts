export const parsePrismaError = (error: string) => {
  if (!error.includes("PrismaClientValidationError")) return null;

  try {
    const invocationMatch = error.match(/invocation:\s*({[\s\S]*})/);
    if (!invocationMatch) return null;

    const content = invocationMatch[1];

    const extractField = (fieldName: string) => {
      const regex = new RegExp(`${fieldName}:\\s*"([^"]*)"`);
      const match = content.match(regex);
      return match ? match[1] : null;
    };

    const extractUnknownArgs = () => {
      const unknown = content.match(/Unknown argument `([^`]*)`/);
      return unknown ? unknown[1] : null;
    };

    return {
      productTitle: extractField("productTitle"),
      productHandle: extractField("productHandle"),
      reason: extractField("reason"),
      unknownArg: extractUnknownArgs(),
    };
  } catch (e) {
    return null;
  }
};

export const getDisplayName = (type: string) => {
  const map: Record<string, string> = {
    MISSED_TREND: "Trending Opportunity",
    COMPETITOR_GAP: "Competitor Threat",
    NEGATIVE_SENTIMENT: "Sentiment Risk",
    WEAK_DESCRIPTION: "Thin Content",
    WEAK_TITLE: "Weak Title",
    MISSING_ALT_TEXT: "Missing Alt Text",
    MISSING_GTIN: "Missing Barcode",
    MISSING_AI_FAQ: "Missing AI FAQ",
    UNSTRUCTURED_SPECS: "Unstructured Data",
    NO_FAQ: "No FAQ Section",
    AMBIGUOUS_TITLE: "Ambiguous Title",
    MISSING_IMAGE: "Missing Image",
    GLOBAL_MISSING_BRAND: "Brand Not Set",
    RISK_DISCLAIMER: "Missing Disclaimer",
    SEASONAL_UPDATE: "Seasonal Update",
    TRUST_SIGNAL_WEAK: "Weak Trust Signals",
    BRAND_IDENTITY_GENERIC: "Generic Identity",
  };
  return map[type] || type.replace(/_/g, " ");
};
