import Image, { type ImageProps } from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'

import { Button } from '@/components/Button'
import { Card } from '@/components/Card'
import { Container } from '@/components/Container'
import {
  GitHubIcon,
  InstagramIcon,
  LinkedInIcon,
  XIcon,
} from '@/components/SocialIcons'

import logoWU from '@/images/logos/WU.png'
import logoSS from '@/images/logos/SS.webp'
import logoRBS from '@/images/logos/RBS.png'
import logoWBS from '@/images/logos/WBS.webp'
import logoSGH from '@/images/logos/SGH.webp'
import logoPython from '@/images/logos/python.png'
import logoJS from '@/images/logos/JS.png'
import logoTS from '@/images/logos/ts.png'
import logoReact from '@/images/logos/react.png'
import logoMapbox from '@/images/logos/mapbox.webp'
import logoTailwind from '@/images/logos/tailwind2.png'
import logoNode from '@/images/logos/node.png'
import logoPandas from '@/images/logos/pandas.png'
import logoNumpy from '@/images/logos/numpy.png'
import logoMongo from '@/images/logos/mongodb.png'
import logoFirebase from '@/images/logos/firebase.png'
import logoOpenAI from '@/images/logos/openai.png'
import logoSanity from '@/images/logos/sanity.png'

import image1 from '@/images/photos/image-1.jpg'
import image2 from '@/images/photos/image-2.jpg'
import image3 from '@/images/photos/image-3.jpg'
import image4 from '@/images/photos/image-4.jpg'
import image5 from '@/images/photos/image-5.jpg'
import { type ArticleWithSlug, getAllArticles } from '@/lib/articles'
import { formatDate } from '@/lib/formatDate'

function MailIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path
        d="M2.75 7.75a3 3 0 0 1 3-3h12.5a3 3 0 0 1 3 3v8.5a3 3 0 0 1-3 3H5.75a3 3 0 0 1-3-3v-8.5Z"
        className="fill-zinc-100 stroke-zinc-400 dark:fill-zinc-100/10 dark:stroke-zinc-500"
      />
      <path
        d="m4 6 6.024 5.479a2.915 2.915 0 0 0 3.952 0L20 6"
        className="stroke-zinc-400 dark:stroke-zinc-500"
      />
    </svg>
  )
}

function BriefcaseIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path
        d="M2.75 9.75a3 3 0 0 1 3-3h12.5a3 3 0 0 1 3 3v8.5a3 3 0 0 1-3 3H5.75a3 3 0 0 1-3-3v-8.5Z"
        className="fill-zinc-100 stroke-zinc-400 dark:fill-zinc-100/10 dark:stroke-zinc-500"
      />
      <path
        d="M3 14.25h6.249c.484 0 .952-.002 1.316.319l.777.682a.996.996 0 0 0 1.316 0l.777-.682c.364-.32.832-.319 1.316-.319H21M8.75 6.5V4.75a2 2 0 0 1 2-2h2.5a2 2 0 0 1 2 2V6.5"
        className="stroke-zinc-400 dark:stroke-zinc-500"
      />
    </svg>
  )
}

function AcademicIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="h-6 w-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5"
        className="fill-zinc-100 stroke-zinc-400 dark:fill-zinc-100/10 dark:stroke-zinc-500"
      />
    </svg>
  )
}

function GlobeIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className="h-6 w-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418"
        className="fill-zinc-100 stroke-zinc-400 dark:fill-zinc-100/10 dark:stroke-zinc-500"
      />
    </svg>
  )
}

function CodeIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className="h-6 w-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5"
        className="fill-zinc-100 stroke-zinc-400 dark:fill-zinc-100/10 dark:stroke-zinc-500"
      />
    </svg>
  )
}

function SocialLink({
  icon: Icon,
  ...props
}: React.ComponentPropsWithoutRef<typeof Link> & {
  icon: React.ComponentType<{ className?: string }>
}) {
  return (
    <Link className="group -m-1 p-1" {...props}>
      <Icon className="h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300" />
    </Link>
  )
}

