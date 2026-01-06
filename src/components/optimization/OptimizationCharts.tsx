import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  LineChart,
  Line,
  Treemap,
} from "recharts";
import { EmptyState } from "@shopify/polaris";

export const AutopilotActivityChart = ({ data }: { data: any[] }) => {
  const isEmpty = !data.some((d: any) => d.count > 0);

  if (isEmpty) {
    return (
      <div style={{ height: "300px", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <EmptyState
          heading="No automated actions yet"
          image="https://cdn.shopify.com/s/files/1/0262/4071/2726/files/emptystate-files.png"
        >
          <p>Naridon hasn't applied any automatic fixes in the last 30 days.</p>
        </EmptyState>
      </div>
    );
  }

  return (
    <div style={{ height: "300px" }}>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data} margin={{ top: 5, right: 10, left: -20, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e1e3e5" />
          <XAxis
            dataKey="date"
            tick={{ fontSize: 11, fill: "#6d7175" }}
            tickFormatter={(value) =>
              new Date(value).toLocaleDateString("en-US", { month: "short", day: "numeric" })
            }
            axisLine={false}
            tickLine={false}
          />
          <YAxis tick={{ fontSize: 11, fill: "#6d7175" }} axisLine={false} tickLine={false} />
          <Tooltip
            content={({ active, payload }) => {
              if (active && payload && payload.length) {
                const d = payload[0].payload;
                return (
                  <div style={{ backgroundColor: "#fff", padding: "12px", border: "1px solid #e1e3e5", borderRadius: "8px", boxShadow: "0 4px 12px rgba(0,0,0,0.1)" }}>
                    <div style={{ fontWeight: 600, marginBottom: "4px" }}>
                      {new Date(d.date).toLocaleDateString("en-US", { month: "long", day: "numeric" })}
                    </div>
                    <div>{d.count} fixes applied</div>
                  </div>
                );
              }
              return null;
            }}
          />
          <Bar dataKey="count" fill="#108043" radius={[4, 4, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export const FixSuccessTrendChart = ({ data }: { data: any[] }) => {
  const isEmpty = !data.some((d: any) => d.fixesApplied > 0 || d.rankingImprovements > 0);

  if (isEmpty) {
    return (
      <div style={{ height: "300px", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <EmptyState
          heading="No trend data yet"
          image="https://cdn.shopify.com/s/files/1/0262/4071/2726/files/emptystate-files.png"
        >
          <p>Start applying fixes to see how they impact your AI search rankings over time.</p>
        </EmptyState>
      </div>
    );
  }

  return (
    <div style={{ height: "300px" }}>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data} margin={{ top: 5, right: 10, left: -20, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e1e3e5" />
          <XAxis
            dataKey="date"
            tick={{ fontSize: 11, fill: "#6d7175" }}
            tickFormatter={(value) =>
              new Date(value).toLocaleDateString("en-US", { month: "short", day: "numeric" })
            }
            axisLine={false}
            tickLine={false}
          />
          <YAxis tick={{ fontSize: 11, fill: "#6d7175" }} axisLine={false} tickLine={false} />
          <Tooltip />
          <Line type="monotone" dataKey="fixesApplied" stroke="#5c6ac4" strokeWidth={2} dot={false} name="Fixes Applied" />
          <Line type="monotone" dataKey="rankingImprovements" stroke="#108043" strokeWidth={2} dot={false} name="Ranking Improvements" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

const TREEMAP_COLORS = ["#5c6ac4", "#2196f3", "#008060", "#ff9800", "#d82c0d", "#9c27b0"];

const CustomizedTreemapContent = (props: any) => {
  const { root, depth, x, y, width, height, index, name, value } = props;
  const percent = root.value ? Math.round((value / root.value) * 100) : 0;

  return (
    <g>
      <rect
        x={x}
        y={y}
        rx={8}
        ry={8}
        width={width}
        height={height}
        style={{
          fill: TREEMAP_COLORS[index % TREEMAP_COLORS.length],
          stroke: "#fff",
          strokeWidth: 2 / (depth + 1e-10),
          strokeOpacity: 1 / (depth + 1e-10),
        }}
      />
      {depth === 1 && width > 30 && height > 30 ? (
        <>
          <text
            x={x + width / 2}
            y={y + height / 2 - (width > 60 && height > 50 ? 6 : 0)}
            textAnchor="middle"
            dominantBaseline="middle"
            fill="#fff"
            fontSize={Math.min(18, width / 3)}
            fontWeight="bold"
          >
            {percent}%
          </text>
          {width > 60 && height > 50 && (
            <text
              x={x + width / 2}
              y={y + height / 2 + 12}
              textAnchor="middle"
              fill="#fff"
              fontSize={10}
              opacity={0.9}
            >
              {name.length > 10 ? name.substring(0, 10) + "..." : name}
            </text>
          )}
        </>
      ) : null}
    </g>
  );
};

export const CategoryTreemap = ({ data }: { data: any[] }) => {
  if (data.length === 0) {
    return (
      <div style={{ height: "300px", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <EmptyState
          heading="No issues categorized"
          image="https://cdn.shopify.com/s/files/1/0262/4071/2726/files/emptystate-files.png"
        >
          <p>We haven't detected any categorized issues yet.</p>
        </EmptyState>
      </div>
    );
  }

  return (
    <div style={{ flex: 1, minHeight: "300px", width: "100%" }}>
      <ResponsiveContainer width="100%" height="100%">
        <Treemap
          data={data}
          dataKey="value"
          stroke="#fff"
          fill="#8884d8"
          content={<CustomizedTreemapContent />}
        >
          <Tooltip
            content={({ active, payload }) => {
              if (active && payload && payload.length) {
                const data = payload[0];
                return (
                  <div style={{ backgroundColor: "#fff", padding: "12px", border: "1px solid #e1e3e5", borderRadius: "8px", boxShadow: "0 4px 12px rgba(0,0,0,0.1)" }}>
                    <div style={{ fontWeight: 600, marginBottom: "4px" }}>
                      {data.payload.name}
                    </div>
                    <div>{data.value} issues</div>
                  </div>
                );
              }
              return null;
            }}
          />
        </Treemap>
      </ResponsiveContainer>
    </div>
  );
};

