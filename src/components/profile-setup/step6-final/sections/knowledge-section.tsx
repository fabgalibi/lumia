import React from 'react';
import { InfoCard } from '../info-card';
import { KnowledgeIcon } from '../section-icons';
import { LevelIndicator } from '../level-indicator';
import { calculateGeneralLevel } from '../data-helpers';

interface KnowledgeSectionProps {
  knowledgeData: Record<string, string>;
  onEdit: () => void;
}

export const KnowledgeSection: React.FC<KnowledgeSectionProps> = ({
  knowledgeData,
  onEdit
}) => {
  const generalLevel = calculateGeneralLevel(knowledgeData);

  return (
    <InfoCard
      icon={<KnowledgeIcon />}
      title="Conhecimentos"
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
            Seu nível geral:
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
            Nível {generalLevel}
          </span>
        </div>
        
        {/* Indicador de nível */}
        <LevelIndicator level={generalLevel} />
      </div>
    </InfoCard>
  );
};
