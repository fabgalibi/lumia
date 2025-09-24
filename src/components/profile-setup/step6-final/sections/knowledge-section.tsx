import React from 'react';
import { InfoCard } from '../info-card';
import { KnowledgeIcon } from '../section-icons';
import { KnowledgeLevelProgress } from '../knowledge-level-progress';
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
            gap: '8px',
            padding: '0px 24px'
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
                fontSize: '18px',
                lineHeight: '1.56em',
                color: '#FFFFFF'
              }}
            >
              Seu nível geral:
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
            Nível {generalLevel}
          </span>
        </div>
        
        {/* Indicador de nível */}
        <KnowledgeLevelProgress currentLevel={generalLevel} />
      </div>
    </InfoCard>
  );
};
