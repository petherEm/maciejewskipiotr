'use client'
import Image from 'next/image'
import Head from 'next/head'

import { useState } from 'react'

import { Card } from '@/components/Card'
import { SimpleLayout } from '@/components/SimpleLayout'

import logoAvangarda from '@/images/logos/34_avangarda.png'
import logoTwister from '@/images/logos/35_twister.png'
import AICompanion from '@/images/logos/36_AICompanion.png'
import Academic from '@/images/logos/37_Academic.png'
import LMSPlatform from '@/images/logos/38_LMS_platform.png'
import MockAI from '@/images/logos/39_MockAI.png'
import Gym from '@/images/logos/40_gym.png'

import logoSaaSAS from '@/images/logos/14_SaaSAS.png'

import logoGibbarosa2 from '@/images/logos/33_gibbarosa.png'
import logoPSDTracker from '@/images/logos/27_PSDTracker.png'
import logoZoomClone from '@/images/logos/29_ZoomClone.png'
import logoWUAI from '@/images/logos/28_WUAIpay.png'
import logoTresLenguajes from '@/images/logos/30_TresLenguajes.png'
import logoDisneyClone from '@/images/logos/31_DisneyChannel.png'
import logoVabank from '@/images/logos/41_vabank.png'

const projectCategories = [
  'All',
  'E-commerce',
  'SaaS',
  'Services',
  'Landing Page',
]

