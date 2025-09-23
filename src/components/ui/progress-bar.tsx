import React from 'react';
import rocketIcon from "/src/assets/icons/rocket-icon.svg";
import progressBarBg from "/src/assets/images/progress-bar-bg.png";

interface ProgressBarProps {
  percentage: number;
  showRocket?: boolean;
  showLabel?: boolean;
  label?: string;
  labelPosition?: 'left' | 'center' | 'right';
  className?: string;
  height?: string;
  padding?: string;
}

export const ProgressBar: React.FC<ProgressBarProps> = ({
  percentage,
  showRocket = true,
  showLabel = false,
  label = '',
  labelPosition = 'left',
  className = "",
  height = '40px',
  padding = '0 32px'
}) => {
  const getLabelPosition = () => {
    switch (labelPosition) {
      case 'left':
        return `calc(${percentage}% - 180px)`;
      case 'center':
        return `calc(${percentage}% - 50px)`;
      case 'right':
        return `calc(${percentage}% + 20px)`;
      default:
        return `calc(${percentage}% - 180px)`;
    }
  };

  return (
    <div 
      className={`rounded-lg relative overflow-hidden ${className}`}
      style={{
        background: `url(${progressBarBg})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        height,
        display: 'flex',
        alignItems: 'center',
        padding
      }}
    >
      {/* Barra de progresso interna - baseada na porcentagem */}
      <div 
        className="absolute left-0 top-0 h-full"
        style={{
          width: `${percentage}%`,
          background: 'linear-gradient(270deg, rgba(246, 102, 73, 1) 0%, rgba(147, 25, 0, 1) 100%)',
          borderRadius: '8px 40px 40px 8px',
          transition: 'width 0.3s ease-in-out'
        }}
      />
      
      {/* Conteúdo da barra */}
      <div className="relative z-10 flex items-center w-full" style={{ height }}>
        {/* Texto do percentual - posicionado sobre a barra laranja */}
        {showLabel && label && (
          <span 
            className="text-white absolute"
            style={{
              fontFamily: 'Sora',
              fontWeight: 400,
              fontSize: '14px',
              lineHeight: '1.26em',
              left: getLabelPosition(),
              top: '50%',
              transform: 'translateY(-50%)',
              zIndex: 15,
              transition: 'left 0.3s ease-in-out'
            }}
          >
            {label}
          </span>
        )}
        
        {/* Foguete - posicionado na ponta da barra laranja */}
        {showRocket && (
          <div 
            className="flex items-center justify-center"
            style={{
              width: '63.64px',
              height: '63.64px',
              position: 'absolute',
              left: `calc(${percentage}% - 32px)`,
              top: '50%',
              transform: 'translateY(-50%)',
              zIndex: 20,
              transition: 'left 0.3s ease-in-out'
            }}
          >
            <img 
              src={rocketIcon} 
              alt="Foguete"
              style={{
                width: '63.64px',
                height: '63.64px'
              }}
            />
          </div>
        )}
      </div>
    </div>
  );
};
