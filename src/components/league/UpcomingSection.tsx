import { upcomingMatches, getNextMatch, dayLabelFor } from "../../data/league";
import UpcomingMatchCard from "./UpcomingMatchCard";

export default function UpcomingSection({
  onPredict,
}: {
  onPredict: (matchId: string) => void;
}) {
  const next = getNextMatch();
  const rest = upcomingMatches
    .filter((m) => m.id !== next?.id)
    .sort((a, b) => a.kickoffEpoch - b.kickoffEpoch);

  return (
    <section id="upcoming" className="bg-white py-14 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div>
          <h2 className="text-2xl font-bold text-ink sm:text-3xl">بازی‌های پیش‌رو</h2>
          <p className="mt-2 max-w-xl text-sm text-ink-muted sm:text-base">
            برنامه مسابقات آینده لیگ و پیش‌بینی نتیجه هر دیدار.
          </p>
        </div>

        {next && (
          <div className="mt-8">
            <p className="mb-3 text-sm font-semibold text-brand">{dayLabelFor(next)}</p>
            <UpcomingMatchCard match={next} featured onPredict={onPredict} />
          </div>
        )}

        <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {rest.map((m) => (
            <UpcomingMatchCard key={m.id} match={m} onPredict={onPredict} />
          ))}
        </div>
      </div>
    </section>
  );
}
