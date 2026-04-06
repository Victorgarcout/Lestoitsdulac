import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Stats from '@/components/Stats';
import Constat from '@/components/Constat';
import Services from '@/components/Services';
import WhyUs from '@/components/WhyUs';
import Process from '@/components/Process';
import Team from '@/components/Team';
import OffreDecouverte from '@/components/OffreDecouverte';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import StickyEstimationCTA from '@/components/StickyEstimationCTA';

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Stats />
      <Constat />
      <Services />
      <WhyUs />
      <Process />
      <Team />
      <OffreDecouverte />
      <Contact />
      <Footer />
      <StickyEstimationCTA />
    </main>
  );
}
