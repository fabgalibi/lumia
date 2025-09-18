// preparation-type-card.tsx
import React from "react";

/** ===== Props públicas ===== */
export type PreparationTypeCardProps = {
  id: string;
  title: string;
  description: string;
  imageSrc: string;
  isSelected: boolean;
  onClick: () => void;
  screenSize: "mobile" | "tablet" | "notebook" | "desktop";
};

/** ===== Componente principal ===== */
export default function PreparationTypeCard({ 
  title, 
  description, 
  imageSrc, 
  isSelected, 
  onClick, 
  screenSize 
}: PreparationTypeCardProps) {
  return (
    <div
      onClick={onClick}
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '10px',
        padding: '8px',
        width: screenSize === 'mobile' ? '100%' : '660px',
        maxWidth: '100%', // garante que não ultrapasse a largura disponível
        background: isSelected 
          ? 'linear-gradient(-68deg, rgba(1, 3, 19, 1) 0%, rgba(66, 76, 95, 0) 80%)'
          : 'transparent',
        border: isSelected ? '2px solid #F66649' : 'none',
        borderRadius: '8px',
        cursor: 'pointer',
        transition: 'all 0.3s ease'
      }}
      onMouseEnter={(e) => {
        if (!isSelected) {
          e.currentTarget.style.background = 'rgba(255, 255, 255, 0.02)';
        }
      }}
      onMouseLeave={(e) => {
        if (!isSelected) {
          e.currentTarget.style.background = 'transparent';
        }
      }}
    >
      {/* Conteúdo do Card */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignSelf: 'stretch',
          gap: screenSize === 'mobile' ? '8px' : '12px', // gap menor no mobile
          padding: screenSize === 'mobile' ? '82px 16px 24px' : '24px 16px 24px 24px', // padding original desktop mantido
          background: '#0B1219',
          borderRadius: '6px',
          position: 'relative',
          overflow: 'hidden',
          minHeight: screenSize === 'mobile' ? '140px' : '180px' // mobile mais quadrado, desktop mantido
        }}
      >
        {/* Background Pattern Decorativo */}
        <DecorativeBackground screenSize={screenSize} />

        {/* Imagem */}
        <div
          style={{
            position: 'absolute',
            top: screenSize === 'mobile' ? '12px' : '11.4px', // posição mobile conforme Figma
            right: '16px', // mantém posição à direita
            width: screenSize === 'mobile' ? '96px' : '138px', // tamanho mobile conforme Figma
            height: screenSize === 'mobile' ? '96px' : '138px', // tamanho mobile conforme Figma
            zIndex: 3
          }}
        >
          <img
            src={imageSrc}
            alt={title}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              borderRadius: '4px'
            }}
          />
        </div>

        {/* Título */}
        <h3
          style={{
            fontFamily: 'Sora', // font-family: Sora
            fontWeight: 400, // font-weight: 400
            fontStyle: 'normal', // font-style: Regular
            fontSize: screenSize === 'mobile' ? '20px' : '24px', // mobile: text-xl (20px), desktop: text-xs (24px)
            lineHeight: '1.5em', // line-height mobile: text-xl (1.5em), desktop: text-xs (1.333em)
            letterSpacing: '0%', // letter-spacing: 0%
            color: '#FFFFFF',
            margin: 0,
            textAlign: 'left',
            position: 'relative',
            zIndex: 4
          }}
        >
          {title}
        </h3>

        {/* Descrição */}
        <p
          style={{
            fontFamily: 'Sora', // font-family: Sora
            fontWeight: 400, // font-weight: 400
            fontStyle: 'normal', // font-style: Regular
            fontSize: '14px', // font-size: text-sm
            lineHeight: '1.4285714285714286em', // line-height: text-sm (20px/14px = 1.4285714285714286em)
            letterSpacing: '0%', // letter-spacing: 0%
            color: '#FFFFFF',
            margin: 0,
            textAlign: 'left',
            position: 'relative',
            zIndex: 4,
            width: '503px',
            maxWidth: '100%'
          }}
        >
          {description}
        </p>
      </div>
    </div>
  );
}

