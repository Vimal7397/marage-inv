/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'assets.chungdoi.com',
      },
      {
        protocol: 'https',
        hostname: 'chungdoi.com',
      },
    ],
  },
};

module.exports = nextConfig;

