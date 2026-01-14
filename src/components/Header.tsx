'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white/80 backdrop-blur-md border-b border-wine-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-3xl">🍷</span>
            <span className="text-xl font-serif font-bold text-wine-800">WinePair</span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/pair" className="text-gray-700 hover:text-wine-600 font-medium">
              Find Pairing
            </Link>
            <div className="relative group">
              <button className="text-gray-700 hover:text-wine-600 font-medium flex items-center">
                By Food
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
                <Link href="/food/beef" className="block px-4 py-2 hover:bg-wine-50 text-gray-700">Beef</Link>
                <Link href="/food/seafood" className="block px-4 py-2 hover:bg-wine-50 text-gray-700">Seafood</Link>
                <Link href="/food/poultry" className="block px-4 py-2 hover:bg-wine-50 text-gray-700">Poultry</Link>
                <Link href="/food/pasta" className="block px-4 py-2 hover:bg-wine-50 text-gray-700">Pasta</Link>
                <Link href="/food/cheese" className="block px-4 py-2 hover:bg-wine-50 text-gray-700">Cheese</Link>
              </div>
            </div>
            <div className="relative group">
              <button className="text-gray-700 hover:text-wine-600 font-medium flex items-center">
                By Wine
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
                <Link href="/wine/cabernet-sauvignon" className="block px-4 py-2 hover:bg-wine-50 text-gray-700">Cabernet Sauvignon</Link>
                <Link href="/wine/pinot-noir" className="block px-4 py-2 hover:bg-wine-50 text-gray-700">Pinot Noir</Link>
                <Link href="/wine/chardonnay" className="block px-4 py-2 hover:bg-wine-50 text-gray-700">Chardonnay</Link>
                <Link href="/wine/sauvignon-blanc" className="block px-4 py-2 hover:bg-wine-50 text-gray-700">Sauvignon Blanc</Link>
                <Link href="/wine/rose" className="block px-4 py-2 hover:bg-wine-50 text-gray-700">Rosé</Link>
              </div>
            </div>
            <Link
              href="/pricing"
              className="px-4 py-2 bg-wine-600 text-white rounded-lg hover:bg-wine-700 font-medium"
            >
              Go Premium
            </Link>
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-gray-700"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-100">
            <Link href="/pair" className="block py-2 text-gray-700">Find Pairing</Link>
            <Link href="/food/beef" className="block py-2 text-gray-700">Beef Pairings</Link>
            <Link href="/food/seafood" className="block py-2 text-gray-700">Seafood Pairings</Link>
            <Link href="/wine/cabernet-sauvignon" className="block py-2 text-gray-700">Cabernet Sauvignon</Link>
            <Link href="/pricing" className="block py-2 text-wine-600 font-medium">Go Premium</Link>
          </div>
        )}
      </div>
    </header>
  );
}
