import React from 'react';
import { InfoCard } from '../info-card-v2';
import { TrajectoryIcon } from '../section-icons';
import { getTrajectoryStudyTimeName, getWorkStatusName } from '../data-helpers';
import { CardContent } from '../card-content';
import { CardQuestionAnswer } from '../card-question-answer';

interface TrajectorySectionProps {
  trajectoryData?: {
    studyTime: string;
    isWorking: string;
  };
  onEdit: () => void;
  screenSize?: 'mobile' | 'tablet' | 'notebook' | 'desktop';
}

export const TrajectorySection: React.FC<TrajectorySectionProps> = ({
  trajectoryData,
  onEdit,
  screenSize = 'desktop'
}) => {
  return (
    <InfoCard
      icon={<TrajectoryIcon />}
      title="Trajetória"
      onEdit={onEdit}
      screenSize={screenSize}
    >
      <CardContent screenSize={screenSize} layout="multiple">
        <CardQuestionAnswer
          question="Data de nascimento"
          answer="30/09/2005"
          screenSize={screenSize}
        />
        <CardQuestionAnswer
          question="Formação"
          answer="Ensino Superior (Incompleto)"
          screenSize={screenSize}
        />
        <CardQuestionAnswer
          question="Tempo de estudo"
          answer={getTrajectoryStudyTimeName(trajectoryData?.studyTime || '2-to-4')}
          screenSize={screenSize}
        />
        <CardQuestionAnswer
          question="Trabalha atualmente?"
          answer={getWorkStatusName(trajectoryData?.isWorking || 'yes')}
          screenSize={screenSize}
        />
      </CardContent>
    </InfoCard>
  );
};
