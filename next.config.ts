import type { NextConfig } from "next";

const isGithubPages = process.env.GITHUB_PAGES === "true";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  env: {
    NEXT_PUBLIC_BASE_PATH: isGithubPages ? "/silex-web" : ""
  },
  ...(isGithubPages
    ? {
        basePath: "/silex-web",
        assetPrefix: "/silex-web/"
      }
    : {})
};

export default nextConfig;
