import { articles } from './data/articles'

const baseUrl = 'https://nasamat-eljanoob.com' // ضع هنا الدومين الحقيقي لموقعك

export default function sitemap() {
  // Static routes (main pages)
  const staticRoutes = [
    '',
    '/about',
    '/services',
    '/portfolio',
    '/contact',
    '/blog',
  ].map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: path === '' ? 1.0 : 0.8,
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
