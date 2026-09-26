import type { NextConfig } from "next";

// GitHub Pages serves this repo at /<repo-name>/, not at the domain root,
// so the build needs a basePath — but only when running in that workflow.
const isGithubActions = process.env.GITHUB_ACTIONS === "true";
const repoName = process.env.GITHUB_REPOSITORY?.split("/")[1];
const basePath = isGithubActions && repoName ? `/${repoName}` : "";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  // Static export: GitHub Pages only serves static files, no Node server.
  output: "export",
  images: {
    // next/image's optimization API needs a server, which static export can't provide.
    unoptimized: true,
  },
  // next/image doesn't auto-prefix local src paths with basePath when
  // unoptimized, so it's exposed here for lib/asset-path.ts to apply manually.
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
  ...(basePath ? { basePath, assetPrefix: `${basePath}/` } : {}),
};

export default nextConfig;
