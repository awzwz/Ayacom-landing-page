"use client";

import {
  ArrowRight,
  MapPin,
  Route,
} from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { API_BASE } from "@/lib/config";

type VehicleStatus = {
  vehicle_id: string;
  coordinates: string;
  status: string;
  fuel_optimization_pct: number;
  path_label?: string;
  eta_label?: string;
};

const fallback: VehicleStatus = {
  vehicle_id: "A 777 AA 77",
  coordinates: "55.7558° N, 37.6173° E",
  status: "Active Mission",
  fuel_optimization_pct: -14.2,
  path_label: "CURRENT PATH",
  eta_label: "ETA OPTIMIZATION",
};

const nav = [
  { href: "#features", label: "Features", active: true },
  { href: "#solutions", label: "Solutions" },
  { href: "#analytics", label: "Analytics" },
  { href: "#contact", label: "Contact" },
];

export function HeroSection() {
  const [data, setData] = useState<VehicleStatus>(fallback);

  useEffect(() => {
    let cancelled = false;
    (async () => {
      try {
        const res = await fetch(`${API_BASE}/api/v1/vehicle/status`);
        if (!res.ok) return;
        const json = (await res.json()) as VehicleStatus;
        if (!cancelled) setData({ ...fallback, ...json });
      } catch {
        /* keep fallback */
      }
    })();
    return () => {
      cancelled = true;
    };
  }, []);

  const fuel = `${data.fuel_optimization_pct > 0 ? "+" : ""}${data.fuel_optimization_pct}% Fuel`;

  return (
    <section className="relative overflow-hidden bg-[#0e3c4d] text-white">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.12]"
        style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, rgba(232,195,133,0.9) 1px, transparent 0)`,
          backgroundSize: "48px 48px",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-[#0a2f3d] via-[#0e3c4d] to-[#062029]" />

      <header className="relative z-10 border-b border-white/10">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-5 md:px-6">
          <Link href="/" className="text-lg font-bold tracking-tight text-white">
            IS UTO
          </Link>
          <nav className="hidden flex-1 justify-center gap-8 md:flex">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`text-sm font-medium transition-colors ${
                  item.active ? "text-[#e8c385]" : "text-white/80 hover:text-white"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <Link
            href="#contact"
            className="shrink-0 rounded-lg bg-[#0a1a33] px-4 py-2.5 text-sm font-semibold text-white shadow-md transition hover:bg-[#132a4d]"
          >
            Создать маршрут
          </Link>
        </div>
      </header>

      <div className="relative z-10 mx-auto grid max-w-6xl gap-12 px-4 py-16 md:grid-cols-2 md:items-center md:px-6 md:py-24 lg:gap-16">
        <div className="flex flex-col gap-6">
          <div className="inline-flex w-fit items-center gap-2 rounded-full bg-[#e8c385] px-3 py-1.5 text-xs font-semibold uppercase tracking-wide text-[#0a1a33]">
            <MapPin className="h-3.5 w-3.5" aria-hidden />
            Powered by AI
          </div>
          <h1 className="text-3xl font-bold leading-tight tracking-tight md:text-4xl lg:text-[2.75rem] lg:leading-[1.15]">
            Оптимизируйте логистику месторождений с ИИ
          </h1>
          <p className="max-w-xl text-base leading-relaxed text-white/85 md:text-lg">
            Интеллектуальная система маршрутизации спецтехники на базе реального дорожного
            графа. Снижение холостого пробега до 25%.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
            <Link
              href="#contact"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#e8c385] px-6 py-3 text-sm font-bold text-[#0a1a33] transition hover:bg-[#f0d49a]"
            >
              Попробовать демо
              <ArrowRight className="h-4 w-4" aria-hidden />
            </Link>
            <Link
              href="#solutions"
              className="inline-flex items-center justify-center rounded-lg border border-white/40 bg-white/5 px-6 py-3 text-sm font-semibold text-white backdrop-blur-sm transition hover:bg-white/10"
            >
              Как это работает
            </Link>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-md">
          <div className="rounded-2xl border border-white/20 bg-white/10 p-5 shadow-2xl backdrop-blur-xl md:p-6">
            <div className="flex items-start justify-between gap-4 border-b border-white/15 pb-4">
              <div className="flex items-start gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#0a1a33]">
                  <Route className="h-5 w-5 text-white" aria-hidden />
                </div>
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-wider text-white/60">
                    {data.path_label ?? "CURRENT PATH"}
                  </p>
                  <p className="text-lg font-bold tracking-wide">{data.vehicle_id}</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-[10px] font-semibold uppercase tracking-wider text-white/60">
                  {data.eta_label ?? "ETA OPTIMIZATION"}
                </p>
                <p className="text-sm font-semibold text-emerald-300">{fuel}</p>
              </div>
            </div>

            <div className="relative my-5 aspect-[16/10] overflow-hidden rounded-xl bg-gradient-to-br from-[#1a4d5c] to-[#0e3c4d] ring-1 ring-white/10">
              <div
                className="absolute inset-0 opacity-30"
                style={{
                  backgroundImage: `radial-gradient(circle at 30% 40%, rgba(232,195,133,0.5) 0%, transparent 45%),
                    radial-gradient(circle at 70% 60%, rgba(255,255,255,0.15) 0%, transparent 40%)`,
                }}
              />
              <div className="absolute inset-4 rounded-lg border border-white/20 bg-white/5 backdrop-blur-sm" />
              <div className="absolute bottom-3 left-3 right-3 flex justify-center gap-2">
                {[0, 1, 2, 3].map((i) => (
                  <span
                    key={i}
                    className="h-1.5 w-1.5 rounded-full bg-[#e8c385]/80"
                  />
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div className="rounded-lg bg-white/95 p-3 text-[#0a1a33] shadow-sm">
                <p className="text-[10px] font-semibold uppercase tracking-wider text-[#0a1a33]/50">
                  Coordinates
                </p>
                <p className="mt-1 text-xs font-medium leading-snug">{data.coordinates}</p>
              </div>
              <div className="rounded-lg bg-white/95 p-3 text-[#0a1a33] shadow-sm">
                <p className="text-[10px] font-semibold uppercase tracking-wider text-[#0a1a33]/50">
                  Status
                </p>
                <p className="mt-1 text-xs font-semibold">{data.status}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
