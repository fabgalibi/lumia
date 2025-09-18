// base-card.tsx
import React from "react";
import { GridBackground } from '@/components/profile-setup';

/** ===== Props públicas ===== */
export type BaseCardProps = {
  // Identificação e interação
  id: string;
  isSelected: boolean;
  onClick: () => void;
  screenSize: "mobile" | "tablet" | "notebook" | "desktop";
  
  // Dimensões customizáveis
  width?: string; // default: screenSize === 'mobile' ? '100%' : '437px'
  minHeight?: {
    mobile: string;
    desktop: string;
  }; // default: { mobile: '140px', desktop: '180px' }
  
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
    desktop: string;
  }; // default: { mobile: '96px', desktop: '138px' }
  
  imagePosition?: {
    mobile: { top: string; right?: string; left?: string; };
    desktop: { top: string; right?: string; left?: string; };
  }; // default: { mobile: { top: '12px', right: '16px' }, desktop: { top: '11.4px', right: '16px' } }

  // Customizações de padding
  contentPadding?: {
    mobile: string;
    desktop: string;
  }; // default: { mobile: '82px 16px 24px', desktop: '96px 16px 24px' }

  // Customizações de descrição
  descriptionWidth?: {
    mobile: string;
    desktop: string;
  }; // default: { mobile: '100%', desktop: '100%' }
};

/** ===== Componente BaseCard reutilizável ===== */
export default function BaseCard({
  id: _id,
  isSelected,
  onClick,
  screenSize,
  width,
  minHeight = { mobile: '140px', desktop: '180px' },
  title,
  description,
  imageSrc,
  grids = [{ position: 'right' }],
  imageSize = { mobile: '96px', desktop: '138px' },
  imagePosition = { 
    mobile: { top: '12px', right: '16px' }, 
    desktop: { top: '11.4px', right: '16px' } 
  },
  contentPadding = {
    mobile: '82px 16px 24px',
    desktop: '96px 16px 24px'
  },
  descriptionWidth = {
    mobile: '100%',
    desktop: '100%'
  }
}: BaseCardProps) {
  
  const cardWidth = width || (screenSize === 'mobile' ? '100%' : '437px');
  const currentMinHeight = screenSize === 'mobile' ? minHeight.mobile : minHeight.desktop;
  const currentImageSize = screenSize === 'mobile' ? imageSize.mobile : imageSize.desktop;
  const currentImagePos = screenSize === 'mobile' ? imagePosition.mobile : imagePosition.desktop;
  const currentContentPadding = screenSize === 'mobile' ? contentPadding.mobile : contentPadding.desktop;
  const currentDescriptionWidth = screenSize === 'mobile' ? descriptionWidth.mobile : descriptionWidth.desktop;

  return (
    <div
      onClick={onClick}
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '10px',
        padding: '8px',
        width: cardWidth,
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
          gap: '12px',
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
            fontStyle: 'normal',
            fontSize: screenSize === 'mobile' ? '20px' : '24px',
            lineHeight: screenSize === 'mobile' ? '1.5em' : '1.3333333333333333em',
            letterSpacing: '0%',
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
            fontFamily: 'Sora',
            fontWeight: 400,
            fontStyle: 'normal',
            fontSize: '14px',
            lineHeight: '1.4285714285714286em',
            letterSpacing: '0%',
            color: '#FFFFFF',
            margin: 0,
            textAlign: 'left',
            position: 'relative',
            zIndex: 4,
            width: currentDescriptionWidth,
            maxWidth: '100%'
          }}
        >
          {description}
        </p>
      </div>
    </div>
  );
}
