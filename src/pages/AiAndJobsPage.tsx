/**
 * AI & Jobs lesson page.
 * Thin wrapper — content lives in src/data/lessons/ai-and-jobs.ts.
 */

import LessonScaffold from '../components/kids/LessonScaffold';
import lesson from '../data/lessons/ai-and-jobs';

export default function AiAndJobsPage() {
  return <LessonScaffold lesson={lesson} />;
}
