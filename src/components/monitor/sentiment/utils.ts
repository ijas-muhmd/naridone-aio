export const getPlatformIconUrl = (source: string) => {
  const s = source.toLowerCase();
  if (s.includes("gpt") || s.includes("openai"))
    return "https://www.google.com/s2/favicons?domain=openai.com&sz=32";
  if (s.includes("claude") || s.includes("anthropic"))
    return "https://www.google.com/s2/favicons?domain=anthropic.com&sz=32";
  if (s.includes("perplexity") || s.includes("sonar"))
    return "https://www.google.com/s2/favicons?domain=perplexity.ai&sz=32";
  if (s.includes("gemini") || s.includes("google"))
    return "https://www.google.com/s2/favicons?domain=google.com&sz=32";
  return "https://www.google.com/s2/favicons?domain=google.com&sz=32"; // Default fallback
};

export const getThemeDetails = (
  theme: string,
  sentimentData: any,
  runIndexMap: Record<string, number>,
) => {
  // Find theme data from props if available
  const themeData = sentimentData.themes.find((t: any) => t.theme === theme);

  if (themeData) {
    // Get run at current index or default to first
    const currentIndex = runIndexMap[theme] || 0;
    const runs = themeData.runs || [];
    const currentRun = runs[currentIndex];

    if (currentRun) {
      return {
        title: currentRun.promptText, // Use prompt text as title per design
        source: currentRun.source || "AI Model",
        logo: getPlatformIconUrl(currentRun.source || ""),
        date: currentRun.date || "",
        region: currentRun.region || "US",
        summary: "", // We use full response instead
        tableData: [],
        fullResponse: currentRun.fullResponse,
        promptText: currentRun.promptText,
        citations: currentRun.citations || [],
        runCount: runs.length,
        currentIndex: currentIndex + 1, // 1-based for UI
      };
    }

    // Fallback for theme with no runs (legacy data support)
    if (themeData.runId) {
      return {
        title: themeData.promptText || themeData.theme,
        source: themeData.source || "AI Model",
        logo: getPlatformIconUrl(themeData.source || ""),
        date: themeData.date || "",
        region: themeData.region || "US",
        summary: themeData.fullResponse
          ? themeData.fullResponse.slice(0, 250) + "..."
          : "",
        tableData: [],
        fullResponse: themeData.fullResponse,
        promptText: themeData.promptText,
        citations: themeData.citations || [],
        runCount: 1,
        currentIndex: 1,
      };
    }
  }
  return null;
};
