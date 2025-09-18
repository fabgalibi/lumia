// profile-setup-screen.tsx
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';
import { ProfileHeader, ProgressIndicator, StudyAreaCard, ProfileFooter } from '@/components/profile-setup';

export const ProfileSetupScreen = () => {
  const navigate = useNavigate();
  const [screenSize, setScreenSize] = useState<'mobile' | 'tablet' | 'notebook' | 'desktop'>('desktop');
  const [selectedArea, setSelectedArea] = useState<string>('controle'); // área pré-selecionada conforme Figma

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
    navigate('/welcome');
  };

  const handleNextStep = () => {
    if (selectedArea) {
      // Aqui você pode navegar para a próxima etapa
      console.log('Próxima etapa:', selectedArea);
    }
  };

  // Dados das áreas de estudo
  const studyAreas = [
    {
      id: 'fiscal',
      title: 'Fiscal',
      description: 'Um espaço dedicado à sua preparação para concursos da área fiscal.',
      image: '/images/study-areas/fiscal-area.png',
      overlayImage: '/images/study-areas/fiscal-overlay.png'
    },
    {
      id: 'controle',
      title: 'Controle',
      description: 'Um espaço dedicado à sua preparação para concursos da órgãos de controle.',
      image: '/images/study-areas/controle-area-3c2f60.png'
    },
    {
      id: 'policial',
      title: 'Policial',
      description: 'Um espaço dedicado à sua preparação para concursos da área policial.',
      image: '/images/study-areas/policial-area.png'
    },
    {
      id: 'tribunais',
      title: 'Tribunais',
      description: 'Um espaço dedicado à sua preparação para concursos da área tributária.',
      image: '/images/study-areas/tribunais-area-44f82d.png'
    },
    {
      id: 'outros',
      title: 'Outros',
      description: 'Sua área não se encaixa em nenhuma das opções? Qual a sua área de estudo?',
      image: '/images/study-areas/outros-area-38702c.png'
    }
  ];

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
      <ProfileHeader 
        screenSize={screenSize}
      />

      {/* Indicador de Progresso */}
      <ProgressIndicator 
        currentStep={1}
        totalSteps={6}
        screenSize={screenSize}
      />

      {/* Conteúdo Principal */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignSelf: 'stretch',
          gap: screenSize === 'mobile' ? '12px' : '32px', // mobile: 12px, desktop: 32px
          padding: screenSize === 'mobile' ? '24px 16px 120px 16px' : '96px 56px 100px 56px', // padding responsivo
          flex: 1,
          background: 'transparent', // sem fundo adicional - usa o fundo da tela principal
          overflowY: 'auto' // scroll se necessário
        }}
      >
        {/* Container com Título e Cards Alinhados */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center', // centraliza o conjunto
            width: '100%',
            gap: screenSize === 'mobile' ? '12px' : '32px' // gap entre título e cards
          }}
        >
          {/* Sub-container para alinhamento à esquerda */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start', // alinha título e cards à esquerda entre si
              width: 'auto', // largura automática baseada no conteúdo
              gap: screenSize === 'mobile' ? '12px' : '32px' // gap entre título e cards
            }}
          >
            {/* Título da Seção */}
            <h1
              style={{
                fontFamily: 'Sora',
                fontWeight: 400,
                fontStyle: 'normal', // Regular
                fontSize: screenSize === 'mobile' ? '16px' : '20px', // mobile: text-md (16px), desktop: 20px
                lineHeight: '1.5em', // text-md line-height
                letterSpacing: '0%', // letter-spacing: 0%
                color: '#FFFFFF',
                margin: 0,
                textAlign: screenSize === 'mobile' ? 'left' : 'left', // sempre left conforme Figma
                width: 'auto'
              }}
            >
              Selecione abaixo a área de estudo que você deseja estudar:
            </h1>

          {/* Grid de Cards de Área */}
          <div
            style={{
              display: 'flex',
              flexDirection: screenSize === 'mobile' ? 'column' : 'row', // mobile: column, desktop: row
              justifyContent: 'flex-start', // alinha à esquerda
              alignItems: 'stretch', // altura uniforme
              gap: screenSize === 'mobile' ? '8px' : '8px', // gap responsivo
              width: '100%',
              height: 'auto',
              overflow: 'visible',
              flexWrap: 'wrap' // permite quebra de linha
            }}
          >
          {studyAreas.map((area) => (
            <StudyAreaCard
              key={area.id}
              area={area}
              isSelected={selectedArea === area.id}
              onClick={() => setSelectedArea(area.id)}
              screenSize={screenSize}
            />
            ))}
            </div>
          </div>
        </div>
      </div>

      {/* Footer com Navegação */}
      <ProfileFooter
        screenSize={screenSize}
        onBack={handleBackToStart}
        onNext={handleNextStep}
        nextButtonText="Prosseguir para etapa 2"
        canProceed={!!selectedArea}
        currentStep={1}
        totalSteps={6}
        stepTitle="Área de Estudo"
      />
    </div>
  );
};

export default ProfileSetupScreen;