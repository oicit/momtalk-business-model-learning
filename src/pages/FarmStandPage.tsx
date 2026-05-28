/**
 * Farm Stand lesson page.
 * Thin wrapper — content lives in src/data/lessons/farm-stand.ts.
 */

import LessonScaffold from '../components/kids/LessonScaffold';
import lesson from '../data/lessons/farm-stand';

export default function FarmStandPage() {
  return <LessonScaffold lesson={lesson} />;
}
