declare function GarageSaleApp(props?: {
  onAllComplete?: (data: { totalLevels: number; xp: number }) => void;
  difficultyLevel?: 'easy' | 'medium' | 'hard';
  themeContext?: {
    childName: string;
    interests: string[];
    personality: string[];
    examples: Array<{ item: string; price: string; category: string }>;
  } | null;
}): JSX.Element;

export default GarageSaleApp;
