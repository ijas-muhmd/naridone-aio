import { BlockStack, Button, Text } from "@shopify/polaris";
import {
  AlertCircleIcon,
  ClipboardIcon,
  ExternalIcon,
  ThumbsDownIcon,
  ThumbsUpIcon,
} from "@shopify/polaris-icons";
import React, { useState } from "react";
import {
  GenericForumIcon,
  InstagramIcon,
  LinkedInIcon,
  QuoraIcon,
  RedditIcon,
  TikTokIcon,
  TwitterIcon,
  YouTubeIcon,
} from "./PlatformIcons";
import { ExternalMention } from "./types";

interface MentionCardProps {
  mention: ExternalMention;
}

export const MentionCard = ({ mention }: MentionCardProps) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    if (mention.suggestedReply) {
      navigator.clipboard.writeText(mention.suggestedReply);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const sentiment = mention.sentiment ?? 50;
  let sentimentIcon = AlertCircleIcon;
  let sentimentText = "Neutral";
  let sentimentTone: "base" | "success" | "critical" = "base";

  if (sentiment > 70) {
    sentimentIcon = ThumbsUpIcon;
    sentimentText = "Positive";
    sentimentTone = "success";
  } else if (sentiment < 40) {
    sentimentIcon = ThumbsDownIcon;
    sentimentText = "Negative";
    sentimentTone = "critical";
  }

  const platformLower = mention.platform.toLowerCase();

  let PlatformLogo = GenericForumIcon;
  if (platformLower.includes("reddit")) PlatformLogo = RedditIcon;
  else if (platformLower.includes("quora")) PlatformLogo = QuoraIcon;
  else if (
    platformLower.includes("twitter") ||
    platformLower.includes("x.com")
  )
    PlatformLogo = TwitterIcon;
  else if (platformLower.includes("youtube")) PlatformLogo = YouTubeIcon;
  else if (platformLower.includes("instagram")) PlatformLogo = InstagramIcon;
  else if (platformLower.includes("tiktok")) PlatformLogo = TikTokIcon;
  else if (platformLower.includes("linkedin")) PlatformLogo = LinkedInIcon;

  // Extract community/context
  let context = mention.platform;
  try {
    const urlObj = new URL(mention.url);
    if (platformLower.includes("reddit")) {
      const parts = urlObj.pathname.split("/");
      const rIndex = parts.indexOf("r");
      if (rIndex !== -1 && parts[rIndex + 1]) {
        context = `r/${parts[rIndex + 1]}`;
      }
    } else if (platformLower.includes("quora")) {
      context = "Quora Space"; // Generic for now
    } else if (
      platformLower.includes("twitter") ||
      platformLower.includes("x.com")
    ) {
      const pathParts = urlObj.pathname.split("/").filter(Boolean);
      if (pathParts.length > 0) context = `@${pathParts[0]}`;
    } else if (platformLower.includes("youtube")) {
      context = "YouTube Channel"; // Ideally fetch channel name
    } else {
      context = urlObj.hostname.replace("www.", "");
    }
  } catch {}

  const timeAgo = new Date(mention.createdAt).toLocaleDateString(undefined, {
    month: "short",
    day: "numeric",
  });

  return (
    <div
      style={{
        background: "white",
        borderBottom: "1px solid #e1e3e5",
        padding: "16px",
      }}
    >
      <BlockStack gap="300">
        {/* Header Line: Logo, Title, Context, Date, Sentiment */}
        <div
          style={{ display: "flex", gap: "12px", alignItems: "flex-start" }}
        >
          <div style={{ flexShrink: 0, marginTop: "2px" }}>
            <div style={{ width: "20px", height: "20px" }}>
              <PlatformLogo />
            </div>
          </div>

          <div style={{ flex: 1, minWidth: 0 }}>
            <BlockStack gap="050">
              <Text as="h3" variant="bodyMd" fontWeight="semibold">
                {mention.title || "Discussion Thread"}
              </Text>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "6px",
                  flexWrap: "wrap",
                }}
              >
                <Text as="span" variant="bodySm" tone="subdued">
                  {context}
                </Text>
                <Text as="span" variant="bodySm" tone="subdued">
                  •
                </Text>
                <Text as="span" variant="bodySm" tone="subdued">
                  {timeAgo}
                </Text>
                <Text as="span" variant="bodySm" tone="subdued">
                  •
                </Text>
                <Text as="span" variant="bodySm" tone={sentimentTone}>
                  {sentimentText}
                </Text>
              </div>
            </BlockStack>
          </div>
        </div>

        {/* Content */}
        <div style={{ paddingLeft: "32px" }}>
          <Text as="p" variant="bodyMd">
            {mention.summary}
          </Text>
        </div>

        {/* Suggested Reply */}
        {mention.suggestedReply && (
          <div style={{ paddingLeft: "32px" }}>
            <div
              style={{
                background: "#F7F7F7",
                borderRadius: "8px",
                padding: "12px",
                border: "1px solid #E1E3E5",
              }}
            >
              <BlockStack gap="200">
                <Text
                  as="span"
                  variant="bodyXs"
                  fontWeight="bold"
                  tone="subdued"
                  style={{ textTransform: "uppercase" }}
                >
                  Suggested Reply
                </Text>
                <Text as="p" variant="bodyMd" style={{ color: "#202223" }}>
                  {mention.suggestedReply}
                </Text>
              </BlockStack>
            </div>
          </div>
        )}

        {/* Footer Buttons */}
        <div
          style={{
            paddingLeft: "32px",
            display: "flex",
            alignItems: "center",
            gap: "12px",
          }}
        >
          <div style={{ width: "120px" }}>
            {mention.suggestedReply && (
              <Button
                icon={ClipboardIcon}
                onClick={handleCopy}
                fullWidth
              >
                {copied ? "Copied" : "Copy"}
              </Button>
            )}
          </div>
          <div style={{ width: "120px" }}>
            <Button
              url={mention.url}
              target="_blank"
              icon={ExternalIcon}
              fullWidth
            >
              Visit page
            </Button>
          </div>
        </div>
      </BlockStack>
    </div>
  );
};
