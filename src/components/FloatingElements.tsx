import { MessageCircle, ArrowUp, Phone, Instagram } from "lucide-react";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function FloatingElements() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Desktop Floating Buttons (Bottom Right) - Hidden on Mobile */}
      <div className="fixed bottom-6 right-6 z-50 hidden sm:flex flex-col items-center gap-3.5">
        <AnimatePresence>
          {showScrollTop && (
            <motion.button 
              initial={{ opacity: 0, scale: 0.8, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: 10 }}
              onClick={scrollToTop}
              className="w-10 h-10 bg-charcoal/90 backdrop-blur-md border border-white/10 text-gold flex items-center justify-center hover:bg-gold hover:text-charcoal transition-all duration-300 shadow-2xl rounded-full"
              aria-label="Scroll to top"
            >
              <ArrowUp size={18} />
            </motion.button>
          )}
        </AnimatePresence>
        
        {/* Large Always Visible WhatsApp Floating Button (Desktop Only) */}
        <a 
          href="https://wa.me/919810098765?text=Hello%20Gogia%20Group,%20I%20am%20interested%20in%20learning%20more%20about%20your%20South%20Delhi%20properties."
          target="_blank"
          rel="noopener noreferrer"
          className="group relative flex items-center justify-center w-16 h-16 bg-[#25D366] text-white hover:bg-[#20ba5a] transition-all duration-300 shadow-[0_8px_30px_rgba(37,211,102,0.4)] rounded-full hover:scale-105 active:scale-95"
          aria-label="Chat with Gogia Group on WhatsApp"
        >
          <span className="absolute right-full mr-4 whitespace-nowrap bg-charcoal/95 border border-white/10 text-ivory text-[11px] font-sans font-medium uppercase tracking-widest px-4 py-2.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none shadow-2xl rounded-[2px] hidden sm:block">
            Chat with Gogia Group
          </span>
          <MessageCircle size={30} strokeWidth={2.2} className="group-hover:rotate-12 transition-transform duration-300" />
          <span className="absolute -top-1 -right-1 w-4 h-4 bg-gold rounded-full border-2 border-charcoal animate-pulse"></span>
        </a>
      </div>

      {/* Mobile Right-Edge Floating Sidebar (Logos Only, No Text) */}
      <div className="sm:hidden fixed right-0 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-2 p-1.5 bg-[#0F0F0F]/90 border-l border-y border-white/20 rounded-l-xl shadow-[0_4px_25px_rgba(0,0,0,0.8)] backdrop-blur-md">
        {/* Call Button */}
        <a 
          href="tel:+919810098765"
          className="w-10 h-10 rounded-lg bg-black/40 border border-gold/50 flex items-center justify-center text-gold active:scale-90 transition-transform shadow-md"
          aria-label="Call Gogia Group"
        >
          <Phone size={18} />
        </a>

        {/* WhatsApp Button */}
        <a 
          href="https://wa.me/919810098765?text=Hello%20Gogia%20Group,%20I%20would%20like%20to%20inquire%20about%20your%20properties."
          target="_blank"
          rel="noopener noreferrer"
          className="w-10 h-10 rounded-lg bg-black/40 border border-[#25D366]/60 flex items-center justify-center text-[#25D366] active:scale-90 transition-transform shadow-md"
          aria-label="WhatsApp Gogia Group"
        >
          <MessageCircle size={19} strokeWidth={2.2} />
        </a>

        {/* Instagram Button */}
        <a 
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className="w-10 h-10 rounded-lg bg-black/40 border border-pink-500/50 flex items-center justify-center text-pink-400 active:scale-90 transition-transform shadow-md"
          aria-label="Gogia Group Instagram"
        >
          <Instagram size={18} />
        </a>
      </div>
    </>
  );
}
