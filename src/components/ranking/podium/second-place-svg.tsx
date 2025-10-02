import React from 'react';

interface SecondPlaceSvgProps {
  scale?: number;
}

export const SecondPlaceSvg: React.FC<SecondPlaceSvgProps> = ({ scale = 1 }) => {
  return (
    <svg
      width={260 * scale}
      height={353 * scale}
      viewBox="0 0 260 353"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ display: 'block' }}
    >
      <defs>
        <linearGradient id="second_top_fill" x1="138.565" y1="138.325" x2="138.565" y2="35.0515" gradientUnits="userSpaceOnUse">
          <stop offset="0.0887564" stopColor="#111521"/>
          <stop offset="1" stopColor="#181C2A"/>
        </linearGradient>
        <linearGradient id="second_front_fill" x1="129.615" y1="80.974609" x2="129.615" y2="295.796" gradientUnits="userSpaceOnUse">
          <stop stopColor="#181D2B"/>
          <stop offset="0.454412" stopColor="#0F1118"/>
          <stop offset="1" stopColor="#0E0F15"/>
        </linearGradient>
        <linearGradient id="second_border" x1="0" y1="0" x2="0" y2="353" gradientUnits="userSpaceOnUse">
          <stop offset="0.35" stopColor="#C74228" />
          <stop offset="1" stopColor="#060A12" />
        </linearGradient>
        {/* Máscara de fade para a base */}
        <linearGradient id="second_fade" x1="0" y1="0" x2="0" y2="1" gradientUnits="objectBoundingBox">
          <stop offset="0" stopColor="white" stopOpacity="1"/>
          <stop offset="0.85" stopColor="white" stopOpacity="1"/>
          <stop offset="1" stopColor="white" stopOpacity="0.3"/>
        </linearGradient>
        <mask id="second_mask">
          <rect x="0" y="0" width="260" height="353" fill="url(#second_fade)"/>
        </mask>
      </defs>

      <g mask="url(#second_mask)">
        {/* TOPO - Forma preenchida */}
        <path 
          d="M46.1037 0.684143L211.514 0.0849609L257.254 79.7762H0.095459L46.1037 0.684143Z" 
          fill="url(#second_top_fill)"
          stroke="url(#second_border)"
          strokeWidth="1.8"
        />

        {/* FRENTE - Forma preenchida */}
        <path 
          d="M0.901367 80.974609H258.328L233.133 352.218H28.8349L0.901367 80.974609Z" 
          fill="url(#second_front_fill)"
          stroke="url(#second_border)"
          strokeWidth="1.8"
        />
      </g>
    </svg>
  );
};

