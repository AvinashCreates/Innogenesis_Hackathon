import { useState } from 'react';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

export default function Logo({ className = '', size = 'md' }: LogoProps) {
  const [imgFailed, setImgFailed] = useState(false);

  // Provide conservative max-size defaults so parent sizing (Tailwind classes)
  // can control the rendered dimensions on responsive breakpoints.
  const defaultSizeClass =
    size === 'sm'
      ? 'max-w-[170px] max-h-[130px]'
      : size === 'lg'
      ? 'max-w-[290px] max-h-[210px]'
      : 'max-w-[220px] max-h-[160px]';

  return (
    <div className={`relative flex items-center justify-center select-none w-auto h-auto ${defaultSizeClass} ${className}`}>
      {!imgFailed ? (
        <img
          src="/logo.png"
          alt="NRI University Logo"
          onError={() => setImgFailed(true)}
          className="w-full h-full object-contain transition-all duration-300 logo-theme-filter"
          referrerPolicy="no-referrer"
        />
      ) : (
        /* High-fidelity SVG fallback that renders perfectly on all screens */
        <svg
          viewBox="0 0 500 350"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
        >
          {/* Top left heading "Dr. RVR" in elegant Serif */}
          <text
            x="10"
            y="45"
            className="font-serif text-3xl font-extrabold"
            fill="currentColor"
            style={{ letterSpacing: '0.5px' }}
          >
            Dr. RVR
          </text>

          {/* Three orange wavy ribbons on the left side */}
          <g id="orange-wave-ribbons">
            <path
              d="M 10 90 Q 60 70, 110 90 T 210 90 L 210 130 Q 160 130, 110 110 T 10 110 Z"
              fill="url(#orange-gradient)"
            />
            <path
              d="M 10 145 Q 60 125, 110 145 T 210 145 L 210 185 Q 160 185, 110 165 T 10 165 Z"
              fill="url(#orange-gradient)"
            />
            <path
              d="M 10 200 Q 60 180, 110 200 T 210 200 L 210 240 Q 160 240, 110 220 T 10 220 Z"
              fill="url(#orange-gradient)"
            />
          </g>

          {/* Block Letters "RI" on the right side of the ribbons */}
          <g id="ri-block-letters" fill="url(#orange-gradient)">
            <path
              d="M 235 85 L 320 85 C 345 85, 360 95, 360 115 C 360 130, 350 140, 335 145 L 365 240 L 315 240 L 290 155 L 275 155 L 275 240 L 235 240 Z M 275 125 L 310 125 C 320 125, 325 120, 325 115 C 325 110, 320 105, 310 105 L 275 105 Z"
            />
            <rect x="385" y="85" width="45" height="155" rx="4" />
          </g>

          {/* INSTITUTE OF TECHNOLOGY DEEMED TO BE text */}
          <text
            x="10"
            y="275"
            className="font-sans text-[17px] font-bold tracking-widest"
            fill="currentColor"
          >
            INSTITUTE OF TECHNOLOGY DEEMED TO BE
          </text>

          {/* Thick elegant horizontal rule */}
          <line
            x1="10"
            y1="288"
            x2="480"
            y2="288"
            stroke="url(#orange-gradient)"
            strokeWidth="3.5"
            strokeLinecap="round"
          />

          {/* Large elegant Serif footer "UNIVERSITY" */}
          <text
            x="10"
            y="340"
            className="font-serif text-[48px] font-black tracking-widest"
            fill="currentColor"
            style={{ letterSpacing: '4px' }}
          >
            UNIVERSITY
          </text>

          <defs>
            <linearGradient id="orange-gradient" x1="10" y1="85" x2="430" y2="240" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#f97316" />
              <stop offset="100%" stopColor="#f59e0b" />
            </linearGradient>
          </defs>
        </svg>
      )}
    </div>
  );
}
