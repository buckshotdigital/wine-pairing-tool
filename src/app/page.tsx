import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WineCard from '@/components/WineCard';
import { wines } from '@/data/wines';
import { foodCategories } from '@/data/foods';

export default function Home() {
  const featuredWines = wines.slice(0, 6);

  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-wine-900 via-wine-800 to-wine-950 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 text-9xl animate-swirl">🍷</div>
          <div className="absolute bottom-20 right-10 text-9xl animate-swirl" style={{ animationDelay: '1s' }}>🍇</div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 py-24 sm:py-32">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6">
              Find the Perfect Wine
              <span className="block text-gold-400">for Any Dish</span>
            </h1>
            <p className="text-xl text-wine-100 mb-8 max-w-2xl mx-auto">
              Expert wine pairing recommendations at your fingertips. Whether you&apos;re cooking steak,
              salmon, or pasta — we&apos;ll help you choose the perfect bottle.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/pair"
                className="px-8 py-4 bg-gold-500 text-wine-900 rounded-lg font-semibold text-lg hover:bg-gold-400 transition-colors"
              >
                Find Wine Pairing
              </Link>
              <Link
                href="#categories"
                className="px-8 py-4 border-2 border-wine-300 text-white rounded-lg font-semibold text-lg hover:bg-wine-800 transition-colors"
              >
                Browse by Food
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-serif font-bold text-center text-gray-900 mb-12">
            How It Works
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-wine-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🍽️</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">1. Select Your Food</h3>
              <p className="text-gray-600">
                Choose what you&apos;re eating — from steak and salmon to pasta and cheese.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-wine-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🍷</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">2. Get Recommendations</h3>
              <p className="text-gray-600">
                We&apos;ll suggest the best wines based on sommelier-level pairing principles.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-wine-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">✨</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">3. Enjoy!</h3>
              <p className="text-gray-600">
                Elevate your meal with the perfect wine pairing. Cheers!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Food Categories */}
      <section id="categories" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-serif font-bold text-center text-gray-900 mb-4">
            Wine Pairings by Food Type
          </h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Click on a category to discover the best wine pairings for your favorite dishes.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {foodCategories.map((category) => (
              <Link
                key={category.slug}
                href={`/food/${category.slug}`}
                className="bg-white rounded-xl p-6 text-center shadow-sm border border-gray-100 hover:shadow-md hover:border-wine-200 transition-all"
              >
                <span className="text-4xl block mb-3">{category.image}</span>
                <h3 className="font-semibold text-gray-900">{category.name}</h3>
                <p className="text-xs text-gray-500 mt-1">{category.foods.length} dishes</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Wines */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <div>
              <h2 className="text-3xl font-serif font-bold text-gray-900">Popular Wines</h2>
              <p className="text-gray-600 mt-1">Explore wine varieties and their perfect pairings</p>
            </div>
            <Link href="/pair" className="text-wine-600 hover:text-wine-700 font-medium hidden md:block">
              View all wines →
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {featuredWines.map((wine) => (
              <WineCard key={wine.slug} wine={wine} showAffiliateLinks />
            ))}
          </div>
        </div>
      </section>

      {/* Popular Searches - SEO Section */}
      <section className="py-16 bg-wine-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-serif font-bold text-center text-gray-900 mb-8">
            Popular Wine Pairing Searches
          </h2>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              { text: 'Wine with steak', href: '/food/beef' },
              { text: 'Wine with salmon', href: '/food/seafood' },
              { text: 'Wine with chicken', href: '/food/poultry' },
              { text: 'Wine with pasta', href: '/food/pasta' },
              { text: 'Wine with cheese', href: '/food/cheese' },
              { text: 'Cabernet Sauvignon pairings', href: '/wine/cabernet-sauvignon' },
              { text: 'Pinot Noir pairings', href: '/wine/pinot-noir' },
              { text: 'Chardonnay pairings', href: '/wine/chardonnay' },
              { text: 'Wine with sushi', href: '/food/asian' },
              { text: 'Wine with BBQ', href: '/food/bbq' },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="px-4 py-2 bg-white rounded-full text-gray-700 hover:bg-wine-100 hover:text-wine-700 border border-gray-200 text-sm"
              >
                {item.text}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-wine-800 to-wine-900 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
            Ready to Find Your Perfect Pairing?
          </h2>
          <p className="text-wine-100 text-lg mb-8">
            Use our free wine pairing tool to discover the best wines for any meal.
          </p>
          <Link
            href="/pair"
            className="inline-flex items-center px-8 py-4 bg-gold-500 text-wine-900 rounded-lg font-semibold text-lg hover:bg-gold-400"
          >
            Start Pairing Now
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
