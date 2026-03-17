import { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useProgress } from '../hooks/useProgress';

const KEY_LESSONS = [
  {
    emoji: '🐄',
    title: 'Quality Ingredients',
    desc: 'Chick-fil-A uses real chicken breast in every sandwich. They believe great food starts with great ingredients.',
    color: '#FFE5EC',
  },
  {
    emoji: '😊',
    title: '"My Pleasure" Service',
    desc: 'Every employee says "my pleasure" instead of "you\'re welcome." This small detail makes customers feel special.',
    color: '#E0F2FE',
  },
  {
    emoji: '📅',
    title: 'Closed on Sundays',
    desc: 'The founder decided to close every Sunday so employees could rest. This bold choice actually made the brand stronger!',
    color: '#D1FAE5',
  },
  {
    emoji: '🏪',
    title: 'Franchise Model',
    desc: 'Each restaurant has an owner-operator who runs it like their own business. This is called a franchise model.',
    color: '#FEF9C3',
  },
  {
    emoji: '🐮',
    title: 'The "Eat Mor Chikin" Cows',
    desc: 'Those funny cows holding signs? That marketing campaign has been running since 1995 and became iconic!',
    color: '#EDE9FE',
  },
  {
    emoji: '📈',
    title: 'Growth Strategy',
    desc: 'Chick-fil-A grows slowly and carefully. They pick locations wisely and train operators for months before opening.',
    color: '#FFF8F0',
  },
];

