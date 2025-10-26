import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  outputFileTracingRoot: process.cwd(),
  compiler: {
    removeConsole: process.env.NODE_ENV === "production" ? { exclude: ["error"] } : false,
  },
  experimental: {
    optimizePackageImports: ["framer-motion", "@radix-ui/react-slot"],
    viewTransition: true,
  },
  images: {
    formats: ["image/avif", "image/webp"],
  },
  poweredByHeader: false,
  eslint: {
    dirs: ["app", "components", "lib", "styles"],
  },
};

export default nextConfig;
