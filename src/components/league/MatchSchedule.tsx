import { useMemo, useState } from "react";
import { Calendar, Clock, SearchX } from "lucide-react";
import { matches, groups, type GroupId } from "../../data/league";
import { teamById } from "../../data/league";
import { toPersian } from "../../utils/persian";
import TeamBadge from "./TeamBadge";

type StatusFilter = "all" | "upcoming" | "finished";

export default function MatchSchedule() {
  const [groupFilter, setGroupFilter] = useState<GroupId | "all">("all");
  const [statusFilter, setStatusFilter] = useState<StatusFilter>("all");

  const filtered = useMemo(() => {
    return matches
      .filter((m) => groupFilter === "all" || m.group === groupFilter)
      .filter((m) => statusFilter === "all" || m.status === statusFilter)
      .sort((a, b) => a.kickoffEpoch - b.kickoffEpoch);
  }, [groupFilter, statusFilter]);

  return (
    <section id="schedule" className="bg-white py-14 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div>
          <h2 className="text-2xl font-bold text-ink sm:text-3xl">برنامه کامل مسابقات</h2>
          <p className="mt-2 max-w-xl text-sm text-ink-muted sm:text-base">
            همه مسابقات لیگ را بر اساس گروه و وضعیت فیلتر کنید.
          </p>
        </div>

        {/* Filters */}
        <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-6">
          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-1">
            <span className="flex-shrink-0 text-xs font-semibold text-ink-muted">گروه:</span>
            <FilterChip active={groupFilter === "all"} onClick={() => setGroupFilter("all")}>
              همه
            </FilterChip>
            {groups.map((g) => (
              <FilterChip
                key={g.id}
                active={groupFilter === g.id}
                onClick={() => setGroupFilter(g.id)}
              >
                {g.label}
              </FilterChip>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <span className="flex-shrink-0 text-xs font-semibold text-ink-muted">وضعیت:</span>
            <FilterChip active={statusFilter === "all"} onClick={() => setStatusFilter("all")}>
              همه
            </FilterChip>
            <FilterChip active={statusFilter === "upcoming"} onClick={() => setStatusFilter("upcoming")}>
              پیش‌رو
            </FilterChip>
            <FilterChip active={statusFilter === "finished"} onClick={() => setStatusFilter("finished")}>
              پایان‌یافته
            </FilterChip>
          </div>
        </div>

        {/* List */}
        {filtered.length === 0 ? (
          <div className="mt-10 flex flex-col items-center justify-center rounded-2xl border border-dashed border-ink-border bg-ink-surface py-16 text-center">
            <SearchX className="h-10 w-10 text-ink-muted" />
            <p className="mt-4 text-sm font-semibold text-ink">مسابقه‌ای یافت نشد</p>
            <p className="mt-1 text-xs text-ink-muted">فیلترهای انتخابی را تغییر دهید.</p>
          </div>
        ) : (
          <div className="mt-8 space-y-3">
            {filtered.map((m) => {
              const home = teamById(m.homeId);
              const away = teamById(m.awayId);
              const homeWin = (m.homeScore ?? 0) > (m.awayScore ?? 0);
              const awayWin = (m.awayScore ?? 0) > (m.homeScore ?? 0);
              return (
                <div
                  key={m.id}
                  className="flex flex-col gap-3 rounded-2xl border border-ink-border bg-white p-4 shadow-soft sm:flex-row sm:items-center sm:justify-between"
                >
                  <div className="flex items-center gap-3">
                    <span className="flex-shrink-0 rounded-lg bg-ink-surface px-2.5 py-1 text-xs font-semibold text-ink-muted">
                      گروه {m.group}
                    </span>
                    <div className="flex flex-1 items-center gap-2">
                      <TeamBadge team={home} size="sm" />
                      <span className="text-sm font-semibold text-ink whitespace-nowrap">{home.name}</span>
                    </div>
                    {m.status === "finished" ? (
                      <span className="flex-shrink-0 rounded-lg bg-ink-surface px-3 py-1 text-sm font-bold tabular-nums" dir="ltr">
                        <span className={homeWin ? "text-brand" : "text-ink"}>{toPersian(m.homeScore ?? 0)}</span>
                        <span className="mx-1 text-ink-muted">-</span>
                        <span className={awayWin ? "text-brand" : "text-ink"}>{toPersian(m.awayScore ?? 0)}</span>
                      </span>
                    ) : (
                      <span className="flex-shrink-0 text-sm font-bold text-ink-muted" dir="ltr">VS</span>
                    )}
                    <div className="flex flex-1 flex-row-reverse items-center gap-2">
                      <TeamBadge team={away} size="sm" />
                      <span className="text-sm font-semibold text-ink whitespace-nowrap">{away.name}</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between gap-3 text-xs text-ink-muted sm:flex-shrink-0 sm:justify-end">
                    <span className="inline-flex items-center gap-1.5">
                      <Calendar className="h-3.5 w-3.5 text-brand" />
                      {m.dateLabel}
                    </span>
                    <span className="inline-flex items-center gap-1.5">
                      <Clock className="h-3.5 w-3.5 text-brand" />
                      {m.time}
                    </span>
                    <span
                      className={`rounded-full px-2.5 py-0.5 font-semibold ${
                        m.status === "finished"
                          ? "bg-ink-surface text-ink-muted"
                          : "bg-brand/10 text-brand"
                      }`}
                    >
                      {m.status === "finished" ? "پایان‌یافته" : "به‌زودی"}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}

function FilterChip({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`flex-shrink-0 rounded-lg px-3 py-1.5 text-xs font-semibold transition-colors ${
        active
          ? "bg-brand text-white"
          : "border border-ink-border bg-white text-ink-muted hover:text-ink"
      }`}
    >
      {children}
    </button>
  );
}
