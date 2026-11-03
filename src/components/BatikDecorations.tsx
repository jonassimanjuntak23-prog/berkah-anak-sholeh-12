import React from 'react';

/**
 * Authentic Batik Nusantara SVG Patterns & Accents
 * Motifs: Kawung, Parang, Mega Mendung, Floral Mandala & Traditional Frame Borders.
 * Specially designed with warm gold, rich batik brown, and indigo touches on clean white surfaces.
 */

export const BatikKawungPattern: React.FC<{ className?: string; opacity?: number }> = ({
  className = '',
  opacity = 0.05,
}) => (
  <svg
    className={`absolute inset-0 w-full h-full pointer-events-none ${className}`}
    xmlns="http://www.w3.org/2000/svg"
    style={{ opacity }}
    aria-hidden="true"
  >
    <defs>
      <pattern id="batik-kawung" width="60" height="60" patternUnits="userSpaceOnUse">
        {/* Central diamond */}
        <path
          d="M30 18 C37 25 37 35 30 42 C23 35 23 25 30 18 Z"
          fill="none"
          stroke="#78350F"
          strokeWidth="1.2"
        />
        <path
          d="M18 30 C25 37 35 37 42 30 C35 23 25 23 18 30 Z"
          fill="none"
          stroke="#78350F"
          strokeWidth="1.2"
        />
        {/* Outer petals */}
        <circle cx="30" cy="10" r="10" fill="none" stroke="#B45309" strokeWidth="0.8" />
        <circle cx="30" cy="50" r="10" fill="none" stroke="#B45309" strokeWidth="0.8" />
        <circle cx="10" cy="30" r="10" fill="none" stroke="#B45309" strokeWidth="0.8" />
        <circle cx="50" cy="30" r="10" fill="none" stroke="#B45309" strokeWidth="0.8" />
        {/* Core seeds */}
        <circle cx="30" cy="30" r="2.5" fill="#B45309" />
        <circle cx="0" cy="0" r="2.5" fill="#78350F" />
        <circle cx="60" cy="0" r="2.5" fill="#78350F" />
        <circle cx="0" cy="60" r="2.5" fill="#78350F" />
        <circle cx="60" cy="60" r="2.5" fill="#78350F" />
      </pattern>
    </defs>
    <rect width="100%" height="100%" fill="url(#batik-kawung)" />
  </svg>
);

export const BatikParangBorder: React.FC<{ className?: string }> = ({ className = '' }) => (
  <div className={`w-full h-2.5 overflow-hidden flex items-center ${className}`}>
    <svg
      className="w-full h-full text-amber-800"
      preserveAspectRatio="none"
      viewBox="0 0 600 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0 0 L15 12 L25 12 L10 0 Z M30 0 L45 12 L55 12 L40 0 Z M60 0 L75 12 L85 12 L70 0 Z M90 0 L105 12 L115 12 L100 0 Z M120 0 L135 12 L145 12 L130 0 Z M150 0 L165 12 L175 12 L160 0 Z M180 0 L195 12 L205 12 L190 0 Z M210 0 L225 12 L235 12 L220 0 Z M240 0 L255 12 L265 12 L250 0 Z M270 0 L285 12 L295 12 L280 0 Z M300 0 L315 12 L325 12 L310 0 Z M330 0 L345 12 L355 12 L340 0 Z M360 0 L375 12 L385 12 L370 0 Z M390 0 L405 12 L415 12 L400 0 Z M420 0 L435 12 L445 12 L430 0 Z M450 0 L465 12 L475 12 L460 0 Z M480 0 L495 12 L505 12 L490 0 Z M510 0 L525 12 L535 12 L520 0 Z M540 0 L555 12 L565 12 L550 0 Z M570 0 L585 12 L595 12 L580 0 Z"
        fill="currentColor"
        opacity="0.85"
      />
      <line x1="0" y1="12" x2="600" y2="12" stroke="#D97706" strokeWidth="1" />
    </svg>
  </div>
);

export const BatikCornerOrnament: React.FC<{
  position?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
  className?: string;
  size?: number;
}> = ({ position = 'top-left', className = '', size = 36 }) => {
  const transform =
    position === 'top-right'
      ? 'scale(-1, 1)'
      : position === 'bottom-left'
      ? 'scale(1, -1)'
      : position === 'bottom-right'
      ? 'scale(-1, -1)'
      : 'none';

  const posClasses =
    position === 'top-right'
      ? 'top-0 right-0'
      : position === 'bottom-left'
      ? 'bottom-0 left-0'
      : position === 'bottom-right'
      ? 'bottom-0 right-0'
      : 'top-0 left-0';

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ transform }}
      className={`absolute ${posClasses} pointer-events-none select-none text-amber-700 ${className}`}
      aria-hidden="true"
    >
      <path
        d="M2 2 L46 2 C36 4 28 12 26 22 C24 32 16 40 2 46 L2 2 Z"
        fill="#FEF3C7"
        opacity="0.5"
      />
      <path
        d="M2 2 L38 2 C28 5 22 12 20 20 C18 28 11 36 2 38"
        stroke="#B45309"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M6 6 C12 6 18 12 18 18"
        stroke="#D97706"
        strokeWidth="1.2"
        strokeDasharray="2 2"
      />
      <circle cx="8" cy="8" r="2.5" fill="#78350F" />
      <circle cx="16" cy="16" r="2" fill="#D97706" />
    </svg>
  );
};

export const MegaMendungCloud: React.FC<{ className?: string }> = ({ className = '' }) => (
  <svg
    viewBox="0 0 160 50"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`w-32 h-10 ${className}`}
    aria-hidden="true"
  >
    {/* Outer layer - Indigo blue */}
    <path
      d="M10 38 Q30 40 50 36 Q70 30 95 35 Q125 40 150 36 Q158 28 142 22 Q120 12 90 14 Q65 15 45 22 Q25 18 10 26 Q4 32 10 38 Z"
      fill="#1E3A8A"
      opacity="0.15"
    />
    {/* Middle layer - Royal blue */}
    <path
      d="M20 34 Q38 35 56 32 Q74 27 96 30 Q120 34 140 30 Q145 25 132 20 Q112 14 88 16 Q68 17 50 22 Q32 20 20 25 Q16 29 20 34 Z"
      fill="#2563EB"
      opacity="0.3"
    />
    {/* Inner layer - Sky & Gold line */}
    <path
      d="M32 30 Q48 31 62 28 Q78 24 96 26 Q114 29 128 26 Q130 22 120 18 Q102 14 84 16 Q68 17 54 20 Q40 19 32 23 Q28 26 32 30 Z"
      fill="#38BDF8"
      opacity="0.45"
    />
    <path
      d="M45 26 Q60 27 75 24 Q90 22 106 24"
      stroke="#D97706"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
  </svg>
);

export const BatikBadge: React.FC<{ text: string; icon?: React.ReactNode }> = ({
  text,
  icon,
}) => (
  <div className="inline-flex items-center gap-2 px-3 py-1 bg-amber-50 border border-amber-300 text-amber-900 rounded-sm text-xs font-semibold tracking-wide shadow-xs">
    {icon}
    <span>{text}</span>
  </div>
);
