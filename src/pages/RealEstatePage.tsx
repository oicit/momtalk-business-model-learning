/**
 * Real Estate lesson page.
 * Thin wrapper — content lives in src/data/lessons/real-estate.ts.
 */

import LessonScaffold from '../components/kids/LessonScaffold';
import lesson from '../data/lessons/real-estate';

export default function RealEstatePage() {
  return <LessonScaffold lesson={lesson} />;
}
