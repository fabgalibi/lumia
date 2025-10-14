import React from 'react';
import { LockIcon } from './lock-icon';

interface SprintOverlayProps {
  title: string;
}

export const SprintOverlay: React.FC<SprintOverlayProps> = ({ title }) => {
  return (
    <>
      {/* Background overlay com blur */}
      <div
        className="absolute inset-0 rounded-xl"
        style={{
          background: 'rgba(0, 0, 0, 0.55)',
          backdropFilter: 'blur(4px)',
          zIndex: 10,
        }}
      />
      
      {/* Conteúdo do overlay */}
      <div
        className="absolute inset-0 flex flex-col items-center justify-center rounded-xl"
        style={{ zIndex: 11, gap: '7px' }}
      >
        {/* Ícone de cadeado */}
        <LockIcon size={56} />
        
        {/* Título da sprint */}
        <span
          style={{
            fontFamily: 'Sora',
            fontWeight: 600,
            fontSize: '16px',
            lineHeight: '1.5em',
            color: '#ECECED',
            textAlign: 'center',
          }}
        >
          {title}
        </span>
      </div>
    </>
  );
};
