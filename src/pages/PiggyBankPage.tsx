/**
 * Piggy Bank Power-Up lesson page.
 * Thin wrapper — content lives in src/data/lessons/piggy-bank.ts.
 */

import LessonScaffold from '../components/kids/LessonScaffold';
import lesson from '../data/lessons/piggy-bank';

export default function PiggyBankPage() {
  return <LessonScaffold lesson={lesson} />;
}
