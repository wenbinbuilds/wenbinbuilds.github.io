import type { NextConfig } from 'next';

const nextConfig: NextConfig =
  process.env.PORTFOLIO_STATIC_EXPORT === 'true'
    ? {
        output: 'export',
      }
    : {};

export default nextConfig;
