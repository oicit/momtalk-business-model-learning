/**
 * Power Core lesson page.
 * Thin wrapper — content lives in src/data/lessons/power-core.ts.
 */

import LessonScaffold from '../components/kids/LessonScaffold';
import lesson from '../data/lessons/power-core';

export default function PowerCorePage() {
  return <LessonScaffold lesson={lesson} />;
}
