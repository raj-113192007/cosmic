import React from 'react';
import { Leaf, ShieldAlert, Sparkles, CheckCircle2, XCircle, HeartHandshake, RefreshCw, Feather } from 'lucide-react';

export const BrandMission: React.FC = () => {
  return (
    <section className="py-20 md:py-28 bg-[#FAF7F2] border-t border-cosmic-stone/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cosmic-sand/80 border border-cosmic-stone/60 text-xs font-semibold tracking-widest uppercase text-cosmic-wood">
            <Feather className="w-3.5 h-3.5" />
            <span>The COSMIC Philosophy</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-medium text-cosmic-forest leading-tight">
            Why We Re-engineered <br />
            <span className="italic font-normal text-cosmic-wood">The Everyday Air-Care Device</span>
          </h2>
          <p className="text-base text-cosmic-forest/75 font-light leading-relaxed">
            Most commercial air fresheners mask indoor spaces with synthetic aerosols, chemical propellants, and noisy plastic diffusers. COSMIC was born out of a desire for authentic botanical purity, acoustic calm, and thoughtful circular hardware.
          </p>
        </div>

        {/* Illustrated Contrast Grid: Traditional vs COSMIC */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch mb-16">
          
          {/* Traditional Room Sprays & Diffusers */}
          <div className="bg-white/80 rounded-3xl p-8 sm:p-10 border border-rose-100 shadow-sm relative overflow-hidden flex flex-col justify-between">
            <div className="absolute top-0 right-0 w-32 h-32 bg-rose-50 rounded-bl-full -z-10 opacity-70" />
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-rose-500 bg-rose-50 px-3 py-1 rounded-full">
                  The Old Standard
                </span>
                <ShieldAlert className="w-5 h-5 text-rose-400" />
              </div>
              
              <h3 className="text-2xl font-serif font-medium text-cosmic-forest">
                Synthetic Aerosols & Cheap Plastic Diffusers
              </h3>

              <p className="text-sm text-cosmic-forest/70 font-light leading-relaxed">
                Single-use aerosol cans emit flammable butane/propane propellants and volatile organic compounds (VOCs) that irritate sensitive lungs, while cheap diffusers buzz loudly and overheat delicate botanical oils.
              </p>

              <ul className="space-y-3.5 pt-2">
                <li className="flex items-start gap-3 text-sm text-cosmic-forest/80">
                  <XCircle className="w-5 h-5 text-rose-400 flex-shrink-0 mt-0.5" />
                  <span>Synthetic phthalates and petrochemical artificial fixatives</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-cosmic-forest/80">
                  <XCircle className="w-5 h-5 text-rose-400 flex-shrink-0 mt-0.5" />
                  <span>Noisy motor buzz (&gt;45 dB) that disrupts sleep and study focus</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-cosmic-forest/80">
                  <XCircle className="w-5 h-5 text-rose-400 flex-shrink-0 mt-0.5" />
                  <span>Heated coils that scorch and destroy essential oil therapeutic properties</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-cosmic-forest/80">
                  <XCircle className="w-5 h-5 text-rose-400 flex-shrink-0 mt-0.5" />
                  <span>Single-use plastic landfill waste after every empty refill</span>
                </li>
              </ul>
            </div>

            <div className="mt-8 pt-4 border-t border-rose-100 text-xs text-rose-600/80 font-medium">
              Result: Overwhelming chemical headache & frequent clutter
            </div>
          </div>

          {/* The COSMIC Standard */}
          <div className="bg-white rounded-3xl p-8 sm:p-10 border border-cosmic-wood/30 shadow-md relative overflow-hidden flex flex-col justify-between">
            <div className="absolute top-0 right-0 w-36 h-36 bg-cosmic-wood-light/10 rounded-bl-full -z-10" />
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-cosmic-wood bg-cosmic-sand px-3 py-1 rounded-full">
                  The COSMIC Standard
                </span>
                <Sparkles className="w-5 h-5 text-cosmic-wood" />
              </div>

              <h3 className="text-2xl font-serif font-medium text-cosmic-forest">
                Japandi Acoustic Silence & Pure Plant Botanicals
              </h3>

              <p className="text-sm text-cosmic-forest/70 font-light leading-relaxed">
                An heirloom-grade desktop companion crafted with tactile wood-grain textures, sub-micron cold ultrasonic atomization, and dual interchangeable refills (active mist or passive solid gel).
              </p>

              <ul className="space-y-3.5 pt-2">
                <li className="flex items-start gap-3 text-sm text-cosmic-forest/90">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>100% plant-extracted essential oils & clean food-safe carriers</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-cosmic-forest/90">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>Acoustic sound-baffled chamber achieving under 20 dB whisper quietness</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-cosmic-forest/90">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>2.4 MHz ultrasonic cold atomization (preserves raw botanical terpenes)</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-cosmic-forest/90">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>Refillable-for-life philosophy with modular aluminum & gel pods</span>
                </li>
              </ul>
            </div>

            <div className="mt-8 pt-4 border-t border-cosmic-sand text-xs text-cosmic-wood font-semibold flex items-center justify-between">
              <span>Result: Restorative atmosphere, sensory tranquility & zero clutter</span>
              <span className="text-[11px] bg-emerald-50 text-emerald-700 px-2 py-0.5 rounded-full">35% Less Power</span>
            </div>
          </div>

        </div>

        {/* 3 Core Architectural Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white/90 p-6 rounded-2xl border border-cosmic-stone/50 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-10 h-10 rounded-xl bg-cosmic-lavender-light flex items-center justify-center text-cosmic-lavender mb-4">
              <Leaf className="w-5 h-5" />
            </div>
            <h4 className="text-base font-serif font-medium text-cosmic-forest mb-2">1. Pure Bio-Chemistry</h4>
            <p className="text-xs text-cosmic-forest/70 font-light leading-relaxed">
              Every drop is steam-distilled from natural botanical sources. Zero synthetic aldehydes, zero benzene derivatives, and certified non-toxic for pets and people.
            </p>
          </div>

          <div className="bg-white/90 p-6 rounded-2xl border border-cosmic-stone/50 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-10 h-10 rounded-xl bg-cosmic-gardenia-light flex items-center justify-center text-cosmic-gardenia-dark mb-4">
              <RefreshCw className="w-5 h-5" />
            </div>
            <h4 className="text-base font-serif font-medium text-cosmic-forest mb-2">2. Dual-Refill Versatility</h4>
            <p className="text-xs text-cosmic-forest/70 font-light leading-relaxed">
              Active mist when you desire immediate room ambiance; passive solid polymer gel when you want cord-free, water-free fragrance that lasts 30+ days without power.
            </p>
          </div>

          <div className="bg-white/90 p-6 rounded-2xl border border-cosmic-stone/50 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-10 h-10 rounded-xl bg-cosmic-sand flex items-center justify-center text-cosmic-wood mb-4">
              <HeartHandshake className="w-5 h-5" />
            </div>
            <h4 className="text-base font-serif font-medium text-cosmic-forest mb-2">3. Japandi Durability</h4>
            <p className="text-xs text-cosmic-forest/70 font-light leading-relaxed">
              Designed to live on your bedside table, executive desk, or cafe counter for years. Finished with authentic matte wood-grain and silver-ion antibacterial inner tanks.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};
