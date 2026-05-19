/**
 * Chick-fil-A lesson page (kids-mode).
 *
 * Now ~25 LOC: pure router target that hands off to LessonScaffold.
 * All content lives in src/data/lessons/chick-fil-a.ts.
 *
 * Legacy version (509 LOC of bespoke code) preserved at ChickFilAPage.legacy.tsx
 * and reachable via `?legacy=1`.
 */

import { useSearchParams } from 'react-router-dom';
import LessonScaffold from '../components/kids/LessonScaffold';
import lesson from '../data/lessons/chick-fil-a';
import LegacyPage from './ChickFilAPage.legacy';

export default function ChickFilAPage() {
  const [params] = useSearchParams();
  if (params.get('legacy') === '1') return <LegacyPage />;
  return <LessonScaffold lesson={lesson} />;
}
