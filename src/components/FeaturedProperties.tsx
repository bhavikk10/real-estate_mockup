import { properties } from "../data/mockData";
import { BedDouble, Bath, ArrowUpRight, Maximize2 } from "lucide-react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export function FeaturedProperties({ onOpenModal }: { onOpenModal: (property: any) => void }) {
  return (
    <section id="properties" className="bg-charcoal py-32 border-b border-charcoal-border overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="mb-20 md:flex justify-between items-end">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="max-w-2xl"
          >
            <h2 className="text-[11px] font-sans uppercase tracking-[0.3em] text-gold mb-6 font-semibold flex items-center gap-4">
              <span className="w-8 h-[1px] bg-gold"></span>
              Exclusively Listed
            </h2>
            <h3 className="text-4xl md:text-5xl lg:text-[4rem] font-serif text-ivory tracking-tight leading-[1.1]">Featured Properties</h3>
          </motion.div>
          <motion.a 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            href="#speak-with-us" 
            className="hidden md:flex items-center gap-3 text-bone hover:text-gold transition-colors duration-300 mt-6 text-[11px] font-sans uppercase tracking-[0.2em] font-semibold group"
          >
            View Complete Inventory 
            <span className="w-8 h-8 rounded-full border border-charcoal-border flex items-center justify-center group-hover:border-gold group-hover:bg-gold group-hover:text-charcoal transition-all duration-300">
              <ArrowUpRight size={14} />
            </span>
          </motion.a>
        </div>

        {/* 3D Coverflow Carousel */}
        <motion.div
           initial={{ opacity: 0 }}
           whileInView={{ opacity: 1 }}
           transition={{ duration: 1.5 }}
           viewport={{ once: true }}
           className="w-full relative"
        >
          <Swiper
            effect={'coverflow'}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={'auto'}
            loop={true}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}
            coverflowEffect={{
              rotate: 30,
              stretch: 0,
              depth: 250,
              modifier: 1,
              slideShadows: true,
            }}
            pagination={{ clickable: true }}
            modules={[EffectCoverflow, Pagination, Autoplay]}
            className="w-full py-10"
          >
            {properties.map((property, idx) => (
              <SwiperSlide key={property.id} className="w-[90%] sm:w-[85%] md:w-[60%] lg:w-[45%]">
                <div 
                  className="group cursor-pointer relative flex flex-col h-[500px] sm:h-[600px] border border-charcoal-border bg-charcoal-light shadow-card group-hover:shadow-card-hover transition-shadow duration-500 rounded-[2px]"
                  onClick={() => onOpenModal(property)}
                >
                  {/* Visual Container */}
                  <div className="relative overflow-hidden w-full h-full bg-charcoal-light">
                    <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-700 z-10" />
                    
                    {/* Subtle Gradient Overlays */}
                    <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/85 via-black/30 to-transparent opacity-90 group-hover:opacity-95 transition-opacity duration-700" />
  
                    <img 
                      src={property.image} 
                      alt={property.title} 
                      className="w-full h-full object-cover transform scale-100 group-hover:scale-110 transition-transform duration-[3s] ease-out"
                    />
                    
                    {/* Metadata Chips - Top */}
                    <div className="absolute top-6 left-6 z-20 flex flex-wrap gap-2">
                      <div className="bg-black/75 backdrop-blur-md text-white text-[9px] uppercase tracking-[0.2em] px-3 py-1.5 border border-white/20 rounded-[2px]">
                        {property.status}
                      </div>
                      {property.tags.slice(0,1).map(tag => (
                        <div key={tag} className="bg-gold text-charcoal text-[9px] uppercase tracking-[0.2em] px-3 py-1.5 font-bold rounded-[2px]">
                          {tag}
                        </div>
                      ))}
                    </div>
  
                    {/* Content - Bottom */}
                    <div className="absolute bottom-0 left-0 w-full p-6 sm:p-8 z-20 flex flex-col justify-end transform translate-y-0 sm:translate-y-6 group-hover:translate-y-0 transition-transform duration-700 ease-out">
                      <h4 className="font-serif text-2xl sm:text-3xl md:text-4xl text-white mb-2 sm:mb-3 group-hover:text-gold transition-colors duration-500 leading-tight drop-shadow-lg">
                        {property.title}
                      </h4>
                      
                      <div className="flex flex-wrap items-center gap-3 sm:gap-4 text-white/90 text-xs sm:text-sm font-light mb-4 sm:mb-6">
                        <span>{property.location}</span>
                        <span className="w-1.5 h-1.5 rounded-full bg-gold"></span>
                        <span className="font-bold text-gold text-base">{property.price}</span>
                      </div>
  
                      {/* Hidden details that slide up on hover */}
                      <div className="overflow-hidden">
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between opacity-100 sm:opacity-0 group-hover:opacity-100 transform translate-y-0 sm:translate-y-full group-hover:translate-y-0 transition-all duration-700 ease-out border-t border-white/20 pt-4 sm:pt-6 gap-4 sm:gap-0">
                          <div className="flex items-center gap-4 sm:gap-6 text-white/90 text-[10px] sm:text-xs uppercase tracking-widest font-medium">
                            <span className="flex items-center gap-1.5 sm:gap-2"><BedDouble size={14} className="sm:w-4 sm:h-4 text-gold" /> {property.beds || '-'}</span>
                            <span className="flex items-center gap-1.5 sm:gap-2"><Bath size={14} className="sm:w-4 sm:h-4 text-gold" /> {property.baths || '-'}</span>
                            <span className="flex items-center gap-1.5 sm:gap-2"><Maximize2 size={12} className="sm:w-3.5 sm:h-3.5 text-gold" /> {property.area}</span>
                          </div>
                          
                          <button 
                            className="sm:hidden flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white py-3 rounded-none text-[10px] uppercase tracking-[0.2em] font-semibold w-full border border-white/20"
                            onClick={(e) => { e.stopPropagation(); onOpenModal(property); }}
                          >
                            View Details <ArrowUpRight size={14} />
                          </button>

                          <div className="hidden sm:flex items-center gap-2 text-gold text-[10px] uppercase tracking-[0.2em] font-semibold hover:text-white transition-colors">
                            View Details <ArrowUpRight size={14} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
        
        <div className="mt-16 md:hidden flex justify-center">
           <button 
            onClick={() => {}} 
            className="flex items-center justify-center gap-3 text-bone hover:text-gold transition-colors duration-300 text-[11px] font-sans uppercase tracking-[0.2em] font-semibold border border-white/20 hover:border-gold px-8 py-4 w-full"
          >
            View Complete Inventory <ArrowUpRight size={14} />
          </button>
        </div>
      </div>
    </section>
  );
}
