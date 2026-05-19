/**
 * Collectible cards — the rewards kids earn for completing lessons.
 *
 * Each card has a rarity badge. Rarity is purely cosmetic — every card is
 * earned exactly the same way (complete the matching lesson) but visually
 * Legendary feels more special than Common.
 *
 * Mapping lesson → card lives in earnedCardFor() below.
 */

import { T } from '../styles/kidsTokens';

export type Rarity = 'Common' | 'Uncommon' | 'Rare' | 'Legendary';

export interface CardDef {
  id: string;
  emoji: string;
  title: string;
  /** One-line fun fact shown on the front of the card. */
  fact: string;
  /** Card background color. */
  color: string;
  rarity: Rarity;
  /** Optional — lesson slug that awards this card. */
  awardedBy?: string;
}

export const RARITY_COLORS: Record<Rarity, string> = {
  Common: T.green,
  Uncommon: T.blue,
  Rare: T.lavender,
  Legendary: T.coral,
};

export const cardData: CardDef[] = [
  {
    id: 'service-pro',
    emoji: '🐔',
    title: 'Service Pro',
    fact: '"My pleasure" is Chick-fil-A\'s secret superpower!',
    color: '#FFE5EA',
    rarity: 'Common',
    awardedBy: 'chick-fil-a',
  },
  {
    id: 'pricing-pro',
    emoji: '🏷️',
    title: 'Pricing Pro',
    fact: 'Set the right price and your stuff flies off the table!',
    color: '#FFE5EC',
    rarity: 'Common',
    awardedBy: 'garage-sale',
  },
  {
    id: 'lemonade-boss',
    emoji: '🍋',
    title: 'Lemonade Boss',
    fact: 'Revenue minus cost = profit. Easy money math!',
    color: '#FFFDE8',
    rarity: 'Common',
    awardedBy: 'lemonade-stand',
  },
  {
    id: 'pet-care-pro',
    emoji: '🐾',
    title: 'Pet Care Pro',
    fact: 'Repeat customers turn one good walk into months of work!',
    color: '#EDE9FE',
    rarity: 'Uncommon',
    awardedBy: 'pet-shop',
  },
  {
    id: 'content-creator',
    emoji: '🎬',
    title: 'Content Creator',
    fact: 'Niche audiences pay better than huge ones — specificity is leverage!',
    color: '#FFD9E6',
    rarity: 'Rare',
    awardedBy: 'youtube-creator',
  },
  {
    id: 'master-baker',
    emoji: '🍪',
    title: 'Master Baker',
    fact: 'Bigger batches share setup costs — that\'s economies of scale!',
    color: '#FFF8F0',
    rarity: 'Uncommon',
    awardedBy: 'cookie-bakery',
  },
  {
    id: 'money-master',
    emoji: '💵',
    title: 'Money Master',
    fact: 'Money replaced trading goods 2,600 years ago!',
    color: T.mint,
    rarity: 'Common',
  },
  {
    id: 'budget-boss',
    emoji: '📋',
    title: 'Budget Boss',
    fact: 'The 50/30/20 rule: needs, wants, savings!',
    color: '#FFFFF0',
    rarity: 'Common',
  },
  {
    id: 'company-pro',
    emoji: '🏢',
    title: 'Company Pro',
    fact: 'The oldest company in the world is from Japan, 578 AD!',
    color: '#E8F4FD',
    rarity: 'Uncommon',
  },
  {
    id: 'bond-expert',
    emoji: '🤝',
    title: 'Bond Expert',
    fact: 'US bonds have never missed a payment in 250 years!',
    color: '#F0E8FD',
    rarity: 'Uncommon',
  },
  {
    id: 'tax-whiz',
    emoji: '🏛️',
    title: 'Tax Whiz',
    fact: 'Taxes pay for schools, roads, and parks!',
    color: '#FFF5F0',
    rarity: 'Uncommon',
  },
  {
    id: 'market-mind',
    emoji: '⚖️',
    title: 'Market Mind',
    fact: 'Scarce + popular = expensive. Supply & demand!',
    color: '#E8F0FF',
    rarity: 'Uncommon',
  },
  {
    id: 'stock-trader',
    emoji: '📈',
    title: 'Stock Trader',
    fact: 'Stocks have averaged ~10% per year for a century!',
    color: '#FDE8F4',
    rarity: 'Rare',
  },
  {
    id: 'entrepreneur',
    emoji: '🚀',
    title: 'Entrepreneur',
    fact: 'Walt Disney was fired before creating Disney!',
    color: '#FFE8F0',
    rarity: 'Rare',
  },
  {
    id: 'inflation-fighter',
    emoji: '📊',
    title: 'Inflation Fighter',
    fact: 'A movie ticket was 15¢ in 1920. Today? $12!',
    color: '#FFF0E8',
    rarity: 'Legendary',
  },
];

/** Look up the card a given lesson awards. Returns null if no card mapped. */
export function earnedCardFor(lessonId: string): CardDef | null {
  return cardData.find((c) => c.awardedBy === lessonId) ?? null;
}

export const totalCards = cardData.length;
