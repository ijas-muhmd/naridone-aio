import { Modal, CalloutCard, BlockStack, Text, Box } from "@shopify/polaris";
import React from "react";

interface FixDetailsModalProps {
  open: boolean;
  onClose: () => void;
  selectedReason: string | null;
  parsedError: any;
  selectedReport: any;
}

export const FixDetailsModal = ({
  open,
  onClose,
  selectedReason,
  parsedError,
  selectedReport,
}: FixDetailsModalProps) => {
  return (
    <Modal
      open={open}
      onClose={onClose}
      title={selectedReport ? "Optimization Report" : "Issue Details"}
      primaryAction={{ content: "Close", onAction: onClose }}
    >
      <Modal.Section>
        {selectedReport ? (
          <BlockStack gap="400">
            <CalloutCard
              title="Impact Analysis"
              illustration="https://cdn.shopify.com/s/assets/admin/checkout/settings-customizecart-727f309b55605ad968127e690135d944ba4430e12481775a5c9812674258c894.svg"
              primaryAction={{
                content: "Learn more",
                url: "https://help.shopify.com",
              }}
            >
              <p>
                The changes applied have resulted in a measurable improvement in
                search visibility.
              </p>
            </CalloutCard>
            <Box
              padding="400"
              background="bg-surface-secondary"
              borderRadius="200"
            >
              <BlockStack gap="200">
                <Text as="h3" variant="headingSm">
                  Metrics
                </Text>
                <p>
                  Visibility Score: +
                  {Math.round((selectedReport.visibility_lift || 0) * 100)}%
                </p>
                <p>
                  Click-Through Rate: +
                  {Math.round((selectedReport.ctr_lift || 0) * 100)}%
                </p>
              </BlockStack>
            </Box>
          </BlockStack>
        ) : parsedError ? (
          <BlockStack gap="400">
            <CalloutCard
              title="Database Validation Error"
              illustration="https://cdn.shopify.com/s/assets/admin/checkout/settings-customizecart-727f309b55605ad968127e690135d944ba4430e12481775a5c9812674258c894.svg"
              primaryAction={{
                content: "Retry Fix",
                onAction: onClose, // In real app, might trigger retry
              }}
            >
              <p>
                The fix could not be applied because of a data integrity issue.
              </p>
            </CalloutCard>
            <Box
              padding="400"
              background="bg-surface-secondary"
              borderRadius="200"
            >
              <BlockStack gap="200">
                <Text as="h3" variant="headingSm">
                  Technical Details
                </Text>
                {parsedError.productTitle && (
                  <p>
                    <strong>Product:</strong> {parsedError.productTitle}
                  </p>
                )}
                {parsedError.reason && (
                  <p>
                    <strong>Reason:</strong> {parsedError.reason}
                  </p>
                )}
                {parsedError.unknownArg && (
                  <p>
                    <strong>Unknown Argument:</strong> {parsedError.unknownArg}
                  </p>
                )}
              </BlockStack>
            </Box>
          </BlockStack>
        ) : (
          <Text as="p">{selectedReason || "No details available."}</Text>
        )}
      </Modal.Section>
    </Modal>
  );
};
