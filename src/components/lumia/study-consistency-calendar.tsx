import React from 'react';
import { HelpCircle, LampDesk } from 'lucide-react';

interface StudyConsistencyCalendarProps {
  data?: {
    title: string;
    status: {
      active: boolean;
      inactive: boolean;
    };
    calendar: {
      [day: string]: {
        [hour: string]: boolean; // true = ativo, false = inativo
      };
    };
  };
}

const StudyConsistencyCalendar: React.FC<StudyConsistencyCalendarProps> = ({ 
  data = {
    title: "Consistência nos estudos",
    status: {
      active: true,
      inactive: false
    },
    calendar: {}
  }
}) => {
  const days = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'];
  const hours = Array.from({ length: 24 }, (_, i) => {
    const hour = i.toString().padStart(2, '0');
    return `${hour}:00`;
  });

  // Gerar dados de exemplo se não fornecidos
  const generateSampleData = () => {
    const sampleCalendar: { [day: string]: { [hour: string]: boolean } } = {};
    
    days.forEach(day => {
      sampleCalendar[day] = {};
      hours.forEach(hour => {
        // Simular alguns horários ativos aleatoriamente
        const hourNum = parseInt(hour.split(':')[0]);
        const isActive = Math.random() > 0.7 && hourNum >= 8 && hourNum <= 22;
        sampleCalendar[day][hour] = isActive;
      });
    });
    
    return sampleCalendar;
  };

  const calendarData = Object.keys(data.calendar).length > 0 ? data.calendar : generateSampleData();

  return (
    <div
      className="rounded-lg border flex flex-col w-full"
      style={{
        background: '#252532',
        borderColor: '#2C2C45',
        borderWidth: '1px',
        borderRadius: '8px',
        padding: '20px 24px',
        gap: '16px'
      }}
    >
      {/* Header */}
      <div className="flex justify-between items-center" style={{ gap: '24px' }}>
        {/* Title Section */}
        <div className="flex items-center" style={{ gap: '12px' }}>
          <div className="w-6 h-6 flex items-center justify-center">
            <LampDesk className="w-5 h-5 text-white" strokeWidth={1.5} />
          </div>
          <div className="flex items-center">
            <h3 
              className="text-white"
              style={{
                fontFamily: 'Sora',
                fontWeight: 400,
                fontStyle: 'Regular',
                fontSize: '16px',
                lineHeight: '1.75em',
                letterSpacing: '0%',
                verticalAlign: 'middle',
                width: 'auto'
              }}
            >
              {data.title}
            </h3>
            <div className="relative group" style={{ marginLeft: '4px' }}>
              <button className="w-4 h-4 flex items-center justify-center">
                <HelpCircle className="w-4 h-4 text-[#85888E]" strokeWidth={1.33} />
              </button>
              {/* Tooltip */}
              <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2 bg-gray-800 text-white text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap z-10">
                Acompanhe sua consistência de estudos ao longo da semana
                <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-800"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Status Legend */}
        <div className="flex items-center flex-wrap" style={{ gap: '16px' }}>
          {/* Active Status */}
          <div className="flex items-center" style={{ gap: '8px' }}>
            <div 
              className="rounded-sm"
              style={{ 
                background: '#C74228',
                width: '32px',
                height: '8px',
                borderRadius: '2px'
              }}
            />
            <span 
              className="text-white"
              style={{
                fontFamily: 'Sora',
                fontWeight: 400,
                fontSize: '12px',
                lineHeight: '1.5em'
              }}
            >
              Ativo
            </span>
          </div>

          {/* Inactive Status */}
          <div className="flex items-center" style={{ gap: '8px' }}>
            <div 
              className="rounded-sm"
              style={{ 
                background: '#414151',
                width: '32px',
                height: '8px',
                borderRadius: '2px'
              }}
            />
            <span 
              className="text-white"
              style={{
                fontFamily: 'Sora',
                fontWeight: 400,
                fontSize: '12px',
                lineHeight: '1.5em'
              }}
            >
              Inativo
            </span>
          </div>
        </div>
      </div>

      {/* Calendar Grid */}
      <div className="flex w-full overflow-hidden" style={{ gap: '6px' }}>
        {/* Days Column */}
        <div className="flex flex-col flex-shrink-0" style={{ width: '25px', height: '188px' }}>
          {days.map((day, index) => (
            <div 
              key={day}
              className="text-white flex items-center"
              style={{
                fontFamily: 'Sora',
                fontWeight: 400,
                fontSize: '10px',
                lineHeight: '1.6em',
                height: '24px',
                width: '25px',
                textAlign: index === 0 ? 'left' : 'right',
                marginBottom: index < days.length - 1 ? '4px' : '0px',
                color: '#FFFFFF'
              }}
            >
              {day}
            </div>
          ))}
        </div>

        {/* Calendar Grid */}
        <div className="flex flex-col flex-1 min-w-0" style={{ height: '188px' }}>
          {/* Calendar Rows - 7 days */}
          {days.map((day, dayIndex) => (
            <div 
              key={day}
              className="flex"
              style={{ 
                height: '24px',
                marginBottom: dayIndex < days.length - 1 ? '4px' : '0px'
              }}
            >
              {hours.map((hour, hourIndex) => {
                const isActive = calendarData[day]?.[hour] || false;
                return (
                  <div
                    key={`${day}-${hour}`}
                    className="rounded-md flex-shrink-0 mr-1"
                    style={{
                      width: 'calc(100% / 24)',
                      height: '24px',
                      background: isActive ? '#C74228' : '#414151',
                      borderRadius: '6px'
                    }}
                  />
                );
              })}
            </div>
          ))}
        </div>
      </div>

      {/* Hours Row - Below Calendar */}
      <div className="flex mt-2" style={{ height: '16px', marginLeft: '31px' }}>
        {hours.map((hour, index) => (
          <div 
            key={hour}
            className="text-white flex items-center justify-center flex-shrink-0"
            style={{
              fontFamily: 'Sora',
              fontWeight: 400,
              fontSize: '10px',
              lineHeight: '1.6em',
              width: 'calc(100% / 24)',
              height: '16px',
              color: '#FFFFFF'
            }}
          >
            {hour}
          </div>
        ))}
      </div>
    </div>
  );
};

export default StudyConsistencyCalendar;
