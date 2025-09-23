import React from 'react';
import { InfoCard } from '../info-card';
import { AvailabilityIcon } from '../section-icons';
import { getStudyTimeName, getStartDateName } from '../data-helpers';

interface AvailabilitySectionProps {
  availabilityData?: {
    selectedStudyTime: string;
    selectedStartDate: string;
    selectedDate?: Date;
  };
  onEdit: () => void;
}

export const AvailabilitySection: React.FC<AvailabilitySectionProps> = ({
  availabilityData,
  onEdit
}) => {
  return (
    <InfoCard
      icon={<AvailabilityIcon />}
      title="Disponibilidade"
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
            Tempo dedicado aos estudos
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
            {getStudyTimeName(availabilityData?.selectedStudyTime || 'normal')}
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
            Quando pretende começar
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
            {getStartDateName(availabilityData?.selectedStartDate || 'specific')}
          </span>
        </div>
      </div>
    </InfoCard>
  );
};
