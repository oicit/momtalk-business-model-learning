export default function Footer() {
  return (
    <footer style={{
      padding: '32px 24px',
      background: '#2D7B5F',
      color: 'white',
      textAlign: 'center',
    }}>
      <div style={{ maxWidth: 600, margin: '0 auto' }}>
        <div style={{
          display: 'flex',
          gap: 2,
          justifyContent: 'center',
          marginBottom: 12,
        }}>
          {['M', 'o', 'm', 'T', 'a', 'l', 'k'].map((char, i) => (
            <span
              key={i}
              style={{
                fontSize: 20,
                fontWeight: 900,
                color: [
                  '#FF6B8A', '#FF8FAA', '#FFA5B8',
                  '#7DD3FC', '#86EFAC', '#FCD34D', '#C4B5FD',
                ][i],
              }}
            >
              {char}
            </span>
          ))}
        </div>

        <p style={{
          fontSize: 14,
          fontWeight: 600,
          opacity: 0.9,
          marginBottom: 8,
        }}>
          Business Model Learning Lab
        </p>

        <p style={{
          fontSize: 12,
          opacity: 0.7,
          fontWeight: 500,
        }}>
          For the mom who does everything, finally something that does everything for her.
        </p>

        <div style={{
          marginTop: 16,
          paddingTop: 16,
          borderTop: '1px solid rgba(255,255,255,0.2)',
          fontSize: 12,
          opacity: 0.5,
        }}>
          businessmodel.momtalk.ai
        </div>
      </div>
    </footer>
  );
}
