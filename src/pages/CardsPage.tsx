/**
 * /cards — the kid's full card collection.
 * Locked cards show as "?" greyscale; earned cards show full color + fact.
 */

import { useEffect, useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { T, themes } from '../styles/kidsTokens';
import {
  cardData,
  totalCards,
  SKILL_ORDER,
  SKILL_ICONS,
  type Rarity,
  type Skill,
} from '../data/cards';
import { useEarnedCards } from '../lib/cards';
import CollectibleCard from '../components/kids/CollectibleCard';
import Momo, { type MomoMood } from '../components/kids/Momo';
import Pill from '../components/kids/Pill';
import FadeIn from '../components/kids/FadeIn';
import { useStaggered } from '../lib/anim';

const RARITY_ORDER: Rarity[] = ['Common', 'Uncommon', 'Rare', 'Legendary'];

type ViewMode = 'rarity' | 'skill';
const VIEW_STORAGE_KEY = 'bml.cardsView.v1';

export default function CardsPage() {
  const navigate = useNavigate();
  const { earned } = useEarnedCards();
  const vis = useStaggered(true, cardData.length, 50);

  // View mode: rarity (default, classic) or skill (lane-based).
  // Persisted across visits.
  const [view, setView] = useState<ViewMode>(() => {
    try {
      const stored = localStorage.getItem(VIEW_STORAGE_KEY);
      return stored === 'skill' ? 'skill' : 'rarity';
    } catch {
      return 'rarity';
    }
  });
  useEffect(() => {
    try {
      localStorage.setItem(VIEW_STORAGE_KEY, view);
    } catch {
      // best effort
    }
  }, [view]);

  useEffect(() => {
    document.documentElement.classList.add('kids-mode');
    return () => document.documentElement.classList.remove('kids-mode');
  }, []);

  const earnedCount = earned.size;

  const { mood, msg } = useMemo<{ mood: MomoMood; msg: string }>(() => {
    if (earnedCount === 0) {
      return {
        mood: 'encouraging',
        msg: `Here's the full collection — ${totalCards} cards waiting! Finish a lesson on the map to unlock your first one.`,
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

  // Group cards by rarity for the classic view
  const groupedByRarity = useMemo(() => {
    const out: Record<Rarity, typeof cardData> = {
      Common: [],
      Uncommon: [],
      Rare: [],
      Legendary: [],
    };
    for (const c of cardData) out[c.rarity].push(c);
    return out;
  }, []);

  // Group cards by skill lane for the alternate view
  const groupedBySkill = useMemo(() => {
    const out = Object.fromEntries(
      SKILL_ORDER.map((s) => [s, [] as typeof cardData]),
    ) as Record<Skill, typeof cardData>;
    for (const c of cardData) out[c.skill].push(c);
    return out;
  }, []);

  // Per-lane earned count for the skill-view subheader
  const skillProgress = useMemo(() => {
    const out = Object.fromEntries(
      SKILL_ORDER.map((s) => [s, { earned: 0, total: 0 }]),
    ) as Record<Skill, { earned: number; total: number }>;
    for (const c of cardData) {
      out[c.skill].total++;
      if (earned.has(c.id)) out[c.skill].earned++;
    }
    return out;
  }, [earned]);

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

          {/* View toggle: Rarity (classic) vs Skill lanes */}
          <div
            role="tablist"
            aria-label="View mode"
            style={{
              display: 'inline-flex',
              gap: 0,
              marginBottom: 24,
              border: `2px solid ${T.green}`,
              borderRadius: 999,
              padding: 3,
              background: T.white,
            }}
          >
            <button
              type="button"
              role="tab"
              aria-selected={view === 'rarity'}
              onClick={() => setView('rarity')}
              style={{
                background: view === 'rarity' ? T.green : 'transparent',
                color: view === 'rarity' ? T.white : T.green,
                border: 'none',
                borderRadius: 999,
                padding: '8px 18px',
                fontFamily: 'inherit',
                fontWeight: 800,
                fontSize: 13,
                cursor: 'pointer',
              }}
            >
              ✨ By Rarity
            </button>
            <button
              type="button"
              role="tab"
              aria-selected={view === 'skill'}
              onClick={() => setView('skill')}
              style={{
                background: view === 'skill' ? T.green : 'transparent',
                color: view === 'skill' ? T.white : T.green,
                border: 'none',
                borderRadius: 999,
                padding: '8px 18px',
                fontFamily: 'inherit',
                fontWeight: 800,
                fontSize: 13,
                cursor: 'pointer',
              }}
            >
              🎯 By Skill
            </button>
          </div>

          {view === 'rarity' &&
            RARITY_ORDER.map((rarity) => {
              const cards = groupedByRarity[rarity];
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

          {view === 'skill' &&
            SKILL_ORDER.map((skill) => {
              const cards = groupedBySkill[skill];
              if (!cards.length) return null;
              const prog = skillProgress[skill];
              return (
                <section key={skill} style={{ marginBottom: 36 }}>
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 10,
                      marginBottom: 14,
                    }}
                  >
                    <span style={{ fontSize: 22 }}>{SKILL_ICONS[skill]}</span>
                    <h2
                      style={{
                        fontSize: 16,
                        fontWeight: 800,
                        color: T.green,
                        letterSpacing: '.06em',
                        textTransform: 'uppercase',
                        margin: 0,
                      }}
                    >
                      {skill}
                    </h2>
                    <Pill bg={T.white} color={T.green} size="sm">
                      <span style={{ fontSize: 11 }}>
                        <b className="num">{prog.earned}</b> / {prog.total}
                      </span>
                    </Pill>
                  </div>
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
