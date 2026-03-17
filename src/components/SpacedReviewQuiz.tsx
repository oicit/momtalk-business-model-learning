// src/components/SpacedReviewQuiz.tsx

import { useState } from 'react';
import type { ReviewItem } from '../lib/spacedRepetition';

interface ReviewQuestion {
  question: string;
  options: string[];
  correctIndex: number;
}

// Review questions per lesson (subset of main quiz)
const REVIEW_QUESTIONS: Record<string, ReviewQuestion[]> = {
  'chick-fil-a': [
    {
      question: 'What phrase do Chick-fil-A employees say instead of "you\'re welcome"?',
      options: ['"No problem"', '"My pleasure"', '"Sure thing"'],
      correctIndex: 1,
    },
    {
      question: 'What day is Chick-fil-A always closed?',
      options: ['Saturday', 'Sunday', 'Monday'],
      correctIndex: 1,
    },
    {
      question: 'What business model does Chick-fil-A use?',
      options: ['Food truck', 'Franchise', 'Online delivery only'],
      correctIndex: 1,
    },
  ],
  'garage-sale': [
    {
      question: 'What is profit?',
      options: ['All the money you earn', 'Money earned minus money spent', 'The price of your items'],
      correctIndex: 1,
    },
    {
      question: 'When should you put up signs for a garage sale?',
      options: ['1 month before', '3-5 days before', 'The same morning'],
      correctIndex: 1,
    },
    {
      question: 'What happens if you sell a broken item?',
      options: ['More profit!', 'Customers lose trust in you', 'Nothing, they can return it'],
      correctIndex: 1,
    },
  ],
};

interface SpacedReviewQuizProps {
  review: ReviewItem;
  onComplete: (reviewId: string, scorePercent: number) => void;
}

export default function SpacedReviewQuiz({ review, onComplete }: SpacedReviewQuizProps) {
  const [currentQ, setCurrentQ] = useState(0);
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [showResult, setShowResult] = useState(false);

  const questions = REVIEW_QUESTIONS[review.lessonId] || [];
  if (questions.length === 0) return null;

  const handleAnswer = (optionIndex: number) => {
    setAnswers({ ...answers, [currentQ]: optionIndex });
  };

  const handleNext = () => {
    if (currentQ < questions.length - 1) {
      setCurrentQ(currentQ + 1);
    } else {
      setShowResult(true);
      const correct = Object.entries(answers).reduce(
        (acc, [qi, ai]) => acc + (questions[Number(qi)]?.correctIndex === ai ? 1 : 0),
        0,
      );
      const scorePercent = Math.round((correct / questions.length) * 100);
      onComplete(review.id, scorePercent);
    }
  };

  if (showResult) {
    const correct = Object.entries(answers).reduce(
      (acc, [qi, ai]) => acc + (questions[Number(qi)]?.correctIndex === ai ? 1 : 0),
      0,
    );
    return (
      <div style={{
        background: correct === questions.length ? '#D1FAE5' : '#FEF9C3',
        borderRadius: 24,
        border: '4px solid #2D7B5F',
        padding: 24,
        textAlign: 'center',
      }}>
        <div style={{ fontSize: 48, marginBottom: 8 }}>
          {correct === questions.length ? '\uD83C\uDF89' : correct >= 2 ? '\uD83D\uDC4F' : '\uD83D\uDCAA'}
        </div>
        <p style={{ fontWeight: 800, fontSize: 18, color: '#2D7B5F' }}>
          Review: {correct}/{questions.length} Correct!
        </p>
        <p style={{ color: '#5E8C7F', fontSize: 14, fontWeight: 600, marginTop: 4 }}>
          {correct === questions.length
            ? 'Perfect recall! Your next review is scheduled further out.'
            : "Keep it up! You'll review again sooner to strengthen memory."}
        </p>
      </div>
    );
  }

  const q = questions[currentQ];
  if (!q) return null;

  return (
    <div style={{
      background: 'white',
      borderRadius: 24,
      border: '4px solid #2D7B5F',
      padding: 24,
    }}>
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 16,
      }}>
        <span style={{
          background: '#F4C430',
          padding: '4px 12px',
          borderRadius: 100,
          fontSize: 11,
          fontWeight: 800,
          border: '2px solid #2D7B5F',
          color: '#2D7B5F',
        }}>
          REVIEW
        </span>
        <span style={{ fontSize: 13, fontWeight: 700, color: '#5E8C7F' }}>
          {currentQ + 1}/{questions.length}
        </span>
      </div>

      <p style={{ fontWeight: 800, fontSize: 16, color: '#2D7B5F', marginBottom: 16 }}>
        {q.question}
      </p>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
        {q.options.map((opt, i) => (
          <button
            key={i}
            onClick={() => handleAnswer(i)}
            style={{
              padding: '12px 16px',
              background: answers[currentQ] === i ? '#FEF9C3' : '#FFF8F0',
              border: `3px solid ${answers[currentQ] === i ? '#F4C430' : 'rgba(45,123,95,0.2)'}`,
              borderRadius: 16,
              fontSize: 14,
              fontWeight: 600,
              color: '#2D7B5F',
              cursor: 'pointer',
              textAlign: 'left' as const,
              fontFamily: 'inherit',
            }}
          >
            {opt}
          </button>
        ))}
      </div>

      <button
        onClick={handleNext}
        disabled={answers[currentQ] === undefined}
        style={{
          marginTop: 16,
          width: '100%',
          padding: '12px',
          background: answers[currentQ] !== undefined ? '#2D7B5F' : '#ccc',
          color: 'white',
          border: 'none',
          borderRadius: 100,
          fontSize: 15,
          fontWeight: 800,
          cursor: answers[currentQ] !== undefined ? 'pointer' : 'not-allowed',
          fontFamily: 'inherit',
        }}
      >
        {currentQ < questions.length - 1 ? 'Next \u2192' : 'Finish Review'}
      </button>
    </div>
  );
}
