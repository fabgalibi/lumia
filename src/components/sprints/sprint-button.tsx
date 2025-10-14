import React from 'react';

interface SprintButtonProps {
  onClick?: () => void;
  disabled?: boolean;
  children?: React.ReactNode;
}

export const SprintButton: React.FC<SprintButtonProps> = ({ 
  onClick, 
  disabled = false, 
  children = 'Visualizar Sprint' 
}) => {
  return (
    <button
      className="flex items-center justify-center w-full gap-1 transition-all duration-200 hover:bg-[#2D2D42] disabled:opacity-50 disabled:cursor-not-allowed"
      style={{
        background: '#2D2D45',
        boxShadow: '0px 1px 2px 0px rgba(255, 255, 255, 0), inset 0px -2px 0px 0px rgba(12, 14, 18, 0.05), inset 0px 0px 0px 1px rgba(12, 14, 18, 0.18)',
        borderRadius: '8px',
        padding: '10px 14px',
      }}
      onClick={onClick}
      disabled={disabled}
    >
      <span
        style={{
          fontFamily: 'Sora',
          fontWeight: 600,
          fontSize: '14px',
          lineHeight: '1.4285714285714286em',
          color: '#CECFD2',
        }}
      >
        {children}
      </span>
    </button>
  );
};
