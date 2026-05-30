/**
 * Banking Basics lesson page.
 * Thin wrapper — content lives in src/data/lessons/banking-basics.ts.
 */

import LessonScaffold from '../components/kids/LessonScaffold';
import lesson from '../data/lessons/banking-basics';

export default function BankingBasicsPage() {
  return <LessonScaffold lesson={lesson} />;
}
