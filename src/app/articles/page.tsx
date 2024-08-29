import { type Metadata } from 'next'
import Link from 'next/link'
import { Card } from '@/components/Card'
import { SimpleLayout } from '@/components/SimpleLayout'
import { type ArticleWithSlug, getAllArticles } from '@/lib/articles'
import { formatDate } from '@/lib/formatDate'

function Article({ article }: { article: ArticleWithSlug }) {
  return (
    <article className="md:grid md:grid-cols-4 md:items-baseline">
      <Card className="md:col-span-3">
        <Card.Title href={`/articles/${article.slug}`}>
          {article.title}
        </Card.Title>
        <Card.Eyebrow
          as="time"
          dateTime={article.date}
          className="md:hidden"
          decorate
        >
          {formatDate(article.date)}
        </Card.Eyebrow>

        <Card.Description>{article.description}</Card.Description>
        <Card.Cta>Read article</Card.Cta>
      </Card>
      <Card.Eyebrow
        as="time"
        dateTime={article.date}
        className="mt-1 hidden md:block"
      >
        <div className="flex flex-col">
          <span className="font-semibold text-slate-500 dark:text-slate-300">
            {formatDate(article.date)}
          </span>
          <div className="flex flex-wrap">
            {article.tags?.map((tag, i) => (
              <div
                key={i}
                className="mr-2 mt-2 flex w-fit flex-wrap rounded-lg bg-indigo-600 px-2 py-1 text-xs text-white"
              >
                {tag}
              </div>
            ))}
          </div>
        </div>
      </Card.Eyebrow>
    </article>
  )
}

export const metadata: Metadata = {
  title: 'Articles',
  description:
    'All of my long-form thoughts on programming, leadership, product design, and more, collected in chronological order.',
}

export default async function ArticlesIndex({
  searchParams,
}: {
  searchParams: { tag?: string }
}) {
  const { tag } = searchParams
  const articles = await getAllArticles(tag)

  // Fetch all articles to get all unique tags
  const allArticles = await getAllArticles()
  const tags = Array.from(
    new Set(allArticles.flatMap((article) => article.tags || [])),
  )

  return (
    <SimpleLayout
      title="A Deep Dive into Technology, Business, and Finance: Insights Through a Data-Driven Lens."
      intro="In this space, I delve into the intersections of business, technology, payments, and programming trends. Many of my posts draw inspiration from the research and assignments I undertook during my MBA journey at Warwick Business School from 2019 to 2021. My time at WBS was deeply enriching, and I often find myself reminiscing about the rigor of academic research, the art of structured writing, and stimulating discussions with my peers. Alongside these reflections, you'll also find practical tutorials and guides, helping you navigate the latest in tech, programming frameworks, and libraries."
    >
      <div className="md:border-l md:border-zinc-100 md:pl-6 md:dark:border-zinc-700/40">
        <div className="flex max-w-3xl flex-col space-y-16">
          <div className="mb-4 flex flex-wrap space-x-2">
            <Link
              href="/articles"
              className={`rounded-md px-3 py-1 text-sm font-medium ${
                !tag
                  ? 'bg-zinc-200 text-zinc-900 dark:bg-zinc-800 dark:text-zinc-100'
                  : 'bg-zinc-100 text-zinc-600 dark:bg-zinc-700 dark:text-zinc-400'
              }`}
            >
              All Articles
            </Link>
            {tags.map((tagItem) => (
              <Link
                key={tagItem}
                href={`?tag=${encodeURIComponent(tagItem)}`}
                className={`rounded-md px-3 py-1 text-sm font-medium ${
                  tag === tagItem
                    ? 'bg-zinc-200 text-zinc-900 dark:bg-zinc-800 dark:text-zinc-100'
                    : 'bg-zinc-100 text-zinc-600 dark:bg-zinc-700 dark:text-zinc-400'
                }`}
              >
                {tagItem}
              </Link>
            ))}
          </div>

          {articles.map((article) => (
            <Article key={article.slug} article={article} />
          ))}
        </div>
      </div>
    </SimpleLayout>
  )
}
