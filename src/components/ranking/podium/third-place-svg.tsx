import React from 'react';

interface ThirdPlaceSvgProps {
  scale?: number;
}

export const ThirdPlaceSvg: React.FC<ThirdPlaceSvgProps> = ({ scale = 1 }) => {
  return (
    <svg
      width={202 * scale}
      height={261 * scale}
      viewBox="0 0 202 261"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ display: 'block' }}
    >
      <defs>
        <linearGradient id="third_top_fill" x1="87.6646" y1="126.425" x2="87.6646" y2="31.8367" gradientUnits="userSpaceOnUse">
          <stop offset="0.0887564" stopColor="#111521"/>
          <stop offset="1" stopColor="#181C2A"/>
        </linearGradient>
        <linearGradient id="third_front_fill" x1="93.4573" y1="73.0283203" x2="93.4573" y2="184.375" gradientUnits="userSpaceOnUse">
          <stop stopColor="#181D2B"/>
          <stop offset="0.454412" stopColor="#0F1118"/>
          <stop offset="1" stopColor="#0E0F15"/>
        </linearGradient>
        <linearGradient id="third_border" x1="0" y1="0" x2="0" y2="261" gradientUnits="userSpaceOnUse">
          <stop offset="0.35" stopColor="#C74228" />
          <stop offset="1" stopColor="#060A12" />
        </linearGradient>
        {/* Máscara de fade para a base */}
        <linearGradient id="third_fade" x1="0" y1="0" x2="0" y2="1" gradientUnits="objectBoundingBox">
          <stop offset="0" stopColor="white" stopOpacity="1"/>
          <stop offset="0.85" stopColor="white" stopOpacity="1"/>
          <stop offset="1" stopColor="white" stopOpacity="0.3"/>
        </linearGradient>
        <mask id="third_mask">
          <rect x="0" y="0" width="202" height="261" fill="url(#third_fade)"/>
        </mask>
      </defs>

      <g mask="url(#third_mask)">
        {/* TOPO - offset x: 15px conforme Figma */}
        <g transform="translate(15, 1.11)">
          <path 
            d="M6.73575 0H143.375L181.384 72.44H0L6.73575 0Z" 
            fill="url(#third_top_fill)"
            stroke="url(#third_border)"
            strokeWidth="1.8"
          />
        </g>

        {/* FRENTE - offset x: 0px, y: 75.78px conforme Figma */}
        <g transform="translate(0, 75.78)">
          <path 
            d="M14.9149 0H195.337L165.026 184.97H0L14.9149 0Z" 
            fill="url(#third_front_fill)"
            stroke="url(#third_border)"
            strokeWidth="1.8"
          />
          {/* Cobertura da borda inferior */}
          <path 
            d="M0 184.97L202 184.97L202 186.97L0 186.97Z" 
            fill="url(#third_front_fill)"
          />
        </g>
      </g>
    </svg>
  );
};

