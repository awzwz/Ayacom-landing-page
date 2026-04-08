"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function Home() {
  const [activeSection, setActiveSection] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
    );

    const sections = document.querySelectorAll("section[id], #contacts");
    sections.forEach((section) => observer.observe(section));

    return () => sections.forEach((section) => observer.unobserve(section));
  }, []);

  const getNavLinkClass = (id: string, mobile = false) => {
    const base = mobile
      ? "block py-3 px-2 text-base font-medium rounded-lg active:bg-black/5"
      : "font-['Inter'] font-medium text-sm pb-1 transition-colors";
    if (activeSection === id) {
      return mobile
        ? `${base} text-[#b8860b] bg-black/[0.04]`
        : `${base} text-[#e9c176] border-b-2 border-[#e9c176] hover:opacity-100`;
    }
    return mobile
      ? `${base} text-[#1b1c1e] dark:text-[#faf9fb]`
      : `${base} text-[#1b1c1e] dark:text-[#faf9fb] opacity-80 hover:opacity-100 hover:text-[#e9c176]`;
  };

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="bg-background text-on-background font-body selection:bg-tertiary-fixed selection:text-on-tertiary-fixed w-full overflow-x-hidden">
      {/* Top Navigation Bar */}
      <nav
        className="sticky top-0 z-[100] w-full border-b border-black/5 bg-[#faf9fb]/95 shadow-sm backdrop-blur-md dark:border-white/10 dark:bg-[#000000]/95 dark:shadow-none supports-[padding:max(0px)]:pt-[max(0.5rem,env(safe-area-inset-top))]"
        style={{ paddingLeft: "max(1rem, env(safe-area-inset-left))", paddingRight: "max(1rem, env(safe-area-inset-right))" }}
      >
        <div className="mx-auto flex max-w-[1400px] items-center justify-between gap-2 py-3 sm:py-4">
          <span className="shrink-0 text-lg font-bold tracking-tight text-[#000000] dark:text-[#faf9fb] font-headline sm:text-xl">
            IS UTO
          </span>
          <div className="hidden items-center gap-5 md:flex lg:gap-6">
            <a className={getNavLinkClass("features")} href="#features">
              Преимущества
            </a>
            <a className={getNavLinkClass("solutions")} href="#solutions">
              Решения
            </a>
            <a className={getNavLinkClass("analytics")} href="#analytics">
              Аналитика
            </a>
            <a className={getNavLinkClass("contacts")} href="#contacts">
              Контакты
            </a>
          </div>
          <div className="flex shrink-0 items-center gap-2 sm:gap-3">
            <a
              href="https://ayacom.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-11 min-w-0 items-center justify-center rounded-lg bg-primary px-3 py-2.5 text-xs font-semibold text-on-primary transition-all hover:bg-primary-container sm:px-5 sm:text-sm"
            >
              <span className="max-[380px]:hidden">Создать маршрут</span>
              <span className="hidden max-[380px]:inline">Маршрут</span>
            </a>
            <button
              type="button"
              className="flex min-h-11 min-w-11 items-center justify-center rounded-lg text-[#000000] md:hidden dark:text-[#faf9fb]"
              aria-expanded={menuOpen}
              aria-label={menuOpen ? "Закрыть меню" : "Открыть меню"}
              onClick={() => setMenuOpen((o) => !o)}
            >
              <span className="material-symbols-outlined text-2xl">{menuOpen ? "close" : "menu"}</span>
            </button>
          </div>
        </div>
        {menuOpen ? (
          <div className="border-t border-black/10 px-2 py-2 pb-[max(0.5rem,env(safe-area-inset-bottom))] md:hidden dark:border-white/10">
            <a className={getNavLinkClass("features", true)} href="#features" onClick={closeMenu}>
              Преимущества
            </a>
            <a className={getNavLinkClass("solutions", true)} href="#solutions" onClick={closeMenu}>
              Решения
            </a>
            <a className={getNavLinkClass("analytics", true)} href="#analytics" onClick={closeMenu}>
              Аналитика
            </a>
            <a className={getNavLinkClass("contacts", true)} href="#contacts" onClick={closeMenu}>
              Контакты
            </a>
          </div>
        ) : null}
      </nav>

      {/* Hero Section */}
      <section className="relative flex min-h-[100svh] items-center overflow-hidden bg-primary py-12 sm:py-16 md:min-h-0 md:py-20 lg:min-h-[min(100vh,921px)]">
        <div className="absolute inset-0 opacity-40">
          <img
            alt="Oil field logistics map"
            className="h-full w-full object-cover mix-blend-overlay opacity-50"
            src="/hero-bg.png"
          />
        </div>
        <div className="relative z-10 mx-auto grid w-full max-w-[1400px] items-center gap-8 px-4 sm:px-6 md:grid-cols-2 md:gap-12 lg:px-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-2xl"
          >
            <h1 className="mb-5 text-[1.65rem] font-bold leading-[1.15] tracking-tight text-surface-container-lowest sm:text-3xl md:mb-6 md:text-4xl md:leading-[1.1] lg:text-5xl xl:text-6xl 2xl:text-7xl">
              Оптимизируйте логистику месторождений с ИИ
            </h1>
            <p className="mb-8 max-w-xl text-base leading-relaxed text-primary-fixed opacity-90 sm:text-lg md:mb-10 md:text-xl">
              Интеллектуальная система маршрутизации спецтехники на базе реального дорожного графа. Снижение
              холостого пробега до 25%.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-4">
              <a
                href="https://ayacom.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-md bg-tertiary-fixed-dim px-6 py-3.5 text-center text-sm font-bold text-on-tertiary-fixed shadow-lg transition-all hover:brightness-110 sm:px-8 sm:py-4 sm:text-base"
              >
                Попробовать демо
                <span className="material-symbols-outlined shrink-0">arrow_forward</span>
              </a>
              <a
                href="#solutions"
                className="inline-flex min-h-12 items-center justify-center rounded-md border border-surface-container-lowest/20 bg-surface-container-low/10 px-6 py-3.5 text-center text-sm font-semibold text-surface-container-lowest backdrop-blur-md transition-all hover:bg-surface-container-low/20 sm:px-8 sm:py-4 sm:text-base"
              >
                Как это работает
              </a>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="relative mx-auto w-full max-w-md md:mx-0 md:max-w-none"
          >
            <div className="glass-panel relative overflow-hidden rounded-xl border border-white/10 p-4 shadow-2xl sm:p-5 md:p-6">
              <div className="flex justify-between items-center mb-6 border-b border-outline-variant/10 pb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary-container flex items-center justify-center text-tertiary-fixed">
                    <span className="material-symbols-outlined">route</span>
                  </div>
                  <div>
                    <p className="text-[10px] text-secondary font-label uppercase tracking-tighter">Current Path</p>
                    <p className="text-sm font-bold text-primary font-label">А 777 АА 77</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-[10px] text-secondary font-label uppercase">ETA Optimization</p>
                  <p className="text-sm font-bold text-tertiary-fixed-variant font-label">-14.2% Fuel</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="w-full rounded bg-surface-container-low overflow-hidden shadow-inner flex items-center justify-center">
                  <img alt="Logistics Map View" className="w-full h-auto object-contain" src="/map.png" />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-surface p-3 rounded border-l-2 border-tertiary-fixed">
                    <p className="text-[10px] text-secondary uppercase font-label">Coordinates</p>
                    <p className="text-xs font-label text-primary font-bold">55.7558° N, 37.6173° E</p>
                  </div>
                  <div className="bg-surface p-3 rounded border-l-2 border-primary-container">
                    <p className="text-[10px] text-secondary uppercase font-label">Status</p>
                    <p className="text-xs font-label text-primary font-bold">Active Mission</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Problems & Solution Section */}
      <section className="scroll-mt-20 bg-surface px-4 py-14 sm:px-6 sm:py-20 md:px-8 md:py-24" id="solutions">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="container mx-auto max-w-[1400px]"
        >
          <div className="mb-10 text-center sm:mb-16">
            <h2 className="mb-3 text-2xl font-bold tracking-tight text-primary sm:text-3xl md:text-4xl">
              Как это работает
            </h2>
            <p className="mx-auto max-w-2xl px-1 text-sm text-secondary sm:text-base md:text-lg">
              Интеллектуальная оптимизация на каждом этапе: от приема заявки до завершения маршрута.
            </p>
          </div>
          <div className="grid gap-0 overflow-hidden rounded-xl border border-surface-container-low shadow-sm md:grid-cols-3">
            <div className="flex flex-col justify-between bg-surface-container-highest p-6 sm:p-8 md:p-10 lg:p-12">
              <div>
                <span className="material-symbols-outlined mb-4 text-3xl text-outline sm:mb-6 sm:text-4xl">event_busy</span>
                <h3 className="mb-3 text-xl font-bold text-on-surface sm:mb-4 sm:text-2xl">Ручное планирование</h3>
                <p className="text-secondary leading-relaxed">
                  Традиционные методы приводят к задержкам до 40 минут на каждой заявке. Диспетчеры тратят ценное время на выбор техники, часто допуская ошибки в ETA.
                </p>
              </div>
              <div className="mt-8 pt-8 border-t border-outline-variant/30 flex justify-between items-center">
                <p className="text-xs font-label text-error uppercase tracking-widest font-bold">Проблема №1</p>
                <span className="text-xs font-bold text-outline opacity-50 px-2 py-1 border border-outline/20 rounded">ЭТАП 1</span>
              </div>
            </div>
            <div className="z-10 flex flex-col justify-between bg-primary p-6 text-on-primary shadow-2xl sm:p-8 md:scale-105 md:p-10 md:transition-transform lg:p-12 md:hover:scale-[1.02] lg:hover:scale-110">
              <div>
                <span className="material-symbols-outlined mb-4 text-3xl text-tertiary-fixed sm:mb-6 sm:text-4xl">
                  precision_manufacturing
                </span>
                <h3 className="mb-3 text-xl font-bold text-surface-container-lowest sm:mb-4 sm:text-2xl">
                  Интеллектуальный подбор
                </h3>
                <p className="text-primary-fixed opacity-90 leading-relaxed font-medium">
                  Алгоритм мгновенно анализирует весь доступный флот. Учитываются текущие координаты, тип спецтехники и приоритет заявки для автоматического назначения.
                </p>
              </div>
              <div className="mt-8 pt-8 border-t border-primary-container flex justify-between items-center">
                <p className="text-xs font-label text-tertiary-fixed uppercase tracking-widest font-bold">Наше решение</p>
                <span className="text-xs font-bold text-tertiary-fixed-dim px-2 py-1 border border-tertiary-fixed/30 rounded">ЭТАП 2</span>
              </div>
            </div>
            <div className="flex flex-col justify-between bg-surface-container-highest p-6 sm:p-8 md:p-10 lg:p-12">
              <div>
                <span className="material-symbols-outlined mb-4 text-3xl text-outline sm:mb-6 sm:text-4xl">forklift</span>
                <h3 className="mb-3 text-xl font-bold text-on-surface sm:mb-4 sm:text-2xl">Объединение заявок</h3>
                <p className="text-secondary leading-relaxed">
                  Система создает multi-stop маршруты, исключая холостые пробеги. Достигается максимальная загрузка флота за счет умного группирования задач.
                </p>
              </div>
              <div className="mt-8 pt-8 border-t border-outline-variant/30 flex justify-between items-center">
                <p className="text-xs font-label text-on-primary-container uppercase tracking-widest font-bold">Результат</p>
                <span className="text-xs font-bold text-outline opacity-50 px-2 py-1 border border-outline/20 rounded">ЭТАП 3</span>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Key Features Section */}
      <section className="scroll-mt-20 bg-surface-container-lowest px-4 py-14 sm:px-6 sm:py-20 md:px-8 md:py-24" id="features">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="container mx-auto max-w-[1400px]"
        >
          <div className="mb-10 flex flex-col gap-4 sm:mb-14 md:mb-16 md:flex-row md:items-end md:justify-between">
            <div className="max-w-xl">
              <h2 className="mb-3 text-2xl font-bold tracking-tight text-primary sm:text-3xl md:mb-4 md:text-4xl">
                Технологический стек оптимизации
              </h2>
              <p className="text-sm text-secondary sm:text-base md:text-lg">
                Мы объединили передовые разработки в области картографии и интернета вещей для создания единой
                экосистемы.
              </p>
            </div>
            <div className="md:text-right">
              <a
                href="https://ayacom-production.up.railway.app/redoc"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-11 items-center font-label text-sm font-bold text-primary transition-colors hover:text-tertiary-fixed"
              >
                API Documentation →
              </a>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4 lg:gap-8">
            <div className="group rounded-lg border-b-4 border-transparent bg-surface p-6 shadow-sm transition-all duration-300 hover:border-tertiary-fixed hover:bg-surface-container-low sm:p-7 md:p-8">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-primary-container/10 text-primary-container transition-transform group-hover:scale-110 md:mb-6">
                <span className="material-symbols-outlined">map</span>
              </div>
              <h4 className="mb-3 text-lg font-bold text-primary">Дорожный граф</h4>
              <p className="text-sm text-secondary leading-relaxed">
                Собственный граф дорог месторождений, включающий временные проезды и зимники, недоступные в обычных картах.
              </p>
            </div>
            <div className="group rounded-lg border-b-4 border-transparent bg-surface p-6 shadow-sm transition-all duration-300 hover:border-tertiary-fixed hover:bg-surface-container-low sm:p-7 md:p-8">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-primary-container/10 text-primary-container transition-transform group-hover:scale-110 md:mb-6">
                <span className="material-symbols-outlined">settings_input_antenna</span>
              </div>
              <h4 className="text-lg font-bold text-primary mb-3">Интеграция Wialon</h4>
              <p className="text-sm text-secondary leading-relaxed">
                Прямое соединение с телематическими терминалами. Сбор данных о топливе, скорости и оборотах двигателя в реальном времени.
              </p>
            </div>
            <div className="group rounded-lg border-b-4 border-transparent bg-surface p-6 shadow-sm transition-all duration-300 hover:border-tertiary-fixed hover:bg-surface-container-low sm:p-7 md:p-8">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-primary-container/10 text-primary-container transition-transform group-hover:scale-110 md:mb-6">
                <span className="material-symbols-outlined">monitoring</span>
              </div>
              <h4 className="text-lg font-bold text-primary mb-3">Аналитика и КПЭ</h4>
              <p className="text-sm text-secondary leading-relaxed">
                Наглядные дашборды для руководителей. Мониторинг эффективности каждого водителя и общего здоровья автопарка.
              </p>
            </div>
            <div className="group rounded-lg border-b-4 border-transparent bg-surface p-6 shadow-sm transition-all duration-300 hover:border-tertiary-fixed hover:bg-surface-container-low sm:p-7 md:p-8">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-primary-container/10 text-primary-container transition-transform group-hover:scale-110 md:mb-6">
                <span className="material-symbols-outlined">api</span>
              </div>
              <a href="https://ayacom-production.up.railway.app/redoc" target="_blank" rel="noopener noreferrer" className="hover:text-tertiary-fixed transition-colors">
                <h4 className="text-lg font-bold text-primary mb-3">REST API</h4>
              </a>
              <p className="text-sm text-secondary leading-relaxed">
                Гибкие возможности интеграции с SAP, 1C и внутренними системами управления ресурсами заказчика.
              </p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Metrics Section */}
      <section
        className="scroll-mt-20 border-y border-primary-container/50 bg-primary px-4 py-14 sm:px-6 sm:py-16 md:px-8 md:py-20"
        id="analytics"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="container mx-auto max-w-[1400px]"
        >
          <div className="grid grid-cols-1 gap-10 text-center sm:grid-cols-3 sm:gap-8 md:gap-12">
            <div className="flex flex-col items-center">
              <span className="mb-2 font-headline text-4xl font-bold text-tertiary-fixed drop-shadow-lg sm:text-5xl md:text-6xl">
                52+
              </span>
              <p className="max-w-[12rem] text-[10px] font-bold uppercase leading-snug tracking-widest text-primary-fixed sm:text-xs">
                Единиц спецтехники
              </p>
              <div className="mt-5 h-1 w-12 rounded-full bg-tertiary-fixed/30 sm:mt-6" />
            </div>
            <div className="flex flex-col items-center">
              <span className="mb-2 font-headline text-4xl font-bold text-tertiary-fixed drop-shadow-lg sm:text-5xl md:text-6xl">
                14.2%
              </span>
              <p className="max-w-[12rem] text-[10px] font-bold uppercase leading-snug tracking-widest text-primary-fixed sm:text-xs">
                Экономия топлива
              </p>
              <div className="mt-5 h-1 w-12 rounded-full bg-tertiary-fixed/30 sm:mt-6" />
            </div>
            <div className="flex flex-col items-center sm:col-span-1">
              <span className="mb-2 font-headline text-4xl font-bold text-tertiary-fixed drop-shadow-lg sm:text-5xl md:text-6xl">
                28 мин
              </span>
              <p className="max-w-[12rem] text-[10px] font-bold uppercase leading-snug tracking-widest text-primary-fixed sm:text-xs">
                Среднее время (ETA)
              </p>
              <div className="mt-5 h-1 w-12 rounded-full bg-tertiary-fixed/30 sm:mt-6" />
            </div>
          </div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer
        className="tonal-shift w-full border-t border-[#002d5b] bg-[#000000] pb-[max(2rem,env(safe-area-inset-bottom))] pt-10 dark:bg-[#000000] sm:pt-12"
        style={{ paddingLeft: "max(1rem, env(safe-area-inset-left))", paddingRight: "max(1rem, env(safe-area-inset-right))" }}
      >
        <div className="mx-auto grid max-w-[1400px] grid-cols-1 gap-10 px-4 sm:grid-cols-2 sm:px-6 md:grid-cols-4 md:gap-8 lg:px-8">
          <div>
            <span className="font-['JetBrains_Mono'] text-lg text-[#faf9fb] block mb-6 font-bold">IS UTO</span>
            <p className="font-['Inter'] text-xs uppercase tracking-wider text-[#faf9fb] opacity-60">
              © 2026 IS UTO Intelligent Vehicle Routing.<br/>Все права защищены.
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <span className="font-['Inter'] text-xs font-bold text-[#e9c176] uppercase tracking-wider mb-2">Навигация</span>
            <Link className="font-['Inter'] text-xs uppercase tracking-wider text-[#faf9fb] opacity-60 hover:opacity-100 hover:text-[#e9c176] transition-all ease-in-out duration-200" href="/privacy">Конфиденциальность</Link>
            <Link className="font-['Inter'] text-xs uppercase tracking-wider text-[#faf9fb] opacity-60 hover:opacity-100 hover:text-[#e9c176] transition-all ease-in-out duration-200" href="/terms">Условия использования</Link>
          </div>
          <div className="flex flex-col gap-4">
            <span className="font-['Inter'] text-xs font-bold text-[#e9c176] uppercase tracking-wider mb-2">Ресурсы</span>
            <a className="font-['Inter'] text-xs uppercase tracking-wider text-[#faf9fb] opacity-60 hover:opacity-100 hover:text-[#e9c176] transition-all ease-in-out duration-200" href="https://ayacom.vercel.app/support" target="_blank" rel="noopener noreferrer">Поддержка</a>
            <a className="font-['Inter'] text-xs uppercase tracking-wider text-[#faf9fb] opacity-60 hover:opacity-100 hover:text-[#e9c176] transition-all ease-in-out duration-200" href="https://ayacom-production.up.railway.app/redoc" target="_blank" rel="noopener noreferrer">API</a>
          </div>
          <div className="flex flex-col gap-4" id="contacts">
            <span className="font-['Inter'] text-xs font-bold text-[#e9c176] uppercase tracking-wider mb-2">Контакты</span>
            <p className="font-['Inter'] text-xs text-[#faf9fb] opacity-60">г. Астана, ул. Достык 12</p>
            <p className="font-['Inter'] text-xs text-[#faf9fb] opacity-60">+7 705 478 15 52</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
