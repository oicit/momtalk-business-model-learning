/**
 * /dev/kids — visual preview of all kids-mode primitives.
 * NOT FOR PRODUCTION. Used to verify the design system before integrating.
 */

import { useEffect, useState } from 'react';
import { T, themes, type ThemeKey } from '../../styles/kidsTokens';
import { useAnimStep, useStaggered } from '../../lib/anim';
import Emo from '../../components/kids/Emo';
import FadeIn from '../../components/kids/FadeIn';
import MCard from '../../components/kids/MCard';
import Pill from '../../components/kids/Pill';
import TapCard from '../../components/kids/TapCard';
import Momo, { type MomoMood } from '../../components/kids/Momo';

const MOODS: MomoMood[] = [
  'happy',
  'excited',
  'thinking',
  'celebrating',
  'encouraging',
  'sad',
  'cool',
  'love',
];

const THEME_KEYS = Object.keys(themes) as ThemeKey[];

export default function KidsDevPage() {
  // Enable kids-mode globally while this page is mounted
  useEffect(() => {
    document.documentElement.classList.add('kids-mode');
    return () => document.documentElement.classList.remove('kids-mode');
  }, []);

  const [trigger, setTrigger] = useState(0);
  const step = useAnimStep(true, 4, 1200);
  const stepLabels = ['🌱 Plant', '💧 Water', '☀️ Sun', '🌳 Grow!'];

  return (
    <div
      style={{
        minHeight: '100vh',
        background: T.canvas,
        padding: '40px 24px 80px',
        color: T.text,
      }}
    >
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        <h1 style={{ fontSize: 36, fontWeight: 600, color: T.green, marginBottom: 4 }}>
          Kids Mode — Design System
        </h1>
        <p style={{ fontSize: 14, color: T.sub, marginBottom: 32 }}>
          Phase 1+2 visual preview. Toggle reload to re-trigger staggered animations.
        </p>

        {/* ============================== TYPOGRAPHY ============================== */}
        <Section title="Typography">
          <p style={{ fontSize: 28, fontWeight: 600, color: T.green }}>
            Fredoka — display
          </p>
          <p style={{ fontSize: 18, fontWeight: 500 }}>
            Fredoka — body text. The quick brown fox jumps over the lazy dog.
          </p>
          <p className="num" style={{ fontSize: 16 }}>
            Space Mono for numbers: 1234567890 — $42.00 — 50% / 30% / 20%
          </p>
        </Section>

        {/* ============================== COLOR TOKENS ============================== */}
        <Section title="Color tokens (T.*)">
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            {Object.entries(T).map(([k, v]) => (
              <Swatch key={k} name={k} color={v} />
            ))}
          </div>
        </Section>

        {/* ============================== THEMES ============================== */}
        <Section title="Lesson themes">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))',
              gap: 12,
            }}
          >
            {THEME_KEYS.map((key) => {
              const theme = themes[key];
              return (
                <div
                  key={key}
                  style={{
                    background: theme.bg,
                    border: `3px solid ${theme.accent}`,
                    borderRadius: 16,
                    padding: 14,
                    boxShadow: `4px 4px 0 ${theme.accent}`,
                  }}
                >
                  <div style={{ fontSize: 13, fontWeight: 600, color: theme.accent }}>
                    {key}
                  </div>
                  <div style={{ fontSize: 11, color: T.sub, marginTop: 2 }}>
                    accent: {theme.accent}
                  </div>
                </div>
              );
            })}
          </div>
        </Section>

        {/* ============================== PILLS ============================== */}
        <Section title="Pills (badges + buttons)">
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', alignItems: 'center' }}>
            <Pill size="sm">small</Pill>
            <Pill size="md">medium</Pill>
            <Pill size="lg">large</Pill>
            <Pill color={T.pink}>pink</Pill>
            <Pill color={T.coral}>coral</Pill>
            <Pill color={T.lavender}>lavender</Pill>
            <Pill onClick={() => alert('clicked!')}>I'm a button</Pill>
            <Pill onClick={() => {}} disabled>
              disabled
            </Pill>
          </div>
        </Section>

        {/* ============================== MCARDS ============================== */}
        <Section title="MCard — content container">
          <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
            <MCard style={{ maxWidth: 280 }}>
              <h3 style={{ margin: 0, color: T.green }}>Standard card</h3>
              <p style={{ marginTop: 6, fontSize: 14 }}>
                White background, 5px green border, soft offset shadow.
              </p>
            </MCard>
            <MCard bg={T.mint} borderColor={T.green} style={{ maxWidth: 280 }}>
              <h3 style={{ margin: 0, color: T.green }}>Tinted card</h3>
              <p style={{ marginTop: 6, fontSize: 14 }}>Mint background for variation.</p>
            </MCard>
            <MCard
              bg="#FFE5EA"
              borderColor={T.coral}
              borderWidth={4}
              style={{ maxWidth: 280 }}
            >
              <h3 style={{ margin: 0, color: T.coral }}>Themed card</h3>
              <p style={{ marginTop: 6, fontSize: 14 }}>Chick-fil-A coral theme.</p>
            </MCard>
          </div>
        </Section>

        {/* ============================== TAPCARDS ============================== */}
        <Section title="TapCard — clickable lesson tiles">
          <div style={{ display: 'flex', gap: 18, flexWrap: 'wrap' }}>
            <TapCard
              emoji="🐔"
              title="Chick-fil-A"
              color={themes['chick-fil-a'].bg}
              onClick={() => alert('Chick-fil-A!')}
            />
            <TapCard
              emoji="🏷️"
              title="Garage Sale"
              color={themes['garage-sale'].bg}
              badge="✓"
              onClick={() => alert('Garage Sale!')}
            />
            <TapCard
              emoji="🍋"
              title={'Lemonade\nStand'}
              color={themes['lemonade-stand'].bg}
              disabled
            />
          </div>
        </Section>

        {/* ============================== MOMO ============================== */}
        <Section title="Momo — mascot with 8 moods">
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            {MOODS.map((m) => (
              <Momo key={m} mood={m} msg={`I'm feeling ${m}!`} />
            ))}
            <Momo
              mood="excited"
              msg="Grandma gave you $100 for your birthday — let me help you learn what to do with it!"
              size={70}
            />
            <Momo mood="cool" avatarOnly size={50} />
          </div>
        </Section>

        {/* ============================== FADE-IN + STAGGER ============================== */}
        <Section title="Stagger + FadeIn">
          <Pill onClick={() => setTrigger((n) => n + 1)}>Replay animations</Pill>
          <StaggerDemo trigger={trigger} />
          <div style={{ fontSize: 12, color: T.sub, marginTop: 6 }}>
            (animations stagger at 150ms intervals)
          </div>
        </Section>

        {/* ============================== ANIMSTEP ============================== */}
        <Section title="AnimStep — cycling concept frame">
          <MCard bg={T.mint} style={{ maxWidth: 320, textAlign: 'center' }}>
            <div style={{ fontSize: 36, fontWeight: 600, color: T.green }}>
              {stepLabels[step]}
            </div>
            <div style={{ fontSize: 12, color: T.sub, marginTop: 4 }}>
              step {step + 1} / 4 (advances every 1.2s)
            </div>
          </MCard>
        </Section>

        {/* ============================== TWEMOJI ============================== */}
        <Section title="Twemoji parity">
          <p style={{ fontSize: 18 }}>
            <Emo size={28}>🐔</Emo> <Emo size={28}>🍋</Emo>{' '}
            <Emo size={28}>🏷️</Emo> <Emo size={28}>🐮</Emo>{' '}
            <Emo size={28}>🎯</Emo> <Emo size={28}>🚀</Emo>
          </p>
          <p style={{ fontSize: 13, color: T.sub }}>
            If twemoji loaded, these are SVG and look identical on all platforms.
            Otherwise system emojis are used.
          </p>
        </Section>
      </div>
    </div>
  );
}

