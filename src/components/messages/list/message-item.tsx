import React from 'react';

interface MessageItemProps {
  id: string;
  name: string;
  avatar: string;
  isOnline: boolean;
  lastMessage: string;
  time: string;
  hasUnread: boolean;
  isSelected: boolean;
  onClick: () => void;
}

const MessageItem: React.FC<MessageItemProps> = ({ 
  name,
  avatar,
  isOnline,
  lastMessage,
  time,
  hasUnread,
  isSelected, 
  onClick 
}) => {
  const isMobile = window.innerWidth < 768;

  return (
  <div
    onClick={onClick}
    style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '12px',
      padding: isMobile ? '16px 16px 16px 12px' : '16px 24px 16px 12px',
      borderBottom: '1px solid #22262F',
      cursor: 'pointer',
      backgroundColor: isSelected ? '#252532' : 'transparent',
      alignItems: 'stretch'
    }}
  >
    <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flex: 1 }}>
        {/* Dot indicador de mensagem não lida - sempre ocupa espaço */}
        <div
          style={{
            width: '8px',
            height: '8px',
            backgroundColor: hasUnread ? '#F66649' : 'transparent',
            borderRadius: '5px',
            flexShrink: 0
          }}
        />
        
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          {/* Avatar */}
          <div
            style={{
              width: '40px',
              height: '40px',
              borderRadius: '9999px',
              backgroundImage: `url(${avatar})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              position: 'relative',
              flexShrink: 0
            }}
          >
            {/* Indicador online */}
            <div
              style={{
                position: 'absolute',
                bottom: '0',
                right: '0',
                width: '10px',
                height: '10px',
                borderRadius: '9999px',
                backgroundColor: isOnline ? '#47CD89' : '#61656C',
                border: '1.5px solid #0C0E12'
              }}
            />
          </div>
          
          {/* Nome */}
          <div>
            <div
              style={{
                fontSize: '14px',
                fontWeight: '600',
                color: '#F7F7F7',
                lineHeight: '1.4285714285714286em',
                fontFamily: 'Sora'
              }}
            >
              {name}
            </div>
          </div>
        </div>
      </div>
      
      {/* Tempo */}
      <div
        style={{
          fontSize: '12px',
          fontWeight: '400',
          color: '#CECFD2',
          lineHeight: '1.5em',
          fontFamily: 'Sora',
          flexShrink: 0
        }}
      >
        {time}
      </div>
    </div>
    
    {/* Preview da mensagem */}
    <div
      style={{
        paddingLeft: '20px',
        fontSize: '14px',
        fontWeight: '400',
        color: '#94979C',
        lineHeight: '1.4285714285714286em',
        fontFamily: 'Sora',
        textAlign: 'left',
        overflow: 'hidden',
        display: '-webkit-box',
        WebkitLineClamp: 2,
        WebkitBoxOrient: 'vertical',
        textOverflow: 'ellipsis',
        wordBreak: 'break-word',
        alignSelf: 'stretch'
      }}
    >
      {lastMessage}
    </div>
  </div>
  );
};

export default MessageItem;
