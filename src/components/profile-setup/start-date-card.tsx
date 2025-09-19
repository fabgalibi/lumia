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
      // Customizações específicas do StartDateCard conforme Figma mobile
      width={screenSize === 'mobile' || screenSize === 'tablet' ? '100%' : '660px'} // card largo: 660px
      grids={[
        { 
          position: 'right', 
          top: '-122px', // y: -122px conforme Figma mobile
          leftPosition: screenSize === 'mobile' || screenSize === 'tablet' ? '31.6px' : '370px' // x: 31.6px mobile/tablet conforme Figma
        }
      ]}
      minHeight={{ mobile: '140px', tablet: '140px', notebook: '160px', desktop: '180px' }}
      imageSize={{ mobile: '108px', tablet: '108px', notebook: '130px', desktop: '146px' }} // imagem responsiva conforme tamanho de tela
      imagePosition={{
        mobile: { top: '8px', left: '207px' }, // x: 207px conforme Figma mobile
        tablet: { top: '8px', left: '207px' }, // mesmo que mobile
        notebook: { top: '10px', left: '350px' }, // posição intermediária para notebook
        desktop: { top: '13px', left: '495px' } // x: 495px conforme Figma desktop
      }}
      contentPadding={{
        mobile: '72px 16px 24px', // padding mobile conforme Figma
        tablet: '72px 16px 24px', // mesmo que mobile
        notebook: '48px 16px 24px', // padding intermediário para notebook
        desktop: '24px 16px 24px 24px' // padding: 24px 16px 24px 24px conforme Figma
      }}
      descriptionWidth={{
        mobile: '100%', // horizontal: fill conforme Figma mobile
        tablet: '100%', // mesmo que mobile
        notebook: '100%', // mesmo que mobile/tablet
        desktop: '486px' // width: 486px conforme Figma desktop
      }}
    />
  );
}

