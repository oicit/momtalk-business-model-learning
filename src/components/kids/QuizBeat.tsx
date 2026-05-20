import { useMemo, useState } from 'react';
import { T, radius, shadow as makeShadow } from '../../styles/kidsTokens';
import type { QuizQuestion } from '../../data/lessons/types';
import { getDifficultyConfig, getPacing } from '../../lib/difficulty';
import type { DifficultyLevel } from '../../hooks/useAdaptive';
import MCard from './MCard';
import Pill from './Pill';
import FadeIn from './FadeIn';

interface QuizBeatProps {
  heading?: string;
  subheading?: string;
  questions: QuizQuestion[];
  difficulty: DifficultyLevel;
  /** Called with finalScore (0..questions.length) when submit clicked. */
  onSubmit: (finalScore: number, percent: number) => void;
  /** Optional bonus tip to show after submit if pacing allows. */
  bonusTip?: string;
  /** Allow retry after submit. */
  allowRetry?: boolean;
  /** Slot rendered inside the result panel (e.g. SaveProgressPrompt). */
  afterResult?: React.ReactNode;
}

/**
 * Quiz beat — multiple-choice with difficulty-adaptive option count,
 * submit → result panel → optional retry.
 *
 * Preserves the exact scoring logic from the original ChickFilAPage.
 */
