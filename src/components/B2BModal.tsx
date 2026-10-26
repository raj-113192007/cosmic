import React, { useState } from 'react';
import { X, Building2, Check, Send, Coffee, ShieldCheck } from 'lucide-react';
import confetti from 'canvas-confetti';

interface B2BModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const B2BModal: React.FC<B2BModalProps> = ({ isOpen, onClose }) => {
  const [submitted, setSubmitted] = useState(false);
  const [businessName, setBusinessName] = useState('');
  const [businessType, setBusinessType] = useState('cafe');
  const [contactName, setContactName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [estimatedSqft, setEstimatedSqft] = useState('1000');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    confetti({
      particleCount: 70,
      spread: 60,
      origin: { y: 0.5 },
      colors: ['#D4A034', '#966F47', '#18201B'],
    });
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-cosmic-dark/50 backdrop-blur-sm transition-opacity"
      />

      {/* Modal Dialog */}
      <div className="relative bg-[#FAF7F2] rounded-3xl max-w-lg w-full p-6 sm:p-8 border border-cosmic-stone shadow-2xl z-10 space-y-6">
        
        {/* Header */}
        <div className="flex items-center justify-between border-b border-cosmic-stone/40 pb-4">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-cosmic-wood/10 flex items-center justify-center text-cosmic-wood">
              <Building2 className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-serif font-medium text-cosmic-forest">
                Hospitality &amp; B2B Sampling
              </h3>
              <p className="text-[11px] text-cosmic-muted font-mono">Wholesale &amp; Commercial Scenting</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full text-cosmic-forest/70 hover:bg-cosmic-sand transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {submitted ? (
          <div className="py-8 text-center space-y-4 animate-in zoom-in-95 duration-300">
            <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center mx-auto">
              <Check className="w-7 h-7" />
            </div>
            <h4 className="text-2xl font-serif font-medium text-cosmic-forest">
              Request Received
            </h4>
            <p className="text-xs text-cosmic-forest/75 font-light leading-relaxed max-w-sm mx-auto">
              Thank you, <strong>{contactName}</strong>. Our commercial scenting specialist from the COSMIC team will contact <strong>{businessName}</strong> within 24 hours with trial kits and wholesale pricing.
            </p>
            <button
              onClick={() => {
                setSubmitted(false);
                onClose();
              }}
              className="px-6 py-2.5 rounded-full bg-cosmic-forest text-cosmic-cream text-xs font-semibold"
            >
              Close Window
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4 text-xs">
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="font-bold text-cosmic-forest block mb-1">Venue / Business Name</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Blue Tokai Roasters"
                  value={businessName}
                  onChange={(e) => setBusinessName(e.target.value)}
                  className="w-full p-2.5 rounded-xl bg-white border border-cosmic-stone text-cosmic-forest focus:outline-none focus:ring-1 focus:ring-cosmic-wood"
                />
              </div>

              <div>
                <label className="font-bold text-cosmic-forest block mb-1">Business Category</label>
                <select
                  value={businessType}
                  onChange={(e) => setBusinessType(e.target.value)}
                  className="w-full p-2.5 rounded-xl bg-white border border-cosmic-stone text-cosmic-forest focus:outline-none focus:ring-1 focus:ring-cosmic-wood"
                >
                  <option value="cafe">Specialty Coffee Shop / Cafe</option>
                  <option value="restaurant">Boutique Dining &amp; Restaurant</option>
                  <option value="hotel">Boutique Hotel / B&amp;B</option>
                  <option value="studio">Creative Studio / Co-Working</option>
                  <option value="retail">Lifestyle Retailer / Concept Store</option>
                  <option value="corporate">Corporate Gifting / Bulk</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="font-bold text-cosmic-forest block mb-1">Contact Person Name</label>
                <input
                  type="text"
                  required
                  placeholder="Your Name"
                  value={contactName}
                  onChange={(e) => setContactName(e.target.value)}
                  className="w-full p-2.5 rounded-xl bg-white border border-cosmic-stone text-cosmic-forest focus:outline-none focus:ring-1 focus:ring-cosmic-wood"
                />
              </div>

              <div>
                <label className="font-bold text-cosmic-forest block mb-1">Approx. Floor Area</label>
                <input
                  type="text"
                  placeholder="e.g. 1,200 sq.ft"
                  value={estimatedSqft}
                  onChange={(e) => setEstimatedSqft(e.target.value)}
                  className="w-full p-2.5 rounded-xl bg-white border border-cosmic-stone text-cosmic-forest focus:outline-none focus:ring-1 focus:ring-cosmic-wood"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="font-bold text-cosmic-forest block mb-1">Phone / WhatsApp</label>
                <input
                  type="tel"
                  required
                  placeholder="+91..."
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full p-2.5 rounded-xl bg-white border border-cosmic-stone text-cosmic-forest focus:outline-none focus:ring-1 focus:ring-cosmic-wood"
                />
              </div>

              <div>
                <label className="font-bold text-cosmic-forest block mb-1">Work Email</label>
                <input
                  type="email"
                  required
                  placeholder="hello@venue.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full p-2.5 rounded-xl bg-white border border-cosmic-stone text-cosmic-forest focus:outline-none focus:ring-1 focus:ring-cosmic-wood"
                />
              </div>
            </div>

            <div className="p-3 rounded-xl bg-white border border-cosmic-stone/60 space-y-1">
              <div className="flex items-center gap-1.5 text-cosmic-wood font-bold">
                <Coffee className="w-3.5 h-3.5" />
                <span>Complimentary On-Site Trial</span>
              </div>
              <p className="text-[11px] text-cosmic-forest/70 font-light">
                Qualifying commercial venues receive a complimentary 14-day trial diffuser with both Twilight Lavender and Sunlit Gardenia formulations.
              </p>
            </div>

            <button
              type="submit"
              className="w-full py-3.5 rounded-full bg-cosmic-wood hover:bg-cosmic-wood-dark text-white font-semibold text-xs tracking-wide shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2"
            >
              <Send className="w-4 h-4" />
              <span>Submit Commercial Inquiry</span>
            </button>

            <div className="flex items-center justify-center gap-2 text-[10px] text-cosmic-forest/60">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
              <span>Strict privacy: your details are never shared with third parties</span>
            </div>
          </form>
        )}

      </div>
    </div>
  );
};
