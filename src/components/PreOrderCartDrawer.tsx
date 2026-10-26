import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { X, ShoppingBag, Check, Plus, Minus, ShieldCheck, Send, ArrowRight, QrCode, Truck, Download } from 'lucide-react';
import confetti from 'canvas-confetti';

interface PreOrderCartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PreOrderCartDrawer: React.FC<PreOrderCartDrawerProps> = ({ isOpen, onClose }) => {
  // Step in Checkout Flow: 'customize' | 'shipping' | 'confirmation'
  const [checkoutStep, setCheckoutStep] = useState<'customize' | 'shipping' | 'confirmation'>('customize');
  
  // Custom Starter Kit States
  const [finish, setFinish] = useState<'walnut' | 'oak'>('walnut');
  const [refill1, setRefill1] = useState<string>('lavender_liquid');
  const [refill2, setRefill2] = useState<string>('gardenia_gel');
  const [extraLiquidCount, setExtraLiquidCount] = useState<number>(0);
  const [extraGelCount, setExtraGelCount] = useState<number>(0);

  // Shipping & Contact Details
  const [customerName, setCustomerName] = useState<string>('');
  const [customerPhone, setCustomerPhone] = useState<string>('');
  const [address, setAddress] = useState<string>('');
  const [city, setCity] = useState<string>('');
  const [pincode, setPincode] = useState<string>('');
  const [paymentMethod, setPaymentMethod] = useState<'whatsapp' | 'upi' | 'cod'>('whatsapp');
  const [orderId, setOrderId] = useState<string>('');

  if (!isOpen) return null;

  // Base bundle price from PPT: ₹1,999 (Diffuser + 2 Refills included)
  const basePrice = 1999;
  const extraLiquidPrice = extraLiquidCount * 299;
  const extraGelPrice = extraGelCount * 249;
  const grandTotal = basePrice + extraLiquidPrice + extraGelPrice;

  const getRefillLabel = (val: string) => {
    switch (val) {
      case 'lavender_liquid':
        return 'Twilight Lavender Liquid Mist (100ml)';
      case 'lavender_gel':
        return 'Twilight Lavender Passive Gel Pod';
      case 'gardenia_liquid':
        return 'Sunlit Gardenia Liquid Mist (100ml)';
      case 'gardenia_gel':
        return 'Sunlit Gardenia Passive Gel Pod';
      default:
        return val;
    }
  };

  const handleFinalOrderSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newOrderId = 'CSMC-' + Math.floor(100000 + Math.random() * 900000);
    setOrderId(newOrderId);

    // Blast celebratory confetti
    confetti({
      particleCount: 90,
      spread: 75,
      origin: { y: 0.5 },
      colors: ['#966F47', '#8A70B2', '#D4A034', '#10523C'],
    });

    setCheckoutStep('confirmation');

