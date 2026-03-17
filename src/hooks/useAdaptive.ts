// src/hooks/useAdaptive.ts

export type DifficultyLevel = 'easy' | 'medium' | 'hard';

export interface ThemeContext {
  childName: string;
  interests: string[];
  personality: string[];
  examples: ThemedExample[];
}

export interface ThemedExample {
  item: string;
  price: string;
  category: string;
}

const INTEREST_THEMES: Record<string, { items: ThemedExample[] }> = {
  robotics: {
    items: [
      { item: 'LEGO Mindstorms set', price: '$15', category: 'tech' },
      { item: 'Arduino starter kit', price: '$8', category: 'tech' },
      { item: 'Robot arm toy', price: '$12', category: 'tech' },
    ],
  },
  'monster-trucks': {
    items: [
      { item: 'Monster Jam truck', price: '$10', category: 'toys' },
      { item: 'Hot Wheels set', price: '$6', category: 'toys' },
      { item: 'Racing helmet toy', price: '$8', category: 'toys' },
    ],
  },
  costumes: {
    items: [
      { item: 'Spider-Man suit', price: '$12', category: 'costumes' },
      { item: 'Batman cape', price: '$7', category: 'costumes' },
      { item: 'Princess dress', price: '$10', category: 'costumes' },
    ],
  },
  swimming: {
    items: [
      { item: 'Swim goggles', price: '$5', category: 'sports' },
      { item: 'Pool float', price: '$8', category: 'sports' },
      { item: 'Swim fins', price: '$10', category: 'sports' },
    ],
  },
  LEGO: {
    items: [
      { item: 'LEGO City set', price: '$15', category: 'toys' },
      { item: 'LEGO minifigures pack', price: '$5', category: 'toys' },
      { item: 'LEGO Technic car', price: '$20', category: 'toys' },
    ],
  },
};

const DEFAULT_EXAMPLES: ThemedExample[] = [
  { item: 'Toy dinosaur', price: '$5', category: 'toys' },
  { item: 'Board game', price: '$8', category: 'games' },
  { item: 'Stuffed animal', price: '$4', category: 'toys' },
];

export function getDifficultyLevel(age: number): DifficultyLevel {
  if (age <= 6) return 'easy';
  if (age <= 8) return 'medium';
  return 'hard';
}

export function getThemeContext(
  childName: string,
  interests: string[],
  personality: string[],
): ThemeContext {
  // Find themed examples based on first matching interest
  let examples = DEFAULT_EXAMPLES;
  for (const interest of interests) {
    const theme = INTEREST_THEMES[interest];
    if (theme) {
      examples = theme.items;
      break;
    }
  }

  return { childName, interests, personality, examples };
}

// Hook version for React components
export function useAdaptive(child: { childName: string; childAge: number; interests: string[]; personality: string[] } | null) {
  const difficultyLevel = child ? getDifficultyLevel(child.childAge) : 'medium' as DifficultyLevel;
  const themeContext = child
    ? getThemeContext(child.childName, child.interests, child.personality)
    : { childName: 'Explorer', interests: [], personality: [], examples: DEFAULT_EXAMPLES };

  return { difficultyLevel, themeContext };
}
