import { useEffect, useState } from 'react';
import { T, radius, shadow as makeShadow } from '../../styles/kidsTokens';
import { cardData, RARITY_COLORS } from '../../data/cards';
import Emo from './Emo';

interface CardEarnedToastProps {
  /** Card id to celebrate. Pass `null` to dismiss. */
  cardId: string | null;
  /** Called after the toast finishes auto-dismissing. */
  onClose: () => void;
  /** Auto-dismiss delay in ms (default 4500). */
  duration?: number;
}

/**
 * Fixed-position bottom-center toast that celebrates a newly earned card.
 *
 * Pop-in: scale 0→1 + rotate -8°→0°, auto-dismisses after `duration` ms.
 */
export default function CardEarnedToast({
  cardId,
  onClose,
  duration = 4500,
}: CardEarnedToastProps) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!cardId) {
      setVisible(false);
      return;
    }
    // Trigger pop animation on mount
    requestAnimationFrame(() => setVisible(true));
    const dismissTimer = setTimeout(() => setVisible(false), duration - 400);
    const closeTimer = setTimeout(onClose, duration);
    return () => {
      clearTimeout(dismissTimer);
      clearTimeout(closeTimer);
    };
  }, [cardId, duration, onClose]);

  if (!cardId) return null;
  const card = cardData.find((c) => c.id === cardId);
  if (!card) return null;

  return (
    <div
      style={{
        position: 'fixed',
        bottom: 32,
        left: '50%',
        transform: visible
          ? 'translateX(-50%) scale(1) rotate(0)'
          : 'translateX(-50%) scale(0.4) rotate(-8deg)',
        opacity: visible ? 1 : 0,
        transition:
          'transform .55s cubic-bezier(.34,1.6,.64,1), opacity .35s ease',
        zIndex: 9999,
        background: card.color,
        border: `4px solid ${T.green}`,
        borderRadius: radius.cardLg,
        padding: '14px 22px',
        boxShadow: makeShadow(8, T.green),
        display: 'flex',
        alignItems: 'center',
        gap: 16,
        maxWidth: 'calc(100vw - 32px)',
      }}
    >
      <div
        style={{
          position: 'relative',
          flexShrink: 0,
          width: 64,
          height: 64,
          background: T.white,
          border: `3px solid ${T.green}`,
          borderRadius: 16,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Emo size={42}>{card.emoji}</Emo>
        <div
          style={{
            position: 'absolute',
            top: -8,
            right: -10,
            background: RARITY_COLORS[card.rarity],
            color: T.white,
            borderRadius: radius.pill,
            padding: '2px 8px',
            fontSize: 9,
            fontWeight: 800,
            border: `2px solid ${T.white}`,
          }}
        >
          {card.rarity}
        </div>
      </div>
      <div style={{ minWidth: 0 }}>
        <div
          style={{
            fontSize: 11,
            fontWeight: 800,
            color: T.coral,
            letterSpacing: '.08em',
            textTransform: 'uppercase',
          }}
        >
          ★ Card Earned!
        </div>
        <div
          style={{
            fontSize: 17,
            fontWeight: 800,
            color: T.green,
            marginTop: 2,
          }}
        >
          {card.title}
        </div>
        <div
          style={{
            fontSize: 12,
            color: T.text,
            marginTop: 2,
            fontWeight: 500,
          }}
        >
          {card.fact}
        </div>
      </div>
    </div>
  );
}
