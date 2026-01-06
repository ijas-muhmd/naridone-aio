import React from "react";

export interface TitleBarProps {
  title?: string;
  primaryAction?: {
    content: string;
    onAction: () => void;
    disabled?: boolean;
    loading?: boolean;
    destructive?: boolean;
  };
  secondaryActions?: Array<{
    content: string;
    onAction: () => void;
    disabled?: boolean;
    loading?: boolean;
    destructive?: boolean;
  }>;
  breadcrumbs?: Array<{
    content: string;
    onAction: () => void;
  }>;
}

/**
 * Mock TitleBar component to replace @shopify/app-bridge-react/TitleBar
 * This component renders nothing as the Page component from Polaris should handle the title and actions in the UI.
 */
export function TitleBar(props: TitleBarProps) {
  return null;
}
