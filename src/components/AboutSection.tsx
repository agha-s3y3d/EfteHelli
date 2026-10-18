import { Users, Heart, Trophy, Sparkles, ArrowLeft } from "lucide-react";
import { aboutHighlights } from "../data/mock";
import type { JSX } from "react";

const iconMap: Record<string, JSX.Element> = {
  users: <Users className="h-5 w-5" />,
  heart: <Heart className="h-5 w-5" />,
  trophy: <Trophy className="h-5 w-5" />,
  sparkles: <Sparkles className="h-5 w-5" />,
};

export default function AboutSection() {
  return (
    <section id="about" className="bg-white py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="relative">
            <div className="overflow-hidden rounded-2xl shadow-lift">
              <img
                src="https://images.pexels.com/photos/15362127/pexels-photo-15362127.jpeg?auto=compress&cs=tinysrgb&w=1100"
                alt="جمعی از اعضای مجموعه در یک رویداد پرشور"
                loading="lazy"
                className="aspect-[4/3] w-full object-cover"
              />
            </div>
            <div className="absolute -bottom-5 right-5 hidden rounded-2xl border border-ink-border bg-white px-5 py-4 shadow-lift sm:block">
              <p className="text-2xl font-bold text-brand numeric">۱۲+ سال</p>
              <p className="text-xs text-ink-muted">فعالیت مستمر مجموعه</p>
            </div>
          </div>

          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-brand/10 px-3.5 py-1.5 text-xs font-semibold text-brand sm:text-sm">
              درباره مجموعه
            </span>
            <h2 className="mt-5 text-2xl font-bold text-ink sm:text-3xl lg:text-4xl">
              درباره مجموعه ما
            </h2>
            <p className="mt-4 text-sm leading-7 text-ink-muted sm:text-base">
              مجموعه همراهان، یک جامعه فرهنگی-ورزشی داوطلبانه است که با هدف
              ایجاد فضایی صمیمی برای هم‌نشینی، یادگیری و فعالیت ورزشی شکل گرفته
              است. ما باور داریم که حضور فعال اعضا و تجربه‌های مشترک، قلب تپنده
              هر مجموعه‌ای است و تلاش می‌کنیم برنامه‌های متنوعی برای همه سلیقه‌ها
              طراحی کنیم.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {aboutHighlights.map((h) => (
                <div
                  key={h.title}
                  className="rounded-2xl border border-ink-border bg-ink-surface p-4 transition-colors hover:border-brand/40"
                >
                  <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-brand/10 text-brand">
                    {iconMap[h.icon]}
                  </span>
                  <h3 className="mt-3 text-sm font-bold text-ink">{h.title}</h3>
                  <p className="mt-1 text-xs leading-5 text-ink-muted">{h.description}</p>
                </div>
              ))}
            </div>

            <button
              type="button"
              className="mt-8 inline-flex items-center gap-2 rounded-xl bg-brand px-6 py-3.5 text-sm font-semibold text-white shadow-sm transition-all hover:bg-brand/90 hover:shadow-md sm:text-base"
            >
              آشنایی بیشتر با مجموعه
              <ArrowLeft className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
