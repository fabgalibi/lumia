import React, { useState, useEffect } from 'react';
import { X, AlertCircle } from 'lucide-react';

interface ErrorNotificationProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  message: string;
  autoCloseDelay?: number; // em milissegundos, padrão 5000
}

export const ErrorNotification: React.FC<ErrorNotificationProps> = ({
  isOpen,
  onClose,
  title,
  message,
  autoCloseDelay = 5000
}) => {
  const [progress, setProgress] = useState(100);

  useEffect(() => {
    if (!isOpen) return;

    // Reset progress when notification opens
    setProgress(100);

    // Start countdown
    const interval = setInterval(() => {
      setProgress(prev => {
        const newProgress = prev - (100 / (autoCloseDelay / 100));
        if (newProgress <= 0) {
          clearInterval(interval);
          onClose();
          return 0;
        }
        return newProgress;
      });
    }, 100);

    return () => clearInterval(interval);
  }, [isOpen, autoCloseDelay, onClose]);

  if (!isOpen) return null;

  return (
    <div
      style={{
        position: 'fixed',
        top: '24px',
        right: '24px',
        zIndex: 9999999,
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
        {/* Barra de progresso */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: '3px',
            background: 'rgba(249, 112, 102, 0.2)',
            borderRadius: '12px 12px 0 0',
            overflow: 'hidden'
          }}
        >
          <div
            style={{
              height: '100%',
              width: `${progress}%`,
              background: '#F97066',
              transition: 'width 0.1s linear'
            }}
          />
        </div>

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

        {/* Ícone de erro */}
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
              border: '2px solid #F97066',
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
              border: '2px solid #F97066',
              borderRadius: '50%',
              opacity: 0.3,
              top: '-4px',
              left: '-4px'
            }}
          />
          
          {/* Ícone de alerta */}
          <AlertCircle 
            size={20} 
            color="#F97066" 
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
