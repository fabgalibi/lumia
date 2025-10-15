import React, { useState } from 'react';
import { Tabs } from '@/components/ui/design-system/Tabs';
import { TopicCard } from './topic-card';

interface Topic {
  id: string;
  title: string;
  isCompleted?: boolean;
}

interface SprintTopicsSectionProps {
  topics: Topic[];
  reviews?: Topic[];
}

export const SprintTopicsSection: React.FC<SprintTopicsSectionProps> = ({ 
  topics, 
  reviews = [] 
}) => {
  const [activeTab, setActiveTab] = useState('topics');

  const tabs = [
    {
      id: 'topics',
      label: `Lista de Tópicos (${topics.length})`,
    },
    {
      id: 'reviews',
      label: `Lista de revisões (${reviews.length})`,
    },
  ];

  const currentItems = activeTab === 'topics' ? topics : reviews;

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
