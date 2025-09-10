import React from 'react';
import { X } from "lucide-react";

interface SuccessNotificationProps {
  isVisible: boolean;
  onClose: () => void;
  title: string;
  message: string;
  goalName?: string;
}

export const SuccessNotification: React.FC<SuccessNotificationProps> = ({
  isVisible,
  onClose,
  title,
  message,
  goalName
}) => {
  if (!isVisible) return null;

  return (
    <div
      className="fixed top-6 right-6 z-[10001]"
      style={{
        width: '504px',
        background: 'linear-gradient(212deg, rgba(0, 0, 0, 0.25) 0%, rgba(0, 0, 0, 0.02) 58%)',
        padding: '24px 24px 80px 80px'
      }}
    >
      <div
        className="relative flex items-stretch gap-4"
        style={{
          background: '#212130',
          borderRadius: '12px',
          padding: '16px',
          boxShadow: '0px 2px 2px -1px rgba(255, 255, 255, 0), 0px 4px 6px -2px rgba(255, 255, 255, 0), 0px 12px 16px -4px rgba(255, 255, 255, 0)'
        }}
      >
        {/* Botão de fechar */}
        <button
          onClick={onClose}
          className="absolute top-2 right-2 flex items-center justify-center hover:bg-[#333346] transition-all duration-200 cursor-pointer"
          style={{
            width: '36px',
            height: '36px',
            background: 'transparent',
            border: 'none',
            borderRadius: '8px',
            padding: '8px'
          }}
        >
          <X className="w-5 h-5" style={{ color: '#85888E' }} />
        </button>

        {/* Conteúdo */}
        <div className="flex gap-4 flex-1" style={{ paddingRight: '32px' }}>
          {/* Ícone de sucesso */}
          <div className="relative flex-shrink-0">
            {/* Outline outer */}
            <div
              className="absolute"
              style={{
                width: '38px',
                height: '38px',
                border: '2px solid #17B26A',
                borderRadius: '24px',
                opacity: 0.1,
                top: '-9px',
                left: '-9px'
              }}
            />
            {/* Outline inner */}
            <div
              className="absolute"
              style={{
                width: '28px',
                height: '28px',
                border: '2px solid #17B26A',
                borderRadius: '24px',
                opacity: 0.3,
                top: '-4px',
                left: '-4px'
              }}
            />
            {/* Ícone principal */}
            <div
              className="flex items-center justify-center"
              style={{
                width: '20px',
                height: '20px',
                position: 'relative',
                zIndex: 1
              }}
            >
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M10 18C14.4183 18 18 14.4183 18 10C18 5.58172 14.4183 2 10 2C5.58172 2 2 5.58172 2 10C2 14.4183 5.58172 18 10 18Z"
                  stroke="#17B26A"
                  strokeWidth="1.67"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M6 9L9 12L14 7"
                  stroke="#17B26A"
                  strokeWidth="1.67"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>

          {/* Texto */}
          <div className="flex flex-col gap-3 flex-1" style={{ paddingTop: '2px' }}>
            <div className="flex flex-col gap-1">
              <h3
                style={{
                  fontFamily: 'Sora',
                  fontWeight: 600,
                  fontSize: '14px',
                  lineHeight: '1.4285714285714286em',
                  color: '#FFFFFF'
                }}
              >
                {title}
              </h3>
              <p
                style={{
                  fontFamily: 'Sora',
                  fontWeight: 400,
                  fontSize: '14px',
                  lineHeight: '1.4285714285714286em',
                  color: '#CECFD2'
                }}
              >
                {goalName ? message.replace('{goalName}', goalName) : message}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
