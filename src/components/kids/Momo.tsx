import {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
  type CSSProperties,
} from 'react';
import { T } from '../../styles/kidsTokens';
import Emo from './Emo';

export type MomoMood =
  | 'happy'
  | 'excited'
  | 'thinking'
  | 'celebrating'
  | 'encouraging'
  | 'sad'
  | 'cool'
  | 'love';

const MOOD_EMOJI: Record<MomoMood, string> = {
  happy: '😊', excited: '🤩', thinking: '🤔', celebrating: '🥳',
  encouraging: '💪', sad: '🥺', cool: '😎', love: '🥰',
};

/** Body emoji defaults per mood — Momo "expresses" via emoji choice. */
const MOOD_BODY: Record<MomoMood, string> = {
  happy: '🐻', excited: '🐻', thinking: '🐻', celebrating: '🐻',
  encouraging: '🐻', sad: '🐻', cool: '🐻', love: '🐻',
};

const MOOD_ANIM: Record<MomoMood, { name: string; dur: string }> = {
  happy:       { name: 'momo-bob',       dur: '2.8s' },
  excited:     { name: 'momo-excited',   dur: '1.2s' },
  thinking:    { name: 'momo-think',     dur: '2.4s' },
  celebrating: { name: 'momo-celebrate', dur: '1.4s' },
  encouraging: { name: 'momo-bob',       dur: '1.8s' },
  sad:         { name: 'momo-sad',       dur: '3.2s' },
  cool:        { name: 'momo-cool',      dur: '3.0s' },
  love:        { name: 'momo-love',      dur: '1.6s' },
};

/** Softer pastel ring per mood — replaces the harsh hot-pink-only look. */
const MOOD_RING: Record<MomoMood, string> = {
  happy:       '#FFE7C2',
  excited:     '#FFD9E6',
  thinking:    '#E4DCFF',
  celebrating: '#FFE6A8',
  encouraging: '#D7F0E4',
  sad:         '#DDEAFF',
  cool:        '#D6EEFB',
  love:        '#FFD2E2',
};

const DEFAULT_QUIPS: Record<MomoMood, string[]> = {
  happy:       ['Hi friend!', 'Glad you came!', 'High five! ✋'],
  excited:     ['Ooooh!', "Let's go!", 'This part rocks!'],
  thinking:    ['Hmm…', 'Big brain time.', 'Lemme think…'],
  celebrating: ['Woohoo!', 'YESSS 🎉', "You're on fire!"],
  encouraging: ['You got this!', 'Keep going!', 'I believe in you!'],
  sad:         ['Aww…', 'Try again?', 'I still love you.'],
  cool:        ['Smooth.', 'Easy.', 'Stylish.'],
  love:        ["You're my favorite!", 'Big hug 🤗', "You're the best!"],
};

const MOOD_CYCLE: MomoMood[] = [
  'happy', 'excited', 'celebrating', 'love', 'cool', 'thinking', 'encouraging',
];

interface Sparkle {
  id: number;
  dx: number;
  dy: number;
  rot: number;
  ttl: number;
}
let sparkSeq = 0;

interface MomoProps {
  mood?: MomoMood;
  msg?: string;
  size?: number;
  /** Body emoji override. Defaults to the bear cub. */
  bodyEmoji?: string;
  name?: string;
  avatarOnly?: boolean;
  /** Disable typewriter for the speech bubble. */
  instant?: boolean;
  onTap?: () => void;
  quips?: string[];
  style?: CSSProperties;
}

/** Sleep when there's been no user input for `ms`. */
function useIdleSleep(ms: number) {
  const [asleep, setAsleep] = useState(false);
  useEffect(() => {
    let tid: number | undefined;
    const reset = () => {
      setAsleep(false);
      if (tid) window.clearTimeout(tid);
      tid = window.setTimeout(() => setAsleep(true), ms);
    };
    reset();
    const events = ['pointermove', 'pointerdown', 'keydown', 'wheel', 'touchstart'];
    events.forEach((e) => window.addEventListener(e, reset, { passive: true }));
    return () => {
      events.forEach((e) => window.removeEventListener(e, reset));
      if (tid) window.clearTimeout(tid);
    };
  }, [ms]);
  return asleep;
}

/**
 * Momo — clean, polished mascot.
 *
 * Design choices:
 *   • Single high-quality twemoji body (no homebrew SVG features)
 *   • Pastel mood ring around the avatar — replaces harsh hot-pink wash
 *   • Subtle idle bob per mood; click → soft squash + 3-4 sparkle pop
 *   • Mood badge floats bottom-right with a single mood emoji
 *   • After 25s idle → sleeps with 💤; any input wakes him
 *   • Speech bubble: clean white card with typewriter reveal
 *
 * No drag, no WILD mode, no eye tracking, no homemade arm — just polish.
 */