export default function QuizBeat({
  heading,
  subheading,
  questions,
  difficulty,
  onSubmit,
  bonusTip,
  allowRetry = true,
  afterResult,
}: QuizBeatProps) {
  const config = getDifficultyConfig(difficulty);

  // Trim options to N for easier difficulty (always keep correct answer)
  const trimmedQuestions = useMemo(() => {
    const maxOptions = config.quizOptionsCount;
    return questions.map((q) => {
      if (q.options.length <= maxOptions) return q;
      const correctOpt = q.options[q.correct]!;
      const others = q.options
        .filter((_, i) => i !== q.correct)
        .slice(0, maxOptions - 1);
      const newCorrectIdx = Math.min(q.correct, others.length);
      const trimmed = [...others];
      trimmed.splice(newCorrectIdx, 0, correctOpt);
      return { ...q, options: trimmed, correct: newCorrectIdx };
    });
  }, [questions, config.quizOptionsCount]);

  const [started, setStarted] = useState(false);
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [submitted, setSubmitted] = useState(false);

  const score = submitted
    ? Object.entries(answers).reduce(
        (acc, [qi, ai]) =>
          acc + (trimmedQuestions[Number(qi)]!.correct === ai ? 1 : 0),
        0,
      )
    : 0;

  const total = trimmedQuestions.length;
  const percent = total ? Math.round((score / total) * 100) : 0;
  const pacing = getPacing(percent);
  const allAnswered = Object.keys(answers).length === total;

  const handleSubmit = () => {
    setSubmitted(true);
    onSubmit(score, percent);
  };

  const handleRetry = () => {
    setStarted(false);
    setAnswers({});
    setSubmitted(false);
  };

  return (
    <div style={{ maxWidth: 640, margin: '0 auto' }}>
      {heading && (
        <h2
          style={{
            fontSize: 28,
            fontWeight: 700,
            color: T.green,
            textAlign: 'center',
            margin: '0 0 8px',
          }}
        >
          {heading}
        </h2>
      )}
      {subheading && (
        <p
          style={{
            textAlign: 'center',
            color: T.sub,
            fontWeight: 500,
            marginBottom: 24,
          }}
        >
          {subheading}
        </p>
      )}

      {!started ? (
        <div style={{ textAlign: 'center' }}>
          <Pill
            color={T.green}
            bg={T.yellow}
            size="lg"
            onClick={() => setStarted(true)}
          >
            Start Quiz →
          </Pill>
        </div>
      ) : (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
          {trimmedQuestions.map((q, qi) => (
            <MCard key={qi} borderWidth={4}>
              <p
                style={{
                  fontWeight: 700,
                  fontSize: 15,
                  marginBottom: 12,
                  color: T.green,
                }}
              >
                {qi + 1}. {q.q}
              </p>
              <div
                style={{ display: 'flex', flexDirection: 'column', gap: 8 }}
              >
                {q.options.map((opt, oi) => {
                  const selected = answers[qi] === oi;
                  const isCorrect = submitted && q.correct === oi;
                  const isWrong =
                    submitted && selected && q.correct !== oi;

                  let bg: string = T.white;
                  let bd: string = 'rgba(45,155,110,.2)';
                  if (isCorrect) {
                    bg = '#D1FAE5';
                    bd = T.green;
                  } else if (isWrong) {
                    bg = '#FFE5EC';
                    bd = T.coral;
                  } else if (selected) {
                    bg = '#FEF9C3';
                    bd = T.yellow;
                  }

                  return (
                    <button
                      key={oi}
                      type="button"
                      disabled={submitted}
                      onClick={() =>
                        !submitted &&
                        setAnswers((prev) => ({ ...prev, [qi]: oi }))
                      }
                      style={{
                        padding: '10px 16px',
                        background: bg,
                        border: `3px solid ${bd}`,
                        borderRadius: radius.chip,
                        fontSize: 14,
                        fontWeight: 600,
                        color: T.green,
                        cursor: submitted ? 'default' : 'pointer',
                        textAlign: 'left',
                        fontFamily: 'inherit',
                        transition: 'all .2s ease',
                      }}
                    >
                      {isCorrect && '✓ '}
                      {isWrong && '✗ '}
                      {opt}
                    </button>
                  );
                })}
              </div>
            </MCard>
          ))}

          {!submitted ? (
            <div style={{ textAlign: 'center' }}>
              <Pill
                bg={allAnswered ? T.green : '#ccc'}
                color={allAnswered ? T.white : '#888'}
                size="lg"
                onClick={allAnswered ? handleSubmit : undefined}
                disabled={!allAnswered}
              >
                Submit Answers
              </Pill>
            </div>
          ) : (
            <FadeIn show>
              <div
                style={{
                  textAlign: 'center',
                  padding: 24,
                  background: percent === 100 ? '#D1FAE5' : '#FEF9C3',
                  borderRadius: radius.cardLg,
                  border: `4px solid ${T.green}`,
                  boxShadow: makeShadow(5, T.green),
                }}
              >
                <div style={{ fontSize: 48, marginBottom: 8 }}>
                  {percent === 100 ? '🎉' : score >= 3 ? '👏' : '💪'}
                </div>
                <p
                  style={{
                    fontWeight: 800,
                    fontSize: 22,
                    color: T.green,
                    margin: 0,
                  }}
                >
                  {score}/{total} Correct!
                </p>
                <p
                  style={{
                    color: T.sub,
                    fontWeight: 600,
                    fontSize: 14,
                    marginTop: 6,
                  }}
                >
                  {percent === 100
                    ? "Perfect score! You're a business expert!"
                    : score >= 3
                      ? 'Great job! You really know your stuff!'
                      : 'Nice try! Watch the video again and try once more.'}
                </p>

                {allowRetry && (
                  <div style={{ marginTop: 16 }}>
                    <Pill
                      color={T.green}
                      bg={T.yellow}
                      onClick={handleRetry}
                    >
                      Try Again
                    </Pill>
                  </div>
                )}

                {bonusTip && pacing.showBonusContent && (
                  <div
                    style={{
                      marginTop: 18,
                      padding: '14px 18px',
                      background: T.white,
                      borderRadius: 14,
                      border: `3px solid ${T.green}`,
                      textAlign: 'left',
                    }}
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
                      {bonusTip}
                    </p>
                  </div>
                )}

                {afterResult}
              </div>
            </FadeIn>
          )}
        </div>
      )}
    </div>
  );
}
