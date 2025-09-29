// profile-setup-screen.tsx
import React from 'react';
import { useNavigate } from 'react-router';
import { ProfileLayout, StudyAreaSelectionContent } from '@/components/profile-setup';
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
        <StudyAreaSelectionContent
          selectedArea={selectedArea}
          onAreaSelect={updateSelectedArea}
          screenSize={screenSize}
          showTitle={true}
        />
      )}
    </ProfileLayout>
  );
};

export default ProfileSetupScreen;