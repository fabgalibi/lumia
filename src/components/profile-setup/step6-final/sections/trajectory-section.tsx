import React from 'react';
import { InfoCard } from '../info-card';
import { TrajectoryIcon } from '../section-icons';
import { getTrajectoryStudyTimeName, getWorkStatusName } from '../data-helpers';

interface TrajectorySectionProps {
  trajectoryData?: {
    studyTime: string;
    isWorking: string;
  };
  onEdit: () => void;
}

export const TrajectorySection: React.FC<TrajectorySectionProps> = ({
  trajectoryData,
  onEdit
}) => {
  return (
    <InfoCard
      icon={<TrajectoryIcon />}
      title="Trajetória"
      onEdit={onEdit}
    >
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          alignSelf: 'stretch',
          gap: '16px'
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            alignSelf: 'stretch',
            gap: '8px'
          }}
        >
          <span
            style={{
              fontFamily: 'Sora',
              fontWeight: 400,
              fontSize: '18px',
              lineHeight: '1.56em',
              color: '#FFFFFF'
            }}
          >
            Data de nascimento
          </span>
          <span
            style={{
              fontFamily: 'Sora',
              fontWeight: 600,
              fontSize: '18px',
              lineHeight: '1.56em',
              color: '#FFFFFF'
            }}
          >
            30/09/2005
          </span>
        </div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            alignSelf: 'stretch',
            gap: '8px'
          }}
        >
          <span
            style={{
              fontFamily: 'Sora',
              fontWeight: 400,
              fontSize: '18px',
              lineHeight: '1.56em',
              color: '#FFFFFF'
            }}
          >
            Formação
          </span>
          <span
            style={{
              fontFamily: 'Sora',
              fontWeight: 600,
              fontSize: '18px',
              lineHeight: '1.56em',
              color: '#FFFFFF'
            }}
          >
            Ensino Superior (Incompleto)
          </span>
        </div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            alignSelf: 'stretch',
            gap: '8px'
          }}
        >
          <span
            style={{
              fontFamily: 'Sora',
              fontWeight: 400,
              fontSize: '18px',
              lineHeight: '1.56em',
              color: '#FFFFFF'
            }}
          >
            Tempo de estudo
          </span>
          <span
            style={{
              fontFamily: 'Sora',
              fontWeight: 600,
              fontSize: '18px',
              lineHeight: '1.56em',
              color: '#FFFFFF'
            }}
          >
            {getTrajectoryStudyTimeName(trajectoryData?.studyTime || '2-to-4')}
          </span>
        </div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            alignSelf: 'stretch',
            gap: '8px'
          }}
        >
          <span
            style={{
              fontFamily: 'Sora',
              fontWeight: 400,
              fontSize: '18px',
              lineHeight: '1.56em',
              color: '#FFFFFF'
            }}
          >
            Trabalha atualmente?
          </span>
          <span
            style={{
              fontFamily: 'Sora',
              fontWeight: 600,
              fontSize: '18px',
              lineHeight: '1.56em',
              color: '#FFFFFF'
            }}
          >
            {getWorkStatusName(trajectoryData?.isWorking || 'yes')}
          </span>
        </div>
      </div>
    </InfoCard>
  );
};
