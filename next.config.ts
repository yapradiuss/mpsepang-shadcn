import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'http://43.216.228.155:3001/api/:path*',
      },
    ];
  },
};

export default nextConfig;
