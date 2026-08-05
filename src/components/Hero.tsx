import { motion, useScroll, useTransform } from "framer-motion";
import { ChevronDown, MapPin, Building2, TrendingUp, Search, ArrowRight } from "lucide-react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, Parallax, Pagination } from 'swiper/modules';
import Tilt from 'react-parallax-tilt';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';

const heroImages = [
  "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=2800&q=80",
  "https://images.unsplash.com/photo-1613490908579-a56b2dd9b57b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2800&q=80",
  "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=2800&q=80"
];

const featuredHeroAssets = [
  { img: "https://images.unsplash.com/photo-1628624747186-a941c476b7ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80", title: "Panchsheel Park Builder Floor", location: "Panchsheel Park, South Delhi", price: "₹8.5 Cr" },
  { img: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80", title: "Chattarpur Farmhouse", location: "Chattarpur, Delhi", price: "₹22 Cr" },
  { img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80", title: "GK II Ground Floor", location: "Greater Kailash II, Delhi", price: "₹6.2 Cr" }
];

export function Hero({ onOpenModal }: { onOpenModal?: (property: any) => void }) {
  const { scrollY } = useScroll();
  const yImage = useTransform(scrollY, [0, 1000], [0, 200]);
  const opacityText = useTransform(scrollY, [0, 600], [1, 0]);
  const yText = useTransform(scrollY, [0, 600], [0, 150]);

  return (
    <>
    <section className="relative w-full overflow-hidden bg-charcoal h-[100svh] sm:h-auto sm:min-h-[105svh] flex flex-col justify-end">
      {/* Background Cinematic Image Carousel with Slow Pan/Zoom */}
      <motion.div 
        className="absolute inset-0 z-0 h-full w-full"
        style={{ y: yImage }}
      >
        <Swiper
          modules={[Autoplay, EffectFade, Parallax]}
          effect="fade"
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          speed={3000}
          allowTouchMove={false}
          className="h-full w-full"
        >
          {heroImages.map((src, index) => (
            <SwiperSlide key={index} className="overflow-hidden h-full w-full">
              <motion.div
                className="w-full h-full bg-cover bg-center"
                style={{ backgroundImage: `url(${src})` }}
                initial={{ scale: 1.1, x: '-2%' }}
                animate={{ scale: 1, x: '0%' }}
                transition={{ duration: 24, ease: "linear", repeat: Infinity, repeatType: "reverse" }}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </motion.div>
      {/* Vignette and Gradients */}
      <div className="absolute inset-0 z-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-charcoal/40 to-charcoal/90 hidden sm:block" />
      <div className="absolute inset-0 z-10 bg-gradient-to-t from-charcoal via-charcoal/80 sm:via-charcoal/70 to-transparent" />
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-charcoal/90 via-charcoal/40 to-transparent hidden sm:block" />
      
      {/* Mobile-specific overlays to guarantee readability */}
      <div className="absolute inset-0 z-10 bg-black/20 sm:hidden block" />
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-charcoal/95 to-transparent z-10 sm:hidden block" />
      
      {/* --- DESKTOP HERO CONTENT (Hidden on Mobile) --- */}
      <motion.div 
        className="hidden sm:flex relative z-20 max-w-[1400px] mx-auto px-12 w-full pt-[25vh] pb-32 flex-col lg:flex-row justify-between items-start flex-1"
        style={{ opacity: opacityText, y: yText }}
      >
        <div className="max-w-3xl flex flex-col h-full justify-start">
          
          <motion.div 
            className="mb-4 flex items-center gap-4 text-[10px] text-ivory/90 uppercase tracking-[0.2em] font-medium"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <span className="text-gold tracking-[0.3em]">PRIVATE REAL ESTATE BROKERAGE</span>
          </motion.div>
          
          <motion.h1 
            className="text-5xl md:text-7xl lg:text-[5.25rem] font-serif tracking-tighter text-ivory leading-[1.1] drop-shadow-2xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          >
            South Delhi's Most Trusted Property Group
          </motion.h1>
          
          <motion.p 
            className="mt-8 text-xl text-gold/90 max-w-xl font-sans font-light tracking-wide leading-relaxed drop-shadow-md uppercase text-sm sm:text-base"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
          >
            Builder Floors · Farmhouses · Golf Course Residences
          </motion.p>
          
          <motion.div 
            className="mt-12 flex flex-row gap-4 w-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1, ease: [0.22, 1, 0.36, 1] }}
          >
            <a 
              href="#speak-with-us" 
              className="bg-gold text-charcoal px-8 py-5 text-[10px] font-bold uppercase tracking-[0.2em] text-center hover:bg-ivory transition-colors duration-500 relative overflow-hidden active:scale-[0.98] border border-gold"
            >
              REQUEST A CALLBACK
            </a>
            <a 
              href="#properties" 
              className="bg-charcoal/60 backdrop-blur-xl border border-white/20 text-ivory px-8 py-5 text-[10px] font-bold uppercase tracking-[0.2em] text-center hover:bg-white/10 transition-colors duration-500 active:scale-[0.98]"
            >
              VIEW PROPERTIES
            </a>
          </motion.div>
        </div>

        {/* Floating Modules Right Side - Desktop Only */}
        <div className="flex flex-col gap-6 w-[320px] mt-0" style={{ perspective: '1000px' }}>
          
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="w-full"
          >
            <Tilt tiltMaxAngleX={6} tiltMaxAngleY={6} scale={1.02} transitionSpeed={2500} className="p-6 border border-white/10 bg-charcoal/40 backdrop-blur-2xl relative overflow-hidden group hover:border-gold/30 transition-colors duration-500 block">
              <div className="absolute top-0 right-0 p-4 opacity-20 group-hover:opacity-100 transition-opacity z-10 pointer-events-none">
                <Building2 className="text-gold" size={40} strokeWidth={1} />
              </div>
              <div className="text-gold text-[10px] uppercase tracking-[0.2em] mb-4 relative z-10">Featured Asset</div>
              
              <div className="w-full h-auto relative mb-0 overflow-hidden group cursor-pointer border-0">
                 <Swiper
                  modules={[Autoplay, EffectFade]}
                  effect="fade"
                  fadeEffect={{ crossFade: true }}
                  autoplay={{ delay: 4000, disableOnInteraction: false }}
                  speed={1500}
                  allowTouchMove={false}
                  className="w-full h-full"
                >
                  {featuredHeroAssets.map((asset, idx) => (
                    <SwiperSlide 
                      key={idx}
                      onClick={() => onOpenModal && onOpenModal({
                        id: `hero-desktop-${idx}`,
                        title: asset.title,
                        price: asset.price,
                        location: asset.location,
                        area: "Exclusive Details Available on Request",
                        beds: 4,
                        baths: 4,
                        status: "Featured Portfolio",
                        image: asset.img,
                        tags: ["Premium", "Off-Market"],
                        description: "A marquee asset offering unparalleled grand living. Private viewings arranged via discreet channels.",
                        type: "Signature Asset",
                        amenities: ["Bespoke Concierge", "Unrivaled Security", "Tailored Finishes"],
                        gallery: [asset.img]
                      })}
                    >
                      <div className="w-full h-32 relative mb-4 overflow-hidden border border-white/5 shrink-0 bg-[#0A0A0A]">
                        <img src={asset.img} alt={asset.title} className="w-full h-full object-cover grayscale-[20%] group-hover:scale-105 transition-transform duration-700" />
                      </div>
                      <div className="flex flex-col h-12 bg-transparent shrink-0">
                        <h3 className="font-serif text-ivory text-xl mb-1 truncate drop-shadow-md">{asset.title}</h3>
                        <p className="text-muted text-xs truncate drop-shadow-sm">{asset.price}</p>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </Tilt>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.9 }}
            className="w-full"
          >
            <Tilt tiltMaxAngleX={6} tiltMaxAngleY={6} scale={1.02} transitionSpeed={2500} className="p-6 border border-white/10 bg-charcoal/40 backdrop-blur-xl flex items-start gap-4">
              <div className="w-10 h-10 border border-gold/30 flex items-center justify-center shrink-0">
                 <TrendingUp className="text-gold" size={18} />
              </div>
              <div>
                 <div className="text-xs text-ivory font-medium mb-1">Market Insight</div>
                 <div className="text-[10px] text-muted leading-relaxed">South Delhi Builder Floors ↑ 12% YoY</div>
              </div>
            </Tilt>
          </motion.div>
        </div>
      </motion.div>

      {/* --- MOBILE HERO CONTENT (Hidden on Desktop) --- */}
      <motion.div 
        className="sm:hidden absolute inset-0 z-20 flex flex-col justify-between pt-[72px] pb-[16px] px-5 h-[100svh]"
      >
         <motion.div 
           className="w-full flex flex-col justify-center my-auto"
           initial={{ opacity: 0, y: 15 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.5 }}
         >
            <div className="font-mono text-[#8C8C8C] text-[11px] uppercase tracking-wider mb-2.5 text-left font-normal">
              SOUTH DELHI'S TRUSTED PROPERTY GROUP
            </div>
            
            <h1 className="text-[34px] font-serif tracking-tight text-ivory leading-[1.1] mb-3 text-left max-w-full drop-shadow-xl">
              South Delhi's Most Trusted Property Group
            </h1>
            
            <p className="text-bone/70 text-[14px] font-sans font-light tracking-wide leading-snug mb-6 text-left max-w-full">
              Builder Floors · Farmhouses · Golf Course Residences
            </p>

            <div className="flex flex-col gap-3 w-full mb-6 mt-7">
              <a 
                href="#properties" 
                className="w-full h-[52px] bg-white text-black font-sans font-bold text-xs uppercase tracking-[0.2em] flex items-center justify-center active:bg-gray-200 transition-colors rounded-[2px]"
              >
                VIEW PROPERTIES
              </a>
              <a 
                href="#speak-with-us" 
                className="w-full h-[52px] bg-transparent border border-white text-white font-sans font-bold text-xs uppercase tracking-[0.2em] flex items-center justify-center active:bg-white/10 transition-colors rounded-[2px]"
              >
                REQUEST A CALLBACK
              </a>
            </div>

            {/* Featured Property Widget (Full Width Swipeable Card) */}
            <div className="w-full border border-white/10 bg-[#111111]/90 shadow-2xl backdrop-blur-xl rounded-[4px] overflow-hidden">
               <Swiper
                  modules={[Autoplay, EffectFade, Pagination]}
                  effect="fade"
                  fadeEffect={{ crossFade: true }}
                  autoplay={{ delay: 4000, disableOnInteraction: false }}
                  pagination={{ clickable: true }}
                  loop={true}
                  className="w-full h-full mobile-dossier-swiper"
                >
                  {featuredHeroAssets.map((asset, idx) => (
                    <SwiperSlide key={idx} className="bg-[#111111]">
                      <div 
                        className="p-3 flex gap-3.5 items-center cursor-pointer active:bg-white/5 transition-colors"
                        onClick={() => onOpenModal && onOpenModal({
                          id: `hero-${idx}`,
                          title: asset.title,
                          price: asset.price,
                          location: asset.location,
                          area: "Exclusive Details Available on Request",
                          beds: 4,
                          baths: 4,
                          status: "Featured Portfolio",
                          image: asset.img,
                          tags: ["Ready to Move", "Vastu Compliant"],
                          description: "A marquee asset offering unparalleled grand living in South Delhi.",
                          type: "Signature Asset",
                          amenities: ["Ready to Move", "Vastu Compliant", "Prime Location"],
                          gallery: [asset.img]
                        })}
                      >
                        <div className="w-[72px] h-[72px] shrink-0 overflow-hidden relative rounded-[2px]">
                           <img 
                             src={asset.img} 
                             alt={asset.title} 
                             className="w-full h-full object-cover" 
                           />
                        </div>
                        <div className="flex flex-col justify-center flex-1 min-w-0 pr-2">
                           <div className="text-gold text-[9px] uppercase tracking-[0.2em] font-semibold mb-0.5">Featured Asset</div>
                           <h3 className="font-serif text-ivory text-[14px] leading-tight mb-1 truncate">{asset.title}</h3>
                           <div className="text-bone/60 text-[11px] truncate flex items-center gap-1">
                             <MapPin size={10} className="text-gold" />
                             {asset.location}
                           </div>
                           <div className="text-gold font-serif text-[13px] font-semibold mt-1">{asset.price}</div>
                        </div>
                      </div>
                    </SwiperSlide>
                  ))}
               </Swiper>
            </div>
         </motion.div>
      </motion.div>
      {/* Scroll Down Indicator */}
      <motion.div 
        className="absolute bottom-8 left-6 z-20 hidden md:flex items-center gap-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
      >
        <div className="w-[1px] h-12 bg-white/20 relative overflow-hidden">
          <motion.div 
            className="absolute top-0 left-0 w-full h-1/2 bg-gold"
            animate={{ top: ['-50%', '100%'] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
          />
        </div>
        <span className="text-[9px] uppercase tracking-[0.3em] text-ivory/40 rotate-180" style={{ writingMode: 'vertical-rl' }}>Scroll</span>
      </motion.div>
    </section>
    </>
  );
}
