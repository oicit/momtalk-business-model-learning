/**
 * STEM Lab — the interactive science dashboard (3D models, lessons, standards).
 *
 * The lab is a self-contained static multi-page site at /Users/oicit/Documents/STEM,
 * symlinked into public/stem for local dev. We embed it in a full-height iframe
 * under a slim MomTalk bar, same as Word Battle.
 *
 * NOTE: public/stem is a SYMLINK to /Users/oicit/Documents/STEM (~7.8 GB of 3D
 * assets) and is gitignored. It only works under `vite dev` on this machine — it
 * is not bundled into the Vercel build. To ship it, host STEM Lab separately and
 * point the iframe src at that URL.
 *
 * Route: /stem-lab
 */

import { useNavigate } from 'react-router-dom';
import { T } from '../styles/kidsTokens';

export default function StemLabPage() {
  const navigate = useNavigate();

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        display: 'flex',
        flexDirection: 'column',
        background: '#0B1020',
      }}
    >
      <header
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          height: 48,
          padding: '0 14px',
          background: T.white,
          borderBottom: `3px solid ${T.green}`,
          flexShrink: 0,
        }}
      >
        <button
          type="button"
          onClick={() => navigate('/')}
          style={{
            background: 'none',
            border: 'none',
            color: T.green,
            fontWeight: 700,
            fontSize: 15,
            cursor: 'pointer',
            fontFamily: 'inherit',
          }}
        >
          ← Map
        </button>
        <span style={{ fontWeight: 800, color: T.green, fontSize: 16 }}>
          🔬 STEM Lab
        </span>
        <span style={{ width: 52 }} aria-hidden />
      </header>

      <iframe
        src="/stem/index.html"
        title="STEM Lab — interactive science dashboard"
        allow="autoplay; fullscreen; xr-spatial-tracking"
        style={{ flex: 1, width: '100%', border: 'none' }}
      />
    </div>
  );
}
