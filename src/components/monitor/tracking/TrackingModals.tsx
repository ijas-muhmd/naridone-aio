import { Modal, Text } from "@shopify/polaris";
import React from "react";

interface TrackingModalsProps {
  // Delete Modal
  deleteModalOpen: boolean;
  closeDeleteModal: () => void;
  handleDeleteConfirm: () => void;
  isDeleting: boolean;
  deletePromptIds: string[];

  // Dismiss Modal
  dismissModalOpen: boolean;
  closeDismissModal: () => void;
  handleDismissConfirm: () => void;
  isDismissing: boolean;

  // Toggle Status Modal
  toggleStatusModalOpen: boolean;
  closeToggleStatusModal: () => void;
  handleToggleStatusConfirm: () => void;
  isTogglingStatus: boolean;
  toggleStatusCurrentStatus: string | null;
}

export const TrackingModals = ({
  deleteModalOpen,
  closeDeleteModal,
  handleDeleteConfirm,
  isDeleting,
  deletePromptIds,
  dismissModalOpen,
  closeDismissModal,
  handleDismissConfirm,
  isDismissing,
  toggleStatusModalOpen,
  closeToggleStatusModal,
  handleToggleStatusConfirm,
  isTogglingStatus,
  toggleStatusCurrentStatus,
}: TrackingModalsProps) => {
  return (
    <>
      <Modal
        open={deleteModalOpen}
        onClose={closeDeleteModal}
        title="Delete Prompt(s)"
        primaryAction={{
          content: "Delete",
          destructive: true,
          loading: isDeleting,
          onAction: handleDeleteConfirm,
        }}
        secondaryActions={[
          {
            content: "Cancel",
            onAction: closeDeleteModal,
            disabled: isDeleting,
          },
        ]}
      >
        <Modal.Section>
          <Text as="p">
            {deletePromptIds.length === 1
              ? "Are you sure you want to delete this prompt? This action cannot be undone."
              : `Are you sure you want to delete ${deletePromptIds.length} prompt(s)? This action cannot be undone.`}
          </Text>
        </Modal.Section>
      </Modal>

      <Modal
        open={dismissModalOpen}
        onClose={closeDismissModal}
        title="Dismiss Suggestion"
        primaryAction={{
          content: "Dismiss",
          destructive: true,
          loading: isDismissing,
          onAction: handleDismissConfirm,
        }}
        secondaryActions={[
          {
            content: "Cancel",
            onAction: closeDismissModal,
            disabled: isDismissing,
          },
        ]}
      >
        <Modal.Section>
          <Text as="p">
            Are you sure you want to dismiss this suggestion? This action cannot
            be undone.
          </Text>
        </Modal.Section>
      </Modal>

      <Modal
        open={toggleStatusModalOpen}
        onClose={closeToggleStatusModal}
        title={
          toggleStatusCurrentStatus === "ACTIVE"
            ? "Disable Prompt"
            : "Enable Prompt"
        }
        primaryAction={{
          content:
            toggleStatusCurrentStatus === "ACTIVE" ? "Disable" : "Enable",
          loading: isTogglingStatus,
          onAction: handleToggleStatusConfirm,
        }}
        secondaryActions={[
          {
            content: "Cancel",
            onAction: closeToggleStatusModal,
            disabled: isTogglingStatus,
          },
        ]}
      >
        <Modal.Section>
          <Text as="p">
            {toggleStatusCurrentStatus === "ACTIVE"
              ? "Are you sure you want to disable this prompt? It will stop tracking until you enable it again."
              : "Are you sure you want to enable this prompt? It will start tracking."}
          </Text>
        </Modal.Section>
      </Modal>
    </>
  );
};
