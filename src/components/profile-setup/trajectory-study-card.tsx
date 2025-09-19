// trajectory-study-card.tsx
import React from "react";
import { BaseCard } from '@/components/profile-setup';

/** ===== Props públicas ===== */
export type TrajectoryStudyCardProps = {
  id: string;
  title: string;
  description: string;
  imageSrc: string;
  isSelected: boolean;
  onClick: () => void;
  screenSize: "mobile" | "tablet" | "notebook" | "desktop";
};

/** ===== Componente principal ===== */
export default function TrajectoryStudyCard({ 
  id,
  title, 
  description, 
  imageSrc, 
  isSelected, 
  onClick, 
  screenSize 
}: TrajectoryStudyCardProps) {
  return (
    <BaseCard
      id={id}
      title={title}
      description={description}
      imageSrc={imageSrc}
      isSelected={isSelected}
      onClick={onClick}
      screenSize={screenSize}
      // Customizações específicas do TrajectoryStudyCard conforme Figma
      width={{
        mobile: '100%',
        tablet: '100%', 
        notebook: '259.2px', // largura exata do Figma
        desktop: '259.2px' // largura exata do Figma
      }}
      minHeight={{
        mobile: '180px',
        tablet: '180px',
        notebook: '236px', // altura exata do Figma
        desktop: '236px' // altura exata do Figma
      }}
      grids={[
        { 
          position: 'right', 
          top: '-122px',
          leftPosition: '32px'
        }
      ]}
      imageSize={{
        mobile: '100px',
        tablet: '100px',
        notebook: '130px', // tamanho exato do Figma
        desktop: '130px' // tamanho exato do Figma
      }}
      imagePosition={{
        mobile: { top: '8px', left: '50%', transform: 'translateX(-50%)' },
        tablet: { top: '8px', left: '50%', transform: 'translateX(-50%)' },
        notebook: { top: '16px', right: '16px' }, // posição anterior que estava melhor
        desktop: { top: '16px', right: '16px' } // posição anterior que estava melhor
      }}
      contentPadding={{
        mobile: '80px 16px 24px',
        tablet: '80px 16px 24px',
        notebook: '112px 16px 24px', // padding exato do Figma
        desktop: '112px 16px 24px' // padding exato do Figma
      }}
      descriptionWidth={{
        mobile: '100%',
        tablet: '100%',
        notebook: '100%', // textos devem preencher toda a largura disponível
        desktop: '100%' // textos devem preencher toda a largura disponível
      }}
      // Typography específica para esta tela
      titleStyle={{
        fontSize: '24px', // Text xs Medium mas com 24px conforme Figma
        lineHeight: '1.3333333333333333em'
      }}
    />
  );
}
