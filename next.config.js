/** @type {import('next').NextConfig} */
const nextConfig = {
  // تفعيل دعم الصور الخارجية إذا لزم
  images: {
    remotePatterns: [],
    // دعم الصور المحلية فقط
  },
  // ترويسات الأمان
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'X-Frame-Options', value: 'DENY' },
          { key: 'X-XSS-Protection', value: '1; mode=block' },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
