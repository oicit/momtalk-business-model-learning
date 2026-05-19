/**
 * /cards — the kid's full card collection.
 * Locked cards show as "?" greyscale; earned cards show full color + fact.
 */

import { useEffect, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { T, themes } from '../styles/kidsTokens';
import { cardData, totalCards, type Rarity } from '../data/cards';
import { useEarnedCards } from '../lib/cards';
import CollectibleCard from '../components/kids/CollectibleCard';
import Momo, { type MomoMood } from '../components/kids/Momo';
import Pill from '../components/kids/Pill';
import FadeIn from '../components/kids/FadeIn';
import { useStaggered } from '../lib/anim';

const RARITY_ORDER: Rarity[] = ['Common', 'Uncommon', 'Rare', 'Legendary'];

export default function CardsPage() {
  const navigate = useNavigate();
  const { earned } = useEarnedCards();
  const vis = useStaggered(true, cardData.length, 50);

  useEffect(() => {
    document.documentElement.classList.add('kids-mode');
    return () => document.documentElement.classList.remove('kids-mode');
  }, []);

  const earnedCount = earned.size;

  const { mood, msg } = useMemo<{ mood: MomoMood; msg: string }>(() => {
    if (earnedCount === 0) {
      return {
        mood: 'encouraging',
        msg: 'No cards yet! Finish a lesson on the map to earn your first card.',
      };
    }
    if (earnedCount < totalCards) {
      return {
        mood: 'excited',
        msg: `You've collected ${earnedCount} of ${totalCards} cards. Keep going!`,
      };
    }
    return {
      mood: 'celebrating',
      msg: 'WOW! You collected EVERY card! You are a true money master!',
    };
  }, [earnedCount]);

  // Group cards by rarity for layout
  const grouped = useMemo(() => {
    const out: Record<Rarity, typeof cardData> = {
      Common: [],
      Uncommon: [],
      Rare: [],
      Legendary: [],
    };
    for (const c of cardData) out[c.rarity].push(c);
    return out;
  }, []);

  return (
    <div
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        background: themes.portal.bg,
      }}
    >
      <Header />

      <main style={{ flex: 1, padding: '32px 20px 60px' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <Momo mood={mood} msg={msg} size={60} />

          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 14,
              marginTop: 18,
              marginBottom: 28,
              flexWrap: 'wrap',
            }}
          >
            <h1
              style={{
                fontSize: 'clamp(28px, 4vw, 42px)',
                fontWeight: 700,
                color: T.green,
                margin: 0,
                letterSpacing: '-0.02em',
              }}
            >
              My Cards
            </h1>
            <Pill bg={T.white} color={T.green} size="md">
              <span style={{ fontSize: 14 }}>
                🃏 <b className="num">{earnedCount}</b> / {totalCards}
              </span>
            </Pill>
            <Pill bg={T.yellow} color={T.green} onClick={() => navigate('/')}>
              ← Back to map
            </Pill>
          </div>

          {RARITY_ORDER.map((rarity) => {
            const cards = grouped[rarity];
            if (!cards.length) return null;
            return (
              <section key={rarity} style={{ marginBottom: 36 }}>
                <h2
                  style={{
                    fontSize: 16,
                    fontWeight: 800,
                    color: T.green,
                    letterSpacing: '.08em',
                    textTransform: 'uppercase',
                    marginBottom: 14,
                  }}
                >
                  {rarity}
                </h2>
                <div
                  style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: 16,
                    justifyContent: 'flex-start',
                  }}
                >
                  {cards.map((card) => {
                    const idx = cardData.indexOf(card);
                    return (
                      <FadeIn key={card.id} show={vis[idx]}>
                        <CollectibleCard
                          card={card}
                          earned={earned.has(card.id)}
                          size="md"
                        />
                      </FadeIn>
                    );
                  })}
                </div>
              </section>
            );
          })}
        </div>
      </main>

      <Footer />
    </div>
  );
}
