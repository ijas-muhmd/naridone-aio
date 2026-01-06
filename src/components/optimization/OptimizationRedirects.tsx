import {
  Layout,
  Card,
  useIndexResourceState,
  EmptyState,
  Pagination,
  Toast,
  Box,
} from "@shopify/polaris";
import React, { useState } from "react";
import { RedirectsTable } from "./redirects/RedirectsTable";
import { CreateRedirectModal } from "./redirects/CreateRedirectModal";

interface OptimizationRedirectsProps {
  redirects: any[];
  loading: boolean;
  pageInfo: any;
  cursor: string | undefined;
  loadRedirects: (nextCursor?: string) => void;
  handleCreate: (path: string, target: string) => Promise<void>;
  handleDelete: (id: string) => void;
  toastContent: string | null;
  setToastContent: (content: string | null) => void;
}

export const OptimizationRedirects = ({
  redirects,
  loading,
  pageInfo,
  cursor,
  loadRedirects,
  handleCreate,
  handleDelete,
  toastContent,
  setToastContent,
}: OptimizationRedirectsProps) => {
  const [createModalOpen, setCreateModalOpen] = useState(false);
  const [path, setPath] = useState("");
  const [target, setTarget] = useState("");

  const onCreate = async () => {
    await handleCreate(path, target);
    setCreateModalOpen(false);
    setPath("");
    setTarget("");
  };

  const { selectedResources, allResourcesSelected, handleSelectionChange } =
    useIndexResourceState(redirects);

  return (
    <>
      <Layout>
        <Layout.Section>
          <Card padding="0">
            {redirects.length === 0 && !loading ? (
              <EmptyState
                heading="No redirects found"
                action={{
                  content: "Create Redirect",
                  onAction: () => setCreateModalOpen(true),
                }}
                image="https://cdn.shopify.com/s/files/1/0262/4071/2726/files/emptystate-files.png"
              >
                <p>Create redirects to fix broken links and improve SEO.</p>
              </EmptyState>
            ) : (
              <RedirectsTable
                redirects={redirects}
                loading={loading}
                handleDelete={handleDelete}
                selectedResources={selectedResources}
                allResourcesSelected={allResourcesSelected}
                handleSelectionChange={handleSelectionChange}
              />
            )}

            {pageInfo?.hasNextPage && (
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  padding: "16px",
                }}
              >
                <Pagination
                  hasPrevious={!!cursor}
                  onPrevious={() => loadRedirects()} // Simplification: Reset to start
                  hasNext={pageInfo.hasNextPage}
                  onNext={() =>
                    loadRedirects(redirects[redirects.length - 1].cursor)
                  }
                />
              </div>
            )}
          </Card>
        </Layout.Section>
      </Layout>

      <CreateRedirectModal
        open={createModalOpen}
        onClose={() => setCreateModalOpen(false)}
        onCreate={onCreate}
        path={path}
        setPath={setPath}
        target={target}
        setTarget={setTarget}
      />

      {toastContent && (
        <Toast content={toastContent} onDismiss={() => setToastContent(null)} />
      )}
    </>
  );
};
