/**
 * Board-game map stops for the home Portal.
 *
 * Each stop is one card on the winding adventure path. Visited state is
 * derived from useProgress.isCompleted(progressKey).
 *
 * Adding a new lesson:
 *   1. Add a theme to kidsTokens.ts
 *   2. Add a stop here with status: 'available' and matching progressKey
 *   3. Add the route in App.tsx
 */

import { T, themes, type ThemeKey } from '../styles/kidsTokens';

export type StopStatus = 'available' | 'coming-soon';

export interface MapStop {
  /** Unique stable id. */
  id: string;
  /** Top emoji shown on the tile. */
  emoji: string;
  /** Title shown below emoji (use \n for line break). */
  title: string;
  /** Background color for the tile. */
  color: string;
  /** Theme key (used by the destination lesson page). */
  themeKey: ThemeKey;
  /** Route to navigate to on tap. */
  path: string;
  /** Whether the stop is playable or locked. */
  status: StopStatus;
  /**
   * Key used by useProgress to mark this stop as visited.
   * Omit for non-lesson stops (intro, cards, certificate).
   */
  progressKey?: string;
}

export const portalStops: MapStop[] = [
  {
    id: 'start',
    emoji: '🏁',
    title: 'Start!',
    color: T.yellow,
    themeKey: 'portal',
    path: '#',
    status: 'available',
  },
  {
    id: 'business-101',
    emoji: '🧠',
    title: 'Business\n101',
    color: '#FFFDE8',
    themeKey: 'business',
    path: '/business-101',
    status: 'available',
    progressKey: 'business-101',
  },
  {
    id: 'garage-sale',
    emoji: '🏷️',
    title: 'Garage\nSale',
    color: '#FFE5EC',
    themeKey: 'garage-sale',
    path: '/garage-sale',
    status: 'available',
    progressKey: 'garage-sale',
  },
  {
    id: 'chick-fil-a',
    emoji: '🐔',
    title: 'Chick-fil-A',
    color: '#FFE5EA',
    themeKey: 'chick-fil-a',
    path: '/chick-fil-a',
    status: 'available',
    progressKey: 'chick-fil-a',
  },
  {
    id: 'lemonade-stand',
    emoji: '🍋',
    title: 'Lemonade\nStand',
    color: '#FFFDE8',
    themeKey: 'lemonade-stand',
    path: '/lemonade-stand',
    status: 'available',
    progressKey: 'lemonade-stand',
  },
  {
    id: 'pet-shop',
    emoji: '🐾',
    title: 'Pet\nShop',
    color: '#EDE9FE',
    themeKey: 'pet-shop',
    path: '/pet-shop',
    status: 'available',
    progressKey: 'pet-shop',
  },
  {
    id: 'youtube-creator',
    emoji: '🎬',
    title: 'YouTube\nCreator',
    color: '#E0F2FE',
    themeKey: 'youtube-creator',
    path: '/youtube-creator',
    status: 'available',
    progressKey: 'youtube-creator',
  },
  {
    id: 'cookie-bakery',
    emoji: '🍪',
    title: 'Cookie\nBakery',
    color: '#FFF8F0',
    themeKey: 'cookie-bakery',
    path: '/cookie-bakery',
    status: 'available',
    progressKey: 'cookie-bakery',
  },
  {
    id: 'piggy-bank',
    emoji: '🏦',
    title: 'Piggy\nBank',
    color: '#FFF0F5',
    themeKey: 'saving',
    path: '/piggy-bank',
    status: 'available',
    progressKey: 'piggy-bank',
  },
  {
    id: 'stock-market',
    emoji: '📈',
    title: 'Stock\nMarket',
    color: '#FDE8F4',
    themeKey: 'stocks',
    path: '/stock-market',
    status: 'available',
    progressKey: 'stock-market',
  },
  {
    id: 'mcdonalds',
    emoji: '🍔',
    title: 'McDonald\'s',
    color: '#FFE8E5',
    themeKey: 'mcdonalds',
    path: '/mcdonalds',
    status: 'available',
    progressKey: 'mcdonalds',
  },
  {
    id: 'word-battle',
    emoji: '⚔️',
    title: 'Word\nBattle',
    color: '#E0F2FE',
    themeKey: 'portal',
    path: '/word-battle',
    status: 'available',
  },
  {
    id: 'stem-lab',
    emoji: '🔬',
    title: 'STEM\nLab',
    color: '#E0F2FE',
    themeKey: 'portal',
    path: '/stem-lab',
    status: 'available',
  },
  {
    id: 'cards',
    emoji: '🃏',
    title: 'My\nCards',
    color: T.mint,
    themeKey: 'portal',
    path: '/cards',
    status: 'available',
  },
  {
    id: 'finish',
    emoji: '🏆',
    title: 'Finish!',
    color: themes.certificate.bg,
    themeKey: 'certificate',
    path: '/certificate',
    status: 'available',
  },
];

/** How many stops have a `progressKey` (i.e. count toward completion). */
export const lessonStopCount = portalStops.filter((s) => s.progressKey).length;
