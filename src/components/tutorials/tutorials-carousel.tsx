import React, { useState, useEffect } from 'react';
import { TutorialCardMain } from './tutorial-card-main';

interface TutorialsCarouselProps {
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

export const TutorialsCarousel: React.FC<TutorialsCarouselProps> = ({
  tutorials,
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
        style={{
          display: 'grid',
          gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)',
          gap: isMobile ? '16px' : '24px',
          width: '100%',
          padding: isMobile ? '0' : '0'
        }}
      >
        {tutorials.map((tutorial) => (
          <div 
            key={tutorial.id} 
            className={isMobile ? 'w-full' : 'flex justify-center'}
          >
            <TutorialCardMain
              id={tutorial.id}
              title={tutorial.title}
              description={tutorial.description}
              image={tutorial.thumbnail}
              isWatched={tutorial.isWatched}
              className={isMobile ? 'w-full' : ''}
            />
          </div>
        ))}
      </div>
    </div>
  );
};
