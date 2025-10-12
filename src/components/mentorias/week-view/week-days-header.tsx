import React from 'react';

interface WeekDaysHeaderProps {
  weekDays: { 
    day: string; 
    date: number; 
    month: number; 
    year: number; 
    isToday: boolean;
    isSelected?: boolean;
  }[];
  onSelectDay?: (index: number) => void;
}

export const WeekDaysHeader: React.FC<WeekDaysHeaderProps> = ({ weekDays, onSelectDay }) => {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        width: '100%', // Preencher toda a extensão lateral
        boxShadow: '0px 1px 2px -1px rgba(255, 255, 255, 0), 0px 1px 3px 0px rgba(255, 255, 255, 0)',
      }}
    >
      {/* Spacer para coluna de horários */}
      <div
        style={{
          width: '72px',
          flex: 'none',
          background: '#1D1D2E',
          border: '1px solid #22262F',
          borderTop: 'none',
          borderLeft: 'none',
          borderRight: '1px solid #22262F',
          borderBottom: '1px solid #22262F',
          alignSelf: 'stretch',
        }}
      />

      {/* Headers dos dias */}
      {weekDays.map((dayInfo, index) => (
                  <div
                    key={index}
                    onClick={() => onSelectDay?.(index)}
                    style={{
                      flex: 1,
                      display: 'flex',
                      flexDirection: 'row',
                      justifyContent: 'center',
                      alignItems: 'center',
                      gap: '4px', // Gap fixo conforme Figma
                      padding: '8px',
                      background: '#1D1D2E',
                      border: '1px solid #22262F',
                      borderTop: 'none',
                      borderLeft: 'none',
                      borderRight: '1px solid #22262F', // Sempre com borda direita
                      borderBottom: '1px solid #22262F', // Sempre com borda inferior
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
            {dayInfo.day}
          </span>
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              width: '24px', // Sempre 24px conforme Figma
              height: '24px', // Sempre 24px conforme Figma
              background: dayInfo.isSelected ? '#F66649' : 'transparent',
              borderRadius: '9999px',
            }}
          >
            <span
              style={{
                fontFamily: 'Sora',
                fontSize: '12px',
                fontWeight: 600,
                lineHeight: '1.5em',
                color: dayInfo.isSelected ? '#FFFFFF' : '#CECFD2',
              }}
            >
              {dayInfo.date}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

