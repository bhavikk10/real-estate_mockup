import { Instagram, Linkedin, Twitter, ArrowRight, MessageCircle } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-charcoal pt-16 sm:pt-32 pb-12 relative z-10 overflow-hidden border-t border-charcoal-border">
      
      {/* Huge Background Typography */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full overflow-hidden flex justify-center pointer-events-none select-none opacity-[0.03]">
        <div className="text-[20vw] font-serif font-black text-ivory leading-none whitespace-nowrap tracking-tighter">
          XYZ GROUP
        </div>
      </div>

      <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 mb-20">
          
          <div className="lg:col-span-5 pr-0 lg:pr-16 flex flex-col justify-between">
            <div>
              <a href="#" className="text-2xl font-serif text-ivory tracking-[0.15em] uppercase flex items-center gap-1 mb-8">
                XYZ<span className="text-gold italic font-light lowercase text-3xl leading-none -mt-1 ml-1.5">group</span>
              </a>
              <p className="text-bone text-base font-sans font-light leading-relaxed mb-8 max-w-md">
                South Delhi’s most trusted real estate advisory for independent builder floors, farmhouses, and prime residential acquisitions across Delhi NCR.
              </p>
              <div className="inline-block bg-charcoal-light border border-gold/40 px-4 py-2 text-[10px] uppercase tracking-[0.2em] text-gold font-mono mb-8 rounded-[2px]">
                RERA Reg. No. DLRERA2024A0012847
              </div>
            </div>
            
            <div className="mt-auto">
              <div className="text-[9px] uppercase tracking-[0.2em] text-gold mb-3 font-semibold">Private Portfolio Updates</div>
              <div className="flex border-b border-charcoal-border pb-2 max-w-md group">
                <input 
                  type="email" 
                  placeholder="Enter your phone or email" 
                  className="bg-transparent text-ivory text-sm font-sans w-full outline-none placeholder:text-muted"
                />
                <button className="text-gold group-hover:text-ivory transition-colors">
                  <ArrowRight size={18} />
                </button>
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-3 gap-12 lg:pl-12">
            <div>
              <h4 className="text-gold font-sans uppercase tracking-[0.2em] text-[10px] font-semibold mb-6">Navigation</h4>
              <ul className="space-y-4">
                {[
                  { name: 'Properties', href: '#properties' },
                  { name: 'Locations', href: '#locations' },
                  { name: 'Services', href: '#services' },
                  { name: 'Contact', href: '#speak-with-us' },
                  { name: 'Private Advisory', href: '#speak-with-us' },
                ].map(link => (
                  <li key={link.name}>
                    <a href={link.href} className="text-bone hover:text-gold transition-colors font-sans font-light text-sm flex items-center gap-2 group">
                      <span className="w-0 h-[1px] bg-gold group-hover:w-3 transition-all duration-300"></span>
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h4 className="text-gold font-sans uppercase tracking-[0.2em] text-[10px] font-semibold mb-6">Prime Localities</h4>
              <ul className="space-y-4">
                {['Greater Kailash I & II', 'Panchsheel Park', 'Vasant Vihar', 'Golf Links & Jor Bagh', 'Chattarpur Farms', 'Golf Course Road'].map(loc => (
                  <li key={loc}>
                    <a href="#locations" className="text-bone hover:text-gold transition-colors font-sans font-light text-sm flex items-center gap-2 group">
                      <span className="w-0 h-[1px] bg-gold group-hover:w-3 transition-all duration-300"></span>
                      {loc}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-gold font-sans uppercase tracking-[0.2em] text-[10px] font-semibold mb-6">Headquarters</h4>
              <ul className="space-y-4 text-bone font-sans font-light text-sm">
                <li className="leading-relaxed">
                  Prime Location, South Delhi<br />
                  New Delhi - 1100XX
                </li>
                <li><a href="mailto:info@gogiagroup.com" className="hover:text-gold transition-colors">info@gogiagroup.com</a></li>
                <li><a href="tel:+91XXXXXXXXXX" className="hover:text-gold transition-colors">+91 XXXXX XXXXX</a></li>
              </ul>
              
              <div className="flex gap-3 mt-8">
                <a 
                  href="https://wa.me/91XXXXXXXXXX" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="w-10 h-10 border border-[#1EA952]/50 text-[#1EA952] flex items-center justify-center hover:bg-[#1EA952] hover:text-white transition-all duration-300 rounded-[2px]"
                  title="WhatsApp Gogia Group"
                >
                  <MessageCircle size={16} />
                </a>
                <a href="#" className="w-10 h-10 border border-charcoal-border flex items-center justify-center text-ivory hover:border-gold hover:text-gold transition-all duration-300 rounded-[2px]">
                  <Linkedin size={14} />
                </a>
                <a href="#" className="w-10 h-10 border border-charcoal-border flex items-center justify-center text-ivory hover:border-gold hover:text-gold transition-all duration-300 rounded-[2px]">
                  <Instagram size={14} />
                </a>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-charcoal-border pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-muted text-[10px] font-sans uppercase tracking-[0.2em] text-center md:text-left">
            &copy; {new Date().getFullYear()} Gogia Group. All rights reserved. | RERA Reg. No. DLRERA2024A0012847
          </div>
          <div className="flex flex-wrap justify-center gap-8 text-muted text-[10px] font-sans uppercase tracking-[0.2em]">
            <a href="#" className="hover:text-ivory transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-ivory transition-colors">Terms of Advisory</a>
            <a href="#" className="hover:text-ivory transition-colors">RERA Compliance</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
