// src/components/MomoMentorBubble.tsx

import { useState } from 'react';
import type { DifficultyLevel } from '../hooks/useAdaptive';

interface MomoMentorBubbleProps {
  lessonId: string;
  step: number;
  difficulty: DifficultyLevel;
  childName?: string;
}

const MOMO_TIPS: Record<string, Record<number, Record<DifficultyLevel, string>>> = {
  'garage-sale': {
    0: {
      easy: "Hi! I'm Momo! Let's learn about selling things! It's going to be so fun!",
      medium: "Hey there! Ready to learn how a garage sale business works? Let's dive in!",
      hard: "Welcome, entrepreneur! Today we're analyzing the garage sale business model. Let's go!",
    },
    1: {
      easy: 'A garage sale is when you sell your old stuff! People come to your house and buy things!',
      medium: "A garage sale turns items you don't need into cash. It's one of the simplest business models!",
      hard: 'Garage sales are a peer-to-peer marketplace with zero inventory cost. Your unused items become assets!',
    },
    2: {
      easy: 'When you sell something, you get money! That\'s called earning!',
      medium: 'Revenue minus expenses equals profit. Keep your costs low for maximum profit!',
      hard: 'In business, we track P&L — profit and loss. Your gross margin on pre-owned items approaches 100%!',
    },
  },
  'chick-fil-a': {
    0: {
      easy: "Let's learn about a restaurant that makes yummy chicken!",
      medium: "Chick-fil-A is one of the most successful restaurant chains. Let's find out why!",
      hard: "Chick-fil-A generates more revenue per restaurant than any other fast-food chain. Let's analyze how!",
    },
    1: {
      easy: "They always say 'my pleasure' to be super nice! That makes people happy!",
      medium: "Customer service is their secret weapon. 'My pleasure' isn't just words — it's a business strategy!",
      hard: 'Their NPS scores consistently outperform competitors by 2x. Service differentiation drives customer lifetime value.',
    },
  },
};

export default function MomoMentorBubble({ lessonId, step, difficulty, childName }: MomoMentorBubbleProps) {
  const [dismissed, setDismissed] = useState(false);

  if (dismissed) return null;

  const tips = MOMO_TIPS[lessonId];
  const stepTips = tips?.[step];
  const tip = stepTips?.[difficulty] || stepTips?.medium;

  if (!tip) return null;

  const displayTip = childName ? tip.replace(/there|entrepreneur/i, childName) : tip;

  return (
    <div style={{
      display: 'flex',
      gap: 12,
      padding: 16,
      background: '#FFF8F0',
      borderRadius: 20,
      border: '3px solid #2D7B5F',
      margin: '16px 0',
      alignItems: 'flex-start',
      animation: 'fadeInUp 0.4s ease-out',
    }}>
      <div style={{
        width: 40,
        height: 40,
        borderRadius: '50%',
        background: 'linear-gradient(135deg, #FFE5EC, #FFCCD8)',
        border: '2px solid #2D7B5F',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 20,
        flexShrink: 0,
      }}>
        <span role="img" aria-label="Momo">&#x1F415;</span>
      </div>
      <div style={{ flex: 1 }}>
        <div style={{ fontSize: 12, fontWeight: 800, color: '#FF6B8A', marginBottom: 4 }}>
          MOMO SAYS
        </div>
        <p style={{ fontSize: 14, fontWeight: 600, color: '#2D7B5F', lineHeight: 1.5, margin: 0 }}>
          {displayTip}
        </p>
      </div>
      <button
        onClick={() => setDismissed(true)}
        style={{
          background: 'none',
          border: 'none',
          color: '#5E8C7F',
          cursor: 'pointer',
          fontSize: 16,
          padding: 4,
        }}
      >
        &#x2715;
      </button>
    </div>
  );
}
