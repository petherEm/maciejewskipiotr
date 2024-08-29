import glob from 'fast-glob'

interface Article {
  title: string
  description: string
  author: string
  date: string
  tags?: string[] // Make tags optional
}

export interface ArticleWithSlug extends Article {
  slug: string
}

async function importArticle(
  articleFilename: string,
): Promise<ArticleWithSlug> {
  let { article } = (await import(`../app/articles/${articleFilename}`)) as {
    default: React.ComponentType
    article: Article
  }

  return {
    slug: articleFilename.replace(/(\/page)?\.mdx$/, ''),
    ...article,
  }
}

export async function getAllArticles(tag?: string) {
  let articleFilenames = await glob('*/page.mdx', {
    cwd: './src/app/articles',
  })

  let articles = await Promise.all(articleFilenames.map(importArticle))

  // Filter articles by tag if a tag is provided
  if (tag) {
    articles = articles.filter((article) => article.tags?.includes(tag))
  }

  return articles.sort((a, z) => +new Date(z.date) - +new Date(a.date))
}
