import React from 'react';
import { HelpCircle } from 'lucide-react';

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
        background: 'rgba(37, 37, 50, 1)',
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
            <svg width="20" height="20" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10.6261 2.04409L7.67102 4.99918M10.6261 2.04409L9.89501 1.31299C9.3039 0.721884 8.34556 0.721884 7.75445 1.31299L6.93993 2.12752C6.34881 2.71863 6.34881 3.67697 6.93993 4.26808L7.67102 4.99918M10.6261 2.04409L15.6056 4.37308L10 9.9787L7.67102 4.99918M7.31717 1.69024L6.39437 0.767442M14.2307 5.74785C14.7869 6.11682 15.1533 6.74861 15.1533 7.46573C15.1533 8.60363 14.2307 9.52626 13.0928 9.52626C12.3757 9.52626 11.7439 9.15984 11.3749 8.60405M21.2326 21.2326H3.31497C1.90801 21.2326 0.767442 20.092 0.767442 18.685C0.767442 17.2781 1.90801 16.1375 3.31497 16.1375H21.2326M19.9588 16.1375V21.2326M3.31497 18.685H19.9588M6.0336 13.59L3.93486 10.0561M7.45852 4.78701L4.18495 8.06058M3.17927 16.1375V14.6635C3.17927 14.0706 3.65986 13.59 4.25275 13.59H8.2387C8.83155 13.59 9.31218 14.0706 9.31218 14.6635V16.1375H3.17927ZM4.5582 8.96117C4.5582 9.66465 3.98792 10.2349 3.28444 10.2349C2.58096 10.2349 2.01068 9.66465 2.01068 8.96117C2.01068 8.25769 2.58096 7.68741 3.28444 7.68741C3.98792 7.68741 4.5582 8.25769 4.5582 8.96117Z" stroke="white" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <div className="flex items-center">
            <h3 
              className="text-white"
              style={{
                fontFamily: 'var(--font-sora)',
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
              <button className="w-4 h-4 flex items-center justify-center hover:bg-[#333346] rounded transition-all duration-200 cursor-pointer">
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
                fontFamily: 'var(--font-sora)',
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
                fontFamily: 'var(--font-sora)',
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
                fontFamily: 'var(--font-sora)',
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
