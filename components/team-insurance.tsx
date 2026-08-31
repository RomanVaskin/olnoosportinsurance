import { Check, Users, Upload, CreditCard, FileCheck } from 'lucide-react'
import { SectionHeading } from '@/components/section-heading'

const features = [
  { icon: Users, text: 'Добавить нескольких спортсменов' },
  { icon: Upload, text: 'Загрузить список файлом' },
  { icon: CreditCard, text: 'Оплатить одной заявкой' },
  { icon: FileCheck, text: 'Получить полисы автоматически' },
]

const roster = [
  { name: 'Иванов А. М.', sport: 'Футбол' },
  { name: 'Петрова Е. С.', sport: 'Футбол' },
  { name: 'Соколов Д. И.', sport: 'Футбол' },
  { name: 'Кузнецова М. А.', sport: 'Футбол' },
]

export function TeamInsurance() {
  return (
    <section className="border-t border-border bg-muted/40">
      <div className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <SectionHeading
              eyebrow="Тренерам и командам"
              title="Застрахуйте всю команду сразу"
              description="Для тренеров, спортивных школ, клубов и команд. Оформите полисы на всех участников в одной заявке."
            />

            <ul className="mt-8 flex flex-col gap-3">
              {features.map((f) => (
                <li key={f.text} className="flex items-center gap-3">
                  <span className="flex size-9 shrink-0 items-center justify-center rounded-xl bg-card text-foreground ring-1 ring-border">
                    <f.icon className="size-4" />
                  </span>
                  <span className="text-base text-foreground">{f.text}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Product-style roster panel */}
          <div className="rounded-3xl border border-border bg-card p-4 shadow-[0_30px_70px_-40px_rgba(0,0,0,0.3)] sm:p-6">
            <div className="flex items-center justify-between px-1">
              <p className="text-sm font-medium text-foreground">Заявка · Команда «Динамо-2014»</p>
              <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
                4 спортсмена
              </span>
            </div>

            <div className="mt-4 flex flex-col gap-2">
              {roster.map((r) => (
                <div
                  key={r.name}
                  className="flex items-center justify-between rounded-xl border border-border bg-background px-4 py-3"
                >
                  <div className="flex items-center gap-3">
                    <span className="flex size-8 items-center justify-center rounded-full bg-muted text-xs font-medium text-muted-foreground">
                      {r.name.slice(0, 1)}
                    </span>
                    <div>
                      <p className="text-sm font-medium text-foreground">{r.name}</p>
                      <p className="text-xs text-muted-foreground">{r.sport}</p>
                    </div>
                  </div>
                  <span className="flex items-center gap-1.5 rounded-full bg-brand/15 px-2.5 py-1 text-xs font-medium text-brand-foreground">
                    <Check className="size-3.5" />
                    Готово
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-4 flex items-center justify-between rounded-xl bg-primary px-4 py-3.5 text-primary-foreground">
              <span className="text-sm">Итого к оплате</span>
              <span className="text-base font-semibold tabular-nums">3 600 ₽</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
