import React from 'react';

interface DisciplineModalFooterProps {
  onCancel: () => void;
  onSubmit: () => void;
  isFormValid: boolean;
  isSubmitting: boolean;
  submitButtonText?: string;
}

export const DisciplineModalFooter: React.FC<DisciplineModalFooterProps> = ({
  onCancel,
  onSubmit,
  isFormValid,
  isSubmitting,
  submitButtonText = "Cadastrar disciplina"
}) => {
  return (
    <div style={{
      display: 'flex',
      alignSelf: 'stretch',
      gap: '16px',
      padding: '32px 24px',
      borderTop: '1px solid #2C2C45',
      borderBottomLeftRadius: '16px',
      borderBottomRightRadius: '16px'
    }}>
      <button
        onClick={onCancel}
        style={{
          flex: 1,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '6px',
          padding: '12px 18px',
          backgroundColor: '#2D2D45',
          border: 'none',
          borderRadius: '8px',
          color: '#CECFD2',
          fontSize: '16px',
          fontFamily: 'Sora',
          fontWeight: 600,
          cursor: 'pointer',
          boxShadow: '0px 1px 2px 0px rgba(255, 255, 255, 0), inset 0px -2px 0px 0px rgba(12, 14, 18, 0.05), inset 0px 0px 0px 1px rgba(12, 14, 18, 0.18)'
        }}
      >
        Cancelar
      </button>
      
      <button
        onClick={onSubmit}
        disabled={!isFormValid || isSubmitting}
        style={{
          flex: 1,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '6px',
          padding: '12px 18px',
          backgroundColor: isFormValid && !isSubmitting ? '#C74228' : '#22262F',
          border: isFormValid && !isSubmitting ? '1px solid #C74228' : '1px solid #22262F',
          borderRadius: '8px',
          color: isFormValid && !isSubmitting ? '#FFFFFF' : '#85888E',
          fontSize: '16px',
          fontFamily: 'Sora',
          fontWeight: 600,
          cursor: isFormValid && !isSubmitting ? 'pointer' : 'not-allowed',
          opacity: isFormValid && !isSubmitting ? 1 : 1,
          boxShadow: isFormValid && !isSubmitting ? '0px 1px 2px 0px rgba(255, 255, 255, 0)' : '0px 1px 2px 0px rgba(255, 255, 255, 0)'
        }}
      >
        {isSubmitting ? 'Salvando...' : submitButtonText}
      </button>
    </div>
  );
};
