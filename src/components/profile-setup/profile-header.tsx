// profile-header.tsx
import React from "react";

/** ===== Props públicas ===== */
export type ProfileHeaderProps = {
  screenSize: "mobile" | "tablet" | "notebook" | "desktop";
};

/** ===== Componente principal ===== */
export default function ProfileHeader({ screenSize }: ProfileHeaderProps) {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center', // conforme Figma - logo centralizada
        alignItems: 'center',
        alignSelf: 'stretch',
        padding: screenSize === 'mobile' ? '24px' : '32px 112px', // padding exato do Figma
        background: '#0B1219', // cor de fundo do Figma
        width: '100%',
        boxSizing: 'border-box',
        minHeight: screenSize === 'mobile' ? '72px' : '112px' // altura mínima para o header
      }}
    >
      {/* Logo Centralizada */}
      <img
        src="/images/lumia-logo-718d50.png"
        alt="Lumia Logo"
        style={{
          width: '174px', // dimensão exata do Figma
          height: '48px',
          objectFit: 'contain'
        }}
      />
    </div>
  );
}

