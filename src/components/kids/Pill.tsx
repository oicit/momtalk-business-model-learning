import type { CSSProperties, ReactNode } from 'react';
import { T, radius, shadow as makeShadow } from '../../styles/kidsTokens';

interface PillProps {
  children: ReactNode;
  /** Background color. */
  bg?: string;
  /** Border + text color (default green). */
  color?: string;
  /** Size variant. */
  size?: 'sm' | 'md' | 'lg';
  /** Click handler — if provided, becomes a button. */
  onClick?: () => void;
  /** Disabled state (only meaningful when onClick is set). */
  disabled?: boolean;
  /** Extra style overrides. */
  style?: CSSProperties;
  /** ARIA label for accessibility. */
  'aria-label'?: string;
}

const SIZES = {
  sm: { padding: '4px 12px', fontSize: 11, shadowOffset: 2 },
  md: { padding: '6px 16px', fontSize: 13, shadowOffset: 3 },
  lg: { padding: '10px 22px', fontSize: 16, shadowOffset: 4 },
} as const;

/**
 * Pill — rounded badge/button. Use for labels, chips, action buttons.
 * Automatically becomes a button if onClick is provided.
 */
export default function Pill({
  children,
  bg,
  color = T.green,
  size = 'md',
  onClick,
  disabled,
  style,
  'aria-label': ariaLabel,
}: PillProps) {
  const s = SIZES[size];
  const baseStyle: CSSProperties = {
    background: bg ?? T.white,
    border: `3px solid ${color}`,
    color,
    borderRadius: radius.pill,
    padding: s.padding,
    fontSize: s.fontSize,
    fontWeight: 600,
    boxShadow: makeShadow(s.shadowOffset, color),
    display: 'inline-flex',
    alignItems: 'center',
    gap: 6,
    textAlign: 'center',
    lineHeight: 1.4,
    opacity: disabled ? 0.5 : 1,
    cursor: onClick && !disabled ? 'pointer' : 'default',
    transition: 'transform .15s ease, box-shadow .15s ease',
    ...style,
  };

  if (onClick) {
    return (
      <button
        type="button"
        onClick={disabled ? undefined : onClick}
        disabled={disabled}
        aria-label={ariaLabel}
        style={baseStyle}
        onMouseDown={(e) => {
          if (disabled) return;
          (e.currentTarget as HTMLButtonElement).style.transform =
            'translate(2px,2px) scale(.97)';
          (e.currentTarget as HTMLButtonElement).style.boxShadow = makeShadow(
            Math.max(0, s.shadowOffset - 2),
            color,
          );
        }}
        onMouseUp={(e) => {
          if (disabled) return;
          (e.currentTarget as HTMLButtonElement).style.transform = '';
          (e.currentTarget as HTMLButtonElement).style.boxShadow = makeShadow(
            s.shadowOffset,
            color,
          );
        }}
        onMouseLeave={(e) => {
          (e.currentTarget as HTMLButtonElement).style.transform = '';
          (e.currentTarget as HTMLButtonElement).style.boxShadow = makeShadow(
            s.shadowOffset,
            color,
          );
        }}
      >
        {children}
      </button>
    );
  }

  return <span style={baseStyle}>{children}</span>;
}
