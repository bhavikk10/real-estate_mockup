import { Quote } from "lucide-react";
import { motion } from "framer-motion";

export function Testimonials() {
  return (
    <section className="bg-charcoal py-16 sm:py-32 md:py-48 relative overflow-hidden flex items-center justify-center">
      {/* Background Image / Texture */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-charcoal/80 z-10" />
        <img 
          src="https://images.unsplash.com/photo-1600607688969-a5bfcd646154?ixlib=rb-4.0.3&auto=format&fit=crop&w=2800&q=80" 
          alt="Luxury Architecture" 
          className="w-full h-full object-cover grayscale opacity-30 mix-blend-overlay"
        />
      </div>

      <div className="max-w-5xl mx-auto px-6 relative z-10 text-center">
        <motion.div
           initial={{ opacity: 0, scale: 0.8 }}
           whileInView={{ opacity: 1, scale: 1 }}
           transition={{ duration: 1, ease: "easeOut" }}
           viewport={{ once: true }}
           className="mb-6 sm:mb-12 flex justify-center"
        >
           <Quote className="text-gold/50 w-10 h-10 sm:w-20 sm:h-20 md:w-32 md:h-32 transform -scale-x-100 drop-shadow-2xl" strokeWidth={0.5} />
        </motion.div>

        <motion.h3 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
          viewport={{ once: true }}
          className="text-lg sm:text-3xl md:text-5xl lg:text-6xl font-serif text-ivory/90 leading-relaxed md:leading-[1.4] mb-8 sm:mb-16 tracking-wide"
        >
          "Gogia Group orchestrated the purchase of our Golf Course Road asset seamlessly, handling everything from initial screening to legal diligence with absolute discretion."
        </motion.h3>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          viewport={{ once: true }}
          className="flex flex-col items-center"
        >
           <div className="w-12 sm:w-16 h-[1px] bg-gold mb-4 sm:mb-8 hidden md:block"></div>
           <div className="text-ivory font-serif text-base sm:text-xl tracking-widest uppercase mb-1.5 sm:mb-2">R. Mehta</div>
           <div className="text-gold text-[9px] sm:text-[10px] uppercase font-sans tracking-[0.25em] sm:tracking-[0.3em] font-semibold">Technology Founder & Real Estate Investor</div>
        </motion.div>
      </div>
    </section>
  );
}
