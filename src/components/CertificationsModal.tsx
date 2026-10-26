import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ShieldCheck, CheckCircle2, Download, Award } from 'lucide-react';

interface CertificationsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CertificationsModal: React.FC<CertificationsModalProps> = ({ isOpen, onClose }) => {
  const [downloaded, setDownloaded] = useState(false);

  if (!isOpen) return null;

  const handleDownloadCert = () => {
    setDownloaded(true);
    const certText = `COSMIC AIR-CARE COMPLIANCE CERTIFICATE
Standards Body: International Fragrance Association (IFRA) & European CE Conformity
Product: COSMIC Dual-Refill Japandi Ultrasonic Diffuser

1. DIRECTIVES MET:
- CE Low Voltage Directive 2014/35/EU
- CE EMC Directive 2014/30/EU
- RoHS Directive 2011/65/EU on Hazardous Substances
- IFRA 50th Amendment Inhalation Safety Guidelines

2. TOXICOLOGY & PURITY STATEMENT:
- Phthalate Esters: Not Detected (LOD < 0.01 mg/kg)
- Synthetic Nitro-Musks: Not Detected
- Formaldehyde & Benzene: Not Detected
- Antimicrobial Surface: Silver-Ion (Ag+) PP 99.8% effective

Status: FULL COMPLIANCE APPROVED
Issued by: COSMIC Standards & Regulatory Affairs
`;
    const element = document.createElement('a');
    const file = new Blob([certText], { type: 'text/plain' });
    element.href = URL.createObjectURL(file);
    element.download = 'COSMIC-Official-Compliance-Certificate.txt';
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
          className="relative bg-[#FAF7F2] rounded-3xl max-w-3xl w-full border border-cosmic-stone shadow-2xl z-10 flex flex-col max-h-[90vh] overflow-hidden"
        >
          {/* Header */}
          <div className="p-6 border-b border-cosmic-stone/60 flex items-center justify-between bg-white">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-emerald-50 flex items-center justify-center text-emerald-800">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg font-serif font-semibold text-cosmic-forest">
                  Official Safety Certifications &amp; Lab Verification
                </h3>
                <p className="text-xs text-cosmic-muted font-mono">
                  CE • RoHS • IFRA 50th Standards • Silver-Ion Antimicrobial
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
                <div className="flex items-center justify-between">
                  <span className="font-bold text-cosmic-forest">CE European Conformity</span>
                  <span className="text-[10px] bg-emerald-100 text-emerald-800 font-mono font-bold px-2 py-0.5 rounded">
                    EN 60335-1
                  </span>
                </div>
                <p className="font-light text-cosmic-forest/70">
                  Certified compliant with European low-voltage and electromagnetic compatibility regulations. Complete surge insulation and low-voltage 5V dry-burn protection.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-white border border-cosmic-stone/60 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-cosmic-forest">RoHS Hazardous Substances</span>
                  <span className="text-[10px] bg-emerald-100 text-emerald-800 font-mono font-bold px-2 py-0.5 rounded">
                    2011/65/EU
                  </span>
                </div>
                <p className="font-light text-cosmic-forest/70">
                  Strictly lead-free, cadmium-free, mercury-free, and hexavalent chromium-free circuitry. Manufactured with leadless silver-tin soldering alloys.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-white border border-cosmic-stone/60 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-cosmic-forest">IFRA Inhalation Purity</span>
                  <span className="text-[10px] bg-emerald-100 text-emerald-800 font-mono font-bold px-2 py-0.5 rounded">
                    50th Amend.
                  </span>
                </div>
                <p className="font-light text-cosmic-forest/70">
                  Every aromatic formula adheres to International Fragrance Association guidelines. Zero synthetic phthalates, zero carcinogenic artificial fixatives, safe for home environments.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-white border border-cosmic-stone/60 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-cosmic-forest">Silver-Ion (Ag+) PP</span>
                  <span className="text-[10px] bg-emerald-100 text-emerald-800 font-mono font-bold px-2 py-0.5 rounded">
                    JIS Z 2801
                  </span>
                </div>
                <p className="font-light text-cosmic-forest/70">
                  Antimicrobial reservoir polymer tested to kill &gt;99.8% of waterborne bacteria within 24 hours, actively preventing internal mold buildup.
                </p>
              </div>

            </div>

            <div className="p-4 rounded-2xl bg-cosmic-sand/50 border border-cosmic-stone/60 space-y-2 text-xs">
              <div className="font-bold text-cosmic-forest flex items-center gap-2">
                <Award className="w-4 h-4 text-cosmic-wood" />
                <span>Pet &amp; Child Safety Notice</span>
              </div>
              <p className="font-light text-cosmic-forest/70">
                Because COSMIC diffuses pure cold sub-micron mist at room temperature without burning, it generates zero toxic smoke or carbon monoxide. Natural concentrations of French Lavender and Gardenia are non-toxic when dispersed in ventilated living spaces.
              </p>
            </div>

          </div>

          {/* Footer Action */}
          <div className="p-6 border-t border-cosmic-stone/60 bg-white flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-xs text-cosmic-forest/70">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              <span>{downloaded ? 'Certificate Downloaded' : 'Official Certificate on File'}</span>
            </div>

            <button
              onClick={handleDownloadCert}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-full bg-cosmic-wood hover:bg-cosmic-wood-dark text-white font-semibold text-xs tracking-wide transition-all shadow-md"
            >
              <Download className="w-4 h-4" />
              <span>Download Compliance Certificate (.txt)</span>
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
