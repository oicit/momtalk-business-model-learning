/**
 * Marketing Mountain lesson page.
 * Thin wrapper — content lives in src/data/lessons/marketing-mountain.ts.
 */

import LessonScaffold from '../components/kids/LessonScaffold';
import lesson from '../data/lessons/marketing-mountain';

export default function MarketingMountainPage() {
  return <LessonScaffold lesson={lesson} />;
}
