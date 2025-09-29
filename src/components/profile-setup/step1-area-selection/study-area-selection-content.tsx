import React from 'react';
import StudyAreaCard from './study-area-card';

interface StudyArea {
  id: string;
  title: string;
  description: string;
  image?: string;
  overlayImage?: string;
}

interface StudyAreaSelectionContentProps {
  selectedArea?: string;
  onAreaSelect: (areaId: string) => void;
  screenSize?: 'mobile' | 'tablet' | 'notebook' | 'desktop';
  showTitle?: boolean;
}

// Dados das áreas de estudo (dados originais do profile-setup)
const studyAreas: StudyArea[] = [
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

export const StudyAreaSelectionContent: React.FC<StudyAreaSelectionContentProps> = ({
  selectedArea,
  onAreaSelect,
  screenSize = 'desktop',
  showTitle = true
}) => {
  return (
    <>
      {/* Título da Seção */}
      {showTitle && (
        <h1
          style={{
            fontFamily: 'Sora',
            fontWeight: 400,
            fontStyle: 'normal',
            fontSize: screenSize === 'mobile' ? '16px' : '20px',
            lineHeight: '1.5em',
            letterSpacing: '0%',
            color: '#FFFFFF',
            margin: 0,
            textAlign: 'left',
            width: '100%',
            marginBottom: '24px'
          }}
        >
          Selecione abaixo a área de estudo que você deseja estudar:
        </h1>
      )}

      {/* Grid de Cards de Área */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '8px',
          width: '100%',
          justifyContent: 'start'
        }}
      >
        {studyAreas.map((area) => (
          <StudyAreaCard
            key={area.id}
            area={area}
            isSelected={selectedArea === area.id}
            onClick={() => onAreaSelect(area.id)}
            screenSize={screenSize}
          />
        ))}
      </div>
    </>
  );
};
