import { useState } from 'react';
import type { CSSProperties } from 'react';
import { T, radius } from '../../styles/kidsTokens';
import Emo from './Emo';

interface ConceptCardProps {
  emoji: string;
  title: string;
  /** Body text shown when expanded. */
  desc: string;
  /** Card background color. */
  color?: string;
  /** Force the card to start expanded (e.g. for printing). */
  defaultExpanded?: boolean;
  style?: CSSProperties;
}

/**
 * Tap-to-expand concept card. Matches the existing Chick-fil-A KEY_LESSONS UX
 * but with the kids-mode visual language (chunky border, solid shadow).
 */
export default function ConceptCard({
  emoji,
  title,
  desc,
  color = T.white,
  defaultExpanded = false,
  style,
}: ConceptCardProps) {
  const [expanded, setExpanded] = useState(defaultExpanded);

  return (
    <button
      type="button"
      onClick={() => setExpanded((v) => !v)}
      style={{
        background: color,
        border: `4px solid ${T.green}`,
        borderRadius: radius.cardLg,
        padding: 16,
        textAlign: 'left',
        cursor: 'pointer',
        width: '100%',
        boxShadow: expanded
          ? `6px 6px 0 ${T.green}`
          : `3px 3px 0 ${T.green}`,
        transform: expanded ? 'translate(-1px,-1px)' : 'none',
        transition: 'all .2s ease',
        fontFamily: 'inherit',
        ...style,
      }}
      aria-expanded={expanded}
    >
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: 12,
        }}
      >
        <Emo size={32}>{emoji}</Emo>
        <h3
          style={{
            fontSize: 16,
            fontWeight: 700,
            color: T.green,
            margin: 0,
            flex: 1,
          }}
        >
          {title}
        </h3>
        <span
          style={{
            fontSize: 14,
            color: T.green,
            transition: 'transform .2s ease',
            transform: expanded ? 'rotate(180deg)' : 'rotate(0)',
          }}
        >
          ▼
        </span>
      </div>
      {expanded && (
        <p
          style={{
            fontSize: 14,
            color: T.text,
            fontWeight: 500,
            lineHeight: 1.55,
            marginTop: 12,
            marginBottom: 0,
            animation: 'kids-pulse 0.01s', // suppresses jank — replaced by FadeIn pattern later
          }}
        >
          {desc}
        </p>
      )}
    </button>
  );
}
