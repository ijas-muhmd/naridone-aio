import { Grid } from "@shopify/polaris";
import { MetricLineChart } from "./MetricLineChart";
import { MetricBarChart } from "./MetricBarChart";
import { getPlatformInfo } from "../../utils/platforms";

interface Run {
    id: string;
    createdAt: Date | string;
    model: string;
    position: number | null;
    citations?: any[];
}

interface AveragePositionTabProps {
    filteredRuns: Run[];
    filters: {
        timeRange?: string;
        platforms?: string[];
    };
    DEFAULT_PLATFORMS: string[];
    matchesPlatformFilter: (model: string, platformFilter: string) => boolean;
}

export function AveragePositionTab({
    filteredRuns,
    filters,
    DEFAULT_PLATFORMS,
    matchesPlatformFilter,
}: AveragePositionTabProps) {
    // Get selected platforms
    const selectedPlatforms = filters.platforms || [];
    const allPlatformsSelected = selectedPlatforms.length === 0 ||
        selectedPlatforms.length >= DEFAULT_PLATFORMS.length;

    // Determine which platforms to show
    const platformsToShow = allPlatformsSelected ? DEFAULT_PLATFORMS : selectedPlatforms;

    // Helper function to get local date string (YYYY-MM-DD) - matches parent component logic
    const toLocalDateString = (date: Date): string => {
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const day = String(date.getDate()).padStart(2, '0');
        return `${year}-${month}-${day}`;
    };

    // Calculate position data for line chart - aggregate by date
    const dateMap = new Map<string, { totalPosition: number; count: number; date: Date }>();

    filteredRuns.forEach((run: any) => {
        if (run.position && run.position > 0) {
            const runDate = new Date(run.createdAt);
            // Use local date string instead of UTC to match parent component
            const dateKey = toLocalDateString(runDate);

            const existing = dateMap.get(dateKey) || { totalPosition: 0, count: 0, date: runDate };
            dateMap.set(dateKey, {
                totalPosition: existing.totalPosition + run.position,
                count: existing.count + 1,
                date: runDate,
            });
        }
    });

    // Generate data points only for dates with actual data
    const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const lineChartData: Array<{ date: string; dateKey: string; position: number }> = [];

    // Only include dates that have data in dateMap
    Array.from(dateMap.entries())
        .sort(([dateKeyA], [dateKeyB]) => dateKeyA.localeCompare(dateKeyB)) // Sort by date
        .forEach(([dateKey, dayData]) => {
            // Only include dates with actual data (count > 0)
            if (dayData.count > 0) {
                const dateObj = dayData.date;
                lineChartData.push({
                    date: `${monthNames[dateObj.getMonth()]} ${dateObj.getDate()}`,
                    dateKey,
                    position: Number((dayData.totalPosition / dayData.count).toFixed(1)),
                });
            }
        });

    // Calculate average position from filtered runs
    const positions = filteredRuns
        .filter((r: any) => r.position && r.position > 0)
        .map((r: any) => r.position);
    const avgPosition = positions.length > 0
        ? Number((positions.reduce((a: number, b: number) => a + b, 0) / positions.length).toFixed(1))
        : 0;

    // Calculate platform position: average by date, then average across dates
    // For each platform, group runs by date, calculate daily average, then average those daily averages
    const platformStatsMap = new Map<string, { dailyAverages: number[] }>();

    // For each platform, calculate position averages by date
    platformsToShow.forEach(filterKey => {
        const matchingRuns = filteredRuns.filter((run: any) => {
            if (!run.model) return false;
            return matchesPlatformFilter(run.model, filterKey);
        });

        // Group runs by date
        const dateMap = new Map<string, { positions: number[] }>();

        matchingRuns.forEach((run: any) => {
            if (run.position && run.position > 0) {
                const runDate = new Date(run.createdAt);
                // Use local date string for consistency
                const dateKey = toLocalDateString(runDate);

                if (!dateMap.has(dateKey)) {
                    dateMap.set(dateKey, { positions: [] });
                }
                dateMap.get(dateKey)!.positions.push(run.position);
            }
        });

        // Calculate daily averages for this platform
        const dailyAverages: number[] = [];
        dateMap.forEach(({ positions }) => {
            if (positions.length > 0) {
                const dailyAvg = positions.reduce((sum, p) => sum + p, 0) / positions.length;
                dailyAverages.push(dailyAvg);
            }
        });

        platformStatsMap.set(filterKey, { dailyAverages });
    });

    // Build bar chart data - show all selected platforms, with 0 for platforms with no data
    const barChartData = platformsToShow.map((filterKey) => {
        const platformInfo = getPlatformInfo(filterKey);
        const stats = platformStatsMap.get(filterKey);

        // Calculate average of daily averages
        let position = 0;
        if (stats && stats.dailyAverages.length > 0) {
            const sum = stats.dailyAverages.reduce((a, b) => a + b, 0);
            position = Number((sum / stats.dailyAverages.length).toFixed(1));
        }

        return {
            platform: platformInfo.name,
            platformKey: filterKey,
            filterKey,
            position: position, // Will be 0 if no data
            icon: platformInfo.logo,
        };
    });

    // Calculate max position for Y-axis domain
    const maxPosition = Math.max(
        ...lineChartData.map(d => d.position),
        ...barChartData.map(d => d.position),
        4.2
    );

    return (
        <Grid>
            <Grid.Cell columnSpan={{ xs: 6, sm: 6, md: 6, lg: 6, xl: 6 }}>
                <MetricLineChart
                    title="Average Position"
                    value={avgPosition > 0 ? `#${avgPosition}` : '—'}
                    tooltipContent="This metric shows the average position your brand is mentioned in AI-generated answers. For example, if your brand is usually listed first, your average position will be close to 1. A lower average position means your brand is more likely to be mentioned at the top."
                    data={lineChartData}
                    dataKey="position"
                    yAxisDomain={[1, maxPosition]}
                    yAxisFormatter={(value) => `#${value}`}
                />
            </Grid.Cell>
            <Grid.Cell columnSpan={{ xs: 6, sm: 6, md: 6, lg: 6, xl: 6 }}>
                <MetricBarChart
                    title="Average Position by Platform"
                    data={barChartData}
                    dataKey="position"
                    yAxisDomain={[0, maxPosition]}
                    yAxisFormatter={(value) => `#${value}`}
                    yAxisReversed={false}
                    showHiddenSpacer={true}
                    spacerValue="#2"
                />
            </Grid.Cell>
        </Grid>
    );
}

