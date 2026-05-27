/**
 * Word Battle — the self-contained HTML/Three.js sight-word reading game.
 *
 * The game lives at public/games/word-battle.html (Three.js inlined, ~1MB).
 * We embed it in a full-height iframe under a slim MomTalk bar. Progress saves
 * per-browser via the game's localStorage fallback (no native bridge here).
 *
 * NOTE: public/games/word-battle.html is a COPY of the app bundle at
 * momtalk_app_202601/momtalk/assets/modules/word_battle.html — re-copy on update.
 *
 * Route: /word-battle
 */

import { useNavigate } from 'react-router-dom';
import { T } from '../styles/kidsTokens';

export default function WordBattlePage() {
  const navigate = useNavigate();

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        display: 'flex',
        flexDirection: 'column',
        background: '#BFD7EA',
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
          ⚔️ Word Battle
        </span>
        <span style={{ width: 52 }} aria-hidden />
      </header>

      <iframe
        src="/games/word-battle.html"
        title="Word Battle — sight-word reading game"
        allow="autoplay; fullscreen"
        style={{ flex: 1, width: '100%', border: 'none' }}
      />
    </div>
  );
}
