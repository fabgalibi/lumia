import React from 'react';
import { CalendarDay } from '../types';
import { CalendarEvent } from './calendar-event';

interface CalendarDayCellProps {
  day: CalendarDay;
  dayIndex: number;
}

export const CalendarDayCell: React.FC<CalendarDayCellProps> = ({ day, dayIndex }) => {
  return (
    <div
      style={{
        padding: '8px',
        background: day.isCurrentMonth ? '#1D1D2E' : '#191923',
        border: '1px solid #22262F',
        borderTop: 'none',
        borderLeft: 'none',
        borderRight: dayIndex === 6 ? 'none' : '1px solid #22262F',
        borderBottom: '1px solid #22262F',
        minHeight: '100px',
        cursor: day.isCurrentMonth ? 'pointer' : 'default',
        opacity: day.isCurrentMonth ? 1 : 0.6,
        display: 'flex',
        flexDirection: 'column',
        gap: '4px',
      }}
    >
      <div
        style={{
          width: '24px',
          height: '24px',
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: day.isSelected ? '#F66649' : day.isToday ? '#22262F' : 'transparent',
        }}
      >
        <span
          style={{
            fontFamily: 'Sora',
            fontSize: '12px',
            fontWeight: 600,
            lineHeight: '1.5em',
            color: day.isSelected ? '#13161B' : day.isCurrentMonth ? '#CECFD2' : '#85888E',
            textAlign: 'center',
          }}
        >
          {day.date}
        </span>
      </div>

      {/* Events */}
      {day.events.slice(0, 2).map((event) => (
        <CalendarEvent key={event.id} event={event} />
      ))}
      
      {/* More events indicator */}
      {day.events.length > 2 && (
        <div
          style={{
            padding: '0 8px',
          }}
        >
          <span
            style={{
              fontFamily: 'Sora',
              fontSize: '12px',
              fontWeight: 400,
              lineHeight: '1.5em',
              color: '#85888E',
            }}
          >
            Mais {day.events.length - 2}...
          </span>
        </div>
      )}
    </div>
  );
};

