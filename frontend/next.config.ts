import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  compress: true,
  images: {
    formats: ["image/avif", "image/webp"],
    ...(process.env.NODE_ENV === "development" && {
      unoptimized: true,
    }),
    remotePatterns: [
      {
        protocol: "http",
        hostname: "3.110.86.248",
        port: "1337",
        pathname: "/uploads/**",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "**.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "deciphi-pull-zone.b-cdn.net",
      },
      {
        protocol: "https",
        hostname: "c.ndtvimg.com",
      },
    ],
  },
};

export default nextConfig;
