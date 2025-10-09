import React from 'react';
import { CalendarDay } from '../types';
import { CalendarDayCell } from './calendar-day-cell';

interface CalendarGridProps {
  weeks: CalendarDay[][];
  onEventClick?: (event: any) => void;
}

export const CalendarGrid: React.FC<CalendarGridProps> = ({ weeks, onEventClick }) => {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'];

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      {/* Week day headers */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(7, 1fr)',
        }}
      >
        {weekDays.map((day, index) => (
          <div
            key={day}
            style={{
              padding: '10px 8px',
              background: '#1D1D2E',
              border: '1px solid #22262F',
              borderTop: 'none',
              borderLeft: index === 0 ? 'none' : 'none',
              borderRight: index === 6 ? 'none' : '1px solid #22262F',
              borderBottom: '1px solid #22262F',
              textAlign: 'center',
            }}
          >
            <span
              style={{
                fontFamily: 'Sora',
                fontSize: '12px',
                fontWeight: 400,
                lineHeight: '1.5em',
                color: '#CECFD2',
              }}
            >
              {day}
            </span>
          </div>
        ))}
      </div>

      {/* Calendar days */}
      {weeks.map((week, weekIndex) => (
        <div
          key={weekIndex}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(7, 1fr)',
          }}
        >
          {week.map((day, dayIndex) => (
            <CalendarDayCell
              key={dayIndex}
              day={day}
              dayIndex={dayIndex}
              onEventClick={onEventClick}
            />
          ))}
        </div>
      ))}
    </div>
  );
};

