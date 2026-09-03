import { motion } from "framer-motion";

export function About() {
  return (
    <section id="about" className="bg-charcoal py-32 border-b border-charcoal-border overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          
          <div className="order-2 lg:order-1 pr-0 lg:pr-12">
            <motion.h2 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
              className="text-[11px] font-sans uppercase tracking-[0.3em] text-gold mb-6 font-semibold flex items-center gap-4"
            >
              <span className="w-8 h-[1px] bg-gold"></span>
              Our Philosophy
            </motion.h2>
            
            <motion.h3 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl lg:text-6xl font-serif text-ivory mb-10 leading-[1.1] tracking-tight"
            >
              Clarity, Discretion, and Access in High-Value Decisions.
            </motion.h3>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
              viewport={{ once: true }}
              className="text-bone mb-6 text-base lg:text-lg font-sans font-light leading-[1.8]"
            >
              XYZ Group was established to serve a singular purpose: to provide unparalleled real estate brokerage and advisory to South Delhi's most discerning families and investors. We do not just show properties; we curate legacy builder floors, expansive farmhouses, and prime land assets.
            </motion.p>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
              viewport={{ once: true }}
              className="text-bone mb-12 text-base lg:text-lg font-sans font-light leading-[1.8]"
            >
              Our directors bring decades of local South Delhi expertise to private transactions, ensuring every builder floor and farmhouse deal is vetted with legal precision and executed with absolute discretion.
            </motion.p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-10 border-t border-charcoal-border">
              {[
                { title: "Local Intelligence", desc: "Deep micro-market knowledge" },
                { title: "Owner Relationships", desc: "Direct access to legacy owners" },
                { title: "Private Deal Flow", desc: "Off-market inventory access" },
                { title: "Transaction First", desc: "Advisory that closes successfully" }
              ].map((item, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 + (idx * 0.1), ease: "easeOut" }}
                  viewport={{ once: true }}
                >
                  <div className="text-ivory font-serif text-xl mb-2">{item.title}</div>
                  <div className="text-muted font-sans font-light text-sm">{item.desc}</div>
                </motion.div>
              ))}
            </div>
            
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.8 }}
              viewport={{ once: true }}
              className="mt-16"
            >
              <img src="https://upload.wikimedia.org/wikipedia/commons/4/41/Signature_of_Founder.png" alt="Founder Signature" className="h-10 dark:brightness-0 dark:invert opacity-60 ml-1" />
              <div className="text-gold text-[10px] font-sans uppercase tracking-[0.2em] mt-4 font-semibold">Managing Partners</div>
            </motion.div>
          </div>
          
          <div className="order-1 lg:order-2">
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, ease: [0.25, 0.1, 0.25, 1] }}
              viewport={{ once: true }}
              className="relative aspect-[3/4] overflow-hidden w-full max-w-md mx-auto lg:ml-auto p-3 border border-charcoal-border bg-charcoal-light shadow-md"
            >
              <div className="absolute inset-0 bg-black/10 hover:bg-transparent transition-colors duration-1000 z-10" />
              <img 
                src="https://images.unsplash.com/photo-1556157382-97eda2d62296?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Founders" 
                className="w-full h-full object-cover grayscale opacity-90 transition-all duration-[3s] ease-lux transform scale-[1.02] hover:scale-105 hover:grayscale-[10%]"
              />
            </motion.div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
