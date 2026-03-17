const STORAGE_KEY = 'bml-guest-progress';
const SCHEMA_VERSION = 1;

export interface LessonResult {
  lessonId: string;
  score: number;           // 0-100
  xpEarned: number;
  completedAt: string;     // ISO date
  skillScores: Record<string, number>; // skill → score 0-100
}

export interface ChildLessonProgress {
  lessonsCompleted: string[];
  quizScores: Record<string, number>;       // lessonId → best score
  currentLesson: string | null;
  totalXP: number;
  skillMastery: Record<string, number>;     // skill → mastery 0-1
  lastActiveAt: string;
}

interface StoredProgress {
  schemaVersion: number;
  data: ChildLessonProgress;
}

function createDefaultProgress(): ChildLessonProgress {
  return {
    lessonsCompleted: [],
    quizScores: {},
    currentLesson: null,
    totalXP: 0,
    skillMastery: {},
    lastActiveAt: new Date().toISOString(),
  };
}

export function loadProgress(): ChildLessonProgress {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return createDefaultProgress();
    const stored: StoredProgress = JSON.parse(raw);
    if (stored.schemaVersion !== SCHEMA_VERSION) return createDefaultProgress();
    return stored.data;
  } catch {
    return createDefaultProgress();
  }
}

export function saveProgress(progress: ChildLessonProgress): void {
  const stored: StoredProgress = {
    schemaVersion: SCHEMA_VERSION,
    data: { ...progress, lastActiveAt: new Date().toISOString() },
  };
  localStorage.setItem(STORAGE_KEY, JSON.stringify(stored));
}

export function recordLessonComplete(
  current: ChildLessonProgress,
  result: LessonResult,
): ChildLessonProgress {
  const newCompleted = current.lessonsCompleted.includes(result.lessonId)
    ? current.lessonsCompleted
    : [...current.lessonsCompleted, result.lessonId];

  const bestScore = Math.max(current.quizScores[result.lessonId] ?? 0, result.score);

  const newSkillMastery = { ...current.skillMastery };
  for (const [skill, score] of Object.entries(result.skillScores)) {
    const prev = newSkillMastery[skill] ?? 0;
    // Weighted moving average: 70% new, 30% old
    newSkillMastery[skill] = prev === 0 ? score / 100 : prev * 0.3 + (score / 100) * 0.7;
  }

  return {
    ...current,
    lessonsCompleted: newCompleted,
    quizScores: { ...current.quizScores, [result.lessonId]: bestScore },
    totalXP: current.totalXP + result.xpEarned,
    skillMastery: newSkillMastery,
    lastActiveAt: new Date().toISOString(),
  };
}

export function clearProgress(): void {
  localStorage.removeItem(STORAGE_KEY);
}
