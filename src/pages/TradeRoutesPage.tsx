/**
 * Trade Routes lesson page.
 * Thin wrapper — content lives in src/data/lessons/trade-routes.ts.
 */

import LessonScaffold from '../components/kids/LessonScaffold';
import lesson from '../data/lessons/trade-routes';

export default function TradeRoutesPage() {
  return <LessonScaffold lesson={lesson} />;
}
