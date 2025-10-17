import React, { useState, useEffect } from 'react';

interface LogoutModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
}

export const LogoutModal: React.FC<LogoutModalProps> = ({
  isOpen,
  onClose,
  onConfirm
}) => {
  const [isMobile, setIsMobile] = useState(false);

  // Detectar se é mobile
  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    checkIsMobile();
    window.addEventListener('resize', checkIsMobile);
    return () => window.removeEventListener('resize', checkIsMobile);
  }, []);

  if (!isOpen) return null;

  console.log('🔍 LogoutModal: Renderizando modal', { isOpen, isMobile });

  return (
    <div 
      style={{ 
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 999999,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        pointerEvents: 'auto'
      }}
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          width: isMobile ? '343px' : '484px',
          maxWidth: '90vw',
          maxHeight: '90vh',
          background: '#252532',
          borderRadius: '16px',
          boxShadow: '0px 3px 3px -1.5px rgba(255, 255, 255, 0), 0px 8px 8px -4px rgba(255, 255, 255, 0), 0px 20px 24px -4px rgba(255, 255, 255, 0)',
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          margin: '20px',
          transform: 'translate(0, 0)'
        }}
      >
        {/* Background pattern decorative - Position: absolute (-120, -120) */}
        <div 
          style={{
            position: 'absolute',
            top: '-120px',
            left: '-120px',
            width: '336px',
            height: '336px',
            opacity: 0.1,
            pointerEvents: 'none'
          }}
        >
          <svg width="336" height="336" viewBox="0 0 336 336" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="168" cy="168" r="47.5" stroke="#22262F" strokeWidth="1"/>
            <circle cx="168" cy="168" r="71.5" stroke="#22262F" strokeWidth="1"/>
            <circle cx="168" cy="168" r="95.5" stroke="#22262F" strokeWidth="1"/>
            <circle cx="168" cy="168" r="119.5" stroke="#22262F" strokeWidth="1"/>
            <circle cx="168" cy="168" r="143.5" stroke="#22262F" strokeWidth="1"/>
          </svg>
        </div>

        {/* Modal Header - padding: 24px 24px 0px */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '16px',
            padding: '24px 24px 0px',
            width: '100%',
            alignItems: 'flex-start'
          }}
        >
          {/* Featured Icon - 48x48 */}
          <div
            style={{
              width: '48px',
              height: '48px',
              background: '#2E2E3F',
              border: '1px solid #373750',
              borderRadius: '9999px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0
            }}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M16 17L21 12M21 12L16 7M21 12H9M9 3H7.8C6.11984 3 5.27976 3 4.63803 3.32698C4.07354 3.6146 3.6146 4.07354 3.32698 4.63803C3 5.27976 3 6.11984 3 7.8V16.2C3 17.8802 3 18.7202 3.32698 19.362C3.6146 19.9265 4.07354 20.3854 4.63803 20.673C5.27976 21 6.11984 21 7.8 21H9" stroke="#CECFD2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>

          {/* Text and supporting text */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '4px', width: '100%' }}>
            <h3
              style={{
                fontFamily: 'Sora',
                fontWeight: 600,
                fontSize: '16px',
                lineHeight: '1.5em',
                color: '#F7F7F7',
                margin: 0,
                textAlign: 'left'
              }}
            >
              Sair da conta
            </h3>
            <p
              style={{
                fontFamily: 'Sora',
                fontWeight: 400,
                fontSize: '14px',
                lineHeight: '1.4285714285714286em',
                color: '#CECFD2',
                margin: 0,
                textAlign: 'left'
              }}
            >
              Tem certeza que deseja sair da conta? Ao prosseguir com essa ação você precisará fazer login novamente.
            </p>
          </div>
        </div>

        {/* Close Button - Position: absolute (428, 12) */}
        <button
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '12px',
            right: '12px',
            width: '44px',
            height: '44px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '8px',
            borderRadius: '8px',
            background: 'transparent',
            border: 'none',
            cursor: 'pointer',
            transition: 'background 0.2s ease'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = '#333346';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = 'transparent';
          }}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M18 6L6 18M6 6L18 18" stroke="#61656C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>

        {/* Modal Actions - padding: 32px 0px 0px */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            width: '100%',
            paddingTop: '32px'
          }}
        >
          {/* Buttons - padding: 0px 24px 24px, gap: 12px */}
          <div
            style={{
              display: 'flex',
              flexDirection: isMobile ? 'column' : 'row',
              gap: '12px',
              padding: '0px 24px 24px',
              width: '100%'
            }}
          >
            {/* Button Secondary - Cancelar */}
            <button
              onClick={onClose}
              style={{
                flex: 1,
                padding: '10px 16px',
                background: '#2D2D45',
                border: 'none',
                borderRadius: '8px',
                fontFamily: 'Sora',
                fontWeight: 600,
                fontSize: '16px',
                lineHeight: '1.5em',
                color: '#CECFD2',
                cursor: 'pointer',
                boxShadow: '0px 1px 2px 0px rgba(255, 255, 255, 0), inset 0px -2px 0px 0px rgba(12, 14, 18, 0.05), inset 0px 0px 0px 1px rgba(12, 14, 18, 0.18)',
                transition: 'background 0.2s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = '#3A3A52';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = '#2D2D45';
              }}
            >
              Cancelar
            </button>

            {/* Button Destructive - Sim, continuar */}
            <button
              onClick={onConfirm}
              style={{
                flex: 1,
                padding: '10px 16px',
                background: '#F04438',
                border: '2px solid rgba(255, 255, 255, 0.12)',
                borderRadius: '8px',
                fontFamily: 'Sora',
                fontWeight: 600,
                fontSize: '16px',
                lineHeight: '1.5em',
                color: '#FFFFFF',
                cursor: 'pointer',
                boxShadow: '0px 1px 2px 0px rgba(255, 255, 255, 0)',
                transition: 'background 0.2s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = '#D92D20';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = '#F04438';
              }}
            >
              Sim, continuar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};