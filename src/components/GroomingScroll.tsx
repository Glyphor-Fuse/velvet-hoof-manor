import { useState, useRef, useEffect } from 'react';
import { motion, useMotionValue, useSpring } from "motion/react";

export const GroomingScroll = () => {
  const [isHovered, setIsHovered] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 150 };
  const springX = useSpring(mouseX, springConfig);
  const springY = useSpring(mouseY, springConfig);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      mouseX.set(e.clientX - rect.left);
      mouseY.set(e.clientY - rect.top);
    }
  };

  return (
    <section 
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative h-[80vh] w-full overflow-hidden bg-racing-green cursor-none"
    >
      {/* Base Layer: The "Groomed" State with Links */}
      <div className="absolute inset-0 flex flex-col items-center justify-center bg-cream-silk">
        <div className="text-center">
          <h3 className="font-serif text-4xl text-racing-green mb-6">The Royal Treatment</h3>
          <div className="flex gap-12">
            {['Inquiry', 'Membership', 'Private Gala'].map((item) => (
              <a 
                key={item}
                href="#" 
                className="font-sans text-sm uppercase tracking-tighter text-racing-green/60 hover:text-racing-green transition-colors border-b border-racing-green/20 pb-2"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Top Layer: The "Shaggy" Fur */}
      <motion.div 
        className="absolute inset-0 z-10 pointer-events-none"
        style={{
          WebkitMaskImage: `radial-gradient(circle 180px at ${springX}px ${springY}px, transparent 100%, black 100%)`,
          maskImage: `radial-gradient(circle 180px at ${springX}px ${springY}px, transparent 100%, black 100%)`,
        }}
      >
        <img 
          src="https://raw.githubusercontent.com/Glyphor-Fuse/velvet-hoof-manor/main/public/images/highland-cow-groom.png" 
          alt="Shaggy Highland Fur" 
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/20" />
      </motion.div>

      {/* Custom Brush Cursor */}
      <motion.div
        className="fixed z-50 pointer-events-none h-24 w-24 flex items-center justify-center"
        style={{
          left: springX,
          top: springY,
          x: "-50%",
          y: "-50%",
          display: isHovered ? 'flex' : 'none'
        }}
      >
        <div className="h-full w-full border border-gold/50 rounded-full animate-pulse flex items-center justify-center">
          <span className="text-[10px] uppercase tracking-widest text-gold font-bold">Brush</span>
        </div>
      </motion.div>

      <div className="absolute bottom-12 left-12 z-20 max-w-xs">
        <p className="font-sans text-xs uppercase tracking-[0.2em] text-white">
          Interactive: Groom the coat to reveal the manor's secrets.
        </p>
      </div>
    </section>
  );
};

export default GroomingScroll;
