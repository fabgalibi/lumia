import React from 'react';
import { NotificationItem, NotificationItemProps } from './notification-item';

export interface NotificationSectionProps {
  title: string;
  notifications: NotificationItemProps[];
  isMobile?: boolean;
}

export const NotificationSection: React.FC<NotificationSectionProps> = ({
  title,
  notifications,
  isMobile = false
}) => {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: isMobile ? '16px' : '16px',
      width: '100%',
      alignSelf: 'stretch'
    }}>
      {/* Section title */}
      <h2 style={{
        fontFamily: 'Sora',
        fontWeight: 400,
        fontSize: isMobile ? '14px' : '16px',
        lineHeight: '1.5em',
        color: '#FFFFFF',
        margin: 0,
        width: '100%'
      }}>
        {title}
      </h2>

      {/* Notifications list */}
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '24px',
        width: '100%',
        alignSelf: 'stretch'
      }}>
        {notifications.map((notification, index) => (
          <NotificationItem key={index} {...notification} />
        ))}
      </div>
    </div>
  );
};
