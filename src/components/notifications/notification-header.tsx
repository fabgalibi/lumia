import React from 'react';

export interface NotificationHeaderProps {
  onMarkAllAsRead?: () => void;
  onBack?: () => void;
  isMobile?: boolean;
}

export const NotificationHeader: React.FC<NotificationHeaderProps> = ({
  onMarkAllAsRead,
  onBack,
  isMobile = false
}) => {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: isMobile ? '20px' : 0,
      width: '100%',
      alignSelf: 'stretch'
    }}>
      {/* Header content */}
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: isMobile ? '12px' : '196px',
        width: '100%',
        alignSelf: 'stretch',
        minWidth: 0,
        padding: isMobile ? '16px 16px 0' : 0
      }}>
        {/* Left side - Back button + Title (mobile) or just Title (desktop) */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          flex: isMobile ? 1 : 0,
          minWidth: 0
        }}>
          {isMobile && onBack && (
            <button
              onClick={onBack}
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                width: '24px',
                height: '24px',
                background: 'transparent',
                border: 'none',
                cursor: 'pointer',
                padding: 0,
                flexShrink: 0
              }}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M15 18L9 12L15 6" stroke="#ECECED" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          )}
          
          <h1 style={{
            fontFamily: 'Sora',
            fontWeight: 600,
            fontSize: isMobile ? '16px' : '20px',
            lineHeight: '1.5em',
            color: isMobile ? '#F7F7F7' : '#FFFFFF',
            margin: 0,
            whiteSpace: 'nowrap'
          }}>
            Notificações
          </h1>
        </div>

        {/* Mark all as read button */}
        <button
          onClick={onMarkAllAsRead}
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '6px',
            background: 'transparent',
            border: 'none',
            cursor: 'pointer',
            padding: 0,
            transition: 'opacity 0.2s',
            flexShrink: 0
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.opacity = '0.8';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.opacity = '1';
          }}
        >
          <span style={{
            fontFamily: 'Sora',
            fontWeight: 600,
            fontSize: '14px',
            lineHeight: '1.4285714285714286em',
            color: '#F0F0F1',
            whiteSpace: 'nowrap'
          }}>
            Marcar todas como lidas
          </span>
        </button>
      </div>

      {/* Divider - apenas no mobile */}
      {isMobile && (
        <div style={{
          width: '100%',
          height: '1px',
          backgroundColor: '#22262F',
          flexShrink: 0
        }} />
      )}
    </div>
  );
};
