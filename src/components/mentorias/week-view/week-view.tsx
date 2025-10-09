import React from 'react';
import { CalendarHeader } from '../shared';
import { WeekDaysHeader } from './week-days-header';
import { WeekViewGrid } from './week-view-grid';

interface WeekViewProps {
  currentMonth: number;
  currentYear: number;
  onPreviousMonth: () => void;
  onNextMonth: () => void;
  eventsData: Record<string, any>;
  multiDayEvents: any[];
  onEventClick?: (event: any) => void;
}

export const WeekView: React.FC<WeekViewProps> = ({ 
  currentMonth, 
  currentYear,
  onPreviousMonth,
  onNextMonth,
  eventsData,
  multiDayEvents,
  onEventClick
}) => {
  const today = new Date();

  // Gerar semana baseada no mês/ano atual
  const generateWeekDays = () => {
    const weekDays = [];
    
    // Se estamos no mês/ano atual, mostrar a semana atual
    // Se não, mostrar a primeira semana do mês
    const isCurrentMonthYear = 
      today.getMonth() === currentMonth && 
      today.getFullYear() === currentYear;
    
    let referenceDate: Date;
    
    if (isCurrentMonthYear) {
      // Usar hoje como referência e encontrar o domingo da semana atual
      referenceDate = new Date(today);
    } else {
      // Usar o primeiro dia do mês como referência
      referenceDate = new Date(currentYear, currentMonth, 1);
    }
    
    // Encontrar o domingo da semana de referência
    const dayOfWeek = referenceDate.getDay();
    const startOfWeek = new Date(referenceDate);
    startOfWeek.setDate(referenceDate.getDate() - dayOfWeek);

    const dayNames = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'];

    for (let i = 0; i < 7; i++) {
      const currentDay = new Date(startOfWeek);
      currentDay.setDate(startOfWeek.getDate() + i);

      weekDays.push({
        day: dayNames[i],
        date: currentDay.getDate(),
        month: currentDay.getMonth(), // Adicionado para controle
        year: currentDay.getFullYear(), // Adicionado para controle
        isToday: 
          currentDay.getDate() === today.getDate() &&
          currentDay.getMonth() === today.getMonth() &&
          currentDay.getFullYear() === today.getFullYear(),
      });
    }

    return weekDays;
  };

  const weekDays = generateWeekDays();

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        flex: 1,
        background: '#252532',
        border: '1px solid #2C2C45',
        borderRadius: '12px',
        boxShadow: '0px 1px 2px 0px rgba(255, 255, 255, 0)',
        overflow: 'hidden',
        maxHeight: 'calc(100vh - 200px)', // Limita altura para ativar scroll
      }}
    >
      <CalendarHeader
        currentMonth={currentMonth}
        currentYear={currentYear}
        onPreviousMonth={onPreviousMonth}
        onNextMonth={onNextMonth}
      />
      
      <WeekDaysHeader weekDays={weekDays} />
      <WeekViewGrid 
        weekDays={weekDays} 
        eventsData={eventsData}
        multiDayEvents={multiDayEvents}
        onEventClick={onEventClick}
      />
    </div>
  );
};

