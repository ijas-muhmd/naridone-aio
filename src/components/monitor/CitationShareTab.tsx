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

interface CitationShareTabProps {
    filteredRuns: Run[];
    filters: {
        timeRange?: string;
        platforms?: string[];
    };
    DEFAULT_PLATFORMS: string[];
    brandDomain?: string;
    brandName?: string;
    matchesPlatformFilter: (model: string, platformFilter: string) => boolean;
}

export function CitationShareTab({
    filteredRuns,
    filters,
    DEFAULT_PLATFORMS,
    brandDomain,
    brandName,
    matchesPlatformFilter,

}: CitationShareTabProps) {
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

    // Helper to check if a citation belongs to the brand
    const isMyCitation = (citation: any) => {
        if (!citation.domain) return false;
        const domain = citation.domain.toLowerCase();

        // Check against brandDomain (shop domain)
        if (brandDomain) {
            const normalizedShopDomain = brandDomain.replace(/^(https?:\/\/)?(www\.)?/, '').split('/')[0].toLowerCase();
            if (domain === normalizedShopDomain) return true;
            if (domain.endsWith('.' + normalizedShopDomain)) return true;
            // Check slug
            const domainSlug = normalizedShopDomain.split('.')[0];
            if (domainSlug && domainSlug.length > 3 && domain.includes(domainSlug)) return true;
        }

        // Check against brandName
        if (brandName) {
            const normalizedBrandName = brandName.toLowerCase().replace(/[^a-z0-9]/g, '');
            if (normalizedBrandName.length > 2) {
                const cleanDomain = domain.replace(/[^a-z0-9]/g, '');
                if (cleanDomain.includes(normalizedBrandName)) return true;
            }
        }

        return false;
    };

    // Calculate citation share data for line chart - aggregate by date
    const dateMap = new Map<string, { myCitations: number; totalCitations: number; date: Date }>();

    filteredRuns.forEach((run: any) => {
        const runDate = new Date(run.createdAt);
        // Use local date string instead of UTC to match parent component
        const dateKey = toLocalDateString(runDate);
        const citations = run.citations || [];

        const myCitationsCount = citations.filter(isMyCitation).length;
        const totalCitationsCount = citations.length;

        const existing = dateMap.get(dateKey) || { myCitations: 0, totalCitations: 0, date: runDate };
        dateMap.set(dateKey, {
            myCitations: existing.myCitations + myCitationsCount,
            totalCitations: existing.totalCitations + totalCitationsCount,
            date: runDate,
        });
    });

    // Generate data points only for dates with actual data
    const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const lineChartData: Array<{ date: string; dateKey: string; citationShare: number }> = [];

    // Only include dates that have data in dateMap
    Array.from(dateMap.entries())
        .sort(([dateKeyA], [dateKeyB]) => dateKeyA.localeCompare(dateKeyB)) // Sort by date
        .forEach(([dateKey, dayData]) => {
            // Only include dates with actual citations
            if (dayData.totalCitations > 0) {
                const dateObj = dayData.date;
                // Citation share = My Citations / Total Citations * 100
                const citationShare = Number(((dayData.myCitations / dayData.totalCitations) * 100).toFixed(1));

                lineChartData.push({
                    date: `${monthNames[dateObj.getMonth()]} ${dateObj.getDate()}`,
                    dateKey,
                    citationShare: citationShare,
                });
            } else if (dayData.totalCitations === 0) {
                const dateObj = dayData.date;
                lineChartData.push({
                    date: `${monthNames[dateObj.getMonth()]} ${dateObj.getDate()}`,
                    dateKey,
                    citationShare: 0,
                });
            }
        });

    // Calculate overall citation share (average of daily shares)
    const avgCitationShare = lineChartData.length > 0
        ? Number((lineChartData.reduce((sum, d) => sum + d.citationShare, 0) / lineChartData.length).toFixed(1))
        : 0;

    // Calculate platform citation share: average by date, then average across dates
    // For each platform, group runs by date, calculate daily citation share, then average those daily shares
    const platformStatsMap = new Map<string, { dailyShares: number[] }>();

    // For each platform, calculate citation share averages by date
    platformsToShow.forEach(filterKey => {
        const matchingRuns = filteredRuns.filter((run: any) => {
            if (!run.model) return false;
            return matchesPlatformFilter(run.model, filterKey);
        });

        // Group runs by date
        const dateMap = new Map<string, { myCitations: number, totalCitations: number }>();

        matchingRuns.forEach((run: any) => {
            const runDate = new Date(run.createdAt);
            // Use local date string for consistency
            const dateKey = toLocalDateString(runDate);
            const citations = run.citations || [];

            const myCitationsCount = citations.filter(isMyCitation).length;
            const totalCitationsCount = citations.length;

            if (!dateMap.has(dateKey)) {
                dateMap.set(dateKey, { myCitations: 0, totalCitations: 0 });
            }
            const current = dateMap.get(dateKey)!;
            current.myCitations += myCitationsCount;
            current.totalCitations += totalCitationsCount;
        });

        // Calculate daily citation shares for this platform
        const dailyShares: number[] = [];
        dateMap.forEach(({ myCitations, totalCitations }) => {
            if (totalCitations > 0) {
                // Daily share = My Citations / Total Citations * 100
                const dailyShare = (myCitations / totalCitations) * 100;
                dailyShares.push(dailyShare);
            } else {
                dailyShares.push(0);
            }
        });

        platformStatsMap.set(filterKey, { dailyShares });
    });

    // Build bar chart data - show all selected platforms, with 0 for platforms with no data
    const barChartData = platformsToShow.map((filterKey) => {
        const platformInfo = getPlatformInfo(filterKey);
        const stats = platformStatsMap.get(filterKey);

        // Calculate average of daily shares
        let citationShare = 0;
        if (stats && stats.dailyShares.length > 0) {
            const sum = stats.dailyShares.reduce((a, b) => a + b, 0);
            citationShare = Number((sum / stats.dailyShares.length).toFixed(1));
        }

        return {
            platform: platformInfo.name,
            platformKey: filterKey,
            filterKey,
            citationShare: citationShare, // Will be 0 if no data
            icon: platformInfo.logo,
        };
    });

    // Calculate max citation share for Y-axis domain
    const maxShare = Math.max(
        ...lineChartData.map(d => d.citationShare),
        ...barChartData.map(d => d.citationShare),
        44.4
    );

    return (
        <Grid>
            <Grid.Cell columnSpan={{ xs: 6, sm: 6, md: 6, lg: 6, xl: 6 }}>
                <MetricLineChart
                    title="Citation Share"
                    value={avgCitationShare > 0 ? `${avgCitationShare}%` : '0%'}
                    tooltipContent={`The percentage of responses that cite ${brandDomain || 'your brand'} compared to all citations for this prompt. For example, if ${brandDomain || 'your brand'} appears in 20 out of 100 total citations, the citation share is 20%.`}
                    data={lineChartData}
                    dataKey="citationShare"
                    yAxisDomain={[0, maxShare]}
                    yAxisFormatter={(value) => `${value}%`}
                />
            </Grid.Cell>
            <Grid.Cell columnSpan={{ xs: 6, sm: 6, md: 6, lg: 6, xl: 6 }}>
                <MetricBarChart
                    title="Citation Share by Platform"
                    data={barChartData}
                    dataKey="citationShare"
                    yAxisDomain={[0, maxShare]}
                    yAxisFormatter={(value) => `${value}%`}
                    showHiddenSpacer={true}
                    spacerValue="21.9%"
                />
            </Grid.Cell>
        </Grid>
    );
}
