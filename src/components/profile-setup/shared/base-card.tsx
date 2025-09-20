// base-card.tsx
import React from "react";
import GridBackground from './grid-background';

/** ===== Props públicas ===== */
export type BaseCardProps = {
  // Identificação e interação
  id: string;
  isSelected: boolean;
  onClick: () => void;
  screenSize: "mobile" | "tablet" | "notebook" | "desktop";
  
  // Dimensões customizáveis
  width?: string | {
    mobile: string;
    tablet: string;
    notebook: string;
    desktop: string;
  }; // default: screenSize === 'mobile' ? '100%' : '437px'
  minHeight?: {
    mobile: string;
    tablet: string;
    notebook: string;
    desktop: string;
  }; // default: { mobile: '140px', tablet: '140px', notebook: '160px', desktop: '180px' }
  
  // Conteúdo
  title: string;
  description: string;
  imageSrc: string;
  
  // Grid backgrounds
  grids?: Array<{
    position: "left" | "right";
    top?: string;
    leftPosition?: string;
    rightPosition?: string;
  }>; // default: [{ position: 'right' }]
  
  // Customizações de imagem
  imageSize?: {
    mobile: string;
    tablet: string;
    notebook: string;
    desktop: string;
  }; // default: { mobile: '96px', tablet: '96px', notebook: '120px', desktop: '138px' }
  
  imagePosition?: {
    mobile: { top: string; right?: string; left?: string; transform?: string; };
    tablet: { top: string; right?: string; left?: string; transform?: string; };
    notebook: { top: string; right?: string; left?: string; transform?: string; };
    desktop: { top: string; right?: string; left?: string; transform?: string; };
  }; // default: { mobile: { top: '12px', right: '16px' }, tablet: { top: '12px', right: '16px' }, notebook: { top: '11px', right: '16px' }, desktop: { top: '11.4px', right: '16px' } }

  // Customizações de padding
  contentPadding?: {
    mobile: string;
    tablet: string;
    notebook: string;
    desktop: string;
  }; // default: { mobile: '82px 16px 24px', tablet: '82px 16px 24px', notebook: '88px 16px 24px', desktop: '96px 16px 24px' }

  // Customizações de descrição
  descriptionWidth?: {
    mobile: string;
    tablet: string;
    notebook: string;
    desktop: string;
  }; // default: { mobile: 'auto', tablet: 'auto', notebook: 'auto', desktop: '100%' }
  
  // Customizações de estilo
  titleStyle?: {
    fontSize?: string;
    lineHeight?: string;
    fontWeight?: number;
  };
};

