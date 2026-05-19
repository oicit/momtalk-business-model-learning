/**
 * LessonScaffold — walks a LessonDef.beats[] array and renders each beat.
 *
 * Preserves existing behavior of the current bespoke lesson pages:
 *   - Adaptive content (easy/medium/hard) via useAdaptive + resolveText
 *   - Progress tracking via useProgress.completeLesson
 *   - Spaced review scheduling via useSpacedReview.scheduleReview
 *   - Save-progress nag for guest users
 *
 * Lessons become ~50 LOC of data instead of ~500 LOC of bespoke page.
 */

import { useEffect, useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../Header';
import Footer from '../Footer';
import SaveProgressPrompt from '../SaveProgressPrompt';

import { useProgress } from '../../hooks/useProgress';
import { useSpacedReview } from '../../hooks/useSpacedReview';
import { useChildContext } from '../../hooks/useChildContext';
import { useAdaptive } from '../../hooks/useAdaptive';
import { useEarnedCards } from '../../lib/cards';
import { earnedCardFor } from '../../data/cards';
import CardEarnedToast from './CardEarnedToast';
import LemonadeStand from '../games/LemonadeStand';
import RealWorldMission from './RealWorldMission';

import {
  type LessonDef,
  type LessonBeat,
  resolveText,
} from '../../data/lessons/types';
import { themes, T } from '../../styles/kidsTokens';

import Momo from './Momo';
import FadeIn from './FadeIn';
import MCard from './MCard';
import Pill from './Pill';
import Emo from './Emo';
import QuizBeat from './QuizBeat';

interface LessonScaffoldProps {
  lesson: LessonDef;
}

export default function LessonScaffold({ lesson }: LessonScaffoldProps) {
  const theme = themes[lesson.themeKey];
  const navigate = useNavigate();
  const { isCompleted, getScore, completeLesson } = useProgress();
  const { scheduleReview } = useSpacedReview();
  const { child, isGuest } = useChildContext();
  const { difficultyLevel, themeContext } = useAdaptive(child);

  const previousScore = getScore(lesson.id);
  const alreadyDone = isCompleted(lesson.id);
  const { earnCard, hasCard } = useEarnedCards();
  const [toastCardId, setToastCardId] = useState<string | null>(null);

  // Beats become wizard steps. Outro is hidden until completion, so it's
  // pruned from the visible step list.
  const visibleBeats = useMemo(
    () => lesson.beats.filter((b) => !(b.kind === 'outro' && !alreadyDone)),
    [lesson.beats, alreadyDone],
  );
  const [stepIdx, setStepIdx] = useState(0);
  // Clamp step in case beats change (e.g., outro reveals after completion)
  useEffect(() => {
    if (stepIdx >= visibleBeats.length) setStepIdx(visibleBeats.length - 1);
  }, [visibleBeats.length, stepIdx]);

  const totalSteps = visibleBeats.length;
  const currentBeat = visibleBeats[Math.min(stepIdx, totalSteps - 1)];
  const isFirstStep = stepIdx === 0;
  const isLastStep = stepIdx === totalSteps - 1;
  const goNext = () => setStepIdx((s) => Math.min(totalSteps - 1, s + 1));
  const goBack = () => setStepIdx((s) => Math.max(0, s - 1));

  // Scroll viewport to top whenever the step changes — no inheriting scroll
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [stepIdx]);

  useEffect(() => {
    document.documentElement.classList.add('kids-mode');
    return () => document.documentElement.classList.remove('kids-mode');
  }, []);

  const stepLabel = stepLabelFor(currentBeat);

  return (
    <div
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        background: theme.bg,
      }}
    >
      <Header />

      {/* ─── Compact sticky lesson header ─── */}
      <div
        style={{
          position: 'sticky',
          top: 0,
          zIndex: 30,
          background: theme.bg,
          borderBottom: `2px solid ${T.green}`,
          padding: '10px 16px',
          display: 'flex',
          alignItems: 'center',
          gap: 12,
        }}
      >
        <button
          type="button"
          onClick={() => navigate('/')}
          aria-label="Back to map"
          style={{
            background: T.white,
            border: `2px solid ${T.green}`,
            borderRadius: 10,
            padding: '6px 10px',
            cursor: 'pointer',
            color: T.green,
            fontWeight: 800,
            fontFamily: 'inherit',
            fontSize: 14,
            lineHeight: 1,
          }}
        >
          ←
        </button>

        <div style={{ display: 'flex', alignItems: 'center', gap: 10, flex: 1, minWidth: 0 }}>
          <Emo size={26}>{lesson.emoji}</Emo>
          <div style={{ minWidth: 0 }}>
            <div
              style={{
                fontWeight: 800,
                color: T.green,
                fontSize: 15,
                lineHeight: 1.1,
                whiteSpace: 'nowrap',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
              }}
            >
              {lesson.title}
            </div>
            <div style={{ fontSize: 11, color: T.sub, marginTop: 2, fontWeight: 600 }}>
              {stepLabel} · Step {stepIdx + 1} of {totalSteps}
            </div>
          </div>
        </div>

        <ProgressDots count={totalSteps} active={stepIdx} onSeek={setStepIdx} />

        {alreadyDone && previousScore !== null && (
          <div
            title={`Best ${previousScore}%`}
            style={{
              background: T.green,
              color: T.white,
              padding: '4px 10px',
              borderRadius: 999,
              fontSize: 12,
              fontWeight: 800,
              whiteSpace: 'nowrap',
            }}
          >
            ✓ {previousScore}%
          </div>
        )}
      </div>

      {/* ─── Single beat ─── */}
      <main style={{ flex: 1, paddingBottom: 100 /* space for sticky nav */ }}>
        <BeatRenderer
          key={stepIdx}
          beat={currentBeat}
          difficultyLevel={difficultyLevel}
          childName={child ? themeContext.childName : undefined}
          isGuest={isGuest}
          onQuizSubmit={(score, percent, quizBeat) => {
            const skillScores: Record<string, number> = quizBeat.skillScores
              ? Object.fromEntries(
                  Object.entries(quizBeat.skillScores).map(([k, base]) => [
                    k,
                    Math.round(base * (percent / 100)),
                  ]),
                )
              : {};
            completeLesson({
              lessonId: lesson.id,
              score: percent,
              xpEarned: quizBeat.xpReward ?? 100,
              completedAt: new Date().toISOString(),
              skillScores,
            });
            scheduleReview(lesson.id);
            const reward = earnedCardFor(lesson.id);
            if (reward && !hasCard(reward.id)) {
              earnCard(reward.id);
              setToastCardId(reward.id);
            }
            void score;
            // Don't auto-advance — let the kid read their score and tap Continue.
          }}
          onGameFinish={(miniBeat) => {
            if (miniBeat.completesLesson && !alreadyDone) {
              completeLesson({
                lessonId: lesson.id,
                score: 100,
                xpEarned: 100,
                completedAt: new Date().toISOString(),
                skillScores: {},
              });
              scheduleReview(lesson.id);
            }
            const reward = earnedCardFor(lesson.id);
            if (reward && !hasCard(reward.id)) {
              earnCard(reward.id);
              setToastCardId(reward.id);
            }
            window.setTimeout(() => goNext(), 600);
          }}
        />
      </main>

      {/* ─── Sticky bottom nav ─── */}
      <nav
        style={{
          position: 'fixed',
          left: 0,
          right: 0,
          bottom: 0,
          background: T.white,
          borderTop: `2px solid ${T.green}`,
          padding: '10px 16px calc(10px + env(safe-area-inset-bottom))',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: 12,
          zIndex: 40,
          boxShadow: '0 -4px 14px rgba(22,101,52,0.06)',
        }}
      >
        <button
          type="button"
          onClick={goBack}
          disabled={isFirstStep}
          style={navBtn(isFirstStep ? 'ghost' : 'secondary')}
        >
          ← Back
        </button>

        <div style={{ fontSize: 12, color: T.sub, fontWeight: 600 }}>
          {stepIdx + 1} / {totalSteps}
        </div>

        {isLastStep ? (
          <button
            type="button"
            onClick={() => navigate('/')}
            style={navBtn('primary')}
          >
            🗺️ Back to map
          </button>
        ) : (
          <button
            type="button"
            onClick={goNext}
            style={navBtn('primary')}
          >
            Continue →
          </button>
        )}
      </nav>

      <Footer />

      <CardEarnedToast cardId={toastCardId} onClose={() => setToastCardId(null)} />
    </div>
  );
}

