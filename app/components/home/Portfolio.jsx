import Image from 'next/image'
import Link from 'next/link'

export default function Portfolio() {
  const projects = [
    {
      id: 1,
      title: 'توريد لمصانع الأسمنت',
      image: '/images/portfolio-1.jpg',
    },
    {
      id: 2,
      title: 'تغذية مشاريع الطرق',
      image: '/images/portfolio-2.jpg',
    },
    {
      id: 3,
      title: 'عقود توريد للمزارع الكبرى',
      image: '/images/portfolio-3.jpg',
    },
  ]

  return (
    <section className='py-20 bg-slate-50'>
      <div className='container mx-auto px-4'>
        <div className='text-center mb-16'>
          <h2 className='text-3xl md:text-4xl font-bold text-slate-900 mb-4'>
            أعمالنا ومشاريعنا
          </h2>
          <div className='w-20 h-1 bg-blue-600 mx-auto rounded-full mb-6'></div>
        </div>
        <div className='grid md:grid-cols-3 gap-8'>
          {projects.map((project) => (
            <div
              key={project.id}
              className='group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-300 border border-slate-100'
            >
              <div className='relative h-64 overflow-hidden'>
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className='object-cover transform group-hover:scale-110 transition duration-500'
                />
              </div>
              <div className='p-6'>
                <h3 className='text-xl font-bold text-slate-800 mb-2'>
                  {project.title}
                </h3>
                <Link
                  href='/portfolio'
                  className='text-blue-600 font-bold hover:text-blue-800 flex items-center gap-2 text-sm mt-4'
                >
                  عرض التفاصيل
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    className='h-4 w-4'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M15 19l-7-7 7-7'
                    />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
