import { useCallback, useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Calendar, MapPin, ArrowLeft } from "lucide-react";
import { heroSlides } from "../data/mock";

const AUTOPLAY_MS = 6000;

export default function HeroSlider() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const timerRef = useRef<number | null>(null);
  const count = heroSlides.length;

  const goTo = useCallback((i: number) => setIndex(((i % count) + count) % count), [count]);
  const next = useCallback(() => goTo(index + 1), [index, goTo]);
  const prev = useCallback(() => goTo(index - 1), [index, goTo]);

  useEffect(() => {
    if (paused) return;
    timerRef.current = window.setTimeout(() => {
      setIndex((i) => (i + 1) % count);
    }, AUTOPLAY_MS);
    return () => {
      if (timerRef.current) window.clearTimeout(timerRef.current);
    };
  }, [index, paused, count]);

  const slide = heroSlides[index];

  return (
    <section
      id="home"
      className="relative w-full overflow-hidden bg-ink"
      aria-roledescription="carousel"
      aria-label="رویدادهای ویژه"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
    >
      {/* Slides */}
      <div className="relative h-[560px] w-full sm:h-[620px] lg:h-[680px]">
        {heroSlides.map((s, i) => (
          <div
            key={s.id}
            className="absolute inset-0 transition-opacity duration-700 ease-out"
            style={{ opacity: i === index ? 1 : 0 }}
            aria-hidden={i !== index}
          >
            <img
              src={s.image}
              alt={s.alt}
              className="h-full w-full object-cover"
              loading={i === 0 ? "eager" : "lazy"}
            />
            <div className="absolute inset-0 bg-gradient-to-l from-ink/85 via-ink/55 to-ink/25" />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-transparent to-ink/20" />
          </div>
        ))}

        {/* Content */}
        <div className="absolute inset-0 flex items-center">
          <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-10">
            <div
              key={slide.id}
              className="max-w-2xl animate-slide-in"
            >
              <span className="inline-flex items-center rounded-full bg-brand/90 px-3.5 py-1.5 text-xs font-semibold text-white backdrop-blur-sm sm:text-sm">
                {slide.category}
              </span>
              <h2 className="mt-4 text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
                {slide.title}
              </h2>
              <p className="mt-4 max-w-xl text-sm leading-7 text-white/80 sm:text-base lg:text-lg">
                {slide.description}
              </p>
              <div className="mt-5 flex flex-col gap-2 text-sm text-white/85 sm:flex-row sm:gap-6">
                <span className="inline-flex items-center gap-2">
                  <Calendar className="h-4 w-4 text-brand-light" />
                  {slide.date}
                </span>
                <span className="inline-flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-brand-light" />
                  {slide.location}
                </span>
              </div>
              <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
                <button
                  type="button"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-brand px-6 py-3 text-sm font-semibold text-white shadow-lg transition-all hover:bg-brand/90 hover:shadow-xl sm:text-base"
                >
                  مشاهده جزئیات
                  <ArrowLeft className="h-4 w-4" />
                </button>
                <a
                  href="#events"
                  onClick={(e) => {
                    e.preventDefault();
                    document.querySelector("#events")?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/30 bg-white/10 px-6 py-3 text-sm font-semibold text-white backdrop-blur-sm transition-all hover:bg-white/20 sm:text-base"
                >
                  مشاهده همه رویدادها
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Arrows — RTL: ChevronLeft points to next (forward) */}
        <button
          type="button"
          onClick={next}
          className="absolute left-4 top-1/2 z-10 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/25 bg-ink/40 text-white backdrop-blur-md transition-all hover:bg-ink/70 sm:flex"
          aria-label="اسلاید بعدی"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>
        <button
          type="button"
          onClick={prev}
          className="absolute right-4 top-1/2 z-10 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/25 bg-ink/40 text-white backdrop-blur-md transition-all hover:bg-ink/70 sm:flex"
          aria-label="اسلاید قبلی"
        >
          <ChevronRight className="h-6 w-6" />
        </button>

        {/* Dots */}
        <div className="absolute bottom-6 left-1/2 z-10 flex -translate-x-1/2 items-center gap-2">
          {heroSlides.map((s, i) => (
            <button
              key={s.id}
              type="button"
              onClick={() => goTo(i)}
              aria-label={`رفتن به اسلاید ${i + 1}`}
              aria-current={i === index}
              className={`h-2 rounded-full transition-all duration-300 ${
                i === index ? "w-8 bg-white" : "w-2 bg-white/45 hover:bg-white/70"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
