import React from 'react';
import { InfoCard } from '../info-card';
import { KnowledgeIcon } from '../section-icons';
import { KnowledgeLevelProgress } from '../knowledge-level-progress';
import { calculateGeneralLevel } from '../data-helpers';
import { CardKnowledgeContent } from '../card-knowledge-content';
import { CardKnowledgeItem } from '../card-knowledge-item';

interface KnowledgeSectionProps {
  knowledgeData: Record<string, string>;
  onEdit: () => void;
  screenSize?: 'mobile' | 'tablet' | 'notebook' | 'desktop';
}

const getLevelDescription = (level: number): string => {
  switch(level) {
    case 1: return 'Nunca estudei';
    case 2: return 'Comecei teoria, mas não terminei';
    case 3: return 'Terminei teoria, mas não tenho confiança';
    case 4: return 'Só falta aparar as arestas';
    default: return 'Nunca estudei';
  }
};

export const KnowledgeSection: React.FC<KnowledgeSectionProps> = ({
  knowledgeData,
  onEdit,
  screenSize = 'desktop'
}) => {
  const generalLevel = calculateGeneralLevel(knowledgeData);

  return (
    <InfoCard
      icon={<KnowledgeIcon />}
      title="Conhecimentos"
      onEdit={onEdit}
      screenSize={screenSize}
    >
      <CardKnowledgeContent screenSize={screenSize}>
        <CardKnowledgeItem
          question="Seu nível geral:"
          answer={screenSize === 'mobile' 
            ? `Nível ${generalLevel} (${getLevelDescription(generalLevel)})` 
            : `Nível ${generalLevel}`
          }
          screenSize={screenSize}
        />
        
        {/* Indicador de nível */}
        <KnowledgeLevelProgress 
          currentLevel={generalLevel} 
          screenSize={screenSize}
        />
      </CardKnowledgeContent>
    </InfoCard>
  );
};
