import React, { useState } from 'react';
import { X, ShoppingBag, Check, Plus, Minus, ShieldCheck, Send } from 'lucide-react';
import confetti from 'canvas-confetti';

interface PreOrderCartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PreOrderCartDrawer: React.FC<PreOrderCartDrawerProps> = ({ isOpen, onClose }) => {
  // Custom Starter Kit States
  const [finish, setFinish] = useState<'oak' | 'walnut'>('walnut');
  const [refill1, setRefill1] = useState<string>('lavender_liquid');
  const [refill2, setRefill2] = useState<string>('gardenia_gel');
  const [extraLiquidCount, setExtraLiquidCount] = useState<number>(0);
  const [extraGelCount, setExtraGelCount] = useState<number>(0);
  const [orderSubmitted, setOrderSubmitted] = useState<boolean>(false);
  const [customerName, setCustomerName] = useState<string>('');
  const [customerPhone, setCustomerPhone] = useState<string>('');

  if (!isOpen) return null;

  // Base bundle price from PPT: ₹1,999 (Diffuser + 2 Refills included)
  const basePrice = 1999;
  const extraLiquidPrice = extraLiquidCount * 299;
  const extraGelPrice = extraGelCount * 249;
  const grandTotal = basePrice + extraLiquidPrice + extraGelPrice;

  const getRefillLabel = (val: string) => {
    switch (val) {
      case 'lavender_liquid':
        return 'Twilight Lavender Liquid (100ml)';
      case 'lavender_gel':
        return 'Twilight Lavender Passive Gel Pod';
      case 'gardenia_liquid':
        return 'Sunlit Gardenia Liquid (100ml)';
      case 'gardenia_gel':
        return 'Sunlit Gardenia Passive Gel Pod';
      default:
        return val;
    }
  };

