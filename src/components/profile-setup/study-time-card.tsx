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
      // Customizações específicas do StudyTimeCard
      width={screenSize === 'mobile' ? '100%' : '437px'} // width padrão: 437px
      grids={[
        { 
          position: 'left', 
          leftPosition: screenSize === 'mobile' ? '20px' : '30px' // Grid 1: à esquerda mas dentro do card
        },
        { 
          position: 'right', 
          leftPosition: screenSize === 'mobile' ? '140px' : '207px' // Grid 2: à direita, posição ajustada
        }
      ]}
      minHeight={{ mobile: '140px', desktop: '180px' }}
      imageSize={{ mobile: '96px', desktop: '162px' }} // imagem maior: 162px
      imagePosition={{
        mobile: { top: '12px', right: '16px' },
        desktop: { top: '7px', right: '32px' } // posição Y: 7px conforme Figma
      }}
    />
  );
}

