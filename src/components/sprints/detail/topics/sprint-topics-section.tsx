import React, { useState } from 'react';
import { Tabs } from '@/components/ui/design-system/Tabs';
import { TopicCard } from './topic-card';

interface Topic {
  id: string;
  title: string;
  isCompleted?: boolean;
}

interface ApiGoal {
  idMeta: number;
  nomeDisciplina: string;
}

interface SprintTopicsSectionProps {
  topics?: Topic[];
  reviews?: Topic[];
  apiGoals?: ApiGoal[];
}

export const SprintTopicsSection: React.FC<SprintTopicsSectionProps> = ({ 
  topics = [], 
  reviews = [],
  apiGoals = []
}) => {
  const [activeTab, setActiveTab] = useState('topics');

  // Converter dados da API para o formato esperado
  const apiTopics: Topic[] = apiGoals.map(goal => ({
    id: goal.idMeta.toString(),
    title: goal.nomeDisciplina,
    isCompleted: false // Por enquanto, assumir que não estão completos
  }));

  // Usar dados da API se disponíveis, senão array vazio
  const finalTopics = apiGoals.length > 0 ? apiTopics : [];

  const tabs = [
    {
      id: 'topics',
      label: `Lista de metas (${finalTopics.length})`,
    },
    {
      id: 'reviews',
      label: `Lista de revisões (${reviews.length})`,
    },
  ];

  const currentItems = activeTab === 'topics' ? finalTopics : reviews;

  return (
    <div className="flex flex-col" style={{ gap: '24px' }}>
      {/* Tabs */}
      <Tabs
        tabs={tabs}
        activeTab={activeTab}
        onTabChange={setActiveTab}
        variant="underline"
        size="sm"
      />

      {/* Topics/Reviews List */}
      <div className="flex flex-col" style={{ gap: '16px' }}>
        {currentItems.map((topic) => (
          <TopicCard
            key={topic.id}
            title={topic.title}
            isCompleted={topic.isCompleted}
          />
        ))}
      </div>
    </div>
  );
};
