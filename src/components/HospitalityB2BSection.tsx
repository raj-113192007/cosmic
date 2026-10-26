import React, { useState } from 'react';
import { Coffee, Building2, Flame, Utensils, CheckCircle2, ArrowRight, Calculator } from 'lucide-react';

interface HospitalityB2BSectionProps {
  openB2B: () => void;
}

export const HospitalityB2BSection: React.FC<HospitalityB2BSectionProps> = ({ openB2B }) => {
  const [sqft, setSqft] = useState<number>(800);

  // 1 diffuser per 350-400 sq. ft.
  const recommendedDiffusers = Math.max(1, Math.ceil(sqft / 350));
  const monthlyRefillBottles = recommendedDiffusers * 2;
  const wholesaleSavings = 25; // 25% wholesale discount

  return (
    <section id="hospitality" className="py-20 md:py-28 bg-[#FAF7F2] border-t border-cosmic-stone/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cosmic-sand/80 border border-cosmic-stone/60 text-xs font-semibold tracking-widest uppercase text-cosmic-wood">
            <Building2 className="w-3.5 h-3.5" />
            <span>Hospitality &amp; Architectural Scenting</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-medium text-cosmic-forest leading-tight">
            Designed for Cafes, Boutiques <br />
            <span className="italic font-normal text-cosmic-wood">&amp; Specialty Commercial Spaces</span>
          </h2>
          <p className="text-base text-cosmic-forest/75 font-light leading-relaxed">
            Elevate guest dwell time and reinforce your brand atmosphere without overpowering food aromas or creating open flame fire hazards.
          </p>
        </div>

        {/* 3 Pillars of Hospitality Scenting */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-cosmic-stone/60 shadow-sm space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-amber-50 flex items-center justify-center text-amber-800">
              <Utensils className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-serif font-medium text-cosmic-forest">
              Culinary Harmony
            </h3>
            <p className="text-xs text-cosmic-forest/70 font-light leading-relaxed">
              Standard commercial air sprays use harsh artificial musks that clash with espresso and gourmet food. Our pure floral and botanical extracts sit lightly in ambient air, enhancing ambiance without masking flavors.
            </p>
            <div className="flex items-center gap-2 text-xs text-cosmic-wood font-semibold pt-1">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              <span>Food &amp; Beverage Friendly</span>
            </div>
          </div>

          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-cosmic-stone/60 shadow-sm space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-rose-50 flex items-center justify-center text-rose-800">
              <Flame className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-serif font-medium text-cosmic-forest">
              Zero Flame Risk
            </h3>
            <p className="text-xs text-cosmic-forest/70 font-light leading-relaxed">
              Scented candles violate fire safety codes in many commercial premises and require constant staff monitoring. COSMIC delivers ultrasonic cold mist with intelligent dry-burn auto shut-off and zero flame hazard.
            </p>
            <div className="flex items-center gap-2 text-xs text-cosmic-wood font-semibold pt-1">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              <span>Commercial Insurance Safe</span>
            </div>
          </div>

          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-cosmic-stone/60 shadow-sm space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-emerald-50 flex items-center justify-center text-emerald-800">
              <Coffee className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-serif font-medium text-cosmic-forest">
              Aesthetic Japandi Fit
            </h3>
            <p className="text-xs text-cosmic-forest/70 font-light leading-relaxed">
              Plastic air fresheners look cheap on boutique countertops. COSMIC’s natural wood-grain tactile dome and whisper-quiet operation complement specialty coffee bars, minimalist fashion boutiques, and spa reception desks.
            </p>
            <div className="flex items-center gap-2 text-xs text-cosmic-wood font-semibold pt-1">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              <span>High Interior Design Value</span>
            </div>
          </div>

        </div>

        {/* Commercial Space Scenting Calculator */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-cosmic-stone/60 shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-6 space-y-4">
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-cosmic-wood">
                <Calculator className="w-4 h-4" />
                <span>Commercial Scent Coverage Calculator</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-serif font-medium text-cosmic-forest">
                Estimate Coverage for Your Venue
              </h3>
              <p className="text-sm text-cosmic-forest/70 font-light leading-relaxed">
                Adjust your floor space size. Our system calculates the exact number of diffusers and monthly refill packs required for constant, balanced ambient aroma.
              </p>

              {/* Space Slider */}
              <div className="pt-4 space-y-3">
                <div className="flex items-center justify-between text-sm font-semibold text-cosmic-forest">
                  <span>Floor Plan Size:</span>
                  <span className="text-cosmic-wood font-mono text-base">{sqft} Sq. Ft.</span>
                </div>
                <input
                  type="range"
                  min="200"
                  max="3000"
                  step="100"
                  value={sqft}
                  onChange={(e) => setSqft(Number(e.target.value))}
                  className="w-full h-2 bg-cosmic-sand rounded-lg appearance-none cursor-pointer accent-cosmic-wood"
                />
                <div className="flex justify-between text-[11px] text-cosmic-muted font-mono">
                  <span>200 sq.ft (Boutique Room)</span>
                  <span>1,200 sq.ft (Artisan Cafe)</span>
                  <span>3,000 sq.ft (Multi-Zone)</span>
                </div>
              </div>
            </div>

            {/* Calculated Plan Box */}
            <div className="lg:col-span-6 bg-[#FAF7F2] p-6 rounded-2xl border border-cosmic-stone/60 space-y-5">
              <div className="flex items-center justify-between border-b border-cosmic-stone/40 pb-3">
                <span className="text-xs font-mono uppercase tracking-wider text-cosmic-forest font-bold">
                  Recommended B2B Setup
                </span>
                <span className="text-xs font-semibold text-emerald-700 bg-emerald-100/80 px-2.5 py-0.5 rounded-full">
                  Wholesale Tier Active (-{wholesaleSavings}%)
                </span>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <div className="text-[11px] text-cosmic-muted uppercase font-semibold">Diffusers Required</div>
                  <div className="text-2xl font-serif font-bold text-cosmic-forest">{recommendedDiffusers} Units</div>
                  <div className="text-[10px] text-cosmic-forest/60">Strategically placed 360° dispersion</div>
                </div>
                <div>
                  <div className="text-[11px] text-cosmic-muted uppercase font-semibold">Monthly Refills</div>
                  <div className="text-2xl font-serif font-bold text-cosmic-wood">{monthlyRefillBottles} Packs</div>
                  <div className="text-[10px] text-cosmic-forest/60">Automated monthly delivery</div>
                </div>
              </div>

              <div className="pt-2 border-t border-cosmic-stone/40 flex flex-col sm:flex-row items-center justify-between gap-3">
                <div className="text-xs text-cosmic-forest/80">
                  Includes free placement consultation &amp; fragrance sampling.
                </div>
                <button
                  onClick={openB2B}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-cosmic-forest text-cosmic-cream font-medium text-xs hover:bg-cosmic-dark transition-all shadow-md"
                >
                  <span>Request Cafe Trial Kit</span>
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
