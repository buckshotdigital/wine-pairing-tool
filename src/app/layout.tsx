import type { Metadata } from 'next';
import { Playfair_Display, Inter } from 'next/font/google';
import Script from 'next/script';
import { OrganizationSchema } from '@/components/schema/OrganizationSchema';
import './globals.css';

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: 'Wine Pairing Guide - Find the Perfect Wine for Any Food',
  description:
    'Discover perfect wine pairings for any dish. Free wine pairing tool with recommendations for steak, salmon, chicken, pasta, cheese and more. Expert sommelier-level advice.',
  keywords: [
    'wine pairing',
    'wine with food',
    'food and wine',
    'wine pairing guide',
    'best wine for steak',
    'wine with salmon',
    'wine pairing chart',
  ],
  openGraph: {
    title: 'Wine Pairing Guide - Find the Perfect Wine for Any Food',
    description: 'Discover perfect wine pairings for any dish. Free sommelier-level recommendations.',
    type: 'website',
  },
  verification: {
    google: 'XUC0kAyql3EE_w-JCYc1p3kikwYcfPCasNlsmD8jH4w',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <OrganizationSchema />
        <meta name="google-site-verification" content="XUC0kAyql3EE_w-JCYc1p3kikwYcfPCasNlsmD8jH4w" />
        {/* Google Analytics */}
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-408721SC65"
        />
        <Script id="google-analytics">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-408721SC65');
          `}
        </Script>
      </head>
      <body className={`${playfair.variable} ${inter.variable} font-sans`}>{children}</body>
    </html>
  );
}
