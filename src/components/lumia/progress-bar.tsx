import rocketIcon from "/src/assets/icons/rocket-icon.svg";
import progressBarBg from "/src/assets/images/progress-bar-bg.png";

interface ProgressBarProps {
  percentage: number;
  label: string;
  isExpanded?: boolean;
  className?: string;
}

export const ProgressBar = ({ 
  percentage, 
  label, 
  className = "" 
}: ProgressBarProps) => {
  return (
    <div 
      data-progress-bar
      className={`rounded-lg relative overflow-hidden ${className}`}
      style={{
        background: `url(${progressBarBg})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        height: '32px',
        display: 'flex',
        alignItems: 'center',
        padding: '0 16px'
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
      ></div>
      
      {/* Conteúdo da barra */}
      <div className="relative z-10 flex items-center w-full" style={{ height: '32px' }}>
        {/* Texto do percentual - posicionado sobre a barra laranja */}
        <span 
          className="text-white absolute"
          style={{
            fontFamily: 'Sora',
            fontWeight: 400,
            fontSize: '14px',
            lineHeight: '1.26em',
            left: `calc(${percentage}% - 180px)`, // Aumentado o espaço entre o texto e o foguete
            top: '50%',
            transform: 'translateY(-50%)',
            zIndex: 15,
            transition: 'left 0.3s ease-in-out'
          }}
        >
          {label}
        </span>
        
        {/* Foguete - posicionado no final da barra laranja */}
        <div 
          className="flex items-center justify-center"
          style={{
            width: '63.64px',
            height: '63.64px',
            position: 'absolute',
            left: `calc(${percentage}% - 50px)`, // Posiciona o foguete dentro da barra laranja
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
      </div>
    </div>
  );
};
