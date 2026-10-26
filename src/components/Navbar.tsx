import React, { useState, useEffect } from 'react';
import { Moon, Sun, ShoppingBag, Menu, X, ArrowUpRight, ShieldCheck } from 'lucide-react';
import type { AtmosphereMood } from '../types';

interface NavbarProps {
  mood: AtmosphereMood;
  setMood: (mood: AtmosphereMood) => void;
  cartCount: number;
  openCart: () => void;
  openB2B: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  mood,
  setMood,
  cartCount,
  openCart,
  openB2B,
}) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#FAF7F2]/90 backdrop-blur-md shadow-sm border-b border-cosmic-stone/40 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <img
              src="/assets/cosmic-logo.png"
              alt="COSMIC"
              className="h-8 md:h-9 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
            />
            <span className="hidden sm:inline-block text-[10px] tracking-widest font-semibold uppercase text-cosmic-wood border border-cosmic-wood/30 px-2 py-0.5 rounded-full">
              Smart Air-Care
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-7 text-xs font-semibold tracking-wider uppercase text-cosmic-forest/80">
            <a
              href="#collections"
              className="hover:text-cosmic-wood transition-colors duration-200"
            >
              Collections
            </a>
            <a
              href="#technology"
              className="hover:text-cosmic-wood transition-colors duration-200"
            >
              Dual Technology
            </a>
            <a
              href="#engineering"
              className="hover:text-cosmic-wood transition-colors duration-200"
            >
              Engineering
            </a>
            <a
              href="#hospitality"
              className="hover:text-cosmic-wood transition-colors duration-200"
            >
              Cafes & Spaces
            </a>
            <a
              href="#quiz"
              className="hover:text-cosmic-wood transition-colors duration-200"
            >
              Scent Matcher
            </a>
            <button
              onClick={openB2B}
              className="hover:text-cosmic-wood transition-colors duration-200 flex items-center gap-1 text-cosmic-forest/60"
            >
              B2B Inquiry
              <ArrowUpRight className="w-3 h-3" />
            </button>
          </nav>

          {/* Action CTAs & Atmosphere Switcher */}
          <div className="flex items-center space-x-3">
            {/* Mood Atmosphere Switcher */}
            <div className="flex items-center bg-cosmic-sand/70 p-1 rounded-full border border-cosmic-stone/60">
              <button
                onClick={() => setMood('lavender')}
                className={`flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium transition-all duration-300 ${
                  mood === 'lavender'
                    ? 'bg-cosmic-lavender text-white shadow-sm'
                    : 'text-cosmic-forest/70 hover:text-cosmic-forest'
                }`}
                title="Switch to Lavender Twilight Ambience"
              >
                <Moon className="w-3 h-3" />
                <span className="hidden lg:inline text-[11px]">Twilight</span>
              </button>
              <button
                onClick={() => setMood('gardenia')}
                className={`flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium transition-all duration-300 ${
                  mood === 'gardenia'
                    ? 'bg-cosmic-gardenia text-cosmic-dark font-semibold shadow-sm'
                    : 'text-cosmic-forest/70 hover:text-cosmic-forest'
                }`}
                title="Switch to Sunlit Gardenia Ambience"
              >
                <Sun className="w-3 h-3" />
                <span className="hidden lg:inline text-[11px]">Sunlit</span>
              </button>
            </div>

            {/* Cart / Starter Kit Button */}
            <button
              onClick={openCart}
              className="relative flex items-center gap-2 bg-cosmic-forest text-cosmic-cream hover:bg-cosmic-dark px-4 py-2 rounded-full text-xs font-semibold tracking-wide transition-all duration-200 shadow-md hover:shadow-lg active:scale-95"
            >
              <ShoppingBag className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Starter Kit</span>
              <span className="bg-cosmic-wood text-white text-[10px] w-5 h-5 rounded-full flex items-center justify-center font-bold">
                {cartCount}
              </span>
            </button>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg text-cosmic-forest hover:bg-cosmic-sand/60 transition-colors"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-cosmic-cream/95 backdrop-blur-xl border-b border-cosmic-stone px-6 py-6 space-y-4 animate-in slide-in-from-top-2 duration-200">
          <nav className="flex flex-col space-y-3 text-sm font-medium tracking-wide uppercase text-cosmic-forest">
            <a
              href="#collections"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-cosmic-wood"
            >
              Botanical Collections
            </a>
            <a
              href="#technology"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-cosmic-wood"
            >
              Dual Refill Technology
            </a>
            <a
              href="#engineering"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-cosmic-wood"
            >
              Hardware Teardown (8-Layers)
            </a>
            <a
              href="#hospitality"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-cosmic-wood"
            >
              Cafes & Hospitality Spaces
            </a>
            <a
              href="#quiz"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-cosmic-wood"
            >
              Personal Scent Finder
            </a>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                openB2B();
              }}
              className="text-left py-1 text-cosmic-wood flex items-center gap-1 font-semibold"
            >
              B2B & Cafe Bulk Inquiries
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </nav>

          <div className="pt-4 border-t border-cosmic-stone/40 flex items-center justify-between text-xs text-cosmic-forest/70">
            <span>Prototype Phase • Pre-Order Open</span>
            <div className="flex items-center gap-1 text-cosmic-wood">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>100% Non-Toxic</span>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
