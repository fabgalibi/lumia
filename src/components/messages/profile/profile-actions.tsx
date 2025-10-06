import React from 'react';

const ProfileActions: React.FC = () => {
  return (
    <div
      style={{
        padding: '0 24px 24px',
        backgroundColor: '#1D1D2E',
        borderBottom: '1px solid #2C2C45'
      }}
    >
      {/* Botão Enviar Mensagem */}
      <button
        style={{
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '4px',
          height: 'auto',
          padding: '8px 12px',
          backgroundColor: '#2D2D45',
          border: '1px solid transparent',
          borderRadius: '8px',
          cursor: 'pointer',
          transition: 'all 0.2s ease',
          boxShadow: '0px 1px 2px 0px rgba(10, 13, 18, 0.05), inset 0px -2px 0px 0px rgba(10, 13, 18, 0.05), inset 0px 0px 0px 1px rgba(10, 13, 18, 0.18)',
          background: 'linear-gradient(180deg, rgba(255, 255, 255, 0.12) 0%, rgba(255, 255, 255, 0) 100%)'
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.backgroundColor = '#3A3A55';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.backgroundColor = '#2D2D45';
        }}
      >
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M18.3333 9.99999C18.3333 14.6024 14.6024 18.3333 10 18.3333C8.68603 18.3333 7.4544 18.0456 6.3498 17.5283L2.5 18.3333L3.39627 14.7017C2.70863 13.536 2.27214 12.1866 2.1731 10.7465C2.09713 9.5526 2.2641 8.36932 2.65847 7.26463C3.05284 6.15995 3.66574 5.15902 4.45866 4.32298C5.25157 3.48694 6.20628 2.83346 7.26168 2.40311C8.31707 1.97275 9.45054 1.77509 10.5859 1.82266C11.7213 1.87023 12.8339 2.16189 13.8503 2.67863C14.8667 3.19537 15.7639 3.92633 16.4835 4.82504C17.2032 5.72375 17.7291 6.77053 18.0256 7.89586C18.3221 9.02119 18.3827 10.1984 18.2032 11.3495C18.0236 12.5006 17.6076 13.6009 16.9817 14.5768" stroke="white" strokeWidth="1.67" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        <span
          style={{
            fontFamily: 'Sora',
            fontWeight: 600,
            fontSize: '14px',
            lineHeight: '1.43em',
            color: '#FFFFFF'
          }}
        >
          Enviar mensagem
        </span>
      </button>
    </div>
  );
};

export default ProfileActions;