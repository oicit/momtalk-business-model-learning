import { Link, useLocation } from 'react-router-dom';

const LOGO_LETTERS = [
  { char: 'M', color: '#FF6B8A' },
  { char: 'o', color: '#FF8FAA' },
  { char: 'm', color: '#FFA5B8' },
  { char: 'T', color: '#7DD3FC' },
  { char: 'a', color: '#86EFAC' },
  { char: 'l', color: '#FCD34D' },
  { char: 'k', color: '#C4B5FD' },
];

export default function Header() {
  const location = useLocation();
  const isHome = location.pathname === '/';

  return (
    <header style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '12px 24px',
      background: '#FFF8F0',
      borderBottom: '3px solid #2D7B5F',
      position: 'sticky',
      top: 0,
      zIndex: 100,
      backdropFilter: 'blur(12px)',
    }}>
      {/* Logo */}
      <Link to="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 12 }}>
        <div style={{ display: 'flex', gap: 1 }}>
          {LOGO_LETTERS.map((l, i) => (
            <span
              key={i}
              style={{
                fontSize: 22,
                fontWeight: 900,
                color: l.color,
                textShadow: `1px 2px 0 #2D7B5F`,
                display: 'inline-block',
              }}
            >
              {l.char}
            </span>
          ))}
        </div>
        <div style={{
          background: '#F4C430',
          padding: '3px 10px',
          borderRadius: 100,
          fontSize: 10,
          fontWeight: 800,
          textTransform: 'uppercase' as const,
          border: '2px solid #2D7B5F',
          color: '#2D7B5F',
          letterSpacing: 0.5,
          whiteSpace: 'nowrap',
        }}>
          Biz Lab
        </div>
      </Link>

      {/* Nav */}
      <nav style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
        {!isHome && (
          <Link
            to="/"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 6,
              padding: '8px 16px',
              background: '#FFF8F0',
              border: '2px solid #2D7B5F',
              borderRadius: 100,
              fontSize: 13,
              fontWeight: 700,
              color: '#2D7B5F',
              textDecoration: 'none',
              transition: 'all 0.2s ease',
            }}
          >
            ← All Modules
          </Link>
        )}
        <a
          href="https://momtalk.ai"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 6,
            padding: '8px 16px',
            background: '#2D7B5F',
            borderRadius: 100,
            fontSize: 13,
            fontWeight: 700,
            color: 'white',
            textDecoration: 'none',
            border: 'none',
            transition: 'all 0.2s ease',
          }}
        >
          MomTalk.ai
        </a>
      </nav>
    </header>
  );
}
