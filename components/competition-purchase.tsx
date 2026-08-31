'use client'

import { useState } from 'react'
import { ArrowRight, ShieldCheck, Check } from 'lucide-react'
import type { Competition } from '@/lib/site-data'
import { cn } from '@/lib/utils'

const sums = [
  { label: '100 000 ₽', price: 'от 190 ₽' },
  { label: '300 000 ₽', price: 'от 340 ₽' },
  { label: '500 000 ₽', price: 'от 520 ₽' },
]

export function CompetitionPurchase({ competition }: { competition: Competition }) {
  const [name, setName] = useState('')
  const [birth, setBirth] = useState('')
  const [sum, setSum] = useState(0)
  const [done, setDone] = useState(false)

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setDone(true)
  }

  if (done) {
    return (
      <div className="rounded-3xl border border-border bg-card p-7 text-center">
        <span className="mx-auto flex size-14 items-center justify-center rounded-full bg-brand text-brand-foreground">
          <Check className="size-7" />
        </span>
        <h3 className="mt-5 text-xl font-semibold tracking-tight text-foreground">
          Заявка оформлена
        </h3>
        <p className="mt-2 text-pretty leading-relaxed text-muted-foreground">
          Электронный полис для участия в «{competition.name}» будет отправлен на
          вашу почту после оплаты.
        </p>
        <button
          type="button"
          onClick={() => setDone(false)}
          className="mt-6 inline-flex items-center justify-center rounded-full border border-border px-6 py-3 text-sm font-medium text-foreground transition-colors hover:bg-muted"
        >
          Оформить ещё
        </button>
      </div>
    )
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-3xl border border-border bg-card p-6 shadow-[0_30px_70px_-45px_rgba(0,0,0,0.3)] md:p-7"
    >
      <div className="flex items-center gap-3">
        <span className="flex size-10 items-center justify-center rounded-full bg-brand text-brand-foreground">
          <ShieldCheck className="size-5" />
        </span>
        <div>
          <h3 className="text-lg font-semibold tracking-tight text-foreground">
            Оформить страховку
          </h3>
          <p className="text-sm text-muted-foreground">Полис на участие в соревновании</p>
        </div>
      </div>

      <div className="mt-6 flex flex-col gap-4">
        <label className="flex flex-col gap-1.5">
          <span className="text-sm font-medium text-foreground">ФИО спортсмена</span>
          <input
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Иванов Иван"
            className="rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-foreground/40"
          />
        </label>

        <label className="flex flex-col gap-1.5">
          <span className="text-sm font-medium text-foreground">Дата рождения</span>
          <input
            required
            value={birth}
            onChange={(e) => setBirth(e.target.value)}
            placeholder="дд.мм.гггг"
            className="rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-foreground/40"
          />
        </label>

        <div className="flex flex-col gap-1.5">
          <span className="text-sm font-medium text-foreground">Страховая сумма</span>
          <div className="grid grid-cols-3 gap-2">
            {sums.map((s, i) => (
              <button
                key={s.label}
                type="button"
                onClick={() => setSum(i)}
                className={cn(
                  'flex flex-col items-center rounded-xl border px-2 py-3 text-center transition-colors',
                  sum === i
                    ? 'border-foreground bg-foreground text-white'
                    : 'border-border bg-background text-foreground hover:bg-muted',
                )}
              >
                <span className="text-sm font-semibold">{s.label}</span>
                <span
                  className={cn(
                    'mt-0.5 text-xs',
                    sum === i ? 'text-white/70' : 'text-muted-foreground',
                  )}
                >
                  {s.price}
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-6 flex items-center justify-between border-t border-border pt-5">
        <span className="text-sm text-muted-foreground">Стоимость полиса</span>
        <span className="text-xl font-semibold tabular-nums text-foreground">
          {sums[sum].price}
        </span>
      </div>

      <button
        type="submit"
        className="group mt-4 inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-7 py-3.5 text-base font-medium text-primary-foreground transition-transform hover:-translate-y-0.5"
      >
        Оформить страховку
        <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
      </button>
      <p className="mt-3 text-center text-xs text-muted-foreground">
        Полис действует на даты соревнования · {competition.shortDate}
      </p>
    </form>
  )
}
