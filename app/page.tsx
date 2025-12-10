import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import OProjektu from '@/components/OProjektu';
import Film from '@/components/Film';
import Supporters from '@/components/Supporters';
import Kontakt from '@/components/Kontakt';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-black">
      <Navbar />
      <Hero />
      <OProjektu />
      <Film />
      <Supporters />
      <Kontakt />
      <Footer />
    </main>
  );
}

