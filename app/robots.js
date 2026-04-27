export default function robots() {
  const baseUrl = 'https://nasamat-eljanoob.com'

  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/private/', '/api/', '/_next/'],
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  }
}