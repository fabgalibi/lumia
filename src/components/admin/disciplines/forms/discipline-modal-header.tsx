import React from 'react';
import { X } from 'lucide-react';

interface DisciplineModalHeaderProps {
  onClose: () => void;
}

export const DisciplineModalHeader: React.FC<DisciplineModalHeaderProps> = ({
  onClose
}) => {
  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      alignSelf: 'stretch',
      gap: '16px',
      padding: '24px 16px 16px 24px',
      borderBottom: '1.5px solid #272737',
      backgroundColor: '#252532',
      borderTopLeftRadius: '16px',
      borderTopRightRadius: '16px'
    }}>
      {/* Container do título */}
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        gap: '4px',
        flex: 1
      }}>
        <h2 style={{
          fontFamily: 'Sora',
          fontWeight: 600,
          fontSize: '18px',
          lineHeight: '1.5555555555555556em',
          color: '#F7F7F7',
          margin: 0,
          textAlign: 'left'
        }}>
          Cadastrar nova disciplina
        </h2>
      </div>
      
      {/* Botão de fechar */}
      <button
        onClick={onClose}
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          width: '40px',
          height: '40px',
          padding: '8px',
          background: 'transparent',
          border: 'none',
          borderRadius: '8px',
          cursor: 'pointer',
          color: '#F0F0F1',
          transition: 'background-color 0.2s ease'
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.backgroundColor = 'transparent';
        }}
      >
        <X size={24} />
      </button>
    </div>
  );
};
