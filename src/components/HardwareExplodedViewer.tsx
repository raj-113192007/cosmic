import React, { useState } from 'react';
import { Layers, ChevronRight, CheckCircle2, Eye, Cpu } from 'lucide-react';
import { HARDWARE_LAYERS } from '../data/cosmicData';
import type { HardwareLayer } from '../types';

export const HardwareExplodedViewer: React.FC = () => {
  const [activeLayer, setActiveLayer] = useState<HardwareLayer>(HARDWARE_LAYERS[3]); // default to atomizer
  const [viewMode, setViewMode] = useState<'exploded' | 'focus'>('exploded');

  return (
    <section id="engineering" className="py-20 md:py-28 bg-[#FAF7F2] border-t border-cosmic-stone/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cosmic-sand/80 border border-cosmic-stone/60 text-xs font-semibold tracking-widest uppercase text-cosmic-wood">
            <Layers className="w-3.5 h-3.5" />
            <span>Hardware Anatomy & Teardown</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-medium text-cosmic-forest leading-tight">
            Engineered Down to <br />
            <span className="italic font-normal text-cosmic-wood">The 8th Internal Layer</span>
          </h2>
          <p className="text-base text-cosmic-forest/75 font-light leading-relaxed">
            Every component was selected for acoustic silence, botanical chemical neutrality, and circular longevity. Tap on any layer pin or select from the list below to inspect its internal mechanics.
          </p>
        </div>

        {/* Interactive Teardown Interface */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: 3D Exploded Schematic Viewer with Interactive Pins */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-8 border border-cosmic-stone/60 shadow-lg relative flex flex-col justify-between">
            
            {/* Header controls */}
            <div className="flex items-center justify-between mb-4 z-10">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-xs font-mono uppercase tracking-wider text-cosmic-forest font-semibold">
                  3D Exploded CAD Schematic
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[11px] text-cosmic-muted hidden sm:inline">Tap pin to inspect</span>
                <span className="text-xs font-bold text-cosmic-wood bg-cosmic-sand/70 px-2.5 py-1 rounded-full">
                  Layer {activeLayer.id} of 8
                </span>
              </div>
            </div>

            {/* Schematic Canvas Container */}
            <div className="relative aspect-[3/4] sm:aspect-[4/5] w-full rounded-2xl overflow-hidden bg-[#F6F2EA] flex items-center justify-center p-4 group">
              <img
                src="/assets/diffuser-exploded-schematic.jpg"
                alt="COSMIC Diffuser 8-Layer Exploded Engineering Schematic"
                className={`w-full h-full object-contain transition-transform duration-500 ${
                  viewMode === 'focus' ? 'scale-125 translate-y-[-10%]' : 'scale-100'
                }`}
              />

              {/* Subtle Gradient Vignette */}
              <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-white/30 via-transparent to-white/10" />

              {/* Interactive Hotspot Pins Overlaid on Schematic */}
              {HARDWARE_LAYERS.map((layer) => {
                const isSelected = activeLayer.id === layer.id;
                return (
                  <button
                    key={layer.id}
                    onClick={() => setActiveLayer(layer)}
                    style={{ top: layer.top, left: layer.left }}
                    className={`absolute -translate-x-1/2 -translate-y-1/2 transition-all duration-300 z-20 group/pin ${
                      isSelected ? 'scale-125 z-30' : 'hover:scale-110 opacity-80 hover:opacity-100'
                    }`}
                    aria-label={`Inspect ${layer.name}`}
                  >
                    <div
                      className={`relative w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center font-bold text-xs shadow-lg transition-all ${
                        isSelected
                          ? 'bg-cosmic-wood text-white ring-4 ring-cosmic-wood/30 shadow-cosmic-wood/50'
                          : 'bg-white text-cosmic-forest border border-cosmic-stone hover:bg-cosmic-sand'
                      }`}
                    >
                      {layer.id}
                      {/* Pulse beacon for active layer */}
                      {isSelected && (
                        <span className="absolute inset-0 rounded-full bg-cosmic-wood animate-ping opacity-35" />
                      )}
                    </div>
                  </button>
                );
              })}

              {/* Quick View Mode Button */}
              <div className="absolute bottom-4 right-4 z-20">
                <button
                  onClick={() => setViewMode(viewMode === 'exploded' ? 'focus' : 'exploded')}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/90 backdrop-blur-md border border-cosmic-stone text-xs font-medium text-cosmic-forest hover:bg-white shadow-sm transition-all"
                >
                  <Eye className="w-3.5 h-3.5 text-cosmic-wood" />
                  <span>{viewMode === 'exploded' ? 'Zoom Active Layer' : 'Full Exploded View'}</span>
                </button>
              </div>
            </div>

            {/* Bottom Indicator */}
            <div className="mt-4 flex flex-wrap items-center justify-between text-xs text-cosmic-forest/70 border-t border-cosmic-stone/40 pt-3">
              <span>All 8 layers modular &amp; repairable</span>
              <span className="font-mono text-cosmic-wood font-semibold">CAD Ref: CSMC-DIF-2026-V2</span>
            </div>

          </div>

          {/* Right Column: Layer Spec Inspector & Layer Navigation List */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Active Component Deep Inspection Card */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-cosmic-wood/30 shadow-lg relative overflow-hidden space-y-5">
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-mono uppercase tracking-wider text-cosmic-wood font-bold bg-cosmic-sand px-3 py-1 rounded-full">
                  Component 0{activeLayer.id} / 08
                </span>
                <span className="text-xs text-cosmic-forest/60 font-medium">
                  {activeLayer.category}
                </span>
              </div>

              <div>
                <h3 className="text-2xl font-serif font-medium text-cosmic-forest">
                  {activeLayer.name}
                </h3>
                <p className="text-xs text-cosmic-forest/60 mt-1 uppercase tracking-wider font-semibold">
                  Engineering Blueprint Spec
                </p>
              </div>

              <p className="text-sm text-cosmic-forest/80 font-light leading-relaxed">
                {activeLayer.description}
              </p>

              {/* Exact Material & Performance Spec Box */}
              <div className="p-4 rounded-2xl bg-cosmic-sand/50 border border-cosmic-stone/60 space-y-2">
                <div className="text-[11px] font-bold uppercase tracking-wider text-cosmic-forest flex items-center gap-2">
                  <Cpu className="w-3.5 h-3.5 text-cosmic-wood" />
                  <span>Technical Material Spec</span>
                </div>
                <div className="text-xs font-mono text-cosmic-forest/90 leading-normal">
                  {activeLayer.spec}
                </div>
              </div>

              <div className="flex items-center gap-2 text-xs text-emerald-700 font-medium pt-1">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                <span>Zero plastic-chemical leaching • BPA-free certified</span>
              </div>
            </div>

            {/* Quick 8-Layer Selection Accordion / List */}
            <div className="bg-white rounded-3xl p-4 sm:p-6 border border-cosmic-stone/60 shadow-sm space-y-2">
              <div className="text-xs font-bold uppercase tracking-wider text-cosmic-forest/70 px-2 mb-2">
                Select Layer to Inspect
              </div>

              <div className="space-y-1.5 max-h-[360px] overflow-y-auto pr-1">
                {HARDWARE_LAYERS.map((layer) => {
                  const isActive = activeLayer.id === layer.id;
                  return (
                    <button
                      key={layer.id}
                      onClick={() => setActiveLayer(layer)}
                      className={`w-full flex items-center justify-between p-3 rounded-xl text-left transition-all text-xs font-medium ${
                        isActive
                          ? 'bg-cosmic-sand text-cosmic-forest font-bold border border-cosmic-wood/40 shadow-xs'
                          : 'hover:bg-cosmic-sand/50 text-cosmic-forest/75 border border-transparent'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <span
                          className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold ${
                            isActive
                              ? 'bg-cosmic-wood text-white'
                              : 'bg-cosmic-stone/50 text-cosmic-forest/70'
                          }`}
                        >
                          {layer.id}
                        </span>
                        <span>{layer.name}</span>
                      </div>
                      <ChevronRight
                        className={`w-4 h-4 transition-transform ${
                          isActive ? 'text-cosmic-wood rotate-90' : 'text-cosmic-muted'
                        }`}
                      />
                    </button>
                  );
                })}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
