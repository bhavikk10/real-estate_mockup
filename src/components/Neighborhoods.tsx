import { locations } from "../data/mockData";
import { ArrowRight, Map } from "lucide-react";
import { motion } from "framer-motion";

export function Neighborhoods() {
  return (
    <section className="bg-charcoal py-32 border-b border-charcoal-border">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 mb-20 items-end">
          <motion.div 
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.8, ease: "easeOut" }}
             viewport={{ once: true }}
             className="flex-1"
          >
            <h2 className="text-[11px] font-sans uppercase tracking-[0.3em] text-gold mb-6 font-semibold flex items-center gap-4">
              <span className="w-8 h-[1px] bg-gold"></span>
              Micro-Market Intelligence
            </h2>
            <h3 className="text-4xl md:text-5xl lg:text-7xl font-serif text-ivory tracking-tight leading-[1.05]">
              Prime Locations
            </h3>
          </motion.div>
          <motion.div 
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
             viewport={{ once: true }}
             className="flex-1 pt-6 lg:border-l border-charcoal-border lg:pl-16"
          >
            <p className="text-bone leading-[1.8] font-sans font-light text-base lg:text-lg mb-8 max-w-lg">
              Delhi NCR is vast. We specialize exclusively in the region's most prestigious and high-growth corridors. Each market requires distinct on-the-ground intelligence.
            </p>
            <a href="#" className="inline-flex items-center gap-3 text-gold hover:text-ivory transition-colors duration-300 text-[11px] font-sans uppercase tracking-[0.2em] font-semibold">
              <Map size={14} /> Request Area Reports <ArrowRight size={14} />
            </a>
          </motion.div>
        </div>

        {/* Mobile 2x2 Grid Layout / Desktop Mosaic Grid */}
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-[1px] border-y md:border border-charcoal-border bg-transparent md:bg-charcoal-border">
          {locations.map((loc, idx) => {
            // Mosaic layout logic for desktop
            let colSpanClasses = "col-span-1 md:col-span-1 lg:col-span-1";
            let heightClass = "h-[220px] sm:h-[300px] md:h-[450px]";
            
            if (idx === 0) { colSpanClasses = "col-span-1 md:col-span-2 lg:col-span-2"; heightClass="h-[220px] sm:h-[300px] md:h-[550px]"; }
            else if (idx === 1) { colSpanClasses = "col-span-1 md:col-span-2 lg:col-span-2"; heightClass="h-[220px] sm:h-[300px] md:h-[550px]"; }
            
            return (
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
              key={idx} 
              className={`group relative ${colSpanClasses} ${heightClass} overflow-hidden cursor-pointer bg-charcoal rounded-[2px] shrink-0 border border-charcoal-border md:border-none shadow-sm`}
            >
              <div className="absolute inset-0 bg-black/30 group-hover:bg-transparent transition-colors duration-500 z-10" />
              
              <img 
                src={loc.image} 
                alt={loc.title} 
                className="w-full h-full object-cover transform scale-100 group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              
              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent z-10"></div>

              <div className="absolute inset-0 z-20 p-3.5 sm:p-6 flex flex-col justify-between">
                <div className="flex justify-between items-center">
                  <span className="text-[9px] uppercase tracking-[0.2em] font-mono font-semibold text-gold">
                    0{idx + 1}
                  </span>
                  <div className="w-6 h-6 rounded-full bg-gold/90 flex items-center justify-center text-charcoal">
                    <ArrowRight size={12} className="-rotate-45" />
                  </div>
                </div>

                <div>
                  <h4 className="text-sm sm:text-2xl font-serif text-ivory mb-1 drop-shadow-md leading-tight">
                    {loc.title}
                  </h4>
                  
                  <div className="text-[10px] text-gold font-sans font-medium">
                    {loc.ticketSize}
                  </div>
                </div>
              </div>
            </motion.div>
          )})}
        </div>
      </div>
    </section>
  );
}