/** ===== Background Decorativo ===== */
function DecorativeBackground({ screenSize }: { screenSize: "mobile" | "tablet" | "notebook" | "desktop" }) {
  // Gerar ID único para evitar conflitos entre múltiplos cards
  const uniqueId = React.useMemo(() => Math.random().toString(36).substr(2, 9), []);
  
  return (
    <div
      style={{
        position: 'absolute',
        top: '-122px', // posição Y conforme Figma (mobile: -122px)
        left: screenSize === 'mobile' ? '32px' : 'auto', // posição X mobile conforme Figma (32px exato)
        right: screenSize === 'mobile' ? 'auto' : '-16px', // posição X desktop
        width: '336px', // dimensão exata do Figma
        height: '336px',
        pointerEvents: 'none',
        zIndex: 0
      }}
    >
      {/* SVG do Grid com Mask exato do Figma */}
      <svg 
        width="336" 
        height="336" 
        viewBox="0 0 336 336" 
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
        <defs>
          <radialGradient 
            id={`paint0_radial_grid_${uniqueId}`}
            cx="0" 
            cy="0" 
            r="1" 
            gradientUnits="userSpaceOnUse" 
            gradientTransform="translate(168 168) rotate(90) scale(168 168)"
          >
            <stop stopColor="#000000" stopOpacity="1"/>
            <stop offset="1" stopColor="#000000" stopOpacity="0"/>
          </radialGradient>
          <clipPath id={`clip0_grid_${uniqueId}`}>
            <rect width="336" height="336" fill="white"/>
          </clipPath>
        </defs>
        
        <mask id={`mask0_grid_${uniqueId}`} style={{maskType: 'alpha'}} maskUnits="userSpaceOnUse" x="0" y="0" width="336" height="336">
          <rect width="336" height="336" fill={`url(#paint0_radial_grid_${uniqueId})`}/>
        </mask>
        
        <g mask={`url(#mask0_grid_${uniqueId})`}>
          <g clipPath={`url(#clip0_grid_${uniqueId})`}>
            {/* Linhas Verticais */}
            <line x1="0.5" y1="0" x2="0.5" y2="336" stroke="#22262F"/>
            <line x1="24.5" y1="0" x2="24.5" y2="336" stroke="#22262F"/>
            <line x1="48.5" y1="0" x2="48.5" y2="336" stroke="#22262F"/>
            <line x1="72.5" y1="0" x2="72.5" y2="336" stroke="#22262F"/>
            <line x1="96.5" y1="0" x2="96.5" y2="336" stroke="#22262F"/>
            <line x1="120.5" y1="0" x2="120.5" y2="336" stroke="#22262F"/>
            <line x1="144.5" y1="0" x2="144.5" y2="336" stroke="#22262F"/>
            <line x1="168.5" y1="0" x2="168.5" y2="336" stroke="#22262F"/>
            <line x1="192.5" y1="0" x2="192.5" y2="336" stroke="#22262F"/>
            <line x1="216.5" y1="0" x2="216.5" y2="336" stroke="#22262F"/>
            <line x1="240.5" y1="0" x2="240.5" y2="336" stroke="#22262F"/>
            <line x1="264.5" y1="0" x2="264.5" y2="336" stroke="#22262F"/>
            <line x1="288.5" y1="0" x2="288.5" y2="336" stroke="#22262F"/>
            <line x1="312.5" y1="0" x2="312.5" y2="336" stroke="#22262F"/>
            <line x1="336.5" y1="0" x2="336.5" y2="336" stroke="#22262F"/>
            
            {/* Linhas Horizontais */}
            <line y1="0.5" x2="336" y2="0.5" stroke="#22262F"/>
            <line y1="24.5" x2="336" y2="24.5" stroke="#22262F"/>
            <line y1="48.5" x2="336" y2="48.5" stroke="#22262F"/>
            <line y1="72.5" x2="336" y2="72.5" stroke="#22262F"/>
            <line y1="96.5" x2="336" y2="96.5" stroke="#22262F"/>
            <line y1="120.5" x2="336" y2="120.5" stroke="#22262F"/>
            <line y1="144.5" x2="336" y2="144.5" stroke="#22262F"/>
            <line y1="168.5" x2="336" y2="168.5" stroke="#22262F"/>
            <line y1="192.5" x2="336" y2="192.5" stroke="#22262F"/>
            <line y1="216.5" x2="336" y2="216.5" stroke="#22262F"/>
            <line y1="240.5" x2="336" y2="240.5" stroke="#22262F"/>
            <line y1="264.5" x2="336" y2="264.5" stroke="#22262F"/>
            <line y1="288.5" x2="336" y2="288.5" stroke="#22262F"/>
            <line y1="312.5" x2="336" y2="312.5" stroke="#22262F"/>
            <line y1="336.5" x2="336" y2="336.5" stroke="#22262F"/>
          </g>
        </g>
      </svg>
    </div>
  );
}
