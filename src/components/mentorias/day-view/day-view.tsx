import React, { useState } from 'react';
import { DayViewHeader } from './day-view-header';
import { DayViewGrid } from './day-view-grid';

interface DayViewProps {
  currentMonth: number;
  currentYear: number;
  eventsData: Record<string, any>;
  onEventClick?: (event: any) => void;
}

export const DayView: React.FC<DayViewProps> = ({
  currentMonth,
  currentYear,
  eventsData,
  onEventClick
}) => {
  const today = new Date();
  const [selectedDayIndex, setSelectedDayIndex] = useState(() => {
    // Calcular o dia de hoje como selecionado inicialmente
    const currentDate = new Date();
    return currentDate.getDay(); // 0 = Domingo, 6 = Sábado
  });

  // Gerar semana atual
  const generateWeekDays = () => {
    const weekDays = [];
    
    // Usar o dia de hoje como referência
    const currentDate = new Date(today);
    const dayOfWeek = currentDate.getDay(); // 0 = Domingo, 6 = Sábado
    
    // Calcular o domingo desta semana
    const sunday = new Date(currentDate);
    sunday.setDate(currentDate.getDate() - dayOfWeek);
    
    const dayNames = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'];
    
    for (let i = 0; i < 7; i++) {
      const date = new Date(sunday);
      date.setDate(sunday.getDate() + i);
      const isToday = date.toDateString() === today.toDateString();
      
      weekDays.push({
        day: dayNames[i],
        date: date.getDate(),
        month: date.getMonth(),
        year: date.getFullYear(),
        isToday: isToday,
        isSelected: i === selectedDayIndex, // Usar o índice selecionado
      });
    }
    
    return weekDays;
  };

  const weekDays = generateWeekDays();
  const selectedDay = weekDays[selectedDayIndex];

  // Buscar eventos do dia selecionado
  const getEventsForSelectedDay = () => {
    const events: any[] = [];
    
    Object.keys(eventsData).forEach(key => {
      const [year, month, day, hour] = key.split('-').map(Number);
      if (year === selectedDay.year && month === selectedDay.month && day === selectedDay.date) {
        const eventData = eventsData[key];
        events.push({
          ...eventData.event,
          duration: eventData.duration,
        });
      }
    });
    
    return events;
  };

  const dayEvents = getEventsForSelectedDay();

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        position: 'relative',
        width: '100%',
      }}
    >
      <DayViewHeader
        weekDays={weekDays}
        onSelectDay={setSelectedDayIndex}
      />
      
      <div
        className="day-view-scrollbar"
        style={{
          height: 'calc(100vh - 300px)', // Preenche toda a tela embaixo
          width: '100%',
        }}
      >
        <DayViewGrid
          selectedDay={selectedDayIndex}
          events={dayEvents}
          onEventClick={onEventClick}
        />
      </div>
    </div>
  );
};

