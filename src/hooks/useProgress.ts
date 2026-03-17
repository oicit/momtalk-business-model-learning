import { useState, useCallback, useEffect } from 'react';
import {
  type ChildLessonProgress,
  type LessonResult,
  loadProgress,
  saveProgress,
  recordLessonComplete,
} from '../lib/progress';

export function useProgress() {
  const [progress, setProgress] = useState<ChildLessonProgress>(loadProgress);

  // Sync to localStorage whenever progress changes
  useEffect(() => {
    saveProgress(progress);
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
