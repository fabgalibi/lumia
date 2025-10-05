import React from 'react';

interface ChatHeaderProps {
  contactName: string;
  contactAvatar: string;
  isOnline: boolean;
}

const ChatHeader: React.FC<ChatHeaderProps> = ({ contactName, contactAvatar, isOnline }) => {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '16px',
        padding: '20px 24px',
        backgroundColor: '#252532',
        borderBottom: '1px solid #2C2C45',
        borderTopRightRadius: '12px'
      }}
    >
            {/* Avatar */}
            <div
              style={{
                width: '40px',
                height: '40px',
                borderRadius: '9999px',
                backgroundImage: `url(${contactAvatar})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                border: '0.75px solid rgba(255, 255, 255, 0.12)'
              }}
            />

      {/* Nome e Status */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '12px',
          flex: 1
        }}
      >
        <div
          style={{
            fontFamily: 'Sora',
            fontWeight: 600,
            fontSize: '18px',
            lineHeight: '1.56em',
            color: '#F7F7F7',
            letterSpacing: '-0.01em'
          }}
        >
          {contactName}
        </div>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '4px',
            width: '70px',
            height: '22px',
            paddingTop: '4px',
            paddingRight: '12px',
            paddingBottom: '4px',
            paddingLeft: '8px',
            backgroundColor: isOnline ? '#243D2A' : 'rgba(148, 151, 156, 0.15)',
            borderRadius: '9999px',
            border: isOnline ? '1px solid rgba(255, 255, 255, 0.12)' : '1px solid rgba(148, 151, 156, 0.3)',
            position: 'relative',
            opacity: 1
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
              fontSize: '12px',
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
          padding: '10px 14px',
          backgroundColor: '#2D2D45',
          border: 'none',
          borderRadius: '8px',
          boxShadow: '0px 1px 2px 0px rgba(0, 0, 0, 0.1), 0px 0px 0px 1px rgba(255, 255, 255, 0.1) inset, 0px -2px 0px 0px rgba(0, 0, 0, 0.05) inset, 0px -1px 2px 0px rgba(0, 0, 0, 0.1)',
          cursor: 'pointer',
          transition: 'all 0.2s ease'
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.backgroundColor = '#3A3A4A';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.backgroundColor = '#2D2D45';
        }}
      >
        <span
          style={{
            fontFamily: 'Sora',
            fontWeight: 600,
            fontSize: '14px',
            lineHeight: '1.43em',
            color: '#FFFFFF',
            letterSpacing: '0.01em'
          }}
        >
          Ver Perfil
        </span>
      </button>
    </div>
  );
};

export default ChatHeader;
