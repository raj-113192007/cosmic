import React from 'react';
import { Wind, ShieldCheck, Zap, Droplets, ArrowRight, Layers, Award } from 'lucide-react';
import type { AtmosphereMood } from '../types';

interface HeroSectionProps {
  mood: AtmosphereMood;
  setMood: (mood: AtmosphereMood) => void;
  openCart: () => void;
  openCadModal: () => void;
  openScienceModal: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  mood,
  setMood,
  openCart,
  openCadModal,
  openScienceModal,
}) => {
  return (
    <section className="relative pt-28 pb-20 md:pt-36 md:pb-28 overflow-hidden">
      {/* Background Ambience Layer with dynamic mood gradient */}
      <div className="absolute inset-0 -z-10 pointer-events-none transition-all duration-700">
        <div
          className={`absolute inset-0 transition-opacity duration-1000 ${
            mood === 'lavender'
              ? 'opacity-30 bg-gradient-to-b from-[#EDE7F6] via-[#FAF7F2] to-[#FAF7F2]'
              : 'opacity-35 bg-gradient-to-b from-[#FDF6E3] via-[#FAF7F2] to-[#FAF7F2]'
          }`}
        />
        {/* Soft Radial Glow */}
        <div
          className={`absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] rounded-full blur-[140px] transition-colors duration-1000 opacity-40 ${
            mood === 'lavender' ? 'bg-[#9C82CD]' : 'bg-[#E5B548]'
          }`}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Story & Call to Action */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            {/* Tag Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/80 border border-cosmic-stone/70 shadow-sm backdrop-blur-sm text-xs font-semibold tracking-wider uppercase text-cosmic-forest">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>Next-Gen Smart Air-Care Hardware</span>
              <span className="text-cosmic-muted">•</span>
              <span className="text-cosmic-wood font-bold">Dual-Tech Refill</span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-medium tracking-tight text-cosmic-forest leading-[1.12]">
              Breathe Better. <br />
              <span className="italic font-normal text-cosmic-wood">
                Feel the Difference.
              </span>
            </h1>

            {/* Sub-headline */}
            <p className="text-base sm:text-lg text-cosmic-forest/75 max-w-2xl font-light leading-relaxed mx-auto lg:mx-0">
              A bespoke wood-grain ultrasonic diffuser engineered with dual-mode flexibility: switch seamlessly between cold ultrasonic micro-mist and zero-power solid polymer gel cartridges.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <button
                onClick={openCart}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-7 py-3.5 rounded-full bg-cosmic-forest text-cosmic-cream font-medium text-sm hover:bg-cosmic-dark transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0"
              >
                <span>Customize Starter Kit — ₹1,999</span>
                <ArrowRight className="w-4 h-4 text-cosmic-wood-light" />
              </button>

              <button
                onClick={openCadModal}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-white/80 hover:bg-white border border-cosmic-stone text-cosmic-forest font-medium text-sm transition-all duration-200 shadow-sm hover:shadow"
              >
                <Layers className="w-4 h-4 text-cosmic-forest/60" />
                <span>Inspect 8-Layer CAD</span>
              </button>
            </div>

            {/* Guarantee / Specs Micro-Bar - All Clickable with modals */}
            <div className="pt-6 grid grid-cols-2 sm:grid-cols-4 gap-4 border-t border-cosmic-stone/40 text-left">
              <button
                onClick={openScienceModal}
                className="flex items-start gap-2.5 text-left p-1.5 rounded-xl hover:bg-cosmic-sand/40 transition-colors"
              >
                <Wind className="w-4 h-4 text-cosmic-wood mt-0.5 flex-shrink-0" />
                <div>
                  <div className="text-xs font-bold text-cosmic-forest flex items-center gap-1">
                    <span>2.4 MHz</span>
                  </div>
                  <div className="text-[11px] text-cosmic-muted leading-tight">Cold Micro-Mist &gt;</div>
                </div>
              </button>

              <button
                onClick={openCart}
                className="flex items-start gap-2.5 text-left p-1.5 rounded-xl hover:bg-cosmic-sand/40 transition-colors"
              >
                <Droplets className="w-4 h-4 text-cosmic-wood mt-0.5 flex-shrink-0" />
                <div>
                  <div className="text-xs font-bold text-cosmic-forest">Dual Format</div>
                  <div className="text-[11px] text-cosmic-muted leading-tight">Liquid + Gel &gt;</div>
                </div>
              </button>

              <button
                onClick={openCadModal}
                className="flex items-start gap-2.5 text-left p-1.5 rounded-xl hover:bg-cosmic-sand/40 transition-colors"
              >
                <Zap className="w-4 h-4 text-cosmic-wood mt-0.5 flex-shrink-0" />
                <div>
                  <div className="text-xs font-bold text-cosmic-forest">Type-C Fast</div>
                  <div className="text-[11px] text-cosmic-muted leading-tight">Universal 5V &gt;</div>
                </div>
              </button>

              <button
                onClick={openScienceModal}
                className="flex items-start gap-2.5 text-left p-1.5 rounded-xl hover:bg-cosmic-sand/40 transition-colors"
              >
                <ShieldCheck className="w-4 h-4 text-cosmic-wood mt-0.5 flex-shrink-0" />
                <div>
                  <div className="text-xs font-bold text-cosmic-forest">Dry-Burn Safe</div>
                  <div className="text-[11px] text-cosmic-muted leading-tight">Lab Tested &gt;</div>
                </div>
              </button>
            </div>
          </div>

          {/* Right Column: Hero Visual Showcase */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Product Visual Card with Subtle Glass Framing */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-b from-white/90 to-cosmic-sand/50 p-3 border border-white/60">
                <div className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-cosmic-forest/5">
                  <img
                    src={mood === 'lavender' ? '/assets/ambient-japandi-hero.jpg' : '/assets/botanical-dark-luxury.jpg'}
                    alt="COSMIC Japandi Diffuser Interior"
                    className="w-full h-full object-cover object-center transition-all duration-700 hover:scale-105"
                  />
                  
                  {/* Subtle Gradient Shade */}
                  <div className="absolute inset-0 bg-gradient-to-t from-cosmic-dark/70 via-transparent to-transparent" />

                  {/* Floating Atmosphere Selector Card */}
                  <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-md rounded-2xl p-4 border border-white/80 shadow-lg text-cosmic-forest">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[11px] font-bold uppercase tracking-wider text-cosmic-wood">
                        Atmospheric Mode
                      </span>
                      <span className="text-[11px] text-cosmic-muted font-medium">Click to Preview</span>
                    </div>

                    <div className="grid grid-cols-2 gap-2">
                      <button
                        onClick={() => setMood('lavender')}
                        className={`p-2.5 rounded-xl text-left border transition-all ${
                          mood === 'lavender'
                            ? 'bg-[#F3EEF9] border-[#8A70B2] ring-1 ring-[#8A70B2]'
                            : 'bg-white border-cosmic-stone/60 hover:border-cosmic-stone'
                        }`}
                      >
                        <div className="flex items-center gap-1.5 mb-0.5">
                          <span className="w-2 h-2 rounded-full bg-[#8A70B2]" />
                          <span className="text-xs font-bold text-cosmic-forest">Twilight</span>
                        </div>
                        <p className="text-[10px] text-cosmic-forest/70 leading-tight">French Lavender & Cedar</p>
                      </button>

                      <button
                        onClick={() => setMood('gardenia')}
                        className={`p-2.5 rounded-xl text-left border transition-all ${
                          mood === 'gardenia'
                            ? 'bg-[#FCF6E8] border-[#D4A034] ring-1 ring-[#D4A034]'
                            : 'bg-white border-cosmic-stone/60 hover:border-cosmic-stone'
                        }`}
                      >
                        <div className="flex items-center gap-1.5 mb-0.5">
                          <span className="w-2 h-2 rounded-full bg-[#D4A034]" />
                          <span className="text-xs font-bold text-cosmic-forest">Sunlit</span>
                        </div>
                        <p className="text-[10px] text-cosmic-forest/70 leading-tight">White Gardenia & Amber</p>
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Innovation Pill */}
              <div className="absolute -top-4 -right-4 sm:-right-6 bg-white/95 backdrop-blur-md px-4 py-2.5 rounded-2xl border border-cosmic-stone/80 shadow-xl flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-cosmic-wood/10 flex items-center justify-center text-cosmic-wood">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-cosmic-forest">Japandi Precision</div>
                  <div className="text-[10px] text-cosmic-muted">Acoustic &lt;20dB Design</div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
