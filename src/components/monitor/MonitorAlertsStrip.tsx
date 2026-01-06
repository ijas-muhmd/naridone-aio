import { Banner, InlineStack, Text, Button, BlockStack } from "@shopify/polaris";
import { AlertCircleIcon, CheckCircleIcon } from "@shopify/polaris-icons";

interface Alert {
    id: string;
    type: 'warning' | 'critical' | 'info' | 'success';
    message: string;
    action?: { label: string; onAction: () => void };
}

interface MonitorAlertsStripProps {
    alerts: Alert[];
}

export function MonitorAlertsStrip({ alerts }: MonitorAlertsStripProps) {
    // Only show when there are relevant alerts
    if (alerts.length === 0) return null;

    return (
        <BlockStack gap="200">
            {alerts.map((alert) => (
                <Banner
                    key={alert.id}
                    title={alert.message}
                    tone={alert.type}
                    onDismiss={() => {}}
                    action={alert.action ? {
                        content: alert.action.label,
                        onAction: alert.action.onAction
                    } : undefined}
                />
            ))}
        </BlockStack>
    );
}

