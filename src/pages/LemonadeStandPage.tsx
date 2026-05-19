/**
 * Lemonade Stand lesson page.
 * Thin wrapper — content lives in src/data/lessons/lemonade-stand.ts.
 */

import LessonScaffold from '../components/kids/LessonScaffold';
import lesson from '../data/lessons/lemonade-stand';

export default function LemonadeStandPage() {
  return <LessonScaffold lesson={lesson} />;
}
