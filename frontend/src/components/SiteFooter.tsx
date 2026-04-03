import Link from "next/link";
import { API_BASE } from "@/lib/config";

const gold = "text-[#c4a46c]";

export function SiteFooter() {
  return (
    <footer className="bg-[#0a1a33] text-white">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 md:grid-cols-4 md:px-6">
        <div>
          <p className="text-2xl font-bold tracking-tight">IS UTO</p>
          <p className="mt-4 text-xs leading-relaxed text-white/50">
            © {new Date().getFullYear()} IS UTO INTELLIGENT VEHICLE ROUTING. ВСЕ ПРАВА ЗАЩИЩЕНЫ.
          </p>
        </div>
        <div>
          <p className={`text-xs font-bold uppercase tracking-wider ${gold}`}>Навигация</p>
          <ul className="mt-4 space-y-2 text-sm text-white/70">
            <li>
              <Link href="#" className="hover:text-white">
                Конфиденциальность
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-white">
                Условия использования
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <p className={`text-xs font-bold uppercase tracking-wider ${gold}`}>Ресурсы</p>
          <ul className="mt-4 space-y-2 text-sm text-white/70">
            <li>
              <Link href="#contact" className="hover:text-white">
                Поддержка
              </Link>
            </li>
            <li>
              <Link
                href={`${API_BASE}/docs`}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white"
              >
                API
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <p className={`text-xs font-bold uppercase tracking-wider ${gold}`}>Контакты</p>
          <p className="mt-4 text-sm leading-relaxed text-white/70">
            г. Астана, ул. Достык 12
            <br />
            +7 (700) 123-45-67
          </p>
        </div>
      </div>
    </footer>
  );
}
