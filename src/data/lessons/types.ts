/**
 * Lesson data types — content lives as TypeScript objects under
 * src/data/lessons/<slug>.ts. The LessonScaffold component walks the
 * `beats[]` array and renders each beat in order.
 *
 * Why data not code? See docs/specs/2026-05-13-kids-redesign-spec.md §1.
 */

import type { ThemeKey } from '../../styles/kidsTokens';
import type { MomoMood } from '../../components/kids/Momo';
import type { DifficultyLevel } from '../../hooks/useAdaptive';

/** Text that varies by difficulty, or a plain string. */
export type AdaptiveText = string | Record<DifficultyLevel, string>;

export interface ConceptCardDef {
  emoji: string;
  title: string;
  desc: AdaptiveText;
  /** Background color for the card. Defaults to white if omitted. */
  color?: string;
}

export interface QuizQuestion {
  q: string;
  options: string[];
  /** Index into `options` of the correct answer. */
  correct: number;
}

export type MiniGameKey = 'lemonade-stand';

export type LessonBeat =
  | { kind: 'intro'; mood?: MomoMood; text: AdaptiveText }
  | {
      kind: 'video';
      /** Path to the video file (under /public). */
      src: string;
      title: string;
      durationLabel?: string;
    }
  | {
      kind: 'concept-cards';
      heading?: string;
      subheading?: string;
      cards: ConceptCardDef[];
    }
  | {
      kind: 'mini-game';
      heading?: string;
      subheading?: string;
      game: MiniGameKey;
      /**
       * If true, completing the game (any positive profit / any play) marks
       * the lesson complete and awards the card. If a quiz beat also runs
       * later, both can mark completion — last writer wins.
       */
      completesLesson?: boolean;
    }
  | {
      kind: 'quiz';
      heading?: string;
      subheading?: string;
      questions: QuizQuestion[];
      /** Base XP awarded on quiz submit. Default 100. */
      xpReward?: number;
      /** Base skill scores, scaled by % correct. */
      skillScores?: Record<string, number>;
    }
  | {
      kind: 'outro';
      mood?: MomoMood;
      text: AdaptiveText;
      bonusTip?: AdaptiveText;
    }
  | {
      kind: 'real-world-mission';
      mission: RealWorldMissionDef;
    }
  | {
      /** Case-study decision — kid picks a path, gets per-choice feedback, then the real-world reveal. */
      kind: 'decision';
      heading?: string;
      scenario: AdaptiveText;
      question: AdaptiveText;
      choices: DecisionChoice[];
      /** Shown after the kid has explored at least one choice. */
      realWorldReveal: AdaptiveText;
    }
  | {
      /** Socratic question chain — each layer reveals when the kid presses "Show me". */
      kind: 'think-deeper';
      heading?: string;
      intro?: AdaptiveText;
      layers: ThinkLayer[];
    }
  | {
      /** Open-ended creativity prompt — kid types their own ideas, Momo offers hints after. */
      kind: 'brainstorm';
      heading?: string;
      prompt: AdaptiveText;
      /** Minimum entries the kid should type before "Done" is enabled. Default 3. */
      minItems?: number;
      /** Placeholder text inside the empty inputs. */
      placeholder?: string;
      /** Bulleted hints revealed after the kid submits. */
      hints: AdaptiveText[];
      /** Optional closing thought after hints. */
      closer?: AdaptiveText;
    }
  | {
      /** Math challenge — kid solves a real numeric problem with adaptive difficulty. */
      kind: 'calc-challenge';
      heading?: string;
      setup: AdaptiveText;
      /** Numeric variables + formulas to compute the answer. */
      problem: CalcProblem;
      /** Steps shown after the kid submits or asks for the explanation. */
      walkthrough: AdaptiveText;
    }
  | {
      /** Connect-the-dots: same concept showing up in bigger businesses. */
      kind: 'connect';
      heading?: string;
      concept: AdaptiveText;
      examples: ConnectExample[];
      kicker?: AdaptiveText;
    };

export interface DecisionChoice {
  label: AdaptiveText;
  feedback: AdaptiveText;
  /** Whether this choice represents the most thoughtful answer (visual cue only). */
  isPreferred?: boolean;
}

export interface ThinkLayer {
  question: AdaptiveText;
  reveal: AdaptiveText;
}

