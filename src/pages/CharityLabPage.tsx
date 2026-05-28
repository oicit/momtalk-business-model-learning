/**
 * Charity Lab lesson page.
 * Thin wrapper — content lives in src/data/lessons/charity-lab.ts.
 */

import LessonScaffold from '../components/kids/LessonScaffold';
import lesson from '../data/lessons/charity-lab';

export default function CharityLabPage() {
  return <LessonScaffold lesson={lesson} />;
}
