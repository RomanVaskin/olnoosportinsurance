import { SectionHeading } from '@/components/section-heading'

const steps = [
  { n: '01', title: 'Выберите вид спорта', text: 'Укажите дисциплину и уровень занятий.' },
  { n: '02', title: 'Укажите данные спортсмена', text: 'ФИО и дата рождения — свои или ребёнка.' },
  { n: '03', title: 'Выберите срок и сумму', text: 'День, месяц или год и страховую сумму.' },
  { n: '04', title: 'Оплатите', text: 'Онлайн, картой. Безопасно и быстро.' },
  { n: '05', title: 'Получите полис', text: 'Электронный документ придёт на почту.' },
]

export function HowItWorks() {
  return (
    <section id="how" className="scroll-mt-20 border-t border-border bg-muted/40">
      <div className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28">
        <SectionHeading
          eyebrow="Как это работает"
          title="Полис за пять простых шагов"
          description="От выбора спорта до готового полиса — весь процесс проходит онлайн за несколько минут."
        />

        <ol className="mt-12 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-5">
          {steps.map((step) => (
            <li
              key={step.n}
              className="relative flex flex-col rounded-2xl border border-border bg-card p-6"
            >
              <span className="font-mono text-sm font-medium text-brand-foreground">
                <span className="rounded-md bg-brand px-1.5 py-0.5">{step.n}</span>
              </span>
              <h3 className="mt-6 text-base font-semibold leading-snug tracking-tight text-foreground">
                {step.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {step.text}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
