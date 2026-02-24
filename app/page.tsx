import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Showcase from './components/Showcase';
import CTA from './components/CTA';
import Footer from './components/Footer';

export default function Home() {
  return (
    <main className="relative selection:bg-orange-primary selection:text-white">
      {/* Noise Overlay */}
      <div className="noise-bg"></div>

      <Header />

      {/* Section 1: Hero (Odd - Navy) */}
      <Hero />

      {/* Section 2: Features (Even - Orange) */}
      <Features />

      {/* Section 3: Showcase (Odd - Navy) */}
      <Showcase />

      {/* Section 4: CTA (Even - Orange) */}
      <CTA />

      <Footer />
    </main>
  );
}
