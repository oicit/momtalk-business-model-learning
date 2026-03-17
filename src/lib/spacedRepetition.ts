// src/lib/spacedRepetition.ts

export interface ReviewItem {
  id: string;
  lessonId: string;
  nextReviewDate: string;  // ISO date
  interval: number;        // days
  repetition: number;
  easeFactor: number;
}

export function createInitialReview(lessonId: string): ReviewItem {
  return {
    id: `${lessonId}-${Date.now()}`,
    lessonId,
    nextReviewDate: addDays(new Date(), 1).toISOString(),
    interval: 1,
    repetition: 0,
    easeFactor: 2.5,
  };
}

export function processReview(item: ReviewItem, scorePercent: number): ReviewItem {
  // Convert 0-100 score to 0-5 quality scale
  const quality = Math.round((scorePercent / 100) * 5);

  if (quality < 3) {
    // Failed review — reset
    return {
      ...item,
      repetition: 0,
      interval: 1,
      nextReviewDate: addDays(new Date(), 1).toISOString(),
    };
  }

  const newRepetition = item.repetition + 1;
  let newInterval: number;

  if (newRepetition === 1) newInterval = 1;
  else if (newRepetition === 2) newInterval = 3;
  else newInterval = Math.round(item.interval * item.easeFactor);

  const newEase = Math.max(
    1.3,
    item.easeFactor + (0.1 - (5 - quality) * (0.08 + (5 - quality) * 0.02)),
  );

  return {
    ...item,
    repetition: newRepetition,
    interval: newInterval,
    easeFactor: newEase,
    nextReviewDate: addDays(new Date(), newInterval).toISOString(),
  };
}

export function isDue(item: ReviewItem): boolean {
  return new Date(item.nextReviewDate) <= new Date();
}

export function getDueReviews(items: ReviewItem[]): ReviewItem[] {
  return items.filter(isDue).sort(
    (a, b) => new Date(a.nextReviewDate).getTime() - new Date(b.nextReviewDate).getTime(),
  );
}

function addDays(date: Date, days: number): Date {
  const result = new Date(date);
  result.setDate(result.getDate() + days);
  return result;
}
