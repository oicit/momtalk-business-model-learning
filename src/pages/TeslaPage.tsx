/**
 * Tesla: The Brand People Wait in Line For lesson page.
 * Thin wrapper — content lives in src/data/lessons/tesla.ts.
 */

import LessonScaffold from '../components/kids/LessonScaffold';
import lesson from '../data/lessons/tesla';

export default function TeslaPage() {
  return <LessonScaffold lesson={lesson} />;
}
