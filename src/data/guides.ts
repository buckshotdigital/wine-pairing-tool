export interface MenuSuggestion {
  course: string;
  dishes: string[];
  wines: string[];
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
  faqs: FAQItem[];
}

export const occasionGuides: OccasionGuide[] = [
  {
    slug: 'date-night',
    title: 'Date Night Wine Pairing Guide - Romantic Dinner Ideas',
    occasion: 'Romantic Dinner',
    description:
      'Create the perfect romantic evening with our date night wine pairing guide. Discover wine recommendations for classic dinner menus, from appetizers to dessert, across all budget levels. Expert sommelier-level advice for intimate dinners at home or restaurant selections.',
    excerpt:
      'Expert wine pairing recommendations for date night dinners with romantic menu ideas and wine selections for any budget.',
    keywords: [
      'best wine for date night',
      'romantic dinner wine pairing',
      'date night wine recommendations',
      'romantic wine pairings',
      'dinner date wine ideas',
    ],
    publishedDate: '2026-01-14',
    faqs: [
      {
        question: 'What wine pairs best with a romantic Italian dinner?',
        answer:
          'For Italian pasta dishes with tomato-based sauces, choose Chianti or Barbera. For creamy pasta (Alfredo), pair with Pinot Grigio or Chardonnay. For risotto, Nebbiolo works beautifully. Budget-friendly Italian option: Valpolicella ($15-25). Premium: Brunello di Montalcino ($40-80+). Italian wines enhance the intimacy of a classic date night.',
      },
      {
        question: 'Which wine should I choose for steak on a date?',
        answer:
          'Cabernet Sauvignon is the classic steak pairing—its tannins complement red meat perfectly. Malbec offers a softer, fruit-forward alternative. For budget: Argentinian Malbec ($15-30). Mid-range: California Cabernet ($30-60). Premium: Napa Valley Cab ($60-150+). The wine\'s structure should match the steak\'s richness for maximum romance.',
      },
      {
        question: 'What wine goes with seafood on a romantic dinner?',
        answer:
          'Salmon pairs beautifully with Pinot Noir or light-bodied Syrah. White fish: Sauvignon Blanc or Albariño. Shrimp or scallops: Chardonnay or Viognier. Budget option: Spanish Albariño ($12-20). Mid-range: Oregon Pinot Noir ($25-50). Premium: French white Burgundy ($50-100+). The wine should refresh the palate between bites, enhancing the romantic experience.',
      },
      {
        question: 'How much wine should I buy for a date night dinner?',
        answer:
          'Plan 1-1.5 glasses per person for a 3-4 hour dinner. One bottle (5 glasses) serves 2-3 people comfortably. If unsure about preferences, buy one red and one white. This gives options and creates a sense of abundance. For home dates, having extra prevents awkward shortages.',
      },
      {
        question: 'Should I chill white wine before a date night dinner?',
        answer:
          'Yes, chill white wines 2-3 hours before serving to 45-50°F. Light-bodied whites (Sauvignon Blanc): 45-48°F. Fuller-bodied whites (Chardonnay): 48-52°F. Red wines: serve at 60-65°F (room temperature in cooler homes). Proper temperature enhances flavors and makes the wine more romantic and refreshing.',
      },
      {
        question: 'What dessert wine pairs with chocolate on a date?',
        answer:
          'Port wine is the ultimate chocolate pairing—its sweetness complements chocolate\'s richness. Banyuls (French fortified): similar to Port with dried fruit notes. Moscato d\'Asti: lighter, fruity, and elegant. Budget: Tawny Port ($12-20). Premium: Vintage Port ($40-100+). A dessert wine course extends the romantic evening and leaves a sweet final impression.',
      },
    ],
  },
  {
    slug: 'thanksgiving',
    title: 'Thanksgiving Wine Pairing Guide - Turkey & Sides',
    occasion: 'Holiday Dinner',
    description:
      'Master Thanksgiving wine pairings with our complete guide. Learn which wines pair best with turkey, stuffing, cranberry sauce, and all your favorite Thanksgiving dishes. Create harmony between traditional dishes and wines for a memorable holiday meal.',
    excerpt:
      'Complete Thanksgiving wine pairing guide with recommendations for turkey, sides, and dessert that please diverse palates.',
    keywords: [
      'wine for thanksgiving dinner',
      'what wine with turkey',
      'thanksgiving wine pairing',
      'wine for cranberry sauce',
      'thanksgiving wine recommendations',
    ],
    publishedDate: '2026-01-14',
    faqs: [
      {
        question: 'What is the best wine to pair with turkey?',
        answer:
          'Pinot Noir is the traditional choice—its light tannins and acidity complement turkey without overpowering. Grenache and Syrah also work beautifully. Whites: Chardonnay or Riesling pair well depending on stuffing/sauce. Budget: Oregon Pinot Noir ($15-25). Mid-range: California Pinot ($25-50). Premium: Burgundy Pinot Noir ($50-150+). The wine\'s versatility works with all turkey preparation styles.',
      },
      {
        question: 'How do I pair wine with Thanksgiving sides?',
        answer:
          'Sweet potato casserole: Riesling or Moscato. Stuffing: Grenache or light Syrah. Cranberry sauce: high-acid wines like Riesling prevent the sauce from overwhelming the wine. Brussels sprouts: Pinot Noir. Green bean casserole: Chardonnay. Gravy-heavy dishes: Pinot Noir\'s tannins cut through fat. Offer one primary wine (Pinot Noir) that complements all sides.',
      },
      {
        question: 'Should I serve red or white wine for Thanksgiving?',
        answer:
          'Pinot Noir (light red) is ideal because it works with both turkey and sides. If guests prefer white, Chardonnay or Riesling are excellent. Avoid heavy Cabernet Sauvignon—it overpowers turkey. A mixed table: serve one red (Pinot Noir) and one white (Riesling) to please everyone. This honors Thanksgiving\'s spirit of abundance and accommodation.',
      },
      {
        question: 'How many bottles should I buy for Thanksgiving dinner?',
        answer:
          'Plan 1.5 glasses per adult for a 4-5 hour meal. For 8 people: buy 2-3 bottles total. Calculate more if you\'re serving cocktails beforehand. Have extra on hand—Thanksgiving brings hungry guests who may drink more. Leftover wine stores well and you\'ll use it for cooking or the Friday after.',
      },
      {
        question: 'What wine pairs with Thanksgiving desserts?',
        answer:
          'Pumpkin pie: Riesling or Moscato d\'Asti. Apple pie: light Shiraz or Tawny Port. Pecan pie: Port or Banyuls. Dessert wine course (5 oz glasses): extends the celebration and transitions the meal. Moscato d\'Asti is the safest choice—everyone enjoys its fruity sweetness. Budget: $10-15. Premium: Vintage Port or German Riesling ($40+).',
      },
      {
        question: 'Should wine be chilled for a Thanksgiving dinner?',
        answer:
          'Pinot Noir: slight chill (55-58°F), not room temperature. Whites: 45-50°F. A common mistake is serving Pinot Noir too warm. It tastes better with a slight chill that brings acidity forward. Chill whites 3 hours before dinner. Reds 30 minutes before serving. Proper temperature ensures wines taste their best alongside Thanksgiving flavors.',
      },
    ],
  },
  {
    slug: 'holidays',
    title: 'Holiday Wine Guide - Christmas, New Year & More',
    occasion: 'Holiday Season',
    description:
      'Your complete holiday wine guide covering Christmas, Hanukkah, New Year\'s, Easter and more. Find festive wine pairings and gift-worthy bottles for every celebration. Expert recommendations for holiday entertaining and memorable toast moments.',
    excerpt:
      'Holiday wine pairing guide with recommendations for Christmas, New Year\'s, and other celebrations with gift-worthy bottles.',
    keywords: [
      'christmas dinner wine',
      'holiday party wine',
      'holiday wine gifts',
      'new years eve wine',
      'holiday wine pairing',
    ],
    publishedDate: '2026-01-14',
    faqs: [
      {
        question: 'What wine should I serve at a Christmas dinner?',
        answer:
          'Pinot Noir works with traditional roasted meats. Chardonnay pairs with rich sauces and creamy sides. For festive toasts: Champagne or Prosecco. Conservative choice: Pinot Noir ($20-50) pleases most palates. Premium gift wine: Burgundy Pinot ($60+) impresses guests. Consider your main dish—ham, prime rib, and turkey each have ideal pairings.',
      },
      {
        question: 'What is the best wine for New Year\'s Eve?',
        answer:
          'Champagne or Prosecco for the midnight toast—these sparkling wines symbolize celebration and fresh beginnings. For the evening: serve lighter wines that won\'t overwhelm. Avoid heavy reds at evening parties. Budget: Prosecco ($15-25). Mid-range: French Champagne ($30-60). Premium: Vintage Champagne ($80+). Sparkle, celebration, and joy define New Year\'s wine.',
      },
      {
        question: 'Which wines make good holiday gifts?',
        answer:
          'Bottles under $20: beautiful labels and good quality (Pinot Noir, Riesling, Prosecco). Mid-range ($20-50): wines with personal touches (their favorite varietal). Premium ($50+): rare vintages or prestige Champagne. Wine gift sets: include wine, glasses, food pairings. Add a handwritten note explaining why you chose that wine. Personalised gifts show thoughtfulness—pair wine with their favorite foods.',
      },
      {
        question: 'Should I serve wine warm or cold at holiday parties?',
        answer:
          'Whites and sparklings: chill to 45-50°F. Reds: 60-65°F (slightly cool, not room temperature). Cold wine is refreshing at crowded holiday parties. Warm wine feels heavy and alcohol tastes stronger. Many hosts serve everything too warm. Chill reds 30 minutes before serving. Use ice buckets for whites. Proper temperature makes wine more enjoyable at celebrations.',
      },
      {
        question: 'How much wine should I buy for a holiday party?',
        answer:
          'Plan 1-1.5 glasses per person for a 3-4 hour party. For 20 people: 4-5 bottles. Add extra if it\'s a longer event or pre-dinner drinks. Wine is relatively inexpensive—it\'s better to have leftovers than run short. Unopened bottles store 5+ years (longer for reds). Budget-friendly party: quality Prosecco ($15) and Pinot Noir ($20) please most guests.',
      },
      {
        question: 'What wine pairs with holiday appetizers?',
        answer:
          'Cheese board: Chardonnay, Riesling, or light reds. Charcuterie: Pinot Noir or Grenache. Seafood appetizers: Sauvignon Blanc or Albariño. Bread/pâté: Pinot Noir. Nuts/savory bites: dry sparkling wine. Champagne or Prosecco pairs with almost everything. For mixed appetizer platters, serve one versatile wine: Prosecco or Chardonnay work universally.',
      },
    ],
  },
  {
    slug: 'bbq',
    title: 'BBQ & Grilling Wine Pairing Guide - Meat Lovers Edition',
    occasion: 'Outdoor Entertaining',
    description:
      'Perfect your backyard BBQ with our grilling wine guide. Discover the best wines to pair with ribs, brisket, grilled chicken, and burgers for your next cookout. Expert recommendations for regional BBQ styles and outdoor entertaining.',
    excerpt:
      'BBQ and grilling wine pairing guide with recommendations for ribs, brisket, burgers, and regional BBQ styles.',
    keywords: [
      'best wine for bbq',
      'wine with grilled meat',
      'bbq wine pairings',
      'wine for ribs',
      'wine with brisket',
    ],
    publishedDate: '2026-01-14',
    faqs: [
      {
        question: 'What wine pairs with BBQ ribs?',
        answer:
          'Zinfandel is the classic BBQ wine—its berry flavors and slight spice complement smoky ribs. Grenache and Syrah also work beautifully. The wine\'s fruitiness cuts through the richness of ribs. Budget: California Zinfandel ($15-25). Mid-range: older Zin ($25-50). Premium: reserve Zin ($50+). The wine should be fruit-forward and slightly spicy to honor the BBQ smoke.',
      },
      {
        question: 'What wine should I serve with brisket?',
        answer:
          'Full-bodied reds handle brisket\'s rich, smoky flavors. Cabernet Sauvignon offers tannins that cut through fat. Malbec provides fruit balance. Avoid light wines—they\'re overwhelmed by brisket. Budget: Argentine Malbec ($15-25). Mid-range: Texas Hill Country Cabernet ($30-50). Premium: Napa Cabernet ($60+). Brisket demands a wine with structure and bold character.',
      },
      {
        question: 'Which wine pairs with grilled chicken?',
        answer:
          'Light-bodied reds (Pinot Noir) or full-bodied whites (Chardonnay) work best. If chicken is marinated in Asian spices: Riesling or Gewürztraminer. Lemon/herb grilled chicken: Sauvignon Blanc. Smokier preparations: light Syrah. Budget: Oregon Pinot Noir ($15-25). Chicken\'s lighter flavor allows wine versatility—let marinades guide your choice.',
      },
      {
        question: 'What wine goes with BBQ burgers?',
        answer:
          'Zinfandel or Grenache complement the charred exterior and beef flavor. For cheeseburgers: Merlot or Pinot Noir work well. Spicy burger preparations: Riesling cuts heat. Budget: approachable Zinfandel ($15-20). The wine should be casual and food-friendly, matching the relaxed BBQ setting. Don\'t overthink burger wines—fruit-forward reds are always winners.',
      },
      {
        question: 'How do I pair wine with regional BBQ styles?',
        answer:
          'Texas BBQ (brisket, smoke): Cabernet Sauvignon, Malbec. Carolina BBQ (vinegar-based): Riesling, light reds. Kansas City (tomato-based sauce): Zinfandel, Grenache. Memphis (dry-rubbed): Pinot Noir. Regional pairings enhance authenticity. Serve wines that reflect the BBQ tradition you\'re honoring. This creates a memorable meal that tells a story.',
      },
      {
        question: 'Should I chill red wine for outdoor BBQ?',
        answer:
          'Yes—at outdoor temperatures, slightly cool reds (58-62°F) taste fresher. Chill Zinfandel and Grenache 15-30 minutes before serving. This prevents warm-weather alcohol heat while maintaining flavor. Use ice buckets or a cooler at the grill. Proper temperature makes BBQ wines more refreshing and enjoyable on hot days.',
      },
    ],
  },
];

