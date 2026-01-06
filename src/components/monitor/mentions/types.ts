export interface ExternalMention {
  id: string;
  platform: string;
  title: string | null;
  summary: string | null;
  sentiment: number | null;
  mentionCount: number | null;
  suggestedReply: string | null;
  url: string;
  createdAt: string;
}