/** ===== Componente BaseCard reutilizável ===== */
export default function BaseCard({
  id: _id,
  isSelected,
  onClick,
  screenSize,
  // width removido - Grid controla a largura
  minHeight = { mobile: '140px', tablet: '140px', notebook: '160px', desktop: '180px' },
  title,
  description,
  imageSrc,
  grids = [{ position: 'right' }],
  imageSize = { mobile: '96px', tablet: '96px', notebook: '120px', desktop: '138px' },
  imagePosition = { 
    mobile: { top: '12px', right: '16px' }, 
    tablet: { top: '12px', right: '16px' },
    notebook: { top: '11px', right: '16px' },
    desktop: { top: '11.4px', right: '16px' } 
  },
  contentPadding = {
    mobile: '82px 16px 24px',
    tablet: '82px 16px 24px',
    notebook: '88px 16px 24px',
    desktop: '96px 16px 24px'
  },
  descriptionWidth = {
    mobile: 'auto',
    tablet: 'auto',
    notebook: 'auto',
    desktop: '100%'
  },
  titleStyle
}: BaseCardProps) {
  
  // cardWidth removido - Grid controla a largura
  const currentMinHeight = screenSize === 'mobile' ? minHeight.mobile : 
                          screenSize === 'tablet' ? minHeight.tablet :
                          screenSize === 'notebook' ? minHeight.notebook : minHeight.desktop;
  const currentImageSize = screenSize === 'mobile' ? imageSize.mobile : 
                          screenSize === 'tablet' ? imageSize.tablet :
                          screenSize === 'notebook' ? imageSize.notebook : imageSize.desktop;
  const currentImagePos = screenSize === 'mobile' ? imagePosition.mobile : 
                         screenSize === 'tablet' ? imagePosition.tablet :
                         screenSize === 'notebook' ? imagePosition.notebook : imagePosition.desktop;
  const currentContentPadding = screenSize === 'mobile' ? contentPadding.mobile : 
                               screenSize === 'tablet' ? contentPadding.tablet :
                               screenSize === 'notebook' ? contentPadding.notebook : contentPadding.desktop;
  const currentDescriptionWidth = screenSize === 'mobile' ? descriptionWidth.mobile : 
                                 screenSize === 'tablet' ? descriptionWidth.tablet :
                                 screenSize === 'notebook' ? descriptionWidth.notebook : descriptionWidth.desktop;

  return (
    <div
      onClick={onClick}
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '10px',
        padding: '8px',
        width: '100%', // Grid controla a largura
        maxWidth: '100%',
        background: isSelected 
          ? 'linear-gradient(-68deg, rgba(19, 11, 1, 1) 0%, rgba(66, 76, 95, 0) 80%)' // Selected gradient
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
          justifyContent: 'flex-end',
          alignSelf: 'stretch',
          gap: screenSize === 'mobile' ? '4px' : '12px', // gap mobile 4px, desktop 12px conforme Figma
          padding: currentContentPadding,
          background: '#0B1219',
          borderRadius: '6px',
          position: 'relative',
          overflow: 'hidden',
          minHeight: currentMinHeight
        }}
      >
        {/* Background Patterns Decorativos */}
        {grids.map((grid, index) => (
          <GridBackground
            key={`grid-${index}`}
            screenSize={screenSize}
            position={grid.position}
            top={grid.top}
            leftPosition={grid.leftPosition}
            rightPosition={grid.rightPosition}
          />
        ))}

        {/* Imagem */}
        <div
          style={{
            position: 'absolute',
            top: currentImagePos.top,
            ...(currentImagePos.right ? { right: currentImagePos.right } : {}),
            ...(currentImagePos.left ? { left: currentImagePos.left } : {}),
            ...(currentImagePos.transform ? { transform: currentImagePos.transform } : {}),
            width: currentImageSize,
            height: currentImageSize,
            zIndex: 3
          }}
        >
          <img
            src={imageSrc}
            alt={title}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'contain',
              borderRadius: '4px'
            }}
          />
        </div>

        {/* Título */}
        <h3
          style={{
            fontFamily: 'Sora',
            fontWeight: 400,
            fontStyle: 'Regular',
            fontSize: titleStyle?.fontSize || '20px', // Font size/text-xl conforme especificações
            lineHeight: titleStyle?.lineHeight || '1.5em', // Line height/text-xl conforme especificações
            letterSpacing: '0%', // letter-spacing: 0% conforme especificações
            color: '#FFFFFF',
            margin: 0,
            textAlign: 'left',
            position: 'relative',
            zIndex: 4,
            width: screenSize === 'mobile' || screenSize === 'tablet' ? '191px' : '100%', // textos preenchem toda a largura disponível
            maxWidth: '100%'
          }}
        >
          {title}
        </h3>

        {/* Descrição */}
        <p
          style={{
            fontFamily: 'Sora',
            fontWeight: 400,
            fontStyle: 'Regular',
            fontSize: '14px', // Font size/text-sm conforme especificações
            lineHeight: '1.4285714285714286em', // Line height/text-sm conforme especificações
            letterSpacing: '0%', // letter-spacing: 0% conforme especificações
            color: '#FFFFFF',
            margin: 0,
            textAlign: 'left',
            position: 'relative',
            zIndex: 4,
            width: currentDescriptionWidth, // usar o valor passado via props
            maxWidth: '100%'
          }}
        >
          {description}
        </p>
      </div>
    </div>
  );
}
