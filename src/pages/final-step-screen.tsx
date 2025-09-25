import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useProfileSetup } from '@/contexts/profile-setup-context';
import ProfileLayout from '@/components/profile-setup/shared/profile-layout';
import { StudyAreaSection } from '@/components/profile-setup/step6-final/sections/study-area-section';
import { PreparationSection } from '@/components/profile-setup/step6-final/sections/preparation-section';
import { AvailabilitySection } from '@/components/profile-setup/step6-final/sections/availability-section';
import { TrajectorySection } from '@/components/profile-setup/step6-final/sections/trajectory-section';
import { KnowledgeSection } from '@/components/profile-setup/step6-final/sections/knowledge-section';

export const FinalStepScreen: React.FC = () => {
  const navigate = useNavigate();
  const { state } = useProfileSetup();
  const { selectedArea, preparationData, availabilityData, trajectoryData, knowledgeData } = state;

  const handleBackToKnowledge = () => {
    navigate('/profile-setup/knowledge');
  };

  const handleFinish = () => {
    // Aqui você pode salvar todos os dados ou navegar para a próxima tela
    console.log('Dados finais:', state);
    navigate('/conclusion'); // Navegar para a tela de conclusão
  };

  const handleEditArea = () => {
    navigate('/profile-setup');
  };

  const handleEditPreparation = () => {
    navigate('/profile-setup/preparation');
  };

  const handleEditAvailability = () => {
    navigate('/profile-setup/availability');
  };

  const handleEditTrajectory = () => {
    navigate('/profile-setup/trajectory');
  };

  const handleEditKnowledge = () => {
    navigate('/profile-setup/knowledge');
  };

  return (
    <ProfileLayout
      currentStep={6}
      totalSteps={6}
      stepTitle="Revisão de dados"
      backButtonText="Voltar a etapa 5"
      nextButtonText="Tudo certo para começar!"
      canProceed={true}
      onBack={handleBackToKnowledge}
      onNext={handleFinish}
    >
      {(screenSize) => (
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignSelf: 'stretch',
            gap: screenSize === 'mobile' ? '16px' : '40px',
            padding: screenSize === 'mobile' ? '0px' : '32px 56px'
          }}
        >
          {/* Título */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignSelf: 'stretch',
              gap: '32px'
            }}
          >
            <h1
              style={{
                fontFamily: 'Sora',
                fontWeight: 400,
                fontSize: screenSize === 'mobile' ? '16px' : '20px',
                lineHeight: '1.5em',
                color: '#FFFFFF',
                margin: 0
              }}
            >
              Confirme as informações preenchidas por você nas etapas anteriores nos campos abaixo
            </h1>
          </div>

          {/* Cards de informações */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignSelf: 'stretch',
              gap: screenSize === 'mobile' ? '16px' : '24px'
            }}
          >
            {/* Área de Estudo */}
            <StudyAreaSection
              selectedArea={selectedArea}
              onEdit={handleEditArea}
              screenSize={screenSize}
            />

            {/* Preparação */}
            <PreparationSection
              preparationData={preparationData}
              onEdit={handleEditPreparation}
              screenSize={screenSize}
            />

            {/* Disponibilidade */}
            <AvailabilitySection
              availabilityData={availabilityData}
              onEdit={handleEditAvailability}
              screenSize={screenSize}
            />

            {/* Trajetória */}
            <TrajectorySection
              trajectoryData={trajectoryData}
              onEdit={handleEditTrajectory}
              screenSize={screenSize}
            />

            {/* Conhecimentos */}
            <KnowledgeSection
              knowledgeData={knowledgeData}
              onEdit={handleEditKnowledge}
              screenSize={screenSize}
            />
          </div>
        </div>
      )}
    </ProfileLayout>
  );
};