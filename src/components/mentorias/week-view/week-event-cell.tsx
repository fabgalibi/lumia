import React from 'react';

interface WeekEventCellProps {
  isEmpty?: boolean;
  duration?: 30 | 60 | 120; // duração em minutos
  event?: {
    id: string;
    title: string; // Ex: "Mentoria com Mariana Silva" (texto completo)
    time: string;
    color: 'gray' | 'brand' | 'blue' | 'pink' | 'orange' | 'yellow' | 'green' | 'indigo';
  };
  style?: React.CSSProperties; // Para posicionamento absoluto
  isFirst?: boolean; // Para a primeira célula (1 AM)
  onEventClick?: (event: any) => void;
}

const eventColors = {
  gray: { 
    bg: '#13161B', 
    border: '#373A41', 
    titleText: '#CECFD2',
    timeText: '#94979C'
  },
  brand: { 
    bg: '#2C1C5F', 
    border: '#53389E', 
    titleText: '#D6BBFB',
    timeText: '#B692F6'
  },
  blue: { 
    bg: '#102A56', 
    border: '#1849A9', 
    titleText: '#84CAFF',
    timeText: '#53B1FD'
  },
  pink: { 
    bg: '#4E0D30', 
    border: '#9E165F', 
    titleText: '#FAA7E0',
    timeText: '#F670C7'
  },
  orange: { 
    bg: '#511C10', 
    border: '#932F19', 
    titleText: '#F7B27A',
    timeText: '#F38744'
  },
  yellow: { 
    bg: '#542C0D', 
    border: '#854A0E', 
    titleText: '#FDE272',
    timeText: '#FAC515'
  },
  green: { 
    bg: '#053321', 
    border: '#0A7440', 
    titleText: '#6CE9A6',
    timeText: '#32D583'
  },
  indigo: { 
    bg: '#1F235B', 
    border: '#2D31A6', 
    titleText: '#A4BCFD',
    timeText: '#8098F9'
  },
};

export const WeekEventCell: React.FC<WeekEventCellProps> = ({ 
  isEmpty = true, 
  duration = 30,
  event,
  style,
  isFirst = false,
  onEventClick
}) => {
  const cellHeight = duration === 30 ? 48 : duration === 60 ? 96 : 192;

  // Célula vazia - mantém as bordas
  if (isEmpty || !event) {
    return (
      <div
        style={{
          alignSelf: 'stretch',
          padding: '8px',
          height: '48px',
          background: '#1D1D2E',
          border: '1px solid #22262F',
          borderTop: 'none',
          borderLeft: 'none',
          borderRight: '1px solid #22262F', // Borda direita conforme Figma
          borderBottom: '1px solid #22262F', // Borda inferior conforme Figma
        }}
      />
    );
  }

  const colors = eventColors[event.color];

  // Event wrapper (sem bordas da grade, apenas o evento)
  return (
    <div
      style={{
        height: `${cellHeight}px`,
        width: '100%',
        padding: '6px',
        display: 'flex',
        flexDirection: 'column',
        pointerEvents: 'all',
        ...style, // Aplicar estilos de posicionamento absoluto
      }}
    >
      <div
        style={{
          background: colors.bg,
          border: `1px solid ${colors.border}`,
          borderRadius: '6px',
          padding: '6px 8px',
          display: 'flex',
          flexDirection: 'column',
          gap: '4px',
          flex: 1,
          width: '100%', // Ocupa toda a largura disponível
          cursor: 'pointer',
        }}
        onClick={() => onEventClick?.(event)}
      >
        {/* Text and time wrapper */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '2px',
            flex: 1,
          }}
        >
          {/* Text and dot (título) */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              gap: '2px',
              alignSelf: 'stretch',
            }}
          >
            <span
              style={{
                fontFamily: 'Sora',
                fontSize: '12px',
                fontWeight: 400,
                lineHeight: '1.5em',
                color: colors.titleText,
                flex: 1,
              }}
            >
              {event.title}
            </span>
          </div>

          {/* Time - só mostra para eventos de 60min ou mais */}
          {duration >= 60 && (
            <span
              style={{
                fontFamily: 'Inter',
                fontSize: '12px',
                fontWeight: 400,
                lineHeight: '1.5em',
                color: colors.timeText,
                flex: 1,
              }}
            >
              {event.time}
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

