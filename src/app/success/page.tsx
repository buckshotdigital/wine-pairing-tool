'use client';

import Link from 'next/link';

export default function SuccessPage() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-lg p-8 text-center">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <svg
            className="w-8 h-8 text-green-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>

        <h1 className="text-2xl font-bold text-gray-900 mb-2">Welcome to Premium!</h1>
        <p className="text-gray-600 mb-6">
          Your upgrade was successful. You now have access to all premium wine pairing features.
        </p>

        <div className="bg-wine-50 rounded-lg p-4 mb-6">
          <p className="font-semibold text-wine-800">Premium Features Unlocked</p>
          <ul className="text-sm mt-2 space-y-1 text-left text-wine-700">
            <li>✓ 50+ wine varieties</li>
            <li>✓ Save unlimited pairings</li>
            <li>✓ Regional wine recommendations</li>
            <li>✓ Ad-free experience</li>
          </ul>
        </div>

        <Link
          href="/pair"
          className="inline-flex items-center justify-center w-full py-3 px-6 bg-wine-600 text-white rounded-lg font-medium hover:bg-wine-700"
        >
          Start Exploring Pairings
          <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M13 7l5 5m0 0l-5 5m5-5H6"
            />
          </svg>
        </Link>

        <Link href="/" className="block mt-4 text-gray-600 hover:text-gray-900 text-sm">
          Return to Home
        </Link>
      </div>
    </div>
  );
}
