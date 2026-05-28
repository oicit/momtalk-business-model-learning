/**
 * Deal Maker lesson page.
 * Thin wrapper — content lives in src/data/lessons/deal-maker.ts.
 */

import LessonScaffold from '../components/kids/LessonScaffold';
import lesson from '../data/lessons/deal-maker';

export default function DealMakerPage() {
  return <LessonScaffold lesson={lesson} />;
}