function Education() {
  let education = [
    {
      company: 'Warwick Business School',
      title: 'Master of Business Administration',
      logo: logoWBS,
      start: '2019',
      end: '2021',
    },
    {
      company: 'Warsaw School of Economics',
      title: 'MSc in Banking and Finance',
      logo: logoSGH,
      start: '2003',
      end: '2008',
    },
  ]

  let languages = [
    {
      name: 'English',
      level: 'Fluent',
    },
    {
      name: 'French',
      level: 'Fluent',
    },
    {
      name: 'Spanish',
      level: 'Fluent',
    },
    {
      name: 'Polish',
      level: 'Native',
    },
  ]

  let skills = [
    {
      name: 'JavaScript',
      level: 'Advanced',
      icon: logoJS,
    },
    {
      name: 'TypeScript',
      level: 'Advanced',
      icon: logoTS,
    },
    {
      name: 'Python',
      level: 'Advanced',
      icon: logoPython,
    },

    {
      name: 'React/NextJS',
      level: 'Advanced',
      icon: logoReact,
    },
    {
      name: 'TailwindCSS',
      level: 'Advanced',
      icon: logoTailwind,
    },
    {
      name: 'Node.js',
      level: 'Intermediate',
      icon: logoNode,
    },
    {
      name: 'Pandas',
      level: 'Intermediate',
      icon: logoPandas,
    },
    {
      name: 'Numpy',
      level: 'Intermediate',
      icon: logoNumpy,
    },
    {
      name: 'Mapbox',
      level: 'Intermediate',
      icon: logoMapbox,
    },
    {
      name: 'Firebase',
      level: 'Intermediate',
      icon: logoFirebase,
    },
    {
      name: 'MongoDB',
      level: 'Intermediate',
      icon: logoMongo,
    },
    {
      name: 'OpenAI',
      level: 'Intermediate',
      icon: logoOpenAI,
    },
    {
      name: 'Sanity.io',
      level: 'Intermediate',
      icon: logoSanity,
    },
  ]

  return (
    <div className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40">
      {/* EDUCATION */}
      <div>
        <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
          <AcademicIcon className="h-6 w-6 flex-none" />
          <span className="ml-3">Education</span>
        </h2>
        <ol className="mt-6 space-y-4">
          {education.map((role, roleIndex) => (
            <li key={roleIndex} className="flex gap-4">
              <div className="relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
                <Image
                  src={role.logo}
                  alt=""
                  className="h-8 w-8 rounded-full"
                  unoptimized
                />
              </div>
              <dl className="flex flex-auto flex-wrap gap-x-2">
                <dt className="sr-only">University</dt>
                <dd className="w-full flex-none text-sm font-medium text-zinc-900 dark:text-zinc-100">
                  {role.company}
                </dd>
                <dt className="sr-only">Role</dt>
                <dd className="text-xs text-zinc-500 dark:text-zinc-400">
                  {role.title}
                </dd>
                <dt className="sr-only">Date</dt>
                <dd
                  className="ml-auto text-xs text-zinc-400 dark:text-zinc-500"
                  aria-label={`${role.start.label ?? role.start} until ${
                    role.end.label ?? role.end
                  }`}
                >
                  <time dateTime={role.start.dateTime ?? role.start}>
                    {role.start.label ?? role.start}
                  </time>{' '}
                  <span aria-hidden="true">—</span>{' '}
                  <time dateTime={role.end.dateTime ?? role.end}>
                    {role.end.label ?? role.end}
                  </time>
                </dd>
              </dl>
            </li>
          ))}
        </ol>
      </div>

      {/* TECH STACK */}
      <div className="mt-8">
        <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
          <CodeIcon className="h-6 w-6 flex-none" />
          <span className="ml-3">Tech Stack</span>
        </h2>
        <ol className="mt-6 grid grid-cols-2 gap-2">
          {skills.map((skill) => (
            <li key={skill.name} className="flex gap-4">
              <div className="relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
                <Image
                  src={skill.icon}
                  alt=""
                  className="h-8 w-8 rounded-full"
                  unoptimized
                />
              </div>
              <dl className="flex flex-auto flex-wrap gap-x-2">
                <dt className="sr-only">University</dt>
                <dd className="w-full flex-none text-sm font-medium text-zinc-900 dark:text-zinc-100">
                  {skill.name}
                </dd>
                <dt className="sr-only">Role</dt>
                <dd className="text-xs text-zinc-500 dark:text-zinc-400">
                  {skill.level}
                </dd>
              </dl>
            </li>
          ))}
        </ol>
      </div>

      {/* LANGUAGES */}
      <div className="mb-6 mt-6">
        <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
          <GlobeIcon className="h-6 w-6 flex-none" />
          <span className="ml-3">Languages</span>
        </h2>
        <ol className="mb-8 mt-8 flex items-center justify-around">
          {languages.map((lang) => (
            <li key={lang.name} className="flex gap-4">
              <dl className="flex flex-auto flex-wrap items-center justify-between gap-x-2">
                <dt className="sr-only">{lang.name}</dt>
                <dd className="w-full flex-none text-sm font-medium text-zinc-900 dark:text-zinc-100">
                  {lang.name}
                </dd>
                <dt className="sr-only">Role</dt>
                <dd className="text-xs text-zinc-500 dark:text-zinc-400">
                  {lang.level}
                </dd>
              </dl>
            </li>
          ))}
        </ol>
      </div>
    </div>
  )
}

