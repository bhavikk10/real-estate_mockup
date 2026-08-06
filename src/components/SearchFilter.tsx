import { Search } from "lucide-react";

export function SearchFilter() {
  return (
    <section className="bg-charcoal py-8 border-b border-charcoal-border">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="bg-charcoal-light border border-charcoal-border p-4 shadow-card rounded-[2px] flex flex-col md:flex-row items-center gap-4 relative z-30">
          
          <div className="flex-1 w-full flex flex-col md:flex-row gap-6">
            <div className="flex-1 border-b md:border-b-0 md:border-r border-charcoal-border pb-4 md:pb-0 md:pr-4 relative group">
              <label className="block text-[10px] font-sans uppercase tracking-[0.2em] text-muted mb-2 font-medium">Location</label>
              <select className="w-full bg-transparent text-ivory text-sm md:text-base outline-none appearance-none cursor-pointer font-serif">
                <option value="" className="bg-charcoal-light">South Delhi</option>
                <option value="gurugram" className="bg-charcoal-light">Gurugram</option>
                <option value="noida" className="bg-charcoal-light">Noida Expressway</option>
              </select>
            </div>
            
            <div className="flex-1 border-b md:border-b-0 md:border-r border-charcoal-border pb-4 md:pb-0 md:pr-4 relative group">
              <label className="block text-[10px] font-sans uppercase tracking-[0.2em] text-muted mb-2 font-medium">Property Type</label>
              <select className="w-full bg-transparent text-ivory text-sm md:text-base outline-none appearance-none cursor-pointer font-serif">
                <option value="" className="bg-charcoal-light">All Types</option>
                <option value="apartment" className="bg-charcoal-light">Luxury Apartment</option>
                <option value="villa" className="bg-charcoal-light">Villa / Kothi</option>
                <option value="farmhouse" className="bg-charcoal-light">Farmhouse</option>
                <option value="commercial" className="bg-charcoal-light">Commercial Space</option>
              </select>
            </div>
            
            <div className="flex-1 border-b md:border-b-0 md:border-r border-charcoal-border pb-4 md:pb-0 md:pr-4 relative group">
              <label className="block text-[10px] font-sans uppercase tracking-[0.2em] text-muted mb-2 font-medium">Budget</label>
              <select className="w-full bg-transparent text-ivory text-sm md:text-base outline-none appearance-none cursor-pointer font-serif">
                <option value="" className="bg-charcoal-light">Any Budget</option>
                <option value="5-10" className="bg-charcoal-light">₹5 Cr - ₹10 Cr</option>
                <option value="10-25" className="bg-charcoal-light">₹10 Cr - ₹25 Cr</option>
                <option value="25+" className="bg-charcoal-light">₹25 Cr +</option>
              </select>
            </div>
            
            <div className="flex-1 pb-4 md:pb-0 relative group">
              <label className="block text-[10px] font-sans uppercase tracking-[0.2em] text-muted mb-2 font-medium">Purpose</label>
              <select className="w-full bg-transparent text-ivory text-sm md:text-base outline-none appearance-none cursor-pointer font-serif">
                <option value="buy" className="bg-charcoal-light">Acquisition</option>
                <option value="rent" className="bg-charcoal-light">Leasing</option>
                <option value="invest" className="bg-charcoal-light">Investment</option>
              </select>
            </div>
          </div>
          
          <button className="w-full md:w-auto bg-gold text-charcoal px-10 py-5 flex items-center justify-center gap-3 hover:bg-ivory transition-all duration-300 group shrink-0">
            <Search size={18} className="group-hover:scale-110 transition-transform duration-500 ease-lux" />
            <span className="text-[11px] font-semibold uppercase tracking-[0.2em]">Curate</span>
          </button>
          
        </div>
      </div>
    </section>
  );
}
