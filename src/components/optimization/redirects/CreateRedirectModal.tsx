import { Modal, FormLayout, TextField } from "@shopify/polaris";
import React from "react";

interface CreateRedirectModalProps {
  open: boolean;
  onClose: () => void;
  onCreate: () => void;
  path: string;
  setPath: (value: string) => void;
  target: string;
  setTarget: (value: string) => void;
}

export const CreateRedirectModal = ({
  open,
  onClose,
  onCreate,
  path,
  setPath,
  target,
  setTarget,
}: CreateRedirectModalProps) => {
  return (
    <Modal
      open={open}
      onClose={onClose}
      title="Create URL Redirect"
      primaryAction={{
        content: "Create",
        onAction: onCreate,
      }}
      secondaryActions={[
        {
          content: "Cancel",
          onAction: onClose,
        },
      ]}
    >
      <Modal.Section>
        <FormLayout>
          <TextField
            label="Redirect from (Path)"
            value={path}
            onChange={setPath}
            placeholder="/products/old-name"
            autoComplete="off"
            helpText="e.g. /products/old-shoe"
          />
          <TextField
            label="Redirect to (Target)"
            value={target}
            onChange={setTarget}
            placeholder="/products/new-name"
            autoComplete="off"
            helpText="e.g. /products/new-shoe"
          />
        </FormLayout>
      </Modal.Section>
    </Modal>
  );
};
