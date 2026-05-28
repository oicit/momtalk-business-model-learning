/**
 * McDonald's: Real Estate Empire lesson page.
 * Thin wrapper — content lives in src/data/lessons/mcdonalds.ts.
 */

import LessonScaffold from '../components/kids/LessonScaffold';
import lesson from '../data/lessons/mcdonalds';

export default function McDonaldsPage() {
  return <LessonScaffold lesson={lesson} />;
}
