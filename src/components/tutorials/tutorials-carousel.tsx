import React, { useState, useEffect } from 'react';
import { TutorialGridCard } from './tutorial-grid-card';

interface TutorialsCarouselProps {
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

export const TutorialsCarousel: React.FC<TutorialsCarouselProps> = ({
  tutorials,
  onTutorialClick,
  className = ''
}) => {
  const [isMobile, setIsMobile] = useState(false);

  // Detectar se é mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <div className={`w-full ${className}`}>
      {/* Grid de Cards */}
      <div 
        className={isMobile ? 'flex flex-col gap-4' : 'flex flex-wrap gap-6 justify-start'}
        style={{
          width: '100%'
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
            className={isMobile ? 'w-full' : 'w-[265px] flex-shrink-0'}
          />
        ))}
      </div>
    </div>
  );
};
