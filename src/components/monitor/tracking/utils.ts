// Helper to extract a snippet around a brand mention
export const getSnippet = (text: string, brand: string) => {
  if (!text) return `Mentioned ${brand}`;
  const index = text.toLowerCase().indexOf(brand.toLowerCase());
  if (index === -1) return `Mentioned ${brand}`;
  const start = Math.max(0, index - 40);
  const end = Math.min(text.length, index + brand.length + 40);
  let snippet = text.substring(start, end);
  if (start > 0) snippet = "..." + snippet;
  if (end < text.length) snippet = snippet + "...";
  return snippet;
};

// Helper to truncate text
export const truncateText = (text: string, maxLength: number = 60): string => {
  if (!text || text.length <= maxLength) return text;
  return text.substring(0, maxLength) + "...";
};

// Helper to calculate average visibility from latest date's runs
export const getAverageVisibilityFromLatestDate = (runs: any[]): number => {
  if (!runs || runs.length === 0) return 0;

  // Handle both Date objects and date strings
  // Use local date string (YYYY-MM-DD) to match the prompt detail page calculation
  const getDateKey = (date: any): string => {
    const d = new Date(date);
    // Use local time instead of UTC to align with user's day perspective
    // This matches how PromptDetail calculates daily stats
    const year = d.getFullYear();
    const month = String(d.getMonth() + 1).padStart(2, "0");
    const day = String(d.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  };

  // Find latest date key present in runs
  const dateTimes = runs
    .map((r) => {
      const d = new Date(r.createdAt);
      return { time: d.getTime(), dateKey: getDateKey(r.createdAt) };
    })
    .sort((a, b) => b.time - a.time);

  if (dateTimes.length === 0) return 0;

  const latestDate = dateTimes[0];
  const latestDateKey = latestDate.dateKey;

  // Filter runs that belong to the latest date (using local date key)
  const latestDateRuns = runs.filter((r) => {
    const runDateKey = getDateKey(r.createdAt);
    return runDateKey === latestDateKey;
  });

  if (latestDateRuns.length === 0) return 0;

  // Calculate visibility based on ranking position (1-5)
  // Rank 1 = 100%, 2 = 80%, 3 = 60%, 4 = 40%, 5 = 20%, >5 or null = 0%
  let totalVisibility = 0;
  latestDateRuns.forEach((run) => {
    let visibility = 0;
    if (run.position && run.position <= 5) {
      visibility = Math.max(0, 120 - run.position * 20);
    } else if (run.visibility !== undefined) {
      // Use pre-calculated visibility if available and position is missing/invalid
      visibility = run.visibility;
    }
    totalVisibility += visibility;
  });

  // Calculate average for that day
  // If we have runs for a day, we average them to get the "Daily Visibility"
  // This avoids penalizing for missed runs if we just want "Average Visibility when run"
  // But if we want "Daily Share of Voice", we might want to consider expected runs.
  // For the table view, "Average Visibility of Latest Runs" is the most useful metric.
  const totalRunCount = latestDateRuns.length;
  if (totalRunCount === 0) return 0;

  const average = Math.round(totalVisibility / totalRunCount);
  return average;
};

// Helper to calculate average sentiment from latest date's runs
export const getAverageSentimentFromLatestDate = (
  runs: any[],
): number | null => {
  if (!runs || runs.length === 0) return null;

  const getDateKey = (date: any): string => {
    const d = new Date(date);
    const year = d.getFullYear();
    const month = String(d.getMonth() + 1).padStart(2, "0");
    const day = String(d.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  };

  const dateTimes = runs
    .map((r) => {
      const d = new Date(r.createdAt);
      return { time: d.getTime(), dateKey: getDateKey(r.createdAt) };
    })
    .sort((a, b) => b.time - a.time);

  if (dateTimes.length === 0) return null;

  const latestDate = dateTimes[0];
  const latestDateKey = latestDate.dateKey;

  const latestDateRuns = runs.filter((r) => {
    const runDateKey = getDateKey(r.createdAt);
    return runDateKey === latestDateKey;
  });

  // Filter out runs with null sentiment
  const validSentiments = latestDateRuns.filter(
    (r) => r.sentiment !== null && r.sentiment !== undefined,
  );

  if (validSentiments.length === 0) return null;

  const sum = validSentiments.reduce((acc, r) => acc + r.sentiment, 0);
  return Math.round(sum / validSentiments.length);
};

// Helper to calculate average rank from latest date's runs
export const getAverageRankFromLatestDate = (runs: any[]): number | null => {
  if (!runs || runs.length === 0) return null;

  const getDateKey = (date: any): string => {
    const d = new Date(date);
    const year = d.getFullYear();
    const month = String(d.getMonth() + 1).padStart(2, "0");
    const day = String(d.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  };

  const dateTimes = runs
    .map((r) => {
      const d = new Date(r.createdAt);
      return { time: d.getTime(), dateKey: getDateKey(r.createdAt) };
    })
    .sort((a, b) => b.time - a.time);

  if (dateTimes.length === 0) return null;

  const latestDate = dateTimes[0];
  const latestDateKey = latestDate.dateKey;

  const latestDateRuns = runs.filter((r) => {
    const runDateKey = getDateKey(r.createdAt);
    return runDateKey === latestDateKey;
  });

  // Filter out runs without position
  const validPositions = latestDateRuns.filter(
    (r) => r.position !== null && r.position !== undefined,
  );

  if (validPositions.length === 0) return null;

  const sum = validPositions.reduce((acc, r) => acc + r.position, 0);
  return Math.round(sum / validPositions.length);
};

// Helper to check if any run has position data
export const hasAnyPositionData = (runs: any[]): boolean => {
  return runs.some((r) => r.position !== null && r.position !== undefined);
};

// Helper to check if any run has sentiment data
export const hasAnySentimentData = (runs: any[]): boolean => {
  return runs.some((r) => r.sentiment !== null && r.sentiment !== undefined);
};

// Helper to check if any run has visibility data (visibility > 0 or position exists)
export const hasAnyVisibilityData = (runs: any[]): boolean => {
  return runs.some((r) => r.visibility > 0 || r.position);
};