/* ────────────────────────────────────────────────────────────────────── */

function stepLabelFor(beat: LessonBeat | undefined): string {
  if (!beat) return '';
  switch (beat.kind) {
    case 'intro': return 'Welcome';
    case 'video': return 'Watch';
    case 'concept-cards': return 'Learn';
    case 'mini-game': return 'Play';
    case 'quiz': return 'Quiz';
    case 'outro': return 'Wrap up';
    case 'real-world-mission': return 'Try it';
  }
}

function navBtn(variant: 'primary' | 'secondary' | 'ghost'): React.CSSProperties {
  const base: React.CSSProperties = {
    padding: '10px 18px',
    borderRadius: 14,
    border: `2px solid ${T.green}`,
    fontFamily: 'inherit',
    fontWeight: 800,
    fontSize: 15,
    cursor: 'pointer',
    minWidth: 120,
    textAlign: 'center',
  };
  if (variant === 'primary') {
    return {
      ...base,
      background: T.green,
      color: T.white,
      boxShadow: `0 3px 0 #0c4523`,
    };
  }
  if (variant === 'secondary') {
    return { ...base, background: T.white, color: T.green };
  }
  // ghost (disabled)
  return {
    ...base,
    background: 'transparent',
    color: '#aaa',
    borderColor: '#ddd',
    cursor: 'not-allowed',
    boxShadow: 'none',
  };
}

