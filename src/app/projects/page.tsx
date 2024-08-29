import Image from 'next/image'
import Head from 'next/head'

import { Card } from '@/components/Card'
import { SimpleLayout } from '@/components/SimpleLayout'

import logoHexagon from '@/images/logos/hexagon2.jpeg'
import logoAirBnB from '@/images/logos/airbnb.jpeg'
import logoWeather from '@/images/logos/weather.jpeg'
import logoNetflix from '@/images/logos/netflix.jpeg'
import logoAmazon from '@/images/logos/amazon.jpeg'
import logoPayIntel from '@/images/logos/payIntel.jpeg'
import logoBankApp from '@/images/logos/bankapp.jpeg'
import logoFood from '@/images/logos/food.jpeg'
import logoIkomers from '@/images/logos/ikomers.jpeg'
import logoPerso from '@/images/logos/perso.jpeg'
import logoGPT from '@/images/logos/betterGPT.png'
import logoInpost from '@/images/logos/inpost2.jpg'
import logoFlix from '@/images/logos/flix.jpg'
import logoAIweather from '@/images/logos/aiweather.jpg'
import logoWUImprove from '@/images/logos/wuimprove.jpg'
import logoCarshow from '@/images/logos/carshow.jpg'
import logoPizzaDeliv from '@/images/logos/pizzadeliv.jpg'
import logoCorseTorse from '@/images/logos/corsetorse.jpg'
import logoVabankPorfolio from '@/images/logos/vabankNew.png'
import logoNikeClone from '@/images/logos/nikeclone.png'
import logoGrafbase from '@/images/logos/grafbaseproject.png'
import trueWU from '@/images/logos/trueWU.png'
import logoPayLoq from '@/images/logos/13_PayLooq.png'
import logoChamonify from '@/images/logos/18_Chamonify.png'
import logoBikeSpring from '@/images/logos/19_Bikeshop.png'
import logoAcademic from '@/images/logos/2_Profesor.png'
import logoGibbarosa from '@/images/logos/1_Gibbarosa.png'
import logoThreads from '@/images/logos/12_Threads.png'
import logoSaaSAS from '@/images/logos/14_SaaSAS.png'
import logoImaginify from '@/images/logos/20_Imaginify.png'
import logoEventeror from '@/images/logos/21_Eventeror.png'
import logoGibbarosa2 from '@/images/logos/26_Gibbarosa2.png'
import logoPSDTracker from '@/images/logos/27_PSDTracker.png'
import logoZoomClone from '@/images/logos/29_ZoomClone.png'
import logoWUAI from '@/images/logos/28_WUAIpay.png'
import logoTresLenguajes from '@/images/logos/30_TresLenguajes.png'
import logoDisneyClone from '@/images/logos/31_DisneyChannel.png'
import logoPayLoqTrue from '@/images/logos/24_PayLoqTrue.png'

const myDev = [
  {
    name: 'My Full Stack Agency Website',
    description: 'Come and visit my Full Stack Agency website.',
    link: { href: 'https://www.vabank.dev', label: 'www.vabank.dev' },
    logo: logoVabankPorfolio,
  },
]

