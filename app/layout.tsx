import type { Metadata } from 'next';
import { Cairo, Amiri } from 'next/font/google';
import './globals.css';

// تحميل خط Cairo للنصوص العامة
const cairo = Cairo({
  subsets: ['arabic', 'latin'],
  variable: '--font-cairo',
  display: 'swap',
  weight: ['300', '400', '600', '700', '900'],
});

// تحميل خط Amiri للعناوين الكبيرة
const amiri = Amiri({
  subsets: ['arabic', 'latin'],
  variable: '--font-amiri',
  display: 'swap',
  weight: ['400', '700'],
});

// بيانات SEO الأساسية
export const metadata: Metadata = {
  title: 'شاورما كيت | ينتقي بعناية مذاق الأصالة',
  description: 'قائمة طعام شاورما كيت في المدينة المنورة - شاورما دجاج ولحم وخبز البر والمشروبات. مفتوح 4:30 عصراً حتى 4:30 فجراً. اطلب عبر واتساب أو تطبيقات التوصيل.',
  keywords: ['شاورما', 'شاورما كيت', 'مطعم شاورما', 'المدينة المنورة', 'شاورما دجاج', 'شاورما لحم', 'طلب طعام'],
  authors: [{ name: 'شاورما كيت' }],
  creator: 'شاورما كيت',
  publisher: 'شاورما كيت',
  metadataBase: new URL('https://shawarmakit.vercel.app'),
  alternates: {
    canonical: '/',
    languages: { 'ar-SA': '/' },
  },
  openGraph: {
    type: 'website',
    locale: 'ar_SA',
    url: 'https://shawarmakit.vercel.app',
    siteName: 'شاورما كيت',
    title: 'شاورما كيت | ينتقي بعناية مذاق الأصالة',
    description: 'قائمة طعام شاورما كيت في المدينة المنورة. مفتوح 4:30 عصراً حتى 4:30 فجراً.',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'شاورما كيت' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'شاورما كيت | ينتقي بعناية مذاق الأصالة',
    description: 'قائمة طعام شاورما كيت في المدينة المنورة',
    images: ['/og-image.jpg'],
  },
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/icon-192.png', sizes: '192x192', type: 'image/png' },
      { url: '/icon-512.png', sizes: '512x512', type: 'image/png' },
    ],
    apple: [{ url: '/apple-touch-icon.png' }],
  },
  manifest: '/manifest.json',
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
  },
  themeColor: '#B04000',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: 'شاورما كيت',
  },
};

// Schema.org JSON-LD للمطعم
const restaurantSchema = {
  '@context': 'https://schema.org',
  '@type': 'Restaurant',
  name: 'شاورما كيت',
  description: 'ينتقي بعناية مذاق الأصالة',
  url: 'https://shawarmakit.vercel.app',
  telephone: '+966566102425',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'طريق السلام بعد محطة نجم الطاقة',
    addressLocality: 'المدينة المنورة',
    addressRegion: 'منطقة المدينة المنورة',
    addressCountry: 'SA',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 24.5247,
    longitude: 39.5692,
  },
  openingHours: ['Mo-Su 16:30-04:30'],
  servesCuisine: ['شاورما', 'مأكولات عربية', 'وجبات سريعة'],
  priceRange: '﷼﷼',
  image: 'https://shawarmakit.vercel.app/og-image.jpg',
  sameAs: [
    'https://www.instagram.com/shawarma_kit',
    'https://www.tiktok.com/@shawarma.kit',
  ],
  hasMenu: {
    '@type': 'Menu',
    name: 'قائمة طعام شاورما كيت',
    url: 'https://shawarmakit.vercel.app',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ar" dir="rtl" className={`${cairo.variable} ${amiri.variable}`}>
      <head>
        {/* Schema.org JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(restaurantSchema) }}
        />
      </head>
      <body className="font-cairo bg-bg text-ink antialiased">
        {children}
      </body>
    </html>
  );
}
