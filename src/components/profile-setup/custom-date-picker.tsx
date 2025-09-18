// custom-date-picker.tsx
import React, { useState } from 'react';

/** ===== Props públicas ===== */
export type CustomDatePickerProps = {
  selectedDate: Date | undefined;
  onDateSelect: (date: Date) => void;
  screenSize: "mobile" | "tablet" | "notebook" | "desktop";
};

/** ===== Componente DatePicker customizado baseado no Figma ===== */
export default function CustomDatePicker({ selectedDate, onDateSelect, screenSize }: CustomDatePickerProps) {
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
    
    for (let i = 0; i < 42; i++) { // 6 semanas * 7 dias
      days.push(new Date(current));
      current.setDate(current.getDate() + 1);
    }
    
    return { days };
  };

  const { days } = generateCalendar();

  // Navegar mês
  const previousMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1, 1));
  };

  const nextMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 1));
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

  // Formatação do mês/ano
  const monthNames = [
    'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho',
    'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'
  ];
  const formattedMonth = monthNames[currentMonth.getMonth()];
  const formattedYear = currentMonth.getFullYear().toString();

  const dayNames = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'];

  return (
    <div
      style={{
        width: screenSize === 'mobile' ? '100%' : '328px',
        maxWidth: '100%',
        background: '#272737', // Background conforme Figma
        border: '1px solid #2C2C45', // Border conforme Figma
        borderRadius: '16px', // Border radius conforme Figma
        display: 'flex',
        flexDirection: 'column',
        gap: '12px', // Gap conforme Figma
        padding: '20px 24px' // Padding conforme Figma
      }}
    >
      {/* Header do Mês - conforme Figma */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          width: '100%',
          gap: '57px' // Gap conforme Figma
        }}
      >
        <button
          onClick={previousMonth}
          style={{
            background: 'transparent',
            border: 'none',
            cursor: 'pointer',
            padding: '6px',
            borderRadius: '6px', // Border radius conforme Figma
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '32px',
            height: '32px',
            transition: 'background-color 0.3s ease'
          }}
          onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.05)'}
          onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12.5 15L7.5 10L12.5 5" stroke="#A4A7AE" strokeWidth="1.67" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
        <span
          style={{
            fontFamily: 'Sora',
            fontWeight: 600, // Semibold conforme Figma
            fontSize: '14px', // Text sm conforme Figma
            lineHeight: '1.4285714285714286em', // Line height conforme Figma
            color: '#F7F7F7', // Color conforme Figma
            textAlign: 'center',
            whiteSpace: 'nowrap' // Garante que fique em uma linha só
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
            padding: '6px',
            borderRadius: '6px', // Border radius conforme Figma
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '32px',
            height: '32px',
            transition: 'background-color 0.3s ease'
          }}
          onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.05)'}
          onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7.5 15L12.5 10L7.5 5" stroke="#A4A7AE" strokeWidth="1.67" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>

      {/* Dias da Semana - conforme Figma */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(7, 1fr)',
          gap: '0px', // Sem gap entre as células conforme Figma
          width: '100%'
        }}
      >
        {dayNames.map((day, index) => (
          <div
            key={index}
            style={{
              width: '40px', // Width conforme Figma
              height: '40px', // Height conforme Figma
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <span
              style={{
                fontFamily: 'Sora',
                fontWeight: 400, // Medium conforme Figma
                fontSize: '14px', // Text sm conforme Figma
                lineHeight: '1.4285714285714286em', // Line height conforme Figma
                color: '#F7F7F7', // Color conforme Figma
                textAlign: 'center'
              }}
            >
              {day}
            </span>
          </div>
        ))}
      </div>

      {/* Dias do Mês - conforme Figma */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(7, 1fr)',
          gap: '0px', // Sem gap entre as células conforme Figma
          width: '100%'
        }}
      >
        {days.map((day, index) => {
          const isSelected = selectedDate && 
            day.getMonth() === selectedDate.getMonth() && 
            day.getFullYear() === selectedDate.getFullYear() &&
            day.getDate() === selectedDate.getDate();
          const isDisabled = !isCurrentMonth(day) || !isDateAvailable(day);

          return (
            <button
              key={index}
              onClick={() => !isDisabled && onDateSelect(day)}
              style={{
                width: '40px', // Width conforme Figma
                height: '40px', // Height conforme Figma
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                background: isSelected ? '#F66649' : 'transparent', // Background selected conforme Figma
                borderRadius: '9999px', // Full rounded conforme Figma
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
                  fontWeight: isSelected ? 600 : 400, // Semibold quando selected conforme Figma
                  fontSize: '14px', // Text sm conforme Figma
                  lineHeight: '1.4285714285714286em', // Line height conforme Figma
                  color: isDisabled ? '#85888E' : '#F7F7F7', // Colors conforme Figma
                  textAlign: 'center'
                }}
              >
                {day.getDate()}
              </span>
            </button>
          );
        })}
      </div>

      {/* Aviso de datas disponíveis - conforme Figma */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '8px', // Gap conforme Figma
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
            fontFamily: 'Sora',
            fontWeight: 400, // Regular conforme Figma
            fontSize: '12px', // Text xs conforme Figma
            lineHeight: '1.5em', // Line height conforme Figma
            color: '#FFFFFF', // Color conforme Figma
            textAlign: 'left'
          }}
        >
          Datas disponíveis: entre 05 à 17/10/2025
        </span>
      </div>
    </div>
  );
}
