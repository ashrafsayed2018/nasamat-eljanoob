import Hero from './components/home/Hero';
import Commitment from './components/home/Commitment';
import Solutions from './components/home/Solutions';
import WhyUs from './components/home/WhyUs';
import ValueAdded from './components/home/ValueAdded';
import Stats from './components/home/Stats';
import Testimonials from './components/home/Testimonials';
import ContactCTA from './components/home/ContactCTA';

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      <Hero />
      <Commitment />
      <Solutions />
      <WhyUs />
      <ValueAdded />
      <Stats />
      <Testimonials />
      <ContactCTA />
    </main>
  );
}
