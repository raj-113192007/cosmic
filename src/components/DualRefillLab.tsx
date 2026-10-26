import React, { useState } from 'react';
import { RefreshCw, Droplets, Sliders, CheckCircle2, ZapOff, ArrowRight } from 'lucide-react';

interface DualRefillLabProps {
  openCart: () => void;
}

export const DualRefillLab: React.FC<DualRefillLabProps> = ({ openCart }) => {
  const [dailyHours, setDailyHours] = useState<number>(6);

  // Calculations based on 100ml reservoir (4ml per hour average micro-mist consumption)
  const mlPerHour = 4.2;
  const totalBottleMl = 100;
  const daysPerBottle = Math.round(totalBottleMl / (dailyHours * mlPerHour));
  const dailyCost = (299 / daysPerBottle).toFixed(1);
  const aerosolCansSaved = Math.round((365 / daysPerBottle) * 1.5);

  return (
    <section id="technology" className="py-20 md:py-28 bg-[#FAF7F2] border-t border-cosmic-stone/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cosmic-sand/80 border border-cosmic-stone/60 text-xs font-semibold tracking-widest uppercase text-cosmic-wood">
            <RefreshCw className="w-3.5 h-3.5" />
            <span>Circular Refill Platform</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-medium text-cosmic-forest leading-tight">
            One Hardware Base. <br />
            <span className="italic font-normal text-cosmic-wood">Two Proprietary Refill Formats.</span>
          </h2>
          <p className="text-base text-cosmic-forest/75 font-light leading-relaxed">
            Choose active ultrasonic mist when you want fast atmospheric immersion. Choose passive solid polymer gel when you want cord-free, water-free continuous scenting with zero electricity.
          </p>
        </div>

        {/* Side-by-Side Dual Format Showcase */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          
          {/* Format 1: Liquid Ultrasonic Micro-Mist */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-cosmic-wood/40 shadow-lg relative overflow-hidden flex flex-col justify-between">
            <div className="space-y-6">
              {/* Product Pack Imagery & Badges */}
              <div className="relative aspect-video rounded-2xl overflow-hidden bg-[#F6F2EA] flex items-center justify-center p-4">
                <img
                  src="/assets/refill-liquid-ultrasonic.jpg"
                  alt="COSMIC Liquid Ultrasonic Mist Refill Pack"
                  className="w-full h-full object-contain hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-cosmic-forest border border-cosmic-stone/60 flex items-center gap-1.5">
                  <Droplets className="w-3.5 h-3.5 text-cosmic-wood" />
                  <span>Active Ultrasonic Mist</span>
                </div>
                <div className="absolute bottom-3 right-3 bg-cosmic-forest text-cosmic-cream px-3 py-1 rounded-full text-xs font-mono font-bold">
                  ₹299 / 100ml
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-serif font-medium text-cosmic-forest">
                  Pure Botanical Liquid Refill
                </h3>
                <p className="text-xs text-cosmic-wood font-semibold mt-1 uppercase tracking-wider">
                  Instant Immersion • 8–24 Hours Per Fill
                </p>
              </div>

              <p className="text-sm text-cosmic-forest/70 font-light leading-relaxed">
                Cold steam-distilled essential oil concentrate formulated with organic solubilizers. Blends cleanly into tap water for immediate room scenting across spaces up to 350 sq. ft.
              </p>

              <div className="space-y-2.5 pt-2 border-t border-cosmic-sand">
                <div className="flex items-center gap-2.5 text-xs text-cosmic-forest/80">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                  <span>Sub-micron cold vapor carries instantly across rooms</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs text-cosmic-forest/80">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                  <span>Dry-burn auto shut-off safe</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs text-cosmic-forest/80">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                  <span>100% Recyclable aluminum canister with drip-free dropper</span>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-cosmic-stone/40 flex items-center justify-between">
              <span className="text-xs text-cosmic-forest/60">Margin: 70% recurring</span>
              <button
                onClick={openCart}
                className="text-xs font-semibold text-cosmic-wood hover:text-cosmic-dark flex items-center gap-1"
              >
                <span>Add to Starter Kit</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Format 2: Passive Solid Gel Cartridge */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-cosmic-wood/40 shadow-lg relative overflow-hidden flex flex-col justify-between">
            <div className="space-y-6">
              {/* Product Pack Imagery & Badges */}
              <div className="relative aspect-video rounded-2xl overflow-hidden bg-[#F6F2EA] flex items-center justify-center p-4">
                <img
                  src="/assets/refill-passive-gel.jpg"
                  alt="COSMIC Passive Ambient Gel Cartridge Pack"
                  className="w-full h-full object-contain hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-cosmic-forest border border-cosmic-stone/60 flex items-center gap-1.5">
                  <ZapOff className="w-3.5 h-3.5 text-cosmic-wood" />
                  <span>Zero-Power Solid Gel</span>
                </div>
                <div className="absolute bottom-3 right-3 bg-cosmic-forest text-cosmic-cream px-3 py-1 rounded-full text-xs font-mono font-bold">
                  ₹249 / Pod
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-serif font-medium text-cosmic-forest">
                  Passive Evaporative Gel Cartridge
                </h3>
                <p className="text-xs text-cosmic-wood font-semibold mt-1 uppercase tracking-wider">
                  Zero Water • Zero Electricity • 30+ Days
                </p>
              </div>

              <p className="text-sm text-cosmic-forest/70 font-light leading-relaxed">
                A solid-state, biodegradable natural seaweed polymer matrix that steadily releases gentle scent molecules through ambient air circulation. No cord, no battery, zero maintenance.
              </p>

              <div className="space-y-2.5 pt-2 border-t border-cosmic-sand">
                <div className="flex items-center gap-2.5 text-xs text-cosmic-forest/80">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                  <span>100% Spill-proof solid gel (safe around books and laptops)</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs text-cosmic-forest/80">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                  <span>Steady continuous release: lasts 30 to 45 days</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs text-cosmic-forest/80">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                  <span>Place anywhere: closets, bookshelves, reception desks</span>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-cosmic-stone/40 flex items-center justify-between">
              <span className="text-xs text-cosmic-forest/60">Margin: 72% recurring</span>
              <button
                onClick={openCart}
                className="text-xs font-semibold text-cosmic-wood hover:text-cosmic-dark flex items-center gap-1"
              >
                <span>Add to Starter Kit</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

        </div>

        {/* Interactive Longevity & Cost Savings Calculator */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-cosmic-stone/60 shadow-lg">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-6 space-y-4">
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-cosmic-wood">
                <Sliders className="w-4 h-4" />
                <span>Interactive Refill Lifespan Calculator</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-serif font-medium text-cosmic-forest">
                Calculate Your Daily Scent Routine
              </h3>
              <p className="text-sm text-cosmic-forest/70 font-light leading-relaxed">
                Slide to match how many hours a day you operate your diffuser. See how long one ₹299 bottle lasts and how much you save over aerosol cans.
              </p>

              {/* Slider Control */}
              <div className="pt-4 space-y-3">
                <div className="flex items-center justify-between text-sm font-semibold text-cosmic-forest">
                  <span>Daily Diffusion Time:</span>
                  <span className="text-cosmic-wood font-mono text-base">{dailyHours} Hours / Day</span>
                </div>
                <input
                  type="range"
                  min="2"
                  max="16"
                  step="1"
                  value={dailyHours}
                  onChange={(e) => setDailyHours(Number(e.target.value))}
                  className="w-full h-2 bg-cosmic-sand rounded-lg appearance-none cursor-pointer accent-cosmic-wood"
                />
                <div className="flex justify-between text-[11px] text-cosmic-muted font-mono">
                  <span>2 hrs (Evening only)</span>
                  <span>8 hrs (Workday)</span>
                  <span>16 hrs (All day)</span>
                </div>
              </div>
            </div>

            {/* Calculated Metrics Display */}
            <div className="lg:col-span-6 grid grid-cols-2 gap-4">
              <div className="bg-[#FAF7F2] p-5 rounded-2xl border border-cosmic-stone/50 space-y-1">
                <div className="text-[11px] font-bold uppercase tracking-wider text-cosmic-muted">
                  Refill Longevity
                </div>
                <div className="text-3xl font-serif font-bold text-cosmic-forest">
                  {daysPerBottle} <span className="text-sm font-normal text-cosmic-wood">Days</span>
                </div>
                <p className="text-[11px] text-cosmic-forest/65 leading-tight">
                  Single 100ml liquid refill lifespan at {dailyHours}h/day
                </p>
              </div>

              <div className="bg-[#FAF7F2] p-5 rounded-2xl border border-cosmic-stone/50 space-y-1">
                <div className="text-[11px] font-bold uppercase tracking-wider text-cosmic-muted">
                  Daily Cost
                </div>
                <div className="text-3xl font-serif font-bold text-emerald-700">
                  ₹{dailyCost} <span className="text-sm font-normal text-cosmic-forest/60">/ day</span>
                </div>
                <p className="text-[11px] text-cosmic-forest/65 leading-tight">
                  75% cheaper than commercial aerosol room fresheners
                </p>
              </div>

              <div className="bg-[#FAF7F2] p-5 rounded-2xl border border-cosmic-stone/50 space-y-1">
                <div className="text-[11px] font-bold uppercase tracking-wider text-cosmic-muted">
                  Passive Gel Lifespan
                </div>
                <div className="text-3xl font-serif font-bold text-cosmic-wood">
                  35+ <span className="text-sm font-normal text-cosmic-forest/60">Days</span>
                </div>
                <p className="text-[11px] text-cosmic-forest/65 leading-tight">
                  Zero water, zero electricity continuous ambient aroma
                </p>
              </div>

              <div className="bg-[#FAF7F2] p-5 rounded-2xl border border-cosmic-stone/50 space-y-1">
                <div className="text-[11px] font-bold uppercase tracking-wider text-cosmic-muted">
                  Landfill Saved
                </div>
                <div className="text-3xl font-serif font-bold text-cosmic-forest">
                  ~{aerosolCansSaved} <span className="text-sm font-normal text-emerald-600">Cans/yr</span>
                </div>
                <p className="text-[11px] text-cosmic-forest/65 leading-tight">
                  Zero toxic butane propellants or discarded cans
                </p>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
