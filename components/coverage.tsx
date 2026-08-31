import {
  HeartPulse,
  Dumbbell,
  Trophy,
  Baby,
  CalendarRange,
  Mail,
} from 'lucide-react'
import { SectionHeading } from '@/components/section-heading'

const benefits = [
  {
    icon: HeartPulse,
    title: 'Покрытие спортивных травм',
    text: 'Ушибы, переломы, растяжения и другие травмы, полученные во время занятий спортом.',
  },
  {
    icon: Dumbbell,
    title: 'Действует на тренировках',
    text: 'Полис работает во время регулярных занятий в секции, клубе или самостоятельно.',
  },
  {
    icon: Trophy,
    title: 'Действует на соревнованиях',
    text: 'Защита распространяется на участие в турнирах, стартах и спортивных сборах.',
  },
  {
    icon: Baby,
    title: 'Можно оформить ребёнку',
    text: 'Отдельные условия для детей в секциях, спортивных школах и лагерях.',
  },
  {
    icon: CalendarRange,
    title: 'Разные сроки',
    text: 'От одного дня на соревнование до годового полиса на все активности.',
  },
  {
    icon: Mail,
    title: 'Электронный полис',
    text: 'Документ приходит на почту сразу после оплаты — распечатывать не нужно.',
  },
]

export function Coverage() {
  return (
    <section id="coverage" className="scroll-mt-20 border-t border-border">
      <div className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28">
        <SectionHeading
          eyebrow="Что покрывает"
          title="Защита во время тренировок и соревнований"
          description="Простая страховка от несчастного случая в спорте. Без сложных условий и мелкого шрифта."
        />

        <div className="mt-12 grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map((benefit) => (
            <div key={benefit.title} className="bg-card p-7">
              <span className="flex size-11 items-center justify-center rounded-xl bg-muted text-foreground">
                <benefit.icon className="size-5" />
              </span>
              <h3 className="mt-5 text-lg font-semibold tracking-tight text-foreground">
                {benefit.title}
              </h3>
              <p className="mt-2 text-pretty leading-relaxed text-muted-foreground">
                {benefit.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
