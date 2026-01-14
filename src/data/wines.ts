export interface Wine {
  slug: string;
  name: string;
  type: 'red' | 'white' | 'rosé' | 'sparkling' | 'dessert';
  description: string;
  flavor: string;
  body: 'light' | 'medium' | 'full';
  sweetness: 'dry' | 'off-dry' | 'sweet';
  regions: string[];
  grapes: string[];
  servingTemp: string;
  pairsWith: string[]; // food slugs
  affiliateLinks: {
    vivino?: string;
    wine_com?: string;
  };
}

export const wines: Wine[] = [
  // RED WINES
  {
    slug: 'cabernet-sauvignon',
    name: 'Cabernet Sauvignon',
    type: 'red',
    description: 'The king of red wines, known for its bold tannins and dark fruit flavors. Full-bodied with notes of blackcurrant, cedar, and vanilla.',
    flavor: 'Blackcurrant, cedar, tobacco, vanilla, dark chocolate',
    body: 'full',
    sweetness: 'dry',
    regions: ['Napa Valley', 'Bordeaux', 'Chile', 'Australia'],
    grapes: ['Cabernet Sauvignon'],
    servingTemp: '60-65°F (15-18°C)',
    pairsWith: ['beef-steak', 'lamb', 'hard-cheese', 'mushrooms', 'beef-roast'],
    affiliateLinks: {
      vivino: 'https://www.vivino.com/search/wines?q=cabernet%20sauvignon',
      wine_com: 'https://www.wine.com/list/wine/cabernet-sauvignon/7155',
    },
  },
  {
    slug: 'merlot',
    name: 'Merlot',
    type: 'red',
    description: 'A softer, more approachable red wine with plush tannins and ripe fruit flavors. Perfect for those new to red wine.',
    flavor: 'Plum, cherry, chocolate, bay leaf, vanilla',
    body: 'medium',
    sweetness: 'dry',
    regions: ['Bordeaux', 'California', 'Washington State', 'Chile'],
    grapes: ['Merlot'],
    servingTemp: '60-65°F (15-18°C)',
    pairsWith: ['beef-steak', 'pork', 'chicken-roasted', 'pasta-tomato', 'mushrooms'],
    affiliateLinks: {
      vivino: 'https://www.vivino.com/search/wines?q=merlot',
      wine_com: 'https://www.wine.com/list/wine/merlot/7156',
    },
  },
  {
    slug: 'pinot-noir',
    name: 'Pinot Noir',
    type: 'red',
    description: 'An elegant, lighter red wine with silky texture and complex aromas. Known for its versatility with food.',
    flavor: 'Cherry, raspberry, mushroom, earth, spice',
    body: 'light',
    sweetness: 'dry',
    regions: ['Burgundy', 'Oregon', 'New Zealand', 'California'],
    grapes: ['Pinot Noir'],
    servingTemp: '55-60°F (13-16°C)',
    pairsWith: ['salmon', 'duck', 'chicken-roasted', 'mushrooms', 'pork', 'tuna'],
    affiliateLinks: {
      vivino: 'https://www.vivino.com/search/wines?q=pinot%20noir',
      wine_com: 'https://www.wine.com/list/wine/pinot-noir/7157',
    },
  },
  {
    slug: 'syrah',
    name: 'Syrah / Shiraz',
    type: 'red',
    description: 'A bold, spicy red wine with dark fruit and peppery notes. Called Shiraz in Australia, Syrah elsewhere.',
    flavor: 'Blackberry, plum, black pepper, smoke, leather',
    body: 'full',
    sweetness: 'dry',
    regions: ['Rhône Valley', 'Australia', 'California', 'South Africa'],
    grapes: ['Syrah'],
    servingTemp: '60-65°F (15-18°C)',
    pairsWith: ['beef-steak', 'lamb', 'bbq', 'game-meat', 'hard-cheese'],
    affiliateLinks: {
      vivino: 'https://www.vivino.com/search/wines?q=syrah',
      wine_com: 'https://www.wine.com/list/wine/syrah-shiraz/7158',
    },
  },
  {
    slug: 'malbec',
    name: 'Malbec',
    type: 'red',
    description: 'Argentina\'s signature grape, producing rich, velvety wines with dark fruit and smoky notes.',
    flavor: 'Blackberry, plum, cocoa, leather, violet',
    body: 'full',
    sweetness: 'dry',
    regions: ['Argentina', 'Cahors (France)', 'California'],
    grapes: ['Malbec'],
    servingTemp: '60-65°F (15-18°C)',
    pairsWith: ['beef-steak', 'bbq', 'lamb', 'hard-cheese', 'pasta-tomato'],
    affiliateLinks: {
      vivino: 'https://www.vivino.com/search/wines?q=malbec',
      wine_com: 'https://www.wine.com/list/wine/malbec/7155-2008',
    },
  },
  {
    slug: 'zinfandel',
    name: 'Zinfandel',
    type: 'red',
    description: 'California\'s heritage grape, known for jammy fruit flavors and bold, spicy character.',
    flavor: 'Blackberry, jam, pepper, cinnamon, tobacco',
    body: 'full',
    sweetness: 'dry',
    regions: ['California', 'Puglia (Italy)'],
    grapes: ['Zinfandel'],
    servingTemp: '60-65°F (15-18°C)',
    pairsWith: ['bbq', 'pizza', 'burgers', 'hard-cheese', 'pasta-tomato'],
    affiliateLinks: {
      vivino: 'https://www.vivino.com/search/wines?q=zinfandel',
      wine_com: 'https://www.wine.com/list/wine/zinfandel/7159',
    },
  },
  // WHITE WINES
  {
    slug: 'chardonnay',
    name: 'Chardonnay',
    type: 'white',
    description: 'The world\'s most popular white wine, ranging from crisp and mineral to rich and buttery depending on style.',
    flavor: 'Apple, pear, citrus, butter, vanilla (oaked), mineral (unoaked)',
    body: 'medium',
    sweetness: 'dry',
    regions: ['Burgundy', 'California', 'Australia', 'Chile'],
    grapes: ['Chardonnay'],
    servingTemp: '48-55°F (9-13°C)',
    pairsWith: ['chicken-roasted', 'lobster', 'crab', 'salmon', 'creamy-pasta', 'soft-cheese'],
    affiliateLinks: {
      vivino: 'https://www.vivino.com/search/wines?q=chardonnay',
      wine_com: 'https://www.wine.com/list/wine/chardonnay/7151',
    },
  },
  {
    slug: 'sauvignon-blanc',
    name: 'Sauvignon Blanc',
    type: 'white',
    description: 'A zesty, refreshing white wine with bright acidity and herbaceous notes. Perfect for summer.',
    flavor: 'Grapefruit, lime, grass, green bell pepper, gooseberry',
    body: 'light',
    sweetness: 'dry',
    regions: ['Loire Valley', 'New Zealand', 'California', 'South Africa'],
    grapes: ['Sauvignon Blanc'],
    servingTemp: '45-50°F (7-10°C)',
    pairsWith: ['oysters', 'goat-cheese', 'salads', 'white-fish', 'shrimp', 'sushi'],
    affiliateLinks: {
      vivino: 'https://www.vivino.com/search/wines?q=sauvignon%20blanc',
      wine_com: 'https://www.wine.com/list/wine/sauvignon-blanc/7152',
    },
  },
  {
    slug: 'pinot-grigio',
    name: 'Pinot Grigio / Pinot Gris',
    type: 'white',
    description: 'A light, crisp white wine that\'s easy to drink. Italian style is lighter; Alsace style is richer.',
    flavor: 'Lemon, green apple, pear, almond, honey',
    body: 'light',
    sweetness: 'dry',
    regions: ['Italy', 'Alsace', 'Oregon', 'California'],
    grapes: ['Pinot Grigio'],
    servingTemp: '45-50°F (7-10°C)',
    pairsWith: ['white-fish', 'salads', 'light-pasta', 'shrimp', 'sushi'],
    affiliateLinks: {
      vivino: 'https://www.vivino.com/search/wines?q=pinot%20grigio',
      wine_com: 'https://www.wine.com/list/wine/pinot-grigio-pinot-gris/7153',
    },
  },
  {
    slug: 'riesling',
    name: 'Riesling',
    type: 'white',
    description: 'A highly aromatic white wine ranging from bone-dry to lusciously sweet. Known for aging potential.',
    flavor: 'Lime, green apple, peach, honey, petrol (aged)',
    body: 'light',
    sweetness: 'off-dry',
    regions: ['Germany', 'Alsace', 'Austria', 'Washington State'],
    grapes: ['Riesling'],
    servingTemp: '45-50°F (7-10°C)',
    pairsWith: ['spicy-asian', 'pork', 'duck', 'thai-food', 'indian-food', 'sushi'],
    affiliateLinks: {
      vivino: 'https://www.vivino.com/search/wines?q=riesling',
      wine_com: 'https://www.wine.com/list/wine/riesling/7154',
    },
  },
  {
    slug: 'rose',
    name: 'Rosé',
    type: 'rosé',
    description: 'A refreshing pink wine made from red grapes with minimal skin contact. Perfect for warm weather.',
    flavor: 'Strawberry, watermelon, citrus, flowers, herbs',
    body: 'light',
    sweetness: 'dry',
    regions: ['Provence', 'Spain', 'California', 'Italy'],
    grapes: ['Grenache', 'Syrah', 'Mourvèdre', 'Cinsault'],
    servingTemp: '45-55°F (7-13°C)',
    pairsWith: ['salads', 'grilled-vegetables', 'chicken-grilled', 'mediterranean', 'light-pasta', 'shrimp'],
    affiliateLinks: {
      vivino: 'https://www.vivino.com/search/wines?q=rose',
      wine_com: 'https://www.wine.com/list/wine/rose/7150',
    },
  },
  // SPARKLING
  {
    slug: 'champagne',
    name: 'Champagne',
    type: 'sparkling',
    description: 'The world\'s most celebrated sparkling wine, exclusively from the Champagne region of France.',
    flavor: 'Citrus, green apple, brioche, toast, almond',
    body: 'light',
    sweetness: 'dry',
    regions: ['Champagne, France'],
    grapes: ['Chardonnay', 'Pinot Noir', 'Pinot Meunier'],
    servingTemp: '40-45°F (4-7°C)',
    pairsWith: ['oysters', 'caviar', 'fried-foods', 'soft-cheese', 'sushi', 'lobster'],
    affiliateLinks: {
      vivino: 'https://www.vivino.com/search/wines?q=champagne',
      wine_com: 'https://www.wine.com/list/wine/champagne/7171',
    },
  },
  {
    slug: 'prosecco',
    name: 'Prosecco',
    type: 'sparkling',
    description: 'Italy\'s popular sparkling wine, known for its light, fruity character and approachable price.',
    flavor: 'Green apple, pear, white flowers, melon',
    body: 'light',
    sweetness: 'off-dry',
    regions: ['Veneto, Italy'],
    grapes: ['Glera'],
    servingTemp: '40-45°F (4-7°C)',
    pairsWith: ['appetizers', 'light-pasta', 'prosciutto', 'brunch', 'fried-foods'],
    affiliateLinks: {
      vivino: 'https://www.vivino.com/search/wines?q=prosecco',
      wine_com: 'https://www.wine.com/list/wine/prosecco/7171-2011',
    },
  },
];

export const getWineBySlug = (slug: string): Wine | undefined => {
  return wines.find((w) => w.slug === slug);
};

export const getWinesByType = (type: Wine['type']): Wine[] => {
  return wines.filter((w) => w.type === type);
};

export const getWinesForFood = (foodSlug: string): Wine[] => {
  return wines.filter((w) => w.pairsWith.includes(foodSlug));
};
