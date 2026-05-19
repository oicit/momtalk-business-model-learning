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

import { useEffect, useState } from 'react';
import Header from '../Header';
import Footer from '../Footer';
import MomoMentorBubble from '../MomoMentorBubble';
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
import ConceptCard from './ConceptCard';
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
  const { isCompleted, getScore, completeLesson } = useProgress();
  const { scheduleReview } = useSpacedReview();
  const { child, isGuest } = useChildContext();
  const { difficultyLevel, themeContext } = useAdaptive(child);

  const previousScore = getScore(lesson.id);
  const alreadyDone = isCompleted(lesson.id);
  const { earnCard, hasCard } = useEarnedCards();
  const [toastCardId, setToastCardId] = useState<string | null>(null);

  useEffect(() => {
    document.documentElement.classList.add('kids-mode');
    return () => document.documentElement.classList.remove('kids-mode');
  }, []);

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

      {/* ─── Hero ─── */}
      <section
        style={{
          padding: '40px 24px 48px',
          textAlign: 'center',
          borderBottom: `6px solid ${T.green}`,
        }}
      >
        <div style={{ fontSize: 64, marginBottom: 12 }}>
          <Emo size={64}>{lesson.emoji}</Emo>
        </div>
        <h1
          style={{
            fontSize: 'clamp(28px, 5vw, 42px)',
            fontWeight: 700,
            color: T.green,
            marginBottom: 8,
            letterSpacing: '-0.01em',
          }}
        >
          {lesson.title}
        </h1>
        {lesson.subtitle && (
          <p
            style={{
              fontSize: 16,
              color: T.text,
              fontWeight: 500,
              maxWidth: 540,
              margin: '0 auto',
            }}
          >
            {child
              ? `Hey ${themeContext.childName}! ${resolveText(lesson.subtitle, difficultyLevel)}`
              : resolveText(lesson.subtitle, difficultyLevel)}
          </p>
        )}
        {alreadyDone && previousScore !== null && (
          <div
            style={{
              marginTop: 14,
              display: 'inline-flex',
              alignItems: 'center',
              gap: 8,
              background: T.green,
              color: T.white,
              padding: '8px 20px',
              borderRadius: 999,
              fontSize: 14,
              fontWeight: 800,
            }}
          >
            ✓ Completed — Best Score: {previousScore}%
          </div>
        )}
      </section>

      {/* ─── Beats ─── */}
      <main style={{ flex: 1 }}>
        {lesson.beats.map((beat, i) => {
          // Outro celebrates completion — hide until the lesson is done
          if (beat.kind === 'outro' && !alreadyDone) return null;
          return (
          <BeatRenderer
            key={i}
            beat={beat}
            lessonId={lesson.id}
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

              // Award the lesson's card (no-op if already earned)
              const reward = earnedCardFor(lesson.id);
              if (reward && !hasCard(reward.id)) {
                earnCard(reward.id);
                setToastCardId(reward.id);
              }
              void score;
            }}
            onGameFinish={(miniBeat) => {
              if (!miniBeat.completesLesson) return;
              if (!alreadyDone) {
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
            }}
          />
          );
        })}
      </main>

      <Footer />

      <CardEarnedToast cardId={toastCardId} onClose={() => setToastCardId(null)} />
    </div>
  );
}

/* ────────────────────────────────────────────────────────────────────── */

interface BeatRendererProps {
  beat: LessonBeat;
  lessonId: string;
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
  lessonId,
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
            padding: '20px 24px 0',
            maxWidth: 800,
            margin: '0 auto',
            width: '100%',
          }}
        >
          <FadeIn show>
            {/* Keep MomoMentorBubble for backward compat — it now visually
                renders via our Momo component. */}
            <MomoMentorBubble
              lessonId={lessonId}
              step={0}
              difficulty={difficultyLevel}
              childName={childName}
            />
            {beat.text && (
              <Momo
                mood={beat.mood}
                msg={resolveText(beat.text, difficultyLevel)}
                size={56}
                style={{ display: 'none' }}
                // Hidden — MomoMentorBubble already shows the matching text
                // from MOMO_TIPS. Kept here for when we deprecate MomoMentorBubble.
              />
            )}
          </FadeIn>
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
        <section
          style={{
            padding: '20px 24px 32px',
            maxWidth: 800,
            margin: '0 auto',
            width: '100%',
          }}
        >
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
                marginBottom: 24,
              }}
            >
              {beat.subheading}
            </p>
          )}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns:
                'repeat(auto-fill, minmax(260px, 1fr))',
              gap: 14,
              marginTop: 16,
            }}
          >
            {beat.cards.map((card, i) => (
              <ConceptCard
                key={i}
                emoji={card.emoji}
                title={card.title}
                desc={resolveText(card.desc, difficultyLevel)}
                color={card.color}
              />
            ))}
          </div>
        </section>
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
