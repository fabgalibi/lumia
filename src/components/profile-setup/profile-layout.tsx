// profile-layout.tsx
import React, { useState, useEffect } from 'react';
import { ProfileHeader, ProgressIndicator, ProfileFooter } from '@/components/profile-setup';

/** ===== Props públicas ===== */
export type ProfileLayoutProps = {
  currentStep: number;
  totalSteps: number;
  stepTitle: string;
  backButtonText: string;
  nextButtonText: string;
  canProceed: boolean;
  onBack: () => void;
  onNext: () => void;
  children: React.ReactNode;
};

/** ===== Componente principal ===== */
export default function ProfileLayout({
  currentStep,
  totalSteps,
  stepTitle,
  backButtonText,
  nextButtonText,
  canProceed,
  onBack,
  onNext,
  children
}: ProfileLayoutProps) {
  const [screenSize, setScreenSize] = useState<'mobile' | 'tablet' | 'notebook' | 'desktop'>('desktop');

  // Detectar tamanho da tela
  useEffect(() => {
    const checkScreenSize = () => {
      const width = window.innerWidth;
      if (width < 768) {
        setScreenSize('mobile');
      } else if (width < 1024) {
        setScreenSize('tablet');
      } else if (width < 1440) {
        setScreenSize('notebook');
      } else {
        setScreenSize('desktop');
      }
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  return (
    <div
      style={{
        width: '100vw',
        height: '100vh',
        maxWidth: '100vw',
        maxHeight: '100vh',
        background: '#191923',
        display: 'flex',
        flexDirection: 'column',
        position: 'relative',
        margin: 0,
        padding: 0,
        overflow: 'hidden'
      }}
    >
      {/* Header com Logo */}
      <ProfileHeader screenSize={screenSize} />

      {/* Indicador de Progresso */}
      <ProgressIndicator 
        currentStep={currentStep}
        totalSteps={totalSteps}
        screenSize={screenSize}
      />

      {/* Conteúdo Principal */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignSelf: 'stretch',
          gap: screenSize === 'mobile' ? '24px' : '32px', // gap responsivo - menor para caber na tela
          padding: screenSize === 'mobile' ? '24px 16px 180px 16px' : '64px 56px 140px 56px', // padding top menor
          flex: 1,
          background: 'transparent',
          overflowY: 'auto',
          scrollPaddingBottom: '20px' // espaço adicional no final do scroll
        }}
      >
        {children}
      </div>

      {/* Footer com Navegação */}
      <ProfileFooter
        screenSize={screenSize}
        onBack={onBack}
        onNext={onNext}
        backButtonText={backButtonText}
        nextButtonText={nextButtonText}
        canProceed={canProceed}
        currentStep={currentStep}
        totalSteps={totalSteps}
        stepTitle={stepTitle}
      />
    </div>
  );
}
