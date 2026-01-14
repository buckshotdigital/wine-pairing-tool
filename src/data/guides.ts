export interface MenuSuggestion {
  course: string;
  dishes: string[];
  pairedWines: string[];
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface OccasionGuide {
  slug: string;
  title: string;
  occasion: string;
  description: string;
  keywords: string[];
  publishedDate: string;
  excerpt: string;
  budgetOptions: string[];
}

export const occasionGuides: OccasionGuide[] = [
  {
    slug: 'date-night',
    title: 'Date Night Wine Pairing Guide - Romantic Dinner Ideas',
    occasion: 'Romantic Dinner',
    description:
      'Create the perfect romantic evening with our date night wine pairing guide. Discover wine recommendations for classic dinner menus, from appetizers to dessert, across all budget levels.',
    excerpt:
      'Expert wine pairing recommendations for date night dinners with romantic menu ideas and wine selections for any budget.',
    keywords: [
      'best wine for date night',
      'romantic dinner wine pairing',
      'date night wine recommendations',
      'romantic wine pairings',
      'dinner date wine ideas',
    ],
    budgetOptions: ['Budget-Friendly ($15-30)', 'Mid-Range ($30-75)', 'Premium ($75+)'],
    publishedDate: '2026-01-14',
  },
  {
    slug: 'thanksgiving',
    title: 'Thanksgiving Wine Pairing Guide - Turkey & Sides',
    occasion: 'Holiday Dinner',
    description:
      'Master Thanksgiving wine pairings with our complete guide. Learn which wines pair best with turkey, stuffing, cranberry sauce, and all your favorite Thanksgiving dishes.',
    excerpt:
      'Complete Thanksgiving wine pairing guide with recommendations for turkey, sides, and dessert that please diverse palates.',
    keywords: [
      'wine for thanksgiving dinner',
      'what wine with turkey',
      'thanksgiving wine pairing',
      'wine for cranberry sauce',
      'thanksgiving wine recommendations',
    ],
    budgetOptions: ['Budget-Friendly ($12-25)', 'Mid-Range ($25-60)', 'Premium ($60+)'],
    publishedDate: '2026-01-14',
  },
  {
    slug: 'holidays',
    title: 'Holiday Wine Guide - Christmas, New Year & More',
    occasion: 'Holiday Season',
    description:
      'Your complete holiday wine guide covering Christmas, Hanukkah, New Year\'s, Easter and more. Find festive wine pairings and gift-worthy bottles for every celebration.',
    excerpt:
      'Holiday wine pairing guide with recommendations for Christmas, New Year\'s, and other celebrations with gift-worthy bottles.',
    keywords: [
      'christmas dinner wine',
      'holiday party wine',
      'holiday wine gifts',
      'new years eve wine',
      'holiday wine pairing',
    ],
    budgetOptions: ['Budget-Friendly ($15-35)', 'Mid-Range ($35-80)', 'Premium ($80+)'],
    publishedDate: '2026-01-14',
  },
  {
    slug: 'bbq',
    title: 'BBQ & Grilling Wine Pairing Guide - Meat Lovers Edition',
    occasion: 'Outdoor Entertaining',
    description:
      'Perfect your backyard BBQ with our grilling wine guide. Discover the best wines to pair with ribs, brisket, grilled chicken, and burgers for your next cookout.',
    excerpt:
      'BBQ and grilling wine pairing guide with recommendations for ribs, brisket, burgers, and regional BBQ styles.',
    keywords: [
      'best wine for bbq',
      'wine with grilled meat',
      'bbq wine pairings',
      'wine for ribs',
      'wine with brisket',
    ],
    budgetOptions: ['Budget-Friendly ($12-25)', 'Mid-Range ($25-50)', 'Premium ($50+)'],
    publishedDate: '2026-01-14',
  },
];

export const educationalGuides = [
  {
    slug: 'tasting-guide',
    title: 'Wine Tasting Guide - How to Taste Wine Like an Expert',
    type: 'Educational',
    description:
      'Learn the proper wine tasting technique with our comprehensive guide. Master the 5 S\'s of wine tasting, identify flavors and aromas, and develop your palate.',
    keywords: [
      'how to taste wine',
      'wine tasting guide',
      'wine tasting steps',
      'wine aroma wheel',
      'tasting wine properly',
    ],
    publishedDate: '2026-01-14',
  },
  {
    slug: 'temperature-guide',
    title: 'Wine Serving Temperature Guide - Perfect Temps for Every Wine',
    type: 'Educational',
    description:
      'Master wine serving temperatures with our complete guide. Learn the ideal temperature for every wine type and how temperature affects flavor and enjoyment.',
    keywords: [
      'what temperature to serve wine',
      'wine serving temperature chart',
      'wine serving temps by type',
      'how cold to serve wine',
      'wine temperature guide',
    ],
    publishedDate: '2026-01-14',
  },
];

export function getOccasionGuideBySlug(slug: string): OccasionGuide | undefined {
  return occasionGuides.find((guide) => guide.slug === slug);
}

export function getAllOccasionGuides(): OccasionGuide[] {
  return occasionGuides;
}

export function getEducationalGuideBySlug(slug: string) {
  return educationalGuides.find((guide) => guide.slug === slug);
}

export function getAllEducationalGuides() {
  return educationalGuides;
}