    if (paymentMethod === 'whatsapp') {
      const message = `Hello COSMIC Team! I want to confirm my Pre-Order [Order ID: ${newOrderId}]:
- Hardware: COSMIC Ultrasonic Diffuser (${finish === 'walnut' ? 'Deep Walnut Teak' : 'Natural Light Oak'})
- Free Refill 1: ${getRefillLabel(refill1)}
- Free Refill 2: ${getRefillLabel(refill2)}
${extraLiquidCount > 0 ? `- Extra Liquid Refills: ${extraLiquidCount}x (₹${extraLiquidCount * 299})\n` : ''}${extraGelCount > 0 ? `- Extra Gel Pods: ${extraGelCount}x (₹${extraGelCount * 249})\n` : ''}- Total Pre-Order Amount: ₹${grandTotal}
- Customer Name: ${customerName}
- Shipping Address: ${address}, ${city} - ${pincode}
- Contact Phone: ${customerPhone}

Please verify availability and dispatch timeline!`;
      const encoded = encodeURIComponent(message);
      const whatsappUrl = `https://wa.me/919999999999?text=${encoded}`;
      setTimeout(() => {
        window.open(whatsappUrl, '_blank');
      }, 1000);
    }
  };

  const handleDownloadInvoice = () => {
    const invoice = `========================================================
COSMIC SMART AIR-CARE - OFFICIAL PRE-ORDER RECEIPT
Order ID: ${orderId}
Date: ${new Date().toLocaleDateString('en-IN', { dateStyle: 'full' })}
Status: PRE-ORDER CONFIRMED (DISPATCH ALLOCATED)
========================================================

CUSTOMER DETAILS:
Name: ${customerName}
Phone: ${customerPhone}
Delivery Address: ${address}, ${city} - ${pincode}
Payment Method: ${paymentMethod.toUpperCase()}

ORDER BREAKDOWN:
1. COSMIC Japandi Ultrasonic Diffuser
   Finish: ${finish === 'walnut' ? 'Deep Walnut Teak' : 'Natural Light Oak'}
   Included Refills:
     - ${getRefillLabel(refill1)}
     - ${getRefillLabel(refill2)}
   Price: ₹1,999.00

${extraLiquidCount > 0 ? `2. Extra Liquid Refills (${extraLiquidCount}x): ₹${extraLiquidCount * 299}.00\n` : ''}${extraGelCount > 0 ? `3. Extra Passive Gel Pods (${extraGelCount}x): ₹${extraGelCount * 249}.00\n` : ''}--------------------------------------------------------
SUBTOTAL: ₹${grandTotal}.00
NATIONWIDE SHIPPING: FREE
TOTAL AMOUNT PAYABLE: ₹${grandTotal}.00
--------------------------------------------------------

WARRANTY: 1-Year Comprehensive Hardware Warranty
FOUNDER DESK: Aido Paron (aparon375@gmail.com)
COSMIC LABS: Nature-Inspired Fragrance. Thoughtful Design.
========================================================
`;
    const element = document.createElement('a');
    const file = new Blob([invoice], { type: 'text/plain' });
    element.href = URL.createObjectURL(file);
    element.download = `${orderId}-Invoice.txt`;
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="absolute inset-0 bg-cosmic-dark/50 backdrop-blur-sm transition-opacity"
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-4 sm:pl-10">
        <motion.div
          initial={{ x: '100%' }}
          animate={{ x: 0 }}
          exit={{ x: '100%' }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="w-screen max-w-lg bg-[#FAF7F2] border-l border-cosmic-stone shadow-2xl flex flex-col justify-between"
        >
          {/* Drawer Header */}
          <div className="p-5 sm:p-6 border-b border-cosmic-stone/40 flex items-center justify-between bg-white">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full bg-cosmic-sand flex items-center justify-center text-cosmic-wood">
                <ShoppingBag className="w-4 h-4" />
              </div>
              <div>
                <h2 className="text-base font-serif font-bold text-cosmic-forest">
                  {checkoutStep === 'confirmation' ? 'Order Confirmation' : 'Custom Starter Kit Box'}
                </h2>
                <div className="flex items-center gap-1.5 text-[11px] text-cosmic-muted font-mono">
                  <span className={checkoutStep === 'customize' ? 'text-cosmic-wood font-bold' : ''}>1. Customizer</span>
                  <span>&gt;</span>
                  <span className={checkoutStep === 'shipping' ? 'text-cosmic-wood font-bold' : ''}>2. Dispatch</span>
                  <span>&gt;</span>
                  <span className={checkoutStep === 'confirmation' ? 'text-cosmic-wood font-bold' : ''}>3. Receipt</span>
                </div>
              </div>
            </div>

            <button
              onClick={onClose}
              className="p-2 rounded-full text-cosmic-forest/70 hover:bg-cosmic-sand/60 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Drawer Body */}
          <div className="flex-1 overflow-y-auto p-5 sm:p-6 space-y-6">
            
            {/* STEP 1: CUSTOMIZE STARTER KIT */}
            {checkoutStep === 'customize' && (
              <div className="space-y-6 animate-in fade-in duration-300">
                {/* Product Summary Box */}
                <div className="p-4 rounded-2xl bg-white border border-cosmic-stone/60 shadow-xs flex items-center gap-4">
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
                      Starter Bundle: ₹1,999 (Hardware + 2 Refills)
                    </p>
                    <span className="text-[10px] text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full font-semibold">
                      Save ₹548 compared to standalone
                    </span>
                  </div>
                </div>

                {/* Finish Selector */}
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-cosmic-forest block">
                    1. Wood Finish
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
                      <div className="text-[10px] text-cosmic-muted">Japandi warm grain</div>
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
                      <div className="text-[10px] text-cosmic-muted">Scandinavian light grain</div>
                    </button>
                  </div>
                </div>

                {/* 2 Included Refills */}
                <div className="space-y-3">
                  <label className="text-xs font-bold uppercase tracking-wider text-cosmic-forest block">
                    2. Choose 2 Included Refills
                  </label>

                  <div className="space-y-2">
                    <div className="text-[11px] font-semibold text-cosmic-forest/70">Refill 1 (Free):</div>
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
                    <div className="text-[11px] font-semibold text-cosmic-forest/70">Refill 2 (Free):</div>
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

                {/* Optional Add-Ons */}
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
                        className="w-6 h-6 rounded-full bg-cosmic-sand flex items-center justify-center hover:bg-cosmic-stone"
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="font-mono font-bold w-4 text-center">{extraLiquidCount}</span>
                      <button
                        type="button"
                        onClick={() => setExtraLiquidCount(extraLiquidCount + 1)}
                        className="w-6 h-6 rounded-full bg-cosmic-sand flex items-center justify-center hover:bg-cosmic-stone"
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
                        className="w-6 h-6 rounded-full bg-cosmic-sand flex items-center justify-center hover:bg-cosmic-stone"
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="font-mono font-bold w-4 text-center">{extraGelCount}</span>
                      <button
                        type="button"
                        onClick={() => setExtraGelCount(extraGelCount + 1)}
                        className="w-6 h-6 rounded-full bg-cosmic-sand flex items-center justify-center hover:bg-cosmic-stone"
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                    </div>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => setCheckoutStep('shipping')}
                  className="w-full py-4 rounded-full bg-cosmic-forest hover:bg-cosmic-dark text-cosmic-cream font-semibold text-xs tracking-wide shadow-lg flex items-center justify-center gap-2"
                >
                  <span>Proceed to Delivery &amp; Address — ₹{grandTotal}</span>
                  <ArrowRight className="w-4 h-4 text-cosmic-wood-light" />
                </button>
              </div>
            )}

            {/* STEP 2: SHIPPING DETAILS & PAYMENT */}
            {checkoutStep === 'shipping' && (
              <form onSubmit={handleFinalOrderSubmit} className="space-y-4 animate-in fade-in duration-300 text-xs">
                <div className="flex items-center justify-between border-b border-cosmic-stone/40 pb-2">
                  <span className="font-bold text-cosmic-forest uppercase tracking-wider text-[11px]">
                    Shipping &amp; Contact Details
                  </span>
                  <button
                    type="button"
                    onClick={() => setCheckoutStep('customize')}
                    className="text-cosmic-wood font-semibold hover:underline"
                  >
                    Edit Box
                  </button>
                </div>

                <div>
                  <label className="font-bold text-cosmic-forest block mb-1">Full Name</label>
                  <input
                    type="text"
                    required
                    placeholder="Receiver Name"
                    value={customerName}
                    onChange={(e) => setCustomerName(e.target.value)}
                    className="w-full p-2.5 rounded-xl bg-white border border-cosmic-stone text-cosmic-forest focus:outline-none focus:ring-1 focus:ring-cosmic-wood"
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="font-bold text-cosmic-forest block mb-1">WhatsApp Phone</label>
                    <input
                      type="tel"
                      required
                      placeholder="+91..."
                      value={customerPhone}
                      onChange={(e) => setCustomerPhone(e.target.value)}
                      className="w-full p-2.5 rounded-xl bg-white border border-cosmic-stone text-cosmic-forest focus:outline-none focus:ring-1 focus:ring-cosmic-wood"
                    />
                  </div>
                  <div>
                    <label className="font-bold text-cosmic-forest block mb-1">Pin Code</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. 110001"
                      value={pincode}
                      onChange={(e) => setPincode(e.target.value)}
                      className="w-full p-2.5 rounded-xl bg-white border border-cosmic-stone text-cosmic-forest focus:outline-none focus:ring-1 focus:ring-cosmic-wood"
                    />
                  </div>
                </div>

                <div>
                  <label className="font-bold text-cosmic-forest block mb-1">Delivery Address</label>
                  <textarea
                    required
                    rows={2}
                    placeholder="House/Flat No., Apartment, Street name"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    className="w-full p-2.5 rounded-xl bg-white border border-cosmic-stone text-cosmic-forest focus:outline-none focus:ring-1 focus:ring-cosmic-wood"
                  />
                </div>

                <div>
                  <label className="font-bold text-cosmic-forest block mb-1">City / State</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Bengaluru, Karnataka"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    className="w-full p-2.5 rounded-xl bg-white border border-cosmic-stone text-cosmic-forest focus:outline-none focus:ring-1 focus:ring-cosmic-wood"
                  />
                </div>

                {/* Payment Selection Options */}
                <div className="space-y-2 pt-2 border-t border-cosmic-stone/40">
                  <label className="font-bold text-cosmic-forest block text-[11px] uppercase tracking-wider">
                    Select Payment / Pre-Order Dispatch Mode:
                  </label>
                  
                  <div className="grid grid-cols-3 gap-2">
                    <button
                      type="button"
                      onClick={() => setPaymentMethod('whatsapp')}
                      className={`p-2.5 rounded-xl border text-center transition-all ${
                        paymentMethod === 'whatsapp'
                          ? 'bg-emerald-50 border-emerald-500 font-bold text-emerald-900 shadow-xs ring-1 ring-emerald-500/30'
                          : 'bg-white border-cosmic-stone text-cosmic-forest'
                      }`}
                    >
                      <Send className="w-3.5 h-3.5 mx-auto mb-1 text-emerald-600" />
                      <span>WhatsApp Direct</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => setPaymentMethod('upi')}
                      className={`p-2.5 rounded-xl border text-center transition-all ${
                        paymentMethod === 'upi'
                          ? 'bg-sky-50 border-sky-500 font-bold text-sky-900 shadow-xs ring-1 ring-sky-500/30'
                          : 'bg-white border-cosmic-stone text-cosmic-forest'
                      }`}
                    >
                      <QrCode className="w-3.5 h-3.5 mx-auto mb-1 text-sky-600" />
                      <span>UPI QR Pay</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => setPaymentMethod('cod')}
                      className={`p-2.5 rounded-xl border text-center transition-all ${
                        paymentMethod === 'cod'
                          ? 'bg-amber-50 border-amber-500 font-bold text-amber-900 shadow-xs ring-1 ring-amber-500/30'
                          : 'bg-white border-cosmic-stone text-cosmic-forest'
                      }`}
                    >
                      <Truck className="w-3.5 h-3.5 mx-auto mb-1 text-amber-600" />
                      <span>Cash on Delivery</span>
                    </button>
                  </div>
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full py-4 rounded-full bg-cosmic-wood hover:bg-cosmic-wood-dark text-white font-semibold text-xs tracking-wide shadow-lg transition-all flex items-center justify-center gap-2"
                  >
                    <Check className="w-4 h-4" />
                    <span>Confirm &amp; Place Pre-Order — ₹{grandTotal}</span>
                  </button>
                </div>
              </form>
            )}

            {/* STEP 3: CONFIRMATION & RECEIPT */}
            {checkoutStep === 'confirmation' && (
              <div className="space-y-6 text-center animate-in zoom-in-95 duration-300 py-4">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center mx-auto shadow-sm">
                  <Check className="w-8 h-8" />
                </div>

                <div className="space-y-1">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-emerald-800 bg-emerald-100/80 px-2.5 py-0.5 rounded-full font-bold">
                    PRE-ORDER CONFIRMED
                  </span>
                  <h3 className="text-2xl font-serif font-bold text-cosmic-forest">
                    Order Ref: {orderId}
                  </h3>
                  <p className="text-xs text-cosmic-forest/70 font-light max-w-xs mx-auto">
                    Thank you, <strong>{customerName || 'Valued Patron'}</strong>! Your customized starter kit batch slot is secured.
                  </p>
                </div>

                {/* Itemized Order Receipt Card */}
                <div className="p-4 rounded-2xl bg-white border border-cosmic-stone text-left text-xs space-y-2.5 font-mono shadow-xs">
                  <div className="flex justify-between border-b border-cosmic-stone/40 pb-2 font-bold text-cosmic-forest">
                    <span>COSMIC Starter Bundle</span>
                    <span>₹1,999</span>
                  </div>
                  <div className="text-[11px] text-cosmic-forest/75 space-y-1">
                    <div>• Finish: {finish === 'walnut' ? 'Deep Walnut Teak' : 'Natural Light Oak'}</div>
                    <div>• Refill 1: {getRefillLabel(refill1)}</div>
                    <div>• Refill 2: {getRefillLabel(refill2)}</div>
                    {extraLiquidCount > 0 && <div>• Extra Liquid: {extraLiquidCount}x (₹{extraLiquidCount * 299})</div>}
                    {extraGelCount > 0 && <div>• Extra Gel: {extraGelCount}x (₹{extraGelCount * 249})</div>}
                  </div>
                  <div className="flex justify-between border-t border-cosmic-stone/40 pt-2 font-bold text-cosmic-wood text-sm">
                    <span>Total Amount</span>
                    <span>₹{grandTotal}</span>
                  </div>
                  <div className="text-[10px] text-cosmic-muted">
                    Delivery to: {city || 'India'} • Free Tracked Express Dispatch
                  </div>
                </div>

                {/* Actions */}
                <div className="space-y-2.5">
                  <button
                    onClick={handleDownloadInvoice}
                    className="w-full py-3 rounded-full bg-white border border-cosmic-stone hover:bg-cosmic-sand/50 text-cosmic-forest text-xs font-semibold flex items-center justify-center gap-2 shadow-xs transition-colors"
                  >
                    <Download className="w-3.5 h-3.5 text-cosmic-wood" />
                    <span>Download Official Receipt (.txt)</span>
                  </button>

                  <button
                    onClick={() => {
                      setCheckoutStep('customize');
                      onClose();
                    }}
                    className="w-full py-3 rounded-full bg-cosmic-forest text-cosmic-cream text-xs font-semibold hover:bg-cosmic-dark transition-colors"
                  >
                    Close &amp; Return to Store
                  </button>
                </div>
              </div>
            )}

          </div>

          {/* Drawer Price Footer */}
          {checkoutStep !== 'confirmation' && (
            <div className="p-5 sm:p-6 border-t border-cosmic-stone/40 bg-white space-y-2.5">
              <div className="flex items-center justify-between text-xs text-cosmic-forest/70">
                <span>Nationwide Shipping</span>
                <span className="text-emerald-700 font-semibold font-mono">Free</span>
              </div>
              <div className="flex items-center justify-between text-base font-serif font-bold text-cosmic-forest">
                <span>Grand Total</span>
                <span className="text-cosmic-wood font-mono">₹{grandTotal}</span>
              </div>
              <div className="flex items-center gap-2 text-[10px] text-cosmic-forest/60 justify-center">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                <span>1-Year Hardware Warranty • 30-Day Money-Back Guarantee</span>
              </div>
            </div>
          )}

        </motion.div>
      </div>
    </div>
  );
};
