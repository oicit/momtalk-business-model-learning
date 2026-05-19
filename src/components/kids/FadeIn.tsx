import { useEffect, useState } from 'react';
import type { CSSProperties, ReactNode } from 'react';

interface FadeInProps {
  /** Trigger condition. When true, fades in. When false, fades out instantly. */
  show: boolean;
  /** Delay before the fade-in starts, in ms. */
  delay?: number;
  /** Duration of the fade transition, in ms. */
  duration?: number;
  /** Slide-up distance during fade-in, in px. */
  slide?: number;
  children: ReactNode;
  style?: CSSProperties;
}

/**
 * Fade-in + slight slide-up entrance.
 * Replaces all spring/bounce animations with one calm motion.
 */
export default function FadeIn({
  show,
  delay = 0,
  duration = 400,
  slide = 12,
  children,
  style,
}: FadeInProps) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!show) {
      setVisible(false);
      return;
    }
    const id = setTimeout(() => setVisible(true), delay);
    return () => clearTimeout(id);
  }, [show, delay]);

  return (
    <div
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : `translateY(${slide}px)`,
        transition: `opacity ${duration}ms ease, transform ${duration}ms ease`,
        ...style,
      }}
    >
      {children}
    </div>
  );
}
