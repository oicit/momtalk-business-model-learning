/**
 * Stock Market Adventure lesson page.
 * Thin wrapper — content lives in src/data/lessons/stock-market.ts.
 */

import LessonScaffold from '../components/kids/LessonScaffold';
import lesson from '../data/lessons/stock-market';

export default function StockMarketPage() {
  return <LessonScaffold lesson={lesson} />;
}
