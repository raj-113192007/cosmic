import React, { useState } from 'react';
import { Cpu, VolumeX, ShieldCheck, ThermometerSnowflake, Activity } from 'lucide-react';

export const HowItWorksScience: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'cavitation' | 'coldmist' | 'acoustic'>('cavitation');
  const [frequencyBoost, setFrequencyBoost] = useState(false);

  return (
    <section id="technology" className="py-20 md:py-28 bg-[#FAF7F2] border-t border-cosmic-stone/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cosmic-sand/80 border border-cosmic-stone/60 text-xs font-semibold tracking-widest uppercase text-cosmic-wood">
            <Cpu className="w-3.5 h-3.5" />
            <span>The Science of Cold Mist</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-medium text-cosmic-forest leading-tight">
            How It Works: <br />
            <span className="italic font-normal text-cosmic-wood">2.4 MHz Ultrasonic Cavitation</span>
          </h2>
          <p className="text-base text-cosmic-forest/75 font-light leading-relaxed">
            COSMIC does not use heat, heating elements, or combustion. Here is the exact physics and material engineering that turns water and botanicals into an ultra-fine, buoyant suspension.
          </p>
        </div>

        {/* Science Navigation Tabs */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex p-1.5 rounded-2xl bg-white border border-cosmic-stone/70 shadow-sm">
            <button
              onClick={() => setActiveTab('cavitation')}
              className={`flex items-center gap-2 px-4 sm:px-6 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 ${
                activeTab === 'cavitation'
                  ? 'bg-cosmic-forest text-cosmic-cream shadow-sm'
                  : 'text-cosmic-forest/70 hover:text-cosmic-forest'
              }`}
            >
              <Activity className="w-4 h-4 text-cosmic-wood-light" />
              <span>1. Piezoelectric Cavitation</span>
            </button>
            <button
              onClick={() => setActiveTab('coldmist')}
              className={`flex items-center gap-2 px-4 sm:px-6 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 ${
                activeTab === 'coldmist'
                  ? 'bg-cosmic-forest text-cosmic-cream shadow-sm'
                  : 'text-cosmic-forest/70 hover:text-cosmic-forest'
              }`}
            >
              <ThermometerSnowflake className="w-4 h-4 text-cosmic-wood-light" />
              <span>2. Zero-Heat Bio Integrity</span>
            </button>
            <button
              onClick={() => setActiveTab('acoustic')}
              className={`flex items-center gap-2 px-4 sm:px-6 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 ${
                activeTab === 'acoustic'
                  ? 'bg-cosmic-forest text-cosmic-cream shadow-sm'
                  : 'text-cosmic-forest/70 hover:text-cosmic-forest'
              }`}
            >
              <VolumeX className="w-4 h-4 text-cosmic-wood-light" />
              <span>3. &lt;20 dB Sound Baffling</span>
            </button>
          </div>
        </div>

        {/* Dynamic Interactive Scientific Stage */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-white rounded-3xl p-6 sm:p-10 border border-cosmic-stone/60 shadow-lg">
          
          {/* Left Column: Interactive Technical Illustration */}
          <div className="lg:col-span-6 bg-[#FAF7F2] rounded-2xl p-6 sm:p-8 border border-cosmic-stone/40 relative overflow-hidden min-h-[380px] flex flex-col justify-between">
            
            {/* Top Indicator */}
            <div className="flex items-center justify-between z-10">
              <span className="text-[11px] font-mono uppercase tracking-wider text-cosmic-forest/60 bg-white/80 px-2.5 py-1 rounded-md border border-cosmic-stone/40">
                Engineering Blueprint
              </span>
              <button
                onClick={() => setFrequencyBoost(!frequencyBoost)}
                className="text-xs font-semibold px-3 py-1 rounded-full bg-white border border-cosmic-wood/30 text-cosmic-wood hover:bg-cosmic-sand/50 transition-colors shadow-xs"
              >
                {frequencyBoost ? 'Slow Motion View' : 'Live 2.4MHz Simulation'}
              </button>
            </div>

            {/* Central Animated Illustration / SVG Diagram */}
            <div className="my-8 flex items-center justify-center relative">
              
              {activeTab === 'cavitation' && (
                <div className="relative w-full max-w-sm flex flex-col items-center">
                  {/* Mist Vapor Suspension */}
                  <div className="relative h-28 w-44 flex items-center justify-center">
                    <div className={`absolute w-36 h-24 rounded-full bg-gradient-to-t from-cosmic-wood/20 via-cosmic-lavender/25 to-transparent blur-md transition-all duration-700 ${
                      frequencyBoost ? 'scale-125 opacity-90' : 'scale-100 opacity-60'
                    }`} />
                    {/* Animated Droplet Particles */}
                    <div className="flex gap-3 justify-center items-end h-full pb-4">
                      <div className="w-2 h-2 rounded-full bg-cosmic-lavender animate-bounce delay-100" />
                      <div className="w-1.5 h-1.5 rounded-full bg-cosmic-wood animate-bounce delay-300" />
                      <div className="w-2.5 h-2.5 rounded-full bg-cosmic-gardenia animate-bounce delay-200" />
                      <div className="w-1.5 h-1.5 rounded-full bg-cosmic-forest animate-bounce delay-500" />
                    </div>
                  </div>

                  {/* 360 Exhaust Rim */}
                  <div className="w-56 h-3 bg-cosmic-stone/80 rounded-full border border-cosmic-wood/40 mb-1" />

                  {/* Water Reservoir Layer */}
                  <div className="w-52 h-20 bg-sky-50 border-x border-b border-sky-200/80 rounded-b-xl relative overflow-hidden flex flex-col justify-end p-2">
                    <div className="absolute inset-0 bg-gradient-to-t from-sky-200/40 to-transparent" />
                    {/* High-frequency ripple waves */}
                    <div className={`w-full h-2 rounded-full bg-sky-300/60 ${frequencyBoost ? 'animate-ping' : 'animate-pulse'}`} />
                    <span className="text-[10px] font-mono text-sky-800 text-center relative z-10">
                      Silver-Ion Fluid Reservoir (100ml)
                    </span>
                  </div>

                  {/* Piezoelectric Ceramic Plate */}
                  <div className="w-36 h-4 bg-gradient-to-r from-amber-400 via-amber-200 to-amber-400 rounded-md shadow-md border border-amber-600/40 mt-1 flex items-center justify-center">
                    <span className="text-[9px] font-bold text-amber-950 uppercase tracking-widest">
                      2.4 MHz Ceramic Disc
                    </span>
                  </div>

                  {/* Vibration Wave Lines */}
                  <div className="flex gap-1 mt-2">
                    <div className="w-8 h-0.5 bg-cosmic-wood/40 animate-pulse" />
                    <div className="w-12 h-0.5 bg-cosmic-wood/60 animate-pulse delay-150" />
                    <div className="w-8 h-0.5 bg-cosmic-wood/40 animate-pulse delay-300" />
                  </div>
                </div>
              )}

              {activeTab === 'coldmist' && (
                <div className="w-full max-w-sm space-y-4">
                  <div className="bg-white p-4 rounded-xl border border-cosmic-stone/60 shadow-xs space-y-2">
                    <div className="flex items-center justify-between text-xs font-bold text-emerald-800">
                      <span className="flex items-center gap-1.5">
                        <ThermometerSnowflake className="w-4 h-4 text-emerald-600" />
                        COSMIC Cold Vapor (21°C Ambient)
                      </span>
                      <span className="bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded text-[10px]">100% Bio-Active</span>
                    </div>
                    <div className="w-full bg-emerald-100 h-2.5 rounded-full overflow-hidden">
                      <div className="bg-emerald-500 h-full w-[98%]" />
                    </div>
                    <p className="text-[11px] text-cosmic-forest/70">
                      Delicate terpenes (Linalool, Geraniol) remain intact at ambient room temperature.
                    </p>
                  </div>

                  <div className="bg-white p-4 rounded-xl border border-rose-200 shadow-xs space-y-2 opacity-80">
                    <div className="flex items-center justify-between text-xs font-bold text-rose-800">
                      <span>Heated Candle / Electric Warmers (&gt;65°C)</span>
                      <span className="bg-rose-100 text-rose-800 px-2 py-0.5 rounded text-[10px]">68% Thermal Loss</span>
                    </div>
                    <div className="w-full bg-rose-100 h-2.5 rounded-full overflow-hidden">
                      <div className="bg-rose-500 h-full w-[32%]" />
                    </div>
                    <p className="text-[11px] text-cosmic-forest/70">
                      Thermal degradation scorches aromatic botanicals into acrid, oxidized byproducts.
                    </p>
                  </div>
                </div>
              )}

              {activeTab === 'acoustic' && (
                <div className="w-full max-w-sm flex flex-col items-center space-y-3">
                  <div className="relative w-48 h-48 rounded-full border border-cosmic-stone/60 flex items-center justify-center bg-white shadow-inner">
                    <div className="w-36 h-36 rounded-full border border-cosmic-wood/30 flex items-center justify-center bg-cosmic-sand/30">
                      <div className="w-24 h-24 rounded-full border border-emerald-400 flex flex-col items-center justify-center bg-emerald-50 text-emerald-900 shadow-sm">
                        <span className="text-xl font-bold font-serif">&lt; 18 dB</span>
                        <span className="text-[9px] font-semibold uppercase tracking-wider text-emerald-700">Library Silence</span>
                      </div>
                    </div>
                  </div>
                  <div className="text-center text-[11px] text-cosmic-forest/70">
                    Multi-chamber acoustic labyrinth absorbs 99.4% of cavitation motor vibrations.
                  </div>
                </div>
              )}

            </div>

            {/* Bottom Real-Time Telemetry Bar */}
            <div className="grid grid-cols-3 gap-2 pt-4 border-t border-cosmic-stone/40 text-center z-10">
              <div className="bg-white/80 p-2 rounded-lg border border-cosmic-stone/40">
                <div className="text-[10px] text-cosmic-muted uppercase tracking-wider font-semibold">Droplet Size</div>
                <div className="text-xs sm:text-sm font-bold text-cosmic-forest font-mono">3.2 - 4.8 μm</div>
              </div>
              <div className="bg-white/80 p-2 rounded-lg border border-cosmic-stone/40">
                <div className="text-[10px] text-cosmic-muted uppercase tracking-wider font-semibold">Oscillation</div>
                <div className="text-xs sm:text-sm font-bold text-cosmic-forest font-mono">2,400,000 /sec</div>
              </div>
              <div className="bg-white/80 p-2 rounded-lg border border-cosmic-stone/40">
                <div className="text-[10px] text-cosmic-muted uppercase tracking-wider font-semibold">Decibel Level</div>
                <div className="text-xs sm:text-sm font-bold text-emerald-700 font-mono">&lt; 18.4 dB</div>
              </div>
            </div>

          </div>

          {/* Right Column: In-Depth Explanation Content */}
          <div className="lg:col-span-6 space-y-6">
            
            {activeTab === 'cavitation' && (
              <div className="space-y-4">
                <span className="text-xs font-bold uppercase tracking-wider text-cosmic-wood">Physics Pillar 01</span>
                <h3 className="text-2xl sm:text-3xl font-serif font-medium text-cosmic-forest">
                  Piezoelectric Cavitation: Breaking Water Without Heat
                </h3>
                <p className="text-sm text-cosmic-forest/75 font-light leading-relaxed">
                  Inside the core of the COSMIC diffuser lies a gold-electrode ceramic disc. When alternating current flows through it, the piezoelectric material expands and contracts at <strong>2.4 million times per second (2.4 MHz)</strong>.
                </p>
                <div className="space-y-3 pt-2">
                  <div className="p-3.5 rounded-xl bg-cosmic-sand/50 border border-cosmic-stone/60">
                    <h5 className="text-xs font-bold text-cosmic-forest">1. Sub-Micron Aerodynamic Aerosol (3–5 μm)</h5>
                    <p className="text-xs text-cosmic-forest/70 font-light mt-1">
                      Droplets larger than 10 microns fall rapidly, wetting your tabletop or desk. COSMIC's 3–5 micron droplets are lighter than ambient air, rising into buoyant suspension and dispersing up to 350 sq. ft.
                    </p>
                  </div>
                  <div className="p-3.5 rounded-xl bg-cosmic-sand/50 border border-cosmic-stone/60">
                    <h5 className="text-xs font-bold text-cosmic-forest">2. Capacitive Liquid Sensor</h5>
                    <p className="text-xs text-cosmic-forest/70 font-light mt-1">
                      Integrated into the PCB is a capacitive sensor that measures liquid resistance. If the reservoir runs dry, the circuit automatically disengages in 0.08 seconds, eliminating dry-burn risk.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'coldmist' && (
              <div className="space-y-4">
                <span className="text-xs font-bold uppercase tracking-wider text-cosmic-wood">Chemistry Pillar 02</span>
                <h3 className="text-2xl sm:text-3xl font-serif font-medium text-cosmic-forest">
                  Cold Preservation: Protecting Plant Terpenes & Linalool
                </h3>
                <p className="text-sm text-cosmic-forest/75 font-light leading-relaxed">
                  Traditional wax warmers, oil burners, and vaporizers rely on thermal heating (60°C to 120°C). Heat fatally oxidizes pure plant botanicals, causing the volatile monoterpenes and delicate floral esters to break down into harsh aldehydes.
                </p>
                <div className="space-y-3 pt-2">
                  <div className="p-3.5 rounded-xl bg-emerald-50/60 border border-emerald-200/60">
                    <h5 className="text-xs font-bold text-emerald-900">Room-Temperature Atomization</h5>
                    <p className="text-xs text-emerald-800/80 font-light mt-1">
                      COSMIC keeps the fluid reservoir between 20°C and 23°C throughout the entire 24-hour cycle. Every drop of French Lavender and Sunlit Gardenia reaches your respiratory tract in its unadulterated botanical state.
                    </p>
                  </div>
                  <div className="p-3.5 rounded-xl bg-cosmic-sand/50 border border-cosmic-stone/60">
                    <h5 className="text-xs font-bold text-cosmic-forest">Silver-Ion Microbial Barrier</h5>
                    <p className="text-xs text-cosmic-forest/70 font-light mt-1">
                      The water reservoir polypropylene resin is cast with silver-ion (Ag+) nanoparticles that disrupt microbial cell membranes, inhibiting 99.8% of mold and waterborne bacteria.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'acoustic' && (
              <div className="space-y-4">
                <span className="text-xs font-bold uppercase tracking-wider text-cosmic-wood">Acoustics Pillar 03</span>
                <h3 className="text-2xl sm:text-3xl font-serif font-medium text-cosmic-forest">
                  Acoustic Silence: Quieter Than a Whisper in the Dark
                </h3>
                <p className="text-sm text-cosmic-forest/75 font-light leading-relaxed">
                  Most desktop diffusers produce an annoying hum and motor vibration that breaks focus or wakes light sleepers. COSMIC solves this with a multi-tiered acoustic dampening shell.
                </p>
                <div className="space-y-3 pt-2">
                  <div className="p-3.5 rounded-xl bg-cosmic-sand/50 border border-cosmic-stone/60">
                    <h5 className="text-xs font-bold text-cosmic-forest">Dual Silicone Isolation Dampers</h5>
                    <p className="text-xs text-cosmic-forest/70 font-light mt-1">
                      The ultrasonic plate is suspended on micro-durometer silicone rubber mounts, mechanically isolating high-frequency vibrations from the outer wood shell.
                    </p>
                  </div>
                  <div className="p-3.5 rounded-xl bg-cosmic-sand/50 border border-cosmic-stone/60">
                    <h5 className="text-xs font-bold text-cosmic-forest">Sound-Baffling Air Column</h5>
                    <p className="text-xs text-cosmic-forest/70 font-light mt-1">
                      Vapor travels through an S-curved chimney that muffles droplet splash while permitting unobstructed laminar airflow out through the 360° perimeter exhaust ring.
                    </p>
                  </div>
                </div>
              </div>
            )}

            <div className="pt-2 flex items-center gap-4 text-xs font-medium text-cosmic-forest/80">
              <span className="flex items-center gap-1.5 text-cosmic-wood font-semibold">
                <ShieldCheck className="w-4 h-4" />
                CE & RoHS Certified
              </span>
              <span>•</span>
              <span>Tested &gt;1,000 Hours Continuous Run</span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
