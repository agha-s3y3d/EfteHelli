import { ArrowLeft } from "lucide-react";
import { finishedMatches } from "../../data/league";
import MatchResultCard from "./MatchResultCard";

export default function ResultsSection() {
  const recent = [...finishedMatches].sort((a, b) => b.kickoffEpoch - a.kickoffEpoch).slice(0, 6);

  const scrollToSchedule = (e: React.MouseEvent) => {
    e.preventDefault();
    document.querySelector("#schedule")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="results" className="bg-ink-surface py-14 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="text-2xl font-bold text-ink sm:text-3xl">نتایج بازی‌های اخیر</h2>
            <p className="mt-2 max-w-xl text-sm text-ink-muted sm:text-base">
              جدیدترین مسابقات پایان‌یافته لیگ را اینجا ببینید.
            </p>
          </div>
          <a
            href="#schedule"
            onClick={scrollToSchedule}
            className="inline-flex items-center gap-1.5 self-start rounded-xl border border-ink-border bg-white px-4 py-2.5 text-sm font-semibold text-ink transition-colors hover:border-brand hover:text-brand sm:self-auto"
          >
            مشاهده همه نتایج
            <ArrowLeft className="h-4 w-4" />
          </a>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {recent.map((m) => (
            <MatchResultCard key={m.id} match={m} />
          ))}
        </div>
      </div>
    </section>
  );
}
