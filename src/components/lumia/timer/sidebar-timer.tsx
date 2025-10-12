import { useTimer } from "@/contexts/timer-context";

interface SidebarTimerProps {
  isCollapsed?: boolean;
}

export const SidebarTimer: React.FC<SidebarTimerProps> = ({ isCollapsed = false }) => {
  const { time, isRunning, startTimer, pauseTimer, stopTimer, openLockScreen } = useTimer();

  // Função para abrir a lock screen quando clicar no ícone de expandir
  const handleExpandClick = () => {
    if (isRunning) {
      openLockScreen();
    }
  };

  // Versão colapsada - apenas o ícone do relógio
  if (isCollapsed) {
    return (
      <div 
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: '32px',
          height: '32px',
          margin: '0 auto'
        }}
      >
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path 
            d="M16 16V21.6L20 23.6M16 8.8C10.4 8.8 6 13.2 6 18.8C6 24.4 10.4 28.8 16 28.8C21.6 28.8 26 24.4 26 18.8C26 13.2 21.6 8.8 16 8.8ZM16 8.8V4M12 4H20M29.2 10L27.2 8L28.4 9.2M3.6 10L5.6 8L4.4 9.2" 
            stroke={isRunning ? "#F48E2F" : "#FFFFFF"} 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          />
        </svg>
      </div>
    );
  }

  // Versão expandida - completa
  return (
    <div 
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '20px',
        width: '100%'
      }}
    >
      {/* Top Row - Display Bar */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '0px',
          background: 'linear-gradient(180deg, rgba(255, 255, 255, 0.12) 0%, rgba(255, 255, 255, 0) 100%)',
          borderRadius: '40px',
          padding: '1px',
          boxShadow: '0px 1px 2px 0px rgba(255, 255, 255, 0), inset 0px -2px 0px 0px rgba(12, 14, 18, 0.05), inset 0px 0px 0px 1px rgba(12, 14, 18, 0.18)',
        }}
      >
        {/* Seção com cronômetro e tempo */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '8px',
          background: '#2D2D45',
          borderRadius: '40px 0 0 40px',
          padding: '8px 8px 8px 12px',
        }}>
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
                d="M10 10V13.5L12.5 14.75M10 5.5C6.5 5.5 3.75 8.25 3.75 11.75C3.75 15.25 6.5 18 10 18C13.5 18 16.25 15.25 16.25 11.75C16.25 8.25 13.5 5.5 10 5.5ZM10 5.5V2.5M7.5 2.5H12.5M18.25 6.25L17 5L17.75 5.75M2.25 6.25L3.5 5L2.75 5.75" 
                stroke={isRunning ? "#F48E2F" : "#FFFFFF"} 
                strokeWidth="1.67" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              />
            </svg>
          </div>
          
          <span
            style={{
              fontFamily: 'Sora',
              fontWeight: 600,
              fontSize: '18px',
              lineHeight: '1.556em',
              color: isRunning ? '#F48E2F' : '#FFFFFF',
              textAlign: 'center',
              width: '92px'
            }}
          >
            {time}
          </span>
        </div>

        {/* Divisória */}
        <div style={{
          width: '1px',
          height: '44px',
          background: '#373A41'
        }} />

        {/* Seção com ícone de expandir */}
        <button
          onClick={handleExpandClick}
          disabled={!isRunning}
          className="hover:opacity-80 transition-opacity duration-200"
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: '#2D2D45',
            borderRadius: '0 40px 40px 0',
            padding: '12px 16px 12px 12px',
            border: 'none',
            cursor: isRunning ? 'pointer' : 'default',
            opacity: isRunning ? 1 : 0.5
          }}
        >
          <div style={{ 
            width: '20px', 
            height: '20px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexShrink: 0
          }}>
            <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path 
                d="M15.2999 10.1998V12.5798C15.2999 13.5319 15.2999 14.0079 15.1146 14.3715C14.9516 14.6914 14.6915 14.9515 14.3717 15.1145C14.008 15.2997 13.532 15.2997 12.5799 15.2997H10.2M6.80003 1.70001H4.42008C3.46801 1.70001 2.99197 1.70001 2.62833 1.88529C2.30846 2.04828 2.0484 2.30834 1.88542 2.62821C1.70013 2.99185 1.70013 3.46788 1.70013 4.41995V6.79991M11.0499 5.94993L16.1499 0.850025M16.1499 0.850025H11.0499M16.1499 0.850025V5.94993M5.95005 11.0498L0.850149 16.1497M0.850149 16.1497H5.95005M0.850149 16.1497L0.85015 11.0498" 
                stroke={isRunning ? "#CECFD2" : "#666"} 
                strokeWidth="1.66667" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </button>
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
          onClick={pauseTimer}
          disabled={!isRunning}
          className="relative overflow-hidden hover:opacity-80 transition-all duration-200 cursor-pointer"
          style={{
            width: '54px',
            height: '54px',
            background: 'linear-gradient(180deg, rgba(65, 60, 122, 1) 40%, rgba(45, 45, 69, 1) 100%)',
            borderRadius: '50%',
            border: 'none',
            boxShadow: '0px 0.426px 0.852px 0px rgba(0, 0, 0, 0.2)',
            opacity: !isRunning ? 0.4 : 1,
            pointerEvents: !isRunning ? 'none' : 'auto',
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
          onClick={startTimer}
          disabled={isRunning}
          className="relative overflow-hidden hover:opacity-80 transition-all duration-200 cursor-pointer"
          style={{
            width: '54px',
            height: '54px',
            background: 'linear-gradient(180deg, rgba(65, 60, 122, 1) 40%, rgba(45, 45, 69, 1) 100%)',
            borderRadius: '50%',
            border: 'none',
            boxShadow: '0px 1.364px 2.727px 0px rgba(0, 0, 0, 0.2)',
            opacity: isRunning ? 0.4 : 1,
            pointerEvents: isRunning ? 'none' : 'auto',
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
          onClick={stopTimer}
          disabled={!isRunning && time === "00:00:00"}
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