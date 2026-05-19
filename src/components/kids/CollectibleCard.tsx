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
 * Earned   → full color, rarity badge top-right, fact visible (md/lg only)
 * Locked   → greyscale, "?" placeholder, no fact
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
        background: earned ? card.color : '#E5E5E5',
        border: `${size === 'sm' ? 2 : 3}px solid ${earned ? T.green : '#BBB'}`,
        borderRadius: size === 'sm' ? 12 : radius.cardLg,
        padding: s.padding,
        textAlign: 'center',
        position: 'relative',
        boxShadow: earned ? makeShadow(size === 'sm' ? 2 : 4, T.green) : 'none',
        opacity: earned ? 1 : 0.55,
        transition: 'all .3s ease',
        ...style,
      }}
    >
      {earned && (
        <div
          style={{
            position: 'absolute',
            top: size === 'sm' ? -4 : -6,
            right: size === 'sm' ? -4 : -6,
            background: RARITY_COLORS[card.rarity],
            color: T.white,
            borderRadius: radius.pill,
            padding: size === 'sm' ? '1px 6px' : '2px 9px',
            fontSize: size === 'sm' ? 9 : 10,
            fontWeight: 800,
            border: `2px solid ${T.white}`,
            letterSpacing: '0.02em',
          }}
        >
          {card.rarity}
        </div>
      )}

      <Emo size={s.emoji}>{earned ? card.emoji : '❓'}</Emo>

      <div
        style={{
          fontSize: s.title,
          fontWeight: 700,
          color: earned ? T.green : T.sub,
          marginTop: size === 'sm' ? 2 : 6,
          lineHeight: 1.2,
        }}
      >
        {earned ? card.title : '???'}
      </div>

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
    </div>
  );
}
