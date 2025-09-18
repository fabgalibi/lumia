// area-card.tsx
import React from "react";

/** ===== Props públicas ===== */
export type AreaCardProps = {
  title: string;
  description: string;
  image?: string;
  overlayImage?: string;
  isSelected?: boolean;
  onClick?: () => void;
  variant?: 'default' | 'selected' | 'hover';
  size?: 'sm' | 'md' | 'lg';
};

/** ===== Componente principal ===== */
export default function AreaCard({ 
  title, 
  description, 
  image, 
  overlayImage, 
  isSelected = false, 
  onClick,
  size = 'md'
}: AreaCardProps) {
  
  // Dimensões responsivas baseadas no tamanho
  const dimensions = {
    sm: { width: '280px', height: '280px' }, // mobile - mais espaço
    md: { width: '259.2px', height: '259.2px' }, // desktop - dimensão exata do Figma
    lg: { width: '300px', height: '300px' } // telas grandes
  };

  const currentSize = dimensions[size];

  return (
    <div
      onClick={onClick}
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'stretch',
        alignItems: 'stretch',
        gap: '10px', // gap exato do Figma
        padding: '8px', // padding exato do Figma
        flex: size === 'sm' ? '1 1 100%' : '1 1 auto', // responsivo: mobile ocupa linha toda
        width: size === 'sm' ? '100%' : currentSize.width, // largura responsiva
        height: currentSize.height,
        minHeight: currentSize.height,
        maxWidth: size === 'sm' ? '400px' : currentSize.width, // largura máxima em mobile
        background: isSelected 
          ? 'linear-gradient(-68deg, rgba(19, 11, 1, 1) 0%, rgba(66, 76, 95, 0) 80%)' // Selected state
          : 'transparent', // Default state
        border: isSelected ? '2px solid #F66649' : 'none',
        borderRadius: '8px',
        cursor: onClick ? 'pointer' : 'default',
        transition: 'all 0.3s ease',
        opacity: 1,
        transform: 'rotate(0deg)',
        position: 'relative'
      }}
      onMouseEnter={(e) => {
        if (!isSelected && onClick) {
          e.currentTarget.style.background = 'linear-gradient(-68deg, rgba(1, 3, 19, 1) 0%, rgba(66, 76, 95, 0) 80%)';
          e.currentTarget.style.border = '2px solid #383838';
        }
      }}
      onMouseLeave={(e) => {
        if (!isSelected && onClick) {
          e.currentTarget.style.background = 'transparent';
          e.currentTarget.style.border = 'none';
        }
      }}
    >
      {/* Conteúdo do Card */}
      <CardContent 
        title={title}
        description={description}
        image={image}
        overlayImage={overlayImage}
      />
    </div>
  );
}

/** ===== Conteúdo do Card ===== */
type CardContentProps = {
  title: string;
  description: string;
  image?: string;
  overlayImage?: string;
};

function CardContent({ title, description, image }: CardContentProps) {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        alignSelf: 'stretch',
        alignItems: 'stretch',
        gap: '12px', // gap exato do Figma (layout_EPD4P4)
        padding: '101px 16px 24px', // padding exato do Figma (layout_EPD4P4)
        flex: 1, // sizing: horizontal fill, vertical fill
        background: 'rgba(11, 18, 25, 1)', // fill_5QFRMU - cor exata do Figma
        borderRadius: '6px', // borderRadius exato do Figma
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      {/* Background Pattern Decorativo */}
      <DecorativeBackground />

      {/* Título da Área */}
      <h3
        style={{
          fontFamily: 'Sora',
          fontWeight: 400,
          fontSize: '24px',
          lineHeight: '1.3333333333333333em',
          color: '#FFFFFF',
          margin: 0,
          padding: 0,
          textAlign: 'left',
          verticalAlign: 'top',
          position: 'relative',
          zIndex: 1,
          width: '100%',
          letterSpacing: 'normal',
          textTransform: 'none'
        }}
      >
        {title}
      </h3>

      {/* Descrição da Área */}
      <p
        style={{
          fontFamily: 'Sora', // font-family: Sora
          fontWeight: 400, // font-weight: 400
          fontStyle: 'normal', // font-style: Regular
          fontSize: '14px', // font-size: text-sm
          lineHeight: '20px', // line-height: text-sm (20px)
          letterSpacing: '0%', // letter-spacing: 0%
          color: '#FFFFFF',
          margin: 0,
          padding: 0,
          textAlign: 'left',
          verticalAlign: 'top',
          position: 'relative',
          zIndex: 1,
          width: '100%',
          textTransform: 'none',
          wordWrap: 'break-word',
          overflow: 'visible'
        }}
      >
        {description}
      </p>

      {/* Imagem da Área - Posicionamento exato do Figma */}
      {image && (
        <img
          src={image}
          alt={title}
          style={{
            position: 'absolute',
            top: '10px', // posição Y ajustada para melhor centralização
            left: '101px', // posição X ajustada para melhor centralização  
            width: '120px', // largura ajustada para melhor proporção
            height: '120px', // altura ajustada para melhor proporção
            objectFit: 'contain', // mantém proporções sem cortar
            zIndex: 0, // atrás dos textos
            background: 'transparent', // sem fundo adicional
            borderRadius: '0' // sem border radius na imagem
          }}
        />
      )}
    </div>
  );
}

/** ===== Background Decorativo ===== */
function DecorativeBackground() {
  // Gerar ID único para evitar conflitos entre múltiplos cards
  const uniqueId = React.useMemo(() => Math.random().toString(36).substr(2, 9), []);
  
  return (
    <div
      style={{
        position: 'absolute',
        top: '-122px', // posição Y exata do Figma
        left: '32px', // posição X exata do Figma  
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
