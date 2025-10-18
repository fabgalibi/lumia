import React, { useState } from 'react';

export interface CalendarProps {
  selectedDate?: Date;
  onDateSelect: (date: Date) => void;
  onClose?: () => void;
  screenSize?: 'mobile' | 'tablet' | 'notebook' | 'desktop';
  isInModal?: boolean;
  minDate?: Date;
  maxDate?: Date;
  disabledDates?: Date[];
  className?: string;
  style?: React.CSSProperties;
}

export const Calendar: React.FC<CalendarProps> = ({
  selectedDate,
  onDateSelect,
  onClose,
  screenSize = 'desktop',
  isInModal = false,
  minDate,
  maxDate,
  disabledDates = [],
  className,
  style
}) => {
  const [currentMonth, setCurrentMonth] = useState(selectedDate || new Date());

  const monthNames = [
    'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho',
    'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'
  ];

  const dayNames = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'];

  const generateCalendar = () => {
    const year = currentMonth.getFullYear();
    const month = currentMonth.getMonth();
    
    const firstDay = new Date(year, month, 1);
    const startDate = new Date(firstDay);
    startDate.setDate(firstDay.getDate() - firstDay.getDay());
    
    const days = [];
    const current = new Date(startDate);
    
    for (let i = 0; i < 35; i++) {
      days.push(new Date(current));
      current.setDate(current.getDate() + 1);
    }
    
    return days;
  };


  const isSelected = (date: Date) => {
    return selectedDate && 
      date.getMonth() === selectedDate.getMonth() && 
      date.getFullYear() === selectedDate.getFullYear() &&
      date.getDate() === selectedDate.getDate();
  };

  const isDisabled = (date: Date) => {
    if (minDate && date < minDate) return true;
    if (maxDate && date > maxDate) return true;
    return disabledDates.some(disabledDate => 
      date.getDate() === disabledDate.getDate() &&
      date.getMonth() === disabledDate.getMonth() &&
      date.getFullYear() === disabledDate.getFullYear()
    );
  };

  const previousMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1, 1));
  };

  const nextMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 1));
  };

  const handleDateClick = (date: Date) => {
    if (!isDisabled(date)) {
      onDateSelect(date);
      if (onClose) {
        onClose();
      }
    }
  };

  const days = generateCalendar();
  const formattedMonth = monthNames[currentMonth.getMonth()];
  const formattedYear = currentMonth.getFullYear().toString();

  // Tamanhos baseados no screenSize
  const getSizeConfig = () => {
    switch (screenSize) {
      case 'mobile':
        return {
          containerPadding: '12px',
          daySize: '32px',
          headerGap: '12px',
          dayGap: '2px',
          fontSize: { header: '14px', day: '12px', dayNumber: '13px' }
        };
      case 'tablet':
        return {
          containerPadding: '14px',
          daySize: '36px',
          headerGap: '14px',
          dayGap: '2px',
          fontSize: { header: '15px', day: '12px', dayNumber: '14px' }
        };
      case 'notebook':
        return {
          containerPadding: '16px',
          daySize: '36px',
          headerGap: '16px',
          dayGap: '3px',
          fontSize: { header: '16px', day: '13px', dayNumber: '14px' }
        };
      case 'desktop':
      default:
        return {
          containerPadding: isInModal ? '16px' : '20px',
          daySize: isInModal ? '36px' : '40px',
          headerGap: isInModal ? '16px' : '24px',
          dayGap: isInModal ? '3px' : '0px',
          fontSize: { header: isInModal ? '16px' : '16px', day: '13px', dayNumber: isInModal ? '14px' : '14px' }
        };
    }
  };

  const sizeConfig = getSizeConfig();

  return (
    <div
      className={className}
      style={{
        width: '100%',
        maxWidth: '100%',
        background: isInModal ? 'transparent' : 'rgba(39, 39, 55, 1)',
        border: isInModal ? 'none' : '1px solid #2C2C45',
        borderRadius: isInModal ? '0' : '12px',
        display: 'flex',
        flexDirection: 'column',
        gap: '12px',
        padding: isInModal ? '0' : sizeConfig.containerPadding,
        ...style
      }}
    >
      {/* Header do Mês */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          width: '100%',
          gap: sizeConfig.headerGap,
          position: 'relative'
        }}
      >
        <button
          onClick={previousMonth}
          style={{
            background: 'transparent',
            border: 'none',
            cursor: 'pointer',
            padding: isInModal ? '8px' : '6px',
            borderRadius: isInModal ? '8px' : '6px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: isInModal ? '40px' : '28px',
            height: isInModal ? '40px' : '28px',
            transition: 'background-color 0.3s ease'
          }}
          onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.05)'}
          onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
        >
          <svg width={isInModal ? '24' : '20'} height={isInModal ? '24' : '20'} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15 18L9 12L15 6" stroke="#F7F7F7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
        <span
          style={{
            fontFamily: 'Sora',
            fontWeight: 600,
            fontSize: sizeConfig.fontSize.header,
            lineHeight: isInModal ? '1.5' : '20px',
            letterSpacing: '0%',
            color: '#F7F7F7',
            textAlign: 'center',
            whiteSpace: 'nowrap',
            flex: 1
          }}
        >
          {formattedMonth} de {formattedYear}
        </span>
        <button
          onClick={nextMonth}
          style={{
            background: 'transparent',
            border: 'none',
            cursor: 'pointer',
            padding: isInModal ? '8px' : '6px',
            borderRadius: isInModal ? '8px' : '6px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: isInModal ? '40px' : '28px',
            height: isInModal ? '40px' : '28px',
            transition: 'background-color 0.3s ease'
          }}
          onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.05)'}
          onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
        >
          <svg width={isInModal ? '24' : '20'} height={isInModal ? '24' : '20'} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9 18L15 12L9 6" stroke="#F7F7F7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>

      {/* Dias da Semana */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(7, 1fr)',
          gap: sizeConfig.dayGap,
          width: '100%',
          marginBottom: '0'
        }}
      >
        {dayNames.map((day, index) => (
          <div
            key={index}
            style={{
              width: sizeConfig.daySize,
              height: sizeConfig.daySize,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <span
              style={{
                fontFamily: 'Sora',
                fontWeight: 600,
                fontSize: sizeConfig.fontSize.day,
                lineHeight: '20px',
                letterSpacing: '0%',
                color: '#CECFD2',
                textAlign: 'center'
              }}
            >
              {day}
            </span>
          </div>
        ))}
      </div>

      {/* Dias do Mês */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(7, 1fr)',
          gap: sizeConfig.dayGap,
          width: '100%'
        }}
      >
        {days.map((day, index) => {
          const isSelectedDay = isSelected(day);
          const isDisabledDay = isDisabled(day);

          return (
            <button
              key={index}
              onClick={() => handleDateClick(day)}
              style={{
                width: sizeConfig.daySize,
                height: sizeConfig.daySize,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                background: isSelectedDay ? (isInModal ? '#D9572D' : '#F48E2F') : 'transparent',
                borderRadius: isInModal ? '8px' : '6px',
                border: 'none',
                cursor: isDisabledDay ? 'not-allowed' : 'pointer',
                transition: 'background-color 0.3s ease',
                opacity: isDisabledDay ? 0.3 : 1
              }}
              onMouseEnter={(e) => {
                if (!isSelectedDay && !isDisabledDay) {
                  e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.05)';
                }
              }}
              onMouseLeave={(e) => {
                if (!isSelectedDay && !isDisabledDay) {
                  e.currentTarget.style.backgroundColor = 'transparent';
                }
              }}
            >
              <span
                style={{
                  fontFamily: 'Sora',
                  fontWeight: isSelectedDay ? 600 : 400,
                  fontSize: sizeConfig.fontSize.dayNumber,
                  lineHeight: isInModal ? '1.5' : '20px',
                  letterSpacing: '0%',
                  color: isDisabledDay ? '#85888E' : '#F7F7F7',
                  textAlign: 'center'
                }}
              >
                {day.getDate()}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default Calendar;
