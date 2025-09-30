// trajectory-step-screen.tsx
import React, { useState } from 'react';
import { ProfileLayout, TrajectorySelectionContent } from '@/components/profile-setup';
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

  const trajectoryData = {
    studyTime,
    isWorking
  };

  const handleTrajectoryDataChange = (data: Partial<typeof trajectoryData>) => {
    if (data.studyTime !== undefined) {
      setStudyTime(data.studyTime);
    }
    if (data.isWorking !== undefined) {
      setIsWorking(data.isWorking);
    }
  };

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
        <TrajectorySelectionContent
          trajectoryData={trajectoryData}
          onTrajectoryDataChange={handleTrajectoryDataChange}
          screenSize={screenSize}
          showTitles={true}
          showWorkStatusSection={true}
        />
      )}
    </ProfileLayout>
  );
};

export default TrajectoryStepScreen;
