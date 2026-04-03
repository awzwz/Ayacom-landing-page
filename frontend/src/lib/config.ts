/**
 * Если задан NEXT_PUBLIC_API_URL — запросы идут на тот же хост (относительные пути),
 * а next.config.ts проксирует их на бэкенд (без CORS в браузере).
 * Если не задан — прямой вызов локального FastAPI.
 */
function normalizeApiBase(raw: string): string {
  const t = raw.trim().replace(/\/$/, "");
  if (!t) return "http://127.0.0.1:8000";
  if (!/^https?:\/\//i.test(t)) {
    return `https://${t}`;
  }
  return t;
}

const raw = process.env.NEXT_PUBLIC_API_URL ?? "";
const hasBackendEnv = raw.trim().length > 0;

export const API_BASE = hasBackendEnv ? "" : normalizeApiBase("http://127.0.0.1:8000");
