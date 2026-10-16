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
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "**.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "deciphiqatar-cdn.b-cdn.net",
      },
      {
        protocol: "https",
        hostname: "c.ndtvimg.com",
      },
    ],
  },
};

export default nextConfig;
