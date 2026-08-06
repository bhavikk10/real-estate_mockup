import { X, MapPin, BedDouble, Bath, Car, Maximize, CalendarCheck, Phone, MessageCircle } from "lucide-react";
import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function PropertyModal({ property, onClose }: { property: any, onClose: () => void }) {
  
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  if (!property) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-0 md:p-6 lg:p-12">
        {/* Backdrop */}
        <motion.div 
          className="absolute inset-0 bg-charcoal/95 backdrop-blur-xl cursor-pointer"
          onClick={onClose}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        />
        
        {/* Modal / Bottom Sheet Content */}
        <motion.div 
          className="relative z-10 w-full h-[92vh] md:h-full mt-auto md:mt-0 bg-charcoal-light md:shadow-2xl flex flex-col md:flex-row overflow-hidden md:border border-charcoal-border rounded-t-3xl md:rounded-none will-change-transform transform-gpu"
          initial={{ opacity: 0, y: "100%" }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: "100%" }}
          transition={{ type: "spring", damping: 28, stiffness: 320, mass: 0.8 }}
          drag="y"
          dragConstraints={{ top: 0 }}
          dragElastic={0.15}
          dragSnapToOrigin={true}
          onDragEnd={(e, info) => {
            if (info.offset.y > 80 || info.velocity.y > 300) {
              onClose();
            }
          }}
        >
          {/* Mobile Top Drag Handle Pill */}
          <div className="w-12 h-1.5 bg-gray-400/80 rounded-full mx-auto my-2.5 shrink-0 md:hidden z-50 cursor-grab active:cursor-grabbing touch-none"></div>

          {/* Top-Right Fixed X Button (48x48 Touch Target) */}
          <button 
            onClick={onClose}
            aria-label="Close modal"
            className="absolute top-3 right-3 md:top-8 md:right-8 z-50 w-12 h-12 flex items-center justify-center bg-black/60 hover:bg-gold text-white hover:text-charcoal rounded-full backdrop-blur-md transition-all duration-300"
          >
            <X size={22} strokeWidth={1.5} />
          </button>

          {/* Image Gallery */}
          <div className="w-full md:w-[55%] h-[240px] sm:h-[350px] md:h-full relative bg-charcoal shrink-0">
            <img 
              src={property.image} 
              alt={property.title} 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80 md:hidden" />
            
            {/* Gallery Counter Top-Right */}
            <div className="absolute top-4 left-4 bg-black/75 backdrop-blur-md text-white text-[11px] font-mono px-3 py-1 border border-white/20 rounded-[2px]">
              1 / {property.gallery?.length || 1}
            </div>
          </div>

          {/* Right Side - Details Container */}
          <div className="w-full md:w-[45%] flex-1 overflow-y-auto no-scrollbar relative bg-charcoal-light pb-[70px] md:pb-0">
            <div className="p-5 md:p-12 lg:p-16">
              
              <div className="mb-2">
                 <span className="text-gold text-[10px] uppercase font-sans tracking-[0.2em] font-semibold">
                    For {property.status}
                 </span>
              </div>

              <h2 className="text-2xl md:text-5xl font-serif text-ivory mb-2 leading-tight">{property.title}</h2>
              
              <div className="flex items-center gap-1.5 text-muted font-sans font-light text-xs md:text-base mb-4">
                <MapPin size={14} strokeWidth={1.5} className="text-gold" />
                <span>{property.location}</span>
              </div>
              
              {/* Price: 28px bold serif */}
              <div className="text-[28px] md:text-4xl text-gold font-serif font-bold mb-6 pb-6 border-b border-charcoal-border">
                {property.price}
              </div>

              {/* Specs: 2x2 GRID on ALL screen sizes */}
              <div className="grid grid-cols-2 gap-3 mb-6 p-4 bg-charcoal border border-charcoal-border rounded-[2px]">
                 <div className="border-l-2 border-gold pl-3">
                    <div className="text-[9px] uppercase font-sans tracking-[0.15em] text-muted mb-0.5 font-medium">BEDS</div>
                    <div className="text-base font-serif text-ivory">{property.beds || 4} Bedrooms</div>
                 </div>
                 <div className="border-l-2 border-gold pl-3">
                    <div className="text-[9px] uppercase font-sans tracking-[0.15em] text-muted mb-0.5 font-medium">BATHS</div>
                    <div className="text-base font-serif text-ivory">{property.baths || 4} Baths</div>
                 </div>
                 <div className="border-l-2 border-gold pl-3">
                    <div className="text-[9px] uppercase font-sans tracking-[0.15em] text-muted mb-0.5 font-medium">AREA</div>
                    <div className="text-base font-serif text-ivory">{property.area || '4500 sq.ft.'}</div>
                 </div>
                 <div className="border-l-2 border-gold pl-3">
                    <div className="text-[9px] uppercase font-sans tracking-[0.15em] text-muted mb-0.5 font-medium">TYPE</div>
                    <div className="text-base font-serif text-ivory">{property.type || 'Private'}</div>
                 </div>
               </div>

              {/* Description */}
              <div className="mb-6">
                 <h3 className="text-[11px] uppercase font-sans tracking-[0.2em] text-ivory mb-2 font-semibold">About Property</h3>
                 <p className="text-bone font-sans font-light leading-relaxed text-sm">
                    {property.description}
                 </p>
              </div>

              {/* Amenity Pills: Horizontal Scroll Row, No Wrap */}
              <div className="mb-8">
                 <h3 className="text-[11px] uppercase font-sans tracking-[0.2em] text-ivory mb-3 font-semibold">Amenities</h3>
                 <div className="flex overflow-x-auto gap-2 no-scrollbar py-1">
                   {Array.from(new Set([...(property.amenities || []), "Ready to Move", "Vastu Compliant", "Prime Location", "Negotiable"])).map((amenity: string, idx: number) => (
                      <span key={idx} className="shrink-0 whitespace-nowrap bg-charcoal border border-charcoal-border text-gold text-xs px-3.5 py-1.5 font-sans font-medium rounded-[2px]">
                         {amenity}
                      </span>
                   ))}
                 </div>
              </div>

              {/* Desktop CTAs */}
              <div className="hidden md:flex flex-col gap-4 mt-auto pb-4 pt-8 border-t border-charcoal-border">
                 <a 
                   href="#speak-with-us"
                   onClick={onClose}
                   className="w-full bg-ivory text-charcoal py-4 text-[11px] font-semibold uppercase tracking-[0.2em] flex justify-center items-center gap-3 hover:bg-gold transition-colors duration-300 shadow-md text-center rounded-[2px]"
                 >
                    <CalendarCheck size={16} strokeWidth={2} /> Book a Site Visit
                 </a>
                 <div className="flex gap-4">
                    <a 
                      href={`https://wa.me/91XXXXXXXXXX?text=${encodeURIComponent(`Hello Gogia Group, I am interested in: ${property.title} (${property.location}) - ${property.price}`)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full bg-[#1EA952] text-white font-semibold py-4 text-[11px] uppercase tracking-[0.2em] flex justify-center items-center gap-2 hover:opacity-90 transition-opacity duration-300 rounded-[2px] shadow-md text-center"
                    >
                      <MessageCircle size={16} strokeWidth={2.5} /> WhatsApp Gogia Group
                    </a>
                 </div>
              </div>

            </div>
          </div>

          {/* Mobile STICKY FOOTER BAR pinned to bottom of sheet (60px) */}
          <div className="md:hidden absolute bottom-0 left-0 right-0 h-[60px] bg-charcoal border-t border-charcoal-border flex items-center z-50">
            <a 
              href="#speak-with-us"
              onClick={onClose}
              className="w-[60%] h-full bg-ivory text-charcoal font-sans font-bold text-[10px] uppercase tracking-[0.15em] flex items-center justify-center text-center px-2"
            >
              BOOK A SITE VISIT
            </a>
            <a 
              href={`https://wa.me/91XXXXXXXXXX?text=${encodeURIComponent(`Hello Gogia Group, I am interested in: ${property.title} (${property.location}) - ${property.price}`)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-[40%] h-full bg-[#1EA952] text-white font-sans font-bold text-[10px] uppercase tracking-[0.15em] flex items-center justify-center gap-1.5 text-center px-2"
            >
              <MessageCircle size={16} strokeWidth={2.5} /> WHATSAPP
            </a>
          </div>
          
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
