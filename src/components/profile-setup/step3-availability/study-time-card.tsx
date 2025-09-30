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
          top: '-99px' // Posicionamento conforme Figma
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
      titleStyle={{
        fontFamily: 'Sora', // font-family: Sora conforme Figma
        fontSize: screenSize === 'mobile' ? '20px' : 
                  screenSize === 'tablet' ? '22px' : 
                  screenSize === 'notebook' ? '23px' : '24px', // Font size/display-xs (24px) desktop, text-xl (20px) mobile
        lineHeight: screenSize === 'mobile' ? '30px' : 
                    screenSize === 'tablet' ? '31px' : 
                    screenSize === 'notebook' ? '31.5px' : '32px', // Line height progressivo
        fontWeight: 400
      }}
      descriptionStyle={{
        fontFamily: 'Sora', // font-family: Sora conforme Figma
        fontSize: screenSize === 'mobile' ? '14px' : '14px', // Font size/text-sm (14px)
        lineHeight: screenSize === 'mobile' ? '20px' : '20px', // Line height/text-sm (20px)
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

