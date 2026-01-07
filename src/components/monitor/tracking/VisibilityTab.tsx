import { Grid } from "@shopify/polaris";
import { MetricLineChart } from "./charts/MetricLineChart";
import { MetricBarChart } from "./charts/MetricBarChart";
import { getPlatformInfo } from "../../../utils/platforms";

interface Run {
    id: string;
    createdAt: Date | string;
    model: string;
    position: number | null;
    visibility?: number | null;
    citations?: any[];
}

interface VisibilityTabProps {
    filteredRuns: Run[];
    filters: {
        timeRange?: string;
        platforms?: string[];
    };
    DEFAULT_PLATFORMS: string[];
    matchesPlatformFilter: (model: string, platformFilter: string) => boolean;
}

export function VisibilityTab({
    filteredRuns,
    filters,
    DEFAULT_PLATFORMS,
    matchesPlatformFilter,
}: VisibilityTabProps) {
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

    // Calculate filtered visibility data for line chart - aggregate by date
    const dateMap = new Map<string, { totalVisibility: number; count: number; date: Date }>();

    filteredRuns.forEach((run: any) => {
        const runDate = new Date(run.createdAt);
        // Use local date string instead of UTC to match parent component
        const dateKey = toLocalDateString(runDate);

        // Use visibility from run if available, otherwise calculate from position
        let visibility = 0;
        if (run.visibility !== null && run.visibility !== undefined) {
            visibility = run.visibility;
        } else if (run.position && run.position > 0) {
            visibility = 100 / run.position;
        }
        // If visibility is null/undefined and position is null/0, visibility stays 0

        const existing = dateMap.get(dateKey) || { totalVisibility: 0, count: 0, date: runDate };
        dateMap.set(dateKey, {
            totalVisibility: existing.totalVisibility + visibility,
            count: existing.count + 1,
            date: runDate,
        });
    });

    // Generate data points only for dates with actual data
    const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const lineChartData: Array<{ date: string; dateKey: string; visibility: number }> = [];

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
                    visibility: Math.round(dayData.totalVisibility / dayData.count),
                });
            }
        });

    // Calculate average visibility score from filtered runs
    const visibilityScores = filteredRuns.map((r: any) => {
        // Use visibility from run if available, otherwise calculate from position
        if (r.visibility !== null && r.visibility !== undefined) {
            return r.visibility;
        } else if (r.position && r.position > 0) {
            return 100 / r.position;
        }
        return 0;
    });

    const avgScore = visibilityScores.length > 0
        ? Math.round(visibilityScores.reduce((a: number, b: number) => a + b, 0) / visibilityScores.length)
        : 0;

    // Calculate platform visibility: average by date, then average across dates
    // For each platform, group runs by date, calculate daily average, then average those daily averages
    const platformStatsMap = new Map<string, { dailyAverages: number[] }>();

    // For each platform, calculate visibility averages by date
    platformsToShow.forEach(filterKey => {
        const matchingRuns = filteredRuns.filter((run: any) => {
            if (!run.model) return false;
            return matchesPlatformFilter(run.model, filterKey);
        });

        // Group runs by date
        const dateMap = new Map<string, { visibilities: number[] }>();

        matchingRuns.forEach((run: any) => {
            const runDate = new Date(run.createdAt);
            // Use local date string for consistency
            const dateKey = toLocalDateString(runDate);

            // Calculate visibility: use run.visibility if available, otherwise calculate from position
            let visibility = 0;
            if (run.visibility !== null && run.visibility !== undefined) {
                visibility = run.visibility;
            } else if (run.position && run.position > 0) {
                visibility = 100 / run.position;
            }
            // If visibility is null/undefined and position is null/0, visibility stays 0

            if (!dateMap.has(dateKey)) {
                dateMap.set(dateKey, { visibilities: [] });
            }
            dateMap.get(dateKey)!.visibilities.push(visibility);
        });

        // Calculate daily averages for this platform
        const dailyAverages: number[] = [];
        dateMap.forEach(({ visibilities }) => {
            if (visibilities.length > 0) {
                const dailyAvg = visibilities.reduce((sum, v) => sum + v, 0) / visibilities.length;
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
        let visibility = 0;
        if (stats && stats.dailyAverages.length > 0) {
            const sum = stats.dailyAverages.reduce((a, b) => a + b, 0);
            visibility = Math.round(sum / stats.dailyAverages.length);
        }

        return {
            platform: platformInfo.name,
            platformKey: filterKey,
            filterKey,
            visibility: visibility, // Will be 0 if no data
            icon: platformInfo.logo,
        };
    });

    return (
        <Grid>
            <Grid.Cell columnSpan={{ xs: 6, sm: 6, md: 6, lg: 6, xl: 6 }}>
                <MetricLineChart
                    title="Visibility Score"
                    value={`${avgScore}%`}
                    tooltipContent="Example: McDonald's is mentioned in 50 responses out of a total 100 responses tracked. The visibility score will be 50% (50/100)"
                    data={lineChartData}
                    dataKey="visibility"
                    yAxisDomain={[0, 110]}
                    yAxisFormatter={(value) => `${value}%`}
                />
            </Grid.Cell>
            <Grid.Cell columnSpan={{ xs: 6, sm: 6, md: 6, lg: 6, xl: 6 }}>
                <MetricBarChart
                    title="Visibility Score by Platform"
                    data={barChartData}
                    dataKey="visibility"
                    yAxisDomain={[0, 110]}
                    yAxisFormatter={(value) => `${value}%`}
                    showHiddenSpacer={true}
                    spacerValue="100%"
                />
            </Grid.Cell>
        </Grid>
    );
}

