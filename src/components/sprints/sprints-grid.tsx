import React from 'react';
import { SprintCard } from './sprint-card';
import { Sprint } from '@/types/sprint-page';

interface SprintsGridProps {
  sprints: Sprint[];
}

export const SprintsGrid: React.FC<SprintsGridProps> = ({ sprints }) => {
  return (
    <div 
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, 361.33px)',
        gap: '16px 16px',
        justifyContent: 'start',
      }}
    >
      {sprints.map(sprint => (
        <SprintCard key={sprint.id} sprint={sprint} />
      ))}
    </div>
  );
};

