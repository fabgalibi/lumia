// start-date-card.tsx
import React from "react";
import { BaseCard } from '@/components/profile-setup';

/** ===== Props públicas ===== */
export type StartDateCardProps = {
  id: string;
  title: string;
  description: string;
  imageSrc: string;
  isSelected: boolean;
  onClick: () => void;
  screenSize: "mobile" | "tablet" | "notebook" | "desktop";
};

/** ===== Componente principal ===== */
export default function StartDateCard({ 
  id,
  title, 
  description, 
  imageSrc, 
  isSelected, 
  onClick, 
  screenSize 
}: StartDateCardProps) {
  return (
    <BaseCard
      id={id}
      title={title}
      description={description}
      imageSrc={imageSrc}
      isSelected={isSelected}
      onClick={onClick}
      screenSize={screenSize}
      // Customizações específicas do StartDateCard
      width={screenSize === 'mobile' ? '100%' : '660px'} // card largo: 660px
      grids={[
        { 
          position: 'right', 
          top: '-105.6px', // y: -105.6px conforme Figma
          leftPosition: screenSize === 'mobile' ? '120px' : '370px' // x: 370px conforme Figma
        }
      ]}
      minHeight={{ mobile: '140px', desktop: '180px' }}
      imageSize={{ mobile: '96px', desktop: '146px' }} // imagem: 146x146px conforme Figma
      imagePosition={{
        mobile: { top: '12px', right: '16px' },
        desktop: { top: '13px', left: '495px' } // x: 495px, y: 13px conforme Figma
      }}
      contentPadding={{
        mobile: '82px 16px 24px',
        desktop: '24px 16px 24px 24px' // padding: 24px 16px 24px 24px conforme Figma
      }}
      descriptionWidth={{
        mobile: '100%',
        desktop: '486px' // width: 486px conforme Figma
      }}
    />
  );
}

