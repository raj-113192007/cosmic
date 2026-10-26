import React from 'react';
import { Sparkles, Moon, Sun, Check, Compass, ShieldCheck, ArrowRight } from 'lucide-react';
import { SCENT_PROFILES } from '../data/cosmicData';
import type { AtmosphereMood, ScentProfile } from '../types';

interface BotanicalStudioProps {
  mood: AtmosphereMood;
  setMood: (mood: AtmosphereMood) => void;
  openCart: () => void;
}

export const BotanicalStudio: React.FC<BotanicalStudioProps> = ({ mood, setMood, openCart }) => {
  const currentProfile: ScentProfile =
    SCENT_PROFILES.find((s) => s.id === mood) || SCENT_PROFILES[0];

  return (
    <section id="collections" className="py-20 md:py-28 bg-[#FAF7F2] border-t border-cosmic-stone/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cosmic-sand/80 border border-cosmic-stone/60 text-xs font-semibold tracking-widest uppercase text-cosmic-wood">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Artisanal Botanical Studio</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-medium text-cosmic-forest leading-tight">
            Crafted from Nature. <br />
            <span className="italic font-normal text-cosmic-wood">Two Distinct Olfactory Atmospheres.</span>
          </h2>
          <p className="text-base text-cosmic-forest/75 font-light leading-relaxed">
            Formulated by master botanists using fractional steam distillation. Free from synthetic aldehydes, parabens, petroleum fillers, and animal testing.
          </p>

          {/* Collection Tab Switcher */}
          <div className="flex justify-center pt-4">
            <div className="inline-flex p-1.5 rounded-full bg-white border border-cosmic-stone/70 shadow-sm">
              <button
                onClick={() => setMood('lavender')}
                className={`flex items-center gap-2 px-6 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 ${
                  mood === 'lavender'
                    ? 'bg-[#8A70B2] text-white shadow-sm'
                    : 'text-cosmic-forest/70 hover:text-cosmic-forest'
                }`}
              >
                <Moon className="w-4 h-4" />
                <span>Twilight Lavender</span>
              </button>
              <button
                onClick={() => setMood('gardenia')}
                className={`flex items-center gap-2 px-6 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 ${
                  mood === 'gardenia'
                    ? 'bg-[#D4A034] text-cosmic-dark font-bold shadow-sm'
                    : 'text-cosmic-forest/70 hover:text-cosmic-forest'
                }`}
              >
                <Sun className="w-4 h-4" />
                <span>Sunlit Gardenia</span>
              </button>
            </div>
          </div>
        </div>

        {/* Collection Showcase Card */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-cosmic-stone/60 shadow-xl relative overflow-hidden">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left: Product Render Showcase */}
            <div className="lg:col-span-5 relative flex items-center justify-center">
              <div
                className={`relative w-full max-w-sm aspect-[3/4] rounded-3xl p-6 flex items-center justify-center transition-colors duration-700 ${
                  mood === 'lavender' ? 'bg-[#F3EEF9]' : 'bg-[#FCF6E8]'
                }`}
              >
                {/* Product Render */}
                <img
                  src={currentProfile.image}
                  alt={currentProfile.name}
                  className="max-h-[380px] w-auto object-contain transition-transform duration-500 hover:scale-105 drop-shadow-2xl"
                />

                {/* Floating Badge */}
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-full text-xs font-bold text-cosmic-forest border border-cosmic-stone/60 shadow-sm">
                  {currentProfile.badge}
                </div>

                <div className="absolute bottom-4 right-4 bg-white/95 backdrop-blur-md px-3.5 py-1.5 rounded-xl text-xs font-mono font-bold text-cosmic-wood border border-cosmic-stone/60 shadow-sm">
                  100ml / ₹299
                </div>
              </div>
            </div>

            {/* Right: Olfactory Pyramid & Story */}
            <div className="lg:col-span-7 space-y-6">
              
              <div>
                <span className="text-xs font-mono uppercase tracking-widest text-cosmic-wood font-semibold">
                  Botanical Scent Profile
                </span>
                <h3 className="text-3xl sm:text-4xl font-serif font-medium text-cosmic-forest mt-1">
                  {currentProfile.name}
                </h3>
                <p className="text-sm text-cosmic-forest/70 font-light mt-2 leading-relaxed">
                  {currentProfile.description}
                </p>
              </div>

              {/* Olfactory Pyramid (Top, Heart, Base) */}
              <div className="space-y-3 pt-2">
                <div className="text-xs font-bold uppercase tracking-wider text-cosmic-forest flex items-center gap-2">
                  <Compass className="w-3.5 h-3.5 text-cosmic-wood" />
                  <span>The Olfactory Note Pyramid</span>
                </div>

                {/* Top Notes */}
                <div className="p-3.5 rounded-2xl bg-[#FAF7F2] border border-cosmic-stone/50 space-y-1">
                  <div className="flex items-center justify-between text-xs font-semibold text-cosmic-forest">
                    <span className="text-cosmic-wood uppercase tracking-wider text-[10px]">Top Notes (First 15 Mins)</span>
                    <span className="text-[11px] text-cosmic-muted">Light, effervescent, immediate</span>
                  </div>
                  <div className="flex flex-wrap gap-2 pt-1">
                    {currentProfile.topNotes.map((note) => (
                      <span
                        key={note}
                        className="bg-white px-2.5 py-1 rounded-lg text-xs font-medium text-cosmic-forest border border-cosmic-stone/60"
                      >
                        {note}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Heart Notes */}
                <div className="p-3.5 rounded-2xl bg-[#FAF7F2] border border-cosmic-stone/50 space-y-1">
                  <div className="flex items-center justify-between text-xs font-semibold text-cosmic-forest">
                    <span className="text-cosmic-wood uppercase tracking-wider text-[10px]">Heart Notes (2–4 Hours)</span>
                    <span className="text-[11px] text-cosmic-muted">Core floral character</span>
                  </div>
                  <div className="flex flex-wrap gap-2 pt-1">
                    {currentProfile.heartNotes.map((note) => (
                      <span
                        key={note}
                        className="bg-white px-2.5 py-1 rounded-lg text-xs font-medium text-cosmic-forest border border-cosmic-stone/60"
                      >
                        {note}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Base Notes */}
                <div className="p-3.5 rounded-2xl bg-[#FAF7F2] border border-cosmic-stone/50 space-y-1">
                  <div className="flex items-center justify-between text-xs font-semibold text-cosmic-forest">
                    <span className="text-cosmic-wood uppercase tracking-wider text-[10px]">Base Notes (All Day Anchor)</span>
                    <span className="text-[11px] text-cosmic-muted">Warm, grounding longevity</span>
                  </div>
                  <div className="flex flex-wrap gap-2 pt-1">
                    {currentProfile.baseNotes.map((note) => (
                      <span
                        key={note}
                        className="bg-white px-2.5 py-1 rounded-lg text-xs font-medium text-cosmic-forest border border-cosmic-stone/60"
                      >
                        {note}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Best Paired In Spaces */}
              <div className="pt-2">
                <div className="text-xs font-bold uppercase tracking-wider text-cosmic-forest mb-2">
                  Recommended Environments
                </div>
                <div className="flex flex-wrap gap-2">
                  {currentProfile.bestFor.map((place) => (
                    <span
                      key={place}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-cosmic-sand/60 text-xs font-medium text-cosmic-forest border border-cosmic-stone/50"
                    >
                      <Check className="w-3.5 h-3.5 text-cosmic-wood" />
                      {place}
                    </span>
                  ))}
                </div>
              </div>

              {/* Add to Starter Box CTA */}
              <div className="pt-4 border-t border-cosmic-stone/40 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-2 text-xs text-cosmic-forest/70">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  <span>Cruelty-Free • Phthalate-Free • IFRA Compliant</span>
                </div>
                <button
                  onClick={openCart}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-cosmic-forest text-cosmic-cream hover:bg-cosmic-dark font-medium text-xs tracking-wide transition-all shadow-md hover:shadow-lg"
                >
                  <span>Include in Starter Bundle</span>
                  <ArrowRight className="w-3.5 h-3.5 text-cosmic-wood-light" />
                </button>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
