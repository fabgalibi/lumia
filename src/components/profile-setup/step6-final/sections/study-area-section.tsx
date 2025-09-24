import React from 'react';
import { InfoCard } from '../info-card';
import { StudyAreaIcon } from '../section-icons';
import { getAreaName } from '../data-helpers';
import { CardContent } from '../card-content';
import { CardQuestionAnswer } from '../card-question-answer';

interface StudyAreaSectionProps {
  selectedArea: string;
  onEdit: () => void;
  screenSize?: 'mobile' | 'tablet' | 'notebook' | 'desktop';
}

export const StudyAreaSection: React.FC<StudyAreaSectionProps> = ({
  selectedArea,
  onEdit,
  screenSize = 'desktop'
}) => {
  return (
    <InfoCard
      icon={<StudyAreaIcon />}
      title="Área de Estudo"
      onEdit={onEdit}
      screenSize={screenSize}
    >
      <CardContent screenSize={screenSize} layout="single">
        <CardQuestionAnswer
          question="Área de estudo selecionada"
          answer={getAreaName(selectedArea)}
          screenSize={screenSize}
        />
      </CardContent>
    </InfoCard>
  );
};
