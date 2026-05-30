/**
 * Pokémon lesson page.
 * Thin wrapper — content lives in src/data/lessons/pokemon.ts.
 */

import LessonScaffold from '../components/kids/LessonScaffold';
import lesson from '../data/lessons/pokemon';

export default function PokemonPage() {
  return <LessonScaffold lesson={lesson} />;
}
