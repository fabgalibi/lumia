import React from 'react';
import { NotificationItem, NotificationItemProps } from './notification-item';

export interface NotificationSectionProps {
  title: string;
  notifications: NotificationItemProps[];
}

export const NotificationSection: React.FC<NotificationSectionProps> = ({
  title,
  notifications
}) => {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '14px',
      width: '100%',
      alignSelf: 'stretch'
    }}>
      {/* Section title */}
      <h2 style={{
        fontFamily: 'Sora',
        fontWeight: 500,
        fontSize: '16px',
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
        gap: '18px',
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
