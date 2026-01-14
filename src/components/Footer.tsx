import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-wine-950 text-white">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <span className="text-3xl">🍷</span>
              <span className="text-xl font-serif font-bold">WinePair</span>
            </div>
            <p className="text-wine-200 text-sm">
              Expert wine pairing recommendations to elevate your dining experience.
            </p>
          </div>

          {/* Popular Pairings */}
          <div>
            <h4 className="font-semibold mb-4">Popular Pairings</h4>
            <ul className="space-y-2 text-wine-200 text-sm">
              <li><Link href="/food/beef" className="hover:text-white">Wine with Steak</Link></li>
              <li><Link href="/food/seafood" className="hover:text-white">Wine with Salmon</Link></li>
              <li><Link href="/food/poultry" className="hover:text-white">Wine with Chicken</Link></li>
              <li><Link href="/food/pasta" className="hover:text-white">Wine with Pasta</Link></li>
              <li><Link href="/food/cheese" className="hover:text-white">Wine with Cheese</Link></li>
            </ul>
          </div>

          {/* Wine Types */}
          <div>
            <h4 className="font-semibold mb-4">Wine Types</h4>
            <ul className="space-y-2 text-wine-200 text-sm">
              <li><Link href="/wine/cabernet-sauvignon" className="hover:text-white">Cabernet Sauvignon</Link></li>
              <li><Link href="/wine/pinot-noir" className="hover:text-white">Pinot Noir</Link></li>
              <li><Link href="/wine/chardonnay" className="hover:text-white">Chardonnay</Link></li>
              <li><Link href="/wine/sauvignon-blanc" className="hover:text-white">Sauvignon Blanc</Link></li>
              <li><Link href="/wine/rose" className="hover:text-white">Rosé</Link></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-semibold mb-4">Resources</h4>
            <ul className="space-y-2 text-wine-200 text-sm">
              <li><Link href="/pair" className="hover:text-white">Pairing Tool</Link></li>
              <li><Link href="/pricing" className="hover:text-white">Premium</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-wine-800 text-center text-wine-300 text-sm">
          <p>&copy; {new Date().getFullYear()} WinePair. All rights reserved.</p>
          <p className="mt-2">Please drink responsibly. Must be of legal drinking age.</p>
        </div>
      </div>
    </footer>
  );
}
