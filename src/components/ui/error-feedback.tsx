import React from 'react';

interface ErrorFeedbackProps {
  message: string;
  description?: string;
  onRetry?: () => void;
  variant?: 'default' | 'compact';
}

export const ErrorFeedback: React.FC<ErrorFeedbackProps> = ({
  message,
  description,
  onRetry,
  variant = 'default'
}) => {
  if (variant === 'compact') {
    return (
      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: '8px',
        padding: '12px 16px',
        background: 'rgba(244, 78, 47, 0.1)',
        border: '1px solid rgba(244, 78, 47, 0.3)',
        borderRadius: '8px',
        color: '#F48E2F'
      }}>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10"/>
          <line x1="15" y1="9" x2="9" y2="15"/>
          <line x1="9" y1="9" x2="15" y2="15"/>
        </svg>
        <span style={{
          fontFamily: 'Sora',
          fontWeight: 500,
          fontSize: '14px',
          lineHeight: '1.4em'
        }}>
          {message}
        </span>
      </div>
    );
  }

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '16px',
      padding: '40px 20px',
      background: 'rgba(244, 78, 47, 0.05)',
      border: '1px solid rgba(244, 78, 47, 0.2)',
      borderRadius: '12px',
      textAlign: 'center'
    }}>
      <div style={{
        width: '48px',
        height: '48px',
        background: 'rgba(244, 78, 47, 0.1)',
        borderRadius: '50%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#F48E2F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10"/>
          <line x1="15" y1="9" x2="9" y2="15"/>
          <line x1="9" y1="9" x2="15" y2="15"/>
        </svg>
      </div>
      
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '8px'
      }}>
        <h3 style={{
          fontFamily: 'Sora',
          fontWeight: 600,
          fontSize: '16px',
          lineHeight: '1.5em',
          color: '#F48E2F',
          margin: 0
        }}>
          {message}
        </h3>
        
        {description && (
          <p style={{
            fontFamily: 'Sora',
            fontWeight: 400,
            fontSize: '14px',
            lineHeight: '1.4em',
            color: '#CECFD2',
            margin: 0,
            maxWidth: '300px'
          }}>
            {description}
          </p>
        )}
      </div>

      {onRetry && (
        <button
          onClick={onRetry}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            padding: '8px 16px',
            background: 'rgba(244, 78, 47, 0.1)',
            border: '1px solid rgba(244, 78, 47, 0.3)',
            borderRadius: '6px',
            color: '#F48E2F',
            fontFamily: 'Sora',
            fontWeight: 500,
            fontSize: '14px',
            cursor: 'pointer',
            transition: 'all 0.2s ease'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = 'rgba(244, 78, 47, 0.2)';
            e.currentTarget.style.borderColor = 'rgba(244, 78, 47, 0.5)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = 'rgba(244, 78, 47, 0.1)';
            e.currentTarget.style.borderColor = 'rgba(244, 78, 47, 0.3)';
          }}
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"/>
            <path d="M21 3v5h-5"/>
            <path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"/>
            <path d="M3 21v-5h5"/>
          </svg>
          Tentar novamente
        </button>
      )}
    </div>
  );
};
