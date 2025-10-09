import React, { useState } from 'react';
import { MentoriasHeader } from './header';
import { CalendarHeader, CalendarGrid } from './calendar';
import { CalendarDay, MentoriaEvent } from './types';

export const MentoriasCalendar: React.FC = () => {
  const today = new Date();
  const [currentMonth, setCurrentMonth] = useState(today.getMonth());
  const [currentYear, setCurrentYear] = useState(today.getFullYear());
  const [viewType, setViewType] = useState<'month' | 'week' | 'day'>('month');

  // Mock data para eventos - organizado por data completa (ano-mês-dia)
  // Em produção, isso virá de uma API
  const mockEventsData: Record<string, MentoriaEvent[]> = {
    // Setembro 2025 (mês anterior - exemplos)
    '2025-8-28': [
      { id: 'set28-1', title: 'Mentoria com', time: '9:00 AM', color: 'gray' },
      { id: 'set28-2', title: 'Mentoria com', time: '11:30 AM', color: 'brand' },
    ],
    '2025-8-30': [
      { id: 'set30-1', title: 'Mentoria com', time: '2:00 PM', color: 'blue' },
    ],
    // Outubro 2025 (mês atual)
    '2025-9-2': [
      { id: 'out2-1', title: 'Mentoria com', time: '10:00 AM', color: 'pink' },
      { id: 'out2-2', title: 'Mentoria com', time: '4:00 PM', color: 'gray' },
      { id: 'out2-3', title: 'Mentoria com', time: '6:00 PM', color: 'blue' },
      { id: 'out2-4', title: 'Mentoria com', time: '8:00 PM', color: 'orange' },
    ],
    '2025-9-3': [
      { id: 'out3-1', title: 'Mentoria com', time: '9:00 AM', color: 'gray' },
    ],
    '2025-9-4': [
      { id: 'out4-1', title: 'Mentoria com', time: '10:30 AM', color: 'orange', showDot: true },
    ],
    '2025-9-15': [
      { id: 'out15-1', title: 'Mentoria com', time: '9:30 AM', color: 'blue' },
    ],
    '2025-9-16': [
      { id: 'out16-1', title: 'Mentoria com', time: '10:00 AM', color: 'pink' },
      { id: 'out16-2', title: 'Mentoria com', time: '4:00 PM', color: 'gray' },
    ],
    '2025-9-21': [
      { id: 'out21-1', title: 'Mentoria com', time: '11:30 AM', color: 'orange' },
    ],
    '2025-9-23': [
      { id: 'out23-1', title: 'Mentoria com', time: '10:00 AM', color: 'pink' },
    ],
    '2025-9-24': [
      { id: 'out24-1', title: 'Mentoria com', time: '9:00 AM', color: 'gray' },
      { id: 'out24-2', title: 'Mentoria com', time: '1:45 PM', color: 'yellow' },
    ],
    '2025-9-29': [
      { id: 'out29-1', title: 'Mentoria com', time: '9:30 AM', color: 'blue' },
    ],
    '2025-9-30': [
      { id: 'out30-1', title: 'Mentoria com', time: '4:00 PM', color: 'gray' },
      { id: 'out30-2', title: 'Mentoria com', time: '5:30 PM', color: 'pink' },
    ],
  };

  const getEventsForDate = (year: number, month: number, date: number): MentoriaEvent[] => {
    const key = `${year}-${month}-${date}`;
    return mockEventsData[key] || [];
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
          padding: '24px 32px',
          display: 'flex',
          flexDirection: 'column',
          gap: '24px',
          flex: 1,
        }}
      >
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
          />
        </div>
      </div>
    </div>
  );
};
