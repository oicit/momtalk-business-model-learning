/**
 * Google: The Free-Search Secret lesson page.
 * Thin wrapper — content lives in src/data/lessons/google-search.ts.
 */

import LessonScaffold from '../components/kids/LessonScaffold';
import lesson from '../data/lessons/google-search';

export default function GoogleSearchPage() {
  return <LessonScaffold lesson={lesson} />;
}
