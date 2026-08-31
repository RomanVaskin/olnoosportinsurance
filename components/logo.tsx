import { cn } from '@/lib/utils'

export function Logo({ className }: { className?: string }) {
  return (
    <span className={cn('inline-flex items-center gap-2', className)}>
      <span className="text-lg font-semibold tracking-tight text-foreground">
        OLNOO
      </span>
      <span className="size-1.5 rounded-full bg-brand" aria-hidden="true" />
      <span className="text-lg font-light tracking-tight text-muted-foreground">
        Insurance
      </span>
    </span>
  )
}
