import { IndexTable, Text, Button } from "@shopify/polaris";
import React from "react";

interface RedirectsTableProps {
  redirects: any[];
  loading: boolean;
  handleDelete: (id: string) => void;
  selectedResources: string[];
  allResourcesSelected: boolean;
  handleSelectionChange: any;
}

export const RedirectsTable = ({
  redirects,
  loading,
  handleDelete,
  selectedResources,
  allResourcesSelected,
  handleSelectionChange,
}: RedirectsTableProps) => {
  const resourceName = {
    singular: "redirect",
    plural: "redirects",
  };

  const rowMarkup = redirects.map(({ id, path, target }, index) => (
    <IndexTable.Row
      id={id}
      key={id}
      selected={selectedResources.includes(id)}
      position={index}
    >
      <IndexTable.Cell>
        <Text variant="bodyMd" fontWeight="bold" as="span">
          {path}
        </Text>
      </IndexTable.Cell>
      <IndexTable.Cell>
        <Text variant="bodyMd" as="span">
          → {target}
        </Text>
      </IndexTable.Cell>
      <IndexTable.Cell>
        <Button tone="critical" onClick={() => handleDelete(id)} size="micro">
          Delete
        </Button>
      </IndexTable.Cell>
    </IndexTable.Row>
  ));

  return (
    <IndexTable
      resourceName={resourceName}
      itemCount={redirects.length}
      selectedItemsCount={
        allResourcesSelected ? "All" : selectedResources.length
      }
      onSelectionChange={handleSelectionChange}
      headings={[
        { title: "Path" },
        { title: "Target" },
        { title: "Actions" },
      ]}
      loading={loading}
    >
      {rowMarkup}
    </IndexTable>
  );
};
