/**
 * ConfettiBurst — fires N emoji particles outward from the center,
 * then unmounts. Use for celebration moments (correct answer, mission
 * accept, real-world reveal). Cheap CSS animation — no canvas.
 *
 * Usage:
 *   <ConfettiBurst show={isCorrect} palette={['🎉','✨','⭐']} />
 *
 * `show` going from false → true triggers the burst. The component
 * mounts inside its parent — make sure the parent is `position:
 * relative` so the particles overlay correctly.
 */
import { useEffect, useState, type CSSProperties } from 'react';

interface Particle {
  id: number;
  emoji: string;
  cx: number;
  cy: number;
  cr: number;
  ttl: number;
  size: number;
}

interface Props {
  show: boolean;
  /** Emoji pool — particles pick from here randomly. */
  palette?: string[];
  /** How many particles to spawn. */
  count?: number;
  /** Particle lifetime ms (default 1100). */
  duration?: number;
  /** Optional CSS for the container — usually leave default. */
  style?: CSSProperties;
}

let seq = 0;

export default function ConfettiBurst({
  show,
  palette = ['🎉', '🎊', '✨', '⭐', '💫'],
  count = 18,
  duration = 1100,
  style,
}: Props) {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    if (!show) return;
    const reduced =
      typeof window !== 'undefined' &&
      window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;
    if (reduced) return;

    const batch: Particle[] = [];
    for (let i = 0; i < count; i++) {
      const angle = -Math.PI / 2 + (Math.random() - 0.5) * Math.PI * 1.4; // mostly upward
      const dist = 90 + Math.random() * 140;
      batch.push({
        id: ++seq,
        emoji: palette[Math.floor(Math.random() * palette.length)],
        cx: Math.cos(angle) * dist,
        cy: Math.sin(angle) * dist,
        cr: (Math.random() - 0.5) * 720,
        ttl: duration + Math.random() * 400,
        size: 16 + Math.round(Math.random() * 14),
      });
    }
    setParticles((prev) => [...prev, ...batch]);
    const tid = window.setTimeout(() => {
      setParticles((prev) => prev.filter((p) => !batch.find((b) => b.id === p.id)));
    }, duration + 600);
    return () => window.clearTimeout(tid);
  }, [show, count, duration, palette]);

  return (
    <div
      aria-hidden
      style={{
        position: 'absolute',
        inset: 0,
        pointerEvents: 'none',
        overflow: 'visible',
        ...style,
      }}
    >
      {particles.map((p) => (
        <span
          key={p.id}
          className="confetti-particle"
          style={
            {
              position: 'absolute',
              left: '50%',
              top: '50%',
              fontSize: p.size,
              lineHeight: 1,
              animation: `confetti-fly ${p.ttl}ms cubic-bezier(.18,.78,.42,1) forwards`,
              ['--cx' as string]: `${p.cx}px`,
              ['--cy' as string]: `${p.cy}px`,
              ['--cr' as string]: `${p.cr}deg`,
            } as CSSProperties
          }
        >
          {p.emoji}
        </span>
      ))}
    </div>
  );
}
