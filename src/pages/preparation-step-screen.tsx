// preparation-step-screen.tsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import { ProfileLayout, PreparationSelectionContent } from '@/components/profile-setup';
import { useProfileSetup } from '@/contexts/profile-setup-context';

export const PreparationStepScreen = () => {
  const navigate = useNavigate();
  const { state, updatePreparationData } = useProfileSetup();
  const [screenSize, setScreenSize] = useState<'mobile' | 'tablet' | 'notebook' | 'desktop'>('desktop');
  
  // Usar dados do contexto ou valores padrão
  const [selectedPreparationType, setSelectedPreparationType] = useState<string>(
    state.preparationData?.selectedPreparationType || 'pre-edital'
  );
  const [temConcursoEspecifico, setTemConcursoEspecifico] = useState<string>(
    state.preparationData?.temConcursoEspecifico || 'sim'
  );
  const [concursoEspecifico, setConcursoEspecifico] = useState<string>(
    state.preparationData?.concursoEspecifico || ''
  );

  // Detectar tamanho da tela para passar aos componentes
  React.useEffect(() => {
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

  const handleBackToStep1 = () => {
    // Salvar dados antes de voltar
    updatePreparationData({
      selectedPreparationType,
      temConcursoEspecifico,
      concursoEspecifico
    });
    navigate('/profile-setup');
  };

  const handleNextStep = () => {
    if (selectedPreparationType) {
      // Salvar dados antes de avançar
      updatePreparationData({
        selectedPreparationType,
        temConcursoEspecifico,
        concursoEspecifico
      });
      // Navegar para a etapa 3 - Disponibilidade
      navigate('/profile-setup/availability');
    }
  };

  const preparationData = {
    selectedPreparationType,
    temConcursoEspecifico,
    concursoEspecifico
  };

  const handlePreparationDataChange = (data: Partial<typeof preparationData>) => {
    if (data.selectedPreparationType !== undefined) {
      setSelectedPreparationType(data.selectedPreparationType);
    }
    if (data.temConcursoEspecifico !== undefined) {
      setTemConcursoEspecifico(data.temConcursoEspecifico);
    }
    if (data.concursoEspecifico !== undefined) {
      setConcursoEspecifico(data.concursoEspecifico);
    }
  };

  return (
    <ProfileLayout
      currentStep={2}
      totalSteps={6}
      stepTitle="Preparação"
      backButtonText="Voltar a etapa 1"
      nextButtonText="Prosseguir para etapa 3"
      canProceed={!!selectedPreparationType}
      onBack={handleBackToStep1}
      onNext={handleNextStep}
    >
      {(screenSize) => (
        <PreparationSelectionContent
          preparationData={preparationData}
          onPreparationDataChange={handlePreparationDataChange}
          screenSize={screenSize}
          showTitles={true}
        />
      )}
    </ProfileLayout>
  );
};

export default PreparationStepScreen;