export interface CalcProblem {
  /** Numeric inputs the kid sees in the scenario. */
  givens: Array<{ label: string; value: number; suffix?: string }>;
  /** A label for the answer field (e.g. "Profit"). */
  answerLabel: string;
  /** The correct numeric answer. */
  answer: number;
  /** Acceptable tolerance (default 0 for integers, 0.01 for currency). */
  tolerance?: number;
  /** Optional unit suffix on the answer (e.g. "$", "%"). */
  suffix?: string;
}

export interface ConnectExample {
  emoji: string;
  who: string;
  story: AdaptiveText;
}

/** A single check-yes step the kid can do in the real world. */
export interface MissionStep {
  emoji: string;
  text: AdaptiveText;
}

/** One numeric/text field on the reflection form filled in after the kid tries the mission. */
export interface ReflectionField {
  /** Stable key used to store the answer. */
  key: string;
  /** Question shown to the kid (adaptive). */
  prompt: AdaptiveText;
  /** Input type. */
  type: 'number' | 'text' | 'longtext';
  /** Optional unit suffix (e.g. "$", "cups"). */
  suffix?: string;
  /** Optional placeholder shown when empty. */
  placeholder?: string;
}

export interface RealWorldMissionDef {
  /** Stable id — keyed inside the kid's mission record. Should equal lesson id for per-lesson missions. */
  id: string;
  /** Hero emoji. */
  emoji: string;
  /** Mission title — e.g. "Run a real lemonade stand". */
  title: AdaptiveText;
  /** One-line description of what they're trying to do. */
  pitch: AdaptiveText;
  /** Concrete numbered steps. */
  steps: MissionStep[];
  /** Reflection questions shown after they say "I did it". */
  reflection: ReflectionField[];
  /** Optional safety note for the parent. */
  parentNote?: AdaptiveText;
  /** Optional printable materials. */
  printables?: MissionPrintables;
}

/** Print-ready materials for a mission — declared as data, rendered by MissionPrintView. */
export interface MissionPrintables {
  /** Tracking sheets — tables with header columns and blank rows for the kid to fill in. */
  trackers?: PrintableTracker[];
  /** Fill-in worksheets — labeled fields with optional hints / line counts. */
  worksheets?: PrintableWorksheet[];
  /** Big-text signs/posters meant to be cut out and displayed at the event. */
  signs?: PrintableSign[];
  /** Extra checklists (e.g. supplies to gather). The mission's own steps already form one. */
  checklists?: PrintableChecklist[];
}

export interface PrintableTracker {
  title: string;
  /** Column headers. */
  columns: string[];
  /** Number of blank rows. */
  rows: number;
  /** Optional one-line description shown under the title. */
  note?: string;
}

export interface PrintableWorksheet {
  title: string;
  blocks: WorksheetBlock[];
}

export interface WorksheetBlock {
  label: string;
  /** Optional hint text above the line(s). */
  hint?: string;
  /** Number of blank lines (default 1). Use ≥3 for paragraph answers. */
  lines?: number;
  /** Optional unit suffix shown after the input line. */
  suffix?: string;
  /** Render the block as a horizontal math equation, e.g. "___ × ___ = ___". */
  equation?: string;
}

export interface PrintableSign {
  /** Headline text — e.g. "LEMONADE". */
  headline: string;
  /** Sub-line — e.g. "Made Fresh Today!" */
  subline?: string;
  /** Price placeholder — e.g. "$___ / cup" */
  pricePlaceholder?: string;
  /** Decorative emojis to flank the headline. */
  emoji?: string;
  /** Accent color used for the border and headline. */
  accent?: string;
}

export interface PrintableChecklist {
  title: string;
  items: string[];
  /** Optional note shown below the items. */
  note?: string;
}

export interface LessonDef {
  /** Stable slug — also used as progressKey for useProgress. */
  id: string;
  /** Theme key — drives gradient + accent color. */
  themeKey: ThemeKey;
  /** Large hero emoji. */
  emoji: string;
  /** Lesson display title. */
  title: string;
  /** Optional subtitle in the hero (adaptive). */
  subtitle?: AdaptiveText;
  /** Sequence of beats to render. */
  beats: LessonBeat[];
}

/** Resolve an AdaptiveText to a plain string at the kid's current level. */
export function resolveText(t: AdaptiveText, level: DifficultyLevel): string {
  return typeof t === 'string' ? t : t[level];
}
