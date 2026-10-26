import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Layers, ZoomIn, ZoomOut, Download, CheckCircle2, Wrench } from 'lucide-react';
import { HARDWARE_LAYERS } from '../data/cosmicData';

interface CadInspectorModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CadInspectorModal: React.FC<CadInspectorModalProps> = ({ isOpen, onClose }) => {
  const [zoomLevel, setZoomLevel] = useState(1);
  const [selectedLayerId, setSelectedLayerId] = useState(4); // atomizer

  if (!isOpen) return null;

  const currentLayer = HARDWARE_LAYERS.find((l) => l.id === selectedLayerId) || HARDWARE_LAYERS[0];

  const handleDownloadCad = () => {
    const text = `COSMIC DIFFUSER HARDWARE CAD SPECIFICATION
Model: COSMIC Ultrasonic Japandi Diffuser V2
Architecture: 8-Layer Modular Circular Assembly
Drawing Number: CSMC-DWG-2026-08

BILL OF MATERIALS (BOM):
1. Dome: Eco-composite wood fiber polymer, CNC machined matte grain
2. Mist Ring: Hydrophobic ABS, 360-degree perimeter precision micro-slots
3. Acoustic Shell: Multi-chamber sound labyrinth, dual silicone damping gaskets (<20dB)
4. Atomizer: 2.4MHz Gold-plated piezoelectric ceramic plate (Model: PZT-2400)
5. Reservoir: 100mL Silver-ion infused antimicrobial PP (Ag+ additive 0.3%)
6. Control PCB: Capacitive liquid sensor, dual-timer cycle MCU, auto dry-burn protection
7. Base: Weighted zinc-alloy ballast plate (180g), anti-skid silicone perimeter rim
8. Power: USB-C Fast-Power receptacle (5V/2A), TVS diode ESD protected
`;
    const element = document.createElement('a');
    const file = new Blob([text], { type: 'text/plain' });
    element.href = URL.createObjectURL(file);
    element.download = 'COSMIC-CAD-BOM-CSMC-DWG-2026.txt';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-3 sm:p-6">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-cosmic-dark/60 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="relative bg-[#FAF7F2] rounded-3xl max-w-5xl w-full border border-cosmic-stone shadow-2xl z-10 flex flex-col max-h-[92vh] overflow-hidden"
        >
          {/* Header */}
          <div className="p-6 border-b border-cosmic-stone/60 flex items-center justify-between bg-white">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-cosmic-sand flex items-center justify-center text-cosmic-wood">
                <Layers className="w-5 h-5" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="text-lg font-serif font-semibold text-cosmic-forest">
                    Interactive 3D CAD Blueprint &amp; BOM Inspector
                  </h3>
                  <span className="text-[10px] font-mono bg-cosmic-sand text-cosmic-wood border border-cosmic-wood/30 px-2 py-0.5 rounded-full font-bold">
                    CAD V2.4
                  </span>
                </div>
                <p className="text-xs text-cosmic-muted font-mono">
                  Full Bill of Materials, Tolerances &amp; Assembly Architecture
                </p>
              </div>
            </div>

            <button
              onClick={onClose}
              className="p-2 rounded-full text-cosmic-forest/70 hover:bg-cosmic-sand transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Modal Content Grid */}
          <div className="flex-1 overflow-y-auto p-6 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left: High-Res Schematic Canvas with Zoom */}
            <div className="lg:col-span-7 bg-[#F6F2EA] rounded-2xl p-4 border border-cosmic-stone/60 flex flex-col items-center justify-center relative min-h-[360px] overflow-hidden">
              <div className="w-full flex justify-between items-center z-10 mb-2">
                <span className="text-[11px] font-mono text-cosmic-wood font-bold">
                  Schematic View (Zoom: {Math.round(zoomLevel * 100)}%)
                </span>
                <div className="flex items-center gap-1.5 bg-white/90 backdrop-blur-md px-2 py-1 rounded-xl border border-cosmic-stone">
                  <button
                    onClick={() => setZoomLevel(Math.max(0.8, zoomLevel - 0.2))}
                    className="p-1 text-cosmic-forest hover:bg-cosmic-sand rounded"
                    title="Zoom Out"
                  >
                    <ZoomOut className="w-3.5 h-3.5" />
                  </button>
                  <button
                    onClick={() => setZoomLevel(1)}
                    className="px-1.5 text-[10px] font-mono font-bold text-cosmic-forest"
                  >
                    100%
                  </button>
                  <button
                    onClick={() => setZoomLevel(Math.min(1.8, zoomLevel + 0.2))}
                    className="p-1 text-cosmic-forest hover:bg-cosmic-sand rounded"
                    title="Zoom In"
                  >
                    <ZoomIn className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              {/* Exploded Render */}
              <div className="w-full h-80 flex items-center justify-center overflow-hidden">
                <img
                  src="/assets/diffuser-exploded-schematic.jpg"
                  alt="CAD Teardown"
                  style={{ transform: `scale(${zoomLevel})` }}
                  className="max-h-full max-w-full object-contain transition-transform duration-300"
                />
              </div>

              <div className="mt-3 text-[10px] text-cosmic-muted font-mono text-center">
                High-density 3D render extracted from industrial prototyping molds
              </div>
            </div>

            {/* Right: Layer Selection & Bill of Materials */}
            <div className="lg:col-span-5 space-y-4">
              <div className="text-xs font-bold uppercase tracking-wider text-cosmic-forest">
                Select Layer to View CAD Specs:
              </div>

              {/* Layer Selection Chips */}
              <div className="grid grid-cols-4 gap-2">
                {HARDWARE_LAYERS.map((layer) => (
                  <button
                    key={layer.id}
                    onClick={() => setSelectedLayerId(layer.id)}
                    className={`p-2 rounded-xl text-center text-xs font-semibold border transition-all ${
                      selectedLayerId === layer.id
                        ? 'bg-cosmic-wood text-white border-cosmic-wood shadow-sm'
                        : 'bg-white text-cosmic-forest border-cosmic-stone/60 hover:bg-cosmic-sand/40'
                    }`}
                  >
                    L0{layer.id}
                  </button>
                ))}
              </div>

              {/* Selected Layer Specs Box */}
              <div className="p-5 rounded-2xl bg-white border border-cosmic-wood/30 shadow-md space-y-3">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-mono text-cosmic-wood font-bold">
                    Layer 0{currentLayer.id} / 08
                  </span>
                  <span className="text-cosmic-muted font-medium">{currentLayer.category}</span>
                </div>

                <h4 className="text-base font-serif font-bold text-cosmic-forest">
                  {currentLayer.name}
                </h4>

                <p className="text-xs text-cosmic-forest/75 font-light leading-relaxed">
                  {currentLayer.description}
                </p>

                <div className="p-3 rounded-xl bg-cosmic-sand/50 border border-cosmic-stone/60 text-xs font-mono text-cosmic-forest/90">
                  <div className="text-[10px] uppercase font-bold text-cosmic-forest/60 mb-0.5">
                    Engineering Material Formula:
                  </div>
                  {currentLayer.spec}
                </div>

                <div className="flex items-center gap-2 text-xs text-emerald-700 font-semibold pt-1">
                  <Wrench className="w-3.5 h-3.5" />
                  <span>Modular Service Life: &gt; 5,000 Hours</span>
                </div>
              </div>
            </div>

          </div>

          {/* Footer Actions */}
          <div className="p-6 border-t border-cosmic-stone/60 bg-white flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-xs text-cosmic-forest/70">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              <span>Right-to-Repair Compliant Architecture</span>
            </div>

            <button
              onClick={handleDownloadCad}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-full bg-cosmic-forest text-cosmic-cream font-semibold text-xs tracking-wide hover:bg-cosmic-dark transition-all shadow-md"
            >
              <Download className="w-4 h-4" />
              <span>Export BOM &amp; CAD Data (.txt)</span>
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
