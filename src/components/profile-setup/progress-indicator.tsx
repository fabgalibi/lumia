// progress-indicator.tsx
import React from "react";

/** ===== Props públicas ===== */
export type ProgressIndicatorProps = {
  currentStep: number;
  totalSteps: number;
  screenSize: "mobile" | "tablet" | "notebook" | "desktop";
};

/** ===== Componente principal ===== */
export default function ProgressIndicator({ currentStep, totalSteps, screenSize }: ProgressIndicatorProps) {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'stretch',
        alignItems: 'stretch',
        alignSelf: 'stretch',
        gap: screenSize === 'mobile' ? '4px' : '6px', // mobile: 4px, desktop: 6px
        padding: '0', // sem padding - preenche toda largura
        width: '100%',
        boxSizing: 'border-box'
      }}
    >
      {Array.from({ length: totalSteps }, (_, index) => (
        <div
          key={index}
          style={{
            height: '6px', // altura exata do Figma
            flex: 1, // cada barra ocupa espaço igual - preenche toda horizontal
            background: index < currentStep ? '#F66649' : '#2F2F3C', // cores exatas do Figma
            borderRadius: '3px', // bordas arredondadas
            transition: 'background-color 0.3s ease' // transição suave
          }}
        />
      ))}
    </div>
  );
}
