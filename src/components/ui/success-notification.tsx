import React from 'react';
import { X, CheckCircle } from 'lucide-react';

interface SuccessNotificationProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  message: string;
}

export const SuccessNotification: React.FC<SuccessNotificationProps> = ({
  isOpen,
  onClose,
  title,
  message
}) => {
  if (!isOpen) return null;

  return (
    <div
      style={{
        position: 'fixed',
        top: '24px',
        right: '24px',
        zIndex: 999999,
        width: '504px',
        maxWidth: '90vw'
      }}
    >
      <div
        style={{
          background: '#212130',
          border: '1px solid transparent',
          backgroundImage: 'linear-gradient(180deg, rgba(255, 255, 255, 0.12) 0%, rgba(255, 255, 255, 0) 100%)',
          borderRadius: '12px',
          padding: '16px',
          boxShadow: '0px 2px 2px -1px rgba(255, 255, 255, 0), 0px 4px 6px -2px rgba(255, 255, 255, 0), 0px 12px 16px -4px rgba(255, 255, 255, 0)',
          display: 'flex',
          alignItems: 'stretch',
          gap: '16px',
          position: 'relative'
        }}
      >
        {/* Botão de fechar */}
        <button
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '8px',
            right: '8px',
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
            zIndex: 1
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = '#333346';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = 'transparent';
          }}
        >
          <X size={20} />
        </button>

        {/* Ícone de sucesso */}
        <div
          style={{
            width: '20px',
            height: '20px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexShrink: 0,
            position: 'relative'
          }}
        >
          {/* Círculo externo */}
          <div
            style={{
              position: 'absolute',
              width: '38px',
              height: '38px',
              border: '2px solid #17B26A',
              borderRadius: '50%',
              opacity: 0.1,
              top: '-9px',
              left: '-9px'
            }}
          />
          
          {/* Círculo interno */}
          <div
            style={{
              position: 'absolute',
              width: '28px',
              height: '28px',
              border: '2px solid #17B26A',
              borderRadius: '50%',
              opacity: 0.3,
              top: '-4px',
              left: '-4px'
            }}
          />
          
          {/* Ícone de check */}
          <CheckCircle 
            size={20} 
            color="#17B26A" 
            style={{
              position: 'relative',
              zIndex: 1
            }}
          />
        </div>

        {/* Conteúdo */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '12px',
            flex: 1,
            paddingRight: '32px'
          }}
        >
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '4px'
            }}
          >
            <h3
              style={{
                fontFamily: 'Sora',
                fontWeight: 600,
                fontSize: '14px',
                lineHeight: '1.43em',
                color: '#FFFFFF',
                margin: 0
              }}
            >
              {title}
            </h3>
            <p
              style={{
                fontFamily: 'Sora',
                fontWeight: 400,
                fontSize: '14px',
                lineHeight: '1.43em',
                color: '#CECFD2',
                margin: 0
              }}
            >
              {message}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
