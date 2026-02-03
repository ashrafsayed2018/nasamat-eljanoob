import Link from 'next/link'
import '../styles/globals.css'
import FloatingButtons from './components/FloatingButtons'
import Header from './components/Header'

export const metadata = {
  title: 'شركة نسمات الجنوب التجاريه لتوريد مواد الطاقه',
  description:
    'موقع شركة نسمات الجنوب التجاريه لتوريد مواد الطاقه وحلول الكهرباء في المملكة العربية السعودية.',
  icons: {
    icon: '/images/hero-truck.jpg',
    shortcut: '/images/hero-truck.jpg',
    apple: '/images/hero-truck.jpg',
  },
  verification: {
    google:
      'google-site-verification" content="1ctjCuEaI818e3wFn-vWfhQhi0-G26a7mBz3W0TNMnw', // استبدل هذا النص برمز التحقق الخاص بك من Google Search Console
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang='ar' dir='rtl' suppressHydrationWarning>
      <body className='min-h-screen flex flex-col bg-gray-50 text-gray-900 font-sans'>
        {/* Header / Navbar */}
        <Header />

        {/* Floating Buttons */}
        <FloatingButtons />

        {/* Main Content */}
        <main className='flex-grow container mx-auto px-4 py-8'>
          {children}
        </main>

        {/* Footer */}
        <footer className='bg-slate-900 text-slate-300 py-10 border-t border-slate-800'>
          <div className='container mx-auto px-4 grid md:grid-cols-3 gap-8 text-center md:text-right'>
            <div>
              <h3 className='text-white text-lg font-bold mb-4 border-b border-blue-500 inline-block pb-2'>
                نسمات الجنوب
              </h3>
              <p className='leading-relaxed text-sm'>
                نسمات الجنوب شريكك الاستراتيجي في توريد مواد الطاقة، الكابلات،
                المحولات، وحلول الإنارة للمشاريع الصناعية والتجارية.
              </p>
            </div>
            <div>
              <h3 className='text-white text-lg font-bold mb-4 border-b border-blue-500 inline-block pb-2'>
                روابط هامة
              </h3>
              <ul className='space-y-2 text-sm'>
                <li>
                  <Link href='/about' className='hover:text-blue-400'>
                    من نحن
                  </Link>
                </li>
                <li>
                  <Link href='/services' className='hover:text-blue-400'>
                    خدماتنا
                  </Link>
                </li>
                <li>
                  <Link href='/portfolio' className='hover:text-blue-400'>
                    أعمالنا
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className='text-white text-lg font-bold mb-4 border-b border-blue-500 inline-block pb-2'>
                بيانات التواصل
              </h3>
              <div className='space-y-2 text-sm' dir='ltr'>
                <p className='flex items-center justify-center md:justify-end gap-2'>
                  <span className='text-blue-400'>📞</span> +966 54 582 9769
                </p>
                <p className='flex items-center justify-center md:justify-end gap-2'>
                  <span className='text-blue-400'>📱</span> +966 53 030 5352
                </p>
                <p className='flex items-center justify-center md:justify-end gap-2'>
                  <span className='text-blue-400'>✉️</span> asdqlan2@gmail.com
                </p>
              </div>
            </div>
          </div>
          <div className='text-center mt-10 text-xs text-slate-500'>
            <p>
              &copy; {new Date().getFullYear()} شركة نسمات الجنوب التجاريه. جميع
              الحقوق محفوظة.
            </p>
          </div>
        </footer>
      </body>
    </html>
  )
}
