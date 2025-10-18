// area-card.tsx
import React from "react";
import { Text, colors } from './design-system';

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
function AreaCard({ 
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
      <Text
        variant="h4"
        color={colors.text.primary}
        weight="regular"
        style={{
          margin: 0,
          padding: 0,
          position: 'relative',
          zIndex: 1,
          width: '100%'
        }}
      >
        {title}
      </Text>

      {/* Descrição da Área */}
      <Text
        variant="caption"
        color={colors.text.secondary}
        weight="regular"
        style={{
          margin: 0,
          padding: 0,
          position: 'relative',
          zIndex: 1,
          width: '100%',
          wordWrap: 'break-word'
        }}
      >
        {description}
      </Text>

      {/* Imagem da Área - Posicionamento conforme Figma */}
      {image && (
        <img
          src={image}
          alt={title}
          style={{
            position: 'absolute',
            top: size === 'sm' ? '16px' : '16px', // 16px conforme Figma
            right: size === 'sm' ? '16px' : '16px', // 16px da direita conforme Figma
            left: size === 'sm' ? 'auto' : 'auto',
            width: size === 'sm' ? '104px' : '132px', // mobile: 104px, desktop: 132px - tamanho equilibrado
            height: size === 'sm' ? '104px' : '132px', // mobile: 104px, desktop: 132px - tamanho equilibrado
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
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        overflow: 'hidden',
        pointerEvents: 'none',
        zIndex: 0
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
          top: '-122px',
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

export { AreaCard };
export default AreaCard;