export const educationalGuides = [
  {
    slug: 'tasting-guide',
    title: 'Wine Tasting Guide - How to Taste Wine Like an Expert',
    type: 'Educational',
    description:
      'Learn the proper wine tasting technique with our comprehensive guide. Master the 5 S\'s of wine tasting, identify flavors and aromas, and develop your palate. Expert sommelier tips for enjoying wine more deeply.',
    keywords: [
      'how to taste wine',
      'wine tasting guide',
      'wine tasting steps',
      'wine aroma wheel',
      'tasting wine properly',
    ],
    publishedDate: '2026-01-14',
    faqs: [
      {
        question: 'What are the 5 S\'s of wine tasting?',
        answer:
          'See (examine color and clarity), Swirl (aerate the wine), Sniff (identify aromas), Sip (taste on your palate), and Savor (note the finish). Each step reveals different information. See tells you the wine\'s age and condition. Swirl releases aromas. Sniff identifies grape variety and oak influence. Sip reveals flavors and structure. Savor shows how long flavors linger. Master these steps and you\'ll taste wine like a professional.',
      },
      {
        question: 'Why should I swirl wine before tasting?',
        answer:
          'Swirling aerates wine, releasing volatile aromatic compounds that give wine its bouquet. Hold the glass by the stem and swirl gently for 3-5 seconds. This simple action dramatically increases your ability to smell the wine\'s character. Swirling is the difference between smelling nothing and identifying complex aromas.',
      },
      {
        question: 'How do I identify wine flavors and aromas?',
        answer:
          'Use the aroma wheel—a visual guide categorizing wine smells into fruit, floral, spice, earthy, and other categories. Smell the wine after swirling. Ask "What fruit does this remind me of?" or "What flowers?" Start broad (fruit vs. spice) then get specific (red fruit vs. stone fruit). This vocabulary develops over time. Don\'t worry about "correct" answers—wine tasting is personal perception.',
      },
      {
        question: 'What is wine\'s "finish" and why does it matter?',
        answer:
          'The finish is how long flavors linger after you swallow. Short finish (seconds): light wines, young wines. Medium finish: balanced wines. Long finish (30+ seconds): premium, complex wines. Quality wines have longer finishes. This indicates complexity, ripeness, and overall quality. A wine\'s finish often determines your overall impression—lingering, pleasant flavors create memorable experiences.',
      },
      {
        question: 'How can I develop my wine tasting skills?',
        answer:
          'Taste regularly and compare. Try the same grape from different regions or vintages. Taste wines side-by-side to identify differences. Take notes on color, aroma, flavor, finish. Join wine clubs or tasting groups. Read about wines before tasting. Over time, your palate learns and your vocabulary expands. Wine tasting is a lifelong skill—enjoy the learning journey.',
      },
      {
        question: 'Should I use the correct glassware for wine tasting?',
        answer:
          'Yes. Wine glasses should be clear, with a bowl shape that tapers at the top. This concentrates aromas. Hold by the stem to keep body heat off the wine. A proper glass costs $3-10. Expensive stemware isn\'t necessary, but shape matters for aroma concentration. This small investment enhances your tasting experience significantly.',
      },
    ],
  },
  {
    slug: 'temperature-guide',
    title: 'Wine Serving Temperature Guide - Perfect Temps for Every Wine',
    type: 'Educational',
    description:
      'Master wine serving temperatures with our complete guide. Learn the ideal temperature for every wine type and how temperature affects flavor and enjoyment. Professional sommelier tips for home entertaining.',
    keywords: [
      'what temperature to serve wine',
      'wine serving temperature chart',
      'wine serving temps by type',
      'how cold to serve wine',
      'wine temperature guide',
    ],
    publishedDate: '2026-01-14',
    faqs: [
      {
        question: 'What is the ideal serving temperature for red wine?',
        answer:
          'Full-bodied reds (Cabernet, Malbec): 60-65°F. Medium-bodied (Pinot Noir, Grenache): 55-60°F. Light-bodied (young reds, Beaujolais): 50-55°F. "Room temperature" (68-72°F) is too warm. Cool red wine emphasizes acidity and freshness. Warm red wine tastes flabby and alcohol overpowers flavor. Slightly cool reds taste balanced and complex.',
      },
      {
        question: 'What is the ideal serving temperature for white wine?',
        answer:
          'Full-bodied whites (Chardonnay, Burgundy): 48-52°F. Light-bodied whites (Sauvignon Blanc, Albariño): 45-48°F. Very light whites (Pinot Grigio): 43-45°F. Sparkling wines: 43-48°F. Too cold mutes flavors. Too warm tastes flabby. The cooler temperature makes white wines refreshing while keeping flavors distinct. Proper temperature is crucial for white wine enjoyment.',
      },
      {
        question: 'How long should I chill wine before serving?',
        answer:
          'White wines: 2-3 hours in a standard freezer at 35-40°F. Sparkling wines: 2-3 hours (don\'t freeze). Red wines: 15-30 minutes in the freezer brings them to ideal temperature. Quick method: place in an ice bucket (ice + water) for 20 minutes. Never freeze wine solid—ice crystals damage flavors. Plan ahead for proper chilling. Temperature management is simple with a wine fridge or cellar.',
      },
      {
        question: 'Does wine temperature change during a meal?',
        answer:
          'Yes. Serve wine slightly cooler than ideal—it will warm as you drink. Red wine warms 5-10°F during a 2-hour dinner. White wine also warms in the glass. Account for this natural warming when serving. Use wine chillers or jackets to maintain temperature. Outdoor or warm-weather entertaining requires more aggressive chilling strategies.',
      },
      {
        question: 'What temperature should dessert wine be served at?',
        answer:
          'Port: 60-65°F (like red wine). Banyuls: 55-60°F. Moscato d\'Asti: 45-48°F (lightly chilled). Late Harvest Riesling: 45-50°F. Sauternes: 50-55°F. Most dessert wines benefit from slight chilling to balance sweetness and alcohol. Chilled dessert wines taste more refreshing. Serve in smaller glasses (2-3 oz) to savor complex flavors.',
      },
      {
        question: 'Can I use a wine fridge instead of chilling in freezer?',
        answer:
          'Yes, a wine fridge is ideal for wine storage and serving. Set to 50-55°F for storage. For serving, remove wine 15-30 minutes before guests arrive and let it adjust to serving temperature. Wine fridges maintain consistent temperature, preventing temperature fluctuations that damage wine. They\'re the best investment for serious wine enthusiasts.',
      },
    ],
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
