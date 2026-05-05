/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    poweredByHeader: false,
    compress: true,
    images: {
          formats: ['image/webp', 'image/avif'],
          deviceSizes: [375, 414, 480, 640, 750, 828, 1080, 1200],
          imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
          minimumCacheTTL: 31536000,
    },
    experimental: {
          optimizePackageImports: ['lucide-react'],
    },
};

module.exports = nextConfig;
