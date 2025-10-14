import React from 'react';

interface SprintHeaderProps {
  title: string;
  objective: string;
  imageUrl?: string;
}

export const SprintHeader: React.FC<SprintHeaderProps> = ({ title, objective, imageUrl }) => {
  return (
    <div className="flex items-center w-full" style={{ gap: '12px' }}>
      <div className="flex flex-col flex-1 min-w-0" style={{ gap: '6px' }}>
        <span
          style={{
            fontFamily: 'Sora',
            fontWeight: 600,
            fontSize: '16px',
            lineHeight: '1.5em',
            color: '#ECECED',
            whiteSpace: 'nowrap',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
          }}
        >
          {title}
        </span>
        <div className="flex items-center gap-1.5">
          <span
            style={{
              fontFamily: 'Sora',
              fontWeight: 400,
              fontSize: '12px',
              lineHeight: '1.5em',
              color: '#FFFFFF',
            }}
          >
            Objetivo:
          </span>
          <span
            style={{
              fontFamily: 'Sora',
              fontWeight: 600,
              fontSize: '12px',
              lineHeight: '1.5em',
              color: '#F48E2F',
            }}
          >
            {objective}
          </span>
        </div>
      </div>
      
      {/* Imagem placeholder */}
      <div
        className="flex-shrink-0 rounded-lg overflow-hidden"
        style={{
          width: '56px',
          height: '56px',
          borderRadius: '8px',
        }}
      >
        {imageUrl ? (
          <img
            src={imageUrl}
            alt="Sprint"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              objectPosition: 'center',
            }}
          />
        ) : (
          <div
            style={{
              width: '100%',
              height: '100%',
              background: 'linear-gradient(180deg, #D9D9D9 0%, #D9D9D9 100%)',
            }}
          />
        )}
      </div>
    </div>
  );
};