function ProgressDots({
  count,
  active,
  onSeek,
}: {
  count: number;
  active: number;
  onSeek?: (i: number) => void;
}) {
  // Cap visible dots so a long lesson doesn't blow out the header
  const MAX_VISIBLE = 8;
  const dots = Math.min(count, MAX_VISIBLE);
  return (
    <div style={{ display: 'flex', gap: 6, alignItems: 'center' }}>
      {Array.from({ length: dots }).map((_, i) => {
        const isActive = i === active;
        const isPast = i < active;
        return (
          <button
            key={i}
            type="button"
            onClick={() => onSeek?.(i)}
            aria-label={`Go to step ${i + 1}`}
            style={{
              width: isActive ? 22 : 10,
              height: 10,
              borderRadius: 999,
              border: 'none',
              background: isActive ? T.green : isPast ? T.green : '#D8E5DA',
              opacity: isActive ? 1 : isPast ? 0.85 : 1,
              cursor: onSeek ? 'pointer' : 'default',
              padding: 0,
              transition: 'width 200ms ease, background 200ms ease',
            }}
          />
        );
      })}
      {count > MAX_VISIBLE && (
        <span style={{ fontSize: 11, color: T.sub, marginLeft: 4 }}>+{count - MAX_VISIBLE}</span>
      )}
    </div>
  );
}

interface BeatRendererProps {
  beat: LessonBeat;
  difficultyLevel: ReturnType<typeof useAdaptive>['difficultyLevel'];
  childName?: string;
  isGuest: boolean;
  onQuizSubmit: (
    score: number,
    percent: number,
    quizBeat: Extract<LessonBeat, { kind: 'quiz' }>,
  ) => void;
  onGameFinish: (
    miniBeat: Extract<LessonBeat, { kind: 'mini-game' }>,
  ) => void;
}

