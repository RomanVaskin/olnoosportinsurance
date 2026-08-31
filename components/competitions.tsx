import Link from 'next/link'
import { ArrowRight, MapPin, CalendarDays } from 'lucide-react'
import { competitions } from '@/lib/site-data'
import { SectionHeading } from '@/components/section-heading'

export function Competitions() {
  return (
    <section id="competitions" className="scroll-mt-20 border-t border-border">
      <div className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            eyebrow="Соревнования"
            title="Страхование для соревнований"
            description="Оформите полис специально для участия в конкретном турнире. Каждое соревнование имеет свою публичную страницу со ссылкой на оформление."
          />
          <a
            href="#products"
            className="group inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-transform hover:-translate-y-0.5"
          >
            Оформить на соревнование
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
          </a>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-3">
          {competitions.map((c) => (
            <Link
              key={c.slug}
              href={`/competition/${c.slug}`}
              className="group flex flex-col rounded-2xl border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:shadow-[0_20px_50px_-24px_rgba(0,0,0,0.25)]"
            >
              <div className="flex items-center justify-between">
                <span className="rounded-full bg-muted px-3 py-1 font-mono text-xs uppercase tracking-widest text-muted-foreground">
                  {c.sport}
                </span>
                <span className="font-mono text-sm tabular-nums text-brand-foreground">
                  <span className="rounded-md bg-brand px-1.5 py-0.5">{c.shortDate}</span>
                </span>
              </div>

              <h3 className="mt-5 text-pretty text-xl font-semibold leading-snug tracking-tight text-foreground">
                {c.name}
              </h3>

              <div className="mt-4 flex flex-col gap-2 text-sm text-muted-foreground">
                <span className="flex items-center gap-2">
                  <CalendarDays className="size-4 shrink-0" />
                  {c.date}
                </span>
                <span className="flex items-center gap-2">
                  <MapPin className="size-4 shrink-0" />
                  {c.location}
                </span>
              </div>

              <div className="mt-6 flex items-center justify-between border-t border-border pt-5">
                <span className="text-sm font-medium text-foreground">
                  Страховка {c.price}
                </span>
                <span className="flex size-9 items-center justify-center rounded-full border border-border text-foreground transition-colors group-hover:border-transparent group-hover:bg-primary group-hover:text-primary-foreground">
                  <ArrowRight className="size-4" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
