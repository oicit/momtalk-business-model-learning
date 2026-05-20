/**
 * Business 101 lesson page — the foundational framework lesson.
 * Thin wrapper. Content lives in src/data/lessons/business-101.ts.
 */

import LessonScaffold from '../components/kids/LessonScaffold';
import lesson from '../data/lessons/business-101';

export default function Business101Page() {
  return <LessonScaffold lesson={lesson} />;
}
