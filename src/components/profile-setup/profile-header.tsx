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
        padding: screenSize === 'mobile' ? '20px 16px 24px' : '32px 112px', // padding conforme Figma mobile/desktop
        background: screenSize === 'mobile' ? 'linear-gradient(0deg, #0B1219, #252532)' : '#0B1219', // gradiente mobile conforme Figma
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
          width: screenSize === 'mobile' ? '145px' : '174px', // mobile: 145px, desktop: 174px
          height: screenSize === 'mobile' ? '40px' : '48px', // mobile: 40px, desktop: 48px
          objectFit: 'contain'
        }}
      />
    </div>
  );
}

