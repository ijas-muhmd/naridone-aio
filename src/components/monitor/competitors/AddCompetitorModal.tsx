import { Modal, BlockStack, TextField } from "@shopify/polaris";
import React, { useState, useCallback } from "react";

interface AddCompetitorModalProps {
  open: boolean;
  onClose: () => void;
  onAdd: (name: string) => void;
  loading?: boolean;
}

export function AddCompetitorModal({
  open,
  onClose,
  onAdd,
  loading = false,
}: AddCompetitorModalProps) {
  const [name, setName] = useState("");

  const handleAdd = useCallback(() => {
    if (name.trim()) {
      onAdd(name);
      setName("");
    }
  }, [name, onAdd]);

  const handleClose = useCallback(() => {
    setName("");
    onClose();
  }, [onClose]);

  return (
    <Modal
      open={open}
      onClose={handleClose}
      title="Add Competitor"
      primaryAction={{
        content: "Add",
        onAction: handleAdd,
        disabled: !name.trim() || loading,
        loading: loading,
      }}
      secondaryActions={[
        {
          content: "Cancel",
          onAction: handleClose,
          disabled: loading,
        },
      ]}
    >
      <Modal.Section>
        <BlockStack gap="400">
          <TextField
            label="Competitor Name"
            value={name}
            onChange={setName}
            autoComplete="off"
            placeholder="e.g. Nike, Adidas"
            disabled={loading}
          />
        </BlockStack>
      </Modal.Section>
    </Modal>
  );
}
