import { useEffect, useState } from "react";
import { Calendar, Clock, Flag, ArrowLeft } from "lucide-react";
import { getNextMatch, dayLabelFor, teamById } from "../../data/league";
import { toPersian } from "../../utils/persian";
import TeamBadge from "./TeamBadge";

function useCountdown(target: number) {
  const [now, setNow] = useState(() => Date.now());
  useEffect(() => {
    const id = window.setInterval(() => setNow(Date.now()), 1000);
    return () => window.clearInterval(id);
  }, []);
  const remaining = Math.max(0, target - now);
  const days = Math.floor(remaining / 86400000);
  const hours = Math.floor((remaining % 86400000) / 3600000);
  const minutes = Math.floor((remaining % 3600000) / 60000);
  const seconds = Math.floor((remaining % 60000) / 1000);
  return { days, hours, minutes, seconds };
}
export default function NextMatchCard({
  onPredict,
}: {
  onPredict: (matchId: string) => void;
}) {
  const match = getNextMatch();

  const { days, hours, minutes, seconds } =
    useCountdown(match?.kickoffEpoch ?? 0);

  if (!match) return null;

  const home = teamById(match.homeId);
  const away = teamById(match.awayId);
  const label = dayLabelFor(match);

  const units = [
    { label: "روز", value: days },
    { label: "ساعت", value: hours },
    { label: "دقیقه", value: minutes },
    { label: "ثانیه", value: seconds },
  ];

  return (
    <section id="next-match" className="bg-ink-surface py-12 sm:py-14">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="relative overflow-hidden rounded-3xl bg-forest shadow-lift">
          <div className="pointer-events-none absolute inset-0 opacity-[0.07]" aria-hidden="true">
            <div className="absolute left-1/2 top-1/2 h-full w-px -translate-x-1/2 -translate-y-1/2 bg-white" />
          </div>
          <div className="relative grid gap-6 p-6 sm:p-8 lg:grid-cols-[1.4fr_1fr] lg:items-center lg:gap-8 lg:p-10">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full bg-brand-light px-3.5 py-1.5 text-xs font-bold text-forest sm:text-sm">
                <Flag className="h-3.5 w-3.5" />
                {label}
              </span>
              <div className="mt-5 flex items-center justify-between gap-4 sm:gap-8">
                <div className="flex flex-1 flex-col items-center gap-2 text-center">
                  <TeamBadge team={home} size="lg" />
                  <span className="text-lg font-bold text-white sm:text-base">{home.name}</span>
                </div>
                <div className="flex flex-col items-center">
                  <span className="text-xs text-white/60 sm:text-sm">در مقابل</span>
                  <span className="mt-1 text-2xl font-bold text-brand-light sm:text-3xl">VS</span>
                </div>
                <div className="flex flex-1 flex-col items-center gap-2 text-center">
                  <TeamBadge team={away} size="lg" />
                  <span className="text-lg font-bold text-white sm:text-base">{away.name}</span>
                </div>
              </div>

              <div className="mt-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-white/80">
                <span className="inline-flex items-center gap-2">
                  <Calendar className="h-4 w-4 text-brand-light" />
                  {match.dateLabel}
                </span>
                <span className="inline-flex items-center gap-2">
                  <Clock className="h-4 w-4 text-brand-light" />
                  ساعت {match.time}
                </span>
                <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs">
                  {match.group === "A" ? "گروه A" : `گروه ${match.group}`}
                </span>
              </div>
            </div>

            <div className="flex flex-col items-center gap-4 rounded-2xl bg-white/10 p-5 ring-1 ring-white/15">
              <p className="text-xs font-semibold text-white/70 sm:text-sm">شمارش معکوس تا شروع بازی</p>
              <div className="flex items-center gap-2 sm:gap-3" dir="ltr">
                {units.map((u) => (
                  <div key={u.label} className="flex flex-col items-center">
                    <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/15 text-xl font-bold text-white tabular-nums sm:h-14 sm:w-14 sm:text-2xl">
                      {toPersian(String(u.value).padStart(2, "0"))}
                    </span>
                    <span className="mt-1 text-[10px] text-white/60 sm:text-xs">{u.label}</span>
                  </div>
                ))}
              </div>
              <button
                type="button"
                onClick={() => onPredict(match.id)}
                className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-brand-light px-6 py-3 text-sm font-bold text-forest transition-colors hover:bg-white sm:text-base"
              >
                پیش‌بینی نتیجه
                <ArrowLeft className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
