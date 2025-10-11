import React from 'react';

interface ModalHeaderProps {
  title: string;
  subtitle: string;
  onClose: () => void;
}

export const ModalHeader: React.FC<ModalHeaderProps> = ({ title, subtitle, onClose }) => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        gap: '16px',
        padding: '24px 16px 16px 24px',
        borderBottom: '1.5px solid #272737',
        backgroundColor: '#252532',
      }}
    >
      <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '4px', flex: 1 }}>
        <h2
          style={{
            fontFamily: 'Sora',
            fontSize: '18px',
            fontWeight: 600,
            lineHeight: '1.56em',
            color: '#F7F7F7',
            margin: 0,
          }}
        >
          {title}
        </h2>
        <p
          style={{
            fontFamily: 'Sora',
            fontSize: '14px',
            fontWeight: 400,
            lineHeight: '1.43em',
            color: '#CECFD2',
            margin: 0,
          }}
        >
          {subtitle}
        </p>
      </div>
      <button
        onClick={onClose}
        style={{
          width: '36px',
          height: '36px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: 'transparent',
          border: 'none',
          cursor: 'pointer',
          borderRadius: '8px',
          padding: '8px',
          flexShrink: 0,
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
            d="M15 5L5 15M5 5L15 15"
            stroke="#F0F0F1"
            strokeWidth="1.67"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
    </div>
  );
};

