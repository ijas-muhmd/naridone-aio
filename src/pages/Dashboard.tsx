import { useEffect, useState } from "react";
import {
  SkeletonPage,
  Layout,
  Card,
  BlockStack,
  SkeletonDisplayText,
  SkeletonBodyText,
  Grid,
} from "@shopify/polaris";
import DashboardMain from "../components/dashboard/DashboardMain";
import { MOCK_DASHBOARD_DATA } from "../mocks/dashboard";

export default function Dashboard() {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState<typeof MOCK_DASHBOARD_DATA | null>(null);

  useEffect(() => {
    // Simulate network request
    const timer = setTimeout(() => {
      setData(MOCK_DASHBOARD_DATA);
      setIsLoading(false);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading || !data) {
    return (
      <SkeletonPage title="Naridon Command Center" fullWidth>
        <Layout>
          <Layout.Section>
            <Grid>
              {[1, 2, 3].map((i) => (
                <Grid.Cell
                  key={i}
                  columnSpan={{ xs: 6, sm: 4, md: 4, lg: 4, xl: 4 }}
                >
                  <Card>
                    <BlockStack gap="400">
                      <SkeletonDisplayText size="small" />
                      <SkeletonBodyText lines={1} />
                    </BlockStack>
                  </Card>
                </Grid.Cell>
              ))}
            </Grid>
          </Layout.Section>
          <Layout.Section>
            <Card>
              <SkeletonBodyText lines={5} />
            </Card>
          </Layout.Section>
        </Layout>
      </SkeletonPage>
    );
  }

  return (
    <DashboardMain
      brandName={data.brandName}
      pendingFixes={data.pendingFixes}
      stats={data.stats}
      chartData={data.chartData}
      fixStats={data.fixStats}
      marketData={data.marketData}
      activeModels={data.activeModels}
      showOnboardingHero={false}
    />
  );
}
