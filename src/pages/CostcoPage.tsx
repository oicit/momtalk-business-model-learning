/**
 * Costco: Pay to Shop lesson page.
 * Thin wrapper — content lives in src/data/lessons/costco.ts.
 */

import LessonScaffold from '../components/kids/LessonScaffold';
import lesson from '../data/lessons/costco';

export default function CostcoPage() {
  return <LessonScaffold lesson={lesson} />;
}
