import { Link } from "react-router-dom";
import { Calendar, Trophy, Info, Award, ArrowLeft } from "lucide-react";
import { announcements } from "../data/mock";
import type { JSX } from "react";

const iconMap: Record<string, JSX.Element> = {
  calendar: <Calendar className="h-5 w-5" />,
  trophy: <Trophy className="h-5 w-5" />,
  info: <Info className="h-5 w-5" />,
  award: <Award className="h-5 w-5" />,
};

export default function AnnouncementsSection() {
  return (
    <section id="announcements" className="bg-ink-surface py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="text-2xl font-bold text-ink sm:text-3xl lg:text-4xl">
              آخرین اطلاعیه‌ها
            </h2>
            <p className="mt-2 max-w-xl text-sm text-ink-muted sm:text-base">
              جدیدترین اخبار و تغییرات برنامه‌های مجموعه را اینجا بخوانید.
            </p>
          </div>
          <Link
            to="/announcements"
            className="inline-flex items-center gap-1.5 self-start rounded-xl border border-ink-border bg-white px-4 py-2.5 text-sm font-semibold text-ink transition-colors hover:border-brand hover:text-brand sm:self-auto"
          >
            مشاهده همه اطلاعیه‌ها
            <ArrowLeft className="h-4 w-4" />
          </Link>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {announcements.map((a) => (
            <article
              key={a.id}
              className="group flex gap-4 rounded-2xl border border-ink-border bg-white p-5 shadow-soft transition-all duration-300 hover:border-brand/40 hover:shadow-lift"
            >
              <span className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-brand/10 text-brand">
                {iconMap[a.icon]}
              </span>
              <div className="flex flex-1 flex-col">
                <div className="flex items-start justify-between gap-3">
                  <h3 className="text-base font-bold text-ink">{a.title}</h3>
                  <span className="flex-shrink-0 text-xs text-ink-muted numeric">{a.date}</span>
                </div>
                <p className="mt-1.5 line-clamp-2 text-sm leading-6 text-ink-muted">
                  {a.preview}
                </p>
                <button
                  type="button"
                  className="mt-3 inline-flex items-center gap-1.5 self-start text-sm font-semibold text-brand transition-colors hover:text-forest"
                >
                  مشاهده اطلاعیه
                  <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
