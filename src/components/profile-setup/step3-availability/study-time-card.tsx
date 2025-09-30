// study-time-card.tsx
import React from "react";
import { BaseCard } from '@/components/profile-setup/shared';

/** ===== Props públicas ===== */
export type StudyTimeCardProps = {
  id: string;
  title: string;
  description: string;
  imageSrc: string;
  isSelected: boolean;
  onClick: () => void;
  screenSize: "mobile" | "tablet" | "notebook" | "desktop";
};

/** ===== Componente principal ===== */
export default function StudyTimeCard({ 
  id,
  title, 
  description, 
  imageSrc, 
  isSelected, 
  onClick, 
  screenSize 
}: StudyTimeCardProps) {
  return (
    <BaseCard
      id={id}
      title={title}
      description={description}
      imageSrc={imageSrc}
      isSelected={isSelected}
      onClick={onClick}
      screenSize={screenSize}
      // Customizações específicas do StudyTimeCard conforme Figma
      width="100%" // Largura responsiva
      minWidth={
        screenSize === 'mobile' ? '100%' : 
        '432px' // Largura conforme Figma: 432px
      }
      minHeight="200px" // Altura conforme Figma: 200px
      contentPadding="8px" // Padding conforme Figma: 8px
      borderRadius="8px" // Border radius conforme Figma: 8px
      grids={[
        { 
          position: 'left', 
          leftPosition: screenSize === 'mobile' || screenSize === 'tablet' ? '32px' : '46.6px' // Grid 1: x: 46.6px conforme Figma desktop
        },
        { 
          position: 'right', 
          leftPosition: screenSize === 'mobile' || screenSize === 'tablet' ? '207px' : '191px' // Grid 2: x: 191px conforme Figma desktop
        }
      ]}
      minHeight={{ mobile: '140px', tablet: '140px', notebook: '160px', desktop: '180px' }}
      imageSize={{ mobile: '108px', tablet: '108px', notebook: '135px', desktop: '162px' }} // imagem responsiva conforme tamanho de tela
      imagePosition={{
        mobile: { top: '8px', right: '8px' }, // Alinhada à direita com padding do card
        tablet: { top: '8px', right: '8px' }, // Alinhada à direita com padding do card
        notebook: { top: '8px', right: '8px' }, // Alinhada à direita com padding do card
        desktop: { top: '8px', right: '8px' } // Alinhada à direita com padding do card
      }}
      contentPadding={{
        mobile: '82px 16px 24px', // padding mobile conforme Figma
        tablet: '82px 16px 24px', // mesmo que mobile
        notebook: '88px 16px 24px', // padding intermediário para notebook
        desktop: '96px 16px 24px'
      }}
    />
  );
}

