import { Card, Box, BlockStack, InlineStack, Text, Button, Icon, Grid, Layout, Badge, ProgressBar, SkeletonBodyText } from "@shopify/polaris";
import { InfoIcon } from "@shopify/polaris-icons";
import { useNavigate } from "react-router-dom";

interface ImproveSectionProps {
  fixStats: {
    total: number;
    appliedLast30Days: number;
    byStatus: {
      pending: number;
      suggested: number;
      applied: number;
    };
    byPriority: {
      critical: number;
      moderate: number;
      minor: number;
    };
  };
}

export function ImproveSection({ fixStats }: ImproveSectionProps) {
  const navigate = useNavigate();

  return (
    <Card padding="0">
      <div
        style={{
          background: "#fff",
          borderBottom: "1px solid #e1e3e5",
          borderTopLeftRadius: "var(--p-border-radius-300, 8px)",
          borderTopRightRadius: "var(--p-border-radius-300, 8px)",
        }}
      >
        <Box padding="400">
          <InlineStack align="space-between" blockAlign="center">
            <BlockStack gap="050">
              <InlineStack align="start" gap="200" blockAlign="center">
                <div style={{ margin: 0 }}>
                  <Icon source={InfoIcon} tone="subdued" />
                </div>
                <Text as="h3" variant="headingMd">
                  Improve
                </Text>
              </InlineStack>
              <Text as="p" variant="bodySm" tone="subdued">
                Apply AI-generated fixes to your product catalog and track
                optimization impact.
              </Text>
            </BlockStack>
            <Button size="slim" onClick={() => navigate("/app/optimization")}>
              Open Dashboard
            </Button>
          </InlineStack>
        </Box>
      </div>

      <Box padding="400">
        <BlockStack gap="400">
          <Layout>
            <Layout.Section>
              <Card padding="400">
                {!fixStats ? (
                  <SkeletonBodyText lines={2} />
                ) : (
                  <Grid>
                    <Grid.Cell
                      columnSpan={{ xs: 6, sm: 6, md: 3, lg: 3, xl: 3 }}
                    >
                      <FixStatCard
                        label="Total Issues"
                        value={fixStats.total}
                        badge={
                          fixStats.byStatus.pending > 0
                            ? {
                                label: `${fixStats.byStatus.pending} Pending`,
                                tone: "attention" as const,
                              }
                            : undefined
                        }
                      />
                    </Grid.Cell>
                    <Grid.Cell
                      columnSpan={{ xs: 6, sm: 6, md: 3, lg: 3, xl: 3 }}
                    >
                      <FixStatCard
                        label="Critical"
                        value={fixStats.byPriority.critical}
                        subtitle="High priority"
                      />
                    </Grid.Cell>
                    <Grid.Cell
                      columnSpan={{ xs: 6, sm: 6, md: 3, lg: 3, xl: 3 }}
                    >
                      <FixStatCard
                        label="Resolved"
                        value={fixStats.byStatus.applied}
                        subtitle="Last 30 days"
                      />
                    </Grid.Cell>
                    <Grid.Cell
                      columnSpan={{ xs: 6, sm: 6, md: 3, lg: 3, xl: 3 }}
                    >
                      <FixStatCard
                        label="Optimization"
                        value={`${
                          fixStats.total > 0
                            ? Math.round(
                                ((fixStats.total - fixStats.byStatus.pending) /
                                  fixStats.total) *
                                  100
                              )
                            : 0
                        }%`}
                        progress={
                          fixStats.total > 0
                            ? Math.min(
                                100,
                                Math.round(
                                  ((fixStats.total -
                                    fixStats.byStatus.pending) /
                                    fixStats.total) *
                                    100
                                )
                              )
                            : 0
                        }
                      />
                    </Grid.Cell>
                  </Grid>
                )}
              </Card>
            </Layout.Section>
          </Layout>
        </BlockStack>
      </Box>
    </Card>
  );
}

interface FixStatCardProps {
  label: string;
  value: string | number;
  subtitle?: string;
  badge?: {
    label: string;
    tone: "attention" | "success";
  };
  progress?: number;
}

function FixStatCard({
  label,
  value,
  subtitle,
  badge,
  progress,
}: FixStatCardProps) {
  return (
    <BlockStack gap="200">
      <Text variant="bodySm" tone="subdued" as="span">
        {label}
      </Text>
      <Text variant="heading2xl" fontWeight="bold" as="p">
        {value}
      </Text>
      {badge && (
        <InlineStack gap="200" blockAlign="center">
          <Badge tone={badge.tone}>{badge.label}</Badge>
        </InlineStack>
      )}
      {subtitle && (
        <Text variant="bodyXs" tone="subdued" as="span">
          {subtitle}
        </Text>
      )}
      {progress !== undefined && (
        <ProgressBar progress={progress} size="small" tone="primary" />
      )}
    </BlockStack>
  );
}

