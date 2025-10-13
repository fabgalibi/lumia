import { useTimer } from "@/contexts/timer-context";

interface TimerProps {
  showControls?: boolean;
  className?: string;
  style?: React.CSSProperties;
}

export const Timer: React.FC<TimerProps> = ({ 
  showControls = true,
  className = "",
  style = {}
}) => {
  const { time, isRunning, startTimer, pauseTimer, stopTimer } = useTimer();

  return (
    <div className={`flex items-center justify-center ${className}`} style={{ gap: '16px', ...style }}>
      {/* Display do tempo */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          background: '#2D2D45',
          borderRadius: '64px',
          padding: '8px 12px',
          boxShadow: '0px 1px 2px 0px rgba(10, 13, 18, 0.05), inset 0px -2px 0px 0px rgba(10, 13, 18, 0.05), inset 0px 0px 0px 1px rgba(10, 13, 18, 0.18)',
          width: '128px',
          position: 'relative'
        }}
      >
        {/* Gradiente de borda */}
        <div
          style={{
            position: 'absolute',
            inset: '-1px',
            borderRadius: '64px',
            padding: '1px',
            background: 'linear-gradient(180deg, rgba(255, 255, 255, 0.12) 0%, rgba(255, 255, 255, 0) 100%)',
            WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
            WebkitMaskComposite: 'xor',
            maskComposite: 'exclude',
            pointerEvents: 'none'
          }}
        />
        
        {/* Ícone do relógio */}
        <div style={{ width: '24px', height: '24px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, position: 'relative', zIndex: 1 }}>
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path 
              d="M10 6V10L13 11.5M18.5 10C18.5 14.6944 14.6944 18.5 10 18.5C5.30558 18.5 1.5 14.6944 1.5 10C1.5 5.30558 5.30558 1.5 10 1.5C14.6944 1.5 18.5 5.30558 18.5 10Z" 
              stroke={isRunning ? "#F48E2F" : "#FFFFFF"} 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <span
          style={{
            fontFamily: 'Sora',
            fontWeight: 600,
            fontSize: '14px',
            lineHeight: '1.429em',
            color: isRunning ? '#F48E2F' : '#FFFFFF',
            flex: 1,
            textAlign: 'left',
            position: 'relative',
            zIndex: 1
          }}
        >
          {time}
        </span>
      </div>

      {/* Botões de controle */}
      {showControls && (
        <div className="flex items-center" style={{ gap: '12px' }}>
          {/* Botão Pause */}
          <button
            onClick={pauseTimer}
            disabled={!isRunning}
            className="relative overflow-hidden hover:opacity-80 transition-all duration-200 cursor-pointer"
            style={{
              width: '40px',
              height: '40px',
              background: 'linear-gradient(180deg, rgba(65, 60, 122, 1) 40%, rgba(45, 45, 69, 1) 100%)',
              borderRadius: '50%',
              border: 'none',
              boxShadow: '0px 0.3125px 0.625px 0px rgba(0, 0, 0, 0.2)',
              opacity: !isRunning ? 0.4 : 1,
              pointerEvents: !isRunning ? 'none' : 'auto',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
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
            {/* Ícone Pause */}
            <div className="relative z-10 flex items-center justify-center h-full">
              <div className="flex items-center justify-center" style={{ gap: '4.44px' }}>
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
            </div>
          </button>

          {/* Botão Play */}
          <button
            onClick={startTimer}
            disabled={isRunning}
            className="relative overflow-hidden hover:opacity-80 transition-all duration-200 cursor-pointer"
            style={{
              width: '40px',
              height: '40px',
              background: 'linear-gradient(180deg, rgba(65, 60, 122, 1) 40%, rgba(45, 45, 69, 1) 100%)',
              borderRadius: '50%',
              border: 'none',
              boxShadow: '0px 1px 2px 0px rgba(0, 0, 0, 0.2)',
              opacity: isRunning ? 0.4 : 1,
              pointerEvents: isRunning ? 'none' : 'auto',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
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
            {/* Ícone Play */}
            <div className="relative z-10 flex items-center justify-center h-full" style={{ marginLeft: '1px' }}>
              <svg width="12.24" height="13.91" viewBox="0 0 12.24 13.91" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path 
                  d="M1.11 0.15L11.27 6.87C11.86 7.22 11.86 8.08 11.27 8.43L1.11 13.91C0.52 14.26 0 13.82 0 13.13V0.87C0 0.18 0.52 -0.15 1.11 0.15Z" 
                  fill="url(#paint0_linear_play_modal)"
                />
                <defs>
                  <linearGradient id="paint0_linear_play_modal" x1="6.12" y1="0" x2="6.12" y2="13.91" gradientUnits="userSpaceOnUse">
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
              width: '40px',
              height: '40px',
              background: 'linear-gradient(180deg, rgba(124, 62, 62, 1) 40%, rgba(95, 56, 56, 1) 100%)',
              borderRadius: '50%',
              border: 'none',
              boxShadow: '0px 0.3125px 0.625px 0px rgba(0, 0, 0, 0.2)',
              opacity: (!isRunning && time === "00:00:00") ? 0.4 : 1,
              pointerEvents: (!isRunning && time === "00:00:00") ? 'none' : 'auto',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            {/* Camada interna */}
            <div 
              className="absolute inset-0 rounded-full"
              style={{
                background: 'linear-gradient(180deg, rgba(129, 53, 53, 1) 0%, rgba(129, 53, 53, 1) 100%)',
                boxShadow: 'inset 0px 0.3125px 0.3125px 0px rgba(0, 0, 0, 0.1)',
                margin: '3.33px'
              }}
            ></div>
            {/* Camada mais interna */}
            <div 
              className="absolute inset-0 rounded-full"
              style={{
                background: 'linear-gradient(180deg, rgba(129, 53, 53, 1) 0%, rgba(129, 53, 53, 1) 100%)',
                boxShadow: '0px 0.3125px 0.3125px 0px rgba(0, 0, 0, 0.2)',
                margin: '4.44px'
              }}
            ></div>
            {/* Ícone Stop */}
            <div className="relative z-10 flex items-center justify-center h-full">
              <div style={{
                width: '12.5px',
                height: '12.5px',
                background: 'linear-gradient(180deg, rgba(255, 255, 255, 1) 0%, rgba(206, 206, 206, 1) 100%)',
                borderRadius: '1px'
              }}></div>
            </div>
          </button>
        </div>
      )}
    </div>
  );
};
