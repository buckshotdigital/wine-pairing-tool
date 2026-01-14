import Link from 'next/link';
import { Food } from '@/data/foods';
import { wines } from '@/data/wines';

interface FoodCardProps {
  food: Food;
}

const categoryEmojis: Record<string, string> = {
  beef: '🥩',
  poultry: '🍗',
  pork: '🥓',
  lamb: '🍖',
  seafood: '🦞',
  pasta: '🍝',
  cheese: '🧀',
  vegetables: '🥗',
  asian: '🍜',
  bbq: '🔥',
  mediterranean: '🫒',
  italian: '🍕',
  other: '🍽️',
};

export default function FoodCard({ food }: FoodCardProps) {
  const topWines = food.pairsWith
    .slice(0, 3)
    .map((slug) => wines.find((w) => w.slug === slug))
    .filter(Boolean);

  return (
    <div className="wine-card bg-white rounded-xl shadow-md overflow-hidden border border-gray-100">
      <div className="p-6">
        <div className="flex items-start justify-between mb-3">
          <div>
            <Link href={`/food/${food.category}`}>
              <span className="text-xs text-wine-600 font-medium uppercase tracking-wide">
                {food.category}
              </span>
            </Link>
            <h3 className="text-xl font-serif font-bold text-gray-900">{food.name}</h3>
          </div>
          <span className="text-3xl">{categoryEmojis[food.category] || '🍽️'}</span>
        </div>

        <p className="text-gray-600 text-sm mb-4">{food.description}</p>

        <div className="mb-4">
          <span className="text-sm font-medium text-gray-700">Best wines:</span>
          <div className="flex flex-wrap gap-2 mt-2">
            {topWines.map((wine) => wine && (
              <Link
                key={wine.slug}
                href={`/wine/${wine.slug}`}
                className="px-2 py-1 bg-wine-50 text-wine-700 rounded-full text-xs font-medium hover:bg-wine-100"
              >
                {wine.name}
              </Link>
            ))}
          </div>
        </div>

        <div className="pt-4 border-t border-gray-100">
          <p className="text-xs text-gray-500 italic">💡 {food.tips}</p>
        </div>
      </div>
    </div>
  );
}
