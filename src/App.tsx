import { useState } from 'react';
import type { AtmosphereMood } from './types';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { BrandMission } from './components/BrandMission';
import { HowItWorksScience } from './components/HowItWorksScience';
import { HardwareExplodedViewer } from './components/HardwareExplodedViewer';
import { DualRefillLab } from './components/DualRefillLab';
import { BotanicalStudio } from './components/BotanicalStudio';
import { DiffuserGuide } from './components/DiffuserGuide';
import { ScentMatcherQuiz } from './components/ScentMatcherQuiz';
import { HospitalityB2BSection } from './components/HospitalityB2BSection';
import { SustainabilityPledge } from './components/SustainabilityPledge';
import { PreOrderCartDrawer } from './components/PreOrderCartDrawer';
import { B2BModal } from './components/B2BModal';
import { Footer } from './components/Footer';

export function App() {
  const [mood, setMood] = useState<AtmosphereMood>('lavender');
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isB2BOpen, setIsB2BOpen] = useState(false);
  const cartCount = 1; // 1 starter kit in cart default

  return (
    <div className={`min-h-screen font-sans bg-[#FAF7F2] text-[#18201B] selection:bg-cosmic-wood selection:text-white transition-colors duration-500 ${
      mood === 'lavender' ? 'theme-lavender' : 'theme-gardenia'
    }`}>
      {/* Navigation Header */}
      <Navbar
        mood={mood}
        setMood={setMood}
        cartCount={cartCount}
        openCart={() => setIsCartOpen(true)}
        openB2B={() => setIsB2BOpen(true)}
      />

      {/* Main Experience Stream */}
      <main>
        {/* 1. Hero Showcase */}
        <HeroSection
          mood={mood}
          setMood={setMood}
          openCart={() => setIsCartOpen(true)}
        />

        {/* 2. Philosophy & Why COSMIC Exists */}
        <BrandMission />

        {/* 3. Deep Science: 2.4 MHz Ultrasonic Cavitation */}
        <HowItWorksScience />

        {/* 4. 8-Layer Hardware Teardown (Exploded CAD View) */}
        <HardwareExplodedViewer />

        {/* 5. Dual Refill Platform & Interactive Lifespan Calculator */}
        <DualRefillLab openCart={() => setIsCartOpen(true)} />

        {/* 6. Artisanal Botanical Studio (Lavender & Gardenia Pyramids) */}
        <BotanicalStudio
          mood={mood}
          setMood={setMood}
          openCart={() => setIsCartOpen(true)}
        />

        {/* 7. Step-by-Step Daily Ritual & Guide */}
        <DiffuserGuide />

        {/* 8. Interactive Scent Matcher Quiz */}
        <ScentMatcherQuiz
          setMood={setMood}
          openCart={() => setIsCartOpen(true)}
        />

        {/* 9. Hospitality, Cafes & Commercial Spaces */}
        <HospitalityB2BSection openB2B={() => setIsB2BOpen(true)} />

        {/* 10. Circular Sustainability & Founder's Letter */}
        <SustainabilityPledge />
      </main>

      {/* Footer */}
      <Footer
        openB2B={() => setIsB2BOpen(true)}
        openCart={() => setIsCartOpen(true)}
      />

      {/* Slide-over Starter Kit Customizer Drawer */}
      <PreOrderCartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
      />

      {/* Hospitality & Commercial Inquiry Modal */}
      <B2BModal
        isOpen={isB2BOpen}
        onClose={() => setIsB2BOpen(false)}
      />
    </div>
  );
}

export default App;
