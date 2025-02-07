import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === 'production';
const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['assets.aceternity.com', 'images.unsplash.com', 'i.imgur.com'],
    unoptimized: true,
  },
  assetPrefix: process.env.NODE_ENV === 'production' ? '/' : '',
  basePath: isProd ? '/portoflio-project' : '',
  output: 'export',
  eslint: {
      
  },
};




export default nextConfig;
