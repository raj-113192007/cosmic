import React from 'react';
import { Mail, ShieldCheck, ArrowUp } from 'lucide-react';
import { CosmicLogo } from './CosmicLogo';

interface FooterProps {
  openB2B: () => void;
  openCart: () => void;
  openCertifications: () => void;
  openFounderContact: () => void;
  openScienceModal: () => void;
  openCadModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  openB2B,
  openCart,
  openCertifications,
  openFounderContact,
  openScienceModal,
  openCadModal,
}) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-white border-t border-cosmic-stone/60 pt-16 pb-12 text-cosmic-forest">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-cosmic-stone/40">
          
          {/* Brand Column */}
          <div className="lg:col-span-5 space-y-4">
            <CosmicLogo showTagline={true} />

            <p className="text-sm text-cosmic-forest/70 font-light leading-relaxed max-w-sm">
              Nature-inspired fragrance and architectural silence. A sustainable Japandi ultrasonic diffuser engineered with interchangeable cold-mist and passive gel technology.
            </p>

            <div className="pt-2 text-xs text-cosmic-forest/80 space-y-1">
              <div>
                <strong>Founded by: </strong>
                <span>Aido Paron • BBA Department</span>
              </div>
              <button
                onClick={openFounderContact}
                className="flex items-center gap-1.5 text-cosmic-wood font-medium hover:underline text-left"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>aparon375@gmail.com (Send Founder Note)</span>
              </button>
            </div>
          </div>

          {/* Quick Navigation */}
          <div className="lg:col-span-2 space-y-3">
            <h5 className="text-xs font-bold uppercase tracking-widest text-cosmic-forest">
              Architecture
            </h5>
            <ul className="space-y-2 text-xs text-cosmic-forest/70">
              <li>
                <a href="#collections" className="hover:text-cosmic-wood transition-colors">
                  Botanical Studio
                </a>
              </li>
              <li>
                <button onClick={openScienceModal} className="hover:text-cosmic-wood transition-colors text-left">
                  Cavitation Science Whitepaper
                </button>
              </li>
              <li>
                <button onClick={openCadModal} className="hover:text-cosmic-wood transition-colors text-left">
                  8-Layer CAD BOM Inspector
                </button>
              </li>
              <li>
                <a href="#refills" className="hover:text-cosmic-wood transition-colors">
                  Dual-Refill Platform
                </a>
              </li>
              <li>
                <a href="#quiz" className="hover:text-cosmic-wood transition-colors">
                  Scent Diagnostic
                </a>
              </li>
            </ul>
          </div>

          {/* Commercial & Hospitality */}
          <div className="lg:col-span-2 space-y-3">
            <h5 className="text-xs font-bold uppercase tracking-widest text-cosmic-forest">
              Hospitality
            </h5>
            <ul className="space-y-2 text-xs text-cosmic-forest/70">
              <li>
                <a href="#hospitality" className="hover:text-cosmic-wood transition-colors">
                  Artisan Cafes
                </a>
              </li>
              <li>
                <a href="#hospitality" className="hover:text-cosmic-wood transition-colors">
                  Boutique Dining
                </a>
              </li>
              <li>
                <button onClick={openB2B} className="hover:text-cosmic-wood transition-colors text-left">
                  Request Trial Kit
                </button>
              </li>
              <li>
                <button onClick={openB2B} className="hover:text-cosmic-wood transition-colors text-left">
                  Wholesale Inquiries
                </button>
              </li>
              <li>
                <button onClick={openCart} className="hover:text-cosmic-wood transition-colors text-left font-semibold text-cosmic-wood">
                  Pre-Order Starter Box
                </button>
              </li>
            </ul>
          </div>

          {/* Standards & Certifications */}
          <div className="lg:col-span-3 space-y-3">
            <h5 className="text-xs font-bold uppercase tracking-widest text-cosmic-forest">
              Certifications &amp; Safety
            </h5>
            <div className="space-y-2 text-xs text-cosmic-forest/70">
              <button
                onClick={openCertifications}
                className="flex items-center gap-2 hover:text-cosmic-wood text-left group"
              >
                <ShieldCheck className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                <span className="group-hover:underline">CE &amp; RoHS Hardware Safe &gt;</span>
              </button>
              <button
                onClick={openCertifications}
                className="flex items-center gap-2 hover:text-cosmic-wood text-left group"
              >
                <ShieldCheck className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                <span className="group-hover:underline">IFRA Botanical Inhalation Compliance &gt;</span>
              </button>
              <button
                onClick={openCertifications}
                className="flex items-center gap-2 hover:text-cosmic-wood text-left group"
              >
                <ShieldCheck className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                <span className="group-hover:underline">Zero Phthalates &amp; Lead Solder &gt;</span>
              </button>
              <button
                onClick={openCertifications}
                className="flex items-center gap-2 hover:text-cosmic-wood text-left group"
              >
                <ShieldCheck className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                <span className="group-hover:underline">Silver-Ion (Ag+) PP JIS Z 2801 &gt;</span>
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-cosmic-forest/60">
          <div className="flex items-center gap-2">
            <span>&copy; {new Date().getFullYear()} COSMIC Air-Care. All rights reserved.</span>
            <span>•</span>
            <span>Crafted with Japandi Precision</span>
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1.5 text-cosmic-wood hover:text-cosmic-forest transition-colors font-medium"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
