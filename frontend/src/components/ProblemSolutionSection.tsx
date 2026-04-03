import { Bot, CalendarX, Forklift } from "lucide-react";

const columns = [
  {
    icon: CalendarX,
    title: "Ручное планирование",
    body:
      "Традиционные методы приводят к задержкам до 40 минут на каждой заявке. Диспетчеры тратят ценное время на выбор техники, часто допуская ошибки в ETA.",
    tag: "ПРОБЛЕМА №1",
    tagClass: "text-red-600",
    bg: "bg-[#F7F8FA]",
    text: "text-[#111827]",
  },
  {
    icon: Bot,
    title: "Интеллектуальный подбор",
    body:
      "Алгоритм мгновенно анализирует весь доступный флот. Учитываются текущие координаты, тип спецтехники и приоритет заявки для автоматического назначения.",
    tag: "НАШЕ РЕШЕНИЕ",
    tagClass: "text-[#E3D2A6]",
    bg: "bg-[#001529]",
    text: "text-white",
    iconClass: "text-[#E3D2A6]",
    highlight: true,
  },
  {
    icon: Forklift,
    title: "Объединение заявок",
    body:
      "Система создает multi-stop маршруты, исключая холостые пробеги. Достигается максимальная загрузка флота за счет умного группирования задач.",
    tag: "РЕЗУЛЬТАТ",
    tagClass: "text-sky-600",
    bg: "bg-[#F7F8FA]",
    text: "text-[#111827]",
  },
] as const;

export function ProblemSolutionSection() {
  return (
    <section id="solutions" className="bg-[#eef0f3] py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="overflow-hidden rounded-2xl border border-black/[0.06] bg-white shadow-lg shadow-black/[0.04] md:grid md:grid-cols-3">
          {columns.map((col) => {
            const Icon = col.icon;
            return (
              <div
                key={col.tag}
                className={`flex flex-col border-b border-black/[0.06] p-8 md:border-b-0 md:border-r md:border-black/[0.06] last:border-r-0 last:border-b-0 ${col.bg} ${col.text}`}
              >
                <div
                  className={`mb-6 flex h-12 w-12 items-center justify-center rounded-lg ${
                    "highlight" in col && col.highlight
                      ? "bg-white/10"
                      : "bg-[#e5e7eb] text-[#374151]"
                  }`}
                >
                  <Icon
                    className={`h-6 w-6 ${"iconClass" in col ? col.iconClass : ""}`}
                    strokeWidth={1.75}
                    aria-hidden
                  />
                </div>
                <h2 className="text-xl font-bold">{col.title}</h2>
                <p className="mt-4 flex-1 text-sm leading-relaxed opacity-90">{col.body}</p>
                <div
                  className={`mt-8 border-t pt-6 text-xs font-semibold tracking-wider ${
                    "highlight" in col && col.highlight
                      ? "border-white/20"
                      : "border-black/10"
                  } ${col.tagClass}`}
                >
                  {col.tag}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
