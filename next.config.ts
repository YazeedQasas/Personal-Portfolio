import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === 'production';
const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['assets.aceternity.com', 'images.unsplash.com', 'i.imgur.com'],
    unoptimized: true,
  },
  assetPrefix: isProd ? '/portoflio-project' : '',
  basePath: isProd ? '/portoflio-project' : '',
  output: 'export',
  eslint: {
    ignoreDuringBuilds: true,
  },
};




export default nextConfig;
