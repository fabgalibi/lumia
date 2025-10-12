import React, { useState, useEffect } from 'react';
import { MentoriasHeader } from './header';
import { CalendarHeader } from './shared';
import { CalendarGrid } from './calendar';
import { WeekView } from './week-view';
import { DayView } from './day-view';
import { MentoriaModal } from './mentoria-modal/index';
import { CalendarDay, MentoriaEvent } from './types';

export const MentoriasCalendar: React.FC = () => {
  const today = new Date();
  const [currentMonth, setCurrentMonth] = useState(today.getMonth());
  const [currentYear, setCurrentYear] = useState(today.getFullYear());
  const [viewType, setViewType] = useState<'month' | 'week' | 'day'>('month');
  const [selectedMentoria, setSelectedMentoria] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Detectar se é mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Mock data para eventos - organizado por data completa (ano-mês-dia-hora)
  // Em produção, isso virá de uma API
  // Formato: 'YYYY-M-D-H' onde H é a hora em formato 24h
  const mockEventsData: Record<string, any> = {
    // Outubro 2025 - Domingo (dia 5)
    '2025-9-5-10': { 
      duration: 30,
      event: { 
        id: '1', 
        title: 'Mentoria com Julia Costa', 
        time: '10:00 AM', 
        color: 'gray' as const,
        description: 'Nossa mentoria está marcada para as 10:00. Nesse encontro vamos revisar os principais pontos de Direito Constitucional e resolver algumas questões para fixar o conteúdo. Traga suas dúvidas, pois teremos um espaço reservado para discutir casos práticos e estratégias de estudo.',
        platform: 'Google Meet',
        mentor: {
          name: 'Julia Costa',
          avatar: '',
          isOnline: true
        },
        notifyBefore: true
      }
    },
    
    // Outubro 2025 - Segunda (dia 6)
    '2025-9-6-11': { 
      duration: 60,
      event: { 
        id: '2', 
        title: 'Mentoria com Ana Beatriz', 
        time: '11:00 AM', 
        color: 'brand' as const,
        description: 'Nossa mentoria está marcada para as 11:00. Nesse encontro vamos revisar os principais pontos de Direito Administrativo e resolver algumas questões para fixar o conteúdo. Traga suas dúvidas, pois teremos um espaço reservado para discutir casos práticos e estratégias de estudo.',
        platform: 'Google Meet',
        mentor: {
          name: 'Ana Beatriz',
          avatar: '',
          isOnline: true
        },
        notifyBefore: true
      }
    },
    
    // Outubro 2025 - Quarta (dia 8)
    '2025-9-8-14': { 
      duration: 120,
      event: { 
        id: '4', 
        title: 'Mentoria com Mariana Silva', 
        time: '2:00 PM', 
        color: 'indigo' as const,
        description: 'Nossa mentoria está marcada para as 14:00. Nesse encontro vamos revisar os principais pontos de Direito Penal e resolver algumas questões para fixar o conteúdo. Traga suas dúvidas, pois teremos um espaço reservado para discutir casos práticos e estratégias de estudo.',
        platform: 'Zoom',
        mentor: {
          name: 'Mariana Silva',
          avatar: '',
          isOnline: false
        },
        notifyBefore: false
      }
    },
    
    // Outubro 2025 - Quinta (dia 9)
    '2025-9-9-13': { 
      duration: 60,
      event: { 
        id: '5', 
        title: 'Mentoria com João Pedro', 
        time: '1:00 PM', 
        color: 'orange' as const,
        description: 'Nossa mentoria está marcada para as 13:00. Nesse encontro vamos revisar os principais pontos de Direito Civil e resolver algumas questões para fixar o conteúdo. Traga suas dúvidas, pois teremos um espaço reservado para discutir casos práticos e estratégias de estudo.',
        platform: 'Microsoft Teams',
        mentor: {
          name: 'João Pedro',
          avatar: '',
          isOnline: true
        },
        notifyBefore: true
      }
    },

    // Outubro 2025 - Quinta (dia 9) - Eventos em horários diferentes
    '2025-9-9-9': { 
      duration: 30,
      event: { 
        id: '6', 
        title: 'Mentoria com Carlos', 
        time: '9:00 AM', 
        color: 'green' as const,
        description: 'Revisão matinal de Direito Tributário.',
        platform: 'Google Meet',
        mentor: {
          name: 'Carlos',
          avatar: '',
          isOnline: true
        },
        notifyBefore: true
      }
    },

    '2025-9-9-15': { 
      duration: 60,
      event: { 
        id: '7', 
        title: 'Mentoria com Maria', 
        time: '3:00 PM', 
        color: 'blue' as const,
        description: 'Discussão sobre Direito Civil.',
        platform: 'Zoom',
        mentor: {
          name: 'Maria',
          avatar: '',
          isOnline: false
        },
        notifyBefore: false
      }
    },

    '2025-9-9-20': { 
      duration: 120,
      event: { 
        id: '8', 
        title: 'Mentoria noturna com Pedro', 
        time: '8:00 PM', 
        color: 'pink' as const,
        description: 'Sessão noturna de revisão geral.',
        platform: 'Microsoft Teams',
        mentor: {
          name: 'Pedro',
          avatar: '',
          isOnline: true
        },
        notifyBefore: true
      }
    },
    
    // Outubro 2025 - Sexta (dia 10)
    '2025-9-10-10': { 
      duration: 30,
      event: { 
        id: '6', 
        title: 'Mentoria com Paula Costa', 
        time: '10:00 AM', 
        color: 'green' as const,
        description: 'Nossa mentoria está marcada para as 10:00. Nesse encontro vamos revisar os principais pontos de Direito Tributário e resolver algumas questões para fixar o conteúdo. Traga suas dúvidas, pois teremos um espaço reservado para discutir casos práticos e estratégias de estudo.',
        platform: 'Google Meet',
        mentor: {
          name: 'Paula Costa',
          avatar: '',
          isOnline: true
        },
        notifyBefore: true
      }
    },
  };

  // Eventos multi-dia (semana toda, etc)
  const multiDayEvents = [
    {
      startDate: new Date(2025, 9, 5), // 5 de outubro 2025 (domingo)
      endDate: new Date(2025, 9, 11),   // 11 de outubro 2025 (sábado)
      hour: 9, // 9 AM
      duration: 60,
      event: {
        id: 'week-1',
        title: 'Mentoria Semanal com Dr. Roberto',
        time: '9:00 AM',
        color: 'yellow' as const,
        description: 'Mentoria semanal focada em revisão de conteúdos. Durante esta semana, vamos revisar os principais tópicos estudados e resolver questões práticas. Essa é uma excelente oportunidade para esclarecer dúvidas e consolidar o aprendizado.',
        platform: 'Google Meet',
        mentor: {
          name: 'Dr. Roberto',
          avatar: '',
          isOnline: true
        },
        notifyBefore: true
      }
    }
  ];

  // Converter eventos para o formato da visualização mensal
  const getEventsForDate = (year: number, month: number, date: number): MentoriaEvent[] => {
    const events: MentoriaEvent[] = [];
    
    // Buscar eventos regulares para este dia
    Object.keys(mockEventsData).forEach(key => {
      const [y, m, d] = key.split('-').map(Number);
      if (y === year && m === month && d === date) {
        const data = mockEventsData[key];
        events.push(data.event);
      }
    });
    
    // Buscar eventos multi-dia que incluem este dia
    const currentDate = new Date(year, month, date);
    multiDayEvents.forEach(multiEvent => {
      if (currentDate >= multiEvent.startDate && currentDate <= multiEvent.endDate) {
        events.push({
          ...multiEvent.event,
          showDot: true, // Mostrar dot para eventos multi-dia
        });
      }
    });
    
    return events;
  };

  const previousMonth = () => {
    if (currentMonth === 0) {
      setCurrentMonth(11);
      setCurrentYear(currentYear - 1);
    } else {
      setCurrentMonth(currentMonth - 1);
    }
  };

  const nextMonth = () => {
    if (currentMonth === 11) {
      setCurrentMonth(0);
      setCurrentYear(currentYear + 1);
    } else {
      setCurrentMonth(currentMonth + 1);
    }
  };

  // Gerar dias do calendário
  const generateCalendar = (): CalendarDay[][] => {
    const firstDay = new Date(currentYear, currentMonth, 1).getDay();
    const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
    const daysInPrevMonth = new Date(currentYear, currentMonth, 0).getDate();
    
    const weeks: CalendarDay[][] = [];
    let currentWeek: CalendarDay[] = [];
    
    // Calcular ano e mês anterior
    const prevMonth = currentMonth === 0 ? 11 : currentMonth - 1;
    const prevYear = currentMonth === 0 ? currentYear - 1 : currentYear;
    
    // Calcular ano e mês seguinte
    const nextMonth = currentMonth === 11 ? 0 : currentMonth + 1;
    const nextYear = currentMonth === 11 ? currentYear + 1 : currentYear;
    
    // Dias do mês anterior
    for (let i = firstDay - 1; i >= 0; i--) {
      const prevMonthDate = daysInPrevMonth - i;
      const isPrevMonthToday = 
        today.getDate() === prevMonthDate && 
        today.getMonth() === prevMonth && 
        today.getFullYear() === prevYear;
      
      currentWeek.push({
        date: prevMonthDate,
        isCurrentMonth: false,
        isToday: isPrevMonthToday,
        isSelected: false,
        events: getEventsForDate(prevYear, prevMonth, prevMonthDate),
      });
    }
    
    // Dias do mês atual
    const isCurrentMonthAndYear = today.getMonth() === currentMonth && today.getFullYear() === currentYear;
    
    for (let date = 1; date <= daysInMonth; date++) {
      const isToday = isCurrentMonthAndYear && today.getDate() === date;
      
      currentWeek.push({
        date,
        isCurrentMonth: true,
        isToday,
        isSelected: isToday, // Dia atual sempre selecionado (laranja)
        events: getEventsForDate(currentYear, currentMonth, date),
      });
      
      if (currentWeek.length === 7) {
        weeks.push(currentWeek);
        currentWeek = [];
      }
    }
    
    // Dias do próximo mês
    if (currentWeek.length > 0) {
      let nextMonthDay = 1;
      while (currentWeek.length < 7) {
        const isNextMonthToday = 
          today.getDate() === nextMonthDay && 
          today.getMonth() === nextMonth && 
          today.getFullYear() === nextYear;
        
        currentWeek.push({
          date: nextMonthDay,
          isCurrentMonth: false,
          isToday: isNextMonthToday,
          isSelected: false,
          events: getEventsForDate(nextYear, nextMonth, nextMonthDay),
        });
        nextMonthDay++;
      }
      weeks.push(currentWeek);
    }
    
    return weeks;
  };

  const calendarWeeks = generateCalendar();

  const handleEventClick = (event: any) => {
    // Buscar dados completos do evento original (eventos regulares)
    const eventKey = Object.keys(mockEventsData).find(key => {
      const eventData = mockEventsData[key];
      return eventData.event.id === event.id;
    });

    let fullEventData = eventKey ? mockEventsData[eventKey] : null;
    
    // Se não encontrou nos eventos regulares, buscar nos multi-dia
    if (!fullEventData) {
      const multiDayEvent = multiDayEvents.find(me => me.event.id === event.id);
      if (multiDayEvent) {
        fullEventData = multiDayEvent;
      }
    }
    
    if (!fullEventData) {
      console.warn('Evento não encontrado:', event.id);
      return;
    }

    // Função auxiliar para calcular horário final
    const calculateEndTime = (startTime: string, durationMinutes: number) => {
      const [time, period] = startTime.split(' ');
      let [hours, minutes] = time.split(':').map(Number);
      
      // Converter para formato 24h
      if (period === 'PM' && hours !== 12) hours += 12;
      if (period === 'AM' && hours === 12) hours = 0;
      
      // Adicionar duração
      minutes += durationMinutes;
      hours += Math.floor(minutes / 60);
      minutes = minutes % 60;
      
      // Converter de volta para 12h
      const endPeriod = hours >= 12 ? 'PM' : 'AM';
      const endHours = hours > 12 ? hours - 12 : (hours === 0 ? 12 : hours);
      
      return `${endHours}:${minutes.toString().padStart(2, '0')} ${endPeriod}`;
    };

    // Função auxiliar para formatar data
    const formatDate = (dateKey?: string) => {
      if (!dateKey) {
        // Para eventos multi-dia, usar a data de hoje ou a data de início
        const multiDayEvent = multiDayEvents.find(me => me.event.id === fullEventData.event.id);
        if (multiDayEvent) {
          const startDate = multiDayEvent.startDate;
          const months = ['janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho', 
                          'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro'];
          return `${startDate.getDate()} de ${months[startDate.getMonth()]}`;
        }
        return '';
      }
      const [, month, day] = dateKey.split('-').slice(0, 3).map(Number);
      const months = ['janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho', 
                      'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro'];
      return `${day} de ${months[month]}`;
    };

    const endTime = calculateEndTime(fullEventData.event.time, fullEventData.duration);
    
    // Formatar os dados do evento para o modal
    const mentoriaData = {
      id: fullEventData.event.id,
      title: fullEventData.event.title,
      date: formatDate(eventKey),
      time: fullEventData.event.time.replace(' AM', '').replace(' PM', ''), // Remover AM/PM para exibição
      duration: endTime.replace(' AM', '').replace(' PM', ''),
      description: fullEventData.event.description,
      platform: fullEventData.event.platform,
      mentor: fullEventData.event.mentor,
      notifyBefore: fullEventData.event.notifyBefore
    };
    
    setSelectedMentoria(mentoriaData);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedMentoria(null);
  };

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        flex: 1,
        background: '#191923',
      }}
    >
      <MentoriasHeader
        viewType={viewType}
        onViewTypeChange={setViewType}
      />

      <div
        style={{
          padding: isMobile ? '16px' : '24px 32px',
          display: 'flex',
          flexDirection: 'column',
          gap: isMobile ? '16px' : '24px',
          flex: 1,
          width: '100%',
        }}
      >
        {isMobile ? (
          // Mobile: sempre usar Day View
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              background: '#252532',
              border: '1px solid #2C2C45',
              borderRadius: '8px',
              boxShadow: '0px 1px 2px 0px rgba(255, 255, 255, 0)',
              width: '100%',
              maxWidth: '100%',
            }}
          >
            <CalendarHeader
              currentMonth={currentMonth}
              currentYear={currentYear}
              onPreviousMonth={previousMonth}
              onNextMonth={nextMonth}
            />

            <DayView
              currentMonth={currentMonth}
              currentYear={currentYear}
              eventsData={mockEventsData}
              onEventClick={handleEventClick}
            />
          </div>
        ) : viewType === 'month' ? (
          // Desktop: Month View
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              background: '#252532',
              border: '1px solid #2C2C45',
              borderRadius: '12px',
              boxShadow: '0px 1px 2px 0px rgba(255, 255, 255, 0)',
              flex: 1,
            }}
          >
            <CalendarHeader
              currentMonth={currentMonth}
              currentYear={currentYear}
              onPreviousMonth={previousMonth}
              onNextMonth={nextMonth}
            />

            <CalendarGrid
              weeks={calendarWeeks}
              onEventClick={handleEventClick}
            />
          </div>
        ) : (
          // Desktop: Week View
          <WeekView
            currentMonth={currentMonth}
            currentYear={currentYear}
            onPreviousMonth={previousMonth}
            onNextMonth={nextMonth}
            eventsData={mockEventsData}
            multiDayEvents={multiDayEvents}
            onEventClick={handleEventClick}
          />
        )}
      </div>

      <MentoriaModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        mentoria={selectedMentoria}
      />
    </div>
  );
};
