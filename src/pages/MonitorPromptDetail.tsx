import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { PromptDetail } from "../components/monitor/tracking/PromptDetail";

// Detailed Mock Data for a single prompt
const MOCK_PROMPT_DETAIL = {
  id: "1",
  text: "Best running shoes 2024",
  location: "US",
  tags: ["running", "shoes", "2024"],
  status: "ACTIVE",
  createdAt: "2023-12-01T00:00:00Z",
  runs: Array.from({ length: 30 }).map((_, i) => {
    const date = new Date();
    date.setDate(date.getDate() - i);
    const dateStr = date.toISOString();

    // Simulate trend: Visibility improves over time
    const visibility = Math.min(100, Math.max(0, 40 + i * 1.5 + (Math.random() * 10 - 5)));
    const sentiment = Math.min(100, Math.max(0, 60 + i + (Math.random() * 10 - 5)));

    return {
      id: `run-${i}`,
      date: dateStr,
      createdAt: dateStr,
      visibility: Math.round(visibility),
      sentiment: Math.round(sentiment),
      position: visibility > 0 ? Math.round(100 / (visibility || 1)) : 0,
      mentions: [
        {
          id: `m-${i}-1`,
          brand: { name: "Nike", domain: "nike.com" },
          sentiment: "positive",
        },
        {
          id: `m-${i}-2`,
          brand: { name: "Adidas", domain: "adidas.com" },
          sentiment: "neutral",
        }
      ],
      citations: [
        {
          id: `c-${i}-1`,
          url: "https://www.runnersworld.com/gear/a20806134/best-running-shoes/",
          title: "Best Running Shoes 2024",
          domain: "runnersworld.com",
          rank: 1,
          sourceType: "Editorial",
        },
        {
          id: `c-${i}-2`,
          url: "https://www.nytimes.com/wirecutter/reviews/best-running-shoes/",
          title: "The Best Running Shoes",
          domain: "nytimes.com",
          rank: 3,
          sourceType: "Editorial",
        }
      ],
      response: "The best running shoes for 2024 include the Nike Air Zoom Pegasus 40 and the Adidas Ultraboost Light. Runners World highlights the Pegasus for its versatility...",
      platform: "chatgpt-search",
      region: "US",
    };
  }).reverse(), // Oldest to newest
};

export default function MonitorPromptDetail() {
  const navigate = useNavigate();
  const { id } = useParams();

  const handleBack = () => {
    navigate("/app/monitor");
  };

  const handleDelete = () => {
    console.log("Deleting prompt", id);
    navigate("/app/monitor");
  };

  return (
    <PromptDetail
      prompt={MOCK_PROMPT_DETAIL}
      onBack={handleBack}
      onDelete={handleDelete}
    />
  );
}
