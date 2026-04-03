"use client";

import { BarChart3, BookOpen, Gem, Radio } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { API_BASE } from "@/lib/config";

type FeatureItem = {
  id: string;
  title: string;
  description: string;
  icon: string;
};

type StatItem = { value: string; label: string };

const iconMap = {
  map: BookOpen,
  radio: Radio,
  chart: BarChart3,
  diamond: Gem,
} as const;

const staticFeatures: FeatureItem[] = [
  {
    id: "road-graph",
    title: "Дорожный граф",
    description:
      "Собственный граф дорог месторождений, включающий временные проезды и зимники, недоступные в обычных картах.",
    icon: "map",
  },
  {
    id: "wialon",
    title: "Интеграция Wialon",
    description:
      "Прямое соединение с телематическими терминалами. Сбор данных о топливе, скорости и оборотах двигателя в реальном времени.",
    icon: "radio",
  },
  {
    id: "analytics",
    title: "Аналитика и КПЭ",
    description:
      "Наглядные дашборды для руководителей. Мониторинг эффективности каждого водителя и общего здоровья автопарка.",
    icon: "chart",
  },
  {
    id: "api",
    title: "REST API",
    description:
      "Гибкие возможности интеграции с SAP, 1С и внутренними системами управления ресурсами заказчика.",
    icon: "diamond",
  },
];

const staticStats: StatItem[] = [
  { value: "52+", label: "ЕДИНИЦ СПЕЦТЕХНИКИ" },
  { value: "14.2%", label: "ЭКОНОМИЯ ТОПЛИВА" },
  { value: "28 мин", label: "СРЕДНЕЕ ВРЕМЯ (ETA)" },
];

export function TechStackSection() {
  const [features, setFeatures] = useState<FeatureItem[]>(staticFeatures);
  const [stats, setStats] = useState<StatItem[]>(staticStats);

  useEffect(() => {
    let cancelled = false;
    (async () => {
      try {
        const res = await fetch(`${API_BASE}/api/v1/features`);
        if (!res.ok) return;
        const json = (await res.json()) as {
          features: FeatureItem[];
          stats: StatItem[];
        };
        if (!cancelled && json.features?.length) {
          setFeatures(json.features);
          if (json.stats?.length) setStats(json.stats);
        }
      } catch {
        /* static */
      }
    })();
    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <section id="analytics" className="bg-[#f8f9fa] py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div
          id="features"
          className="mb-10 flex flex-col gap-4 md:flex-row md:items-start md:justify-between"
        >
          <div className="max-w-2xl">
            <h2 className="text-2xl font-bold text-[#0a1a33] md:text-3xl">
              Технологический стек оптимизации
            </h2>
            <p className="mt-3 text-[#4b5563] md:text-lg">
              Мы объединили передовые разработки в области картографии и интернета вещей для
              создания единой экосистемы.
            </p>
          </div>
          <Link
            href={`${API_BASE}/docs`}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 text-sm font-bold text-[#0a1a33] hover:text-[#132a4d]"
          >
            API Documentation →
          </Link>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f) => {
            const Icon = iconMap[f.icon as keyof typeof iconMap] ?? BookOpen;
            return (
              <article
                key={f.id}
                className="rounded-xl border border-black/[0.06] bg-[#f0f2f5] p-6 shadow-sm"
              >
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-lg bg-[#1e4d7b] text-white">
                  <Icon className="h-5 w-5" strokeWidth={1.75} aria-hidden />
                </div>
                <h3 className="text-lg font-bold text-[#111827]">{f.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-[#4b5563]">{f.description}</p>
              </article>
            );
          })}
        </div>

        <div className="mt-10 overflow-hidden rounded-xl bg-[#001529] px-6 py-10 md:px-12 md:py-12">
          <div className="grid gap-10 md:grid-cols-3">
            {stats.map((s) => (
              <div key={s.label} className="text-center">
                <p className="text-3xl font-bold text-[#E3D2A6] md:text-4xl">{s.value}</p>
                <p className="mt-2 text-xs font-semibold uppercase tracking-widest text-white/90">
                  {s.label}
                </p>
                <div className="mx-auto mt-4 h-px w-12 bg-white/25" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
