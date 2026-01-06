import {
  BlockStack,
  Card,
  Text,
  InlineStack,
  Icon,
  Box,
  Button,
  Tooltip,
} from "@shopify/polaris";
import {
  InfoIcon,
  ChevronDownIcon,
  ChevronUpIcon,
  CheckIcon,
  HashtagIcon,
  LayoutColumns3Icon,
  ArrowUpIcon,
  ArrowDownIcon,
} from "@shopify/polaris-icons";
import { useState, useRef, useEffect, useMemo } from "react";
import { getPlatformInfo, PLATFORMS } from "../../../utils/platforms";

interface MatrixViewProps {
  platformDisplayMap: Record<string, string>;
  platformsToShow: string[]; // Platform keys
  displayNameToKey: Record<string, string>;
  matrixData?: {
    competitors: Array<{
      id: string;
      name: string;
      type: string;
      scores: Record<string, number>;
    }>;
    topics: Array<{
      title: string;
      prompts: Array<{ text: string; scores: Record<string, number> }>;
      scores: Record<string, number>;
    }>;
  };
}

type RowType = "competitors" | "topics";
type ValueType = "visibility" | "sov" | "citation";

// Helper to get random value based on seed
function seededRandom(seed: string) {
  let hash = 0;
  for (let i = 0; i < seed.length; i++) {
    hash = (hash << 5) - hash + seed.charCodeAt(i);
    hash |= 0;
  }
  const x = Math.sin(hash) * 10000;
  return x - Math.floor(x);
}

