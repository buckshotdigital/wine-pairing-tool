export interface Food {
  slug: string;
  name: string;
  category: string;
  description: string;
  pairsWith: string[]; // wine slugs
  tips: string;
  keywords: string[]; // SEO keywords
}

export interface FoodCategory {
  slug: string;
  name: string;
  description: string;
  image: string;
  foods: string[]; // food slugs
}

export const foods: Food[] = [
  // BEEF
  {
    slug: 'beef-steak',
    name: 'Steak',
    category: 'beef',
    description: 'Grilled, pan-seared, or broiled beef steak including ribeye, filet mignon, NY strip, and sirloin.',
    pairsWith: ['cabernet-sauvignon', 'malbec', 'syrah', 'merlot', 'zinfandel'],
    tips: 'The fattier the cut, the more tannic the wine should be. Ribeye loves Cabernet; filet pairs well with Merlot.',
    keywords: ['wine with steak', 'steak wine pairing', 'best wine for steak', 'ribeye wine', 'filet mignon wine'],
  },
  {
    slug: 'beef-roast',
    name: 'Roast Beef',
    category: 'beef',
    description: 'Slow-roasted beef including prime rib, pot roast, and beef tenderloin.',
    pairsWith: ['cabernet-sauvignon', 'merlot', 'syrah', 'malbec'],
    tips: 'Match the richness of the roast with a full-bodied red. Consider the sauce - mushroom gravy pairs with Pinot Noir.',
    keywords: ['wine with roast beef', 'prime rib wine pairing', 'pot roast wine'],
  },
  {
    slug: 'burgers',
    name: 'Burgers',
    category: 'beef',
    description: 'Classic beef burgers, cheeseburgers, and gourmet burger variations.',
    pairsWith: ['zinfandel', 'malbec', 'syrah', 'merlot'],
    tips: 'Zinfandel\'s jammy fruit complements burger toppings. For fancy burgers with blue cheese, try a bold Cabernet.',
    keywords: ['wine with burgers', 'burger wine pairing', 'cheeseburger wine'],
  },
  // POULTRY
  {
    slug: 'chicken-roasted',
    name: 'Roasted Chicken',
    category: 'poultry',
    description: 'Whole roasted chicken, roasted chicken pieces, or rotisserie chicken.',
    pairsWith: ['chardonnay', 'pinot-noir', 'merlot', 'rose'],
    tips: 'Oaked Chardonnay matches the richness of roasted chicken skin. For herb-roasted, try Pinot Noir.',
    keywords: ['wine with roasted chicken', 'chicken wine pairing', 'rotisserie chicken wine'],
  },
  {
    slug: 'chicken-grilled',
    name: 'Grilled Chicken',
    category: 'poultry',
    description: 'Grilled chicken breast, thighs, or kebabs with various marinades.',
    pairsWith: ['sauvignon-blanc', 'rose', 'pinot-grigio', 'chardonnay'],
    tips: 'Lighter preparations call for lighter wines. Lemon-herb chicken loves Sauvignon Blanc.',
    keywords: ['wine with grilled chicken', 'grilled chicken wine pairing'],
  },
  {
    slug: 'duck',
    name: 'Duck',
    category: 'poultry',
    description: 'Roasted duck, duck breast, duck confit, and Peking duck.',
    pairsWith: ['pinot-noir', 'syrah', 'riesling', 'merlot'],
    tips: 'Duck\'s richness pairs beautifully with Pinot Noir. For duck with fruit sauce, try an off-dry Riesling.',
    keywords: ['wine with duck', 'duck wine pairing', 'peking duck wine', 'duck confit wine'],
  },
  // PORK
  {
    slug: 'pork',
    name: 'Pork',
    category: 'pork',
    description: 'Pork chops, pork tenderloin, pork roast, and pulled pork.',
    pairsWith: ['pinot-noir', 'riesling', 'chardonnay', 'merlot', 'rose'],
    tips: 'Pork is versatile! Grilled pork chops love Pinot Noir; pulled pork BBQ pairs with Zinfandel.',
    keywords: ['wine with pork', 'pork wine pairing', 'pork chops wine', 'pork tenderloin wine'],
  },
  {
    slug: 'prosciutto',
    name: 'Prosciutto & Charcuterie',
    category: 'pork',
    description: 'Cured meats including prosciutto, salami, coppa, and charcuterie boards.',
    pairsWith: ['prosecco', 'rose', 'pinot-grigio', 'champagne'],
    tips: 'Bubbles cut through the fat of cured meats. Prosecco is the classic Italian pairing.',
    keywords: ['wine with prosciutto', 'charcuterie wine pairing', 'salami wine'],
  },
  // LAMB
  {
    slug: 'lamb',
    name: 'Lamb',
    category: 'lamb',
    description: 'Lamb chops, leg of lamb, lamb shanks, and rack of lamb.',
    pairsWith: ['cabernet-sauvignon', 'syrah', 'malbec', 'pinot-noir'],
    tips: 'Lamb\'s gamey flavor loves bold reds. Syrah\'s pepper notes complement herb-crusted lamb.',
    keywords: ['wine with lamb', 'lamb wine pairing', 'lamb chops wine', 'rack of lamb wine'],
  },
  // SEAFOOD
  {
    slug: 'salmon',
    name: 'Salmon',
    category: 'seafood',
    description: 'Grilled, baked, or pan-seared salmon fillets and salmon steaks.',
    pairsWith: ['pinot-noir', 'chardonnay', 'rose', 'pinot-grigio'],
    tips: 'Salmon is rich enough for light reds like Pinot Noir. Oaked Chardonnay also works beautifully.',
    keywords: ['wine with salmon', 'salmon wine pairing', 'best wine for salmon', 'grilled salmon wine'],
  },
  {
    slug: 'tuna',
    name: 'Tuna',
    category: 'seafood',
    description: 'Seared ahi tuna, tuna steaks, and grilled tuna.',
    pairsWith: ['pinot-noir', 'rose', 'sauvignon-blanc'],
    tips: 'Seared tuna\'s meaty texture can handle light reds. Rosé is a safe, delicious choice.',
    keywords: ['wine with tuna', 'tuna wine pairing', 'ahi tuna wine'],
  },
  {
    slug: 'white-fish',
    name: 'White Fish',
    category: 'seafood',
    description: 'Mild white fish including cod, halibut, sea bass, tilapia, and sole.',
    pairsWith: ['sauvignon-blanc', 'pinot-grigio', 'chardonnay', 'rose'],
    tips: 'Light fish needs light wine. Sauvignon Blanc\'s acidity brightens delicate fish.',
    keywords: ['wine with white fish', 'fish wine pairing', 'cod wine', 'halibut wine'],
  },
  {
    slug: 'shrimp',
    name: 'Shrimp',
    category: 'seafood',
    description: 'Grilled shrimp, shrimp scampi, coconut shrimp, and shrimp cocktail.',
    pairsWith: ['sauvignon-blanc', 'pinot-grigio', 'rose', 'champagne', 'prosecco'],
    tips: 'Garlic shrimp loves Sauvignon Blanc. Fried shrimp pairs surprisingly well with Champagne.',
    keywords: ['wine with shrimp', 'shrimp wine pairing', 'shrimp scampi wine'],
  },
  {
    slug: 'lobster',
    name: 'Lobster',
    category: 'seafood',
    description: 'Steamed lobster, lobster tail, lobster thermidor, and lobster rolls.',
    pairsWith: ['chardonnay', 'champagne', 'sauvignon-blanc'],
    tips: 'Rich lobster deserves rich Chardonnay. With butter, go oaky; for lobster salad, try unoaked.',
    keywords: ['wine with lobster', 'lobster wine pairing', 'lobster tail wine'],
  },
  {
    slug: 'crab',
    name: 'Crab',
    category: 'seafood',
    description: 'Crab legs, crab cakes, soft shell crab, and Dungeness crab.',
    pairsWith: ['chardonnay', 'sauvignon-blanc', 'champagne', 'pinot-grigio'],
    tips: 'Crab cakes pair well with Chardonnay. Crab with Old Bay seasoning loves crisp whites.',
    keywords: ['wine with crab', 'crab wine pairing', 'crab cakes wine', 'crab legs wine'],
  },
  {
    slug: 'oysters',
    name: 'Oysters',
    category: 'seafood',
    description: 'Raw oysters, grilled oysters, and oysters Rockefeller.',
    pairsWith: ['champagne', 'sauvignon-blanc', 'pinot-grigio'],
    tips: 'The classic pairing is Champagne or Chablis. The high acidity and minerality complement briny oysters.',
    keywords: ['wine with oysters', 'oyster wine pairing', 'champagne and oysters'],
  },
  // PASTA
  {
    slug: 'pasta-tomato',
    name: 'Pasta with Tomato Sauce',
    category: 'pasta',
    description: 'Spaghetti marinara, penne arrabbiata, and other tomato-based pasta dishes.',
    pairsWith: ['merlot', 'zinfandel', 'malbec', 'syrah'],
    tips: 'Match the acidity of tomatoes with a wine that has good acidity. Sangiovese is the Italian classic.',
    keywords: ['wine with pasta', 'spaghetti wine pairing', 'marinara wine', 'tomato sauce wine'],
  },
  {
    slug: 'creamy-pasta',
    name: 'Creamy Pasta',
    category: 'pasta',
    description: 'Fettuccine Alfredo, carbonara, and other cream-based pasta dishes.',
    pairsWith: ['chardonnay', 'pinot-grigio', 'prosecco'],
    tips: 'Creamy sauces need wines with good acidity to cut through richness. Oaked Chardonnay is ideal.',
    keywords: ['wine with alfredo', 'carbonara wine pairing', 'cream pasta wine'],
  },
  {
    slug: 'light-pasta',
    name: 'Light Pasta',
    category: 'pasta',
    description: 'Pasta primavera, aglio e olio, and light olive oil-based pasta.',
    pairsWith: ['pinot-grigio', 'sauvignon-blanc', 'rose', 'prosecco'],
    tips: 'Light pasta needs light wine. Prosecco is wonderfully refreshing with simple pasta dishes.',
    keywords: ['wine with pasta primavera', 'light pasta wine pairing'],
  },
  // CHEESE
  {
    slug: 'hard-cheese',
    name: 'Hard Cheese',
    category: 'cheese',
    description: 'Aged cheeses like Parmesan, aged Cheddar, Manchego, and Gruyère.',
    pairsWith: ['cabernet-sauvignon', 'syrah', 'malbec', 'zinfandel'],
    tips: 'The intensity of aged cheese matches bold red wines. Parmesan and Chianti is a classic.',
    keywords: ['wine with cheese', 'parmesan wine pairing', 'cheddar wine', 'cheese wine pairing'],
  },
  {
    slug: 'soft-cheese',
    name: 'Soft Cheese',
    category: 'cheese',
    description: 'Brie, Camembert, Burrata, and fresh Mozzarella.',
    pairsWith: ['champagne', 'chardonnay', 'pinot-noir', 'prosecco'],
    tips: 'Soft, creamy cheeses love bubbles. Champagne with Brie is an elegant pairing.',
    keywords: ['wine with brie', 'soft cheese wine pairing', 'camembert wine'],
  },
  {
    slug: 'goat-cheese',
    name: 'Goat Cheese',
    category: 'cheese',
    description: 'Fresh chèvre, aged goat cheese, and goat cheese salads.',
    pairsWith: ['sauvignon-blanc', 'rose', 'pinot-grigio'],
    tips: 'The tangy nature of goat cheese pairs perfectly with the herbaceous notes of Sauvignon Blanc.',
    keywords: ['wine with goat cheese', 'chevre wine pairing'],
  },
  // VEGETABLES
  {
    slug: 'mushrooms',
    name: 'Mushrooms',
    category: 'vegetables',
    description: 'Sautéed mushrooms, stuffed mushrooms, mushroom risotto, and truffle dishes.',
    pairsWith: ['pinot-noir', 'merlot', 'cabernet-sauvignon', 'chardonnay'],
    tips: 'Earthy Pinot Noir is the perfect match for mushrooms. For truffle dishes, splurge on Burgundy.',
    keywords: ['wine with mushrooms', 'mushroom wine pairing', 'truffle wine'],
  },
  {
    slug: 'grilled-vegetables',
    name: 'Grilled Vegetables',
    category: 'vegetables',
    description: 'Grilled zucchini, peppers, eggplant, asparagus, and vegetable kebabs.',
    pairsWith: ['rose', 'sauvignon-blanc', 'pinot-grigio', 'chardonnay'],
    tips: 'The char on grilled vegetables pairs well with rosé. Asparagus needs high-acid whites.',
    keywords: ['wine with grilled vegetables', 'vegetarian wine pairing', 'asparagus wine'],
  },
  {
    slug: 'salads',
    name: 'Salads',
    category: 'vegetables',
    description: 'Green salads, Caesar salad, and grain bowls with vinaigrette dressing.',
    pairsWith: ['sauvignon-blanc', 'pinot-grigio', 'rose'],
    tips: 'Match the acidity of the dressing. Vinaigrette salads need high-acid wines like Sauvignon Blanc.',
    keywords: ['wine with salad', 'salad wine pairing', 'caesar salad wine'],
  },
  // SPECIAL CUISINES
  {
    slug: 'spicy-asian',
    name: 'Spicy Asian Food',
    category: 'asian',
    description: 'Szechuan, Thai curries, Korean BBQ, and other spicy Asian dishes.',
    pairsWith: ['riesling', 'rose', 'prosecco', 'pinot-grigio'],
    tips: 'Off-dry Riesling is magic with spicy food. The sweetness tames the heat.',
    keywords: ['wine with spicy food', 'thai food wine', 'szechuan wine pairing', 'korean bbq wine'],
  },
  {
    slug: 'sushi',
    name: 'Sushi & Sashimi',
    category: 'asian',
    description: 'Fresh sushi rolls, nigiri, sashimi, and Japanese cuisine.',
    pairsWith: ['champagne', 'sauvignon-blanc', 'pinot-grigio', 'rose', 'riesling'],
    tips: 'Champagne\'s crisp acidity and bubbles cleanse the palate between bites. Sake also works!',
    keywords: ['wine with sushi', 'sushi wine pairing', 'sashimi wine'],
  },
  {
    slug: 'thai-food',
    name: 'Thai Food',
    category: 'asian',
    description: 'Pad Thai, green curry, Tom Yum, and Thai street food.',
    pairsWith: ['riesling', 'rose', 'pinot-grigio', 'sauvignon-blanc'],
    tips: 'German Riesling (Spätlese) is the go-to for Thai food. The sweetness balances spice and aromatics.',
    keywords: ['wine with thai food', 'pad thai wine', 'thai curry wine pairing'],
  },
  {
    slug: 'indian-food',
    name: 'Indian Food',
    category: 'asian',
    description: 'Curry, tandoori, biryani, and Indian vegetarian dishes.',
    pairsWith: ['riesling', 'rose', 'pinot-grigio', 'prosecco'],
    tips: 'Off-dry wines work best with Indian spices. Avoid tannic reds which clash with heat.',
    keywords: ['wine with indian food', 'curry wine pairing', 'tandoori wine'],
  },
  {
    slug: 'mediterranean',
    name: 'Mediterranean Food',
    category: 'mediterranean',
    description: 'Greek food, hummus, falafel, kebabs, and mezze platters.',
    pairsWith: ['rose', 'sauvignon-blanc', 'pinot-grigio', 'prosecco'],
    tips: 'Rosé is perfect for Mediterranean cuisine. Its versatility handles the variety of mezze.',
    keywords: ['wine with mediterranean food', 'greek food wine', 'mezze wine pairing'],
  },
  // BBQ & GRILLED
  {
    slug: 'bbq',
    name: 'BBQ & Smoked Meats',
    category: 'bbq',
    description: 'Ribs, brisket, pulled pork, and smoked meats with BBQ sauce.',
    pairsWith: ['zinfandel', 'syrah', 'malbec', 'merlot'],
    tips: 'Zinfandel\'s bold fruit and spice stands up to smoky, sweet BBQ sauce. It\'s the American classic.',
    keywords: ['wine with bbq', 'bbq wine pairing', 'ribs wine', 'brisket wine'],
  },
  {
    slug: 'game-meat',
    name: 'Game Meat',
    category: 'bbq',
    description: 'Venison, wild boar, elk, and other game meats.',
    pairsWith: ['syrah', 'cabernet-sauvignon', 'pinot-noir', 'malbec'],
    tips: 'Game meat\'s intense flavor needs bold wines. Syrah\'s peppery notes complement venison.',
    keywords: ['wine with venison', 'game meat wine pairing', 'wild boar wine'],
  },
  // OTHER
  {
    slug: 'pizza',
    name: 'Pizza',
    category: 'italian',
    description: 'Classic pizza including Margherita, pepperoni, and specialty pizzas.',
    pairsWith: ['zinfandel', 'merlot', 'rose', 'prosecco'],
    tips: 'Match the toppings: pepperoni loves Zinfandel; veggie pizza pairs with rosé.',
    keywords: ['wine with pizza', 'pizza wine pairing', 'margherita pizza wine'],
  },
  {
    slug: 'fried-foods',
    name: 'Fried Foods',
    category: 'other',
    description: 'Fried chicken, fish and chips, tempura, and other fried dishes.',
    pairsWith: ['champagne', 'prosecco', 'sauvignon-blanc', 'rose'],
    tips: 'Bubbles cut through grease! Champagne with fried chicken is an underrated combo.',
    keywords: ['wine with fried food', 'fried chicken wine', 'tempura wine pairing'],
  },
  {
    slug: 'appetizers',
    name: 'Appetizers & Hors d\'oeuvres',
    category: 'other',
    description: 'Party appetizers, canapés, and finger foods.',
    pairsWith: ['prosecco', 'champagne', 'rose', 'sauvignon-blanc'],
    tips: 'Sparkling wines are perfect party starters. They pair with almost any appetizer.',
    keywords: ['wine with appetizers', 'party wine pairing', 'hors doeuvres wine'],
  },
  {
    slug: 'brunch',
    name: 'Brunch',
    category: 'other',
    description: 'Eggs Benedict, pancakes, French toast, and brunch favorites.',
    pairsWith: ['prosecco', 'champagne', 'rose', 'riesling'],
    tips: 'Mimosas exist for a reason! Light bubbles complement rich brunch dishes.',
    keywords: ['wine with brunch', 'brunch wine pairing', 'mimosa alternatives'],
  },
];

