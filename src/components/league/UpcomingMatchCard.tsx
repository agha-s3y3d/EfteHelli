import { Calendar, Clock, ArrowLeft } from "lucide-react";
import type { Match } from "../../data/league";
import { teamById } from "../../data/league";
import TeamBadge from "./TeamBadge";

export default function UpcomingMatchCard({
  match,
  featured = false,
  onPredict,
}: {
  match: Match;
  featured?: boolean;
  onPredict: (matchId: string) => void;
}) {
  const home = teamById(match.homeId);
  const away = teamById(match.awayId);

  if (featured) {
    return (
      <article className="relative overflow-hidden rounded-2xl border border-brand/30 bg-gradient-to-br from-white to-brand-light/30 p-5 shadow-lift sm:p-6">
        <span className="inline-flex items-center gap-1.5 rounded-full bg-brand px-3 py-1 text-xs font-bold text-white">
          مسابقه منتخب
        </span>
        <div className="mt-4 flex items-center justify-around gap-3">
          <div className="flex items-center gap-2.5">
            <TeamBadge team={home} />
            <span className="text-sm font-bold text-ink sm:text-base">{home.name}</span>
          </div>
          <span className="flex-shrink-0 text-xl font-bold text-brand" dir="ltr">
            VS
          </span>
          <div className="flex flex-row-reverse items-center gap-2.5">
            <TeamBadge team={away} />
            <span className="text-sm font-bold text-ink sm:text-base">{away.name}</span>
          </div>
        </div>
        <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-ink-muted">
          <span className="inline-flex items-center gap-1.5">
            <Calendar className="h-3.5 w-3.5 text-brand" />
            {match.dateLabel}
          </span>
          <span className="inline-flex items-center gap-1.5">
            <Clock className="h-3.5 w-3.5 text-brand" />
            ساعت {match.time}
          </span>
          <span className="rounded-full bg-ink-surface px-2.5 py-0.5">گروه {match.group}</span>
        </div>
        <button
          type="button"
          onClick={() => onPredict(match.id)}
          className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-brand px-5 py-3 text-sm font-bold text-white transition-colors hover:bg-brand/90 sm:w-auto"
        >
          پیش‌بینی نتیجه
          <ArrowLeft className="h-4 w-4" />
        </button>
      </article>
    );
  }

  return (
    <article className="flex flex-col rounded-2xl border border-ink-border bg-white p-5 shadow-soft transition-all hover:shadow-lift">
      <div className="flex items-center justify-between text-xs text-ink-muted">
        <span className="rounded-full bg-ink-surface px-2.5 py-1 font-medium">گروه {match.group}</span>
        <span className="inline-flex items-center gap-1.5 text-brand">
          <span className="h-1.5 w-1.5 rounded-full bg-brand" />
          به‌زودی
        </span>
      </div>

      <div className="mt-4 flex items-center justify-between gap-2">
        <div className="flex flex-1 items-center gap-2">
          <TeamBadge team={home} size="sm" />
          <span className="truncate text-sm font-bold text-ink">{home.name}</span>
        </div>
        <span className="flex-shrink-0 text-sm font-bold text-ink-muted" dir="ltr">
          VS
        </span>
        <div className="flex flex-1 flex-row-reverse items-center gap-2">
          <TeamBadge team={away} size="sm" />
          <span className="truncate text-sm font-bold text-ink">{away.name}</span>
        </div>
      </div>

      <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-ink-muted">
        <span className="inline-flex items-center gap-1.5">
          <Calendar className="h-3.5 w-3.5 text-brand" />
          {match.dateLabel}
        </span>
        <span className="inline-flex items-center gap-1.5">
          <Clock className="h-3.5 w-3.5 text-brand" />
          {match.time}
        </span>
      </div>

      <button
        type="button"
        onClick={() => onPredict(match.id)}
        className="mt-4 inline-flex items-center justify-center gap-1.5 rounded-xl border border-brand/30 bg-brand/5 px-4 py-2.5 text-sm font-semibold text-brand transition-colors hover:bg-brand hover:text-white"
      >
        پیش‌بینی نتیجه
        <ArrowLeft className="h-4 w-4" />
      </button>
    </article>
  );
}
