import React from 'react';
import { SprintCard } from './sprint-card';
import { Sprint } from '@/types/sprint-page';

interface SprintsCarouselProps {
  sprints: Sprint[];
  carouselRef: React.RefObject<HTMLDivElement | null>;
  onScroll: () => void;
}

export const SprintsCarousel: React.FC<SprintsCarouselProps> = ({
  sprints,
  carouselRef,
  onScroll,
}) => {
  return (
    <div 
      ref={carouselRef}
      className="overflow-x-auto scrollbar-hide"
      onScroll={onScroll}
      style={{
        display: 'flex',
        gap: '16px',
        scrollBehavior: 'smooth',
        paddingBottom: '8px',
        marginRight: '-32px',
        paddingRight: '32px',
      }}
    >
      {sprints.map(sprint => (
        <div key={sprint.id} style={{ flexShrink: 0 }}>
          <SprintCard sprint={sprint} />
        </div>
      ))}
    </div>
  );
};

