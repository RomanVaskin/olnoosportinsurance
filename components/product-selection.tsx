import { ArrowRight, Trophy, Dumbbell, CalendarDays } from 'lucide-react'
import { SectionHeading } from '@/components/section-heading'

const products = [
  {
    icon: Trophy,
    title: 'На соревнование',
    description: 'Краткосрочный полис на участие в конкретном турнире или старте.',
    term: 'от 1 дня',
    price: 'от 190 ₽',
  },
  {
    icon: Dumbbell,
    title: 'На тренировки',
    description: 'Защита во время регулярных занятий в секции или клубе.',
    term: 'месяц / сезон',
    price: 'от 450 ₽',
  },
  {
    icon: CalendarDays,
    title: 'На год',
    description: 'Долгосрочный полис на все тренировки и соревнования круглый год.',
    term: '12 месяцев',
    price: 'от 2 900 ₽',
  },
]

export function ProductSelection() {
  return (
    <section id="products" className="scroll-mt-20 border-t border-border">
      <div className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28">
        <SectionHeading
          eyebrow="Продукты"
          title="Выберите формат страховки"
          description="Три понятных варианта. Выберите под свою ситуацию — оформление занимает несколько минут."
        />

        <div className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-3">
          {products.map((product) => (
            <a
              key={product.title}
              href="#how"
              className="group flex flex-col justify-between rounded-2xl border border-border bg-card p-7 transition-all hover:-translate-y-1 hover:shadow-[0_20px_50px_-24px_rgba(0,0,0,0.25)]"
            >
              <div>
                <span className="flex size-11 items-center justify-center rounded-xl bg-muted text-foreground transition-colors group-hover:bg-brand group-hover:text-brand-foreground">
                  <product.icon className="size-5" />
                </span>
                <h3 className="mt-6 text-2xl font-semibold tracking-tight text-foreground">
                  {product.title}
                </h3>
                <p className="mt-2 text-pretty leading-relaxed text-muted-foreground">
                  {product.description}
                </p>
              </div>

              <div className="mt-8 flex items-end justify-between border-t border-border pt-5">
                <div>
                  <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
                    {product.term}
                  </p>
                  <p className="mt-1 text-xl font-semibold text-foreground">
                    {product.price}
                  </p>
                </div>
                <span className="flex size-9 items-center justify-center rounded-full border border-border text-foreground transition-colors group-hover:border-transparent group-hover:bg-primary group-hover:text-primary-foreground">
                  <ArrowRight className="size-4" />
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