export function MatrixView({
  platformDisplayMap,
  platformsToShow,
  displayNameToKey,
  matrixData,
}: MatrixViewProps) {
  const [rowType, setRowType] = useState<RowType>("competitors");
  const [valueType, setValueType] = useState<ValueType>("visibility"); // Default to Visibility Score
  const [showConfig, setShowConfig] = useState(false);
  const [sortColumn, setSortColumn] = useState<string | null>("rowName");
  const [sortDirection, setSortDirection] = useState<"asc" | "desc">("desc");
  const [hoveredColumn, setHoveredColumn] = useState<string | null>(null);
  const [expandedTopics, setExpandedTopics] = useState<Set<string>>(new Set());
  const [visibleCount, setVisibleCount] = useState(20);
  const configRef = useRef<HTMLDivElement>(null);

  // Data Sources
  const competitors = matrixData?.competitors || [];
  const topics = matrixData?.topics || [];

  // Helper to get cell value for sorting
  const getCellValue = (rowItem: any, platformKey: string): number => {
    // If real data exists in scores map, use it
    if (rowItem.scores && rowItem.scores[platformKey] !== undefined) {
      const scoreObj = rowItem.scores[platformKey];
      // If the score is an object (new format), pick the value based on valueType
      if (typeof scoreObj === "object" && scoreObj !== null) {
        return Number(scoreObj[valueType] ?? 0);
      }
      // Fallback for flat number (old format)
      return Number(scoreObj);
    }

    // Return 0 for missing data - don't generate fake random values
    // This ensures we only show data for platforms where the prompt/topic actually has runs
    return 0;
  };

  const renderCell = (rowItem: any, platformKey: string, isHeader = false) => {
    if (isHeader) return null;

    const value = getCellValue(rowItem, platformKey);
    const suffix = "%";

    // Color scale based on value
    let bg = "transparent";
    let color = "#000";

    // Custom scale logic similar to images
    if (value > 80) {
      bg = "#004288";
      color = "#fff";
    } else if (value > 60) {
      bg = "#005CB9";
      color = "#fff";
    } else if (value > 40) {
      bg = "#669CD8";
      color = "#000";
    } else if (value > 20) {
      bg = "#99BDEC";
      color = "#000";
    } else if (value > 0) {
      bg = "#EDF4FC";
      color = "#000";
    }

    return (
      <div
        style={{
          background: bg,
          color: color,
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "13px",
          fontWeight: 500,
        }}
      >
        {value}
        {suffix}
      </div>
    );
  };

  // Handle column sort
  const handleSort = (columnKey: string) => {
    if (sortColumn === columnKey) {
      // Toggle direction if same column
      setSortDirection(sortDirection === "asc" ? "desc" : "asc");
    } else {
      // New column, default to desc
      setSortColumn(columnKey);
      setSortDirection("desc");
    }
  };

  // Helper to calculate average value across all visible platforms
  const getAverageValue = (rowItem: any): number => {
    if (platformsToShow.length === 0) return 0;
    const sum = platformsToShow.reduce((acc, platformKey) => {
      return acc + getCellValue(rowItem, platformKey);
    }, 0);
    return sum / platformsToShow.length;
  };

  // Sort data based on selected column
  const sortedCompetitors = useMemo(() => {
    if (!sortColumn || rowType !== "competitors") return competitors;

    // If sorting by row name (first column) - sort by average value across platforms
    if (sortColumn === "rowName") {
      return [...competitors].sort((a, b) => {
        const aAvg = getAverageValue(a);
        const bAvg = getAverageValue(b);
        return sortDirection === "asc" ? aAvg - bAvg : bAvg - aAvg;
      });
    }

    // Sort by platform column value
    return [...competitors].sort((a, b) => {
      const aValue = getCellValue(a, sortColumn);
      const bValue = getCellValue(b, sortColumn);
      return sortDirection === "asc" ? aValue - bValue : bValue - aValue;
    });
  }, [
    sortColumn,
    sortDirection,
    rowType,
    valueType,
    platformsToShow,
    competitors,
  ]);

  const sortedTopics = useMemo(() => {
    if (!sortColumn || rowType !== "topics") return topics;

    // If sorting by row name (first column) - sort by average value across platforms
    if (sortColumn === "rowName") {
      return [...topics].sort((a, b) => {
        const aAvg = getAverageValue(a);
        const bAvg = getAverageValue(b);
        return sortDirection === "asc" ? aAvg - bAvg : bAvg - aAvg;
      });
    }

    // Sort by platform column value
    return [...topics].sort((a, b) => {
      const aValue = getCellValue(a, sortColumn);
      const bValue = getCellValue(b, sortColumn);
      return sortDirection === "asc" ? aValue - bValue : bValue - aValue;
    });
  }, [sortColumn, sortDirection, rowType, valueType, platformsToShow, topics]);

  const toggleTopic = (title: string) => {
    const newExpanded = new Set(expandedTopics);
    if (newExpanded.has(title)) {
      newExpanded.delete(title);
    } else {
      newExpanded.add(title);
    }
    setExpandedTopics(newExpanded);
  };

  return (
    <BlockStack gap="400">
      {/* Header */}
      <InlineStack align="space-between" blockAlign="center">
        <BlockStack gap="050">
          <InlineStack gap="200" blockAlign="center" align="start">
            <Text variant="headingMd" as="h2">
              Matrix View
            </Text>
            <Tooltip content="Your brand's visibility across multiple AI platforms compared to competitors. It helps you quickly identify where you're leading, lagging, or gaining ground in overall presence.">
              <Icon source={InfoIcon} tone="subdued" />
            </Tooltip>
          </InlineStack>
          <Text variant="bodySm" tone="subdued" as="span">
            Analyze platform capture from competitors, topics, or tags by
            Visibility Score or Share of Voice.
          </Text>
        </BlockStack>

        {/* Config Popover */}
        <div style={{ position: "relative" }} ref={configRef}>
          <Button onClick={() => setShowConfig(!showConfig)} disclosure>
            Table Config
          </Button>

          {showConfig && (
            <div
              style={{
                position: "absolute",
                top: "100%",
                right: 0,
                marginTop: "8px",
                background: "#fff",
                borderRadius: "8px",
                boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
                border: "1px solid #e1e3e5",
                width: "240px",
                zIndex: 100,
              }}
            >
              <Box padding="400" borderBlockEndWidth="025" borderColor="border">
                <Text variant="headingSm" as="h6" tone="subdued">
                  Rows
                </Text>
              </Box>
              <div style={{ padding: "8px 0" }}>
                <button
                  style={{
                    width: "100%",
                    textAlign: "left",
                    padding: "8px 16px",
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    gap: "8px",
                  }}
                  onClick={() => setRowType("competitors")}
                >
                  <InlineStack gap="200" blockAlign="center">
                    <Icon source={LayoutColumns3Icon} tone="base" />
                    <span>Competitors</span>
                  </InlineStack>
                  {rowType === "competitors" && (
                    <Icon source={CheckIcon} tone="base" />
                  )}
                </button>
                <button
                  style={{
                    width: "100%",
                    textAlign: "left",
                    padding: "8px 16px",
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    gap: "8px",
                  }}
                  onClick={() => setRowType("topics")}
                >
                  <InlineStack gap="200" blockAlign="center">
                    <Icon source={HashtagIcon} tone="base" />
                    <span>Topics</span>
                  </InlineStack>
                  {rowType === "topics" && (
                    <Icon source={CheckIcon} tone="base" />
                  )}
                </button>
              </div>

              <Box
                padding="400"
                borderBlockStartWidth="025"
                borderBlockEndWidth="025"
                borderColor="border"
              >
                <Text variant="headingSm" as="h6" tone="subdued">
                  Values
                </Text>
              </Box>
              <div style={{ padding: "8px 0" }}>
                <button
                  style={{
                    width: "100%",
                    textAlign: "left",
                    padding: "8px 16px",
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                  onClick={() => setValueType("visibility")}
                >
                  <span>Visibility Score</span>
                  {valueType === "visibility" && (
                    <Icon source={CheckIcon} tone="base" />
                  )}
                </button>
                <button
                  style={{
                    width: "100%",
                    textAlign: "left",
                    padding: "8px 16px",
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                  onClick={() => setValueType("sov")}
                >
                  <span>Share of Voice</span>
                  {valueType === "sov" && (
                    <Icon source={CheckIcon} tone="base" />
                  )}
                </button>
                <button
                  style={{
                    width: "100%",
                    textAlign: "left",
                    padding: "8px 16px",
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                  onClick={() => setValueType("citation")}
                >
                  <span>Citation Share</span>
                  {valueType === "citation" && (
                    <Icon source={CheckIcon} tone="base" />
                  )}
                </button>
              </div>
            </div>
          )}
        </div>
      </InlineStack>

      {/* Matrix Table */}
      <Card padding="0">
        <div style={{ overflowX: "auto" }}>
          <table
            style={{
              width: "100%",
              borderCollapse: "collapse",
              minWidth: "800px",
            }}
          >
            <thead>
              <tr style={{ borderBottom: "1px solid #e1e3e5" }}>
                <th
                  style={{
                    textAlign: "left",
                    padding: 0,
                    width: "25%",
                    position: "sticky",
                    left: 0,
                    background: "#fff",
                    zIndex: 10,
                    cursor: "pointer",
                  }}
                  onMouseEnter={() => setHoveredColumn("rowName")}
                  onMouseLeave={() => setHoveredColumn(null)}
                  onClick={() => handleSort("rowName")}
                >
                  <div style={{ paddingLeft: "16px" }}>
                    <InlineStack gap="200" align="start" wrap={false}>
                      <div style={{ margin: 0 }}>
                        <Icon
                          source={
                            rowType === "competitors"
                              ? LayoutColumns3Icon
                              : HashtagIcon
                          }
                          tone="subdued"
                        />
                      </div>
                      <span style={{ whiteSpace: "nowrap" }}>
                        <Text variant="bodySm" fontWeight="bold" as="span">
                          {rowType === "competitors" ? "Competitors" : "Topics"}
                        </Text>
                      </span>
                      <div
                        style={{
                          margin: 0,
                          marginLeft: "4px",
                          display: "flex",
                          alignItems: "center",
                          width: "16px",
                          height: "16px",
                          visibility:
                            hoveredColumn === "rowName" ||
                            sortColumn === "rowName"
                              ? "visible"
                              : "hidden",
                        }}
                      >
                        <Icon
                          source={
                            sortColumn === "rowName" && sortDirection === "asc"
                              ? ArrowUpIcon
                              : ArrowDownIcon
                          }
                          tone="subdued"
                        />
                      </div>
                    </InlineStack>
                  </div>
                </th>
                {platformsToShow.map((key) => {
                  const platform = PLATFORMS[key] || getPlatformInfo(key);
                  const isHovered = hoveredColumn === key;
                  const isSorted = sortColumn === key;
                  const showSortIcon = isHovered || isSorted;

                  return (
                    <th
                      key={key}
                      style={{
                        textAlign: "center",
                        padding: "12px",
                        minWidth: "140px",
                        cursor: "pointer",
                        position: "relative",
                      }}
                      onMouseEnter={() => setHoveredColumn(key)}
                      onMouseLeave={() => setHoveredColumn(null)}
                      onClick={() => handleSort(key)}
                    >
                      <InlineStack
                        gap="200"
                        blockAlign="center"
                        align="center"
                        wrap={false}
                      >
                        <div style={{ width: 20, height: 20, flexShrink: 0 }}>
                          <img
                            src={platform.logo}
                            alt=""
                            style={{
                              width: "100%",
                              height: "100%",
                              objectFit: "contain",
                            }}
                          />
                        </div>
                        <span style={{ whiteSpace: "nowrap" }}>
                          <Text variant="bodySm" tone="subdued" as="span">
                            {platform.name}
                          </Text>
                        </span>
                        <div
                          style={{
                            marginLeft: "4px",
                            display: "flex",
                            alignItems: "center",
                            width: "16px",
                            height: "16px",
                            visibility: showSortIcon ? "visible" : "hidden",
                          }}
                        >
                          <Icon
                            source={
                              isSorted && sortDirection === "asc"
                                ? ArrowUpIcon
                                : ArrowDownIcon
                            }
                            tone="subdued"
                          />
                        </div>
                      </InlineStack>
                    </th>
                  );
                })}
              </tr>
            </thead>
            <tbody>
              {rowType === "competitors"
                ? sortedCompetitors
                    .slice(0, visibleCount)
                    .map((comp: any, i: number) => (
                      <tr key={i} style={{ borderBottom: "1px solid #f1f2f4" }}>
                        <td
                          style={{
                            padding: "12px 16px",
                            position: "sticky",
                            left: 0,
                            background: "#fff",
                            zIndex: 5,
                            boxShadow: "2px 0 5px -2px rgba(0,0,0,0.05)",
                            maxWidth: "200px",
                          }}
                        >
                          <InlineStack
                            gap="200"
                            blockAlign="center"
                            wrap={false}
                          >
                            <div
                              style={{ width: 16, height: 16, flexShrink: 0 }}
                            >
                              <img
                                src={
                                  (comp as any).logo ||
                                  `https://www.google.com/s2/favicons?domain=${comp.name.toLowerCase().replace(/[^a-z0-9]/g, "")}.com&sz=32`
                                }
                                alt=""
                                style={{
                                  width: "100%",
                                  height: "100%",
                                  objectFit: "contain",
                                  borderRadius: "2px",
                                }}
                                onError={(e) => {
                                  (e.target as HTMLImageElement).style.display =
                                    "none";
                                }}
                              />
                            </div>

                            <span
                              style={{
                                overflow: "hidden",
                                textOverflow: "ellipsis",
                                whiteSpace: "nowrap",
                                flex: 1,
                                minWidth: 0,
                              }}
                            >
                              <Text
                                variant="bodyMd"
                                fontWeight={
                                  (comp as any).isSelf ||
                                  (comp as any).type === "YOU"
                                    ? "bold"
                                    : "regular"
                                }
                                as="span"
                              >
                                {comp.name}
                              </Text>
                            </span>
                            {((comp as any).isSelf ||
                              (comp as any).type === "YOU") && (
                              <div
                                style={{
                                  background: "#E3F1DF",
                                  color: "#204818",
                                  padding: "2px 6px",
                                  borderRadius: "4px",
                                  fontSize: "11px",
                                  flexShrink: 0,
                                }}
                              >
                                Owned
                              </div>
                            )}
                          </InlineStack>
                        </td>
                        {platformsToShow.map((key) => (
                          <td key={key} style={{ padding: 0, height: "50px" }}>
                            {renderCell(comp, key)}
                          </td>
                        ))}
                      </tr>
                    ))
                : sortedTopics
                    .slice(0, visibleCount)
                    .map((topic: any, i: number) => {
                      const isExpanded = expandedTopics.has(topic.title);
                      return (
                        <>
                          <tr
                            key={topic.title}
                            style={{
                              borderBottom: "none",
                              position: "relative",
                            }}
                          >
                            <td
                              style={{
                                padding: "12px 16px",
                                position: "sticky",
                                left: 0,
                                background: "#fff",
                                zIndex: 5,
                                boxShadow: "2px 0 5px -2px rgba(0,0,0,0.05)",
                                maxWidth: "200px",
                                cursor: "pointer",
                              }}
                              onClick={() => toggleTopic(topic.title)}
                            >
                              <InlineStack
                                gap="200"
                                blockAlign="center"
                                wrap={false}
                              >
                                <div
                                  style={{
                                    width: 16,
                                    height: 16,
                                    flexShrink: 0,
                                    display: "flex",
                                    alignItems: "center",
                                  }}
                                >
                                  <Icon
                                    source={
                                      isExpanded
                                        ? ChevronUpIcon
                                        : ChevronDownIcon
                                    }
                                    tone="subdued"
                                  />
                                </div>
                                <span
                                  style={{
                                    display: "block",
                                    overflow: "hidden",
                                    textOverflow: "ellipsis",
                                    whiteSpace: "nowrap",
                                    width: "100%",
                                  }}
                                >
                                  <Tooltip
                                    content={topic.title}
                                    preferredPosition="above"
                                  >
                                    <Text
                                      variant="bodyMd"
                                      fontWeight="medium"
                                      as="span"
                                    >
                                      {topic.title}
                                    </Text>
                                  </Tooltip>
                                </span>
                              </InlineStack>
                            </td>
                            {platformsToShow.map((key) => (
                              <td
                                key={key}
                                style={{ padding: 0, height: "50px" }}
                              >
                                {renderCell(topic, key)}
                              </td>
                            ))}
                          </tr>
                          {isExpanded &&
                            topic.prompts.map((prompt: any, pi: number) => (
                              <tr
                                key={prompt.text}
                                style={{
                                  borderBottom:
                                    pi === topic.prompts.length - 1
                                      ? "1px solid #f1f2f4"
                                      : "none",
                                  background: "#fafbfd",
                                }}
                              >
                                <td
                                  style={{
                                    padding: "8px 16px 8px 48px",
                                    position: "sticky",
                                    left: 0,
                                    background: "#fafbfd",
                                    zIndex: 5,
                                    boxShadow:
                                      "2px 0 5px -2px rgba(0,0,0,0.05)",
                                    maxWidth: "200px",
                                  }}
                                >
                                  <span
                                    style={{
                                      display: "block",
                                      overflow: "hidden",
                                      textOverflow: "ellipsis",
                                      whiteSpace: "nowrap",
                                      width: "100%",
                                    }}
                                  >
                                    <Tooltip
                                      content={prompt.text}
                                      preferredPosition="above"
                                    >
                                      <Text
                                        variant="bodySm"
                                        tone="subdued"
                                        as="span"
                                      >
                                        {prompt.text}
                                      </Text>
                                    </Tooltip>
                                  </span>
                                </td>
                                {platformsToShow.map((key) => (
                                  <td
                                    key={key}
                                    style={{ padding: 0, height: "40px" }}
                                  >
                                    {renderCell(prompt, key)}
                                  </td>
                                ))}
                              </tr>
                            ))}
                        </>
                      );
                    })}
            </tbody>
          </table>
        </div>

        {/* Expand / Collapse Button */}
        {(rowType === "competitors" ? sortedCompetitors : sortedTopics).length >
          20 && (
          <div
            style={{
              padding: "12px",
              borderTop: "1px solid #e1e3e5",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <button
              style={{
                background: "none",
                border: "none",
                cursor: "pointer",
                padding: 0,
                color: "var(--p-color-text-link, #2c6ecb)",
              }}
              onClick={() =>
                setVisibleCount(
                  visibleCount > 20
                    ? 20
                    : (rowType === "competitors"
                        ? sortedCompetitors
                        : sortedTopics
                      ).length,
                )
              }
            >
              {visibleCount > 20 ? (
                <InlineStack gap="100" blockAlign="center">
                  <Text as="span" variant="bodyMd">
                    Show less
                  </Text>
                  <Icon source={ChevronUpIcon} tone="base" />
                </InlineStack>
              ) : (
                <InlineStack gap="100" blockAlign="center">
                  <Text as="span" variant="bodyMd">
                    Show more (
                    {(rowType === "competitors"
                      ? sortedCompetitors
                      : sortedTopics
                    ).length - 20}{" "}
                    more)
                  </Text>
                  <Icon source={ChevronDownIcon} tone="base" />
                </InlineStack>
              )}
            </button>
          </div>
        )}
      </Card>
    </BlockStack>
  );
}
