// profile-layout.tsx
import React, { useState, useEffect } from 'react';
import ProfileHeader from './profile-header';
import ProgressIndicator from './progress-indicator';
import ProfileFooter from './profile-footer';

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
  children: React.ReactNode | ((screenSize: 'mobile' | 'tablet' | 'notebook' | 'desktop') => React.ReactNode);
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
        minHeight: '100vh',
        background: '#191923',
        display: 'flex',
        flexDirection: 'column',
        position: 'relative',
        margin: 0,
        padding: 0,
        overflow: 'visible'
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
          gap: screenSize === 'mobile' ? '16px' : '32px', // gap otimizado para caber na tela
          padding: screenSize === 'mobile' ? '24px 16px 100px 16px' : 
                   screenSize === 'tablet' ? '32px 20px 120px 20px' :
                   screenSize === 'notebook' ? '48px 24px 120px 24px' : 
                   '64px 32px 120px 32px', // padding ainda mais reduzido
          flex: 1,
          background: 'transparent',
          overflowY: 'visible',
          overflowX: 'hidden', // evita scroll horizontal
          maxWidth: '100%', // garante que não ultrapasse a largura da tela
          minHeight: 0 // permite que o flex funcione corretamente
        }}
      >
        {typeof children === 'function' ? children(screenSize) : children}
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
