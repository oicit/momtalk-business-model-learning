// src/lib/difficulty.ts

import type { DifficultyLevel } from '../hooks/useAdaptive';

export interface DifficultyConfig {
  vocabularyLevel: 'simple' | 'standard' | 'advanced';
  quizOptionsCount: number;
  showHints: boolean;
  momoPresence: 'constant' | 'checkpoints' | 'on-demand';
  maxLessonScreens: number;
}

const DIFFICULTY_CONFIGS: Record<DifficultyLevel, DifficultyConfig> = {
  easy: {
    vocabularyLevel: 'simple',
    quizOptionsCount: 3,
    showHints: true,
    momoPresence: 'constant',
    maxLessonScreens: 8,
  },
  medium: {
    vocabularyLevel: 'standard',
    quizOptionsCount: 4,
    showHints: false,
    momoPresence: 'checkpoints',
    maxLessonScreens: 12,
  },
  hard: {
    vocabularyLevel: 'advanced',
    quizOptionsCount: 4,
    showHints: false,
    momoPresence: 'on-demand',
    maxLessonScreens: 15,
  },
};

export function getDifficultyConfig(level: DifficultyLevel): DifficultyConfig {
  return DIFFICULTY_CONFIGS[level];
}

// Vocabulary adaptation helpers
export function adaptText(text: string, level: DifficultyLevel): string {
  if (level === 'easy') {
    // Replace business jargon with kid-friendly terms
    return text
      .replace(/revenue/gi, 'money you earn')
      .replace(/expenses/gi, 'money you spend')
      .replace(/profit/gi, 'money you keep')
      .replace(/inventory/gi, 'stuff to sell')
      .replace(/marketing/gi, 'telling people about your sale')
      .replace(/customer service/gi, 'being nice to buyers')
      .replace(/supply chain/gi, 'where things come from')
      .replace(/franchise/gi, 'copying a business')
      .replace(/brand/gi, 'your business name and style')
      .replace(/negotiate/gi, 'talk about the price');
  }
  if (level === 'hard') {
    // Add business terminology annotations
    return text
      .replace(/money you earn/gi, 'revenue')
      .replace(/money you spend/gi, 'expenses')
      .replace(/money you keep/gi, 'profit (revenue minus expenses)');
  }
  return text;
}

// Pacing based on quiz performance
export interface PacingResult {
  skipReview: boolean;
  showBonusContent: boolean;
  addExtraPractice: boolean;
}

export function getPacing(quizScore: number): PacingResult {
  if (quizScore > 80) {
    return { skipReview: true, showBonusContent: true, addExtraPractice: false };
  }
  if (quizScore >= 50) {
    return { skipReview: false, showBonusContent: false, addExtraPractice: false };
  }
  return { skipReview: false, showBonusContent: false, addExtraPractice: true };
}
