import React, { useEffect, useRef } from 'react';
import { TimeLabel } from './time-label';
import { WeekEventCell } from './week-event-cell';

interface WeekViewGridProps {
  weekDays: { 
    day: string; 
    date: number; 
    month: number; 
    year: number; 
    isToday: boolean 
  }[];
  eventsData: Record<string, any>;
  multiDayEvents: any[];
}

export const WeekViewGrid: React.FC<WeekViewGridProps> = ({ weekDays, eventsData, multiDayEvents }) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // Fazer o scroll começar no topo quando o componente montar
  useEffect(() => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollTop = 0;
    }
  }, []);
  const timeSlots = [
    '1 AM', '2 AM', '3 AM', '4 AM', '5 AM', '6 AM', '7 AM',
    '8 AM', '9 AM', '10 AM', '11 AM', '12 PM',
    '1 PM', '2 PM', '3 PM', '4 PM', '5 PM', '6 PM', '7 PM', '8 PM', '9 PM', '10 PM', '11 PM'
  ];

  // Calcular posição da hora atual
  const getCurrentTimePosition = () => {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    
    // Hora inicial é 1 AM (index 1)
    const startHour = 1;
    
    // Calcular offset em minutos desde 1 AM
    const minutesSinceStart = (hours - startHour) * 60 + minutes;
    
    // Cada hora tem 96px (2 células de 48px)
    const pixelsPerMinute = 96 / 60;
    const topPosition = minutesSinceStart * pixelsPerMinute;
    
    // Formatar hora atual
    const formattedTime = now.toLocaleTimeString('en-US', { 
      hour: 'numeric', 
      minute: '2-digit', 
      hour12: true 
    });
    
    return { topPosition, formattedTime };
  };

  const currentTimeMarker = getCurrentTimePosition();

  // Converter eventos para o formato da grade semanal
  const weekEvents: Record<string, any> = {};
  
  weekDays.forEach((day, dayIndex) => {
    // Buscar eventos para este dia
    Object.keys(eventsData).forEach(key => {
      const parts = key.split('-');
      if (parts.length === 4) {
        const [y, m, d, h] = parts.map(Number);
        if (y === day.year && m === day.month && d === day.date) {
          // Usar timeIndex diretamente (hora = timeIndex)
          const eventKey = `${dayIndex}-${h}`;
          weekEvents[eventKey] = eventsData[key];
        }
      }
    });
  });

  // Converter eventos multi-dia para o formato da grade
  const convertedMultiDayEvents = multiDayEvents
    .filter(multiEvent => {
      // Verificar se algum dia da semana está dentro do range do evento
      return weekDays.some(day => {
        const currentDate = new Date(day.year, day.month, day.date);
        return currentDate >= multiEvent.startDate && currentDate <= multiEvent.endDate;
      });
    })
    .map(multiEvent => {
      // Encontrar startDay e endDay dentro da semana atual
      let startDay = 0;
      let endDay = 6;
      
      weekDays.forEach((day, index) => {
        const currentDate = new Date(day.year, day.month, day.date);
        if (currentDate.getTime() === multiEvent.startDate.getTime() || 
            (currentDate > multiEvent.startDate && index === 0)) {
          startDay = index;
        }
        if (currentDate.getTime() === multiEvent.endDate.getTime() || 
            (currentDate < multiEvent.endDate && index === 6)) {
          endDay = index;
        }
      });

      return {
        timeSlot: multiEvent.hour, // 12 AM = index 0, 1 AM = index 1, etc
        startDay,
        endDay,
        duration: multiEvent.duration,
        event: multiEvent.event
      };
    });
  

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignSelf: 'stretch',
        height: 'calc(100vh - 200px)',
        overflow: 'hidden',
        margin: 0,
        padding: 0
      }}
    >
      <div
        ref={scrollContainerRef}
        className="week-view-scrollbar"
        style={{
          flex: 1,
          overflowY: 'auto',
          overflowX: 'hidden',
          position: 'relative',
          margin: 0,
          paddingTop: '8px', // Pequeno padding para evitar corte do texto
          minHeight: '400px' // Altura mínima para garantir que o scroll funcione
        }}
      >
        <div
          style={{
            width: '100%',
            display: 'flex',
            flexDirection: 'row',
            margin: 0,
            padding: 0
          }}
        >
          {/* Coluna de horários */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              width: '72px',
              flex: 'none',
            }}
          >
            {timeSlots.map((time, index) => (
              <TimeLabel 
                key={time} 
                time={time}
                isHighlighted={false} // Removido highlight específico do 5PM
                isFirst={index === 0} // Primeira célula (1 AM)
              />
            ))}
          </div>

          {/* Container para as colunas de dias */}
          <div
            style={{
              flex: 1,
              display: 'flex',
              position: 'relative',
            }}
          >
          {/* Colunas de dias */}
          {weekDays.map((dayInfo, dayIndex) => {
            // Coletar eventos desta coluna
            const columnEvents: Array<{timeIndex: number, data: any}> = [];
            timeSlots.forEach((time, timeIndex) => {
              // timeIndex 0 = 1 AM (hora 1), timeIndex 1 = 2 AM (hora 2), etc
              // Os eventos usam hora direta (1-23), então timeIndex + 1 = hora
              const hour = timeIndex + 1; // Converter timeIndex para hora real (1-23)
              const eventKey = `${dayIndex}-${hour}`;
              const cellData = weekEvents[eventKey];
              if (cellData) {
                columnEvents.push({ timeIndex, data: cellData });
              }
            });

            return (
              <div
                key={dayIndex}
                style={{
                  flex: 1,
                  display: 'flex',
                  flexDirection: 'column',
                  position: 'relative',
                }}
              >
                {/* Renderizar células vazias para criar a grade - 2 células de 48px por hora */}
                {timeSlots.map((time, timeIndex) => (
                  <React.Fragment key={timeIndex}>
                    {/* Primeira meia hora */}
                    <WeekEventCell
                      key={`${timeIndex}-0`}
                      isEmpty={true}
                      isFirst={timeIndex === 0} // Primeira célula (1 AM)
                    />
                    {/* Segunda meia hora */}
                    <WeekEventCell
                      key={`${timeIndex}-1`}
                      isEmpty={true}
                    />
                  </React.Fragment>
                ))}

                {/* Renderizar eventos desta coluna - posicionamento absoluto */}
                {columnEvents.map(({ timeIndex, data }) => {
                  const topPosition = timeIndex * 96; // 96px por hora (início da hora)
                  const eventHeight = data.duration === 30 ? 48 : data.duration === 60 ? 96 : 192;
                  
                  return (
                    <WeekEventCell
                      key={`event-${timeIndex}`}
                      isEmpty={false}
                      duration={data.duration}
                      event={data.event}
                      style={{
                        position: 'absolute',
                        top: `${topPosition}px`,
                        left: 0,
                        right: 0,
                        height: `${eventHeight}px`,
                        zIndex: 10
                      }}
                    />
                  );
                })}
              </div>
            );
          })}

          {/* Renderizar eventos multi-dia (se estendem por várias colunas) */}
          {convertedMultiDayEvents.map((multiEvent) => {
            // Calcular posição baseada no timeSlot (cada slot = 96px = 1 hora)
            const topPosition = multiEvent.timeSlot * 96; // Posição vertical corrigida
            const columnWidth = 100 / 7; // Cada coluna ocupa 1/7 da largura
            const leftPosition = multiEvent.startDay * columnWidth; // Posição inicial
            const eventWidth = (multiEvent.endDay - multiEvent.startDay + 1) * columnWidth; // Largura total
            const cellHeight = multiEvent.duration === 30 ? 48 : multiEvent.duration === 60 ? 96 : 192;

            return (
              <WeekEventCell
                key={multiEvent.event.id}
                isEmpty={false}
                duration={multiEvent.duration as any}
                event={multiEvent.event}
                style={{
                  position: 'absolute',
                  top: `${topPosition}px`,
                  left: `${leftPosition}%`,
                  width: `${eventWidth}%`,
                  zIndex: 10, // Garante que fica sobre as células
                }}
              />
            );
          })}

          {/* Marcador de hora atual */}
          {currentTimeMarker && (
            <div
              style={{
                position: 'absolute',
                top: `${currentTimeMarker.topPosition}px`,
                left: 0,
                right: 0,
                display: 'flex',
                alignItems: 'center',
                gap: '4px',
                zIndex: 20, // Fica acima de tudo
                pointerEvents: 'none',
              }}
            >
              {/* Texto da hora - alinhado à direita antes do marcador */}
              <div
                style={{
                  width: '64px',
                  textAlign: 'right',
                  marginLeft: '-68px', // Posiciona na área da coluna de horários
                }}
              >
                <span
                  style={{
                    fontFamily: 'Sora',
                    fontSize: '12px',
                    fontWeight: 400,
                    lineHeight: '1.5em',
                    color: '#F7F7F7',
                  }}
                >
                  {currentTimeMarker.formattedTime}
                </span>
              </div>

              {/* Linha marcadora com círculo */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '-2px',
                  flex: 1,
                }}
              >
                {/* Círculo */}
                <div
                  style={{
                    width: '8px',
                    height: '8px',
                    borderRadius: '50%',
                    background: '#CECFD2',
                    flexShrink: 0,
                  }}
                />
                {/* Linha */}
                <div
                  style={{
                    flex: 1,
                    height: '1px',
                    background: '#CECFD2',
                  }}
                />
              </div>
            </div>
          )}
          </div>
        </div>
      </div>
    </div>
  );
};

