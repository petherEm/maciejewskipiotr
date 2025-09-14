'use client'

import { useState, useEffect } from 'react'
import { Card } from '@/components/Card'
import { SimpleLayout } from '@/components/SimpleLayout'
import { type ArticleWithSlug } from '@/lib/articles'
import { formatDate } from '@/lib/formatDate'

function Article({ article }: { article: ArticleWithSlug }) {
  return (
    <article className="md:grid md:grid-cols-4 md:items-baseline">
      <Card className="md:col-span-3 !border-0 !shadow-none hover:!shadow-none hover:!translate-y-0">
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

export default function ArticlesIndex() {
  const [selectedTag, setSelectedTag] = useState<string | null>(null)
  const [articles, setArticles] = useState<ArticleWithSlug[]>([])
  const [allArticles, setAllArticles] = useState<ArticleWithSlug[]>([])
  const [tags, setTags] = useState<string[]>([])

  useEffect(() => {
    async function loadArticles() {
      try {
        const response = await fetch('/api/articles')
        const allArticlesData: ArticleWithSlug[] = await response.json()
        const tagsData = Array.from(
          new Set(allArticlesData.flatMap((article) => article.tags || [])),
        )

        setAllArticles(allArticlesData)
        setTags(tagsData)
        setArticles(allArticlesData)
      } catch (error) {
        console.error('Failed to load articles:', error)
      }
    }

    loadArticles()
  }, [])

  useEffect(() => {
    if (selectedTag) {
      setArticles(allArticles.filter((article) => article.tags?.includes(selectedTag)))
    } else {
      setArticles(allArticles)
    }
  }, [selectedTag, allArticles])

  return (
    <SimpleLayout
      title="A Deep Dive into Technology, Business, and Finance: Insights Through a Data-Driven Lens."
      intro="In this space, I delve into the intersections of business, technology, payments, and programming trends. Many of my posts draw inspiration from the research and assignments I undertook during my MBA journey at Warwick Business School from 2019 to 2021. My time at WBS was deeply enriching, and I often find myself reminiscing about the rigor of academic research, the art of structured writing, and stimulating discussions with my peers. Alongside these reflections, you'll also find practical tutorials and guides, helping you navigate the latest in tech, programming frameworks, and libraries."
    >
      <div className="md:border-l md:border-zinc-100 md:pl-6 md:dark:border-zinc-700/40">
        <div className="flex max-w-3xl flex-col space-y-16">
          <div className="mb-4 flex flex-wrap space-x-2">
            <button
              onClick={() => setSelectedTag(null)}
              className={`rounded-md px-3 py-1 text-sm font-medium transition-colors ${
                !selectedTag
                  ? 'bg-zinc-200 text-zinc-900 dark:bg-zinc-800 dark:text-zinc-100'
                  : 'bg-zinc-100 text-zinc-600 dark:bg-zinc-700 dark:text-zinc-400 hover:bg-zinc-200 hover:text-zinc-900 dark:hover:bg-zinc-600 dark:hover:text-zinc-100'
              }`}
            >
              All Articles
            </button>
            {tags.map((tagItem) => (
              <button
                key={tagItem}
                onClick={() => setSelectedTag(tagItem)}
                className={`rounded-md px-3 py-1 text-sm font-medium transition-colors ${
                  selectedTag === tagItem
                    ? 'bg-zinc-200 text-zinc-900 dark:bg-zinc-800 dark:text-zinc-100'
                    : 'bg-zinc-100 text-zinc-600 dark:bg-zinc-700 dark:text-zinc-400 hover:bg-zinc-200 hover:text-zinc-900 dark:hover:bg-zinc-600 dark:hover:text-zinc-100'
                }`}
              >
                {tagItem}
              </button>
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
