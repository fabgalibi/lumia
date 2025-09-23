// profile-setup-screen.tsx
import React from 'react';
import { useNavigate } from 'react-router';
import { ProfileLayout, StudyAreaCard } from '@/components/profile-setup';
import { useProfileSetup } from '@/contexts/profile-setup-context';

export const ProfileSetupScreen = () => {
  const navigate = useNavigate();
  const { state, updateSelectedArea } = useProfileSetup();
  const { selectedArea } = state;

  const handleBackToStart = () => {
    // Salvar dados antes de voltar
    updateSelectedArea(selectedArea);
    navigate('/welcome');
  };

  const handleNextStep = () => {
    if (selectedArea) {
      // Salvar dados antes de avançar
      updateSelectedArea(selectedArea);
      // Navegar para a etapa 2 - Preparação
      navigate('/profile-setup/preparation');
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
    <ProfileLayout
      currentStep={1}
      totalSteps={6}
      stepTitle="Área de Estudo"
      backButtonText="Voltar ao início"
      nextButtonText="Prosseguir para etapa 2"
      canProceed={!!selectedArea}
      onBack={handleBackToStart}
      onNext={handleNextStep}
    >
      {(screenSize) => (
        <>
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
              textAlign: 'left', // sempre left - mais natural para leitura
              width: '100%'
            }}
          >
            Selecione abaixo a área de estudo que você deseja estudar:
          </h1>

          {/* Grid de Cards de Área */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '8px',
              width: '100%',
              justifyContent: 'start' // alinha cards à esquerda
            }}
          >
          {studyAreas.map((area) => (
            <StudyAreaCard
              key={area.id}
              area={area}
              isSelected={selectedArea === area.id}
              onClick={() => updateSelectedArea(area.id)}
              screenSize={screenSize}
            />
          ))}
          </div>
        </>
      )}
    </ProfileLayout>
  );
};

export default ProfileSetupScreen;