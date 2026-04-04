"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function Home() {
  const [activeSection, setActiveSection] = useState("");

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

    const sections = document.querySelectorAll("section[id]");
    sections.forEach((section) => observer.observe(section));

    return () => sections.forEach((section) => observer.unobserve(section));
  }, []);

  const getNavLinkClass = (id: string) => {
    return activeSection === id
      ? "font-['Inter'] font-medium text-sm text-[#e9c176] border-b-2 border-[#e9c176] pb-1 hover:opacity-100 transition-colors"
      : "font-['Inter'] font-medium text-sm text-[#1b1c1e] dark:text-[#faf9fb] opacity-80 hover:opacity-100 hover:text-[#e9c176] transition-colors";
  };

  return (
    <div className="bg-background text-on-background font-body selection:bg-tertiary-fixed selection:text-on-tertiary-fixed w-full">
      {/* Top Navigation Bar */}
      <nav className="sticky top-0 w-full z-[100] bg-[#faf9fb] dark:bg-[#000000] shadow-sm dark:shadow-none transition-all duration-300 ease-in-out">
        <div className="flex justify-between items-center px-8 py-4 max-w-full mx-auto">
          <div className="flex items-center gap-8">
            <span className="text-xl font-bold tracking-tight text-[#000000] dark:text-[#faf9fb] font-headline">IS UTO</span>
            <div className="hidden md:flex gap-6 items-center">
              <a className={getNavLinkClass("features")} href="#features">Преимущества</a>
              <a className={getNavLinkClass("solutions")} href="#solutions">Решения</a>
              <a className={getNavLinkClass("analytics")} href="#analytics">Аналитика</a>
              <a className={getNavLinkClass("contact")} href="#contact">Контакты</a>
            </div>
          </div>
          <button className="bg-primary text-on-primary px-6 py-2.5 rounded-lg text-sm font-semibold hover:bg-primary-container transition-all">
            Создать маршрут
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-[921px] flex items-center bg-primary overflow-hidden">
        <div className="absolute inset-0 opacity-40">
          <img alt="Oil field logistics map" className="w-full h-full object-cover mix-blend-overlay" data-alt="Technical blueprint map of an industrial complex overlaid with glowing GPS logistics route lines and data points" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCCSZmUIoVQHkdoFS8BJCT7HXp8JfeaFyG0vdDtKYFyuY91s-Eg9aN-bhJbko0mNwrqTOfEfLrsH0fQMTyZJGZtWpmsKgyyKy6eSrRKG1q5nIX0HIKAVBeCNd254JKZ_NDE51Gzfq6keg-bl20RonmhW_Weujzi-MUYQOmI3MzoKFBLa_ubf0SyXFbrLAjb79YO7Z5HHIFyEwtTKqLZRPrjrWmLabDzOw4WlP0YalwrIR--BypBlsFHRTHa_Dz9SPis62sKcPWNzfg" />
        </div>
        <div className="container mx-auto px-8 relative z-10 grid md:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }} 
            animate={{ opacity: 1, x: 0 }} 
            transition={{ duration: 0.8, ease: "easeOut" }} 
            className="max-w-2xl"
          >

            <h1 className="text-5xl md:text-7xl font-bold text-surface-container-lowest leading-[1.1] mb-6 tracking-tight">
              Оптимизируйте логистику месторождений с ИИ
            </h1>
            <p className="text-xl text-primary-fixed leading-relaxed mb-10 opacity-90 max-w-xl">
              Интеллектуальная система маршрутизации спецтехники на базе реального дорожного графа. Снижение холостого пробега до 25%.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="bg-tertiary-fixed-dim text-on-tertiary-fixed font-bold px-8 py-4 rounded-md shadow-lg hover:brightness-110 transition-all flex items-center gap-3">
                Попробовать демо
                <span className="material-symbols-outlined">arrow_forward</span>
              </button>
              <button className="bg-surface-container-low/10 backdrop-blur-md border border-surface-container-lowest/20 text-surface-container-lowest font-semibold px-8 py-4 rounded-md hover:bg-surface-container-low/20 transition-all">
                Как это работает
              </button>
            </div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }} 
            animate={{ opacity: 1, scale: 1 }} 
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }} 
            className="hidden md:block relative"
          >
            <div className="glass-panel p-6 rounded-xl border border-white/10 shadow-2xl relative overflow-hidden">
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
      <section className="py-24 bg-surface px-8" id="solutions">
        <motion.div 
          initial={{ opacity: 0, y: 40 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true, margin: "-100px" }} 
          transition={{ duration: 0.7, ease: "easeOut" }} 
          className="container mx-auto"
        >
          <div className="grid md:grid-cols-3 gap-0 rounded-xl overflow-hidden shadow-sm border border-surface-container-low">
            <div className="bg-surface-container-highest p-12 flex flex-col justify-between">
              <div>
                <span className="material-symbols-outlined text-outline text-4xl mb-6">event_busy</span>
                <h3 className="text-2xl font-bold text-on-surface mb-4">Ручное планирование</h3>
                <p className="text-secondary leading-relaxed">
                  Традиционные методы приводят к задержкам до 40 минут на каждой заявке. Диспетчеры тратят ценное время на выбор техники, часто допуская ошибки в ETA.
                </p>
              </div>
              <div className="mt-8 pt-8 border-t border-outline-variant/30">
                <p className="text-xs font-label text-error uppercase tracking-widest font-bold">Проблема №1</p>
              </div>
            </div>
            <div className="bg-primary text-on-primary p-12 flex flex-col justify-between transform md:scale-105 shadow-2xl z-10 transition-transform hover:scale-110">
              <div>
                <span className="material-symbols-outlined text-tertiary-fixed text-4xl mb-6">precision_manufacturing</span>
                <h3 className="text-2xl font-bold text-surface-container-lowest mb-4">Интеллектуальный подбор</h3>
                <p className="text-primary-fixed opacity-90 leading-relaxed font-medium">
                  Алгоритм мгновенно анализирует весь доступный флот. Учитываются текущие координаты, тип спецтехники и приоритет заявки для автоматического назначения.
                </p>
              </div>
              <div className="mt-8 pt-8 border-t border-primary-container">
                <p className="text-xs font-label text-tertiary-fixed uppercase tracking-widest font-bold">Наше решение</p>
              </div>
            </div>
            <div className="bg-surface-container-highest p-12 flex flex-col justify-between">
              <div>
                <span className="material-symbols-outlined text-outline text-4xl mb-6">forklift</span>
                <h3 className="text-2xl font-bold text-on-surface mb-4">Объединение заявок</h3>
                <p className="text-secondary leading-relaxed">
                  Система создает multi-stop маршруты, исключая холостые пробеги. Достигается максимальная загрузка флота за счет умного группирования задач.
                </p>
              </div>
              <div className="mt-8 pt-8 border-t border-outline-variant/30">
                <p className="text-xs font-label text-on-primary-container uppercase tracking-widest font-bold">Результат</p>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Key Features Section */}
      <section className="py-24 bg-surface-container-lowest px-8" id="features">
        <motion.div 
          initial={{ opacity: 0, y: 40 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true, margin: "-100px" }} 
          transition={{ duration: 0.7, ease: "easeOut" }} 
          className="container mx-auto"
        >
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="max-w-xl">
              <h2 className="text-4xl font-bold text-primary mb-4 tracking-tight">Технологический стек оптимизации</h2>
              <p className="text-secondary text-lg">Мы объединили передовые разработки в области картографии и интернета вещей для создания единой экосистемы.</p>
            </div>
            <div className="text-right">
              <p className="text-sm font-label text-primary font-bold hover:text-tertiary-fixed cursor-pointer transition-colors">API Documentation →</p>
            </div>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="group p-8 bg-surface border-b-4 border-transparent hover:border-tertiary-fixed hover:bg-surface-container-low transition-all duration-300 rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-primary-container/10 flex items-center justify-center text-primary-container mb-6 group-hover:scale-110 transition-transform rounded-full">
                <span className="material-symbols-outlined">map</span>
              </div>
              <h4 className="text-lg font-bold text-primary mb-3">Дорожный граф</h4>
              <p className="text-sm text-secondary leading-relaxed">
                Собственный граф дорог месторождений, включающий временные проезды и зимники, недоступные в обычных картах.
              </p>
            </div>
            <div className="group p-8 bg-surface border-b-4 border-transparent hover:border-tertiary-fixed hover:bg-surface-container-low transition-all duration-300 rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-primary-container/10 flex items-center justify-center text-primary-container mb-6 group-hover:scale-110 transition-transform rounded-full">
                <span className="material-symbols-outlined">settings_input_antenna</span>
              </div>
              <h4 className="text-lg font-bold text-primary mb-3">Интеграция Wialon</h4>
              <p className="text-sm text-secondary leading-relaxed">
                Прямое соединение с телематическими терминалами. Сбор данных о топливе, скорости и оборотах двигателя в реальном времени.
              </p>
            </div>
            <div className="group p-8 bg-surface border-b-4 border-transparent hover:border-tertiary-fixed hover:bg-surface-container-low transition-all duration-300 rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-primary-container/10 flex items-center justify-center text-primary-container mb-6 group-hover:scale-110 transition-transform rounded-full">
                <span className="material-symbols-outlined">monitoring</span>
              </div>
              <h4 className="text-lg font-bold text-primary mb-3">Аналитика и КПЭ</h4>
              <p className="text-sm text-secondary leading-relaxed">
                Наглядные дашборды для руководителей. Мониторинг эффективности каждого водителя и общего здоровья автопарка.
              </p>
            </div>
            <div className="group p-8 bg-surface border-b-4 border-transparent hover:border-tertiary-fixed hover:bg-surface-container-low transition-all duration-300 rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-primary-container/10 flex items-center justify-center text-primary-container mb-6 group-hover:scale-110 transition-transform rounded-full">
                <span className="material-symbols-outlined">api</span>
              </div>
              <h4 className="text-lg font-bold text-primary mb-3">REST API</h4>
              <p className="text-sm text-secondary leading-relaxed">
                Гибкие возможности интеграции с SAP, 1C и внутренними системами управления ресурсами заказчика.
              </p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Metrics Section */}
      <section className="py-20 bg-primary px-8 border-y border-primary-container/50" id="analytics">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }} 
          whileInView={{ opacity: 1, scale: 1 }} 
          viewport={{ once: true, margin: "-100px" }} 
          transition={{ duration: 0.6, ease: "easeOut" }} 
          className="container mx-auto"
        >
          <div className="grid md:grid-cols-3 gap-12 text-center">
            <div className="flex flex-col items-center">
              <span className="text-5xl md:text-6xl font-bold text-tertiary-fixed mb-2 font-headline drop-shadow-lg">52+</span>
              <p className="text-primary-fixed uppercase tracking-widest text-xs font-bold">Единиц спецтехники</p>
              <div className="w-12 h-1 bg-tertiary-fixed/30 mt-6 rounded-full"></div>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-5xl md:text-6xl font-bold text-tertiary-fixed mb-2 font-headline drop-shadow-lg">14.2%</span>
              <p className="text-primary-fixed uppercase tracking-widest text-xs font-bold">Экономия топлива</p>
              <div className="w-12 h-1 bg-tertiary-fixed/30 mt-6 rounded-full"></div>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-5xl md:text-6xl font-bold text-tertiary-fixed mb-2 font-headline drop-shadow-lg">28 мин</span>
              <p className="text-primary-fixed uppercase tracking-widest text-xs font-bold">Среднее время (ETA)</p>
              <div className="w-12 h-1 bg-tertiary-fixed/30 mt-6 rounded-full"></div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Contact Section */}
      <section className="py-24 bg-surface px-8" id="contact">
        <motion.div 
          initial={{ opacity: 0, y: 40 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true, margin: "-100px" }} 
          transition={{ duration: 0.7, ease: "easeOut" }} 
          className="container mx-auto max-w-5xl"
        >
          <div className="bg-surface-container-lowest rounded-2xl shadow-xl overflow-hidden grid md:grid-cols-2">
            <div className="p-12 bg-surface-container-low flex flex-col justify-between">
              <div>
                <h2 className="text-3xl font-bold text-primary mb-6 leading-tight">Готовы оптимизировать свой автопарк?</h2>
                <p className="text-secondary mb-8 leading-relaxed">Оставьте заявку на демонстрацию системы. Наши эксперты проведут аудит ваших текущих маршрутов и рассчитают потенциальную экономию.</p>
                <div className="space-y-6">
                  <div className="flex items-center gap-4 text-primary">
                    <span className="material-symbols-outlined text-primary-container">support_agent</span>
                    <span className="text-sm font-medium">Техническая поддержка 24/7</span>
                  </div>
                  <div className="flex items-center gap-4 text-primary">
                    <span className="material-symbols-outlined text-primary-container">speed</span>
                    <span className="text-sm font-medium">Внедрение за 14 рабочих дней</span>
                  </div>
                </div>
              </div>
              <div className="mt-12 rounded-xl overflow-hidden">
                <img alt="Contact decoration" className="w-full h-auto scale-105" data-alt="Abstract minimalist background with clean geometric lines in soft blue and grey tones reflecting enterprise technology" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCyoK0535GhRsi91yUZXKLp_a0qgAw-NsWsIndVO-LBWb_hAGy0gCcaghVienvRtqtEs8qRFJoEXmJUSNYxkQhTc4x8zjSRqYhX3O2qSrwNWH4EoANnJNP_Cq-xXOg7XGW1zCJffKvmLy5yrdqujmJATBP2Uyx8bExnissjADz72V8PHpcErxHuQ5ZnGMZzGCFQBxHB-JcepRqIHAoaXoqKCHnhkZYkLxTJb9aApOJe4O81Rw7I6yw3YE0jeRoiFCU8y_T8YVpXsk0" />
              </div>
            </div>
            <div className="p-12">
              <form className="space-y-6">
                <div>
                  <label className="block text-xs font-bold text-primary uppercase tracking-wider mb-2">Имя</label>
                  <input className="w-full bg-surface border-none focus:ring-2 focus:outline-none focus:ring-tertiary-fixed-dim rounded-md py-4 px-4 text-sm text-primary placeholder:text-secondary/50" placeholder="Иван Иванов" type="text" />
                </div>
                <div>
                  <label className="block text-xs font-bold text-primary uppercase tracking-wider mb-2">Компания</label>
                  <input className="w-full bg-surface border-none focus:ring-2 focus:outline-none focus:ring-tertiary-fixed-dim rounded-md py-4 px-4 text-sm text-primary placeholder:text-secondary/50" placeholder="ООО Логистика-Плюс" type="text" />
                </div>
                <div>
                  <label className="block text-xs font-bold text-primary uppercase tracking-wider mb-2">Email</label>
                  <input className="w-full bg-surface border-none focus:ring-2 focus:outline-none focus:ring-tertiary-fixed-dim rounded-md py-4 px-4 text-sm text-primary placeholder:text-secondary/50" placeholder="ivan@company.ru" type="email" />
                </div>
                <button className="w-full bg-primary text-on-primary font-bold py-5 rounded-md hover:brightness-125 transition-all shadow-lg flex items-center justify-center gap-3 mt-4 active:scale-[0.98]" type="submit">
                  Запросить демонстрацию
                  <span className="material-symbols-outlined">send</span>
                </button>
                <p className="text-[10px] text-center text-secondary leading-relaxed mt-4">
                  Нажимая кнопку, вы соглашаетесь на обработку персональных данных в соответствии с политикой конфиденциальности.
                </p>
              </form>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="w-full py-12 bg-[#000000] dark:bg-[#000000] tonal-shift border-t border-[#002d5b]">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 px-12">
          <div>
            <span className="font-['JetBrains_Mono'] text-lg text-[#faf9fb] block mb-6 font-bold">IS UTO</span>
            <p className="font-['Inter'] text-xs uppercase tracking-wider text-[#faf9fb] opacity-60">
              © 2024 IS UTO Intelligent Vehicle Routing.<br/>Все права защищены.
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <span className="font-['Inter'] text-xs font-bold text-[#e9c176] uppercase tracking-wider mb-2">Навигация</span>
            <a className="font-['Inter'] text-xs uppercase tracking-wider text-[#faf9fb] opacity-60 hover:opacity-100 hover:text-[#e9c176] transition-all ease-in-out duration-200" href="#">Конфиденциальность</a>
            <a className="font-['Inter'] text-xs uppercase tracking-wider text-[#faf9fb] opacity-60 hover:opacity-100 hover:text-[#e9c176] transition-all ease-in-out duration-200" href="#">Условия использования</a>
          </div>
          <div className="flex flex-col gap-4">
            <span className="font-['Inter'] text-xs font-bold text-[#e9c176] uppercase tracking-wider mb-2">Ресурсы</span>
            <a className="font-['Inter'] text-xs uppercase tracking-wider text-[#faf9fb] opacity-60 hover:opacity-100 hover:text-[#e9c176] transition-all ease-in-out duration-200" href="#">Поддержка</a>
            <a className="font-['Inter'] text-xs uppercase tracking-wider text-[#faf9fb] opacity-60 hover:opacity-100 hover:text-[#e9c176] transition-all ease-in-out duration-200" href="#">API</a>
          </div>
          <div className="flex flex-col gap-4">
            <span className="font-['Inter'] text-xs font-bold text-[#e9c176] uppercase tracking-wider mb-2">Контакты</span>
            <p className="font-['Inter'] text-xs text-[#faf9fb] opacity-60">г. Астана, ул. Достык 12</p>
            <p className="font-['Inter'] text-xs text-[#faf9fb] opacity-60">+7 (700) 123-45-67</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
