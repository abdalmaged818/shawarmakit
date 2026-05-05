import type { Metadata, Viewport } from 'next';
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
    metadataBase: new URL('https://shawarmakit.vercel.app'),
    title: 'شاورما كيت | المدينة المنورة',
    description: 'شاورما كيت — ينتقي بعناية مذاق الأصالة. تشكيلة كاملة من شاورما الدجاج واللحم والبيتزا والبوكسات. المدينة المنورة - حي السلام.',
    keywords: ['شاورما', 'شاورما كيت', 'المدينة المنورة', 'حي السلام', 'مطاعم شاورما', 'shawarma kit', 'shawarma'],
    authors: [{ name: 'شاورما كيت' }],
    openGraph: {
          title: 'شاورما كيت | المدينة المنورة',
          description: 'ينتقي بعناية مذاق الأصالة',
          url: 'https://shawarmakit.vercel.app',
          siteName: 'شاورما كيت',
          locale: 'ar_SA',
          type: 'website',
    },
    twitter: {
          card: 'summary_large_image',
          title: 'شاورما كيت',
          description: 'ينتقي بعناية مذاق الأصالة',
    },
    robots: {
          index: true,
          follow: true,
    },
};

export const viewport: Viewport = {
    themeColor: '#FFFEF1',
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
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
