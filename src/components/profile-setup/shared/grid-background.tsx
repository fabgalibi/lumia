// grid-background.tsx
import React from "react";

/** ===== Props públicas ===== */
export type GridBackgroundProps = {
  screenSize: "mobile" | "tablet" | "notebook" | "desktop";
  position: "left" | "right";
  top?: string; // posição Y customizável
  leftPosition?: string; // posição X customizável para position="left"
  rightPosition?: string; // posição X customizável para position="right"
};

/** ===== Componente GridBackground reutilizável ===== */
export default function GridBackground({ 
  screenSize: _screenSize, 
  position: _position, 
  top = '-122px',
  leftPosition: _leftPosition,
  rightPosition: _rightPosition
}: GridBackgroundProps) {
  // Gerar ID único para evitar conflitos entre múltiplos grids
  const uniqueId = React.useMemo(() => Math.random().toString(36).substr(2, 9), []);

  return (
    <div
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        overflow: 'hidden',
        pointerEvents: 'none',
        zIndex: 1
      }}
    >
      {/* SVG unificado - grid contínuo alinhado à direita */}
      <svg 
        width="100%" 
        height="336" 
        viewBox="0 0 800 336" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMaxYMid slice"
        style={{
          position: 'absolute',
          top: top || '-122px',
          left: '10%',
          right: 0,
          minWidth: '90%'
        }}
      >
        <defs>
          <radialGradient id={`paint0_radial_${uniqueId}`} cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(650 100) rotate(90) scale(250 250)">
            <stop stopOpacity="1"/>
            <stop offset="0.7" stopOpacity="0.3"/>
            <stop offset="1" stopOpacity="0"/>
          </radialGradient>
        </defs>
        <mask id={`mask0_${uniqueId}`} style={{maskType:'alpha'}} maskUnits="userSpaceOnUse" x="0" y="0" width="800" height="336">
          <rect width="800" height="336" fill={`url(#paint0_radial_${uniqueId})`}/>
        </mask>
        <g mask={`url(#mask0_${uniqueId})`}>
          {/* Linhas verticais - padrão repetido a cada 24px */}
          <g>
            {Array.from({ length: 35 }, (_, i) => (
              <line 
                key={`v-${i}`}
                x1={0.5 + i * 24} 
                y1="0" 
                x2={0.5 + i * 24} 
                y2="336" 
                stroke="#22262F" 
                strokeWidth="1"
              />
            ))}
          </g>
          
          {/* Linhas horizontais - padrão repetido a cada 24px */}
          <g>
            {Array.from({ length: 15 }, (_, i) => (
              <line 
                key={`h-${i}`}
                x1="0" 
                y1={0.5 + i * 24} 
                x2="800" 
                y2={0.5 + i * 24} 
                stroke="#22262F" 
                strokeWidth="1"
              />
            ))}
          </g>
        </g>
      </svg>
    </div>
  );
}