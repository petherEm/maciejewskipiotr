import type React from 'react'
import Link from 'next/link'
import clsx from 'clsx'

function ChevronRightIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" {...props}>
      <path
        d="M6.75 5.75 9.25 8l-2.5 2.25"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function Card<T extends React.ElementType = 'div'>({
  as,
  className,
  children,
}: Omit<React.ComponentPropsWithoutRef<T>, 'as' | 'className'> & {
  as?: T
  className?: string
}) {
  const Component = as ?? 'div'

  return (
    <Component
      className={clsx(
        className,
        'bg-card border-zinc-200/40 dark:border-zinc-800/40 hover:shadow-primary/10 group relative flex flex-col items-start overflow-hidden rounded-xl border transition-all duration-300 hover:-translate-y-1 hover:shadow-xl',
      )}
    >
      {children}
    </Component>
  )
}

Card.Link = function CardLink({
  children,
  ...props
}: React.ComponentPropsWithoutRef<typeof Link>) {
  return (
    <>
      <div className="from-primary/5 to-accent/5 absolute -inset-x-4 -inset-y-6 z-0 scale-95 bg-gradient-to-br opacity-0 transition-all duration-300 group-hover:scale-100 group-hover:opacity-100 sm:-inset-x-6 sm:rounded-2xl" />
      <Link {...props}>
        <span className="absolute -inset-x-4 -inset-y-6 z-20 sm:-inset-x-6 sm:rounded-2xl" />
        <span className="relative z-10">{children}</span>
      </Link>
    </>
  )
}

Card.Title = function CardTitle<T extends React.ElementType = 'h2'>({
  as,
  href,
  target,
  rel,
  children,
}: Omit<React.ComponentPropsWithoutRef<T>, 'as' | 'href' | 'target' | 'rel'> & {
  as?: T
  href?: string
  target?: string
  rel?: string
}) {
  const Component = as ?? 'h2'

  return (
    <Component className="text-foreground group-hover:text-primary text-lg font-bold tracking-tight transition-colors duration-300">
      {href ? <Card.Link href={href} target={target} rel={rel}>{children}</Card.Link> : children}
    </Component>
  )
}

Card.Description = function CardDescription({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <p className="text-muted-foreground relative z-10 mt-3 line-clamp-4 text-sm leading-relaxed">
      {children}
    </p>
  )
}

Card.Cta = function CardCta({ children }: { children: React.ReactNode }) {
  return (
    <div
      aria-hidden="true"
      className="text-primary group-hover:text-accent relative z-10 mt-4 flex items-center text-sm font-medium transition-colors duration-300"
    >
      {children}
      <ChevronRightIcon className="ml-1 h-4 w-4 stroke-current transition-transform duration-300 group-hover:translate-x-1" />
    </div>
  )
}

Card.Eyebrow = function CardEyebrow<T extends React.ElementType = 'p'>({
  as,
  decorate = false,
  className,
  children,
  ...props
}: Omit<React.ComponentPropsWithoutRef<T>, 'as' | 'decorate'> & {
  as?: T
  decorate?: boolean
}) {
  const Component = as ?? 'p'

  return (
    <Component
      className={clsx(
        className,
        'text-accent relative z-10 order-first mb-3 flex items-center text-xs font-medium uppercase tracking-wider',
        decorate && 'pl-3.5',
      )}
      {...props}
    >
      {decorate && (
        <span
          className="absolute inset-y-0 left-0 flex items-center"
          aria-hidden="true"
        >
          <span className="bg-accent h-4 w-0.5 rounded-full" />
        </span>
      )}
      {children}
    </Component>
  )
}
