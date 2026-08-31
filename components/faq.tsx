'use client'

import { useState } from 'react'
import { Plus } from 'lucide-react'
import { SectionHeading } from '@/components/section-heading'
import { cn } from '@/lib/utils'

const faqs = [
  {
    q: 'Нужна ли страховка для соревнований?',
    a: 'Да. Большинство организаторов допускают к участию только при наличии действующего полиса страхования от несчастного случая. Требования указаны на странице каждого соревнования.',
  },
  {
    q: 'Какие травмы покрываются?',
    a: 'Полис покрывает травмы, полученные во время занятий спортом: ушибы, переломы, вывихи, растяжения и другие повреждения. Точный перечень зависит от выбранной программы.',
  },
  {
    q: 'Действует ли полис на тренировках?',
    a: 'Да. Полис на тренировки и годовой полис действуют во время регулярных занятий. Полис «на соревнование» покрывает конкретный турнир на указанные даты.',
  },
  {
    q: 'Можно ли оформить страховку ребёнку?',
    a: 'Конечно. Для детей действуют отдельные условия. Полис оформляет законный представитель, указав данные ребёнка — это занимает пару минут.',
  },
  {
    q: 'Когда начинает действовать полис?',
    a: 'Полис вступает в силу с указанной вами даты начала, но не ранее дня оплаты. Вы сами выбираете период страхования при оформлении.',
  },
  {
    q: 'Как получить полис?',
    a: 'Электронный полис приходит на указанную почту сразу после оплаты. Его не нужно распечатывать — достаточно показать при необходимости.',
  },
  {
    q: 'Можно ли оформить страховку сразу на команду?',
    a: 'Да. Тренеры и организаторы могут добавить нескольких спортсменов или загрузить список, оплатить одной заявкой и получить полисы автоматически.',
  },
]

export function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section id="faq" className="scroll-mt-20 border-t border-border">
      <div className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <SectionHeading
            eyebrow="Вопросы"
            title="Частые вопросы"
            description="Коротко о главном. Если не нашли ответ — напишите нам, поможем разобраться."
          />

          <div className="flex flex-col divide-y divide-border border-y border-border">
            {faqs.map((faq, i) => {
              const isOpen = openIndex === i
              return (
                <div key={faq.q}>
                  <button
                    type="button"
                    onClick={() => setOpenIndex(isOpen ? null : i)}
                    className="flex w-full items-center justify-between gap-4 py-5 text-left"
                    aria-expanded={isOpen}
                  >
                    <span className="text-pretty text-base font-medium text-foreground md:text-lg">
                      {faq.q}
                    </span>
                    <Plus
                      className={cn(
                        'size-5 shrink-0 text-muted-foreground transition-transform duration-300',
                        isOpen && 'rotate-45',
                      )}
                    />
                  </button>
                  <div
                    className={cn(
                      'grid transition-all duration-300 ease-out',
                      isOpen ? 'grid-rows-[1fr] pb-5' : 'grid-rows-[0fr]',
                    )}
                  >
                    <div className="overflow-hidden">
                      <p className="max-w-xl text-pretty leading-relaxed text-muted-foreground">
                        {faq.a}
                      </p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
