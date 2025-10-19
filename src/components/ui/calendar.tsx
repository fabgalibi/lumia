import React, { useState, useEffect } from 'react';

// Estilos para scrollbar customizada
const scrollbarStyles = `
  .custom-scrollbar::-webkit-scrollbar {
    width: 6px;
  }
  
  .custom-scrollbar::-webkit-scrollbar-track {
    background: #2D2D3B;
    border-radius: 3px;
  }
  
  .custom-scrollbar::-webkit-scrollbar-thumb {
    background: #373A41;
    border-radius: 3px;
    border: 1px solid #0C0E12;
  }
  
  .custom-scrollbar::-webkit-scrollbar-thumb:hover {
    background: #4A4D56;
  }
`;

// Adicionar estilos ao DOM se não existirem
if (typeof document !== 'undefined' && !document.getElementById('calendar-scrollbar-styles')) {
  const style = document.createElement('style');
  style.id = 'calendar-scrollbar-styles';
  style.textContent = scrollbarStyles;
  document.head.appendChild(style);
}

export interface CalendarProps {
  selectedDate?: Date;
  onDateSelect: (date: Date) => void;
  onClose?: () => void;
  onNavigationChange?: (date: Date) => void;
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
  onNavigationChange,
  isInModal = false,
  minDate,
  maxDate,
  disabledDates = [],
  className,
  style
}) => {
  const [currentMonth, setCurrentMonth] = useState(selectedDate || new Date());
  const [showMonthSelector, setShowMonthSelector] = useState(false);
  const [showYearSelector, setShowYearSelector] = useState(false);
  const [visibleYears, setVisibleYears] = useState<number[]>([]);
  const [isLoadingYears, setIsLoadingYears] = useState(false);

  // Sincronizar currentMonth com selectedDate quando mudar
  useEffect(() => {
    if (selectedDate) {
      setCurrentMonth(selectedDate);
    }
  }, [selectedDate]);

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
    const newDate = new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1, 1);
    setCurrentMonth(newDate);
    onNavigationChange?.(newDate);
  };

  const nextMonth = () => {
    const newDate = new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 1);
    setCurrentMonth(newDate);
    onNavigationChange?.(newDate);
  };

  const selectMonth = (monthIndex: number) => {
    const newDate = new Date(currentMonth.getFullYear(), monthIndex, 1);
    setCurrentMonth(newDate);
    setShowMonthSelector(false);
    onNavigationChange?.(newDate);
  };

  const selectYear = (year: number) => {
    const newDate = new Date(year, currentMonth.getMonth(), 1);
    setCurrentMonth(newDate);
    setShowYearSelector(false);
    onNavigationChange?.(newDate);
  };

  // Carregar anos gradualmente para datas de nascimento
  const loadYears = async () => {
    setIsLoadingYears(true);
    const currentYear = new Date().getFullYear();
    const years: number[] = [];
    
    // Para datas de nascimento: 100 anos para trás até o ano atual
    for (let year = currentYear; year >= currentYear - 100; year--) {
      years.push(year);
    }
    
    // Simular carregamento gradual
    const visibleYears: number[] = [];
    for (let i = 0; i < years.length; i++) {
      visibleYears.push(years[i]);
      if (i % 10 === 0) {
        await new Promise(resolve => setTimeout(resolve, 50));
        setVisibleYears([...visibleYears]);
      }
    }
    
    setVisibleYears(years);
    setIsLoadingYears(false);
  };

  // Carregar anos quando abrir o seletor
  const handleYearSelectorClick = () => {
    if (visibleYears.length === 0) {
      loadYears();
    }
    setShowYearSelector(!showYearSelector);
  };

  // Fechar seletores quando clicar fora
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (!target.closest('[data-calendar-container]')) {
        setShowMonthSelector(false);
        setShowYearSelector(false);
      }
    };

    if (showMonthSelector || showYearSelector) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showMonthSelector, showYearSelector]);





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
    // Configuração baseada no design do Figma
    return {
      containerPadding: '20px 24px',
      daySize: '40px',
      headerGap: '12px',
      dayGap: '0px',
      fontSize: { 
        header: '14px', 
        day: '14px', 
        dayNumber: '14px' 
      },
      containerWidth: '328px'
    };
  };

  const sizeConfig = getSizeConfig();

  return (
    <div
      data-calendar-container
      className={className}
      style={{
        width: sizeConfig.containerWidth,
        maxWidth: '100%',
        background: isInModal ? 'transparent' : '#272737',
        border: isInModal ? 'none' : '1px solid #2C2C45',
        borderRadius: isInModal ? '0' : '16px',
        display: 'flex',
        flexDirection: 'column',
        gap: sizeConfig.headerGap,
        padding: isInModal ? '0' : sizeConfig.containerPadding,
        boxShadow: isInModal ? 'none' : '0px 3px 3px -1.5px rgba(255, 255, 255, 0), 0px 8px 8px -4px rgba(255, 255, 255, 0), 0px 20px 24px -4px rgba(255, 255, 255, 0)',
        ...style
      }}
    >
      {/* Header do Mês */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          width: '100%'
        }}
      >
        <button
          type="button"
          onClick={previousMonth}
          style={{
            background: 'transparent',
            border: 'none',
            cursor: 'pointer',
            padding: '6px',
            borderRadius: '6px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '32px',
            height: '32px',
            transition: 'background-color 0.3s ease',
            flexShrink: 0
          }}
          onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.05)'}
          onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15 18L9 12L15 6" stroke="#61656C" strokeWidth="1.67" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
        
        {/* Mês e Ano clicáveis */}
        <div style={{ 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center',
          flex: 1,
          position: 'relative',
          minWidth: '200px'
        }}>
          <button
            type="button"
            onClick={() => setShowMonthSelector(!showMonthSelector)}
            style={{
              background: 'transparent',
              border: 'none',
              cursor: 'pointer',
              fontFamily: 'Sora',
              fontWeight: 600,
              fontSize: '14px',
              lineHeight: '1.43em',
              color: '#F7F7F7',
              textAlign: 'center',
              whiteSpace: 'nowrap',
              padding: '4px 8px',
              borderRadius: '4px',
              transition: 'background-color 0.2s ease',
              display: 'flex',
              alignItems: 'center',
              gap: '4px'
            }}
            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.05)'}
            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
          >
            {formattedMonth}
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="6,9 12,15 18,9"></polyline>
            </svg>
          </button>

          <span style={{ color: '#CECFD2', margin: '0 4px' }}>de</span>

          <button
            type="button"
            onClick={handleYearSelectorClick}
            style={{
              background: 'transparent',
              border: 'none',
              cursor: 'pointer',
              fontFamily: 'Sora',
              fontWeight: 600,
              fontSize: '14px',
              lineHeight: '1.43em',
              color: '#F7F7F7',
              textAlign: 'center',
              whiteSpace: 'nowrap',
              padding: '4px 8px',
              borderRadius: '4px',
              transition: 'background-color 0.2s ease',
              display: 'flex',
              alignItems: 'center',
              gap: '4px'
            }}
            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.05)'}
            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
          >
            {formattedYear}
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="6,9 12,15 18,9"></polyline>
            </svg>
          </button>

          {/* Dropdown de Mês */}
          {showMonthSelector && (
            <div
              className="custom-scrollbar"
              style={{
                position: 'absolute',
                top: '100%',
                left: '50%',
                transform: 'translateX(-50%)',
                background: '#2D2D3B',
                border: '1px solid #373A41',
                borderRadius: '8px',
                padding: '8px',
                zIndex: 1000,
                marginTop: '4px',
                minWidth: '120px',
                maxHeight: '200px',
                overflowY: 'auto',
                boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.3)'
              }}
            >
              {monthNames.map((month, index) => (
                <button
                  type="button"
                  key={index}
                  onClick={() => selectMonth(index)}
                  style={{
                    width: '100%',
                    padding: '8px 12px',
                    background: currentMonth.getMonth() === index ? '#F48E2F' : 'transparent',
                    border: 'none',
                    borderRadius: '4px',
                    cursor: 'pointer',
                    fontFamily: 'Sora',
                    fontWeight: 400,
                    fontSize: '14px',
                    color: currentMonth.getMonth() === index ? '#FFFFFF' : '#CECFD2',
                    textAlign: 'left',
                    transition: 'all 0.2s ease'
                  }}
                  onMouseEnter={(e) => {
                    if (currentMonth.getMonth() !== index) {
                      e.currentTarget.style.background = 'rgba(244, 142, 47, 0.1)';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (currentMonth.getMonth() !== index) {
                      e.currentTarget.style.background = 'transparent';
                    }
                  }}
                >
                  {month}
                </button>
              ))}
            </div>
          )}

          {/* Dropdown de Ano */}
          {showYearSelector && (
            <div
              className="custom-scrollbar"
              style={{
                position: 'absolute',
                top: '100%',
                left: '50%',
                transform: 'translateX(-50%)',
                background: '#2D2D3B',
                border: '1px solid #373A41',
                borderRadius: '8px',
                padding: '8px',
                zIndex: 1000,
                marginTop: '4px',
                minWidth: '80px',
                maxHeight: '200px',
                overflowY: 'auto',
                boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.3)'
              }}
            >
              {isLoadingYears ? (
                <div style={{ 
                  padding: '8px 12px', 
                  textAlign: 'center', 
                  color: '#CECFD2', 
                  fontSize: '12px',
                  fontFamily: 'Sora'
                }}>
                  Carregando anos...
                </div>
              ) : (
                visibleYears.map((year) => (
                  <button
                    type="button"
                    key={year}
                    onClick={() => selectYear(year)}
                    style={{
                      width: '100%',
                      padding: '8px 12px',
                      background: currentMonth.getFullYear() === year ? '#F48E2F' : 'transparent',
                      border: 'none',
                      borderRadius: '4px',
                      cursor: 'pointer',
                      fontFamily: 'Sora',
                      fontWeight: 400,
                      fontSize: '14px',
                      color: currentMonth.getFullYear() === year ? '#FFFFFF' : '#CECFD2',
                      textAlign: 'center',
                      transition: 'all 0.2s ease'
                    }}
                    onMouseEnter={(e) => {
                      if (currentMonth.getFullYear() !== year) {
                        e.currentTarget.style.background = 'rgba(244, 142, 47, 0.1)';
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (currentMonth.getFullYear() !== year) {
                        e.currentTarget.style.background = 'transparent';
                      }
                    }}
                  >
                    {year}
                  </button>
                ))
              )}
            </div>
          )}
        </div>


          <button
            type="button"
            onClick={nextMonth}
          style={{
            background: 'transparent',
            border: 'none',
            cursor: 'pointer',
            padding: '6px',
            borderRadius: '6px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '32px',
            height: '32px',
            transition: 'background-color 0.3s ease',
            flexShrink: 0
          }}
          onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.05)'}
          onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9 18L15 12L9 6" stroke="#61656C" strokeWidth="1.67" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>

      {/* Dias da Semana */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(7, 1fr)',
          gap: '0px',
          width: '100%',
          marginBottom: '0'
        }}
      >
        {dayNames.map((day, index) => (
          <div
            key={index}
            style={{
              width: '40px',
              height: '40px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: '9999px'
            }}
          >
            <span
              style={{
                fontFamily: 'Sora',
                fontWeight: 400,
                fontSize: '14px',
                lineHeight: '1.43em',
                color: '#F7F7F7',
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
          gap: '0px',
          width: '100%'
        }}
      >
        {days.map((day, index) => {
          const isSelectedDay = isSelected(day);
          const isDisabledDay = isDisabled(day);
          const isToday = day.toDateString() === new Date().toDateString();

          return (
            <button
              type="button"
              key={index}
              onClick={() => handleDateClick(day)}
              style={{
                width: '40px',
                height: '40px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                background: isSelectedDay ? '#F48E2F' : (isToday ? '#31314E' : 'transparent'),
                borderRadius: '9999px',
                border: 'none',
                cursor: isDisabledDay ? 'not-allowed' : 'pointer',
                transition: 'all 0.2s ease',
                opacity: isDisabledDay ? 0.3 : 1
              }}
              onMouseEnter={(e) => {
                if (!isSelectedDay && !isDisabledDay && !isToday) {
                  e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.05)';
                }
              }}
              onMouseLeave={(e) => {
                if (!isSelectedDay && !isDisabledDay && !isToday) {
                  e.currentTarget.style.backgroundColor = 'transparent';
                }
              }}
            >
              <span
                style={{
                  fontFamily: isToday ? 'Inter' : 'Sora',
                  fontWeight: isToday ? 500 : 400,
                  fontSize: '14px',
                  lineHeight: '1.43em',
                  color: isDisabledDay ? '#85888E' : (isSelectedDay ? '#FFFFFF' : (isToday ? '#ECECED' : '#F7F7F7')),
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
