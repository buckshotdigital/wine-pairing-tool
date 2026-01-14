import type { MetadataRoute } from 'next';
import { wines } from '@/data/wines';
import { foodCategories } from '@/data/foods';

const baseUrl = 'https://wine-pairing-tool.vercel.app';

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    '',
    '/pair',
    '/pricing',
  ];

  const wineRoutes = wines.map((wine) => `/wine/${wine.slug}`);
  const foodRoutes = foodCategories.map((cat) => `/food/${cat.slug}`);

  const allRoutes = [...staticRoutes, ...wineRoutes, ...foodRoutes];

  return allRoutes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '' ? 'weekly' : 'monthly',
    priority: route === '' ? 1 : route.startsWith('/wine') || route.startsWith('/food') ? 0.8 : 0.6,
  }));
}
