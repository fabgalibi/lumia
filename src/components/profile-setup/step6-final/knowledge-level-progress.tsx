import React from 'react';
import { ProgressBar } from '../../ui/progress-bar';

interface KnowledgeLevelProgressProps {
  currentLevel: number;
  totalLevels?: number;
  className?: string;
}

const levelData = [
  {
    number: 1,
    text: "Nunca estudei",
    color: "gray"
  },
  {
    number: 2,
    text: "Comecei teoria, mas não terminei",
    color: "gray"
  },
  {
    number: 3,
    text: "Terminei teoria, mas não tenho confiança",
    color: "warning"
  },
  {
    number: 4,
    text: "Só falta aparar as arestas",
    color: "gray"
  }
];

const LevelIcon: React.FC<{ number: number; isActive: boolean }> = ({ number, isActive }) => (
  <div
    style={{
      width: '32px',
      height: '32px',
      borderRadius: '16px',
      position: 'relative'
    }}
  >
    {/* Background with gradient mask */}
    <div
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '32px',
        height: '32px',
        borderRadius: '16px',
        background: 'linear-gradient(180deg, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0) 100%)',
        border: isActive ? '1px solid #93370D' : '1px solid #373A41'
      }}
    />
    
    {/* Background color circle */}
    <div
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '32px',
        height: '32px',
        borderRadius: '16px',
        backgroundColor: isActive ? '#4E1D09' : '#13161B',
        border: isActive ? '1px solid #93370D' : '1px solid #373A41'
      }}
    />
    
    {/* Icon wrapper */}
    <div
      style={{
        position: 'absolute',
        top: '4px',
        left: '4px',
        width: '24px',
        height: '24px',
        borderRadius: '12px',
        backgroundColor: isActive ? '#DC6803' : '#61656C',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      <span
        style={{
          fontFamily: 'Sora',
          fontWeight: 600,
          fontSize: '14px',
          color: '#FFFFFF',
          lineHeight: '1',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: '100%',
          height: '100%'
        }}
      >
        {number}
      </span>
    </div>
  </div>
);

export const KnowledgeLevelProgress: React.FC<KnowledgeLevelProgressProps> = ({
  currentLevel,
  totalLevels = 4,
  className = ""
}) => {
  const percentage = (currentLevel / totalLevels) * 100;

  return (
    <div 
      className={`flex flex-col gap-4 ${className}`}
      style={{
        width: '1296px',
        height: '84px'
      }}
    >
      {/* Progress Bar */}
      <ProgressBar
        percentage={percentage}
        showRocket={true}
        showLabel={false}
        label=""
        height="40px"
        padding="0 32px"
      />

      {/* Level Indicators */}
      <div 
        className="flex justify-between items-center"
        style={{
          padding: '0 24px',
          gap: '74px',
          flexWrap: 'nowrap'
        }}
      >
        {levelData.map((level) => (
          <div
            key={level.number}
            className="flex items-center"
            style={{ 
              gap: '12px',
              width: 'fit-content',
              height: 'fit-content'
            }}
          >
            <LevelIcon 
              number={level.number} 
              isActive={level.number === currentLevel}
            />
            <span
              style={{
                fontFamily: 'Sora',
                fontWeight: 400,
                fontSize: '14px',
                lineHeight: '1.43em',
                color: level.number === currentLevel ? '#F48E2F' : '#FFFFFF',
                whiteSpace: 'nowrap',
                textAlign: 'left'
              }}
            >
              {level.text}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};
