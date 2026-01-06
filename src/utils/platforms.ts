// Platform mapping utility
export interface PlatformInfo {
    name: string;
    logo: string;
    color: string;
}

export interface AvailableModel {
    id: string;
    label: string;
    type: string;
    logo: string;
    disabled?: boolean;
}

// Helper for reliable favicons
const getFavicon = (domain: string) => `https://www.google.com/s2/favicons?domain=${domain}&sz=64`;

export const PLATFORMS: Record<string, PlatformInfo> = {
    chatgpt: {
        name: "ChatGPT",
        logo: getFavicon("openai.com"),
        color: "#10a37f",
    },
    gemini: {
        name: "Gemini",
        logo: getFavicon("gemini.google.com"),
        color: "#4285f4",
    },
    perplexity: {
        name: "Perplexity",
        logo: getFavicon("perplexity.ai"),
        color: "#20808d",
    },
    claude: {
        name: "Claude",
        logo: getFavicon("claude.ai"),
        color: "#cc785c",
    },
    deepseek: {
        name: "DeepSeek",
        logo: getFavicon("deepseek.com"),
        color: "#4d6bfe"
    },
    grok: {
        name: "Grok",
        logo: getFavicon("x.ai"), // x.ai is the official domain for Grok
        color: "#000000"
    },
    llama: {
        name: "Llama",
        logo: getFavicon("meta.com"),
        color: "#0668E1"
    },
    bing: {
        name: "Bing",
        logo: getFavicon("bing.com"),
        color: "#008373"
    },
    google: {
        name: "Google",
        logo: getFavicon("google.com"),
        color: "#4285f4"
    },
    "google-official": {
        name: "Google Search",
        logo: getFavicon("google.com"),
        color: "#4285f4"
    },
    "searchapi-google": {
        name: "Google Search",
        logo: getFavicon("google.com"),
        color: "#4285f4"
    },
    "bing-serp": {
        name: "Bing Search",
        logo: getFavicon("bing.com"),
        color: "#008373"
    },
    "searchapi-bing": {
        name: "Bing Search",
        logo: getFavicon("bing.com"),
        color: "#008373"
    },
    "brave-search": {
        name: "Brave Search",
        logo: getFavicon("brave.com"),
        color: "#fb542b"
    },
    "perplexity-sonar": {
        name: "Perplexity",
        logo: getFavicon("perplexity.ai"),
        color: "#20808d"
    },
    "chatgpt-search": {
        name: "ChatGPT Search",
        logo: getFavicon("openai.com"),
        color: "#10a37f"
    },
    "claude-web": {
        name: "Claude Web",
        logo: getFavicon("claude.ai"),
        color: "#cc785c"
    },
    "deepseek-web": {
        name: "DeepSeek Web",
        logo: getFavicon("deepseek.com"),
        color: "#4d6bfe"
    },
    "grok-web": {
        name: "Grok Web",
        logo: getFavicon("x.ai"),
        color: "#000000"
    },
    "azure-claude": {
        name: "Claude",
        logo: getFavicon("claude.ai"),
        color: "#cc785c"
    },
    "gemini-1.5-flash": {
        name: "Gemini",
        logo: getFavicon("gemini.google.com"),
        color: "#4285f4"
    },
    "claude-3-5-sonnet": {
        name: "Claude",
        logo: getFavicon("claude.ai"),
        color: "#cc785c"
    },
    "deepseek-chat": {
        name: "DeepSeek",
        logo: getFavicon("deepseek.com"),
        color: "#4d6bfe"
    },
    "grok-beta": {
        name: "Grok",
        logo: getFavicon("x.ai"),
        color: "#000000"
    },
    "google-search-gemini": {
        name: "Google AI Overview",
        logo: getFavicon("google.com"),
        color: "#4285f4"
    }
};

// Map model string to platform key
export function getPlatformFromModel(model: string): string {
    const modelLower = model.toLowerCase();

    // Check for specific model IDs first (exact matches)
    if (modelLower.includes('claude-web')) return 'claude-web';
    if (modelLower.includes('deepseek-web')) return 'deepseek-web';
    if (modelLower.includes('grok-web')) return 'grok-web';
    if (modelLower.includes('brave')) return 'brave-search';
    if (modelLower.includes('claude-3-5-sonnet')) return 'claude-3-5-sonnet';
    if (modelLower.includes('deepseek-chat')) return 'deepseek-chat';
    if (modelLower.includes('grok-beta')) return 'grok-beta';
    if (modelLower.includes('gemini-1.5-flash')) return 'gemini-1.5-flash';
    if (modelLower.includes('google-search-gemini')) return 'google-search-gemini';
    if (modelLower.includes('chatgpt-search')) return 'chatgpt-search';
    if (modelLower.includes('perplexity-sonar')) return 'perplexity-sonar';
    if (modelLower.includes('searchapi-bing')) return 'searchapi-bing';
    if (modelLower.includes('searchapi-google')) return 'searchapi-google';
    if (modelLower.includes('bing-serp')) return 'bing-serp';
    if (modelLower.includes('google-official')) return 'google-official';

    // Fallback to generic matching
    if (modelLower.includes('deepseek')) return 'deepseek-chat';
    if (modelLower.includes('grok')) return 'grok-beta';
    if (modelLower.includes('llama') || modelLower.includes('meta')) return 'llama';
    if (modelLower.includes('bing')) return 'bing-serp';

    if (modelLower.includes('gemini') || modelLower.includes('google-genai')) {
        return 'gemini-1.5-flash';
    }
    if (modelLower.includes('perplexity') || modelLower.includes('sonar')) {
        return 'perplexity-sonar';
    }
    if (modelLower.includes('claude') || modelLower.includes('anthropic')) {
        return 'claude-3-5-sonnet';
    }
    if (modelLower.includes('gpt') || modelLower.includes('openai') || modelLower.includes('chatgpt')) {
        return 'chatgpt-search';
    }

    return 'chatgpt-search'; // default fallback
}

// Get platform info from model string
export function getPlatformInfo(model: string): PlatformInfo {
    // First try direct match in PLATFORMS
    if (PLATFORMS[model]) {
        return PLATFORMS[model];
    }
    // Fallback to fuzzy matching
    const platformKey = getPlatformFromModel(model);
    return PLATFORMS[platformKey] || PLATFORMS['chatgpt'];
}


export const AVAILABLE_MODELS: AvailableModel[] = [
    // Search Runners (Primary)
    // { id: "searchapi-google", label: "Google Search", type: "Search", logo: getPlatformInfo("searchapi-google").logo, disabled: false },
    // { id: "searchapi-bing", label: "Bing Search", type: "Search", logo: getPlatformInfo("searchapi-bing").logo, disabled: false },

    // Hybrid Runners (Knowledge + Web)
    { id: "perplexity-sonar", label: "Perplexity", type: "Hybrid", logo: getPlatformInfo("perplexity-sonar").logo, disabled: false },
    { id: "chatgpt-search", label: "ChatGPT Search", type: "Hybrid", logo: getPlatformInfo("chatgpt-search").logo, disabled: false },
    { id: "google-search-gemini", label: "Google AI Overview", type: "Hybrid", logo: getPlatformInfo("google-official").logo, disabled: false },
    // { id: "deepseek-web", label: "DeepSeek Web", type: "Hybrid", logo: getPlatformInfo("deepseek").logo, disabled: false },
    // { id: "claude-web", label: "Claude Web", type: "Hybrid", logo: getPlatformInfo("claude").logo, disabled: false },
    // { id: "grok-web", label: "Grok Web", type: "Hybrid", logo: getPlatformInfo("grok").logo, disabled: false },
];