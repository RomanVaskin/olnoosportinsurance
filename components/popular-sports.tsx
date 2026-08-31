import Image from 'next/image'
import { Plus } from 'lucide-react'
import { featuredSports, otherSports } from '@/lib/site-data'
import { SectionHeading } from '@/components/section-heading'
import { cn } from '@/lib/utils'

export function PopularSports() {
  return (
    <section id="sports" className="scroll-mt-20 border-t border-border bg-muted/40">
      <div className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28">
        <SectionHeading
          eyebrow="Виды спорта"
          title="Популярные виды спорта"
          description="Страхуем более 50 видов спорта — от массовых секций до профессиональных дисциплин."
        />

        <div className="mt-12 grid auto-rows-[200px] grid-cols-2 gap-3 md:grid-cols-4 md:auto-rows-[240px]">
          {featuredSports.map((sport) => (
            <a
              key={sport.name}
              href="#products"
              className={cn(
                'group relative overflow-hidden rounded-2xl border border-border',
                sport.span && 'col-span-2 row-span-2',
              )}
            >
              <Image
                src={sport.image}
                alt={sport.name}
                fill
                sizes="(max-width: 768px) 50vw, 25vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
              <span className="absolute bottom-4 left-4 right-4 text-lg font-semibold text-white md:text-xl">
                {sport.name}
              </span>
            </a>
          ))}
        </div>

        {/* Cleaner text list for the remaining sports */}
        <div className="mt-4 flex flex-wrap gap-2">
          {otherSports.map((sport) => (
            <a
              key={sport}
              href="#products"
              className="inline-flex items-center gap-1.5 rounded-full border border-border bg-card px-4 py-2 text-sm text-foreground transition-colors hover:border-foreground/30 hover:bg-muted"
            >
              {sport}
            </a>
          ))}
          <span className="inline-flex items-center gap-1.5 rounded-full bg-primary px-4 py-2 text-sm font-medium text-primary-foreground">
            <Plus className="size-3.5" />
            и другие
          </span>
        </div>
      </div>
    </section>
  )
}
