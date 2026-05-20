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
import ConfettiBurst from './ConfettiBurst';
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
  const { child } = useChildContext();
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
          lesson={lesson}
          difficultyLevel={difficultyLevel}
          childName={child ? themeContext.childName : undefined}
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
          boxShadow: '0 -4px 14px rgba(45,155,110,0.06)',
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
    case 'decision': return 'Decide';
    case 'think-deeper': return 'Think';
    case 'brainstorm': return 'Brainstorm';
    case 'calc-challenge': return 'Solve';
    case 'connect': return 'Connect';
  }
}

function roadmapEmojiFor(beat: LessonBeat): string {
  switch (beat.kind) {
    case 'intro': return '👋';
    case 'video': return '🎬';
    case 'concept-cards': return '💡';
    case 'mini-game': return '🎮';
    case 'quiz': return '🏆';
    case 'outro': return '🎉';
    case 'real-world-mission': return '🚀';
    case 'decision': return '🧭';
    case 'think-deeper': return '🤔';
    case 'brainstorm': return '✨';
    case 'calc-challenge': return '🧮';
    case 'connect': return '🌐';
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
  lesson: LessonDef;
  difficultyLevel: ReturnType<typeof useAdaptive>['difficultyLevel'];
  childName?: string;
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
  lesson,
  difficultyLevel,
  childName,
  onQuizSubmit,
  onGameFinish,
}: BeatRendererProps) {
  switch (beat.kind) {
    case 'intro': {
      // Build the roadmap from non-intro / non-outro beats
      const roadmap = lesson.beats
        .filter((b) => b.kind !== 'intro' && b.kind !== 'outro')
        .map((b) => ({
          label: stepLabelFor(b),
          emoji: roadmapEmojiFor(b),
        }));

      return (
        <section
          style={{
            padding: '24px 20px 40px',
            maxWidth: 720,
            margin: '0 auto',
            width: '100%',
          }}
        >
          <div
            style={{
              textAlign: 'center',
              marginBottom: 18,
            }}
          >
            <div
              style={{
                fontSize: 96,
                lineHeight: 1,
                marginBottom: 4,
                display: 'inline-block',
                animation: 'hero-bounce-in 700ms cubic-bezier(.34,1.56,.64,1) both, hero-float 4s ease-in-out 800ms infinite',
                transformOrigin: 'center bottom',
              }}
            >
              <Emo size={96}>{lesson.emoji}</Emo>
            </div>
            <h1
              style={{
                fontSize: 'clamp(26px, 5vw, 36px)',
                fontWeight: 800,
                color: T.green,
                margin: 0,
                letterSpacing: '-0.02em',
                animation: 'slide-up-fade 500ms ease-out 300ms both',
              }}
            >
              {lesson.title}
            </h1>
          </div>

          <FadeIn show delay={100}>
            <div
              style={{
                background: T.white,
                border: `3px solid ${T.green}`,
                borderRadius: 22,
                padding: '20px 22px',
                boxShadow: `0 4px 0 ${T.green}, 0 8px 18px rgba(45,155,110,0.08)`,
                marginBottom: 22,
              }}
            >
              <div style={{ display: 'flex', gap: 14, alignItems: 'flex-start' }}>
                <div style={{ flexShrink: 0 }}>
                  <Momo
                    mood={beat.mood ?? 'excited'}
                    size={64}
                    avatarOnly
                  />
                </div>
                <div style={{ flex: 1, paddingTop: 4 }}>
                  <div
                    style={{
                      fontSize: 12,
                      color: T.pink,
                      fontWeight: 800,
                      marginBottom: 4,
                      letterSpacing: '.04em',
                    }}
                  >
                    MOMO {childName ? `· HI ${childName.toUpperCase()}!` : ''}
                  </div>
                  <p
                    style={{
                      margin: 0,
                      fontSize: 16,
                      lineHeight: 1.55,
                      color: T.text,
                      fontWeight: 500,
                    }}
                  >
                    {resolveText(beat.text, difficultyLevel)}
                  </p>
                </div>
              </div>
            </div>
          </FadeIn>

          {roadmap.length > 0 && (
            <FadeIn show delay={200}>
              <div>
                <div
                  style={{
                    fontSize: 12,
                    fontWeight: 800,
                    color: T.sub,
                    letterSpacing: '.1em',
                    marginBottom: 8,
                    textAlign: 'center',
                  }}
                >
                  WHAT YOU'LL DO
                </div>
                <ol
                  style={{
                    listStyle: 'none',
                    padding: 0,
                    margin: 0,
                    display: 'grid',
                    gap: 8,
                  }}
                >
                  {roadmap.map((item, i) => (
                    <li
                      key={i}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 12,
                        padding: '10px 14px',
                        background: T.white,
                        border: `2px solid ${T.green}`,
                        borderRadius: 14,
                        boxShadow: `2px 2px 0 rgba(45,155,110,.08)`,
                        animation: `pop-in 450ms cubic-bezier(.34,1.56,.64,1) both`,
                        animationDelay: `${500 + i * 90}ms`,
                      }}
                    >
                      <span
                        style={{
                          background: T.green,
                          color: T.white,
                          width: 26,
                          height: 26,
                          borderRadius: '50%',
                          display: 'inline-flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          fontSize: 13,
                          fontWeight: 800,
                          flexShrink: 0,
                        }}
                      >
                        {i + 1}
                      </span>
                      <Emo size={22}>{item.emoji}</Emo>
                      <span style={{ fontWeight: 700, color: T.text, fontSize: 15 }}>
                        {item.label}
                      </span>
                    </li>
                  ))}
                </ol>
              </div>
            </FadeIn>
          )}
        </section>
      );
    }

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
    case 'decision':
      return <DecisionBeat beat={beat} difficultyLevel={difficultyLevel} />;
    case 'think-deeper':
      return <ThinkDeeperBeat beat={beat} difficultyLevel={difficultyLevel} />;
    case 'brainstorm':
      return <BrainstormBeat beat={beat} difficultyLevel={difficultyLevel} />;
    case 'calc-challenge':
      return <CalcChallengeBeat beat={beat} difficultyLevel={difficultyLevel} />;
    case 'connect':
      return <ConnectBeat beat={beat} difficultyLevel={difficultyLevel} />;
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
  const [dir, setDir] = useState<'right' | 'left'>('right');
  const total = beat.cards.length;
  const card = beat.cards[Math.min(idx, total - 1)];
  const goPrev = () => {
    setDir('left');
    setIdx((i) => Math.max(0, i - 1));
  };
  const goNext = () => {
    setDir('right');
    setIdx((i) => Math.min(total - 1, i + 1));
  };

  return (
    <section
      style={{
        padding: '20px 20px 28px',
        maxWidth: 720,
        margin: '0 auto',
        width: '100%',
        minHeight: 'calc(100vh - 200px)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
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
        <div
          key={idx}
          style={{
            background: card.color ?? T.white,
            border: `3px solid ${T.green}`,
            borderRadius: 24,
            padding: '40px 32px 44px',
            boxShadow: `0 5px 0 ${T.green}, 0 10px 20px rgba(45,155,110,0.10)`,
            minHeight: 320,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center',
            animation: `${
              dir === 'right' ? 'card-slide-in-right' : 'card-slide-in-left'
            } 380ms cubic-bezier(.34,1.5,.64,1) both`,
          }}
        >
            <div
              style={{
                fontSize: 80,
                lineHeight: 1,
                marginBottom: 16,
                animation: 'pop-in 500ms cubic-bezier(.34,1.56,.64,1) 100ms both',
              }}
            >
              <Emo size={80}>{card.emoji}</Emo>
            </div>
            <h3
              style={{
                margin: '0 0 14px',
                fontSize: 28,
                color: T.green,
                fontWeight: 800,
                letterSpacing: '-0.01em',
              }}
            >
              {card.title}
            </h3>
            <p
              style={{
                margin: 0,
                fontSize: 17,
                color: T.text,
                lineHeight: 1.55,
                maxWidth: 480,
              }}
            >
              {resolveText(card.desc, difficultyLevel)}
            </p>
          </div>

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

/* ── Decision beat: kid picks, gets per-choice feedback, then reveal ── */
function DecisionBeat({
  beat,
  difficultyLevel,
}: {
  beat: Extract<LessonBeat, { kind: 'decision' }>;
  difficultyLevel: ReturnType<typeof useAdaptive>['difficultyLevel'];
}) {
  const [picked, setPicked] = useState<number | null>(null);
  const [explored, setExplored] = useState<Set<number>>(new Set());
  const [showReveal, setShowReveal] = useState(false);

  const choose = (i: number) => {
    setPicked(i);
    setExplored((prev) => new Set(prev).add(i));
  };

  return (
    <section
      style={{
        padding: '24px 20px 32px',
        maxWidth: 720,
        margin: '0 auto',
        width: '100%',
      }}
    >
      {beat.heading && (
        <h2 style={beatH2}>{beat.heading}</h2>
      )}

      <FadeIn show>
        <div style={scenarioCard}>
          <div style={kicker('coral')}>🧭 SCENARIO</div>
          <p style={{ margin: 0, fontSize: 16, color: T.text, lineHeight: 1.55 }}>
            {resolveText(beat.scenario, difficultyLevel)}
          </p>
        </div>
      </FadeIn>

      <h3 style={{ ...beatH3, marginTop: 22 }}>
        {resolveText(beat.question, difficultyLevel)}
      </h3>

      <div style={{ display: 'grid', gap: 10, marginTop: 10 }}>
        {beat.choices.map((c, i) => {
          const isPicked = picked === i;
          const wasExplored = explored.has(i);
          return (
            <button
              key={i}
              type="button"
              onClick={() => choose(i)}
              style={{
                textAlign: 'left',
                background: isPicked ? '#F0FFF4' : T.white,
                border: `3px solid ${isPicked ? T.green : wasExplored ? '#B5D4BC' : T.green}`,
                borderRadius: 16,
                padding: '14px 18px',
                fontSize: 15,
                color: T.text,
                cursor: 'pointer',
                fontFamily: 'inherit',
                fontWeight: 600,
                lineHeight: 1.4,
                boxShadow: isPicked ? `4px 4px 0 ${T.green}` : `2px 2px 0 rgba(45,155,110,.08)`,
                transition: 'all 220ms ease',
                position: 'relative',
                transform: isPicked ? 'translateY(-2px)' : 'translateY(0)',
                animation: `pop-in 400ms cubic-bezier(.34,1.56,.64,1) both`,
                animationDelay: `${200 + i * 110}ms`,
              }}
            >
              <span
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: 26,
                  height: 26,
                  borderRadius: '50%',
                  background: isPicked ? T.green : '#E0E0E0',
                  color: isPicked ? T.white : T.sub,
                  fontWeight: 800,
                  fontSize: 13,
                  marginRight: 10,
                }}
              >
                {String.fromCharCode(65 + i)}
              </span>
              {resolveText(c.label, difficultyLevel)}
              {wasExplored && !isPicked && (
                <span style={{ color: T.sub, fontSize: 11, marginLeft: 8, fontWeight: 600 }}>
                  · viewed
                </span>
              )}
            </button>
          );
        })}
      </div>

      {picked !== null && (
        <FadeIn key={`fb-${picked}`} show>
          <div style={{ ...feedbackCard, marginTop: 16 }}>
            <div style={kicker('green')}>💭 MOMO SAYS</div>
            <p style={{ margin: 0, fontSize: 15, color: T.text, lineHeight: 1.55 }}>
              {resolveText(beat.choices[picked].feedback, difficultyLevel)}
            </p>
            {explored.size >= 1 && !showReveal && (
              <button
                type="button"
                onClick={() => setShowReveal(true)}
                style={{
                  marginTop: 14,
                  padding: '8px 16px',
                  background: T.yellow,
                  color: T.green,
                  border: `2px solid ${T.green}`,
                  borderRadius: 999,
                  fontSize: 13,
                  fontWeight: 800,
                  cursor: 'pointer',
                  fontFamily: 'inherit',
                }}
              >
                🔍 What really happens in real businesses?
              </button>
            )}
          </div>
        </FadeIn>
      )}

      {showReveal && (
        <FadeIn show>
          <div style={{ ...revealCard, marginTop: 14, position: 'relative' }}>
            <ConfettiBurst show palette={['🎉', '🌍', '💡', '✨', '⭐']} count={16} />
            <div style={kicker('coral')}>🌍 IN THE REAL WORLD</div>
            <p style={{ margin: 0, fontSize: 15, color: T.text, lineHeight: 1.6 }}>
              {resolveText(beat.realWorldReveal, difficultyLevel)}
            </p>
          </div>
        </FadeIn>
      )}
    </section>
  );
}

/* ── Think-deeper beat: Socratic question chain, reveal one at a time ── */
function ThinkDeeperBeat({
  beat,
  difficultyLevel,
}: {
  beat: Extract<LessonBeat, { kind: 'think-deeper' }>;
  difficultyLevel: ReturnType<typeof useAdaptive>['difficultyLevel'];
}) {
  const [revealed, setRevealed] = useState<Set<number>>(new Set());
  const reveal = (i: number) => setRevealed((p) => new Set(p).add(i));

  return (
    <section
      style={{
        padding: '24px 20px 32px',
        maxWidth: 720,
        margin: '0 auto',
        width: '100%',
      }}
    >
      {beat.heading && <h2 style={beatH2}>{beat.heading}</h2>}
      {beat.intro && (
        <p style={{ textAlign: 'center', color: T.sub, fontSize: 14, margin: '0 0 18px' }}>
          {resolveText(beat.intro, difficultyLevel)}
        </p>
      )}

      <div style={{ display: 'grid', gap: 14 }}>
        {beat.layers.map((layer, i) => {
          const isOpen = revealed.has(i);
          const isAvailable = i === 0 || revealed.has(i - 1);
          return (
            <div
              key={i}
              style={{
                background: T.white,
                border: `3px solid ${isAvailable ? T.green : '#DDE5DE'}`,
                borderRadius: 16,
                padding: '16px 18px',
                opacity: isAvailable ? 1 : 0.5,
                boxShadow: isOpen ? `4px 4px 0 rgba(45,155,110,.10)` : '2px 2px 0 rgba(45,155,110,.06)',
                transition: 'all 280ms ease',
                animation: 'pop-in 420ms cubic-bezier(.34,1.56,.64,1) both',
                animationDelay: `${i * 100}ms`,
                position: 'relative',
              }}
            >
              <div style={kicker(isOpen ? 'green' : 'sub')}>
                {isOpen ? `✓ STEP ${i + 1}` : `STEP ${i + 1}`}
              </div>
              <div style={{ fontSize: 17, fontWeight: 700, color: T.text, marginBottom: 4 }}>
                {resolveText(layer.question, difficultyLevel)}
              </div>
              {isOpen ? (
                <div
                  style={{
                    marginTop: 10,
                    padding: '10px 14px',
                    background: '#F4FFF6',
                    border: `2px dashed ${T.green}`,
                    borderRadius: 12,
                    fontSize: 14,
                    color: T.text,
                    lineHeight: 1.55,
                    animation: 'lightbulb-pop 520ms cubic-bezier(.34,1.56,.64,1) both',
                    transformOrigin: 'top left',
                    position: 'relative',
                  }}
                >
                  <span
                    aria-hidden
                    style={{
                      position: 'absolute',
                      top: -12,
                      left: 14,
                      fontSize: 22,
                      animation: 'lightbulb-pop 520ms cubic-bezier(.34,1.56,.64,1) both',
                    }}
                  >
                    💡
                  </span>
                  {resolveText(layer.reveal, difficultyLevel)}
                </div>
              ) : (
                <button
                  type="button"
                  disabled={!isAvailable}
                  onClick={() => reveal(i)}
                  style={{
                    marginTop: 8,
                    padding: '8px 16px',
                    background: isAvailable ? T.green : '#ccc',
                    color: T.white,
                    border: 'none',
                    borderRadius: 999,
                    fontSize: 13,
                    fontWeight: 800,
                    cursor: isAvailable ? 'pointer' : 'not-allowed',
                    fontFamily: 'inherit',
                  }}
                >
                  🤔 Hmm... show me
                </button>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}

/* ── Brainstorm beat: kid types ideas, then Momo coaches with hints ── */
function BrainstormBeat({
  beat,
  difficultyLevel,
}: {
  beat: Extract<LessonBeat, { kind: 'brainstorm' }>;
  difficultyLevel: ReturnType<typeof useAdaptive>['difficultyLevel'];
}) {
  const minItems = beat.minItems ?? 3;
  const [ideas, setIdeas] = useState<string[]>(Array(minItems).fill(''));
  const [submitted, setSubmitted] = useState(false);
  const filled = ideas.filter((s) => s.trim().length > 0).length;
  const canSubmit = filled >= minItems;

  const updateIdea = (i: number, v: string) => {
    setIdeas((prev) => {
      const next = [...prev];
      next[i] = v;
      return next;
    });
  };

  const addLine = () =>
    setIdeas((prev) => (prev.length < 6 ? [...prev, ''] : prev));

  return (
    <section
      style={{
        padding: '24px 20px 32px',
        maxWidth: 720,
        margin: '0 auto',
        width: '100%',
      }}
    >
      {beat.heading && <h2 style={beatH2}>{beat.heading}</h2>}

      <div
        style={{
          background: T.white,
          border: `3px solid ${T.coral}`,
          borderRadius: 18,
          padding: '16px 18px',
          marginBottom: 16,
          boxShadow: `3px 3px 0 rgba(45,155,110,.08)`,
        }}
      >
        <div style={kicker('coral')}>💡 YOUR TURN</div>
        <p style={{ margin: 0, fontSize: 16, color: T.text, lineHeight: 1.5 }}>
          {resolveText(beat.prompt, difficultyLevel)}
        </p>
      </div>

      <div style={{ display: 'grid', gap: 8 }}>
        {ideas.map((v, i) => (
          <div
            key={i}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 10,
              background: T.white,
              border: `2px solid ${T.green}`,
              borderRadius: 12,
              padding: '6px 10px 6px 14px',
            }}
          >
            <span
              style={{
                fontSize: 13,
                fontWeight: 800,
                color: T.green,
                flexShrink: 0,
                width: 22,
              }}
            >
              {i + 1}.
            </span>
            <input
              type="text"
              value={v}
              onChange={(e) => updateIdea(i, e.target.value)}
              placeholder={beat.placeholder ?? 'Write an idea here...'}
              disabled={submitted}
              style={{
                flex: 1,
                border: 'none',
                outline: 'none',
                fontSize: 15,
                fontFamily: 'inherit',
                color: T.text,
                padding: '6px 0',
                background: 'transparent',
              }}
            />
            {v.trim() && (
              <span
                key={`tick-${i}-${v.length > 0}`}
                aria-hidden
                style={{
                  color: T.green,
                  fontSize: 16,
                  animation: 'tick-pop 380ms cubic-bezier(.34,1.56,.64,1) both',
                  display: 'inline-block',
                }}
              >
                ✓
              </span>
            )}
          </div>
        ))}
        {!submitted && ideas.length < 6 && (
          <button
            type="button"
            onClick={addLine}
            style={{
              padding: '6px 12px',
              background: 'transparent',
              border: `2px dashed ${T.green}`,
              borderRadius: 12,
              color: T.green,
              fontSize: 12,
              fontWeight: 700,
              cursor: 'pointer',
              fontFamily: 'inherit',
              alignSelf: 'flex-start',
            }}
          >
            + Add another idea
          </button>
        )}
      </div>

      {!submitted ? (
        <div
          style={{
            marginTop: 14,
            display: 'flex',
            alignItems: 'center',
            gap: 10,
            justifyContent: 'space-between',
          }}
        >
          <div style={{ fontSize: 13, color: T.sub }}>
            {filled < minItems
              ? `Write at least ${minItems - filled} more`
              : `Nice — ${filled} idea${filled === 1 ? '' : 's'}!`}
          </div>
          <button
            type="button"
            disabled={!canSubmit}
            onClick={() => setSubmitted(true)}
            style={{
              padding: '10px 20px',
              background: canSubmit ? T.green : '#cbd6cd',
              color: T.white,
              border: 'none',
              borderRadius: 999,
              fontSize: 14,
              fontWeight: 800,
              cursor: canSubmit ? 'pointer' : 'not-allowed',
              fontFamily: 'inherit',
            }}
          >
            🚀 Done — Show me Momo's ideas
          </button>
        </div>
      ) : (
        <FadeIn show>
          <div style={{ marginTop: 16, position: 'relative' }}>
            <ConfettiBurst show palette={['💡', '✨', '⭐', '🌟']} count={14} />
            <div
              style={{
                background: '#F4FFF6',
                border: `3px solid ${T.green}`,
                borderRadius: 18,
                padding: '14px 18px',
              }}
            >
              <div style={kicker('green')}>🐻 MOMO'S IDEAS — DID YOU THINK OF…</div>
              <ul style={{ margin: 0, paddingLeft: 18, display: 'grid', gap: 6 }}>
                {beat.hints.map((h, i) => (
                  <li
                    key={i}
                    style={{
                      fontSize: 14,
                      color: T.text,
                      lineHeight: 1.45,
                      animation: 'slide-up-fade 360ms ease-out both',
                      animationDelay: `${300 + i * 110}ms`,
                    }}
                  >
                    {resolveText(h, difficultyLevel)}
                  </li>
                ))}
              </ul>
              {beat.closer && (
                <p
                  style={{
                    margin: '12px 0 0',
                    fontSize: 13,
                    color: T.sub,
                    fontStyle: 'italic',
                    lineHeight: 1.5,
                  }}
                >
                  {resolveText(beat.closer, difficultyLevel)}
                </p>
              )}
            </div>
          </div>
        </FadeIn>
      )}
    </section>
  );
}

/* ── Calc-challenge beat: real-numbers math problem ── */
function CalcChallengeBeat({
  beat,
  difficultyLevel,
}: {
  beat: Extract<LessonBeat, { kind: 'calc-challenge' }>;
  difficultyLevel: ReturnType<typeof useAdaptive>['difficultyLevel'];
}) {
  const [input, setInput] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const tol = beat.problem.tolerance ?? 0.01;
  const numeric = parseFloat(input);
  const isCorrect = !Number.isNaN(numeric) && Math.abs(numeric - beat.problem.answer) <= tol;

  return (
    <section
      style={{
        padding: '24px 20px 32px',
        maxWidth: 720,
        margin: '0 auto',
        width: '100%',
      }}
    >
      {beat.heading && <h2 style={beatH2}>{beat.heading}</h2>}

      <div
        style={{
          background: T.white,
          border: `3px solid ${T.green}`,
          borderRadius: 18,
          padding: '18px 20px',
          marginBottom: 14,
          boxShadow: '3px 3px 0 rgba(45,155,110,.08)',
        }}
      >
        <div style={kicker('green')}>🧮 MATH CHALLENGE</div>
        <p style={{ margin: 0, fontSize: 16, color: T.text, lineHeight: 1.55 }}>
          {resolveText(beat.setup, difficultyLevel)}
        </p>

        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: 10,
            marginTop: 14,
            justifyContent: 'center',
          }}
        >
          {beat.problem.givens.map((g, i) => (
            <div
              key={i}
              style={{
                background: '#FFFBEB',
                border: `2px solid ${T.yellow}`,
                borderRadius: 12,
                padding: '8px 14px',
                textAlign: 'center',
              }}
            >
              <div style={{ fontSize: 11, color: T.sub, fontWeight: 700 }}>
                {g.label.toUpperCase()}
              </div>
              <div
                style={{
                  fontSize: 22,
                  fontWeight: 800,
                  color: T.green,
                  fontFamily: 'Space Mono, monospace',
                }}
              >
                {g.value}
                {g.suffix && <span style={{ fontSize: 14, marginLeft: 2 }}>{g.suffix}</span>}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: 12,
          background: T.white,
          border: `3px solid ${T.green}`,
          borderRadius: 16,
          padding: '12px 16px',
        }}
      >
        <span style={{ fontSize: 16, fontWeight: 800, color: T.green }}>
          {beat.problem.answerLabel} =
        </span>
        <input
          type="number"
          inputMode="decimal"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          disabled={submitted}
          placeholder="?"
          style={{
            flex: 1,
            border: `2px dashed ${T.green}`,
            borderRadius: 10,
            padding: '8px 12px',
            fontSize: 22,
            fontFamily: 'Space Mono, monospace',
            color: T.green,
            outline: 'none',
            minWidth: 100,
            textAlign: 'center',
          }}
        />
        {beat.problem.suffix && (
          <span style={{ fontSize: 16, fontWeight: 800, color: T.sub }}>
            {beat.problem.suffix}
          </span>
        )}
        <button
          type="button"
          onClick={() => setSubmitted(true)}
          disabled={input.trim() === '' || submitted}
          style={{
            padding: '8px 16px',
            background: submitted ? '#ccc' : T.green,
            color: T.white,
            border: 'none',
            borderRadius: 999,
            fontSize: 13,
            fontWeight: 800,
            cursor: input.trim() === '' || submitted ? 'not-allowed' : 'pointer',
            fontFamily: 'inherit',
          }}
        >
          Check
        </button>
      </div>

      {submitted && (
        <div
          key={`result-${isCorrect}`}
          style={{
            marginTop: 14,
            padding: '14px 18px',
            background: isCorrect ? '#F0FFF4' : '#FFF5F5',
            border: `3px solid ${isCorrect ? T.green : T.coral}`,
            borderRadius: 16,
            position: 'relative',
            animation: isCorrect
              ? 'correct-pulse 700ms ease-out 1, slide-up-fade 300ms ease-out both'
              : 'shake-x 540ms cubic-bezier(.36,.07,.19,.97) 1, slide-up-fade 300ms ease-out both',
          }}
        >
          {isCorrect && (
            <ConfettiBurst show palette={['🎉', '💯', '⭐', '✨', '🥳']} count={22} />
          )}
          <div
            style={{
              fontSize: 14,
              fontWeight: 800,
              color: isCorrect ? T.green : T.coral,
              marginBottom: 6,
              letterSpacing: '.04em',
            }}
          >
            {isCorrect ? '🎉 NAILED IT!' : `💡 NOT QUITE — IT'S ${beat.problem.answer}${beat.problem.suffix ?? ''}`}
          </div>
          <p style={{ margin: 0, fontSize: 14, color: T.text, lineHeight: 1.55 }}>
            {resolveText(beat.walkthrough, difficultyLevel)}
          </p>
        </div>
      )}
    </section>
  );
}

/* ── Connect beat: same concept showing up in famous businesses ── */
function ConnectBeat({
  beat,
  difficultyLevel,
}: {
  beat: Extract<LessonBeat, { kind: 'connect' }>;
  difficultyLevel: ReturnType<typeof useAdaptive>['difficultyLevel'];
}) {
  return (
    <section
      style={{
        padding: '24px 20px 32px',
        maxWidth: 720,
        margin: '0 auto',
        width: '100%',
      }}
    >
      {beat.heading && <h2 style={beatH2}>{beat.heading}</h2>}

      <div
        style={{
          background: T.white,
          border: `3px solid ${T.lavender}`,
          borderRadius: 18,
          padding: '14px 18px',
          marginBottom: 16,
          boxShadow: '3px 3px 0 rgba(45,155,110,.08)',
        }}
      >
        <div style={kicker('lavender')}>🌐 SAME IDEA, BIGGER BUSINESS</div>
        <p style={{ margin: 0, fontSize: 16, color: T.text, lineHeight: 1.55, fontWeight: 600 }}>
          {resolveText(beat.concept, difficultyLevel)}
        </p>
      </div>

      <div style={{ display: 'grid', gap: 12 }}>
        {beat.examples.map((ex, i) => (
          <div
            key={i}
            style={{
              display: 'flex',
              gap: 14,
              background: T.white,
              border: `2px solid ${T.green}`,
              borderRadius: 16,
              padding: '12px 16px',
              boxShadow: '2px 2px 0 rgba(45,155,110,.08)',
              animation: 'pop-in 480ms cubic-bezier(.34,1.56,.64,1) both',
              animationDelay: `${200 + i * 140}ms`,
            }}
          >
              <div
                style={{
                  width: 50,
                  height: 50,
                  borderRadius: '50%',
                  background: '#FFF8E5',
                  border: `2px solid ${T.green}`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                  fontSize: 28,
                }}
              >
                <Emo size={28}>{ex.emoji}</Emo>
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: 15, fontWeight: 800, color: T.green }}>{ex.who}</div>
                <p style={{ margin: '2px 0 0', fontSize: 14, color: T.text, lineHeight: 1.5 }}>
                  {resolveText(ex.story, difficultyLevel)}
                </p>
              </div>
          </div>
        ))}
      </div>

      {beat.kicker && (
        <p
          style={{
            marginTop: 16,
            textAlign: 'center',
            fontSize: 14,
            color: T.sub,
            fontStyle: 'italic',
            lineHeight: 1.5,
          }}
        >
          {resolveText(beat.kicker, difficultyLevel)}
        </p>
      )}
    </section>
  );
}

/* ── shared styles for new beats ────────────────────────────────────── */

const beatH2: React.CSSProperties = {
  fontSize: 24,
  fontWeight: 800,
  color: T.green,
  textAlign: 'center',
  margin: '0 0 18px',
  letterSpacing: '-0.01em',
};
const beatH3: React.CSSProperties = {
  fontSize: 18,
  fontWeight: 800,
  color: T.text,
  margin: '0 0 8px',
  textAlign: 'center',
};
const scenarioCard: React.CSSProperties = {
  background: '#FFFBEB',
  border: `3px solid ${T.coral}`,
  borderRadius: 18,
  padding: '14px 18px',
  boxShadow: '3px 3px 0 rgba(45,155,110,.06)',
};
const feedbackCard: React.CSSProperties = {
  background: '#F4FFF6',
  border: `3px solid ${T.green}`,
  borderRadius: 16,
  padding: '14px 18px',
};
const revealCard: React.CSSProperties = {
  background: T.white,
  border: `3px dashed ${T.coral}`,
  borderRadius: 16,
  padding: '14px 18px',
};

function kicker(color: 'green' | 'coral' | 'sub' | 'lavender'): React.CSSProperties {
  const c =
    color === 'green' ? T.green :
    color === 'coral' ? T.coral :
    color === 'lavender' ? T.lavender :
    T.sub;
  return {
    fontSize: 11,
    fontWeight: 800,
    color: c,
    letterSpacing: '.08em',
    marginBottom: 6,
  };
}
