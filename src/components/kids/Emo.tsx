import type { CSSProperties, ReactNode } from 'react';
import { useTwemoji } from '../../lib/anim';

interface EmoProps {
  /** Emoji character, e.g. "🐔" */
  children: ReactNode;
  /** Pixel size of the rendered emoji box. */
  size?: number;
  /** Extra style overrides. */
  style?: CSSProperties;
}

/**
 * Emoji wrapper that renders the emoji at a fixed pixel size, with Twemoji
 * applied so it looks identical across Mac/Windows/Android/iOS.
 *
 * Without Twemoji on the page, falls back to the platform emoji.
 */
export default function Emo({ children, size = 20, style }: EmoProps) {
  const ref = useTwemoji<HTMLSpanElement>();

  return (
    <span
      ref={ref}
      className="emo"
      style={{
        width: size,
        height: size,
        fontSize: size,
        lineHeight: 1,
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        verticalAlign: 'middle',
        flexShrink: 0,
        ...style,
      }}
    >
      {children}
    </span>
  );
}