function StaggerDemo({ trigger }: { trigger: number }) {
  const vis = useStaggered(true, 6, 150);
  const colors = [T.pink, T.yellow, T.blue, T.lavender, T.coral, T.mint];
  const emojis = ['🐔', '🍋', '🏷️', '🐾', '🎬', '🍪'];
  return (
    <div
      key={trigger}
      style={{ marginTop: 16, display: 'flex', gap: 12, flexWrap: 'wrap' }}
    >
      {emojis.map((emoji, i) => (
        <FadeIn key={i} show={vis[i]}>
          <MCard bg={colors[i]} style={{ width: 90, textAlign: 'center' }}>
            <Emo size={32}>{emoji}</Emo>
          </MCard>
        </FadeIn>
      ))}
    </div>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section style={{ marginBottom: 40 }}>
      <h2
        style={{
          fontSize: 18,
          fontWeight: 600,
          color: T.green,
          marginBottom: 14,
          paddingBottom: 4,
          borderBottom: `2px solid ${T.green}`,
        }}
      >
        {title}
      </h2>
      {children}
    </section>
  );
}

function Swatch({ name, color }: { name: string; color: string }) {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 4,
      }}
    >
      <div
        style={{
          width: 72,
          height: 72,
          background: color,
          border: `2px solid ${T.green}`,
          borderRadius: 12,
          boxShadow: `3px 3px 0 rgba(22,101,52,.15)`,
        }}
      />
      <div style={{ fontSize: 11, fontWeight: 600 }}>{name}</div>
      <div className="mono" style={{ fontSize: 10, color: T.sub }}>
        {color}
      </div>
    </div>
  );
}
