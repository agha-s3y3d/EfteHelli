import { Link } from "react-router-dom";
import { Trophy, ArrowLeft } from "lucide-react";

export default function LeagueSection() {
  return (
    <section id="league" className="relative overflow-hidden bg-forest py-16 sm:py-20 lg:py-24">
      {/* Decorative pitch lines */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.07]" aria-hidden="true">
        <div className="absolute left-1/2 top-1/2 h-[420px] w-[760px] max-w-[90vw] -translate-x-1/2 -translate-y-1/2 rounded-2xl border-2 border-white" />
        <div className="absolute left-1/2 top-1/2 h-[420px] w-px -translate-x-1/2 -translate-y-1/2 bg-white" />
        <div className="absolute left-1/2 top-1/2 h-32 w-32 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-white" />
      </div>

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div className="order-2 lg:order-1">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3.5 py-1.5 text-xs font-semibold text-brand-light ring-1 ring-white/15 sm:text-sm">
              <Trophy className="h-4 w-4" />
              رقابت‌های ورزشی مجموعه
            </span>
            <h2 className="mt-5 text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
              لیگ فوتبال مجموعه
            </h2>
            <p className="mt-4 max-w-xl text-sm leading-7 text-white/75 sm:text-base">
              تیم‌های شرکت‌کننده، برنامه زمانی مسابقات، نتایج زنده و جدول رده‌بندی
              را در صفحه اختصاصی لیگ فوتبال دنبال کنید. از لحظه نخست تا تاخت
              قهرمانی، همراه مجموعه باشید.
            </p>

            <ul className="mt-6 grid gap-2 text-sm text-white/80 sm:grid-cols-2">
              {["تیم‌های شرکت‌کننده", "برنامه مسابقات", "نتایج و امتیازات", "جدول رده‌بندی"].map(
                (item) => (
                  <li key={item} className="inline-flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-brand-light" />
                    {item}
                  </li>
                )
              )}
            </ul>

            <Link
              to="/league"
              className="mt-8 inline-flex items-center gap-2 rounded-xl bg-brand-light px-6 py-3.5 text-sm font-bold text-forest shadow-lg transition-all hover:bg-white hover:shadow-xl sm:text-base"
            >
              ورود به صفحه لیگ فوتبال
              <ArrowLeft className="h-4 w-4" />
            </Link>
          </div>

          <div className="order-1 lg:order-2">
            <div className="relative overflow-hidden rounded-2xl ring-1 ring-white/15">
              <img
                src="https://images.pexels.com/photos/32190700/pexels-photo-32190700.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt="بازیکنان در جریان یک مسابقه فوتبال شبانه"
                loading="lazy"
                className="aspect-[4/3] w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-forest/40 to-transparent" />
              <div className="absolute bottom-4 right-4 flex items-center gap-3 rounded-xl bg-ink/70 px-4 py-3 backdrop-blur-md">
                <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand text-white">
                  <Trophy className="h-5 w-5" />
                </span>
                <div className="leading-tight">
                  <p className="text-sm font-bold text-white">لیگ حلی چهار ۱۴۰۵</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
