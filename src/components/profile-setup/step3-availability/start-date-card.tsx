// start-date-card.tsx
import React from "react";
import { BaseCard } from '@/components/profile-setup/shared';

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
      // Customizações específicas do StartDateCard conforme Figma
      width="100%" // Largura responsiva
      minWidth={
        screenSize === 'mobile' ? '100%' : 
        screenSize === 'tablet' ? '100%' :
        '432px' // Largura conforme Figma: 432px para desktop/notebook
      }
      borderRadius="8px" // Border radius conforme Figma: 8px
      grids={[
        { 
          position: 'right', 
          top: '-99px', // Posicionamento conforme Figma
          rightPosition: '0px' // Alinhado à direita
        }
      ]}
      minHeight={{ 
        mobile: '140px', 
        tablet: '160px', 
        notebook: '180px', 
        desktop: '200px' 
      }}
      imageSize={{ 
        mobile: '96px', 
        tablet: '108px', 
        notebook: '130px', 
        desktop: '146px' 
      }}
      imagePosition={{
        mobile: { top: '16px', right: '16px' }, // Alinhada à direita
        tablet: { top: '24px', right: '24px' }, // Alinhada à direita com padding do card
        notebook: { top: '24px', right: '24px' }, // Alinhada à direita com padding do card
        desktop: { top: '24px', right: '24px' } // Alinhada à direita conforme Figma
      }}
      contentPadding={{
        mobile: '82px 16px 16px 16px', // padding mobile com mais espaço para imagem
        tablet: '32px 24px 28px 32px', // padding conforme Figma
        notebook: '32px 24px 28px 32px', // padding conforme Figma
        desktop: '32px 24px 28px 32px' // padding: 32px 24px 28px 32px conforme Figma
      }}
      descriptionWidth={{
        mobile: '100%', // horizontal: fill conforme Figma mobile
        tablet: 'calc(100% - 130px)', // espaço para imagem no tablet
        notebook: 'calc(100% - 155px)', // espaço para imagem no notebook
        desktop: 'calc(100% - 170px)' // espaço para imagem no desktop (146px + 24px gap)
      }}
      titleStyle={{
        fontFamily: 'Sora', // font-family: Sora conforme Figma
        fontSize: screenSize === 'mobile' ? '20px' : 
                  screenSize === 'tablet' ? '22px' : 
                  screenSize === 'notebook' ? '23px' : '24px', // Font size progressivo
        lineHeight: screenSize === 'mobile' ? '30px' : 
                    screenSize === 'tablet' ? '31px' : 
                    screenSize === 'notebook' ? '31.5px' : '32px', // Line height progressivo
        fontWeight: 400
      }}
      descriptionStyle={{
        fontFamily: 'Sora', // font-family: Sora conforme Figma
        fontSize: screenSize === 'mobile' ? '12px' : '14px', // Font size/text-sm (14px)
        lineHeight: screenSize === 'mobile' ? '1.5em' : '20px', // Line height/text-sm (20px)
        fontWeight: 400
      }}
      gap={
        screenSize === 'mobile' ? '12px' : 
        screenSize === 'tablet' ? '16px' : 
        '16px' // gap: 16px conforme Figma
      }
      justifyContent="flex-start" // Alinhamento no topo
    />
  );
}

