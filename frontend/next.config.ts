import type { NextConfig } from "next";

/** Тот же нормализатор, что и в src/lib/config.ts — для прокси на Railway. */
function normalizeBackendUrl(raw: string): string | null {
  const t = raw.trim().replace(/\/$/, "");
  if (!t) return null;
  if (!/^https?:\/\//i.test(t)) return `https://${t}`;
  return t;
}

const backend = normalizeBackendUrl(process.env.NEXT_PUBLIC_API_URL ?? "");

const nextConfig: NextConfig = {
  async rewrites() {
    if (!backend) return [];
    return [
      { source: "/api/v1/:path*", destination: `${backend}/api/v1/:path*` },
      { source: "/docs", destination: `${backend}/docs` },
      { source: "/docs/:path*", destination: `${backend}/docs/:path*` },
      { source: "/openapi.json", destination: `${backend}/openapi.json` },
      { source: "/redoc", destination: `${backend}/redoc` },
    ];
  },
};

export default nextConfig;
