import { motion, useScroll, useMotionValueEvent, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { useState } from "react";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 50) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  });

  const navLinks = [
    { name: "Properties", href: "#properties" },
    { name: "Locations", href: "#locations" },
    { name: "Services", href: "#services" },
    { name: "Contact", href: "#speak-with-us" },
  ];

  return (
    <>
      <motion.nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-lux border-b ${
          isScrolled 
            ? "bg-[#0D0D0D]/90 backdrop-blur-md border-white/5 shadow-[0_4px_30px_rgba(0,0,0,0.2)]" 
            : "bg-[#0D0D0D]/90 backdrop-blur-md border-white/5"
        } h-[56px] sm:h-auto sm:py-6`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-12 h-full flex items-center justify-between">
          {/* Mobile Header (Fixed 56px: Hamburger Left, Logo Center, Empty Spacer Right) */}
          <div className="flex sm:hidden items-center justify-between w-full h-full">
            {/* Hamburger Button (48x48 Touch Target) */}
            <button
              aria-label="Open Menu"
              className="w-12 h-12 flex flex-col justify-center items-center gap-1.5 focus:outline-none -ml-2 text-ivory active:scale-95 transition-transform"
              onClick={() => {
                if (navigator.vibrate) navigator.vibrate(10);
                setMobileMenuOpen(true);
              }}
            >
              <span className="w-5 h-[2px] bg-ivory block transition-transform"></span>
              <span className="w-5 h-[2px] bg-ivory block transition-transform"></span>
            </button>

            {/* Center Logo */}
            <a href="#" className="text-base font-serif text-ivory tracking-[0.15em] uppercase flex items-center gap-1 cursor-pointer">
              GOGIA<span className="text-gold italic font-light text-xl leading-none ml-1">group</span>
            </a>

            {/* Empty Spacer to maintain exact center logo alignment */}
            <div className="w-12 h-12 pointer-events-none -mr-2" aria-hidden="true" />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden sm:flex items-center justify-between w-full">
            <a href="#" className="text-2xl font-serif text-ivory tracking-[0.15em] uppercase flex items-center gap-1 cursor-pointer relative z-10">
              GOGIA<span className="text-gold italic font-light text-3xl leading-none -mt-1 ml-1.5">group</span>
            </a>
            <div className="flex items-center space-x-12">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-[10px] font-sans tracking-[0.25em] uppercase text-bone/80 hover:text-gold transition-colors duration-300 relative group"
                >
                  {link.name}
                  <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-0 h-[1px] bg-gold/50 transition-all duration-500 ease-lux group-hover:w-full"></span>
                </a>
              ))}
              
              <div className="w-[1px] h-4 bg-white/20"></div>
              
              <div className="flex items-center gap-6">
                <a
                  href="#speak-with-us"
                  className="bg-ivory text-charcoal px-6 py-3 text-[10px] font-semibold uppercase tracking-[0.2em] transition-all duration-500 ease-lux hover:bg-gold relative overflow-hidden group border border-ivory"
                >
                  <span className="relative z-10">Private Advisory</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Full Screen Nav Drawer for Mobile */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            className="fixed inset-0 bg-[#0A0A0A] z-[100] flex flex-col justify-between p-6 sm:hidden overflow-y-auto will-change-transform transform-gpu"
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Drawer Header */}
            <div className="flex justify-between items-center h-[56px] border-b border-white/10 pb-4">
              <span className="text-base font-serif text-ivory tracking-[0.15em] uppercase">
                GOGIA<span className="text-gold italic font-light text-xl leading-none ml-1">group</span>
              </span>
              <button
                aria-label="Close menu"
                className="w-12 h-12 flex items-center justify-center text-ivory/80 hover:text-ivory -mr-2 active:scale-90 transition-transform"
                onClick={() => setMobileMenuOpen(false)}
              >
                <X size={26} strokeWidth={1.5} />
              </button>
            </div>

            {/* Links */}
            <div className="flex flex-col space-y-6 my-auto pt-8 pb-8">
              {[
                { name: "PROPERTIES", href: "#properties" },
                { name: "LOCATIONS", href: "#locations" },
                { name: "SERVICES", href: "#services" },
                { name: "CONTACT", href: "#speak-with-us" },
              ].map((link, i) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-[24px] font-serif font-normal tracking-wider text-ivory hover:text-gold transition-colors block border-b border-white/5 pb-3 active:translate-x-1"
                  initial={{ opacity: 0, x: -15 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 * i, duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                >
                  {link.name}
                </motion.a>
              ))}
            </div>

            {/* Bottom Button */}
            <div className="pt-4 pb-8 border-t border-white/10 mt-auto">
              <a
                href="#speak-with-us"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full block text-center py-4 border border-gold text-gold font-sans text-xs uppercase tracking-[0.2em] font-semibold hover:bg-gold hover:text-charcoal active:scale-[0.98] transition-all rounded-[2px]"
              >
                PRIVATE ADVISORY
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

