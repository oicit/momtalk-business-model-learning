import { useState, useCallback, useEffect, useRef } from 'react';
import {
  type ChildLessonProgress,
  type LessonResult,
  loadProgress,
  saveProgress,
  recordLessonComplete,
} from '../lib/progress';
import { getStoredAuth } from '../lib/auth';

const API_BASE = '/api/progress';

async function fetchServerProgress(token: string): Promise<ChildLessonProgress | null> {
  try {
    const res = await fetch(API_BASE, {
      headers: { Authorization: `Bearer ${token}` },
    });
    if (!res.ok) return null;
    const { progress } = await res.json();
    return progress ?? null;
  } catch {
    return null;
  }
}

async function pushProgressToServer(token: string, progress: ChildLessonProgress): Promise<void> {
  try {
    await fetch(API_BASE, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ progress }),
    });
  } catch {
    // Best-effort — localStorage is the fallback
  }
}

/** Merge local and server progress. Server wins for conflicts. */
function mergeProgress(
  local: ChildLessonProgress,
  server: ChildLessonProgress,
): ChildLessonProgress {
  const mergedLessons = Array.from(
    new Set([...local.lessonsCompleted, ...server.lessonsCompleted]),
  );

  const mergedScores = { ...local.quizScores };
  for (const [id, score] of Object.entries(server.quizScores)) {
    mergedScores[id] = Math.max(mergedScores[id] ?? 0, score);
  }

  const mergedSkills = { ...local.skillMastery };
  for (const [skill, val] of Object.entries(server.skillMastery)) {
    // Server wins for conflicts
    mergedSkills[skill] = val;
  }

  return {
    lessonsCompleted: mergedLessons,
    quizScores: mergedScores,
    currentLesson: server.currentLesson ?? local.currentLesson,
    totalXP: Math.max(local.totalXP, server.totalXP),
    skillMastery: mergedSkills,
    lastActiveAt: server.lastActiveAt > local.lastActiveAt
      ? server.lastActiveAt
      : local.lastActiveAt,
  };
}

export function useProgress() {
  const [progress, setProgress] = useState<ChildLessonProgress>(loadProgress);
  const initialSyncDone = useRef(false);

  // On mount: if authenticated, fetch server progress and merge
  useEffect(() => {
    const auth = getStoredAuth();
    if (!auth?.sessionToken) return;

    fetchServerProgress(auth.sessionToken).then((serverProgress) => {
      if (serverProgress) {
        setProgress((local) => {
          const merged = mergeProgress(local, serverProgress);
          saveProgress(merged);
          return merged;
        });
      }
      initialSyncDone.current = true;
    });
  }, []);

  // Sync to localStorage whenever progress changes, and push to server if authenticated
  useEffect(() => {
    saveProgress(progress);

    const auth = getStoredAuth();
    if (auth?.sessionToken && initialSyncDone.current) {
      pushProgressToServer(auth.sessionToken, progress);
    }
  }, [progress]);

  const completeLesson = useCallback((result: LessonResult) => {
    setProgress((prev) => recordLessonComplete(prev, result));
  }, []);

  const isCompleted = useCallback(
    (lessonId: string) => progress.lessonsCompleted.includes(lessonId),
    [progress.lessonsCompleted],
  );

  const getScore = useCallback(
    (lessonId: string) => progress.quizScores[lessonId] ?? null,
    [progress.quizScores],
  );

  return { progress, completeLesson, isCompleted, getScore };
}
