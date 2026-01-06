export const MOCK_MONITOR_DATA = {
  // Tab 0: Dashboard
  dashboard: {
    latestRun: {},
    shareOfVoiceTrend: [
      { date: "2023-10-01", value: 45 },
      { date: "2023-10-02", value: 48 },
      { date: "2023-10-03", value: 52 },
      { date: "2023-10-04", value: 50 },
      { date: "2023-10-05", value: 58 },
    ],
    competitors: [
      {
        id: "comp-1",
        name: "Competitor X",
        type: "COMPETITOR",
        domain: "competitor-x.com",
        strength: 8,
        stats: { visibility: 30, sentiment: 65, position: 2, mentions: 45 },
      },
      {
        id: "comp-2",
        name: "Competitor Y",
        type: "COMPETITOR",
        domain: "competitor-y.com",
        strength: 6,
        stats: { visibility: 25, sentiment: 70, position: 3, mentions: 30 },
      },
      {
        id: "you",
        name: "Acme Corp",
        type: "YOU",
        domain: "acme.com",
        stats: { visibility: 65, sentiment: 78, position: 1 },
      },
    ],
    signals: [
      {
        id: "sig-1",
        type: "VISIBILITY_OPP",
        severity: "HIGH",
        message: 'High-importance product with weak or missing description: "Premium Hiking Boots".',
      },
      {
        id: "sig-2",
        type: "SENTIMENT_RISK",
        severity: "MEDIUM",
        message: "Negative sentiment detected in Reddit discussions about shipping times.",
      },
    ],
    potentialRevenue: 12500,
    shareOfVoiceStats: [
      { name: "You", value: 45, fill: "#4caf50" },
      { name: "Competitor X", value: 30, fill: "#ff5252" },
      { name: "Competitor Y", value: 25, fill: "#2196f3" },
    ],
  },
  stats: {
    totalPrompts: 150,
    visibilityScore: 65,
    avgSentiment: 78,
    brandDefenseScore: 92,
    invisibleCount: 5,
  },
  chartData: [
    { label: "Mon", "Acme Corp": 45, "Competitor X": 30 },
    { label: "Tue", "Acme Corp": 48, "Competitor X": 32 },
    { label: "Wed", "Acme Corp": 52, "Competitor X": 35 },
    { label: "Thu", "Acme Corp": 50, "Competitor X": 38 },
    { label: "Fri", "Acme Corp": 58, "Competitor X": 36 },
  ],
  dashboardCharts: [
    { name: "Mon", defense: 88 },
    { name: "Tue", defense: 90 },
    { name: "Wed", defense: 92 },
    { name: "Thu", defense: 91 },
    { name: "Fri", defense: 95 },
  ],
  deepDiveStats: {
    recommendationRate: 72,
    citationCount: 45,
    competitorGap: 15,
  },
  competitorInsights: [
    {
      id: "insight-1",
      brand: "Competitor X",
      sentiment: 85,
      snippet: "Users frequently recommend Competitor X for their durability and customer service response times.",
      model: "chatgpt-search",
      position: 1,
      createdAt: new Date().toISOString(),
      prompt: "Best hiking boots for durability",
    },
    {
      id: "insight-2",
      brand: "Competitor Y",
      sentiment: 40,
      snippet: "Some complaints about shipping delays and packaging quality for Competitor Y.",
      model: "perplexity-sonar",
      position: 3,
      createdAt: new Date().toISOString(),
      prompt: "Fastest shipping outdoor gear",
    },
  ],
  topicRankings: [
    { name: "Hiking", rank: 1, change: 0 },
    { name: "Camping", rank: 3, change: 2 },
    { name: "Running", rank: 2, change: -1 },
  ],

  // Tab 1: Tracking
  tracking: {
    prompts: [
      {
        id: "prompt-1",
        text: "Best hiking boots for beginners",
        status: "ACTIVE",
        topic: "Hiking",
        tags: "seo, product",
        volume: "High",
        runs: [
          {
            position: 1,
            sentiment: 85,
            visibility: 100,
            mentions: [{ id: "m1", brand: { name: "Acme Corp" } }],
            citations: ["review-site.com", "blog.com"],
            response: "Acme Corp offers the best hiking boots for beginners...",
          },
        ],
        linkedProducts: [{ productId: "p1", productTitle: "Trail Blazer 500" }],
      },
      {
        id: "prompt-2",
        text: "Lightweight camping tents",
        status: "ACTIVE",
        topic: "Camping",
        tags: "summer",
        volume: "Medium",
        runs: [
          {
            position: 3,
            sentiment: 70,
            visibility: 60,
            mentions: [{ id: "m2", brand: { name: "Acme Corp" } }],
            citations: ["outdoor-mag.com"],
            response: "Top contenders include Competitor X and Acme Corp...",
          },
        ],
        linkedProducts: [],
      },
      {
        id: "prompt-3",
        text: "Waterproof running jackets",
        status: "SUGGESTED",
        topic: "Running",
        tags: "apparel",
        volume: "Low",
        runs: [],
        linkedProducts: [],
      },
    ],
  },
  locationStats: [
    { location: "United States", count: 85 },
    { location: "United Kingdom", count: 40 },
    { location: "Canada", count: 25 },
  ],
  watchlistSummary: {
    total: 12,
    high: 5,
  },
  sentimentTrendData: [
    { date: "Mon", value: 75 },
    { date: "Tue", value: 78 },
    { date: "Wed", value: 76 },
    { date: "Thu", value: 80 },
    { date: "Fri", value: 82 },
  ],

  // Tab 2: Competitors
  competitors: {
    list: [
      {
        id: "comp-1",
        name: "Competitor X",
        type: "COMPETITOR",
        domain: "competitor-x.com",
        stats: { visibility: 30, sentiment: 65, position: 2 },
      },
      {
        id: "comp-2",
        name: "Competitor Y",
        type: "COMPETITOR",
        domain: "competitor-y.com",
        stats: { visibility: 25, sentiment: 70, position: 3 },
      },
      {
        id: "you",
        name: "Acme Corp",
        type: "YOU",
        domain: "acme.com",
        isSelf: true,
        stats: { visibility: 65, sentiment: 78, position: 1 },
      },
    ],
    suggested: [
      {
        id: "s-1",
        name: "New Rival Inc",
        domain: "newrival.com",
        mentions: 12,
      },
    ],
  },

  // Tab 3: Citations
  citations: {
    barChartData: [
      { name: "nytimes.com", value: 15 },
      { name: "reddit.com", value: 12 },
      { name: "techcrunch.com", value: 8 },
      { name: "medium.com", value: 5 },
      { name: "acme.com", value: 45 }, // Owned
    ],
    lineChartData: [
      { date: "Mon", "nytimes.com": 10, "reddit.com": 5 },
      { date: "Tue", "nytimes.com": 12, "reddit.com": 8 },
      { date: "Wed", "nytimes.com": 15, "reddit.com": 12 },
    ],
    citationTypesData: [
      {
        name: "Citation Types",
        Earned: 60,
        Social: 20,
        Owned: 15,
        Competition: 5,
      },
    ],
    topCitationDomains: [
      {
        rank: 1,
        domain: "nytimes.com",
        share: 15,
        change: 2,
        category: "Earned",
        iconType: "favicon",
        subdomains: 5,
        pages: [{ url: "nytimes.com/review", share: 8 }],
      },
      {
        rank: 2,
        domain: "acme.com",
        share: 12,
        change: 0,
        category: "Owned",
        iconType: "favicon",
        subdomains: 10,
        pages: [{ url: "acme.com/product", share: 12 }],
      },
    ],
    topCitationPages: [
      {
        rank: 1,
        page: "nytimes.com/review/best-boots",
        share: 8,
        change: 1,
        category: "Earned",
        mentioned: "mentioned",
        iconType: "favicon",
        domain: "nytimes.com",
      },
    ],
    totalCitations: 450,
  },

  // Tab 4: Mentions
  externalMentions: [
    {
      id: "m-1",
      platform: "Reddit",
      title: "Is Acme Corp legit?",
      summary: "User asking about product quality. Comments are mostly positive.",
      sentiment: 80,
      mentionCount: 1,
      suggestedReply: "Hey there! We offer a 30-day money back guarantee...",
      url: "https://reddit.com/r/hiking/comments/123",
      createdAt: new Date().toISOString(),
    },
    {
      id: "m-2",
      platform: "Twitter",
      title: null,
      summary: "Just got my new boots from @AcmeCorp! Loving them.",
      sentiment: 95,
      mentionCount: 1,
      suggestedReply: "Thanks for the shoutout! Happy hiking! 🥾",
      url: "https://twitter.com/user/status/123",
      createdAt: new Date(Date.now() - 86400000).toISOString(),
    },
  ],
  mentionsTrend: [
    { date: "2023-10-01", Reddit: 5, Twitter: 10, Quora: 2 },
    { date: "2023-10-02", Reddit: 8, Twitter: 12, Quora: 1 },
    { date: "2023-10-03", Reddit: 4, Twitter: 15, Quora: 3 },
  ],
  mentionsPagination: {
    page: 1,
    limit: 20,
    total: 45,
    totalPages: 3,
  },
  productGroups: [],

  // Tab 5: Sentiment
  sentiment: {
    currentValue: 78,
    positiveSentiment: 75,
    negativeSentiment: 15, // Neutral 10
    positiveReasons: ["Quality", "Customer Service", "Durability"],
    negativeReasons: ["Shipping Cost", "Color Options"],
    lineChartData: [
      { date: "Mon", value: 70 },
      { date: "Tue", value: 72 },
      { date: "Wed", value: 78 },
    ],
    barChartData: [
      { date: "Mon", value: 70 },
      { date: "Tue", value: 72 },
      { date: "Wed", value: 78 },
    ],
    themes: [
      {
        theme: "Durability",
        sentiment: "positive",
        occurrences: 45,
        runs: [
          {
            promptText: "Best hiking boots",
            source: "chatgpt-search",
            date: "Oct 5",
            region: "US",
            fullResponse: "Acme Corp boots are known for their extreme durability...",
            citations: [{ source: "outdoorreview.com", url: "https://outdoorreview.com" }],
          },
        ],
      },
      {
        theme: "Price",
        sentiment: "negative",
        occurrences: 12,
        runs: [],
      },
    ],
    yAxisDomain: [0, 100],
  },

  // Tab 6: Platforms
  platforms: {
    metrics: {
      lineChartData: [
        {
          date: "Mon",
          visibility_chatgpt: 60,
          visibility_perplexity: 55,
          visibility_google: 70,
          sov_chatgpt: 40,
          sov_perplexity: 35,
          sov_google: 50,
        },
        {
          date: "Tue",
          visibility_chatgpt: 65,
          visibility_perplexity: 58,
          visibility_google: 72,
          sov_chatgpt: 42,
          sov_perplexity: 38,
          sov_google: 52,
        },
      ],
      platformRankings: [
        { platform: "google-search-gemini", score: 72 },
        { platform: "chatgpt-search", score: 65 },
        { platform: "perplexity-sonar", score: 58 },
      ],
      shareOfVoiceRankings: [
        { platform: "google-search-gemini", score: 52 },
        { platform: "chatgpt-search", score: 42 },
        { platform: "perplexity-sonar", score: 38 },
      ],
      averagePositionRankings: [
        { platform: "google-search-gemini", score: 1.2 },
        { platform: "chatgpt-search", score: 2.1 },
        { platform: "perplexity-sonar", score: 3.5 },
      ],
      citationShareRankings: [
        { platform: "google-search-gemini", score: 25 },
        { platform: "chatgpt-search", score: 20 },
        { platform: "perplexity-sonar", score: 15 },
      ],
      sentimentRankings: [
        { platform: "google-search-gemini", score: 80 },
        { platform: "chatgpt-search", score: 75 },
        { platform: "perplexity-sonar", score: 70 },
      ],
    },
    matrix: {
      competitors: [
        {
          id: "comp-1",
          name: "Competitor X",
          type: "COMPETITOR",
          scores: { "chatgpt-search": 45, "google-search-gemini": 60 },
        },
        {
          id: "you",
          name: "Acme Corp",
          type: "YOU",
          scores: { "chatgpt-search": 65, "google-search-gemini": 72 },
        },
      ],
      topics: [
        {
          title: "Hiking",
          prompts: [],
          scores: { "chatgpt-search": 70, "google-search-gemini": 80 },
        },
      ],
    },
  },

  // Tab 7: Personas
  personas: [
    {
      id: "p1",
      name: "The Budget Backpacker",
      tagline: "Loves travel but counts every penny.",
      demographics: "18-25, Student, Low Income",
      background: "Gap year student...",
      goals: "Find durable gear cheap.",
      constraints: ["Cheap", "Lightweight"],
      aiSimulation: "Simulate a price-conscious user...",
    },
  ],

  // Filters Data
  existingTopics: ["Hiking", "Camping", "Running", "Apparel"],
};