const projects = [
  {
    name: 'Hotel Avangarda - Modern Hotel Website',
    description:
      'Hotel Avangarda website is a modern, responsive hotel website built with the latest tech stack (Next.js 15, Sanity.io, Framer Motion)',
    link: {
      href: 'https://avangarda-12.vercel.app/pl',
      label: 'avangarda-12.vercel.app/pl',
    },
    logo: logoAvangarda,
    tags: '#Next.js 15, #Sanity.io, #ProfitRoom',
    category: 'services',
    featured: true,
  },
  {
    name: 'Twister - Money Transfer Agent',
    description:
      'Twister Money Transfer is a modern, multilingual platform for international money transfers. The service provides fast, secure, and affordable money transfer solutions to over 200 countries worldwide.',
    link: {
      href: 'https://twister-mt-v1.vercel.app/en',
      label: 'twister-mt-v1.vercel.app/en',
    },
    logo: logoTwister,
    tags: '#Next.js 15, #FramerMotion, #Supabase',
    category: 'services',
    featured: true,
  },
  {
    name: 'Gibbarosa e-commerce (Sanit.io version)',
    description:
      'e-commerce project built on Next.js 14 and Sanity.io with Stripe, BLIK and P24 integration.',
    link: {
      href: 'https://v6.gibbarosa.io/en',
      label: 'v6.gibbarosa.io/en',
    },
    logo: logoGibbarosa2,
    tags: '#Next.js 14, #Sanity.io, #OpenAI',
    category: 'E-commerce',
    featured: true,
  },
  {
    name: 'AI-Companion - Personalized Voice Assistant',
    description:
      'AI Companion is a cutting-edge educational platform that leverages artificial intelligence to create personalized, interactive learning experiences. ',
    link: {
      href: 'https://ai-companion-blush-omega.vercel.app/',
      label: 'ai-companion-blush-omega.vercel.app',
    },
    logo: AICompanion,
    tags: '#Next.js 15, #Clerk, #Supabase, #Vapi',
    category: 'SaaS',
    featured: true,
  },
  {
    name: 'SaaS - PSD Tracker',
    description:
      'Commercial SaaS providing real-time data on registered Money Transfer PSD agents across Europe. Built with Next.js, Prisma, TailwindCSS and Clerk.',
    link: {
      href: 'https://psd5.vercel.app/sign-in',
      label: 'psd5.vercel.app',
    },
    logo: logoPSDTracker,
    tags: '#Next.js 14, #Appwrite, #Mapbox',
    category: 'SaaS',
    featured: true,
  },
  {
    name: 'LMS platform - Sanity powered',
    description:
      'A cutting-edge learning platform built with the latest web technologies and AI assistance. ',
    link: {
      href: 'https://learning-platform-liard-zeta.vercel.app/',
      label: 'learning-platform-liard-zeta.vercel.app',
    },
    logo: LMSPlatform,
    tags: '#Next.js 15, #Sanity.io, #OpenAI, #Stripe',
    category: 'SaaS',
    featured: false,
  },
  {
    name: 'Mock AI Learning Management System',
    description:
      'AI-Mock-Pay is a Next.js 15 project that enables intelligent voice-driven conversations using the Next.js AI SDK with Google model integration.',
    link: {
      href: 'https://voice-ai-vapi.vercel.app/',
      label: 'voice-ai-vapi.vercel.app',
    },
    logo: MockAI,
    tags: '#Next.js 15, #Firebase, #OpenAI, #Vapi',
    category: 'SaaS',
    featured: false,
  },
  {
    name: 'Zoom Clone (Yoom)',
    description:
      'Zoom clone built with Next.js 14, getStream.io, Clerk and TailwindCSS. Inspired by JavaScript Mastery.',
    link: {
      href: 'https://psd5.vercel.app/sign-in',
      label: 'psd5.vercel.app',
    },
    logo: logoZoomClone,
    tags: '#Next.js 14, #Clerk, #TailwindCSS',
    category: 'SaaS',
    featured: false,
  },
  {
    name: 'Western Union + Payment Methods',
    description:
      'Commercial project to improve embed WU Digital Bank within money transfer service. Built on Next.js 14, MongoDB and TailwindCSS.',
    link: {
      href: 'https://wuaipay.vercel.app/',
      label: 'wuaipay.vercel.app',
    },
    logo: logoWUAI,
    tags: '#Next.js 14, #MongoDB, #P24',
    category: 'services',
    featured: true,
  },
  {
    name: 'DuoLingo Clone (Tres Lenguajes)',
    description:
      'TresLenguajes is a DuoLingo clone built with Next.js, Clerk, Drizzle ORM, Stripe and TailwindCSS. Perfect platform to learn languages.',
    link: {
      href: 'https://treslenguajes.vercel.app/',
      label: 'treslenguajes.vercel.app/',
    },
    logo: logoTresLenguajes,
    tags: '#Next.js 14, #Drizzle, #Clerk, #Stripe',
    category: 'services',
    featured: false,
  },
  {
    name: 'Academic Researcher, Landing Page',
    description:
      'Academic researcher and professor landing page built on Next.js 14, TailwindCSS and with Framer Motion animations.',
    link: {
      href: 'https://www.alinamaciejewska.pl',
      label: 'www.alinamaciejewska.pl',
    },
    logo: Academic,
    tags: '#Next.js 14, #TailwindCSS',
    category: 'Landing Page',
    featured: false,
  },
  {
    name: 'Gym & Personal Trainer Website',
    description:
      'A landing page for a gym and personal trainer. Built with Next.js 14, TailwindCSS and Framer Motion animations.',
    link: {
      href: 'https://gym40.vercel.app/',
      label: 'gym40.vercel.app',
    },
    logo: Gym,
    tags: '#Next.js 15, #TailwindCSS, #FramerMotion',
    category: 'Landing Page',
    featured: false,
  },

  {
    name: 'Disney Channel Clone',
    description:
      'Movie recommendation and summarizer engine built with Next.js 14, OpenAI and TailwindCSS.',
    link: {
      href: 'https://disneyclone-lyart.vercel.app/',
      label: 'disneyclone-lyart.vercel.app/',
    },
    logo: logoDisneyClone,
    tags: '#Next.js 14, #OpenAI, #TailwindCSS',
    category: 'services',
    featured: false,
  },

  {
    name: 'SaaS - AI powered code, music and video generator',
    description:
      'SaaS project built with Next.js, OpenAI, Clerk, PrismaDB and TailwindCSS.',
    link: {
      href: 'https://saasas.vercel.app/',
      label: 'saasas.vercel.app',
    },
    logo: logoSaaSAS,
    tags: '#Next.js 14, #Prisma, #OpenAI',
    category: 'AI/ML',
    featured: true,
  },
]

