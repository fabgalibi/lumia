import React from 'react';
import { TutorialCardMain } from './tutorial-card-main';

interface TutorialsGridProps {
  tutorials: Array<{
    id: string;
    title: string;
    description?: string;
    thumbnail: string;
    isWatched?: boolean;
    isPrimary?: boolean;
  }>;
  className?: string;
}

export const TutorialsGrid: React.FC<TutorialsGridProps> = ({
  tutorials,
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
          <TutorialCardMain
            key={tutorial.id}
            id={tutorial.id}
            title={tutorial.title}
            description={tutorial.description}
            image={tutorial.thumbnail}
            isWatched={tutorial.isWatched}
            className="flex-shrink-0 lg:flex-shrink"
          />
        ))}
      </div>
    </div>
  );
};
