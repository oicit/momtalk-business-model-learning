/**
 * Garage Sale lesson page.
 * Thin wrapper — content lives in src/data/lessons/garage-sale.ts.
 */

import LessonScaffold from '../components/kids/LessonScaffold';
import lesson from '../data/lessons/garage-sale';

export default function GarageSalePage() {
  return <LessonScaffold lesson={lesson} />;
}
