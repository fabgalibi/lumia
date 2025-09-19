// study-time-card.tsx
import React from "react";
import { BaseCard } from '@/components/profile-setup';

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
      // Customizações específicas do StudyTimeCard conforme Figma mobile e desktop
      width={screenSize === 'mobile' || screenSize === 'tablet' ? '100%' : '437px'} // width padrão: 437px
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
        mobile: { top: '8px', right: '16px' }, // posição mobile conforme Figma
        tablet: { top: '8px', right: '16px' }, // mesmo que mobile
        notebook: { top: '7px', left: '200px' }, // posição intermediária para notebook
        desktop: { top: '7px', left: '243px' } // x: 243px, y: 7px conforme Figma desktop
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

