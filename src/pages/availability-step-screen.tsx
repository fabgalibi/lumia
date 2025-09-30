// availability-step-screen.tsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import { ProfileLayout, AvailabilitySelectionContent } from '@/components/profile-setup';
import { useProfileSetup } from '@/contexts/profile-setup-context';

export const AvailabilityStepScreen = () => {
  const navigate = useNavigate();
  const { state, updateAvailabilityData } = useProfileSetup();
  const [screenSize, setScreenSize] = useState<'mobile' | 'tablet' | 'notebook' | 'desktop'>('desktop');
  
  // Usar dados do contexto ou valores padrão
  const [selectedStudyTime, setSelectedStudyTime] = useState<string>(
    state.availabilityData?.selectedStudyTime || 'normal'
  );
  const [selectedStartDate, setSelectedStartDate] = useState<string>(
    state.availabilityData?.selectedStartDate || 'data-especifica'
  );
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(
    state.availabilityData?.selectedDate || undefined
  );
  const [isDatePickerModalOpen, setIsDatePickerModalOpen] = useState(false);

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

  const handleBackToStep2 = () => {
    // Salvar dados antes de voltar
    updateAvailabilityData({
      selectedStudyTime,
      selectedStartDate,
      selectedDate
    });
    navigate('/profile-setup/preparation');
  };

  const handleNextStep = () => {
    // Salvar dados antes de avançar
    updateAvailabilityData({
      selectedStudyTime,
      selectedStartDate,
      selectedDate
    });
    navigate('/profile-setup/trajectory');
  };

  const availabilityData = {
    selectedStudyTime,
    selectedStartDate,
    selectedDate
  };

  const handleAvailabilityDataChange = (data: Partial<typeof availabilityData>) => {
    if (data.selectedStudyTime !== undefined) {
      setSelectedStudyTime(data.selectedStudyTime);
    }
    if (data.selectedStartDate !== undefined) {
      setSelectedStartDate(data.selectedStartDate);
    }
    if (data.selectedDate !== undefined) {
      setSelectedDate(data.selectedDate);
    }
  };

  return (
    <ProfileLayout
      currentStep={3}
      totalSteps={6}
      stepTitle="Disponibilidade"
      backButtonText="Voltar a etapa 2"
      nextButtonText="Prosseguir para etapa 4"
      canProceed={!!(selectedStudyTime && selectedStartDate)}
      onBack={handleBackToStep2}
      onNext={handleNextStep}
    >
      {(screenSize) => (
        <AvailabilitySelectionContent
          availabilityData={availabilityData}
          onAvailabilityDataChange={handleAvailabilityDataChange}
          screenSize={screenSize}
          showTitles={true}
          showStartDateSection={true}
        />
      )}
    </ProfileLayout>
  );
};

export default AvailabilityStepScreen;
