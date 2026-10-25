import { useState } from "react";
import { Trophy } from "lucide-react";
import { groups, computeStandings, type GroupId } from "../../data/league";
import { toPersian } from "../../utils/persian";
import TeamBadge from "./TeamBadge";

export default function GroupStandings() {
  const [active, setActive] = useState<GroupId>("A");
  const rows = computeStandings(active);

  return (
    <section id="standings" className="bg-ink-surface py-14 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div>
          <h2 className="text-2xl font-bold text-ink sm:text-3xl">جدول رده‌بندی مسابقات</h2>
          <p className="mt-2 max-w-xl text-sm text-ink-muted sm:text-base">
            رده‌بندی تیم‌های هر گروه بر اساس امتیاز، تفاضل گل و گل زده مرتب می‌شود.
          </p>
        </div>

        {/* Group tabs */}
        <div className="mt-6 flex gap-2 overflow-x-auto no-scrollbar pb-1" role="tablist" aria-label="انتخاب گروه">
          {groups.map((g) => (
            <button
              key={g.id}
              role="tab"
              aria-selected={active === g.id}
              onClick={() => setActive(g.id)}
              className={`flex-shrink-0 rounded-xl px-4 py-2.5 text-sm font-semibold transition-colors ${
                active === g.id
                  ? "bg-brand text-white shadow-sm"
                  : "border border-ink-border bg-white text-ink-muted hover:text-ink"
              }`}
            >
              {g.label}
            </button>
          ))}
        </div>

        {/* Table */}
        <div className="mt-6 overflow-x-auto rounded-2xl border border-ink-border bg-white shadow-soft">
          <table className="w-full min-w-[640px] text-sm">
            <thead>
              <tr className="border-b border-ink-border bg-ink-surface text-ink-muted">
                <th scope="col" className="px-3 py-3 text-center font-semibold">رتبه</th>
                <th scope="col" className="px-3 py-3 text-right font-semibold">تیم</th>
                <th scope="col" className="px-3 py-3 text-center font-semibold">بازی</th>
                <th scope="col" className="px-3 py-3 text-center font-semibold">برد</th>
                <th scope="col" className="px-3 py-3 text-center font-semibold">مساوی</th>
                <th scope="col" className="px-3 py-3 text-center font-semibold">باخت</th>
                <th scope="col" className="px-3 py-3 text-center font-semibold">گل زده</th>
                <th scope="col" className="px-3 py-3 text-center font-semibold">گل خورده</th>
                <th scope="col" className="px-3 py-3 text-center font-semibold">تفاضل</th>
                <th scope="col" className="px-3 py-3 text-center font-semibold">امتیاز</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((r, i) => {
                const top = i === 0;
                return (
                  <tr
                    key={r.team.id}
                    className={`border-b border-ink-border/60 last:border-0 ${
                      top ? "bg-brand-light/20" : "hover:bg-ink-surface/60"
                    }`}
                  >
                    <td className="px-3 py-3 text-center">
                      <span
                        className={`inline-flex h-6 w-6 items-center justify-center rounded-full text-xs font-bold ${
                          top ? "bg-brand text-white" : "bg-ink-surface text-ink-muted"
                        }`}
                      >
                        {toPersian(i + 1)}
                      </span>
                    </td>
                    <td className="px-3 py-3">
                      <div className="flex items-center gap-2">
                        <TeamBadge team={r.team} size="sm" />
                        <span className="font-semibold text-ink">{r.team.name}</span>
                      </div>
                    </td>
                    <td className="px-3 py-3 text-center tabular-nums text-ink-muted">{toPersian(r.played)}</td>
                    <td className="px-3 py-3 text-center tabular-nums text-ink">{toPersian(r.won)}</td>
                    <td className="px-3 py-3 text-center tabular-nums text-ink-muted">{toPersian(r.drawn)}</td>
                    <td className="px-3 py-3 text-center tabular-nums text-ink-muted">{toPersian(r.lost)}</td>
                    <td className="px-3 py-3 text-center tabular-nums text-ink">{toPersian(r.gf)}</td>
                    <td className="px-3 py-3 text-center tabular-nums text-ink-muted">{toPersian(r.ga)}</td>
                    <td className="px-3 py-3 text-center tabular-nums font-semibold text-ink">
                      {r.gd > 0 ? "+" : ""}
                      {toPersian(r.gd)}
                    </td>
                    <td className="px-3 py-3 text-center tabular-nums font-bold text-brand">{toPersian(r.points)}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        <p className="mt-4 inline-flex items-center gap-2 text-xs text-ink-muted">
          <Trophy className="h-3.5 w-3.5 text-brand" />
          تیم‌های صدرنشین هر گروه (روشن‌شده) به مرحله بعدی رقابت‌ها راه می‌یابند.
        </p>
      </div>
    </section>
  );
}
