// trajectory-study-card.tsx
import React from "react";
import { BaseCard } from '@/components/profile-setup/shared';

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
      // width removido - Tailwind Grid controla o layout
      minHeight={{
        mobile: '200px', // aumentado para dar espaço para imagem
        tablet: '220px', // aumentado para dar espaço para imagem
        notebook: '240px', // aumentado para dar espaço para imagem
        desktop: '260px' // aumentado para dar espaço para imagem
      }}
      grids={[
        { 
          position: 'right', 
          top: '-122px',
          leftPosition: '32px'
        }
      ]}
      imageSize={{
        mobile: '108px', // tamanho exato do Figma
        tablet: '108px', // mantém o mesmo tamanho
        notebook: '108px', // mantém o mesmo tamanho
        desktop: '108px' // mantém o mesmo tamanho
      }}
      imagePosition={{
        mobile: { top: '20px', right: '16px' }, // posição mais baixa
        tablet: { top: '24px', right: '16px' }, // posição mais baixa
        notebook: { top: '28px', right: '16px' }, // posição mais baixa
        desktop: { top: '32px', right: '16px' } // posição mais baixa
      }}
      contentPadding={{
        mobile: '88px 16px 24px', // padding mobile do Figma
        tablet: '100px 20px 24px', // ajustado para aproveitar o espaço em 2 colunas
        notebook: '100px 20px 24px', // padding intermediário
        desktop: '112px 16px 24px' // padding desktop do Figma
      }}
      descriptionWidth={{
        mobile: '100%',
        tablet: '100%',
        notebook: '100%', // textos devem preencher toda a largura disponível
        desktop: '100%' // textos devem preencher toda a largura disponível
      }}
      // Typography específica para esta tela
      titleStyle={{
        fontSize: screenSize === 'mobile' ? '20px' : 
                  screenSize === 'tablet' ? '22px' : 
                  screenSize === 'notebook' ? '23px' : '24px', // gradativo entre tamanhos
        lineHeight: screenSize === 'mobile' ? '1.5em' : 
                   screenSize === 'tablet' ? '1.45em' : 
                   screenSize === 'notebook' ? '1.4em' : '1.3333333333333333em' // gradativo entre tamanhos
      }}
    />
  );
}