  const handleWhatsAppPreOrder = (e: React.FormEvent) => {
    e.preventDefault();

    // Trigger celebratory confetti
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#966F47', '#8A70B2', '#D4A034', '#10523C'],
    });

    setOrderSubmitted(true);

    const message = `Hello COSMIC Team! I want to pre-order the COSMIC Starter Kit:
- Hardware: COSMIC Ultrasonic Diffuser (${finish === 'walnut' ? 'Deep Walnut Teak' : 'Natural Oak'})
- Included Refill 1: ${getRefillLabel(refill1)}
- Included Refill 2: ${getRefillLabel(refill2)}
${extraLiquidCount > 0 ? `- Extra Liquid Refills: ${extraLiquidCount}x (₹${extraLiquidCount * 299})\n` : ''}${extraGelCount > 0 ? `- Extra Gel Pods: ${extraGelCount}x (₹${extraGelCount * 249})\n` : ''}- Total Pre-Order Amount: ₹${grandTotal}
- Customer Name: ${customerName || 'Guest'}
- Contact Phone: ${customerPhone || 'Not specified'}

Please confirm availability and dispatch schedule!`;

    const encoded = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/919999999999?text=${encoded}`;

    // Open WhatsApp in new tab after brief celebration
    setTimeout(() => {
      window.open(whatsappUrl, '_blank');
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="absolute inset-0 bg-cosmic-dark/40 backdrop-blur-sm transition-opacity"
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-6 sm:pl-10">
        <div className="w-screen max-w-md bg-[#FAF7F2] border-l border-cosmic-stone shadow-2xl flex flex-col justify-between">
          
          {/* Drawer Header */}
          <div className="p-6 border-b border-cosmic-stone/40 flex items-center justify-between bg-white">
            <div className="flex items-center gap-2">
              <ShoppingBag className="w-5 h-5 text-cosmic-wood" />
              <h2 className="text-lg font-serif font-medium text-cosmic-forest">
                Custom Starter Kit Box
              </h2>
            </div>
            <button
              onClick={onClose}
              className="p-2 rounded-full text-cosmic-forest/70 hover:bg-cosmic-sand/60 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Drawer Scrollable Body */}
          <div className="flex-1 overflow-y-auto p-6 space-y-6">
            
            {orderSubmitted ? (
              <div className="text-center py-12 space-y-4 animate-in zoom-in-95 duration-300">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto shadow-sm">
                  <Check className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-serif font-medium text-cosmic-forest">
                  Pre-Order Transferred!
                </h3>
                <p className="text-xs text-cosmic-forest/75 font-light leading-relaxed max-w-xs mx-auto">
                  Your customized starter kit specification has been compiled. WhatsApp is opening to connect you directly with the COSMIC dispatch desk.
                </p>
                <div className="p-4 rounded-xl bg-white border border-cosmic-stone text-left text-xs space-y-1 font-mono">
                  <div className="text-cosmic-wood font-bold">Total: ₹{grandTotal}</div>
                  <div className="text-cosmic-forest/70">Finish: {finish.toUpperCase()}</div>
                  <div className="text-cosmic-forest/70">Refill 1: {getRefillLabel(refill1)}</div>
                  <div className="text-cosmic-forest/70">Refill 2: {getRefillLabel(refill2)}</div>
                </div>
                <button
                  onClick={() => {
                    setOrderSubmitted(false);
                    onClose();
                  }}
                  className="px-6 py-2.5 rounded-full bg-cosmic-forest text-cosmic-cream text-xs font-semibold"
                >
                  Close &amp; Continue Browsing
                </button>
              </div>
            ) : (
              <form onSubmit={handleWhatsAppPreOrder} className="space-y-6">
                
                {/* Product Summary Box */}
                <div className="p-4 rounded-2xl bg-white border border-cosmic-stone/60 shadow-sm flex items-center gap-4">
                  <div className="w-16 h-16 rounded-xl bg-[#F6F2EA] flex items-center justify-center p-2 flex-shrink-0">
                    <img
                      src="/assets/diffuser-exploded-schematic.jpg"
                      alt="COSMIC Diffuser"
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div>
                    <h4 className="text-sm font-serif font-bold text-cosmic-forest">
                      COSMIC Ultrasonic Diffuser
                    </h4>
                    <p className="text-xs text-cosmic-wood font-mono mt-0.5">
                      Base Bundle: ₹1,999 (Includes 2 Refills)
                    </p>
                  </div>
                </div>

                {/* 1. Select Diffuser Finish */}
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-cosmic-forest block">
                    1. Choose Wood-Grain Finish
                  </label>
                  <div className="grid grid-cols-2 gap-2.5">
                    <button
                      type="button"
                      onClick={() => setFinish('walnut')}
                      className={`p-3 rounded-xl border text-left text-xs transition-all ${
                        finish === 'walnut'
                          ? 'bg-cosmic-sand/70 border-cosmic-wood ring-1 ring-cosmic-wood/30 font-bold'
                          : 'bg-white border-cosmic-stone/60'
                      }`}
                    >
                      <div className="font-semibold text-cosmic-forest">Deep Walnut Teak</div>
                      <div className="text-[10px] text-cosmic-muted">Warm, rich Japandi grain</div>
                    </button>
                    <button
                      type="button"
                      onClick={() => setFinish('oak')}
                      className={`p-3 rounded-xl border text-left text-xs transition-all ${
                        finish === 'oak'
                          ? 'bg-cosmic-sand/70 border-cosmic-wood ring-1 ring-cosmic-wood/30 font-bold'
                          : 'bg-white border-cosmic-stone/60'
                      }`}
                    >
                      <div className="font-semibold text-cosmic-forest">Natural Light Oak</div>
                      <div className="text-[10px] text-cosmic-muted">Subtle, airy Nordic grain</div>
                    </button>
                  </div>
                </div>

                {/* 2. Choose Included Refills (Pick 2) */}
                <div className="space-y-3">
                  <label className="text-xs font-bold uppercase tracking-wider text-cosmic-forest block">
                    2. Choose 2 Included Botanical Refills
                  </label>

                  <div className="space-y-2">
                    <div className="text-[11px] font-semibold text-cosmic-forest/70">Refill 1 (Free with box):</div>
                    <select
                      value={refill1}
                      onChange={(e) => setRefill1(e.target.value)}
                      className="w-full p-2.5 rounded-xl bg-white border border-cosmic-stone/70 text-xs font-medium text-cosmic-forest focus:outline-none focus:ring-1 focus:ring-cosmic-wood"
                    >
                      <option value="lavender_liquid">Twilight Lavender Liquid Mist (100ml)</option>
                      <option value="gardenia_liquid">Sunlit Gardenia Liquid Mist (100ml)</option>
                      <option value="lavender_gel">Twilight Lavender Solid Gel Pod</option>
                      <option value="gardenia_gel">Sunlit Gardenia Solid Gel Pod</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <div className="text-[11px] font-semibold text-cosmic-forest/70">Refill 2 (Free with box):</div>
                    <select
                      value={refill2}
                      onChange={(e) => setRefill2(e.target.value)}
                      className="w-full p-2.5 rounded-xl bg-white border border-cosmic-stone/70 text-xs font-medium text-cosmic-forest focus:outline-none focus:ring-1 focus:ring-cosmic-wood"
                    >
                      <option value="gardenia_gel">Sunlit Gardenia Solid Gel Pod</option>
                      <option value="lavender_liquid">Twilight Lavender Liquid Mist (100ml)</option>
                      <option value="gardenia_liquid">Sunlit Gardenia Liquid Mist (100ml)</option>
                      <option value="lavender_gel">Twilight Lavender Solid Gel Pod</option>
                    </select>
                  </div>
                </div>

                {/* 3. Extra Add-on Refills */}
                <div className="space-y-2 pt-2 border-t border-cosmic-stone/40">
                  <label className="text-xs font-bold uppercase tracking-wider text-cosmic-forest block">
                    3. Optional Add-On Refills
                  </label>
                  
                  <div className="flex items-center justify-between p-3 rounded-xl bg-white border border-cosmic-stone/60 text-xs">
                    <div>
                      <div className="font-semibold text-cosmic-forest">Extra 100ml Liquid Mist</div>
                      <div className="text-[11px] text-cosmic-muted font-mono">+₹299 each</div>
                    </div>
                    <div className="flex items-center gap-2">
                      <button
                        type="button"
                        onClick={() => setExtraLiquidCount(Math.max(0, extraLiquidCount - 1))}
                        className="w-6 h-6 rounded-full bg-cosmic-sand flex items-center justify-center hover:bg-cosmic-stone transition-colors"
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="font-mono font-bold w-4 text-center">{extraLiquidCount}</span>
                      <button
                        type="button"
                        onClick={() => setExtraLiquidCount(extraLiquidCount + 1)}
                        className="w-6 h-6 rounded-full bg-cosmic-sand flex items-center justify-center hover:bg-cosmic-stone transition-colors"
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                    </div>
                  </div>

                  <div className="flex items-center justify-between p-3 rounded-xl bg-white border border-cosmic-stone/60 text-xs">
                    <div>
                      <div className="font-semibold text-cosmic-forest">Extra Passive Gel Pod</div>
                      <div className="text-[11px] text-cosmic-muted font-mono">+₹249 each</div>
                    </div>
                    <div className="flex items-center gap-2">
                      <button
                        type="button"
                        onClick={() => setExtraGelCount(Math.max(0, extraGelCount - 1))}
                        className="w-6 h-6 rounded-full bg-cosmic-sand flex items-center justify-center hover:bg-cosmic-stone transition-colors"
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="font-mono font-bold w-4 text-center">{extraGelCount}</span>
                      <button
                        type="button"
                        onClick={() => setExtraGelCount(extraGelCount + 1)}
                        className="w-6 h-6 rounded-full bg-cosmic-sand flex items-center justify-center hover:bg-cosmic-stone transition-colors"
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                    </div>
                  </div>
                </div>

                {/* 4. Customer Contact Details */}
                <div className="space-y-3 pt-2 border-t border-cosmic-stone/40">
                  <label className="text-xs font-bold uppercase tracking-wider text-cosmic-forest block">
                    4. Pre-Order Dispatch Info
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Your Full Name"
                    value={customerName}
                    onChange={(e) => setCustomerName(e.target.value)}
                    className="w-full p-2.5 rounded-xl bg-white border border-cosmic-stone/70 text-xs text-cosmic-forest focus:outline-none focus:ring-1 focus:ring-cosmic-wood"
                  />
                  <input
                    type="tel"
                    required
                    placeholder="WhatsApp Phone Number"
                    value={customerPhone}
                    onChange={(e) => setCustomerPhone(e.target.value)}
                    className="w-full p-2.5 rounded-xl bg-white border border-cosmic-stone/70 text-xs text-cosmic-forest focus:outline-none focus:ring-1 focus:ring-cosmic-wood"
                  />
                </div>

                {/* Submit Action */}
                <button
                  type="submit"
                  className="w-full py-4 rounded-full bg-cosmic-wood hover:bg-cosmic-wood-dark text-white font-semibold text-xs tracking-wide shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  <span>Submit WhatsApp Pre-Order — ₹{grandTotal}</span>
                </button>
              </form>
            )}

          </div>

          {/* Drawer Footer Price Summary */}
          {!orderSubmitted && (
            <div className="p-6 border-t border-cosmic-stone/40 bg-white space-y-3">
              <div className="flex items-center justify-between text-xs text-cosmic-forest/70">
                <span>Shipping &amp; Handling</span>
                <span className="text-emerald-700 font-semibold font-mono">Free Nationwide</span>
              </div>
              <div className="flex items-center justify-between text-base font-serif font-bold text-cosmic-forest">
                <span>Grand Total</span>
                <span className="text-cosmic-wood font-mono">₹{grandTotal}</span>
              </div>
              <div className="flex items-center gap-2 text-[10px] text-cosmic-forest/60 justify-center">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                <span>1-Year Hardware Warranty • 30-Day Happiness Guarantee</span>
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};