function BeatRenderer({
  beat,
  difficultyLevel,
  childName,
  isGuest,
  onQuizSubmit,
  onGameFinish,
}: BeatRendererProps) {
  switch (beat.kind) {
    case 'intro':
      return (
        <section
          style={{
            padding: '40px 24px 32px',
            maxWidth: 640,
            margin: '0 auto',
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            minHeight: 'calc(100vh - 280px)',
            textAlign: 'center',
          }}
        >
          <FadeIn show>
            <Momo
              mood={beat.mood ?? 'excited'}
              msg={resolveText(beat.text, difficultyLevel)}
              size={88}
              name={childName ? `Hey ${childName}!` : 'Momo'}
            />
          </FadeIn>
          <div
            style={{
              marginTop: 24,
              padding: '10px 18px',
              border: `2px dashed ${T.green}`,
              borderRadius: 999,
              color: T.green,
              fontSize: 13,
              fontWeight: 700,
              letterSpacing: '.05em',
            }}
          >
            Tap CONTINUE when you're ready 👇
          </div>
        </section>
      );

    case 'video':
      return (
        <section
          style={{
            padding: '32px 24px',
            maxWidth: 800,
            margin: '0 auto',
            width: '100%',
          }}
        >
          <FadeIn show>
            <MCard borderWidth={6} style={{ padding: 0, overflow: 'hidden' }}>
              <div
                style={{
                  padding: '14px 18px',
                  background: 'rgba(255,255,255,0.85)',
                  borderBottom: `3px solid ${T.green}`,
                  display: 'flex',
                  alignItems: 'center',
                  gap: 10,
                }}
              >
                <Emo size={20}>🎬</Emo>
                <span
                  style={{ fontWeight: 800, fontSize: 16, color: T.green }}
                >
                  {beat.title}
                </span>
                {beat.durationLabel && (
                  <Pill size="sm" bg={T.yellow} color={T.green}
                        style={{ marginLeft: 'auto' }}>
                    {beat.durationLabel}
                  </Pill>
                )}
              </div>
              <div
                style={{
                  position: 'relative',
                  paddingTop: '56.25%',
                  background: '#000',
                }}
              >
                <video
                  controls
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                  }}
                >
                  <source src={beat.src} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </MCard>
          </FadeIn>
        </section>
      );

    case 'concept-cards':
      return (
        <ConceptCardsBeat beat={beat} difficultyLevel={difficultyLevel} />
      );

    case 'mini-game':
      return (
        <section
          style={{
            padding: '32px 24px',
            background: 'rgba(255,255,255,0.4)',
          }}
        >
          <div style={{ maxWidth: 640, margin: '0 auto' }}>
            {beat.heading && (
              <h2
                style={{
                  fontSize: 26,
                  fontWeight: 700,
                  color: T.green,
                  textAlign: 'center',
                  margin: '0 0 6px',
                }}
              >
                {beat.heading}
              </h2>
            )}
            {beat.subheading && (
              <p
                style={{
                  textAlign: 'center',
                  color: T.sub,
                  fontWeight: 500,
                  marginBottom: 18,
                }}
              >
                {beat.subheading}
              </p>
            )}
            {beat.game === 'lemonade-stand' && (
              <LemonadeStand onFinish={() => onGameFinish(beat)} />
            )}
          </div>
        </section>
      );

    case 'quiz':
      return (
        <section
          style={{
            padding: '48px 24px',
            background: 'rgba(255,255,255,0.4)',
          }}
        >
          <QuizBeat
            heading={beat.heading}
            subheading={beat.subheading}
            questions={beat.questions}
            difficulty={difficultyLevel}
            bonusTip={undefined /* outro beat provides this */}
            onSubmit={(s, p) => onQuizSubmit(s, p, beat)}
            afterResult={
              <SaveProgressPrompt isGuest={isGuest} show />
            }
          />
        </section>
      );

    case 'outro': {
      const tip = beat.bonusTip
        ? resolveText(beat.bonusTip, difficultyLevel)
        : null;
      const msg = resolveText(beat.text, difficultyLevel);
      return (
        <section
          style={{
            padding: '32px 24px 60px',
            maxWidth: 800,
            margin: '0 auto',
            width: '100%',
          }}
        >
          <FadeIn show>
            <Momo mood={beat.mood ?? 'celebrating'} msg={msg} size={56} />
          </FadeIn>
          {tip && (
            <FadeIn show delay={150}>
              <MCard
                bg={T.white}
                borderColor={T.coral}
                borderWidth={3}
                style={{ marginTop: 16 }}
              >
                <p
                  style={{
                    fontWeight: 800,
                    fontSize: 13,
                    color: T.coral,
                    margin: '0 0 6px',
                    letterSpacing: '.05em',
                  }}
                >
                  BONUS TIP
                </p>
                <p
                  style={{
                    fontSize: 14,
                    fontWeight: 500,
                    color: T.text,
                    lineHeight: 1.55,
                    margin: 0,
                  }}
                >
                  {tip}
                </p>
              </MCard>
            </FadeIn>
          )}
        </section>
      );
    }
    case 'real-world-mission': {
      return (
        <section
          style={{
            padding: '20px 16px 28px',
            maxWidth: 800,
            margin: '0 auto',
            width: '100%',
          }}
        >
          <FadeIn show>
            <RealWorldMission mission={beat.mission} />
          </FadeIn>
        </section>
      );
    }
  }
}

