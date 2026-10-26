import React, { useState } from 'react';
import { Droplet, Layers, Zap, SlidersHorizontal, Sparkles, CheckCircle2, HelpCircle } from 'lucide-react';

const GUIDE_STEPS = [
  {
    step: 1,
    title: 'Select Your Refill Mode',
    subtitle: 'Liquid Mist or Solid Gel Pod',
    description: 'For active cold mist: lift the wood dome and pour 100ml clean water into the silver-ion tank, then add 3–5 drops of Liquid Botanical Refill. For passive zero-power scenting: simply peel the seal on the Solid Gel Pod and drop it inside.',
    tip: 'Never fill past the MAX 100ml indicator line to maintain optimal 360° airflow.',
    icon: Droplet,
  },
  {
    step: 2,
    title: 'Align Acoustic Wood Dome',
    subtitle: 'Precision Magnetic Snap',
    description: 'Gently place the wood-grain acoustic dome back over the base. Internal neodymium alignment guides lock it into position, ensuring the sound-damping labyrinth creates a tight, resonance-free acoustic seal.',
    tip: 'Ensure the 360° circumferential outlet ring is clear of obstructions.',
    icon: Layers,
  },
  {
    step: 3,
    title: 'Connect Type-C Power',
    subtitle: 'Universal 5V USB Compatibility',
    description: 'Insert the USB-C cable into the rear shielded port. Connect to any standard phone wall charger, laptop USB port, or portable power bank for cord-free mobility around your living room or bedroom.',
    tip: 'Draws only 5 Watts — ultra low-energy consumption (less than an LED lightbulb).',
    icon: Zap,
  },
  {
    step: 4,
    title: 'Single-Touch Mist Control',
    subtitle: 'Dual-Cycle Smart PCB Logic',
    description: 'Press the capacitive tactile button on the front base: 1 tap initiates continuous cold micro-mist (8 hrs); 2 taps initiates intermittent 30-sec pulse mode (24 hrs); 3 taps powers off or leaves gentle ambient ring light.',
    tip: 'Auto dry-burn sensor cuts power instantly if water runs out.',
    icon: SlidersHorizontal,
  },
];

export const DiffuserGuide: React.FC = () => {
  const [activeStep, setActiveStep] = useState(1);

  return (
    <section className="py-20 md:py-28 bg-[#FAF7F2] border-t border-cosmic-stone/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cosmic-sand/80 border border-cosmic-stone/60 text-xs font-semibold tracking-widest uppercase text-cosmic-wood">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Interactive Assembly &amp; Ritual</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-medium text-cosmic-forest leading-tight">
            How to Use: <br />
            <span className="italic font-normal text-cosmic-wood">The 4-Step Daily Scent Ritual</span>
          </h2>
          <p className="text-base text-cosmic-forest/75 font-light leading-relaxed">
            Thoughtfully engineered for effortless everyday operation. No complicated menus or apps required — pure sensory simplicity.
          </p>
        </div>

        {/* Step-by-Step Interactive Tabs */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-10">
          {GUIDE_STEPS.map((step) => {
            const Icon = step.icon;
            const isActive = activeStep === step.step;
            return (
              <button
                key={step.step}
                onClick={() => setActiveStep(step.step)}
                className={`p-4 rounded-2xl text-left border transition-all duration-200 flex flex-col justify-between ${
                  isActive
                    ? 'bg-white border-cosmic-wood shadow-md ring-1 ring-cosmic-wood/30'
                    : 'bg-white/70 border-cosmic-stone/60 hover:bg-white'
                }`}
              >
                <div className="flex items-center justify-between mb-3">
                  <span
                    className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${
                      isActive
                        ? 'bg-cosmic-wood text-white'
                        : 'bg-cosmic-sand text-cosmic-forest/70'
                    }`}
                  >
                    0{step.step}
                  </span>
                  <Icon
                    className={`w-4 h-4 ${
                      isActive ? 'text-cosmic-wood' : 'text-cosmic-muted'
                    }`}
                  />
                </div>
                <div>
                  <div className="text-xs font-bold text-cosmic-forest">{step.title}</div>
                  <div className="text-[11px] text-cosmic-muted mt-0.5">{step.subtitle}</div>
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Step Detailed Card */}
        {(() => {
          const step = GUIDE_STEPS.find((s) => s.step === activeStep) || GUIDE_STEPS[0];
          const Icon = step.icon;
          return (
            <div className="bg-white rounded-3xl p-8 sm:p-12 border border-cosmic-stone/60 shadow-xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              {/* Left Column: Visual Step Illustration */}
              <div className="lg:col-span-5 bg-[#FAF7F2] rounded-2xl p-8 border border-cosmic-stone/40 flex flex-col items-center justify-center min-h-[280px] relative overflow-hidden">
                <div className="w-20 h-20 rounded-full bg-white shadow-sm border border-cosmic-stone/60 flex items-center justify-center text-cosmic-wood mb-4">
                  <Icon className="w-9 h-9" />
                </div>
                <div className="text-sm font-serif font-bold text-cosmic-forest text-center">
                  Step 0{step.step}: {step.title}
                </div>
                <div className="text-xs text-cosmic-wood font-medium text-center mt-1">
                  {step.subtitle}
                </div>

                {/* Subtle animated halo */}
                <div className="absolute inset-0 bg-gradient-to-t from-cosmic-sand/40 to-transparent pointer-events-none" />
              </div>

              {/* Right Column: Step Description and Pro Tips */}
              <div className="lg:col-span-7 space-y-5">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-mono uppercase tracking-widest text-cosmic-wood font-bold bg-cosmic-sand px-3 py-1 rounded-full">
                    Step {step.step} of 4
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-serif font-medium text-cosmic-forest">
                  {step.title}
                </h3>

                <p className="text-sm sm:text-base text-cosmic-forest/80 font-light leading-relaxed">
                  {step.description}
                </p>

                {/* Pro Tip Callout Box */}
                <div className="p-4 rounded-2xl bg-amber-50/70 border border-amber-200/60 flex items-start gap-3">
                  <HelpCircle className="w-4 h-4 text-amber-700 mt-0.5 flex-shrink-0" />
                  <div className="text-xs text-amber-900 leading-relaxed">
                    <strong className="font-semibold">Master Tip: </strong>
                    {step.tip}
                  </div>
                </div>

                {/* Maintenance Recommendation */}
                <div className="pt-2 flex items-center gap-4 text-xs text-cosmic-forest/70 border-t border-cosmic-stone/40">
                  <span className="flex items-center gap-1.5 text-emerald-700 font-semibold">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    Easy 30-Day Cleaning
                  </span>
                  <span>•</span>
                  <span>Wipe ceramic disc with alcohol swab once a month</span>
                </div>
              </div>

            </div>
          );
        })()}

      </div>
    </section>
  );
};
