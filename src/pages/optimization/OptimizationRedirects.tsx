import { useState, useEffect } from "react";
import { OptimizationRedirects } from "../../components/optimization/OptimizationRedirects";

// Mock Data
const MOCK_REDIRECTS = {
  redirects: [
    {
      id: "1",
      path: "/products/old-summer-collection",
      target: "/collections/summer-sale",
    },
    {
      id: "2",
      path: "/pages/contact-old",
      target: "/pages/contact-us",
    },
    {
      id: "3",
      path: "/broken-link-1",
      target: "/",
    },
  ],
  pageInfo: {
    hasNextPage: false,
    endCursor: "cursor_123",
  },
};

export default function RedirectsPage() {
  const [redirects, setRedirects] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [pageInfo, setPageInfo] = useState<any>(null);
  const [cursor, setCursor] = useState<string | undefined>(undefined);
  const [toastContent, setToastContent] = useState<string | null>(null);

  // Initial Load & Updates
  useEffect(() => {
    loadRedirects();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function loadRedirects(nextCursor?: string) {
    setLoading(true);
    // Simulate fetch delay
    setTimeout(() => {
      setRedirects(MOCK_REDIRECTS.redirects);
      setPageInfo(MOCK_REDIRECTS.pageInfo);
      if (nextCursor) setCursor(nextCursor);
      setLoading(false);
    }, 500);
  }

  const handleCreate = async (path: string, target: string) => {
    setLoading(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // Optimistic update (in real app, we'd reload or append)
    setRedirects((prev) => [
      ...prev,
      { id: `new-${Date.now()}`, path, target },
    ]);
    setLoading(false);
    setToastContent("Redirect created");
  };

  const handleDelete = (id: string) => {
    // Optimistic update
    setRedirects((prev) => prev.filter((r) => r.id !== id));
    setToastContent("Redirect deleted");
  };

  return (
    <OptimizationRedirects
      redirects={redirects}
      loading={loading}
      pageInfo={pageInfo}
      cursor={cursor}
      loadRedirects={loadRedirects}
      handleCreate={handleCreate}
      handleDelete={handleDelete}
      toastContent={toastContent}
      setToastContent={setToastContent}
    />
  );
}
