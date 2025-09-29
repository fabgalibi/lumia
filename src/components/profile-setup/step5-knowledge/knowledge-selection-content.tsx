import React from 'react';
import { KnowledgeTable, KnowledgeHeader } from './index';
import { ScreenSize } from '@/components/ui/design-system';

interface KnowledgeData {
  [subjectId: string]: 'never' | 'started' | 'finished' | 'polishing';
}

interface SelectedTopics {
  [subjectId: string]: string[];
}

interface KnowledgeSelectionContentProps {
  subjects: Array<{
    id: string;
    name: string;
    description: string;
    topics: Array<{
      id: string;
      name: string;
      selected: boolean;
    }>;
  }>;
  knowledgeData: KnowledgeData;
  selectedTopics?: SelectedTopics;
  onLevelChange: (subjectId: string, level: 'never' | 'started' | 'finished' | 'polishing') => void;
  onSelectSubjects: (subjectId: string, selectedTopics: string[]) => void;
  screenSize: ScreenSize;
  showTitles?: boolean;
}

export const KnowledgeSelectionContent: React.FC<KnowledgeSelectionContentProps> = ({
  subjects,
  knowledgeData,
  selectedTopics = {},
  onLevelChange,
  onSelectSubjects,
  screenSize,
  showTitles = true
}) => {
  return (
    <>
      {/* Header */}
      {showTitles && <KnowledgeHeader screenSize={screenSize} />}
      
      {/* Tabela de Conhecimentos */}
      <KnowledgeTable
        subjects={subjects}
        knowledgeData={knowledgeData}
        selectedTopics={selectedTopics}
        onLevelChange={onLevelChange}
        onSelectSubjects={onSelectSubjects}
        screenSize={screenSize}
      />
    </>
  );
};
