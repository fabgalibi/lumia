import React, { useState, useEffect } from 'react';

interface MessagesSearchProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
  onNewMessage?: () => void;
}

const MessagesSearch: React.FC<MessagesSearchProps> = ({ 
  searchQuery, 
  onSearchChange,
  onNewMessage
}) => {
  const [isMobile, setIsMobile] = useState(false);

  // Detectar se é mobile
  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkIsMobile();
    window.addEventListener('resize', checkIsMobile);
    return () => window.removeEventListener('resize', checkIsMobile);
  }, []);

  return (
    <div
      style={{
        padding: '24px 16px 16px',
        backgroundColor: '#1D1D2E',
        borderBottom: '1px solid #2C2C45',
        borderTopLeftRadius: '16px',
        borderTopRightRadius: isMobile ? '0px' : '0px'
      }}
    >
      {/* Container principal */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '16px'
        }}
      >
        {/* Input de busca */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            padding: '8px 12px',
            backgroundColor: '#2D2D3B',
            border: '1px solid #2D2D36',
            borderRadius: '8px',
            boxShadow: '0px 1px 2px 0px rgba(255, 255, 255, 0)',
            flex: 1,
            height: '40px'
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
          d="M9.16667 15.8333C12.8486 15.8333 15.8333 12.8486 15.8333 9.16667C15.8333 5.48477 12.8486 2.5 9.16667 2.5C5.48477 2.5 2.5 5.48477 2.5 9.16667C2.5 12.8486 5.48477 15.8333 9.16667 15.8333Z"
          stroke="#94979C"
          strokeWidth="1.67"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M17.5 17.5L13.875 13.875"
          stroke="#94979C"
          strokeWidth="1.67"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
          <input
            type="text"
            placeholder="Buscar"
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            style={{
              flex: 1,
              border: 'none',
              outline: 'none',
              backgroundColor: 'transparent',
              fontSize: '16px',
              fontWeight: '400',
              color: '#D5D7DA',
              lineHeight: '1.5em',
              fontFamily: 'Sora'
            }}
          />
        </div>

        {/* Botão Nova Mensagem */}
        {isMobile && onNewMessage && (
          <button
            onClick={onNewMessage}
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              padding: '10px',
              backgroundColor: '#C74228',
              border: '2px solid rgba(255, 255, 255, 0.12)',
              borderRadius: '8px',
              boxShadow: '0px 1px 2px 0px rgba(255, 255, 255, 0), inset 0px -2px 0px 0px rgba(12, 14, 18, 0.05)',
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
                d="M10 10.25V5.25M7.5 7.75H12.5M5.33333 14V15.9463C5.33333 16.3903 5.33333 16.6123 5.42436 16.7263C5.50352 16.8255 5.62356 16.8832 5.75045 16.8831C5.89636 16.8829 6.06973 16.7442 6.41646 16.4668L8.40434 14.8765C8.81043 14.5517 9.0135 14.3892 9.2396 14.2737C9.4402 14.1712 9.6537 14.0963 9.8743 14.051C10.1231 14 10.3831 14 10.9031 14H13C14.4001 14 15.1002 14 15.635 13.7275C16.1054 13.4878 16.4878 13.1054 16.7275 12.635C17 12.1002 17 11.4001 17 10V5.5C17 4.09987 17 3.3998 16.7275 2.86502C16.4878 2.39462 16.1054 2.01217 15.635 1.77248C15.1002 1.5 14.4001 1.5 13 1.5H6C4.59987 1.5 3.8998 1.5 3.36502 1.77248C2.89462 2.01217 2.51217 2.39462 2.27248 2.86502C2 3.3998 2 4.09987 2 5.5V10.6667C2 11.4416 2 11.8291 2.08519 12.147C2.31635 13.0098 2.99022 13.6836 3.85295 13.9148C4.17087 14 4.55836 14 5.33333 14Z"
                stroke="#F0F0F1"
                strokeWidth="1.66667"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        )}
      </div>
    </div>
  );
};

export default MessagesSearch;
