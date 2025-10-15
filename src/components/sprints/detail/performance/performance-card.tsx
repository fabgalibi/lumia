import React from 'react';
import { PerformanceCircle } from './performance-circle';

interface PerformanceCardProps {
  percentage: number;
  title?: string;
  showLabel?: boolean;
  size?: 'small' | 'medium' | 'large';
}

export const PerformanceCard: React.FC<PerformanceCardProps> = ({ 
  percentage, 
  title = 'Desempenho geral',
  showLabel = true,
  size = 'medium'
}) => {
  const sizeConfig = {
    small: { circleSize: 32, fontSize: '12px', gap: '8px' },
    medium: { circleSize: 32, fontSize: '18px', gap: '8px' },
    large: { circleSize: 60, fontSize: '24px', gap: '16px' }
  };

  const config = sizeConfig[size];

  return (
    <div className="flex flex-col" style={{ gap: '12px', width: 'fit-content' }}>
      {showLabel && (
        <span
          style={{
            fontFamily: 'Sora',
            fontWeight: 400,
            fontSize: '12px',
            lineHeight: '1.5em',
            color: '#FFFFFF',
            textAlign: 'left',
          }}
        >
          {title}
        </span>
      )}
      
      <div className="flex items-center" style={{ gap: config.gap }}>
        <PerformanceCircle 
          percentage={percentage} 
          size={config.circleSize}
          showPercentage={false}
        />
        
        <span
          style={{
            fontFamily: 'Sora',
            fontWeight: 600,
            fontSize: config.fontSize,
            lineHeight: '1.56em',
            color: '#FFFFFF',
            textAlign: 'left',
          }}
        >
          {percentage}%
        </span>
      </div>
    </div>
  );
};
