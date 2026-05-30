/**
 * IKEA lesson page.
 * Thin wrapper — content lives in src/data/lessons/ikea.ts.
 */

import LessonScaffold from '../components/kids/LessonScaffold';
import lesson from '../data/lessons/ikea';

export default function IkeaPage() {
  return <LessonScaffold lesson={lesson} />;
}
