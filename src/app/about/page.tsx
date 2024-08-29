import { type Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import {
  GitHubIcon,
  InstagramIcon,
  LinkedInIcon,
  XIcon,
} from '@/components/SocialIcons'
import portraitImage from '@/images/mecasual.webp'

function SocialLink({
  className,
  href,
  children,
  icon: Icon,
}: {
  className?: string
  href: string
  icon: React.ComponentType<{ className?: string }>
  children: React.ReactNode
}) {
  return (
    <li className={clsx(className, 'flex')}>
      <Link
        href={href}
        className="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
      >
        <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  )
}

function MailIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
      />
    </svg>
  )
}

export const metadata: Metadata = {
  title: 'About',
  description:
    'I’m Spencer Sharp. I live in New York City, where I design the future.',
}

export default function About() {
  return (
    <Container className="mt-16 sm:mt-32">
      <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
        <div className="lg:pl-20">
          <div className="max-w-xs px-2.5 lg:max-w-none">
            <Image
              src={portraitImage}
              alt=""
              sizes="(min-width: 1024px) 32rem, 20rem"
              className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
            />
          </div>
        </div>
        <div className="lg:order-first lg:row-span-2">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
            Senior Leader in Financial Industry, Data Scientist & Developer.
          </h1>
          <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
            <p>
              I have been digitizing Europe&apos;s Payments and Remittance
              sector for the past ten years. As a Head of Sales and Integrations
              at Western Union (NYSE: WU), I sell and integrate the WU payments
              platform to Financial Institutions across EEA countries. My
              current role spans contract negotiations and business and
              compliance requirements set (AMLD, PSD2, GDPR) through solution
              design and cross-functional team management in a highly regulated
              financial industry. Previously I was responsible for WU&apos;s
              digital expansion and development of the WU App and
              westernunion.com. I was integrating new payment methods, improving
              the customer onboarding and verification process and driving the
              overall WU digital product strategy for Central Europe. <br />
              During my 15 years career, I held various Business, Operations and
              Compliance roles in ABN Amro Bank, Royal Bank of Scotland, State
              Street Bank and Western Union.
              {/* <br />I recently graduated from Warwick Business School MBA
                program with Merit. My thesis was on the topic of "AI adoption
                in the Payments Industry". */}
              <br />
              Since I was 8, I have been passionate about programming and
              computer science. It all began with Amstrad CPC 6128 and a very
              simple BASIC code. Later, I discovered the power of Javascript and
              Python, which I extensively mastered and applied at day to day
              work. I graduated from Warsaw School of Economics (Master in
              Banking & Finance). I am also Warwick Business School alumnus (MBA
              program) with &apos;Merit&apos;, my thesis explores AI adoption
              across Financial Institutions. My other passion is learning
              foreign languages, I am fluent in English, French and C1 in
              Spanish.
            </p>
          </div>
        </div>
        <div className="lg:pl-20">
          <ul role="list">
            <SocialLink
              href="https://www.linkedin.com/in/piotrek-maciejewski/"
              icon={LinkedInIcon}
              className="mt-4"
            >
              LinkedIn
            </SocialLink>
            <SocialLink
              href="https://github.com/petherEm"
              icon={GitHubIcon}
              className="mt-4"
            >
              GitHub
            </SocialLink>
            {/* <SocialLink href="#" icon={TwitterIcon} className="mt-4">
                Follow on Twitter
              </SocialLink>
              <SocialLink href="#" icon={InstagramIcon} className="mt-4">
                Follow on Instagram
              </SocialLink> */}

            <SocialLink
              href="mailto:vabankdev@icloud.com"
              icon={MailIcon}
              className="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40"
            >
              hello@vabank.dev
            </SocialLink>
          </ul>
        </div>
      </div>
    </Container>
  )
}
