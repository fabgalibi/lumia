import React from 'react';

interface ChatHeaderProps {
  contactName: string;
  contactAvatar: string;
  isOnline: boolean;
  onBack?: () => void;
  onViewProfile?: () => void;
}

const ChatHeader: React.FC<ChatHeaderProps> = ({ contactName, contactAvatar, isOnline, onBack, onViewProfile }) => {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        width: '100%',
        height: window.innerWidth < 768 ? '87px' : 'auto',
        gap: window.innerWidth < 768 ? '20px' : '16px',
        padding: window.innerWidth < 768 ? '16px 20px' : '20px 24px',
        backgroundColor: '#252532',
        borderBottom: 'none',
        borderTopRightRadius: window.innerWidth < 768 ? '0px' : '12px',
        opacity: 1
      }}
    >
      {/* Botão de voltar - apenas no mobile */}
      {window.innerWidth < 768 && onBack && (
        <button
          onClick={onBack}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '32px',
            height: '32px',
            backgroundColor: 'transparent',
            border: 'none',
            borderRadius: '8px',
            cursor: 'pointer',
            color: '#F7F7F7',
            flexShrink: 0,
            padding: '0'
          }}
        >
          <svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7 13L1 7L7 1" stroke="#ECECED" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      )}

            {/* Avatar */}
            <div
              style={{
                width: window.innerWidth < 768 ? '48px' : '40px',
                height: window.innerWidth < 768 ? '48px' : '40px',
                borderRadius: '9999px',
                backgroundImage: `url(${contactAvatar})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                border: window.innerWidth < 768 ? '1px solid rgba(255, 255, 255, 0.12)' : '0.75px solid rgba(255, 255, 255, 0.12)',
                flexShrink: 0,
                opacity: 1
              }}
            />

      {/* Nome e Status */}
      <div
        style={{
          display: 'flex',
          flexDirection: window.innerWidth < 768 ? 'column' : 'row',
          alignItems: window.innerWidth < 768 ? 'flex-start' : 'center',
          gap: window.innerWidth < 768 ? '4px' : '12px',
          flex: 1,
          minWidth: 0
        }}
      >
        <div
          style={{
            fontFamily: 'Sora',
            fontWeight: 600,
            fontSize: '18px',
            lineHeight: '1.56em',
            color: '#F7F7F7',
            letterSpacing: '-0.01em',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap',
            flex: window.innerWidth < 768 ? 'none' : 'none',
            width: window.innerWidth < 768 ? '100%' : 'auto'
          }}
        >
          {contactName}
        </div>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '4px',
            width: window.innerWidth < 768 ? 'auto' : 'auto',
            height: '22px',
            paddingTop: '4px',
            paddingRight: '12px',
            paddingBottom: '4px',
            paddingLeft: '8px',
            backgroundColor: isOnline ? '#243D2A' : 'rgba(148, 151, 156, 0.15)',
            borderRadius: '9999px',
            border: isOnline ? '1px solid rgba(255, 255, 255, 0.12)' : '1px solid rgba(148, 151, 156, 0.3)',
            position: 'relative',
            opacity: 1,
            flexShrink: 0
          }}
        >
          <div
            style={{
              width: '6px',
              height: '6px',
              borderRadius: '50%',
              backgroundColor: isOnline ? '#17B26A' : '#94979C',
              flexShrink: 0
            }}
          />
          <span
            style={{
              fontFamily: 'Sora',
              fontWeight: 500,
              fontSize: window.innerWidth < 768 ? '12px' : '12px',
              lineHeight: '1.5em',
              color: isOnline ? '#3DC462' : '#94979C',
              letterSpacing: '0.01em',
              textTransform: 'capitalize'
            }}
          >
            {isOnline ? 'Online' : 'Offline'}
          </span>
        </div>
      </div>

      {/* Botão Ver Perfil */}
      <button
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '4px',
          width: '97px',
          height: '40px',
          padding: '10px 14px',
          backgroundColor: '#2D2D45',
          border: 'none',
          borderRadius: '8px',
          boxShadow: '0px 1px 2px 0px rgba(0, 0, 0, 0.1), 0px 0px 0px 1px rgba(255, 255, 255, 0.1) inset, 0px -2px 0px 0px rgba(0, 0, 0, 0.05) inset, 0px -1px 2px 0px rgba(0, 0, 0, 0.1)',
          cursor: 'pointer',
          transition: 'all 0.2s ease',
          flexShrink: 0
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.backgroundColor = '#3A3A4A';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.backgroundColor = '#2D2D45';
        }}
        onClick={onViewProfile}
      >
        <span
          style={{
            fontFamily: 'Sora',
            fontWeight: 600,
            fontStyle: 'normal',
            fontSize: '14px',
            lineHeight: '1.43em',
            color: '#FFFFFF',
            letterSpacing: '0%'
          }}
        >
          Ver Perfil
        </span>
      </button>
    </div>
  );
};

export default ChatHeader;
