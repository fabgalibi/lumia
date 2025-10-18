import React, { useState } from 'react';
import { Calendar } from '@/components/ui';

interface StudentData {
  nome: string;
  email: string;
  cpf: string;
  dataInicio: string;
  observacoes: string;
}

interface Step1StudentFormProps {
  formData: StudentData;
  errors: Partial<StudentData>;
  onInputChange: (field: keyof StudentData, value: string) => void;
  isMobile: boolean;
}

export const Step1StudentForm: React.FC<Step1StudentFormProps> = ({
  formData,
  errors,
  onInputChange,
  isMobile
}) => {
  const [showCalendar, setShowCalendar] = useState(false);

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
          <span style={{ color: '#CECFD2', fontFamily: 'Sora', fontWeight: 400, fontSize: '14px' }}>(opcional)</span>
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

      {/* Data de início */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
        <label
          style={{
            fontFamily: 'Sora',
            fontWeight: 400,
            fontSize: '14px',
            lineHeight: '1.43em',
            color: '#F7F7F7',
          }}
        >
          Data de início
        </label>
        <div style={{ position: 'relative' }} data-calendar-container>
          <button
            type="button"
            onClick={() => setShowCalendar(!showCalendar)}
            style={{
              background: '#2D2D3B',
              border: '1px solid #2D2D36',
              borderRadius: '8px',
              padding: '8px 12px 8px 40px',
              fontFamily: 'Sora',
              fontWeight: 400,
              fontSize: '16px',
              lineHeight: '1.5em',
              color: formData.dataInicio ? '#FFFFFF' : '#CECFD2',
              outline: 'none',
              transition: 'all 0.2s ease',
              boxShadow: '0px 1px 2px 0px rgba(255, 255, 255, 0)',
              width: '100%',
              textAlign: 'left',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              position: 'relative'
            }}
            onFocus={(e) => {
              e.currentTarget.style.borderColor = '#F48E2F';
            }}
            onBlur={(e) => {
              e.currentTarget.style.borderColor = '#2D2D36';
            }}
          >
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
            <span>
              {formData.dataInicio ? 
                new Date(formData.dataInicio).toLocaleDateString('pt-BR') : 
                'Selecionar data'
              }
            </span>
          </button>
          
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
                selectedDate={formData.dataInicio ? new Date(formData.dataInicio) : undefined}
                onDateSelect={(date) => {
                  onInputChange('dataInicio', date.toISOString().split('T')[0]);
                  setShowCalendar(false);
                }}
                onClose={() => setShowCalendar(false)}
                screenSize={isMobile ? 'mobile' : 'desktop'}
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
