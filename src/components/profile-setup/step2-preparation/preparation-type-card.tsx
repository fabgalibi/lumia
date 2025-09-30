// preparation-type-card.tsx
import React from "react";
import { BaseCard } from '@/components/profile-setup/shared';

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
      width="100%" // Largura responsiva
      minWidth={
        screenSize === 'mobile' ? '100%' : 
        screenSize === 'tablet' ? '100%' : 
        '644px' // Largura mínima 644px para desktop/notebook
      }
      grids={[{ 
        position: 'right', 
        top: '-105.6px',  // y: -105.6px conforme Figma
        leftPosition: screenSize === 'desktop' ? '370px' : screenSize === 'mobile' ? '31.6px' : '120px' // x: 370px desktop, 31.6px mobile conforme Figma
      }]}
      minHeight={{ 
        mobile: '140px', // Altura menor para mobile
        tablet: '160px', // Altura intermediária para tablet
        notebook: '172px', // Altura conforme especificação para notebook
        desktop: '172px' // height: 172px conforme especificação para desktop
      }}
      contentPadding={{
        mobile: '82px 16px 24px', // padding: 82px 16px 24px conforme Figma mobile
        tablet: '20px 14px 20px 20px', // Padding intermediário para tablet
        notebook: '24px 16px 24px 24px', // Padding conforme especificação para notebook
        desktop: '24px 16px 24px 24px' // padding: 24px 16px 24px 24px conforme especificação para desktop
      }}
      imageSize={{ 
        mobile: '96px', // 96x96px conforme Figma mobile
        tablet: '60px', 
        notebook: '70px', 
        desktop: '138px' // 138x138px conforme Figma
      }}
      imagePosition={{
        mobile: { top: '12px', left: '219px' }, // x: 219px, y: 12px conforme Figma mobile
        tablet: { top: '12px', right: '16px' },
        notebook: { top: '11px', right: '16px' },
        desktop: { top: '11.4px', right: '16px' } // Alinhada à direita
      }}
      descriptionWidth={{
        mobile: '100%', // Ocupa toda a largura no mobile conforme Figma
        tablet: 'calc(100% - 80px)', // Deixa espaço para a imagem à direita
        notebook: 'calc(100% - 90px)', // Deixa espaço para a imagem à direita
        desktop: 'calc(100% - 160px)' // Deixa espaço para a imagem à direita
      }}
    />
  );
}