/* ── Concept-cards beat: horizontal deck instead of vertical stack ── */
function ConceptCardsBeat({
  beat,
  difficultyLevel,
}: {
  beat: Extract<LessonBeat, { kind: 'concept-cards' }>;
  difficultyLevel: ReturnType<typeof useAdaptive>['difficultyLevel'];
}) {
  const [idx, setIdx] = useState(0);
  const total = beat.cards.length;
  const card = beat.cards[Math.min(idx, total - 1)];
  const goPrev = () => setIdx((i) => Math.max(0, i - 1));
  const goNext = () => setIdx((i) => Math.min(total - 1, i + 1));

  return (
    <section
      style={{
        padding: '20px 20px 28px',
        maxWidth: 720,
        margin: '0 auto',
        width: '100%',
      }}
    >
      {beat.heading && (
        <h2
          style={{
            fontSize: 22,
            fontWeight: 800,
            color: T.green,
            textAlign: 'center',
            margin: '0 0 4px',
            letterSpacing: '-0.01em',
          }}
        >
          {beat.heading}
        </h2>
      )}
      {beat.subheading && (
        <p
          style={{
            textAlign: 'center',
            color: T.sub,
            fontWeight: 500,
            fontSize: 13,
            margin: '0 0 16px',
          }}
        >
          {beat.subheading}
        </p>
      )}

      {/* Card carousel — 1 visible at a time */}
      <div style={{ position: 'relative' }}>
        <FadeIn key={idx} show>
          <div
            style={{
              background: card.color ?? T.white,
              border: `3px solid ${T.green}`,
              borderRadius: 22,
              padding: '22px 22px 26px',
              boxShadow: `0 5px 0 ${T.green}, 0 10px 20px rgba(22,101,52,0.10)`,
            }}
          >
            <div style={{ fontSize: 56, lineHeight: 1, marginBottom: 10, textAlign: 'center' }}>
              <Emo size={56}>{card.emoji}</Emo>
            </div>
            <h3
              style={{
                margin: '0 0 8px',
                fontSize: 20,
                color: T.green,
                fontWeight: 800,
                textAlign: 'center',
                letterSpacing: '-0.01em',
              }}
            >
              {card.title}
            </h3>
            <p
              style={{
                margin: 0,
                fontSize: 15,
                color: T.text,
                lineHeight: 1.55,
                textAlign: 'center',
              }}
            >
              {resolveText(card.desc, difficultyLevel)}
            </p>
          </div>
        </FadeIn>

        {/* Inline prev/next + dots */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: 8,
            marginTop: 14,
          }}
        >
          <button
            type="button"
            onClick={goPrev}
            disabled={idx === 0}
            aria-label="Previous concept"
            style={{
              padding: '8px 12px',
              borderRadius: 12,
              border: `2px solid ${idx === 0 ? '#ddd' : T.green}`,
              background: T.white,
              color: idx === 0 ? '#bbb' : T.green,
              fontWeight: 800,
              fontFamily: 'inherit',
              cursor: idx === 0 ? 'not-allowed' : 'pointer',
              minWidth: 60,
            }}
          >
            ←
          </button>

          <div style={{ display: 'flex', gap: 6, alignItems: 'center' }}>
            {beat.cards.map((_, i) => {
              const active = i === idx;
              const past = i < idx;
              return (
                <button
                  key={i}
                  type="button"
                  onClick={() => setIdx(i)}
                  aria-label={`Concept ${i + 1}`}
                  style={{
                    width: active ? 20 : 10,
                    height: 10,
                    borderRadius: 999,
                    border: 'none',
                    background: active || past ? T.green : '#D8E5DA',
                    padding: 0,
                    cursor: 'pointer',
                    transition: 'width 180ms ease',
                  }}
                />
              );
            })}
            <span
              style={{
                marginLeft: 8,
                fontSize: 12,
                color: T.sub,
                fontWeight: 700,
              }}
            >
              {idx + 1} / {total}
            </span>
          </div>

          <button
            type="button"
            onClick={goNext}
            disabled={idx === total - 1}
            aria-label="Next concept"
            style={{
              padding: '8px 12px',
              borderRadius: 12,
              border: `2px solid ${idx === total - 1 ? '#ddd' : T.green}`,
              background: idx === total - 1 ? T.white : T.green,
              color: idx === total - 1 ? '#bbb' : T.white,
              fontWeight: 800,
              fontFamily: 'inherit',
              cursor: idx === total - 1 ? 'not-allowed' : 'pointer',
              minWidth: 60,
            }}
          >
            →
          </button>
        </div>
      </div>
    </section>
  );
}
