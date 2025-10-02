import React from 'react';

export const FirstPlaceSvg: React.FC = () => {
  return (
    <svg
      width="228"
      height="293"
      viewBox="0 0 228 293"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ display: 'block' }}
    >
      <defs>
        <linearGradient id="first_top_fill" x1="106.248" y1="133.754" x2="106.248" y2="33.9226" gradientUnits="userSpaceOnUse">
          <stop offset="0.0887564" stopColor="#111521"/>
          <stop offset="1" stopColor="#181C2A"/>
        </linearGradient>
        <linearGradient id="first_front_fill" x1="105.4" y1="78.508789" x2="105.4" y2="245.357" gradientUnits="userSpaceOnUse">
          <stop stopColor="#181D2B"/>
          <stop offset="0.454412" stopColor="#0F1118"/>
          <stop offset="1" stopColor="#0E0F15"/>
        </linearGradient>
        <linearGradient id="first_border" x1="0" y1="0" x2="0" y2="293" gradientUnits="userSpaceOnUse">
          <stop offset="0.35" stopColor="#C74228" />
          <stop offset="1" stopColor="#060A12" />
        </linearGradient>
        {/* Máscara de fade para a base */}
        <linearGradient id="first_fade" x1="0" y1="0" x2="0" y2="1" gradientUnits="objectBoundingBox">
          <stop offset="0" stopColor="white" stopOpacity="1"/>
          <stop offset="0.85" stopColor="white" stopOpacity="1"/>
          <stop offset="1" stopColor="white" stopOpacity="0.3"/>
        </linearGradient>
        <mask id="first_mask">
          <rect x="0" y="0" width="228" height="293" fill="url(#first_fade)"/>
        </mask>
      </defs>

      <g mask="url(#first_mask)">
        {/* TOPO - Forma preenchida */}
        <path 
          d="M43.4838 1.28832L213.547 0.700195L219.834 77.1566H0L43.4838 1.28832Z" 
          fill="url(#first_top_fill)"
          stroke="url(#first_border)"
          strokeWidth="1.8"
        />

        {/* FRENTE - Forma preenchida */}
        <path 
          d="M0.0955811 78.508789H207.101L225.124 290.824L43.5794 291.412L0.0955811 78.508789Z" 
          fill="url(#first_front_fill)"
          stroke="url(#first_border)"
          strokeWidth="1.8"
        />
      </g>
    </svg>
  );
};

