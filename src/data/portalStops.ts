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
    status: 'coming-soon',
  },
  {
    id: 'youtube-creator',
    emoji: '🎬',
    title: 'YouTube\nCreator',
    color: '#E0F2FE',
    themeKey: 'youtube-creator',
    path: '/youtube-creator',
    status: 'coming-soon',
  },
  {
    id: 'cookie-bakery',
    emoji: '🍪',
    title: 'Cookie\nBakery',
    color: '#FFF8F0',
    themeKey: 'cookie-bakery',
    path: '/cookie-bakery',
    status: 'coming-soon',
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
