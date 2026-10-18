import { Routes, Route, Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Header from "./components/Header";
import HeroSlider from "./components/HeroSlider";
import EventsSection from "./components/EventsSection";
import LeagueSection from "./components/LeagueSection";
import AnnouncementsSection from "./components/AnnouncementsSection";
import AboutSection from "./components/AboutSection";
import Footer from "./components/Footer";

function Home() {
  return (
    <>
      <HeroSlider />
      <LeagueSection />
    </>
  );
}

function Placeholder({ title, hint }: { title: string; hint: string }) {
  return (
    <div className="flex min-h-[70vh] items-center justify-center bg-ink-surface px-6">
      <div className="max-w-md text-center">
        <span className="inline-flex items-center rounded-full bg-brand/10 px-3.5 py-1.5 text-xs font-semibold text-brand">
          صفحه در دست آماده‌سازی
        </span>
        <h1 className="mt-5 text-3xl font-bold text-ink">{title}</h1>
        <p className="mt-3 text-sm leading-7 text-ink-muted">{hint}</p>
        <Link
          to="/"
          className="mt-7 inline-flex items-center gap-2 rounded-xl bg-brand px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand/90"
        >
          بازگشت به صفحه اصلی
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/events"
            element={
              <Placeholder
                title="رویدادها"
                hint="صفحه کامل فهرست رویدادها به‌زودی در دسترس قرار خواهد گرفت. در همین حال، رویدادهای پیش‌رو را در صفحه اصلی دنبال کنید."
              />
            }
          />
          <Route
            path="/announcements"
            element={
              <Placeholder
                title="اطلاعیه‌ها"
                hint="آرشیو کامل اطلاعیه‌های مجموعه به‌زودی منتشر می‌شود. جدیدترین اطلاعیه‌ها اکنون در صفحه اصلی در دسترس است."
              />
            }
          />
          <Route
            path="/league"
            element={
              <Placeholder
                title="لیگ فوتبال مجموعه"
                hint="صفحه اختصاصی لیگ فوتبال شامل تیم‌ها، برنامه مسابقات، نتایج و جدول رده‌بندی به‌زودی راه‌اندازی می‌شود."
              />
            }
          />
          <Route
            path="/about"
            element={
              <Placeholder
                title="درباره مجموعه"
                hint="صفحه کامل معرفی مجموعه همراهان به‌زودی در دسترس قرار خواهد گرفت."
              />
            }
          />
          <Route
            path="*"
            element={
              <Placeholder
                title="صفحه یافت نشد"
                hint="آدرس مورد نظر پید نشد. به صفحه اصلی بازگردید یا از منوی بالا استفاده کنید."
              />
            }
          />
        </Routes>
      </main>
    </div>
  );
}
