// study-area-card.tsx
import React from "react";
import { AreaCard } from "@/components/ui";

/** ===== Props públicas ===== */
export type StudyAreaCardProps = {
  area: {
    id: string;
    title: string;
    description: string;
    image?: string;
    overlayImage?: string;
  };
  isSelected: boolean;
  onClick: () => void;
  screenSize: "mobile" | "tablet" | "notebook" | "desktop";
};

/** ===== Componente principal ===== */
export default function StudyAreaCard({ area, isSelected, onClick, screenSize }: StudyAreaCardProps) {
  // Determinar tamanho baseado no screenSize
  const getCardSize = () => {
    switch (screenSize) {
      case 'mobile': return 'sm';
      case 'tablet': return 'md';
      case 'notebook': return 'md';
      case 'desktop': return 'md';
      default: return 'md';
    }
  };

  return (
    <AreaCard
      title={area.title}
      description={area.description}
      image={area.image}
      overlayImage={area.overlayImage}
      isSelected={isSelected}
      onClick={onClick}
      size={getCardSize()}
    />
  );
}