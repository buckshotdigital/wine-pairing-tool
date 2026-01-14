import Link from 'next/link';
import { Wine } from '@/data/wines';

interface WineCardProps {
  wine: Wine;
  showAffiliateLinks?: boolean;
}

const wineTypeColors = {
  red: 'bg-red-900',
  white: 'bg-yellow-100',
  rosé: 'bg-pink-200',
  sparkling: 'bg-yellow-50',
  dessert: 'bg-amber-300',
};

const wineTypeTextColors = {
  red: 'text-white',
  white: 'text-yellow-900',
  rosé: 'text-pink-900',
  sparkling: 'text-yellow-900',
  dessert: 'text-amber-900',
};

export default function WineCard({ wine, showAffiliateLinks = false }: WineCardProps) {
  return (
    <div className="wine-card bg-white rounded-xl shadow-md overflow-hidden border border-gray-100">
      {/* Wine type indicator */}
      <div className={`h-2 ${wineTypeColors[wine.type]}`} />

      <div className="p-6">
        <div className="flex items-start justify-between mb-3">
          <div>
            <Link href={`/wine/${wine.slug}`}>
              <h3 className="text-xl font-serif font-bold text-gray-900 hover:text-wine-600">
                {wine.name}
              </h3>
            </Link>
            <span className={`inline-block mt-1 px-2 py-0.5 rounded text-xs font-medium ${wineTypeColors[wine.type]} ${wineTypeTextColors[wine.type]}`}>
              {wine.type.charAt(0).toUpperCase() + wine.type.slice(1)}
            </span>
          </div>
          <span className="text-3xl">🍷</span>
        </div>

        <p className="text-gray-600 text-sm mb-4 line-clamp-2">{wine.description}</p>

        <div className="space-y-2 text-sm">
          <div>
            <span className="font-medium text-gray-700">Flavors:</span>
            <span className="text-gray-600 ml-1">{wine.flavor}</span>
          </div>
          <div>
            <span className="font-medium text-gray-700">Body:</span>
            <span className="text-gray-600 ml-1 capitalize">{wine.body}</span>
          </div>
          <div>
            <span className="font-medium text-gray-700">Regions:</span>
            <span className="text-gray-600 ml-1">{wine.regions.slice(0, 2).join(', ')}</span>
          </div>
        </div>

        <div className="mt-4 pt-4 border-t border-gray-100 flex items-center justify-between">
          <Link
            href={`/wine/${wine.slug}`}
            className="text-wine-600 hover:text-wine-700 font-medium text-sm"
          >
            View pairings →
          </Link>

          {showAffiliateLinks && wine.affiliateLinks.vivino && (
            <a
              href={wine.affiliateLinks.vivino}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-1 bg-wine-100 text-wine-700 rounded-full text-xs font-medium hover:bg-wine-200"
            >
              Buy Wine
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
