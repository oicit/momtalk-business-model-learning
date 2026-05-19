/**
 * Kids design tokens — visual language for the business-model-learning app.
 * Inspired by /momtalk_module/new/kids_business_concept.html (Penny the Pig).
 *
 * Use these everywhere instead of raw hex values so the palette stays unified.
 */

export const T = {
  green: '#166534', // primary brand / outlines
  pink: '#FF65C5',
  yellow: '#FFCB65',
  blue: '#65C9FF',
  lavender: '#7C5CFC',
  coral: '#FF6B6B',
  mint: '#CCFBF1',
  canvas: '#FFF3EC', // page background
  text: '#1E293B',
  sub: '#64748B',
  white: '#FFFFFF',
} as const;

/** Solid offset shadow used everywhere — never blurred. */
export const shadow = (size: number = 5, color: string = T.green): string =>
  `${size}px ${size}px 0 ${color}`;

/** Soft alpha-shadow for cards (still solid offset, lower opacity). */
export const shadowSoft = (size: number = 7): string =>
  `${size}px ${size}px 0 rgba(22,101,52,0.12)`;

/** Standard border (3px solid green). */
export const border = (size: number = 3, color: string = T.green): string =>
  `${size}px solid ${color}`;

/** Card radius scales. */
export const radius = {
  pill: 999,
  card: 22,
  cardLg: 24,
  chip: 14,
} as const;

export type LessonTheme = {
  /** Accent color used for headings + active elements. */
  accent: string;
  /** Page background gradient. */
  bg: string;
  /** Optional card background (defaults to white). */
  cardBg?: string;
};

const gradient = (to: string): string =>
  `linear-gradient(135deg, ${T.canvas} 0%, ${to} 100%)`;

/**
 * Per-topic themes. Keys correspond to lesson slugs OR concept slugs.
 * Add new themes as new lessons get added.
 */
export const themes = {
  // Money/concept themes (from the inspiration board game)
  money: { accent: T.green, bg: gradient(T.mint) },
  business: { accent: T.yellow, bg: gradient('#FFFDE8') },
  company: { accent: T.blue, bg: gradient('#E8F4FD') },
  stocks: { accent: T.pink, bg: gradient('#FDE8F4') },
  bonds: { accent: T.lavender, bg: gradient('#F0E8FD') },
  saving: { accent: T.pink, bg: gradient('#FFF0F5') },
  taxes: { accent: T.coral, bg: gradient('#FFF5F0') },
  budget: { accent: T.yellow, bg: gradient('#FFFFF0') },
  entrepreneur: { accent: T.pink, bg: gradient('#FFE8F0') },
  supply: { accent: T.blue, bg: gradient('#E8F0FF') },
  debt: { accent: T.coral, bg: gradient('#FFE8E8') },
  inflation: { accent: T.coral, bg: gradient('#FFF0E8') },
  // Product-specific themes (our actual lessons)
  'chick-fil-a': { accent: T.coral, bg: gradient('#FFE5EA') },
  'garage-sale': { accent: T.pink, bg: gradient('#FFE5EC') },
  'lemonade-stand': { accent: T.yellow, bg: gradient('#FFFDE8') },
  'pet-shop': { accent: T.lavender, bg: gradient('#EDE9FE') },
  'youtube-creator': { accent: T.blue, bg: gradient('#E0F2FE') },
  'cookie-bakery': { accent: T.coral, bg: gradient('#FFF8F0') },
  // Special scenes
  portal: { accent: T.green, bg: T.canvas },
  certificate: { accent: T.yellow, bg: T.canvas },
} as const satisfies Record<string, LessonTheme>;

export type ThemeKey = keyof typeof themes;

export function getTheme(key: ThemeKey | string): LessonTheme {
  return (themes as Record<string, LessonTheme>)[key] ?? themes.portal;
}
