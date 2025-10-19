/**
 * Token Expired Notification - Notificação de token expirado
 * Exibe uma notificação quando o token de autenticação expira
 */

import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { AlertTriangle, X } from 'lucide-react';

interface TokenExpiredNotificationProps {
  isOpen: boolean;
  onClose: () => void;
  onRedirectToLogin: () => void;
}

export const TokenExpiredNotification: React.FC<TokenExpiredNotificationProps> = ({
  isOpen,
  onClose,
  onRedirectToLogin
}) => {
  const [countdown, setCountdown] = useState(5);

  useEffect(() => {
    if (!isOpen) return;

    const timer = setInterval(() => {
      setCountdown(prev => {
        if (prev <= 1) {
          onRedirectToLogin();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [isOpen, onRedirectToLogin]);

  if (!isOpen) return null;

  return createPortal(
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 999999,
        padding: '20px'
      }}
    >
      <div
        style={{
          backgroundColor: '#1A1D23',
          border: '1px solid #E66B59',
          borderRadius: '12px',
          padding: '24px',
          maxWidth: '400px',
          width: '100%',
          textAlign: 'center',
          boxShadow: '0px 8px 32px rgba(0, 0, 0, 0.4)'
        }}
      >
        {/* Header */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: '16px'
        }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px'
          }}>
            <AlertTriangle size={24} color="#E66B59" strokeWidth={2} />
            <h3 style={{
              fontFamily: 'Sora',
              fontWeight: 600,
              fontSize: '18px',
              lineHeight: '1.5em',
              color: '#F7F7F7',
              margin: 0
            }}>
              Sessão Expirada
            </h3>
          </div>
          <button
            onClick={onClose}
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              width: '32px',
              height: '32px',
              backgroundColor: 'transparent',
              border: 'none',
              borderRadius: '6px',
              cursor: 'pointer',
              color: '#CECFD2',
              transition: 'background-color 0.2s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'transparent';
            }}
          >
            <X size={20} strokeWidth={2} />
          </button>
        </div>

        {/* Content */}
        <div style={{
          marginBottom: '24px'
        }}>
          <p style={{
            fontFamily: 'Sora',
            fontWeight: 400,
            fontSize: '16px',
            lineHeight: '1.5em',
            color: '#CECFD2',
            margin: '0 0 16px 0'
          }}>
            Sua sessão expirou por motivos de segurança. Você será redirecionado para o login em <strong style={{ color: '#E66B59' }}>{countdown}</strong> segundos.
          </p>
          
          <div style={{
            backgroundColor: '#22262F',
            border: '1px solid #2C2C45',
            borderRadius: '8px',
            padding: '12px',
            marginBottom: '16px'
          }}>
            <p style={{
              fontFamily: 'Sora',
              fontWeight: 400,
              fontSize: '14px',
              lineHeight: '1.43em',
              color: '#94979C',
              margin: 0
            }}>
              💡 Dica: Para evitar isso, mantenha a página ativa ou faça login novamente antes que a sessão expire.
            </p>
          </div>
        </div>

        {/* Actions */}
        <div style={{
          display: 'flex',
          gap: '12px',
          justifyContent: 'center'
        }}>
          <button
            onClick={onClose}
            style={{
              padding: '10px 20px',
              backgroundColor: '#2D2D45',
              border: '1px solid #373A41',
              borderRadius: '8px',
              color: '#CECFD2',
              fontFamily: 'Sora',
              fontWeight: 600,
              fontSize: '14px',
              cursor: 'pointer',
              transition: 'background-color 0.2s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#363946';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = '#2D2D45';
            }}
          >
            Aguardar ({countdown}s)
          </button>
          
          <button
            onClick={onRedirectToLogin}
            style={{
              padding: '10px 20px',
              backgroundColor: '#E66B59',
              border: 'none',
              borderRadius: '8px',
              color: '#FFFFFF',
              fontFamily: 'Sora',
              fontWeight: 600,
              fontSize: '14px',
              cursor: 'pointer',
              transition: 'background-color 0.2s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#F97066';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = '#E66B59';
            }}
          >
            Ir para Login
          </button>
        </div>
      </div>
    </div>,
    document.body
  );
};
