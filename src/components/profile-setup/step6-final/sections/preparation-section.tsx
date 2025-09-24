import React from 'react';
import { InfoCard } from '../info-card';
import { PreparationIcon } from '../section-icons';
import { getPreparationTypeName } from '../data-helpers';
import { CardContent } from '../card-content';
import { CardQuestionAnswer } from '../card-question-answer';

interface PreparationSectionProps {
  preparationData?: {
    selectedPreparationType: string;
    temConcursoEspecifico: string;
    concursoEspecifico: string;
  };
  onEdit: () => void;
  screenSize?: 'mobile' | 'tablet' | 'notebook' | 'desktop';
}

export const PreparationSection: React.FC<PreparationSectionProps> = ({
  preparationData,
  onEdit,
  screenSize = 'desktop'
}) => {
  return (
    <InfoCard
      icon={<PreparationIcon />}
      title="Preparação"
      onEdit={onEdit}
      screenSize={screenSize}
    >
      <CardContent screenSize={screenSize} layout="multiple">
        <CardQuestionAnswer
          question="Tipo de preparação selecionada"
          answer={getPreparationTypeName(preparationData?.selectedPreparationType || 'pre-edital')}
          screenSize={screenSize}
        />
        <CardQuestionAnswer
          question="Algum concurso específico que gostaria de focar?"
          answer={preparationData?.temConcursoEspecifico === 'yes' ? 'Sim' : 'Não'}
          screenSize={screenSize}
        />
      </CardContent>
    </InfoCard>
  );
};
