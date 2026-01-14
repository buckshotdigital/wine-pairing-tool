import type { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import { occasionGuides, getOccasionGuideBySlug } from '@/data/guides';
import { ArticleSchema } from '@/components/schema/ArticleSchema';
import { BreadcrumbSchema } from '@/components/schema/BreadcrumbSchema';

interface PageProps {
  params: Promise<{ occasion: string }>;
}

export async function generateStaticParams() {
  return occasionGuides.map((guide) => ({
    occasion: guide.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { occasion } = await params;
  const guide = getOccasionGuideBySlug(occasion);

  if (!guide) {
    return { title: 'Not Found' };
  }

  return {
    title: `${guide.title} | Wine Pairing Tool`,
    description: guide.description,
    keywords: guide.keywords,
    alternates: {
      canonical: `https://wine-pairing-tool.vercel.app/guides/${occasion}`,
    },
  };
}

export default async function OccasionGuidePage({ params }: PageProps) {
  const { occasion } = await params;
  const guide = getOccasionGuideBySlug(occasion);

  if (!guide) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header />
        <main className="max-w-3xl mx-auto px-4 py-16">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Guide Not Found</h1>
          <p className="text-gray-600 mb-8">
            The guide you're looking for doesn't exist.
          </p>
          <Link href="/" className="text-wine-600 hover:text-wine-700">
            Back Home
          </Link>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <ArticleSchema
        title={guide.title}
        description={guide.description}
        publishedDate={guide.publishedDate}
        modifiedDate={guide.publishedDate}
      />
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: 'https://wine-pairing-tool.vercel.app' },
          { name: 'Guides', url: 'https://wine-pairing-tool.vercel.app/guides' },
          { name: guide.title, url: `https://wine-pairing-tool.vercel.app/guides/${guide.slug}` },
        ]}
      />
      <Header />

      <main className="max-w-3xl mx-auto px-4 py-16">
        <article>
          {/* Breadcrumb */}
          <nav className="text-sm text-gray-500 mb-8">
            <Link href="/" className="hover:text-wine-600">
              Home
            </Link>
            <span className="mx-2">/</span>
            <span>{guide.title}</span>
          </nav>

          {/* Header */}
          <header className="mb-12">
            <span className="inline-block px-3 py-1 bg-wine-100 text-wine-700 rounded-full text-sm font-medium mb-4">
              {guide.occasion}
            </span>
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-4">
              {guide.title}
            </h1>
            <p className="text-xl text-gray-600">
              {guide.description}
            </p>
            <div className="flex items-center text-sm text-gray-500 mt-6">
              <span>Published: {new Date(guide.publishedDate).toLocaleDateString()}</span>
            </div>
          </header>

          {/* Budget Options */}
          <div className="bg-wine-50 rounded-lg p-6 mb-12 border border-wine-200">
            <h2 className="text-lg font-bold text-gray-900 mb-4">Wine Budget Options</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {guide.budgetOptions.map((option) => (
                <div key={option} className="text-center p-3 bg-white rounded border border-wine-100">
                  <p className="text-sm font-medium text-gray-700">{option}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Table of Contents */}
          <div className="bg-gray-100 rounded-lg p-6 mb-12">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Table of Contents</h2>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#overview" className="text-wine-600 hover:text-wine-700">
                  1. Overview
                </Link>
              </li>
              <li>
                <Link href="#wine-selections" className="text-wine-600 hover:text-wine-700">
                  2. Wine Selections by Budget
                </Link>
              </li>
              <li>
                <Link href="#pairing-tips" className="text-wine-600 hover:text-wine-700">
                  3. Pairing Tips
                </Link>
              </li>
              <li>
                <Link href="#menu-ideas" className="text-wine-600 hover:text-wine-700">
                  4. Menu Ideas
                </Link>
              </li>
              <li>
                <Link href="#faq" className="text-wine-600 hover:text-wine-700">
                  5. FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Content */}
          <div className="prose prose-lg max-w-none">
            <h2 id="overview" className="text-2xl font-bold text-gray-900 mt-10 mb-4">
              {guide.occasion} Wine Pairing Overview
            </h2>
            <p className="text-gray-600 mb-4">
              When planning a {guide.occasion.toLowerCase()}, wine selection can elevate the entire experience. Whether you're celebrating with close friends or hosting a larger gathering, the right wines enhance your menu and create memorable moments.
            </p>

            <h2 id="wine-selections" className="text-2xl font-bold text-gray-900 mt-10 mb-4">
              Wine Selections by Budget
            </h2>
            <p className="text-gray-600 mb-6">
              Great wines are available at every price point. Here are excellent options across different budgets:
            </p>

            {guide.budgetOptions.map((budget, index) => (
              <div key={budget} className="mb-8">
                <h3 className="font-semibold text-gray-900 mb-3">{budget}</h3>
                <p className="text-gray-600 mb-3">
                  {index === 0
                    ? 'Get excellent quality without breaking the bank. These wines offer great value and pair beautifully with most dishes.'
                    : index === 1
                      ? 'Mid-range wines offer sophisticated flavors and complexity. Perfect for creating an impressive table without excessive expense.'
                      : 'Premium selections for special occasions. These wines deliver exceptional quality and will impress any guest.'}
                </p>
                <div className="bg-gray-50 p-4 rounded border border-gray-200">
                  <p className="text-sm text-gray-600">
                    Explore wines in this price range using our pairing tool. Choose wines that match your menu and occasion.
                  </p>
                </div>
              </div>
            ))}

            <h2 id="pairing-tips" className="text-2xl font-bold text-gray-900 mt-10 mb-4">
              Wine Pairing Tips for {guide.occasion}
            </h2>
            <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-6">
              <li>Consider the season and occasion when selecting wine styles</li>
              <li>Choose wines that complement all dishes in your menu</li>
              <li>Balance acidity, tannin, and sweetness with your food</li>
              <li>Chill wines to the appropriate temperature before serving</li>
              <li>Offer options for varying taste preferences</li>
              <li>Calculate quantities based on number of guests</li>
            </ul>

            <h2 id="menu-ideas" className="text-2xl font-bold text-gray-900 mt-10 mb-4">
              Menu & Pairing Ideas
            </h2>
            <p className="text-gray-600 mb-4">
              Use our interactive pairing tool to find the perfect wines for your specific menu choices. Search by food type or wine variety to discover unexpected pairings.
            </p>

            <h2 id="faq" className="text-2xl font-bold text-gray-900 mt-10 mb-4">
              Frequently Asked Questions
            </h2>
            <dl className="space-y-6">
              <div>
                <dt className="font-semibold text-gray-900 mb-2">
                  How much wine should I plan for per guest?
                </dt>
                <dd className="text-gray-600">
                  Plan for about 1.5 glasses per person for a 3-4 hour event. For a dinner, 2-3 glasses per person is typical. It's better to have extra than to run short.
                </dd>
              </div>
              <div>
                <dt className="font-semibold text-gray-900 mb-2">
                  When should I open wine before serving?
                </dt>
                <dd className="text-gray-600">
                  Most wines can be opened just before serving. However, red wines benefit from 15-30 minutes of aeration. Decanting older wines 30-60 minutes before serving allows them to fully breathe.
                </dd>
              </div>
              <div>
                <dt className="font-semibold text-gray-900 mb-2">
                  Should I serve red and white wines together?
                </dt>
                <dd className="text-gray-600">
                  Absolutely. For a {guide.occasion.toLowerCase()}, offering both red and white options ensures guests can choose based on their preference and the dishes served.
                </dd>
              </div>
              <div>
                <dt className="font-semibold text-gray-900 mb-2">
                  Can I prepare in advance?
                </dt>
                <dd className="text-gray-600">
                  Yes. Buy wines 1-2 weeks ahead and store them properly. Prepare serving glasses and decanters the day before. Chill white wines a few hours before the event.
                </dd>
              </div>
            </dl>
          </div>

          {/* CTA */}
          <div className="mt-16 p-8 bg-gradient-to-r from-wine-50 to-wine-100 rounded-lg border border-wine-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Find Your Perfect Pairing
            </h3>
            <p className="text-gray-700 mb-6">
              Use our interactive wine pairing tool to discover wines that match your specific menu for this {guide.occasion.toLowerCase()}.
            </p>
            <Link
              href="/pair"
              className="inline-block bg-wine-600 hover:bg-wine-700 text-white font-bold py-3 px-6 rounded-lg transition"
            >
              Find Wine Pairings
            </Link>
          </div>

          {/* Related Articles */}
          <div className="mt-12 pt-12 border-t border-gray-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">More Wine Guides</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {occasionGuides
                .filter((g) => g.slug !== guide.slug)
                .slice(0, 2)
                .map((relatedGuide) => (
                  <Link
                    key={relatedGuide.slug}
                    href={`/guides/${relatedGuide.slug}`}
                    className="p-4 border border-gray-200 rounded-lg hover:border-wine-600 hover:bg-wine-50 transition"
                  >
                    <h4 className="font-semibold text-gray-900 mb-2">
                      {relatedGuide.title}
                    </h4>
                    <p className="text-sm text-gray-600">
                      {relatedGuide.excerpt}
                    </p>
                  </Link>
                ))}
            </div>
          </div>
        </article>
      </main>
    </div>
  );
}
