export const metadata = {
  title: {
    absolute:
      'نسمات الجنوب – توريد مواد الطاقة والكهرباء في المملكة العربية السعودية',
  },
  description:
    'شركة نسمات الجنوب التجاريه: شريكك الموثوق لتوريد الكابلات والمحولات وأنظمة الإنارة والمواد الكهربائية للمشاريع الصناعية والتجارية في السعودية.',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title:
      'نسمات الجنوب – توريد مواد الطاقة والكهرباء في المملكة العربية السعودية',
    description:
      'شركة نسمات الجنوب التجاريه: شريكك الموثوق لتوريد الكابلات والمحولات وأنظمة الإنارة والمواد الكهربائية في السعودية.',
    url: '/',
    images: [
      {
        url: '/images/hero-truck.jpg',
        width: 1200,
        height: 630,
        alt: 'نسمات الجنوب – توريد مواد الطاقة والكهرباء',
      },
    ],
  },
  twitter: {
    title:
      'نسمات الجنوب – توريد مواد الطاقة والكهرباء في المملكة العربية السعودية',
    description:
      'شركة نسمات الجنوب التجاريه: شريكك الموثوق لتوريد الكابلات والمحولات وأنظمة الإنارة في السعودية.',
    images: ['/images/hero-truck.jpg'],
  },
}

import Commitment from './components/home/Commitment'
import ContactCTA from './components/home/ContactCTA'
import FAQ from './components/home/FAQ'
import Hero from './components/home/Hero'
import Portfolio from './components/home/Portfolio'
import RecentArticles from './components/home/RecentArticles'
import Solutions from './components/home/Solutions'
import Stats from './components/home/Stats'
import Testimonials from './components/home/Testimonials'
import ValueAdded from './components/home/ValueAdded'
import WhyUs from './components/home/WhyUs'

export default function Home() {
  return (
    <main className='flex flex-col min-h-screen'>
      <Hero />
      <Commitment />
      <Solutions />
      <WhyUs />
      <ValueAdded />
      <Portfolio />
      <Stats />
      <FAQ />
      <RecentArticles />
      <Testimonials />
      <ContactCTA />
    </main>
  )
}
