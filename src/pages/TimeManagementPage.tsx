/**
 * Time Management lesson page.
 * Thin wrapper — content lives in src/data/lessons/time-management.ts.
 */

import LessonScaffold from '../components/kids/LessonScaffold';
import lesson from '../data/lessons/time-management';

export default function TimeManagementPage() {
  return <LessonScaffold lesson={lesson} />;
}
