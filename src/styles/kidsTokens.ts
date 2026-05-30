/**
 * Kids design tokens — visual language for the business-model-learning app.
 * Inspired by /momtalk_module/new/kids_business_concept.html (Penny the Pig).
 *
 * Use these everywhere instead of raw hex values so the palette stays unified.
 */

/**
 * Color tokens — aligned with the MomTalk "Lush Memphis" design system
 * (momtalk_UI_system/MomTalk Design System/colors_and_type.css).
 *
 * Brand structural green is `#2D9B6E` (Lush Green) per MomTalk. We keep
 * the same Memphis accents (pink/yellow/sky/mint) and the warm cream
 * canvas `#FFF5EC`.
 */
export const T = {
  green: '#2D9B6E', // MomTalk Lush Green
  pink: '#FF65C5', // Bubbly Pink
  yellow: '#FFCB65', // Soft Yellow
  blue: '#65C9FF', // Sky Blue
  lavender: '#7C5CFC',
  coral: '#FF6B6B',
  mint: '#CCFBF1',
  canvas: '#FFF5EC', // MomTalk warm off-white
  text: '#1E293B',
  sub: '#64748B',
  white: '#FFFFFF',
} as const;

/**
 * MomTalk "Bauhaus" shadow — large hard offset green at 10% alpha.
 * Used on big cards and hero containers.
 */
export const shadowBauhaus = '12px 12px 0px rgba(45,155,110,0.1)';
/**
 * MomTalk "Memphis" shadow — smaller, fully opaque green.
 * Used on chips, badges, small interactive elements.
 */
export const shadowMemphis = `5px 5px 0px ${'#2D9B6E'}`;

/** MomTalk-faithful borders. */
export const frame = '10px solid #2D9B6E';
export const frameThin = '3px solid #2D9B6E';
export const frameHair = '2px solid #2D9B6E';

/** Solid offset shadow used everywhere — never blurred. */
export const shadow = (size: number = 5, color: string = T.green): string =>
  `${size}px ${size}px 0 ${color}`;

/** Soft alpha-shadow for cards (still solid offset, lower opacity). */
export const shadowSoft = (size: number = 7): string =>
  `${size}px ${size}px 0 rgba(22,101,52,0.12)`;

/** Standard border (3px solid green). */
export const border = (size: number = 3, color: string = T.green): string =>
  `${size}px solid ${color}`;

/** Card radius scales — aligned with MomTalk's huge corner radii. */
export const radius = {
  pill: 999,
  chip: 14,
  small: 20,
  card: 24,     // medium cards
  cardLg: 36,   // module / gamification cards
  hero: 48,     // hero / large feature cards
  /** Asymmetric speech-bubble radius (top-right-bottom-bottom). */
  speech: '4px 32px 32px 32px',
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
  'index-funds': { accent: T.green, bg: gradient(T.mint) },
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
  mcdonalds: { accent: T.coral, bg: gradient('#FFE8E5') },
  inventor: { accent: T.lavender, bg: gradient('#F0E8FD') },
  'deal-maker': { accent: T.yellow, bg: gradient('#FFF8DC') },
  charity: { accent: T.pink, bg: gradient('#FFE5EE') },
  risk: { accent: T.blue, bg: gradient('#E8F4FD') },
  subscription: { accent: T.blue, bg: gradient('#DBEAFE') },
  roblox: { accent: T.coral, bg: gradient('#FFEDED') },
  costco: { accent: T.coral, bg: gradient('#FFE5E5') },
  amazon: { accent: T.yellow, bg: gradient('#FFF0DC') },
  lego: { accent: T.yellow, bg: gradient('#FFFAE5') },
  disney: { accent: T.pink, bg: gradient('#FCE7F3') },
  hustle: { accent: T.blue, bg: gradient('#E0F4FE') },
  marketing: { accent: T.pink, bg: gradient('#FEE5F2') },
  research: { accent: T.lavender, bg: gradient('#EEEAFE') },
  etsy: { accent: T.coral, bg: gradient('#FFEBE0') },
  pizza: { accent: T.coral, bg: gradient('#FFE8E0') },
  'startup-pitch': { accent: T.green, bg: gradient('#E5FAF1') },
  'app-maker': { accent: T.blue, bg: gradient('#E0EAFE') },
  // Special scenes
  portal: { accent: T.green, bg: T.canvas },
  certificate: { accent: T.yellow, bg: T.canvas },
} as const satisfies Record<string, LessonTheme>;

export type ThemeKey = keyof typeof themes;

export function getTheme(key: ThemeKey | string): LessonTheme {
  return (themes as Record<string, LessonTheme>)[key] ?? themes.portal;
}
