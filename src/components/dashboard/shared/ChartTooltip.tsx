interface ChartTooltipProps {
  active?: boolean;
  payload?: Array<{
    name: string;
    value: number;
    color: string;
  }>;
  label?: string;
}

export function ChartTooltip({ active, payload, label }: ChartTooltipProps) {
  if (active && payload && payload.length) {
    const sortedPayload = [...payload].sort(
      (a: any, b: any) => b.value - a.value
    );
    return (
      <div
        style={{
          backgroundColor: "#fff",
          padding: "12px",
          border: "1px solid #e1e3e5",
          borderRadius: "8px",
          boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
          minWidth: "180px",
          fontSize: "12px",
          fontFamily:
            '-apple-system, BlinkMacSystemFont, "San Francisco", "Segoe UI", Roboto, "Helvetica Neue", sans-serif',
        }}
      >
        <div style={{ marginBottom: "8px", fontWeight: 600, color: "#202223" }}>
          {label}
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
          {sortedPayload.map((entry: any, index: number) => {
            const brandDomain =
              entry.name.toLowerCase().replace(/[^a-z0-9]/g, "") + ".com";
            return (
              <div
                key={index}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  gap: "12px",
                }}
              >
                <div
                  style={{ display: "flex", alignItems: "center", gap: "8px" }}
                >
                  <div
                    style={{
                      width: "6px",
                      height: "6px",
                      borderRadius: "2px",
                      backgroundColor: entry.color,
                    }}
                  ></div>
                  <img
                    src={`https://www.google.com/s2/favicons?domain=${brandDomain}&sz=16`}
                    alt=""
                    style={{
                      width: "14px",
                      height: "14px",
                      borderRadius: "2px",
                      opacity: 0.8,
                    }}
                    onError={(e) => {
                      (e.target as HTMLImageElement).style.display = "none";
                    }}
                  />
                  <span style={{ color: "#202223" }}>{entry.name}</span>
                </div>
                <span style={{ fontWeight: 600, color: "#202223" }}>
                  {entry.value?.toFixed(1)}%
                </span>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
  return null;
}

