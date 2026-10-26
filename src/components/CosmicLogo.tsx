import React from 'react';

interface CosmicLogoProps {
  className?: string;
  showTagline?: boolean;
  light?: boolean;
}

export const CosmicLogo: React.FC<CosmicLogoProps> = ({
  className = '',
  showTagline = false,
  light = false,
}) => {
  return (
    <div className={`flex items-center gap-2.5 group cursor-pointer select-none ${className}`}>
      {/* Bespoke Celestial Ultrasonic Arc Emblem */}
      <div className="relative w-8 h-8 rounded-full bg-gradient-to-br from-[#966F47] to-[#694B2E] flex items-center justify-center shadow-sm transition-transform duration-300 group-hover:scale-105">
        <svg
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-5 h-5 text-[#FAF7F2]"
        >
          {/* Central Mist Atomizer Dot */}
          <circle cx="16" cy="16" r="2.2" fill="currentColor" />
          
          {/* Inner Acoustic Wave Ring */}
          <circle
            cx="16"
            cy="16"
            r="6"
            stroke="currentColor"
            strokeWidth="1.2"
            strokeDasharray="2 2"
            className="opacity-75"
          />
          
          {/* Outer Dispersion Arc */}
          <path
            d="M9 16C9 12.134 12.134 9 16 9C19.866 9 23 12.134 23 16"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <path
            d="M6 16C6 10.4772 10.4772 6 16 6C21.5228 6 26 10.4772 26 16"
            stroke="currentColor"
            strokeWidth="1.2"
            strokeLinecap="round"
            className="opacity-40"
          />
        </svg>
      </div>

      {/* Brand Typography */}
      <div className="flex flex-col">
        <div className="flex items-center gap-1.5">
          <span
            className={`font-serif text-lg tracking-[0.28em] font-semibold transition-colors duration-200 ${
              light ? 'text-white' : 'text-[#18201B] group-hover:text-[#966F47]'
            }`}
          >
            COSMIC
          </span>
          {showTagline && (
            <span className="hidden sm:inline-block text-[9px] tracking-widest font-mono uppercase text-[#966F47] border border-[#966F47]/30 px-1.5 py-0.5 rounded-full">
              LABS
            </span>
          )}
        </div>
        {showTagline && (
          <span className="text-[9px] tracking-[0.18em] uppercase text-[#8D968F] font-mono leading-none">
            Smart Air-Care
          </span>
        )}
      </div>
    </div>
  );
};
