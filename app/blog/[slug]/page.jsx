import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { articles } from '../../data/articles'

const baseUrl = 'https://nasamat-eljanoob.com'

function findArticleBySlug(slug) {
  const decoded = decodeURIComponent(slug)
  return articles.find((a) => a.slug === decoded)
}

export function generateMetadata({ params }) {
  const article = findArticleBySlug(params.slug)

  if (!article) {
    return {
      title: 'المقال غير موجود',
      description: 'تعذر العثور على المقال المطلوب.',
    }
  }

  const canonicalUrl = `/blog/${encodeURIComponent(article.slug)}`

  return {
    title: article.title,
    description: article.excerpt?.slice(0, 160) || '',
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      type: 'article',
      title: article.title,
      description: article.excerpt?.slice(0, 160) || '',
      url: canonicalUrl,
      publishedTime: article.created_at,
      authors: ['نسمات الجنوب'],
      section: article.category?.name || 'الطاقة',
      tags: article.tags?.map((t) => t.name) || [],
      images: article.image
        ? [
            {
              url: article.image,
              width: 1200,
              height: 630,
              alt: article.title,
            },
          ]
        : [{ url: '/images/hero-truck.jpg', width: 1200, height: 630, alt: article.title }],
    },
    twitter: {
      title: article.title,
      description: article.excerpt?.slice(0, 160) || '',
      images: [article.image || '/images/hero-truck.jpg'],
    },
  }
}

export default function ArticlePage({ params }) {
  const article = findArticleBySlug(params.slug)

  if (!article) {
    notFound()
  }

  const articleUrl = `${baseUrl}/blog/${encodeURIComponent(article.slug)}`

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.title,
    description: article.excerpt?.slice(0, 160) || '',
    image: article.image ? `${baseUrl}${article.image}` : `${baseUrl}/images/hero-truck.jpg`,
    url: articleUrl,
    datePublished: article.created_at,
    dateModified: article.created_at,
    author: {
      '@type': 'Organization',
      name: 'نسمات الجنوب',
      url: baseUrl,
    },
    publisher: {
      '@type': 'Organization',
      name: 'نسمات الجنوب',
      logo: {
        '@type': 'ImageObject',
        url: `${baseUrl}/images/hero-truck.jpg`,
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': articleUrl,
    },
  }

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'الرئيسية',
        item: baseUrl,
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'المدونة',
        item: `${baseUrl}/blog`,
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: article.title,
        item: articleUrl,
      },
    ],
  }

  return (
    <main className='min-h-screen bg-slate-50 pt-32 pb-16'>
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <div className='container mx-auto px-4 max-w-5xl'>
        <div className='mb-10'>
          <Link
            href='/blog'
            className='inline-flex items-center text-sm text-blue-600 hover:text-blue-800 mb-4'
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-4 w-4 ml-1 rotate-180'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M17 8l4 4m0 0l-4 4m4-4H3'
              />
            </svg>
            العودة للمدونة
          </Link>

          <h1 className='text-3xl md:text-4xl font-extrabold text-slate-900 mb-4 leading-snug'>
            {article.title}
          </h1>

          <div className='flex flex-wrap items-center gap-4 text-slate-500 text-sm mb-6'>
            <span>
              📅 {new Date(article.created_at).toLocaleDateString('ar-SA')}
            </span>
          </div>
        </div>

        {article.image && (
          <div className='relative w-full h-72 md:h-96 rounded-2xl overflow-hidden shadow-lg mb-10'>
            <Image
              src={article.image}
              alt={article.title}
              fill
              className='object-cover'
            />
          </div>
        )}

        <article className='bg-white rounded-2xl shadow-md p-6 md:p-10 leading-relaxed text-slate-800 prose prose-slate max-w-none prose-headings:text-slate-900 prose-a:text-blue-600 prose-a:no-underline hover:prose-a:underline'>
          <div dangerouslySetInnerHTML={{ __html: article.content }} />
        </article>
      </div>
    </main>
  )
}
