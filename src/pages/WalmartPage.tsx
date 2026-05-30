/**
 * Walmart lesson page.
 * Thin wrapper — content lives in src/data/lessons/walmart.ts.
 */

import LessonScaffold from '../components/kids/LessonScaffold';
import lesson from '../data/lessons/walmart';

export default function WalmartPage() {
  return <LessonScaffold lesson={lesson} />;
}