const projects = [
  {
    name: 'Gibbarosa 2.0 - Pre-owned Luxury',
    description:
      'e-commerce project built on Next.js 14 and Medusa.js as a backend with Stripe and OpenAI (virtual assistant).',
    link: {
      href: 'https://www.gibbarosa.io/pl',
      label: 'www.gibbarosa.io/pl',
    },
    logo: logoGibbarosa2,
    tags: '#Next.js 14, #Medusa.js, #OpenAI',
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
  },
  {
    name: 'Payments Insights and Tech Overview',
    description:
      'AI in Payments and Remittance.Dev view on integrations and Market Insights.',
    link: {
      href: 'https://www.payloq.com/',
      label: 'www.payloq.com/',
    },
    logo: logoPayLoqTrue,
    tags: '#Next.js 14, #Clerk, #TailwindCSS',
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
    tags: '#Next.js 14, #Drizzle, #Clerk',
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
  },
  {
    name: 'PayLoq - dev payments community',
    description:
      'PayLoq.com is a community forum for remittance and payments industry. Built with Next.js, MongoDB, TailwindCSS, Clerk and OpenAI.',
    link: {
      href: 'https://trueremit.vercel.app/',
      label: 'trueremit.vercel.app',
    },
    logo: logoPayLoq,
    tags: '#Next.js 14, #MongoDB, #OpenAI',
  },
  {
    name: 'Hexagon Layer with NextJS',
    description:
      'Plotting road accidents in the UK with DeckGL, Next13 and TailwindCSS.',
    link: {
      href: 'https://hexagonlayer-next.vercel.app/',
      label: 'hexagonlayer-next.vercel.app',
    },
    logo: logoHexagon,
    tags: '#maps, #data, #visualization',
  },
  {
    name: 'Gibbarosa - Pre-owned luxury',
    description:
      'E-commerce project built on Next.js 14 and Sanity.io with Stripe, BLIK and P24 integration.',
    link: {
      href: 'https://gibbarosa.vabank.dev/',
      label: 'gibbarosa.vabank.dev',
    },
    logo: logoGibbarosa,
    tags: '#Next.js 14, #Sanity.io, #Payments',
  },
  {
    name: 'Academic Researcher - Landing Page',
    description:
      'Academic researcher and professor landing page built on Next.js 14, TailwindCSS and with Framer Motion animations.',
    link: {
      href: 'https://www.alinamaciejewska.pl/',
      label: 'www.alinamaciejewska.pl',
    },
    logo: logoAcademic,
    tags: '#Next.js 14, #TailwindCSS',
  },
  {
    name: 'Chamonify - book your stay in Haute Savoie',
    description:
      'Chamonify is a booking service for your stays at Chamonix Mont Blanc, France. Built with Next.js, TailwindCSS, Shadcn.',
    link: {
      href: 'https://chamonify.vercel.app/',
      label: 'chamonify.vercel.app',
    },
    logo: logoChamonify,
    tags: '#Next.js 14, #TailwindCSS, #Shadcn',
  },
  {
    name: 'BikeSpring - dream bike shop',
    description:
      'BikeSpring is a true, modern online bike shop. Built with Next.js 14, Sanity.io, Stripe payments and TailwindCSS.',
    link: {
      href: 'https://bikespring.vercel.app/',
      label: 'bikespring.vercel.app',
    },
    logo: logoBikeSpring,
    tags: '#Next.js 14, #Sanity.io, #TailwindCSS',
  },
  {
    name: 'Imaginify - AI Image playground',
    description:
      'Testing CloudinaryAI, MongoDB, Clerk with Next.js 14 and TailwindCSS. Imaginify is an AI playground for image processing and manipulation.',
    link: {
      href: 'https://imaagic.vercel.app/',
      label: 'imaagic.vercel.app/',
    },
    logo: logoImaginify,
    tags: '#Next.js 14, #MongoDB, #Clerk',
  },
  {
    name: 'Evently - event management',
    description:
      'Evently is a modern event platform built with Next.js, MongoDB, TailwindCSS and Clerk.',
    link: {
      href: 'https://eventorex.vercel.app/',
      label: 'eventorex.vercel.app/',
    },
    logo: logoEventeror,
    tags: '#Next.js 14, #MongoDB, #Clerk',
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
  },
  {
    name: 'Threads clone - in progress',
    description:
      'Threads Clone project built with Next.js, TailwindCSS, MongoDB and Clerk.',
    link: {
      href: 'https://mythreads-delta.vercel.app/',
      label: 'mythreads-delta.vercel.app',
    },
    logo: logoThreads,
    tags: '#Next.js 14, #Prisma, #OpenAI',
  },
  {
    name: 'Nike Clone',
    description:
      'Mastering TailwindCSS and Next.js through Nike Clone project.',
    link: {
      href: 'https://nikeclone-nine.vercel.app/',
      label: 'nikeclone-nine.vercel.app',
    },
    logo: logoNikeClone,
    tags: '#TailwindCSS, #Next.js 13.4',
  },
  {
    name: 'Corse Torse',
    description: 'OpenAI GPT-3.5 powered Training App and calories counter',
    link: {
      href: 'https://mytraining.vabank.me/',
      label: 'mytraining.vabank.me',
    },
    logo: logoCorseTorse,
    tags: '#AI, #GPT-3.5, #NextAuth, #OpenAI',
  },

  {
    name: 'WU send money',
    description:
      'Improvements to WU customer journey, price engine and payout methods, with NextJS, TailwindCSS, and Zustand.',
    link: {
      href: 'https://wuimprove2.vercel.app/',
      label: 'wuimprove2.vercel.app',
    },
    logo: logoWUImprove,
    tags: '#banking, #payments, #MongoDB',
  },
  {
    name: 'AI Weather App',
    description:
      'OpenAI GPT-3.5 powered AI Weather narration with NextJS, TailwindCSS, StepZen and Typescript',
    link: {
      href: 'https://aiweather.vabank.me/',
      label: 'aiweather.vabank.me',
    },
    logo: logoAIweather,
    tags: '#AI, #GPT-3.5, #TypeScript, #OpenAI',
  },
  {
    name: 'ChatGPT bot',
    description:
      'OpenAI GPT-3 powered chatbot with NextJS, TailwindCSS, Firebase and NextAuth',
    link: {
      href: 'https://bettergpt.vabank.dev',
      label: 'bettergpt.vabank.dev',
    },
    logo: logoGPT,
    tags: '#AI, #GPT-3, #OpenAI',
  },
  {
    name: 'Pizza Pierre',
    description:
      'Pizza Pierre is a pizza delivery website built with NextJS and TailwindCSS.',
    link: {
      href: 'https://pizzadelivery-five.vercel.app/',
      label: 'pizzadelivery-five.vercel.app',
    },
    logo: logoPizzaDeliv,
    tags: '#eCommerce, #food, #delivery',
  },

  {
    name: 'Banking App landing page',
    description:
      'Inspiration from JSMastery to boost React/Next learnings and TailwindCSS.',
    link: {
      href: 'https://bankapp-seven.vercel.app/',
      label: 'bankapp-seven.vercel.app',
    },
    logo: logoBankApp,
    tags: '#banking, #payments, #eCommerce',
  },

  {
    name: 'eCommerce on Sanity',
    description: 'eCommerce website built with Sanity and NextJS.',
    link: {
      href: 'https://nextcommerce-one-mu.vercel.app/',
      label: 'nextcommerce-one-mu.vercel.app',
    },
    logo: logoIkomers,
    tags: '#eCommerce, #shop, #cms',
  },

  {
    name: 'Amazon Clone',
    description:
      'eCommerce project with NextJS, NextAuth, Firestore and TailwindCSS.',
    link: {
      href: 'https://amazon4-two.vercel.app/',
      label: 'amazon4-two.vercel.app',
    },
    logo: logoAmazon,
    tags: '#eCommerce, #shop, #payments',
  },
  {
    name: 'Netflix Clone',
    description: 'Netflix clone with NextJS, TailwindCSS, and Firebase.',
    link: {
      href: 'https://newnetflix-5355c.web.app/',
      label: 'newnetflix-5355c.web.app',
    },
    logo: logoNetflix,
    tags: '#streaming, #social, #eCommerce',
  },
  {
    name: 'Movie Review App',
    description: 'Vanilla JS, TailwindCSS and TMDB API.',
    link: {
      href: 'https://flix-project-phi.vercel.app/',
      label: 'flix-project-phi.vercel.app',
    },
    logo: logoFlix,
    tags: '#streaming, #social, #eCommerce',
  },
  {
    name: 'Weather App',
    description: 'Openweather API with NextJS and TailwindCSS.',
    link: {
      href: 'https://nextweather-plum.vercel.app/',
      label: 'nextweather-plum.vercel.app',
    },
    logo: logoWeather,
    tags: '#weather, #maps, #data',
  },
  {
    name: 'My Dev Website',
    description:
      'Come and visit my dev website to see my latest projects and blog posts.',
    link: { href: 'https://www.piotrdev.com/', label: 'www.piotrdev.com' },
    logo: logoPerso,
  },
]

function LinkIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        d="M15.712 11.823a.75.75 0 1 0 1.06 1.06l-1.06-1.06Zm-4.95 1.768a.75.75 0 0 0 1.06-1.06l-1.06 1.06Zm-2.475-1.414a.75.75 0 1 0-1.06-1.06l1.06 1.06Zm4.95-1.768a.75.75 0 1 0-1.06 1.06l1.06-1.06Zm3.359.53-.884.884 1.06 1.06.885-.883-1.061-1.06Zm-4.95-2.12 1.414-1.415L12 6.344l-1.415 1.413 1.061 1.061Zm0 3.535a2.5 2.5 0 0 1 0-3.536l-1.06-1.06a4 4 0 0 0 0 5.656l1.06-1.06Zm4.95-4.95a2.5 2.5 0 0 1 0 3.535L17.656 12a4 4 0 0 0 0-5.657l-1.06 1.06Zm1.06-1.06a4 4 0 0 0-5.656 0l1.06 1.06a2.5 2.5 0 0 1 3.536 0l1.06-1.06Zm-7.07 7.07.176.177 1.06-1.06-.176-.177-1.06 1.06Zm-3.183-.353.884-.884-1.06-1.06-.884.883 1.06 1.06Zm4.95 2.121-1.414 1.414 1.06 1.06 1.415-1.413-1.06-1.061Zm0-3.536a2.5 2.5 0 0 1 0 3.536l1.06 1.06a4 4 0 0 0 0-5.656l-1.06 1.06Zm-4.95 4.95a2.5 2.5 0 0 1 0-3.535L6.344 12a4 4 0 0 0 0 5.656l1.06-1.06Zm-1.06 1.06a4 4 0 0 0 5.657 0l-1.061-1.06a2.5 2.5 0 0 1-3.535 0l-1.061 1.06Zm7.07-7.07-.176-.177-1.06 1.06.176.178 1.06-1.061Z"
        fill="currentColor"
      />
    </svg>
  )
}

