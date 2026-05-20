/**
 * /dev/lesson/:slug — preview a lesson without auth.
 * NOT FOR PRODUCTION. Used to verify lesson data + scaffold.
 */

import { useParams } from 'react-router-dom';
import LessonScaffold from '../../components/kids/LessonScaffold';
import chickFilA from '../../data/lessons/chick-fil-a';
import lemonadeStand from '../../data/lessons/lemonade-stand';
import business101 from '../../data/lessons/business-101';
import garageSale from '../../data/lessons/garage-sale';
import petShop from '../../data/lessons/pet-shop';
import youtubeCreator from '../../data/lessons/youtube-creator';
import cookieBakery from '../../data/lessons/cookie-bakery';
import type { LessonDef } from '../../data/lessons/types';

const LESSONS: Record<string, LessonDef> = {
  'business-101': business101,
  'garage-sale': garageSale,
  'chick-fil-a': chickFilA,
  'lemonade-stand': lemonadeStand,
  'pet-shop': petShop,
  'youtube-creator': youtubeCreator,
  'cookie-bakery': cookieBakery,
};

export default function LessonPreviewPage() {
  const { slug } = useParams<{ slug: string }>();
  const lesson = slug ? LESSONS[slug] : null;

  if (!lesson) {
    return (
      <div style={{ padding: 40, fontFamily: 'sans-serif' }}>
        <h1>Lesson not found</h1>
        <p>
          Available previews:{' '}
          {Object.keys(LESSONS).map((s) => (
            <code key={s} style={{ marginRight: 8 }}>/dev/lesson/{s}</code>
          ))}
        </p>
      </div>
    );
  }

  return <LessonScaffold lesson={lesson} />;
}
