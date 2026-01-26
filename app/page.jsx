import Commitment from './components/home/Commitment'
import ContactCTA from './components/home/ContactCTA'
import Hero from './components/home/Hero'
import Solutions from './components/home/Solutions'
import Stats from './components/home/Stats'
import Testimonials from './components/home/Testimonials'
import ValueAdded from './components/home/ValueAdded'
import WhyUs from './components/home/WhyUs'
import Portfolio from './portfolio/page.js'

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
      <Testimonials />
      <ContactCTA />
    </main>
  )
}
