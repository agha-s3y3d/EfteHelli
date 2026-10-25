export type GroupId = "A" | "B" | "C" | "D" | "E" | "F";

export interface Team {
  id: string;
  name: string;
  short: string;
  color: string;
  group: GroupId;
}

export interface Match {
  id: string;
  group: GroupId;
  homeId: string;
  awayId: string;
  dateISO: string; // sortable ISO date
  dateLabel: string; // Persian display label
  time: string; // Persian display time
  kickoffEpoch: number; // ms epoch for countdown / ordering
  status: "finished" | "upcoming";
  homeScore?: number;
  awayScore?: number;
}

export const groups: { id: GroupId; label: string }[] = [
  { id: "A", label: "گروه A" },
  { id: "B", label: "گروه B" },
  { id: "C", label: "گروه C" },
  { id: "D", label: "گروه D" },
  { id: "E", label: "گروه E" },
  { id: "F", label: "گروه F" },
];

// "Today" reference for the prototype: 1405/07/28 ~= 2026-10-19.
// Upcoming matches are placed just after this; finished just before.

export const teams: Team[] = [
  // Group A
  { id: "oqab", name: "تیم عقاب", short: "عقاب", color: "#24734B", group: "A" },
  { id: "setare", name: "تیم ستاره", short: "ستاره", color: "#3B82F6", group: "A" },
  { id: "alborz", name: "تیم البرز", short: "البرز", color: "#6366F1", group: "A" },
  { id: "arya", name: "تیم آریا", short: "آریا", color: "#0EA5E9", group: "A" },
  // Group B
  { id: "qahraman", name: "تیم قهرمان", short: "قهرمان", color: "#DC2626", group: "B" },
  { id: "ettehad", name: "تیم اتحاد", short: "اتحاد", color: "#0891B2", group: "B" },
  { id: "mehr", name: "تیم مهر", short: "مهر", color: "#D97706", group: "B" },
  { id: "darya", name: "تیم دریا", short: "دریا", color: "#2563EB", group: "B" },
  // Group C
  { id: "shirdar", name: "تیم شیردل", short: "شیردل", color: "#B45309", group: "C" },
  { id: "sorkh", name: "تیم سرخ‌پوش", short: "سرخ", color: "#B91C1C", group: "C" },
  { id: "sabz", name: "تیم سبزپوش", short: "سبز", color: "#16A34A", group: "C" },
  { id: "nikan", name: "تیم نیکان", short: "نیکان", color: "#7C3AED", group: "C" },
  // Group D
  { id: "tavana", name: "تیم توانا", short: "توانا", color: "#0D9488", group: "D" },
  { id: "raha", name: "تیم رها", short: "رها", color: "#9333EA", group: "D" },
  { id: "faraz", name: "تیم فراز", short: "فراز", color: "#EA580C", group: "D" },
  { id: "deltaran", name: "تیم دلیران", short: "دلیران", color: "#1D4ED8", group: "D" },
  // Group E
  { id: "bolour", name: "تیم بلور", short: "بلور", color: "#475569", group: "E" },
  { id: "aseman", name: "تیم آسمان", short: "آسمان", color: "#0284C7", group: "E" },
  { id: "zamin", name: "تیم زمین", short: "زمین", color: "#65A30D", group: "E" },
  { id: "atash", name: "تیم آتش", short: "آتش", color: "#E11D48", group: "E" },
  // Group F
  { id: "kian", name: "تیم کیان", short: "کیان", color: "#9333EA", group: "F" },
  { id: "pardis", name: "تیم پارسیس", short: "پارسیس", color: "#CA8A04", group: "F" },
  { id: "sahel", name: "تیم ساحل", short: "ساحل", color: "#0E7490", group: "F" },
  { id: "kuh", name: "تیم کهن", short: "کهن", color: "#78350F", group: "F" },
];

// epoch helper for sample dates around 2026-10 (1405/07)
const day = 86400000;
// Reference "now" fixed for prototype determinism: 2026-10-19T10:00 local
const NOW = Date.UTC(2026, 9, 19, 6, 30); // approx kickoff-day morning

export const NOW_EPOCH = NOW;

