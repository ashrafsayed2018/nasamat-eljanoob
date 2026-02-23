import Image from 'next/image'
import Link from 'next/link'
import { articles } from '../data/articles'

export const metadata = {
  title: 'المدونة | نسمات الجنوب',
  description:
    'أحدث المقالات والأخبار حول توريد الديزل والخدمات اللوجستية في المملكة.',
}

export default function BlogPage() {
  // ترتيب جميع المقالات حسب التاريخ من الأحدث للأقدم
  const allArticles = [...articles].sort(
    (a, b) => new Date(b.created_at) - new Date(a.created_at),
  )

  return (
    <main className='min-h-screen bg-slate-50 pt-32 pb-20'>
      <div className='container mx-auto px-4'>
        {/* Header */}
        <div className='text-center mb-16'>
          <h1 className='text-4xl lg:text-5xl font-extrabold text-slate-900 mb-6'>
            المدونة والأخبار
          </h1>
          <p className='text-slate-600 text-xl max-w-2xl mx-auto'>
            اكتشف أحدث الرؤى والتحليلات في عالم الطاقة والخدمات اللوجستية.
          </p>
        </div>

        {/* Articles Grid */}
        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {allArticles.map((article) => (
            <article
              key={article.id}
              className='bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition duration-300 flex flex-col border border-slate-100'
            >
              <div className='relative h-64 w-full group overflow-hidden'>
                <Image
                  src={article.image}
                  alt={article.title}
                  fill
                  className='object-cover transform group-hover:scale-105 transition duration-500'
                />
                {article.category?.name && (
                  <div className='absolute top-4 right-4 bg-blue-600 text-white text-xs px-3 py-1 rounded-full'>
                    {article.category.name}
                  </div>
                )}
              </div>
              <div className='p-8 flex-grow flex flex-col'>
                <div className='flex items-center text-slate-500 text-sm mb-4 gap-4'>
                  <span className='flex items-center gap-1'>
                    📅{' '}
                    {new Date(article.created_at).toLocaleDateString('ar-SA')}
                  </span>
                </div>
                <h2 className='text-2xl font-bold text-slate-900 mb-4 leading-tight'>
                  <Link
                    href={`/blog/${article.slug}`}
                    className='hover:text-blue-600 transition'
                  >
                    {article.title}
                  </Link>
                </h2>
                <p className='text-slate-600 mb-6 line-clamp-3 flex-grow leading-relaxed'>
                  {article.excerpt}
                </p>
                <div className='mt-auto pt-6 border-t border-slate-100 flex items-center justify-between'>
                  <Link
                    href={`/blog/${article.slug}`}
                    className='text-blue-600 font-bold hover:text-blue-800 flex items-center gap-2'
                  >
                    اقرأ المزيد
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      className='h-4 w-4 transform rotate-180'
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
                  </Link>
                  <div className='flex gap-2'>
                    {article.tags &&
                      article.tags.slice(0, 2).map((tag) => (
                        <span
                          key={tag.id}
                          className='bg-slate-100 text-slate-600 text-xs px-2 py-1 rounded'
                        >
                          {tag.name}
                        </span>
                      ))}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </main>
  )
}