export const foodCategories: FoodCategory[] = [
  {
    slug: 'beef',
    name: 'Beef',
    description: 'Wine pairings for steak, roast beef, burgers, and other beef dishes.',
    image: '🥩',
    foods: ['beef-steak', 'beef-roast', 'burgers'],
  },
  {
    slug: 'poultry',
    name: 'Chicken & Poultry',
    description: 'Wine pairings for chicken, duck, turkey, and other poultry.',
    image: '🍗',
    foods: ['chicken-roasted', 'chicken-grilled', 'duck'],
  },
  {
    slug: 'pork',
    name: 'Pork',
    description: 'Wine pairings for pork chops, tenderloin, and cured meats.',
    image: '🥓',
    foods: ['pork', 'prosciutto'],
  },
  {
    slug: 'lamb',
    name: 'Lamb',
    description: 'Wine pairings for lamb chops, leg of lamb, and lamb dishes.',
    image: '🍖',
    foods: ['lamb'],
  },
  {
    slug: 'seafood',
    name: 'Seafood',
    description: 'Wine pairings for fish, shrimp, lobster, crab, and shellfish.',
    image: '🦞',
    foods: ['salmon', 'tuna', 'white-fish', 'shrimp', 'lobster', 'crab', 'oysters'],
  },
  {
    slug: 'pasta',
    name: 'Pasta',
    description: 'Wine pairings for tomato, cream, and olive oil-based pasta dishes.',
    image: '🍝',
    foods: ['pasta-tomato', 'creamy-pasta', 'light-pasta'],
  },
  {
    slug: 'cheese',
    name: 'Cheese',
    description: 'Wine pairings for hard, soft, and specialty cheeses.',
    image: '🧀',
    foods: ['hard-cheese', 'soft-cheese', 'goat-cheese'],
  },
  {
    slug: 'vegetables',
    name: 'Vegetables',
    description: 'Wine pairings for vegetarian dishes, salads, and grilled vegetables.',
    image: '🥗',
    foods: ['mushrooms', 'grilled-vegetables', 'salads'],
  },
  {
    slug: 'asian',
    name: 'Asian Cuisine',
    description: 'Wine pairings for sushi, Thai, Indian, and other Asian foods.',
    image: '🍜',
    foods: ['spicy-asian', 'sushi', 'thai-food', 'indian-food'],
  },
  {
    slug: 'bbq',
    name: 'BBQ & Grilled',
    description: 'Wine pairings for BBQ ribs, brisket, and smoked meats.',
    image: '🔥',
    foods: ['bbq', 'game-meat'],
  },
];

export const getFoodBySlug = (slug: string): Food | undefined => {
  return foods.find((f) => f.slug === slug);
};

export const getFoodsByCategory = (category: string): Food[] => {
  return foods.filter((f) => f.category === category);
};

export const getCategoryBySlug = (slug: string): FoodCategory | undefined => {
  return foodCategories.find((c) => c.slug === slug);
};

export const getFoodsForWine = (wineSlug: string): Food[] => {
  return foods.filter((f) => f.pairsWith.includes(wineSlug));
};
