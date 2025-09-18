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
        width: '100vw', // preenche toda a largura da viewport
        height: '100vh', // preenche toda a altura da viewport
        maxWidth: '100vw',
        maxHeight: '100vh',
        background: '#191923', // cor de fundo exata do Figma
        display: 'flex',
        flexDirection: 'column',
        position: 'relative',
        margin: 0, // remove margem para preencher tudo
        padding: 0, // remove padding para preencher tudo
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
          gap: '32px', // gap exato do Figma
          padding: screenSize === 'mobile' ? '40px 20px 100px 20px' : '96px 56px 100px 56px', // padding com espaço para footer fixo
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
            gap: '32px' // gap entre título e cards
          }}
        >
          {/* Sub-container para alinhamento à esquerda */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start', // alinha título e cards à esquerda entre si
              width: 'auto', // largura automática baseada no conteúdo
              gap: '32px' // gap entre título e cards
            }}
          >
            {/* Título da Seção */}
            <h1
              style={{
                fontFamily: 'Sora',
                fontWeight: 400, // weight exato do Figma
                fontSize: '20px', // tamanho exato do Figma
                lineHeight: '1.5em', // lineHeight exato do Figma
                color: '#FFFFFF', // cor exata do Figma
                margin: 0,
                textAlign: 'left', // alinhado à esquerda
                width: 'auto' // largura automática
              }}
            >
              Selecione abaixo a área de estudo que você deseja estudar:
            </h1>

          {/* Grid de Cards de Área */}
          <div
            style={{
              display: 'flex',
              flexDirection: screenSize === 'mobile' ? 'column' : 'row', // responsivo
              justifyContent: 'flex-start', // alinha à esquerda
              alignItems: 'stretch', // altura uniforme
              gap: screenSize === 'mobile' ? '16px' : '8px', // gap responsivo
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