// Finished matches (in the past relative to NOW)
export const matches: Match[] = [
  // Group A
  { id: "m-a1", group: "A", homeId: "oqab", awayId: "setare", dateISO: "2026-10-09", dateLabel: "۱۸ مهر ۱۴۰۵", time: "۱۸:۰۰", kickoffEpoch: NOW - 10 * day, status: "finished", homeScore: 2, awayScore: 1 },
  { id: "m-a2", group: "A", homeId: "alborz", awayId: "arya", dateISO: "2026-10-09", dateLabel: "۱۸ مهر ۱۴۰۵", time: "۲۰:۰۰", kickoffEpoch: NOW - 10 * day, status: "finished", homeScore: 0, awayScore: 0 },
  { id: "m-a3", group: "A", homeId: "setare", awayId: "alborz", dateISO: "2026-10-12", dateLabel: "۲۱ مهر ۱۴۰۵", time: "۱۸:۰۰", kickoffEpoch: NOW - 7 * day, status: "finished", homeScore: 1, awayScore: 2 },
  { id: "m-a4", group: "A", homeId: "arya", awayId: "oqab", dateISO: "2026-10-12", dateLabel: "۲۱ مهر ۱۴۰۵", time: "۲۰:۰۰", kickoffEpoch: NOW - 7 * day, status: "finished", homeScore: 1, awayScore: 1 },
  // Group B
  { id: "m-b1", group: "B", homeId: "qahraman", awayId: "ettehad", dateISO: "2026-10-10", dateLabel: "۱۹ مهر ۱۴۰۵", time: "۱۸:۰۰", kickoffEpoch: NOW - 9 * day, status: "finished", homeScore: 1, awayScore: 3 },
  { id: "m-b2", group: "B", homeId: "mehr", awayId: "darya", dateISO: "2026-10-10", dateLabel: "۱۹ مهر ۱۴۰۵", time: "۲۰:۰۰", kickoffEpoch: NOW - 9 * day, status: "finished", homeScore: 2, awayScore: 2 },
  { id: "m-b3", group: "B", homeId: "ettehad", awayId: "mehr", dateISO: "2026-10-13", dateLabel: "۲۲ مهر ۱۴۰۵", time: "۱۸:۰۰", kickoffEpoch: NOW - 6 * day, status: "finished", homeScore: 2, awayScore: 0 },
  { id: "m-b4", group: "B", homeId: "darya", awayId: "qahraman", dateISO: "2026-10-13", dateLabel: "۲۲ مهر ۱۴۰۵", time: "۲۰:۰۰", kickoffEpoch: NOW - 6 * day, status: "finished", homeScore: 0, awayScore: 1 },
  // Group C
  { id: "m-c1", group: "C", homeId: "shirdar", awayId: "sorkh", dateISO: "2026-10-09", dateLabel: "۱۸ مهر ۱۴۰۵", time: "۱۸:۰۰", kickoffEpoch: NOW - 10 * day, status: "finished", homeScore: 3, awayScore: 1 },
  { id: "m-c2", group: "C", homeId: "sabz", awayId: "nikan", dateISO: "2026-10-09", dateLabel: "۱۸ مهر ۱۴۰۵", time: "۲۰:۰۰", kickoffEpoch: NOW - 10 * day, status: "finished", homeScore: 1, awayScore: 1 },
  { id: "m-c3", group: "C", homeId: "sorkh", awayId: "sabz", dateISO: "2026-10-12", dateLabel: "۲۱ مهر ۱۴۰۵", time: "۱۸:۰۰", kickoffEpoch: NOW - 7 * day, status: "finished", homeScore: 0, awayScore: 2 },
  { id: "m-c4", group: "C", homeId: "nikan", awayId: "shirdar", dateISO: "2026-10-12", dateLabel: "۲۱ مهر ۱۴۰۵", time: "۲۰:۰۰", kickoffEpoch: NOW - 7 * day, status: "finished", homeScore: 1, awayScore: 2 },
  // Group D
  { id: "m-d1", group: "D", homeId: "tavana", awayId: "raha", dateISO: "2026-10-10", dateLabel: "۱۹ مهر ۱۴۰۵", time: "۱۸:۰۰", kickoffEpoch: NOW - 9 * day, status: "finished", homeScore: 2, awayScore: 1 },
  { id: "m-d2", group: "D", homeId: "faraz", awayId: "deltaran", dateISO: "2026-10-10", dateLabel: "۱۹ مهر ۱۴۰۵", time: "۲۰:۰۰", kickoffEpoch: NOW - 9 * day, status: "finished", homeScore: 0, awayScore: 0 },
  { id: "m-d3", group: "D", homeId: "raha", awayId: "faraz", dateISO: "2026-10-13", dateLabel: "۲۲ مهر ۱۴۰۵", time: "۱۸:۰۰", kickoffEpoch: NOW - 6 * day, status: "finished", homeScore: 1, awayScore: 3 },
  { id: "m-d4", group: "D", homeId: "deltaran", awayId: "tavana", dateISO: "2026-10-13", dateLabel: "۲۲ مهر ۱۴۰۵", time: "۲۰:۰۰", kickoffEpoch: NOW - 6 * day, status: "finished", homeScore: 1, awayScore: 2 },
  // Group E
  { id: "m-e1", group: "E", homeId: "bolour", awayId: "aseman", dateISO: "2026-10-09", dateLabel: "۱۸ مهر ۱۴۰۵", time: "۱۸:۰۰", kickoffEpoch: NOW - 10 * day, status: "finished", homeScore: 1, awayScore: 0 },
  { id: "m-e2", group: "E", homeId: "zamin", awayId: "atash", dateISO: "2026-10-09", dateLabel: "۱۸ مهر ۱۴۰۵", time: "۲۰:۰۰", kickoffEpoch: NOW - 10 * day, status: "finished", homeScore: 2, awayScore: 2 },
  { id: "m-e3", group: "E", homeId: "aseman", awayId: "zamin", dateISO: "2026-10-12", dateLabel: "۲۱ مهر ۱۴۰۵", time: "۱۸:۰۰", kickoffEpoch: NOW - 7 * day, status: "finished", homeScore: 0, awayScore: 1 },
  { id: "m-e4", group: "E", homeId: "atash", awayId: "bolour", dateISO: "2026-10-12", dateLabel: "۲۱ مهر ۱۴۰۵", time: "۲۰:۰۰", kickoffEpoch: NOW - 7 * day, status: "finished", homeScore: 1, awayScore: 1 },
  // Group F
  { id: "m-f1", group: "F", homeId: "kian", awayId: "pardis", dateISO: "2026-10-10", dateLabel: "۱۹ مهر ۱۴۰۵", time: "۱۸:۰۰", kickoffEpoch: NOW - 9 * day, status: "finished", homeScore: 2, awayScore: 0 },
  { id: "m-f2", group: "F", homeId: "sahel", awayId: "kuh", dateISO: "2026-10-10", dateLabel: "۱۹ مهر ۱۴۰۵", time: "۲۰:۰۰", kickoffEpoch: NOW - 9 * day, status: "finished", homeScore: 1, awayScore: 1 },
  { id: "m-f3", group: "F", homeId: "pardis", awayId: "sahel", dateISO: "2026-10-13", dateLabel: "۲۲ مهر ۱۴۰۵", time: "۱۸:۰۰", kickoffEpoch: NOW - 6 * day, status: "finished", homeScore: 0, awayScore: 2 },
  { id: "m-f4", group: "F", homeId: "kuh", awayId: "kian", dateISO: "2026-10-13", dateLabel: "۲۲ مهر ۱۴۰۵", time: "۲۰:۰۰", kickoffEpoch: NOW - 6 * day, status: "finished", homeScore: 1, awayScore: 3 },

  // Upcoming matches (after NOW). The earliest is "tomorrow".
  { id: "m-a5", group: "A", homeId: "oqab", awayId: "arya", dateISO: "2026-10-20", dateLabel: "۲۸ مهر ۱۴۰۵", time: "۱۸:۳۰", kickoffEpoch: NOW + 1 * day, status: "upcoming" },
  { id: "m-a6", group: "A", homeId: "setare", awayId: "alborz", dateISO: "2026-10-23", dateLabel: "۱ آبان ۱۴۰۵", time: "۱۸:۳۰", kickoffEpoch: NOW + 4 * day, status: "upcoming" },
  { id: "m-b5", group: "B", homeId: "qahraman", awayId: "darya", dateISO: "2026-10-20", dateLabel: "۲۸ مهر ۱۴۰۵", time: "۲۰:۰۰", kickoffEpoch: NOW + 1 * day, status: "upcoming" },
  { id: "m-b6", group: "B", homeId: "ettehad", awayId: "mehr", dateISO: "2026-10-24", dateLabel: "۲ آبان ۱۴۰۵", time: "۱۸:۳۰", kickoffEpoch: NOW + 5 * day, status: "upcoming" },
  { id: "m-c5", group: "C", homeId: "shirdar", awayId: "nikan", dateISO: "2026-10-21", dateLabel: "۲۹ مهر ۱۴۰۵", time: "۱۸:۳۰", kickoffEpoch: NOW + 2 * day, status: "upcoming" },
  { id: "m-c6", group: "C", homeId: "sorkh", awayId: "sabz", dateISO: "2026-10-25", dateLabel: "۳ آبان ۱۴۰۵", time: "۲۰:۰۰", kickoffEpoch: NOW + 6 * day, status: "upcoming" },
  { id: "m-d5", group: "D", homeId: "tavana", awayId: "deltaran", dateISO: "2026-10-21", dateLabel: "۲۹ مهر ۱۴۰۵", time: "۲۰:۰۰", kickoffEpoch: NOW + 2 * day, status: "upcoming" },
  { id: "m-d6", group: "D", homeId: "raha", awayId: "faraz", dateISO: "2026-10-26", dateLabel: "۴ آبان ۱۴۰۵", time: "۱۸:۳۰", kickoffEpoch: NOW + 7 * day, status: "upcoming" },
  { id: "m-e5", group: "E", homeId: "bolour", awayId: "atash", dateISO: "2026-10-22", dateLabel: "۳۰ مهر ۱۴۰۵", time: "۱۸:۳۰", kickoffEpoch: NOW + 3 * day, status: "upcoming" },
  { id: "m-e6", group: "E", homeId: "aseman", awayId: "zamin", dateISO: "2026-10-27", dateLabel: "۵ آبان ۱۴۰۵", time: "۲۰:۰۰", kickoffEpoch: NOW + 8 * day, status: "upcoming" },
  { id: "m-f5", group: "F", homeId: "kian", awayId: "kuh", dateISO: "2026-10-22", dateLabel: "۳۰ مهر ۱۴۰۵", time: "۲۰:۰۰", kickoffEpoch: NOW + 3 * day, status: "upcoming" },
  { id: "m-f6", group: "F", homeId: "pardis", awayId: "sahel", dateISO: "2026-10-28", dateLabel: "۶ آبان ۱۴۰۵", time: "۱۸:۳۰", kickoffEpoch: NOW + 9 * day, status: "upcoming" },
];


