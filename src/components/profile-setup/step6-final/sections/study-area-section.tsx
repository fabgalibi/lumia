import React from 'react';
import { InfoCard } from '../info-card';
import { StudyAreaIcon } from '../section-icons';
import { getAreaName } from '../data-helpers';

interface StudyAreaSectionProps {
  selectedArea: string;
  onEdit: () => void;
}

export const StudyAreaSection: React.FC<StudyAreaSectionProps> = ({
  selectedArea,
  onEdit
}) => {
  return (
    <InfoCard
      icon={<StudyAreaIcon />}
      title="Área de Estudo"
      onEdit={onEdit}
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
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            gap: '8px'
          }}
        >
          <div
            style={{
              width: '4px',
              height: '4px',
              backgroundColor: '#FFFFFF',
              borderRadius: '1px'
            }}
          />
          <span
            style={{
              fontFamily: 'Sora',
              fontWeight: 400,
              fontStyle: 'Regular',
              fontSize: '18px',
              lineHeight: '1.56em',
              letterSpacing: '0%',
              color: '#ECECED'
            }}
          >
            Área de estudo selecionada
          </span>
        </div>
        <span
          style={{
            fontFamily: 'Sora',
            fontWeight: 600,
            fontSize: '18px',
            lineHeight: '1.56em',
            color: '#FFFFFF'
          }}
        >
          {getAreaName(selectedArea)}
        </span>
      </div>
    </InfoCard>
  );
};
