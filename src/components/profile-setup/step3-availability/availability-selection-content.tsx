import React from 'react';
import StudyTimeCard from './study-time-card';
import StartDateCard from './start-date-card';
import { ScreenSize } from '@/components/ui/design-system';

interface AvailabilityData {
  selectedStudyTime: string;
  selectedStartDate: string;
  selectedDate?: Date;
}

interface AvailabilitySelectionContentProps {
  availabilityData: AvailabilityData;
  onAvailabilityDataChange: (data: Partial<AvailabilityData>) => void;
  screenSize: ScreenSize;
  showTitles?: boolean;
  showStartDateSection?: boolean;
}

// Dados dos tempos de estudo conforme Figma (dados originais do profile-setup)
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

// Dados das opções de início conforme Figma (dados originais do profile-setup)
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

export const AvailabilitySelectionContent: React.FC<AvailabilitySelectionContentProps> = ({
  availabilityData,
  onAvailabilityDataChange,
  screenSize,
  showTitles = true,
  showStartDateSection = true
}) => {
  const { selectedStudyTime, selectedStartDate } = availabilityData;

  const handleStudyTimeChange = (timeId: string) => {
    onAvailabilityDataChange({ selectedStudyTime: timeId });
  };

  const handleStartDateChange = (dateId: string) => {
    onAvailabilityDataChange({ selectedStartDate: dateId });
  };

  return (
    <>
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
        {showTitles && (
          <h1
            style={{
              fontFamily: 'Sora',
              fontWeight: 400,
              fontStyle: 'normal',
              fontSize: '20px',
              lineHeight: '1.5em',
              letterSpacing: '0%',
              color: '#FFFFFF',
              margin: 0,
              textAlign: 'left'
            }}
          >
            Quanto tempo você deseja se dedicar aos estudos?
          </h1>
        )}

        {/* Cards de Tempo de Estudo */}
        <div
          style={{
            display: 'flex',
            flexDirection: screenSize === 'mobile' ? 'column' : 'row',
            justifyContent: screenSize === 'mobile' ? 'center' : 'flex-start',
            alignItems: screenSize === 'mobile' ? 'center' : 'flex-start',
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
              onClick={() => handleStudyTimeChange(option.id)}
              screenSize={screenSize}
            />
          ))}
        </div>
      </div>

      {/* Seção 2 - Data de Início (condicionada pela flag) */}
      {showStartDateSection && (
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
          {showTitles && (
            <h2
              style={{
                fontFamily: 'Sora',
                fontWeight: 400,
                fontStyle: 'normal',
                fontSize: '20px',
                lineHeight: '1.5em',
                letterSpacing: '0%',
                color: '#FFFFFF',
                margin: 0,
                textAlign: 'left'
              }}
            >
              Quando você pretende começar?
            </h2>
          )}

          {/* Cards de Data de Início */}
          <div
            style={{
              display: 'flex',
              flexDirection: screenSize === 'mobile' ? 'column' : 'row',
              justifyContent: screenSize === 'mobile' ? 'center' : 'flex-start',
              alignItems: screenSize === 'mobile' ? 'center' : 'flex-start',
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
                onClick={() => handleStartDateChange(option.id)}
                screenSize={screenSize}
              />
            ))}
          </div>
        </div>
      )}
    </>
  );
};

