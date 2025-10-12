import React from 'react';

interface DayViewGridProps {
  selectedDay: number;
  events: any[];
  onEventClick?: (event: any) => void;
}

export const DayViewGrid: React.FC<DayViewGridProps> = ({ selectedDay, events, onEventClick }) => {
  const hours = [
    '1 AM', '2 AM', '3 AM', '4 AM', '5 AM', '6 AM', '7 AM', '8 AM', 
    '9 AM', '10 AM', '11 AM', '12 PM', '1 PM', '2 PM', '3 PM', '4 PM', 
    '5 PM', '6 PM', '7 PM', '8 PM', '9 PM', '10 PM', '11 PM'
  ];

  return (
    <div
      style={{
        display: 'flex',
        height: '2208px', // 23 horas * 96px por hora
        width: '100%',
      }}
    >
      {/* Coluna de labels de horários */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          width: '56px',
        }}
      >
        {hours.map((hour, index) => (
          <div
            key={hour}
            style={{
              width: '56px',
              height: '96px',
              display: 'flex',
              alignItems: 'flex-start',
              justifyContent: 'center',
              borderRight: '1px solid #22262F',
              position: 'relative',
              borderTop: index === 0 ? '1px solid #22262F' : 'none',
            }}
          >
            <span
              style={{
                position: 'absolute',
                top: index === 0 ? '4px' : '-8px',
                right: '14px',
                fontFamily: 'Sora',
                fontSize: '12px',
                fontWeight: 400,
                lineHeight: '1.5em',
                textAlign: 'right',
                color: '#94979C',
                width: '34px',
                height: '18px',
              }}
            >
              {hour}
            </span>
          </div>
        ))}
      </div>

      {/* Coluna de eventos */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          flex: 1,
          position: 'relative',
        }}
      >
        {/* Células vazias */}
        {hours.map((hour, index) => (
          <div
            key={hour}
            style={{
              height: '96px',
              backgroundColor: '#1D1D2E',
              borderBottom: '1px solid #22262F',
              borderTop: index === 0 ? '1px solid #22262F' : 'none',
            }}
          />
        ))}

        {/* Eventos posicionados absolutamente */}
        {events.map((event, index) => {
          const eventHour = parseInt(event.time.split(':')[0]);
          const eventMinute = parseInt(event.time.split(':')[1].split(' ')[0]);
          const isPM = event.time.includes('PM');
          
          // Converter para índice do array (1 AM = index 0)
          let hourIndex = eventHour;
          if (isPM && eventHour !== 12) {
            hourIndex = eventHour + 12;
          } else if (!isPM && eventHour === 12) {
            hourIndex = 0; // 12 AM = 0
          } else if (!isPM) {
            hourIndex = eventHour;
          }
          
          // Ajustar para o array que começa em 1 AM (índice 0)
          hourIndex = hourIndex - 1;
          
          const topPosition = hourIndex * 96 + (eventMinute / 60) * 96;
          const height = event.duration === 30 ? 48 : event.duration === 60 ? 96 : 192;

          return (
            <div
              key={event.id}
              onClick={() => onEventClick?.(event)}
              style={{
                position: 'absolute',
                top: `${topPosition}px`,
                left: 0,
                right: 0,
                height: `${height}px`,
                padding: '6px',
                cursor: 'pointer',
              }}
            >
              <div
                style={{
                  backgroundColor: getEventColor(event.color).bg,
                  border: `1px solid ${getEventColor(event.color).border}`,
                  borderRadius: '6px',
                  padding: '6px 8px',
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '2px',
                }}
              >
                <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
                  <span
                    style={{
                      fontFamily: 'Sora',
                      fontSize: '12px',
                      fontWeight: 600,
                      lineHeight: '1.5em',
                      color: getEventColor(event.color).text,
                    }}
                  >
                    {event.title}
                  </span>
                  {event.duration >= 60 && (
                    <span
                      style={{
                        fontFamily: 'Sora',
                        fontSize: '12px',
                        fontWeight: 400,
                        lineHeight: '1.5em',
                        color: getEventColor(event.color).time,
                      }}
                    >
                      {event.time}
                    </span>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

const getEventColor = (color: string) => {
  const colors: Record<string, any> = {
    gray: { bg: '#13161B', border: '#373A41', text: '#CECFD2', time: '#94979C' },
    brand: { bg: '#2C1C5F', border: '#53389E', text: '#D6BBFB', time: '#B692F6' },
    blue: { bg: '#102A56', border: '#1849A9', text: '#84CAFF', time: '#53B1FD' },
    pink: { bg: '#4E0D30', border: '#9E165F', text: '#FAA7E0', time: '#F670C7' },
    orange: { bg: '#511C10', border: '#932F19', text: '#F7B27A', time: '#F38744' },
    yellow: { bg: '#542C0D', border: '#854A0E', text: '#FDE272', time: '#FAC515' },
    green: { bg: '#0E3D29', border: '#15803D', text: '#86EFAC', time: '#4ADE80' },
    indigo: { bg: '#1F235B', border: '#2D31A6', text: '#A4BCFD', time: '#8098F9' },
  };
  return colors[color] || colors.gray;
};

