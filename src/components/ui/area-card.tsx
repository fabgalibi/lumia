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
    sm: { width: '100%', height: 'auto' }, // mobile - largura 100%, altura automática
    md: { width: '100%', height: '260px' }, // desktop - largura 100% (grid controla), altura fixa como trajetória
    lg: { width: '100%', height: '280px' } // telas grandes
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
        flex: size === 'sm' ? '1 0 auto' : '1 1 auto', // mobile: preenche largura, desktop: flex
        width: size === 'sm' ? '100%' : currentSize.width, // mobile: 100% (alignSelf: stretch), desktop: fixo
        height: size === 'sm' ? 'auto' : currentSize.height, // mobile: altura automática, desktop: fixa
        minHeight: size === 'sm' ? '160px' : currentSize.height, // mobile: altura mínima maior
        maxWidth: size === 'sm' ? 'none' : currentSize.width, // mobile: sem limite, desktop: limitado
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
        size={size}
        isSelected={isSelected}
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
  size?: 'sm' | 'md' | 'lg';
  isSelected?: boolean;
};

function CardContent({ title, description, image, size = 'md', isSelected = false }: CardContentProps) {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end', // conforme Figma - conteúdo no final
        alignSelf: 'stretch', // conforme Figma - estica para preencher
        alignItems: 'stretch',
        gap: size === 'sm' ? (isSelected ? '12px' : '4px') : '12px', // mobile: 12px se selecionado, 4px normal; desktop: sempre 12px
        padding: size === 'sm' ? '76px 16px 24px' : '120px 16px 24px', // mobile: menos padding top, desktop: mais padding top
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
          fontStyle: 'normal', // Regular
          fontSize: size === 'sm' ? '20px' : '20px', // mobile: text-xl (20px), desktop: 20px (igual trajetória)
          lineHeight: size === 'sm' ? '1.5em' : '1.5em', // mobile: text-xl line-height (1.5em), desktop: 1.5em (igual trajetória)
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
          display: 'block'
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
          fontSize: '14px', // font-size: text-sm (igual trajetória)
          lineHeight: '20px', // line-height: text-sm (20px) (igual trajetória)
          letterSpacing: '0%', // letter-spacing: 0%
          color: '#CECFD2', // cor correta da descrição
          margin: 0,
          padding: 0,
          textAlign: 'left',
          verticalAlign: 'top',
          position: 'relative',
          zIndex: 1,
          width: '100%', // sizing: horizontal fill
          textTransform: 'none',
          wordWrap: 'break-word',
          overflow: 'visible',
          display: 'block' // garante comportamento de bloco
        }}
      >
        {description}
      </p>

      {/* Imagem da Área - Posicionamento conforme Figma */}
      {image && (
        <img
          src={image}
          alt={title}
          style={{
            position: 'absolute',
            top: size === 'sm' ? '12px' : '16px', // mobile: 12px, desktop: 16px
            right: size === 'sm' ? '16px' : '16px', // mobile: 16px da direita, desktop: 16px da direita
            left: size === 'sm' ? 'auto' : 'auto', // mobile: auto, desktop: auto
            width: size === 'sm' ? '96px' : '120px', // mobile: 96px, desktop: 120px
            height: size === 'sm' ? '96px' : '120px', // mobile: 96px, desktop: 120px
            objectFit: 'contain', // contain para evitar distorção
            zIndex: 0, // atrás dos textos
            background: 'transparent',
            borderRadius: '0',
            imageRendering: 'auto', // renderização automática otimizada
            filter: 'none', // remove filtros que podem causar tremido
            transform: 'translateZ(0)', // força aceleração de hardware
            backfaceVisibility: 'hidden' // melhora renderização
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