interface Role {
  company: string
  title: string
  logo: ImageProps['src']
  start: string | { label: string; dateTime: string }
  end: string | { label: string; dateTime: string }
}

function Role({ role }: { role: Role }) {
  let startLabel =
    typeof role.start === 'string' ? role.start : role.start.label
  let startDate =
    typeof role.start === 'string' ? role.start : role.start.dateTime

  let endLabel = typeof role.end === 'string' ? role.end : role.end.label
  let endDate = typeof role.end === 'string' ? role.end : role.end.dateTime

  return (
    <li className="flex gap-4">
      <div className="relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
        <Image src={role.logo} alt="" className="h-7 w-7" unoptimized />
      </div>
      <dl className="flex flex-auto flex-wrap gap-x-2">
        <dt className="sr-only">Company</dt>
        <dd className="w-full flex-none text-sm font-medium text-zinc-900 dark:text-zinc-100">
          {role.company}
        </dd>
        <dt className="sr-only">Role</dt>
        <dd className="text-xs text-zinc-500 dark:text-zinc-400">
          {role.title}
        </dd>
        <dt className="sr-only">Date</dt>
        <dd
          className="ml-auto text-xs text-zinc-400 dark:text-zinc-500"
          aria-label={`${startLabel} until ${endLabel}`}
        >
          <time dateTime={startDate}>{startLabel}</time>{' '}
          <span aria-hidden="true">—</span>{' '}
          <time dateTime={endDate}>{endLabel}</time>
        </dd>
      </dl>
    </li>
  )
}

function Resume() {
  let resume = [
    {
      company: 'Western Union',
      title:
        'Head of Go-To-Market, Digital Bank Poland and Romania | Head of Baltics',
      logo: logoWU,
      start: '2023',
      end: 'present',
    },
    {
      company: 'Western Union',
      title: 'Head of Tech Sales & Integrations, Central Europe',
      logo: logoWU,
      start: '2021',
      end: '2023',
    },
    {
      company: 'Western Union',
      title: 'Senior Key Account & Digital Product Manager, Central Europe',
      logo: logoWU,
      start: '2018',
      end: '2021',
    },
    {
      company: 'Western Union',
      title: 'Business Development Manager, CEE',
      logo: logoWU,
      start: '2014',
      end: '2018',
    },
    {
      company: 'Western Union',
      title: 'Compliance Officer, CEE',
      logo: logoWU,
      start: '2012',
      end: '2014',
    },
    {
      company: 'State Street Bank',
      title: 'Corporate Compliance',
      logo: logoSS,
      start: '2011',
      end: '2012',
    },
    {
      company: 'Royal Bank of Scotland',
      title: 'Senior AML Analyst, BENELUX',
      logo: logoRBS,
      start: '2008',
      end: '2011',
    },
  ]

  return (
    <div className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40">
      <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
        <BriefcaseIcon className="h-6 w-6 flex-none" />
        <span className="ml-3">Work</span>
      </h2>
      <ol className="mt-6 space-y-4">
        {resume.map((role, roleIndex) => (
          <li key={roleIndex} className="flex gap-4">
            <div className="relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
              <Image
                src={role.logo}
                alt=""
                className="h-8 w-8 rounded-full"
                unoptimized
              />
            </div>
            <dl className="flex flex-auto flex-wrap gap-x-2">
              <dt className="sr-only">Company</dt>
              <dd className="w-full flex-none text-sm font-medium text-zinc-900 dark:text-zinc-100">
                {role.company}
              </dd>
              <dt className="sr-only">Role</dt>
              <dd className="text-xs text-zinc-500 dark:text-zinc-400">
                {role.title}
              </dd>
              <dt className="sr-only">Date</dt>
              <dd
                className="ml-auto text-xs text-zinc-400 dark:text-zinc-500"
                aria-label={`${role.start.label ?? role.start} until ${
                  role.end.label ?? role.end
                }`}
              >
                <time dateTime={role.start.dateTime ?? role.start}>
                  {role.start.label ?? role.start}
                </time>{' '}
                <span aria-hidden="true">—</span>{' '}
                <time dateTime={role.end.dateTime ?? role.end}>
                  {role.end.label ?? role.end}
                </time>
              </dd>
            </dl>
          </li>
        ))}
      </ol>
      {/* <Button href="#" variant="secondary" className="group mt-6 w-full">
        Download CV
        <ArrowDownIcon className="h-4 w-4 stroke-zinc-400 transition group-active:stroke-zinc-600 dark:group-hover:stroke-zinc-50 dark:group-active:stroke-zinc-50" />
      </Button> */}
    </div>
  )
}

