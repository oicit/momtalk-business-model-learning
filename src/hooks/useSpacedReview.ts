// src/hooks/useSpacedReview.ts

import { useState, useCallback, useEffect } from 'react';
import {
  type ReviewItem,
  createInitialReview,
  processReview,
  getDueReviews,
} from '../lib/spacedRepetition';

const STORAGE_KEY = 'bml-spaced-reviews';

function loadReviews(): ReviewItem[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

function saveReviews(reviews: ReviewItem[]): void {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(reviews));
}

export function useSpacedReview() {
  const [reviews, setReviews] = useState<ReviewItem[]>(loadReviews);

  useEffect(() => {
    saveReviews(reviews);
  }, [reviews]);

  const scheduleReview = useCallback((lessonId: string) => {
    setReviews((prev) => {
      // Don't duplicate
      if (prev.some((r) => r.lessonId === lessonId)) return prev;
      return [...prev, createInitialReview(lessonId)];
    });
  }, []);

  const submitReview = useCallback((reviewId: string, scorePercent: number) => {
    setReviews((prev) =>
      prev.map((r) => (r.id === reviewId ? processReview(r, scorePercent) : r)),
    );
  }, []);

  const dueReviews = getDueReviews(reviews);

  const getReviewsForLesson = useCallback(
    (lessonId: string) => reviews.filter((r) => r.lessonId === lessonId),
    [reviews],
  );

  return { reviews, dueReviews, scheduleReview, submitReview, getReviewsForLesson };
}
