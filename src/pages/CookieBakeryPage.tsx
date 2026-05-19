/**
 * Cookie Bakery lesson page.
 * Thin wrapper — content lives in src/data/lessons/cookie-bakery.ts.
 */

import LessonScaffold from '../components/kids/LessonScaffold';
import lesson from '../data/lessons/cookie-bakery';

export default function CookieBakeryPage() {
  return <LessonScaffold lesson={lesson} />;
}
