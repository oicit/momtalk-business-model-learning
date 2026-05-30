/**
 * Supply & Demand lesson page.
 * Thin wrapper — content lives in src/data/lessons/supply-demand.ts.
 */

import LessonScaffold from '../components/kids/LessonScaffold';
import lesson from '../data/lessons/supply-demand';

export default function SupplyDemandPage() {
  return <LessonScaffold lesson={lesson} />;
}