const myDev = [
  {
    name: 'My Full Stack Agency Website',
    description: 'Come and visit my Full Stack Agency website.',
    link: { href: 'https://www.vabank.dev', label: 'www.vabank.dev' },
    logo: logoVabank,
    category: 'Landing Page',
  },
]

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState('All')

  const filteredProjects =
    selectedCategory === 'All'
      ? projects
      : projects.filter(
          (project) =>
            project.category.toLowerCase() === selectedCategory.toLowerCase(),
        )

  const featuredProjects = projects.filter((project) => project.featured)

  return (
    <>
      <Head>
        <title>Projects - Piotr Maciejewski</title>
        <meta
          name="description"
          content="ReactJS, Javascript, Mapbox, DeckGL, Pandas, Numpy, SciPy, cross-functional, Strategy, Management"
        />
      </Head>
      <SimpleLayout
        title="Welcome to my programming passion."
        intro="Since I was 8, I have been passionate about programming and computer science. It all began with Amstrad CPC 6128 and a very simple BASIC code. Later, I discovered the power of Javascript and Python which I extensively mastered and applied at day to day work. I used to leverage my programming skills in my job as Head of Sales & Integrations at Western Union as well as all my previous assignments. I mainly work with financial data, APIs, and web dev technologies."
      >
        <section className="mb-16">
          <div className="mb-8 flex items-center gap-4">
            <div className="from-primary to-accent h-1 w-12 rounded-full bg-gradient-to-r" />
            <h2 className="text-foreground text-2xl font-bold">
              Featured Projects
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            {featuredProjects.slice(0, 4).map((project) => (
              <Card as="article" key={project.name} className="p-6 flex flex-col">
                <Card.Eyebrow decorate>{project.category}</Card.Eyebrow>
                <div className="bg-muted relative mb-4 overflow-hidden rounded-lg">
                  <Image
                    src={project.logo || '/placeholder.svg'}
                    alt={`${project.name} preview`}
                    width={600}
                    height={450}
                    className="aspect-[4/3] object-cover object-left-top transition-transform duration-300 group-hover:scale-105"
                    unoptimized
                  />
                </div>
                <Card.Title href={project.link.href} target="_blank" rel="noopener noreferrer">{project.name}</Card.Title>
                <Card.Description>{project.description}</Card.Description>
                <div className="mt-auto pt-3 flex flex-wrap gap-1.5">
                  {project.tags.split(', ').map((tag) => (
                    <span
                      key={tag}
                      className="inline-flex items-center rounded-full bg-blue-100 px-2 py-0.5 text-[10px] font-medium text-blue-700 dark:bg-blue-900/30 dark:text-blue-300"
                    >
                      {tag.replace('#', '')}
                    </span>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </section>

        <section>
          <div className="mb-8 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex items-center gap-4">
              <div className="from-primary to-accent h-1 w-12 rounded-full bg-gradient-to-r" />
              <h2 className="text-foreground text-2xl font-bold">
                All Projects
              </h2>
            </div>

            <div className="flex flex-wrap gap-2 sm:gap-3">
              {projectCategories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`touch-manipulation rounded-full px-4 py-2.5 text-sm font-medium transition-all duration-300 sm:px-5 sm:py-3 ${
                    selectedCategory === category
                      ? 'bg-zinc-900 text-white shadow-lg ring-1 ring-zinc-200 dark:bg-zinc-100 dark:text-zinc-900 dark:ring-zinc-700'
                      : 'bg-zinc-100 text-zinc-600 hover:bg-zinc-200 hover:text-zinc-900 dark:bg-zinc-800 dark:text-zinc-300 dark:hover:bg-zinc-700 dark:hover:text-zinc-100'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {filteredProjects.map((project) => (
              <Card as="article" key={project.name} className="p-6 flex flex-col">
                <Card.Eyebrow decorate>{project.category}</Card.Eyebrow>
                <div className="bg-muted relative mb-4 overflow-hidden rounded-lg">
                  <Image
                    src={project.logo || '/placeholder.svg'}
                    alt={`${project.name} preview`}
                    width={400}
                    height={350}
                    className="aspect-[8/7] object-cover object-left-top transition-transform duration-300 group-hover:scale-105"
                    unoptimized
                  />
                </div>
                <Card.Title href={project.link.href} target="_blank" rel="noopener noreferrer">{project.name}</Card.Title>
                <Card.Description>{project.description}</Card.Description>
                <div className="mt-auto pt-3 flex flex-wrap gap-1">
                  {project.tags
                    .split(', ')
                    .slice(0, 3)
                    .map((tag) => (
                      <span
                        key={tag}
                        className="inline-flex items-center rounded-md bg-blue-100 px-1.5 py-0.5 text-[10px] font-medium text-blue-700 dark:bg-blue-900/30 dark:text-blue-300"
                      >
                        {tag.replace('#', '')}
                      </span>
                    ))}
                </div>
              </Card>
            ))}
          </div>
        </section>

        <section className="border-border mt-20 border-t pt-16">
          <div className="mb-8 flex items-center gap-4">
            <div className="from-accent to-primary h-1 w-12 rounded-full bg-gradient-to-r" />
            <h2 className="text-foreground text-2xl font-bold">My Agency</h2>
          </div>
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            {myDev.map((project) => (
              <Card
                as="article"
                key={project.name}
                className="from-primary/5 to-accent/5 bg-gradient-to-br p-8"
              >
                <div className="bg-background relative mb-6 overflow-hidden rounded-lg">
                  <Image
                    src={project.logo || '/placeholder.svg'}
                    alt={`${project.name} preview`}
                    width={600}
                    height={400}
                    className="aspect-[3/2] object-cover object-left-top transition-transform duration-300 group-hover:scale-105"
                    unoptimized
                  />
                </div>
                <Card.Title href={project.link.href} target="_blank" rel="noopener noreferrer">{project.name}</Card.Title>
                <Card.Description>{project.description}</Card.Description>
                <Card.Cta>Visit Agency Website</Card.Cta>
              </Card>
            ))}
          </div>
        </section>
      </SimpleLayout>
    </>
  )
}
