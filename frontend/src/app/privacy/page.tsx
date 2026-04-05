"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function PrivacyPage() {
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
          <h1 className="text-4xl md:text-5xl font-bold mb-8 tracking-tight font-headline">Политика конфиденциальности</h1>
          <p className="text-sm opacity-60 mb-12 uppercase tracking-widest">Последнее обновление: 5 апреля 2026 г.</p>

          <div className="space-y-12 text-lg leading-relaxed opacity-90 text-justify">
            <section>
              <h2 className="text-2xl font-bold mb-4 text-[#e9c176]">1. Общие положения</h2>
              <p>
                Ваша конфиденциальность важна для нас. Настоящая Политика конфиденциальности описывает, как IS UTO собирает, использует и защищает вашу информацию при использовании нашей платформы оптимизации логистики. Используя наши услуги, вы соглашаетесь с методами обработки данных, описанными в этом документе.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-[#e9c176]">2. Сбор информации</h2>
              <p>
                Мы собираем информацию, необходимую для работы системы маршрутизации, включая:
              </p>
              <ul className="list-disc pl-6 mt-4 space-y-2">
                <li>Данные о местоположении транспортных средств в реальном времени.</li>
                <li>Технические данные устройств (телематика, интеграция с Wialon).</li>
                <li>Контактную информацию, предоставленную через формы обратной связи (имя, компания, email).</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-[#e9c176]">3. Использование данных</h2>
              <p>
                Собранная информация используется исключительно для:
              </p>
              <ul className="list-disc pl-6 mt-4 space-y-2">
                <li>Оптимизации маршрутов и снижения холостого пробега.</li>
                <li>Предоставления аналитических отчетов и КПЭ руководителям автопарков.</li>
                <li>Улучшения алгоритмов искусственного интеллекта для более точного расчета ETA.</li>
                <li>Связи с клиентами по вопросам демонстрации системы.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-[#e9c176]">4. Защита данных</h2>
              <p>
                Мы применяем современные методы шифрования и строгие протоколы безопасности для защиты ваших данных от несанкционированного доступа. Доступ к данным ограничен только сотрудниками, которым это необходимо для выполнения их должностных обязанностей.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-[#e9c176]">5. Передача третьим лицам</h2>
              <p>
                Мы не продаем и не передаем ваши персональные данные третьим лицам, за исключением случаев, когда это необходимо для функционирования интегрированных сервисов (например, Wialon) с вашего согласия, или в соответствии с требованиями законодательства.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-[#e9c176]">6. Контакты</h2>
              <p>
                Если у вас есть вопросы по поводу настоящей политики, пожалуйста, свяжитесь с нами через форму на главной странице или по указанному телефону в футере.
              </p>
            </section>
          </div>
        </motion.div>
      </main>

      {/* Simplified Footer for subpages */}
      <footer className="w-full py-12 bg-[#000000] border-t border-[#002d5b] mt-20">
        <div className="max-w-7xl mx-auto px-12 text-center">
          <p className="text-xs uppercase tracking-wider text-[#faf9fb] opacity-60">
            © 2026 IS UTO Intelligent Vehicle Routing. Все права защищены.
          </p>
        </div>
      </footer>
    </div>
  );
}
