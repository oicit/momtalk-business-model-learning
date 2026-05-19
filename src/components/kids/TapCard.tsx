import { useState } from 'react';
import type { CSSProperties, ReactNode } from 'react';
import { T, radius, shadow as makeShadow } from '../../styles/kidsTokens';
import Emo from './Emo';

interface TapCardProps {
  /** Top emoji shown large. */
  emoji?: string;
  /** Title text below emoji. */
  title: string;
  /** Background color (theme-driven). */
  color?: string;
  /** Border color (defaults to brand green). */
  borderColor?: string;
  /** Width in px. */
  width?: number;
  /** Click handler. */
  onClick?: () => void;
  /** Disabled / locked state — greys out, no tap. */
  disabled?: boolean;
  /** Show a small badge in the top-right corner. */
  badge?: ReactNode;
  /** Extra style. */
  style?: CSSProperties;
}

/**
 * Tappable lesson/concept card — large emoji + title with chunky shadow.
 * Press-down feedback (shifts 2px + shrinks slightly).
 * Used for board-game map stops, concept tiles, and choice cards.
 */
export default function TapCard({
  emoji,
  title,
  color,
  borderColor = T.green,
  width = 200,
  onClick,
  disabled,
  badge,
  style,
}: TapCardProps) {
  const [pressed, setPressed] = useState(false);

  const handleClick = () => {
    if (disabled) return;
    onClick?.();
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      onMouseDown={() => !disabled && setPressed(true)}
      onMouseUp={() => setPressed(false)}
      onMouseLeave={() => setPressed(false)}
      onTouchStart={() => !disabled && setPressed(true)}
      onTouchEnd={() => setPressed(false)}
      disabled={disabled}
      style={{
        background: color ?? T.white,
        border: `3px solid ${disabled ? T.sub : borderColor}`,
        borderRadius: radius.card,
        padding: '20px 18px',
        textAlign: 'center',
        width,
        cursor: disabled ? 'not-allowed' : 'pointer',
        boxShadow: pressed
          ? makeShadow(1, borderColor)
          : disabled
            ? 'none'
            : makeShadow(5, borderColor),
        transform: pressed && !disabled ? 'translate(2px,2px) scale(.96)' : 'none',
        transition: 'all .15s ease',
        position: 'relative',
        opacity: disabled ? 0.55 : 1,
        ...style,
      }}
    >
      {badge !== undefined && (
        <div
          style={{
            position: 'absolute',
            top: -8,
            right: -8,
            background: T.coral,
            color: T.white,
            borderRadius: radius.pill,
            minWidth: 28,
            height: 28,
            padding: '0 8px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            border: `2px solid ${T.white}`,
            fontSize: 12,
            fontWeight: 700,
          }}
        >
          {badge}
        </div>
      )}
      {emoji && (
        <div style={{ marginBottom: 6 }}>
          <Emo size={56}>{emoji}</Emo>
        </div>
      )}
      <div
        style={{
          fontSize: 16,
          fontWeight: 600,
          color: disabled ? T.sub : T.green,
          whiteSpace: 'pre-line',
          lineHeight: 1.25,
        }}
      >
        {title}
      </div>
    </button>
  );
}
