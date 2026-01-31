import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

export const Hero = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden bg-cream-silk">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://raw.githubusercontent.com/Glyphor-Fuse/velvet-hoof-manor/main/public/images/hero-manor.png" 
          alt="The Manor Estate" 
          className="h-full w-full object-cover brightness-90"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-racing-green/40" />
      </div>
      
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center">
        <motion.span 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-4 font-sans text-sm font-light uppercase tracking-[0.3em] text-white/90"
        >
          Established 1924 • Southlake, Texas
        </motion.span>
        
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-4xl font-serif text-6xl font-light text-white md:text-8xl lg:text-9xl"
        >
          Velvet Hoof <br />
          <span className="italic">& Manor</span>
        </motion.h1>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="mt-12 flex flex-col items-center gap-6"
        >
          <p className="max-w-md font-sans text-lg font-light text-white/80">
            A curated menagerie for the discerning equestrian. Where rural whimsy meets high-society prestige.
          </p>
          <button className="group flex items-center gap-3 border border-white/30 bg-white/10 px-8 py-4 font-sans text-sm uppercase tracking-widest text-white backdrop-blur-md transition-all hover:bg-white hover:text-racing-green">
            Arrange a Viewing
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </button>
        </motion.div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="h-12 w-[1px] bg-white/50" />
      </div>
    </section>
  );
};

export default Hero;
