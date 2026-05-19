import { useMemo } from 'react';
import type { MapStop as Stop } from '../../data/portalStops';
import { T } from '../../styles/kidsTokens';
import { useStaggered } from '../../lib/anim';
import FadeIn from './FadeIn';
import MapStop from './MapStop';

interface BoardMapProps {
  stops: Stop[];
  /** Set of stop ids that have been visited (or progressKeys that map to them). */
  visitedIds: Set<string>;
  /** Called when an available stop is tapped. */
  onStopTap: (stop: Stop) => void;
  /** Number of columns at desktop width. Auto-adjusts on narrow screens. */
  cols?: number;
}

/**
 * Zigzag board-game layout. Stops snake left→right, then right→left, etc.
 * Dashed yellow path connects consecutive stops, drawn as an SVG behind
 * the grid.
 *
 * On mobile the layout falls back to a single column (no zigzag).
 */
export default function BoardMap({
  stops,
  visitedIds,
  onStopTap,
  cols = 4,
}: BoardMapProps) {
  const vis = useStaggered(true, stops.length, 80);

  /** Compute zigzag (row, col) for each index. */
  const positioned = useMemo(() => {
    return stops.map((stop, i) => {
      const row = Math.floor(i / cols);
      const inRow = i % cols;
      const col = row % 2 === 0 ? inRow : cols - 1 - inRow;
      return { stop, row, col };
    });
  }, [stops, cols]);

  const totalRows = Math.ceil(stops.length / cols);

  return (
    <div
      style={{
        position: 'relative',
        width: '100%',
        maxWidth: cols * 200 + (cols - 1) * 20,
        margin: '0 auto',
      }}
    >
      {/* Dashed yellow connector path (SVG behind tiles) */}
      <svg
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          pointerEvents: 'none',
          zIndex: 0,
        }}
        viewBox={`0 0 ${cols * 200 + (cols - 1) * 20} ${totalRows * 220}`}
        preserveAspectRatio="none"
      >
        <path
          d={buildPath(positioned, cols)}
          stroke={T.yellow}
          strokeWidth={6}
          strokeDasharray="10 8"
          fill="none"
          strokeLinecap="round"
        />
      </svg>

      {/* Grid of stops */}
      <div
        className="board-map-grid"
        style={{
          display: 'grid',
          gridTemplateColumns: `repeat(${cols}, 1fr)`,
          gridAutoRows: 220,
          gap: 20,
          position: 'relative',
          zIndex: 1,
        }}
      >
        {positioned.map(({ stop, row, col }, i) => {
          const visited = !!stop.progressKey && visitedIds.has(stop.progressKey);
          return (
            <div
              key={stop.id}
              style={{
                gridColumn: col + 1,
                gridRow: row + 1,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <FadeIn show={vis[i]} delay={0}>
                <MapStop stop={stop} visited={visited} onTap={onStopTap} />
              </FadeIn>
            </div>
          );
        })}
      </div>

      {/* Mobile responsive — single column under 720px */}
      <style>{`
        @media (max-width: 720px) {
          .board-map-grid {
            grid-template-columns: 1fr !important;
            grid-auto-rows: auto !important;
          }
          .board-map-grid > * {
            grid-column: 1 !important;
            grid-row: auto !important;
          }
        }
      `}</style>
    </div>
  );
}

/**
 * Build an SVG `d` attribute that snakes through all stop centers.
 * Each stop tile is 160x160 inside a 200x220 grid cell.
 */
function buildPath(
  positioned: { stop: Stop; row: number; col: number }[],
  cols: number,
): string {
  const cellW = 200 + 20; // tile + gap
  const cellH = 220;
  if (positioned.length === 0) return '';

  const centers = positioned.map(({ row, col }) => ({
    x: col * cellW + cellW / 2,
    y: row * cellH + cellH / 2,
  }));

  // Single move + smooth quadratics between centers
  let d = `M ${centers[0].x} ${centers[0].y}`;
  for (let i = 1; i < centers.length; i++) {
    const prev = centers[i - 1];
    const cur = centers[i];
    if (prev.y === cur.y) {
      // Same row — straight horizontal line
      d += ` L ${cur.x} ${cur.y}`;
    } else {
      // Row change — gentle curve
      const midX = (prev.x + cur.x) / 2;
      d += ` Q ${midX} ${prev.y} ${midX} ${(prev.y + cur.y) / 2}`;
      d += ` Q ${midX} ${cur.y} ${cur.x} ${cur.y}`;
    }
  }
  // Suppress unused-var warning if cols ever stops being read
  void cols;
  return d;
}
