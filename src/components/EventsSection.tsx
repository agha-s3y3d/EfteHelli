import { Link } from "react-router-dom";
import { Calendar, Clock, MapPin, ArrowLeft, Tag } from "lucide-react";
import { events } from "../data/mock";

export default function EventsSection() {
  return (
    <section id="events" className="bg-ink-surface py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="text-2xl font-bold text-ink sm:text-3xl lg:text-4xl">
              رویدادهای پیش‌رو
            </h2>
            <p className="mt-2 max-w-xl text-sm text-ink-muted sm:text-base">
              برنامه‌های آینده مجموعه را دنبال کنید و در فعالیت‌های مورد علاقه‌تان شرکت کنید.
            </p>
          </div>
          <Link
            to="/events"
            className="inline-flex items-center gap-1.5 self-start rounded-xl border border-ink-border bg-white px-4 py-2.5 text-sm font-semibold text-ink transition-colors hover:border-brand hover:text-brand sm:self-auto"
          >
            مشاهده همه رویدادها
            <ArrowLeft className="h-4 w-4" />
          </Link>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {events.map((event) => (
            <article
              key={event.id}
              className="group flex flex-col overflow-hidden rounded-2xl border border-ink-border bg-white shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-lift"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <img
                  src={event.image}
                  alt={event.alt}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <span className="absolute top-3 right-3 inline-flex items-center gap-1 rounded-full bg-white/95 px-3 py-1 text-xs font-semibold text-brand shadow-sm backdrop-blur-sm">
                  <Tag className="h-3 w-3" />
                  {event.category}
                </span>
              </div>

              <div className="flex flex-1 flex-col p-5">
                <h3 className="text-lg font-bold text-ink">{event.title}</h3>
                <p className="mt-2 line-clamp-2 text-sm leading-6 text-ink-muted">
                  {event.description}
                </p>

                <div className="mt-4 flex flex-col gap-2 text-xs text-ink-muted">
                  <div className="flex flex-wrap gap-x-4 gap-y-1">
                    <span className="inline-flex items-center gap-1.5">
                      <Calendar className="h-3.5 w-3.5 text-brand" />
                      {event.date}
                    </span>
                    <span className="inline-flex items-center gap-1.5">
                      <Clock className="h-3.5 w-3.5 text-brand" />
                      ساعت {event.time}
                    </span>
                  </div>
                  <span className="inline-flex items-center gap-1.5">
                    <MapPin className="h-3.5 w-3.5 text-brand" />
                    {event.location}
                  </span>
                </div>

                <button
                  type="button"
                  className="mt-5 inline-flex items-center gap-1.5 self-start text-sm font-semibold text-brand transition-colors hover:text-forest"
                >
                  جزئیات بیشتر
                  <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
