import Image from 'next/image'
import { ArrowRight, Check } from 'lucide-react'
import { SectionHeading } from '@/components/section-heading'

const features = [
  'Страхование участников соревнований',
  'Групповые заявки в один клик',
  'Загрузка списков спортсменов',
  'Контроль и статусы полисов',
  'Статистика и отчёты',
  'Личный кабинет организатора',
  'Публичные страницы соревнований',
]

export function Federations() {
  return (
    <section id="federations" className="scroll-mt-20 bg-foreground">
      <div className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <SectionHeading
              invert
              eyebrow="Федерациям и организаторам"
              title="Страхование участников — без ручной работы"
              description="Для спортивных федераций, клубов, школ, секций и организаторов соревнований. Автоматизируйте оформление полисов для больших групп."
            />

            <ul className="mt-8 grid grid-cols-1 gap-x-6 gap-y-3 sm:grid-cols-2">
              {features.map((feature) => (
                <li key={feature} className="flex items-center gap-3">
                  <span className="flex size-5 shrink-0 items-center justify-center rounded-full bg-brand text-brand-foreground">
                    <Check className="size-3.5" />
                  </span>
                  <span className="text-sm text-white/85">{feature}</span>
                </li>
              ))}
            </ul>

            <a
              href="#"
              className="group mt-9 inline-flex items-center gap-2 rounded-full bg-brand px-7 py-3.5 text-base font-medium text-brand-foreground transition-transform hover:-translate-y-0.5"
            >
              Стать партнёром
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
            </a>
          </div>

          <div className="relative aspect-[4/3] overflow-hidden rounded-3xl border border-white/10">
            <Image
              src="/images/federations-team.png"
              alt="Спортивная команда перед матчем"
              fill
              sizes="(max-width: 1024px) 100vw, 600px"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
