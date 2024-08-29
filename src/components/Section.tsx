import { useId } from 'react'

export function Section({
  title,
  children,
  years,
}: {
  title: string
  children: React.ReactNode
  years: string
}) {
  let id = useId()

  return (
    <section
      aria-labelledby={id}
      className="md:border-l md:border-zinc-100 md:pl-6 md:dark:border-zinc-700/40"
    >
      <div className="grid max-w-3xl grid-cols-1 items-baseline gap-y-8 md:grid-cols-4">
        <div className="flex flex-col">
          <h2
            id={id}
            className="text-sm font-semibold text-zinc-800 dark:text-zinc-100"
          >
            {title}
          </h2>
          <h3 className="text-sm text-zinc-700 dark:text-zinc-400">{years}</h3>
        </div>
        <div className="md:col-span-3">{children}</div>
      </div>
    </section>
  )
}
