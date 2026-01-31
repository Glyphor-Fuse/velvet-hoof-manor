import { Hero } from "@/components/Hero";
import { EditorialGallery } from "@/components/EditorialGallery";
import { GroomingScroll } from "@/components/GroomingScroll";
import { motion } from "motion/react";

const Index = () => {
  return (
    <main className="min-h-screen w-full bg-cream-silk selection:bg-gold selection:text-white">
      {/* Navigation */}
      <nav className="fixed top-0 z-50 flex w-full items-center justify-between px-8 py-6 mix-blend-difference">
        <div className="font-serif text-2xl text-white">V.H.M.</div>
        <div className="hidden gap-8 font-sans text-[10px] uppercase tracking-[0.3em] text-white md:flex">
          <a href="#" className="hover:text-gold transition-colors">The Manor</a>
          <a href="#" className="hover:text-gold transition-colors">Residents</a>
          <a href="#" className="hover:text-gold transition-colors">Experiences</a>
          <a href="#" className="hover:text-gold transition-colors">Booking</a>
        </div>
        <button className="border border-white px-6 py-2 font-sans text-[10px] uppercase tracking-widest text-white hover:bg-white hover:text-black transition-all">
          Reservations
        </button>
      </nav>

      <Hero />
      
      <EditorialGallery />

      <section className="bg-racing-green py-24 px-6 text-center text-cream-silk">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="mb-8 font-sans text-xs uppercase tracking-[0.5em]"
          >
            Digital Tactility
          </motion.div>
          <h2 className="font-serif text-4xl md:text-6xl mb-12">Brush away the wild. <br/> Discover the <span className="italic text-gold">Velvet</span>.</h2>
        </div>
      </section>

      <GroomingScroll />

      <footer className="bg-racing-green py-20 px-8 text-cream-silk border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-12 md:flex-row">
          <div className="text-center md:text-left">
            <h2 className="font-serif text-3xl">Velvet Hoof & Manor</h2>
            <p className="mt-2 font-sans text-xs uppercase tracking-widest opacity-50">Private Equestrian Estate • Southlake, TX</p>
          </div>
          
          <div className="flex gap-12 font-sans text-[10px] uppercase tracking-widest opacity-70">
            <div className="flex flex-col gap-2">
              <span className="text-gold opacity-100 mb-2">Social</span>
              <a href="#">Instagram</a>
              <a href="#">Vogue Farm</a>
            </div>
            <div className="flex flex-col gap-2">
              <span className="text-gold opacity-100 mb-2">Legal</span>
              <a href="#">Privacy</a>
              <a href="#">Terms</a>
            </div>
          </div>
        </div>
        <div className="mt-20 text-center font-sans text-[8px] uppercase tracking-[0.4em] opacity-30">
          © 2024 Velvet Hoof & Manor. All Rights Reserved.
        </div>
      </footer>
    </main>
  );
};

export default Index;