import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Logo } from '@/components/logo'

const columns = [
  {
    title: 'Продукты',
    links: [
      { label: 'На соревнование', href: '#products' },
      { label: 'На тренировки', href: '#products' },
      { label: 'На год', href: '#products' },
      { label: 'Детям', href: '#products' },
    ],
  },
  {
    title: 'Клиентам',
    links: [
      { label: 'Виды спорта', href: '#sports' },
      { label: 'Что покрывает', href: '#coverage' },
      { label: 'Как это работает', href: '#how' },
      { label: 'Вопросы', href: '#faq' },
    ],
  },
  {
    title: 'Партнёрам',
    links: [
      { label: 'Федерациям', href: '#federations' },
      { label: 'Организаторам', href: '#competitions' },
      { label: 'Командам и школам', href: '#federations' },
      { label: 'Стать партнёром', href: '#federations' },
    ],
  },
]

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-foreground text-white">
      <div className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-20">
        {/* CTA band */}
        <div className="flex flex-col gap-6 border-b border-white/10 pb-14 md:flex-row md:items-end md:justify-between">
          <h2 className="max-w-xl text-balance text-3xl font-semibold leading-tight tracking-tight text-white md:text-4xl">
            Оформите полис за несколько минут
          </h2>
          <a
            href="#products"
            className="group inline-flex items-center justify-center gap-2 rounded-full bg-brand px-7 py-3.5 text-base font-medium text-brand-foreground transition-transform hover:-translate-y-0.5"
          >
            Оформить страховку
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
          </a>
        </div>

        <div className="grid grid-cols-2 gap-10 py-14 md:grid-cols-5">
          <div className="col-span-2">
            <Logo className="[&>span]:text-white [&>span:last-child]:text-white/60" />
            <p className="mt-4 max-w-xs text-pretty text-sm leading-relaxed text-white/60">
              Страхование спортсменов для тренировок, соревнований и спортивных
              сборов. Страхование проще.
            </p>
            <a
              href="tel:+78001234567"
              className="mt-6 inline-block text-lg font-medium tabular-nums text-white"
            >
              8 800 123-45-67
            </a>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <p className="font-mono text-xs uppercase tracking-widest text-white/40">
                {col.title}
              </p>
              <ul className="mt-4 flex flex-col gap-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-white/70 transition-colors hover:text-white"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex flex-col gap-4 border-t border-white/10 pt-8 text-sm text-white/50 md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} OLNOO Insurance. Все права защищены.</p>
          <div className="flex gap-6">
            <Link href="#" className="transition-colors hover:text-white">
              Политика конфиденциальности
            </Link>
            <Link href="#" className="transition-colors hover:text-white">
              Договор оферты
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