function Photos() {
  let rotations = ['rotate-2', '-rotate-2', 'rotate-2', 'rotate-2', '-rotate-2']

  return (
    <div className="mt-16 sm:mt-20">
      <div className="-my-4 flex justify-center gap-5 overflow-hidden py-4 sm:gap-8">
        {[image1, image2, image3, image4, image5].map((image, imageIndex) => (
          <div
            key={image.src}
            className={clsx(
              'relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 sm:w-72 sm:rounded-2xl dark:bg-zinc-800',
              rotations[imageIndex % rotations.length],
            )}
          >
            <Image
              src={image}
              alt=""
              sizes="(min-width: 640px) 18rem, 11rem"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default async function Home() {
  let articles = (await getAllArticles()).slice(0, 4)

  return (
    <>
      <Container className="mt-9">
        <div className="max-w-3xl">
          <h1 className="text-3xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
            Hi, I am Piotr, <br />
            Senior Business Manager in Financial Industry, Data Scientist <br />
            and Full Stack Developer.
          </h1>
          <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
            Throughout my career, I have executed 20+ strategic contracts and
            managed critical projects across diverse sectors, including{' '}
            <span className="font-bold">
              Business, Digital Product, Operations, and Compliance, notably at
              Western Union (FT500), State Street Bank Luxembourg and the Royal
              Bank of Scotland.
            </span>{' '}
            Over 15 years, I have delivered multiple multimillion-dollar revenue
            streams. <br />
            As a results-driven and forward-thinking Senior Leader in Payments,
            Banking & Finance, I excel at the intersection of business strategy
            and advanced technologies. With expertise in{' '}
            <span className="font-bold">
              AI, Full Stack Development, and Python programming,
            </span>{' '}
            I leverage data science to enhance decision-making, optimize
            processes, and lead innovative web development projects.
            <br />
            An alumnus of{' '}
            <span className="font-bold">
              Warwick Business School with an MBA and “Merit” recognition,{' '}
            </span>{' '}
            my unique blend of business acumen and technical expertise positions
            me at the forefront of modern management practices in Payments,
            Banking & Finance.
          </p>

          <div className="mt-6 flex gap-6">
            <SocialLink
              href="https://www.linkedin.com/in/piotrek-maciejewski/"
              aria-label="Follow on LinkedIn"
              icon={LinkedInIcon}
            />
            <SocialLink
              href="https://github.com/petherEm"
              aria-label="Follow on GitHub"
              icon={GitHubIcon}
            />

            {/* <SocialLink
              href="https://twitter.com"
              aria-label="Follow on Twitter"
              icon={TwitterIcon}
            />
            <SocialLink
              href="https://instagram.com"
              aria-label="Follow on Instagram"
              icon={InstagramIcon}
            /> */}
          </div>
        </div>
      </Container>
      {/* <Photos /> */}
      <Container className="mt-24 md:mt-28">
        <div className="mx-auto grid max-w-xl grid-cols-1 gap-x-8 gap-y-20 lg:max-w-none lg:grid-cols-2">
          {/* <div className="flex flex-col gap-16">
            {articles.map((article) => (
              <Article key={article.slug} article={article} />
            ))}
          </div> */}
          <div className="space-y-10">
            <Resume />
          </div>
          <div className="space-y-10">
            <Education />
          </div>
        </div>
      </Container>
    </>
  )
}
