import { Trophy, Users, CheckCircle2, CalendarClock } from "lucide-react";
import { teams, finishedMatches, upcomingMatches } from "../../data/league";
import { toPersian } from "../../utils/persian";
import type { JSX } from "react";

export default function LeagueHero() {
  const teamCount = teams.length;
  const playedCount = finishedMatches.length;
  const remainingCount = upcomingMatches.length;

  const stats: { label: string; value: number; icon: JSX.Element }[] = [
    { label: "تعداد تیم‌ها", value: teamCount, icon: <Users className="h-5 w-5" /> },
    { label: "مسابقات برگزارشده", value: playedCount, icon: <CheckCircle2 className="h-5 w-5" /> },
    { label: "مسابقات باقی‌مانده", value: remainingCount, icon: <CalendarClock className="h-5 w-5" /> },
  ];

  return (
    <section className="relative overflow-hidden bg-forest py-14 sm:py-16 lg:py-20">
      {/* Decorative pitch lines */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.08]" aria-hidden="true">
        <div className="absolute left-1/2 top-1/2 h-[360px] w-[680px] max-w-[92vw] -translate-x-1/2 -translate-y-1/2 rounded-2xl border-2 border-white" />
        <div className="absolute left-1/2 top-1/2 h-[360px] w-px -translate-x-1/2 -translate-y-1/2 bg-white" />
        <div className="absolute left-1/2 top-1/2 h-28 w-28 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-white" />
      </div>

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="max-w-3xl">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3.5 py-1.5 text-xs font-semibold text-brand-light ring-1 ring-white/15 sm:text-sm">
            <Trophy className="h-4 w-4" />
            رقابت‌های ورزشی مجموعه
          </span>
          <h1 className="mt-5 text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
            لیگ فوتبال باشگاه همراهان
          </h1>
          <p className="mt-4 max-w-2xl text-sm leading-7 text-white/75 sm:text-base">
            نتایج، برنامه مسابقات و جدول رده‌بندی تیم‌ها را دنبال کنید.
          </p>
          <span className="mt-5 inline-flex items-center gap-2 rounded-full bg-brand px-3.5 py-1.5 text-xs font-semibold text-white sm:text-sm">
            <span className="h-2 w-2 animate-pulse rounded-full bg-brand-light" />
            در حال برگزاری
          </span>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-3">
          {stats.map((s) => (
            <div
              key={s.label}
              className="flex items-center gap-4 rounded-2xl bg-white/10 p-5 ring-1 ring-white/15 backdrop-blur-sm"
            >
              <span className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-brand text-white">
                {s.icon}
              </span>
              <div className="leading-tight">
                <p className="text-2xl font-bold text-white numeric sm:text-3xl">
                  {toPersian(s.value)}
                </p>
                <p className="text-xs text-white/70 sm:text-sm">{s.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
