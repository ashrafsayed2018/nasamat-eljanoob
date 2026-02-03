import Link from 'next/link'

export default function NotFound() {
  return (
    <main className='min-h-screen bg-slate-50 flex items-center justify-center p-4'>
      <div className='max-w-2xl w-full text-center'>
        {/* Error Code */}
        <div className='relative mb-8'>
          <h1 className='text-9xl font-extrabold text-slate-200 tracking-widest'>
            404
          </h1>
          <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-blue-600 text-white px-4 py-1 rounded text-sm font-bold rotate-12 shadow-lg'>
            الصفحة غير موجودة
          </div>
        </div>

        {/* Message */}
        <h2 className='text-3xl md:text-4xl font-bold text-slate-900 mb-4'>
          عذراً، يبدو أننا تهنا في الطريق!
        </h2>
        <p className='text-slate-600 text-lg mb-10 max-w-lg mx-auto leading-relaxed'>
          الصفحة التي تحاول الوصول إليها قد تكون حذفت، أو تم تغيير اسمها، أو
          أنها غير متاحة حالياً.
        </p>

        {/* Action Buttons */}
        <div className='flex flex-col sm:flex-row items-center justify-center gap-4'>
          <Link
            href='/'
            className='w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-bold transition duration-300 shadow-lg hover:shadow-blue-500/30 flex items-center justify-center gap-2'
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-5 w-5'
              viewBox='0 0 20 20'
              fill='currentColor'
            >
              <path d='M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z' />
            </svg>
            العودة للرئيسية
          </Link>

          <Link
            href='/contact'
            className='w-full sm:w-auto bg-white border border-slate-200 hover:bg-slate-50 text-slate-700 px-8 py-4 rounded-xl font-bold transition duration-300 flex items-center justify-center gap-2'
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-5 w-5'
              viewBox='0 0 20 20'
              fill='currentColor'
            >
              <path d='M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z' />
              <path d='M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z' />
            </svg>
            تواصل معنا
          </Link>
        </div>

        {/* Footer Link */}
        <div className='mt-12 text-slate-400 text-sm'>
          هل تعتقد أن هذا خطأ؟{' '}
          <Link href='/contact' className='text-blue-500 hover:underline'>
            أبلغنا عن المشكلة
          </Link>
        </div>
      </div>
    </main>
  )
}
