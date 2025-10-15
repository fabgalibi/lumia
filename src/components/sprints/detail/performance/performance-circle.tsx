import React from 'react';

interface PerformanceCircleProps {
  percentage: number;
  size?: number;
  strokeWidth?: number;
  showPercentage?: boolean;
  className?: string;
}

export const PerformanceCircle: React.FC<PerformanceCircleProps> = ({ 
  percentage, 
  size = 40, 
  strokeWidth = 3.75,
  showPercentage = true,
  className = ""
}) => {
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference * (1 - percentage / 100);

  return (
    <div className={`relative ${className}`} style={{ width: size, height: size }}>
      <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
        {/* Background circle */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke="#E9EAEB"
          strokeWidth={strokeWidth}
        />
        {/* Progress circle */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke="#F66649"
          strokeWidth={strokeWidth}
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          transform={`rotate(-90 ${size / 2} ${size / 2})`}
          style={{ transition: 'stroke-dashoffset 0.3s ease' }}
        />
      </svg>
      
      {showPercentage && (
        <div 
          className="absolute inset-0 flex items-center justify-center"
          style={{
            fontFamily: 'Sora',
            fontWeight: 600,
            fontSize: size > 60 ? '18px' : '14px',
            lineHeight: '1.56em',
            color: '#FFFFFF',
          }}
        >
          {percentage}%
        </div>
      )}
    </div>
  );
};
