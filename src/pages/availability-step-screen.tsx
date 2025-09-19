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
    navigate('/profile-setup/preparation');
  };

  const handleNextStep = () => {
    navigate('/profile-setup/trajectory');
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
              onClick={() => {
                setSelectedStartDate(option.id);
                // Se for o card "Selecionar uma data específica" e for mobile/tablet, abrir modal
                if (option.id === 'data-especifica' && (screenSize === 'mobile' || screenSize === 'tablet')) {
                  setIsDatePickerModalOpen(true);
                }
              }}
              screenSize={screenSize}
            />
          ))}
        </div>

        {/* Date Picker - Desktop: inline, Mobile: modal */}
        {selectedStartDate === 'data-especifica' && screenSize !== 'mobile' && screenSize !== 'tablet' && (
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
            {/* CustomDatePicker inline para desktop */}
            <CustomDatePicker
              selectedDate={selectedDate}
              onDateSelect={setSelectedDate}
              screenSize={screenSize}
            />
          </div>
        )}

        {/* Modal do DatePicker para mobile/tablet */}
        {isDatePickerModalOpen && (screenSize === 'mobile' || screenSize === 'tablet') && (
          <div
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: 'rgba(0, 0, 0, 0.3)', // Fundo levemente escurecido - padrão de modal
              display: 'flex',
              alignItems: 'flex-end',
              justifyContent: 'center',
              zIndex: 1000
            }}
            onClick={() => setIsDatePickerModalOpen(false)}
          >
            <div
              style={{
                width: '100%',
                maxHeight: '70vh',
                background: '#202028',
                borderRadius: '12px 12px 0px 0px',
                display: 'flex',
                flexDirection: 'column'
              }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header do Modal */}
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  padding: '24px 16px 16px',
                  borderBottom: '1.5px solid #272737',
                  background: '#252532'
                }}
              >
                <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                  <span style={{
                    fontFamily: 'Sora',
                    fontWeight: 600,
                    fontSize: '16px',
                    lineHeight: '1.5em',
                    color: '#F7F7F7'
                  }}>
                    Selecionar uma data específica
                  </span>
                  <span style={{
                    fontFamily: 'Sora',
                    fontWeight: 400,
                    fontSize: '12px',
                    lineHeight: '1.5em',
                    color: '#FFFFFF'
                  }}>
                    Datas disponíveis: entre 05 à 17/10/2025
                  </span>
                </div>
                <button
                  onClick={() => setIsDatePickerModalOpen(false)}
                  style={{
                    background: 'transparent',
                    border: 'none',
                    cursor: 'pointer',
                    padding: '12px',
                    borderRadius: '6px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                >
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15 5L5 15M5 5L15 15" stroke="#F0F0F1" strokeWidth="1.67" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              </div>

              {/* Conteúdo do Modal - Calendário */}
              <div style={{ padding: '20px 16px' }}>
                <CustomDatePicker
                  selectedDate={selectedDate}
                  onDateSelect={setSelectedDate}
                  screenSize={screenSize}
                />
              </div>

              {/* Footer do Modal */}
              <div
                style={{
                  borderTop: '1px solid #22262F',
                  padding: '20px 16px 16px',
                  display: 'flex',
                  justifyContent: 'flex-end',
                  alignItems: 'center',
                  gap: '12px'
                }}
              >
                <button
                  onClick={() => setIsDatePickerModalOpen(false)}
                  style={{
                    background: '#2D2D45',
                    border: 'none',
                    borderRadius: '8px',
                    padding: '10px 14px',
                    cursor: 'pointer',
                    fontFamily: 'Sora',
                    fontWeight: 600,
                    fontSize: '14px',
                    lineHeight: '1.4285714285714286em',
                    color: '#CECFD2',
                    transition: 'background-color 0.3s ease',
                    boxShadow: '0px 1px 2px 0px rgba(255, 255, 255, 0), inset 0px -2px 0px 0px rgba(12, 14, 18, 0.05), inset 0px 0px 0px 1px rgba(12, 14, 18, 0.18)',
                    minWidth: 'auto',
                    flex: 1,
                    gap: '4px'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#3D3D55'}
                  onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#2D2D45'}
                >
                  Cancelar
                </button>
                <button
                  onClick={() => setIsDatePickerModalOpen(false)}
                  style={{
                    background: '#C74228',
                    border: '2px solid transparent',
                    borderImage: 'linear-gradient(180deg, rgba(255, 255, 255, 0.12) 0%, rgba(255, 255, 255, 0) 100%) 1',
                    borderRadius: '8px',
                    padding: '10px 14px',
                    cursor: 'pointer',
                    fontFamily: 'Sora',
                    fontWeight: 600,
                    fontSize: '14px',
                    lineHeight: '1.4285714285714286em',
                    color: '#FFFFFF',
                    transition: 'background-color 0.3s ease',
                    boxShadow: '0px 1px 2px 0px rgba(255, 255, 255, 0), inset 0px -2px 0px 0px rgba(12, 14, 18, 0.05), inset 0px 0px 0px 1px rgba(12, 14, 18, 0.18)',
                    minWidth: 'auto',
                    flex: 1,
                    gap: '4px'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#D55238'}
                  onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#C74228'}
                >
                  Aplicar
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </ProfileLayout>
  );
};

export default AvailabilityStepScreen;
