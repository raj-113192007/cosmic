import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Moon, Sun, ShoppingBag, Menu, X, ArrowUpRight } from 'lucide-react';
import type { AtmosphereMood } from '../types';
import { CosmicLogo } from './CosmicLogo';

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
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Floating Center Dock Header */}
      <motion.header
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="fixed top-3 sm:top-5 left-0 right-0 z-50 flex justify-center px-3 sm:px-6 pointer-events-none"
      >
        <div
          className={`pointer-events-auto w-full max-w-5xl rounded-full transition-all duration-500 flex items-center justify-between px-3.5 sm:px-5 py-2 sm:py-2.5 ${
            scrolled
              ? 'bg-white/85 backdrop-blur-2xl border border-stone-200/80 shadow-xl shadow-stone-900/5 ring-1 ring-black/5'
              : 'bg-white/70 backdrop-blur-xl border border-stone-200/60 shadow-lg shadow-stone-900/5'
          }`}
        >
          {/* Brand Identity */}
          <a href="#" className="flex items-center">
            <CosmicLogo showTagline={false} />
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-2 text-[11px] font-semibold tracking-wider uppercase text-cosmic-forest/75">
            <a
              href="#collections"
              className="px-3 py-1.5 rounded-full hover:text-cosmic-wood hover:bg-stone-100/60 transition-all duration-200"
            >
              Collections
            </a>
            <a
              href="#technology"
              className="px-3 py-1.5 rounded-full hover:text-cosmic-wood hover:bg-stone-100/60 transition-all duration-200"
            >
              Science
            </a>
            <a
              href="#engineering"
              className="px-3 py-1.5 rounded-full hover:text-cosmic-wood hover:bg-stone-100/60 transition-all duration-200"
            >
              8-Layers
            </a>
            <a
              href="#hospitality"
              className="px-3 py-1.5 rounded-full hover:text-cosmic-wood hover:bg-stone-100/60 transition-all duration-200"
            >
              Cafes &amp; B2B
            </a>
            <a
              href="#quiz"
              className="px-3 py-1.5 rounded-full hover:text-cosmic-wood hover:bg-stone-100/60 transition-all duration-200"
            >
              Scent Matcher
            </a>
            <button
              onClick={openB2B}
              className="px-2.5 py-1.5 rounded-full hover:text-cosmic-wood hover:bg-stone-100/60 transition-all duration-200 flex items-center gap-1 text-cosmic-wood font-bold"
            >
              <span>Trial</span>
              <ArrowUpRight className="w-3 h-3" />
            </button>
          </nav>

          {/* Action Dock Controls */}
          <div className="flex items-center space-x-2">
            {/* Ambient Switcher Minimal Pill */}
            <div className="flex items-center bg-stone-100/80 p-0.5 sm:p-1 rounded-full border border-stone-200/60">
              <button
                onClick={() => setMood('lavender')}
                className={`relative px-2.5 py-1 rounded-full text-[11px] font-medium transition-all duration-300 flex items-center gap-1 ${
                  mood === 'lavender'
                    ? 'text-white'
                    : 'text-stone-600 hover:text-stone-900'
                }`}
                title="Twilight Lavender Mood"
              >
                {mood === 'lavender' && (
                  <motion.div
                    layoutId="activeMoodPill"
                    className="absolute inset-0 bg-[#8A70B2] rounded-full shadow-xs"
                    transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                  />
                )}
                <span className="relative z-10 flex items-center gap-1">
                  <Moon className="w-3 h-3" />
                  <span className="hidden sm:inline">Twilight</span>
                </span>
              </button>

              <button
                onClick={() => setMood('gardenia')}
                className={`relative px-2.5 py-1 rounded-full text-[11px] font-medium transition-all duration-300 flex items-center gap-1 ${
                  mood === 'gardenia'
                    ? 'text-stone-900 font-semibold'
                    : 'text-stone-600 hover:text-stone-900'
                }`}
                title="Sunlit Gardenia Mood"
              >
                {mood === 'gardenia' && (
                  <motion.div
                    layoutId="activeMoodPill"
                    className="absolute inset-0 bg-[#D4A034] rounded-full shadow-xs"
                    transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                  />
                )}
                <span className="relative z-10 flex items-center gap-1">
                  <Sun className="w-3 h-3" />
                  <span className="hidden sm:inline">Sunlit</span>
                </span>
              </button>
            </div>

            {/* Starter Kit Pill CTA */}
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.96 }}
              onClick={openCart}
              className="flex items-center gap-2 bg-[#18201B] hover:bg-[#0F1210] text-[#FAF7F2] px-3.5 py-1.5 sm:py-2 rounded-full text-xs font-semibold tracking-wide transition-all shadow-md hover:shadow-lg"
            >
              <ShoppingBag className="w-3.5 h-3.5 text-[#D4B38C]" />
              <span className="hidden sm:inline">Starter Kit</span>
              <span className="bg-[#966F47] text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-bold">
                {cartCount}
              </span>
            </motion.button>

            {/* Mobile Burger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-1.5 rounded-full text-stone-700 hover:bg-stone-100 transition-colors"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Animated Dropdown Dock */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -15, scale: 0.95 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="fixed top-16 left-4 right-4 z-40 bg-white/95 backdrop-blur-2xl rounded-3xl border border-stone-200/80 shadow-2xl p-6 space-y-4 md:hidden"
          >
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
                Cavitation Science
              </a>
              <a
                href="#engineering"
                onClick={() => setMobileMenuOpen(false)}
                className="py-1 hover:text-cosmic-wood"
              >
                8-Layer Hardware CAD
              </a>
              <a
                href="#hospitality"
                onClick={() => setMobileMenuOpen(false)}
                className="py-1 hover:text-cosmic-wood"
              >
                Cafes &amp; Commercial Spaces
              </a>
              <a
                href="#quiz"
                onClick={() => setMobileMenuOpen(false)}
                className="py-1 hover:text-cosmic-wood"
              >
                Personal Scent Diagnostic
              </a>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  openB2B();
                }}
                className="text-left py-1 text-cosmic-wood flex items-center gap-1 font-semibold"
              >
                Hospitality Bulk Trial
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </nav>

            <div className="pt-4 border-t border-stone-200/60 flex items-center justify-between text-xs text-stone-500">
              <span>Prototype • Pre-Order Open</span>
              <span className="text-cosmic-wood font-semibold font-mono">100% Non-Toxic</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
