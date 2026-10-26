import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Sparkles, MapPin, Droplets, ShieldCheck, ArrowRight } from 'lucide-react';
import type { AtmosphereMood } from '../types';

interface ScentDetailModalProps {
  isOpen: boolean;
  onClose: () => void;
  mood: AtmosphereMood;
  openCart: () => void;
}

export const ScentDetailModal: React.FC<ScentDetailModalProps> = ({ isOpen, onClose, mood, openCart }) => {
  if (!isOpen) return null;

  const isLavender = mood === 'lavender';

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
          className="relative bg-[#FAF7F2] rounded-3xl max-w-3xl w-full border border-cosmic-stone shadow-2xl z-10 flex flex-col max-h-[90vh] overflow-hidden"
        >
          {/* Header */}
          <div className="p-6 border-b border-cosmic-stone/60 flex items-center justify-between bg-white">
            <div className="flex items-center gap-3">
              <div
                className={`w-10 h-10 rounded-2xl flex items-center justify-center text-white ${
                  isLavender ? 'bg-[#8A70B2]' : 'bg-[#D4A034]'
                }`}
              >
                <Sparkles className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg font-serif font-semibold text-cosmic-forest">
                  {isLavender ? 'Twilight Lavender Formulation' : 'Sunlit Gardenia Formulation'}
                </h3>
                <p className="text-xs text-cosmic-muted font-mono">
                  Botanical Origin &amp; Fractional Steam Distillation Details
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

          {/* Body */}
          <div className="p-6 sm:p-8 overflow-y-auto space-y-6 text-xs text-cosmic-forest/80 leading-relaxed">
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-5 rounded-2xl bg-white border border-cosmic-stone/60 space-y-2">
                <div className="flex items-center gap-1.5 text-cosmic-wood font-bold">
                  <MapPin className="w-4 h-4" />
                  <span>Harvest &amp; Sourcing Origin</span>
                </div>
                <p className="font-light text-cosmic-forest/70">
                  {isLavender
                    ? 'Harvested from high-altitude cooperative farms in Haute-Provence, France (elevation 800m+). Lower oxygen concentration fosters exceptional linalyl acetate purity with sweet, honeyed undertones.'
                    : 'Ethically hand-plucked during dawn bloom in tropical highland plantations. Extracted alongside Calabrian neroli and Indian star jasmine sambac.'}
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-white border border-cosmic-stone/60 space-y-2">
                <div className="flex items-center gap-1.5 text-cosmic-wood font-bold">
                  <Droplets className="w-4 h-4" />
                  <span>Extraction Methodology</span>
                </div>
                <p className="font-light text-cosmic-forest/70">
                  Fractional low-temperature steam distillation over 4 hours. No chemical solvent wash or petroleum hexane extractions. Pure, water-soluble botanical suspension.
                </p>
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-white border border-cosmic-stone/60 space-y-3">
              <h4 className="font-bold text-cosmic-forest">Bio-Active Compound Spectrum:</h4>
              <div className="grid grid-cols-3 gap-2 font-mono text-[11px]">
                <div className="p-2.5 bg-cosmic-sand/50 rounded-xl">
                  <div className="text-cosmic-muted uppercase">Linalool</div>
                  <div className="text-sm font-bold text-cosmic-forest">38.4%</div>
                  <div className="text-[10px] text-cosmic-forest/60">Anxiolytic calming</div>
                </div>
                <div className="p-2.5 bg-cosmic-sand/50 rounded-xl">
                  <div className="text-cosmic-muted uppercase">Linalyl Acetate</div>
                  <div className="text-sm font-bold text-cosmic-wood">32.1%</div>
                  <div className="text-[10px] text-cosmic-forest/60">Sedative floral ester</div>
                </div>
                <div className="p-2.5 bg-cosmic-sand/50 rounded-xl">
                  <div className="text-cosmic-muted uppercase">Beta-Caryophyllene</div>
                  <div className="text-sm font-bold text-cosmic-forest">5.8%</div>
                  <div className="text-[10px] text-cosmic-forest/60">Warm grounding terpene</div>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-2 text-xs text-emerald-700 font-semibold">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span>100% Phthalate-Free • IFRA Safe Inhalation Certified</span>
            </div>

          </div>

          {/* Footer Action */}
          <div className="p-6 border-t border-cosmic-stone/60 bg-white flex flex-col sm:flex-row items-center justify-between gap-4">
            <span className="text-xs text-cosmic-forest/70">
              100ml Liquid: ₹299 • Passive Pod: ₹249
            </span>

            <button
              onClick={() => {
                onClose();
                openCart();
              }}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-full bg-cosmic-forest hover:bg-cosmic-dark text-cosmic-cream font-semibold text-xs tracking-wide transition-all shadow-md"
            >
              <span>Add to Starter Kit Box</span>
              <ArrowRight className="w-4 h-4 text-cosmic-wood-light" />
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
