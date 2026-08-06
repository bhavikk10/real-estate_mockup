import { Check } from "lucide-react";

export function WhyChooseUs() {
  const points = [
    "Private verified inventory not available publicly",
    "Expert negotiation support for fair market valuations",
    "Comprehensive legal and documentation diligence",
    "Deep market intelligence across NCR micro-markets",
    "End-to-end transaction support from viewing to handover",
    "Strictly confidential advisory for HNI clientele"
  ];

  return (
    <section className="bg-charcoal py-32">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="relative">
            <div className="aspect-[4/5] relative overflow-hidden group">
              <img 
                src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                alt="Luxury Interior" 
                className="w-full h-full object-cover transform scale-105 group-hover:scale-100 transition-transform duration-[2s] ease-lux"
              />
              <div className="absolute inset-0 bg-charcoal/20 mix-blend-overlay"></div>
              
              {/* Refined subtle border */}
              <div className="absolute inset-6 border border-charcoal-border z-10 pointer-events-none"></div>
            </div>
            
            {/* Overlay Card - More minimal */}
            <div className="absolute -bottom-10 -right-4 lg:-right-12 bg-charcoal-light p-10 border border-charcoal-border shadow-card max-w-[280px] hidden md:block rounded-[2px]">
              <div className="text-5xl font-serif text-gold mb-3 leading-none">15<span className="text-3xl">+</span></div>
              <div className="text-[10px] font-sans uppercase tracking-[0.2em] text-ivory mb-4 font-semibold">Years of Mastery</div>
              <p className="text-bone text-sm font-sans font-light leading-relaxed">
                Navigating complex transactions for Delhi's most demanding clientele with absolute discretion.
              </p>
            </div>
          </div>
          
          <div className="lg:pl-10">
            <h2 className="text-[11px] font-sans uppercase tracking-[0.3em] text-gold mb-6 font-semibold flex items-center gap-4">
              <span className="w-8 h-[1px] bg-gold"></span>
              The Aurum Standard
            </h2>
            <h3 className="text-4xl md:text-5xl lg:text-6xl font-serif text-ivory mb-8 leading-[1.1] tracking-tight">
              A Private Advisory <br /> for High-Value Assets.
            </h3>
            <p className="text-bone mb-12 text-base lg:text-lg font-sans font-light leading-[1.8]">
              We operate differently than traditional brokerages. We prioritize deep client relationships, off-market deal flow, and analytical rigor to protect and grow our clients' wealth through real estate. No mass marketing, no noise.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              {points.map((point, idx) => (
                <div key={idx} className="flex items-start gap-4">
                  <div className="w-5 h-5 rounded-full border border-gold flex items-center justify-center shrink-0 mt-0.5">
                     <Check className="text-gold" size={12} strokeWidth={2} />
                  </div>
                  <span className="text-ivory text-sm font-sans font-light leading-relaxed">{point}</span>
                </div>
              ))}
            </div>
            
            <button className="bg-transparent border border-charcoal-border text-ivory px-10 py-5 text-[11px] font-semibold uppercase tracking-[0.2em] hover:bg-gold hover:text-charcoal hover:border-gold transition-all duration-300 rounded-[2px]">
              Speak to our Founders
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
