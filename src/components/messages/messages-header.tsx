import React, { useState, useEffect } from 'react';
import { UserMenu } from '@/components/lumia/user-menu';
import { useSidebar } from '../../contexts/sidebar-context';

const MessagesHeader: React.FC = () => {
  const [isMobile, setIsMobile] = useState(false);
  const { toggleSidebar } = useSidebar();

  // Detectar se é mobile/tablet
  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 1100);
    };

    checkIsMobile();
    window.addEventListener('resize', checkIsMobile);
    return () => window.removeEventListener('resize', checkIsMobile);
  }, []);

  return (
    <header 
      className="w-full"
      style={{
        background: 'transparent',
        padding: '20px 32px 24px 32px',
        borderBottom: '1px solid #272737',
        borderLeft: '1px solid #272737',
        width: '100%',
        boxSizing: 'border-box'
      }}
    >
      <div className="flex items-center justify-between w-full" style={{ gap: '25px' }}>
        {/* Lado esquerdo - Ícone de menu + Título */}
        <div className="flex items-center" style={{ gap: '12px' }}>
          {/* Ícone de menu (mobile) */}
          {isMobile && (
            <button 
              onClick={toggleSidebar}
              className="flex items-center justify-center cursor-pointer"
              style={{
                background: '#24212D',
                border: '1px solid #272737',
                borderRadius: '40px',
                padding: '10px',
                gap: '10px'
              }}
            >
              <svg width="18" height="12" viewBox="0 0 18 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3 6H15M3 1H15M3 11H15" stroke="#F66649" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          )}
          
          {/* Título */}
          <h1 
            className="text-white"
            style={{ 
              fontFamily: 'Sora', 
              fontWeight: 600, 
              fontSize: '18px',
              lineHeight: '1.56em',
              textAlign: 'left',
              margin: 0
            }}
          >
            Todas as conversas (100)
          </h1>
        </div>

        {/* Lado direito - Botão Nova Mensagem + Menu + Avatar */}
        <div className="flex items-center" style={{ gap: '16px' }}>
          {/* Botão Nova Mensagem */}
          <button
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              gap: '4px',
              padding: '8px 12px',
              backgroundColor: '#C74228',
              border: '2px solid',
              borderImage: 'linear-gradient(180deg, rgba(255, 255, 255, 0.12) 0%, rgba(255, 255, 255, 0) 100%) 1',
              borderRadius: '8px',
              boxShadow: '0px 1px 2px 0px rgba(255, 255, 255, 0), inset 0px -2px 0px 0px rgba(12, 14, 18, 0.05), inset 0px 0px 0px 1px rgba(12, 14, 18, 0.18)',
              cursor: 'pointer'
            }}
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10 4.16667V15.8333M4.16667 10H15.8333"
                stroke="#F0F0F1"
                strokeWidth="1.66667"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span
              style={{
                fontFamily: 'Sora',
                fontWeight: '600',
                fontSize: '14px',
                lineHeight: '1.4285714285714286em',
                color: '#F0F0F1'
              }}
            >
              Nova mensagem
            </span>
          </button>

          {/* User Menu Component */}
          <UserMenu />
        </div>
      </div>
    </header>
  );
};

export default MessagesHeader;