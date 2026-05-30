/**
 * Cryptocurrency lesson page.
 * Thin wrapper — content lives in src/data/lessons/cryptocurrency.ts.
 */

import LessonScaffold from '../components/kids/LessonScaffold';
import lesson from '../data/lessons/cryptocurrency';

export default function CryptocurrencyPage() {
  return <LessonScaffold lesson={lesson} />;
}
