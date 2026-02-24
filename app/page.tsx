import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Footer from './components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#000814] text-white selection:bg-orange-primary selection:text-white relative overflow-hidden">
      <div className="noise-bg"></div>

      <Header />
      <Hero />
      <Features />

      {/* Original CTA Section */}
      <section className="py-24 container mx-auto px-6 text-center relative z-10">
        <div className="gaussian-blur w-[500px] h-[500px] bg-navy-accent bottom-0 left-[20%] opacity-20"></div>
        <div className="glass-v2 p-12 md:p-20 rounded-[3rem] relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-orange-primary/10 blur-[80px] -mr-32 -mt-32"></div>
          <h2 className="text-3xl md:text-5xl font-bold mb-8">
            Siap untuk Transformasi <br />
            <span className="text-gradient">Sekolah Anda?</span>
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto mb-12">
            Gabung bersama ribuan sekolah lainnya yang telah mendigitalisasi sistem pendidikan mereka dengan UnelmaApp.
          </p>
          <button className="btn-orange px-10 py-4 rounded-xl font-bold text-lg">
            Hubungi Konsultan Kami
          </button>
        </div>
      </section>

      <Footer />
    </main>
  );
}
