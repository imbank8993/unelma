import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Footer from './components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-navy dark:bg-bg-dark text-white selection:bg-orange-primary selection:text-white">
      <Header />
      <Hero />
      <Features />
      <section className="py-24 container mx-auto px-6 text-center">
        <div className="glass-effect p-12 md:p-20 rounded-[3rem] relative overflow-hidden">
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