// زمان واقعی شروع هر مسابقه را از تاریخ و ساعت آن بساز
matches.forEach((match) => {
  match.kickoffEpoch = getKickoffEpoch(
    match.dateISO,
    match.time
  );
});

export const teamById = (id: string): Team => {
  const t = teams.find((x) => x.id === id);
  if (!t) throw new Error(`team not found: ${id}`);
  return t;
};

export const finishedMatches = matches.filter((m) => m.status === "finished");
export const upcomingMatches = matches.filter((m) => m.status === "upcoming");

export interface StandingRow {
  team: Team;
  played: number;
  won: number;
  drawn: number;
  lost: number;
  gf: number;
  ga: number;
  gd: number;
  points: number;
}

export function computeStandings(groupId: GroupId): StandingRow[] {
  const groupTeams = teams.filter((t) => t.group === groupId);
  const rows = new Map<string, StandingRow>();
  groupTeams.forEach((t) =>
    rows.set(t.id, { team: t, played: 0, won: 0, drawn: 0, lost: 0, gf: 0, ga: 0, gd: 0, points: 0 })
  );
  finishedMatches
    .filter((m) => m.group === groupId && m.homeScore !== undefined && m.awayScore !== undefined)
    .forEach((m) => {
      const home = rows.get(m.homeId)!;
      const away = rows.get(m.awayId)!;
      home.played++;
      away.played++;
      home.gf += m.homeScore!;
      home.ga += m.awayScore!;
      away.gf += m.awayScore!;
      away.ga += m.homeScore!;
      if (m.homeScore! > m.awayScore!) {
        home.won++;
        home.points += 3;
        away.lost++;
      } else if (m.homeScore! < m.awayScore!) {
        away.won++;
        away.points += 3;
        home.lost++;
      } else {
        home.drawn++;
        away.drawn++;
        home.points += 1;
        away.points += 1;
      }
    });
  rows.forEach((r) => (r.gd = r.gf - r.ga));
  return [...rows.values()].sort(
    (a, b) => b.points - a.points || b.gd - a.gd || b.gf - a.gf || a.team.name.localeCompare(b.team.name)
  );
}

