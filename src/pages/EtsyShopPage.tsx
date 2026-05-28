/**
 * Etsy Shop lesson page.
 * Thin wrapper — content lives in src/data/lessons/etsy-shop.ts.
 */

import LessonScaffold from '../components/kids/LessonScaffold';
import lesson from '../data/lessons/etsy-shop';

export default function EtsyShopPage() {
  return <LessonScaffold lesson={lesson} />;
}
