import React, { useState } from 'react';
import { Tabs } from '@/components/ui/design-system/Tabs';
import { TopicCard } from './topic-card';
import { ReviewCard } from './review-card';

interface Topic {
  id: string;
  title: string;
  isCompleted?: boolean;
}

interface Review {
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
  apiGoals = []
}) => {
  const [activeTab, setActiveTab] = useState('topics');

  // Mock reviews data - TODO: Replace with API data
  const mockReviews: Review[] = [
    { id: '1', title: 'Princípios Constitucionais Fundamentais', isCompleted: false },
    { id: '2', title: 'Legislação Previdenciária', isCompleted: true },
    { id: '3', title: 'Instrumentalidade do Serviço Social', isCompleted: true },
    { id: '4', title: 'Serviço social', isCompleted: true },
    { id: '5', title: 'Princípios Constitucionais Fundamentais', isCompleted: true },
    { id: '6', title: 'Perícia Médica', isCompleted: true },
  ];

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
      label: `Lista de revisões (${mockReviews.length})`,
    },
  ];

  const currentItems = activeTab === 'topics' ? finalTopics : mockReviews;

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
        {activeTab === 'topics' ? (
          currentItems.map((topic) => (
            <TopicCard
              key={topic.id}
              title={topic.title}
              isCompleted={topic.isCompleted}
            />
          ))
        ) : (
          currentItems.map((review) => (
            <ReviewCard
              key={review.id}
              title={review.title}
              isCompleted={review.isCompleted}
            />
          ))
        )}
      </div>
    </div>
  );
};
