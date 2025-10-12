import { useState, useEffect } from "react";
import { useTimer } from "@/contexts/timer-context";
import { useAuth } from "@/contexts/auth-context";

export const LockScreen: React.FC = () => {
  const { isLockScreenOpen, closeLockScreen, actuallyStartTimer, time, pauseTimer, stopTimer, isRunning } = useTimer();
  const { user } = useAuth();
  const [countdown, setCountdown] = useState(3);
  const [showCountdown, setShowCountdown] = useState(true);
  const [hasStartedOnce, setHasStartedOnce] = useState(false);

  useEffect(() => {
    if (isLockScreenOpen && showCountdown && !hasStartedOnce) {
      if (countdown > 0) {
        const timer = setTimeout(() => {
          setCountdown(countdown - 1);
        }, 1000);
        return () => clearTimeout(timer);
      } else {
        // Contagem terminou, iniciar o timer e esconder contagem
        setShowCountdown(false);
        setHasStartedOnce(true);
        actuallyStartTimer();
      }
    }
  }, [countdown, isLockScreenOpen, showCountdown, hasStartedOnce, actuallyStartTimer]);

  // Resetar contagem apenas quando o timer está parado
  useEffect(() => {
    if (isLockScreenOpen) {
      // Se o timer já está rodando ou já iniciou antes, pular a contagem
      if (isRunning || hasStartedOnce) {
        setShowCountdown(false);
      } else {
        // Se é a primeira vez absoluta, mostrar contagem
        setCountdown(3);
        setShowCountdown(true);
      }
    }
  }, [isLockScreenOpen, isRunning, hasStartedOnce]);
  
  // Resetar hasStartedOnce quando o timer é zerado
  useEffect(() => {
    if (time === "00:00:00" && !isRunning) {
      setHasStartedOnce(false);
    }
  }, [time, isRunning]);

  if (!isLockScreenOpen) {
    return null;
  }

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        background: 'rgba(0, 0, 0, 0.95)',
        zIndex: 9999,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      {/* Botão de minimizar no canto superior direito */}
      <button
        onClick={closeLockScreen}
        style={{
          position: 'absolute',
          top: '40px',
          right: '32px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '6px',
          padding: '10px 16px',
          background: '#13161B',
          border: '1px solid #22262F',
          borderRadius: '8px',
          boxShadow: '0px 1px 2px 0px rgba(255, 255, 255, 0), inset 0px -2px 0px 0px rgba(12, 14, 18, 0.05), inset 0px 0px 0px 1px rgba(12, 14, 18, 0.18)',
          cursor: 'pointer',
          transition: 'all 0.2s ease'
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.background = '#1A1D23';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.background = '#13161B';
        }}
      >
        <span
          style={{
            fontFamily: 'Sora',
            fontWeight: 400,
            fontSize: '16px',
            lineHeight: '1.5em',
            color: '#CECFD2'
          }}
        >
          Minimizar cronometro
        </span>
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path 
            d="M15 5L5 15M5 5L15 15" 
            stroke="#CECFD2" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          />
        </svg>
      </button>

      {/* Conteúdo central - contagem regressiva */}
      {showCountdown && (
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '16px'
          }}
        >
          <span
            style={{
              fontFamily: 'Sora',
              fontWeight: 400,
              fontSize: '18px',
              lineHeight: '1.556em',
              color: '#F0F0F1',
              textAlign: 'center'
            }}
          >
            Cronometro iniciando em
          </span>
          <span
            style={{
              fontFamily: 'Sora',
              fontWeight: 600,
              fontSize: '64px',
              lineHeight: '1.26em',
              letterSpacing: '-0.02em',
              color: '#FFFFFF',
              textAlign: 'center'
            }}
          >
            {countdown}
          </span>

          {/* Controles durante contagem */}
          <div style={{ 
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '16px',
            marginTop: '24px'
          }}>
            {/* Botão Pause */}
            <button
              disabled={true}
              className="relative overflow-hidden transition-all duration-200"
              style={{
                width: '48px',
                height: '48px',
                background: 'linear-gradient(180deg, rgba(65, 60, 122, 1) 40%, rgba(45, 45, 69, 1) 100%)',
                borderRadius: '50%',
                border: 'none',
                boxShadow: '0px 0.375px 0.75px 0px rgba(0, 0, 0, 0.2)',
                opacity: 0.4,
                cursor: 'not-allowed',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              <div style={{
                position: 'absolute',
                inset: '4px',
                borderRadius: '50%',
                background: 'linear-gradient(180deg, rgba(45, 45, 69, 1) 0%, rgba(45, 45, 69, 1) 100%)',
                boxShadow: 'inset 0px 0.375px 0.375px 0px rgba(0, 0, 0, 0.1)',
              }} />
              <div style={{
                position: 'absolute',
                inset: '5.33px',
                borderRadius: '50%',
                background: 'linear-gradient(180deg, rgba(45, 45, 69, 1) 0%, rgba(45, 45, 69, 1) 100%)',
                boxShadow: '0px 0.375px 0.375px 0px rgba(0, 0, 0, 0.2)',
              }} />
              <div style={{ position: 'relative', zIndex: 10, display: 'flex', gap: '5.33px' }}>
                <div style={{
                  width: '5.33px',
                  height: '16px',
                  background: 'linear-gradient(180deg, rgba(255, 255, 255, 1) 0%, rgba(206, 206, 206, 1) 100%)',
                  borderRadius: '0.375px',
                  boxShadow: 'inset 0px 0.375px 0.375px 0px rgba(0, 0, 0, 0.5)',
                }} />
                <div style={{
                  width: '5.33px',
                  height: '16px',
                  background: 'linear-gradient(180deg, rgba(255, 255, 255, 1) 0%, rgba(206, 206, 206, 1) 100%)',
                  borderRadius: '0.375px',
                  boxShadow: 'inset 0px 0.375px 0.375px 0px rgba(0, 0, 0, 0.5)',
                }} />
              </div>
            </button>

            {/* Botão Play */}
            <button
              disabled={true}
              className="relative overflow-hidden transition-all duration-200"
              style={{
                width: '64px',
                height: '64px',
                background: 'linear-gradient(180deg, rgba(65, 60, 122, 1) 40%, rgba(45, 45, 69, 1) 100%)',
                borderRadius: '50%',
                border: 'none',
                boxShadow: '0px 0.5px 1px 0px rgba(0, 0, 0, 0.2)',
                opacity: 0.4,
                cursor: 'not-allowed',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              <div style={{
                position: 'absolute',
                inset: '5.33px',
                borderRadius: '50%',
                background: 'linear-gradient(180deg, rgba(45, 45, 69, 1) 0%, rgba(45, 45, 69, 1) 100%)',
                boxShadow: 'inset 0px 0.5px 0.5px 0px rgba(0, 0, 0, 0.1)',
              }} />
              <div style={{
                position: 'absolute',
                inset: '7.11px',
                borderRadius: '50%',
                background: 'linear-gradient(180deg, rgba(45, 45, 69, 1) 0%, rgba(45, 45, 69, 1) 100%)',
                boxShadow: '0px 0.5px 0.5px 0px rgba(0, 0, 0, 0.2)',
              }} />
              <div style={{ position: 'relative', zIndex: 10, marginLeft: '3px' }}>
                <svg width="19.58" height="22.26" viewBox="0 0 19.58 22.26" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path 
                    d="M1.78 0.24L17.82 10.94C18.61 11.4 18.61 12.36 17.82 12.81L1.78 22.26C0.99 22.71 0 22.14 0 21.15V1.5C0 0.36 0.99 -0.24 1.78 0.24Z" 
                    fill="url(#paint0_linear_play_lock)"
                  />
                  <defs>
                    <linearGradient id="paint0_linear_play_lock" x1="9.79" y1="0" x2="9.79" y2="22.26" gradientUnits="userSpaceOnUse">
                      <stop stopColor="white"/>
                      <stop offset="1" stopColor="#CECECE"/>
                    </linearGradient>
                  </defs>
                </svg>
              </div>
            </button>

            {/* Botão Stop */}
            <button
              disabled={true}
              className="relative overflow-hidden transition-all duration-200"
              style={{
                width: '48px',
                height: '48px',
                background: 'linear-gradient(180deg, rgba(124, 62, 62, 1) 40%, rgba(95, 56, 56, 1) 100%)',
                borderRadius: '50%',
                border: 'none',
                boxShadow: '0px 0.375px 0.75px 0px rgba(0, 0, 0, 0.2)',
                opacity: 0.4,
                cursor: 'not-allowed',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              <div style={{
                position: 'absolute',
                inset: '4px',
                borderRadius: '50%',
                background: 'linear-gradient(180deg, rgba(129, 53, 53, 1) 0%, rgba(129, 53, 53, 1) 100%)',
                boxShadow: 'inset 0px 0.375px 0.375px 0px rgba(0, 0, 0, 0.1)',
              }} />
              <div style={{
                position: 'absolute',
                inset: '5.33px',
                borderRadius: '50%',
                background: 'linear-gradient(180deg, rgba(129, 53, 53, 1) 0%, rgba(129, 53, 53, 1) 100%)',
                boxShadow: '0px 0.375px 0.375px 0px rgba(0, 0, 0, 0.2)',
              }} />
              <div style={{ position: 'relative', zIndex: 10 }}>
                <div style={{
                  width: '15px',
                  height: '15px',
                  background: 'linear-gradient(180deg, rgba(255, 255, 255, 1) 0%, rgba(206, 206, 206, 1) 100%)',
                  borderRadius: '1.5px'
                }}></div>
              </div>
            </button>
          </div>
        </div>
      )}

      {/* Após a contagem, mostrar o timer grande rodando */}
      {!showCountdown && (
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '16px'
          }}
        >
          {/* Mensagem de boas-vindas */}
          <div
            style={{
              fontFamily: 'Sora',
              fontWeight: 400,
              fontSize: '18px',
              lineHeight: '1.556em',
              color: '#F0F0F1',
              textAlign: 'center'
            }}
          >
            Bem-vindo de volta!<br />
            {user?.name || 'Usuário'}
          </div>

          {/* Timer grande com ícone */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '16px'
            }}
          >
            {/* Ícone do cronômetro */}
            <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path 
                d="M32 32V43.2L40 47.2M32 17.6C20.8 17.6 12 26.4 12 37.6C12 48.8 20.8 57.6 32 57.6C43.2 57.6 52 48.8 52 37.6C52 26.4 43.2 17.6 32 17.6ZM32 17.6V8M24 8H40M58.4 20L54.4 16L56.8 18.4M7.2 20L11.2 16L8.8 18.4" 
                stroke="#F48E2F" 
                strokeWidth="3.34" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              />
            </svg>

            {/* Tempo */}
            <span
              style={{
                fontFamily: 'Sora',
                fontWeight: 600,
                fontSize: '64px',
                lineHeight: '1.26em',
                letterSpacing: '-0.02em',
                color: '#F48E2F',
                textAlign: 'center'
              }}
            >
              {time}
            </span>
          </div>

          {/* Mensagem motivacional */}
          <div
            style={{
              fontFamily: 'Sora',
              fontWeight: 400,
              fontSize: '16px',
              color: '#E9EAEB',
              textAlign: 'center'
            }}
          >
            Foque nos estudos! Você está indo muito bem 🚀
          </div>

          {/* Controles funcionais */}
          <div style={{ 
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '16px',
            marginTop: '24px'
          }}>
            {/* Botão Pause */}
            <button
              onClick={pauseTimer}
              disabled={!isRunning}
              className="relative overflow-hidden hover:opacity-80 transition-all duration-200"
              style={{
                width: '48px',
                height: '48px',
                background: 'linear-gradient(180deg, rgba(65, 60, 122, 1) 40%, rgba(45, 45, 69, 1) 100%)',
                borderRadius: '50%',
                border: 'none',
                boxShadow: '0px 0.375px 0.75px 0px rgba(0, 0, 0, 0.2)',
                opacity: !isRunning ? 0.4 : 1,
                cursor: !isRunning ? 'not-allowed' : 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              <div style={{
                position: 'absolute',
                inset: '4px',
                borderRadius: '50%',
                background: 'linear-gradient(180deg, rgba(45, 45, 69, 1) 0%, rgba(45, 45, 69, 1) 100%)',
                boxShadow: 'inset 0px 0.375px 0.375px 0px rgba(0, 0, 0, 0.1)',
              }} />
              <div style={{
                position: 'absolute',
                inset: '5.33px',
                borderRadius: '50%',
                background: 'linear-gradient(180deg, rgba(45, 45, 69, 1) 0%, rgba(45, 45, 69, 1) 100%)',
                boxShadow: '0px 0.375px 0.375px 0px rgba(0, 0, 0, 0.2)',
              }} />
              <div style={{ position: 'relative', zIndex: 10, display: 'flex', gap: '5.33px' }}>
                <div style={{
                  width: '5.33px',
                  height: '16px',
                  background: 'linear-gradient(180deg, rgba(255, 255, 255, 1) 0%, rgba(206, 206, 206, 1) 100%)',
                  borderRadius: '0.375px',
                  boxShadow: 'inset 0px 0.375px 0.375px 0px rgba(0, 0, 0, 0.5)',
                }} />
                <div style={{
                  width: '5.33px',
                  height: '16px',
                  background: 'linear-gradient(180deg, rgba(255, 255, 255, 1) 0%, rgba(206, 206, 206, 1) 100%)',
                  borderRadius: '0.375px',
                  boxShadow: 'inset 0px 0.375px 0.375px 0px rgba(0, 0, 0, 0.5)',
                }} />
              </div>
            </button>

            {/* Botão Play */}
            <button
              onClick={actuallyStartTimer}
              disabled={isRunning}
              className="relative overflow-hidden hover:opacity-80 transition-all duration-200"
              style={{
                width: '64px',
                height: '64px',
                background: 'linear-gradient(180deg, rgba(65, 60, 122, 1) 40%, rgba(45, 45, 69, 1) 100%)',
                borderRadius: '50%',
                border: 'none',
                boxShadow: '0px 0.5px 1px 0px rgba(0, 0, 0, 0.2)',
                opacity: isRunning ? 0.4 : 1,
                cursor: isRunning ? 'not-allowed' : 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              <div style={{
                position: 'absolute',
                inset: '5.33px',
                borderRadius: '50%',
                background: 'linear-gradient(180deg, rgba(45, 45, 69, 1) 0%, rgba(45, 45, 69, 1) 100%)',
                boxShadow: 'inset 0px 0.5px 0.5px 0px rgba(0, 0, 0, 0.1)',
              }} />
              <div style={{
                position: 'absolute',
                inset: '7.11px',
                borderRadius: '50%',
                background: 'linear-gradient(180deg, rgba(45, 45, 69, 1) 0%, rgba(45, 45, 69, 1) 100%)',
                boxShadow: '0px 0.5px 0.5px 0px rgba(0, 0, 0, 0.2)',
              }} />
              <div style={{ position: 'relative', zIndex: 10, marginLeft: '3px' }}>
                <svg width="19.58" height="22.26" viewBox="0 0 19.58 22.26" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path 
                    d="M1.78 0.24L17.82 10.94C18.61 11.4 18.61 12.36 17.82 12.81L1.78 22.26C0.99 22.71 0 22.14 0 21.15V1.5C0 0.36 0.99 -0.24 1.78 0.24Z" 
                    fill="url(#paint0_linear_play_lock_2)"
                  />
                  <defs>
                    <linearGradient id="paint0_linear_play_lock_2" x1="9.79" y1="0" x2="9.79" y2="22.26" gradientUnits="userSpaceOnUse">
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
              className="relative overflow-hidden hover:opacity-80 transition-all duration-200"
              style={{
                width: '48px',
                height: '48px',
                background: 'linear-gradient(180deg, rgba(124, 62, 62, 1) 40%, rgba(95, 56, 56, 1) 100%)',
                borderRadius: '50%',
                border: 'none',
                boxShadow: '0px 0.375px 0.75px 0px rgba(0, 0, 0, 0.2)',
                opacity: (!isRunning && time === "00:00:00") ? 0.4 : 1,
                cursor: (!isRunning && time === "00:00:00") ? 'not-allowed' : 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              <div style={{
                position: 'absolute',
                inset: '4px',
                borderRadius: '50%',
                background: 'linear-gradient(180deg, rgba(129, 53, 53, 1) 0%, rgba(129, 53, 53, 1) 100%)',
                boxShadow: 'inset 0px 0.375px 0.375px 0px rgba(0, 0, 0, 0.1)',
              }} />
              <div style={{
                position: 'absolute',
                inset: '5.33px',
                borderRadius: '50%',
                background: 'linear-gradient(180deg, rgba(129, 53, 53, 1) 0%, rgba(129, 53, 53, 1) 100%)',
                boxShadow: '0px 0.375px 0.375px 0px rgba(0, 0, 0, 0.2)',
              }} />
              <div style={{ position: 'relative', zIndex: 10 }}>
                <div style={{
                  width: '15px',
                  height: '15px',
                  background: 'linear-gradient(180deg, rgba(255, 255, 255, 1) 0%, rgba(206, 206, 206, 1) 100%)',
                  borderRadius: '1.5px'
                }}></div>
              </div>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

