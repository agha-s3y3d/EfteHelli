import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ArrowLeft } from "lucide-react";
import Logo from "../Logo";

interface NavItem {
  label: string;
  to: string;
}

const navItems: NavItem[] = [
  { label: "صفحه اصلی", to: "/" },
  { label: "رویدادها", to: "/events" },
  { label: "اطلاعیه‌ها", to: "/announcements" },
  { label: "لیگ فوتبال", to: "/league" },
  { label: "درباره مجموعه", to: "/about" },
];

export default function LeagueHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const isActive = (to: string) => (to === "/league" ? pathname === "/league" : pathname === to);

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-colors duration-300 ${
        scrolled
          ? "bg-white/90 backdrop-blur border-ink-border shadow-soft"
          : "bg-white border-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link to="/" aria-label="بازگشت به صفحه اصلی باشگاه همراهان">
          <Logo />
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="ناوبری اصلی">
          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className={`rounded-lg px-3.5 py-2 text-sm font-medium transition-colors ${
                isActive(item.to)
                  ? "bg-brand/10 text-brand"
                  : "text-ink-muted hover:bg-ink-surface hover:text-ink"
              }`}
              aria-current={isActive(item.to) ? "page" : undefined}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Link
            to="/league"
            className="hidden items-center gap-1.5 rounded-xl bg-brand px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition-all hover:bg-brand/90 hover:shadow-md sm:inline-flex"
          >
            ورود به لیگ فوتبال
            <ArrowLeft className="h-4 w-4" />
          </Link>

          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-ink-border text-ink transition-colors hover:bg-ink-surface lg:hidden"
            aria-label={open ? "بستن منو" : "باز کردن منو"}
            aria-expanded={open}
            aria-controls="league-mobile-menu"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      <div
        id="league-mobile-menu"
        className={`lg:hidden overflow-hidden border-t border-ink-border bg-white transition-[max-height,opacity] duration-300 ${
          open ? "max-h-[480px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="flex flex-col gap-1 px-4 py-4" aria-label="ناوبری موبایل">
          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              onClick={() => setOpen(false)}
              className={`rounded-lg px-4 py-3 text-sm font-medium transition-colors ${
                isActive(item.to) ? "bg-brand/10 text-brand" : "text-ink hover:bg-ink-surface"
              }`}
            >
              {item.label}
            </Link>
          ))}
          <Link
            to="/league"
            onClick={() => setOpen(false)}
            className="mt-2 inline-flex items-center justify-center gap-1.5 rounded-xl bg-brand px-4 py-3 text-sm font-semibold text-white"
          >
            ورود به لیگ فوتبال
            <ArrowLeft className="h-4 w-4" />
          </Link>
        </nav>
      </div>
    </header>
  );
}
