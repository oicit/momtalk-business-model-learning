import type { CSSProperties, ReactNode } from 'react';
import { T, radius, shadowSoft } from '../../styles/kidsTokens';

interface MCardProps {
  children: ReactNode;
  /** Background color (default white). */
  bg?: string;
  /** Border color (default brand green). */
  borderColor?: string;
  /** Border width in px (default 5). */
  borderWidth?: number;
  /** Override box-shadow string. */
  shadow?: string;
  /** Extra style overrides. */
  style?: CSSProperties;
  /** Class name passthrough. */
  className?: string;
}

/**
 * The main content card primitive — thick rounded border, soft offset shadow.
 * Use for lesson copy, mini-game panels, info blocks, etc.
 *
 * Default look: white background, 5px green border, 7px alpha-green shadow.
 */
export default function MCard({
  children,
  bg = T.white,
  borderColor = T.green,
  borderWidth = 5,
  shadow,
  style,
  className,
}: MCardProps) {
  return (
    <div
      className={className}
      style={{
        background: bg,
        border: `${borderWidth}px solid ${borderColor}`,
        borderRadius: radius.cardLg,
        boxShadow: shadow ?? shadowSoft(7),
        padding: '14px 18px',
        ...style,
      }}
    >
      {children}
    </div>
  );
}
