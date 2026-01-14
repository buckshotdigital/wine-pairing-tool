'use client';

import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WineCard from '@/components/WineCard';
import { foods, foodCategories } from '@/data/foods';
import { wines, getWinesForFood } from '@/data/wines';

export default function PairPage() {
  const [selectedFood, setSelectedFood] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');

  const filteredFoods = foods.filter((food) => {
    const matchesSearch = food.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      food.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = !selectedCategory || food.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const selectedFoodData = selectedFood ? foods.find((f) => f.slug === selectedFood) : null;
  const recommendedWines = selectedFood ? getWinesForFood(selectedFood) : [];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <main className="max-w-7xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-serif font-bold text-gray-900 mb-4">
            Wine Pairing Finder
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Select what you&apos;re eating and we&apos;ll recommend the perfect wines to pair with it.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Food Selection Panel */}
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              1. What are you eating?
            </h2>

            {/* Search */}
            <div className="relative mb-4">
              <input
                type="text"
                placeholder="Search for a dish..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-4 py-3 pl-10 border border-gray-200 rounded-lg focus:ring-2 focus:ring-wine-500 focus:border-wine-500"
              />
              <svg
                className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-2 mb-4">
              <button
                onClick={() => setSelectedCategory(null)}
                className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${
                  !selectedCategory
                    ? 'bg-wine-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                All
              </button>
              {foodCategories.map((cat) => (
                <button
                  key={cat.slug}
                  onClick={() => setSelectedCategory(cat.slug)}
                  className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${
                    selectedCategory === cat.slug
                      ? 'bg-wine-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {cat.image} {cat.name}
                </button>
              ))}
            </div>

            {/* Food List */}
            <div className="max-h-96 overflow-y-auto space-y-2">
              {filteredFoods.map((food) => (
                <button
                  key={food.slug}
                  onClick={() => setSelectedFood(food.slug)}
                  className={`w-full text-left p-4 rounded-lg border transition-all ${
                    selectedFood === food.slug
                      ? 'border-wine-500 bg-wine-50'
                      : 'border-gray-200 hover:border-wine-300 hover:bg-gray-50'
                  }`}
                >
                  <div className="font-medium text-gray-900">{food.name}</div>
                  <div className="text-sm text-gray-500">{food.description}</div>
                </button>
              ))}
            </div>
          </div>

          {/* Wine Recommendations Panel */}
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              2. Recommended Wines
            </h2>

            {selectedFoodData ? (
              <div>
                <div className="bg-wine-50 rounded-lg p-4 mb-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-semibold text-wine-800">Pairing for:</span>
                    <button
                      onClick={() => setSelectedFood(null)}
                      className="text-wine-600 text-sm hover:underline"
                    >
                      Clear
                    </button>
                  </div>
                  <div className="text-xl font-serif text-gray-900">{selectedFoodData.name}</div>
                  <p className="text-sm text-gray-600 mt-2">💡 {selectedFoodData.tips}</p>
                </div>

                <div className="space-y-4">
                  {recommendedWines.map((wine) => (
                    <WineCard key={wine.slug} wine={wine} showAffiliateLinks />
                  ))}
                </div>
              </div>
            ) : (
              <div className="text-center py-16 text-gray-500">
                <span className="text-6xl block mb-4">🍷</span>
                <p className="text-lg">Select a dish to see wine recommendations</p>
              </div>
            )}
          </div>
        </div>

        {/* Quick Pairing Chart */}
        <div className="mt-16">
          <h2 className="text-2xl font-serif font-bold text-gray-900 mb-6 text-center">
            Quick Pairing Reference
          </h2>
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <table className="w-full">
              <thead className="bg-wine-800 text-white">
                <tr>
                  <th className="px-6 py-4 text-left">Food</th>
                  <th className="px-6 py-4 text-left">Best Wines</th>
                  <th className="px-6 py-4 text-left hidden md:table-cell">Why It Works</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {[
                  { food: '🥩 Steak', wines: 'Cabernet Sauvignon, Malbec', why: 'Bold tannins cut through fat' },
                  { food: '🐟 Salmon', wines: 'Pinot Noir, Chardonnay', why: 'Rich fish handles light reds' },
                  { food: '🍗 Chicken', wines: 'Chardonnay, Pinot Noir', why: 'Versatile protein, versatile wines' },
                  { food: '🦞 Lobster', wines: 'Champagne, Chardonnay', why: 'Richness meets richness' },
                  { food: '🍝 Pasta', wines: 'Match the sauce', why: 'Tomato=red, Cream=white' },
                  { food: '🧀 Cheese', wines: 'Varies by cheese', why: 'Soft=bubbles, Hard=bold reds' },
                ].map((row, i) => (
                  <tr key={i} className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium">{row.food}</td>
                    <td className="px-6 py-4 text-gray-600">{row.wines}</td>
                    <td className="px-6 py-4 text-gray-500 hidden md:table-cell">{row.why}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
