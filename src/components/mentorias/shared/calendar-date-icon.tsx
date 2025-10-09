import React from 'react';

interface CalendarDateIconProps {
  month: string;
  day: number;
}

export const CalendarDateIcon: React.FC<CalendarDateIconProps> = ({ month, day }) => {
  return (
    <div
      style={{
        width: '64px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        background: '#0C0E12',
        border: '1px solid #22262F',
        borderRadius: '8px',
        overflow: 'hidden',
      }}
    >
      <div
        style={{
          padding: '4px 8px 2px',
          background: '#F66649',
          width: '100%',
          textAlign: 'center',
        }}
      >
        <span
          style={{
            fontFamily: 'Sora',
            fontSize: '12px',
            fontWeight: 600,
            color: '#13161B',
          }}
        >
          {month}
        </span>
      </div>
      <div
        style={{
          padding: '1px 8px 3px',
          background: '#ECECED',
          width: '100%',
          textAlign: 'center',
        }}
      >
        <span
          style={{
            fontFamily: 'Sora',
            fontSize: '18px',
            fontWeight: 700,
            color: '#22262F',
          }}
        >
          {day}
        </span>
      </div>
    </div>
  );
};

