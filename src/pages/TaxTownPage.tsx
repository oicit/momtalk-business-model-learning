/**
 * Tax Town lesson page.
 * Thin wrapper — content lives in src/data/lessons/tax-town.ts.
 */

import LessonScaffold from '../components/kids/LessonScaffold';
import lesson from '../data/lessons/tax-town';

export default function TaxTownPage() {
  return <LessonScaffold lesson={lesson} />;
}
