import React, { useState, useEffect } from 'react';
import { Calendar } from '@/components/ui';

interface StudentData {
  nome: string;
  email: string;
  cpf: string;
  dataNascimento: string;
  observacoes: string;
}

interface Step1StudentFormProps {
  formData: {
    nome: string;
    email: string;
    cpf: string;
    dataNascimento: string;
    observacoes: string;
  };
  errors: Partial<{
    nome: string;
    email: string;
    cpf: string;
    dataNascimento: string;
    observacoes: string;
  }>;
  onInputChange: (field: keyof StudentData, value: string) => void;
}

export const Step1StudentForm: React.FC<Step1StudentFormProps> = ({
  formData,
  errors,
  onInputChange
}) => {
  const [showCalendar, setShowCalendar] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [calendarDate, setCalendarDate] = useState<Date | undefined>(undefined);
  const [cursorPosition, setCursorPosition] = useState(0);

  // Sincronizar inputValue e calendarDate com formData.dataNascimento
  useEffect(() => {
    if (formData.dataNascimento) {
      // Parse da string YYYY-MM-DD no fuso horário local
      const [year, month, day] = formData.dataNascimento.split('-');
      const date = new Date(parseInt(year), parseInt(month) - 1, parseInt(day));
      setInputValue(date.toLocaleDateString('pt-BR'));
      setCalendarDate(date);
    } else {
      setInputValue('');
      setCalendarDate(undefined);
    }
  }, [formData.dataNascimento]);

  // Restaurar posição do cursor após formatação
  useEffect(() => {
    const input = document.querySelector('input[type="text"][placeholder="DD/MM/AAAA"]') as HTMLInputElement;
    if (input && cursorPosition !== undefined) {
      setTimeout(() => {
        input.setSelectionRange(cursorPosition, cursorPosition);
      }, 0);
    }
  }, [inputValue, cursorPosition]);

  // Fechar calendário ao clicar fora
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const calendarContainer = document.querySelector('[data-calendar-container]');
      const target = event.target as Element;
      
      if (showCalendar && calendarContainer && !calendarContainer.contains(target)) {
        setShowCalendar(false);
      }
    };

    if (showCalendar) {
      document.addEventListener('mousedown', handleClickOutside);
      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
      };
    }
  }, [showCalendar]);

  // Função para atualizar o calendário quando o input muda
  const updateCalendarFromInput = (formattedDate: string) => {
    if (formattedDate.length === 10) {
      const [day, month, year] = formattedDate.split('/');
      // Criar data no fuso horário local para evitar problemas de timezone
      const date = new Date(parseInt(year), parseInt(month) - 1, parseInt(day));
      if (!isNaN(date.getTime()) && date.getFullYear() >= 1900 && date.getFullYear() <= new Date().getFullYear()) {
        // Usar formato YYYY-MM-DD diretamente para evitar problemas de timezone
        const isoDate = `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`;
        onInputChange('dataNascimento', isoDate);
        setCalendarDate(date);
        // Fechar calendário quando data válida for digitada
        setShowCalendar(false);
      }
    } else if (formattedDate.length === 0) {
      onInputChange('dataNascimento', '');
      setCalendarDate(undefined);
    }
  };

  // Função para formatar data preservando posição do cursor
  const formatDateWithCursor = (value: string, cursorPos: number) => {
    // Manter apenas números e barras existentes
    const cleanValue = value.replace(/[^\d\/]/g, '');
    
    // Se tem barras, preservar a estrutura
    if (cleanValue.includes('/')) {
      const parts = cleanValue.split('/');
      let formatted = '';
      
      // Reconstruir mantendo as barras
      if (parts[0]) {
        formatted += parts[0].slice(0, 2);
        if (parts[0].length >= 2 && parts[1]) {
          formatted += '/' + parts[1].slice(0, 2);
          if (parts[1].length >= 2 && parts[2]) {
            formatted += '/' + parts[2].slice(0, 4);
          }
        }
      }
      
      // Calcular nova posição do cursor
      let newCursorPos = cursorPos;
      
      // Ajustar posição se necessário
      if (formatted.length !== cleanValue.length) {
        const diff = formatted.length - cleanValue.length;
        if (cursorPos > 2 && formatted.length > cleanValue.length) {
          newCursorPos = cursorPos + diff;
        }
      }
      
      return { formatted, cursorPos: newCursorPos };
    } else {
      // Sem barras, aplicar formatação normal
      const numbers = cleanValue;
      let formatted = numbers;
      
      // Aplicar formatação gradual
      if (numbers.length >= 3) {
        formatted = numbers.replace(/(\d{2})(\d)/, '$1/$2');
      }
      if (numbers.length >= 6) {
        formatted = numbers.replace(/(\d{2})\/(\d{2})(\d)/, '$1/$2/$3');
      }
      
      // Calcular nova posição do cursor
      let newCursorPos = cursorPos;
      
      // Se adicionou uma barra antes da posição do cursor, ajustar
      if (formatted.length > value.length) {
        if (cursorPos >= 2 && numbers.length === 3) {
          newCursorPos = cursorPos + 1; // Adicionou barra após DD
        } else if (cursorPos >= 5 && numbers.length === 6) {
          newCursorPos = cursorPos + 1; // Adicionou barra após MM
        }
      }
      
      return { formatted, cursorPos: newCursorPos };
    }
  };

  // Função para formatar CPF
  const formatCPF = (value: string) => {
    // Remove tudo que não é dígito
    const numbers = value.replace(/\D/g, '');
    
    // Limita a 11 dígitos
    const limitedNumbers = numbers.slice(0, 11);
    
    // Aplica a máscara: 000.000.000-00
    if (limitedNumbers.length <= 3) {
      return limitedNumbers;
    } else if (limitedNumbers.length <= 6) {
      return `${limitedNumbers.slice(0, 3)}.${limitedNumbers.slice(3)}`;
    } else if (limitedNumbers.length <= 9) {
      return `${limitedNumbers.slice(0, 3)}.${limitedNumbers.slice(3, 6)}.${limitedNumbers.slice(6)}`;
    } else {
      return `${limitedNumbers.slice(0, 3)}.${limitedNumbers.slice(3, 6)}.${limitedNumbers.slice(6, 9)}-${limitedNumbers.slice(9, 11)}`;
    }
  };

  // Função para lidar com mudanças no CPF
  const handleCPFChange = (value: string) => {
    const formattedValue = formatCPF(value);
    onInputChange('cpf', formattedValue);
  };

  return (
    <>
      {/* Nome completo */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
        <div style={{ display: 'flex', gap: '2px' }}>
          <label
            style={{
              fontFamily: 'Sora',
              fontWeight: 400,
              fontSize: '14px',
              lineHeight: '1.43em',
              color: '#CECFD2',
            }}
          >
            Nome completo
          </label>
          <span style={{ color: '#F97066', fontFamily: 'Inter', fontWeight: 500 }}>*</span>
        </div>
        <input
          type="text"
          value={formData.nome}
          onChange={(e) => onInputChange('nome', e.target.value)}
          placeholder="Insira o nome completo do aluno"
          required
          style={{
            background: '#2D2D3B',
            border: `1px solid ${errors.nome ? '#F97066' : '#373A41'}`,
            borderRadius: '8px',
            padding: '10px 14px',
            fontFamily: 'Sora',
            fontWeight: 400,
            fontSize: '16px',
            lineHeight: '1.5em',
            color: formData.nome ? '#FFFFFF' : '#CECFD2',
            outline: 'none',
            transition: 'all 0.2s ease',
            boxShadow: '0px 1px 2px 0px rgba(255, 255, 255, 0)',
            width: '100%'
          }}
          onFocus={(e) => {
            e.currentTarget.style.borderColor = '#F48E2F';
            e.currentTarget.style.color = '#FFFFFF';
          }}
          onBlur={(e) => {
            e.currentTarget.style.borderColor = errors.nome ? '#F97066' : '#373A41';
            if (!e.currentTarget.value) {
              e.currentTarget.style.color = '#CECFD2';
            }
          }}
        />
        {errors.nome && (
          <span style={{ color: '#F97066', fontSize: '12px', fontFamily: 'Sora' }}>
            {errors.nome}
          </span>
        )}
      </div>

      {/* E-mail */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
        <div style={{ display: 'flex', gap: '2px' }}>
          <label
            style={{
              fontFamily: 'Sora',
              fontWeight: 400,
              fontSize: '14px',
              lineHeight: '1.43em',
              color: '#CECFD2',
            }}
          >
            E-mail do aluno
          </label>
          <span style={{ color: '#F97066', fontFamily: 'Inter', fontWeight: 500 }}>*</span>
        </div>
        <input
          type="email"
          value={formData.email}
          onChange={(e) => onInputChange('email', e.target.value)}
          placeholder="Insira o e-mail do aluno"
          required
          style={{
            background: '#2D2D3B',
            border: `1px solid ${errors.email ? '#F97066' : '#373A41'}`,
            borderRadius: '8px',
            padding: '10px 14px',
            fontFamily: 'Sora',
            fontWeight: 400,
            fontSize: '16px',
            lineHeight: '1.5em',
            color: formData.email ? '#FFFFFF' : '#CECFD2',
            outline: 'none',
            transition: 'all 0.2s ease',
            boxShadow: '0px 1px 2px 0px rgba(255, 255, 255, 0)',
            width: '100%'
          }}
          onFocus={(e) => {
            e.currentTarget.style.borderColor = '#F48E2F';
            e.currentTarget.style.color = '#FFFFFF';
          }}
          onBlur={(e) => {
            e.currentTarget.style.borderColor = errors.email ? '#F97066' : '#373A41';
            if (!e.currentTarget.value) {
              e.currentTarget.style.color = '#CECFD2';
            }
          }}
        />
        {errors.email && (
          <span style={{ color: '#F97066', fontSize: '12px', fontFamily: 'Sora' }}>
            {errors.email}
          </span>
        )}
      </div>

      {/* CPF */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
        <div style={{ display: 'flex', gap: '2px' }}>
          <label
            style={{
              fontFamily: 'Sora',
              fontWeight: 400,
              fontSize: '14px',
              lineHeight: '1.43em',
              color: '#CECFD2',
            }}
          >
            CPF do aluno
          </label>
          <span style={{ color: '#F97066', fontFamily: 'Inter', fontWeight: 500 }}>*</span>
        </div>
        <input
          type="text"
          value={formData.cpf}
          onChange={(e) => handleCPFChange(e.target.value)}
          placeholder="000.000.000-00"
          maxLength={14}
          style={{
            background: '#2D2D3B',
            border: `1px solid ${errors.cpf ? '#F97066' : '#373A41'}`,
            borderRadius: '8px',
            padding: '10px 14px',
            fontFamily: 'Sora',
            fontWeight: 400,
            fontSize: '16px',
            lineHeight: '1.5em',
            color: formData.cpf ? '#FFFFFF' : '#CECFD2',
            outline: 'none',
            transition: 'all 0.2s ease',
            boxShadow: '0px 1px 2px 0px rgba(255, 255, 255, 0)',
            width: '100%'
          }}
          onFocus={(e) => {
            e.currentTarget.style.borderColor = '#F48E2F';
            e.currentTarget.style.color = '#FFFFFF';
          }}
          onBlur={(e) => {
            e.currentTarget.style.borderColor = errors.cpf ? '#F97066' : '#373A41';
            if (!e.currentTarget.value) {
              e.currentTarget.style.color = '#CECFD2';
            }
          }}
        />
        {errors.cpf && (
          <span style={{ color: '#F97066', fontSize: '12px', fontFamily: 'Sora' }}>
            {errors.cpf}
          </span>
        )}
      </div>

            {/* Data de nascimento */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
              <div style={{ display: 'flex', gap: '2px' }}>
                <label
                  style={{
                    fontFamily: 'Sora',
                    fontWeight: 400,
                    fontSize: '14px',
                    lineHeight: '1.43em',
                    color: '#CECFD2',
                  }}
                >
                  Data de nascimento
                </label>
              </div>
        <div style={{ position: 'relative' }} data-calendar-container>
          <input
            type="text"
            value={inputValue}
            onClick={() => setShowCalendar(true)}
            onChange={(e) => {
              const value = e.target.value;
              const cursorPosition = e.target.selectionStart || 0;
              
              // Permitir apenas números e barras
              const cleanValue = value.replace(/[^\d\/]/g, '');
              
              // Formatar como DD/MM/AAAA
              if (cleanValue.length <= 10) {
                const { formatted, cursorPos } = formatDateWithCursor(cleanValue, cursorPosition);
                
                // Atualizar o estado local
                setInputValue(formatted);
                setCursorPosition(cursorPos);
                
                // Só atualizar o calendário se a data estiver completa e válida
                if (formatted.length === 10) {
                  updateCalendarFromInput(formatted);
                } else if (formatted.length === 0) {
                  // Limpar calendário se input estiver vazio
                  onInputChange('dataNascimento', '');
                  setCalendarDate(undefined);
                }
              }
            }}
            onKeyDown={(e) => {
              // Permitir navegação com setas, backspace, delete, tab, etc.
              const allowedKeys = [
                'ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown',
                'Tab', 'Enter', 'Home', 'End', 'Escape'
              ];
              
              if (allowedKeys.includes(e.key)) {
                return; // Permitir teclas de navegação
              }
              
              // Tratar Backspace e Delete de forma especial
              if (e.key === 'Backspace' || e.key === 'Delete') {
                const input = e.target as HTMLInputElement;
                const cursorPos = input.selectionStart || 0;
                const value = input.value;
                
                if (e.key === 'Backspace' && cursorPos > 0) {
                  // Backspace: apagar caractere à esquerda
                  const newValue = value.slice(0, cursorPos - 1) + value.slice(cursorPos);
                  setInputValue(newValue);
                  setCursorPosition(cursorPos - 1);
                  
                  // Atualizar calendário se necessário
                  if (newValue.length === 10) {
                    updateCalendarFromInput(newValue);
                  } else if (newValue.length === 0) {
                    onInputChange('dataNascimento', '');
                    setCalendarDate(undefined);
                  }
                  
                  e.preventDefault();
                } else if (e.key === 'Delete' && cursorPos < value.length) {
                  // Delete: apagar caractere à direita
                  const newValue = value.slice(0, cursorPos) + value.slice(cursorPos + 1);
                  setInputValue(newValue);
                  setCursorPosition(cursorPos);
                  
                  // Atualizar calendário se necessário
                  if (newValue.length === 10) {
                    updateCalendarFromInput(newValue);
                  } else if (newValue.length === 0) {
                    onInputChange('dataNascimento', '');
                    setCalendarDate(undefined);
                  }
                  
                  e.preventDefault();
                }
                return;
              }
              
              // Permitir apenas números
              if (!/\d/.test(e.key)) {
                e.preventDefault();
              }
            }}
            placeholder="DD/MM/AAAA"
            style={{
              background: '#2D2D3B',
              border: '1px solid #2D2D36',
              borderRadius: '8px',
              padding: '8px 12px 8px 40px',
              fontFamily: 'Sora',
              fontWeight: 400,
              fontSize: '16px',
              lineHeight: '1.5em',
              color: formData.dataNascimento ? '#FFFFFF' : '#CECFD2',
              outline: 'none',
              transition: 'all 0.2s ease',
              boxShadow: '0px 1px 2px 0px rgba(255, 255, 255, 0)',
              width: '100%',
              cursor: 'pointer'
            }}
            onFocus={(e) => {
              e.currentTarget.style.borderColor = '#F48E2F';
              e.currentTarget.style.color = '#FFFFFF';
            }}
            onBlur={(e) => {
              e.currentTarget.style.borderColor = '#2D2D36';
              if (!e.currentTarget.value) {
                e.currentTarget.style.color = '#CECFD2';
              }
            }}
          />
          <div
            style={{
              position: 'absolute',
              left: '12px',
              top: '50%',
              transform: 'translateY(-50%)',
              color: '#94979C',
              pointerEvents: 'none'
            }}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.67" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
              <line x1="16" y1="2" x2="16" y2="6"/>
              <line x1="8" y1="2" x2="8" y2="6"/>
              <line x1="3" y1="10" x2="21" y2="10"/>
            </svg>
          </div>
          
          {/* Calendário */}
          {showCalendar && (
            <div
              style={{
                position: 'absolute',
                top: '100%',
                left: 0,
                zIndex: 1000,
                marginTop: '8px',
                width: '100%',
                maxWidth: '320px'
              }}
            >
            <Calendar
              selectedDate={calendarDate}
              onDateSelect={(date) => {
                // Usar formato YYYY-MM-DD diretamente para evitar problemas de timezone
                const year = date.getFullYear();
                const month = String(date.getMonth() + 1).padStart(2, '0');
                const day = String(date.getDate()).padStart(2, '0');
                const isoDate = `${year}-${month}-${day}`;
                
                onInputChange('dataNascimento', isoDate);
                setInputValue(date.toLocaleDateString('pt-BR'));
                setCalendarDate(date);
                setShowCalendar(false);
              }}
              onNavigationChange={(date) => {
                // Apenas atualizar o calendário, sem disparar POST
                setCalendarDate(date);
              }}
                onClose={() => setShowCalendar(false)}
                isInModal={true}
                style={{
                  background: '#2D2D3B',
                  border: '1px solid #373A41',
                  borderRadius: '8px',
                  padding: '16px',
                  boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.3)',
                  width: '100%'
                }}
              />
            </div>
          )}
        </div>
      </div>

      {/* Observações */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
        <label
          style={{
            fontFamily: 'Sora',
            fontWeight: 400,
            fontSize: '14px',
            lineHeight: '1.43em',
            color: '#CECFD2',
          }}
        >
          Observações
        </label>
        <textarea
          value={formData.observacoes}
          onChange={(e) => onInputChange('observacoes', e.target.value)}
          placeholder="Digite sua mensagem"
          rows={5}
          style={{
            background: '#2D2D3B',
            border: '1px solid #2D2D36',
            borderRadius: '8px',
            padding: '12px 14px',
            fontFamily: 'Sora',
            fontWeight: 400,
            fontSize: '14px',
            lineHeight: '1.43em',
            color: formData.observacoes ? '#FFFFFF' : '#CECFD2',
            outline: 'none',
            resize: 'vertical',
            minHeight: '100px',
            transition: 'all 0.2s ease',
            boxShadow: '0px 1px 2px 0px rgba(255, 255, 255, 0)',
            width: '100%'
          }}
          onFocus={(e) => {
            e.currentTarget.style.borderColor = '#F48E2F';
            e.currentTarget.style.color = '#FFFFFF';
          }}
          onBlur={(e) => {
            e.currentTarget.style.borderColor = '#2D2D36';
            if (!e.currentTarget.value) {
              e.currentTarget.style.color = '#CECFD2';
            }
          }}
        />
      </div>
    </>
  );
};
