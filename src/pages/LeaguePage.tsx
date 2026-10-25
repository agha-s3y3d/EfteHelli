import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import LeagueHeader from "../components/league/LeagueHeader";
import LeagueFooter from "../components/league/LeagueFooter";
import LeagueHero from "../components/league/LeagueHero";
import NextMatchCard from "../components/league/NextMatchCard";
import ResultsSection from "../components/league/ResultsSection";
import UpcomingSection from "../components/league/UpcomingSection";
import GroupStandings from "../components/league/GroupStandings";
import MatchSchedule from "../components/league/MatchSchedule";
import PredictionPanel from "../components/league/PredictionPanel";
import { matches } from "../data/league";
import type { Match } from "../data/league";

export default function LeaguePage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const matchId = searchParams.get("matchId");
  const [selectedMatch, setSelectedMatch] = useState<Match | null>(null);

  // Resolve the match from the ?matchId= query param (e.g. /league?matchId=m-a5).
  useEffect(() => {
    if (!matchId) {
      setSelectedMatch(null);
      return;
    }
    const found = matches.find((m) => m.id === matchId) ?? null;
    if (found && found.status === "upcoming") {
      setSelectedMatch(found);
    } else {
      // Completed match or unknown id: drop the param so nothing stale stays.
      setSelectedMatch(null);
      setSearchParams({}, { replace: true });
    }
  }, [matchId, setSearchParams]);

  const openPrediction = (id: string) => {
    setSearchParams({ matchId: id }, { replace: true });
  };

  const closePrediction = () => {
    setSelectedMatch(null);
    setSearchParams({}, { replace: true });
  };

  return (
    <>
      <main className="flex-1">
        <LeagueHero />
        <NextMatchCard onPredict={openPrediction} />
        <ResultsSection />
        <UpcomingSection onPredict={openPrediction} />
        <GroupStandings />
        <MatchSchedule />
      </main>

      {selectedMatch && (
        <PredictionPanel match={selectedMatch} onClose={closePrediction} />
      )}
    </>
  );
}
