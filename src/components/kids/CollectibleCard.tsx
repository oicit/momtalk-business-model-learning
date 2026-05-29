import type { CSSProperties } from 'react';
import { T, radius, shadow as makeShadow } from '../../styles/kidsTokens';
import { type CardDef, RARITY_COLORS } from '../../data/cards';
import Emo from './Emo';

interface CollectibleCardProps {
  card: CardDef;
  /** Has the kid earned this card? */
  earned: boolean;
  /** Visual size variant. */
  size?: 'sm' | 'md' | 'lg';
  style?: CSSProperties;
}

const SIZES = {
  sm: { width: 96, emoji: 28, title: 11, fact: 0, padding: 8 },
  md: { width: 144, emoji: 44, title: 14, fact: 11, padding: 12 },
  lg: { width: 180, emoji: 56, title: 16, fact: 12, padding: 14 },
} as const;

/**
 * Collectible card visual.
 *
 * Earned → full color background, SOLID border, drop shadow, rarity badge,
 *           emoji + title + fact all shown.
 * Locked → SAME background color + emoji + title + rarity badge so kids can
 *           SEE what's in the deck and what they're working toward — but with
 *           a DASHED border, no shadow, and the fact hidden (the unlock prize).
 *
 * Semantic cues only — no grey text and no opacity-on-text (CLAUDE.md rule).
 * The "earned" affordance is the solid border + shadow + visible fact.
 */
export default function CollectibleCard({
  card,
  earned,
  size = 'md',
  style,
}: CollectibleCardProps) {
  const s = SIZES[size];
  const showFact = size !== 'sm' && earned;

  return (
    <div
      style={{
        width: s.width,
        background: card.color,
        border: earned
          ? `${size === 'sm' ? 2 : 3}px solid ${T.green}`
          : `${size === 'sm' ? 2 : 3}px dashed ${T.green}`,
        borderRadius: size === 'sm' ? 12 : radius.cardLg,
        padding: s.padding,
        textAlign: 'center',
        position: 'relative',
        boxShadow: earned ? makeShadow(size === 'sm' ? 2 : 4, T.green) : 'none',
        transition: 'all .3s ease',
        ...style,
      }}
    >
      {/* Rarity badge — ALWAYS shown so the kid sees the rarity tier of every card */}
      <div
        style={{
          position: 'absolute',
          top: size === 'sm' ? -4 : -6,
          right: size === 'sm' ? -4 : -6,
          background: earned ? RARITY_COLORS[card.rarity] : T.white,
          color: earned ? T.white : RARITY_COLORS[card.rarity],
          borderRadius: radius.pill,
          padding: size === 'sm' ? '1px 6px' : '2px 9px',
          fontSize: size === 'sm' ? 9 : 10,
          fontWeight: 800,
          border: `2px solid ${earned ? T.white : RARITY_COLORS[card.rarity]}`,
          letterSpacing: '0.02em',
        }}
      >
        {card.rarity}
      </div>

      {/* Lock badge — bottom-right corner when locked. Semantic, not muted-text. */}
      {!earned && (
        <div
          style={{
            position: 'absolute',
            bottom: size === 'sm' ? -4 : -6,
            right: size === 'sm' ? -4 : -6,
            background: T.white,
            color: T.green,
            borderRadius: radius.pill,
            padding: size === 'sm' ? '1px 5px' : '2px 7px',
            fontSize: size === 'sm' ? 10 : 12,
            fontWeight: 800,
            border: `2px solid ${T.green}`,
          }}
          aria-label="Locked — finish the matching lesson to unlock"
        >
          🔒
        </div>
      )}

      {/* Emoji — ALWAYS shown so the deck reads as 35 distinct cards */}
      <Emo size={s.emoji}>{card.emoji}</Emo>

      {/* Title — ALWAYS shown so the kid knows what each card IS */}
      <div
        style={{
          fontSize: s.title,
          fontWeight: 700,
          color: T.green,
          marginTop: size === 'sm' ? 2 : 6,
          lineHeight: 1.2,
        }}
      >
        {card.title}
      </div>

      {/* Fact — the unlock reward. Hidden until earned. */}
      {showFact && (
        <div
          style={{
            fontSize: s.fact,
            color: T.text,
            marginTop: 6,
            lineHeight: 1.4,
            fontWeight: 500,
          }}
        >
          {card.fact}
        </div>
      )}

      {/* Unlock hint — shown only for locked milestone cards so the kid
          knows the path. Earned cards show the fact instead. */}
      {!earned && size !== 'sm' && card.unlockHint && (
        <div
          style={{
            fontSize: s.fact,
            color: T.green,
            marginTop: 6,
            lineHeight: 1.4,
            fontWeight: 700,
            fontStyle: 'italic',
          }}
        >
          {card.unlockHint}
        </div>
      )}
    </div>
  );
}
