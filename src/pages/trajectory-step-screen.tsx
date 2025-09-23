// trajectory-step-screen.tsx
import React, { useState } from 'react';
import { ProfileLayout, TrajectoryStudyCard } from '@/components/profile-setup';
import { useNavigate } from 'react-router-dom';
import { useProfileSetup } from '@/contexts/profile-setup-context';

export const TrajectoryStepScreen = () => {
  const navigate = useNavigate();
  const { state, updateTrajectoryData } = useProfileSetup();
  
  // Usar dados do contexto ou valores padrão
  const [studyTime, setStudyTime] = useState<string>(
    state.trajectoryData?.studyTime || 'ouro'
  );
  const [isWorking, setIsWorking] = useState<string>(
    state.trajectoryData?.isWorking || 'sim'
  );
  // Removido windowWidth - usando screenSize do ProfileLayout

  // Dados dos cards de tempo de estudo conforme Figma
  const studyTimeOptions = [
    {
      id: 'ferro',
      title: 'Ferro',
      description: 'Equivalente a menos de 6 meses.',
      imageSrc: '/images/ferro-icon-50f6c9.png'
    },
    {
      id: 'bronze',
      title: 'Bronze',
      description: 'Equivalente a 6 meses e 1 ano.',
      imageSrc: '/images/bronze-icon-232655.png'
    },
    {
      id: 'prata',
      title: 'Prata',
      description: 'Equivalente a 1 e 2 anos e meio.',
      imageSrc: '/images/prata-icon-213155.png'
    },
    {
      id: 'ouro',
      title: 'Ouro',
      description: 'Equivalente a 2 anos e meio e 4 anos.',
      imageSrc: '/images/ouro-icon-593712.png'
    },
    {
      id: 'diamante',
      title: 'Diamante',
      description: 'Equivalente a mais de 4 anos.',
      imageSrc: '/images/diamante-icon-6be228.png'
    }
  ];

  // Handlers de navegação
  const handleBackToStep3 = () => {
    // Salvar dados antes de voltar
    updateTrajectoryData({
      studyTime,
      isWorking
    });
    navigate('/profile-setup/availability');
  };

  const handleNextStep = () => {
    // Salvar dados antes de avançar
    updateTrajectoryData({
      studyTime,
      isWorking
    });
    navigate('/profile-setup/knowledge');
  };

  // Verificar se pode prosseguir
  const canProceed = Boolean(studyTime && isWorking);

  return (
    <ProfileLayout
      currentStep={4}
      totalSteps={6}
      stepTitle="Trajetória"
      backButtonText="Voltar a etapa 3"
      nextButtonText="Prosseguir para etapa 5"
      canProceed={canProceed}
      onBack={handleBackToStep3}
      onNext={handleNextStep}
    >
      {(screenSize) => (
        <>
          {/* Primeira Seção - Tempo de Estudo */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignSelf: 'stretch',
          gap: '32px',
          width: '100%'
        }}
      >
        {/* Título */}
        <h2
          style={{
            fontFamily: 'Sora',
            fontWeight: 400,
            fontStyle: 'Regular',
            fontSize: '20px', // Font size/text-xl
            lineHeight: '1.5em', // Line height/text-xl
            letterSpacing: '0%',
            color: '#FFFFFF',
            margin: 0,
            textAlign: 'left'
          }}
        >
          Há quanto tempo você está estudando?
        </h2>

        {/* Cards de Tempo de Estudo */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '8px',
            width: '100%',
            justifyContent: 'start' // alinha cards à esquerda
          }}
        >
          {studyTimeOptions.map((option) => (
            <TrajectoryStudyCard
              key={option.id}
              id={option.id}
              title={option.title}
              description={option.description}
              imageSrc={option.imageSrc}
              isSelected={studyTime === option.id}
              onClick={() => setStudyTime(option.id)}
              screenSize={screenSize}
            />
          ))}
        </div>
      </div>

      {/* Segunda Seção - Status de Trabalho */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignSelf: 'stretch',
          gap: '32px',
          width: '100%'
        }}
      >
        {/* Título */}
        <h2
          style={{
            fontFamily: 'Sora',
            fontWeight: 400,
            fontStyle: 'Regular',
            fontSize: screenSize === 'mobile' ? '16px' : '20px', // mobile: text-md, desktop: text-xl
            lineHeight: '1.5em',
            letterSpacing: '0%',
            color: '#FFFFFF',
            margin: 0,
            textAlign: 'left'
          }}
        >
          Você está trabalhando atualmente?
        </h2>

        {/* Radio Buttons */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            gap: '16px',
            width: '100%'
          }}
        >
          {/* Opção Sim */}
          <div
            onClick={() => setIsWorking('sim')}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              padding: '16px',
              background: '#252532',
              border: isWorking === 'sim' ? '2px solid #F66649' : '1px solid #2C2C45',
              borderRadius: '12px',
              cursor: 'pointer',
              width: screenSize === 'mobile' ? 'auto' : '171.5px',
              flex: screenSize === 'mobile' ? 1 : 'none',
              transition: 'all 0.3s ease'
            }}
          >
            <div
              style={{
                width: '16px',
                height: '16px',
                borderRadius: '50%',
                border: isWorking === 'sim' ? 'none' : '1px solid #373A41',
                background: isWorking === 'sim' ? '#F66649' : 'transparent',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              {isWorking === 'sim' && (
                <svg width="6.67" height="4.58" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8.33333 2.5L3.75 7.08333L1.66667 5" stroke="#FFFFFF" strokeWidth="1.67" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              )}
            </div>
            <span
              style={{
                fontFamily: 'Sora',
                fontWeight: 400,
                fontSize: '14px',
                lineHeight: '1.4285714285714286em',
                color: '#CECFD2',
                flex: 1
              }}
            >
              Sim
            </span>
          </div>

          {/* Opção Não */}
          <div
            onClick={() => setIsWorking('nao')}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              padding: '16px',
              background: '#252532',
              border: isWorking === 'nao' ? '2px solid #F66649' : '1px solid #2C2C45',
              borderRadius: '12px',
              cursor: 'pointer',
              width: screenSize === 'mobile' ? 'auto' : '171.5px',
              flex: screenSize === 'mobile' ? 1 : 'none',
              transition: 'all 0.3s ease'
            }}
          >
            <div
              style={{
                width: '16px',
                height: '16px',
                borderRadius: '50%',
                border: isWorking === 'nao' ? 'none' : '1px solid #373A41',
                background: isWorking === 'nao' ? '#F66649' : 'transparent',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              {isWorking === 'nao' && (
                <svg width="6.67" height="4.58" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8.33333 2.5L3.75 7.08333L1.66667 5" stroke="#FFFFFF" strokeWidth="1.67" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              )}
            </div>
            <span
              style={{
                fontFamily: 'Sora',
                fontWeight: 400,
                fontSize: '14px',
                lineHeight: '1.4285714285714286em',
                color: '#CECFD2',
                flex: 1
              }}
            >
              Não
            </span>
          </div>
        </div>
          </div>
        </>
      )}
    </ProfileLayout>
  );
};

export default TrajectoryStepScreen;
