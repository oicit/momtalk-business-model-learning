/**
 * Credit & Debt lesson page.
 * Thin wrapper — content lives in src/data/lessons/credit-debt.ts.
 */

import LessonScaffold from '../components/kids/LessonScaffold';
import lesson from '../data/lessons/credit-debt';

export default function CreditDebtPage() {
  return <LessonScaffold lesson={lesson} />;
}
