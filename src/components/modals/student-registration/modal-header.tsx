import React from 'react';

interface ModalHeaderProps {
  currentStep: number;
  onClose: () => void;
}

export const ModalHeader: React.FC<ModalHeaderProps> = ({ currentStep, onClose }) => {
  const getStepTitle = (step: number) => {
    switch (step) {
      case 1:
        return 'Cadastrar aluno';
      case 2:
        return 'Atribuir plano';
      case 3:
        return 'Definir senha do aluno';
      default:
        return 'Cadastrar aluno';
    }
  };

  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '24px 16px 16px 24px',
      borderBottom: '1.5px solid #272737',
      background: '#252532',
      flexShrink: 0
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '16px', flex: 1 }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '4px', flex: 1 }}>
          <div style={{ display: 'flex', gap: '6px', alignItems: 'center' }}>
            <h2 style={{
              fontFamily: 'Sora',
              fontWeight: 600,
              fontSize: '18px',
              lineHeight: '1.56em',
              color: '#F48E2F',
              margin: 0
            }}>
              {getStepTitle(currentStep)}
            </h2>
          </div>
          <div style={{ width: '91px' }}>
            <span style={{
              fontFamily: 'Sora',
              fontWeight: 400,
              fontSize: '14px',
              lineHeight: '1.43em',
              color: '#FFFFFF'
            }}>
              {currentStep === 3 ? 'Passo final:' : `Passo ${currentStep} de 3:`}
            </span>
          </div>
        </div>
      </div>
      
      <button
        onClick={onClose}
        style={{
          width: '36px',
          height: '36px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'transparent',
          border: 'none',
          borderRadius: '8px',
          cursor: 'pointer',
          color: '#F0F0F1',
          transition: 'background 0.2s ease',
          flexShrink: 0,
          minWidth: '36px',
          minHeight: '36px'
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.background = '#333346';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.background = 'transparent';
        }}
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.67" strokeLinecap="round" strokeLinejoin="round">
          <path d="M18 6L6 18M6 6L18 18"/>
        </svg>
      </button>
    </div>
  );
};
