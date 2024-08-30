import { type Metadata } from 'next'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import { Providers } from '@/app/providers'
import { Layout } from '@/components/Layout'

import '@/styles/tailwind.css'

export const metadata: Metadata = {
  title: {
    template: 'Piotr Maciejewski | Web & Business Developer',
    default:
      'Piotr Maciejewski | Web & Business Developer, JavaScript, Python, Next.js, React, Node.js, TypeScript, Tailwind CSS',
  },
  description:
    'Piotr Maciejewski | Web & Business Developer, JavaScript, Python, Next.js, React, Node.js, TypeScript, Tailwind CSS',
  alternates: {
    types: {
      'application/rss+xml': `${process.env.NEXT_PUBLIC_SITE_URL}/feed.xml`,
    },
  },
  icons: {
    icon: '/images/logo3.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="h-full antialiased" suppressHydrationWarning>
      <body className="flex h-full bg-zinc-50 dark:bg-black">
        <Providers>
          <div className="flex w-full">
            <Layout>{children}</Layout>
          </div>
        </Providers>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
