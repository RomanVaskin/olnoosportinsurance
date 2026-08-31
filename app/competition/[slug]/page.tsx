import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import { ArrowLeft, CalendarDays, MapPin, Activity, Check } from 'lucide-react'
import { competitions } from '@/lib/site-data'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { CompetitionPurchase } from '@/components/competition-purchase'

export function generateStaticParams() {
  return competitions.map((c) => ({ slug: c.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const competition = competitions.find((c) => c.slug === slug)
  if (!competition) return { title: 'Соревнование не найдено — OLNOO Insurance' }
  return {
    title: `${competition.name} — страхование участников · OLNOO Insurance`,
    description: competition.description,
  }
}

export default async function CompetitionPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const competition = competitions.find((c) => c.slug === slug)
  if (!competition) notFound()

  const meta = [
    { icon: CalendarDays, label: 'Дата', value: competition.date },
    { icon: MapPin, label: 'Место', value: competition.location },
    { icon: Activity, label: 'Вид спорта', value: competition.sport },
  ]

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      <main>
        {/* Hero */}
        <section className="relative">
          <div className="relative h-[42vh] min-h-[320px] w-full overflow-hidden md:h-[52vh]">
            <Image
              src="/images/competition-hero.png"
              alt={competition.name}
              fill
              priority
              sizes="100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/20" />
            <div className="absolute inset-x-0 bottom-0">
              <div className="mx-auto max-w-7xl px-5 pb-8 md:px-8 md:pb-12">
                <Link
                  href="/#competitions"
                  className="inline-flex items-center gap-2 text-sm text-white/80 transition-colors hover:text-white"
                >
                  <ArrowLeft className="size-4" />
                  Все соревнования
                </Link>
                <div className="mt-4 flex flex-wrap items-center gap-2">
                  <span className="rounded-full bg-brand px-3 py-1 font-mono text-xs uppercase tracking-widest text-brand-foreground">
                    {competition.sport}
                  </span>
                  <span className="rounded-full border border-white/25 bg-black/30 px-3 py-1 font-mono text-xs uppercase tracking-widest text-white backdrop-blur-md">
                    {competition.format}
                  </span>
                </div>
                <h1 className="mt-4 max-w-3xl text-balance text-3xl font-semibold leading-tight tracking-tight text-white md:text-5xl">
                  {competition.name}
                </h1>
              </div>
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="mx-auto max-w-7xl px-5 py-14 md:px-8 md:py-20">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1.4fr_1fr] lg:gap-14">
            <div>
              {/* Meta row */}
              <dl className="grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-3">
                {meta.map((m) => (
                  <div key={m.label} className="bg-card px-5 py-5">
                    <dt className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-muted-foreground">
                      <m.icon className="size-4" />
                      {m.label}
                    </dt>
                    <dd className="mt-2 text-pretty font-medium text-foreground">{m.value}</dd>
                  </div>
                ))}
              </dl>

              <div className="mt-10">
                <h2 className="text-2xl font-semibold tracking-tight text-foreground">
                  О соревновании
                </h2>
                <p className="mt-4 text-pretty text-lg leading-relaxed text-muted-foreground">
                  {competition.description}
                </p>
              </div>

              <div className="mt-10">
                <h2 className="text-2xl font-semibold tracking-tight text-foreground">
                  Информация об участии
                </h2>
                <p className="mt-4 text-pretty text-lg leading-relaxed text-muted-foreground">
                  Для допуска к соревнованию каждому участнику необходим действующий
                  полис страхования от несчастного случая. Оформить его можно прямо на
                  этой странице — полис придёт на почту сразу после оплаты.
                </p>
              </div>

              <div className="mt-10">
                <h2 className="text-2xl font-semibold tracking-tight text-foreground">
                  Требования к страховке
                </h2>
                <ul className="mt-5 flex flex-col gap-3">
                  {competition.requirements.map((req) => (
                    <li
                      key={req}
                      className="flex items-center gap-3 rounded-2xl border border-border bg-card px-5 py-4"
                    >
                      <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-brand text-brand-foreground">
                        <Check className="size-4" />
                      </span>
                      <span className="text-foreground">{req}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Sticky purchase flow */}
            <div className="lg:sticky lg:top-24 lg:self-start">
              <CompetitionPurchase competition={competition} />
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  )
}
