import { useCallback } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import GarageSale from '../modules/GarageSale';
import { useProgress } from '../hooks/useProgress';

export default function GarageSalePage() {
  const { completeLesson, isCompleted, getScore } = useProgress();
  const previousScore = getScore('garage-sale');

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
    },
    [completeLesson],
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
        <GarageSale onAllComplete={handleAllComplete} />
      </div>
      <Footer />
    </div>
  );
}
