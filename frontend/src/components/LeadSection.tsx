"use client";

import { CheckCircle2, Headphones, Loader2, Send } from "lucide-react";
import { FormEvent, useState } from "react";
import { API_BASE } from "@/lib/config";

export function LeadSection() {
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "ok" | "err">("idle");
  const [message, setMessage] = useState("");

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    setStatus("loading");
    setMessage("");
    try {
      const res = await fetch(`${API_BASE}/api/v1/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, company, email }),
      });
      const data = (await res.json().catch(() => ({}))) as {
        detail?: string | { msg?: string }[];
        message?: string;
      };
      if (!res.ok) {
        setStatus("err");
        const d = data.detail;
        const detailStr =
          typeof d === "string"
            ? d
            : Array.isArray(d)
              ? d.map((x) => x.msg).filter(Boolean).join(" ")
              : "";
        setMessage(
          detailStr || "Не удалось отправить. Проверьте данные и попробуйте снова.",
        );
        return;
      }
      setStatus("ok");
      setMessage(data.message ?? "Заявка отправлена.");
      setName("");
      setCompany("");
      setEmail("");
    } catch {
      setStatus("err");
      setMessage("Сервер недоступен. Убедитесь, что API запущен.");
    }
  }

  return (
    <section id="contact" className="bg-[#f8f9fa] pb-16 pt-4 md:pb-24">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="overflow-hidden rounded-2xl border border-black/[0.06] bg-white shadow-xl shadow-black/[0.08] md:grid md:grid-cols-2">
          <div className="flex flex-col bg-[#e8eef4] p-8 md:p-10">
            <h2 className="text-2xl font-bold text-[#0a1a33] md:text-[1.65rem]">
              Готовы оптимизировать свой автопарк?
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-[#4b5563] md:text-base">
              Оставьте заявку на демонстрацию системы. Наши эксперты проведут аудит ваших
              текущих маршрутов и рассчитают потенциальную экономию.
            </p>
            <ul className="mt-8 space-y-4 text-sm text-[#374151]">
              <li className="flex items-center gap-3">
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-[#0a1a33] shadow-sm">
                  <Headphones className="h-4 w-4" aria-hidden />
                </span>
                Техническая поддержка 24/7
              </li>
              <li className="flex items-center gap-3">
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-[#0a1a33] shadow-sm">
                  <CheckCircle2 className="h-4 w-4" aria-hidden />
                </span>
                Внедрение за 14 рабочих дней
              </li>
            </ul>
            <div className="mt-auto flex flex-1 items-end pt-10">
              <div className="flex h-36 w-full items-center justify-center rounded-xl bg-[#c5ccd6]/60">
                <div className="h-24 w-24 rounded-full bg-gradient-to-br from-[#9aa8b8] via-[#d1d9e0] to-[#7a8794] opacity-90 ring-4 ring-white/50" />
              </div>
            </div>
          </div>

          <div className="bg-white p-8 md:p-10">
            <form onSubmit={onSubmit} className="flex flex-col gap-6">
              <div>
                <label className="text-xs font-bold uppercase tracking-wider text-[#0a1a33]">
                  Имя
                </label>
                <input
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Иван Иванов"
                  className="mt-2 w-full rounded-lg border border-transparent bg-[#f3f4f6] px-4 py-3 text-[#111827] outline-none ring-[#0a1a33]/20 transition placeholder:text-[#9ca3af] focus:ring-2"
                />
              </div>
              <div>
                <label className="text-xs font-bold uppercase tracking-wider text-[#0a1a33]">
                  Компания
                </label>
                <input
                  required
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                  placeholder="ООО Логистика-Плюс"
                  className="mt-2 w-full rounded-lg border border-transparent bg-[#f3f4f6] px-4 py-3 text-[#111827] outline-none ring-[#0a1a33]/20 transition placeholder:text-[#9ca3af] focus:ring-2"
                />
              </div>
              <div>
                <label className="text-xs font-bold uppercase tracking-wider text-[#0a1a33]">
                  Email
                </label>
                <input
                  required
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="ivan@company.ru"
                  className="mt-2 w-full rounded-lg border border-transparent bg-[#f3f4f6] px-4 py-3 text-[#111827] outline-none ring-[#0a1a33]/20 transition placeholder:text-[#9ca3af] focus:ring-2"
                />
              </div>

              <button
                type="submit"
                disabled={status === "loading"}
                className="flex w-full items-center justify-center gap-2 rounded-lg bg-[#0a1a33] py-3.5 text-sm font-bold text-white transition hover:bg-[#132a4d] disabled:opacity-70"
              >
                {status === "loading" ? (
                  <Loader2 className="h-5 w-5 animate-spin" aria-hidden />
                ) : (
                  <>
                    Запросить демонстрацию
                    <Send className="h-4 w-4" aria-hidden />
                  </>
                )}
              </button>

              {message ? (
                <p
                  className={`text-center text-xs ${
                    status === "ok" ? "text-emerald-600" : "text-red-600"
                  }`}
                >
                  {message}
                </p>
              ) : null}

              <p className="text-center text-xs leading-relaxed text-[#6b7280]">
                Нажимая кнопку, вы соглашаетесь на обработку персональных данных в соответствии с
                политикой конфиденциальности.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
