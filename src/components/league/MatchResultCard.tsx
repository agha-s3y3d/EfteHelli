import { CheckCircle2 } from "lucide-react";
import type { Match } from "../../data/league";
import { teamById } from "../../data/league";
import { toPersian } from "../../utils/persian";
import TeamBadge from "./TeamBadge";

export default function MatchResultCard({ match }: { match: Match }) {
  const home = teamById(match.homeId);
  const away = teamById(match.awayId);
  const homeWin = (match.homeScore ?? 0) > (match.awayScore ?? 0);
  const awayWin = (match.awayScore ?? 0) > (match.homeScore ?? 0);

  return (
    <article className="rounded-2xl border border-ink-border bg-white p-5 shadow-soft transition-all hover:shadow-lift">
      <div className="flex items-center justify-between text-xs text-ink-muted">
        <span className="inline-flex items-center gap-1.5 rounded-full bg-ink-surface px-2.5 py-1 font-medium">
          گروه {match.group}
        </span>
        <span className="inline-flex items-center gap-1.5">
          <CheckCircle2 className="h-3.5 w-3.5 text-brand" />
          پایان‌یافته
        </span>
      </div>

      <div className="mt-4 flex items-center justify-between gap-3">
        <div className="flex flex-1 items-center gap-2.5">
          <TeamBadge team={home} size="sm" />
          <span className="truncate text-sm font-bold text-ink">{home.name}</span>
        </div>
        <div className="flex flex-shrink-0 items-center gap-2 rounded-xl bg-ink-surface px-3 py-2" dir="ltr">
          <span
            className={`text-lg font-bold tabular-nums ${
              homeWin ? "text-brand" : "text-ink"
            }`}
          >
            {toPersian(match.homeScore ?? 0)}
          </span>
          <span className="text-sm text-ink-muted">-</span>
          <span
            className={`text-lg font-bold tabular-nums ${
              awayWin ? "text-brand" : "text-ink"
            }`}
          >
            {toPersian(match.awayScore ?? 0)}
          </span>
        </div>
        <div className="flex flex-1 flex-row-reverse items-center gap-2.5">
          <TeamBadge team={away} size="sm" />
          <span className="truncate text-sm font-bold text-ink">{away.name}</span>
        </div>
      </div>

      <p className="mt-4 text-center text-xs text-ink-muted">
        {match.dateLabel} — ساعت {match.time}
      </p>
    </article>
  );
}
