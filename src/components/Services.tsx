import { ShoppingBag, Key, Home, Globe, TrendingUp, Building, ArrowUpRight, CheckCircle2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useRef } from "react";

export function Services() {
  const scrollRef = useRef(null);
  const [activeTab, setActiveTab] = useState("all");
  const [selectedService, setSelectedService] = useState<number | null>(0);

  const services = [
    {
      id: 0,
      category: "buy-sell",
      icon: <ShoppingBag size={22} strokeWidth={1.5} />,
      title: "Property Buying",
      desc: "Curated acquisition of premier builder floors and farmhouses across South Delhi.",
      deliverables: ["Off-Market Directory Access", "100% Clear Title Verification", "Personalized Negotiation"]
    },
    {
      id: 1,
      category: "buy-sell",
      icon: <Key size={22} strokeWidth={1.5} />,
      title: "Property Selling",
      desc: "Discreet high-value asset disposition for maximum market return and confidentiality.",
      deliverables: ["Private High-Net-Worth Network", "High-End Asset Staging", "Confidential Representation"]
    },
    {
      id: 2,
      category: "leasing",
      icon: <Home size={22} strokeWidth={1.5} />,
      title: "Luxury Rentals",
      desc: "High-end residential leasing for corporate leaders, NRIs, and diplomatic missions.",
      deliverables: ["Diplomatic & MNC Tenant Vetting", "Customized Lease Contracts", "Turnkey Tenant Onboarding"]
    },
    {
      id: 3,
      category: "nri",
      icon: <Globe size={22} strokeWidth={1.5} />,
      title: "NRI Services",
      desc: "Seamless remote property management, title verification, and POA assistance.",
      deliverables: ["Virtual Walkthrough Audits", "Cross-Border Tax & Legal Guidance", "Power of Attorney (POA) Desk"]
    },
    {
      id: 4,
      category: "nri",
      icon: <TrendingUp size={22} strokeWidth={1.5} />,
      title: "Investment Advisory",
      desc: "Strategic land and redevelopment advisory to maximize long-term wealth.",
      deliverables: ["Land Feasibility Analysis", "Redevelopment Profit Yields", "Joint Venture (JV) Structuring"]
    },
    {
      id: 5,
      category: "leasing",
      icon: <Building size={22} strokeWidth={1.5} />,
      title: "Commercial Leasing",
      desc: "Prime retail and office spaces in South Delhi’s most prominent commercial centers.",
      deliverables: ["Prime High-Street Retail Sites", "High-Yield Corporate Assets", "Long-term Institutional Leases"]
    }
  ];

  const filteredServices = activeTab === "all" 
    ? services 
    : services.filter(s => s.category === activeTab);

  return (
    <section 
      id="services" 
      ref={scrollRef} 
      className="bg-charcoal py-16 sm:py-32 relative overflow-hidden text-ivory border-b border-charcoal-border"
    >
      {/* Background Subtle Accent Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gold/5 blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-4 sm:px-12 relative z-10">
        
        {/* Header & Category Filters */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8 sm:mb-16">
          <div>
            <div className="text-[10px] sm:text-[11px] font-sans uppercase tracking-[0.25em] text-gold mb-2 font-semibold flex items-center gap-2">
              <span className="w-5 h-[1px] bg-gold" />
              GOGIA GROUP ADVISORY
            </div>
            <h3 className="text-2xl sm:text-4xl md:text-5xl font-serif text-ivory tracking-tight leading-tight">
              How We Help
            </h3>
          </div>

          {/* Interactive Filter Pills - Optimized for Thumb Tap on Mobile */}
          <div className="flex flex-wrap gap-2">
            {[
              { label: "ALL SERVICES", value: "all" },
              { label: "BUY & SELL", value: "buy-sell" },
              { label: "LEASING", value: "leasing" },
              { label: "NRI & INVESTMENTS", value: "nri" },
            ].map(tab => (
              <button
                key={tab.value}
                onClick={() => {
                  setActiveTab(tab.value);
                  if (typeof window !== "undefined" && window.navigator && window.navigator.vibrate) {
                    window.navigator.vibrate(5);
                  }
                }}
                className={`min-h-[38px] sm:min-h-[42px] px-3.5 sm:px-4 py-2 text-[10px] sm:text-[11px] font-sans font-semibold uppercase tracking-[0.15em] sm:tracking-[0.18em] rounded-[2px] transition-all duration-300 border active:scale-95 sm:hover:scale-[1.02] transform-gpu touch-manipulation flex items-center justify-center ${
                  activeTab === tab.value 
                    ? "bg-gold text-charcoal border-gold shadow-md font-bold" 
                    : "bg-charcoal-light text-bone border-charcoal-border hover:border-gold hover:text-ivory"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* 2x3 Interactive Services Grid (2 cols on mobile, 3 cols on desktop) */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-6">
          <AnimatePresence mode="popLayout">
            {filteredServices.map((service) => {
              const isSelected = selectedService === service.id;
              return (
                <motion.div
                  key={service.id}
                  layout
                  initial={{ opacity: 0, scale: 0.96, y: 15 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.96, y: 10 }}
                  whileHover={{ y: -6, scale: 1.01 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                  onClick={() => {
                    setSelectedService(isSelected ? null : service.id);
                    if (typeof window !== "undefined" && window.navigator && window.navigator.vibrate) {
                      window.navigator.vibrate(8);
                    }
                  }}
                  className={`group relative p-4 sm:p-8 rounded-[2px] border cursor-pointer transition-all duration-300 flex flex-col justify-between overflow-hidden will-change-transform transform-gpu touch-manipulation ${
                    isSelected 
                      ? "bg-charcoal-light border-gold shadow-card-hover" 
                      : "bg-charcoal-light border-charcoal-border hover:border-gold shadow-card hover:shadow-card-hover"
                  }`}
                >
                  {/* Top Border Glow Accent */}
                  <div className={`absolute top-0 left-0 right-0 h-[2px] transition-all duration-300 ${isSelected ? "bg-gold shadow-sm" : "bg-transparent group-hover:bg-gold"}`} />

                  <div>
                    <div className="flex items-center justify-between mb-3 sm:mb-5">
                      <div className={`p-2.5 sm:p-3 rounded-[2px] transition-all duration-300 ${isSelected ? "bg-gold text-charcoal shadow-md" : "bg-charcoal border border-charcoal-border text-gold group-hover:bg-gold group-hover:text-charcoal"}`}>
                        {service.icon}
                      </div>
                      <ArrowUpRight size={18} className={`transition-all duration-300 ${isSelected ? "text-gold rotate-45 scale-110" : "text-muted group-hover:text-gold group-hover:translate-x-0.5 group-hover:-translate-y-0.5"}`} />
                    </div>

                    <h4 className="text-sm sm:text-xl font-serif text-ivory font-medium mb-1.5 sm:mb-2.5 leading-snug group-hover:text-gold transition-colors">
                      {service.title}
                    </h4>
                    
                    <p className="text-bone text-[11px] sm:text-sm font-sans font-light leading-relaxed mb-3 sm:mb-4 line-clamp-3 sm:line-clamp-none">
                      {service.desc}
                    </p>
                  </div>

                  {/* Key Scope Deliverables Bullet Points (Silky Smooth Reveal) */}
                  <motion.div 
                    initial={false}
                    animate={{ 
                      height: isSelected ? "auto" : "0px",
                      opacity: isSelected ? 1 : 0
                    }}
                    transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                    className="overflow-hidden"
                  >
                    <div className="pt-3.5 border-t border-charcoal-border mt-1">
                      <div className="text-[9px] sm:text-[10px] uppercase tracking-widest text-gold font-semibold mb-2">Key Scope:</div>
                      <ul className="space-y-1.5">
                        {service.deliverables.map((item, idx) => (
                          <li key={idx} className="flex items-center gap-2 text-[10px] sm:text-[12px] text-bone font-sans">
                            <CheckCircle2 size={12} className="text-gold shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                      <a 
                        href="#speak-with-us" 
                        onClick={(e) => e.stopPropagation()}
                        className="mt-3.5 inline-flex items-center gap-1.5 text-[9px] sm:text-[10px] uppercase font-sans font-bold tracking-[0.2em] text-gold hover:text-ivory transition-colors"
                      >
                        <span>Inquire For This Service</span>
                        <ArrowUpRight size={12} />
                      </a>
                    </div>
                  </motion.div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}


