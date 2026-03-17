import { useState } from 'react';
import { exchangeKidCode } from '../lib/auth';

interface KidCodeEntryProps {
  onSuccess: () => void;
}

const VALID_CHARS = 'ABCDEFGHJKMNPQRSTUVWXYZ23456789';

export default function KidCodeEntry({ onSuccess }: KidCodeEntryProps) {
  const [code, setCode] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleInput = (value: string) => {
    const filtered = value.toUpperCase().split('').filter(c => VALID_CHARS.includes(c)).join('');
    setCode(filtered.slice(0, 6));
    setError(null);
  };

  const handleSubmit = async () => {
    if (code.length !== 6) return;
    setLoading(true);
    setError(null);
    try {
      await exchangeKidCode(code);
      onSuccess();
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Something went wrong');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{
      background: 'white',
      borderRadius: 32,
      border: '6px solid #2D7B5F',
      padding: 32,
      maxWidth: 400,
      margin: '0 auto',
      textAlign: 'center',
    }}>
      <div style={{ fontSize: 48, marginBottom: 12 }}>🔑</div>
      <h3 style={{ fontSize: 20, fontWeight: 800, color: '#2D7B5F', marginBottom: 8 }}>
        Enter Your Kid Code
      </h3>
      <p style={{ fontSize: 14, color: '#5E8C7F', fontWeight: 600, marginBottom: 20 }}>
        Ask your parent for your 6-letter code
      </p>

      <input
        type="text"
        value={code}
        onChange={(e) => handleInput(e.target.value)}
        placeholder="ABC123"
        maxLength={6}
        style={{
          width: '100%',
          padding: '16px',
          fontSize: 28,
          fontWeight: 800,
          textAlign: 'center',
          letterSpacing: 8,
          border: '4px solid #2D7B5F',
          borderRadius: 20,
          fontFamily: 'monospace',
          color: '#2D7B5F',
          outline: 'none',
          background: '#FFF8F0',
        }}
        onKeyDown={(e) => e.key === 'Enter' && handleSubmit()}
      />

      {error && (
        <p style={{ color: '#FF6B8A', fontSize: 14, fontWeight: 700, marginTop: 12 }}>
          {error}
        </p>
      )}

      <button
        onClick={handleSubmit}
        disabled={code.length !== 6 || loading}
        style={{
          marginTop: 16,
          width: '100%',
          padding: '14px',
          background: code.length === 6 ? '#2D7B5F' : '#ccc',
          color: 'white',
          border: 'none',
          borderRadius: 100,
          fontSize: 16,
          fontWeight: 800,
          cursor: code.length === 6 ? 'pointer' : 'not-allowed',
          fontFamily: 'inherit',
        }}
      >
        {loading ? 'Checking...' : 'Start Learning →'}
      </button>
    </div>
  );
}
