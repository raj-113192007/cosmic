import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Activity, VolumeX, ShieldCheck, Download, CheckCircle2, FileText } from 'lucide-react';

interface ScienceWhitepaperModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ScienceWhitepaperModal: React.FC<ScienceWhitepaperModalProps> = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState<'cavitation' | 'acoustics' | 'microbiology'>('cavitation');
  const [downloading, setDownloading] = useState(false);

  if (!isOpen) return null;

  const handleDownloadReport = () => {
    setDownloading(true);
    setTimeout(() => {
      setDownloading(false);
      // Trigger a clean simulated text download of the engineering whitepaper
      const element = document.createElement('a');
      const file = new Blob([
        `COSMIC AIR-CARE LABS - ENGINEERING WHITEPAPER
Document ID: CSMC-TR-2026-V2.4
Title: Quantitative Evaluation of 2.4MHz Piezoelectric Cavitation & Acoustic Damping Architecture
Author: COSMIC Hardware & Botanical Research Group

1. FREQUENCY ANALYSIS
- Resonant Transducer Frequency: 2.400 MHz +/- 0.05 MHz
- Mean Droplet Aerodynamic Diameter: 3.42 micrometers (D50)
- Surface Evaporation Rate: 4.2 mL/hr @ 23 deg C

2. ACOUSTIC SOUND MEASUREMENTS
- Anechoic Chamber Ambient Floor: 14.2 dBA
- COSMIC Run at Max Vapor Output: 17.8 dBA (<20 dBA Target Achieved)
- Competitor Standard Desktop Diffuser: 46.4 dBA

3. TERPENE RETENTION TEST
- Ambient Cold Ultrasonic: 98.4% Linalool & Linalyl Acetate intact after 6 hours
- Heated Coil (75 deg C): 31.8% intact (68.2% thermal oxidation degradation)

4. COMPLIANCE & SAFETY
- CE EN 60335-1, RoHS 2011/65/EU, IFRA 50th Amendment Safe
`
      ], { type: 'text/plain' });
      element.href = URL.createObjectURL(file);
      element.download = 'COSMIC-Lab-Report-CSMC-TR-2026.txt';
      document.body.appendChild(element);
      element.click();
      document.body.removeChild(element);
    }, 800);
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
          className="relative bg-[#FAF7F2] rounded-3xl max-w-4xl w-full border border-cosmic-stone shadow-2xl z-10 flex flex-col max-h-[90vh] overflow-hidden"
        >
          {/* Header */}
          <div className="p-6 border-b border-cosmic-stone/60 flex items-center justify-between bg-white">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-cosmic-sand flex items-center justify-center text-cosmic-wood">
                <FileText className="w-5 h-5" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="text-lg font-serif font-semibold text-cosmic-forest">
                    Laboratory Testing &amp; Engineering Whitepaper
                  </h3>
                  <span className="text-[10px] font-mono bg-emerald-50 text-emerald-800 border border-emerald-200 px-2 py-0.5 rounded-full font-bold">
                    VERIFIED
                  </span>
                </div>
                <p className="text-xs text-cosmic-muted font-mono">
                  Report ID: CSMC-TR-2026-V2.4 • Department of Product Architecture
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

          {/* Navigation Sub-Tabs */}
          <div className="px-6 py-3 bg-[#F4EFE6] border-b border-cosmic-stone/40 flex flex-wrap gap-2">
            <button
              onClick={() => setActiveTab('cavitation')}
              className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all ${
                activeTab === 'cavitation'
                  ? 'bg-cosmic-forest text-cosmic-cream shadow-sm'
                  : 'text-cosmic-forest/70 hover:text-cosmic-forest'
              }`}
            >
              1. 2.4MHz Droplet Spectrum
            </button>
            <button
              onClick={() => setActiveTab('acoustics')}
              className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all ${
                activeTab === 'acoustics'
                  ? 'bg-cosmic-forest text-cosmic-cream shadow-sm'
                  : 'text-cosmic-forest/70 hover:text-cosmic-forest'
              }`}
            >
              2. Anechoic Decibel Test
            </button>
            <button
              onClick={() => setActiveTab('microbiology')}
              className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all ${
                activeTab === 'microbiology'
                  ? 'bg-cosmic-forest text-cosmic-cream shadow-sm'
                  : 'text-cosmic-forest/70 hover:text-cosmic-forest'
              }`}
            >
              3. Silver-Ion Antimicrobial Rate
            </button>
          </div>

          {/* Body Content Area */}
          <div className="p-6 sm:p-8 overflow-y-auto space-y-6 text-xs text-cosmic-forest/80 leading-relaxed">
            {activeTab === 'cavitation' && (
              <div className="space-y-5">
                <div className="bg-white p-5 rounded-2xl border border-cosmic-stone/60 space-y-3">
                  <h4 className="text-sm font-bold text-cosmic-forest flex items-center gap-2">
                    <Activity className="w-4 h-4 text-cosmic-wood" />
                    <span>Particle Size Distribution Analysis (Laser Diffraction Test)</span>
                  </h4>
                  <p className="font-light">
                    Laser diffraction particle size analysis was performed using a Malvern Spraytec system positioned 10cm above the 360° outlet ring. Over 94.2% of aerosol droplets fell within the optimum 3.0 to 5.0 micrometer range, ensuring complete suspension without desktop wetness.
                  </p>
                  
                  {/* Data Table */}
                  <div className="grid grid-cols-3 gap-3 pt-2 font-mono text-[11px]">
                    <div className="p-3 bg-cosmic-sand/50 rounded-xl">
                      <div className="text-cosmic-muted uppercase">D10 (Fine Cut)</div>
                      <div className="text-base font-bold text-cosmic-forest">2.14 μm</div>
                    </div>
                    <div className="p-3 bg-cosmic-sand/50 rounded-xl">
                      <div className="text-cosmic-muted uppercase">D50 (Median)</div>
                      <div className="text-base font-bold text-cosmic-wood">3.42 μm</div>
                    </div>
                    <div className="p-3 bg-cosmic-sand/50 rounded-xl">
                      <div className="text-cosmic-muted uppercase">D90 (Upper Cut)</div>
                      <div className="text-base font-bold text-cosmic-forest">4.88 μm</div>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-cosmic-stone/60 space-y-3">
                  <h4 className="text-sm font-bold text-cosmic-forest">Thermogravimetric Terpene Stability</h4>
                  <p className="font-light">
                    GC-MS (Gas Chromatography-Mass Spectrometry) comparison proved that steam-distilled linalool and linalyl acetate showed 0.00% thermal degradation after 8 hours of continuous cold ultrasonic atomization, compared to 68.2% degradation in standard coil-heated diffusers.
                  </p>
                </div>
              </div>
            )}

            {activeTab === 'acoustics' && (
              <div className="space-y-5">
                <div className="bg-white p-5 rounded-2xl border border-cosmic-stone/60 space-y-3">
                  <h4 className="text-sm font-bold text-cosmic-forest flex items-center gap-2">
                    <VolumeX className="w-4 h-4 text-cosmic-wood" />
                    <span>Anechoic Sound Pressure Chamber Measurements (ISO 3744)</span>
                  </h4>
                  <p className="font-light">
                    Sound pressure levels were calibrated in an ISO-certified hemi-anechoic sound chamber with a reference noise floor of 14.2 dBA. Measurements were taken at distances of 0.5m, 1.0m, and 2.0m from the device.
                  </p>

                  <div className="space-y-2 pt-2">
                    <div className="flex items-center justify-between text-[11px] font-semibold">
                      <span>COSMIC Ultrasonic Diffuser (0.5m distance)</span>
                      <span className="font-mono text-emerald-700 font-bold">17.8 dBA (Quiet Whispering)</span>
                    </div>
                    <div className="w-full bg-emerald-100 h-2 rounded-full overflow-hidden">
                      <div className="bg-emerald-500 h-full w-[24%]" />
                    </div>

                    <div className="flex items-center justify-between text-[11px] font-semibold pt-2">
                      <span>Standard Commercial Diffuser (0.5m distance)</span>
                      <span className="font-mono text-rose-700 font-bold">46.4 dBA (Audible Motor Hum)</span>
                    </div>
                    <div className="w-full bg-rose-100 h-2 rounded-full overflow-hidden">
                      <div className="bg-rose-500 h-full w-[65%]" />
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'microbiology' && (
              <div className="space-y-5">
                <div className="bg-white p-5 rounded-2xl border border-cosmic-stone/60 space-y-3">
                  <h4 className="text-sm font-bold text-cosmic-forest flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-emerald-600" />
                    <span>Silver-Ion (Ag+) Polypropylene Resin Efficacy (JIS Z 2801)</span>
                  </h4>
                  <p className="font-light">
                    The 100ml fluid reservoir is compounded with nano-dispersed silver-ion antimicrobial additives. Testing inoculated the chamber with standard bacterial strains (E. coli, S. aureus, Aspergillus niger) over a 24-hour incubation at 35°C.
                  </p>

                  <div className="grid grid-cols-2 gap-3 pt-2 font-mono">
                    <div className="p-3 bg-emerald-50 border border-emerald-200 rounded-xl">
                      <div className="text-[10px] text-emerald-800 uppercase font-bold">Bacterial Reduction</div>
                      <div className="text-xl font-bold text-emerald-900">&gt; 99.8%</div>
                      <div className="text-[10px] text-emerald-700 mt-1">Zero biofilm formation</div>
                    </div>
                    <div className="p-3 bg-emerald-50 border border-emerald-200 rounded-xl">
                      <div className="text-[10px] text-emerald-800 uppercase font-bold">Mold Inhibition</div>
                      <div className="text-xl font-bold text-emerald-900">Grade 0</div>
                      <div className="text-[10px] text-emerald-700 mt-1">No macroscopic growth</div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Footer Action */}
          <div className="p-6 border-t border-cosmic-stone/60 bg-white flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-xs text-cosmic-forest/70">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              <span>Full Peer-Reviewed Engineering Documentation Available</span>
            </div>

            <button
              onClick={handleDownloadReport}
              disabled={downloading}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-full bg-cosmic-wood hover:bg-cosmic-wood-dark text-white font-semibold text-xs tracking-wide transition-all shadow-md"
            >
              <Download className="w-4 h-4" />
              <span>{downloading ? 'Compiling PDF...' : 'Download Full Whitepaper (.txt)'}</span>
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
