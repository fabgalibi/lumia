import React, { useState, useMemo } from 'react';
import { useSidebar } from '@/contexts/sidebar-context';
import { NotificationHeader } from './notification-header';
import { NotificationSection } from './notification-section';
import { NotificationPagination } from './notification-pagination';
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
  const [notifications, setNotifications] = useState<NotificationItemProps[]>([
    // De hoje
    {
      type: 'user',
      title: 'Fernanda Costa',
      subtitle: '2 minutos atrás',
      description: 'Adicionou um anexo com questões comentadas em Legislação Previdenciária',
      highlightedText: 'Legislação Previdenciária',
      isUnread: true,
      avatar: '/images/notifications/avatar-fernanda-65fd5c.png',
      attachment: {
        name: 'LP-Questoescomentadas.pdf',
        size: '720 KB',
        fileType: 'PDF'
      }
    },
    {
      type: 'system',
      title: 'Atualização de conteúdo',
      subtitle: '10 minutos atrás',
      description: 'O simulado de Raciocínio Lógico foi atualizado com novas questões e já está liberado para você praticar!',
      highlightedText: 'Raciocínio Lógico',
      isUnread: false,
      icon: 'indent'
    },
    // Desta semana
    {
      type: 'system',
      title: 'Lembrete de estudo',
      subtitle: '20 de agosto',
      description: 'Você tem materiais novos não visualizados em sua sprint. Organize sua rotina e aproveite o conteúdo!',
      highlightedText: 'sprint',
      isUnread: false,
      icon: 'alert-circle'
    },
    {
      type: 'system',
      title: 'Reforço na sua trilha',
      subtitle: '18 de agosto',
      description: 'Foi adicionada uma aula bônus sobre técnicas de memorização. Pode ser o diferencial na sua preparação!',
      highlightedText: 'técnicas de memorização',
      isUnread: false,
      icon: 'indent'
    },
    // Deste mês
    {
      type: 'system',
      title: 'Parabéns pelo progresso!',
      subtitle: '13 de agosto',
      description: 'Você concluiu 70% da sua trilha de estudos. Continue assim, você está cada vez mais perto de concluir!',
      isUnread: false,
      icon: 'star'
    },
    {
      type: 'user',
      title: 'João Pedro',
      subtitle: '12 de agosto',
      description: 'Adicionou um anexo com informações importantes em Contabilidade.',
      highlightedText: 'Contabilidade',
      isUnread: false,
      avatar: '/images/notifications/avatar-joao-pedro-611fc0.png',
      attachment: {
        name: 'observacoes-contabilidade.txt',
        size: '720 KB',
        fileType: 'TXT'
      }
    },
    {
      type: 'system',
      title: 'Mentoria 8/08',
      subtitle: '04 de agosto',
      description: 'Sua mentoria com Ana Beatriz está chegando! Você será lembrado novamente dez minutos antes da mentoria.',
      highlightedText: 'Ana Beatriz',
      isUnread: false,
      icon: 'calendar'
    }
  ]);

  // Organize notifications by time period
  const { todayNotifications, thisWeekNotifications, thisMonthNotifications } = useMemo(() => {
    const today = notifications.slice(0, 2); // Fernanda Costa e Atualização de conteúdo
    const thisWeek = notifications.slice(2, 4); // Lembrete de estudo e Reforço na trilha
    const thisMonth = notifications.slice(4); // Parabéns, João Pedro e Mentoria

    return {
      todayNotifications: today,
      thisWeekNotifications: thisWeek,
      thisMonthNotifications: thisMonth
    };
  }, [notifications]);

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

  if (!isOpen) return null;

  return (
    <>
      {/* Overlay - Não cobre o sidebar */}
      <div
        onClick={onClose}
        style={{
          position: 'fixed',
          top: 0,
          left: `${sidebarWidth}px`,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          zIndex: 999
        }}
      />

      {/* Modal - Colado no sidebar */}
      <div style={{
        position: 'fixed',
        top: 0,
        left: `${sidebarWidth}px`,
        width: `min(505px, calc(100vw - ${sidebarWidth}px))`,
        maxWidth: '100%',
        height: '100vh',
        backgroundColor: '#2D2D45',
        borderRadius: '0px 16px 16px 0px',
        display: 'flex',
        flexDirection: 'column',
        padding: '24px 20px 20px 24px',
        gap: '16px',
        zIndex: 1000,
        boxShadow: '0px 20px 24px -4px rgba(0, 0, 0, 0.08), 0px 8px 8px -4px rgba(0, 0, 0, 0.03)',
        overflow: 'hidden',
        boxSizing: 'border-box'
      }}>
        {/* Header */}
        <NotificationHeader onMarkAllAsRead={handleMarkAllAsRead} />

        {/* Content with sections */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '18px',
          flex: '1 1 0',
          overflowY: 'auto',
          overflowX: 'hidden',
          alignSelf: 'stretch',
          minHeight: 0,
          maxHeight: '100%',
          paddingRight: '4px',
          WebkitOverflowScrolling: 'touch'
        }}>
          {/* Today section */}
          <NotificationSection
            title="De hoje"
            notifications={todayNotifications}
          />

          {/* Divider */}
          <div style={{
            width: '100%',
            height: '1px',
            backgroundColor: '#424257',
            flexShrink: 0
          }} />

          {/* This week section */}
          <NotificationSection
            title="Desta semana"
            notifications={thisWeekNotifications}
          />

          {/* Divider */}
          <div style={{
            width: '100%',
            height: '1px',
            backgroundColor: '#424257',
            flexShrink: 0
          }} />

          {/* This month section */}
          <NotificationSection
            title="Deste mês"
            notifications={thisMonthNotifications}
          />
        </div>

        {/* Pagination */}
        <NotificationPagination
          currentPage={currentPage}
          totalPages={10}
          onPrevious={handlePrevious}
          onNext={handleNext}
        />
      </div>
    </>
  );
};
