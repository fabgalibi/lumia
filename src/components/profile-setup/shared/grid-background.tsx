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
  screenSize, 
  position, 
  top = '-122px',
  leftPosition,
  rightPosition
}: GridBackgroundProps) {
  // Gerar ID único para evitar conflitos entre múltiplos grids
  const uniqueId = React.useMemo(() => Math.random().toString(36).substr(2, 9), []);
  
  // Posicionamento padrão se não fornecido
  const defaultLeftPosition = position === 'left' 
    ? (screenSize === 'mobile' ? '32px' : '46.6px') 
    : (screenSize === 'mobile' ? '80px' : '191px');

  const defaultRightPosition = screenSize === 'mobile' ? '16px' : '16px';

  return (
    <div
      style={{
        position: 'absolute',
        top: top,
        // Se leftPosition for fornecido, usar left; senão usar right ou left baseado na position
        ...(leftPosition 
          ? { left: leftPosition }
          : position === 'right' 
            ? { right: rightPosition || defaultRightPosition }
            : { left: defaultLeftPosition }
        ),
        width: '336px', // dimensão original do grid para comportar o degradê
        height: '336px',
        pointerEvents: 'none',
        zIndex: 0
      }}
    >
      {/* SVG exato fornecido com degradê correto */}
      <svg 
        width="274" 
        height="172" 
        viewBox="0 0 274 172" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%'
        }}
      >
        <mask id={`mask0_${uniqueId}`} style={{maskType:'alpha'}} maskUnits="userSpaceOnUse" x="0" y="-106" width="336" height="337">
          <rect width="336" height="336" transform="translate(0 -105.6)" fill={`url(#paint0_radial_${uniqueId})`}/>
        </mask>
        <g mask={`url(#mask0_${uniqueId})`}>
          <g clipPath={`url(#clip0_${uniqueId})`}>
            <g clipPath={`url(#clip1_${uniqueId})`}>
              <line x1="0.5" y1="-105.6" x2="0.5" y2="230.4" stroke="#22262F"/>
              <line x1="24.5" y1="-105.6" x2="24.5" y2="230.4" stroke="#22262F"/>
              <line x1="48.5" y1="-105.6" x2="48.5" y2="230.4" stroke="#22262F"/>
              <line x1="72.5" y1="-105.6" x2="72.5" y2="230.4" stroke="#22262F"/>
              <line x1="96.5" y1="-105.6" x2="96.5" y2="230.4" stroke="#22262F"/>
              <line x1="120.5" y1="-105.6" x2="120.5" y2="230.4" stroke="#22262F"/>
              <line x1="144.5" y1="-105.6" x2="144.5" y2="230.4" stroke="#22262F"/>
              <line x1="168.5" y1="-105.6" x2="168.5" y2="230.4" stroke="#22262F"/>
              <line x1="192.5" y1="-105.6" x2="192.5" y2="230.4" stroke="#22262F"/>
              <line x1="216.5" y1="-105.6" x2="216.5" y2="230.4" stroke="#22262F"/>
              <line x1="240.5" y1="-105.6" x2="240.5" y2="230.4" stroke="#22262F"/>
              <line x1="264.5" y1="-105.6" x2="264.5" y2="230.4" stroke="#22262F"/>
            </g>
            <rect x="0.5" y="-105.1" width="335" height="335" stroke="#22262F"/>
            <g clipPath={`url(#clip2_${uniqueId})`}>
              <line y1="13.8999" x2="336" y2="13.8999" stroke="#22262F"/>
              <line y1="37.8999" x2="336" y2="37.8999" stroke="#22262F"/>
              <line y1="61.8999" x2="336" y2="61.8999" stroke="#22262F"/>
              <line y1="85.8999" x2="336" y2="85.8999" stroke="#22262F"/>
              <line y1="109.9" x2="336" y2="109.9" stroke="#22262F"/>
              <line y1="133.9" x2="336" y2="133.9" stroke="#22262F"/>
              <line y1="157.9" x2="336" y2="157.9" stroke="#22262F"/>
            </g>
            <rect x="0.5" y="-105.1" width="335" height="335" stroke="#22262F"/>
          </g>
        </g>
        <defs>
          <radialGradient id={`paint0_radial_${uniqueId}`} cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(168 168) rotate(90) scale(220 180)">
            <stop stopColor="#000000" stopOpacity="1"/>
            <stop offset="1" stopColor="#000000" stopOpacity="0"/>
          </radialGradient>
          <clipPath id={`clip0_${uniqueId}`}>
            <rect width="336" height="336" fill="white" transform="translate(0 -105.6)"/>
          </clipPath>
          <clipPath id={`clip1_${uniqueId}`}>
            <rect y="-105.6" width="336" height="336" fill="white"/>
          </clipPath>
          <clipPath id={`clip2_${uniqueId}`}>
            <rect y="-105.6" width="336" height="336" fill="white"/>
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}