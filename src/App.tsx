/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { FeaturedProperties } from "./components/FeaturedProperties";
import { PropertyModal } from "./components/PropertyModal";
import { Services } from "./components/Services";
import { Neighborhoods } from "./components/Neighborhoods";
import { About } from "./components/About";
import { Testimonials } from "./components/Testimonials";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { FloatingElements } from "./components/FloatingElements";

import { PrivateCollections } from "./components/PrivateCollections";

export default function App() {
  const [selectedProperty, setSelectedProperty] = useState<any>(null);

  return (
    <main className="bg-charcoal min-h-screen text-ivory font-sans selection:bg-gold selection:text-charcoal bg-[#0A0A0A]">
      <Navbar />
      <Hero onOpenModal={(prop) => setSelectedProperty(prop)} />
      <PrivateCollections onOpenModal={(prop) => setSelectedProperty(prop)} />
      <FeaturedProperties onOpenModal={(prop) => setSelectedProperty(prop)} />
      <Services />
      <Neighborhoods />
      <About />
      <Testimonials />
      <Contact />
      <Footer />
      <FloatingElements />
      
      {/* Absolute Modal positioned via Portal or fixed overlay */}
      {selectedProperty && (
        <PropertyModal 
          property={selectedProperty} 
          onClose={() => setSelectedProperty(null)} 
        />
      )}
    </main>
  );
}
