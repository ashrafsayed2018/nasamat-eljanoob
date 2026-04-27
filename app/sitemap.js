import { articles } from './data/articles'

const baseUrl = 'https://nasamat-eljanoob.com'

export default function sitemap() {
  // Static routes (main pages)
  const staticRoutes = [
    { path: '', changeFrequency: 'weekly', priority: 1.0 },
    { path: '/about', changeFrequency: 'monthly', priority: 0.7 },
    { path: '/services', changeFrequency: 'monthly', priority: 0.9 },
    { path: '/portfolio', changeFrequency: 'monthly', priority: 0.8 },
    { path: '/contact', changeFrequency: 'monthly', priority: 0.7 },
    { path: '/blog', changeFrequency: 'weekly', priority: 0.9 },
  ].map(({ path, changeFrequency, priority }) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date(),
    changeFrequency,
    priority,
  }))

  // Dynamic article routes
  const articleRoutes = articles.map((article) => ({
    url: `${baseUrl}/blog/${encodeURIComponent(article.slug)}`,
    lastModified: article.created_at
      ? new Date(article.created_at)
      : new Date(),
    changeFrequency: 'monthly',
    priority: 0.7,
  }))

  return [...staticRoutes, ...articleRoutes]
}
