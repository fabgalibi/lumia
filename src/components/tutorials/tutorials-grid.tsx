import React from 'react';
import { TutorialGridCard } from './tutorial-grid-card';

interface TutorialsGridProps {
  tutorials: Array<{
    id: string;
    title: string;
    description?: string;
    thumbnail: string;
    isWatched?: boolean;
    isPrimary?: boolean;
  }>;
  onTutorialClick?: (tutorial: any) => void;
  className?: string;
}

export const TutorialsGrid: React.FC<TutorialsGridProps> = ({
  tutorials,
  onTutorialClick,
  className = ''
}) => {
  return (
    <div 
      className={`${className} overflow-x-auto lg:overflow-visible`}
      style={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        alignSelf: 'stretch',
        flexWrap: 'wrap',
        gap: '24px'
      }}
    >
      <div 
        className="flex gap-6 lg:flex-wrap lg:gap-6"
        style={{
          display: 'flex',
          flexDirection: 'row',
          gap: '24px'
        }}
      >
        {tutorials.map((tutorial) => (
          <TutorialGridCard
            key={tutorial.id}
            id={tutorial.id}
            title={tutorial.title}
            description={tutorial.description || ''}
            thumbnail={tutorial.thumbnail}
            isWatched={tutorial.isWatched}
            isPrimary={tutorial.isPrimary}
            onPlay={() => onTutorialClick?.(tutorial)}
            className="flex-shrink-0 lg:flex-shrink"
          />
        ))}
      </div>
    </div>
  );
};
