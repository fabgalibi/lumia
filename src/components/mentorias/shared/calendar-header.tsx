import React, { useState, useEffect } from 'react';
import { CalendarDateIcon } from './calendar-date-icon';
import { MonthNavigation } from './month-navigation';

interface CalendarHeaderProps {
  currentMonth: number;
  currentYear: number;
  onPreviousMonth: () => void;
  onNextMonth: () => void;
}

export const CalendarHeader: React.FC<CalendarHeaderProps> = ({
  currentMonth,
  currentYear,
  onPreviousMonth,
  onNextMonth
}) => {
  const today = new Date();
  const isCurrentMonthView = today.getMonth() === currentMonth && today.getFullYear() === currentYear;
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);
  
  const monthNames = [
    'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho',
    'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'
  ];

  const getMonthAbbreviation = (month: number): string => {
    const abbreviations = ['JAN', 'FEV', 'MAR', 'ABR', 'MAI', 'JUN', 'JUL', 'AGO', 'SET', 'OUT', 'NOV', 'DEZ'];
    return abbreviations[month];
  };

  return (
    <div
      style={{
        borderBottom: '1px solid #2C2C45',
      }}
    >
      <div
        style={{
          display: 'flex',
          flexDirection: isMobile ? 'column' : 'row',
          alignItems: isMobile ? 'stretch' : 'center',
          justifyContent: 'space-between',
          gap: isMobile ? '16px' : '16px',
          padding: isMobile ? '16px' : '20px 24px',
        }}
      >
        {/* Date info */}
        <div
          style={{
            display: 'flex',
            gap: '12px',
            flex: 1,
          }}
        >
          {!isMobile && (
            <CalendarDateIcon
              month={getMonthAbbreviation(isCurrentMonthView ? currentMonth : currentMonth)}
              day={isCurrentMonthView ? today.getDate() : 1}
            />
          )}

          {/* Text info */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '2px',
            }}
          >
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
              }}
            >
              <span
                style={{
                  fontFamily: 'Sora',
                  fontSize: isMobile ? '16px' : '18px',
                  fontWeight: 400,
                  lineHeight: isMobile ? '1.5em' : '1.5555555555555556em',
                  color: '#F7F7F7',
                }}
              >
                {isCurrentMonthView ? today.getDate() : 1} de {monthNames[currentMonth]} de {currentYear}
              </span>
              {isCurrentMonthView && (
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    padding: '2px 8px',
                    background: isMobile ? 'transparent' : 'transparent',
                    borderRadius: '9999px',
                    border: isMobile ? '1px solid transparent' : '1.5px solid transparent',
                    backgroundImage: isMobile 
                      ? 'linear-gradient(#252532, #252532), linear-gradient(180deg, rgba(255, 255, 255, 0.12) 0%, rgba(255, 255, 255, 0) 100%)'
                      : 'linear-gradient(#252532, #252532), linear-gradient(180deg, rgba(255, 255, 255, 0.12) 0%, rgba(255, 255, 255, 0) 100%)',
                    backgroundOrigin: 'border-box',
                    backgroundClip: 'padding-box, border-box',
                    boxShadow: isMobile ? '0px 1px 2px 0px rgba(255, 255, 255, 0)' : 'none',
                  }}
                >
                  <span
                    style={{
                      fontFamily: 'Inter',
                      fontSize: '12px',
                      fontWeight: 500,
                      lineHeight: '1.5em',
                      color: '#CECFD2',
                      textAlign: 'center',
                    }}
                  >
                    Hoje
                  </span>
                </div>
              )}
            </div>
            <span
              style={{
                fontFamily: 'Sora',
                fontSize: '14px',
                fontWeight: 400,
                lineHeight: '1.43em',
                color: '#CECFD2',
              }}
            >
              Você possui 3 mentorias agendadas para essa semana.
            </span>
          </div>
        </div>

        {/* Month navigation */}
        <div style={{ width: isMobile ? '100%' : 'auto' }}>
          <MonthNavigation
            currentMonth={monthNames[currentMonth]}
            onPrevious={onPreviousMonth}
            onNext={onNextMonth}
          />
        </div>
      </div>
    </div>
  );
};

