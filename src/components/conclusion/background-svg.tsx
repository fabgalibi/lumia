import React from 'react';

interface BackgroundSvgProps {
  screenSize?: 'mobile' | 'tablet' | 'notebook' | 'desktop';
}

export const BackgroundSvg: React.FC<BackgroundSvgProps> = ({ screenSize = 'desktop' }) => {
  
  // Calcular tamanho do personagem baseado no design do Figma
  // No Figma, o personagem ocupa quase toda a altura da tela (881/1024 ≈ 86%)
  const getCharacterSize = () => {
    switch (screenSize) {
      case 'mobile': 
        return 'clamp(400px, 80vh, 600px)'; // Mobile: 80% da altura
      case 'tablet': 
        return 'clamp(500px, 85vh, 750px)'; // Tablet: 85% da altura
      case 'notebook': 
        return 'clamp(600px, 85vh, 850px)'; // Notebook: 85% da altura
      default: 
        return 'clamp(700px, 86vh, 900px)'; // Desktop: 86% da altura (como no Figma)
    }
  };

  return (
    <div
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        display: 'flex',
        justifyContent: 'flex-start', // Alinha à esquerda
        alignItems: 'center'
      }}
    >
      {/* Fundo SVG - só o gradiente e blur, expandindo para cobrir tudo */}
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 696 1024"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMinYMid slice"
        style={{ 
          position: "absolute", 
          top: 0, 
          left: 0, 
          width: "100%", 
          height: "100%",
          zIndex: 0
        }}
      >
        <g clipPath="url(#clipBackgroundConclusion)">
          <path d="M0 32C0 14.3269 14.3269 0 32 0H696V1024H32C14.3269 1024 0 1009.67 0 992V32Z" fill="#2C1111"/>
          <path d="M0 32C0 14.3269 14.3269 0 32 0H696V1024H32C14.3269 1024 0 1009.67 0 992V32Z" fill="url(#paintBackgroundConclusion)"/>
          <g opacity="0.9" filter="url(#filtroBlurConclusion)">
            <path d="M1005.64 715.969C1005.64 894.729 843.472 1039.94 639.318 1039.94C435.164 1039.94 273 894.729 273 715.969C273 537.209 435.164 392 639.318 392C843.472 392 1005.64 537.209 1005.64 715.969Z" fill="#FF4B2B"/>
          </g>
        </g>
        <defs>
          <filter id="filtroBlurConclusion" x="0" y="119" width="1278.64" height="1184.94" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feGaussianBlur stdDeviation="136.5" />
          </filter>
          <linearGradient id="paintBackgroundConclusion" x1="696" y1="512" x2="48.421" y2="207.695" gradientUnits="userSpaceOnUse">
            <stop stopColor="#152331"/>
            <stop offset="1"/>
          </linearGradient>
          <clipPath id="clipBackgroundConclusion">
            <rect width="696" height="1024" fill="white"/>
          </clipPath>
        </defs>
      </svg>

      {/* Personagem - tamanho controlado */}
      <div
        style={{
          position: 'relative',
          width: getCharacterSize(),
          height: getCharacterSize(),
          backgroundImage: 'url(/images/conclusion/conclusion-character-21c882.png)',
          backgroundSize: 'contain',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          zIndex: 1,
          flexShrink: 0 // Não permite que encolha
        }}
      />
    </div>
  );
};