export function getNextMatch(): Match | undefined {
  const now = Date.now();

  return matches
    .filter(
      (match) =>
        match.status === "upcoming" &&
        match.kickoffEpoch > now
    )
    .sort(
      (a, b) => a.kickoffEpoch - b.kickoffEpoch
    )[0];
}

// "Tomorrow" relative to NOW_EPOCH (calendar day difference == 1)
export function dayLabelFor(match: Match): string {
  const now = new Date();
  const matchDate = new Date(`${match.dateISO}T00:00:00`);
  const today = new Date(
    now.getFullYear(),
    now.getMonth(),
    now.getDate()
  );

  const tomorrow = new Date(today);
  tomorrow.setDate(tomorrow.getDate() + 1);

  const dateOnly = new Date(
    matchDate.getFullYear(),
    matchDate.getMonth(),
    matchDate.getDate()
  );

  if (dateOnly.getTime() === today.getTime()) {
    return "امروز";
  }

  if (dateOnly.getTime() === tomorrow.getTime()) {
    return "فردا";
  }

  return match.dateLabel;
}


function getKickoffEpoch(dateISO: string, time: string): number {
  const normalizedTime = time
    .replace(/[۰-۹]/g, (digit) =>
      String("۰۱۲۳۴۵۶۷۸۹".indexOf(digit))
    )
    .replace(/[٠-٩]/g, (digit) =>
      String("٠١٢٣٤٥٦٧٨٩".indexOf(digit))
    );

  return new Date(
    `${dateISO}T${normalizedTime}:00+03:30`
  ).getTime();
}