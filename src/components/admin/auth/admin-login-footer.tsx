import React from 'react';
import { useNavigate } from 'react-router-dom';

export const AdminLoginFooter: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        width: '100%',
        paddingTop: '16px',
      }}
    >
      <button
        onClick={() => navigate('/login')}
        style={{
          background: 'transparent',
          border: 'none',
          fontFamily: 'Sora',
          fontWeight: 400,
          fontSize: '14px',
          lineHeight: '1.43em',
          color: '#61656C',
          cursor: 'pointer',
          padding: '8px',
          textDecoration: 'underline',
          transition: 'color 0.2s ease',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.color = '#94979C';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.color = '#61656C';
        }}
      >
        Voltar para login do aluno
      </button>
    </div>
  );
};

