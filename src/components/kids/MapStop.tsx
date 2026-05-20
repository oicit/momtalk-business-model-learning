import type { MapStop as Stop } from '../../data/portalStops';
import { T } from '../../styles/kidsTokens';
import TapCard from './TapCard';

interface MapStopProps {
  stop: Stop;
  /** Has the kid completed this stop? */
  visited: boolean;
  onTap: (stop: Stop) => void;
  /** Width in px (passed to TapCard). */
  size?: number;
}

/**
 * One station on the board-game map.
 *
 * States:
 *   - available + not visited → tappable, themed color
 *   - available + visited     → tappable, ✓ badge top-right
 *   - coming-soon             → greyed, 🔒 lock badge, no tap
 */
export default function MapStop({ stop, visited, onTap, size = 160 }: MapStopProps) {
  const isLocked = stop.status === 'coming-soon';

  let badge: React.ReactNode = undefined;
  if (isLocked) badge = '🔒';
  else if (visited) badge = '✓';

  return (
    <TapCard
      emoji={stop.emoji}
      title={stop.title}
      color={visited ? '#FFFEE0' : stop.color}
      borderColor={visited ? T.green : T.green}
      width={size}
      onClick={() => onTap(stop)}
      disabled={isLocked}
      badge={badge}
      style={{
        boxShadow: visited
          ? `5px 5px 0 ${T.green}, 0 0 0 4px rgba(45,155,110,0.12)`
          : undefined,
      }}
    />
  );
}
