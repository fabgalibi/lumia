import { useState, useEffect } from "react";

interface TimerProps {
  initialTime?: string;
  onTimeChange?: (time: string) => void;
  showControls?: boolean;
  className?: string;
  style?: React.CSSProperties;
}

export const Timer: React.FC<TimerProps> = ({ 
  initialTime = "00:00:00", 
  onTimeChange,
  showControls = true,
  className = "",
  style = {}
}) => {
  const [time, setTime] = useState(initialTime);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isRunning) {
      interval = setInterval(() => {
        setTime(prev => {
          const [hours, minutes, seconds] = prev.split(':').map(Number);
          let totalSeconds = hours * 3600 + minutes * 60 + seconds + 1;
          
          const newHours = Math.floor(totalSeconds / 3600);
          const newMinutes = Math.floor((totalSeconds % 3600) / 60);
          const newSeconds = totalSeconds % 60;
          
          const newTime = `${newHours.toString().padStart(2, '0')}:${newMinutes.toString().padStart(2, '0')}:${newSeconds.toString().padStart(2, '0')}`;
          
          if (onTimeChange) {
            onTimeChange(newTime);
          }
          
          return newTime;
        });
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isRunning, onTimeChange]);

  const toggleTimer = () => {
    setIsRunning(!isRunning);
  };

  const resetTimer = () => {
    setTime(initialTime);
    setIsRunning(false);
  };

  return (
    <div className={`flex items-center gap-4 ${className}`} style={style}>
      {/* Display do tempo */}
      <div
        className="flex items-center gap-2"
        style={{
          background: '#2D2D45',
          border: 'none',
          borderRadius: '64px',
          padding: '8px 12px',
          boxShadow: '0px 1px 2px 0px rgba(10, 13, 18, 0.05), inset 0px -2px 0px 0px rgba(10, 13, 18, 0.05), inset 0px 0px 0px 1px rgba(10, 13, 18, 0.18)',
          minWidth: 'fit-content'
        }}
      >
        {/* Ícone do relógio */}
        <div className="w-6 h-6 flex items-center justify-center">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10 4.5V10L14 12M19 10C19 15.5228 15.5228 19 10 19C4.47715 19 1 15.5228 1 10C1 4.47715 4.47715 1 10 1C15.5228 1 19 4.47715 19 10Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
        <span
          style={{
            fontFamily: 'Sora',
            fontWeight: 600,
            fontSize: '14px',
            lineHeight: '1.4285714285714286em',
            color: '#FFFFFF'
          }}
        >
          {time}
        </span>
      </div>

      {/* Botões de controle */}
      {showControls && (
        <div className="flex items-center gap-3">
          {/* Botão Play/Pause */}
          <button
            onClick={toggleTimer}
            className="relative overflow-hidden hover:opacity-80 transition-all duration-200 cursor-pointer"
            style={{
              width: '40px',
              height: '40px',
              background: 'linear-gradient(180deg, rgba(65, 60, 122, 1) 40%, rgba(45, 45, 69, 1) 100%)',
              borderRadius: '50%',
              border: 'none',
              boxShadow: '0px 1px 2px 0px rgba(0, 0, 0, 0.2)'
            }}
          >
            {/* Camada interna */}
            <div 
              className="absolute inset-0 rounded-full"
              style={{
                background: 'linear-gradient(180deg, rgba(45, 45, 69, 1) 0%, rgba(45, 45, 69, 1) 100%)',
                boxShadow: 'inset 0px 1px 1px 0px rgba(0, 0, 0, 0.1)',
                margin: '3.33px'
              }}
            ></div>
            {/* Camada mais interna */}
            <div 
              className="absolute inset-0 rounded-full"
              style={{
                background: 'linear-gradient(180deg, rgba(45, 45, 69, 1) 0%, rgba(45, 45, 69, 1) 100%)',
                boxShadow: '0px 1px 1px 0px rgba(0, 0, 0, 0.2)',
                margin: '4.44px'
              }}
            ></div>
            {/* Ícone */}
            <div className="relative z-10 flex items-center justify-center h-full">
              {isRunning ? (
                <div className="flex items-center justify-center" style={{ gap: '4px' }}>
                  {/* Primeira barra do pause */}
                  <div
                    style={{
                      width: '4.44px',
                      height: '13.33px',
                      background: 'linear-gradient(180deg, rgba(255, 255, 255, 1) 0%, rgba(206, 206, 206, 1) 100%)',
                      borderRadius: '0.3125px',
                      boxShadow: 'inset 0px 0.3125px 0.3125px 0px rgba(0, 0, 0, 0.5)'
                    }}
                  ></div>
                  {/* Segunda barra do pause */}
                  <div
                    style={{
                      width: '4.44px',
                      height: '13.33px',
                      background: 'linear-gradient(180deg, rgba(255, 255, 255, 1) 0%, rgba(206, 206, 206, 1) 100%)',
                      borderRadius: '0.3125px',
                      boxShadow: 'inset 0px 0.3125px 0.3125px 0px rgba(0, 0, 0, 0.5)'
                    }}
                  ></div>
                </div>
              ) : (
                <svg width="12" height="14" viewBox="0 0 12 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1.5 0.2L11.5 6.2C12.2 6.6 12.2 7.4 11.5 7.8L1.5 13.8C0.8 14.2 0 13.7 0 12.8V1.2C0 0.3 0.8 -0.2 1.5 0.2Z" fill="url(#paint0_linear_play)"/>
                  <defs>
                    <linearGradient id="paint0_linear_play" x1="6" y1="0" x2="6" y2="14" gradientUnits="userSpaceOnUse">
                      <stop stopColor="white"/>
                      <stop offset="1" stopColor="#CECECE"/>
                    </linearGradient>
                  </defs>
                </svg>
              )}
            </div>
          </button>
          
          {/* Botão Stop */}
          <button
            onClick={resetTimer}
            className={`relative overflow-hidden hover:opacity-80 transition-all duration-200 cursor-pointer ${!isRunning && time === initialTime ? "opacity-50" : "opacity-100"}`}
            style={{
              width: '40px',
              height: '40px',
              background: 'linear-gradient(180deg, rgba(65, 60, 122, 1) 40%, rgba(45, 45, 69, 1) 100%)',
              borderRadius: '50%',
              border: 'none',
              boxShadow: '0px 0.3125px 0.625px 0px rgba(0, 0, 0, 0.2)'
            }}
          >
            {/* Camada interna */}
            <div 
              className="absolute inset-0 rounded-full"
              style={{
                background: 'linear-gradient(180deg, rgba(45, 45, 69, 1) 0%, rgba(45, 45, 69, 1) 100%)',
                boxShadow: 'inset 0px 0.3125px 0.3125px 0px rgba(0, 0, 0, 0.1)',
                margin: '3.33px'
              }}
            ></div>
            {/* Camada mais interna */}
            <div 
              className="absolute inset-0 rounded-full"
              style={{
                background: 'linear-gradient(180deg, rgba(45, 45, 69, 1) 0%, rgba(45, 45, 69, 1) 100%)',
                boxShadow: '0px 0.3125px 0.3125px 0px rgba(0, 0, 0, 0.2)',
                margin: '4.44px'
              }}
            ></div>
            {/* Ícone */}
            <div className="relative z-10 flex items-center justify-center h-full">
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="1" y="1" width="10" height="10" rx="1" fill="url(#paint0_linear_stop)"/>
                <defs>
                  <linearGradient id="paint0_linear_stop" x1="6" y1="0" x2="6" y2="12" gradientUnits="userSpaceOnUse">
                    <stop stopColor="white"/>
                    <stop offset="1" stopColor="#CECECE"/>
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </button>
        </div>
      )}
    </div>
  );
};
