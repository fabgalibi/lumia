import React, { useState, useMemo, useEffect } from 'react';
import { useSidebar } from '@/contexts/sidebar-context';
import { NotificationHeader } from './notification-header';
import { NotificationSection } from './notification-section';
import { NotificationPagination } from './notification-pagination';
import { Overlay } from './overlay';
import { Divider } from './divider';
import { EmptyState } from './empty-state';
import { mockNotifications, organizeNotificationsByPeriod } from './mock-data';
import type { NotificationItemProps } from './notification-item';

export interface NotificationsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const NotificationsModal: React.FC<NotificationsModalProps> = ({
  isOpen,
  onClose
}) => {
  const { sidebarWidth } = useSidebar();
  const [currentPage, setCurrentPage] = useState(1);
  const [notifications, setNotifications] = useState<NotificationItemProps[]>(mockNotifications);
  const [isMobile, setIsMobile] = useState(false);

  // Detect mobile screen size
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Organize notifications by time period
  const { todayNotifications, thisWeekNotifications, thisMonthNotifications } = useMemo(
    () => organizeNotificationsByPeriod(notifications),
    [notifications]
  );

  const handleMarkAllAsRead = () => {
    setNotifications(prev => prev.map(n => ({ ...n, isUnread: false })));
  };

  const handlePrevious = () => {
    if (currentPage > 1) {
      setCurrentPage(prev => prev - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < 10) {
      setCurrentPage(prev => prev + 1);
    }
  };

  const hasNotifications = notifications.length > 0;

  if (!isOpen) return null;

  return (
    <>
      {/* Overlay - Não cobre o sidebar no desktop, cobre tudo no mobile */}
      <Overlay onClick={onClose} leftOffset={isMobile ? 0 : sidebarWidth} />

      {/* Modal */}
      <div style={{
        position: 'fixed',
        top: 0,
        left: isMobile ? 0 : `${sidebarWidth}px`,
        width: isMobile ? '100%' : `min(505px, calc(100vw - ${sidebarWidth}px))`,
        maxWidth: '100%',
        height: '100vh',
        backgroundColor: isMobile ? '#252532' : '#2D2D45',
        borderRadius: isMobile ? 0 : '0px 16px 16px 0px',
        display: 'flex',
        flexDirection: 'column',
        padding: isMobile ? 0 : '24px 20px 20px 24px',
        gap: isMobile ? 0 : '16px',
        zIndex: 1000,
        boxShadow: '0px 20px 24px -4px rgba(0, 0, 0, 0.08), 0px 8px 8px -4px rgba(0, 0, 0, 0.03)',
        overflow: 'hidden',
        boxSizing: 'border-box'
      }}>
        {/* Header */}
        <NotificationHeader 
          onMarkAllAsRead={handleMarkAllAsRead} 
          onBack={isMobile ? onClose : undefined}
          isMobile={isMobile}
        />

        {/* Content with sections */}
        {hasNotifications ? (
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: isMobile ? '20px' : '20px',
            flex: '1 1 0',
            overflowY: 'auto',
            overflowX: 'hidden',
            alignSelf: 'stretch',
            minHeight: 0,
            maxHeight: '100%',
            padding: isMobile ? '20px 20px 20px 16px' : 0,
            paddingRight: isMobile ? '16px' : '4px',
            WebkitOverflowScrolling: 'touch'
          }}>
            {/* Today section */}
            {todayNotifications.length > 0 && (
              <>
                <NotificationSection
                  title="De hoje"
                  notifications={todayNotifications}
                  isMobile={isMobile}
                />
                <Divider />
              </>
            )}

            {/* This week section */}
            {thisWeekNotifications.length > 0 && (
              <>
                <NotificationSection
                  title="Desta semana"
                  notifications={thisWeekNotifications}
                  isMobile={isMobile}
                />
                <Divider />
              </>
            )}

            {/* This month section */}
            {thisMonthNotifications.length > 0 && (
              <NotificationSection
                title="Deste mês"
                notifications={thisMonthNotifications}
                isMobile={isMobile}
              />
            )}
            
            {/* Spacer para garantir scroll completo */}
            <div style={{ height: '20px', flexShrink: 0 }} />
          </div>
        ) : (
          <EmptyState />
        )}

        {/* Pagination - só exibe no desktop se houver notificações */}
        {hasNotifications && !isMobile && (
          <NotificationPagination
            currentPage={currentPage}
            totalPages={10}
            onPrevious={handlePrevious}
            onNext={handleNext}
          />
        )}
      </div>
    </>
  );
};
