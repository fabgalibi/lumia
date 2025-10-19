import React from 'react';

interface ModalFooterProps {
  currentStep: number;
  onClose: () => void;
  onPrevious: () => void;
  onNext: () => void;
  onSubmit: () => void;
  isFormValid: boolean;
}

export const ModalFooter: React.FC<ModalFooterProps> = ({
  currentStep,
  onClose,
  onPrevious,
  onNext,
  onSubmit,
  isFormValid
}) => {
  const getNextButtonText = (step: number) => {
    switch (step) {
      case 1:
        return 'Prosseguir para etapa 2';
      case 2:
        return 'Prosseguir para etapa 3';
      case 3:
        return 'Cadastrar aluno';
      default:
        return 'Prosseguir';
    }
  };

  const getPreviousButtonText = (step: number) => {
    return `Voltar a etapa ${step - 1}`;
  };

  return (
    <div
      style={{
        display: 'flex',
        gap: '16px',
        padding: '32px 24px',
        borderTop: '1px solid #2C2C45',
        background: '#202028',
        flexShrink: 0
      }}
    >
      {/* Botão de voltar/cancelar */}
      {currentStep > 1 ? (
        <button
          type="button"
          onClick={onPrevious}
          style={{
            flex: 1,
            padding: '12px 18px',
            background: '#2D2D45',
            border: 'none',
            borderRadius: '8px',
            fontFamily: 'Sora',
            fontWeight: 600,
            fontSize: '16px',
            lineHeight: '1.5em',
            color: '#CECFD2',
            cursor: 'pointer',
            boxShadow: '0px 1px 2px 0px rgba(255, 255, 255, 0), inset 0px -2px 0px 0px rgba(12, 14, 18, 0.05), inset 0px 0px 0px 1px rgba(12, 14, 18, 0.18)',
            transition: 'background 0.2s ease',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '6px'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = '#333346';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = '#2D2D45';
          }}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.67" strokeLinecap="round" strokeLinejoin="round">
            <path d="M15 18L9 12L15 6"/>
          </svg>
          {getPreviousButtonText(currentStep)}
        </button>
      ) : (
        <button
          type="button"
          onClick={onClose}
          style={{
            flex: 1,
            padding: '12px 18px',
            background: '#2D2D45',
            border: 'none',
            borderRadius: '8px',
            fontFamily: 'Sora',
            fontWeight: 600,
            fontSize: '16px',
            lineHeight: '1.5em',
            color: '#CECFD2',
            cursor: 'pointer',
            boxShadow: '0px 1px 2px 0px rgba(255, 255, 255, 0), inset 0px -2px 0px 0px rgba(12, 14, 18, 0.05), inset 0px 0px 0px 1px rgba(12, 14, 18, 0.18)',
            transition: 'background 0.2s ease'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = '#3A3A52';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = '#2D2D45';
          }}
        >
          Cancelar
        </button>
      )}
      
      {/* Botão de próximo/submit */}
      <button
        type="button"
        onClick={currentStep < 3 ? onNext : onSubmit}
        disabled={!isFormValid}
        style={{
          flex: 1,
          padding: '12px 18px',
          background: isFormValid ? '#C74228' : '#22262F',
          border: isFormValid ? '2px solid transparent' : '2px solid #22262F',
          backgroundImage: isFormValid ? 'linear-gradient(180deg, rgba(255, 255, 255, 0.12) 0%, rgba(255, 255, 255, 0) 100%)' : 'none',
          borderRadius: '8px',
          fontFamily: 'Sora',
          fontWeight: 600,
          fontSize: '16px',
          lineHeight: '1.5em',
          color: isFormValid ? '#FFFFFF' : '#85888E',
          cursor: isFormValid ? 'pointer' : 'not-allowed',
          boxShadow: isFormValid ? '0px 1px 2px 0px rgba(255, 255, 255, 0), inset 0px -2px 0px 0px rgba(12, 14, 18, 0.05)' : 'none',
          transition: 'background 0.2s ease',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '6px'
        }}
        onMouseEnter={(e) => {
          if (isFormValid) {
            e.currentTarget.style.background = '#D55A3A';
          }
        }}
        onMouseLeave={(e) => {
          if (isFormValid) {
            e.currentTarget.style.background = '#C74228';
          }
        }}
      >
        {getNextButtonText(currentStep)}
        {currentStep < 3 && (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.67" strokeLinecap="round" strokeLinejoin="round">
            <path d="M9 18L15 12L9 6"/>
          </svg>
        )}
      </button>
    </div>
  );
};
