import { useState, useEffect } from "react";

export const SidebarTimer: React.FC = () => {
  const [time, setTime] = useState("00:00:00");
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
          
          return `${newHours.toString().padStart(2, '0')}:${newMinutes.toString().padStart(2, '0')}:${newSeconds.toString().padStart(2, '0')}`;
        });
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isRunning]);

  const toggleTimer = () => {
    setIsRunning(!isRunning);
  };

  const resetTimer = () => {
    setTime("00:00:00");
    setIsRunning(false);
  };

  return (
    <div 
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '20px'
      }}
    >
      {/* Top Row - Display Bar */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '8px',
          background: '#2D2D45',
          borderRadius: '40px',
          padding: '8px 8px 8px 12px',
          border: '1px solid rgba(55, 58, 65, 1)',
          boxShadow: '0px 1px 2px 0px rgba(255, 255, 255, 0), inset 0px -2px 0px 0px rgba(12, 14, 18, 0.05), inset 0px 0px 0px 1px rgba(12, 14, 18, 0.18)',
        }}
      >
        {/* Ícone do cronômetro à esquerda */}
        <div style={{ 
          width: '24px', 
          height: '24px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexShrink: 0
        }}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path 
              d="M12 12V16.5L15 18M12 6.5C8.5 6.5 5.5 9.5 5.5 13C5.5 16.5 8.5 19.5 12 19.5C15.5 19.5 18.5 16.5 18.5 13C18.5 9.5 15.5 6.5 12 6.5ZM12 6.5V3M9 3H15M21.75 7.25L20.5 6L21.25 6.75M2.75 7.25L4 6L3.25 6.75" 
              stroke={isRunning ? "#F48E2F" : "#FFFFFF"} 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            />
          </svg>
        </div>
        
        {/* Tempo no centro */}
        <span
          style={{
            fontFamily: 'Sora',
            fontWeight: 600,
            fontSize: '18px',
            lineHeight: '1.56em',
            color: isRunning ? '#F48E2F' : '#FFFFFF',
            textAlign: 'center',
            width: '92px'
          }}
        >
          {time}
        </span>

        {/* Ícone de expandir à direita */}
        <div style={{ 
          width: '20px', 
          height: '20px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexShrink: 0
        }}>
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path 
              d="M7.5 2.5H2.5V7.5M12.5 2.5H17.5V7.5M7.5 12.5H2.5V17.5M12.5 12.5H17.5V17.5" 
              stroke="#CECFD2" 
              strokeWidth="1.67" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>

      {/* Bottom Row - Control Buttons */}
      <div style={{ 
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '12.19px'
      }}>
        {/* Botão Pause */}
        <button
          onClick={toggleTimer}
          className="relative overflow-hidden hover:opacity-80 transition-all duration-200 cursor-pointer"
          style={{
            width: '54px',
            height: '54px',
            background: 'linear-gradient(180deg, rgba(65, 60, 122, 1) 40%, rgba(45, 45, 69, 1) 100%)',
            borderRadius: '50%',
            border: 'none',
            boxShadow: '0px 0.426px 0.852px 0px rgba(0, 0, 0, 0.2)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          {/* Camada interna 1 */}
          <div 
            style={{
              position: 'absolute',
              inset: '4.5px',
              borderRadius: '50%',
              background: 'linear-gradient(180deg, rgba(45, 45, 69, 1) 0%, rgba(45, 45, 69, 1) 100%)',
              boxShadow: 'inset 0px 0.426px 0.426px 0px rgba(0, 0, 0, 0.1)',
            }}
          />
          {/* Camada interna 2 */}
          <div 
            style={{
              position: 'absolute',
              inset: '6px',
              borderRadius: '50%',
              background: 'linear-gradient(180deg, rgba(45, 45, 69, 1) 0%, rgba(45, 45, 69, 1) 100%)',
              boxShadow: '0px 0.426px 0.426px 0px rgba(0, 0, 0, 0.2)',
            }}
          />
          {/* Ícones de pause */}
          <div style={{ 
            position: 'relative',
            zIndex: 10,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '6px',
            height: '100%',
            width: '100%'
          }}>
            <div
              style={{
                width: '6px',
                height: '18px',
                background: 'linear-gradient(180deg, rgba(255, 255, 255, 1) 0%, rgba(206, 206, 206, 1) 100%)',
                borderRadius: '0.426px',
                boxShadow: 'inset 0px 0.426px 0.426px 0px rgba(0, 0, 0, 0.5)',
                marginTop: '1px'
              }}
            />
            <div
              style={{
                width: '6px',
                height: '18px',
                background: 'linear-gradient(180deg, rgba(255, 255, 255, 1) 0%, rgba(206, 206, 206, 1) 100%)',
                borderRadius: '0.426px',
                boxShadow: 'inset 0px 0.426px 0.426px 0px rgba(0, 0, 0, 0.5)',
                marginTop: '1px'
              }}
            />
          </div>
        </button>

        {/* Botão Play */}
        <button
          onClick={toggleTimer}
          className="relative overflow-hidden hover:opacity-80 transition-all duration-200 cursor-pointer"
          style={{
            width: '54px',
            height: '54px',
            background: 'linear-gradient(180deg, rgba(65, 60, 122, 1) 40%, rgba(45, 45, 69, 1) 100%)',
            borderRadius: '50%',
            border: 'none',
            boxShadow: '0px 1.364px 2.727px 0px rgba(0, 0, 0, 0.2)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          {/* Camada interna 1 */}
          <div 
            style={{
              position: 'absolute',
              inset: '4.5px',
              borderRadius: '50%',
              background: 'linear-gradient(180deg, rgba(45, 45, 69, 1) 0%, rgba(45, 45, 69, 1) 100%)',
              boxShadow: 'inset 0px 1.364px 1.364px 0px rgba(0, 0, 0, 0.1)',
            }}
          />
          {/* Camada interna 2 */}
          <div 
            style={{
              position: 'absolute',
              inset: '6px',
              borderRadius: '50%',
              background: 'linear-gradient(180deg, rgba(45, 45, 69, 1) 0%, rgba(45, 45, 69, 1) 100%)',
              boxShadow: '0px 1.364px 1.364px 0px rgba(0, 0, 0, 0.2)',
            }}
          />
          {/* Ícone Play */}
          <div style={{ 
            position: 'relative',
            zIndex: 10,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100%',
            width: '100%'
          }}>
            <svg width="16.52" height="18.78" viewBox="0 0 16.52 18.78" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ marginLeft: '2px' }}>
              <path 
                d="M1.5 0.2L15.02 9.2C15.72 9.6 15.72 10.4 15.02 10.8L1.5 18.8C0.8 19.2 0 18.7 0 17.8V1.2C0 0.3 0.8 -0.2 1.5 0.2Z" 
                fill="url(#paint0_linear_play)"
              />
              <defs>
                <linearGradient id="paint0_linear_play" x1="8.26" y1="0" x2="8.26" y2="18.78" gradientUnits="userSpaceOnUse">
                  <stop stopColor="white"/>
                  <stop offset="1" stopColor="#CECECE"/>
                </linearGradient>
              </defs>
            </svg>
          </div>
        </button>
        
        {/* Botão Stop */}
        <button
          onClick={resetTimer}
          className="relative overflow-hidden hover:opacity-80 transition-all duration-200 cursor-pointer"
          style={{
            width: '54px',
            height: '54px',
            background: 'linear-gradient(180deg, rgba(124, 62, 62, 1) 40%, rgba(95, 56, 56, 1) 100%)',
            borderRadius: '50%',
            border: 'none',
            boxShadow: '0px 1.364px 2.727px 0px rgba(0, 0, 0, 0.2)',
            opacity: (!isRunning && time === "00:00:00") ? 0.4 : 1,
            pointerEvents: (!isRunning && time === "00:00:00") ? 'none' : 'auto',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          {/* Camada interna 1 */}
          <div 
            style={{
              position: 'absolute',
              inset: '4.5px',
              borderRadius: '50%',
              background: 'linear-gradient(180deg, rgba(129, 53, 53, 1) 0%, rgba(129, 53, 53, 1) 100%)',
              boxShadow: 'inset 0px 1.364px 1.364px 0px rgba(0, 0, 0, 0.1)',
            }}
          />
          {/* Camada interna 2 */}
          <div 
            style={{
              position: 'absolute',
              inset: '6px',
              borderRadius: '50%',
              background: 'linear-gradient(180deg, rgba(129, 53, 53, 1) 0%, rgba(129, 53, 53, 1) 100%)',
              boxShadow: '0px 1.364px 1.364px 0px rgba(0, 0, 0, 0.2)',
            }}
          />
          {/* Ícone Stop */}
          <div style={{ 
            position: 'relative',
            zIndex: 10,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100%'
          }}>
            <div style={{
              width: '17.04px',
              height: '17.04px',
              background: 'linear-gradient(180deg, rgba(255, 255, 255, 1) 0%, rgba(206, 206, 206, 1) 100%)',
              borderRadius: '2px'
            }}></div>
          </div>
        </button>
      </div>
    </div>
  );
};