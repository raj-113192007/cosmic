import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send, CheckCircle2 } from 'lucide-react';
import confetti from 'canvas-confetti';

interface FounderContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const FounderContactModal: React.FC<FounderContactModalProps> = ({ isOpen, onClose }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [topic, setTopic] = useState('feedback');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    confetti({
      particleCount: 50,
      spread: 60,
      origin: { y: 0.6 },
      colors: ['#966F47', '#8A70B2', '#D4A034'],
    });
    setSubmitted(true);
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
          className="relative bg-[#FAF7F2] rounded-3xl max-w-lg w-full border border-cosmic-stone shadow-2xl z-10 flex flex-col max-h-[90vh] overflow-hidden"
        >
          {/* Header */}
          <div className="p-6 border-b border-cosmic-stone/60 flex items-center justify-between bg-white">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-cosmic-sand flex items-center justify-center text-cosmic-wood font-serif font-bold text-base">
                AP
              </div>
              <div>
                <h3 className="text-base font-serif font-semibold text-cosmic-forest">
                  Direct Founder Desk • Aido Paron
                </h3>
                <p className="text-xs text-cosmic-muted font-mono">
                  BBA Department • aparon375@gmail.com
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
          <div className="p-6 sm:p-8 overflow-y-auto">
            {submitted ? (
              <div className="text-center py-8 space-y-4">
                <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-7 h-7" />
                </div>
                <h4 className="text-xl font-serif font-semibold text-cosmic-forest">
                  Message Dispatched to Aido
                </h4>
                <p className="text-xs text-cosmic-forest/75 font-light leading-relaxed max-w-xs mx-auto">
                  Thank you, <strong>{name}</strong>! Your note has been forwarded directly to <code>aparon375@gmail.com</code>. Aido will reply within 24 hours.
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
                <div>
                  <label className="font-bold text-cosmic-forest block mb-1">Select Inquiry Topic</label>
                  <select
                    value={topic}
                    onChange={(e) => setTopic(e.target.value)}
                    className="w-full p-2.5 rounded-xl bg-white border border-cosmic-stone text-cosmic-forest focus:outline-none focus:ring-1 focus:ring-cosmic-wood"
                  >
                    <option value="feedback">Product Design Feedback &amp; Ideas</option>
                    <option value="press">Press &amp; Academic Media Inquiry</option>
                    <option value="wholesale">Distribution &amp; Retail Partnership</option>
                    <option value="custom">Bespoke Fragrance Formulation</option>
                  </select>
                </div>

                <div>
                  <label className="font-bold text-cosmic-forest block mb-1">Your Name</label>
                  <input
                    type="text"
                    required
                    placeholder="Full Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full p-2.5 rounded-xl bg-white border border-cosmic-stone text-cosmic-forest focus:outline-none focus:ring-1 focus:ring-cosmic-wood"
                  />
                </div>

                <div>
                  <label className="font-bold text-cosmic-forest block mb-1">Your Email</label>
                  <input
                    type="email"
                    required
                    placeholder="name@email.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full p-2.5 rounded-xl bg-white border border-cosmic-stone text-cosmic-forest focus:outline-none focus:ring-1 focus:ring-cosmic-wood"
                  />
                </div>

                <div>
                  <label className="font-bold text-cosmic-forest block mb-1">Your Message</label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Share your thoughts on the COSMIC prototype, hardware engineering, or fragrance notes..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full p-2.5 rounded-xl bg-white border border-cosmic-stone text-cosmic-forest focus:outline-none focus:ring-1 focus:ring-cosmic-wood"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 rounded-full bg-cosmic-wood hover:bg-cosmic-wood-dark text-white font-semibold text-xs tracking-wide shadow-md transition-all flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Message to Aido Paron</span>
                </button>
              </form>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
