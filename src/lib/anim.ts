/**
 * Lightweight animation utilities for the kids-mode UI.
 * Ported (with TS) from /momtalk_module/new/kids_business_concept.html.
 *
 * Philosophy: opacity + translateY only. No spring physics, no bounce.
 * Calm, guided reveals that don't compete with content.
 */

import { useState, useEffect, useRef } from 'react';

/**
 * Returns an array of booleans that flip true one-by-one with a delay.
 * Used to stagger reveal of N items.
 *
 * @example
 *   const vis = useStaggered(active, items.length, 150);
 *   {items.map((it, i) => <FadeIn show={vis[i]}><Item {...it} /></FadeIn>)}
 */
export function useStaggered(
  trigger: boolean,
  count: number,
  delayMs: number = 150,
): boolean[] {
  const [vis, setVis] = useState<boolean[]>(() =>
    Array(count).fill(false),
  );

  useEffect(() => {
    if (!trigger) {
      setVis(Array(count).fill(false));
      return;
    }
    const timers: ReturnType<typeof setTimeout>[] = [];
    for (let i = 0; i < count; i++) {
      timers.push(
        setTimeout(() => {
          setVis(prev => {
            const next = [...prev];
            next[i] = true;
            return next;
          });
        }, i * delayMs),
      );
    }
    return () => timers.forEach(clearTimeout);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [trigger, count, delayMs]);

  return vis;
}

/**
 * Returns a cycling step index 0..total-1, advancing every periodMs.
 * Used to drive multi-frame concept animations (e.g., profit flow).
 *
 * @example
 *   const step = useAnimStep(active, 4, 2000);
 *   <div>{labels[step]}</div>
 */
export function useAnimStep(
  active: boolean,
  total: number,
  periodMs: number = 2000,
): number {
  const [step, setStep] = useState(0);

  useEffect(() => {
    if (!active) {
      setStep(0);
      return;
    }
    const id = setInterval(
      () => setStep(s => (s + 1) % total),
      periodMs,
    );
    return () => clearInterval(id);
  }, [active, total, periodMs]);

  return step;
}

/**
 * Parses emojis inside a target element into Twemoji SVGs.
 * Re-runs on every render (cheap — twemoji caches).
 *
 * @example
 *   const ref = useTwemoji<HTMLDivElement>();
 *   return <div ref={ref}>Hello 🐔!</div>;
 */
export function useTwemoji<T extends HTMLElement = HTMLElement>() {
  const ref = useRef<T>(null);

  useEffect(() => {
    if (ref.current && (window as any).twemoji) {
      (window as any).twemoji.parse(ref.current, {
        folder: 'svg',
        ext: '.svg',
      });
    }
  });

  return ref;
}
