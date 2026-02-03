import Image from 'next/image'
import Link from 'next/link'
import { articles } from '../../app/data/blogData'

export default function RecentArticles() {
  // ترتيب المقالات حسب التاريخ من الأحدث للأقدم وأخذ أول 10
  const recentArticles = [...articles]
    .sort((a, b) => new Date(b.created_at) - new Date(a.created_at))
    .slice(0, 10)

  return (
    <section className='py-20 bg-slate-50'>
      <div className='container mx-auto px-4'>
        <div className='text-center mb-16'>
          <h2 className='text-3xl font-bold text-slate-900 mb-4'>
            أحدث المقالات والأخبار
          </h2>
          <div className='w-20 h-1 bg-blue-600 mx-auto rounded-full mb-6'></div>
          <p className='text-slate-600 max-w-2xl mx-auto'>
            تابع آخر أخبارنا ومقالاتنا حول قطاع النقل وتوريد الديزل والخدمات
            اللوجستية.
          </p>
        </div>

        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12'>
          {recentArticles.map((article) => (
            <div
              key={article.id}
              className='bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition duration-300 flex flex-col h-full border border-slate-100'
            >
              <div className='relative h-56 w-full'>
                <Image
                  src={article.image}
                  alt={article.title}
                  fill
                  className='object-cover'
                />
                <div className='absolute top-4 right-4 bg-blue-600 text-white text-xs px-3 py-1 rounded-full'>
                  {article.category.name}
                </div>
              </div>
              <div className='p-6 flex-grow flex flex-col'>
                <div className='flex items-center text-slate-500 text-xs mb-3 gap-4'>
                  <span>
                    📅{' '}
                    {new Date(article.created_at).toLocaleDateString('ar-SA')}
                  </span>
                </div>
                <h3 className='text-xl font-bold text-slate-900 mb-3 leading-snug line-clamp-2'>
                  <Link
                    href={`/blog/${article.slug}`}
                    className='hover:text-blue-600 transition'
                  >
                    {article.title}
                  </Link>
                </h3>
                <p className='text-slate-600 text-sm mb-4 line-clamp-3 flex-grow'>
                  {article.excerpt}
                </p>
                <Link
                  href={`/blog/${article.slug}`}
                  className='inline-flex items-center text-blue-600 font-bold hover:text-blue-800 text-sm mt-auto'
                >
                  اقرأ المزيد
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    className='h-4 w-4 mr-1 transform rotate-180'
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
              </div>
            </div>
          ))}
        </div>

        <div className='text-center'>
          <Link
            href='/blog'
            className='inline-block bg-transparent border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-3 rounded-xl font-bold transition duration-300'
          >
            عرض جميع المقالات
          </Link>
        </div>
      </div>
    </section>
  )
}
