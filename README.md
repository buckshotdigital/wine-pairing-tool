# WinePair - Wine Pairing Recommendation Tool

A beautiful, SEO-optimized wine pairing web application. Help users find the perfect wine for any dish.

## Features

- **Interactive Pairing Tool** - Search 30+ dishes and get instant wine recommendations
- **SEO Landing Pages** - Dedicated pages for each food category and wine type
- **Affiliate Integration** - Links to Vivino and Wine.com for monetization
- **Premium Subscription** - Stripe integration for premium features
- **Mobile Responsive** - Beautiful design on all devices

## Revenue Streams

1. **Affiliate Links** - Earn commission when users buy wine through Vivino/Wine.com links
2. **Premium Subscription** - $4.99/month for advanced features
3. **Display Ads** - Add AdSense once you have traffic

## Quick Start

### Prerequisites
- Node.js 18+
- Stripe account (for payments)

### Step 1: Install Dependencies

```bash
cd wine-pairing-tool
npm install
```

### Step 2: Set Up Environment Variables

```bash
copy .env.example .env.local
```

Edit `.env.local` with your Stripe keys from https://dashboard.stripe.com/apikeys

### Step 3: Run Locally

```bash
npm run dev
```

Open http://localhost:3000

---

## Deploy to Vercel (Free)

### Step 1: Push to GitHub

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/wine-pairing-tool.git
git push -u origin main
```

### Step 2: Deploy on Vercel

1. Go to https://vercel.com/new
2. Import your GitHub repository
3. Add environment variables:
   - `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY`
   - `STRIPE_SECRET_KEY`
   - `STRIPE_PRICE_ID`
   - `NEXT_PUBLIC_DOMAIN` (your Vercel URL)
4. Click **Deploy**

### Step 3: Update Sitemap URLs

After deploying, update these files with your actual domain:
- `src/app/sitemap.ts` - Change `baseUrl`
- `src/app/robots.ts` - Change sitemap URL

---

## Affiliate Programs to Join

1. **Vivino Affiliate** - https://www.vivino.com/affiliates
2. **Wine.com Affiliate** - https://www.wine.com/content/affiliate-program
3. **CJ Affiliate** - Has multiple wine retailers

Update the affiliate links in `src/data/wines.ts` with your tracking codes.

---

## SEO Strategy

### Target Keywords (Monthly Search Volume)

| Keyword | Volume | Page |
|---------|--------|------|
| wine pairing | 40k | Home |
| wine with steak | 12k | /food/beef |
| wine with salmon | 8k | /food/seafood |
| wine with chicken | 6k | /food/poultry |
| cabernet sauvignon pairing | 4k | /wine/cabernet-sauvignon |

### Content Ideas for Blog (Add Later)

1. "The Complete Wine Pairing Chart"
2. "Red Wine vs White Wine: When to Choose Each"
3. "Wine Pairing for Beginners"
4. "Best Wines Under $20"

---

## Marketing Plan

### Launch Checklist

- [ ] Submit sitemap to Google Search Console
- [ ] Post on r/wine, r/cooking, r/foodhacks
- [ ] Submit to Product Hunt
- [ ] Create Pinterest pins for each pairing
- [ ] Share on wine Facebook groups

### Ongoing

- Add 2-3 new food pairings per week
- Create infographics for Pinterest
- Guest post on food/wine blogs

---

## Customization

### Add More Wines

Edit `src/data/wines.ts` to add new wine varieties.

### Add More Foods

Edit `src/data/foods.ts` to add new dishes and categories.

### Change Colors

Edit `tailwind.config.js` to customize the wine color palette.

---

## Revenue Projections

| Month | Traffic | Affiliate Revenue | Premium Subs | Total |
|-------|---------|-------------------|--------------|-------|
| 1 | 500 | $25 | 5 ($25) | $50 |
| 3 | 2,000 | $100 | 20 ($100) | $200 |
| 6 | 8,000 | $400 | 80 ($400) | $800 |
| 12 | 25,000 | $1,250 | 150 ($750) | $2,000 |

---

## License

MIT License - Use commercially, modify freely.
