export default function robots() {
  const baseUrl = 'https://nasamat-eljanoob.com'; // يرجى تحديث هذا الرابط بنطاق موقعك الفعلي

  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/private/',
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  }
}