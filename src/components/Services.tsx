import { ShoppingBag, Key, Home, Globe, TrendingUp, Building } from "lucide-react";
import { motion } from "framer-motion";
import { useRef } from "react";

export function Services() {
  const scrollRef = useRef(null);
  
  const services6 = [
    {
      icon: <ShoppingBag size={22} strokeWidth={1.5} />,
      title: "Property Buying",
      desc: "Curated acquisition of premier builder floors and farmhouses across South Delhi."
    },
    {
      icon: <Key size={22} strokeWidth={1.5} />,
      title: "Property Selling",
      desc: "Discreet high-value asset disposition for maximum market return and confidentiality."
    },
    {
      icon: <Home size={22} strokeWidth={1.5} />,
      title: "Luxury Rentals",
      desc: "High-end residential leasing for corporate leaders, NRIs, and diplomatic missions."
    },
    {
      icon: <Globe size={22} strokeWidth={1.5} />,
      title: "NRI Services",
      desc: "Seamless remote property management, title verification, and POA assistance."
    },
    {
      icon: <TrendingUp size={22} strokeWidth={1.5} />,
      title: "Investment Advisory",
      desc: "Strategic land and redevelopment advisory to maximize long-term wealth."
    },
    {
      icon: <Building size={22} strokeWidth={1.5} />,
      title: "Commercial Leasing",
      desc: "Prime retail and office spaces in South Delhi’s most prominent commercial centers."
    }
  ];

  return (
    <section 
      id="services" 
      ref={scrollRef} 
      className="bg-[#F9F9F9] py-16 sm:py-32 relative overflow-hidden text-charcoal border-b border-gray-200"
    >
      <div className="max-w-[1400px] mx-auto px-5 sm:px-12 relative z-10">
        <div className="mb-8 sm:mb-16">
          <div className="text-[11px] font-sans uppercase tracking-[0.2em] text-gold-dark mb-2 font-semibold">
            GOGIA GROUP SERVICES
          </div>
          <h3 className="text-[24px] sm:text-4xl md:text-5xl font-serif text-charcoal tracking-tight leading-tight">
            How We Help
          </h3>
        </div>

        {/* 2x3 Grid on Mobile & Tablet, 3-col on Desktop */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-0 border border-[#E5E5E5] bg-white rounded-[2px] shadow-sm overflow-hidden">
          {services6.map((service, idx) => (
            <div 
              key={idx} 
              className="p-4 sm:p-8 border-b border-r border-[#E5E5E5] flex flex-col justify-between hover:bg-[#F4F4F4] transition-colors"
            >
              <div>
                <div className="text-gold-dark mb-3">
                  {service.icon}
                </div>
                <h4 className="text-sm sm:text-lg font-serif text-charcoal font-semibold mb-1.5 leading-snug">
                  {service.title}
                </h4>
                <p className="text-gray-600 text-[11px] sm:text-xs font-sans leading-relaxed line-clamp-2">
                  {service.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

