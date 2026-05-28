/**
 * Risk Pool Island lesson page.
 * Thin wrapper — content lives in src/data/lessons/risk-pool-island.ts.
 */

import LessonScaffold from '../components/kids/LessonScaffold';
import lesson from '../data/lessons/risk-pool-island';

export default function RiskPoolIslandPage() {
  return <LessonScaffold lesson={lesson} />;
}
