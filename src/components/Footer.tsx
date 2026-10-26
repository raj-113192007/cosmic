import React from 'react';
import { Mail, ShieldCheck, ArrowUp } from 'lucide-react';

interface FooterProps {
  openB2B: () => void;
  openCart: () => void;
}

export const Footer: React.FC<FooterProps> = ({ openB2B, openCart }) => {
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
            <div className="flex items-center gap-3">
              <img
                src="/assets/cosmic-logo.png"
                alt="COSMIC"
                className="h-8 w-auto object-contain"
              />
              <span className="text-[10px] tracking-widest font-semibold uppercase text-cosmic-wood border border-cosmic-wood/30 px-2 py-0.5 rounded-full">
                Smart Air-Care
              </span>
            </div>

            <p className="text-sm text-cosmic-forest/70 font-light leading-relaxed max-w-sm">
              Nature-inspired fragrance and architectural silence. A sustainable Japandi ultrasonic diffuser engineered with interchangeable cold-mist and passive gel technology.
            </p>

            <div className="pt-2 text-xs text-cosmic-forest/80 space-y-1">
              <div>
                <strong>Founded by: </strong>
                <span>Aido Paron • BBA Department</span>
              </div>
              <div className="flex items-center gap-1.5 text-cosmic-wood font-medium">
                <Mail className="w-3.5 h-3.5" />
                <a href="mailto:aparon375@gmail.com" className="hover:underline">
                  aparon375@gmail.com
                </a>
              </div>
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
                <a href="#technology" className="hover:text-cosmic-wood transition-colors">
                  Cavitation Science
                </a>
              </li>
              <li>
                <a href="#engineering" className="hover:text-cosmic-wood transition-colors">
                  8-Layer Hardware
                </a>
              </li>
              <li>
                <a href="#technology" className="hover:text-cosmic-wood transition-colors">
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
              Certifications
            </h5>
            <div className="space-y-2 text-xs text-cosmic-forest/70">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                <span>CE &amp; RoHS Hardware Safe</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                <span>IFRA Botanical Compliance</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                <span>Zero Phthalates, Zero Benzene</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                <span>Silver-Ion Antimicrobial PP</span>
              </div>
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
