import React from 'react';

const MessagesEmptyState: React.FC = () => (
  <div
    style={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      gap: '24px',
      padding: '20px 32px',
      height: '912px',
      width: '772px'
    }}
  >
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '10px',
        padding: '24px',
        backgroundColor: '#232332',
        border: '3px solid #2C2C45',
        borderRadius: '360px'
      }}
    >
      <svg
        width="64"
        height="64"
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M32 12C20.9543 12 12 20.9543 12 32C12 43.0457 20.9543 52 32 52C43.0457 52 52 43.0457 52 32C52 20.9543 43.0457 12 32 12Z"
          stroke="white"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M32 20V32L40 36"
          stroke="white"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
    
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '16px'
      }}
    >
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '8px'
        }}
      >
        <h2
          style={{
            fontSize: '20px',
            fontWeight: '600',
            color: '#FFFFFF',
            lineHeight: '1.5',
            margin: 0
          }}
        >
          Suas mensagens
        </h2>
        <p
          style={{
            fontSize: '16px',
            fontWeight: '400',
            color: '#ECECED',
            lineHeight: '1.5',
            textAlign: 'center',
            margin: 0
          }}
        >
          Aqui você verá suas conversas com os mentores, assim como os materiais compartilhados. Envie uma mensagem e comece sua jornada de estudos.
        </p>
      </div>
      
      <button
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '4px',
          padding: '10px 20px',
          backgroundColor: '#C74228',
          border: '2px solid',
          borderImage: 'linear-gradient(180deg, rgba(255, 255, 255, 0.12) 0%, rgba(255, 255, 255, 0) 100%) 1',
          borderRadius: '8px',
          boxShadow: '0px 1px 2px 0px rgba(255, 255, 255, 0), inset 0px -2px 0px 0px rgba(12, 14, 18, 0.05), inset 0px 0px 0px 1px rgba(12, 14, 18, 0.18)',
          cursor: 'pointer'
        }}
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M2.5 5.83333H17.5V14.1667H2.5V5.83333Z"
            stroke="#F0F0F1"
            strokeWidth="1.67"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M5.83337 10H14.1667"
            stroke="#F0F0F1"
            strokeWidth="1.67"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <span
          style={{
            fontSize: '14px',
            fontWeight: '600',
            color: '#F0F0F1'
          }}
        >
          Nova mensagem
        </span>
      </button>
    </div>
  </div>
);

export default MessagesEmptyState;
