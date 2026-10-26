import { useState, useEffect } from 'react';
import Lenis from 'lenis';
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
import { ScienceWhitepaperModal } from './components/ScienceWhitepaperModal';
import { CadInspectorModal } from './components/CadInspectorModal';
import { CertificationsModal } from './components/CertificationsModal';
import { FounderContactModal } from './components/FounderContactModal';
import { ScentDetailModal } from './components/ScentDetailModal';
import { Footer } from './components/Footer';

export function App() {
  const [mood, setMood] = useState<AtmosphereMood>('lavender');
  
  // Fully functional modal states for every button on the platform
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isB2BOpen, setIsB2BOpen] = useState(false);
  const [isScienceOpen, setIsScienceOpen] = useState(false);
  const [isCadOpen, setIsCadOpen] = useState(false);
  const [isCertificationsOpen, setIsCertificationsOpen] = useState(false);
  const [isFounderOpen, setIsFounderOpen] = useState(false);
  const [isScentDetailOpen, setIsScentDetailOpen] = useState(false);

  const cartCount = 1;

  // Kinetic smooth momentum scrolling (Lenis)
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      touchMultiplier: 1.5,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    const rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);

  return (
    <div className={`min-h-screen font-sans bg-[#FAF7F2] text-[#18201B] selection:bg-cosmic-wood selection:text-white transition-colors duration-500 ${
      mood === 'lavender' ? 'theme-lavender' : 'theme-gardenia'
    }`}>
      {/* Clean Floating Island Top Dock */}
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
          openCadModal={() => setIsCadOpen(true)}
          openScienceModal={() => setIsScienceOpen(true)}
        />

        {/* 2. Philosophy & Why COSMIC Exists */}
        <BrandMission />

        {/* 3. Deep Science: 2.4 MHz Ultrasonic Cavitation */}
        <HowItWorksScience
          openScienceModal={() => setIsScienceOpen(true)}
        />

        {/* 4. 8-Layer Hardware Teardown (Exploded CAD View) */}
        <HardwareExplodedViewer
          openCadModal={() => setIsCadOpen(true)}
        />

        {/* 5. Dual Refill Platform & Interactive Lifespan Calculator */}
        <DualRefillLab
          openCart={() => setIsCartOpen(true)}
        />

        {/* 6. Artisanal Botanical Studio */}
        <BotanicalStudio
          mood={mood}
          setMood={setMood}
          openCart={() => setIsCartOpen(true)}
          openScentDetailModal={() => setIsScentDetailOpen(true)}
        />

        {/* 7. Step-by-Step Daily Ritual & Guide */}
        <DiffuserGuide />

        {/* 8. Interactive Scent Matcher Quiz */}
        <ScentMatcherQuiz
          setMood={setMood}
          openCart={() => setIsCartOpen(true)}
        />

        {/* 9. Hospitality, Cafes & Commercial Spaces */}
        <HospitalityB2BSection
          openB2B={() => setIsB2BOpen(true)}
        />

        {/* 10. Circular Sustainability & Founder's Letter */}
        <SustainabilityPledge
          openFounderContact={() => setIsFounderOpen(true)}
        />
      </main>

      {/* Footer */}
      <Footer
        openB2B={() => setIsB2BOpen(true)}
        openCart={() => setIsCartOpen(true)}
        openCertifications={() => setIsCertificationsOpen(true)}
        openFounderContact={() => setIsFounderOpen(true)}
        openScienceModal={() => setIsScienceOpen(true)}
        openCadModal={() => setIsCadOpen(true)}
      />

      {/* 1. Slide-over Starter Kit Customizer & Multi-Step Checkout Drawer */}
      <PreOrderCartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
      />

      {/* 2. Hospitality & Commercial Trial Inquiry Modal */}
      <B2BModal
        isOpen={isB2BOpen}
        onClose={() => setIsB2BOpen(false)}
      />

      {/* 3. Laboratory Testing & 2.4MHz Science Whitepaper Modal */}
      <ScienceWhitepaperModal
        isOpen={isScienceOpen}
        onClose={() => setIsScienceOpen(false)}
      />

      {/* 4. Fullscreen 3D CAD Blueprint & Bill of Materials Inspector Modal */}
      <CadInspectorModal
        isOpen={isCadOpen}
        onClose={() => setIsCadOpen(false)}
      />

      {/* 5. Official Safety Certifications (CE, RoHS, IFRA, Ag+) Modal */}
      <CertificationsModal
        isOpen={isCertificationsOpen}
        onClose={() => setIsCertificationsOpen(false)}
      />

      {/* 6. Direct Founder Feedback & Desk Modal (Aido Paron) */}
      <FounderContactModal
        isOpen={isFounderOpen}
        onClose={() => setIsFounderOpen(false)}
      />

      {/* 7. Botanical Sourcing & Terpene Breakdown Modal */}
      <ScentDetailModal
        isOpen={isScentDetailOpen}
        onClose={() => setIsScentDetailOpen(false)}
        mood={mood}
        openCart={() => {
          setIsScentDetailOpen(false);
          setIsCartOpen(true);
        }}
      />
    </div>
  );
}

export default App;
