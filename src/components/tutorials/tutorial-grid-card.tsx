import React from 'react';
import { Check } from 'lucide-react';

export interface TutorialGridCardProps {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  isPrimary?: boolean;
  isWatched?: boolean;
  onPlay?: () => void;
  className?: string;
}

export const TutorialGridCard: React.FC<TutorialGridCardProps> = ({
  id,
  title,
  description,
  thumbnail,
  isPrimary = false,
  isWatched = false,
  onPlay,
  className = ''
}) => {
  return (
    <div 
      className={`tutorial-card ${className}`}
      style={{ minHeight: '296px' }}
      onClick={onPlay}
    >
      {/* Thumbnail */}
      <div 
        className="tutorial-card-thumbnail"
        style={{ backgroundImage: `url(${thumbnail})` }}
      >
        {/* Badge de assistido */}
        {isWatched && (
          <div 
            className="absolute top-3 right-3 flex items-center gap-0.5 px-2 py-0.5 bg-[#3B2A1A] border border-[#E98B39] rounded-full"
            style={{
              position: 'absolute',
              top: '12px',
              right: '12px',
              display: 'flex',
              alignItems: 'center',
              gap: '2px',
              padding: '2px 8px 2px 6px',
              background: '#3B2A1A',
              border: '1px solid #E98B39',
              borderRadius: '9999px'
            }}
          >
            <Check 
              className="w-3 h-3 text-[#E98B39]" 
              strokeWidth={1}
              style={{ width: '12px', height: '12px', color: '#E98B39' }}
            />
            <span 
              className="text-xs font-medium text-[#E98B39]"
              style={{
                fontFamily: 'Inter',
                fontWeight: '500',
                fontSize: '12px',
                lineHeight: '1.5em',
                color: '#E98B39'
              }}
            >
              Assistido
            </span>
          </div>
        )}
      </div>
      
      {/* Conteúdo */}
      <div className="tutorial-card-content" style={{ minHeight: '174px' }}>
        {/* Título e descrição */}
        <div className="flex flex-col gap-2 flex-1">
          <h3 className="tutorial-card-title">
            {title}
          </h3>
          
          <p className="tutorial-card-description">
            {description}
          </p>
        </div>
        
        {/* Botão de ação */}
        <button className="tutorial-card-button">
          {isWatched ? 'Assistir novamente' : 'Assistir tutorial'}
        </button>
      </div>
    </div>
  );
};
