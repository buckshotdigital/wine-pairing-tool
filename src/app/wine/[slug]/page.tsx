import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FoodCard from '@/components/FoodCard';
import { wines, getWineBySlug } from '@/data/wines';
import { getFoodsForWine } from '@/data/foods';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return wines.map((wine) => ({
    slug: wine.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const wine = getWineBySlug(slug);
  if (!wine) return { title: 'Not Found' };

  return {
    title: `${wine.name} Food Pairing Guide - What to Eat with ${wine.name}`,
    description: `Discover the best foods to pair with ${wine.name}. ${wine.description} Perfect pairings include ${wine.pairsWith.slice(0, 3).join(', ')}.`,
    keywords: [
      `${wine.name.toLowerCase()} pairing`,
      `${wine.name.toLowerCase()} food pairing`,
      `what to eat with ${wine.name.toLowerCase()}`,
      `${wine.name.toLowerCase()} and food`,
    ],
  };
}

const wineTypeColors = {
  red: 'from-red-800 to-red-900',
  white: 'from-yellow-600 to-yellow-700',
  rosé: 'from-pink-500 to-pink-600',
  sparkling: 'from-yellow-500 to-amber-600',
  dessert: 'from-amber-600 to-amber-700',
};

export default async function WinePage({ params }: PageProps) {
  const { slug } = await params;
  const wine = getWineBySlug(slug);
  if (!wine) notFound();

  const pairingFoods = getFoodsForWine(slug);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <main>
        {/* Hero */}
        <section className={`bg-gradient-to-br ${wineTypeColors[wine.type]} text-white py-16`}>
          <div className="max-w-7xl mx-auto px-4">
            <nav className="text-white/70 text-sm mb-4">
              <Link href="/" className="hover:text-white">Home</Link>
              <span className="mx-2">/</span>
              <Link href="/pair" className="hover:text-white">Wines</Link>
              <span className="mx-2">/</span>
              <span>{wine.name}</span>
            </nav>
            <div className="flex flex-col md:flex-row md:items-center gap-6">
              <div className="text-8xl">🍷</div>
              <div>
                <span className="inline-block px-3 py-1 bg-white/20 rounded-full text-sm font-medium mb-2 capitalize">
                  {wine.type} Wine
                </span>
                <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">
                  {wine.name}
                </h1>
                <p className="text-white/90 text-lg max-w-2xl">
                  {wine.description}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Wine Details */}
        <section className="py-12 bg-white border-b">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wide mb-2">
                  Flavor Profile
                </h3>
                <p className="text-gray-900">{wine.flavor}</p>
              </div>
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wide mb-2">
                  Body & Sweetness
                </h3>
                <p className="text-gray-900 capitalize">{wine.body} body, {wine.sweetness}</p>
              </div>
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wide mb-2">
                  Key Regions
                </h3>
                <p className="text-gray-900">{wine.regions.join(', ')}</p>
              </div>
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wide mb-2">
                  Serving Temperature
                </h3>
                <p className="text-gray-900">{wine.servingTemp}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Food Pairings */}
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-2xl font-serif font-bold text-gray-900 mb-2">
              Best Foods to Pair with {wine.name}
            </h2>
            <p className="text-gray-600 mb-8">
              These dishes complement the {wine.flavor.toLowerCase().split(',')[0]} notes of {wine.name}.
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {pairingFoods.map((food) => (
                <FoodCard key={food.slug} food={food} />
              ))}
            </div>
          </div>
        </section>

        {/* Buy Wine CTA */}
        {wine.affiliateLinks.vivino && (
          <section className="py-12 bg-wine-50">
            <div className="max-w-4xl mx-auto px-4 text-center">
              <h2 className="text-2xl font-serif font-bold text-gray-900 mb-4">
                Ready to Try {wine.name}?
              </h2>
              <p className="text-gray-600 mb-6">
                Find highly-rated bottles from trusted wine retailers.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                {wine.affiliateLinks.vivino && (
                  <a
                    href={wine.affiliateLinks.vivino}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 bg-wine-600 text-white rounded-lg font-semibold hover:bg-wine-700"
                  >
                    Browse on Vivino
                  </a>
                )}
                {wine.affiliateLinks.wine_com && (
                  <a
                    href={wine.affiliateLinks.wine_com}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 border-2 border-wine-600 text-wine-600 rounded-lg font-semibold hover:bg-wine-50"
                  >
                    Shop Wine.com
                  </a>
                )}
              </div>
            </div>
          </section>
        )}

        {/* Related Wines */}
        <section className="py-12 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-2xl font-serif font-bold text-gray-900 mb-6">
              Explore Other Wines
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {wines
                .filter((w) => w.slug !== slug)
                .slice(0, 6)
                .map((w) => (
                  <Link
                    key={w.slug}
                    href={`/wine/${w.slug}`}
                    className="bg-gray-50 rounded-xl p-4 text-center hover:bg-wine-50 transition-colors"
                  >
                    <span className="text-2xl block mb-2">🍷</span>
                    <span className="font-medium text-gray-900 text-sm">{w.name}</span>
                    <span className="block text-xs text-gray-500 capitalize">{w.type}</span>
                  </Link>
                ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
