import React from 'react';
import { InfoCard } from '../info-card';
import { AvailabilityIcon } from '../section-icons';
import { getStudyTimeName, getStartDateName } from '../data-helpers';
import { CardContent } from '../card-content';
import { CardQuestionAnswer } from '../card-question-answer';

interface AvailabilitySectionProps {
  availabilityData?: {
    selectedStudyTime: string;
    selectedStartDate: string;
    selectedDate?: Date;
  };
  onEdit: () => void;
  screenSize?: 'mobile' | 'tablet' | 'notebook' | 'desktop';
}

export const AvailabilitySection: React.FC<AvailabilitySectionProps> = ({
  availabilityData,
  onEdit,
  screenSize = 'desktop'
}) => {
  return (
    <InfoCard
      icon={<AvailabilityIcon />}
      title="Disponibilidade"
      onEdit={onEdit}
      screenSize={screenSize}
    >
      <CardContent screenSize={screenSize} layout="multiple">
        <CardQuestionAnswer
          question="Tempo dedicado aos estudos"
          answer={getStudyTimeName(availabilityData?.selectedStudyTime || 'normal')}
          screenSize={screenSize}
        />
        <CardQuestionAnswer
          question="Quando pretende começar"
          answer={getStartDateName(availabilityData?.selectedStartDate || 'specific')}
          screenSize={screenSize}
        />
      </CardContent>
    </InfoCard>
  );
};
