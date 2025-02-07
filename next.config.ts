import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === 'production';
const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['assets.aceternity.com', 'images.unsplash.com', 'i.imgur.com'],
    unoptimized: true,
  },
  assetPrefix: isProd ? '/portfolio-project' : '',
  basePath: isProd ? '/portfolio-project' : '',
  output: 'export',
  eslint: {
    ignoreDuringBuilds: true,
  },
};




export default nextConfig;
