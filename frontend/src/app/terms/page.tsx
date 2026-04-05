"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function TermsPage() {
  return (
    <div className="bg-[#faf9fb] dark:bg-[#000000] min-h-screen text-[#1b1c1e] dark:text-[#faf9fb] font-body selection:bg-tertiary-fixed selection:text-on-tertiary-fixed">
      {/* Mini Nav */}
      <nav className="w-full z-[100] bg-[#faf9fb] dark:bg-[#000000] shadow-sm dark:shadow-none border-b border-black/5 dark:border-white/5">
        <div className="flex justify-between items-center px-8 py-6 max-w-7xl mx-auto w-full">
          <Link href="/" className="text-xl font-bold tracking-tight text-[#000000] dark:text-[#faf9fb] font-headline">IS UTO</Link>
          <Link href="/" className="text-sm font-medium opacity-70 hover:opacity-100 transition-opacity">На главную</Link>
        </div>
      </nav>

      <main className="max-w-4xl mx-auto px-8 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-8 tracking-tight font-headline">Условия использования</h1>
          <p className="text-sm opacity-60 mb-12 uppercase tracking-widest">Последнее обновление: 5 апреля 2024 г.</p>

          <div className="space-y-12 text-lg leading-relaxed opacity-90 text-justify">
            <section>
              <h2 className="text-2xl font-bold mb-4 text-[#e9c176]">1. Описание предоставляемых услуг</h2>
              <p>
                IS UTO предоставляет интеллектуальную систему маршрутизации спецтехники, интегрирующую ИИ для оптимизации логистических процессов в нефтегазодобывающих и промышленных комплексах. Используя наши решения, вы соглашаетесь с настоящими Условиями использования.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-[#e9c176]">2. Права интеллектуальной собственности</h2>
              <p>
                Весь контент, программное обеспечение, логотипы, алгоритмы ИИ и иные объекты интеллектуальной собственности на платформе защищены законодательством. Мы предоставляем неисключительную лицензию на использование системы исключительно в рамках оговоренных договорных отношений.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-[#e9c176]">3. Ответственность пользователя</h2>
              <p>
                При использовании платформы вы обязуетесь:
              </p>
              <ul className="list-disc pl-6 mt-4 space-y-2">
                <li>Обеспечивать точность вводимых данных для корректного расчета маршрутов.</li>
                <li>Не использовать систему способами, которые могут нанести вред оборудованию или программному обеспечению.</li>
                <li>Соблюдать конфиденциальность учетных данных для доступа в систему.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-[#e9c176]">4. Ограничение ответственности</h2>
              <p>
                Наша платформа стремится обеспечить максимальную точность расчетов ETA и экономию топлива, однако результаты могут варьироваться в зависимости от внешних факторов (погодные условия, человеческий фактор, непредвиденные изменения на дорожном графе). IS UTO не несет ответственности за косвенные убытки, возникшие в результате использования системы.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-[#e9c176]">5. Интеграции с третьими сторонами</h2>
              <p>
                Система предполагает интеграцию с внешними сервисами, такими как Wialon, 1С и SAP. Ответственность за использование таких внешних сервисов регулируется их соответствующими условиями использования.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-[#e9c176]">6. Изменения условий</h2>
              <p>
                Мы оставляем за собой право изменять данные Условия использования в любое время. Продолжая использовать платформу после внесения изменений, вы соглашаетесь с новыми Условиями.
              </p>
            </section>
          </div>
        </motion.div>
      </main>

      <footer className="w-full py-12 bg-[#000000] border-t border-[#002d5b] mt-20">
        <div className="max-w-7xl mx-auto px-12 text-center">
          <p className="text-xs uppercase tracking-wider text-[#faf9fb] opacity-60">
            © 2024 IS UTO Intelligent Vehicle Routing. Все права защищены.
          </p>
        </div>
      </footer>
    </div>
  );
}
