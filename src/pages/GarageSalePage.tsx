import { useCallback } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import GarageSale from '../modules/GarageSale';
import { useProgress } from '../hooks/useProgress';
import { useSpacedReview } from '../hooks/useSpacedReview';
import { useChildContext } from '../hooks/useChildContext';
import { useAdaptive } from '../hooks/useAdaptive';
import SaveProgressPrompt from '../components/SaveProgressPrompt';

export default function GarageSalePage() {
  const { completeLesson, isCompleted, getScore } = useProgress();
  const { scheduleReview } = useSpacedReview();
  const previousScore = getScore('garage-sale');

  // Adaptive content engine
  const { child, isGuest } = useChildContext();
  const { difficultyLevel, themeContext } = useAdaptive(child);

  const handleAllComplete = useCallback(
    (data: { totalLevels: number; xp: number }) => {
      completeLesson({
        lessonId: 'garage-sale',
        score: 100, // completed all 10 levels
        xpEarned: data.xp,
        completedAt: new Date().toISOString(),
        skillScores: {
          Pricing: 85,
          Marketing: 80,
          'Customer Service': 90,
          Branding: 75,
        },
      });
      scheduleReview('garage-sale');
    },
    [completeLesson, scheduleReview],
  );

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Header />
      {isCompleted('garage-sale') && previousScore !== null && (
        <div
          style={{
            textAlign: 'center',
            padding: '12px 24px',
            background: '#D1FAE5',
            borderBottom: '3px solid #2D7B5F',
          }}
        >
          <span
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 8,
              fontSize: 14,
              fontWeight: 800,
              color: '#2D7B5F',
            }}
          >
            ✓ All Levels Completed — {previousScore}% — Keep practicing to improve!
          </span>
        </div>
      )}
      <div style={{ flex: 1 }}>
        <GarageSale onAllComplete={handleAllComplete} difficultyLevel={difficultyLevel} themeContext={child ? themeContext : null} />
      </div>
      {isCompleted('garage-sale') && (
        <div style={{ padding: '0 24px 24px', maxWidth: 600, margin: '0 auto', width: '100%' }}>
          <SaveProgressPrompt isGuest={isGuest} show={true} />
        </div>
      )}
      <Footer />
    </div>
  );
}
