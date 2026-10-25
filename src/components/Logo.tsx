import { Shield } from "lucide-react";

export default function Logo({
  variant = "light",
}: {
  variant?: "light" | "dark";
}) {
  const textColor = "text-ink";
  const subColor = variant === "light" ? "text-white/70" : "text-ink-muted";
  return (
    <div className="flex items-center gap-2.5">
      <span
        className={`flex h-10 w-10 items-center justify-center rounded-xl bg-brand text-white shadow-sm`}
        aria-hidden="true"
      >
        <Shield className="h-5 w-5" strokeWidth={2.2} />
      </span>
      <span className="flex flex-col leading-tight">
        <span className={`text-base text-black font-bold ${textColor}`}>مدرسه علامه حلی 4 </span>
      </span>
    </div>
  );
}
