import Image from 'next/image'
import { ArrowRight } from 'lucide-react'
import { SectionHeading } from '@/components/section-heading'

const cases = [
  { title: 'Секции и кружки', text: 'Регулярные занятия в спортивной секции.' },
  { title: 'Тренировки', text: 'Ежедневные тренировки в клубе или дома.' },
  { title: 'Соревнования', text: 'Участие в детских турнирах и стартах.' },
  { title: 'Лагеря и сборы', text: 'Спортивные лагеря и выездные сборы.' },
]

export function ChildrenInsurance() {
  return (
    <section className="border-t border-border">
      <div className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">
          <div className="relative order-last aspect-[4/3] overflow-hidden rounded-3xl border border-border lg:order-first">
            <Image
              src="/images/children-sport.png"
              alt="Дети на спортивной тренировке"
              fill
              sizes="(max-width: 1024px) 100vw, 600px"
              className="object-cover"
            />
          </div>

          <div>
            <SectionHeading
              eyebrow="Детям"
              title="Страхование ребёнка для спорта"
              description="Спокойствие родителей, пока ребёнок занимается любимым делом. Оформление за пару минут — данные ребёнка и готово."
            />

            <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {cases.map((c) => (
                <div key={c.title} className="rounded-2xl border border-border bg-card p-5">
                  <h3 className="font-semibold tracking-tight text-foreground">{c.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{c.text}</p>
                </div>
              ))}
            </div>

            <a
              href="#products"
              className="group mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-base font-medium text-primary-foreground transition-transform hover:-translate-y-0.5"
            >
              Оформить ребёнку
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
