import React, { useState } from 'react';
import { HelpCircle, Check, ArrowRight, RotateCcw, Sparkles, Droplets, ZapOff } from 'lucide-react';
import type { AtmosphereMood } from '../types';

interface ScentMatcherQuizProps {
  setMood: (mood: AtmosphereMood) => void;
  openCart: () => void;
}

export const ScentMatcherQuiz: React.FC<ScentMatcherQuizProps> = ({ setMood, openCart }) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [room, setRoom] = useState<string>('bedroom');
  const [goal, setGoal] = useState<string>('calm');
  const [format, setFormat] = useState<string>('hybrid');
  const [resultShown, setResultShown] = useState(false);

  const handleFinish = () => {
    setResultShown(true);
  };

  const handleReset = () => {
    setCurrentStep(1);
    setResultShown(false);
  };

  // Logic to determine recommended scent
  const isLavender = goal === 'calm' || room === 'bedroom' || goal === 'focus';
  const recommendedScent = isLavender ? 'Twilight Lavender' : 'Sunlit Gardenia';
  const recommendedMood: AtmosphereMood = isLavender ? 'lavender' : 'gardenia';

  return (
    <section id="quiz" className="py-20 md:py-28 bg-[#FAF7F2] border-t border-cosmic-stone/40 scroll-mt-28">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cosmic-sand/80 border border-cosmic-stone/60 text-xs font-semibold tracking-widest uppercase text-cosmic-wood">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Interactive Fragrance Diagnostic</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-medium text-cosmic-forest leading-tight">
            Find Your Scent Match <br />
            <span className="italic font-normal text-cosmic-wood">In 3 Questions</span>
          </h2>
          <p className="text-base text-cosmic-forest/75 font-light leading-relaxed max-w-xl mx-auto">
            Not sure whether Twilight Lavender or Sunlit Gardenia fits your space? Answer 3 quick questions for a tailored olfactory recommendation.
          </p>
        </div>

        {/* Quiz Container */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-cosmic-stone/60 shadow-xl relative overflow-hidden">
          
          {!resultShown ? (
            <div className="space-y-8">
              
              {/* Progress Bar */}
              <div className="flex items-center justify-between text-xs font-semibold text-cosmic-forest/70 border-b border-cosmic-stone/40 pb-4">
                <span>Question 0{currentStep} of 03</span>
                <span className="text-cosmic-wood font-mono">{Math.round((currentStep / 3) * 100)}% Completed</span>
              </div>

              {/* Question 1: Space */}
              {currentStep === 1 && (
                <div className="space-y-5 animate-in fade-in duration-300">
                  <h3 className="text-xl sm:text-2xl font-serif font-medium text-cosmic-forest">
                    1. Where will your COSMIC diffuser live?
                  </h3>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    {[
                      { id: 'bedroom', title: 'Bedroom & Sleep Sanctuary', desc: 'Focus on rest, recovery, and peaceful sleep' },
                      { id: 'office', title: 'Home Office & Study Desk', desc: 'Sustained focus, mental clarity, low distraction' },
                      { id: 'living', title: 'Living Room & Lounge', desc: 'Welcoming guests, relaxation, and conversation' },
                      { id: 'cafe', title: 'Cafe, Studio, or Boutique', desc: 'Memorable brand identity and subtle guest comfort' },
                    ].map((opt) => (
                      <button
                        key={opt.id}
                        onClick={() => setRoom(opt.id)}
                        className={`p-4 rounded-2xl text-left border transition-all ${
                          room === opt.id
                            ? 'bg-cosmic-sand/60 border-cosmic-wood shadow-sm ring-1 ring-cosmic-wood/30'
                            : 'bg-white border-cosmic-stone/60 hover:bg-cosmic-sand/30'
                        }`}
                      >
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-sm font-bold text-cosmic-forest">{opt.title}</span>
                          {room === opt.id && <Check className="w-4 h-4 text-cosmic-wood" />}
                        </div>
                        <p className="text-xs text-cosmic-forest/65">{opt.desc}</p>
                      </button>
                    ))}
                  </div>

                  <div className="pt-4 flex justify-end">
                    <button
                      onClick={() => setCurrentStep(2)}
                      className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-cosmic-forest text-cosmic-cream font-medium text-xs hover:bg-cosmic-dark transition-all"
                    >
                      <span>Next Question</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              )}

              {/* Question 2: Atmosphere Goal */}
              {currentStep === 2 && (
                <div className="space-y-5 animate-in fade-in duration-300">
                  <h3 className="text-xl sm:text-2xl font-serif font-medium text-cosmic-forest">
                    2. What feeling are you curating?
                  </h3>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5">
                    {[
                      { id: 'calm', title: 'Deep Calm & Sleep', desc: 'Soothe evening anxiety and prepare for deep REM rest' },
                      { id: 'focus', title: 'Clean Cognitive Flow', desc: 'Clear mental fog and elevate study focus' },
                      { id: 'luxury', title: 'Warmth & Vitality', desc: 'Opulent white florals that make any space feel high-end' },
                    ].map((opt) => (
                      <button
                        key={opt.id}
                        onClick={() => setGoal(opt.id)}
                        className={`p-4 rounded-2xl text-left border transition-all ${
                          goal === opt.id
                            ? 'bg-cosmic-sand/60 border-cosmic-wood shadow-sm ring-1 ring-cosmic-wood/30'
                            : 'bg-white border-cosmic-stone/60 hover:bg-cosmic-sand/30'
                        }`}
                      >
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-sm font-bold text-cosmic-forest">{opt.title}</span>
                          {goal === opt.id && <Check className="w-4 h-4 text-cosmic-wood" />}
                        </div>
                        <p className="text-xs text-cosmic-forest/65">{opt.desc}</p>
                      </button>
                    ))}
                  </div>

                  <div className="pt-4 flex justify-between items-center">
                    <button
                      onClick={() => setCurrentStep(1)}
                      className="text-xs text-cosmic-forest/70 hover:text-cosmic-forest font-semibold"
                    >
                      Back
                    </button>
                    <button
                      onClick={() => setCurrentStep(3)}
                      className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-cosmic-forest text-cosmic-cream font-medium text-xs hover:bg-cosmic-dark transition-all"
                    >
                      <span>Next Question</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              )}

              {/* Question 3: Refill Lifestyle */}
              {currentStep === 3 && (
                <div className="space-y-5 animate-in fade-in duration-300">
                  <h3 className="text-xl sm:text-2xl font-serif font-medium text-cosmic-forest">
                    3. How do you prefer to enjoy your fragrance?
                  </h3>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5">
                    {[
                      { id: 'mist', title: 'Active Micro-Mist', desc: 'I love visible cold vapor and fast room diffusion', icon: Droplets },
                      { id: 'gel', title: 'Zero-Power Solid Gel', desc: 'I want water-free, cord-free scenting for 30+ days', icon: ZapOff },
                      { id: 'hybrid', title: 'Dual Hybrid Platform', desc: 'I want both! Mist for evenings, gel for constant ambience', icon: Sparkles },
                    ].map((opt) => {
                      const Icon = opt.icon;
                      return (
                        <button
                          key={opt.id}
                          onClick={() => setFormat(opt.id)}
                          className={`p-4 rounded-2xl text-left border transition-all ${
                            format === opt.id
                              ? 'bg-cosmic-sand/60 border-cosmic-wood shadow-sm ring-1 ring-cosmic-wood/30'
                              : 'bg-white border-cosmic-stone/60 hover:bg-cosmic-sand/30'
                          }`}
                        >
                          <div className="flex items-center justify-between mb-2">
                            <Icon className="w-4 h-4 text-cosmic-wood" />
                            {format === opt.id && <Check className="w-4 h-4 text-cosmic-wood" />}
                          </div>
                          <span className="text-sm font-bold text-cosmic-forest block">{opt.title}</span>
                          <p className="text-xs text-cosmic-forest/65 mt-1">{opt.desc}</p>
                        </button>
                      );
                    })}
                  </div>

                  <div className="pt-4 flex justify-between items-center">
                    <button
                      onClick={() => setCurrentStep(2)}
                      className="text-xs text-cosmic-forest/70 hover:text-cosmic-forest font-semibold"
                    >
                      Back
                    </button>
                    <button
                      onClick={handleFinish}
                      className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-cosmic-wood text-white font-semibold text-xs hover:bg-cosmic-wood-dark transition-all shadow-md"
                    >
                      <span>Reveal My Match</span>
                      <Sparkles className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              )}

            </div>
          ) : (
            /* Result Screen */
            <div className="space-y-6 text-center animate-in zoom-in-95 duration-400 py-4">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 text-xs font-semibold border border-emerald-200">
                <Check className="w-3.5 h-3.5" />
                <span>Diagnostic Match Confirmed</span>
              </div>

              <div className="max-w-md mx-auto space-y-2">
                <h3 className="text-2xl sm:text-3xl font-serif font-medium text-cosmic-forest">
                  Your Ideal Match: <br />
                  <span className="text-cosmic-wood font-semibold">{recommendedScent}</span>
                </h3>
                <p className="text-xs sm:text-sm text-cosmic-forest/70 font-light leading-relaxed">
                  {isLavender
                    ? 'Formulated with French alpine lavender and clary sage to quiet racing thoughts and induce restorative calm in your space.'
                    : 'Sun-drenched white gardenia petals and creamy amber to cast an inviting, luxurious radiance across your home.'}
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-cosmic-sand/50 max-w-lg mx-auto border border-cosmic-stone/60 text-left text-xs space-y-2">
                <div className="font-bold text-cosmic-forest uppercase tracking-wider text-[10px]">
                  Recommended Starter Kit Bundle (₹1,999)
                </div>
                <div className="flex items-center justify-between text-cosmic-forest/80">
                  <span>1x COSMIC Japandi Wood-Grain Ultrasonic Diffuser</span>
                  <span className="font-mono text-emerald-700 font-semibold">Included</span>
                </div>
                <div className="flex items-center justify-between text-cosmic-forest/80">
                  <span>1x {recommendedScent} Liquid Refill (100ml)</span>
                  <span className="font-mono text-emerald-700 font-semibold">Included</span>
                </div>
                <div className="flex items-center justify-between text-cosmic-forest/80">
                  <span>1x {recommendedScent} Passive Solid Gel Pod</span>
                  <span className="font-mono text-emerald-700 font-semibold">Included</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-4">
                <button
                  onClick={() => {
                    setMood(recommendedMood);
                    openCart();
                  }}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-cosmic-forest text-cosmic-cream font-medium text-xs hover:bg-cosmic-dark transition-all shadow-lg"
                >
                  <span>Select {recommendedScent} in Starter Box</span>
                  <ArrowRight className="w-4 h-4 text-cosmic-wood-light" />
                </button>
                <button
                  onClick={handleReset}
                  className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-full text-xs font-semibold text-cosmic-forest/70 hover:text-cosmic-forest transition-colors"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Retake Diagnostic</span>
                </button>
              </div>
            </div>
          )}

        </div>

      </div>
    </section>
  );
};
