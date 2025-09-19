// preparation-type-card.tsx
import React from "react";
import { BaseCard } from '@/components/profile-setup';

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
  id,
  title, 
  description, 
  imageSrc, 
  isSelected, 
  onClick, 
  screenSize 
}: PreparationTypeCardProps) {
  return (
    <BaseCard
      id={id}
      title={title}
      description={description}
      imageSrc={imageSrc}
      isSelected={isSelected}
      onClick={onClick}
      screenSize={screenSize}
      // Customizações específicas do PreparationTypeCard conforme Figma
      width={screenSize === 'mobile' || screenSize === 'tablet' ? '100%' : '660px'} // card mais largo: 660px
      grids={[{ 
        position: 'right', 
        top: '-105.6px',  // y: -105.6px conforme Figma
        leftPosition: screenSize === 'mobile' || screenSize === 'tablet' ? '120px' : '370px' // x: 370px conforme Figma (usar left para posição absoluta)
      }]}
      minHeight={{ mobile: '140px', tablet: '140px', notebook: '160px', desktop: '180px' }}
      contentPadding={{
        mobile: '82px 16px 24px',
        tablet: '82px 16px 24px',
        notebook: '48px 16px 24px',
        desktop: '24px 16px 24px 24px' // padding conforme Figma: 24px 16px 24px 24px
      }}
      imagePosition={{
        mobile: { top: '12px', right: '16px' },
        tablet: { top: '12px', right: '16px' },
        notebook: { top: '11px', left: '450px' },
        desktop: { top: '11.4px', left: '510px' } // x: 510px, y: 11.4px conforme Figma
      }}
      descriptionWidth={{
        mobile: '100%',
        tablet: '100%',
        notebook: '100%',
        desktop: '503px' // width: 503px conforme Figma
      }}
    />
  );
}

