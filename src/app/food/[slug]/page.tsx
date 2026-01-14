import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FoodCard from '@/components/FoodCard';
import WineCard from '@/components/WineCard';
import { foodCategories, getFoodsByCategory, getCategoryBySlug, foods } from '@/data/foods';
import { getWinesForFood, getWineBySlug } from '@/data/wines';
import { RecipeSchema } from '@/components/schema/RecipeSchema';
import { BreadcrumbSchema } from '@/components/schema/BreadcrumbSchema';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return foodCategories.map((category) => ({
    slug: category.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const category = getCategoryBySlug(slug);
  if (!category) return { title: 'Not Found' };

  return {
    title: `Wine Pairing with ${category.name} - Best Wines for ${category.name} Dishes`,
    description: `Discover the best wines to pair with ${category.name.toLowerCase()}. Expert recommendations for ${category.foods.length}+ dishes including ${category.foods.slice(0, 3).join(', ')}.`,
    keywords: [
      `wine with ${category.name.toLowerCase()}`,
      `${category.name.toLowerCase()} wine pairing`,
      `best wine for ${category.name.toLowerCase()}`,
    ],
  };
}

export default async function FoodCategoryPage({ params }: PageProps) {
  const { slug } = await params;
  const category = getCategoryBySlug(slug);
  if (!category) notFound();

  const categoryFoods = getFoodsByCategory(slug);

  // Get all unique wines that pair with this category's foods
  const allWineSlugs = new Set<string>();
  categoryFoods.forEach((food) => {
    food.pairsWith.forEach((w) => allWineSlugs.add(w));
  });
  const topWines = Array.from(allWineSlugs)
    .slice(0, 6)
    .map((slug) => getWinesForFood(categoryFoods[0]?.slug || ''))
    .flat()
    .filter((w, i, arr) => arr.findIndex((x) => x.slug === w.slug) === i)
    .slice(0, 4);

  // Get wine names for schema
  const wineNames = Array.from(allWineSlugs)
    .slice(0, 3)
    .map((wineSlug) => getWineBySlug(wineSlug)?.name)
    .filter(Boolean) as string[];

  return (
    <div className="min-h-screen bg-gray-50">
      <RecipeSchema
        foodName={category.name}
        description={category.description}
        wineRecommendations={wineNames}
        category={category.name}
      />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://wine-pairing-tool.vercel.app" },
          { name: "Foods", url: "https://wine-pairing-tool.vercel.app/pair" },
          { name: category.name, url: `https://wine-pairing-tool.vercel.app/food/${category.slug}` },
        ]}
      />
      <Header />

      <main>
        {/* Hero */}
        <section className="bg-gradient-to-br from-wine-800 to-wine-900 text-white py-16">
          <div className="max-w-7xl mx-auto px-4">
            <nav className="text-wine-200 text-sm mb-4">
              <Link href="/" className="hover:text-white">Home</Link>
              <span className="mx-2">/</span>
              <span>Wine with {category.name}</span>
            </nav>
            <div className="flex items-center gap-4">
              <span className="text-6xl">{category.image}</span>
              <div>
                <h1 className="text-4xl md:text-5xl font-serif font-bold mb-2">
                  Wine Pairing with {category.name}
                </h1>
                <p className="text-wine-100 text-lg">
                  {category.description}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Quick Guide */}
        <section className="py-12 bg-white border-b">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-2xl font-serif font-bold text-gray-900 mb-6">
              Quick Wine Pairing Guide for {category.name}
            </h2>
            <div className="prose max-w-none text-gray-600">
              <p>
                Finding the right wine to pair with {category.name.toLowerCase()} depends on the specific dish,
                cooking method, and sauce. Here&apos;s what you need to know:
              </p>
              <ul className="mt-4 space-y-2">
                <li>
                  <strong>Consider the preparation:</strong> Grilled, roasted, and fried dishes pair differently than poached or steamed.
                </li>
                <li>
                  <strong>Match intensity:</strong> Bold dishes need bold wines; delicate dishes need lighter wines.
                </li>
                <li>
                  <strong>Don&apos;t forget the sauce:</strong> Often the sauce matters more than the protein itself.
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Dishes Grid */}
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-2xl font-serif font-bold text-gray-900 mb-6">
              {category.name} Dishes & Wine Pairings
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {categoryFoods.map((food) => (
                <FoodCard key={food.slug} food={food} />
              ))}
            </div>
          </div>
        </section>

        {/* Top Wines for This Category */}
        <section className="py-12 bg-wine-50">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-2xl font-serif font-bold text-gray-900 mb-6">
              Best Wines for {category.name}
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {topWines.map((wine) => (
                <WineCard key={wine.slug} wine={wine} showAffiliateLinks />
              ))}
            </div>
          </div>
        </section>

        {/* Related Categories */}
        <section className="py-12 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-2xl font-serif font-bold text-gray-900 mb-6">
              Explore Other Food Pairings
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              {foodCategories
                .filter((c) => c.slug !== slug)
                .slice(0, 5)
                .map((cat) => (
                  <Link
                    key={cat.slug}
                    href={`/food/${cat.slug}`}
                    className="bg-gray-50 rounded-xl p-4 text-center hover:bg-wine-50 transition-colors"
                  >
                    <span className="text-3xl block mb-2">{cat.image}</span>
                    <span className="font-medium text-gray-900">{cat.name}</span>
                  </Link>
                ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-12 bg-gradient-to-r from-wine-800 to-wine-900 text-white">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-2xl font-serif font-bold mb-4">
              Can&apos;t Find What You&apos;re Looking For?
            </h2>
            <p className="text-wine-100 mb-6">
              Use our interactive pairing tool to search any dish.
            </p>
            <Link
              href="/pair"
              className="inline-block px-6 py-3 bg-gold-500 text-wine-900 rounded-lg font-semibold hover:bg-gold-400"
            >
              Try Pairing Tool
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
