import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface SaveProgressPromptProps {
  isGuest: boolean;
  show: boolean;
}

export default function SaveProgressPrompt({ isGuest, show }: SaveProgressPromptProps) {
  const [dismissed, setDismissed] = useState(false);
  const navigate = useNavigate();

  if (!isGuest || !show || dismissed) return null;

  return (
    <div style={{
      marginTop: 20,
      background: 'linear-gradient(135deg, #EDE9FE 0%, #DDD6FE 50%, #C4B5FD 100%)',
      borderRadius: 24,
      border: '4px solid #2D7B5F',
      padding: 24,
      textAlign: 'center',
    }}>
      <div style={{ fontSize: 36, marginBottom: 8 }}>💾</div>
      <h3 style={{ fontSize: 18, fontWeight: 800, color: '#2D7B5F', marginBottom: 6 }}>
        Save Your Progress!
      </h3>
      <p style={{
        fontSize: 14, color: '#5E8C7F', fontWeight: 600, lineHeight: 1.5, marginBottom: 16,
        maxWidth: 320, margin: '0 auto 16px',
      }}>
        Your score is saved on this device, but connect with MomTalk to keep it forever
        and get lessons made just for you!
      </p>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 10, maxWidth: 280, margin: '0 auto' }}>
        <button
          onClick={() => navigate('/auth')}
          style={{
            padding: '12px 24px',
            background: '#2D7B5F',
            color: 'white',
            border: 'none',
            borderRadius: 100,
            fontSize: 15,
            fontWeight: 800,
            cursor: 'pointer',
            fontFamily: 'inherit',
          }}
        >
          🔑 Enter Kid Code
        </button>

        <a
          href="https://momtalk.ai"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            padding: '12px 24px',
            background: '#FFF8F0',
            color: '#2D7B5F',
            border: '3px solid #2D7B5F',
            borderRadius: 100,
            fontSize: 14,
            fontWeight: 800,
            cursor: 'pointer',
            fontFamily: 'inherit',
            textDecoration: 'none',
            display: 'block',
          }}
        >
          📱 Open from MomTalk App
        </a>

        <button
          onClick={() => setDismissed(true)}
          style={{
            padding: '8px',
            background: 'none',
            border: 'none',
            color: '#5E8C7F',
            fontSize: 13,
            fontWeight: 600,
            cursor: 'pointer',
            fontFamily: 'inherit',
          }}
        >
          Continue as guest
        </button>
      </div>
    </div>
  );
}
