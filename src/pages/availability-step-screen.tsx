// availability-step-screen.tsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import { ProfileLayout, StudyTimeCard, StartDateCard, CustomDatePicker } from '@/components/profile-setup';

export const AvailabilityStepScreen = () => {
  const navigate = useNavigate();
  const [screenSize, setScreenSize] = useState<'mobile' | 'tablet' | 'notebook' | 'desktop'>('desktop');
  const [selectedStudyTime, setSelectedStudyTime] = useState<string>('normal'); // "Normal" selecionado por padrão conforme Figma
  const [selectedStartDate, setSelectedStartDate] = useState<string>('data-especifica'); // "Selecionar uma data específica" selecionado conforme Figma
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined); // Data selecionada para o CustomDatePicker

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
    navigate('/profile-setup/preparation');
  };

  const handleNextStep = () => {
    if (selectedStudyTime && selectedStartDate) {
      // Navegar para a próxima etapa
      console.log('Próxima etapa:', { selectedStudyTime, selectedStartDate, selectedDate });
      // navigate('/profile-setup/step4');
    }
  };

  // Dados dos tempos de estudo conforme Figma
  const studyTimeOptions = [
    {
      id: 'facil',
      title: 'Fácil',
      description: 'Equivalente a 20-29 horas semanais.',
      imageSrc: '/images/facil-study-time-359eb5.png'
    },
    {
      id: 'normal',
      title: 'Normal',
      description: 'Equivalente a 30-39 horas semanais.',
      imageSrc: '/images/normal-study-time-748adc.png'
    },
    {
      id: 'dificil',
      title: 'Difícil',
      description: 'Equivalente a 40+ horas semanais.',
      imageSrc: '/images/dificil-study-time-7939eb.png'
    }
  ];

  // Dados das opções de início conforme Figma
  const startDateOptions = [
    {
      id: 'data-especifica',
      title: 'Selecionar uma data específica',
      description: 'Escolha esta opção se deseja indicar uma data exata para começar seus estudos. Dessa forma, conseguimos estruturar seu planejamento de forma mais organizada. O dia escolhido será o ponto de partida para o seu cronograma.',
      imageSrc: '/images/data-especifica.png'
    },
    {
      id: 'iniciar-quanto-antes',
      title: 'Iniciar o quanto antes',
      description: 'Selecione essa opção se deseja começar seus estudos imediatamente. Lembre-se: essa escolha não garante que a meta será liberada antes da data indicada, ela apenas nos informa que você já está pronto para iniciar o quanto antes.',
      imageSrc: '/images/iniciar-quanto-antes-7825a1.png'
    }
  ];

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
      {/* Seção 1 - Tempo de Estudo */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignSelf: 'stretch',
          gap: screenSize === 'mobile' ? '16px' : '32px',
          width: '100%',
          height: 'fit-content'
        }}
      >
        {/* Título */}
        <h1
          style={{
            fontFamily: 'Sora', // font-family: Sora
            fontWeight: 400, // font-weight: 400
            fontStyle: 'normal', // font-style: Regular
            fontSize: '20px', // font-size: text-xl
            lineHeight: '1.5em', // line-height: text-xl
            letterSpacing: '0%', // letter-spacing: 0%
            color: '#FFFFFF',
            margin: 0,
            textAlign: 'left'
          }}
        >
          Quanto tempo você deseja se dedicar aos estudos?
        </h1>

        {/* Cards de Tempo de Estudo */}
        <div
          style={{
            display: 'flex',
            flexDirection: screenSize === 'mobile' ? 'column' : 'row',
            justifyContent: screenSize === 'mobile' ? 'center' : 'stretch', // stretch no desktop conforme Figma
            alignItems: screenSize === 'mobile' ? 'center' : 'stretch', // stretch no desktop conforme Figma
            alignSelf: 'stretch',
            gap: '8px'
          }}
        >
          {studyTimeOptions.map((option) => (
            <StudyTimeCard
              key={option.id}
              id={option.id}
              title={option.title}
              description={option.description}
              imageSrc={option.imageSrc}
              isSelected={selectedStudyTime === option.id}
              onClick={() => setSelectedStudyTime(option.id)}
              screenSize={screenSize}
            />
          ))}
        </div>
      </div>

      {/* Seção 2 - Data de Início */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignSelf: 'stretch',
          gap: screenSize === 'mobile' ? '16px' : '32px',
          width: '100%',
          height: 'auto'
        }}
      >
        {/* Título */}
        <h2
          style={{
            fontFamily: 'Sora', // font-family: Sora
            fontWeight: 400, // font-weight: 400
            fontStyle: 'normal', // font-style: Regular
            fontSize: '20px', // font-size: text-xl
            lineHeight: '1.5em', // line-height: text-xl
            letterSpacing: '0%', // letter-spacing: 0%
            color: '#FFFFFF',
            margin: 0,
            textAlign: 'left'
          }}
        >
          Quando você pretende começar?
        </h2>

        {/* Cards de Data de Início */}
        <div
          style={{
            display: 'flex',
            flexDirection: screenSize === 'mobile' ? 'column' : 'row',
            justifyContent: screenSize === 'mobile' ? 'center' : 'flex-start',
            alignItems: screenSize === 'mobile' ? 'center' : 'center',
            alignSelf: 'stretch',
            gap: '8px'
          }}
        >
          {startDateOptions.map((option) => (
            <StartDateCard
              key={option.id}
              id={option.id}
              title={option.title}
              description={option.description}
              imageSrc={option.imageSrc}
              isSelected={selectedStartDate === option.id}
              onClick={() => setSelectedStartDate(option.id)}
              screenSize={screenSize}
            />
          ))}
        </div>

        {/* Date Picker - Aparece apenas se "Selecionar uma data específica" estiver selecionado */}
        {selectedStartDate === 'data-especifica' && (
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
              gap: '8px',
              width: '328px', // width conforme Figma
              maxWidth: '100%'
            }}
          >
            {/* CustomDatePicker baseado no Figma */}
            <CustomDatePicker
              selectedDate={selectedDate}
              onDateSelect={setSelectedDate}
              screenSize={screenSize}
            />

          </div>
        )}
      </div>
    </ProfileLayout>
  );
};

export default AvailabilityStepScreen;
