import React from 'react';
import { Leaf, Recycle, ShieldCheck, Mail } from 'lucide-react';

interface SustainabilityPledgeProps {
  openFounderContact: () => void;
}

export const SustainabilityPledge: React.FC<SustainabilityPledgeProps> = ({ openFounderContact }) => {
  return (
    <section className="py-20 md:py-28 bg-[#FAF7F2] border-t border-cosmic-stone/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cosmic-sand/80 border border-cosmic-stone/60 text-xs font-semibold tracking-widest uppercase text-cosmic-wood">
            <Recycle className="w-3.5 h-3.5" />
            <span>Circular Hardware &amp; Purity</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-medium text-cosmic-forest leading-tight">
            Designed to Last Years. <br />
            <span className="italic font-normal text-cosmic-wood">Not Destined for Landfills.</span>
          </h2>
          <p className="text-base text-cosmic-forest/75 font-light leading-relaxed">
            Every year, billions of single-use aerosol spray cans and disposable plastic diffusers end up in municipal landfills. COSMIC is built on a circular closed-loop model.
          </p>
        </div>

        {/* 3 Circular Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-cosmic-stone/60 shadow-sm space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-emerald-50 flex items-center justify-center text-emerald-800">
              <Recycle className="w-6 h-6" />
            </div>
            <h4 className="text-xl font-serif font-medium text-cosmic-forest">
              100% Recyclable Aluminum Flasks
            </h4>
            <p className="text-xs text-cosmic-forest/70 font-light leading-relaxed">
              Our 100ml liquid botanical refills are packaged in light-shielding, infinitely recyclable brushed aluminum canisters that preserve delicate terpenes from UV light degradation.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-cosmic-stone/60 shadow-sm space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-cosmic-sand flex items-center justify-center text-cosmic-wood">
              <Leaf className="w-6 h-6" />
            </div>
            <h4 className="text-xl font-serif font-medium text-cosmic-forest">
              Bio-Based Seaweed Polymer Gels
            </h4>
            <p className="text-xs text-cosmic-forest/70 font-light leading-relaxed">
              Our passive solid gel cartridges are synthesized from natural agar and carrageenan seaweed polymers. Once depleted after 35–45 days, the cartridge naturally biodegrades.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-cosmic-stone/60 shadow-sm space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-amber-50 flex items-center justify-center text-amber-800">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h4 className="text-xl font-serif font-medium text-cosmic-forest">
              Modular 8-Layer Repairability
            </h4>
            <p className="text-xs text-cosmic-forest/70 font-light leading-relaxed">
              Unlike glued disposable gadgets, all 8 layers of the COSMIC diffuser are modular. If an ultrasonic ceramic plate ever wears down after 5,000 hours, it can be replaced with a single screwdriver turn.
            </p>
          </div>

        </div>

        {/* Founder's Letter Box */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-cosmic-wood/30 shadow-lg relative overflow-hidden">
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-cosmic-sand flex items-center justify-center text-cosmic-wood font-serif font-bold text-base">
                AP
              </div>
              <div>
                <div className="text-sm font-serif font-bold text-cosmic-forest">Aido Paron</div>
                <div className="text-xs text-cosmic-wood font-mono">Founder &amp; Product Architect • BBA Department</div>
              </div>
            </div>

            <div className="text-sm sm:text-base text-cosmic-forest/80 font-light leading-relaxed space-y-4 italic font-serif">
              <p>
                "When I began sketching the prototype for COSMIC, I was frustrated by the false choices we have in modern fragrance. You either buy cheap plastic diffusers that buzz like a refrigerator and break in two months, or you burn paraffin wax candles that set off fire alarms and coat your walls in soot.
              </p>
              <p>
                COSMIC was engineered to treat air-care like architectural audio: invisible, quiet, beautiful, and deeply respectful of the environment. By giving you dual choices — cold ultrasonic micro-mist when you need instant ambiance, and zero-power solid gel when you want set-and-forget simplicity — we hope to bring a sense of mindful tranquility into your home, office, and cafe."
              </p>
            </div>

            <div className="pt-4 border-t border-cosmic-stone/40 flex flex-wrap items-center justify-between gap-4 text-xs">
              <button
                onClick={openFounderContact}
                className="flex items-center gap-2 text-cosmic-forest/80 hover:text-cosmic-wood transition-colors group"
              >
                <Mail className="w-3.5 h-3.5 text-cosmic-wood" />
                <span>Direct Founder Desk: </span>
                <span className="text-cosmic-wood font-semibold group-hover:underline">
                  aparon375@gmail.com (Send Note &gt;)
                </span>
              </button>
              <div className="text-cosmic-muted font-mono">
                COSMIC Air-Care Research &amp; Design Group
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
