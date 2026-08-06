import { MapPin, Phone, Mail, MessageCircle, ArrowRight } from "lucide-react";
import React, { useState } from "react";

export function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section id="speak-with-us" className="bg-charcoal py-16 sm:py-28 md:py-36 relative overflow-hidden border-t border-charcoal-border">
      <div className="max-w-[1400px] mx-auto px-5 sm:px-12 relative z-10">
        <div className="mb-8 sm:mb-16">
          <h2 className="text-[10px] sm:text-[11px] font-sans uppercase tracking-[0.3em] text-gold mb-2 sm:mb-4 font-semibold flex items-center gap-3 sm:gap-4">
            <span className="w-6 sm:w-8 h-[1px] bg-gold"></span>
            Direct Advisory
          </h2>
          <h3 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-serif text-ivory mb-2 sm:mb-4 leading-[1.1] tracking-tight">
            Speak With Us
          </h3>
          <p className="text-bone text-xs sm:text-base md:text-lg font-sans font-light leading-relaxed max-w-2xl">
            Schedule a private consultation or speak directly with our senior directors.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 xl:gap-16 items-start">
          
          {/* Left: Form */}
          <div className="lg:col-span-7 bg-charcoal-light p-5 sm:p-12 border border-charcoal-border shadow-card relative rounded-[2px]">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-gold/20 via-gold to-gold/20"></div>
            <h4 className="text-lg sm:text-2xl font-serif text-ivory mb-1 sm:mb-2">Request A Callback</h4>
            <p className="text-bone text-[11px] sm:text-xs font-sans mb-5 sm:mb-8">Fill in your details and a Gogia Group director will reach out shortly.</p>

            {submitted ? (
              <div className="p-6 sm:p-8 bg-gold/10 border border-gold/40 text-center rounded-[2px] my-6 sm:my-12">
                <div className="text-gold font-serif text-xl sm:text-2xl mb-2">Callback Request Received</div>
                <p className="text-bone text-xs sm:text-sm font-sans">Thank you. Senior advisory team from Gogia Group will get in touch with you promptly.</p>
              </div>
            ) : (
              <form className="space-y-4 sm:space-y-6" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                  <div>
                    <label className="block text-[9px] sm:text-[10px] uppercase font-sans tracking-[0.18em] sm:tracking-[0.2em] text-gold mb-1 sm:mb-2 font-semibold">Full Name *</label>
                    <input 
                      type="text" 
                      required
                      className="w-full bg-charcoal border border-charcoal-border focus:border-gold outline-none text-ivory px-3.5 sm:px-4 min-h-[42px] sm:min-h-[48px] text-[13px] sm:text-[16px] font-sans transition-colors rounded-[2px] placeholder-muted" 
                      placeholder="e.g. Vikram Malhotra" 
                    />
                  </div>
                  <div>
                    <label className="block text-[9px] sm:text-[10px] uppercase font-sans tracking-[0.18em] sm:tracking-[0.2em] text-gold mb-1 sm:mb-2 font-semibold">Phone Number *</label>
                    <input 
                      type="tel" 
                      required
                      className="w-full bg-charcoal border border-charcoal-border focus:border-gold outline-none text-ivory px-3.5 sm:px-4 min-h-[42px] sm:min-h-[48px] text-[13px] sm:text-[16px] font-sans transition-colors rounded-[2px] placeholder-muted" 
                      placeholder="+91 98100 00000" 
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                  <div>
                    <label className="block text-[9px] sm:text-[10px] uppercase font-sans tracking-[0.18em] sm:tracking-[0.2em] text-gold mb-1 sm:mb-2 font-semibold">Requirement Type</label>
                    <select className="w-full bg-charcoal border border-charcoal-border focus:border-gold outline-none text-ivory px-3.5 sm:px-4 min-h-[42px] sm:min-h-[48px] text-[13px] sm:text-[16px] font-sans transition-colors rounded-[2px] appearance-none cursor-pointer">
                      <option value="builder-floor" className="bg-charcoal text-ivory">Builder Floor</option>
                      <option value="farmhouse" className="bg-charcoal text-ivory">Farmhouse</option>
                      <option value="land" className="bg-charcoal text-ivory">Land / Plot</option>
                      <option value="other" className="bg-charcoal text-ivory">Other Requirement</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-[9px] sm:text-[10px] uppercase font-sans tracking-[0.18em] sm:tracking-[0.2em] text-gold mb-1 sm:mb-2 font-semibold">Budget Range</label>
                    <select className="w-full bg-charcoal border border-charcoal-border focus:border-gold outline-none text-ivory px-3.5 sm:px-4 min-h-[42px] sm:min-h-[48px] text-[13px] sm:text-[16px] font-sans transition-colors rounded-[2px] appearance-none cursor-pointer">
                      <option value="3-6" className="bg-charcoal text-ivory">₹3 Cr - ₹6 Cr</option>
                      <option value="6-12" className="bg-charcoal text-ivory">₹6 Cr - ₹12 Cr</option>
                      <option value="12-25" className="bg-charcoal text-ivory">₹12 Cr - ₹25 Cr</option>
                      <option value="25+" className="bg-charcoal text-ivory">₹25 Cr +</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-[9px] sm:text-[10px] uppercase font-sans tracking-[0.18em] sm:tracking-[0.2em] text-gold mb-1 sm:mb-2 font-semibold">Message / Specific Preferences</label>
                  <textarea 
                    rows={3} 
                    className="w-full bg-charcoal border border-charcoal-border focus:border-gold outline-none text-ivory p-3.5 sm:p-4 text-[13px] sm:text-[16px] font-sans transition-colors resize-none placeholder-muted rounded-[2px]" 
                    placeholder="Preferred localities (e.g. GK-1, Panchsheel Park, Vasant Vihar), floor preference, timeline..."
                  ></textarea>
                </div>

                <button 
                  type="submit" 
                  className="w-full h-[44px] sm:h-[52px] bg-ivory text-charcoal font-bold text-[10px] sm:text-[11px] uppercase tracking-[0.2em] sm:tracking-[0.25em] hover:bg-gold transition-colors duration-300 shadow-md rounded-[2px]"
                >
                  REQUEST CALLBACK
                </button>
              </form>
            )}
          </div>

          {/* Right: Direct Actions & Info */}
          <div className="lg:col-span-5 space-y-6 sm:space-y-8">
            <div className="bg-charcoal-light p-5 sm:p-8 border border-charcoal-border rounded-[2px] space-y-4 sm:space-y-6 shadow-sm">
              <h4 className="text-lg sm:text-xl font-serif text-ivory">Direct Contact</h4>
              <p className="text-bone text-[11px] sm:text-xs font-sans leading-relaxed">
                Need immediate assistance regarding a South Delhi or NCR asset? Reach out directly via Call or WhatsApp.
              </p>

              <div className="flex flex-col gap-3 sm:gap-4">
                <a 
                  href="tel:+91XXXXXXXXXX"
                  className="w-full bg-ivory text-charcoal py-3 sm:py-4 px-4 sm:px-6 text-[10px] sm:text-xs font-bold uppercase tracking-[0.2em] flex items-center justify-between hover:bg-gold transition-colors duration-300 rounded-[2px] shadow-sm"
                >
                  <span className="flex items-center gap-2.5 sm:gap-3">
                    <Phone size={14} className="text-charcoal sm:w-4 sm:h-4" />
                    Call +91 XXXXX XXXXX
                  </span>
                  <ArrowRight size={14} />
                </a>

                <a 
                  href="https://wa.me/91XXXXXXXXXX?text=Hello%20Gogia%20Group,%20I%20would%20like%20to%20inquire%20about%20your%20properties."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-[#1EA952] text-white py-3 sm:py-4 px-4 sm:px-6 text-[10px] sm:text-xs font-bold uppercase tracking-[0.2em] flex items-center justify-between hover:opacity-90 transition-opacity duration-300 rounded-[2px] shadow-md"
                >
                  <span className="flex items-center gap-2.5 sm:gap-3">
                    <MessageCircle size={16} strokeWidth={2.5} className="sm:w-4 sm:h-4" />
                    CHAT ON WHATSAPP
                  </span>
                  <ArrowRight size={14} />
                </a>
              </div>
            </div>

            <div className="bg-charcoal-light p-5 sm:p-8 border border-charcoal-border rounded-[2px] space-y-4 sm:space-y-6 shadow-sm">
              <div className="space-y-4 sm:space-y-6">
                <div className="flex items-start gap-3 sm:gap-4">
                  <MapPin className="text-gold shrink-0 mt-0.5 sm:mt-1" size={18} />
                  <div>
                    <div className="text-[10px] sm:text-xs uppercase font-sans tracking-widest text-gold font-semibold mb-0.5 sm:mb-1">Corporate Office</div>
                    <div className="text-ivory font-serif text-base sm:text-lg leading-snug">Prime Location, South Delhi</div>
                    <div className="text-bone text-[11px] sm:text-xs font-sans mt-0.5 sm:mt-1">New Delhi - 1100XX</div>
                  </div>
                </div>

                <div className="flex items-start gap-3 sm:gap-4 pt-3 sm:pt-4 border-t border-charcoal-border">
                  <Mail className="text-gold shrink-0 mt-0.5 sm:mt-1" size={18} />
                  <div>
                    <div className="text-[10px] sm:text-xs uppercase font-sans tracking-widest text-gold font-semibold mb-0.5 sm:mb-1">Email Inquiry</div>
                    <div className="text-ivory font-serif text-sm sm:text-base">info@gogiagroup.com</div>
                    <div className="text-bone text-[11px] sm:text-xs font-sans mt-0.5">Mon - Sat, 10:00 AM - 7:30 PM</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
