import React from 'react';

export interface NotificationHeaderProps {
  onMarkAllAsRead?: () => void;
}

export const NotificationHeader: React.FC<NotificationHeaderProps> = ({
  onMarkAllAsRead
}) => {
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      gap: '16px',
      width: '100%',
      alignSelf: 'stretch',
      minWidth: 0
    }}>
      {/* Title */}
      <h1 style={{
        fontFamily: 'Sora',
        fontWeight: 600,
        fontSize: '18px',
        lineHeight: '1.5555555555555556em',
        color: '#FFFFFF',
        margin: 0,
        whiteSpace: 'nowrap'
      }}>
        Notificações
      </h1>

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
  );
};
