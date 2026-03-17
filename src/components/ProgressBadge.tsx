interface ProgressBadgeProps {
  completed: boolean;
  score: number | null;
}

export default function ProgressBadge({ completed, score }: ProgressBadgeProps) {
  if (!completed) return null;

  return (
    <div
      style={{
        position: 'absolute',
        top: 12,
        right: 12,
        display: 'flex',
        alignItems: 'center',
        gap: 4,
        background: '#2D7B5F',
        color: 'white',
        padding: '4px 10px',
        borderRadius: 100,
        fontSize: 11,
        fontWeight: 800,
        border: '2px solid white',
        boxShadow: '0 2px 8px rgba(45,123,95,0.3)',
        zIndex: 2,
      }}
    >
      <span>✓</span>
      {score !== null && <span>{score}%</span>}
    </div>
  );
}