export default function Momo({
  mood: moodProp = 'happy',
  msg,
  size = 60,
  bodyEmoji,
  name = 'Momo',
  avatarOnly = false,
  instant = false,
  onTap,
  quips,
  style,
}: MomoProps) {
  // Local mood (can be cycled by taps when no onTap given)
  const [localMood, setLocalMood] = useState<MomoMood>(moodProp);
  useEffect(() => setLocalMood(moodProp), [moodProp]);
  const mood = localMood;
  const idle = MOOD_ANIM[mood];
  const ring = MOOD_RING[mood];
  const body = bodyEmoji ?? MOOD_BODY[mood];

  // Tap reactions
  const [tapKey, setTapKey] = useState(0);
  const [sparkles, setSparkles] = useState<Sparkle[]>([]);
  const [extraMsg, setExtraMsg] = useState<string | null>(null);
  const displayedMsg = extraMsg ?? msg;

  const popSparkles = useCallback(() => {
    const count = 4;
    const ts = Date.now();
    const next: Sparkle[] = [];
    for (let i = 0; i < count; i++) {
      const angle = -Math.PI / 2 + (Math.random() - 0.5) * Math.PI * 0.9;
      const dist = 32 + Math.random() * 18;
      next.push({
        id: ++sparkSeq + ts,
        dx: Math.cos(angle) * dist,
        dy: Math.sin(angle) * dist,
        rot: (Math.random() - 0.5) * 60,
        ttl: 750 + Math.random() * 250,
      });
    }
    setSparkles((prev) => [...prev, ...next]);
    const tid = window.setTimeout(() => {
      setSparkles((prev) => prev.filter((s) => !next.find((n) => n.id === s.id)));
    }, 1100);
    return () => window.clearTimeout(tid);
  }, []);

  const handleTap = useCallback(() => {
    setTapKey((k) => k + 1);
    popSparkles();
    if (onTap) { onTap(); return; }
    if (!msg) {
      const idx = MOOD_CYCLE.indexOf(mood);
      const nextMood = MOOD_CYCLE[(idx + 1 + MOOD_CYCLE.length) % MOOD_CYCLE.length];
      setLocalMood(nextMood);
      const pool = quips && quips.length > 0 ? quips : DEFAULT_QUIPS[nextMood];
      setExtraMsg(pool[Math.floor(Math.random() * pool.length)]);
    }
  }, [mood, msg, onTap, quips, popSparkles]);

  // Sleep
  const asleep = useIdleSleep(25_000);
  const effectiveAnim = asleep ? 'momo-bob 5s ease-in-out infinite' : `${idle.name} ${idle.dur} ease-in-out infinite`;

  // Typewriter for the bubble
  const [typedChars, setTypedChars] = useState(0);
  const targetRef = useRef('');
  useEffect(() => {
    const target = displayedMsg ?? '';
    targetRef.current = target;
    if (!target || instant) { setTypedChars(target.length); return; }
    setTypedChars(0);
    let i = 0;
    const total = target.length;
    const stepMs = Math.max(14, Math.min(36, Math.round(900 / Math.max(8, total))));
    const tick = () => {
      if (targetRef.current !== target) return;
      i++;
      setTypedChars(i);
      if (i < total) tid = window.setTimeout(tick, stepMs);
    };
    let tid = window.setTimeout(tick, stepMs);
    return () => window.clearTimeout(tid);
  }, [displayedMsg, instant]);
  const skipTypewriter = () => setTypedChars(targetRef.current.length);
  const showBubble = !avatarOnly && displayedMsg;
  const typedText = displayedMsg ? displayedMsg.slice(0, typedChars) : '';
  const stillTyping = displayedMsg ? typedChars < displayedMsg.length : false;

  // Compose avatar animation
  const avatarAnim = useMemo(() => {
    if (tapKey > 0) return `momo-tap 380ms ease-out, ${effectiveAnim} 380ms`;
    return effectiveAnim;
  }, [effectiveAnim, tapKey]);

  return (
    <div style={{ display: 'flex', alignItems: 'flex-start', gap: 12, ...style }}>
      <div
        style={{
          position: 'relative',
          flexShrink: 0,
          width: size + 14,
          height: size + 14,
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {/* Soft pastel ring — replaces the harsh hot pink */}
        <div
          aria-hidden
          style={{
            position: 'absolute',
            inset: 0,
            borderRadius: '50%',
            background: ring,
            transition: 'background 400ms ease',
          }}
        />
        {/* Halo pulse on each tap */}
        <div
          key={`halo-${tapKey}`}
          aria-hidden
          style={{
            position: 'absolute',
            inset: 0,
            borderRadius: '50%',
            background: T.white,
            opacity: 0,
            animation: tapKey > 0 ? 'momo-halo 520ms ease-out' : 'none',
            pointerEvents: 'none',
          }}
        />
        {/* Sleep "Z" */}
        {asleep && (
          <span
            aria-hidden
            style={{
              position: 'absolute',
              top: -2, right: -4,
              fontSize: 14,
              pointerEvents: 'none',
              animation: 'momo-zzz 1.8s ease-in-out infinite',
              zIndex: 3,
            }}
          >
            💤
          </span>
        )}

        <button
          type="button"
          onClick={handleTap}
          aria-label={`${name} the mascot`}
          title="Tap me"
          style={{
            position: 'relative',
            padding: 0,
            background: 'transparent',
            border: 'none',
            cursor: 'pointer',
            width: size + 8,
            height: size + 8,
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 2,
            outline: 'none',
          }}
        >
          <div
            key={tapKey}
            style={{
              width: size,
              height: size,
              background: T.white,
              borderRadius: '50%',
              border: `3px solid ${T.green}`,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: `0 4px 0 ${T.green}, 0 6px 14px rgba(22,101,52,0.18)`,
              animation: avatarAnim,
              transformOrigin: 'center',
              willChange: 'transform',
              transition: 'background 400ms ease',
            }}
          >
            <Emo size={size * 0.62}>{body}</Emo>
          </div>
          {/* Mood badge */}
          <div
            key={`badge-${mood}`}
            style={{
              position: 'absolute',
              bottom: 2, right: 2,
              background: T.white,
              borderRadius: '50%',
              border: `2px solid ${T.green}`,
              width: size * 0.42,
              height: size * 0.42,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 2px 4px rgba(0,0,0,0.12)',
              animation: 'momo-badge-pop 420ms ease-out',
              zIndex: 3,
            }}
          >
            <Emo size={size * 0.26}>{MOOD_EMOJI[mood]}</Emo>
          </div>
        </button>

        {/* Sparkle pops on tap */}
        <div
          aria-hidden
          style={{
            position: 'absolute',
            inset: 0,
            pointerEvents: 'none',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 1,
          }}
        >
          {sparkles.map((s) => (
            <span
              key={s.id}
              style={{
                position: 'absolute',
                left: '50%',
                top: '50%',
                fontSize: 14,
                lineHeight: 1,
                pointerEvents: 'none',
                animation: `momo-particle-burst ${s.ttl}ms ease-out forwards`,
                ['--dx' as keyof CSSProperties as string]: `${s.dx}px`,
                ['--dy' as keyof CSSProperties as string]: `${s.dy}px`,
                ['--rot' as keyof CSSProperties as string]: `${s.rot}deg`,
              } as CSSProperties}
            >
              ✨
            </span>
          ))}
        </div>
      </div>

      {/* Speech bubble */}
      {showBubble && (
        <div
          key={`bubble-${displayedMsg}`}
          onClick={stillTyping ? skipTypewriter : undefined}
          role={stillTyping ? 'button' : undefined}
          style={{
            background: T.white,
            border: `2px solid ${T.green}`,
            borderRadius: '20px 20px 20px 6px',
            padding: '12px 16px',
            fontSize: 15,
            color: T.text,
            lineHeight: 1.45,
            maxWidth: 320,
            boxShadow: '0 6px 0 rgba(22,101,52,0.10), 0 10px 18px rgba(22,101,52,0.10)',
            position: 'relative',
            cursor: stillTyping ? 'pointer' : 'default',
            animation: 'momo-bubble-in 240ms ease-out',
            transformOrigin: 'bottom left',
          }}
        >
          <b style={{ color: T.green, fontWeight: 700 }}>{name}</b>
          <span style={{ color: T.sub, margin: '0 6px' }}>·</span>
          {typedText}
          {stillTyping && (
            <span
              aria-hidden
              style={{
                display: 'inline-block',
                marginLeft: 2,
                width: 2,
                height: '0.95em',
                verticalAlign: 'text-bottom',
                background: T.green,
                animation: 'momo-caret 0.9s steps(1) infinite',
              }}
            />
          )}
        </div>
      )}
    </div>
  );
}
