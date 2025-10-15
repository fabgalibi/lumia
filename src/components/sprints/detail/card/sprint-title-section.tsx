import React from 'react';

interface SprintTitleSectionProps {
  title: string;
  objective: string;
  imageUrl?: string;
}

export const SprintTitleSection: React.FC<SprintTitleSectionProps> = ({ title, objective, imageUrl }) => {
  return (
    <div className="flex items-start" style={{ gap: '24px' }}>
      <div className="flex flex-col flex-1" style={{ gap: '12px' }}>
        {/* Title */}
        <h2
          style={{
            fontFamily: 'Sora',
            fontWeight: 600,
            fontSize: '20px',
            lineHeight: '1.5em',
            color: '#FFFFFF',
          }}
        >
          {title}
        </h2>

        {/* Objective Section */}
        <div className="flex items-center" style={{ gap: '6px' }}>
          {/* Target Icon */}
          <span style={{ fontSize: '16px' }}>🎯</span>
          
          <span
            style={{
              fontFamily: 'Sora',
              fontWeight: 400,
              fontSize: '14px',
              lineHeight: '1.43em',
              color: '#FFFFFF',
            }}
          >
            Objetivo:
          </span>
          <span
            style={{
              fontFamily: 'Sora',
              fontWeight: 600,
              fontSize: '14px',
              lineHeight: '1.43em',
              color: '#F48E2F',
            }}
          >
            {objective}
          </span>
        </div>
      </div>
      
      {/* Sprint Image */}
      <div 
        className="flex-shrink-0 rounded-lg overflow-hidden flex items-center justify-center"
        style={{
          width: '160px',
          height: '96px',
          borderRadius: '12px',
          background: '#1e3a8a',
        }}
      >
          <img
            src={"/images/sprint-prf.png"}
            alt="Sprint"
            style={{
              maxWidth: '140px',
              maxHeight: '90px',
              objectFit: 'contain',
              borderRadius: '8px',
            }}
          />
      </div>
    </div>
  );
};
