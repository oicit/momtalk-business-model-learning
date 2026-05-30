/**
 * Apple lesson page.
 * Thin wrapper — content lives in src/data/lessons/apple.ts.
 */

import LessonScaffold from '../components/kids/LessonScaffold';
import lesson from '../data/lessons/apple';

export default function ApplePage() {
  return <LessonScaffold lesson={lesson} />;
}
