import type React from 'react'
import { Container } from '@/components/Container'

export function SimpleLayout({
  title,
  intro,
  children,
}: {
  title: string
  intro: string
  children?: React.ReactNode
}) {
  return (
    <Container className="mt-16 sm:mt-32">
      <header className="from-primary/10 via-accent/5 to-primary/5 relative overflow-hidden rounded-2xl bg-gradient-to-br py-8 px-0 sm:py-12">
        <div className="relative z-10 max-w-4xl">
          <h1 className="text-foreground text-balance text-5xl font-bold tracking-tight sm:text-6xl">
            {title}
          </h1>
          <p className="text-muted-foreground mt-6 max-w-3xl text-pretty text-lg leading-relaxed">
            {intro}
          </p>
        </div>
        <div className="absolute right-0 top-0 -translate-y-12 translate-x-12 opacity-20">
          <div className="from-primary to-accent h-64 w-64 rounded-full bg-gradient-to-br blur-3xl" />
        </div>
        <div className="absolute bottom-0 left-0 -translate-x-12 translate-y-12 opacity-10">
          <div className="from-accent to-primary h-48 w-48 rounded-full bg-gradient-to-br blur-2xl" />
        </div>
      </header>
      {children && <div className="mt-16 sm:mt-20">{children}</div>}
    </Container>
  )
}
