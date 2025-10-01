import type { NotificationItemProps } from './notification-item';

export const mockNotifications: NotificationItemProps[] = [
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
];

export interface NotificationsByPeriod {
  todayNotifications: NotificationItemProps[];
  thisWeekNotifications: NotificationItemProps[];
  thisMonthNotifications: NotificationItemProps[];
}

export const organizeNotificationsByPeriod = (
  notifications: NotificationItemProps[]
): NotificationsByPeriod => {
  // Esta é uma implementação simplificada
  // Em produção, você usaria datas reais para organizar
  const today = notifications.slice(0, 2);
  const thisWeek = notifications.slice(2, 4);
  const thisMonth = notifications.slice(4);

  return {
    todayNotifications: today,
    thisWeekNotifications: thisWeek,
    thisMonthNotifications: thisMonth
  };
};

