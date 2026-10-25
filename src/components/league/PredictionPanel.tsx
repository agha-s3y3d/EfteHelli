import { useEffect, useState } from "react";
import { X, Save, CheckCircle2, AlertCircle, ArrowRight } from "lucide-react";
import type { Match } from "../../data/league";
import { teamById } from "../../data/league";
import TeamBadge from "./TeamBadge";

const STORAGE_KEY = "hamrah-predictions";

type PredictionMap = Record<string, { home: number; away: number }>;

function readStore(): PredictionMap {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? (JSON.parse(raw) as PredictionMap) : {};
  } catch {
    return {};
  }
}

function writeStore(data: PredictionMap) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  } catch {
    /* ignore quota errors in prototype */
  }
}

function isInt(v: string): boolean {
  return /^\d+$/.test(v.trim());
}

export default function PredictionPanel({
  match,
  onClose,
}: {
  match: Match;
  onClose: () => void;
}) {
  const home = teamById(match.homeId);
  const away = teamById(match.awayId);
  const [homeInput, setHomeInput] = useState("");
  const [awayInput, setAwayInput] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [saved, setSaved] = useState(false);
  const [hasExisting, setHasExisting] = useState(false);

  useEffect(() => {
    const existing = readStore()[match.id];
    if (existing) {
      setHomeInput(String(existing.home));
      setAwayInput(String(existing.away));
      setHasExisting(true);
    } else {
      setHomeInput("");
      setAwayInput("");
      setHasExisting(false);
    }
    setSaved(false);
    setError(null);
  }, [match.id]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  const submit = () => {
    if (!homeInput.trim() && !awayInput.trim()) {
      setError("هر دو نتیجه را وارد کنید.");
      return;
    }
    if (!isInt(homeInput) || !isInt(awayInput)) {
      setError("فقط اعداد صحیح نامنفی وارد کنید.");
      return;
    }
    const h = Number(homeInput);
    const a = Number(awayInput);
    if (h < 0 || a < 0) {
      setError("نتیجه نمی‌تواند منفی باشد.");
      return;
    }
    const store = readStore();
    store[match.id] = { home: h, away: a };
    writeStore(store);
    setSaved(true);
    setHasExisting(true);
    setError(null);
  };

  return (
    <div
      className="fixed inset-0 z-[100] flex items-end justify-center bg-ink/60 backdrop-blur-sm sm:items-center"
      role="dialog"
      aria-modal="true"
      aria-labelledby="prediction-title"
      onClick={onClose}
    >
      <div
        className="w-full max-w-md rounded-t-3xl bg-white p-6 shadow-lift animate-slide-in sm:rounded-3xl sm:p-7"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-start justify-between">
          <div>
            <span className="inline-flex items-center rounded-full bg-brand/10 px-3 py-1 text-xs font-semibold text-brand">
              پیش‌بینی نتیجه
            </span>
            <h3 id="prediction-title" className="mt-3 text-lg font-bold text-ink">
              نتیجه مورد انتظار خود را وارد کنید
            </h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-ink-border text-ink-muted transition-colors hover:bg-ink-surface"
            aria-label="بستن پنجره پیش‌بینی"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="mt-5 flex items-center justify-between gap-3 rounded-2xl bg-ink-surface p-4">
          <div className="flex flex-1 flex-col items-center gap-1.5 text-center">
            <TeamBadge team={home} size="sm" />
            <span className="text-xs font-bold text-ink">{home.name}</span>
          </div>
          <span className="text-sm font-bold text-ink-muted" dir="ltr">VS</span>
          <div className="flex flex-1 flex-col items-center gap-1.5 text-center">
            <TeamBadge team={away} size="sm" />
            <span className="text-xs font-bold text-ink">{away.name}</span>
          </div>
        </div>

        <p className="mt-4 text-center text-xs text-ink-muted">
          {match.dateLabel} — ساعت {match.time} — گروه {match.group}
        </p>

        <div className="mt-5 flex items-center justify-center gap-4" dir="ltr">
          <label className="flex flex-col items-center gap-1.5">
            <span className="text-xs text-ink-muted">{home.name}</span>
            <input
              type="text"
              inputMode="numeric"
              value={homeInput}
              onChange={(e) => {
                setHomeInput(e.target.value);
                setSaved(false);
                setError(null);
              }}
              placeholder="۰"
              className="h-14 w-20 rounded-xl border border-ink-border bg-white text-center text-2xl font-bold text-ink tabular-nums focus:border-brand"
              aria-label={`نتیجه پیش‌بینی ${home.name}`}
            />
          </label>
          <span className="text-xl font-bold text-ink-muted">-</span>
          <label className="flex flex-col items-center gap-1.5">
            <span className="text-xs text-ink-muted">{away.name}</span>
            <input
              type="text"
              inputMode="numeric"
              value={awayInput}
              onChange={(e) => {
                setAwayInput(e.target.value);
                setSaved(false);
                setError(null);
              }}
              placeholder="۰"
              className="h-14 w-20 rounded-xl border border-ink-border bg-white text-center text-2xl font-bold text-ink tabular-nums focus:border-brand"
              aria-label={`نتیجه پیش‌بینی ${away.name}`}
            />
          </label>
        </div>

        {error && (
          <p className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-error/10 px-4 py-2.5 text-sm font-medium text-error">
            <AlertCircle className="h-4 w-4" />
            {error}
          </p>
        )}
        {saved && (
          <p className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-success/10 px-4 py-2.5 text-sm font-medium text-success">
            <CheckCircle2 className="h-4 w-4" />
            پیش‌بینی شما ذخیره شد. تا شروع بازی می‌توانید آن را ویرایش کنید.
          </p>
        )}

        <button
          type="button"
          onClick={submit}
          className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-brand px-6 py-3.5 text-sm font-bold text-white transition-colors hover:bg-brand/90"
        >
          <Save className="h-4 w-4" />
          {hasExisting ? "به‌روزرسانی پیش‌بینی" : "ثبت پیش‌بینی"}
        </button>
        <button
          type="button"
          onClick={onClose}
          className="mt-2 inline-flex w-full items-center justify-center gap-2 rounded-xl border border-ink-border px-6 py-3 text-sm font-semibold text-ink-muted transition-colors hover:bg-ink-surface"
        >
          بازگشت به لیگ
          <ArrowRight className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}
