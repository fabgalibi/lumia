import React from 'react';

export const AdminLoginHeader: React.FC = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '32px',
      }}
    >
      {/* Logo */}
      <div style={{ position: 'relative' }}>
        <img
          src="/images/admin-login-icon.png"
          alt="Admin Login Icon"
          style={{
            width: '145px',
            height: '118.5px',
            objectFit: 'contain',
            position: 'relative',
          }}
        />
      </div>

      {/* Textos */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '12px',
          alignItems: 'center',
        }}
      >
        <h1
          style={{
            fontFamily: 'Sora',
            fontWeight: 600,
            fontSize: '30px',
            lineHeight: '1.27em',
            color: '#F7F7F7',
            textAlign: 'center',
            margin: 0,
          }}
        >
          Olá, é bom ter você de volta!
        </h1>
        <p
          style={{
            fontFamily: 'Sora',
            fontWeight: 400,
            fontSize: '16px',
            lineHeight: '1.5em',
            color: '#F7F7F7',
            textAlign: 'center',
            margin: 0,
          }}
        >
          Insira suas credenciais de acesso abaixo.
        </p>
      </div>
    </div>
  );
};

