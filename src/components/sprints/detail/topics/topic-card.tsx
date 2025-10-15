import React from 'react';

interface TopicCardProps {
  title: string;
  isCompleted?: boolean;
}

export const TopicCard: React.FC<TopicCardProps> = ({ title, isCompleted = false }) => {
  return (
    <div
      className="flex flex-row"
      style={{
        background: '#20202C',
        border: '1px solid #2C2C45',
        borderRadius: '8px 16px 16px 8px',
        overflow: 'hidden',
      }}
    >
      {/* Left colored bar */}
      <div
        style={{
          width: '8px',
          background: isCompleted ? '#C74228' : '#C74228',
        }}
      />

      {/* Content */}
      <div
        className="flex flex-row justify-between items-center"
        style={{
          flex: 1,
          padding: '20px',
          gap: '24px',
        }}
      >
        {/* Title */}
        <h3
          style={{
            fontFamily: 'Sora',
            fontWeight: 400,
            fontSize: '16px',
            lineHeight: '1.5em',
            color: '#FFFFFF',
            flex: 1,
          }}
        >
          {title}
        </h3>

        {/* Actions */}
        <div className="flex items-center" style={{ gap: '16px' }}>
          {/* Ver detalhes button */}
          <button
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '4px',
              padding: '10px 14px',
              background: '#2D2D45',
              border: 'none',
              borderRadius: '8px',
              cursor: 'pointer',
              boxShadow: '0px 1px 2px 0px rgba(255, 255, 255, 0), inset 0px -2px 0px 0px rgba(12, 14, 18, 0.05), inset 0px 0px 0px 1px rgba(12, 14, 18, 0.18)',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = '#3D3D55';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = '#2D2D45';
            }}
          >
            <span
              style={{
                fontFamily: 'Sora',
                fontWeight: 600,
                fontSize: '14px',
                lineHeight: '1.43em',
                color: '#CECFD2',
              }}
            >
              Ver detalhes
            </span>
          </button>

          {/* Ir para tópico button */}
          <button
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '4px',
              padding: '10px 14px',
              background: isCompleted ? '#562524' : '#C74228',
              border: isCompleted ? '1px solid #C74228' : 'none',
              borderRadius: '8px',
              cursor: 'pointer',
              boxShadow: '0px 1px 2px 0px rgba(255, 255, 255, 0), inset 0px -2px 0px 0px rgba(12, 14, 18, 0.05), inset 0px 0px 0px 1px rgba(12, 14, 18, 0.18)',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = isCompleted ? '#6B2F2E' : '#D55A3A';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = isCompleted ? '#562524' : '#C74228';
            }}
          >
            {/* Search icon */}
            <svg 
              width="16" 
              height="16" 
              viewBox="0 0 16 16" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path 
                d="M7.33333 12.6667C10.2789 12.6667 12.6667 10.2789 12.6667 7.33333C12.6667 4.38781 10.2789 2 7.33333 2C4.38781 2 2 4.38781 2 7.33333C2 10.2789 4.38781 12.6667 7.33333 12.6667Z" 
                stroke={isCompleted ? '#F0F0F1' : '#FFFFFF'} 
                strokeWidth="1.33" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              />
              <path 
                d="M14 14L11.1 11.1" 
                stroke={isCompleted ? '#F0F0F1' : '#FFFFFF'} 
                strokeWidth="1.33" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              />
            </svg>
            <span
              style={{
                fontFamily: 'Sora',
                fontWeight: 600,
                fontSize: '14px',
                lineHeight: '1.43em',
                color: isCompleted ? '#F0F0F1' : '#FFFFFF',
              }}
            >
              Ir para tópico
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};
