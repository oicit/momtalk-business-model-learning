/**
 * Snow Day Hustle lesson page.
 * Thin wrapper — content lives in src/data/lessons/snow-day-hustle.ts.
 */

import LessonScaffold from '../components/kids/LessonScaffold';
import lesson from '../data/lessons/snow-day-hustle';

export default function SnowDayHustlePage() {
  return <LessonScaffold lesson={lesson} />;
}
