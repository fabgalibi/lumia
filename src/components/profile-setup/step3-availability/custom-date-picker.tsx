// custom-date-picker.tsx
import React, { useState } from 'react';

/** ===== Componente de conteúdo do calendário ===== */
interface CalendarContentProps {
  currentMonth: Date;
  setCurrentMonth: (date: Date) => void;
  tempSelectedDate: Date | undefined;
  handleDateClick: (date: Date) => void;
  isCurrentMonth: (date: Date) => boolean;
  isDateAvailable: (date: Date) => boolean;
  dayNames: string[];
  days: Date[];
  screenSize: 'mobile' | 'tablet' | 'notebook' | 'desktop';
  isInModal: boolean;
}

function CalendarContent({
  currentMonth,
  setCurrentMonth,
  tempSelectedDate,
  handleDateClick,
  isCurrentMonth,
  isDateAvailable,
  dayNames,
  days,
  screenSize,
  isInModal
}: CalendarContentProps) {
  const previousMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1, 1));
  };

  const nextMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 1));
  };

  const monthNames = [
    'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho',
    'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'
  ];
  const formattedMonth = monthNames[currentMonth.getMonth()];
  const formattedYear = currentMonth.getFullYear().toString();

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: screenSize === 'mobile' || screenSize === 'tablet' ? '12px' : '12px'
      }}
    >
      {/* Header do Mês */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          width: '100%',
          gap: screenSize === 'mobile' || screenSize === 'tablet' ? '16px' : '57px',
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
            fontSize: isInModal ? '18px' : '14px', // Font size/text-sm (14px)
            lineHeight: isInModal ? '1.5' : '20px', // Line height/text-sm (20px)
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
          gap: isInModal ? '4px' : '0px',
          width: '100%',
          marginBottom: '0'
        }}
      >
        {dayNames.map((day, index) => (
          <div
            key={index}
            style={{
              width: isInModal ? '44px' : '40px',
              height: isInModal ? '44px' : '40px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <span
              style={{
                fontFamily: 'Sora',
                fontWeight: 600,
                fontSize: '14px', // Font size/text-sm
                lineHeight: '20px', // Line height/text-sm
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
          gap: isInModal ? '4px' : '0px',
          width: '100%'
        }}
      >
        {days.map((day, index) => {
          const isSelected = tempSelectedDate && 
            day.getMonth() === tempSelectedDate.getMonth() && 
            day.getFullYear() === tempSelectedDate.getFullYear() &&
            day.getDate() === tempSelectedDate.getDate();
          const isDisabled = !isCurrentMonth(day) || !isDateAvailable(day);

          return (
            <button
              key={index}
              onClick={() => !isDisabled && handleDateClick(day)}
              style={{
                width: isInModal ? '44px' : '40px',
                height: isInModal ? '44px' : '40px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                background: isSelected ? (isInModal ? '#D9572D' : '#F66649') : 'transparent',
                borderRadius: isInModal ? '8px' : '6px',
                border: 'none',
                cursor: isDisabled ? 'not-allowed' : 'pointer',
                transition: 'background-color 0.3s ease',
                opacity: isDisabled ? 0.5 : 1
              }}
              onMouseEnter={(e) => {
                if (!isSelected && !isDisabled) {
                  e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.05)';
                }
              }}
              onMouseLeave={(e) => {
                if (!isSelected && !isDisabled) {
                  e.currentTarget.style.backgroundColor = 'transparent';
                }
              }}
            >
              <span
                style={{
                  fontFamily: 'Sora',
                  fontWeight: isSelected ? 600 : 400,
                  fontSize: isInModal ? '16px' : '14px', // Font size/text-sm (14px) desktop
                  lineHeight: isInModal ? '1.5' : '20px', // Line height/text-sm (20px) desktop
                  letterSpacing: '0%',
                  color: isDisabled ? '#85888E' : '#F7F7F7',
                  textAlign: 'center'
                }}
              >
                {day.getDate()}
              </span>
            </button>
          );
        })}
      </div>

      {/* Aviso de datas disponíveis */}
      {!isInModal && (
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            marginTop: '12px'
          }}
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10 18.3333C14.6024 18.3333 18.3333 14.6024 18.3333 10C18.3333 5.39763 14.6024 1.66667 10 1.66667C5.39763 1.66667 1.66667 5.39763 1.66667 10C1.66667 14.6024 5.39763 18.3333 10 18.3333Z" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M10 6.66667V10" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M10 13.3333H10.0083" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <span
            style={{
              fontFamily: 'Inter',
              fontWeight: 400,
              fontSize: '12px',
              lineHeight: '1.5em',
              color: '#FFFFFF',
              textAlign: 'left'
            }}
          >
            Datas disponíveis: entre 05 à 17/10/2025
          </span>
        </div>
      )}
    </div>
  );
}

/** ===== Props públicas ===== */
export type CustomDatePickerProps = {
  selectedDate: Date | undefined;
  onDateSelect: (date: Date) => void;
  screenSize: "mobile" | "tablet" | "notebook" | "desktop";
  isInModal?: boolean; // Flag para indicar se está dentro de um modal
};

/** ===== Componente DatePicker customizado baseado no Figma ===== */
export default function CustomDatePicker({ selectedDate, onDateSelect, screenSize, isInModal = false }: CustomDatePickerProps) {
  const [currentMonth, setCurrentMonth] = useState(new Date(2025, 8, 1)); // Começa em Setembro de 2025

  // Gerar dias do calendário
  const generateCalendar = () => {
    const year = currentMonth.getFullYear();
    const month = currentMonth.getMonth();
    
    // Primeiro dia do mês
    const firstDay = new Date(year, month, 1);
    
    // Começar do domingo da primeira semana
    const startDate = new Date(firstDay);
    startDate.setDate(firstDay.getDate() - firstDay.getDay());
    
    const days = [];
    const current = new Date(startDate);
    
    for (let i = 0; i < 35; i++) { // 5 semanas * 7 dias
      days.push(new Date(current));
      current.setDate(current.getDate() + 1);
    }
    
    return { days };
  };



  // Verificar se data está no mês atual
  const isCurrentMonth = (date: Date) => {
    return date.getMonth() === currentMonth.getMonth() && date.getFullYear() === currentMonth.getFullYear();
  };

  // Verificar se data está disponível (entre 05 e 17/10/2025 conforme Figma)
  const isDateAvailable = (date: Date) => {
    // Apenas Outubro de 2025
    if (date.getFullYear() !== 2025 || date.getMonth() !== 9) return false; // Mês 9 é Outubro (0-indexed)
    return date.getDate() >= 5 && date.getDate() <= 17;
  };

  const dayNames = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'];

  // Renderizar apenas o calendário
  return (
    <div
      style={{
        width: isInModal ? '100%' : '328px',
        maxWidth: '100%',
        background: isInModal ? 'transparent' : 'rgba(39, 39, 55, 1)',
        border: isInModal ? 'none' : '1px solid #2C2C45',
        borderRadius: isInModal ? '0' : '12px',
        display: 'flex',
        flexDirection: 'column',
        gap: '12px',
        padding: isInModal ? '0' : '20px 24px'
      }}
    >
      <CalendarContent 
        currentMonth={currentMonth}
        setCurrentMonth={setCurrentMonth}
        tempSelectedDate={selectedDate}
        handleDateClick={onDateSelect}
        isCurrentMonth={isCurrentMonth}
        isDateAvailable={isDateAvailable}
        dayNames={dayNames}
        days={generateCalendar().days}
        screenSize={screenSize}
        isInModal={isInModal}
      />
    </div>
  );
}
