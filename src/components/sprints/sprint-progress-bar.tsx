import React from 'react';

interface SprintProgressBarProps {
  progress: number;
}

export const SprintProgressBar: React.FC<SprintProgressBarProps> = ({ progress }) => {
  return (
    <div className="flex items-center gap-2.5">
      {/* Barra de progresso */}
      <div
        className="relative overflow-hidden"
        style={{
          width: '137px',
          height: '8px',
          background: '#373A41',
          borderRadius: '8px',
        }}
      >
        <div
          className="h-full"
          style={{
            width: `${progress}%`,
            background: progress === 100 ? '#17B26A' : '#F66649',
            borderRadius: progress >= 100 ? '8px' : '8px 40px 40px 8px',
            transition: 'all 0.3s ease',
          }}
        />
      </div>
      
      {/* Porcentagem */}
      <span
        style={{
          fontFamily: 'Sora',
          fontWeight: 400,
          fontSize: '12px',
          lineHeight: '1.5em',
          color: '#CECFD2',
          minWidth: '30px',
        }}
      >
        {progress}%
      </span>
    </div>
  );
};