export default function Projects() {
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
        intro="Since I was 8, I have been passionate about programming and computer science. It all began with Amstrad CPC 6128 and a very simple BASIC code. Later, I discovered the power of Javascript and Python which I extensively mastered and applied at day to day work. 
        
        I used to leverage my programming skills in my job as Head of Sales & Integrations at Western Union as well as all my previous assignments. I mainly work with financial data, APIs, and web dev technologies. I am interested in data visualization and I am constantly looking for new ways to improve my skills in this area.
        One of my key objectives is to perfectly link my business, finance and data science acumen with web technologies.
        "
      >
        <h1 className="mb-8 mt-6 w-2/3 text-4xl font-bold text-white">
          Road to JavaScript mastery and Next.js excellence.
        </h1>
        <ul
          role="list"
          className="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3"
        >
          {projects.map((project) => (
            <Card as="li" key={project.name}>
              <div>
                <h2 className="mb-2 mt-6 text-base font-semibold text-indigo-800 dark:text-indigo-400">
                  <Card.Link href={project.link.href}>{project.tags}</Card.Link>
                </h2>
              </div>
              <div className="h-42 w-58 relative z-10 flex items-center justify-center rounded-lg bg-white shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
                <Image src={project.logo} alt="" className="" unoptimized />
              </div>
              <h2 className="mt-6 text-base font-semibold text-zinc-800 dark:text-zinc-100">
                <Card.Link
                  href={project.link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {project.name}
                </Card.Link>
              </h2>
              <Card.Description>{project.description}</Card.Description>
              <p className="relative z-10 mt-6 flex text-sm font-medium text-zinc-400 transition group-hover:text-indigo-500 dark:text-zinc-200">
                <LinkIcon className="h-6 w-6 flex-none" />
                <span className="ml-2">{project.link.label}</span>
              </p>
            </Card>
          ))}
        </ul>

        <hr className="mb-6 mt-6 h-2 text-zinc-500" />

        <h2 className="mb-6 mt-8 text-3xl font-bold dark:text-slate-400">
          See my Full Stack Agency website
        </h2>
        <ul
          role="list"
          className="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3"
        >
          {myDev.map((project) => (
            <Card as="li" key={project.name}>
              <div className="h-42 w-58 relative z-10 flex items-center justify-center rounded-lg bg-white shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
                <Image src={project.logo} alt="" className="" unoptimized />
              </div>
              <h2 className="mt-6 text-base font-semibold text-zinc-800 dark:text-zinc-100">
                <Card.Link href={project.link.href}>{project.name}</Card.Link>
              </h2>
              <Card.Description>{project.description}</Card.Description>
              <p className="relative z-10 mt-6 flex text-sm font-medium text-zinc-400 transition group-hover:text-indigo-500 dark:text-zinc-200">
                <LinkIcon className="h-6 w-6 flex-none" />
                <span className="ml-2">{project.link.label}</span>
              </p>
            </Card>
          ))}
        </ul>
      </SimpleLayout>
    </>
  )
}
