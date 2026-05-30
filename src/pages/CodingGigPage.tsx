/**
 * Coding Gig lesson page.
 * Thin wrapper — content lives in src/data/lessons/coding-gig.ts.
 */

import LessonScaffold from '../components/kids/LessonScaffold';
import lesson from '../data/lessons/coding-gig';

export default function CodingGigPage() {
  return <LessonScaffold lesson={lesson} />;
}
