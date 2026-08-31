import { SectionHeading } from '@/components/section-heading'

export function Partners() {
  return (
    <section className="border-t border-border bg-muted/40">
      <div className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-24">
        <SectionHeading
          align="center"
          eyebrow="Партнёры"
          title="Работаем с ведущими страховыми компаниями"
          description="Полисы оформляются в надёжных страховых компаниях с лицензией. Список партнёров пополняется."
        />

        <div className="mx-auto mt-12 grid max-w-4xl grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
          {Array.from({ length: 10 }).map((_, i) => (
            <div
              key={i}
              className="flex h-20 items-center justify-center rounded-xl border border-dashed border-border bg-card"
            >
              <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground/60">
                Логотип
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
