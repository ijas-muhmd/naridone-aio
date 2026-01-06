import { Text } from "@shopify/polaris";
import {
  PieChart,
  Pie,
  ResponsiveContainer,
  Tooltip as RechartsTooltip,
} from "recharts";
import React from "react";

export const ScoreGauge = ({
  score,
  color = "#108043",
  label,
  benchmark,
}: {
  score: number;
  color?: string;
  label?: string;
  benchmark?: number;
}) => {
  const data = [
    { name: "Your Score", value: score, fill: color },
    { name: "Remaining", value: 100 - score, fill: "#e1e3e5" },
  ];

  return (
    <div style={{ width: "100%", height: "100px", position: "relative" }}>
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="100%"
            startAngle={180}
            endAngle={0}
            innerRadius={60}
            outerRadius={80}
            dataKey="value"
            stroke="none"
          />

          {/* Benchmark Marker (Needle) */}
          {benchmark !== undefined && (
            <Pie
              data={[
                { value: benchmark - 0.5, fill: "transparent" },
                { value: 1, fill: "#5c5f62" },
                { value: 100 - benchmark - 0.5, fill: "transparent" },
              ]}
              cx="50%"
              cy="100%"
              startAngle={180}
              endAngle={0}
              innerRadius={55}
              outerRadius={85}
              dataKey="value"
              stroke="none"
              isAnimationActive={false}
            />
          )}

          <RechartsTooltip
            wrapperStyle={{ zIndex: 1000, outline: "none" }}
            content={({ active, payload }) => {
              if (active && payload && payload.length) {
                return (
                  <div
                    style={{
                      backgroundColor: "#fff",
                      padding: "12px",
                      border: "1px solid #e1e3e5",
                      borderRadius: "8px",
                      boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                      fontSize: "12px",
                      fontFamily:
                        '-apple-system, BlinkMacSystemFont, "San Francisco", "Segoe UI", Roboto, "Helvetica Neue", sans-serif',
                    }}
                  >
                    <div
                      style={{
                        fontWeight: 600,
                        marginBottom: "8px",
                        color: "#202223",
                      }}
                    >
                      Performance
                    </div>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "4px",
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "space-between",
                          gap: "12px",
                        }}
                      >
                        <div
                          style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "6px",
                          }}
                        >
                          <div
                            style={{
                              width: "8px",
                              height: "8px",
                              borderRadius: "50%",
                              backgroundColor: color,
                            }}
                          />
                          <span>Your Score</span>
                        </div>
                        <span style={{ fontWeight: 600 }}>{score}%</span>
                      </div>

                      {benchmark !== undefined && (
                        <div
                          style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "space-between",
                            gap: "12px",
                          }}
                        >
                          <div
                            style={{
                              display: "flex",
                              alignItems: "center",
                              gap: "6px",
                            }}
                          >
                            <div
                              style={{
                                width: "8px",
                                height: "8px",
                                borderRadius: "50%",
                                backgroundColor: "#5c5f62",
                              }}
                            />
                            <span>Market Avg</span>
                          </div>
                          <span style={{ fontWeight: 600, color: "#5c5f62" }}>
                            {benchmark}%
                          </span>
                        </div>
                      )}

                      {benchmark !== undefined && (
                        <div
                          style={{
                            marginTop: "4px",
                            borderTop: "1px solid #f1f2f4",
                            paddingTop: "4px",
                            color: score >= benchmark ? "#108043" : "#d82c0d",
                          }}
                        >
                          {score >= benchmark
                            ? "Above Average"
                            : "Below Average"}
                        </div>
                      )}
                    </div>
                  </div>
                );
              }
              return null;
            }}
          />
        </PieChart>
      </ResponsiveContainer>

      <div
        style={{
          position: "absolute",
          bottom: "0",
          left: "0",
          right: "0",
          textAlign: "center",
          lineHeight: "1",
        }}
      >
        <Text
          as="p"
          variant="heading2xl"
          fontWeight="bold"
          tone={score > 50 ? "success" : "critical"}
        >
          {label !== undefined ? label : score}
        </Text>
        {benchmark !== undefined && (
          <Text as="span" variant="bodyXs" tone="subdued">
            Market Avg: {benchmark}%
          </Text>
        )}
      </div>
    </div>
  );
};

export function SentimentScoreGauge({
  score,
  color = "#9c6ade",
  label,
  benchmark = 60,
}: {
  score: number;
  color?: string;
  label?: string;
  benchmark?: number;
}) {
  return (
    <ScoreGauge
      score={score}
      color={color}
      label={label}
      benchmark={benchmark}
    />
  );
}
