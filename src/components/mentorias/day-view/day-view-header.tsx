import React from 'react';

interface DayViewHeaderProps {
  weekDays: {
    day: string;
    date: number;
    isToday: boolean;
    isSelected: boolean;
  }[];
  onSelectDay: (index: number) => void;
}

export const DayViewHeader: React.FC<DayViewHeaderProps> = ({ weekDays, onSelectDay }) => {
  return (
    <div
      style={{
        display: 'flex',
        position: 'relative',
        backgroundColor: '#1D1D2E',
        borderBottom: '1px solid #2C2C45',
        boxShadow: '0px 1px 2px -1px rgba(255, 255, 255, 0), 0px 1px 3px 0px rgba(255, 255, 255, 0)',
      }}
    >
      {weekDays.map((day, index) => (
        <div
          key={index}
          onClick={() => onSelectDay(index)}
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '6px',
            padding: '8px',
            flex: 1,
            backgroundColor: '#1D1D2E',
            borderBottom: '1px solid #22262F',
            borderRight: index === weekDays.length - 1 ? 'none' : '1px solid #22262F',
            cursor: 'pointer',
          }}
        >
          <span
            style={{
              fontFamily: 'Sora',
              fontSize: '12px',
              fontWeight: 400,
              lineHeight: '1.5em',
              color: '#94979C',
            }}
          >
            {day.day}
          </span>
          <div
            style={{
              width: '24px',
              height: '24px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: '50%',
              backgroundColor: day.isSelected ? '#F66649' : 'transparent',
            }}
          >
            <span
              style={{
                fontFamily: 'Sora',
                fontSize: '12px',
                fontWeight: 600,
                lineHeight: '1.5em',
                color: day.isSelected ? '#FFFFFF' : '#CECFD2',
              }}
            >
              {day.date}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