export default function ChickFilAPage() {
  const [expandedLesson, setExpandedLesson] = useState<number | null>(null);
  const [quizStarted, setQuizStarted] = useState(false);
  const [quizAnswers, setQuizAnswers] = useState<Record<number, number>>({});
  const [quizSubmitted, setQuizSubmitted] = useState(false);
  const { completeLesson, isCompleted, getScore } = useProgress();
  const previousScore = getScore('chick-fil-a');

  const quizQuestions = [
    {
      q: 'What makes Chick-fil-A\'s customer service special?',
      options: ['Fast delivery', 'Saying "my pleasure"', 'Free toys', 'Drive-through only'],
      correct: 1,
    },
    {
      q: 'What day is Chick-fil-A always closed?',
      options: ['Monday', 'Saturday', 'Sunday', 'Wednesday'],
      correct: 2,
    },
    {
      q: 'What business model does Chick-fil-A use?',
      options: ['Corporate stores', 'Franchise model', 'Food truck', 'Online only'],
      correct: 1,
    },
    {
      q: 'What animal is in their famous ad campaign?',
      options: ['Chicken', 'Cow', 'Pig', 'Dog'],
      correct: 1,
    },
  ];

  const score = quizSubmitted
    ? Object.entries(quizAnswers).reduce(
        (acc, [qi, ai]) => acc + (quizQuestions[Number(qi)]!.correct === ai ? 1 : 0),
        0
      )
    : 0;

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Header />

      {/* Hero */}
      <section style={{
        padding: '40px 24px 48px',
        background: 'linear-gradient(180deg, #FEF9C3 0%, #FDE68A 50%, #FCD34D 100%)',
        textAlign: 'center',
        borderBottom: '6px solid #2D7B5F',
      }}>
        <div style={{ fontSize: 64, marginBottom: 12 }}>🐔</div>
        <h1 style={{
          fontSize: 'clamp(28px, 5vw, 42px)',
          fontWeight: 900,
          color: '#2D7B5F',
          marginBottom: 8,
        }}>
          How Chick-fil-A Works
        </h1>
        <p style={{
          fontSize: 16,
          color: '#5E8C7F',
          fontWeight: 600,
          maxWidth: 500,
          margin: '0 auto',
        }}>
          Discover the secrets behind one of America's most beloved restaurant chains
        </p>
        {isCompleted('chick-fil-a') && previousScore !== null && (
          <div style={{
            marginTop: 12,
            display: 'inline-flex',
            alignItems: 'center',
            gap: 8,
            background: '#2D7B5F',
            color: 'white',
            padding: '8px 20px',
            borderRadius: 100,
            fontSize: 14,
            fontWeight: 800,
          }}>
            ✓ Completed — Best Score: {previousScore}%
          </div>
        )}
      </section>

      {/* Video Section */}
      <section style={{
        padding: '40px 24px',
        maxWidth: 800,
        margin: '0 auto',
        width: '100%',
      }}>
        <div style={{
          background: '#FFF8F0',
          borderRadius: 32,
          border: '6px solid #2D7B5F',
          overflow: 'hidden',
          boxShadow: '0 8px 32px rgba(45,123,95,0.15)',
        }}>
          <div style={{
            padding: '16px 20px',
            background: 'rgba(255,255,255,0.8)',
            borderBottom: '3px solid #2D7B5F',
            display: 'flex',
            alignItems: 'center',
            gap: 10,
          }}>
            <span style={{ fontSize: 20 }}>🎬</span>
            <span style={{ fontWeight: 800, fontSize: 16, color: '#2D7B5F' }}>
              Watch: The Chick-fil-A Story
            </span>
            <span style={{
              marginLeft: 'auto',
              background: '#F4C430',
              padding: '4px 12px',
              borderRadius: 100,
              fontSize: 11,
              fontWeight: 800,
              border: '2px solid #2D7B5F',
              color: '#2D7B5F',
            }}>
              2 MIN
            </span>
          </div>
          <div style={{
            position: 'relative',
            paddingTop: '56.25%',
            background: '#000',
          }}>
            <video
              controls
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
              }}
              poster=""
            >
              <source src="/videos/chick-fil-a-kids-video.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </section>

      {/* Key Lessons */}
      <section style={{
        padding: '20px 24px 60px',
        maxWidth: 800,
        margin: '0 auto',
        width: '100%',
      }}>
        <h2 style={{
          fontSize: 28,
          textAlign: 'center',
          marginBottom: 24,
        }}>
          Key Business Lessons
        </h2>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
          gap: 16,
        }}>
          {KEY_LESSONS.map((lesson, i) => (
            <div
              key={i}
              onClick={() => setExpandedLesson(expandedLesson === i ? null : i)}
              style={{
                background: lesson.color,
                borderRadius: 24,
                border: '4px solid #2D7B5F',
                padding: 20,
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                boxShadow: expandedLesson === i
                  ? '0 8px 24px rgba(45,123,95,0.2)'
                  : '0 2px 8px rgba(45,123,95,0.08)',
                transform: expandedLesson === i ? 'scale(1.02)' : 'scale(1)',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: expandedLesson === i ? 12 : 0 }}>
                <span style={{ fontSize: 32 }}>{lesson.emoji}</span>
                <h3 style={{ fontSize: 16, fontWeight: 800, color: '#2D7B5F', flex: 1 }}>
                  {lesson.title}
                </h3>
                <span style={{
                  fontSize: 16,
                  color: '#5E8C7F',
                  transition: 'transform 0.2s ease',
                  transform: expandedLesson === i ? 'rotate(180deg)' : 'rotate(0)',
                }}>
                  ▼
                </span>
              </div>
              {expandedLesson === i && (
                <p style={{
                  fontSize: 14,
                  color: '#5E8C7F',
                  fontWeight: 600,
                  lineHeight: 1.6,
                  animation: 'fadeIn 0.3s ease',
                }}>
                  {lesson.desc}
                </p>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Quiz Section */}
      <section style={{
        padding: '48px 24px',
        background: 'linear-gradient(180deg, #F5E6D3 0%, #FFF8F0 100%)',
      }}>
        <div style={{ maxWidth: 600, margin: '0 auto' }}>
          <h2 style={{ fontSize: 28, textAlign: 'center', marginBottom: 8 }}>
            🏆 Quick Quiz
          </h2>
          <p style={{
            textAlign: 'center',
            color: '#5E8C7F',
            fontWeight: 600,
            marginBottom: 24,
          }}>
            Test what you learned about Chick-fil-A!
          </p>

          {!quizStarted ? (
            <div style={{ textAlign: 'center' }}>
              <button
                onClick={() => setQuizStarted(true)}
                style={{
                  padding: '14px 36px',
                  background: '#F4C430',
                  border: '4px solid #2D7B5F',
                  borderRadius: 100,
                  fontSize: 16,
                  fontWeight: 800,
                  color: '#2D7B5F',
                  cursor: 'pointer',
                  fontFamily: 'inherit',
                  transition: 'all 0.2s ease',
                }}
              >
                Start Quiz →
              </button>
            </div>
          ) : (
            <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
              {quizQuestions.map((q, qi) => (
                <div
                  key={qi}
                  style={{
                    background: 'white',
                    borderRadius: 24,
                    border: '4px solid #2D7B5F',
                    padding: 20,
                  }}
                >
                  <p style={{ fontWeight: 800, fontSize: 15, marginBottom: 12, color: '#2D7B5F' }}>
                    {qi + 1}. {q.q}
                  </p>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                    {q.options.map((opt, oi) => {
                      const selected = quizAnswers[qi] === oi;
                      const isCorrect = quizSubmitted && q.correct === oi;
                      const isWrong = quizSubmitted && selected && q.correct !== oi;

                      return (
                        <button
                          key={oi}
                          onClick={() => !quizSubmitted && setQuizAnswers({ ...quizAnswers, [qi]: oi })}
                          disabled={quizSubmitted}
                          style={{
                            padding: '10px 16px',
                            background: isCorrect
                              ? '#D1FAE5'
                              : isWrong
                              ? '#FFE5EC'
                              : selected
                              ? '#FEF9C3'
                              : '#FFF8F0',
                            border: `3px solid ${
                              isCorrect ? '#2D7B5F' : isWrong ? '#FF6B8A' : selected ? '#F4C430' : 'rgba(45,123,95,0.2)'
                            }`,
                            borderRadius: 16,
                            fontSize: 14,
                            fontWeight: 600,
                            color: '#2D7B5F',
                            cursor: quizSubmitted ? 'default' : 'pointer',
                            textAlign: 'left' as const,
                            fontFamily: 'inherit',
                            transition: 'all 0.2s ease',
                          }}
                        >
                          {isCorrect && '✓ '}{isWrong && '✗ '}{opt}
                        </button>
                      );
                    })}
                  </div>
                </div>
              ))}

              {!quizSubmitted ? (
                <button
                  onClick={() => {
                    setQuizSubmitted(true);
                    const finalScore = Object.entries(quizAnswers).reduce(
                      (acc, [qi, ai]) => acc + (quizQuestions[Number(qi)]!.correct === ai ? 1 : 0), 0
                    );
                    completeLesson({
                      lessonId: 'chick-fil-a',
                      score: Math.round((finalScore / quizQuestions.length) * 100),
                      xpEarned: 100,
                      completedAt: new Date().toISOString(),
                      skillScores: {
                        'Supply Chain': finalScore >= 1 ? 80 : 40,
                        'Customer Service': finalScore >= 2 ? 90 : 50,
                        'Brand Building': finalScore >= 3 ? 85 : 45,
                        'Operations': finalScore >= 4 ? 95 : 55,
                      },
                    });
                  }}
                  disabled={Object.keys(quizAnswers).length < quizQuestions.length}
                  style={{
                    padding: '14px 36px',
                    background: Object.keys(quizAnswers).length < quizQuestions.length ? '#ccc' : '#2D7B5F',
                    border: 'none',
                    borderRadius: 100,
                    fontSize: 16,
                    fontWeight: 800,
                    color: 'white',
                    cursor: Object.keys(quizAnswers).length < quizQuestions.length ? 'not-allowed' : 'pointer',
                    fontFamily: 'inherit',
                    alignSelf: 'center',
                  }}
                >
                  Submit Answers
                </button>
              ) : (
                <div style={{
                  textAlign: 'center',
                  padding: 24,
                  background: score === quizQuestions.length ? '#D1FAE5' : '#FEF9C3',
                  borderRadius: 24,
                  border: '4px solid #2D7B5F',
                }}>
                  <div style={{ fontSize: 48, marginBottom: 8 }}>
                    {score === quizQuestions.length ? '🎉' : score >= 3 ? '👏' : '💪'}
                  </div>
                  <p style={{ fontWeight: 800, fontSize: 20, color: '#2D7B5F' }}>
                    {score}/{quizQuestions.length} Correct!
                  </p>
                  <p style={{ color: '#5E8C7F', fontWeight: 600, fontSize: 14, marginTop: 4 }}>
                    {score === quizQuestions.length
                      ? 'Perfect score! You\'re a Chick-fil-A business expert!'
                      : score >= 3
                      ? 'Great job! You really know your stuff!'
                      : 'Nice try! Watch the video again and try once more.'}
                  </p>
                  <button
                    onClick={() => { setQuizStarted(false); setQuizAnswers({}); setQuizSubmitted(false); }}
                    style={{
                      marginTop: 16,
                      padding: '10px 24px',
                      background: '#F4C430',
                      border: '3px solid #2D7B5F',
                      borderRadius: 100,
                      fontSize: 14,
                      fontWeight: 800,
                      color: '#2D7B5F',
                      cursor: 'pointer',
                      fontFamily: 'inherit',
                    }}
                  >
                    Try Again
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}
