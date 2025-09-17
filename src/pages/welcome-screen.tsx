import RightPanelLumia from "@/components/welcome/right-panel-lumia";
import WelcomeForm from "@/components/welcome/welcome-form";

import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';

export const WelcomeScreen = () => {
  const navigate = useNavigate();
  const [screenSize, setScreenSize] = useState<'mobile' | 'tablet' | 'notebook' | 'desktop'>('desktop');
  const [termsAccepted, setTermsAccepted] = useState(false);

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

  const handleBackToStart = () => {
    // Navegar de volta para o início
    navigate('/');
  };

  const handlePrepareProfile = () => {
    if (termsAccepted) {
      // Navegar para a configuração do perfil
      navigate('/profile-setup');
    }
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center"
      style={{
        background: 'linear-gradient(135deg, #0F1419 0%, #1A1F28 100%)',
        width: '100%',
        minHeight: '100vh',
        padding: screenSize === 'desktop' ? '60px 32px' : '0px' // só padding em desktop
      }}
    >
      {/* Container Principal - Flexbox com duas colunas */}
      <div
        className="flex items-center justify-center"
        style={{
          width: '100%',
          maxWidth: '1400px',
          gap: screenSize === 'mobile' ? '0px' : '0px', // sem gap em mobile
          flexDirection: screenSize === 'mobile' ? 'column' : 'row',
          padding: screenSize === 'mobile' ? '0px' : '0px', // sem padding em mobile
          alignItems: 'stretch',
          margin: '0 auto',
          position: 'relative',
          background: '#0B1219',
          minHeight: '100vh'
        }}
      >
        {/* Coluna 1 - Formulário de Boas-vindas (Design do Figma) */}
        <div
          style={{
            width: screenSize === 'mobile' ? '100%' : '52%',
            height: 'auto',
            order: screenSize === 'mobile' ? 2 : 1,
            flex: '0 0 auto',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative'
          }}
        >
          <WelcomeForm
            screenSize={screenSize}
            termsAccepted={termsAccepted}
            onTermsChange={setTermsAccepted}
            onBackToStart={handleBackToStart}
            onPrepareProfile={handlePrepareProfile}
          />

        </div>

        {/* Coluna 2 - Mockup da Interface */}
        <div
          style={{
            width: screenSize === 'mobile' ? '100%' : '48%',
            height: screenSize === 'mobile' ? '400px' : 'auto',
            order: screenSize === 'mobile' ? 1 : 2,
            flex: '0 0 auto',
            position: 'relative'
          }}
        >
          <RightPanelLumia
            screenSize={screenSize}
            mockupSrc="/images/mockup-interface.png"
            wineAmount={0.75}
            coolAmount={0.0}     // removendo verde conforme feedback anterior
            hazeAmount={0.60}
            vignetteTop={0.42}
            vignetteSides={0.50}
            vignetteBottom={0.32}
            wineTop={0.45}
            glowIntensity={0.55}
            wineX={0.68}
            wineY={0.82}
            wineScale={1.15}
          />
        </div>











      </div>
    </div>
  );
};
