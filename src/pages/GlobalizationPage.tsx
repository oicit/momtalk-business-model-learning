/**
 * Globalization lesson page.
 * Thin wrapper — content lives in src/data/lessons/globalization.ts.
 */

import LessonScaffold from '../components/kids/LessonScaffold';
import lesson from '../data/lessons/globalization';

export default function GlobalizationPage() {
  return <LessonScaffold lesson={lesson} />;
}
