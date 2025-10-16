import React from 'react';

interface SprintsSectionHeaderProps {
  title: string;
  showControls?: boolean;
  showViewMore?: boolean;
  onViewMore?: () => void;
  onScrollLeft?: () => void;
  onScrollRight?: () => void;
  isAtStart?: boolean;
  isAtEnd?: boolean;
}

export const SprintsSectionHeader: React.FC<SprintsSectionHeaderProps> = ({
  title,
  showControls = false,
  showViewMore = false,
  onViewMore,
  onScrollLeft,
  onScrollRight,
  isAtStart = false,
  isAtEnd = false,
}) => {
  return (
    <div className="flex items-center justify-between w-full gap-4">
      <h2
        style={{
          fontFamily: 'Sora',
          fontWeight: 400,
          fontSize: '18px',
          lineHeight: '1.56em',
          color: '#FFFFFF',
        }}
      >
        {title}
      </h2>
      
      {showControls && (
        <div className="flex items-center" style={{ gap: '16px' }}>
          {/* Link Ver próximas */}
          {showViewMore && onViewMore && (
            <button 
              onClick={onViewMore}
              className="cursor-pointer"
              style={{
                fontFamily: 'Sora',
                fontWeight: 400,
                fontSize: '14px',
                lineHeight: '2em',
                color: '#CECFD2',
                textDecoration: 'underline',
                background: 'transparent',
                border: 'none',
                padding: 0,
              }}
            >
              Ver próximas
            </button>
          )}
          
          {/* Botão esquerda */}
          <button
            onClick={onScrollLeft}
            disabled={isAtStart}
            className="flex items-center justify-center transition-colors"
            style={{
              width: '32px',
              height: '32px',
              background: isAtStart ? '#1A1A25' : '#212130',
              borderRadius: '6px',
              border: 'none',
              cursor: isAtStart ? 'not-allowed' : 'pointer',
              padding: '6px',
              opacity: isAtStart ? 0.5 : 1,
            }}
            onMouseEnter={(e) => {
              if (!isAtStart) {
                e.currentTarget.style.background = '#2A2A3A';
              }
            }}
            onMouseLeave={(e) => {
              if (!isAtStart) {
                e.currentTarget.style.background = '#212130';
              }
            }}
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12.5 15L7.5 10L12.5 5" stroke={isAtStart ? '#5A5A65' : '#94979C'} strokeWidth="1.67" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          
          {/* Botão direita */}
          <button
            onClick={onScrollRight}
            disabled={isAtEnd}
            className="flex items-center justify-center transition-colors"
            style={{
              width: '32px',
              height: '32px',
              background: isAtEnd ? '#25253A' : '#2D2D45',
              borderRadius: '6px',
              border: 'none',
              cursor: isAtEnd ? 'not-allowed' : 'pointer',
              padding: '6px',
              opacity: isAtEnd ? 0.5 : 1,
            }}
            onMouseEnter={(e) => {
              if (!isAtEnd) {
                e.currentTarget.style.background = '#3D3D55';
              }
            }}
            onMouseLeave={(e) => {
              if (!isAtEnd) {
                e.currentTarget.style.background = '#2D2D45';
              }
            }}
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M7.5 5L12.5 10L7.5 15" stroke={isAtEnd ? '#5A5A65' : '#85888E'} strokeWidth="1.67" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
      )}
    </div>
  );
};

