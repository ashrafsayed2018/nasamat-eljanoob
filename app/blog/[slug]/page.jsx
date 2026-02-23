import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { articles } from '../../data/articles'

function findArticleBySlug(slug) {
  const decoded = decodeURIComponent(slug)
  return articles.find((a) => a.slug === decoded)
}

export function generateMetadata({ params }) {
  const article = findArticleBySlug(params.slug)

  if (!article) {
    return {
      title: 'المقال غير موجود | نسمات الجنوب',
      description: 'تعذر العثور على المقال المطلوب.',
    }
  }

  return {
    title: `${article.title} | نسمات الجنوب`,
    description: article.excerpt?.slice(0, 160) || '',
  }
}

export default function ArticlePage({ params }) {
  const article = findArticleBySlug(params.slug)

  if (!article) {
    notFound()
  }

  return (
    <main className='min-h-screen bg-slate-50 pt-32 pb-16'>
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
