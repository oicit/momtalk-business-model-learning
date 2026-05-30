/**
 * SMART Goals lesson page.
 * Thin wrapper — content lives in src/data/lessons/smart-goals.ts.
 */

import LessonScaffold from '../components/kids/LessonScaffold';
import lesson from '../data/lessons/smart-goals';

export default function SmartGoalsPage() {
  return <LessonScaffold lesson={lesson} />;
}
