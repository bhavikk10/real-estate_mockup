import { collections } from "../data/mockData";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import Tilt from 'react-parallax-tilt';

export function PrivateCollections({ onOpenModal }: { onOpenModal: (property: any) => void }) {
  return (
    <section id="collections" className="bg-charcoal py-32 border-b border-charcoal-border overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="mb-20 text-center max-w-3xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="text-[11px] font-sans uppercase tracking-[0.3em] text-gold mb-6 font-semibold flex items-center justify-center gap-4"
          >
            <span className="w-8 h-[1px] bg-gold"></span>
            Curated Portfolios
            <span className="w-8 h-[1px] bg-gold"></span>
          </motion.h2>
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl lg:text-6xl font-serif text-ivory tracking-tight leading-[1.1]"
          >
            Private Collections
          </motion.h3>
        </div>

        {/* Mobile Horizontal Snap-Scroll Carousel (Card Width 72vw, Height 340px with Peek) */}
        <div className="sm:hidden flex overflow-x-auto snap-x-mandatory gap-4 -mx-6 px-6 no-scrollbar pb-4">
          {collections.map((collection, idx) => (
            <div 
              key={idx}
              className="snap-start shrink-0 w-[72vw] h-[340px] relative rounded-[4px] overflow-hidden border border-charcoal-border bg-charcoal-light cursor-pointer active:scale-[0.98] transition-transform shadow-md"
              onClick={() => onOpenModal({
                id: `collection-${idx}`,
                title: collection.title,
                price: collection.startingPrice,
                location: "Exclusive Localities, Delhi NCR",
                area: "Variable Area",
                beds: 4,
                baths: 4,
                status: "Portfolio",
                image: collection.image,
                tags: ["Private", "Curated"],
                description: collection.description,
                type: "Private Portfolio",
                amenities: ["Tailored Viewing", "Discreet Handling", "Prime Selection", "Turnkey Options"],
                gallery: [collection.image, "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80", "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"]
              })}
            >
              <img 
                src={collection.image} 
                alt={collection.title} 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
              
              {/* Verified Badge Top-Left Glassmorphism Pill */}
              <div className="absolute top-3 left-3 bg-black/75 backdrop-blur-md border border-white/20 text-gold text-[10px] font-mono px-3 py-1 rounded-full uppercase tracking-wider font-semibold">
                ✓ {collection.optionsCount} Verified
              </div>

              {/* Title and Price Bottom Left */}
              <div className="absolute bottom-4 left-4 right-4 text-left">
                <h4 className="text-xl font-serif text-white mb-1 leading-snug drop-shadow-md">
                  {collection.title}
                </h4>
                <div className="text-gold font-bold text-sm font-serif">
                  From {collection.startingPrice}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Desktop Grid Layout */}
        <div className="hidden sm:grid grid-cols-2 lg:grid-cols-3 gap-8">
          {collections.map((collection, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: idx * 0.15, ease: [0.25, 0.1, 0.25, 1] }}
              viewport={{ once: true, margin: "-50px" }}
              className="group cursor-pointer flex flex-col h-full"
              onClick={() => onOpenModal({
                id: `collection-${idx}`,
                title: collection.title,
                price: collection.startingPrice,
                location: "Exclusive Localities, Delhi NCR",
                area: "Variable Area",
                beds: 4,
                baths: 4,
                status: "Portfolio",
                image: collection.image,
                tags: ["Private", "Curated"],
                description: collection.description,
                type: "Private Portfolio",
                amenities: ["Tailored Viewing", "Discreet Handling", "Prime Selection", "Turnkey Options"],
                gallery: [collection.image, "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80", "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"]
              })}
            >
              <Tilt tiltMaxAngleX={3.5} tiltMaxAngleY={3.5} scale={1.02} transitionSpeed={2500}>
                <div className="relative aspect-[4/5] sm:aspect-[3/4] overflow-hidden bg-charcoal-light border border-charcoal-border group-hover:border-gold transition-colors duration-500 mb-3 sm:mb-6 rounded-[2px] shadow-sm group-hover:shadow-md">
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-1000 z-10" />
                  <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-90 group-hover:opacity-80 transition-opacity duration-1000" />
                  
                  <img 
                    src={collection.image} 
                    alt={collection.title} 
                    className="w-full h-full object-cover transform scale-[1.03] group-hover:scale-110 transition-transform duration-[3s] ease-lux grayscale-[10%] group-hover:grayscale-0"
                  />
                  
                  <div className="absolute bottom-0 left-0 w-full p-5 sm:p-8 z-20 flex flex-col justify-end">
                    <div className="text-gold text-[9px] sm:text-[10px] uppercase tracking-[0.25em] font-semibold mb-2 sm:mb-3 flex items-center gap-2 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-700 ease-lux">
                      <span className="w-4 h-[1px] bg-gold hidden sm:block"></span>
                      {collection.optionsCount} Verified
                    </div>
                    <h4 className="text-xl sm:text-3xl lg:text-4xl font-serif text-white mb-1 leading-snug drop-shadow-lg transform translate-y-2 group-hover:translate-y-0 transition-transform duration-700 delay-75 ease-lux">
                      {collection.title}
                    </h4>
                  </div>
                </div>
              </Tilt>
              
              <div className="pl-4 sm:pl-5 border-l border-charcoal-border flex-1 flex flex-col justify-between">
                <p className="text-bone text-[11px] sm:text-sm font-light mb-4 sm:mb-6 leading-[1.8] line-clamp-2 md:line-clamp-3">
                  {collection.description}
                </p>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-2">
                  <div className="text-ivory font-medium flex flex-col gap-1 sm:block">
                    <span className="text-[9px] sm:text-[10px] uppercase tracking-[0.25em] text-muted sm:mr-3 font-semibold">From</span>
                    <span className="text-sm sm:text-base font-serif text-gold font-bold">{collection.startingPrice}</span>
                  </div>
                  <div className="text-gold flex items-center transform group-hover:translate-x-3 transition-transform duration-500 delay-100 ease-lux">
                    <ArrowUpRight size={16} className="sm:w-[20px] sm:h-[20px]" strokeWidth={1.5} />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
